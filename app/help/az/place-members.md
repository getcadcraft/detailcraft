---
title: Sütunları, tirləri və diaqonalları yerləşdirin
summary: Profil, material və mövqe seçin, sonra şəbəkə kəsişmələrinə klikləyin və ya yazın və konstruktiv elementləri yerləşdirin.
keywords: sütun, tir, diaqonal, element, yerləşdirmə, profil, material, fırlanma, mövqe, ofset, daxil et, şəbəkə ilə əlavə et
from: d6db0dc1
---

Elementlər şəbəkə kəsişmələrində yerləşdirilir: sütun birində, tir və ya diaqonal ikisi arasında. Əvvəlcə [şəbəkələri və səviyyələri](topic:grids-and-levels) qurun.

## Alət və onun seçimlərini seçin

1. {{ui:Yerləşdirmə}} qrupunda {{ui:Sütun}} ({{key:C}}), {{ui:Tir}} ({{key:B}}) və ya {{ui:Diaqonal}} ({{key:R}}) seçin.
2. Sağdakı {{ui:Xüsusiyyətlər}} paneli "Sütun yerləşdirin" (və ya tir, və ya diaqonal) olur və növbəti element üçün seçimləri göstərir:
   - {{ui:Profil}}: siyahıdan seçin. Ölçülər kataloqa görə qruplaşdırılır (W profilləri, Kanallar, Bucaqlar, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS və sizin {{ui:Fərdi profil}}lərinizin). Bax: [Profil kataloqu](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 və ya S355.
   - {{ui:Mövqe}}: kəsiyin iki nöqtə arasındakı xətt üzərində harada yerləşdiyi: {{ui:Polad yuxarısı xəttin üzərində}}, {{ui:Xəttin üzərində mərkəzləşdirilib}} və ya {{ui:Aşağısı xəttin üzərində}}.
   - {{ui:Fırlanma (°)}}: kəsiyi elementin öz oxu ətrafında fırladır.
   - {{ui:Yuxarıya qədər}} (yalnız sütunlar): {{ui:Növbəti yuxarı səviyyə}} və ya səviyyə adı.
3. Seçimlərin altında {{ui:Profil}} qutusu seçilmiş kəsiyin ölçülərini, sahəsini, metr başına kütləsini və mənşə kataloqunu sadalayır.

Defolt dəyərlər sütunlar üçün A992-də W12x50 (mərkəzləşdirilmiş), tirlər üçün A992-də W16x26 (polad yuxarısı xəttin üzərində) və diaqonallar üçün A500 Gr C-də HSS6x6x1/4 (mərkəzləşdirilmiş)-dir. Seçimlər siz dəyişənə qədər qalır.

## Klikləməklə yerləşdirin

### Sütun

1. {{ui:Plan}} seçin və sütunun başladığı səviyyəni seçin.
2. {{ui:Sütun}} seçin.
3. Göstəricini kəsişməyə yaxın aparın. Ən yaxın nöqtə işıqlanır və status sətri onun adını göstərir.
4. Klikləyin. Sütun həmin səviyyədən növbəti yuxarı səviyyəyə (və ya {{ui:Yuxarıya qədər}} səviyyəsinə) qədər uzanır. Status sətri məsələn deyir: "Sütun W12x50 A/1-də, Səviyyə 1-dən Səviyyə 2-yə."
5. Daha çox yerləşdirmək üçün klikləməyə davam edin. Bitirdikdə {{key:Esc}} basın.

Klik etdiyiniz səviyyədən yuxarıda səviyyə yoxdursa, status sətri deyir: "Sütunun çatması üçün Səviyyə 2-dən yuxarıda səviyyə yoxdur. Əvvəlcə səviyyə əlavə edin."

### Tir

1. {{ui:Plan}} seçin və tirin səviyyəsini seçin.
2. {{ui:Tir}} seçin.
3. Birinci kəsişməyə klikləyin. Status sətri deyir: "A/1-dən Səviyyə 2-də. İndi digər ucuna klikləyin (Esc ləğv edir)." Göstəricini kəsik xətt izləyir.
4. İkinci kəsişməyə klikləyin. Tir görünür.
5. Növbəti tirə başlamaq üçün yenidən klikləyin və ya {{key:Esc}} basın.

Birinci klikdən sonra {{key:Esc}} yalnız həmin nöqtəni ləğv edir; ikinci {{key:Esc}} aləti yığışdırır.

### Diaqonal

Diaqonal fərqli səviyyələrdəki iki kəsişmə arasında uzanır, buna görə ən asanı {{ui:Fasad}}-dadır.

1. {{ui:Fasad}} seçin və diaqonalın üzərində olduğu hərfli şəbəkə xəttini seçin.
2. {{ui:Diaqonal}} seçin.
3. Aşağı ucuna, sonra yuxarı ucuna klikləyin.

Fasadlar yalnız hərfli şəbəkə xətləri üçündür. Nömrəli xətt boyunca (A-dan B-yə) çərçivədəki diaqonal üçün {{ui:3D}} istifadə edin və ya aşağıdakı {{ui:Şəbəkə ilə əlavə et}} formasından istifadə edin.

:::touch
Toxunuşlu ekranda kəsişməyə yaxın toxunun: toxunuş qısa məsafədə ən yaxın nöqtəni seçir və yaxında nöqtə yoxdursa heç nə etmir. Toxunmadan əvvəl işıqlandırma yoxdur, buna görə hər toxunuşdan sonra status sətri mesajını yoxlayın. Bir barmaqla sürükləmə yerləşdirmək əvəzinə görünüşü çevirir və ya sürüşdürür.
:::

## Şəbəkə ilə yerləşdirin, klik etmədən

Hər yerləşdirmə alətinin {{ui:Xüsusiyyətlər}} panelinin altında {{ui:Şəbəkə ilə əlavə et}} forması var. Yalnız klaviatura ilə işləyir və 3D görünüş tələb etmir.

1. Aləti seçin, məsələn {{ui:Tir}}.
2. {{ui:Şəbəkə ilə əlavə et}} bölməsində {{ui:Başlanğıc şəbəkə (hərf)}}, {{ui:Başlanğıc şəbəkə (rəqəm)}} və {{ui:Başlanğıc səviyyə}} seçin.
3. {{ui:Son şəbəkə (hərf)}}, {{ui:Son şəbəkə (rəqəm)}} və {{ui:Son səviyyə}} seçin.
4. {{ui:Əlavə et}} seçin.

Sütun və ya təməl üçün formada yalnız bir nöqtə var: {{ui:Şəbəkə (hərf)}}, {{ui:Şəbəkə (rəqəm)}} və {{ui:Səviyyə}}.

## Yerləşdirdikdən sonra elementi dəyişin

1. {{key:Esc}} basın (və ya {{ui:Seç}}, {{key:V}} seçin) və elementə klikləyin.
2. {{ui:Xüsusiyyətlər}} panelində {{ui:Ad}}, {{ui:Profil}}, {{ui:Material}}, {{ui:Mövqe}} və ya {{ui:Fırlanma (°)}} dəyişin.
3. Onu köçürmək üçün {{ui:Uclar (x, y, z mm)}} altında {{ui:Başlanğıc}} və ya {{ui:Son}} x, y və z-ni redaktə edin. Hər ucun şəbəkə adı altda göstərilir, və ya şəbəkədən kənardadırsa onun koordinatları.

Hər dəyişiklik bir geri qaytarma addımıdır. Sahələrin altında elementin {{ui:Detal nişanı}}, {{ui:Yığım}}, {{ui:Kəsim uzunluğu}}, {{ui:Çəki}} (ümumi: deşiklər və kəsimlər çıxılmır) və profilin hansı kataloqdan gəldiyini görürsünüz.

Elementlər hələ sürüklənə və ya massivləşdirilə bilməz. Ona oxşar başqa element üçün onu kopyalayın və yapışdırın, və ya surətini çıxarın ({{key:Mod+D}}): bax: [Kopyalama, yapışdırma və surət çıxarma](topic:copy-paste).

## Elementi silin

Onu seçin və {{key:Delete}} və ya {{key:Backspace}} basın, və ya {{ui:Sil}} seçin. Onun üzərindəki birləşmələr də gedir. {{key:Mod+Z}} hər şeyi geri qaytarır.

## Bilməli olduğunuz şeylər

- **Sütunun hansı istiqamətə baxması.** {{ui:Fırlanma (°)}} 0-da sütunun flanşları x boyunca, qonşu nömrəli şəbəkə xətlərinə doğru baxır. Şəbəkə 1-dən şəbəkə 2-yə tir flanşa birləşir; A-dan B-yə tir gövdəyə birləşir. Son lövhələr yalnız flanşlara qurulur, buna görə tirləriniz A-dan B-yə gedirsə, həmin sütunlara 90 fırlanma verin.
- **Səviyyədəki tirlər defolt {{ui:Polad yuxarısı xəttin üzərində}} ilə aşağıda asılır.** Səviyyələriniz element oxlarıdırsa {{ui:Xəttin üzərində mərkəzləşdirilib}} seçin.
- **Sütunlar səviyyədən səviyyəyə uzanır.** İki mərtəbədən keçən sütun üçün {{ui:Yuxarıya qədər}} yüksək səviyyəyə təyin edin.
- **Meyilli tirlərə** icazə var (fərqli səviyyələrdə uclar seçin), lakin onlarda son lövhələr hələ qurulmur.

Növbəti: [Tirləri son lövhələrlə sütunlara birləşdirin](topic:end-plates).
