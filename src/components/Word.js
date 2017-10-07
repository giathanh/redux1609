import React, { Component } from 'react';

class Word extends Component {
    render() {
        const { vn, en, isMemorized } = this.props;
        const color = isMemorized ? 'green' : 'red';
        return (
            <div className="word">
                <h3 style={{ color }}>{en}</h3>
                <p>{vn}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-danger">
                        remove
                </button>
                    <button className="btn btn-warning">
                        forgot
                </button>
                </div>
            </div>
        );
    }
}

export default Word;
