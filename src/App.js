import React, { useEffect, useReducer } from 'react'
import Calendar from 'react-calendar';
import { Provider } from "react-redux"
import Form from './form';
import store from "./store/index";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2021, 2, 0),
      isSubmitted: true,
      //月のデータ
      month_days: {
        20210202: [
          {
            id: '1',
            text: ['12:30～14:00 節分']
          },
          {
            id: '2',
            text: ['15:30～17:00 節分']
          }
        ],
        20210228: [{ text: ['App完成'] }],
      },
      selectedDate: null,
      formvalues: {
        content: ''
      }
    };

    this.getTileContent = this.getTileContent.bind(this);
  }

  // state の日付と同じ表記に変換
  getFormatDate(date) {
    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
  }

  deliteState = (e) => {
    
    //クリックした日付とid
    const day = e.target.className
    const key = e.target.id
　　const ids = []
    const copy = this.state.month_days
    const days = Object.keys(copy)
    const index = days.indexOf(day)
    const id_copy = this.state.month_days[day]
    
    for (let i = 0; i < this.state.month_days[day].length; i++) {
      ids.push(...id_copy[i].id)
      console.log(ids)
    }



    

    


    //クリックした日のid
    const kat = this.state.month_days[day].id
    // console.log(this.state.month_days[day][0].id)

    //×をクリックした日付を取得
    if (index !== -1) {
    }
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
              <div>
                <button className={day} id={date.id} onClick={this.deliteState}> ×</button>
                <p>{date.text}</p>
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

  handleSubmit() {
    //モーダルの非表示
    this.setState({ isSubmitted: true })
    //空のnewMonth_daysを作成+元のmonth_daysに追加
    const newMonth_days = []
    const date = this.getFormatDate(new Date(this.state.selectedDate))

    const copySate = this.state.month_days

    const dates = Object.keys(copySate)

    const index = dates.indexOf(date)

    const sethat = this.getUniqueStr()

    if (index !== -1) {
      console.log('aru')

      if (this.state.formvalues.content !== "") {
        copySate[date].push({ id: sethat, text: [this.state.formvalues.content] })
        this.state.formvalues.content = ''
      } else { }

    } else {

      console.log('nai')
      console.log(this.state.month_days[20210202].map)

      if (this.state.formvalues.content !== "") {
        //newMonth_daysの保存値をセット
        copySate[date] = [
          //formvaluesはformの入力値
          { text: [this.state.formvalues.content] }
        ]
        this.state.formvalues.content = ''
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

  componentDidMount() {
    if(localStorage.app){ // もし前回のデータがあったら、ローカルストレージの値を取得し、更新する
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
              <input
              />
              <p>イベント内容</p>
              <input
                onChange={this.handleChange.bind(this)}
              />
              <input
                type='submit'
                value='登録'
              />
            </div>
          </div>
        </form>
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
        <Form />
      </Provider>
    );
  }
}