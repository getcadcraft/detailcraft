---
title: Henüz yapılmadı
summary: Bu erken DetailCraft sürümünün ne yapamadığı ve bugün bunun yerine ne yapabileceğiniz.
keywords: sınırlar, sınırlamalar, eksik, yol haritası, desteklenmiyor, yakında, planlanan, geçici çözüm, yapılacaklar
from: ea411885
---

DetailCraft erken bir sürümdür. Bu sayfa henüz yapmadıklarını listeler, böylece onlara göre plan yapabilirsiniz. Buradaki hiçbir şey bir tarih vaadi değildir.

## Modelleme

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Bir elemanın bir ucunu sürükleme (gerdirme) | {{ui:Özellikler}} panelinde {{ui:Uçlar (x, y, z mm)}} altındaki {{ui:Başlangıç}} ya da {{ui:Uç}} değerini düzenleyin |
| Seçim filtresi (yalnızca kirişler, yalnızca bir profil) | Bir pencere sürükleyin, sonra parçaları çıkarmak için {{key:Shift}}+tıklayın |
| Seçimi dizi halinde çoğaltma; eğik bir eksen etrafında döndürme; eğik bir düzlemde aynalama | Bir ofsetle kopyalayıp yapıştırın ya da {{ui:Çoğalt}} komutunu kullanın; döndürme ve aynalama planda çalışır ([Pencereyle seçin, taşıyın, döndürün, aynalayın, çok şeyi değiştirin](topic:select-and-change)) |
| Tıklarken ızgara dışındaki noktalar | Izgara üzerine yerleştirin, sonra uç koordinatlarını yazın |
| Numaralı ızgara çizgileri boyunca görünüşler; kayıtlı görünümler; çalışma düzlemleri | {{ui:3B}} kullanın ya da {{ui:Izgaraya göre ekle}} |
| 3B görünümde gerçek kesim olarak çizilen delikler | Delikler koyu tapalar olarak görünür; her dışa aktarımda gerçektir |
| Yuvarlatılmış ya da açılı kesimler, diğer kesimler ve bağlantı parçaları | Yalnızca I profillerde dik kesimler |
| Köşebentlere ve yuvarlak borulara eklediğiniz delikler | Köşebent delikleri yalnızca [çapraz köşe levhalarından](topic:brace-gussets) gelir |
| İngiliz birimiyle giriş | Milimetre yazın (inç başına 25.4) |
| Özel bir profili düzenleme ya da kaldırma | Düzeltilmiş bir profili yeni bir adla ekleyin |

## Merdivenler

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Korkuluklar, sahanlıklar, ayak levhaları, ızgara basamaklar, sarmal ve çift kollu merdivenler | Yalnızca düz kollar; bkz. [Merdivenler](topic:stairs) |
| Merdiven kirişi uç kesimleri, kat döşemelerine göre | Dik kesimli merdiven kirişleri; bunları imalat yazılımınızda kesin |

## Bağlantılar

DetailCraft altı bağlantı oluşturur: bir çapraz köşe levhası (bkz. [Çapraz köşe levhaları](topic:brace-gussets)); bir I profilin iki parçası arasında cıvatalı bir ek (bkz. [Ekler](topic:splices)); açıyla buluşan iki I profil arasında bir gönye, yalnızca kesim ya da cıvatalı uç levhalarıyla (bkz. [Gönye birleşimleri](topic:mitres)); seviyeli, dik bir I profil kirişten bir I profil kolonun flanşına ya da gövdesine düz ya da uzatılmış cıvatalı bir uç levhası; bir kirişten (dik, çarpık ya da eğimli) kolon flanşına ya da gövdesine bir kesme levhası; ve dört angkraj çubuğu olan bir kolon taban levhası.

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Çarpık ya da eğimli uç levhaları | Çarpık ve eğimli kirişleri kabul eden [kesme levhalarını](topic:shear-tabs) kullanın |
| Klips köşebentleri; dolgu levhaları ve farklı boyutlar arasındaki ekler; kiriş ve kolona kaynaklı köşe levhaları, pahlı köşe levhaları | Bunları başka bir yazılımda detaylandırın ya da levhaları ve delikleri elle serbest parça olarak ekleyin; bkz. [Ekler](topic:splices), [Çapraz köşe levhaları](topic:brace-gussets) |
| Pahlı ya da konik taban takviyeleri; harç delikleri; kesme dili için temel cebi | Dikdörtgen takviyeler; bkz. [Taban levhaları](topic:base-plates) |
| Pabuçlar; alın kaynaklı kaynaklı gönyeler; diğer elemanın flanşlarıyla hizalı takviyeler | Uç levhaları ve gövde takviyeleri olan bir [gönye](topic:mitres) ya da düz bir gönye kesimi; diğer levhaları elle serbest parça olarak ekleyin |
| Bağlantı tasarım kontrolleri (dayanım) | Bağlantıları mühendisinizin hesaplarıyla kontrol edin; DetailCraft yalnızca kenar mesafesi ve aralık konusunda uyarır |
| Yuvalı delikler | Yalnızca yuvarlak delikler |

