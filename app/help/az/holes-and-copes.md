---
title: Deşiklər və kəsimlər əlavə edin
summary: Deşikləri stənkalara, flanşlara və lövhələrə yazın, tir ucunda flanşları kəsilmiş uçundan ölçülən kəsimlərlə kəsin.
keywords: deşik, deşiklər, bolt deşiyi, kəsim, oyuq, kəsmə, qazma, deşmə, stənka deşiyi, flanş deşiyi
from: 33d12398
---

Deşiklər və kəsimlər mövqeyinə görə yazılır. Onlar elementə aiddir və onunla birlikdə hərəkət edir.

Birləşmələrin (uc lövhələri, baza lövhələri) yaratdığı deşiklər sizin üçün əlavə olunur; onları yazmırsınız. Onlar "… birləşmələrdən deşiklər (birləşməni redaktə edin)" kimi siyahılanır.

## Mövqelər haradan ölçülür

- **x** detal boyunca **kəsilmiş başlanğıcdan** ölçülür: hər hansı birləşmə onu kəsdikdən sonra başlanğıc ucu. Yəni x = 0 şəbəkə nöqtəsi deyil, poladın real ucudur.
- **y** kəsiyin mərkəzindən üz boyunca ölçülür:
   - **stənkada**: orta dərinlikdən yuxarı (müsbət) və ya aşağı;
   - **flanşda** və ya **lövhədə**: mərkəz xəttindən eni boyunca.
- Elementin başlanğıcı onu yerləşdirərkən birinci klikləyiniz nöqtədir. {{ui:Uclar (x, y, z mm)}} sətirləri hansı ucun hansı olduğunu göstərir.

## Deşik əlavə edin

1. Elementi seçin.
2. {{ui:Xüsusiyyətlər}} panelinin {{ui:Deşiklər}} qutusunda {{ui:Üz}} seçin: {{ui:Stənka}}, {{ui:Yuxarı flanş}} və ya {{ui:Aşağı flanş}} (I formalı, kanal və ya düzbucaqlı boru üçün), və ya {{ui:Lövhə üzü}} (lövhə üçün).
3. {{ui:x boyunca (mm)}}, {{ui:y eninə (mm)}} və {{ui:Diametr (mm)}} yazın. Forma x 100, y 0, diametr 22 ilə başlayır.
4. {{ui:Deşik əlavə et}} seçin.

Status panelində "Deşik əlavə edildi. x kəsilmiş başlanğıcdan; y kəsiyin mərkəzindən (stənkada: yuxarı, flanş/lövhədə: eninə)." yazılır. Deşik siyahıda və görünüşdə, üzdən keçən tünd tıxac kimi görünür.

Deşiyi silmək üçün siyahıda onun yanındakı × düyməsini seçin.

Bucaqlar və dairəvi borular hələ deşik qəbul etmir: onların {{ui:Deşiklər}} qutusu bunu deyir.

:::note
3D görünüşdə deşiklər poladın içindən kəsilməyib, tünd tıxaclar kimi çəkilir. Onlar NC fayllarında, emal çertyojlarında və IFC ixracında real deşiklərdir.
:::

Deşiyin x-i detalın hər hansı ucundan kənarda olduqda {{ui:Problemlər}} sekməsində "Deşik detalın ucundan kənardadır" kimi görünür.

## Kəsim əlavə edin

Kəsimlər I formalı elementlər üçündür: bir ucda yuxarı və ya aşağı flanşı (və həmin dərinlikdə stənkanı) kəsib çıxarırlar, ki, tir başqa elementə yer açsın.

1. I formalı elementi seçin.
2. {{ui:Kəsimlər}} qutusunda {{ui:Son}} seçin ({{ui:Başlanğıc}} və ya {{ui:Son}}) və {{ui:Tərəf}} seçin ({{ui:Yuxarı}} və ya {{ui:Aşağı}}).
3. {{ui:Uzunluq (mm)}} (həmin ucdan tir boyunca) və {{ui:Hündürlük (mm)}} (yuxarıdan aşağı, və ya aşağıdan yuxarı) yazın. Forma 100 x 40 ilə başlayır.
4. {{ui:Kəsim əlavə et}} seçin.

Görünüş poladdan kəsilmiş kəsimi göstərir. Siyahı məsələn belə oxunur: "Başlanğıcda yuxarı: 100 x 40". ×-i ilə çıxarın.

Kəsimlər kvadratdır: daxili künc üçün hələ radius yoxdur.

## Kəsimlər və deşiklər nişanlara necə təsir edir

İki detal yalnız deşikləri və kəsimləri 1 mm dəqiqliyində uyğun olduqda eyni detal nişanını alır; detal çevrildikdə bu, çevrilmə nəzərə alınaraq yoxlanılır. Qrupun bir tirinə deşik əlavə etmək ona yeni nişan verir. Bax: [Nişan qaydaları](topic:mark-rules).
