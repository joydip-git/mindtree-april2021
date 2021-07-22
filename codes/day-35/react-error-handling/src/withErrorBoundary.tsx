//import { ComponentClass, FunctionComponent } from "react"
// const withErrorBoundary = (WrappedComponent: ComponentClass | FunctionComponent) => { }

import { Component, ComponentType } from "react"

const withErrorBoundary = (
    WrappedComponent: ComponentType<any>, errorHandler: (errorInfo: any) => void) => {

    type ErrorBoundaryStateType = {
        errorMessage: string
    }

    class WithErrorBoundary extends Component<any, ErrorBoundaryStateType> {
        state = {
            errorMessage: ''
        }

        static getDerivedStateFromError(error: any) {
            return {
                errorMessage: error.message
            }
        }

        render() {
            let design: any = null;
            const { errorMessage: message } = this.state
            if (message !== '') {
                console.log(message);
                design = <span>Error Occurred</span>
            }
            if (message === '') {
                design = <WrappedComponent {...this.props} />
            }
            return design
        }
        componentDidCatch(error: any, info: any) {
            errorHandler(
                {
                    loggedTime: new Date().toLocaleDateString(), errorMessage: error.message,
                    errorStack: info.componentStack
                })
        }
    }
    return WithErrorBoundary
}
export default withErrorBoundary