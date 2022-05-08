import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let { name, salary } = this.state;
    if (name && salary) {
      this.props.onAdd(name, salary);
    }

    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit ={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            name="name"
            value={name}
            placeholder="Как его зовут?"
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            name="salary"
            value={salary}
            placeholder="З/П в $?"
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
