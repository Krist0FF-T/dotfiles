const hyprland = await Service.import("hyprland")

function workspace_visible(i) {
    for (var monitor of hyprland.monitors) {
        if(monitor.activeWorkspace.id === i)
            return true
    }
    return false
}

const WorkspaceButton = (i) => Widget.Label({
    attribute: i,
    vpack: "center",
    label: `${i}`,
}).hook(hyprland, (button) => {
    button.toggleClassName("occupied", (hyprland.getWorkspace(i)?.windows || 0) > 0)
    button.toggleClassName("active", hyprland.active.workspace.id === i)
    button.toggleClassName("visible", workspace_visible(i))
})

const Workspaces = (vertical=false) => {
    const activeId = hyprland.active.workspace.bind("id")

    const workspaces = Array.from({ length: 8}, (_, a) => a+1)
        .map(i => WorkspaceButton(i))

    return Widget.Box({
        class_name: "workspaces",
        vertical: vertical,
        children: workspaces,
    }).hook(hyprland, (box) => box.children.map(btn => {
        btn.visible = hyprland.workspaces.some(ws => ws.id === btn.attribute)
    }))

}

export default Workspaces
