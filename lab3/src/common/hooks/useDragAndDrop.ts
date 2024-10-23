import {Point} from "../webGLUtils/painter";

export type PositionHandler = (position: Point) => void

export function useDragAndDrop(element: HTMLElement, onDown: PositionHandler, onMove: PositionHandler, onUp: PositionHandler): void {
    let isActive: boolean = false
    let pagePosition: Point = {x: 0, y: 0}
    let currentPosition: Point = {x: 0, y: 0}

    const onMoveHandler = (e: MouseEvent) => {
        isActive = true
        currentPosition = {
            x: e.pageX - pagePosition.x,
            y: e.pageY - pagePosition.y
        }
        onMove(currentPosition)
    }

    const onUpHandler = (_: MouseEvent) => {
        isActive && onUp(currentPosition)
        document.removeEventListener('mousemove', onMoveHandler)
        document.removeEventListener('mouseup', onUpHandler)
    }

    const onDownHandler = (e: Event) => {
        isActive = false
        pagePosition = {
            x: (e as MouseEvent).pageX,
            y: (e as MouseEvent).pageY
        }
        onDown(pagePosition)

        document.addEventListener('mousemove', onMoveHandler)
        document.addEventListener('mouseup', onUpHandler)
    }

    element.addEventListener('mousedown', onDownHandler)
}
