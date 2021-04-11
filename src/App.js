import React from 'react'
import Calendar from 'react-calendar';
import Modal from "./components/Modal"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: true,
      //月のデータ
      month_days: '',
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
    //×ボタンを押された際の処理
    if (e.target.title === 'delite') {
      this.setState({ isSubmitted: true })
    } else {
      //×ボタン以外の日付ブロックをクリックした際の処理
      this.setState({ isSubmitted: false })
    }

    //選択した日の年月日を取得
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

    if (limited_h === '' && this.state.backups[0] === undefined) {
      //
    } else if (limited_h === '' && this.state.backups[0] !== '') {
      limited_h = this.state.backups[0]
    }

    for (var i = 0; i <= 23; i++) {
      if (i >= limited_h) {
        if (i !== end_h) {
          options.push(<option value={i}>{i}</option>)
        }
        else if (i === end_h) {
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
    let limited_minutes = this.state.start_minute
    let start_h = this.state.start_hour
    let end_c = this.state.end_minute
    let end_s = this.state.backups[3]
    let end_h = this.state.end_hour
    let end_m = this.state.backups[1]
    let start_dh = this.state.backups[0]
    let end_dh = this.state.backups[2]
    let decide = 'a'

    if (limited_minutes === '' && end_m !== undefined) {
      limited_minutes = end_m
    }

    if (end_c === '' && end_s !== undefined) {
      end_c = end_s
    }


    //全部空なので同じ値
    if (start_h === '' && end_h === '' && start_dh === undefined && end_dh === undefined) {
      decide = 'b'
    }
    //backups同士の値が同じ
    else if (start_h === '' && end_h === '' && start_dh !== undefined && end_dh !== undefined && start_dh === end_dh) {
      decide = 'c'
    }
    //end_hが空、ただstart_hとbackupが同じ
    else if (start_h !== '' && end_h === '' && start_dh !== undefined && end_dh !== undefined && start_h === end_dh) {
      decide = 'd'
    }
    //start_hが空、ただend_hとbackupが同じ
    else if (start_h === '' && end_h !== '' && start_dh !== undefined && end_dh !== undefined && start_dh === end_h) {
      decide = 'e'
    }
    else if (start_h !== '' && end_h === '') {
      decide = 'f'
    }//どっちも値自体は入っていて違う値 
    else if (start_h !== '' && end_h !== '' && start_h !== end_h) {
      decide = 'g'
    } //どっちも値自体は入っていて同じ値 
    else if (start_h !== '' && end_h !== '' && start_h === end_h) {
      decide = 'h'
    }


    if (decide === 'b' || decide === 'f' || decide === 'h') {
      for (var i = 0; i <= 50; i++) {
        if (i % 10 == 0 && i >= limited_minutes) {
          let j = ('0' + i).slice(-2);
          if (i != end_c) {
            options.push(<option value={j}>{j}</option>)
          }
          else {
            options.push(<option value={j} selected>{j}</option>)
          }
        }
      }
    } else if (decide === 'a' || decide === 'g') {
      for (var i = 0; i <= 50; i++) {
        if (i % 10 == 0) {
          let j = ('0' + i).slice(-2);
          if (i != end_c) {
            options.push(<option value={j}>{j}</option>)
          }
          else {
            options.push(<option value={j} selected>{j}</option>)
          }
        }
      }
    } else if (decide === 'c' || decide === 'd' || decide === 'e') {
      for (var i = 0; i <= 50; i++) {
        if (i % 10 == 0 && i >= limited_minutes) {
          let j = ('0' + i).slice(-2);
          if (i != end_c) {
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
    //モーダルの非表示
    this.setState({ isSubmitted: true })

    const date = this.getFormatDate(new Date(this.state.selectedDate))

    const copySate = this.state.month_days

    const dates = Object.keys(copySate)

    const index = dates.indexOf(date)

    const random_id = this.getUniqueStr()

    //stateを変数に代入
    let start_h = this.state.start_hour
    let start_m = this.state.start_minute
    let end_h = this.state.end_hour
    let end_m = this.state.end_minute
    let form = this.state.formvalues

    // 処理を関数化して引数でできないかな
    // 予定が始まる時間が空か確かめる（1時間単位）
    if (start_h === '' && this.state.backups[0] !== undefined) {
      start_h = this.state.backups[0]
    } else if (start_h === '' && this.state.backups[0] == undefined) {
      start_h = '0'
    }

    //予定が始まる時間が空か確かめる（1分単位）
    if (start_m === '' && this.state.backups[1] !== undefined) {
      start_m = this.state.backups[1]
    } else if (start_m === '' && this.state.backups[1] == undefined) {
      start_m = '00'
    }

    //予定が終わる時間が空か確かめる（1時間単位）
    if (end_h === '' && this.state.backups[2] !== undefined) {
      if (this.state.start_hour > this.state.backups[2]) {
        end_h = this.state.start_hour
      } else {
        end_h = this.state.backups[2]
      }

    } else if (end_h === '' && this.state.backups[2] == undefined && start_h !== '') {
      end_h = start_h
    }

    if (end_h < start_h) {
      end_h = start_h
    }

    //予定が終わる時間が空か確かめる（1分単位）
    if (end_m === '' && this.state.backups[3] !== undefined) {
      end_m = this.state.backups[3]
    } else if (end_m === '' && this.state.backups[3] == undefined && start_m !== '') {
      end_m = start_m
    }

    //入力内容が空か確かめる
    if (form === '' && this.state.backups[4] !== '') {
      form = this.state.backups[4]
    } else if (form === '' && this.state.backups[4] == '') {
      form = ''
    }

    if (start_h === end_h && start_m > end_m) {
      end_m = start_m
    }




    //ここから下はhandleSubmit短縮不能

    //予定の開始時間と終了時間を出力する表示に変更
    let start_time = start_h + ':' + start_m
    let end_time = end_h + ':' + end_m


    if (form === undefined && this.state.backups[4] === undefined) {
      alert('予定を入力して下さい')
    }
    else if (index !== -1) {
      copySate[date].push({
        id: random_id,
        text: (start_time + '～' + end_time + '\n' + form),
        backup: [start_h, start_m, end_h, end_m, form]
      })
    }
    else if (form !== "" && start_time !== ':' || end_time !== ':') {
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