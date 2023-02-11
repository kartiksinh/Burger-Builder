import React from "react";
import Aux from '../../hoc/Aux';
import './Cockpit.css'

const Cockpit = (props) => {

    const styles = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightblue',
            color: 'black'
        }
    };

    if (props.showPersons) {
        styles.backgroundColor = 'red'
        styles[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }

    }

    let classes = [];
    if (props.person.length <= 2) {
        classes.push('red');
    }
    if (props.person.length <= 1) {
        classes.push('bold');
    }

    return (
        <Aux>
            <h1>Hi, I am a React app</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button style={styles} onClick={props.togglePerson}>
                {
                    props.showPersons ? 'Hide Persons' : 'Show Persons'
                }
            </button>
            <button onClick={props.login}>Login</button>
        </Aux>
    )
}

export default Cockpit; 