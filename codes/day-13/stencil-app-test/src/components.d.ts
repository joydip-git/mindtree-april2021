/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
    }
    interface SampleComp {
        "Contact": any;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSampleCompElement extends Components.SampleComp, HTMLStencilElement {
    }
    var HTMLSampleCompElement: {
        prototype: HTMLSampleCompElement;
        new (): HTMLSampleCompElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "sample-comp": HTMLSampleCompElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
    }
    interface SampleComp {
        "Contact"?: any;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "sample-comp": SampleComp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sample-comp": LocalJSX.SampleComp & JSXBase.HTMLAttributes<HTMLSampleCompElement>;
        }
    }
}
