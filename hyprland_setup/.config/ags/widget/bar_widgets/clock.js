import { datetime } from "../../variables.js"

const Clock = () => {
    const format_idx = Variable(0)
    const formats = [
        "%H:%M",
        // "%y-%m-%d %a",
        "%H:%M:%S",
        // "%H:%M:%S.%f",
    ]

    const gmod = (a, b) => ((a % b) + b) % b
    const change_format = (dir) => {
        format_idx.value = gmod(format_idx.value + dir, formats.length)
    }

    const clock_label = Widget.Label({
        label: Utils.merge(
            [datetime.bind(), format_idx.bind()],
            (dt, fi) => dt.format(formats[fi])
        )
    })

    return Widget.EventBox({
        on_scroll_up: () => change_format(-1),
        on_scroll_down: () => change_format(+1),
        on_primary_click_release: () => change_format(+1),

        // child: Widget.Box({
        //     vertical: true,
        //     children: [
        //         Widget.Label("hi"),
        //         clock_label,
        //         Widget.Label("hi"),
        //     ]
        // }),

        child: clock_label,
    })
}

export default Clock
