from flask import Flask
from youtube_transcript_api import YouTubeTranscriptApi
import json
from flask.json import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

hello="f"

@app.route("/<videoId>")
def index(videoId):
    srt = YouTubeTranscriptApi.get_transcript(videoId,languages=['en'])
    return jsonify(srt)
