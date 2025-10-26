const audio = await Service.import("audio")
import { VolumeIndicator } from "./indicator.js"

const changeVolume = (direction) => {
    if (!audio.speaker)
        return

    const step = 0.05

    let p = audio.speaker.volume // * 100

    // round ($p + $step) to the closest number divisible by $step
    // (p + step*direction) / step = (p/step + direction)
    p = Math.round(p/step + direction) * step

    audio.speaker.volume = p // / 100
}

const VolChanger = () => Widget.Window({
    name: "volchanger",
    class_name: "volchanger",
    layer: "overlay",
    visible: false,
    margins: [10],
    anchor: ["top"],
    exclusivity: "ignore",
    keymode: "exclusive",
    child: VolumeIndicator(),
    setup: self => {
        self.keybind("q", () => App.closeWindow("volchanger"))
        self.keybind("a", () => audio.speaker.is_muted = !audio.speaker.is_muted)
        self.keybind("s", () => changeVolume(-1))
        self.keybind("d", () => changeVolume(1))

        // let cmds = [
        // ]
    }
})

export default VolChanger
