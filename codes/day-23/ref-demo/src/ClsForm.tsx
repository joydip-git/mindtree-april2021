import React, { Component, createRef } from 'react'

type ClsFormPropType = {
    val: number,
    callHandler: (ev: any) => void
}
export default class ClsForm extends Component<ClsFormPropType, {}> {
    inputRef = createRef<HTMLInputElement>()

    focusInputElement = () => {
        //console.log('show');
        this.inputRef.current?.focus()
    }
    render() {
        return (
            <div>
                {this.props.val}
                <br />
                <input type='text' onChange={this.props.callHandler}
                    ref={this.inputRef} />
            </div>
        )
    }
}
