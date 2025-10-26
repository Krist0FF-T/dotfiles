const { GLib } = imports.gi;

export const datetime = Variable(GLib.DateTime.new_now_local(), {
    poll: [1000/1, () => GLib.DateTime.new_now_local()],
})

// export const datetime = Variable(GLib.DateTime.new_local(2008, 10, 19, 10, 24, 1))

// const texts = [
//     ":)",
//     ":|",
//     ":(",
//     ":|",
// ]

const texts =
    // "\\|/-"
    // "bdaá"
    // "ǎăåá"
    // "▲►▼◄"
    ".o0O0o."
    // "█▓▒░▒▓"

export const gmod = (a, b) => ((a % b) + b) % b
const text_idx = Variable(0, {
    // poll: [100, i => gmod(i+1, texts.length)],
    poll: [200, i => gmod(i.value+1, texts.length)],
})

export const rand_text = text_idx.bind().as(idx => `${idx+1}/${texts.length}   ${texts[idx]}`)
// export const rand_text = text_idx.bind().as(idx => texts[idx])

// const time_format = "%H:%M:%S\n.%f"
// export const rand_text = datetime.bind().as(dt => dt.format(time_format))

// const chars =
//     "abcdefghijklmnopqrstuvwxyz"
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     "0123456789"
//     "+-/*\\"
// function get_rand_char() {
//     const idx = Math.floor(Math.random() * chars.length)
//     return chars[idx]
// }
// export const rand_text = Variable("-", {
//     poll: [1000/30, () => {
//         var txt = ""
//         const w = 72;
//         const h = w/2*9/16;
//         for (let i=0; i < h; i++) {
//             if (i != 0)
//                 txt += "\n"
//             for (let j=0; j < w; j++) {
//                 txt += get_rand_char()
//             }
//         }
//         return txt
//     }]
// }).bind()


