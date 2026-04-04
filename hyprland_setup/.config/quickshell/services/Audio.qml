pragma Singleton

import Quickshell
import Quickshell.Services.Pipewire

Singleton {
    id: root

    readonly property PwNode sink: Pipewire.defaultAudioSink
    readonly property real volume: sink?.audio?.volume ?? 0
    readonly property bool muted: sink?.audio?.muted ?? false

    function setVolume(value) {
        if (sink?.ready && sink?.audio) {
            sink.audio.volume = value;
        }
    }

    PwObjectTracker {
        objects: [ Pipewire.defaultAudioSink ]
    }
}
