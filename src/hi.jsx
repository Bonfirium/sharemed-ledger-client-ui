
import React from 'react';

const a = ['Hi', 'i\'m', 'GAY'];
let i = 0;
export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: a[0],
            style: {
                opacity: 0,
            }
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ style: { opacity: 0 } }, () => {
                setTimeout(() => {
                    this.setState({ word: a[i], style: { opacity: 1, transition: 'opacity 600ms' }}, () => { 
                        if (i === 2) {
                            i = 0;
                        } else {
                            i += 1
                        } 
                    });
                }, 300)
            })
            
        }, 2000)
    }
    render () {
        
        return (
            <React.Fragment>
                <div style={{ ...this.state.style, 'font-size': this.state.word === a[2] ? '750px' : '22px' }}>{this.state.word}</div>
            </React.Fragment>
        );
    }
}