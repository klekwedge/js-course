import { Component } from "react";
import "./App.css";

class StateTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCounter: this.props.initialValue,
    };
  }

  addCounter = () => {
    if (this.state.currentCounter < 50) {
      this.setState((state) => ({
        currentCounter: state.currentCounter + 1,
      }));
    }
  };

  subtractCounter = () => {
    if (this.state.currentCounter > -50) {
      this.setState((state) => ({
        currentCounter: state.currentCounter - 1,
      }));
    }
  };

  randomCounter = () => {
    this.setState(() => ({
      currentCounter: Math.floor(Math.random() * (50 - -50 + 1)) + -50,
    }));
  };

  resetCounter = () => {
    this.setState(() => ({
      currentCounter: this.props.initialValue,
    }));
  };

  render() {
    const { currentCounter } = this.state;
    return (
      <div className="app">
        <div className="counter">{currentCounter}</div>
        <div className="controls">
          <button onClick={this.subtractCounter}>INC</button>
          <button onClick={this.addCounter}>DEC</button>
          <button onClick={this.randomCounter}>RND</button>
          <button onClick={this.resetCounter}>RESET</button>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

function App() {
  return (
    <div className="App">
      <StateTask initialValue={0} />
    </div>
  );
}

export default App;
