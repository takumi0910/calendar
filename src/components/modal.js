import React from 'react'

class Modal extends React.Component {

  //選択した日付を年月日の形にし、値を返す
  formatdDate(d) {
    const date = new Date(d)
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
  }

  first() {
    if (this.props.backups[0] !== null) {
      return this.props.backups[0]
    } else {
      return ''
    }
  }

  second() {
    if (this.props.backups[1] !== null) {
      return this.props.backups[1]
    } else {
      return ''
    }
  }

  third() {
    if (this.props.backups[2] !== null) {
      return this.props.backups[2]
    } else {
      return ''
    }
  }

  render() {
    let contactForm;
    if (this.props.isSubmitted === false) {
      contactForm = (
        <form onSubmit={this.props.handleSubmit}>
          <div className='test'>
            <div className='content'>
              {/*年月日にして表示*/}
              <p>{this.formatdDate(this.props.selectedDate)}</p>
              <p>開始時間</p>
              <div className='time-box'>
                {/* <input type='time' step="600" defaultValue={this.first()}
                  onChange={this.props.handleStart}
                />
                <p>～</p>
                <input type='time' step='600' defaultValue={this.second()}
                  onChange={this.props.handleEnd}
                /> */}
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
                defaultValue={this.third()}
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