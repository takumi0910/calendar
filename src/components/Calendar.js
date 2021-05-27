import React from 'react'
import Calendar from 'react-calendar';
import Modal from "./CalendarParts/Modal"
import firebase from '../Firebase';

export default class MainCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: true,
      month_days: {},
      selectedDate: '',
      backups: '',
      formValues: '',
      startHour: '',
      startMinute: '',
      endHour: '',
      endMinute: '',
      backColor: '',
      title: ''
    };
  }

  Button = () => {
    var db = firebase.firestore();
    db.collection("cities").add({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
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
    this.setState({ startHour: '' })
    this.setState({ startMinute: '' })
    this.setState({ endHour: '' })
    this.setState({ endMinute: '' })
    this.setState({ formValues: '' })
    this.setState({ backColor: '' })
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
                <button className={day} id={date.id} title='delete' style={{ backgroundColor: date.backColor }} onClick={this.deleteState}>×</button>
                <button className={day} id={date.id} style={{ backgroundColor: date.backColor }} onClick={this.editState}>{date.text}</button>
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

  setStartHour(startHour) {
    this.setState({ startHour });
  }

  setStartMinute(startMinute) {
    this.setState({ startMinute });
  }

  setEndHour(endHour) {
    this.setState({ endHour })
  }

  setEndMinute(endMinute) {
    this.setState({ endMinute });
  }

  setTileColor(backColor) {
    this.setState({ backColor });
  }

  handleChange(event) {
    const value = event.target.value
    this.setState({ formValues: value })
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
    console.log(this.state)
    const title = ({ date, view }) => this.getTileContent({ date, view })
    return (
      <>
        <Calendar
          locale="ja-JP"
          tileContent={title}
          value={this.state.date}
          onClickDay={this.openModal.bind(this)}
        />
        <button onClick={this.Button}>button</button>
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
      </>
    );
  }
}