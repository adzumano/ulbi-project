declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const className: IClassNames;
    export = className
}

declare module "*.svg" {
    import React = require("react");
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";

declare const __IS_DEV__: boolean
