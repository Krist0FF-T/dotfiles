pragma Singleton
import QtQuick
import Quickshell

Singleton {
    id: root
    readonly property var date: sysclock.date

    SystemClock {
        // explanation:
        id: sysclock
        precision: SystemClock.Seconds
    }
}
