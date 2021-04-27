import React from 'react'

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


  handleChange(e) {
      const title = e.target.value;
      this.props.changeTitle(title);
      }

  render() {
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
                    {this.props.Start_timeHours()}
                    <p>:</p>
                    {this.props.Start_timeMinutes()}
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