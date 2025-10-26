import { App, Astal, Gtk, Gdk, astalify } from "astal/gtk3"
import { Variable, bind } from "astal"
import { datetime, gmod } from "../util"
import Tray from "gi://AstalTray"
import Battery from "gi://AstalBattery"
import Wp from "gi://AstalWp"
import Network from "gi://AstalNetwork"
import Hyprland from "gi://AstalHyprland"

function Workspaces() {
    const hyprland = Hyprland.get_default()

    return <box className="workspaces">
        {bind(hyprland, "workspaces").as(wss => wss
            .sort((a, b) => a.id - b.id)
            .filter(ws => ws.id > 0)
            .map(ws => <button
                className={bind(hyprland, "focusedWorkspace").as(fw =>
                    ws.id === fw.id ? "focused" : "")}
                onClicked={() => ws.focus()}
            >
                {ws.id}
            </button>)
        )}
    </box>
}

function Clock() {
    const formats = [
        "%H:%M",
        "%H:%M:%S",
        "%H:%M:%S.%f",
    ]

    let shown = Variable(0)
    function show_next(d=1) {
        shown.set(gmod(shown.get() + d, formats.length))
    }

    const label = Variable.derive(
        [shown, datetime],
        (i, dt) => dt.format(formats[i])
    )

    return <eventbox
        onClick={() => show_next(1)}
        onScroll={(_, d) => show_next(d.delta_y < 0 ? -1 : 1)}
    >
        {label()}
    </eventbox>
}

function BatteryLevel() {
    const bat = Battery.get_default()

    return <box
        className="Battery"
        visible={bind(bat, "isPresent")}
    >
        <icon icon={bind(bat, "batteryIconName")} />
        <label label={bind(bat, "percentage").as(p =>
            `${Math.floor(p * 100)}`
            // (p * 100).toFixed(2) + "%"
        )} />
    </box>
}

function SysTray() {
    const tray = Tray.get_default()

    return <box className="SysTray">
        {bind(tray, "items").as(items => items.map(item => (
            <menubutton
                tooltipMarkup={bind(item, "tooltipMarkup")}
                usePopover={false}
                actionGroup={bind(item, "actionGroup").as(ag => ["dbusmenu", ag])}
                menuModel={bind(item, "menuModel")}>
                <icon gicon={bind(item, "gicon")} />
            </menubutton>
        )))}
    </box>
}

function Wifi() {
    const network = Network.get_default()
    const wifi = bind(network, "wifi")

    return <box visible={wifi.as(Boolean)}>
        {wifi.as(wifi => wifi && (
            <icon
                tooltipText={bind(wifi, "ssid").as(String)}
                className="Wifi"
                icon={bind(wifi, "iconName")}
            />
        ))}
    </box>
}

function VolumeLevel() {
    const speaker = Wp.get_default()?.audio.defaultSpeaker!

    return <box
        className="Volume"
    >
        <icon icon={bind(speaker, "volumeIcon")} />
        <label label={bind(speaker, "volume").as(p =>
            `${Math.round(p * 100)}`
        )} />
    </box>
}

export default function Bar(gdkmonitor: Gdk.Monitor) {
    return <window
        className="Bar"
        // gdkmonitor={gdkmonitor}
        name="bar"
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={Astal.WindowAnchor.TOP
            | Astal.WindowAnchor.LEFT
            | Astal.WindowAnchor.RIGHT}
        application={App}>
        <centerbox>
            <box halign={Gtk.Align.START} className="QsPart start">
                {Workspaces()}
            </box>
            <box halign={Gtk.Align.CENTER} className="QsPart center">
                {Clock()}
            </box>
            <box halign={Gtk.Align.END} className="QsPart end" spacing={10}>
                {/* <SysTray /> */}
                <Wifi />
                <BatteryLevel />
                <VolumeLevel />
            </box>
        </centerbox>
    </window>
}
