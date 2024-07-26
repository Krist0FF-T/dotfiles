import Gdk from 'gi://Gdk';

import Bar from "./modules/bar.js"
import DesktopWidget from "./modules/desktop_widget.js"

// const monitorCount = Gdk.Display.get_default()?.get_n_monitors() || 1
const monitorCount = Gdk.Display.get_default()?.get_n_monitors() || 1

const forMonitors = widget => Array.from(
    { length: monitorCount },
    (_, i) => i
).map(widget).flat()

App.config({
    style: "./style.scss",
    windows: [
        Bar(),
        forMonitors(DesktopWidget),
        // qs,
    ].flat()
})

