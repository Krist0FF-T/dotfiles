const { GLib, Gdk } = imports.gi;
// import { VolumeIndicator } from "./indicator.js"
import { datetime } from "../variables.js"

const QSPart = (pack, children) => Widget.Box({
    vpack: pack,
    // vpack: "center",
    vertical: true,
    margin: 30,
    children
})

const QSStart = () => QSPart("start", [
    Widget.Label({
        class_name: "desktop-clock",
        label: datetime.bind().as(dt => dt.format("%H:%M"))
    }),

    Widget.Label({
        // label: "Nem kellene már...",
        label: datetime.bind().as(dt => dt.format("%y-%m-%d %a"))
    }),
    Widget.Label({
        // label: "Aludni? (Esetleg)",
        label: datetime.bind().as(dt => dt.format("%V. hét; %j. nap"))
    }),

    Widget.Separator({ vertical: true }),

    Widget.Calendar({
        class_name: "calendar"
    }),
])

const QSCenter = () => QSPart("center", [
])

const QSEnd = () => QSPart("end", [
    Widget.Label("(I use arch btw)")
])

const QuickSettings = () => Widget.Window({
    name: "quicksettings",
    class_name: "quicksettings",
    layer: "overlay",
    visible: false,
    exclusivity: "ignore",

    // anchor: ["right", "top", "bottom"],
    anchor: ["right"],
    // margins: [120, 0],

    // anchor: ["top", "bottom", "left", "right"],
    // margins: [120],

    // child: QSStart(),

    child: Widget.CenterBox({
        // homogeneous: true,
        vertical: true,
        start_widget: QSStart(),
        center_widget: QSCenter(),
        end_widget: QSEnd(),
    })

})

export default QuickSettings

