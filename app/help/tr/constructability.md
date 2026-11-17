---
title: Yapılabilirlik denetimleri
summary: Bir detaylandırıcının gözle yakaladığı şeyler için sorunlar: bir anahtarın ulaşamadığı cıvata, lokma için çok yakın cıvatalar, boyut sınırlarının dışındaki köşe kaynakları, bir meşalenin ulaşamadığı kaynaklar ve su tutan borular.
keywords: yapılabilirlik, anahtar, lokma, cıvata erişimi, sıkma, kaynak boyutu, köşe kaynağı, minimum kaynak, maksimum kaynak, su, havalandırma deliği, drenaj deliği, galvaniz, içi boş kesit, sorunlar
from: 72315151
---

DetailCraft hiçbir dayanım denetiminin bulamadığı dört tür sorun arar ve bunları {{ui:Sorunlar}} panelinde listeler. Bunlar uyarılar ve bakılması gereken notlardır, hata değildir: model yine de oluşturulur.

## Anahtarın ulaşamadığı bir cıvata

Her cıvata için DetailCraft başının ve somunun üzerine bir lokma koyar. Lokma, somunun köşeler arası genişliği artı 4 mm'lik bir duvar kadar geniş ve 60 mm uzunluğunda bir silindirdir. Bu silindirin içinde bir kiriş gövdesi, bir başlık, bir levha veya bir çapraz duruyorsa sorun birleşimi, kaç cıvata olduğunu, engelleyen parçayı ve cıvataya uzaklığını adlandırır.

Lokma tipik bir darbeli lokmadır. Bir anahtar daha az yer ister, daha büyük bir alet daha fazla. Yanıtın nasıl değiştiğini görmek için bağlı asistanınızdan farklı bir `socketLength` ile `constructability_check` çalıştırmasını isteyin.

## Lokma için çok yakın cıvatalar

Tek bir cıvatanın üzerindeki lokma, bir sonrakinin başına dokunmamalıdır. Bir birleşimin, lokmanın genişliği artı komşunun başından daha yakın olan cıvataları, bulunan aralık ve gereken aralıkla birlikte listelenir.

## Köşe kaynağı boyutları

AISC 360-16 Tablo J2.4, en ince parçanın kalınlığına göre en küçük köşe kaynağını belirler (6.35 mm'ye kadar 3 mm, 12.7 mm'ye kadar 5 mm, 19.05 mm'ye kadar 6 mm, üstünde 8 mm); J2.2b ise malzeme kenarı boyunca en büyüğünü belirler: malzeme 6.35 mm'den inceyse malzemeden büyük olmayan, aksi halde 1.6 mm eksik. Aynı kalınlıkta aynı boyuttaki birleşimler tek bir sorun olarak listelenir.

Kullanılan kalınlık, kaynağın adını verdiği en ince parçadır; bu yüzden 6.35 mm gövdeli bir kirişin çevresindeki 8 mm kaynak listelenir.

## Su ve havalandırma

- Dik duran veya 10°'den fazla eğimli bir içi boş kesitin **açık üst ucu** yağmur alır.
- İki ucu kapalı bir içi boş kesit bir havalandırma ve bir drenaj deliği ister; sıcak daldırma galvanizleme ve ısıtılmış havanın basıncı, ikisi de bunu gerektirir.

## Kaynakçı ulaşabiliyor mu

Bir köşe kaynağı, birleştirdiği iki yüzün tam ortasında yapılır. Her çevresel köşe kaynağı için (bir uç levhası, bir taban levhası, bir köşeli levha) denetim, levhadaki elemanın kesit çizgisini alır ve her 20 mm'de bir, 45°'de dışa doğru bir meşale yolu çalıştırır; meşale ağızlığı (başlangıçta 10 mm yarıçap) iki yüzü de ilk kez temizlediği yerden itibaren 30 mm daha. Yol kirişin kendi başlığına veya başka bir parçaya çarparsa, kaynağın o payı parça ve mesafeyle birlikte listelenir. Bu sayılar tipiktir, bir standardın değeri değildir: işlem ve ağızlık için imalatçınıza danışın. İki kenar boyunca yapılan kaynaklar (kesme levhası) konumlandırılmaz ve denetlenmez.
