type ValuePropType = {
    dataValue: number,
    dataHandler: () => void
}
function Value(props: ValuePropType) {
    console.log('[Value] rendered');
    return (
        <div>
            <div>
                <button onClick={props.dataHandler}>Increase</button>
            </div>
            <p>
                Value:&nbsp;&nbsp; {props.dataValue}
            </p>
        </div>
    )
}
export default Value