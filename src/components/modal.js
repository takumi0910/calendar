import React from 'react'
import End_Hour from './set_time/end_hour'
import End_Minute from './set_time/end_minute'
import Start_Hour from './set_time/start_hour'
import TileColor from './set_time/tile_color'
import Start_Minute from './set_time/start_minute'

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
    let start_h = this.props.origin.start_hour
    let start_m = this.props.origin.start_minute
    let end_h = this.props.origin.end_hour
    let end_m = this.props.origin.end_minute
    let form = this.props.origin.formvalues
    let color = ''

    // 予定が始まる時間が空か確かめる（1時間単位）
    if (!start_h && this.props.origin.backups[0]) {
      start_h = this.props.origin.backups[0]
    } else if (!start_h && !this.props.origin.backups[0]) {
      start_h = '0'
    }

    //予定が始まる時間が空か確かめる（1分単位）
    if (!start_m && this.props.origin.backups[1]) {
      start_m = this.props.origin.backups[1]
    } else if (!start_m && !this.props.origin.backups[1]) {
      start_m = '00'
    }

    //予定が終わる時間が空か確かめる（1時間単位）
    if (!end_h && this.props.origin.backups[2]) {
      if (this.props.origin.start_hour > this.props.origin.backups[2]) {
        end_h = this.props.origin.start_hour
      } else {
        end_h = this.props.origin.backups[2]
      }
    } else if (!end_h && !this.props.origin.backups[2] && start_h) {
      end_h = start_h
    }

    //予定が終わる時間が空か確かめる（1分単位）
    if (!end_m && this.props.origin.backups[3]) {
      end_m = this.props.origin.backups[3]
    } else if (!end_m && !this.props.origin.backups[3] && start_m) {
      end_m = start_m
    }

    //予定内容が空か確かめる
    if (!form && this.props.origin.backups[4]) {
      form = this.props.origin.backups[4]
    } else if (!form && !this.props.origin.backups[4]) {
      form = ''
    }

    if (!this.props.origin.back_color && this.props.origin.backups[5]) {
      color = this.props.origin.backups[5]
    } else if (!this.props.origin.back_color && !this.props.origin.backups[5]) {
      color = 'black'
    } else {
      color = this.props.origin.back_color
    }

    //入力処理の間違いを防ぐ
    if (end_h < start_h) {
      end_h = start_h
    }
    if (start_h === end_h && start_m > end_m) {
      end_m = start_m
    }

    //予定の開始時間と終了時間を出力する表示に変更
    let start_time = start_h + ':' + start_m
    let end_time = end_h + ':' + end_m

    if (index !== -1) {
      copySate[date].push({
        id: random_id,
        text: (start_time + '～' + end_time + '\n' + form),
        backup: [start_h, start_m, end_h, end_m, form],
        back_color: color
      })
    }
    else if (form && start_time !== ':' || end_time !== ':') {
      copySate[date] = [
        {
          id: random_id,
          text: (start_time + '～' + end_time + '\n' + form),
          backup: [start_h, start_m, end_h, end_m, form],
          back_color: color
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
                    <Start_Hour
                      setStartHour={this.props.setStartHour.bind(this)}
                      backups={this.props.origin.backups}
                    />
                    <p>:</p>
                    <Start_Minute
                      setStartMinute={this.props.setStartMinute.bind(this)}
                      backups={this.props.origin.backups}
                    />
                    <p>～</p>
                    <End_Hour
                      setEndHour={this.props.setEndHour.bind(this)}
                      backups={this.props.origin.backups}
                      start_hour={this.props.origin.start_hour}
                      end_hour={this.props.origin.end_hour}
                    />
                    <p>:</p>
                    <End_Minute
                      setEndMinute={this.props.setEndMinute.bind(this)}
                      backups={this.props.origin.backups}
                      start_hour={this.props.origin.start_hour}
                      start_minute={this.props.origin.start_minute}
                      end_hour={this.props.origin.end_hour}
                      end_minute={this.props.origin.end_minute}
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