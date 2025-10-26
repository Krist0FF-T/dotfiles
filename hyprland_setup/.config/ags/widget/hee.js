const { GLib, Gdk } = imports.gi;
// import { VolumeIndicator } from "./indicator.js"
// import { rand_text } from "../variables.js"
import { datetime } from "../variables.js"

const hee_text = Variable("...")

const Hee = () => {

    // const entry = Widget.Entry({
    //     css: "opacity: 0;",
    //     text: "",
    //     visible: false,
    //     on_change: ({ text }) => {
    //         hee_text.value = text
    //     }
    // })

    const label = Widget.Label({
        class_name: "hee-text",
        // label: hee_text.bind(),
        label: datetime.bind().as(dt => dt.format("%H:%M:%S")),
        justification: "center",
        useMarkup: true,
        wrap: true,
    })

    const win = Widget.Window({
        name: "hee",
        class_name: "hee",
        layer: "overlay",
        visible: false,
        exclusivity: "ignore",
        // keymode: "exclusive",
        keymode: "ignore",

        anchor: ["left", "right", "top", "bottom"],

        child: Widget.CenterBox({
            vertical: true,

            // start_widget: Widget.Box({
            //     vertical: true,
            //     children: [entry],
            // }),

            // start_widget: entry,
            center_widget: label,
        })
    })

    const texts = [
        "Fizika kísérletek\n2024. 11. 07.\nGyörök Kristóf",
        "Köszönöm a\nfigyelmet! :)",
        "S;LWVtO0xXMXBPMlZGVVQwPQ=="
    ]

    // const texts = [
    //     "Nem tudsz kopogni...",
    //     "Csáá, Balázs!",
    //     "Ez nagyon vicces.",
    //     "HAHAHAHAHA",
    // ]

    // const texts = [
    //     "Sziapa!",
    //     "Megcsináltam, hogy bármit",
    //     "be lehessen ide írni",
    //     "ezek amúgy előre beírt szövegek",
    //     "billentyűkombinációkkal kiválasztható",
    // ]

    for (let i = 0; i < texts.length; i++) {
        win.keybind(["MOD1"], `${i+1}`, () => {
            const txt = texts[i]
            entry.text = ""
            hee_text.value = txt
            // entry.text = txt
        })
    }

    // win.keybind(["MOD1"], "k", () => label.label = "haha")
    win.keybind(["MOD1"], "k", () => print("oof"))

    return win

} // .keybind(["CONTROL"], "1", () => hee_text.value = "CSÁÁÁ, BALÁÁÁZS!")

export default Hee

