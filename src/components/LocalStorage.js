import React, { useState } from 'react';

function componentDidMount() {
    if (localStorage.app) { // もし前回のデータがあったら、ローカルストレージの値を取得し、更新する
      const saveDate = JSON.parse(localStorage.app);
      this.setState({
        month_days: saveDate.month_days,
      })
    }
    localStorage.setItem('app', JSON.stringify(this.state));
}

function componentDidUpdate() {
  // ローカルストレージにステートの情報を保存
  localStorage.setItem('app', JSON.stringify(this.state));
  // localStorage.clear()
}

export default componentDidMount