from flask import Flask, request, jsonify
from rembg import remove

app = Flask(__name__)

@app.route('/remove_background', methods=['POST'])
def remove_background():
    if 'image' not in request.files:
        return 'No image file provided', 400
    
    image_file = request.files['image']
    image_data = image_file.read()

    # Perform background removal using rembg
    processed_image_data = remove(image_data)

    return jsonify({'processed_image': processed_image_data.decode('latin-1')})

if __name__ == '__main__':
    app.run(debug=True)
