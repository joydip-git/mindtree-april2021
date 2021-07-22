import React, { Component } from 'react'

type ErrorBoundaryPropType = {
    errorHandler: (errorInfo: any) => void
}
type ErrorBoundaryStateType = {
    errorMessage: string
}
export default class ErrorBoundary extends Component<ErrorBoundaryPropType, ErrorBoundaryStateType> {
    state = {
        errorMessage: ''
    }
    //set the state with error message early in the life cycle
    static getDerivedStateFromError(error: any): ErrorBoundaryStateType {
        console.log(typeof error);
        console.log('[EB] getDerivedStateFromError');
        //return a new state with error message
        return {
            errorMessage: error.message
        }
    }
    render() {
        console.log('[EB] rendered');
        let design: any = null;
        const { errorMessage: message } = this.state
        if (message !== '') {
            console.log(message);
            design = <span>Error occurred</span>
        }
        if (message === '') {
            design = this.props.children
        }
        return design
    }
    //logging the error/info
    componentDidCatch(error: any, info: any) {
        console.log('[EB] caught error');
        console.log(info);
        this.props.errorHandler(
            {
                loggedTime: new Date().toLocaleDateString(), errorMessage: error.message,
                errorStack: info.componentStack
            })
        // this.setState({
        //     errorMessage: error.message
        // })
    }
}
