import os
import time
import tkinter as tk
from tkinter import font as tkfont

APP_TITLE = "ELYTRA"
W, H = 900, 600
FPS = 60

# Couleurs proches de la DA (tu peux ajuster)
BG_TOP = "#2B0B4A"
BG_BOTTOM = "#3A0F63"
GOLD = "#D6B56C"
WHITE = "#FFFFFF"

ASSETS_DIR = "assets"
LOGO_PATH = os.path.join(ASSETS_DIR, "logo.png")
FONT_PATH = os.path.join(ASSETS_DIR, "Elytra.ttf")  # mets ici la vraie police de la marque si tu l'as

# Textes
TITLE_TEXT = "ELYTRA"
SUBTITLE_TEXT = ""  # ex: "L’agence de voyage dédiée\nà l’e-sport"


def hex_to_rgb(hx: str):
    hx = hx.lstrip("#")
    return tuple(int(hx[i:i+2], 16) for i in (0, 2, 4))


def rgb_to_hex(rgb):
    return "#{:02x}{:02x}{:02x}".format(*rgb)


def lerp(a, b, t):
    return a + (b - a) * t


def ease_out_cubic(t):
    return 1 - (1 - t) ** 3


def mix_color(c1, c2, t):
    r1, g1, b1 = hex_to_rgb(c1)
    r2, g2, b2 = hex_to_rgb(c2)
    r = int(lerp(r1, r2, t))
    g = int(lerp(g1, g2, t))
    b = int(lerp(b1, b2, t))
    return rgb_to_hex((r, g, b))


class ElytraApp:
    def __init__(self, root: tk.Tk):
        self.root = root
        self.root.title(APP_TITLE)
        self.root.geometry(f"{W}x{H}")
        self.root.configure(bg=BG_TOP)

        self.canvas = tk.Canvas(root, width=W, height=H, highlightthickness=0)
        self.canvas.pack(fill="both", expand=True)

        # Dégradé simple (bandes)
        self._draw_gradient()

        # Police : fichier .ttf si présent, sinon fallback
        self.title_font_family = self._load_font_family()
        self.base_title_size = 92

        self.title_font = tkfont.Font(family=self.title_font_family, size=self.base_title_size, weight="bold")
        self.subtitle_font = tkfont.Font(family=self.title_font_family, size=20)

        # Logo (si présent)
        self.logo_img = None
        self.logo_id = None
        if os.path.exists(LOGO_PATH):
            try:
                self.logo_img = tk.PhotoImage(file=LOGO_PATH)
            except Exception:
                self.logo_img = None

        # Positions
        self.center_x = W // 2
        self.title_target_y = int(H * 0.56)
        self.logo_target_y = int(H * 0.40)

        # Éléments canvas
        if self.logo_img:
            self.logo_id = self.canvas.create_image(
                self.center_x, self.logo_target_y + 40, image=self.logo_img
            )
        else:
            # Placeholder si logo absent
            self.logo_id = self.canvas.create_oval(
                self.center_x - 55, self.logo_target_y - 55,
                self.center_x + 55, self.logo_target_y + 55,
                outline=GOLD, width=4
            )

        # Texte (on “simule” le fade en interpolant la couleur du BG vers le blanc)
        self.title_id = self.canvas.create_text(
            self.center_x, self.title_target_y + 60,
            text=TITLE_TEXT,
            fill=BG_TOP,
            font=self.title_font
        )

        self.subtitle_id = None
        if SUBTITLE_TEXT.strip():
            self.subtitle_id = self.canvas.create_text(
                self.center_x, self.title_target_y + 70,
                text=SUBTITLE_TEXT,
                fill=BG_TOP,
                font=self.subtitle_font,
                justify="center"
            )

        # Animation
        self.start_time = time.perf_counter()
        self.duration = 1.15  # secondes
        self.root.after(int(1000 / FPS), self.animate)

        # Quitter avec Echap
        self.root.bind("<Escape>", lambda e: self.root.destroy())

    def _draw_gradient(self):
        steps = 80
        for i in range(steps):
            t = i / (steps - 1)
            col = mix_color(BG_TOP, BG_BOTTOM, t)
            y0 = int((H / steps) * i)
            y1 = int((H / steps) * (i + 1))
            self.canvas.create_rectangle(0, y0, W, y1, outline="", fill=col)

    def _load_font_family(self):
        # Tkinter ne “charge” pas toujours une police custom de manière uniforme selon OS.
        # Si ça marche sur ta machine, super. Sinon, fallback system.
        if os.path.exists(FONT_PATH):
            try:
                # Astuce : sur Windows/macOS, Tk peut détecter la police si installée.
                # Le plus fiable reste d'installer la police sur le système.
                # On garde quand même un nom “Elytra” au cas où tu l’installes.
                return "Elytra"
            except Exception:
                pass
        # Fallback : des polices fréquentes
        for fam in ("Montserrat", "Gotham", "Avenir Next", "Arial", "Helvetica"):
            if fam in tkfont.families():
                return fam
        return "Arial"

    def animate(self):
        t = (time.perf_counter() - self.start_time) / self.duration
        if t > 1:
            t = 1

        e = ease_out_cubic(t)

        # Slide in (depuis le bas) + léger overscale (en changeant la taille)
        title_y = lerp(self.title_target_y + 60, self.title_target_y, e)
        self.canvas.coords(self.title_id, self.center_x, title_y)

        # “Fade” en interpolant la couleur vers WHITE
        self.canvas.itemconfig(self.title_id, fill=mix_color(BG_TOP, WHITE, e))

        # Petit zoom : change la taille de police (simple et efficace)
        size = int(lerp(self.base_title_size - 6, self.base_title_size, e))
        if size < 10:
            size = 10
        self.title_font.configure(size=size)

        # Logo : petit slide + apparition (outline/couleur simulée)
        logo_y = lerp(self.logo_target_y + 40, self.logo_target_y, e)
        if self.logo_img:
            self.canvas.coords(self.logo_id, self.center_x, logo_y)
        else:
            # placeholder oval : on déplace le cercle
            x0, y0, x1, y1 = self.canvas.coords(self.logo_id)
            cx = (x0 + x1) / 2
            cy = (y0 + y1) / 2
            dy = logo_y - cy
            self.canvas.move(self.logo_id, 0, dy)
            self.canvas.itemconfig(self.logo_id, outline=mix_color(BG_TOP, GOLD, e))

        # Subtitle
        if self.subtitle_id is not None:
            sub_y = lerp(self.title_target_y + 95, self.title_target_y + 82, e)
            self.canvas.coords(self.subtitle_id, self.center_x, sub_y)
            self.canvas.itemconfig(self.subtitle_id, fill=mix_color(BG_TOP, "#D9D1E6", e))

        if t < 1:
            self.root.after(int(1000 / FPS), self.animate)


if __name__ == "__main__":
    root = tk.Tk()
    app = ElytraApp(root)
    root.mainloop()
