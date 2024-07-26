import VolumeIndicator from "./indicator.js"
import { time } from "./variables.js"

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
                        label: time.bind(),
                    }),
                    Widget.Label({
                        vexpand: true,
                        class_name: "desktop-date",
                        label: "Szjajta!",
                        //on_clicked: () => Utils.execAsync("chromium https://www.youtube.com/watch?v=TTF-vNIxCLs")
                    }),
                ],
            }),

            //VolumeIndicator(true),
        ],
    }),
})

export default DesktopWidget
export {time}

