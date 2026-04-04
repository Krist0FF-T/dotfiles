import qs.services
import qs.widgets
import QtQuick
import Quickshell
import Quickshell.Wayland

Variants {
    model: Quickshell.screens

    PanelWindow {
        property var modelData
        screen: modelData

        // WlrLayershell.layer: WlrLayer.Overlay

        color: "transparent"
        anchors.top: true
        anchors.left: true
        anchors.right: true
        implicitHeight: 30

        Rectangle {
            anchors.fill: parent
            color: "#26292c"
        }

        StyledText {
            id: clock
            anchors.centerIn: parent
            // color: "white"
            text: Qt.formatDateTime(
                DateTime.date,
                "dd ddd HH:mm:ss"
            )
        }
    }
}
