---
title: Donatı sıkışıklık haritası
summary: Verdiğiniz agrega ve vibratöre göre donatının her temelde betonun inmesi için ne kadar sıkı bıraktığını görün.
keywords: donatı, sıkışıklık, aralık, net aralık, beton yerleştirme, agrega, vibratör, bekleme donatıları, kancalar, temel, ağ
from: 40d029e6
---

{{ui:Sıkışıklık}} sekmesi her temelin yukarıdan görünen bir ısı haritasını çizer. Soluk mavi açıktır; sarı ve turuncu sıkılaşmaya başlar; kırmızı donatıların gerektirdiğinden daha sıkıdır. Koyu hücreler donatının kendisidir.

## Harita neyi ölçer

Beton çeliğin içinden katman katman iner ve katmanlar arasında yanlara doğru hareket edebilir. Bu yüzden harita her noktada herhangi bir katmandaki en dar boş aralığı alır: alt ağ donatıları arasında, bir sonraki donatı katmanı arasında ve üstte bekleme donatılarının kanca bacakları arasında. Bekleme donatıları bunların hepsinden geçer.

## Sıkı olan nedir

Gereken aralık, 25 mm ile donatı çapından büyük olanıdır (ACI 318-19 25.2.1); BS 4449 donatıları için ise donatı çapı ile 20 mm'den büyük olanıdır (EN 1992-1-1 8.2). İki kutu bunu yükseltir:

- {{ui:En büyük agrega}}: gereken aralık, agrega boyutunun 4/3'ü (ACI) ya da agrega artı 5 mm (EN) olur.
- {{ui:Vibratör başlığı}}: gereken aralık en az başlığın çapı olur.

İkisi de 0'dan başlar; bu bilinmiyor anlamına gelir: DetailCraft karışımınızı ya da pompanızı bilmez.

## Sorunlar

Gereken değerden daha dar bir yeri olan bir temel, bulunan açıklık ve gereken açıklık ile birlikte {{ui:Sorunlar}} panelinde listelenir. Bir haritanın yanındaki {{ui:Seç}} temeli seçer.

Harita bağlantı teli, kaplin, kanal ya da kolonun kendi donatılarını görmez.
