import React from "react";

export function HelloWorld() {
    const pStyle = {
        'width': '200px',
        'height': '200px',
        'border': '1px solid red',
        'borderRadius': '3px'
    }
    const design = React.createElement(
        'p',
        {
            id: 'p',
            style: { pStyle }
        },
        'Hello World'
    )
    return design;
}