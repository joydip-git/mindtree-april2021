import React, { Component, createRef } from 'react'
import ClsForm from './ClsForm'
import FnForm from './FnForm'

export default class DataForm extends Component {
    state = {
        data: 10,
        errorMessage: ''
    }
    inputElementRef = createRef<HTMLInputElement>()
    buttonElementRef = createRef<HTMLButtonElement>()
    clsFormRef = createRef<ClsForm>()
    fnFormRef = createRef<any>()

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
        //console.log(ev.target);
        //console.log(ev.target === this.inputRef);
        //console.log(ev.target === this.inputElementRef.current);
        let input = this.inputElementRef.current;
        let value = input?.value;
        if (value === '') {
            if (this.buttonElementRef.current) {
                this.buttonElementRef.current.disabled = true
            }
            this.setState({
                errorMessage: 'enter value in the text box'
            })
        } else {
            if (this.buttonElementRef.current) {
                this.buttonElementRef.current.disabled = false
            }
            this.setState({
                errorMessage: ''
            })
        }
    }

    render() {
        console.log('Form renderded');
        return (
            <div>
                Data:&nbsp;&nbsp;{this.state.data}
                <br />
                {/* <input type='text' ref={this.setInputRefCallback} onChange={this.validate} /> */}
                <input type='text' ref={this.inputElementRef} onChange={this.validate} />
                &nbsp;&nbsp;
                {
                    this.state.errorMessage !== '' &&
                    (<span>Error : {this.state.errorMessage}</span>)

                }
                <br />
                <button ref={this.buttonElementRef} disabled onClick={this.validate}>Submit</button>

                <br />
                <br />
                <ClsForm val={this.state.data} callHandler={this.call} ref={this.clsFormRef} />
                <br />
                <FnForm ref={this.fnFormRef} />
            </div>
        )
    }
    componentDidMount() {
        //console.log(this.inputElementRef);
        console.log(this.inputElementRef.current);
        console.log(this.buttonElementRef.current);
        //this.putFocus()
        // this.clsFormRef.current?.focusInputElement()
        console.log(this.fnFormRef);
        this.fnFormRef.current?.focus()
        console.log('Form mounted');
    }
}
