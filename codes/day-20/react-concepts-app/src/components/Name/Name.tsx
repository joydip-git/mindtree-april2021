type NamePropType = {
    name: string,
    nameHandler: (arg: string) => void
}
function Name(props: NamePropType) {
    return (
        <div>
            <div>
                Enter Name:&nbsp;
                <input type="text" onChange={
                    (eventObj) => {
                        props.nameHandler(eventObj.target.value)
                    }
                } />
            </div>
            <p>
                Name:&nbsp;&nbsp;
                {
                    props.name === '' ? 'NA' : props.name
                }
            </p>
        </div>
    )
}
export default Name