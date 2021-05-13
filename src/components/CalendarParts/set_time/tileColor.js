import React from 'react';

class TileColor extends React.Component {

    handleTime(e) {
        const color = e.target.value
        this.props.setTileColor(color)
    }

    render() {
        let defaultColor = this.props.backups[5]
        return (
            <input type='color'
                defaultValue={defaultColor}
                onChange={this.handleTime.bind(this)}
                >
            </input>
        )
    }
}

export default TileColor;