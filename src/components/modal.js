import React from 'react'
import Start_Hour from './set_time/start_hour'
import Start_Minute from './set_time/start_minute'

class Modal extends React.Component {

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

  shot() {
    let options = []
    for (var i = 0; i <= 23; i++) {
      options.push(<option value={i}>{i}</option>)
    }
    return (
      <select defaultValue=''
        onChange={this.handletime.bind(this)} >
        {options}
      </select>
    )
  }

  handletime(e) {
    const start = e.target.value
    this.props.changetime(start)
  }


  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    console.log(this.props.backups[2])
    let contactForm;
    if (this.props.isSubmitted === false) {
      contactForm = (
        <form onSubmit={this.props.handleSubmit}>
          <div className='modal-back'
            onClick={this.props.keepModal}>
            <div className='modal '>
              <div className='modal-top'>
                <button className='close-button'
                  onClick={this.props.closeModal}
                >×</button>
                <div className='add-plans'>予定登録</div>
              </div>
              <div className='modal-main'>
                <div className='time'>
                  <p>選択した日 : {this.formatDate(this.props.selectedDate)}</p>
                  <p className='plans-time'>予定時間</p>
                  <div className='time-box'>
                    {/* {this.props.Start_timeHours()} */}
                    <Start_Hour
                      Set_starthour={this.props.Set_starthour.bind(this)}
                      backups={this.props.backups}
                    />
                    <p>:</p>
                    <Start_Minute
                      Set_startminute={this.props.Set_startminute.bind(this)}
                      backups={this.props.backups}
                    />
                    <p>～</p>
                    {this.props.End_timeHours()}
                    <p>:</p>
                    {this.props.End_timeMinutes()}
                  </div>
                  <div className='select-color'>
                    <p>予定の背景色</p>
                    <div>{this.props.tileColor()}</div>
                  </div>
                </div>
                <p className='plan-contents'>予定の内容</p>
                <input defaultValue='' required
                  onChange={this.props.handleChange}
                  defaultValue={this.defaultForm()}
                />
                <input
                  className='submit-btn'
                  type='submit'
                  value='登録'
                />
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
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