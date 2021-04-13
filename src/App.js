import React from 'react'
import Calendar from 'react-calendar';
import Modal from "./components/Modal"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: true,
      //月のデータ
      month_days: {},
      selectedDate: '',
      backups: '',
      formvalues: '',
      start_hour: '',
      start_minute: '',
      end_hour: '',
      end_minute: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Start_timeMinutes = this.Start_timeMinutes.bind(this);
    this.Start_timeHours = this.Start_timeHours.bind(this);
    this.End_timeHours = this.End_timeHours.bind(this);
    this.End_timeMinutes = this.End_timeMinutes.bind(this);
    this.closeModal = this.closeModal.bind(this);

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

  //モーダル内の×ボタンを押したときの処理
  closeModal() {
    this.setState({ isSubmitted: true })
  }

  //日付の内容を出力
  getTileContent({ date, view }) {
    // 月表示のときのみ
    if (view !== 'month') {
      return null;
    }
    //日付の形式を表示可能に変えてくれる
    const day = this.getFormatDate(date);
    return (
      <p>
        <br />
        {
          this.state.month_days[day] && this.state.month_days[day].map(date => {
            return (
              <div className='plans'>
                <button className={day} id={date.id} title='delete' onClick={this.deleteState}>×</button>
                <button className={day} id={date.id} onClick={this.editState}>{date.text}</button>
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

  //予定の内容を設定
  handleChange(event) {
    const value = event.target.value
    this.setState({ formvalues: value })
  }

  //予定が始まる時間を設定（1時間単位）
  Start_timeHours() {
    let options = []
    for (var i = 0; i <= 23; i++) {
      options.push(<option value={i}>{i}</option>)
    }
    return (
      <select defaultValue={this.state.backups[0]}
        onChange={(e) => {
          this.setState({ start_hour: e.target.value })
        }} >
        {options}
      </select>
    )
  }

  //予定が始まる時間を設定（10分単位）
  Start_timeMinutes() {
    let options = []
    for (var i = 0; i <= 50; i++) {
      let j = ('0' + i).slice(-2);
      if (j % 10 == 0) {
        options.push(<option value={j}>{j}</option>)
      }
    }
    return (
      <select defaultValue={this.state.backups[1]}
        onChange={(e) => {
          this.setState({ start_minute: e.target.value })
        }}>
        {options}
      </select>
    )
  }

  End_timeHours() {
    let options = []
    let limited_h = this.state.start_hour
    let end_h = this.state.end_hour
    let end_dh = this.state.backups[2]

    if (!limited_h && !this.state.backups[0]) {
    } else if (!limited_h && this.state.backups[0]) {
      limited_h = this.state.backups[0]
    }

    if (!end_h && end_dh) {
      end_h = end_dh
    }

    //疑惑の判定
    for (var i = 0; i <= 23; i++) {
      if (i >= limited_h) {
        if (i != end_h) {
          options.push(<option value={i}>{i}</option>)
        }
        else if (i == end_h) {
          options.push(<option value={i} selected>{i}</option>)
        }
      }
    }

    return (
      <select defaultValue={this.state.backups[2]}
        onChange={(e) => {
          this.setState({ end_hour: e.target.value })
        }}>
        {options}
      </select >
    )
  }



  //予定が終わる時間を設定（1分単位）
  End_timeMinutes() {
    let options = []
    let start_h = this.state.start_hour
    let end_m = this.state.end_minute
    let end_h = this.state.end_hour
    let start_dh = this.state.backups[0]
    let start_dm = this.state.backups[1]
    let end_dh = this.state.backups[2]
    let limited_start = ''
    let limited_end = ''
    let limited_minutes = this.state.start_minute

    //分数制限の値の算出
    if (!limited_minutes && start_dm) {
      limited_minutes = start_dm
    } else if (!limited_minutes && start_dm) {
      limited_minutes = 0
    }

    //初めの時間を取得
    if (!start_h && !start_dh) {
      limited_start = ''
    } else if (!start_h && start_dh) {
      limited_start = start_dh
    } else {
      limited_start = start_h
    }

    //終わりの時間を取得
    if (!end_h && !end_dh && !limited_start) {
      limited_end = ''
    } else if (!end_h && end_dh && !limited_start) {
      limited_end = end_dh
    } else if (!end_h && limited_start === start_dh) {
      limited_end = start_dh
    } else if (!end_h && start_h) {
      limited_end = start_h
    } else if (end_h && start_h > end_h) {
      limited_end = limited_start
    } else if (end_h) {
      limited_end = end_h
    }

    if (limited_start !== limited_end) {
      console.log('no limit')
      for (var i = 0; i <= 50; i++) {
        if (i % 10 == 0) {
          let j = ('0' + i).slice(-2);
          if (i != end_m) {
            options.push(<option value={j}>{j}</option>)
          }
          else {
            options.push(<option value={j} selected>{j}</option>)
          }
        }
      }
    } else if (limited_start === limited_end) {
      console.log('limit')
      for (var i = 0; i <= 50; i++) {
        if (i % 10 == 0 && i >= limited_minutes) {
          let j = ('0' + i).slice(-2);
          if (i != end_m) {
            options.push(<option value={j}>{j}</option>)
          }
          else {
            options.push(<option value={j} selected>{j}</option>)
          }
        }
      }
    }

    return (
      <select defaultValue={this.state.backups[3]}
        onChange={(e) => this.setState({ end_minute: e.target.value })}>
        {options}
      </select>
    )
  }

  //予定追加or予定編集処理
  handleSubmit() {
    this.setState({ isSubmitted: true })

    let date = this.getFormatDate(new Date(this.state.selectedDate))
   
    const copySate = this.state.month_days

    const dates = Object.keys(copySate)

    const index = dates.indexOf(date)

    const random_id = this.getUniqueStr()

    console.log(index)
    date = Number(date)


    //stateを変数に代入
    let start_h = this.state.start_hour
    let start_m = this.state.start_minute
    let end_h = this.state.end_hour
    let end_m = this.state.end_minute
    let form = this.state.formvalues

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
      alert('予定を入力して下さい')
    }
    else if (index !== -1) {
      copySate[date].push({
        id: random_id,
        text: (start_time + '～' + end_time + '\n' + form),
        backup: [start_h, start_m, end_h, end_m, form]
      })
    }
    else if (form && start_time !== ':' || end_time !== ':') {
      copySate[date] = [
        {
          id: random_id,
          text: (start_time + '～' + end_time + '\n' + form),
          backup: [start_h, start_m, end_h, end_m, form]
        }
      ]
    }
    this.setState({ month_days: copySate })
    this.setState({ backups: '' })
    this.setState({ start_hour: '' })
    this.setState({ start_minute: '' })
    this.setState({ end_hour: '' })
    this.setState({ end_minute: '' })
    this.setState({ formvalues: '' })
  }

  //予定を編集する処理
  editState = (e) => {
    const day = e.target.className
    const key = e.target.id
    const onedays = this.state.month_days[day]

    for (let i = 0; i < onedays.length; i++) {
      let oneday = onedays[i]
      if (oneday.id === key) {
        this.setState({ backups: [oneday.backup[0], oneday.backup[1], oneday.backup[2], oneday.backup[3], oneday.backup[4],] })
        this.deleteState(e)
      }
    }
  }

  //予定を消す処理
  deleteState = (e) => {
    const day = e.target.className
    const key = e.target.id
    const id_copy = this.state.month_days[day]

    this.setState({ start_hour: '' })
    this.setState({ start_minute: '' })
    this.setState({ end_hour: '' })
    this.setState({ end_minute: '' })
    this.setState({ formvalues: '' })

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
    // localStorage.clear()
  }

  render() {
    const title = ({ date, view }) => this.getTileContent({ date, view })
    console.log(this.state)
    return (
      <>
        <Calendar
          locale="ja-JP"
          tileContent={title}
          value={this.state.date}
          onClickDay={this.openModal.bind(this)}
        />
        <Modal
          isSubmitted={this.state.isSubmitted}
          selectedDate={this.state.selectedDate}
          formvalues={this.state.formvalues}
          backups={this.state.backups}
          closeModal={this.closeModal}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          deleteState={this.deleteState}
          Start_timeHours={this.Start_timeHours}
          Start_timeMinutes={this.Start_timeMinutes}
          End_timeHours={this.End_timeHours}
          End_timeMinutes={this.End_timeMinutes}
        />
      </>
    );
  }
}