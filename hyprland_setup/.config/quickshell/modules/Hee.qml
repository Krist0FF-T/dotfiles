import qs.widgets
import QtQuick
import Quickshell

PanelWindow {
    property var modelData
    screen: modelData

    // WlrLayershell.layer: WlrLayer.Overlay
    exclusionMode: ExclusionMode.Ignore
    // anchors.top: true
    // anchors.bottom: true
    anchors.left: true
    anchors.right: true
    // margins {
    //     left: 20
    //     right: 20
    // }

    // height: child.height + 
    focusable: true

    color: "transparent"

    Rectangle {
        id: child
        anchors.fill: parent
        // radius: 20

        // gradient: Gradient {
        //     orientation: Gradient.Vertical
        //     GradientStop { position: 0.0; color: "red" }
        //     GradientStop { position: 0.2; color: "white" }
        //     GradientStop { position: 0.8; color: "white" }
        //     GradientStop { position: 1.0; color: "green" }
        // }

        gradient: Gradient {
            orientation: Gradient.Horizontal
            GradientStop { position: 0.0; color: "blue" }
            GradientStop { position: 0.1; color: "black" }
            GradientStop { position: 0.9; color: "black" }
            GradientStop { position: 1.0; color: "blue" }
        }

        Column {
            anchors.centerIn: parent
            width: parent.width * 0.7

            // StyledText {
            //     // text: activeFocus ? "active!" : "inactive"
            //     text: txt.text
            //     horizontalAlignment: Text.AlignHCenter
            //     font.pixelSize: 64
            // }

            TextInput {
                id: txt
                focus: true
                anchors.centerIn: parent

                color: "#F8F8F2"
                font: mytext.font
                wrapMode: TextInput.Wrap
                width: parent.width * 0.8
                horizontalAlignment: Text.AlignHCenter
            }

            StyledText {
                id: mytext
                // anchors.centerIn: parent
                text: ""
                // text: Qt.formatDateTime(
                //     DateTime.date,
                //     "MMM. dd. ddd\nHH:mm:ss"
                // )
                horizontalAlignment: Text.AlignHCenter
                font.pixelSize: 64
            }

        }

    }
}
