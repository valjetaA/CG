import {Application} from "./common/webGLUtils/application";
import {Kikoriki} from "./application/kikoriki";
import {useCanvasMove} from "./common/hooks/useCanvasMove";

const view = new Kikoriki()
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement

    useCanvasMove(canvas, view.getPosition.bind(view), view.setPosition.bind(view))

    const game = new Application(canvas, view)
    game.start()
})
