import Audio from "resource:///com/github/Aylur/ags/service/audio.js";
import { Indicator, VolumeIndicator } from "./indicator.js"
import { datetime } from "./variables.js"

const changeVolume = (direction) => {
    if (!Audio.speaker)
        return

    const step = 0.05

    let p = Audio.speaker.volume // * 100

    // round ($p + $step) to the closest number divisible by $step
    // (p + step*direction) / step = (p/step + direction)
    p = Math.round(p/step + direction) * step


    Audio.speaker.volume = p // / 100
}

// const WidgetArray = (a, b, f) => Array.from({ length: a }, () => Widget.Box({
//     vertical: true,
//     children: Array.from({ length: b}, f),
// }))

const BarSection = ({
    hpack,
    children,
}) => Widget.Box({
    margin: 10,
    hpack: hpack,
    children: children,
})

const Left = () => BarSection({
    hpack: "start",
    children: [
        // VolumeIndicator(),
        Widget.Label({
            label: datetime.bind().as(dt => dt.format("%h:%M"))
        }),
    ],
})

const Center = () => BarSection({
    hpack: "center",
    children: [
        // Widget.Label("Szia!")
        VolumeIndicator(),
    ]
})

const Right = () => BarSection({
    hpack: "end",
    children: [
        Widget.Label("Lajos!")
    ],
})

const Bar = () => Widget.Window({
    visible: false,
    //css: "background: rgba(0, 0, 0, 1);",
    margins: [10],
    name: "bar",
    class_name: "bar",
    anchor: ["top", "left", "right"],
    // anchor: ["top"],
    exclusivity: "ignore",

    // child: Indicator({
    //     value: Audio.speaker.bind(),
    // }),

    // child: Center(),

    child: Widget.CenterBox({
        start_widget: Left(),
        center_widget: Center(),
        end_widget: Right(),
    }),

    keymode: "exclusive",
}).keybind("q", () => App.closeWindow("bar"))
  .keybind("a", () => Audio.speaker.is_muted = !Audio.speaker.is_muted)
  .keybind("s", () => changeVolume(-1))
  .keybind("d", () => changeVolume(1))

export default Bar

