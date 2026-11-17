---
title: Tuşlar ve fare eylemleri
summary: DetailCraft'taki her klavye kısayolu ile fare, dokunmatik yüzey ve dokunma eylemleri, koddan alınmıştır.
keywords: klavye, kısayollar, kısayol tuşları, tuşlar, fare, dokunmatik yüzey, dokunma, ctrl, command, hızlı başvuru
from: 05a2dea0
---

Bu yardımda tuşların nasıl yazıldığı: [Tuşlar, fareler ve dokunmatik yüzeyler](common:keys). Mac'te {{key:Mod}} Command tuşudur; diğer yerlerde Ctrl'dir.

## Araçlar

Bunlar imleç bir metin ya da sayı alanındayken çalışmaz.

| Tuş | İşlevi |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:B}} | {{ui:Beam}} |
| {{key:C}} | {{ui:Column}} |
| {{key:R}} | {{ui:Brace}} |
| {{key:P}} | {{ui:Plate}} |
| {{key:F}} | {{ui:Footing}} |
| {{key:S}} | {{ui:Stair}} |
| {{key:M}} | İki ızgara kesişimini seçerek seçimi taşıyın ([Pencereyle seç, taşı, döndür, aynala, çoğunu değiştir](topic:select-and-change)) |
| {{key:Esc}} | Sürüklenen bir seçim penceresini bırakın ya da sürüklenen parçaları geri koyun; bir taşımayı, bir kiriş, çapraz ya da levhanın ilk noktasını ya da bir yapıştırmayı iptal edin; tekrar basarak {{ui:Select}} aracına dönün; {{ui:Select}} aracındayken seçimi temizleyin. {{ui:More}} menüsü açıksa onu kapatın |
| {{key:Delete}} veya {{key:Backspace}} | Seçimi sil (seçili her şey, tek bir geri al adımında) |

## Dosya ve düzenleme

| Tuş | İşlevi |
|---|---|
| {{key:Mod+S}} | Modeli kaydedin (indirilir). Bir alana yazarken de çalışır |
| {{key:Mod+O}} | Bir model açın. Bir alana yazarken de çalışır |
| {{key:Mod+Z}} | Geri al (metin alanları dışında; içindeyken yazdığınızı geri alır) |
| {{key:Mod+Y}} veya {{key:Mod+Shift+Z}} | Yinele |

## Kopyalama ve yapıştırma

Bunlar imleç bir metin ya da sayı alanında değilken çalışır (orada metninizi her zamanki gibi kopyalar, yapıştırır ve seçersiniz). Her yapıştırma, kesme, çoğaltma ya da silme tek bir geri al adımıdır. Daha fazlası: [Kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).

| Tuş | İşlevi |
|---|---|
| {{key:Mod+C}} | {{ui:Copy}}: seçili elemanları ve temelleri kopyalar (delikleri, ağızları ve bağlantılarıyla birlikte) |
| {{key:Mod+X}} | {{ui:Cut}}: seçimi kopyalar, sonra siler |
| {{key:Mod+V}} | {{ui:Paste}}: kopya imleci izler; yerleştirmek için bir ızgara kesişimine tıklayın |
| {{key:Mod+Shift+V}} | {{ui:Paste in place}}: kopyalandığı koordinatlara |
| {{key:Mod+D}} | {{ui:Duplicate}}: hemen bir kopya, [DetailCraft ayarları](topic:settings) içindeki kaydırma miktarınca taşınmış |
| {{key:Mod+A}} | {{ui:Select all}}: her eleman, bağlantı ve temel |
| {{key:Esc}} | {{ui:Select none}} |

Sayfada seçili bir metniniz varsa (mesela bir rapor tablosunda) ve modelde hiçbir şey seçili değilse, {{key:Mod+C}} her zamanki gibi metni kopyalar.

{{ui:New}}, {{ui:Sample}} ve dışa aktarmaların tuşu yoktur; araç çubuğunu kullanın.

Bir iletişim kutusu (imalat çizimi önizlemesi ya da bir soru) açıkken bu tuşların hiçbiri bir şey yapmaz.

## Alanlar ve paneller

| Tuş | İşlevi |
|---|---|
| {{key:Enter}} veya {{key:Tab}} | Yazılan bir değeri uygulayın (her değişiklik tek bir geri al adımıdır) |
| {{ui:Grids}}, {{ui:Levels}}, {{ui:Custom profile}}, delik ya da ağız alanında {{key:Enter}} | O formun düğmesini seçmekle aynı |
| {{key:Left}} {{key:Right}} | Bir sekme odaktayken {{ui:Problems}}, {{ui:Bill of materials}} ve {{ui:Bending schedule}} sekmeleri arasında geçin |
| {{key:Esc}} | İmalat çizimi önizlemesini ya da bir soru iletişim kutusunu kapatın ({{ui:Cancel}} ile aynı) |

## Ekran ve yardım

