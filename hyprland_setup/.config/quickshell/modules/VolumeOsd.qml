import QtQuick
import Quickshell
import Quickshell.Wayland
import Quickshell.Widgets
import QtQuick.Layouts
import qs.services
import qs.widgets

PanelWindow {
    id: root
    WlrLayershell.layer: WlrLayer.Overlay

	color: "transparent"
	implicitHeight: 50

	anchors.bottom: true
	margins.bottom: screen.height / 10
	exclusiveZone: 0

	// An empty click mask prevents the window from blocking mouse events.
	mask: Region {}

	Rectangle {
		anchors.fill: parent
		radius: height / 2
		color: "#80000000"

		RowLayout {
			anchors {
				fill: parent
				leftMargin: 10
				rightMargin: 10
			}

			IconImage {
				implicitSize: 30
                source: (() => {
                    let e = Quickshell.iconPath(iconName())
                    print(e)
                    return e
                })()

                function iconName() {
                    if (Audio.muted) {
                        return "audio-volume-muted-symbolic"
                    }
                    const percentage = Math.round(Audio.volume * 100)
                    if (percentage < 30) {
                        return "audio-volume-low-symbolic"
                    }
                    if (percentage < 70) {
                        return "audio-volume-medium-symbolic"
                    }
                    return "audio-volume-high-symbolic"
                }
			}

			StyledText {
			    id: volumeText
                Layout.fillWidth: true
                Layout.alignment: Qt.AlignVCenter
                font.pixelSize: 16
                color: "white"
                text: Math.round(Audio.volume * 100) + "%"
			}
		}
	}
}
