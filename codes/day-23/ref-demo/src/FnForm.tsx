import React, { forwardRef } from 'react'

const FnForm = forwardRef((props: any, refVariable: any) => {
    return (
        <div>
            <input type="text" ref={refVariable} />
        </div>
    )
})
export default FnForm

// function FnForm(props: any, refVariable: any) {
//     return (
//         <div>
//             <input type="text" ref={refVariable} />
//         </div>
//     )
// }

// export default forwardRef(FnForm)
/**
 * const withRef = (comp)=>{
 *  class WithRef extends Component{
 *    render(){
 *      return <comp {...this.props}/>
 *    }
 *  }
 *  return WithRef
 * }
 * let FnForm = function (props:any, refVariable:any) {
    return (
        <div>
            <input type="text" ref={refVariable}/>
        </div>
    )
  }
 * FnForm = withRef(FnForm)

   fnFormRef= createRef<FnForm>()
 * <FnForm ref={this.fnFormRef} data={10}/>
 */
