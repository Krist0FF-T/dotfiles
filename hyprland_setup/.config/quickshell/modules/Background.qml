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

        WlrLayershell.layer: WlrLayer.Background
        anchors.top: true
        anchors.bottom: true
        anchors.left: true
        anchors.right: true

        Rectangle {
            anchors.fill: parent
            color: "black"
        }

        StyledText {
            text: Qt.formatDateTime(
                DateTime.date,
                "dd ddd HH:mm:ss"
            )
            anchors.centerIn: parent
        }
    }
}
