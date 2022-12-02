from flask import Flask
from flask import request
from flask_minio import Minio
from flask import current_app, flash, jsonify, make_response, redirect,  url_for

app = Flask(__name__)
import boto3

client = boto3.client(
    's3',
    aws_access_key_id="masoud",
    aws_secret_access_key="Strong#Pass#2022"
)

@app.route("/api")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/file",methods=['POST'])
def file():
    image_file= request.files['file']
    content_type = request.mimetype
    filename =image_file.filename  # This is convenient to validate your filename, otherwise just use file.filename

    client = boto3.client('s3',
                region_name='us',
                endpoint_url='http://minio:9000',
                aws_access_key_id="H4TnpYyhj3DhPSUA",
                aws_secret_access_key="j5BD5GGe5e2upkACam7kWgfZC3gJAajO")

    client.put_object(Body=image_file,
                      Bucket='storage',
                      Key=filename,
                      ContentType=content_type)
    file_url = '%s/%s/%s' % ("http://137.184.189.251:9000", 'storage', filename)
   # response = dict( {"message":"image uploaded", "url": file_url})
    response = jsonify({'url': file_url})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/api/process" ,methods=['POST'])
def process():
    import numpy as np
    import pandas as pd
    import matplotlib.pyplot as plt

    import os

    from skimage.io import imread
    from skimage.transform import resize

    from sklearn.metrics import accuracy_score, confusion_matrix, recall_score
    from sklearn.metrics import mean_squared_error, f1_score, precision_score

    image_file= request.files['file']
    content_type = request.mimetype
    filename =image_file.filename  # This is convenient to validate your filename, otherwise just use file.filename

    client = boto3.client('s3',
                region_name='us',
                endpoint_url='http://minio:9000',
                aws_access_key_id="H4TnpYyhj3DhPSUA",

                aws_secret_access_key="j5BD5GGe5e2upkACam7kWgfZC3gJAajO")

    client.put_object(Body=image_file,
                      Bucket='storage',
                      Key=filename,
                      ContentType=content_type)
    file_url = '%s/%s/%s' % ("http://137.184.189.251:9000", 'storage', filename)
    response = dict( {"message":"image uploaded", "url": file_url})

    Categories = ['acik_orta', 'catlak', 'damarli', 'iyi', 'koyu', 'noktali']
    picture = request.args.get('picture')
    duzVeriler = []
    hedefVeriler = []

    dataDir = './train' # veri setinin pc'de ki yolu

    for i in Categories:
        print(f'{i} Kategorisi Yukleniyor...')
        path = os.path.join(dataDir, i)
        # print(os.listdir(path))
        for img in os.listdir(path):
            imgArray = imread(os.path.join(path, img))
            imgResize = resize(imgArray, (150, 150, 3))
            duzVeriler.append(imgResize.flatten())
            hedefVeriler.append(Categories.index(i))
        print(f'{i} Kategorisi Basariyla Yuklendi...')

    duz_veri = np.array(duzVeriler)
    hedef_veri = np.array(hedefVeriler)

    df = pd.DataFrame(duz_veri)
    df['Hedef Veri'] = hedef_veri
    x = df.iloc[:, :-1]
    y = df.iloc[:, -1]

    from sklearn.model_selection import train_test_split
    X_train, X_test, y_train, y_test = train_test_split(
        x, y, test_size=0.2, random_state=0)
    print('Egitim ve Test verileri basariyla ayrildi...')

    from sklearn.ensemble import RandomForestClassifier
    log_reg = RandomForestClassifier(n_estimators=300, criterion='gini')
    log_reg.fit(X_train, y_train)
    print('Model Basariyla Egitildi')
    y_pred = log_reg.predict(X_test)
    print('Model Basariyla Test Edildi')
    c=0
    while c<1:
        try:
            print(f'Modelin Accuracy Orani: {accuracy_score(y_test, y_pred) * 100}')
            img = imread(file_url)  # modele veriyoruz
            #plt.imshow(img)
            #plt.show()
            img_resize = resize(img, (150, 150, 3))
            l = [img_resize.flatten()]
            olasilik = log_reg.predict_proba(l)
            result =[]
            for ind, val in enumerate(Categories):
                result.append(f'{val} = {olasilik[0][ind]*100}%')
                print(f'{val} = {olasilik[0][ind]*100}%')
            print("Tahmin Edilen Resim : " + Categories[log_reg.predict(l)[0]])
            c=1
            response = jsonify({'url': file_url, 'data':result})
            response.headers.add('Access-Control-Allow-Origin', '*')
        except Exception as e:
            print('ERROR!\n', e)
    return response


@app.route("/api/process_v2" ,methods=['POST'])
def processv2():
    import numpy as np
    import pandas as pd
    import matplotlib.pyplot as plt

    import os
    import pickle
    from skimage.io import imread
    from skimage.transform import resize

    from sklearn.metrics import accuracy_score, confusion_matrix, recall_score
    from sklearn.metrics import mean_squared_error, f1_score, precision_score
    Categories = ['acik_orta', 'catlak', 'damarli', 'iyi', 'koyu', 'noktali']
    image_file= request.files['file']
    content_type = request.mimetype
    filename =image_file.filename  # This is convenient to validate your filename, otherwise just use file.filename

    client = boto3.client('s3',
                region_name='us',
                endpoint_url='http://minio:9000',
                aws_access_key_id="H4TnpYyhj3DhPSUA",

                aws_secret_access_key="j5BD5GGe5e2upkACam7kWgfZC3gJAajO")

    client.put_object(Body=image_file,
                      Bucket='storage',
                      Key=filename,
                      ContentType=content_type)
    file_url = '%s/%s/%s' % ("http://minio:9000", 'storage', filename)

    dosya = 'modelin.kaydi'

    yuklenen = pickle.load(open(dosya, 'rb'))

    try:
        img = imread(file_url)  # modele veriyoruz

        #plt.imshow(img)
        #plt.show()
        img_resize = resize(img, (150, 150, 3))
        l = [img_resize.flatten()]
        olasilik = yuklenen.predict_proba(l)

        result =[]
        for ind, val in enumerate(Categories):
            result.append(f'{val} = {olasilik[0][ind]*100}%')
            print(f'{val} = {olasilik[0][ind]*100}%')
        print("Tahmin Edilen Resim : " + Categories[yuklenen.predict(l)[0]])
        c=1
        response = jsonify({'url': file_url, 'data':result})
        response.headers.add('Access-Control-Allow-Origin', '*')

    except Exception as e:
        response = jsonify({'message': str(e)})
        print(e)
        print(file_url)
        response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    app.run(host='0.0.0.0')
