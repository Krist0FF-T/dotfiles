#!/usr/bin/env python3
import os
import templates
from lib import Theme
from themes import themes
from util import restart_hyprpaper, reload_hypr


def next_theme(step: int = 1) -> Theme:
    # path = os.path.abspath("./current_theme")
    path = os.path.join(
        os.path.dirname(os.path.realpath(__file__)),
        "current_theme",
    )

    with open(path, "r") as f:
        txt = f.read().strip()

        next_idx = (int(txt) + step if txt.isdigit() else 0) % len(themes)

    with open(path, "w") as f:
        f.write(str(next_idx))

    key = list(themes.keys())[next_idx]
    return themes[key]


if __name__ == "__main__":
    theme: Theme = next_theme(1)

    # theme: Theme = themes["yellow"]
    # theme = themes["monokai"]
    # theme = themes["grayblue"]

    templates.ags(theme, "~/.config/ags/scss/colors.scss")
    templates.hypr(theme, "~/.config/hypr/colors.conf")
    reload_hypr()
    # templates.waybar(scheme, "~/.config/waybar/colors/custom_gen.css")

    if theme.wallpaper:
        templates.hyprpaper(theme.wallpaper, "~/.config/hypr/hyprpaper.conf")
        restart_hyprpaper()

