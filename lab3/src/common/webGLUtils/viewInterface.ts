import {Painter} from "./painter";

export interface ViewInterface {
    render(painter: Painter): void
}