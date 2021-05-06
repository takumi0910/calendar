import React from 'react';

class Start_Minute extends React.Component {
    constructor(props) {
        super(props);
    }

    handletime(e) {
        const time = e.target.value
        this.props.Set_startminute(time)
    }

    select_startminute() {
        let options = []
        for (var i = 0; i <= 50; i++) {
            let j = ('0' + i).slice(-2);
            if (j % 10 === 0) {
                options.push(<option value={j}>{j}</option>)
            }
        }
        return (
            <select defaultValue={this.props.backups[1]}
                onChange={this.handletime.bind(this)}>
                {options}
            </select>
        )
    }

    render() {
        return (
            <div>
                {this.select_startminute()}
            </div>
        );
    }
}

export default Start_Minute;