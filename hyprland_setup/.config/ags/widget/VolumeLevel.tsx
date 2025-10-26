import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable, bind } from "astal"
import Wp from "gi://AstalWp"

export default () => {
    const speaker = Wp.get_default()?.audio.defaultSpeaker!

    const b = <box
        className="Volume"
        // visible={bind(bat, "isPresent")}
    >
        <icon icon={bind(speaker, "volumeIcon")} />
        <label label={bind(speaker, "volume").as(p =>
            `${Math.round(p * 100)}`
        )} />
    </box>

    function setup(win) {
        // speaker.connect("volume-changed", _ => { print("haha") })
        // win.hook(speaker, _ => {
        //     print("haha")
        // })
    }

    return <window
        visible={false}
        className="VolumeLevel"
        name="volume_level"
        exclusivity={Astal.Exclusivity.IGNORE}
        margin={10}

        // keymode={Astal.Exclusivity.EXCLUSIVE}
        // onKeyPressEvent={keypress}

        anchor={Astal.WindowAnchor.BOTTOM}

        layer={Astal.Layer.OVERLAY}
        application={App}
        setup={setup}
    >
        <box>
        {b}
        </box>
    </window>
}
