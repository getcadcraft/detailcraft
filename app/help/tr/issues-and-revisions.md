---
title: Sorunlar, revizyonlar ve çizim değişiklik günlüğü
summary: Mimari modelle aynı sorun geçmişini tutun. Sorunları içe aktarın, şantiye talimatlarını, imalat çizimlerini ve bağlı modelleri bir sorunun karşısına kaydedin ve çizim değişiklik günlüğünü okuyun.
keywords: sorun, revizyon, revizyonlar, değişiklik günlüğü, çizim değişiklik günlüğü, çizim kaydı, şantiye talimatı, imalat çizimi, bağlı model, ihale, inşaat, sorun geçmişi, imalat çizimleri, imalat
from: 4b9a1b7b
---

## Ne yapacaksınız

Ekibin geri kalanıyla aynı sorun geçmişinde çalışın. Hangi sayfaların hangi revizyonla gittiğini görün ve şantiyede olanları ait olduğu sorunla birlikte kaydedin.

## Adımlar

1. **Sorunlar ve revizyonlar**'ı açın.
2. **Bir sorun geçmişini okuyun**'u seçin ve BimCraft ya da başka bir uygulamadan kaydedilmiş `.issues.json` dosyasını seçin. Sorunları ve kayıtları sizinkilere eklenir. Hiçbir şey değiştirilmez.
3. Bir şantiye talimatı, bir imalat çizimi, bir işaretleme takımı, bağlı bir model ya da bir not için **Kayıt ekle**'yi seçin. Ait olduğu sorunu ve durumunu seçin. Seçtiğiniz dosya adı, boyutu ve SHA-256 değeriyle kaydedilir; dosya bulunduğu yerde kalır.
4. **Çizim değişiklik günlüğü**, her sayfa için bir satır ve her sorun için bir sütun gösterir. Parantez içindeki bir revizyon, değişmeden yeniden yayımlanmış demektir.
5. **Değişiklik günlüğünü (CSV) indir**, sorunları, sayfa tablosunu ve kayıtları kaydeder. **Sorun geçmişini kaydet**, diğer uygulamaların okuduğu bir dosya yazar.

## Bilmeniz iyi olacaklar

- Sayfalar hâlâ {{ui:Drawings}} içinden sayfa sayfa yayımlanır. Bu yayımlar burada görünür: aynı tarihte ve aynı notla yayımlanan sayfalar tek bir sorundur.
- Okuduğunuz kayıtlar ve sorunlar model dosyasına kaydedilir. Her değişiklik tek bir geri alma adımıdır.
- Aynı dosyayı iki kez okumak hiçbir şeyi iki kez eklemez. İki kopyada aynı kayıt varsa daha yeni olanı tutulur.
