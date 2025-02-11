from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

openai.api_key = "sk-9693961334"

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json["message"]
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": user_message}]
    )

    bot_reply = response["choices"][0]["message"]["content"]
    
    return jsonify({"reply": bot_reply})

if __name__ == "__main__":
    app.run(debug=True)
