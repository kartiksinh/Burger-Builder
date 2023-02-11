import React, { Component } from 'react';
// import Radium from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import './App.css';

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props)
    console.log("[App.js]  inside constructor", props)
    this.state = {
      person: [
        { id: '1', name: "Kartik", age: 26 },
        { id: '2', name: "Rutvij", age: 24 },
        { id: '3', name: "Pratik", age: 28 }
      ],
      showPersons: false,
      authenticated: false,
      clickCounter: 0
    }
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount")
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, "[App.js]  inside shouldCompoUpdate")
    return nextState.person !== this.state.person
      || nextState.showPersons !== this.state.showPersons
      || nextState.authenticated !== this.state.authenticated;
    // return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[App.js]  inside compowillUpadte")
  }
  componentDidUpdate() {
    console.log("[App.js]  inside compoDidUpadte")
  }

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 26 },
        { name: "Rutvij", age: 24 },
        { name: "Pratik", age: 28 }
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id
    });
    const person = {
      ...this.state.person[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState({
      person: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    //  const persons = this.state.person.slice();
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  }

  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
      return {
        showPersons: !this.state.showPersons,
        clickCounter: this.state.clickCounter + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log("[App.js]  inside render")
    let persons = null;
    if (this.state.showPersons) {
      persons =
        <Persons
          person={this.state.person}
          click={this.deletePersonHandler}
          nameChange={this.nameChangeHandler}
        />
    }

    return (
      <Aux>
        <h1>{this.props.title}</h1>
        <h1>{this.state.clickCounter}</h1>
        <button onClick={() => this.setState({ showPersons: true })}>SHow</button>
        <Cockpit
          person={this.state.person}
          showPersons={this.state.showPersons}
          togglePerson={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, "App");