## Analiz

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Çelik I profillerin ötesindeki tasarım kontrolleri: borular, köşebentler, kanallar, kaynaklı kesitler, narin ya da 4. sınıf parçalar, burulma, bağlantılar; beton: yan ötelenme narinliği, burulma, depreme dayanıklı detaylandırma, döşemeler ve duvarlar | {{ui:Analiz}} sekmesi çelik I profilleri AISC 360 ya da EN 1993-1-1 standartlarına göre kontrol eder ([Çelik elemanları bir tasarım koduna göre kontrol edin](topic:design-checks)); geri kalanı "kontrol edilmedi" olarak işaretlenir; hepsini bir mühendis gözden geçirir |
| Burkulma analizi, titreşim | İkinci mertebe yalnızca P-Delta (elastik); burkulma analizi yok (modal, tepki spektrumu, zaman tanım alanı ve itme analizleri {{ui:Analiz}} sekmesindedir) |
| Bir mühendis tarafından gözden geçirilmiş tasarım kontrolleri | O zamana kadar bir yardımcıdır: bunlara güvenmeden önce iki üç elemanı elle ya da mühendisinizin kendi yazılımında kontrol edin |
| Alanlardan sizin için üretilen döşeme, rüzgâr ve kar yükleri | Yükleri elemanlara elle, kN/m ya da kN olarak girin |
| Eleman ofsetleri, eksantrik birleşimler, yalnızca çekmeye çalışan çaprazlar, çerçevedeki levhalar ve temeller | Elemanlar çalışma hatları üzerinde analiz edilir; çaprazlar çekme ve basınç taşır |

