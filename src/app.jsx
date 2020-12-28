import React, { Component } from "react";
import "./app.css";
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ]
  }

  handleIncrement = (habit) => {
    // bed coding style in react !!!
    // habit.count++;
    // this.setState(this.state);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
  }
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  }

  handleDelete = (habit) => {
    // const index = this.state.habits.indexOf(habit);
    const habits = this.state.habits.filter(_habit => _habit.id !== habit.id);
    this.setState({ habits: habits });
  }
  handleAdd = name => {
    // 내방식
    // const habits = [...this.state.habits];
    // const id = habits[habits.length - 1] ? habits[habits.length - 1].id + 1 : 1;
    // habits.push({ id: id, name: name, count: 0 });
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
    // console.log(habits);
  }
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    });
    this.setState(habits);
  }
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
      ;
  }

}

export default App;
