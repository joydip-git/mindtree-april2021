import React from "react";
const HelloReact = ({ value }) => {
    console.log('hello react rendered')
    return <p>Hello React.<br /> Value:<span>{value}</span></p>
}
export default HelloReact