import tkinter as tk
import math
import os

IMAGE_PATH = "nain.png"  # doit être PNG ou GIF pour Tkinter PhotoImage
TILE_SIZE = 160          # réduit = + d'images à l'écran, augmente = - d'images
MARGIN = 0               # espace entre les images

class DwarfWall:
    def __init__(self, root):
        self.root = root
        self.root.title("Dwarf Wall")
        self.root.attributes("-fullscreen", True)
        self.root.configure(bg="black")

        self.canvas = tk.Canvas(root, highlightthickness=0, bg="black")
        self.canvas.pack(fill="both", expand=True)

        self.root.bind("<Escape>", lambda e: self.root.destroy())
        self.root.bind("<Configure>", self.redraw)

        if not os.path.exists(IMAGE_PATH):
            raise FileNotFoundError(f"Image introuvable: {IMAGE_PATH}")

        # Charge l'image (standard lib)
        self.img_original = tk.PhotoImage(file=IMAGE_PATH)

        # On crée une version redimensionnée via subsample/zoom (entiers uniquement)
        self.img_tile = self._make_tile_image(self.img_original, TILE_SIZE)

        self.redraw()

    def _make_tile_image(self, img, target_size):
        w, h = img.width(), img.height()
        # On veut approx target_size en conservant le ratio
        scale = max(w / target_size, h / target_size)

        if scale <= 1:
            # Image déjà petite : on agrandit (zoom entier)
            z = max(1, int(1 / scale))
            return img.zoom(z, z)

        # Image trop grande : on réduit (subsample entier)
        s = max(1, int(scale))
        return img.subsample(s, s)

    def redraw(self, event=None):
        w = self.root.winfo_width()
        h = self.root.winfo_height()
        if w < 10 or h < 10:
            return

        self.canvas.delete("all")

        tile_w = self.img_tile.width() + MARGIN
        tile_h = self.img_tile.height() + MARGIN

        cols = max(1, math.ceil(w / tile_w))
        rows = max(1, math.ceil(h / tile_h))

        grid_w = cols * tile_w
        grid_h = rows * tile_h
        x0 = (w - grid_w) // 2
        y0 = (h - grid_h) // 2

        for r in range(rows):
            for c in range(cols):
                x = x0 + c * tile_w
                y = y0 + r * tile_h
                self.canvas.create_image(x, y, image=self.img_tile, anchor="nw")

        # Important: garder une référence (sinon l'image peut disparaître)
        self.canvas.image = self.img_tile


if __name__ == "__main__":
    root = tk.Tk()
    app = DwarfWall(root)
    root.mainloop()
