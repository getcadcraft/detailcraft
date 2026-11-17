---
title: Menüler, tuşlar ve fare
summary: Zaten çalıştığınız biçime uyan bir menü stili seçin, her komuta kendi tuşunuzu verin, komutları şerit sekmeleri arasında taşıyın ve tekerleğin ile fare düğmelerinin ne yaptığını ayarlayın.
keywords: menü stili, menüler, şerit, araç çubuğu, komut satırı, klavye kısayolları, kısayollar, tuşlar, özelleştir, yeniden ata, fare, tekerlek, ters çevir, yakınlaştırma yönü, orta düğme, sağ düğme, kaydır, döndür, dışa aktar, içe aktar, geçiş, tanıdık, klasik çizim, çelik şerit
from: 4132c6e5
---

DetailCraft'ın komutları hangi yoldan ulaşırsanız ulaşın aynı şekilde çalışır. Bir **menü stili** yalnızca komutların ekranda nerede durduğunu, orada nasıl adlandırıldığını ve hangi tuşlarla çalıştığını belirler. {{ui:Settings}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menus, keys and mouse}} bölümünde seçin; değişiklik anında uygulanır ve bu tarayıcı bunu hatırlar.

## Üç stil

| Stil | Ne elde edersiniz |
|---|---|
| {{ui:DetailCraft}} | DetailCraft'ın kendi araç çubuğu (Dosya, Yerleştir, Bağlan, Düzenle, Çıktı) ve tek harfli tuşları: {{key:V}} seç, {{key:B}} kiriş, {{key:C}} kolon, {{key:R}} çapraz, {{key:P}} levha, {{key:F}} temel, {{key:S}} merdiven. Varsayılan. |
| {{ui:Drafting classic}} | Komut yazanlar için: küçük bir şerit ({{ui:Home}}, {{ui:View}}, {{ui:Output}}) ve bir komut satırı. BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (geri al), ZOOM, PLAN, 3D, DRAWINGS, NC ya da HELP yazıp {{key:Enter}}'a basın. Hiçbir şey yokken {{key:Enter}} son komutu yineler, {{key:Esc}} onu temizler. Herhangi bir yerde yazmaya başlayın; harfler komut satırına gider. Orta düğme kaydırır; 3B'de {{key:Shift}} ile orta düğme yörüngede döndürür. |
| {{ui:Steel ribbon}} | Çelik detaylandırma programlarının düzenlediği gibi sekmeler: {{ui:Modeling}} (elemanlar, beton, merdivenler), {{ui:Detailing}} (bağlantılar), {{ui:Edit}}, {{ui:Drawings}} (çizimler ve raporlar), {{ui:Fabrication}} (NC dosyaları, IFC) ve {{ui:View}}; bir {{ui:File}} menüsü ve sağda hızlı düğmelerle. Tek harfli tuşlar kalır. Orta düğme kaydırır; 3B'de sol düğme yörüngede döndürür. |

Her stil {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} ve {{key:Mod+A}} tuşlarını korur. Şeritler ayrıca görünüm çubuğunun {{ui:3D}}, {{ui:Plan}}, {{ui:Elevation}} ve {{ui:Fit}} düğmelerini de barındırır.

:::tip
DetailCraft'ın kendi düzenine ait ama stilinizde başka bir komuta verilmiş bir tuş hiçbir şey yapmaz; durum satırı komutun nereye gittiğini söyler ("Benim çelik şeridimde, Kolon Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ve oklar her zaman anlamını korur; bir eleman yarım yerleştirilmişken ya da bir kopya imleci izlerken harfler DetailCraft'a aittir.
:::

## Kendinize göre yapın

1. Ne istediğinize en yakın stili seçin, sonra {{ui:Customize…}} düğmesini tıklayın.
2. {{ui:Keys and menus}} bölümünde bir komut bulun (arama kutusu yardımcı olur). {{ui:Add a key}} seçeneğine tıklayıp tuşa basın ya da iki harfli bir tuş için arka arkaya iki tuşa basın. Bir tuşu kaldırmak için üzerine tıklayın.
3. Bir şerit kullanıyorsanız, {{ui:Where it sits}} alanıyla komutu başka bir sekmeye ve panele, {{ui:File}} menüsüne ya da {{ui:Keys only}} seçeneğine taşıyın.
4. {{ui:Mouse}} bölümünde tekerleği, planı ve görünüşleri kaydıran düğmeleri ve 3B görünümde her düğmenin ne yaptığını ayarlayın.
5. Bir ad verin ve {{ui:Save}} düğmesini tıklayın.

Yerleşik bir stili kaydetmek kendi kopyanızı oluşturur ("Benim çelik şeridim"); yerleşik olan asla değişmez. İki komuta verilmiş bir tuş kırmızı görünür ve kaydetmeden önce düzeltilmelidir.

## Fare

- **Fare tekerleği**: {{ui:Scroll up zooms in}} (başlangıç) ya da {{ui:Scroll up zooms out}}, ve hızı. Dokunmatik yüzeyde çimdikleme her zaman parmaklarınızın hareket ettiği yönde yakınlaştırır.
- **Plan ve görünüşleri şununla kaydırın**: orta düğme, sağ düğme ya da ikisi. Seçim aracıyla sol düğme her zaman bir seçim penceresi çizer.
- **3B görünümde sürükleme**: {{ui:Each view's own}} DetailCraft'ın düğmelerini korur (sol yörünge, orta yakınlaştırma, sağ kaydırma). Ya da her düğmeyi yörünge, kaydırma, yakınlaştırma ya da hiçbiri olarak ayarlayın; yörünge ya da kaydırma yapan bir düğmeyle {{key:Shift}} ikisini değiştirir.

## Yanınızda taşıyın

{{ui:Export}} kullanımdaki stili küçük bir `.ccinput.json` dosyası olarak kaydeder; {{ui:Import…}} başka bir bilgisayardan ya da bir meslektaşınızdan birini ekler. İçe aktarılan bir dosya yalnızca DetailCraft'ın kendi komutlarını gösterebilir: başka her şey dışarıda bırakılır ve durum satırında sayılır. {{ui:Delete this style}} kendi stillerinizden birini kaldırır.

:::note
Bu ayarlar bu tarayıcıda kalır. Stil kartlarının altındaki {{ui:Use this style in every app}} her uygulamanın eşleşen stille açılmasını sağlar (kendi araç çubuğu, bir şerit ya da {{ui:Drafting classic}}), yaptığınız değişikliklerle birlikte her uygulamada. DetailCraft'ın bir menü çubuğu stili yoktur: başka bir uygulamanın menü çubuğu her uygulama için seçildiğinde DetailCraft kendi araç çubuğunu korur.
:::

İlgili: [Klavye ve fare](topic:keyboard) · [DetailCraft ayarları](topic:settings) · [Başka detaylandırma yazılımlarından gelenler](topic:coming-from)
