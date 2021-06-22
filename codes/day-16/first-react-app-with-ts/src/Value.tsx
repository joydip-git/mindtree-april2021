// import { ChangeEvent } from "react";

/**
 * {
 *  val:10,
 *  changeHandler:{this.changeValue}
 * }
 */
// interface Person {
//     name: string;
//     id: number;
//     salary: number;
// }
type valuePropertyType = {
    val: number,
    changeHandler: Function,
    person?: {
        name: string;
        id: number;
        salary: number;
    }
    //person?: Person
}
//the props is immutable
const Value = (props: valuePropertyType) => {
    //props object is readonly
    //props.val=12;
    const divStyle = {
        color: 'blue'
    }
    return (
        <div id='mainDiv' style={divStyle}>
            <div style={{ textAlign: 'center' }}>
                Increment By:
                <input
                    type="number"
                    onChange=
                    {
                        (ev) => {
                            let v = +ev.target.value
                            if (!isNaN(v))
                                props.changeHandler(v)
                        }
                    }
                />
                <br />
                {/* <button onClick={props.changeHandler}>Increment</button> */}
            </div>
            <br />
            <p>
                Value:&nbsp; {props.val}
            </p>
        </div>
    )
}

export default Value;

/**
 * React Element object representing the root element
 *{
    type:'div',
    props:{
       val:10,
       changeHandler:{this.changeValue},
       id:'mainDiv',
       style:{{color: 'blue'}},
       children:[]
    }
  }
 */