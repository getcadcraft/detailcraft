---
title: Genel yerleşim ve montaj çizimleri
summary: Modelden plan, görünüş ve her montaj işareti için bir montaj çizimi oluşturun; A4'ten A1'e ya da ANSI B'den D'ye sayfalarda, revizyon harfleriyle yayımlayın ve PDF, DWG veya DXF olarak indirin.
keywords: gizli çizgiler, gizli çizgi kaldırma, kesikli, revizyon bulutu, bulutlar, revizyon üçgeni, angkraj çubuğu planı, angkraj çubukları, çubuk listesi, taban levhası listesi, aplikasyon, yayımla, revizyon, rev, revizyon tablosu, yeniden yayımla, yayım kaydı, transmittal, dwg, dxf, cad dosyası, çizimleri dışa aktar, çizimler, genel yerleşim, ga, plan, görünüş, montaj çizimi, sayfa boyutu, kâğıt boyutu, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, yazdır, ölçek, künye, model referansı
from: 709f8604
---

{{ui:Çıktı}} grubunda {{ui:Çizimler}} öğesini seçin. DetailCraft tüm seti şu anki modelden oluşturur. Hiçbir şey saklanmaz: modeli değiştirin, {{ui:Çizimler}} öğesini yeniden açın ve set yeniden oluşturulur.

## Setin içeriği

- **Planlar**, üstten bakılan, üzerinde bir şey bulunan her kat için bir tane.
- **Görünüşler**, 1 m içinde elemanı olan her ızgara çizgisi için bir tane.
- **Angkraj çubuğu planı**, modelde taban levhaları varsa: her taban levhası üstten, kolonu ve angkraj çubuklarıyla birlikte; ızgaralar boyutlarıyla; her çubuk deseninin (BP1, BP2 …) tipik detayı, çubuk aralığı ve kenar mesafeleriyle; ve iki liste: angkraj çubukları işarete göre (R1, R2 …: adet, çap, boy, levhanın üstündeki çıkıntı, gömme, sınıf) ve taban levhaları ızgaraya göre (kolon, desen, levha, çubuklar, levhanın üst kotu). Izgara dışındaki bir kolon koordinatlarıyla belirtilir.
- **Montaj çizimleri**, her montaj işareti için bir tane: ön, üst ve uç görünüşler, delik ve levha kenarlarına zincir ölçüler, parça listesi, gevşek cıvatalar ve çubuklar, kaynak ve delik notları. Her kaynaklı levhanın ön görünüşte bir köşe kaynak sembolü vardır (AWS A2.4): ok birleşimi gösterir, referans çizgisinin altındaki üçgen ok tarafını belirtir, solundaki rakam mm cinsinden kaynak boyutudur ve okun çizgiye ulaştığı yerdeki daire çevre boyunca anlamına gelir.

**Gizli çizgiler.** Planlar ve görünüşler, tamamen önünde bulunan bir parçanın kapattığı parçaların çizgilerini dışarıda bırakır (bir kolonun arkasında uçtan görünen bir kiriş gibi). Montaj çizimleri, levhayı ana parçanın kapattığı yerde kesikli çizer: ön görünüşte gövdenin arkasında, üst görünüşte üst başlığın altında (parçanın −u tarafından bakılarak). Derinlikte aynı seviyede olan ya da derinlikte örtüşen parçaların ikisi de tam çizilir.

Her sayfanın bir künyesi vardır: çizim numarası, ölçek, model adı, tarih, sayfa numarası ve sayfa boyutu ile model referansı. Model referansı, kaydedilmiş modelden üretilen bir koddur; böylece bir çıktı, geldiği modelle eşleştirilebilir.

## Sayfa boyutunu seçin

