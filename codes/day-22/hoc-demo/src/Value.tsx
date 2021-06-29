import withMemo from "./withMemo";

const Value = (props: any) => {
    console.log('[Value] rendered');
    return <div>
        {
            props.val ? props.val : 0
        }
        <br />
        <br />
        {
            props.showFn()
        }
    </div>
}
export default withMemo(Value)