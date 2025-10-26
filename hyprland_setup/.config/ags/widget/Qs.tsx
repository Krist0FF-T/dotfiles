import { App, Astal, Gtk, Gdk, astalify } from "astal/gtk3"
import { Variable, bind } from "astal"

import { datetime_f } from "../util"

export default function Qs() {

    let formats = [
        "%H:%M",
        "%y-%m-%d %a",
        "%V. hét; %j. nap",
    ]

    const Calendar = astalify(Gtk.Calendar)
    const Separator = astalify(Gtk.Separator)

    return <window
        visible={false}
        className="Qs"
        name="qs"
        exclusivity={Astal.Exclusivity.IGNORE}

        anchor={Astal.WindowAnchor.RIGHT}

        layer={Astal.Layer.OVERLAY}
        application={App}
    >
        <box vertical class="qsc">
            {formats.map(
                (format, i) => <label
                    label={datetime_f(format)}
                    className={i == 0 ? "time" : ""}
                    // className="time"
                />
            )}
            <Separator />
            <Calendar/>
            {/* <Calendar year={2048} month={1} day={4} /> */}
        </box>
    </window>
}
