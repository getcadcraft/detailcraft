---
title: DetailCraft'ı bir yapay zekâ asistanıyla kullanın
summary: Kendi yapay zekâ asistanınızın veya betiğinizin modeli, parçalarını, sorunlarını ve çakışmalarını okumasına, birleşim eklemesine, kaydetmesine ve dışa aktarmasına (USD dahil) izin verin; izinler, CadCraft Studio üzerinden bağlanma ve etkinlik günlüğü.
keywords: yapay zekâ, asistan, ajan, mcp, model context protocol, betik, otomasyon, parçalar, çakışmalar, birleşimler, izinler, bağlantıyı kes, etkinlik, geri al
from: d624c9a0
---

## Ne öğreneceksiniz

Bir yapay zekâ asistanının (ya da yazdığınız bir betiğin) DetailCraft ile nasıl çalışacağını ve neleri değiştirebileceğine nasıl karar vereceğinizi.

DetailCraft'ın **kendi yapay zekâsı yoktur** ve hiçbir yere bir şey göndermez. Asistanı siz getirirsiniz: Model Context Protocol (MCP) konuşan herhangi bir program. DetailCraft ona yalnızca araçlar verir; hangilerini vereceğinize siz karar verirsiniz.

## Açın

1. {{ui:Ayarlar}} (uygulama çubuğundaki dişli simgesi veya {{key:Mod+,}}) bölümünü açın ve {{ui:DetailCraft}} sekmesine gidin.
2. {{ui:Asistanlar}} altında **Yapay zekâ asistanlarının ve betiklerin DetailCraft'ı kullanmasına izin ver** kutusunu işaretleyin. Siz yapana kadar kapalıdır.
3. Neler yapabileceğini seçin: **Okuma** başlangıçta seçilidir; **Düzenleme**, **Kaydetme** veya **Dışa aktarma** seçeneklerini yalnızca ihtiyacınız olduğunda işaretleyin.

İzin verdiklerinizin dışındaki araçlar asistana sunulmaz; yine de bir tanesini isterse DetailCraft reddeder ve bunu etkinlik günlüğüne yazar. Anahtarı kapatmak, tüm bağlantıları bir anda sonlandırır.

## Asistanınızı bağlayın

Asistanlar, bilgisayarınızdaki **CadCraft Studio** üzerinden bağlanır: Studio, yalnızca bu bilgisayarın erişebildiği küçük bir sunucu çalıştırır ve bu sunucu her başladığında oluşturduğu bir belirteçle korunur. Studio'da {{ui:Asistan bağlayın}} seçeneğini seçin ve adresi ile belirteci asistanınıza kopyalayın (Studio, yapıştırılacak tam ayarları gösterir). Belirteci asla paylaşmayın.

:::note
Bir tarayıcı sekmesi asistan için bağlantı açamaz: tarayıcı uygulamalarında, bilgisayarınızdaki CadCraft Studio'yu kullanana kadar anahtarın bir etkisi olmaz.
:::

## Kontrol sizde

- **Her değişiklik tek bir geri alma adımıdır** ve asistanın adıyla etiketlenir (ör. "Asistan: kiriş ekle", "Asistan: köşe levhaları ekle"). {{key:Mod+Z}} asistanın son değişikliğini bir bütün olarak geri alır. Asistanın kendi `undo` komutu yalnızca kendi adımlarını geri alır, sizinkileri asla; açıkça istemediği sürece.
- **Sizi bekler.** Bir eleman yerleştirirken, parça taşırken veya yapıştırırken DetailCraft asistanın değişikliklerini reddeder ve tekrar denemesini söyler.
- **Bağlı olduğunu bilirsiniz.** Bağlıyken uygulama çubuğundaki bir düğme asistanın adını gösterir; neler yapabileceğini görmek veya **Bağlantıyı kes** demek için tıklayın.
- **Etkinlik.** {{ui:Ayarlar}} › {{ui:DetailCraft}} › {{ui:Asistanlar}} › {{ui:Etkinlik}}, her çağrıyı listeler: ne zaman, hangi araç, tamamlandı mı reddedildi mi. {{ui:Günlüğü kaydet}} bir kopyasını saklar.

## Bir asistanın isteyebilecekleri

Tüm uzunluklar milimetredir; noktalar `[x, y, z]` biçimindedir ve z yukarı yöndedir, modelde olduğu gibi.

| Araç | İzin | Ne yapar |
|---|---|---|
| `app_info`, `model_describe` | Okuma | Açık model: grid'ler, seviyeler, aşamalar, türüne ve profiline göre elemanlar, birleşimler, temeller, merdivenler, parçalar, çelik ağırlığı, sorunlar |
| `parts_list` | Okuma | Parça işaretleri; profil, malzeme, kesim uzunluğu, adet, ağırlık, aşama ve montaj işaretleriyle; tür, profil, işaret veya aşamaya göre |
| `problems_list` | Okuma | {{ui:Sorunlar}} sekmesinin listelediği her şey, her biri neyle ilgili olduğu yazılı |
| `clash_check` | Okuma | [Çakışma denetimi](topic:clash-check), toleransı ve aşamalarıyla |
| `selection_get` | Okuma | Sizin seçtikleriniz |
| `selection_set` | Düzenleme | Elemanları, birleşimleri, temelleri veya merdivenleri (kimlik veya parça işaretiyle) size göstermek için seçer; hiçbir şeyi değiştirmez |
| `member_add` | Düzenleme | İki nokta arasında bir kiriş, kolon, çapraz veya levha |
| `connection_add` | Düzenleme | Verilen elemanların birleştiği yerde uç levhaları, kesme levhaları, taban levhaları, ekler veya köşe levhaları; {{ui:Bağlan}} düğmelerinin yaptığı gibi |
| `undo` | Düzenleme | Asistanın son adımlarını geri alır |
| `model_save` | Kaydetme | DetailCraft'ın kendi Kaydet komutu |
| `model_export` | Dışa aktarma | IFC, NC dosyaları, malzeme listesi (BOM), büküm çizelgesi, KISS dosyası veya kesim listesi; {{ui:Çıktı}} düğmelerinin ürettiği gibi |
| `usd_export` | Dışa aktarma | Çelik modeli USD (.usda, .usdc veya .usdz) olarak; {{ui:Çıktı}} › {{ui:USD}} komutunun yazdığı gibi (bkz. [Çelik modelini USD olarak dışa aktarın](topic:usd)); Studio'da izin verdiğiniz bir klasöre dosyayı yazabilir |

## Bir şey işe yaramazsa

- **Asistan hiçbir DetailCraft aracını görmüyor:** Bu pencerede anahtarın açık olduğunu ve pencerenin Studio'da açık olduğunu kontrol edin.
- **"düzenleme izni gerekiyor"** (ya da kaydetme, dışa aktarma): {{ui:Asistanlar}} altından işaretleyin, sonra yeniden isteyin.
- **"Kişi bir eleman yerleştiriyor":** yaptığınız işi bitirin (veya {{key:Esc}} tuşuna basın), sonra asistanın yeniden denemesine izin verin.
- **"401" veya "token" hataları:** Belirteç değişti (Studio yeniden başlatıldı veya {{ui:Yeni belirteç}} kullanıldı). Yeni belirteci asistanın ayarlarına kopyalayın.

## Ayrıca bakın

- [Yapay zekâ asistanları için tarifler](common:assistants-recipes): her biri çağırdığı araçlarla birlikte çalışılmış örnekler.