{{ui:Çizimler}} penceresinin üstündeki listeden boyutu seçin: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) veya {{ui:ANSI D}} (22 × 34 in). Her sayfa yatay yönlüdür. Set yeni boyutta hemen yeniden oluşturulur ve aynı boyut atölye çizimleri için de kullanılır. [DetailCraft ayarları](topic:settings#drawings) bölümünde de yer alır ve bu tarayıcı boyutu hatırlar.

- Daha büyük bir sayfa, daha büyük bir ölçekte çizer. Ölçekler her zaman standarttır (1:10, 1:20, 1:25, 1:50, 1:100 ve benzeri).
- Yazı her sayfada aynı boyutta kalır; böylece çıktıda okunabilir kalır.
- Küçük bir sayfada uzun ve ince bir montaj, derinliği boyunca uzunluğundan daha büyük bir ölçek alabilir. Bu durumda görünüm başlığı her iki ölçeği de yazar ve ölçülendirmeler belirleyicidir.

## Çizimleri yayımlayın ve revizyonlar

Önizlemenin üstündeki satır, gösterilen sayfanın durumunu söyler: **Henüz yayımlanmadı**, **Rev B, yayımlandı …; o zamandan beri değişmedi** veya kırmızıyla **B revizyonundan beri değişti: yeniden yayımlanmalı**. Sayfa listesi, yayımlanmış sayfaları revizyonlarıyla ve yeniden yayımlanması gerekenleri işaretler.

- Yayımın amacını yazın (başlangıçta "İmalat için yayımlandı") ve {{ui:Bu sayfayı yayımla}} öğesini seçin ya da son yayımından beri yeni olan veya değişmiş her sayfa için {{ui:Değişen sayfaları yayımla}} öğesini seçin.
- Bir sayfanın ilk yayımı A revizyonudur, sonra B, C ve böyle devam eder (I ve O atlanır).
- Künye, çizim numarasını revizyonuyla birlikte gösterir ("A-B1  rev B"); yanında son yayımları listeleyen bir revizyon tablosu bulunur: revizyon, tarih ve açıklama. Küçük bir sayfada sığdığı kadarını gösterir.
- Bir sayfa, üzerinde çizilenler değiştiğinde "değişir": taşınmış bir eleman, yeni bir delik, yeniden numaralanmış bir işaret. Tarih, sayfa sayısı ve revizyon tablosunun kendisi sayılmaz. Sayfa boyutunu değiştirmek her sayfayı değiştirir.
- Yayım kaydı model dosyasında saklanır ve yayımlamak tek bir geri alma adımıdır. [KISS dosyası](topic:kiss-export) her çizimin son revizyonunu taşır.

### Revizyon bulutları

Bir sayfanın ikinci yayımından itibaren, değişen her parça veya temel, harfi taşıyan bir revizyon üçgeniyle birlikte bir revizyon bulutunun içine çizilir.

- Bir sayfa son yayımından beri değiştiğinde bulutlar, o zamandan beri neyin değiştiğini gösterir; üçgende gelecek revizyon yazar (rev B yayımlanmış ve değişmişse üçgenler C der).
- Yayımladığınızda bulutlar, sayfa yeniden değişene kadar o revizyonun sayfasında kalır; tıpkı basılı bir set gibi.
- Her sayfa yalnızca gösterdiği değişiklikleri bulutlar. Planlar ve görünüşler delik ya da kesim çizmez; bu nedenle yalnızca taşınan, döndürülen, boyutu değişen ya da işareti değişen bir elemanı bulutlar. Montaj çizimleri ve angkraj çubuğu planı, yeni ya da taşınmış delikleri ve kesimleri de bulutlar.
- Yeniden numaralanan bir işaret sayılır: bir değişiklik bir kirişi yeni bir montaj yaptığında, işareti yukarı kayan kirişler (B1'den B2'ye) planlarda ve görünüşlerde bulutlanır.
- Silinmiş bir parça bulutlanacak bir şey bırakmaz.
- Revizyon bulutları gelmeden önce yayımlanmış sayfalar (DetailCraft 0.4), bir sonraki yayımlarından itibaren bulutlanmaya başlar.
- Bulutlar PDF, DXF ve DWG indirmelerinde yer alır ve kendileri hiçbir zaman bir değişiklik sayılmaz.

## İndirme

Düğmelerin yanındaki listeden biçimi seçin, ardından gösterilen sayfa için {{ui:Bu sayfa}} ya da tüm set için {{ui:Tüm sayfalar}} öğesini seçin.

- **PDF**: yazdırmak ya da göndermek için. {{ui:Tüm sayfalar}} tek bir PDF oluşturur; her sayfa bir sayfaya karşılık gelir ve her sayfa seçilen boyuttadır.
- **DWG**, 2018, 2013, 2010, 2007, 2004 ya da 2000 biçiminde: sayfaları bir CAD programında açmak için. Eski bir program için eski bir biçim seçin.
- **DXF (R12)**: hemen her CAD programının açtığı sürüm.

Bir DWG veya DXF sayfası tam boyutta çizilir: bir çizim birimi kâğıtta bir milimetredir; bu nedenle 1:1 basılır ve her görünüm, başlığında yazan ölçeği korur. Her kalem kendi katmanıdır: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID ve benzeri; çizgi kalınlığı (DWG) ve kesikleriyle birlikte. Yazılar DetailCraft metin stilinde (Arial) metindir. Ölçülendirmeler gördüğünüz çizgiler ve rakamlardır, ölçülendirme nesneleri değildir. {{ui:Tüm sayfalar}}, DWG veya DXF dosyalarını tek bir zip dosyasında toplar; sayfa başına bir dosya.

:::note
DXF R12 çizgi kalınlığı ve dolgu içermez: katmanlar adlarını korur, bu yüzden çizim yaparken kalemleri katmana göre ayarlayın; dolu şekiller dışarıda bırakılır (durum çubuğu kaç tane olduğunu söyler).
:::

Belirtilen ölçeklerin korunmasını istiyorsanız, aynı boyutta kâğıda %100 (\"sayfaya sığdır\" seçmeden) yazdırın.
