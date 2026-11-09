---
title: Ekran üzrə gəzinti
summary: DetailCraft-ın hər çubuğu, paneli və sekmesi ekrandakı adı ilə və nə üçün olduğu.
keywords: ekran, tərtibat, alətlər paneli, panellər, xüsusiyyətlər, status paneli, hesabatlar, interfeys, ui, sekmələr
from: 94f81073
---

DetailCraft tətbiq panelinin altında brauzer pəncərəsini doldurur. Yuxarıdan aşağıya: alətlər paneli, sonra üç sütun ({{ui:Model}} paneli, görünüş, {{ui:Properties}} paneli), sonra hesabat sekmələri, sonra status paneli.

## Tətbiq paneli

Ən yuxarıdakı nazik panel modelə yox, CadCraft saytına aiddir. O, tətbiqin adını və versiyasını, {{ui:DetailCraft haqqında}} bağlantısını, bu kömək üçün {{ui:Help}} (və ya {{key:F1}}), {{ui:Save for offline}} düyməsini, ekran rejimi düyməsini və {{ui:Paper}} / {{ui:Model}} keçiricisini göstərir.

- {{ui:Save for offline}} DetailCraft-ı, onun 3D görünüşünü və bu köməyi brauzerinizdə saxlayır ki, bağlantısız açılsın. Saxlandıqdan sonra {{ui:Offline ready}} yazır; sonra ona klikləyərək {{ui:Save again (get the newest version)}} və ya {{ui:Remove the offline copy}} seçin. Bax: [Oflayn işləmək](common:offline).
- {{ui:Paper}} açıq ekran, {{ui:Model}} isə tünd ekran verir. 3D görünüş dərhal ona uyğunlaşır; modelinizdə heç nə dəyişmir.
- Ekran rejimi düyməsi və {{key:Ctrl+Shift+F}} normal, tam ekran və panelləri gizlədilmiş tam ekran rejimləri arasında keçir. {{key:Ctrl+Shift+F}} hər kompüterdə, Mac daxil olmaqla, Control düyməsindən istifadə edir. Panellər gizlədildikdə onları geri qaytarmaq üçün ekranın yuxarı kənarını göstərin (və ya toxunun). {{key:Esc}} tam ekrandan çıxarır.

## Alətlər paneli

Alətlər panelində beş qrup var. Düymənin nə etdiyini və onun açarını görmək üçün üzərinə gətirin.

| Qrup | Düymələr | Nə edirlər |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Yeni model başlatmaq, saxlanmış `.detailcraft.json` və ya IFC faylı açmaq, birini saxlamaq və ya nümunə karkası açmaq |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Növbəti klikin görünüşdə istifadə etdiyi alət |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, və {{ui:More}} içində: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Seçilmiş tirə, sütuna və ya diaqonala birləşmə əlavə etmək, ya da seçilmiş birləşməni oxşar bütün birləşmələrə kopyalamaq |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Dəyişikliklərdə geri və irəli getmək; seçimi kopyalamaq və yapışdırmaq. {{ui:More}} menyu açır: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} və {{ui:Select none}}, hər biri öz açarı ilə |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, və {{ui:More}} içində: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Bir ixracı yükləmək və ya çertyoj vərəqlərini açmaq |

Hazırda işləyə bilməyən düymələr və menyu bəndləri boz görünür, üzərinə gətirdikdə isə səbəbini deyir. {{ui:End plates}} seçilmiş tir, {{ui:Base plate}} seçilmiş sütun, {{ui:Similar}} seçilmiş birləşmə, {{ui:Shop drawing}} hissələri olan model, {{ui:Copy}} seçilmiş element və ya bünövrə, {{ui:Paste}} isə kopyalanmış bir şey tələb edir. Bax: [Kopyalama, yapışdırma və surət çıxarma](topic:copy-paste).

## Model paneli (sol)

- {{ui:Model}}: model {{ui:Name}}. Saxladığınız və ya ixrac etdiyiniz hər faylın adını verir.
- {{ui:Grids}}: şəbəkə xətləri və onların aralıqları, həmçinin {{ui:Apply grids}}. Bax: [Şəbəkə xətlərini və səviyyələri qurmaq](topic:grids-and-levels).
- {{ui:Levels}}: hər səviyyə üçün bir sətir (ad və mm ilə hündürlük), {{ui:Add level}} və {{ui:Apply levels}}.
- {{ui:Custom profile}}: öz parametrik kəsiyinizi yaradın. Açana qədər bağlıdır.
- {{ui:Part marks}}: modeldə hər hissə markası onun profili, uzunluğu və sayı ilə. Markaya klikləyərək onunla olan ilk hissəni seçin.

{{ui:Grids}}, {{ui:Levels}} və {{ui:Custom profile}} bölmələri yığılır: başlıqlarına klikləyin.

## Görünüş (orta)

Görünüş modeli 3D göstərir. Onun üstündə görünüş çubuğunda üç düymə və bir siyahı var:

- {{ui:3D}}: modelin ətrafında sərbəst dönün.
- {{ui:Plan}}: bir səviyyəyə düz yuxarıdan baxın. Düymələrin yanında səviyyələrin siyahısı görünür. Səviyyədən 1.5 m-dən yuxarı olan hər şey kəsilir ki, səviyyəni aydın görüb ona klikləyə biləsiniz.
- {{ui:Elevation}}: bir hərfli şəbəkə xəttinə düz baxın (Şəbəkə A, Şəbəkə B …). Hərfli şəbəkələrin siyahısı görünür. Yalnız həmin xəttdən 1 m məsafədəki polad göstərilir.
- Görünüş çubuğunun sağ ucundakı sığdırma düyməsi bütün modeli göstərmək üçün miqyası dəyişir.

