import React from 'react';
import Calendar from 'react-calendar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2021, 1, 0),
      //月のデータ
      month_days: {
        20210506: { is_holiday: true },
        20210105: { text: 'App作成' },
        20210228: { text: 'App完成' },
      }
    };
    this.getTileClass = this.getTileClass.bind(this);
    this.getTileContent = this.getTileContent.bind(this);
    this.addTodo = this.addEvent.bind(this);
  }

  addEvent() {
    // 追加
    this.state.todo.push({
      title: this.refs.newText.value
    });
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

  Eventadd() {

  }

  render() {
    return (
      <>
        <input type="text" ref="newText" />
        <input type="button" value="追加" onClick={this.addTodo} />
        <Calendar
          locale="ja-JP"
          value={this.state.date}
          tileClassName={this.getTileClass}
          tileContent={this.getTileContent}
        />
      </>
    );
  }
}