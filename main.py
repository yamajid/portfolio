from flask import Flask, url_for, render_template, redirect

app = Flask(__name__)

@app.route("/")
def home():
    bk_image = url_for('static', filename="1.jpg")
    return render_template("mainPage.html", bk_image=bk_image)
@app.route("/skills")
def skills():
    return render_template("skills.html")
@app.route("/Contact")
def Conatct():
    return render_template("Contact.html")

if __name__ == "__main__":
    app.run(debug=True)
