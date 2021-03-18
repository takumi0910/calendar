import React from 'react'

class Modal extends React.Component {

  //選択した日付を年月日の形にし、値を返す
  formatdDate(d) {
    const date = new Date(d)
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
  }

  defalutForm() {
    if (this.props.backups[4] !== null) {
      return this.props.backups[4]
    }
  }

  render() {
    let contactForm;
    if (this.props.isSubmitted === false) {
      contactForm = (
        <form onSubmit={this.props.handleSubmit}>
          <div className='test'>
            <div className='content'>
              <p>{this.formatdDate(this.props.selectedDate)}</p>
              <p>開始時間</p>
              <div className='time-box'>
                {this.props.Start_timeHours()}
                <p>:</p>
                {this.props.Start_timeMinutes()}
                <p>～</p>
                {this.props.End_timeHours()}
                <p>:</p>
                {this.props.End_timeMinutes()}
              </div>
              <div className='time-box'>
              </div>
              <p>予定</p>
              <input defaultValue=''
                onChange={this.props.handleChange}
                defaultValue={this.defalutForm()}
              />
              <input
                type='submit'
                value='登録'
              />
            </div>
          </div>
        </form >
      )
    }
    return (
      <div>
        {contactForm}
      </div>
    );
  }
}

export default Modal