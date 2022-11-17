
### Mercik Grubu 
- https://guncel.vercel.app/
- Her Sprint 2 haftadan oluşur
- Story Pointler Fibonacci sayılarından oluşur(1,3,5,8,13,21) Yapılacak işin karmaşıklığını ifade eder.
- Spike Maddelerinin story point'i 5'dir
- POC Maddelerinin story pointleri işe göre değişmektedir.
- Her tablo bir sprint'i ifade eder.

| Kişi  | Görevi |
| :-----: | :---: | 
| 170541050 Batuhan Şen | Back End dev.|
| 180541072 Abdurrahman Pülat | Test Engineer|
| 170541028 Abdullah Yıldız | QA Engineer |
| 180541062 Salihcan Özdemir   | Front End dev. | 
| 180541068 Abdullah Samet Bayraktar   | Back End dev.  | 
| 180542012 Bünyamin Kiremit   | Yapay zeka dev. | 
| 180542010 Mehmetcan Tozlu   | Yapay zeka dev. | 
| 190541014 Hasan Demir  | Yapay zeka dev. | 
| 190541018 Ömer Faruk Konca  | Yapay zeka dev.| 
| 190541004 Ali İmran Atabey  | Yapay zeka dev.| 
| 190541087 Seydi Sarıtaş   | Front End dev. - Scrum Master | 
| 210541101 Aslan Koyuncu | Back end dev. |

#

## Sprint - 1

| Assigned to  | User Story  | Toplam SP |
| :-----: | :---: | :---: |
| seydi sarıtaş   | Front end için kullanılacak güncel javascript frameworklerinin araştırılması[SPIKE][5sp], Next.js vs React.js[POC][13sp]| 18sp |
| batuhan şen | MVC / Auth [POC][13Sp] | 13sp |
| bünyamin kiremit | Veri seti araştırmaları [SPIKE][5Sp] | 5sp |
| mehmetcan tozlu | sınıflandırma modellerinin araştırılması[SPIKE][5sp] | 5sp |
| ömer faruk konca | renk sınıflandırma modellerinin araştırılması[SPIKE][5sp] | 5sp |
| Abdurrahman Pülat | manuel, alfa,beta testi için kullanılacak araçların araştırılması[SPIKE][5sp] | 5sp |
| hasan demir | damar sınıflandırma modellerinin araştırılması[SPIKE][5sp] | 5sp |
| ali imran atabey | veri seti düzenleme[SPIKE][5SP] | 5sp |
| batuhan şen | MVC / Auth [POC][13Sp] | 13sp |
| abdullah yıldız | kullanılacak test otomasyonu için araştırma[SPIKE][5sp] | 5sp |
| salihcan özdemir | 1.Kullanılacak Teknojilerin Araştırılması[SPIKE][5sp], 2. Vue.js vs Svelte.js[POC][13sp] | 18sp
| Abdullah Samet bayraktar |  MVC / Auth [POC][13Sp] | 13sp |
| Aslan Koyuncu | Veritabanı Karşılaştırması(MongoDB, PostgreSQL)[13sp] | 13sp

### Sprint 1 çıktıları: 
Herkesin iyi olduğu alanları belirledik ve herkese ona göre iş dağılımı yaptık. 

## Sprint - 2

| Assigned to  | User Story  | Toplam SP |
| :-----: | :---: | :---: |
| seydi sarıtaş   | Next.js Kurulumu[13sp], Auth0[POC][13sp], | 26sp |
| bünyamin kiremit | - | 5sp |
| mehmetcan tozlu | sınıflandırma modellerinin oluştulması[13sp] | 13sp |
| ömer faruk konca | renk sınıflandırma modellerinin oluşturulması [13sp] | 13sp |
| Abdurrahman Pülat | - | 5sp |
| hasan demir | damar sınıflandırma modellerinin oluşturulması [13sp] | 13sp |
| ali imran atabey | -| 5sp |
| batuhan şen | MVC / Auth Kurulumu [13Sp] | 13sp |
| abdullah yıldız | selenium kurulumu [13sp] | 13sp |
| salihcan özdemir |Tasarım araştırmaları [SPIKE] [13SP] | 13sp |
| Aslan Koyuncu | DigitalOgean vs heroku araştırması [13sp] | 13sp |
| Abdullah Samet bayraktar | MVC / Auth Kurulumu [13Sp] | 13sp |

### Sprint 2 çıktıları: 
Sprint 1 sonucunda fark ettik ki işleri herkesin bildiği teknolojilere göre dağıtırsak gün sonunda projeyi entegre edip ayağa kaldırmamız mümkün olmayacak. Örneğin Sprint1 sonucunda kafamızdaki düşünce şu şekildeydi
- authentication geliştirmelerini .net ile yapalım 
- şifreleme (blokzincir) geliştirmelerini .net tarafında yapalım
- image'i karşılayacak api'yi flask ile yazalım
### Sprint 2 sonucunda ise:
- authentication geliştirmeleri için sıfırdan bir yapıp kurmak yerine Auth0 modülünü kullanalım
- Şifreleme geliştirmelerini yapmayalım.(Zamanımız yok vizeler geliyor)
- Api'leri tamamını flask'da yazalım
- Derin öğrenme uygulamasında sınıflandırma modellerini oluşturalım. Her sprint yeni bir özelliği mevcut modele entegre edelim. Bu sprint sonunda mermerin çatlak,damarlı,kırık gibi özelliklerini çıkartalım şeklinde kararlar aldık. 
- İlk özelliğimizi eğittik. Renk Sınıflandırma işlemlerini tamamladık.

## Sprint - 3

| Assigned to  | User Story  | Toplam SP |
| :-----: | :---: | :---: |
| seydi sarıtaş   | auth0 next.js implementasyonu[13SP] Next.js uygulamasını yayına almak [13sp] | 26sp |
| bünyamin kiremit | - | 5sp |
| mehmetcan tozlu | svm ile modelin tekrar yazılması [13sp] | 13sp |
| ömer faruk konca | - | 13sp |
| Abdurrahman Pülat | - | 5sp |
| hasan demir | - | 13sp |
| ali imran atabey | -| 5sp |
| batuhan şen | Flask Öğrenme /araştırma POC [13Sp] | 13sp |
| abdullah yıldız | - | 13sp |
| salihcan özdemir | - | 13sp |
| Aslan Koyuncu | DigitalOgean docker kurulumu [13sp] | 13sp |
| Abdullah Samet bayraktar | Flask-Web api yazılması [13Sp] | 13sp |

### Sprint 3 çıktıları : 
- Sprint 3 sonucunda authentication işlemleri için kullandığımız auth0 modülünü uygulamamıza entegre ettik ve yayına aldık.
- İkinci özelliğimizi eğittik. Desen özelliklerine göre sınıflandırma işlemlerini tamamladık

