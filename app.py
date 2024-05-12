from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('public/index.html')

if __name__ == '__harvescoin__':
    app.run(debug=True)