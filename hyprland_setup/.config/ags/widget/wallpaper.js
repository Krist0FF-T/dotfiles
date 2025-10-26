const Wallpaper = (monitor = 0) => Widget.Window({
    name: `wallpaper_${monitor}`,
    monitor,
    class_name: "wallpaper",
    layer: "background",
    exclusivity: "ignore",
    anchor: ["top", "right", "bottom", "left"],
})

export default Wallpaper

