import qs.services
import qs.widgets
import QtQuick
import QtQuick.Controls
import Quickshell
import Quickshell.Wayland

PanelWindow {
    property var modelData
    screen: modelData

    // WlrLayershell.layer: WlrLayer.Overlay
    exclusionMode: ExclusionMode.Ignore
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
            "MMM. dd. ddd\nHH:mm:ss"
        )
        horizontalAlignment: Text.AlignHCenter
        anchors.centerIn: parent
        font.pixelSize: 42
    }
}
