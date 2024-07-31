import Audio from "resource:///com/github/Aylur/ags/service/audio.js";

// const audio = await Service.import("audio")
// const audio = Audio

const CircularIndicator = ({
    value,
    label="",
    icon="",
    ...props
}) => Widget.CircularProgress({
    class_name: "indicator circular",
    value: value,
    start_at: 0.75,
    rounded: true,
    inverted: true,
    child: Widget.Label({
        label: label
    })
})

export const Indicator = (
    value,
    label,
    icon,
    props={}
) => Widget.Box({
    spacing: 10,
    children: [
        Widget.Icon({
            icon: icon
        }),
        Widget.ProgressBar({
            //widthRequest: 100,
            hpack: "center",
            vpack: "center",
            //class_name: "indicator",
            class_name: value.as(v => {
                let s = "indicator"
                if (v > 1) {
                    s += " indicator-extended"
                }
                return s
            }),
            value: value.as(p => p <= 1 ? p : (p-1)*2),
            vertical: props?.vertical || false,
            inverted: props?.vertical || false,
        }),
        Widget.Label({
            label: label
        }),
    ],
    ...props
})

export const VolumeIndicator = (circular=false) => {
    const icons = [
        [101, "overamplified"],
        [67, "high"],
        [34, "medium"],
        [1, "low"],
        [0, "muted"],
    ]

    function getIcon() {
        const icon = Audio.speaker?.is_muted ? "muted" : icons.find(
            v => (v[0] <= Audio.speaker.volume * 100)
        )[1] || "muted"

        return `audio-volume-${icon}-symbolic`

    }
    // const t = circular ? CircularIndicator : Indicator

    return Indicator(
        Audio.speaker.bind('volume'),
        Audio.speaker.bind('volume').as(v => Math.round(v*100).toString()),
        Utils.watch(getIcon(), Audio.speaker, getIcon),
    )
        // .hook(Audio.speaker, (self) => {
        // const v = Audio.speaker.volume
        // self.value = Math.round(v * 100).toString()
        // self.
    // })
}

