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

        exclusionMode: ExclusionMode.Ignore
        WlrLayershell.layer: WlrLayer.Bottom
        // anchors.top: true
        anchors.bottom: true
        anchors.left: true
        // anchors.right: true
        color: "green"
        implicitWidth: child.implicitWidth + 20
        implicitHeight: child.implicitHeight + 20

        Rectangle {
            anchors.fill: parent
            color: "red"
        }

        StyledText {
            id: child
            text: Qt.formatDateTime(
                DateTime.date,
                "dd ddd HH:mm:ss"
            )
            anchors.centerIn: parent
            // anchors.bottom: true
            // anchors.fill: parent
        }
    }
}
