import Gdk from 'gi://Gdk';

// import Wallpaper from "./widget/wallpaper.js";
import Bar from "./widget/bar.js"
import { FizBarL, FizBarR } from "./widget/fiz_bar.js"
// import Bar from "./widget/vbar.js"
import QuickSettings from "./widget/quicksettings.js"
import VolChanger from "./widget/volchanger.js"
import Hee from "./widget/hee.js"

const monitorCount = Gdk.Display.get_default()?.get_n_monitors() || 1

const forMonitors = widget => Array.from(
    { length: monitorCount },
    (_, i) => i
).map(widget).flat()

function apply_scss() {
    Utils.exec(`sass ${App.configDir}/scss/main.scss ${App.configDir}/style.css`);
    App.resetCss();
    App.applyCss(`${App.configDir}/style.css`);
}

await apply_scss()

// globalThis.reload = apply_scss

Utils.monitorFile(`${App.configDir}/scss`, apply_scss)


App.config({
    style: "./style.css",
    windows: [
        // Lights(),
        // forMonitors(LightBottom),
        // forMonitors(Wallpaper),
        // Bar(),
        Bar(),
        FizBarL(),
        FizBarR(),
        VolChanger(),
        QuickSettings(),
        Hee(),
        // DesktopWidgetWindow(1),
        // qs,
    ].flat()
})

