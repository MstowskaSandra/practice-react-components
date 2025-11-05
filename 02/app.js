import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { amount: 0 };
        this.clickHandler = this.clickHandler.bind(this);
    }
     clickHandler() {
        this.setState((prevState) => ({ amount: prevState.amount + 1}));
        console.log('Click!');
     }
    
    render() {
        return (
            <button onClick={this.clickHandler}>
                click me ({ this.state.amount })
            </button>
        );
    }
}

root.render(<Counter />);
