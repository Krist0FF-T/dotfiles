
# Color = tuple[int, int, int]

class Color:
    def __init__(self, r: int, g: int, b: int):
        self.r, self.g, self.b = r, g, b

    def get_values(self) -> list[int]:
        v = [self.r, self.g, self.b]
        return v

    @classmethod
    def from_hex(cls, hex_code: str):
        hex_code = hex_code.lstrip("#")

        if len(hex_code) in [3, 4]:
            hex_code = "".join([c * 2 for c in hex_code])

        def part(n: int):
            start = n * 2
            end = (n + 1) * 2

            if len(hex_code) >= end:
                return int(hex_code[start:end], 16)

            return 255

        r, g, b = [part(i) for i in range(3)]

        return cls(r, g, b)

    def to_hex(self, stripped=False):
        s = "" if stripped else "#"
        s += "{:02x}".format(self.r)
        s += "{:02x}".format(self.g)
        s += "{:02x}".format(self.b)
        return s

    def to_rgb(self, sep=", "):
        lst = [self.r, self.g, self.b]
        return sep.join(list(map(str, lst)))


def hexc(code):
    return Color.from_hex(code)


class Theme:
    def_colors = dict(
        background=Color(24, 24, 24),
        foreground=Color(255, 255, 255),
        primary=Color(0, 255, 0),
        secondary=Color(0, 255, 255),
        error=Color(255, 0, 0),
    )

    def __init__(
        self,
        # for example [<custom colors>, <colors to default to>]
        *mix: dict[str, Color],
        wallpaper: str | None = None,
    ):
        def get_color(key: str) -> Color:
            for colors in mix:
                if key in colors:
                    return colors[key]

            return Theme.def_colors[key]

        self.colors = {
            key: get_color(key)
            for key in Theme.def_colors.keys()
        }

        self.wallpaper = wallpaper
