import http.server
import socketserver
import webbrowser
import os

PORT = 8000
DASHBOARD_PATH = "dashboard_components/dashboard.html"

# Se placer à la racine du repo (sécurité)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(BASE_DIR)

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    url = f"http://localhost:{PORT}/{DASHBOARD_PATH}"
    print(f"Dashboard running at {url}")
    webbrowser.open(url)
    httpd.serve_forever()

import subprocess
import sys

def main():
    # Lance Proof.py dans un second processus
    subprocess.Popen([sys.executable, "Proof.py"])

    # Puis lance le dashboard (le code actuel de dashboard.py)
    # ... ton code existant ici ...

if __name__ == "__main__":
    main()
