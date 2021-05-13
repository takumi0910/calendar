import React from 'react';

class EndMinute extends React.Component {
    constructor(props) {
        super(props);
    }

    handleTime(e) {
        const time = e.target.value
        this.props.setEndMinute(time)
    }

    selectEndMinute() {
        let options = []
        let startH = this.props.startHour
        let endM = this.props.endMinute
        let endH = this.props.endHour
        let startDh = this.props.backups[0]
        let startDm = this.props.backups[1]
        let endDh = this.props.backups[2]
        let limitedStart = ''
        let limitedEnd = ''
        let limitedMinutes = this.props.startMinute

        //分数制限の値の算出
        if (!limitedMinutes && startDm) {
            limitedMinutes = startDm
        } else if (!limitedMinutes && startDm) {
            limitedMinutes = 0
        }

        //初めの時間を取得
        if (!startH && !startDh) {
            limitedStart = ''
        } else if (!startH && startDh) {
            limitedStart = startDh
        } else {
            limitedStart = startH
        }

        //終わりの時間を取得
        if (!endH && !endDh && !limitedStart) {
            limitedEnd = ''
        } else if (!endH && endDh && !limitedStart) {
            limitedEnd = endDh
        } else if (!endH && limitedStart === startDh) {
            limitedEnd = startDh
        } else if (!endH && startH) {
            limitedEnd = startH
        } else if (endH && startH > endH) {
            limitedEnd = limitedStart
        } else if (endH) {
            limitedEnd = endH
        }

        if (limitedStart !== limitedEnd) {
            for (var i = 0; i <= 50; i++) {
                if (i % 10 === 0) {
                    let j = ('0' + i).slice(-2);
                    if (i !== Number(endM)) {
                        options.push(<option value={j}>{j}</option>)
                    }
                    else {
                        options.push(<option value={j} selected>{j}</option>)
                    }
                }
            }
        } else if (limitedStart === limitedEnd) {
            for (var i = 0; i <= 50; i++) {
                if (i % 10 === 0 && i >= limitedMinutes) {
                    let j = ('0' + i).slice(-2);
                    if (i !== Number(endM)) {
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
                onChange={this.handleTime.bind(this)}>
                {options}
            </select>
        )
    }

    render() {
        return (
            <div>
                {this.selectEndMinute()}
            </div>
        );
    }
}

export default EndMinute;