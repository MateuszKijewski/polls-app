from flask import Flask, jsonify, redirect
from flask.views import MethodView
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def index():
    return redirect('create')

class PollCreate(MethodView):

    def get(self):
        return {"message": "Welcome to the polls app! Create your own app here!"}


class PollVote(MethodView):

    def get(self, poll_id=None):
        return {"message": "poll with id: {pk}"}


class PollResults(MethodView):

    def get(self, poll_id=None):
        return {
            "poll_id": poll_id,
            "question": "What's your favourite food?",
            "answers": [
                {
                    "id": 1,
                    "name": "pizza",
                    "votes": 23
                },
                {
                    "id": 2,
                    "name": "spaghetti",
                    "votes": 35
                },
                {
                    "id": 3,
                    "name": "apple",
                    "votes": 26
                }
            ]
        }


app.add_url_rule('/', 'index', index)
app.add_url_rule('/create', view_func=PollCreate.as_view('create'))
app.add_url_rule('/vote/<poll_id>', view_func=PollVote.as_view('vote'))
app.add_url_rule('/results/<poll_id>', view_func=PollResults.as_view('results'))


if __name__ == '__main__':
    app.run(debug=True);
