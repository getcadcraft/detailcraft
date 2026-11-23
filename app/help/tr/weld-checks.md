---
title: Elemanların birleştiği yerlerde kaynakları denetleyin
summary: Tasarım denetiminden sonra, her elemanın başka bir eleman ya da mesnetle birleştiği yerde çevresindeki köşe ve alın kaynaklarını AISC 360-16 Bölüm J veya EN 1993-1-8'e göre sınayın; en çok kullanılan kaynak grubunu ve hangi birleşimde olduğunu görün. Bir mühendis gözden geçirene kadar yardımcı bir araçtır.
keywords: kaynak, kaynaklar, kaynak denetimi, köşe kaynağı, alın kaynağı, tam nüfuziyet, AISC 360, EN 1993-1-8, kaynak grubu, kullanım oranı, kapasite, düğüm, bağlantı, yapısal, mühendis
from: e8eebbe6
---

{{ui:Analiz}} sekmesindeki {{ui:Tasarım denetimleri}} altındaki {{ui:Kaynak kontrolleri}} bloğu, son çözülen çerçevenin kuvvetlerini ve oluşturduğunuz dayanım birleşimlerini alır; her düğüm noktasında, bir elemanın başka bir elemanla birleştiği ya da bir mesnet üzerinde durduğu yerde her elemanın çevresindeki kaynağı sınar.

:::warning
Bu, **bir mühendis gözden geçirene kadar yardımcı bir araçtır**. Kaynağı bölüm çevresinde, tek bir grup olarak ve çerçevenin kendi uç kuvvetlerinden denetler. Atölye çizimlerinde çizdiğiniz kaynakların boyutunu ya da uzunluğunu okumaz; cıvataları, levhaları, ezilmeyi, blok kesmeyi ve kaldıraç etkisini (prying) denetlemez. Sonuçları bir onay damgası değildir.
:::

## Çalıştırın

1. {{ui:Analiz}} sekmesinde çerçeveyi çözün ve {{ui:Tasarım denetimleri}} içinde bir {{ui:Tasarım yönetmeliği}} seçin, sonra {{ui:Birleşimleri oluştur}} düğmesine basın (kaynak denetimi aynı dayanım birleşimlerini gerektirir).
2. {{ui:Kaynak kontrolleri}} içinde {{ui:Köşe kenarı (mm, 0 = duvar, en çok 8)}} değerini ayarlayın. 0, kenarın bölümün daha ince duvarını izlemesi anlamına gelir; en çok 8 mm. AISC yönetmeliğinde {{ui:Kaynak metali dayanımı F_EXX (MPa)}} kaynak metalinin dayanımıdır (482.6 MPa bir E70 elektroddur). EN 1993'te çelik sınıfı, kaynak metalinin dayanımını ve korelasyon katsayısını verir.
3. {{ui:Kaynakları kontrol et}} düğmesine basın.

Tablonun her satırı bir kaynak grubudur (bir elemanın bir düğüm ucu). Sayılar: belirleyici denetiminin **kullanım oranı**, durumu (geçer ya da kalır) ve hangi denetim ile maddenin hangi birleşimde belirleyici olduğu. Denetimin yargılayamadığı bir grup nedenini gösterir (çelik sınıfı yok, EN 1993-1-8 Tablo 4.1'de sınıf için korelasyon katsayısı yok, o bölümde kaynak yok) ve bir sayı göstermek yerine bunu yazar.

Köşe kenarını ya da kaynak metalini değiştirmek ya da modeli düzenlemek tabloyu temizler: eski değerler içindi. {{ui:Kaynakları kontrol et}} düğmesine yeniden basın.

## Ne denetlenir

- **ASCE 7 + AISC 360:** köşe kaynağı metali (yükün kaynağa açısı sayılır, J2.4), ana metalin kesme kopması (J4.2) ve tam nüfuziyetli alın kaynakları (Tablo J2.5).
- **EN 1990 + EN 1993:** köşe kaynakları EN 1993-1-8 4.5.3.3'teki basitleştirilmiş yöntemle ve alın kaynakları 4.7.1'den.
- Asgari ve azami kenar ile asgari uzunluğa karşı detaylandırma uyarıları; karşılaştırıldıkları değerle birlikte.

Kaynak grubu bir çizgi kesit olarak ele alınır ve elastik vektör yöntemiyle yüklenir: kaynağın her parçası, elemanın eksenel kuvvetinden, iki kesme kuvvetinden, burulmadan ve iki eğilme momentinden kuvvet alır; bunlar vektör olarak toplanır.

## Ne denetlenmez

Kısmi nüfuziyetli kaynaklar, eğik köşe kaynakları, tapa ve yuva kaynakları, kesikli kaynaklar, anlık merkez yöntemi, EN yönlü yöntemi, yorulma ve ana metalin blok kesmesi henüz yapılmadı. Standartların bazı sabitleri standartlardan yazıldı ve henüz basılı bir nüshayla karşılaştırılmadı; rapor her sayının kaynağını listeler ({{ui:Rapor (PDF)}} denetlediğinizde kaynak tablolarını ekler). Bkz. [Elemanları bir tasarım yönetmeliğine göre denetleyin](topic:design-checks) ve [Henüz yapılmadı](topic:not-built-yet).