Kiçik nöqtələr hər səviyyədə hər şəbəkə kəsişməsini işarələyir. Yerləşdirmə aləti aktiv olanda göstəricinin ən yaxın nöqtəsi işıqlanır və status paneli onu adlandırır, məsələn "Səviyyə 1-də A/2". Rənglər element növlərini fərqləndirir: sütunlar, tirlər, diaqonallar və lövhələrin hər birinin öz rəngi var, boltlar və çubuqlar başqa rəngdədir, bünövrələr şəffafdır, armatur isə boru kimi çəkilir. Deşiklər tünd tıxac kimi göstərilir; kəsiklər isə kəsilmiş kimi görünür.

Necə dönmək, sürüşdürmək və miqyas dəyişmək: [3D görünüşdə hərəkət](topic:navigate-3d).

Model boş olanda görünüş qısa "Model başlat" siyahısını göstərir. Həmçinin saxlanmış model faylını açmaq üçün görünüşün istənilən yerinə sürükləyib buraxa bilərsiniz.

## Xüsusiyyətlər paneli (sağ)

Bu panelin nə göstərməsi nə etdiyinizdən asılıdır və başlığı hansının olduğunu deyir: "Model", "Tir yerləşdir", "Tir b2", "Son lövhə birləşməsi", "Baza lövhəsi", "Bünövrə F1", "3 seçilib" və ya "Yapışdır".

- **Heç nə seçilməyib:** modelin xülasəsi (elementlər, birləşmələr, bünövrələr, hissələr, markalar, boltlar, polad və armatur çəkisi, şəbəkələr, səviyyələr).
- **Yerləşdirmə aləti aktivdir:** növbəti hissə üçün seçimlər (profil, material, mövqe, fırlanma və sütunlar üçün {{ui:Up to}}), seçilmiş profilin xülasəsi və görünüşdə klikləmədən yerləşdirmək üçün {{ui:Add by grid}} forması.
- **Element seçilib:** onun adı, profili, materialı, mövqeyi, fırlanması, iki ucunun koordinatları, markaları, kəsim uzunluğu və çəkisi, deşikləri və kəsikləri, həmçinin birləşmələr, onun sex çertyoju və {{ui:Delete}} düymələri.
- **Birləşmə seçilib:** hər lövhə, bolt və qaynaq parametri, onun yaratdığı boltlar və qaynaq, xəbərdarlıqları və {{ui:Oxşarlara tətbiq et}}.
- **Bünövrə seçilib:** onun mövqeyi və ölçüsü, alt armatur şəbəkəsi, başlanğıc çubuqlar və istifadə etdiyi çubuq markaları.
- **Bir neçə şey seçilib:** hər növdən neçə element, birləşmə və bünövrə, onların polad çəkisi və {{ui:Copy}}, {{ui:Duplicate}} və {{ui:Delete}}.
- **Yapışdırma:** bufərdə nə olduğu və yazdığınız sürüşmə ilə və ya siyahıdan seçdiyiniz şəbəkə kəsişməsinə yapışdırmaq üçün formalar.

Rəqəm sahələri {{key:Enter}} basdıqda və ya sahədən çıxdıqda qüvvəyə minir. Hər dəyişiklik geri qaytara biləcəyiniz bir addımdır.

## Hesabat sekmələri (aşağı)

- {{ui:Problems}}: DetailCraft-ın qura bilmədiyi və ya yoxlamanızı istədiyi hər şey, hər sətirdə {{ui:Select}} düyməsi ilə. Sekmə sayı mötərizədə göstərir.
- {{ui:Bill of materials}}: hissələr, yığımlar, boltlar və anker çubuqları, çəkiləri və {{ui:Download CSV}} bağlantısı ilə. Hissə markasına klikləyərək həmin hissəni seçin.
- {{ui:Bending schedule}}: hər bünövrədə hər çubuq markası, {{ui:Download CSV}} bağlantısı ilə.

Sekmə fokusda olanda {{key:Left}} və {{key:Right}} sekmələr arasında keçir.

## Status paneli

Aşağıdakı panel üç hissədən ibarətdir: yerləşdirərkən göstəricinin altındakı şəbəkə kəsişməsi, son mesaj (indicə nə baş verdi və ya nə üçün nəyinsə rədd edildiyi) və hissələrin, boltların, polad çəkisinin və armatur çəkisinin cari cəmləri. Əgər əməliyyat heç nə etmirmiş kimi görünürsə, əvvəlcə buradakı mesaja baxın.

Model saxlanmamış dəyişikliklərə malik olduqda brauzer sekmə başlığı nöqtə (•) ilə başlayır.

## Dar ekranda

Təxminən 760 pikseldən dar olduqda sütunlar alt-alta düzülür: alətlər paneli, görünüş, status paneli, {{ui:Properties}}, hesabat sekmələri və ən sonda {{ui:Model}} paneli. Onlara çatmaq üçün səhifəni sürüşdürün. DetailCraft masaüstü və ya noutbuk ekranı üçün tərtib olunub; telefon baxmaq üçündür, detallaşdırma üçün deyil.
