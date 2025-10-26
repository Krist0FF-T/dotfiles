import Hyprland from "gi://AstalHyprland"

export default function Workspaces() {
    const hyprland = Hyprland.get_default()

    return <box className="workspaces">
        {bind(hyprland, "workspaces").as(wss => wss
            .sort((a, b) => a.id - b.id)
            .filter(ws => ws.id > 0)
            .map(ws => <button
                className={bind(hyprland, "focusedWorkspace").as(fw =>
                    ws.id === fw.id ? "focused" : "")}
                onClicked={() => ws.focus()}
            >
                {ws.id}
            </button>)
        )}
    </box>
}

