import Workspaces from "./bar_widgets/workspaces.js"
import Clock from "./bar_widgets/clock.js"
import Randchar from "./bar_widgets/randchar.js"
import {
    SysTray,
    Battery,
} from "./bar_widgets/other.js"

const BarSection = (
    pack,
    children,
) => Widget.Box({
    class_name: "bar-section " + pack,
    hpack: pack,
    children: children,
    // spacing: 10,
})

const Left = () => BarSection(
    "start",
    [ Workspaces() ]
)

const Center = () => BarSection(
    "center",
    [ Clock() ]
)

const Right = () => BarSection(
    "end",
    // [ SysTray(), Battery() ]
    [ SysTray(), Battery() ]
)

const Bar = () => Widget.Window({
    // margins: [10, 30, 0, 30],
    name: "bar",
    class_name: "bar",
    anchor: ["top", "left", "right"],
    exclusivity: "exclusive",

    child: Widget.CenterBox({
        class_name: "bar-container",
        start_widget: Left(),
        center_widget: Center(),
        end_widget: Right(),
    }),

})

export default Bar
