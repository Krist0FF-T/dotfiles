pragma Singleton
import QtQuick
import Quickshell

Singleton {
    id: root
    readonly property var date: sysclock.date

    SystemClock {
        id: sysclock
        precision: SystemClock.Seconds
    }
}
