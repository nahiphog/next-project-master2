

def success_200(data):
    return jsonify(data), 200

def success_201(message, data):
    response = {
        'status': 'success,',
        'message': message,
        'data': data
    }
    return jsonify(response), 201

def error_401(message):
    response = {
        "message": message,
        "status": "fail"
    }
    return jsonify(response), 401

