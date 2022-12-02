import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

import os

from skimage.io import imread
from skimage.transform import resize

Categories = ['acik_orta', 'catlak', 'damarli', 'iyi', 'koyu', 'noktali']

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

from sklearn.metrics import accuracy_score

try:
    print(f'Modelin Accuracy Orani: {accuracy_score(y_test, y_pred) * 100}')
    url = input('Resmin URL\'si :')  # resmi aliyoruz
    img = imread(url)  # modele veriyoruz
    plt.imshow(img)
    plt.show()
    img_resize = resize(img, (150, 150, 3))
    l = [img_resize.flatten()]
    olasilik = log_reg.predict_proba(l)

    for ind, val in enumerate(Categories):
        print(f'{val} = {olasilik[0][ind]*100}%')
    print("Tahmin Edilen Resim : " + Categories[log_reg.predict(l)[0]])
except Exception as e:
    print('ERROR!\n', e)

import pickle
dosya = 'modelin.kaydi'

pickle.dump(log_reg, open(dosya, 'wb'))
