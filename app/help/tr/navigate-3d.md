---
title: 3B görünümde gezinin
summary: Fare, dokunmatik yüzey ya da dokunmatik ekranla döndürün, kaydırın ve yakınlaştırın; ne zaman Plan ve Görünüş kullanılacağını öğrenin.
keywords: yörünge, döndür, kaydır, yakınlaştır, gezin, görünüm, kamera, dokunmatik yüzey, dokunma, plan, görünüş, sığdır, fare
from: 02c9c7b9
---

Görünüm, üstündeki görünüm çubuğunda seçilen üç moda sahiptir: {{ui:3D}}, {{ui:Plan}} ve {{ui:Elevation}}. Fare düğmeleri 3B'de Plan ve Görünüşteki gibi çalışmaz; bu yüzden iki tabloyu da okuyun.

## 3B'de

:::mouse
| Amaç | Bunu yapın |
|---|---|
| Modelin etrafında dönün | Sol düğmeyle sürükleyin |
| Kaydırın | Sağ düğmeyle sürükleyin ya da {{key:Shift}} tuşunu basılı tutup sol düğmeyle sürükleyin |
| Yakınlaştırın | Tekerleği çevirin ya da orta düğmeyi basılı tutarak yukarı aşağı sürükleyin (tekerlek basılı) |
| Bir parça seçin | Üstüne tıklayın (birkaç pikselden az hareket eden bir tıklama) |
| Tüm modeli görün | Görünüm çubuğunun sağ ucundaki sığdır düğmesi |
:::

:::touch
| Amaç | Bunu yapın |
|---|---|
| Modelin etrafında dönün | Bir parmakla sürükleyin |
| Kaydırın | İki parmakla sürükleyin |
| Yakınlaştırın | İki parmakla çimdikleyin |
| Bir parça seçin | Dokunun |
| Tüm modeli görün | Görünüm çubuğunun sağ ucundaki sığdır düğmesi |
:::

Sağ üstteki görünüm küpü (görünüm çubuğunun altında) modelle birlikte döner: bir yüzeyine, kenarına ya da köşesine tıklayarak oradan bakın, döndürmek için sürükleyin ya da başlangıç görünümüne dönmek için ev simgesi düğmesine tıklayın. Bkz. [Görünüm küpü](topic:view-cube).

Model görünümün ortası etrafında döner ve tekerlek işaretçiye değil, görünümün ortasına doğru yakınlaştırır. Bir köşeye yakından bakmak için önce onu ortaya kaydırın, sonra yakınlaştırın.

## Plan ve Görünüşte

Bu görünümler modele doğrudan bakar ve döndürülemez.

:::mouse
| Amaç | Bunu yapın |
|---|---|
| Kaydırın | Sol ya da sağ düğmeyle sürükleyin |
| Yakınlaştırın | Tekerleği çevirin ya da orta düğmeyle yukarı aşağı sürükleyin |
| Bir parça seçin | Üstüne tıklayın |
:::

:::touch
| Amaç | Bunu yapın |
|---|---|
| Kaydırın | Bir parmakla sürükleyin |
| Yakınlaştırın | İki parmakla çimdikleyin (iki parmağı sürüklemek de kaydırır) |
| Bir parça seçin | Dokunun |
:::

## Mac dokunmatik yüzeyinde

:::mac
- **Yakınlaştırma:** iki parmakla yukarı ya da aşağı kaydırın ya da çimdikleyin. İkisi de görünümde yakınlaştırma olarak karşılık bulur.
- **Döndürme (3B):** dokunmatik yüzeye basın ve bir parmakla sürükleyin. Dokunarak tıklama kullanıyorsanız, **Sistem Ayarları, Erişilebilirlik, İşaretçi Denetimi, Dokunmatik Yüzey Seçenekleri** içinde sürüklemeye izin verildiğinde çift dokunup sürükleme de çalışır.
- **Kaydırma (3B):** {{key:Shift}} tuşunu basılı tutun ve sürükleyin. Sürüklerken {{key:Ctrl}} ya da {{key:Mod}} basılı tutmak da kaydırır. İki parmakla tıklama sağ tıklamadır, ama dokunmatik yüzeyde onunla sürüklemek zordur.
- **Kaydırma (Plan ve Görünüş):** sadece sürükleyin.
- Magic Mouse'un orta düğmesi yoktur: kaydırmak için {{key:Shift}} ile sürükleyin, yakınlaştırmak için yüzeyinde kaydırın.
:::

