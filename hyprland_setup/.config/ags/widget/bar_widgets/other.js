const systemtray = await Service.import("systemtray")
const battery = await Service.import("battery")

const SysTray = () => Widget.Box({
    // class_name: "bar-section",
    children: systemtray.bind("items")
        .as(items => items.map(item => Widget.Button({
            child: Widget.Icon({ icon: item.bind("icon") }),
            on_primary_click: (_, event) => item.activate(event),
            on_secondary_click: (_, event) => item.openMenu(event),
            tooltip_markup: item.bind("tooltip_markup"),
        })))
})

const Battery = () => Widget.Box({
    // class_name: "bar-section",
    // spacing: 10,
    children: [
        Widget.Icon({
            // icon: battery.bind("percent").as(
            //     p => `battery-level-${Math.floor(p / 10) * 10}-symbolic`
            // )
            icon: battery.bind("icon-name")
        }),
        Widget.Revealer({
            child: Widget.Label({
                label: battery.bind("percent").as(
                    p => `${p}%`
                )
            }),
            reveal_child: battery.bind("charged").as(b => !b),
            transition_duration: 1000,
            transition: "slide_left",
        })
    ]
})

export { SysTray, Battery}

