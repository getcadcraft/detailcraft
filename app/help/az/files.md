---
title: Faylları açmaq, saxlamaq və ixrac etmək
summary: DetailCraft model faylı, onun yazdığı hər ixrac, faylların hara yükləndiyi və brauzerə və bağlantıya görə nəyin fərqləndiyi.
keywords: aç, saxla, ixrac, yüklə, fayl, json, ifc, nc1, dstv, csv, pdf, zip, formatlar, idxal
from: 6fbc8e8f
---

DetailCraft-ın öz faylı var, model, və beş ixracı. Hər saxlama və hər ixrac yükləmə ilə yerinə yetirilir. Heç nə serverə göndərilmir və serverdə heç nə saxlanmır.

## Model faylı

DetailCraft modeli `<name>.detailcraft.json` adı ilə saxlanılır; burada `<name>` {{ui:Model}} panelindəki model adıdır. Onda şəbəkələr, səviyyələr, elementlər (onların deşikləri və kəsikləri ilə), birləşmələr və onların parametrləri, bünövrələr və sizin fərdi profilləriniz saxlanılır.

Hissələr, markalar, boltlar, qaynaqlar və çubuqlar saxlanılmır: DetailCraft onları hər açılanda modeldən yenidən hesablayır. Model faylının kiçik olmasının səbəbi budur.

### Saxla

1. {{ui:Model}} panelinin yuxarısındakı {{ui:Name}} sahəsinə ad yazın.
2. {{ui:File}} qrupunda {{ui:Save}} düyməsini seçin və ya {{key:Mod+S}} basın.
3. Brauzer `<name>.detailcraft.json` faylını yükləyir. Status paneli "Saxlanıldı … (yükləndi)" yazır və brauzer sekmə başlığının əvvəlindəki nöqtə yox olur.

Hər saxlama yeni yükləmədir. Brauzer açdığınız faylın üzərinə yazmır; ayarlarından asılı olaraq adına nömrə əlavə edir, məsələn `Frame (1).detailcraft.json`, ya da faylın harada saxlanacağını soruşur. Öz versiyalarınızı yüklənmiş faylların adını dəyişməklə saxlayın.

:::chromium
Chrome və Edge faylları Yüklənmələr qovluğuna saxlayır, əgər brauzerin yükləmə parametrlərində **Yükləmədən əvvəl hər faylın harada saxlanacağını soruşun** seçimi aktiv deyilsə. Hər dəfə qovluq və fayl adı seçmək istəyirsinizsə, onu aktiv edin.
:::

:::firefox
Firefox faylları Yüklənmələr qovluğuna saxlayır, ya da parametrlərində **Faylların harada saxlanacağını həmişə soruşun** seçimi aktivdirsə, hər dəfə soruşur.
:::

:::safari
Safari faylları Yüklənmələr qovluğuna saxlayır. Qovluğu dəyişmək üçün **Safari, Parametrlər, Ümumi, Fayl yükləmə yeri** bölməsini açın.
:::

### Aç

1. {{ui:File}} qrupunda {{ui:Open}} düyməsini seçin və ya {{key:Mod+O}} basın.
2. `.detailcraft.json` faylını seçin.

Və ya faylı {{pick:mac=Finder|windows=File Explorer|linux=fayl meneceriniz}} daxilindən sürükləyib görünüşün üzərinə buraxın. Sürüklədiyiniz zaman görünüş yazır: "Açmaq üçün DetailCraft modelini buraxın".

Açıq modelin saxlanmamış dəyişiklikləri varsa, DetailCraft əvvəl soruşur: {{ui:Cancel}}, {{ui:Discard changes}} və ya {{ui:Save first}}.

DetailCraft faylın hər sahəsini istifadə etməzdən əvvəl yoxlayır. İstifadə edə bilmədiyi hər şey kənarda qoyulur və status paneli nəyin olduğunu yazır, məsələn "2 element düzgün deyildi və kənarda qoyuldu." Daha yeni DetailCraft tərəfindən saxlanmış model yarımçıq açılmaq əvəzinə mesajla rədd edilir.

### Nəyi açır

