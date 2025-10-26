import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable, bind } from "astal"

import { datetime_f } from "../util"

export default function Hee() {
    let dimmed = Variable(true)

    const entry = <entry valign={Gtk.Align.START}/>

    function keypress(win: Astal.Window, event: Gdk.Event) {
        if (event.get_keyval()[1] == Gdk.KEY_Escape) {
            dimmed.set(!dimmed.get())
        }
    }

    function setup(win) {
        win.hook(dimmed, (_, b) => {
            win.toggleClassName("dimmed", b)
        })
    }

    return <window
        className="Hee dimmed"
        name="hee"
        exclusivity={Astal.Exclusivity.IGNORE}
        visible={false}

        keymode={Astal.Exclusivity.EXCLUSIVE}
        onKeyPressEvent={keypress}

        anchor={Astal.WindowAnchor.RIGHT
            | Astal.WindowAnchor.TOP
            | Astal.WindowAnchor.BOTTOM
            | Astal.WindowAnchor.LEFT}

        layer={Astal.Layer.OVERLAY}
        application={App}
        setup={setup}
    >
        <centerbox vertical hpack="center" vpack="center">
            {entry}

            <box vertical className="hee-text">
                {bind(entry, "text").as(txt => {
                    return txt.split("\\").map(line => {
                        if (line.length == 0) {
                            line = "%H:%M:%S"
                        }
                        return <label
                            truncate
                            label={datetime_f(line)}
                        />
                    })
                })}
            </box>

            <box/>
        </centerbox>
    </window>
}
