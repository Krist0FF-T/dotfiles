const { GLib } = imports.gi;

export const datetime = Variable(GLib.DateTime.new_now_local(), {
    poll: [16, () => GLib.DateTime.new_now_local()],
})


