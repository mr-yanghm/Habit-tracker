import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount() {
        // timer 시작 등, 채팅 소켓 시작 등
        console.log(`habit : ${this.props.habit.name} mounted`);
    }

    componentWillUnmount() {
        // resources  해제 등
        console.log(`habit : ${this.props.habit.name} unmounted`);
    }
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }
    render() {
        // console.log(this.props.habit);
        const { name, count } = this.props.habit;
        console.log(`habit ${name}`);
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;