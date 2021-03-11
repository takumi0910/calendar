import React from 'react'
import Calendar from 'react-calendar';
import { Provider } from "react-redux"
import store from "./store/index";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2021, 3, 0),
      data :[
        { value: '1', label: '9:00-12:00' },
        { value: '2', label: '12:00-14:00' },
        { value: '3', label: '14:00-16:00' },
        { value: '4', label: '16:00-18:00' },
        { value: '5', label: '18:00-20:00' },
        { value: '6', label: '20:00-21:00' },
      ],
      isSubmitted: true,
      //月のデータ
      month_days: {
        // 20210202: [
        //   {
        //     id: '1',
        //     text: ['12:30～14:00 節分'],
        //     backup: ['12:30', '14:00', '節分']
        //   },
        //   {
        //     id: '2',
        //     text: ['15:30～17:00 節分'],
        //     backup: ['15:30', '17:00', '節分']
        //   }
        // ],
        // 20210228: [{ text: ['App完成'] }],
      },
      selectedDate: null,
      backups: '',
      formvalues: {
        content: '',
        start: '',
        end: ''
      },
      list: []
    };

    this.getTileContent = this.getTileContent.bind(this);
  }

  // state の日付と同じ表記に変換
  getFormatDate(date) {

    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
  }

  //予定を消す処理
  deliteState = (e) => {
    const day = e.target.className
    const key = e.target.id
    const ids = []
    const id_copy = this.state.month_days[day]

    for (let i = 0; i < this.state.month_days[day].length; i++) {
      ids.push(id_copy[i].id)
    }

    for (let i = 0; i < ids.length; i++) {
      if (ids[i] === key) {
        this.state.month_days[day].splice(i, 1);
        this.setState({ isSubmitted: true })
        break
      }
    }
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

  //id用の乱数作成
  getUniqueStr(myStrong) {
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
  }

  handleChange(event) {
    const value = event.target.value
    this.setState({ formvalues: { ...this.state.formvalues, content: value } })
  }

  handleStart(event) {
    const value = event.target.value
    this.setState({ formvalues: { ...this.state.formvalues, start: value } })
  }

  handleEnd(event) {
    const value = event.target.value
    this.setState({ formvalues: { ...this.state.formvalues, end: value } })
  }

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

    if (index !== -1) {
      console.log('aru')
      console.log(this.state.backups)
      if (this.state.formvalues.content !== "" && this.state.formvalues.start !== "" && this.state.formvalues.end !== "") {
        copySate[date].push({
          id: random_id,
          text: (this.state.formvalues.start + '～' + this.state.formvalues.end + '\n' + this.state.formvalues.content),
          backup: [this.state.formvalues.start, this.state.formvalues.end, this.state.formvalues.content]
        })
        this.state.formvalues.content = ''
        this.setState({ backups: '' })

      } else if (this.state.formvalues.content === "" && this.state.formvalues.start !== "" && this.state.formvalues.end !== "") {
        console.log(this.state.backups)

        if (this.state.backups) {
          copySate[date].push({
            id: random_id,
            text: [this.state.formvalues.start + '～' + this.state.formvalues.end + this.state.backups[2]],
            backup: [this.state.formvalues.start, this.state.formvalues.end, this.state.backups[2]]
          })
          this.state.formvalues.content = ''
          this.setState({ backups: '' })
        }
        console.log(this.state.backups)

      } else if (this.state.formvalues.content === "" && this.state.formvalues.start === "" && this.state.formvalues.end !== "") {
        console.log(this.state.backups)

        if (this.state.backups) {
          copySate[date].push({
            id: random_id,
            text: [this.state.backups[0] + '～' + this.state.formvalues.end + this.state.backups[2]],
            backup: [this.state.backups[0], this.state.formvalues.end, this.state.backups[2]]
          })
          this.state.formvalues.content = ''
          this.setState({ backups: '' })
        }

      } else if (this.state.formvalues.content !== "" && this.state.formvalues.start !== "" && this.state.formvalues.end === "") {
        console.log(this.state.backups)

        if (this.state.backups) {
          copySate[date].push({
            id: random_id,
            text: [this.state.formvalues.start + '～' + this.state.backups[1] + this.state.formvalues.content],
            backup: [this.state.formvalues.start, this.state.backups[1], this.state.formvalues.content]
          })
          this.state.formvalues.content = ''
          this.setState({ backups: '' })
        }
      } else if (this.state.formvalues.content !== "" && this.state.formvalues.start === "" && this.state.formvalues.end !== "") {
        console.log(this.state.backups)

        if (this.state.backups) {
          copySate[date].push({
            id: random_id,
            text: [this.state.backups[0] + '～' + this.state.formvalues.end + this.state.formvalues.content],
            backup: [this.state.backups[0], this.state.formvalues.end, this.state.formvalues.content]
          })
          this.state.formvalues.content = ''
          this.setState({ backups: '' })
        }

      } else if (this.state.formvalues.content !== "" && this.state.formvalues.start === "" && this.state.formvalues.end === "") {
        console.log(this.state.backups)

        if (this.state.backups) {
          copySate[date].push({
            id: random_id,
            text: [this.state.backups[0] + '～' + this.state.backups[1] + this.state.formvalues.content],
            backup: [this.state.backups[0], this.state.backups[1], this.state.formvalues.content]
          })
          this.state.formvalues.content = ''
          this.setState({ backups: '' })
        }

      } else if (this.state.formvalues.content === "" && this.state.formvalues.start !== "" && this.state.formvalues.end === "") {
        console.log(this.state.backups)

        if (this.state.backups) {
          copySate[date].push({
            id: random_id,
            text: [this.state.formvalues.start + '～' + this.state.backups[1] + this.state.backups[2]],
            backup: [this.state.formvalues.start, this.state.backups[1], this.state.backups[2]]
          })
          this.state.formvalues.content = ''
          this.setState({ backups: '' })
        }
      } else if (this.state.formvalues.content === "" && this.state.formvalues.start === "" && this.state.formvalues.end === "") {
        console.log(this.state.backups)

        if (this.state.backups) {
          copySate[date].push({
            id: random_id,
            text: [this.state.backups[0] + '～' + this.state.backups[1] + this.state.backups[2]],
            backup: [this.state.backups[0], this.state.backups[1], this.state.backups[2]]
          })
          this.state.formvalues.content = ''
          this.setState({ backups: '' })
        }
      }
    } else {

      console.log('nai')
      //console.log(this.state.month_days[20210202].map)

      if (this.state.formvalues.content !== "") {
        //newMonth_daysの保存値をセット
        copySate[date] = [
          //formvaluesはformの入力値
          {
            id: random_id,
            text: [this.state.formvalues.start + '～' + this.state.formvalues.end + this.state.formvalues.content],
            backup: [this.state.formvalues.start, this.state.formvalues.end, this.state.formvalues.content]
          }
        ]
        this.state.formvalues.content = ''
        this.setState({ backups: '' })
      } else { }
    }

    this.setState({ month_days: copySate })
  }

  //日付ブロックをクリックした際の処理
  handleSubmit_reverse(value) {
    //モーダルの表示
    this.setState({ isSubmitted: false })
    //選択した日の年月日を取得(valueの中には元からクリックされた日付が入ってる)
    this.setState({ selectedDate: value })
  }

  //選択した日付を年月日の形にし、値を返す
  formatdDate(d) {
    const date = new Date(d)
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
  }


  first() {
    if (this.state.backups[0] !== null) {
      return this.state.backups[0]
    } else {
      return ''
    }
  }

  second() {
    if (this.state.backups[1] !== null) {
      return this.state.backups[1]
    } else {
      return ''
    }
  }

  third() {
    if (this.state.backups[2] !== null) {
      return this.state.backups[2]
    } else {
      return ''
    }
  }





  // time_hour() {
  //   var Element = document.getElementById("select");
  //   for (var i = 1; i <= 10; i++) {
  //     var option = document.createElement("option");
  //     option.value = i;
  //     option.innerText = i;
  //     Element.appendChild(option);
  //   }
  // }




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
        {/* {(this.state.month_days[day] && this.state.month_days[day].text) ?
            this.state.month_days[day].text : ''
          } */}
      </p>
    );
  }


  render() {
    let contactForm;
    //新しいstateが設定されるたびに表示内容を更新
    const title = ({ date, view }) => this.getTileContent({ date, view })
    if (this.state.isSubmitted) {
    } else {
      contactForm = (
        /* form送信時の処理 */
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div className='test'>
            <div className='content'>
              {/*年月日にして表示*/}
              <p>{this.formatdDate(this.state.selectedDate)}</p>
              <p>開始時間</p>
              {this.time_hour()}
              {/* <div className='time-box'>
                <input type='time' step="600" defaultValue={this.first()}
                  onChange={this.handleStart.bind(this)}
                />
                <p>～</p>
                <input type='time' step='600' defaultValue={this.second()}
                  onChange={this.handleEnd.bind(this)}
                />
              </div> */}

              <div className='time-box'>
                <select name="selectedate-h" id="selectedate-h">
                  <option value="00">00</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                </select>



                {/* <select defaultValue="14to16">
                  {this.data.map((d) => <option value={d.value}>{d.label}</option>)}
                </select> */}





                <p>:</p>
                <select name="selectedate-m" id="selectedate-m">
                  <option value="00">00</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
                <p>～</p>
              </div>
              <p>予定</p>
              <input defaultValue={this.third()}
                onChange={this.handleChange.bind(this)}
              />
              <input
                type='submit'
                value='登録'
              />
            </div>
          </div>
        </form >
      );
    }
    return (
      <Provider store={store}>
        <Calendar
          locale="ja-JP"
          value={this.state.date}
          tileContent={title}
          onClickDay={this.handleSubmit_reverse.bind(this)}
        />
        <div>
          {contactForm}
        </div>
      </Provider>
    );
  }
}