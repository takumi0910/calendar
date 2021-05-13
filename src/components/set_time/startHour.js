import React from 'react';

class StartHour extends React.Component {
    constructor(props) {
        super(props);
    }

    handleTime(e) {
        const time = e.target.value
        this.props.setStartHour(time)
    }

    selectStartHour() {
        let options = []
        for (var i = 0; i <= 23; i++) {
            options.push(<option value={i}>{i}</option>)
        }
        return (
            <select defaultValue={this.props.backups[0]}
                onChange={this.handleTime.bind(this)} >
                {options}
            </select>
        )
    }

    render() {
        return (
            <div>
                {this.selectStartHour()}
            </div>
        );
    }
}

export default StartHour;