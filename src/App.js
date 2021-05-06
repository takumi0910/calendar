import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calendar from 'react-calendar';
import Modal from "./components/modal"
import Login from './components/login/Login';
import Auth from './components/login/Auth';
import Nav from './components/Nav'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: true,
      month_days: {},
      selectedDate: '',
      backups: '',
      formvalues: '',
      fixed_time: '',
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
      this.setState({ isSubmitted: true })
      this.setState({ backups: '' })
      this.inputDelete()
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

  //ランダムなidの作成
  getUniqueStr(myStrong) {
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
  }

  //予定追加or予定編集処理
  handleSubmit() {
    this.setState({ isSubmitted: true })

    let date = this.getFormatDate(new Date(this.state.selectedDate))

    const copySate = this.state.month_days

    const dates = Object.keys(copySate)

    const index = dates.indexOf(date)

    const random_id = this.getUniqueStr()

    date = Number(date)


    //stateを変数に代入
    let start_h = this.state.start_hour
    let start_m = this.state.start_minute
    let end_h = this.state.end_hour
    let end_m = this.state.end_minute
    let form = this.state.formvalues
    let color = ''

    // 予定が始まる時間が空か確かめる（1時間単位）
    if (!start_h && this.state.backups[0]) {
      start_h = this.state.backups[0]
    } else if (!start_h && !this.state.backups[0]) {
      start_h = '0'
    }

    //予定が始まる時間が空か確かめる（1分単位）
    if (!start_m && this.state.backups[1]) {
      start_m = this.state.backups[1]
    } else if (!start_m && !this.state.backups[1]) {
      start_m = '00'
    }

    //予定が終わる時間が空か確かめる（1時間単位）
    if (!end_h && this.state.backups[2]) {
      if (this.state.start_hour > this.state.backups[2]) {
        end_h = this.state.start_hour
      } else {
        end_h = this.state.backups[2]
      }
    } else if (!end_h && !this.state.backups[2] && start_h) {
      end_h = start_h
    }

    //予定が終わる時間が空か確かめる（1分単位）
    if (!end_m && this.state.backups[3]) {
      end_m = this.state.backups[3]
    } else if (!end_m && !this.state.backups[3] && start_m) {
      end_m = start_m
    }

    //予定内容が空か確かめる
    if (!form && this.state.backups[4]) {
      form = this.state.backups[4]
    } else if (!form && !this.state.backups[4]) {
      form = ''
    }


    if (!this.state.back_color && this.state.backups[5]) {
      color = this.state.backups[5]
    } else if (!this.state.back_color && !this.state.backups[5]) {
      color = 'black'
    } else {
      color = this.state.back_color
    }

    //入力処理の間違いを防ぐ
    if (end_h < start_h) {
      end_h = start_h
    }
    if (start_h === end_h && start_m > end_m) {
      end_m = start_m
    }

    //予定の開始時間と終了時間を出力する表示に変更
    let start_time = start_h + ':' + start_m
    let end_time = end_h + ':' + end_m


    if (!form && !this.state.backups[4]) {
      this.setState({ form_error: true })
    }
    else if (index !== -1) {
      copySate[date].push({
        id: random_id,
        text: (start_time + '～' + end_time + '\n' + form),
        backup: [start_h, start_m, end_h, end_m, form],
        back_color: color
      })
    }
    else if (form && start_time !== ':' || end_time !== ':') {
      copySate[date] = [
        {
          id: random_id,
          text: (start_time + '～' + end_time + '\n' + form),
          backup: [start_h, start_m, end_h, end_m, form],
          back_color: color
        }
      ]
    }
    this.setState({ month_days: copySate })
    this.setState({ backups: '' })
    this.inputDelete()
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
    // ローカルストレージにステートの情報を保存
    localStorage.setItem('app', JSON.stringify(this.state));
  }

  Set_starthour(start_hour) {
    this.setState({ start_hour });
  }

  Set_startminute(start_minute) {
    this.setState({ start_minute });
  }

  Set_endhour(end_hour) {
    this.setState({ end_hour })
  }

  Set_endminute(end_minute) {
    this.setState({ end_minute });
  }

  Set_tileColor(back_color) {
    this.setState({ back_color });
  }

  Set_fixed_sh(){
    this.setState({ })
  }

  //予定の内容を設定
  handleChange(event) {
    const value = event.target.value
    this.setState({ formvalues: value })
  }

  render() {
    const title = ({ date, view }) => this.getTileContent({ date, view })
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Auth>
            <Nav />
            <Calendar
              locale="ja-JP"
              tileContent={title}
              value={this.state.date}
              onClickDay={this.openModal.bind(this)}
            />
            <Modal
              handleChange={this.handleChange.bind(this)}
              handleSubmit={this.handleSubmit.bind(this)}
              Set_starthour={this.Set_starthour.bind(this)}
              Set_startminute={this.Set_startminute.bind(this)}
              Set_endhour={this.Set_endhour.bind(this)}
              Set_endminute={this.Set_endminute.bind(this)}
              Set_tileColor={this.Set_tileColor.bind(this)}
              getUniqueStr={this.getUniqueStr.bind(this)}
              closeModal={this.closeModal.bind(this)}
              keepModal={this.keepModal.bind(this)}
              origin={this.state}
            />
          </Auth>
        </Switch>
      </BrowserRouter>
    );
  }
}