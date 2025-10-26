const { GLib } = imports.gi;
import { Variable } from "astal"

export const datetime = Variable(
    GLib.DateTime.new_now_local()
    // GLib.DateTime.new_local(2048, 2, 11, 20, 48, 0)
).poll(1000, () => {
    // GLib.spawn_command_line_async("play ~/sfx/tick.wav");
    return GLib.DateTime.new_now_local()
})

export function datetime_f(format: string) {
    return datetime().as(dt => dt.format(format))
}

export function gmod(a, b) {
    return ((a % b) + b) % b
}
