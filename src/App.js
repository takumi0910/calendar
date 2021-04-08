import React from 'react'
import Calendar from 'react-calendar';
import Modal from "./components/modal"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: true,
      //月のデータ
      month_days: '',
      selectedDate: null,
      backups: '',
      formvalues: '',
      start_hour: '',
      start_minitue: '',
      end_hour: '',
      end_minitue: '',
    };
    // this.getTileClass = this.getTileClass.bind(this)
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

  //日付ブロックをクリックした際の処理
  handleSubmit_reverse(value, e) {
    //モーダルの表示

    if (e.target.title === 'delite') {
      this.setState({ isSubmitted: true })
    } else {
      this.setState({ isSubmitted: false })
    }

    //選択した日の年月日を取得(valueの中には元からクリックされた日付が入ってる)
    this.setState({ selectedDate: value })
  }

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
                <button className={day} id={date.id} title='delite' onClick={this.deliteState}>×</button>
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

  //予定の値を設定
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

  //予定が始まる時間を設定（1分単位）
  Start_timeMinutes() {
    let options = []
    for (var i = 0; i <= 50; i++) {
      if (i % 10 == 0) {
        options.push(<option value={i}>{i}</option>)
      }
    }
    return (
      <select defaultValue={this.state.backups[1]}
        onChange={(e) => {
          this.setState({ start_minitue: e.target.value })
        }}>
        {options}
      </select>
    )
  }

  End_timeHours() {
    let options = []
    let limited_hours = this.state.start_hour
    let end_h = this.state.end_hour
    if (limited_hours === '' && this.state.backups[0] === undefined) {
      //処理なし⇒初めて予定を入れる際に時間の入力制限をかけたくないので必要なif文
    } else if (limited_hours === '' && this.state.backups[0] !== '') {
      limited_hours = this.state.backups[0]
      // this.setState({end_hour: limited_hours})
    }

    if (end_h === '' && this.state.backups[2] !== undefined) {
      end_h = this.state.backups[2]
    }

    for (var i = 0; i <= 23; i++) {
      if (i >= limited_hours) {
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
        value={end_h}
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
    let limited_minutes = this.state.start_minitue
    let start_h = this.state.start_hour
    let end_c = this.state.end_minitue
    let end_s = this.state.backups[3]
    let end_h = this.state.end_hour
    let end_m = this.state.backups[1]
    let start_dh = this.state.backups[0]
    let end_dh = this.state.backups[2]
    let decide = 'a'

    if (limited_minutes === '' && end_m !== undefined) {
      limited_minutes = end_m
      console.log('change')
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
      // console.log('b')
    }//どっちも値自体は入っていて違う値 
    else if (start_h !== '' && end_h !== '' && start_h !== end_h) {
      decide = 'g'
      // console.log('c')
    } //どっちも値自体は入っていて同じ値 
    else if (start_h !== '' && end_h !== '' && start_h === end_h) {
      decide = 'h'
      // console.log('d')
    }


    console.log(decide)


    if (decide === 'b' || decide === 'f' || decide === 'h') {
      for (var i = 0; i <= 50; i++) {
        if (i % 10 == 0 && i >= limited_minutes) {
          if (i != end_c) {
            options.push(<option value={i}>{i}</option>)
            console.log('shot')
            console.log(i)
            console.log(end_c)
          }
          else {
            options.push(<option value={i} selected>{i}</option>)
            console.log('hat')
          }
        }
      }
    } else if (decide === 'a' || decide === 'g') {
      for (var i = 0; i <= 50; i++) {
        if (i % 10 == 0) {
          if (i != end_c) {
            options.push(<option value={i}>{i}</option>)
            console.log('shot')
          }
          else {
            options.push(<option value={i} selected>{i}</option>)
            console.log('hat')
          }
        }
      }
    } else if (decide === 'c' || decide === 'd' || decide === 'e') {
      for (var i = 0; i <= 50; i++) {
        if (i % 10 == 0 && i >= limited_minutes) {
          if (i != end_c) {
            options.push(<option value={i}>{i}</option>)
            console.log('shot')
          }
          else {
            options.push(<option value={i} selected>{i}</option>)
            console.log('hat')
          }
        }
      }
    }

    return (
      <select defaultValue={this.state.backups[3]}
        onChange={(e) => this.setState({ end_minitue: e.target.value })}>
        {options}
      </select>
    )
  }

  //予定追加or予定編集処理
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

    //stateを変数に代入
    let start_h = this.state.start_hour
    let start_m = this.state.start_minitue
    let end_h = this.state.end_hour
    let end_m = this.state.end_minitue
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
      console.log('hothot')
      end_m = start_m
    }

    //予定の開始時間と終了時間を出力する表示に変更
    let start_time = start_h + ':' + start_m
    let end_time = end_h + ':' + end_m

    if (this.state.delite === 'd') { }
    else if (this.state.formvalues === '' && this.state.backups[4] === undefined) { alert('予定を入力して下さい') }
    else if (index !== -1) {
      copySate[date].push({
        id: random_id,
        text: (start_time + '～' + end_time + '\n' + form),
        backup: [start_h, start_m, end_h, end_m, form]
      })
    }
    else {
      if (this.state.delite === 'd') { }
      else if (this.state.formvalues === '' && this.state.backups[4] === undefined) { alert('予定を入力して下さい') }
      else if (this.state.formvalues !== "" && start_time !== ':' || end_time !== ':') {
        //newMonth_daysの保存値をセット
        copySate[date] = [
          //formvaluesはformの入力値
          {
            id: random_id,
            text: (start_time + '～' + end_time + '\n' + form),
            backup: [start_h, start_m, end_h, end_m, form]
          }
        ]
      }
    }
    this.setState({ month_days: copySate })
    this.setState({ backups: '' })
    this.setState({ start_hour: '' })
    this.setState({ start_minitue: '' })
    this.setState({ end_hour: '' })
    this.setState({ end_minitue: '' })
    this.setState({ formvalues: '' })
    this.setState({ delite: '' })
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
        this.setState({ backups: [this.state.month_days[day][i].backup[0], this.state.month_days[day][i].backup[1], this.state.month_days[day][i].backup[2], this.state.month_days[day][i].backup[3], this.state.month_days[day][i].backup[4],] })
        this.deliteState(e)
        this.setState({ delite: '' })
      }
    }
  }

  //予定を消す処理
  deliteState = (e) => {
    const day = e.target.className
    console.log(day)
    const key = e.target.id
    const ids = []
    const id_copy = this.state.month_days[day]
    this.setState({ start_hour: '' })
    this.setState({ start_minitue: '' })
    this.setState({ end_hour: '' })
    this.setState({ end_minitue: '' })
    this.setState({ formvalues: '' })


    for (let i = 0; i < this.state.month_days[day].length; i++) {
      ids.push(id_copy[i].id)
    }

    for (let i = 0; i < ids.length; i++) {
      if (ids[i] === key) {
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
    console.log(this.state)
    const title = ({ date, view }) => this.getTileContent({ date, view })
    return (
      <>
        <Calendar
          locale="ja-JP"
          value={this.state.date}
          tileContent={title}
          tileClassName={this.getTileClass}
          onClickDay={this.handleSubmit_reverse.bind(this)}
          navigationAriaLabel='shot'
        />
        <Modal
          isSubmitted={this.state.isSubmitted}
          selectedDate={this.state.selectedDate}
          formvalues={this.state.formvalues}
          backups={this.state.backups}
          closeModal={this.closeModal}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          deliteState={this.deliteState}
          Start_timeHours={this.Start_timeHours}
          Start_timeMinutes={this.Start_timeMinutes}
          End_timeHours={this.End_timeHours}
          End_timeMinutes={this.End_timeMinutes}
        />
      </>
    );
  }
}