import Workspaces from "./bar_widgets/workspaces.js"
import Clock from "./bar_widgets/clock.js"

const BarSection = (
    pack,
    children,
) => Widget.Box({
    vertical: true,
    class_name: "bar-section " + pack,
    vpack: pack,
    children: children,
})

const Top = () => BarSection(
    "start",
    // [ Widget.Label("ha") ]
    [ Workspaces() ]
)

const Center = () => BarSection(
    "center",
    [ Widget.Label("ha") ]
    // [ Clock() ]
)

const Bottom = () => BarSection(
    "end",
    [ Widget.Label("ha") ]
)

const Bar = () => Widget.Window({
    margins: [20, 0, 20, 20],
    name: "bar",
    class_name: "bar",
    visible: true,
    anchor: ["left", "top", "bottom"],
    // anchor: ["top"],
    exclusivity: "exclusive",
    // exclusivity: "ignore",

    child: Widget.CenterBox({
        vertical: true,
        class_name: "bar-container",
        start_widget: Top(),
        center_widget: Center(),
        end_widget: Bottom(),
    }),

})

export default Bar