| Tuş | İşlevi |
|---|---|
| {{key:Ctrl+Shift+F}} | Normal, tam ekran, çubukları gizli tam ekran arasında döngü. Mac dahil her bilgisayarda Control |
| {{key:Mod+,}} | {{ui:Settings}} ekranını açın ([DetailCraft ayarları](topic:settings)) |
| {{key:Esc}} | Tam ekrandan çıkın |
| {{key:F1}} | Bu yardımı açın |

## Fare

| Eylem | 3B'de | Plan ve Görünüşte |
|---|---|---|
| Tıklayın | Bir parça seçin ya da bir yerleştirme aracı açıksa en yakın kesişime yerleştirin (yapıştırırken de oraya yapıştırın) | Aynı |
| {{key:Shift}}, {{key:Ctrl}} veya {{key:Mod}} ile tıklayın | Parçayı seçime ekleyin ya da seçimden çıkarın | Aynı |
| Seçili bir parçaya basın ve sürükleyin | Seçimi katta taşıyın; {{key:Mod}} basılıyken yukarı ve aşağı | Seçimi taşıyın (bir görünüşte boyunca ve yukarı aşağı) |
| Sol düğmeyle sürükleyin | {{ui:Select}} ile: bir seçim penceresi (sağa: tamamen içinde; sola: değenler). Yerleştirirken: kaydırın | {{ui:Select}} ile: bir seçim penceresi. Yerleştirirken: kaydırın |
| {{key:Shift}} ile sol düğmeyle sürükleyin | {{ui:Select}} ile: seçime eklenen bir seçim penceresi. Yerleştirirken: kaydırın | {{ui:Select}} ile: seçime eklenen bir seçim penceresi |
| {{key:Ctrl}} veya {{key:Mod}} ile sol düğmeyle sürükleyin | Kaydırın | Hiçbir şey |
| Sağ düğmeyle sürükleyin | Kaydırın | Kaydırın |
| Tekerlek | Görünümün ortasına doğru yakınlaştırın | Yakınlaştırın |
| Orta düğmeyle sürükleyin | Yakınlaştırın | {{ui:Select}} ile: kaydırın. Aksi halde yakınlaştırın |
| Uygulamaya bir `.detailcraft.json` dosyası sürükleyip bırakın | Açın | Açın |

Tıklama sayılması için işaretçinin basış ve bırakış arasında yaklaşık 5 pikselden az hareket etmesi gerekir; daha uzun hareket sürüklemedir.

## Dokunmatik yüzey

| Eylem | Sonuç |
|---|---|
| İki parmakla yukarı ya da aşağı kaydırın ya da çimdikleyin | Yakınlaştırır |
| Basın ve sürükleyin | 3B'de döndürür, Plan ve Görünüşte kaydırır |
| {{key:Shift}} ile basın ve sürükleyin | 3B'de kaydırır |
| İki parmakla tıklayın | Sağ tıklama yapar (görünümde menü yoktur) |

## Dokunma

Bir tablet ya da dokunmatik ekranda:

| Eylem | Sonuç |
|---|---|
| Dokunun | Bir parçayı seçer ya da bir yerleştirme aracı açıksa en yakın ızgara kesişimine yerleştirir (yaklaşık bir parmak genişliği içindeki dokunuş sayılır) |
| Bir parçaya uzun basın | Seçime ekler ya da seçimden çıkarır ({{key:Shift}}+tıklamanın farede yaptığı) |
| Seçili bir parçaya bir parmakla basın ve sürükleyin | Seçimi taşır, ızgara kesişimlerine yapışarak |
| Başka bir yere bir parmakla | 3B'de modeli döndürür, Plan ve Görünüşte kaydırır |
| İki parmak | Çimdikleyerek yakınlaştırır, birlikte hareket ettirerek kaydırır |

Ekran yalnızca dokunmatikse düğmeler, listeler ve alanlar daha büyüktür. Seçim pencereleri fare gerektirir; parmakla dokunun ve uzun basın.

## Tarayıcının tuttuğu tuşlar

Bazı kısayollar tarayıcıya aittir ve hiçbir sayfa bunları kullanamaz; örneğin {{key:Mod+W}} (sekmeyi kapat), {{key:Mod+T}} (yeni sekme) ve {{key:Mod+N}} (yeni pencere). {{key:Mod+Y}} yinelemek yerine tarayıcınızın geçmişini açarsa {{key:Mod+Shift+Z}} kullanın.

Kısayollar DetailCraft'a yalnızca sayfa klavyeye sahipken ulaşır. Bir tuş bir şey yapmıyorsa ya da tarayıcı onu kendisi işliyorsa, önce DetailCraft penceresinin boş bir parçasına tıklayın (mesela adres çubuğuna yazdıktan sonra).

## Taşı komutu nerede?

Taşı komutu yoktur: bir parça seçip katta sürükleyin ({{key:Mod}} basılıyken yukarı ve aşağı sürükleyin) ya da {{ui:Properties}} içinde {{ui:Start}} ve {{ui:End}} değerlerini düzenleyin.
