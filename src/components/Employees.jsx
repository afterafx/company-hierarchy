import React, { Component } from 'react';
// import Tree from 'react-tree-graph';
// import PropTypes from 'prop-types';

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      employee: {
        name: '',
        children: [],
      },
    }
  }

  addEmployee = () => {
    const { employees } = this.state;
    const employeeName = window.prompt();
    const employee = { 'name': employeeName, 'children': [] };
    this.setState({
      employees: [...employees, employee]
    })
    // console.log(employees);
  }

  addChildEmployee = parent => {
    const childEmployee = window.prompt();
    const { employees } = this.state;
    employees.forEach(e => {
      if (e.name === parent) {
        e.children.push(childEmployee);
      }
    })
    this.setState({ employees: employees })
    console.log(employees);
  }

  render() {
    const { employees } = this.state;
    return (
      <div>
        <button type="button" onClick={this.addEmployee}>Add Employee</button>
        {employees.map((employee) => (
          <ul>
            <li>
              <button type="button" onClick={() => this.addChildEmployee(employee.name)}>{employee.name}</button>
              <ul>
                {employee.children.map(child => (
                  <button type="button">{child}</button>
                ))
                }
              </ul>
            </li>
          </ul>
        ))}
        {/* <Tree data={employees} height={400} width={400} /> */}
      </div>
    );
  }
}

Employees.propTypes = {

};

export default Employees;