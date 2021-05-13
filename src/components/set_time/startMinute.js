import React from 'react';

class StartMinute extends React.Component {
    constructor(props) {
        super(props);
    }

    handleTime(e) {
        const time = e.target.value
        this.props.setStartMinute(time)
    }

    selectStartMinute() {
        let options = []
        for (var i = 0; i <= 50; i++) {
            let j = ('0' + i).slice(-2);
            if (j % 10 === 0) {
                options.push(<option value={j}>{j}</option>)
            }
        }
        return (
            <select defaultValue={this.props.backups[1]}
                onChange={this.handleTime.bind(this)}>
                {options}
            </select>
        )
    }

    render() {
        return (
            <div>
                {this.selectStartMinute()}
            </div>
        );
    }
}

export default StartMinute;