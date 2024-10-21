from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains by default

YOUTUBE_API_KEY = 'AIzaSyDkT74UC9iq4pFcCvXqTzPgAGhLT0Uo6bo'  # Replace with your YouTube API key
YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'


@app.route('/search', methods=['GET'])
def search_youtube():
    query = request.args.get('query', '')
    if not query:
        return jsonify([])  # Return an empty list if no query is provided

    # Set up the parameters for the YouTube API request
    params = {
        'part': 'snippet',
        'q': query,
        'key': YOUTUBE_API_KEY,
        'maxResults': 5,  # Limit the number of results
        'type': 'video',  # Only return videos
    }

    try:
        response = requests.get(YOUTUBE_API_URL, params=params)
        response.raise_for_status()  # Raise an error for bad responses
        data = response.json()

        # Process the response data
        videos = [
            {
                'videoId': item['id']['videoId'],
                'title': item['snippet']['title'],
                'description': item['snippet']['description'],
                'thumbnail': item['snippet']['thumbnails']['default']['url']
            }
            for item in data.get('items', [])
        ]

        return jsonify(videos)  # Return the list of videos
    except Exception as e:
        print(f"Error fetching YouTube data: {e}")  # Log the error
        return jsonify([])  # Return an empty list on error


if __name__ == '__main__':
    app.run(port=5000, debug=True)
