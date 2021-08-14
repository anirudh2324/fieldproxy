import { Component } from "react";
// import { v4 as uuidv4 } from "uuid";

import * as ReactBootStrap from "react-bootstrap";

const options = [
  {
    label: "Date",
    value: "date",
  },
  {
    label: "Number",
    value: "number",
  },
  {
    label: "Multi-Selector",
    value: "multi-selector",
  },
];

class Home extends Component {
  state = { data: [], option: options[0].value, name: null };

  onChangeValue = (e) => {
    this.setState({ option: e.target.value });
  };

  //   addColumnName = (event) => {
  //     this.setState({ name: event.target.value });
  //   };

  addColumn = (e) => {
    e.preventDefault();
    this.renderSelectOptions();
    //     const { data, name } = this.state;
    //     const newList = data.concat(name);

    //     this.setState({ data: newList });
  };
  addMultiSelectorNames = (event) => {
    const names = event.target.value.split(",");
    this.setState({ name: names });
  };

  renderMultiSelector = () => {
    const { option } = this.state;
    if (option === "multi-selector") {
      return (
        <input
          type="text"
          placeholder="column name"
          onChange={this.addMultiSelectorNames}
        />
      );
    }
  };

  renderSelectOptions = () => {
    const { name } = this.state;
    if (name !== null) {
      <select>
        {name.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>;
    }
  };

  render() {
    const { data, option, name } = this.state;
    console.log(name);
    return (
      <div className="App">
        <form onClick={this.addColumn}>
          <input
            type="text"
            value={name}
            placeholder="column name"
            onChange={this.addColumnName}
          />
          <select value={option} onChange={this.onChangeValue}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          {this.renderMultiSelector()}
          {this.renderSelectOptions()}
          <button id="button" class="btn btn-primary mb-2" type="submit">
            Create Column
          </button>

          <ReactBootStrap.Table>
            <thead>
              <tr>
                <th>{data.name}</th>
              </tr>
            </thead>
            <tbody>hi</tbody>
          </ReactBootStrap.Table>
        </form>
      </div>
    );
  }
}
export default Home;
