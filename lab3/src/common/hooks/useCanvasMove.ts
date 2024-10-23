import {PositionHandler, useDragAndDrop} from "./useDragAndDrop";
import {Point} from "../webGLUtils/painter";

const dummyHandler = () => {
}

export function useCanvasMove(canvas: HTMLCanvasElement, getPositionCallback: () => Point, setPosition: PositionHandler) {
    const position = getPositionCallback()
    const onMove = (delta: Point) => {
        const clientRect = canvas.getBoundingClientRect()
        if (clientRect) {
            delta.x = normalize(position.x + delta.x, -clientRect.width, clientRect.width)
            delta.y = normalize(position.y - delta.y, -clientRect.height, clientRect.height)
        }
        setPosition(delta)
    }

    useDragAndDrop(
        canvas,
        dummyHandler,
        onMove,
        dummyHandler,
    )
}

function normalize(value: number, min: number, max: number): number {
    if (value < min) {
        return min
    }
    if (value > max) {
        return max
    }
    return value
}