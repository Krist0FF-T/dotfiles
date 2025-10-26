import { App } from "astal/gtk3"
import style from "./scss/main.scss"
import Bar from "./widget/Bar"
import Qs from "./widget/Qs"
import Hee from "./widget/Hee"
import VolumeLevel from "./widget/VolumeLevel"
import { exec, monitorFile } from "astal"

App.start({
    css: style,
    main() {
        Qs()
        Bar()
        Hee()
        // VolumeLevel()  // 250820: rewritten with Quickshell
    },
    requestHandler: requestHandler
})

function requestHandler(request: string, res: (response: any) => void) {
    if (request != "restyle") {
        res("Unknown")
        return
    }

    try {
        exec(`sass ${SRC}/scss/main.scss ${SRC}/style.css`)
        App.apply_css(`${SRC}/style.css`)
    } catch(err) {
        printerr('Error compiling scss files.', err)
    }

    return res("restyling")
}

