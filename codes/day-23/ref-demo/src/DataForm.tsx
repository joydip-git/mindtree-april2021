import React, { Component, createRef } from 'react'

export default class DataForm extends Component {
    state = {
        data: 10
    }
    inputElementRef = createRef<HTMLInputElement>()
    /*
    inputRef: HTMLInputElement | undefined;
    setInputRefCallback = (elementRef: HTMLInputElement) => {
        this.inputRef = elementRef;
        //this.putFocus()
        //console.log(this.inputRef ? this.inputRef : null);
    }
    */
    call = (ev: any) => { console.log(ev.target) }

    putFocus = () => {
        //console.log(this.inputRef);
        // if (this.inputRef) {
        //     this.inputRef.focus()
        // }

        //this.inputRef?.focus()
        this.inputElementRef.current?.focus()
    }

    validate = (ev: any) => {
        //console.log(ev.target === this.inputRef);
    }

    render() {
        console.log('Form renderded');
        return (
            <div onClick={this.call}>
                Data:&nbsp;&nbsp;{this.state.data}
                <br />
                {/* <input type='text' ref={this.setInputRefCallback} onChange={this.validate} /> */}
                <input type='text' ref={this.inputElementRef} onChange={this.validate} />
            </div>
        )
    }
    componentDidMount() {
        console.log(this.inputElementRef);
        console.log(this.inputElementRef.current);
        this.putFocus()
        console.log('Form mounted');
    }
}
