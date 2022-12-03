
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
| bünyamin kiremit | - |  |
| mehmetcan tozlu | sınıflandırma modellerinin oluştulması[13sp] | 13sp |
| ömer faruk konca | renk sınıflandırma modellerinin oluşturulması [13sp] | 13sp |
| Abdurrahman Pülat | - | |
| hasan demir | damar sınıflandırma modellerinin oluşturulması [13sp] | 13sp |
| ali imran atabey | -|  |
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
| bünyamin kiremit | - |  |
| mehmetcan tozlu | svm ile modelin tekrar yazılması [13sp] | 13sp |
| ömer faruk konca | - |  |
| Abdurrahman Pülat | - |  |
| hasan demir | - |  |
| ali imran atabey | -| |
| batuhan şen | Flask Öğrenme /araştırma POC [13Sp] | 13sp |
| abdullah yıldız | Selenium Test Otomasyonu yazılarak Web sayfası test edildi | 13sp |
| salihcan özdemir | Logo oluşturma [8sp] | 8sp  |
| Aslan Koyuncu | DigitalOgean docker kurulumu [13sp] | 13sp |
| Abdullah Samet bayraktar | Flask-Web api yazılması [13Sp] | 13sp |

### Sprint 3 çıktıları : 
- Sprint 3 sonucunda authentication işlemleri için kullandığımız auth0 modülünü uygulamamıza entegre ettik ve yayına aldık.
- İkinci özelliğimizi eğittik. Desen özelliklerine göre sınıflandırma işlemlerini tamamladık
- Flask framework'ünü öğrendik 
- Flask tarafında image'i karşılayacak api'mizi yazdık. 
- Flask uygulamasını nigx ile configure ettik --> --> http://137.184.189.251/api

## Sprint - 4

| Assigned to  | User Story  | Toplam SP |
| :-----: | :---: | :---: |
| seydi sarıtaş   | http to https protokol dönüşümü yapılmalı.Ssl sertifikası eklenecek [SPIKE][5SP] | 5sp |
| bünyamin kiremit | - |  |
| mehmetcan tozlu | çatlak mermer model sınıflandırması [13sp], iyi düzeyde mermer model sınıflandırması [13sp] | 26sp |
| ömer faruk konca | - |  |
| Abdurrahman Pülat | - |  |
| hasan demir | - |  |
| ali imran atabey | -| |
| batuhan şen | Google Cloud vs Firebase free hosting karşılaştırılması [SPIKE][5SP] | 5sp |
| abdullah yıldız | Web sitesinin manuel testi yapılarak geliştirici takımla iletişime geçildi | 13sp |
| salihcan özdemir | Proje'de kullanılan front end frameworklerin öğrenilmesi[13sp] | 13sp  |
| Aslan Koyuncu | Güvenlik açıklarının araştırılması(Pentest, netsparker taraması) [13sp] | 13sp  |
| Abdullah Samet bayraktar | Vercel vs AWS hosting karşılaştırılması [SPIKE] [5SP] | 5sp |

### Sprint 4 çıktıları : 
- Modeli geliştirmeye devam ettik. Renk,çatlak,damarlı ve iyi özelliklerine göre sınıflandırma işlemlerini tamamladık.
- Sonraki sprint noktali ve açık_orta işlemlerini tamamlamayı planladık.
- Back-end uygulamamızı digitalocean'da yayına aldık ancak aylık 50$ ücreti olduğunu öğrenince işlemi geri çektik.(İlk ay ücretsiz özelliğini kullandık ve https protokol dönüşümü yapmamız gerektiğini burada fark ettik.)
- Docker öğrenmeye devam ettik. Projede aktif olarak kullandık.
- Back-end uygulamamızı ücretsiz host edebileceğimiz platformları araştırma kararı aldık.
- Logomuzu tasarladık front end tarafını iyileştirdik. --> https://guncel.vercel.app/
- Back-end uygulamamızı ücretsiz host edebileceğimiz platformları araştırdık.
- Güvenlik açıkları için araştırma yapmaya karar verdik. Netsparker taraması yapacağız.

