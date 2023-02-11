import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Radium from 'radium';
import './Person.css';
import withClass from '../../../hoc/withClass';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
  constructor(props) {
    super(props)
    console.log("[Person.js]  inside constructor", props)
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount")
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount", this.props)
    if (this.props.position === 1                                                                                                                                                                                                                                                                      ) {
      // this.inputElement.focus();
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }


  render() {
    console.log("[Person.js] Inside render")
    // const randomNum = Math.random();
    // if( randomNum > 0.7){
    //     throw new Error('SOmething went wrong!!')
    // }
    return (
      <div>
        <AuthContext.Consumer>
          {auth => auth? <p>User authenticated</p>: null}
        </AuthContext.Consumer>
        <div onClick={this.props.click}>
          <p>I am {this.props.name} and I m {this.props.age} years old.</p>
          <p>{this.props.children}</p>
        </div>
        <input
          // ref={(input => { this.inputElement = input })}
          ref={this.inputElement}
          type="text"
          onChange={this.props.nameChange}
          value={this.props.name} />
      </div>

    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  nameChange: PropTypes.func
}

export default withClass(Person, "Person");