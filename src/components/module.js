import React from 'react'

function Module() {
    let contactForm;
    //新しいstateが設定されるたびに表示内容を更新
    const title = ({ date, view }) => this.getTileContent({ date, view })
    if (this.state.isSubmitted) {
    } else {
        contactForm = (
            /* form送信時の処理 */
            <form onSubmit={this.handleSubmit.bind(this)} >
                <div className='test'>
                    <div className='content'>
                        {/*年月日にして表示*/}
                        <p>{this.formatdDate(this.state.selectedDate)}</p>
                        <p>開始時間</p>
                        <input
                        />
                        <p>イベント内容</p>
                        <input
                            onChange={this.handleChange.bind(this)}
                        />
                        <input
                            type='submit'
                            value='登録'
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default Module