import React from 'react';
import Calendar from 'react-calendar';
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux"
import Form from './form';
import store from "./store/index";
import lists from "./store/index"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2021, 2, 0),
      //月のデータ
      month_days: {
        20210202: { is_holiday: true },
        20210202: { text: '節分' },
        20210228: { text: 'App完成' },
        count: { text: '' }
      },
      hogehoge: 'hogehoge',
      isSubmitted: true,
      value: '',
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


  /*handleChange = (e) => {
    this.setState({ events: e.target.value });
  }

  送信データの保存
  handleSubmit(e) {
    //この記述がないとデータが飛ぶ
    e.preventDefault();
    this.state.events.push({ title: e.target.title.value }); // まだ保存されていない
    // setStateを使ってstateを上書き
    this.setState({ events: this.state.events }); // 保存完了
    // inputのvalueを空に
    e.target.title.value = '';
  }*/

  render() {
    /*console.log(this.state.todoList)
    const todoListNode = this.state.todoList.map((todo, idx) => {
      return <li key={idx}>{todo}</li>
    })
    let inputForm;
    if (this.state.isSubmitted) {
      inputForm = (
        <>
          <div className='schedulle'>
            <p>予定</p>
            <input type="text" value={this.state.value} onChange={e => this.onChange(e)} />
          </div>
          <button onClick={() => this.add}>追加</button>
          <p>{this.state.value}</p>
          <ul>
            {todoListNode}
          </ul>
        </>
      );
    }*/


    return (
      <Provider store={store}>
        <Calendar
          locale="ja-JP"
          value={this.state.date}
          tileClassName={this.getTileClass}
          tileContent={this.getTileContent}
        />
        <Form/>
      </Provider>
    );
  }
}