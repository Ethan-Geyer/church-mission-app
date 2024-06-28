from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/get_user_info', methods=['GET'])
def get_user_info():
    user_info = {
        'firstName': 'John',
        'lastName': 'Doe',
        'birthdate': '1990-01-01',
        'password': '1234',
        'phoneNumber': '123-456-7890',
        'gender': 'Male'
    }
    return jsonify(user_info)

@app.route('/save_user_info', methods=['POST'])
def save_user_info():
    user_info = request.json
    # Save to database or perform other actions
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)