Sağ tıklama ve fare olmadan kaydırma hakkında daha fazlası: [Tuşlar, fareler ve dokunmatik yüzeyler](common:keys).

## Plan ve Görünüş yerleştirmeyi kolaylaştırır

{{ui:3D}} görünümde farklı katlardaki kesişimler ekranda üst üste gelebilir ve tıklama en yakın noktaya gider. {{ui:Plan}} ve {{ui:Elevation}} görünümlerinde yalnızca baktığınız katın ya da ızgara çizgisinin noktaları seçilebilir.

1. {{ui:Plan}} seçeneğini seçin, sonra düğmelerin yanındaki listeden bir kat seçin. Görünüm o kata aşağıdan bakar; 1.5 m'den fazla üstünde olan her şey kesilip çıkarılır.
2. Ya da {{ui:Elevation}} seçeneğini seçin, sonra harfli bir ızgara çizgisi ("Izgara A", "Izgara B" …) seçin. Görünüm doğrudan o çizgiye bakar; yalnızca 1 m içindeki çelik gösterilir.

Görünüşler yalnızca harfli ızgara çizgilerinde bulunur. Numaralı ızgaralardan oluşan bir çerçeveyle (A'dan B'ye uzanan) çalışmak için {{ui:3D}} kullanın ya da {{ui:Add by grid}} formunda yazarak yerleştirin. Bkz. [Kolon, kiriş ve çapraz yerleştirin](topic:place-members#place-by-grid-without-clicking).

## Seçme

- Bir parçayı seçmek için üstüne tıklayın. Vurgu rengine döner ve {{ui:Properties}} paneli onu gösterir.
- Boş alana tıklayın ya da {{key:Esc}} tuşuna basın; seçimi temizler.
- Çelik, betonun önüne geçer: içi görünen bir temelin içindeki bir kolona tıklamak kolonu seçer. Temeli seçmek için tıklamayı kolondan uzağa ya da donatılarından birine yapın.
- Bir cıvataya ya da uç levhasına tıklamak bağlantısını seçer.
- Plan ve Görünüşte kesilip çıkarılmış parçalara tıklanamaz.
- {{key:Shift}} (ya da {{key:Ctrl}}, ya da {{key:Mod}}) tuşunu basılı tutup tıklayarak bir parçayı seçime ekleyin ya da seçimden çıkarın; {{key:Mod+A}} her şeyi seçer. Pencereyle (kutu sürükleyerek) seçim henüz yapılmadı. Birden fazlasıyla neler yapabileceğiniz: [Kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).

Listelerden de seçebilirsiniz: soldaki {{ui:Part marks}} içindeki bir işarete, {{ui:Bill of materials}} sekmesindeki bir parça işaretine ya da {{ui:Problems}} içindeki bir satırın yanındaki {{ui:Select}} düğmesine tıklayın.

## Görünüm yanlış görünüyorsa

- Modeli kaybettiniz mi? Sığdır düğmesini seçin.
- Görünüm boş ya da gri ve WebGL ile ilgili bir mesaj var: bkz. [Sorun giderme](topic:troubleshooting#the-3d-view-is-missing).
- 3B görünüm olmadan da her şey çalışır; yalnızca onun içine tıklamak çalışmaz. Paneller, raporlar ve dışa aktarımların hepsi çalışır ve {{ui:Add by grid}} elemanları yazarak yerleştirir.
