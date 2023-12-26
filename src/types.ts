import { Primitive } from "vanjs-core";

export type ComponentChild = Primitive | HTMLElement | (() => Primitive | HTMLElement);
