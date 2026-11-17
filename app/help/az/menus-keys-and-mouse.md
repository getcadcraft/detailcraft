---
title: Menyular, düymələr və siçan
summary: İş üslubunuza uyğun menyu üslubu seçin, istənilən əmrə öz düyməni verin, əmrləri lent sekmələri arasında köçürün və təkərin və siçan düymələrinin nə etdiyini təyin edin.
keywords: menyu üslubu, menyular, lent, alətlər paneli, komanda sətri, klaviatura qısayolları, qısayol düymələri, düymələr, fərdiləşdir, yenidən təyin et, siçan, təkər, invert, miqyas istiqaməti, orta düymə, sağ düymə, sürüşdür, fırlat, ixrac, idxal, keçid, tanış, klassik çertyoj, polad lent
from: 4132c6e5
---

DetailCraft əmrləri hansı yolla çatdığınızdan asılı olmayaraq eynidir. **Menyu üslubu** yalnız onların ekranda harada durduğunu, orada necə adlandırıldığını və hansı düymələrlə işə düşdüyünü təyin edir. Onu {{ui:Parametrlər}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menyular, düymələr və siçan}} bölməsində seçin; dəyişiklik dərhal tətbiq olunur və bu brauzer onu yadda saxlayır.

## Üç üslub

| Üslub | Nə alırsınız |
|---|---|
| {{ui:DetailCraft}} | DetailCraft-ın öz alətlər paneli (Fayl, Yerləşdir, Birləşdir, Redaktə, Çıxış) və tək hərfli düymələri: {{key:V}} seç, {{key:B}} tir, {{key:C}} sütun, {{key:R}} diaqonal, {{key:P}} lövhə, {{key:F}} bünövrə, {{key:S}} pilləkən. Başlanğıc. |
| {{ui:Klassik çertyoj}} | Əmrləri yazmağı sevənlər üçün: kiçik lent ({{ui:Əsas}}, {{ui:Görünüş}}, {{ui:Çıxış}}) və komanda sətri. BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (geri qaytar), ZOOM, PLAN, 3D, DRAWINGS, NC və ya HELP yazın və {{key:Enter}} basın; boş yerdə {{key:Enter}} sonuncu əmri təkrarlayır, {{key:Esc}} onu təmizləyir. İstənilən yerdə yazmağa başlayın və hərflər komanda sətrinə gedir. Orta düymə sürüşdürür; 3D-də {{key:Shift}} və orta düymə fırladır. |
| {{ui:Polad lent}} | Polad detallaşdırma proqramlarının sekmələri düzmə qaydası: {{ui:Modelləşdirmə}} (elementlər, beton, pilləkənlər), {{ui:Detallaşdırma}} (birləşmələr), {{ui:Redaktə}}, {{ui:Çertyojlar}} (çertyojlar və hesabatlar), {{ui:İstehsal}} (NC faylları, IFC) və {{ui:Görünüş}}, sol tərəfdə {{ui:Fayl}} menyusu və sağda sürətli düymələrlə. Tək hərfli düymələr qalır. Orta düymə sürüşdürür; 3D-də sol düymə fırladır. |

Hər üslub {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} və {{key:Mod+A}} düymələrini saxlayır. Lentlər həm də görünüş panelinin {{ui:3D}}, {{ui:Plan}}, {{ui:Fasad}} və {{ui:Sığdır}} düymələrini saxlayır.

:::tip
DetailCraft-ın öz tərtibatına aid olan, lakin üslubunuzda başqa əmrə verilmiş düymə heç nə etmir və status sətri əmrin hara getdiyini göstərir ("Mənim Polad lentimdə, Sütun Ctrl+Alt+C-dir"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} və istiqamət düymələri həmişə öz mənasını saxlayır; element yarımçıq yerləşdirilmiş və ya surət göstəricini izləyərkən isə hərflər DetailCraft-a aiddir.
:::

## Öz etdiyiniz kimi düzəldin

1. Ən yaxın üslubu seçin, sonra {{ui:Fərdiləşdir…}} klikləyin.
2. {{ui:Düymələr və menyular}} bölməsində əmri tapın (axtarış qutusu kömək edir). {{ui:Açar əlavə et}} seçin və düyməni basın, ya da iki hərfli düymə üçün ardıcıl iki düymə basın. Düyməni silmək üçün ona klik edin.
3. Lent ilə {{ui:Yerləşdiyi yer}} əmri başqa sekmə və panelə, {{ui:Fayl}} menyusuna və ya {{ui:Yalnız düymələr}}ə köçürür.
4. {{ui:Siçan}} bölməsində təkəri, planları və fasadları sürüşdürən düymələri və 3D görünüşdə hər düymənin nə etdiyini təyin edin.
5. Ona ad verin və {{ui:Saxla}} klikləyin.

Quraşdırılmış üslubu saxlamaq "Mənim Polad lentim" adlı öz nüsxənizi yaradır; quraşdırılmış üslub heç vaxt dəyişmir. Bir düymə iki əmrə verilibsə, qırmızı göstərilir və saxlamazdan əvvəl düzəldilməlidir.

## Siçan

- **Təkər**: {{ui:Yuxarı sürüşdürmə miqyası yaxınlaşdırır}} (başlanğıc) və ya {{ui:Yuxarı sürüşdürmə miqyası uzaqlaşdırır}}, və nə qədər sürətlə. Trekpadda sıxma həmişə barmaqlarınızın hərəkəti istiqamətində miqyası dəyişir.
- **Planları və fasadları sürüşdürmək üçün**: orta düymə, sağ düymə və ya hər ikisi. {{ui:Seç}} aləti ilə sol düymə həmişə seçim pəncərəsi çəkir.
- **3D görünüşdə sürükləmə**: {{ui:Hər görünüşün öz}} DetailCraft-ın düymələrini saxlayır (sol fırladır, orta miqyas, sağ sürüşdürür). Və ya hər düymə üçün fırlatma, sürüşdürmə, miqyas və ya heç nə təyin edin; fırladan və ya sürüşdürən düymə ilə {{key:Shift}} ikisini dəyişdirir.

## Özünüzlə aparın

{{ui:İxrac}} üslubu istifadə olunan üslubu kiçik `.ccinput.json` faylı kimi saxlayır; {{ui:İdxal et…}} birini əlavə edir, başqa kompüterdən və ya həmkarınızdan. İdxal olunan fayl yalnız DetailCraft-ın öz əmrlərinə işarə edə bilər: başqa hər şey çıxarılır və status sətrində sayılır. {{ui:Bu üslubu sil}} öz üslublarınızdan birini silir.

:::note
Bu parametrlər bu brauzerdə qalır. Üslub kartlarının altındakı {{ui:Bu üslubu bütün tətbiqlərdə istifadə et}} hər tətbiqi uyğun üslubda açır (öz alətlər paneli, lent və ya Klassik çertyoj), hər birində etdiyiniz dəyişikliklərlə. DetailCraft-da menyu çubuğu üslubu yoxdur: başqa tətbiqin menyu çubuğu hamı üçün seçildikdə, DetailCraft öz alətlər panelini saxlayır.
:::

Əlaqəli: [Klaviatura və siçan](topic:keyboard) · [DetailCraft parametrləri](topic:settings) · [Başqa detallaşdırma proqramlarından keçid](topic:coming-from)
