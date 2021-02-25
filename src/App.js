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
            text: ['12:30～14:00 節分','ほげほげ']
           },
          { 
            id: '2',
            text: ['15:30～17:00 節分11','ほげほげ'] 
          }
        ],
        20210228: [{ text: ['App完成'] }],
      },
      selectedDate: null,
      formvalues: {
        content: ''
      }
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.getTileClass = this.getTileClass.bind(this);
    this.getTileContent = this.getTileContent.bind(this);
    // this.handleSubmit_reverse = this.handleSubmit_reverse(this)
  }

  // state の日付と同じ表記に変換
  getFormatDate(date) {
    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
  }

  //日付のクラスを付与 (祝日用)
  getTileClass({ view }) {
    // 月表示のときのみ
    if (view !== 'month') {
      return '';
    }
    //クラスを付与してますよ
    return 'event';
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
              <>
              <p>{date.text} </p>
              <br/>
              </>
            )
          })
        }
        {/* {(this.state.month_days[day] && this.state.month_days[day].text) ?
          this.state.month_days[day].text : ''
        } */}
      </p>
    );
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

    console.log(dates)

    const index = dates.indexOf(date)
    if(index !== -1){

      console.log('aru')
      copySate[date].push({text: [this.state.formvalues.content]})

      if(date.id = 2){
        copySate[date].concat()
      }

    }else{

      console.log('nai')

       //newMonth_daysの保存値をセット
       copySate[date] = [
        //formvaluesはformの入力値
       { text: [this.state.formvalues.content]}

         ]
      

    }

    this.setState({ month_days: copySate })



   
    // this.setState({ month_days: { ...this.state.month_days, ...newMonth_days } })
    
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
          tileClassName={this.getTileClass}
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