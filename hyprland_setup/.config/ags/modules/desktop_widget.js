import { VolumeIndicator } from "./indicator.js"
import { datetime } from "./variables.js"
const { GLib } = imports.gi;

const DesktopWidget = (monitor = 0) => Widget.Window({
    name: `desktop_widget_${monitor}`,
    monitor,
    class_name: "desktop-widget",
    layer: "background",
    exclusivity: "ignore",
    //anchor: ["bottom", "left"],
    anchor: ["top"],
    margins: [80],
    child: Widget.Box({
        spacing: 20,
        margin: 30,
        children: [
            //VolumeIndicator(true, {vexpand: true}),

            Widget.Box({
                vertical: true,
                children: [
                    Widget.Label({
                        class_name: "desktop-clock",
                        // label: time.bind(),
                        label: datetime.bind().as(dt => dt.format("%H:%M").split("").reverse().join(""))
                    }),
                    Widget.Label({
                        class_name: "desktop-date",
                        // label: "Szia, Lajos! XD",
                        label: datetime.bind().as(dt => dt.format("%Y-%m-%d, w%V, d%j").split("").reverse().join(""))
                    }),
                    // Widget.Label({
                    //     class_name: "desktop-week",
                    //     label: datetime.bind().as(dt => dt.format("w%V, d%j").split("").reverse().join(""))
                    // }),
                ],
            }),

            //VolumeIndicator(true),
        ],
    }),
})

export default DesktopWidget

