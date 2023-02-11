import React, { Component } from 'react';
import Person from "./Person/Person";
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class Persons extends Component {
  constructor(props) {
    super(props)
    console.log("[Persons.js]  inside constructor", props)
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount")
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount")
    // this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log("[Persons.js] inside CompWillReceiveProps")
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, "[Persons.js]  inside shouldCompoUpdate")
    // return nextProps.person !== this.props.person
    //   || nextProps.click !== this.props.click
    //   || nextProps.nameChange !== this.props.nameChange;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[Persons.js]  inside CompowillUpadte")
  }
  componentDidUpdate() {
    console.log("[Persons.js]  inside CompoDidUpadte")
  }

  render() {
    console.log("[Persons.js] Inside render")

    return this.props.person.map((person, index) => {
      return <Person  //<ErrorBoundary
        key={person.id}
        position={index}
        click={() => this.props.click(index)}
        name={person.name}
        age={person.age}
        nameChange={(event) => this.props.nameChange(event, person.id)}
        ref={this.lastPersonRef}
      />
    })
  }
}
// </ErrorBoundary>

export default Persons;