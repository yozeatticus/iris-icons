/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyIcon {
        "color": string;
        "name": string;
        "size": string;
    }
}
declare global {
    interface HTMLMyIconElement extends Components.MyIcon, HTMLStencilElement {
    }
    var HTMLMyIconElement: {
        prototype: HTMLMyIconElement;
        new (): HTMLMyIconElement;
    };
    interface HTMLElementTagNameMap {
        "my-icon": HTMLMyIconElement;
    }
}
declare namespace LocalJSX {
    interface MyIcon {
        "color"?: string;
        "name"?: string;
        "size"?: string;
    }
    interface IntrinsicElements {
        "my-icon": MyIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-icon": LocalJSX.MyIcon & JSXBase.HTMLAttributes<HTMLMyIconElement>;
        }
    }
}
