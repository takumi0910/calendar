import React from 'react';

class Start_Hour extends React.Component {
    constructor(props) {
        super(props);
    }

    handletime(e) {
        const start = e.target.value
        this.props.Set_starthour(start)
    }

    select_starthour() {
        let options = []
        for (var i = 0; i <= 23; i++) {
            options.push(<option value={i}>{i}</option>)
        }
        return (
            <select defaultValue={this.props.backups[0]}
                onChange={this.handletime.bind(this)} >
                {options}
            </select>
        )
    }

    render() {
        return (
            <div>
                {this.select_starthour()}
            </div>
        );
    }
}

export default Start_Hour;