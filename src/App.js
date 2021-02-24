import React from 'react';
import Calendar from 'react-calendar';
import { Provider } from "react-redux"
import Form from './form';
import store from "./store/index";
import lists from "./store/index"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2021, 2, 0),
      isSubmitted: false,
      //月のデータ
      month_days: {
        20210202: { is_holiday: true },
        20210202: { text: '節分' },
        20210228: { text: 'App完成' },
      },
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.getTileClass = this.getTileClass.bind(this);
    this.getTileContent = this.getTileContent.bind(this);
  }


  //カレンダー部分ここから
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
        {(this.state.month_days[day] && this.state.month_days[day].text) ?
          this.state.month_days[day].text : ''
        }
      </p>
    );
  }
  //カレンダー部分ここまで

  //自分で書いた処理ここから
  onChange(e) {
    this.setState({ value: e.target.value })
  }

  add() {
    this.setState({
      todoList: this.state.todoList.push(this.state.value),
      value: "",
    })
  }

  handleSubmit() {
    this.setState({ isSubmitted: true })
  }
  
  handleSubmit_reverse() {
    this.setState({ isSubmitted: false })
  }


  render() {

    let contactForm;
    if (this.state.isSubmitted) {
    } else {
      contactForm = (
        /* formタグにonSubmitを追加してください */
        <form onSubmit={() => { this.handleSubmit() }} >
          <div className='test'>
            <div className='content'>
              <p>開始時間</p>
              <input />
              <p>イベント内容</p>
              <input />
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
          tileContent={this.store}
          onClickDay={() => this.handleSubmit_reverse()}
          onClickDay={(value) => console.log('Clicked day: ', value)} 
          onDrillDown={({ activeStartDate, view }) => alert('Drilled down to: ', activeStartDate, view)}
        />
        <div>
          {contactForm}
        </div>
        <Form />
      </Provider>
    );
  }
}