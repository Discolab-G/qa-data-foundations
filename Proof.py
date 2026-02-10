import http.server
import socketserver
import webbrowser
import os

PORT = 8100
HTML_EVIDENCE_PATH = "dashboard_components/Proof/HTML_evidence.html"

# Se placer à la racine du repository
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(BASE_DIR)

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    url = f"http://localhost:{PORT}/{HTML_EVIDENCE_PATH}"
    print(f"Serving at {url}")
    webbrowser.open(url)
    httpd.serve_forever()
