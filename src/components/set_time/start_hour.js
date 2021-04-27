import React from 'react';

class Start_Hour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChange(e) {
        const start_hour = e.target.value;
        this.props.changeTitle(start_hour);
    }

    render() {
        let options = []
        for (var i = 0; i <= 23; i++) {
            options.push(<option value={i}>{i}</option>)
        }

        return <>
            <select defaultValue={this.props.backups[0]}
                value={this.props.start_hour} onChange={this.handleChange.bind(this)} >
                {options}
            </select>
        </>
    }
}

export default Start_Hour;