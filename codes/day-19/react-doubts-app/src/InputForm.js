import { Component, Fragment } from "react";

class InputForm extends Component {
    // constructor(props) {
    //     super(props)
    //     this.isAuthenticated = false;
    // }
    state = {
        username: '',
        password: '',
        isAuthenticated: false,
        shouldShow: false
    }
    inputChangeHandler = (inputValue, inputName) => {
        let copyState = { ...this.state }
        copyState[inputName] = inputValue
        /**
         * copyState['username'] = inputValue
         * copyState['password'] = inputValue
         */
        this.setState(copyState)
    }
    authenticationHandler = (ev) => {
        ev.preventDefault()
        if (this.state.username === 'joydip@aprameyah.com' && this.state.password === 'Joydip@123') {
            //this.isAuthenticated = true
            this.setState({
                isAuthenticated: true,
                shouldShow: true
            })
            console.log(this.isAuthenticated)
        } else {
            //this.isAuthenticated = false
            this.setState({
                isAuthenticated: false,
                shouldShow: true
            })
        }
    }
    render() {
        console.log(this.state)
        return (
            // <Fragment>
            <>
                <form onSubmit={this.authenticationHandler}>
                    UserName:&nbsp;&nbsp;
                    <input
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={
                            (ev) => {
                                this.inputChangeHandler(ev.target.value, ev.target.name)
                            }
                        } />
                    <br />
                    Password:&nbsp;&nbsp;
                    <input
                        type='text'
                        name='password'
                        value={this.state.password}
                        onChange={(ev) => {
                            this.inputChangeHandler(ev.target.value, ev.target.name)
                        }} />
                    <br />
                    <input type='submit' value="Login" />
                </form>
                {
                    this.state.shouldShow && (
                        <span>
                            {
                                this.state.isAuthenticated ? 'authenticated' : 'invalid user'
                            }
                        </span>
                    )
                }
            </>
            //</Fragment>
        )
    }
}

//module.exports.default= InputForm 
//module.exports = InputForm
export default InputForm