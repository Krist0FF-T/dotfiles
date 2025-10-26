
const hyprland = await Service.import("hyprland")

const exps = [
    "Sörösüveges kísérlet",              //  1
    "Magától felfújódó lufi (A)",        //  2
    "Magától felfújódó lufi (B)",        //  3
    "Tojásszippantó",                    //  4
    "Szomjas gyertya",                   //  5
    "Forralás injekciós fecskendőben",   //  6
    "Túlhűtött víz fagyása",             //  7
    "A jég olvadása sós és édes vízben", //  8
    "Felhő az üvegben",                  //  9
    "A víz halmazállapotai"              // 10
]

const exp_descs = [
    // 1. Sörösüveges kísérlet
    "T => p\nFelemeli az érmét",

    // 2. Magától felfújódó lufi (A)
    "T => p\nFelfújódik a lufi",

    // 3. Magától felfújódó lufi (B)
    "CO2 képződik, ami felfújja a lufit",

    // 4. Tojásszippantó
    "A hűvösebb levegő sűrűbb és benyomja a tojást",

    // 5. Szomjas gyertya
    "p => m",

    // 6. Forralás injekciós fecskendőben
    "",

    // 7. Túlhűtött víz fagyása
    "",

    // 8. Jég olvadása sós és édes vízben
    "a jég sűrűsége > hideg víz sűrűsége",

    // 9. Felhő az üvegben
    "a füst részecskék kondenzációs magvakként funkcionálnak",

    // 10. A víz halmazállapotai
    "jég -> víz -> gőz -> víz"
]

const exp_n = hyprland.active.workspace.bind("id").as(
    id => {
        const n = id - 3
        if (0 < n && n <= exps.length) {
            return n.toString()
        }
        return "0"
    }
)


const Title = (txt, white=false) => Widget.Label({
    class_name: "title" + (white ? " white" : ""),
    wrap: true,
    justification: "center",
    label: txt
})


const Section = (pack, child) => Widget.Box({
    class_name: "fiz-section",
    vpack: pack,
    hpack: "center",
    children: [child]
})


const FizBar = (
    name,
    start_widget,
    center_widget,
    end_widget
) => Widget.Window({
    visible: false,
    margins: name == "right" ? [30, 30, 30, 0] : [30, 0, 30, 30],
    name: `fiz_bar_${name}`,
    class_name: "fiz-bar",
    anchor: [name, "top", "bottom"],
    exclusivity: "exclusive",
    child: Widget.CenterBox({
        css: "min-width: 613px",
        vertical: true,
        start_widget,
        center_widget,
        end_widget
    })
})


export const FizBarL = () => {

    const exp_desc_children = {
        "0": Widget.Box()
    }

    for (let i=0; i < exp_descs.length; i++) {
        const k = (i + 1).toString()
        const v = exp_descs[i]
        exp_desc_children[k] = Title(v, true)
    }

    const exp_desc_widget = Widget.Stack({
        children: exp_desc_children,
        transition: "slide_left_right",
        transition_duration: 500,
        shown: exp_n
    })

    const bar_title_widget = Widget.Stack({
        children: {
            "0": Title(""),
            "1": Title("Magyarázat:"),
        },
        transition: "crossfade",
        transition_duration: 500,
        shown: exp_n
    })

    return FizBar(
        "left",
        Section(
            "start",
            bar_title_widget,
            // Title("Magyarázat")
        ),
        Section(
            "center",
            exp_desc_widget
        ),
        Section(
            "end",
            Widget.Box()
        ),
    )
}


export const FizBarR = () =>
{
    const exp_n_children = {
        "0": Widget.Box(),
    }

    const exp_title_children = {
        "0": Widget.Box(),
    }

    for (let i=0; i < exps.length; i++) {
        const k = (i + 1).toString()

        exp_n_children[k] = Title(
            // k
            // `${k}. kísérlet:`
            // `${k}/${exps.length}`
            `Kísérlet ${k}/${exps.length}`
        )

        exp_title_children[k] = Title(exps[i], true)
    }

    const exp_n_widget = Widget.Stack({
        children: exp_n_children,
        transition: "crossfade",
        transition_duration: 500,
        shown: exp_n
    })

    const exp_title_widget = Widget.Stack({
        children: exp_title_children,
        transition: "slide_left_right",
        transition_duration: 500,
        shown: exp_n
    })

    return FizBar(
        "right",
        Section(
            "start",
            exp_n_widget
        ),
        Section(
            "center",
            exp_title_widget
        ),
        Section(
            "end",
            Widget.Box({
                class_name: "date",
                vertical: true,
                children: [
                    Widget.Label("Györök Kristóf"),
                    Widget.Label("2024. 11. 07.")
                ]
            })
        )
    )
}

