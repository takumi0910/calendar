import React from 'react'
import End_Hour from './set_time/end_hour'
import End_Minute from './set_time/end_minute'
import Start_Hour from './set_time/start_hour'
import TileColor from './set_time/tile_color'
import Start_Minute from './set_time/start_minute'

class Modal extends React.Component {

  getFormatDate(date) {
    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
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

  // shotSumbit() {
  //   let date = this.getFormatDate(new Date(this.props.origin.selectedDate))

  //   const copySate = this.props.origin.month_days

  //   const dates = Object.keys(copySate)

  //   const index = dates.indexOf(date)

  //   const random_id = this.props.getUniqueStr()

  //   date = Number(date)


  // }

  render() {
    let contactForm;
    if (this.props.origin.isSubmitted === false) {
      contactForm = (
        <form onSubmit={this.props.handleSubmit}>
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
                      Set_starthour={this.props.Set_starthour.bind(this)}
                      backups={this.props.origin.backups}
                    />
                    <p>:</p>
                    <Start_Minute
                      Set_startminute={this.props.Set_startminute.bind(this)}
                      backups={this.props.origin.backups}
                    />
                    <p>～</p>
                    <End_Hour
                      Set_endhour={this.props.Set_endhour.bind(this)}
                      backups={this.props.origin.backups}
                      start_hour={this.props.origin.start_hour}
                      end_hour={this.props.origin.end_hour}
                    />
                    <p>:</p>
                    <End_Minute
                      Set_endminute={this.props.Set_endminute.bind(this)}
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
                      Set_tileColor={this.props.Set_tileColor.bind(this)}
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