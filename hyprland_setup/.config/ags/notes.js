
 ///////////////////////////////////////
//                                     //
//  # 1: Define widgets as functions!  //
//                                     //
 ///////////////////////////////////////

// Because unused widgets will be destroyed, but
// still try to set its value if its binding
// changes, and will result in an error

// Don't do this!
const myWidget = Widget.ProgressBar({
    value: Audio.speaker.bind("volume"),
    // ...
})

// Do this instead:
const MyWidget = () => Widget.ProgressBar({
    // ...
})

