
export const LightTop = (monitor=0) => Widget.Window({
    monitor,
    name: `light-top-${monitor}`,
    class_name: "light top",
    anchor: ["top", "left", "right"],
    layer: "overlay",
    exclusivity: "ignore",
    child: Widget.Box({}),
})

export const LightBottom = (monitor=0) => Widget.Window({
    monitor,
    name: `light-bottom-${monitor}`,
    class_name: "light bottom",
    anchor: ["bottom", "left", "right"],
    layer: "overlay",
    exclusivity: "ignore",
    child: Widget.Box({}),
})

export const LightLeft = (monitor=0) => Widget.Window({
    monitor,
    name: `light-left-${monitor}`,
    class_name: "light left",
    anchor: ["left", "top", "bottom"],
    layer: "overlay",
    exclusivity: "ignore",
    child: Widget.Box({}),
})

export const LightRight = (monitor=0) => Widget.Window({
    monitor,
    name: `light-right-${monitor}`,
    class_name: "light right",
    anchor: ["right", "top", "bottom"],
    layer: "overlay",
    exclusivity: "ignore",
    child: Widget.Box({}),
})

