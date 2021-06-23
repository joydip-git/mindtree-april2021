import React, { Component } from "react";

type NameStateType = { x: number }
type NamePropType = {
    nameValue: string
}
export default class Name extends Component<NamePropType, NameStateType> {
    state = {
        x: 100
    }
    render() {
        return <p>{this.props.nameValue}</p>
    }
}

const nameComp = new Name({ nameValue: 'joydip' })
console.log(nameComp.props)
