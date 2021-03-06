/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        "first": string;
        "last": string;
        "middle": string;
    }
    interface NameComp {
        "name": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNameCompElement extends Components.NameComp, HTMLStencilElement {
    }
    var HTMLNameCompElement: {
        prototype: HTMLNameCompElement;
        new (): HTMLNameCompElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "name-comp": HTMLNameCompElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        "first"?: string;
        "last"?: string;
        "middle"?: string;
    }
    interface NameComp {
        "name"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "name-comp": NameComp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "name-comp": LocalJSX.NameComp & JSXBase.HTMLAttributes<HTMLNameCompElement>;
        }
    }
}
