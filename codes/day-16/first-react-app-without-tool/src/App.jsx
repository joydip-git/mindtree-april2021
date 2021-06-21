import React from "react";
import { HelloWorld } from "./HelloWorld";
import HelloReact from "./HelloReact";
function App() {
    const appDesign = (
        <div>
            {/* <HelloWorld /> */}
            {/* <HelloReact /> */}
            {
                HelloWorld()
            }
            {
                HelloReact()
            }
        </div>
    )
    return appDesign;
}
export default App;