import './HelloWorld.css'
import React from 'react'
import PropTypes from "prop-types";

/**
 * {
 *  someMessage:'Hello World From App',
 *  age:40,
 *  name:'Joydip'
 * }
*/
// export const HelloWorld = (props) => {
const HelloWorld = ({ someMessage, name, age }) => {
    console.log('hello world rendered')
    //return <div className='helloWorldStyle'>Hello World</div>
    // const { someMessage: message, name: personName, age: personAge } = props;
    // const { someMessage, name, age } = props;
    return (
        <div className='card' style={{ width: '300px' }}>
            <div className='card-title'>
                <h3>
                    {/*props.someMessage*/}
                    {someMessage}
                    {/* {message} */}
                </h3>
            </div>
            <div className='card-body'>
                <span style={{ float: 'left' }}>
                    {/* Name:  {props.name} */}
                    Name:{name}
                    {/* {personName} */}
                </span>
                <span style={{ float: 'right' }}>
                    {/* Age: {props.age} */}
                    Age:{age}
                    {/* {personAge} */}
                </span>
            </div>
        </div>
    )
}
HelloWorld.propTypes = {
    someMessage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    fn: PropTypes.func,
    person: PropTypes.object
}
export default HelloWorld