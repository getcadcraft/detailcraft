---
title: Rüzgar, deprem sahası ve ASCE 7 kombinasyonları
summary: Kapalı, rijit bir bina için rüzgar yükü durumları oluşturun, bir saha için deprem tasarım değerlerini hesaplayın ve Analiz sekmesinde ASCE 7 kombinasyonlarını oluşturun.
keywords: rüzgar, rüzgar yükü, asce 7, yönlü yöntem, maruziyet, kapalılık, deprem, saha sınıfı, ss, s1, sds, sd1, usgs, tasarım spektrumu, yük kombinasyonları, lrfd, asd, kzt, kd, hamle
from: 676fcbf3
---

Analiz sekmesindeki üç blok bir çerçevenin rüzgar ve deprem girdilerini oluşturur ve birleştirir: {{ui:Rüzgar yükleri (ASCE 7 yönlü yöntem)}}, {{ui:Deprem sahası ve sistemi (ASCE 7)}} ve {{ui:ASCE 7 yük kombinasyonları}}. Bunlar yardımcıdır: **bir yönetmelik denetimi değildir; sonuçları mühendisiniz gözden geçirir.**

## Ne yapacaksınız

Kapalı, rijit bir bina için rüzgar yükü durumları oluşturun, bir saha için deprem değerlerini alın ve bunları kullanan kombinasyonları oluşturun. Model katlara ihtiyaç duyar; bu yüzden önce analizi çalıştırın (bkz. [Kuvvetler, mesnet tepkileri ve sehimler](topic:frame-analysis)).

## Adımlar

1. {{ui:Analiz}} sekmesini açın ve {{ui:Çalıştır}} seçeneğini seçin; böylece katlar ve binanın boyutu bilinir. Bir blok kat bulunmadığını söylerse, o blokta {{ui:Katları bul}} seçeneğini seçin.
2. {{ui:Rüzgar yükleri (ASCE 7 yönlü yöntem)}} bloğunda {{ui:Sürüm}} seçin, rüzgar haritanızdan {{ui:Temel rüzgar hızı V}} değerini yazın ve {{ui:Hız birimi}} seçin; ardından {{ui:Maruziyet}} ve {{ui:Kapalılık}} seçin. Kzt, Kd, G, zemin kotu, rüzgar altı Cp, eksantrisite ve yön de buradadır.
3. Tabloda her kattaki basıncı ve her kata etkiyen kuvveti okuyun, ardından {{ui:Rüzgar durumlarını oluştur}} seçeneğini seçin. Durumlar +X, -X, +Y ve -Y'dir.
4. {{ui:Deprem sahası ve sistemi (ASCE 7)}} bloğunda sürümü seçin, Ss ve S1 değerlerini yazın (ASCE 7-22 için SMS, SM1 ve S1), A ile D arasındaki saha sınıfını, risk kategorisini ve deprem yükü taşıyıcı sistemi seçin. Ya da enlem ve boylamı yazıp {{ui:USGS'den sorgula (çevrimiçi)}} seçeneğini seçin; çevrimiçi hizmete yalnızca siz bu düğmeye bastığınızda sorar.
5. Fa, Fv, SDS ve SD1, R, Cd ve Omega0 değerlerini ve tasarım spektrumunu okuyun, ardından {{ui:Deprem bloğunda kullan}} seçeneğini seçin. Deprem bloğunda {{ui:Deprem durumları oluştur}} seçeneğini seçin (bkz. [Beton elemanları denetleme ve deprem yüklerini oluşturma](topic:concrete-and-seismic)).
6. {{ui:ASCE 7 yük kombinasyonları}} bloğunda {{ui:Yöntem}} (LRFD veya ASD) seçin ve {{ui:ASCE 7 kombinasyonlarını oluştur}} seçeneğini seçin. Analizi yeniden çalıştırın.

## Bilmeniz gerekenler

- Rüzgar: yalnızca kapalı, rijit bir bina için yönlü yöntem. Esnek bir bina, DetailCraft'ın oluşturmadığı bir standarttan hamle faktörü gerektirir.
- Saha sınıfı E ve F bir saha çalışması gerektirir ve henüz yapılmadı.
- Blokların altındaki bir kaynak listesi her sayının nereden geldiğini ve neyin dışarıda bırakıldığını gösterir.
- USGS sorgusu canlı hizmette değil, bir vekil hizmet üzerinde test edildi.
