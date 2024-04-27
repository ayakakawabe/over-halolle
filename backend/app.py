from . import create_app
from flask_cors import CORS

app = create_app()
CORS(
    app,
    CORS_ALLOW_HEADERS="*",
    CORS_ORIGIN="*",
    CORS_METHODS=["GET", "HEAD", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
    CORS_SUPPORTS_CREDENTIALS=True
)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
