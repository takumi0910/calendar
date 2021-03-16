import React from 'react'
import Calendar from 'react-calendar';
import Modal from "./components/modal"


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2021, 3, 0),
      isSubmitted: true,
      //月のデータ
      month_days: {},
      selectedDate: null,
      backups: '',
      formvalues: {
        content: '',
      },
      list: []
    };
    this.getTileContent = this.getTileContent.bind(this);
    this.handle = this.handle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Start_timeMinutes = this.Start_timeMinutes.bind(this);
    this.Start_timeHours = this.Start_timeHours.bind(this);
    this.End_timeHours = this.End_timeHours.bind(this);
    this.End_timeMinutes = this.End_timeMinutes.bind(this);
  }

  // state の日付と同じ表記に変換
  getFormatDate(date) {
    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
  }

  //日付ブロックをクリックした際の処理
  handleSubmit_reverse(value) {
    //モーダルの表示
    this.setState({ isSubmitted: false })
    //選択した日の年月日を取得(valueの中には元からクリックされた日付が入ってる)
    this.setState({ selectedDate: value })
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
              <div className='box'>
                <button className={day} id={date.id} onClick={this.deliteState}>×</button>
                <button className={day} id={date.id} onClick={this.editState}>{date.text}</button>
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
    const ids = []
    const id_copy = this.state.month_days[day]

    for (let i = 0; i < this.state.month_days[day].length; i++) {
      ids.push(id_copy[i].id)
    }
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] === key) {
        //console.log(this.state.month_days[day][i].backup[0], this.state.month_days[day][i].backup[1], this.state.month_days[day][i].backup[2])
        this.setState({ backups: [this.state.month_days[day][i].backup[0], this.state.month_days[day][i].backup[1], this.state.month_days[day][i].backup[2]] })
        // console.log(this.state.backups[0], this.state.backups[1], this.state.backups[2])
        this.deliteState(e)
      }
    }
  }

  //変化した際に値を取得します
  handleChange(event) {
    const value = event.target.value
    this.setState({ formvalues: { ...this.state.formvalues, content: value } })
    console.log(this.state.formvalues.content)
  }

  handle() {
    this.setState({ isSubmitted: true })
    console.log('shot');
  }

  getUniqueStr(myStrong) {
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
  }



  //予定を消す処理
  deliteState = (e) => {
    const day = e.target.className
    const key = e.target.id
    const ids = []
    const id_copy = this.state.month_days[day]

    for (let i = 0; i < this.state.month_days[day].length; i++) {
      ids.push(id_copy[i].id)
      console.log(id_copy[i].id)
    }

    for (let i = 0; i < ids.length; i++) {
      if (ids[i] === key) {
        this.state.month_days[day].splice(i);
        break;
      }
    }
  }

  //予定が始まる時間を設定（1時間単位）
  Start_timeHours() {
    let options = []
    for (var i = 0; i <= 23; i++) {
      options.push(<option value={i}>{i}</option>)
    }
    return (
      <select
        onChange={(e) => this.setState({ start_hour: e.target.value })}
      >
        {options}
      </select>
    )
  }

  //予定が始まる時間を設定（1分単位）
  Start_timeMinutes() {
    let options = []
    for (var i = 0; i <= 50; i++) {
      if (i % 10 == 0) {
        options.push(<option value={i}>{i}</option>)
      }
    }
    return (
      <select
        onChange={(e) => this.setState({ start_minitue: e.target.value })}>
        {options}
      </select>
    )
  }

  //予定が終わる時間を設定（1時間単位）
  End_timeHours() {
    let options = []
    let limited_hours = this.state.start_hour

    for (var i = 0; i <= 23; i++) {
      if (limited_hours == null) {
        options.push(<option value={i}>{i}</option>)
      } else if (i >= limited_hours) {
        options.push(<option defaultValue='' value={i}>{i}</option>)
      }
    }
    return (
      <select
        // defaultValue={this.setState({ end_hour: this.state.start_hour })}
        onChange={(e) => this.setState({ end_hour: e.target.value })}
      >
        {options}
      </select>
    )
  }

  //予定が終わる時間を設定（1分単位）
  End_timeMinutes() {
    let options = []
    let limited_minutes = this.state.start_minitue

    for (var i = 0; i <= 50; i++) {
      if (i % 10 == 0 && this.state.start_hour !== this.state.end_hour) {
        options.push(<option value={i}>{i}</option>)
      } else if (i % 10 == 0 && limited_minutes == null) {
        // console.log(limited_minutes)
        options.push(<option value={i}>{i}</option>)
      } else if (i % 10 == 0 && i >= limited_minutes) {
        // console.log(limited_minutes)
        options.push(<option value={i}>{i}</option>)
      }
    }
    return (
      <select
        onChange={(e) => this.setState({ end_minitue: e.target.value })}>
        {options}
      </select>
    )
  }


  //予定追加
  handleSubmit() {
    //モーダルの非表示
    this.setState({ isSubmitted: true })
    //空のnewMonth_daysを作成+元のmonth_daysに追加
    const newMonth_days = []
    const date = this.getFormatDate(new Date(this.state.selectedDate))

    const copySate = this.state.month_days

    const dates = Object.keys(copySate)

    const index = dates.indexOf(date)

    const random_id = this.getUniqueStr()

    if (this.state.end_hour == null) {
      this.setState({ end_hour: this.state.start_hour })
      console.log(this.state.end_hour)
    }

    let start_time = this.state.start_hour + ':' + this.state.start_minitue

    let end_time = this.state.end_hour + ':' + this.state.end_minitue

    if (index !== -1) {
      copySate[date].push({
        id: random_id,
        text: (start_time + '～' + end_time + '\n' + this.state.formvalues.content),
        backup: [start_time, end_time, this.state.formvalues.content]
      })
      this.setState({ start_hour: '' })
      this.setState({ start_minute: '' })
      this.setState({ end_hour: '' })
      this.setState({ end_minitue: '' })
    } else {
      if (this.state.formvalues.content !== "") {
        //newMonth_daysの保存値をセット
        copySate[date] = [
          //formvaluesはformの入力値
          {
            id: random_id,
            text: [start_time + '～' + end_time + this.state.formvalues.content],
            backup: [start_time, end_time, this.state.formvalues.content]
          }
        ]

        this.state.formvalues.content = ''
        this.setState({ start_hour: '' })
        this.setState({ start_minitue: '' })
        this.setState({ end_hour: '' })
        this.setState({ end_minitue: '' })
      } else { }
    }

    this.setState({ month_days: copySate })

  }

  //   if (index !== -1) {
  //     console.log('aru')
  //     console.log(this.state.backups)
  //     if (this.state.formvalues.content !== "" && this.state.formvalues.start !== "" && this.state.formvalues.end !== "") {
  //       copySate[date].push({
  //         id: random_id,
  //         text: (this.state.formvalues.start + '～' + this.state.formvalues.end + '\n' + this.state.formvalues.content),
  //         backup: [this.state.formvalues.start, this.state.formvalues.end, this.state.formvalues.content]
  //       })
  //       this.state.formvalues.content = ''
  //       this.setState({ backups: '' })

  //     } else if (this.state.formvalues.content === "" && this.state.formvalues.start !== "" && this.state.formvalues.end !== "") {
  //       console.log(this.state.backups)

  //       if (this.state.backups) {
  //         copySate[date].push({
  //           id: random_id,
  //           text: [this.state.formvalues.start + '～' + this.state.formvalues.end + this.state.backups[2]],
  //           backup: [this.state.formvalues.start, this.state.formvalues.end, this.state.backups[2]]
  //         })
  //         this.state.formvalues.content = ''
  //         this.setState({ backups: '' })
  //       }
  //       console.log(this.state.backups)

  //     } else if (this.state.formvalues.content === "" && this.state.formvalues.start === "" && this.state.formvalues.end !== "") {
  //       console.log(this.state.backups)

  //       if (this.state.backups) {
  //         copySate[date].push({
  //           id: random_id,
  //           text: [this.state.backups[0] + '～' + this.state.formvalues.end + this.state.backups[2]],
  //           backup: [this.state.backups[0], this.state.formvalues.end, this.state.backups[2]]
  //         })
  //         this.state.formvalues.content = ''
  //         this.setState({ backups: '' })
  //       }

  //     } else if (this.state.formvalues.content !== "" && this.state.formvalues.start !== "" && this.state.formvalues.end === "") {
  //       console.log(this.state.backups)

  //       if (this.state.backups) {
  //         copySate[date].push({
  //           id: random_id,
  //           text: [this.state.formvalues.start + '～' + this.state.backups[1] + this.state.formvalues.content],
  //           backup: [this.state.formvalues.start, this.state.backups[1], this.state.formvalues.content]
  //         })
  //         this.state.formvalues.content = ''
  //         this.setState({ backups: '' })
  //       }
  //     } else if (this.state.formvalues.content !== "" && this.state.formvalues.start === "" && this.state.formvalues.end !== "") {
  //       console.log(this.state.backups)

  //       if (this.state.backups) {
  //         copySate[date].push({
  //           id: random_id,
  //           text: [this.state.backups[0] + '～' + this.state.formvalues.end + this.state.formvalues.content],
  //           backup: [this.state.backups[0], this.state.formvalues.end, this.state.formvalues.content]
  //         })
  //         this.state.formvalues.content = ''
  //         this.setState({ backups: '' })
  //       }

  //     } else if (this.state.formvalues.content !== "" && this.state.formvalues.start === "" && this.state.formvalues.end === "") {
  //       console.log(this.state.backups)

  //       if (this.state.backups) {
  //         copySate[date].push({
  //           id: random_id,
  //           text: [this.state.backups[0] + '～' + this.state.backups[1] + this.state.formvalues.content],
  //           backup: [this.state.backups[0], this.state.backups[1], this.state.formvalues.content]
  //         })
  //         this.state.formvalues.content = ''
  //         this.setState({ backups: '' })
  //       }

  //     } else if (this.state.formvalues.content === "" && this.state.formvalues.start !== "" && this.state.formvalues.end === "") {
  //       console.log(this.state.backups)

  //       if (this.state.backups) {
  //         copySate[date].push({
  //           id: random_id,
  //           text: [this.state.formvalues.start + '～' + this.state.backups[1] + this.state.backups[2]],
  //           backup: [this.state.formvalues.start, this.state.backups[1], this.state.backups[2]]
  //         })
  //         this.state.formvalues.content = ''
  //         this.setState({ backups: '' })
  //       }
  //     } else if (this.state.formvalues.content === "" && this.state.formvalues.start === "" && this.state.formvalues.end === "") {
  //       console.log(this.state.backups)

  //       if (this.state.backups) {
  //         copySate[date].push({
  //           id: random_id,
  //           text: [this.state.backups[0] + '～' + this.state.backups[1] + this.state.backups[2]],
  //           backup: [this.state.backups[0], this.state.backups[1], this.state.backups[2]]
  //         })
  //         this.state.formvalues.content = ''
  //         this.setState({ backups: '' })
  //       }
  //     }
  //   } else {

  //     console.log('nai')
  //     //console.log(this.state.month_days[20210202].map)

  //     if (this.state.formvalues.content !== "") {
  //       //newMonth_daysの保存値をセット
  //       copySate[date] = [
  //         //formvaluesはformの入力値
  //         {
  //           id: random_id,
  //           text: [this.state.formvalues.start + '～' + this.state.formvalues.end + this.state.formvalues.content],
  //           backup: [this.state.formvalues.start, this.state.formvalues.end, this.state.formvalues.content]
  //         }
  //       ]
  //       this.state.formvalues.content = ''
  //       this.setState({ backups: '' })
  //     } else { }
  //   }

  //   this.setState({ month_days: copySate })


  
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
    // console.log(this.state.month_days[20210311][0].id)
    return (
      <>
        <Calendar
          locale="ja-JP"
          value={this.state.date}
          tileContent={title}
          onClickDay={this.handleSubmit_reverse.bind(this)}
        />
        <Modal
          isSubmitted={this.state.isSubmitted}
          selectedDate={this.state.selectedDate}
          formvalues={this.state.formvalues}
          backups={this.state.backups}
          handle={this.handle}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          deliteState={this.deliteState}
          Start_timeHours={this.Start_timeHours}
          Start_timeMinutes={this.Start_timeMinutes}
          End_timeHours={this.End_timeHours}
          End_timeMinutes={this.End_timeMinutes}
        />
        <p>絶対にやること<br />メソッド名を正しく設定する
        </p>
      </>
    );
  }
}