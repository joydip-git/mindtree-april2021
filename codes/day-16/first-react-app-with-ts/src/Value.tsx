// import { ChangeEvent } from "react";

/**
 * {
 *  val:10,
 *  changeHandler={this.changeValue}
 * }
 */
const Value = (props: any) => {
    return (
        <div>
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