## Donatı

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Yuvarlak kolonlar, spiraller, eğimli ya da eğrisel kirişler, dikdörtgen dışındaki döşemeler, düz olmayan duvarlar | Dikdörtgen kirişler, kolonlar, döşemeler ve duvarlar ([Betonarme detaylandırma](topic:reinforced-concrete)) |
| Bindirmeye bükülen donatılar, kademeli bindirmeler, istediğiniz yere yerleştirilen bindirmeler | Eşit adımlarda bindirmeler; her donatı tek bir kesitte bindirilir (ACI Sınıf B, EN α6 = 1.5) |
| Açıklıklarda köşe donatıları, zımbalama kesme donatısı, depreme dayanıklı detaylandırma (ACI 318-19 bölüm 18) | Açıklığın her iki yanındaki trimmer donatıları; gerisini kendiniz kontrol edin |
| Bir yapısal tasarım programının kendi dosyalarını okuma | Programdan IFC dışa aktarın: IfcReinforcingBar öğeleri donatı olarak içe aktarılır ([IFC dosyasından donatılar](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Düz, tek bükümlü ve U'nun ötesindeki şekil kodları; düz ve tek kancalı donatılar için ACI 315 tipleri | Üç şekil BS 8666 00, 11, 21 ya da ACI Tip 2 olarak yazdırılır; bkz. [Donatı başvurusu](topic:rebar-reference) |
| BS 4449 H8–H40 dışındaki metrik donatılar (ör. CSA 10M–35M) | ASTM yumuşak metrik adları #10–#36 ya da BS donatıları |

## Çizimler ve dışa aktarımlar

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Dikey (portre) sayfalar, A0 ve kendi boyutunuzda sayfalar; çarpık ızgaralarda genel yerleşim görünümleri | Yatay A4'ten A1'e ve ANSI B'den D'ye kadar ([Genel yerleşim ve montaj çizimleri](topic:drawings)); başka bir boyutta yazdırmak için PDF'i ölçekleyin |
| Tek parçalı imalat çizimlerinde kaynak sembolleri; köşe kaynağı dışındaki semboller | Montaj çizimleri köşe kaynağı sembollerini taşır; imalat çizimi kaynağı metin olarak verir |
| Uygulamada çizimi düzenleme | Modeli değiştirip çizimi yeniden oluşturun; PDF'i MarkupCraft gibi bir PDF uygulamasında işaretleyin |
| Ölçülendirme nesneleriyle DWG olarak çizimler, ya da sayfaların düzen olduğu model uzayında tam ölçekli model | Her sayfa, kâğıdın tam boyutlu bir DWG ya da DXF dosyasıdır; ölçüler çizgi ve rakam olarak ([Genel yerleşim ve montaj çizimleri](topic:drawings#download)) |
| NC dosyalarında yuvarlak borulardaki delikler, köşebent ve yuvarlak borulardaki kesimler | Yazılmaz; bkz. [NC dosyası alanları](topic:nc1-fields) |
| NC dosyalarında pahlar, işaretlemeler ve iç konturlar | Bugün yok |
| USD dışa aktarımında cıvata delikleri, cıvatalar, kaynaklar ve temeller | Bunlar IFC, NC ve {{ui:Malzeme listesi}} çıktılarında bulunur; bkz. [Çelik modeli USD olarak dışa aktarın](topic:usd) |
| Bağlantıları, temelleri, yuvalı ya da dikdörtgen delikleri ve yuvarlak borulardaki delikleri bir IFC dosyasından içe aktarma | {{ui:IFC içe aktar}} kirişleri, kolonları, elemanları, levhaları, ızgaraları, seviyeleri, yuvarlak delikleri, kesimleri, cıvataları ve donatıları içe aktarır; raporu dışarıda bıraktıklarını listeler |
| Özel rapor düzenleri | Üç CSV dosyası |

## Paneller

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Alttaki raporları taşıma ({{ui:Sorunlar}}, {{ui:Malzeme listesi}}, {{ui:Büküm listesi}}) | Yalnızca {{ui:Model}} ve {{ui:Özellikler}} panelleri taşınır. Bkz. [Panelleri düzenleyin](common:arrange-panels) |

## Birlikte çalışma ve kaydetme

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Bilgisayarlar arasında bulut kaydı ve eşitleme | `.detailcraft.json` dosyalarını kaydedin ve herhangi bir dosya gibi paylaşın. Bulut kaydı henüz kullanılamıyor |
| Canlı TeamWork oturumunda başkalarının imleçleri ve "düzenliyor" etiketleri; ızgaralar, seviyeler ve aşamalar öğe öğe birleştirilir | Düzenlemeler yine birleşir (ızgaralar, seviyeler ve aşamalar bütün olarak gider, sonraki değişiklik geçerli olur); bkz. [Bir yapıyı birlikte, canlı olarak ayrıntılandırın](topic:work-live) |
| İnternet üzerinden Canlı TeamWork oturumuna davet bağlantıları | Aynı ağda kısa bir kodla katılın |

## Platformlar

- DetailCraft masaüstü, dizüstü ya da tablet ekranı için yapılmıştır. Telefonda da çalışır: model ekranı ve panelleri korur, raporlar ise alttaki bir çubuktan sayfa olarak açılır; ancak panellere pek yer yoktur.
- Çevrimdışı kullanım için önce DetailCraft'ı çevrimdışı kullanım için kaydetmeniz gerekir: uygulama çubuğundaki {{ui:Çevrimdışı için kaydet}} ile. {{ui:Çevrimdışı hazır}} yazısını gösterdiğinde bu sürümdeki her şey bağlantı olmadan çalışır. Bkz. [Çevrimdışı çalışma](common:offline).

Bu eksikliklerden biri işinizi engelliyorsa, [destek sayfası](https://getcadcraft.com/support) üzerinden bize bildirin; bir sonraki neyi yapacağımıza karar vermemize yardımcı olur.
