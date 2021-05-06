import React from 'react';

class End_Minute extends React.Component {
    constructor(props) {
        super(props);
    }

    handletime(e) {
        const time = e.target.value
        this.props.Set_endminute(time)
    }

    select_endminute() {
        let options = []
        let start_h = this.props.start_hour
        let end_m = this.props.end_minute
        let end_h = this.props.end_hour
        let start_dh = this.props.backups[0]
        let start_dm = this.props.backups[1]
        let end_dh = this.props.backups[2]
        let limited_start = ''
        let limited_end = ''
        let limited_minutes = this.props.start_minute

        //分数制限の値の算出
        if (!limited_minutes && start_dm) {
            limited_minutes = start_dm
        } else if (!limited_minutes && start_dm) {
            limited_minutes = 0
        }

        //初めの時間を取得
        if (!start_h && !start_dh) {
            limited_start = ''
        } else if (!start_h && start_dh) {
            limited_start = start_dh
        } else {
            limited_start = start_h
        }

        //終わりの時間を取得
        if (!end_h && !end_dh && !limited_start) {
            limited_end = ''
        } else if (!end_h && end_dh && !limited_start) {
            limited_end = end_dh
        } else if (!end_h && limited_start === start_dh) {
            limited_end = start_dh
        } else if (!end_h && start_h) {
            limited_end = start_h
        } else if (end_h && start_h > end_h) {
            limited_end = limited_start
        } else if (end_h) {
            limited_end = end_h
        }

        if (limited_start !== limited_end) {
            for (var i = 0; i <= 50; i++) {
                if (i % 10 === 0) {
                    let j = ('0' + i).slice(-2);
                    if (i !== Number(end_m)) {
                        options.push(<option value={j}>{j}</option>)
                    }
                    else {
                        options.push(<option value={j} selected>{j}</option>)
                    }
                }
            }
        } else if (limited_start === limited_end) {
            for (var i = 0; i <= 50; i++) {
                if (i % 10 === 0 && i >= limited_minutes) {
                    let j = ('0' + i).slice(-2);
                    if (i !== Number(end_m)) {
                        options.push(<option value={j}>{j}</option>)
                    }
                    else {
                        options.push(<option value={j} selected>{j}</option>)
                    }
                }
            }
        }

        return (
            <select defaultValue={this.props.backups[3]}
                onChange={this.handletime.bind(this)}>
                {options}
            </select>
        )
    }

    render() {
        return (
            <div>
                {this.select_endminute()}
            </div>
        );
    }
}

export default End_Minute;