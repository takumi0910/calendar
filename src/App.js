import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calendar from 'react-calendar';
import Modal from "./components/Modal"
import Login from './components/login/Login';
import Auth from './components/login/Auth';
import Nav from './components/Nav'
import SignUp from './components/login/SignUp';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: true,
      month_days: {},
      selectedDate: '',
      backups: '',
      formvalues: '',
      start_hour: '',
      start_minute: '',
      end_hour: '',
      end_minute: '',
      back_color: '',
      title: ''
    };
  }

  // state の日付と同じ表記に変換
  getFormatDate(date) {
    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
  }

  //日付ブロックをクリックした時の処理
  openModal(value, e) {
    if (e.target.title === 'delete') {
      this.setState({ isSubmitted: true })
    } else {
      this.setState({ isSubmitted: false })
    }
    this.setState({ selectedDate: value })
  }

  //モーダルを閉じた際に使い回すstateの更新処理
  inputDelete() {
    this.setState({ start_hour: '' })
    this.setState({ start_minute: '' })
    this.setState({ end_hour: '' })
    this.setState({ end_minute: '' })
    this.setState({ formvalues: '' })
    this.setState({ back_color: '' })
  }

  //モーダル内の×ボタンを押したときの処理
  closeModal() {
    this.setState({ isSubmitted: true })
    this.setState({ backups: '' })
    this.inputDelete()
  }

  //モーダル表示中にモーダル外を押した際の処理
  keepModal(e) {
    let modal_class = e.target.className
    if (modal_class === 'modal-back') {
      this.closeModal()
    }
  }

  //カレンダーで予定を出力
  getTileContent({ date, view }) {
    if (view !== 'month') {
      return null;
    }
    const day = this.getFormatDate(date);
    return (
      <p>
        <br />
        {
          this.state.month_days[day] && this.state.month_days[day].map(date => {
            return (
              <div className='plans'>
                <button className={day} id={date.id} title='delete' style={{ backgroundColor: date.back_color }} onClick={this.deleteState}>×</button>
                <button className={day} id={date.id} style={{ backgroundColor: date.back_color }} onClick={this.editState}>{date.text}</button>
                <br />
              </div>
            )
          })
        }
      </p>
    );
  }

  //予定を編集する処理
  editState = (e) => {
    const day = e.target.className
    const key = e.target.id
    const onedays = this.state.month_days[day]

    for (let i = 0; i < onedays.length; i++) {
      let oneday = onedays[i]
      if (oneday.id === key) {
        this.setState({ backups: [oneday.backup[0], oneday.backup[1], oneday.backup[2], oneday.backup[3], oneday.backup[4], oneday.back_color] })
        this.deleteState(e)
      }
    }
  }

  //予定を消す処理
  deleteState = (e) => {
    const day = e.target.className
    const key = e.target.id
    const id_copy = this.state.month_days[day]
    this.inputDelete()

    for (let i = 0; i < id_copy.length; i++) {
      if (id_copy[i].id === key) {
        this.state.month_days[day].splice(i, 1);
        break;
      }
    }
  }

  setStartHour(start_hour) {
    this.setState({ start_hour });
  }

  setStartMinute(start_minute) {
    this.setState({ start_minute });
  }

  setEndHour(end_hour) {
    this.setState({ end_hour })
  }

  setEndMinute(end_minute) {
    this.setState({ end_minute });
  }

  setTileColor(back_color) {
    this.setState({ back_color });
  }

  handleChange(event) {
    const value = event.target.value
    this.setState({ formvalues: value })
  }

  setPlans(month_days) {
    this.setState({ month_days })
  }

  handleClose() {
    this.setState({ isSubmitted: true })
  }

  handleDelete() {
    this.setState({ backups: '' })
  }

  // もし前回のデータがあったら、ローカルストレージの値を取得し、更新する
  componentDidMount() {
    if (localStorage.app) {
      const saveDate = JSON.parse(localStorage.app);
      this.setState({
        month_days: saveDate.month_days,
      })
    }
  }

  // stateが変更されたら実行
  componentDidUpdate() {
    localStorage.setItem('app', JSON.stringify(this.state));
  }

  render() {
    console.log(this.state.date)
    const title = ({ date, view }) => this.getTileContent({ date, view })
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Auth>
            <Nav />
            <Calendar
              locale="ja-JP"
              tileContent={title}
              value={this.state.date}
              onClickDay={this.openModal.bind(this)}
            />
            <Modal
              getFormatDate={this.getFormatDate.bind(this)}
              handleChange={this.handleChange.bind(this)}
              setStartHour={this.setStartHour.bind(this)}
              setStartMinute={this.setStartMinute.bind(this)}
              setEndHour={this.setEndHour.bind(this)}
              setEndMinute={this.setEndMinute.bind(this)}
              setTileColor={this.setTileColor.bind(this)}
              closeModal={this.closeModal.bind(this)}
              keepModal={this.keepModal.bind(this)}
              setPlans={this.setPlans.bind(this)}
              handleClose={this.handleClose.bind(this)}
              handleDelete={this.handleDelete.bind(this)}
              inputDelete={this.inputDelete.bind(this)}
              origin={this.state}
              date={this.date}
            />
          </Auth>
        </Switch>
      </BrowserRouter>
    );
  }
}