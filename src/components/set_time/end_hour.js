import React from 'react';

class End_Hour extends React.Component {
    constructor(props) {
        super(props);
    }

    handletime(e) {
        const time = e.target.value
        this.props.Set_endhour(time)
    }

    select_endhour() {
        let options = []
        let limited_h = this.props.start_hour
        let end_h = Number(this.props.end_hour)
        let end_dh = Number(this.props.backups[2])

        if (!limited_h && !this.props.backups[0]) {
        } else if (!limited_h && this.props.backups[0]) {
            limited_h = this.props.backups[0]
        }

        if (!end_h && end_dh) {
            end_h = end_dh
        }

        for (var i = 0; i <= 23; i++) {
            if (i >= limited_h) {
                if (i === end_h) {
                    options.push(<option value={i} selected>{i}</option>)
                }
                else if (i !== end_h) {
                    options.push(<option value={i}>{i}</option>)
                }
            }
        }

        return (
            <select defaultValue={this.props.backups[2]}
                onChange={this.handletime.bind(this)}>
                {options}
            </select >
        )
    }

    render() {
        return (
            <div>
                {this.select_endhour()}
            </div>
        );
    }
}

export default End_Hour;