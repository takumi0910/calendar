import React from 'react'
import EndHour from '../set_time/endHour'
import EndMinute from '../set_time/endMinute'
import StartHour from '../set_time/startHour'
import TileColor from '../set_time/tileColor'
import StartMinute from '../set_time/startMinute'

class Modal extends React.Component {

  //ランダムなidの作成
  getUniqueStr(myStrong) {
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
  }

  //モーダル上部に予定を入れようとしている日付を表示
  formatDate(d) {
    const date = new Date(d)
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
  }

  defaultForm() {
    if (this.props.origin.backups[4] !== null) {
      return this.props.origin.backups[4]
    }
  }

  submit() {
    this.props.handleClose()
    
    let date = this.props.getFormatDate(new Date(this.props.origin.selectedDate))

    const copySate = this.props.origin.month_days

    const dates = Object.keys(copySate)

    const index = dates.indexOf(date)

    const random_id = this.getUniqueStr()

    date = Number(date)

    //props.originを変数に代入
    let startH = this.props.origin.startHour
    let startM = this.props.origin.startMinute
    let endH = this.props.origin.endHour
    let endM = this.props.origin.endMinute
    let form = this.props.origin.formValues
    let color = ''

    // 予定が始まる時間が空か確かめる（1時間単位）
    if (!startH && this.props.origin.backups[0]) {
      startH = this.props.origin.backups[0]
    } else if (!startH && !this.props.origin.backups[0]) {
      startH = '0'
    }

    //予定が始まる時間が空か確かめる（1分単位）
    if (!startM && this.props.origin.backups[1]) {
      startM = this.props.origin.backups[1]
    } else if (!startM && !this.props.origin.backups[1]) {
      startM = '00'
    }

    //予定が終わる時間が空か確かめる（1時間単位）
    if (!endH && this.props.origin.backups[2]) {
      if (this.props.origin.startHour > this.props.origin.backups[2]) {
        endH = this.props.origin.startHour
      } else {
        endH = this.props.origin.backups[2]
      }
    } else if (!endH && !this.props.origin.backups[2] && startH) {
      endH = startH
    }

    //予定が終わる時間が空か確かめる（1分単位）
    if (!endM && this.props.origin.backups[3]) {
      endM = this.props.origin.backups[3]
    } else if (!endM && !this.props.origin.backups[3] && startM) {
      endM = startM
    }

    //予定内容が空か確かめる
    if (!form && this.props.origin.backups[4]) {
      form = this.props.origin.backups[4]
    } else if (!form && !this.props.origin.backups[4]) {
      form = ''
    }

    if (!this.props.origin.backColor && this.props.origin.backups[5]) {
      color = this.props.origin.backups[5]
    } else if (!this.props.origin.backColor && !this.props.origin.backups[5]) {
      color = 'black'
    } else {
      color = this.props.origin.backColor
    }

    //入力処理の間違いを防ぐ
    if (endH < startH) {
      endH = startH
    }
    if (startH === endH && startM > endM) {
      endM = startM
    }

    //予定の開始時間と終了時間を出力する表示に変更
    let startTime = startH + ':' + startM
    let endTime = endH + ':' + endM

    if (index !== -1) {
      copySate[date].push({
        id: random_id,
        text: (startTime + '～' + endTime + '\n' + form),
        backup: [startH, startM, endH, endM, form],
        backColor: color
      })
    }
    else if (form && startTime !== ':' || endTime !== ':') {
      copySate[date] = [
        {
          id: random_id,
          text: (startTime + '～' + endTime + '\n' + form),
          backup: [startH, startM, endH, endM, form],
          backColor: color
        }
      ]
    }
    this.props.setPlans(copySate)
    this.props.handleDelete()
    this.props.inputDelete()
  }

  render() {
    let contactForm;
    if (this.props.origin.isSubmitted === false) {
      contactForm = (
        <form onSubmit={this.submit.bind(this)}>
          <div className='modal-back' onClick={this.props.keepModal}>
            <div className='modal '>
              <div className='modal-top'>
                <button className='close-button' onClick={this.props.closeModal}>×</button>
                <div className='add-plans'>予定登録</div>
              </div>
              <div className='modal-main'>
                <div className='time'>
                  <p>選択した日 : {this.formatDate(this.props.origin.selectedDate)}</p>
                  <p className='plans-time'>予定時間</p>
                  <div className='time-box'>
                    <StartHour
                      setStartHour={this.props.setStartHour.bind(this)}
                      backups={this.props.origin.backups}
                    />
                    <p>:</p>
                    <StartMinute
                      setStartMinute={this.props.setStartMinute.bind(this)}
                      backups={this.props.origin.backups}
                    />
                    <p>～</p>
                    <EndHour
                      setEndHour={this.props.setEndHour.bind(this)}
                      backups={this.props.origin.backups}
                      startHour={this.props.origin.startHour}
                      endHour={this.props.origin.endHour}
                    />
                    <p>:</p>
                    <EndMinute
                      setEndMinute={this.props.setEndMinute.bind(this)}
                      backups={this.props.origin.backups}
                      startHour={this.props.origin.startHour}
                      startMinute={this.props.origin.startMinute}
                      endHour={this.props.origin.endHour}
                      endMinute={this.props.origin.endMinute}
                    />
                  </div>
                  <div className='select-color'>
                    <p>予定の背景色</p>
                    <TileColor
                      setTileColor={this.props.setTileColor.bind(this)}
                      backups={this.props.origin.backups}
                    />
                  </div>
                </div>
                <p className='plan-contents'>予定の内容</p>
                <input defaultValue='' required
                  onChange={this.props.handleChange} defaultValue={this.defaultForm()}
                />
                <input
                  className='submit-btn'
                  type='submit'
                  value='登録'
                />
              </div>
            </div>
          </div>
        </form >
      )
    }
    return (
      <div>
        {contactForm}
      </div >
    );
  }
}

export default Modal