Öz model faylları (`.json`, 50 MB-a qədər) və IFC faylları (`.ifc`, IFC2X3 və ya IFC4, 200 MB-a qədər). IFC faylı açıldıqda və ya {{ui:Import IFC}} ilə idxal edildikdə, onun tir, sütun, element, lövhə, şəbəkə və səviyyələrindən yeni model yaranır; deşiklər və kəsiklər onlara kəsilir, boltları isə sərbəst boltlar kimi gəlir. Kənarda qoyulanları hesabat sadalayır. Bax: [IFC ixracı](topic:ifc-export#import). DWG, DXF və ya hər hansı digər detallaşdırma proqramının modelini hələlik açmır; cəhd edəndə belə mesaj çıxır: "DetailCraft öz modellərini (.detailcraft.json) və IFC fayllarını (.ifc) açır."

## İtirilmiş iş, son fayllar, masaüstü tətbiqi

- Modelində saxlanmamış dəyişikliklər olduğu müddətdə DetailCraft bu brauzerdə bir nüsxə saxlayır. Siz saxlamadan sekme və ya brauzer dayanarsa, DetailCraft-ı növbəti dəfə açanda **İşinizi bərpa edək?** soruşur: nüsxəni bərpa edin və ya buraxın. Bax: [İşinizi bərpa etmək](common:recover).
- Brauzer DetailCraft-a onları yenidən açmağa icazə verdikdə, son açdığınız modellər başlanğıc ekranında siyahılanır; birinə klikləyərək onu yenidən açın.
- Masaüstü tətbiqində {{ui:Save}} modeli açdığınız fayla geri yazır (brauzerdə isə bir nüsxə yükləyir), DetailCraft modelinə və ya IFC fayla iki dəfə klikləmək isə onu DetailCraft-da açır.

## İxraclar

Bütün ixraclar model adından istifadə edir. Onları {{ui:Output}} qrupunda seçin.

| Düymə | Fayl | Nə var |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: mərtəbələr, şəbəkələr, hər polad hissə deşikləri və kəsikləri ilə profil ekstruziyası kimi, yığımlar, boltlar və anker çubuqları, bünövrələr və hər çubuq. Bax: [IFC ixracı](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Hər hissə markası üçün bir DSTV `.nc1` faylı. Bax: [NC fayllarını sexə göndərmək](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Bir faylda üç cədvəl: hissələr, yığımlar, boltlar və anker çubuqları. Bax: [Markalar və materialların siyahısı](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Bünövrələrdəki hər çubuq markası. Bax: [Bünövrələr və armatur](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` hər hissə markası üçün bir vərəq saxlayır; {{ui:Download this sheet}} göstərilən vərəqi verir (başqa ölçü seçməsəniz A3). Bax: [Sex çertyojlarını hazırlamaq](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` və ya `.dxf`, bir neçəsi `<name> drawings DWG.zip` (və ya `DXF.zip`) faylında | Seçdiyiniz vərəq ölçüsündə planlar, fasadlar və yığım çertyojları; DWG və DXF tam ölçüdə, kağızda 1 vahid = 1 mm. Bax: [Ümumi düzülüş və yığım çertyojları](topic:drawings). |

### CSV fayllarına qeydlər

- Onlar bayt sırası işarəsi ilə başlayır ki, cədvəl proqramları vurğulu hərfləri düzgün oxusun.
- `=`, `+`, `-` və ya `@` ilə başlayan xana (və sadə rəqəm olmayan) əvvəlinə apostrof alır ki, cədvəl onu heç vaxt formul kimi işlətməsin.
- Uzunluqlar millimetrlə, çəkilər kiloqramla verilir.

### PDF-ə qeydlər

PDF-dəki mətn standart Helvetica şriftindən istifadə edir. Onda olmayan simvollar (Qərbi Avropa dəstindən kənar) "?" kimi çap olunur və status paneli neçə simvol olduğunu deyir.

## Ölçü vahidləri

DetailCraft hər yerdə millimetrlə işləyir: şəbəkələr, səviyyələr, koordinatlar, profillər, deşiklər və hər ixrac. Profil adları dərc olunmuş formasını saxlayır (W12x50 ölçüləri mm ilə göstərilsə də, ABŞ təyinatıdır). Hələlik qeyri-metrik (imperial) giriş yoxdur.

## Onlayn və oflayn

Açma, saxlama və ixrac hamısı brauzerinizdə baş verir, ona görə DetailCraft yükləndikdən sonra bağlantı olsun-olmasın eyni işləyir.

Sonra bağlantı olmadan DetailCraft-dan istifadə etmək üçün onlayn olarkən tətbiq panelində {{ui:Save for offline}} seçin. Düymə sayır ("Saxlanılır: 3 / 20") və sonra {{ui:Offline ready}} yazır. Saxlanılan nüsxəyə 3D qrafika kitabxanası (təxminən 2.6 MB) və bu kömək daxildir, ona görə saxlandıqdan sonra 3D görünüş, hər ixrac və kömək oflayn işləyir. Təfərrüatlar və hələ də bağlantı tələb edənlər: [Oflayn işləmək](common:offline).

:::offline
Oflaynsınız. Tətbiq panelində {{ui:Offline ready}} görünürsə, açma, saxlama və ixrac adi kimi işləyir. Görünmürsə, bu sekme açıq qalsın, bağlantı bərpa olunana qədər onu yenidən yükləməyin və modelinizi indi saxlayın.
:::

Bulud saxlanması hələ mövcud deyil və masaüstü versiyaları da hələ yoxdur. `.detailcraft.json` fayllarınızın ehtiyat nüsxəsini hər digər iş faylınızın nüsxəsi kimi çıxarın. Ətraflı: [Fayllarınız haradadır](common:your-files).

## Saxlanmamış iş

DetailCraft modeli yalnız açıq sekmədə saxlayır. Saxlanmamış dəyişikliklərlə sekmənizi bağlasanız və ya yenidən yükləsəniz, brauzer səhifədən çıxmağı soruşur; mətn brauzerin öz mətnidir. Tez-tez {{key:Mod+S}} ilə saxlayın.
