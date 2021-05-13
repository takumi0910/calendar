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
        let defaultColor = this.props.backups[5]
        return (
            <input type='color'
                defaultValue={defaultColor}
                onChange={this.handletime.bind(this)}
                >
            </input>
        )
    }
}

export default TileColor;