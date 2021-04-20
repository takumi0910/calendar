import React from 'react'

class Func extends React.Component {

    //モーダル上部に予定を入れようとしている日付を表示
    formatDate(d) {
        const date = new Date(d)
        return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
    }

    defaultForm() {
        if (this.props.backups[4] !== null) {
            return this.props.backups[4]
        }
    }

    getUniqueStr(myStrong) {
        var strong = 1000;
        if (myStrong) strong = myStrong;
        return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
      }

    render() {return}
}

export default Func