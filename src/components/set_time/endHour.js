import React from 'react';

class EndHour extends React.Component {
    constructor(props) {
        super(props);
    }

    handleTime(e) {
        const time = e.target.value
        this.props.setEndHour(time)
    }

    selectEndHour() {
        let options = []
        let limitedH = this.props.startHour
        let endH = Number(this.props.endHour)
        let endDh = Number(this.props.backups[2])

        if (!limitedH && !this.props.backups[0]) {
        } else if (!limitedH && this.props.backups[0]) {
            limitedH = this.props.backups[0]
        }

        if (!endH && endDh) {
            endH = endDh
        }

        for (var i = 0; i <= 23; i++) {
            if (i >= limitedH) {
                if (i === endH) {
                    options.push(<option value={i} selected>{i}</option>)
                }
                else if (i !== endH) {
                    options.push(<option value={i}>{i}</option>)
                }
            }
        }

        return (
            <select defaultValue={this.props.backups[2]}
                onChange={this.handleTime.bind(this)}>
                {options}
            </select >
        )
    }

    render() {
        return (
            <div>
                {this.selectEndHour()}
            </div>
        );
    }
}

export default EndHour;