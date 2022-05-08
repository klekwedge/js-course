import { Component, Fragment } from "react";
import "./App.css";

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      position: "",
    };

    // this.nextYear = this.nextYear.bind(this);
  }

  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  commitInputChanges = (event, color) => {
    console.log(color);
    this.setState({
      position: event.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <>
        <button onClick={this.nextYear}>+++</button>
        <h1>
          My name is {name}, surname - {surname}, age - {years}, position -{" "}
          {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность:</span>
          <input
            type="text"
            onChange={(event) => this.commitInputChanges(event, "some color")}
          ></input>
        </form>
      </>
      // <Fragment>
      //   <button onClick={this.nextYear}>+++</button>
      //   <h1>
      //     My name is {name}, surname - {surname}, age - {years}, position -{" "}
      //     {position}
      //   </h1>
      //   <a href={link}>My profile</a>
      //   <form>
      //     <span>Введите должность:</span>
      //     <input
      //       type="text"
      //       onChange={(event) => this.commitInputChanges(event, "some color")}
      //     ></input>
      //   </form>
      // </Fragment>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="google.com" />
      <WhoAmI name="Tom" surname="Hanks" link="vk.com" />
    </div>
  );
}

export default App;
