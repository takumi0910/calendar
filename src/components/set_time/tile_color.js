import React from 'react';

class TileColor extends React.Component {
    constructor(props) {
        super(props);
    }

    handletime(e) {
        const color = e.target.value
        this.props.setTileColor(color)
    }

    render() {
        let default_color = this.props.backups[5]
        return (
            <input type='color'
                defaultValue={default_color}
                onChange={this.handletime.bind(this)}
                >
            </input>
        )
    }
}

export default TileColor;