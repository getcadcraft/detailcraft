---
title: Kopyalama, yapışdırma və surət çıxarma
summary: Bir neçə hissə seçin, onları deşikləri, kəsikləri və birləşmələri ilə kopyalayın və şəbəkə kəsişməsinə, sürüşmə ilə, yerində və ya başqa vərəqdə yapışdırın. Kəsin, surət çıxarın, silin və hamısını seçin.
keywords: kopyala, yapışdır, kəs, surət çıxar, buferə, yerində yapışdır, hamısını seç, heç nəyi seçmə, çoxlu seçim, shift klik, bir neçə, bölməni təkrarla, çərçivəni kopyala, sürüşmə, bir neçəsini sil, redaktə menyusu, daha çox menyusu
from: f25f1829
---

Alətlər panelindəki {{ui:Redaktə}} qrupunda {{ui:Geri qaytar}}, {{ui:Təkrarla}}, {{ui:Kopyala}} və {{ui:Yapışdır}} var. Onun {{ui:Daha çox}} menyusunda qalanlar yer alır: {{ui:Kəs}}, {{ui:Kopyala}}, {{ui:Yapışdır}}, {{ui:Yerində yapışdır}}, {{ui:Surət çıxar}}, {{ui:Sil}}, {{ui:Hamısını seç}} və {{ui:Heç nəyi seçmə}}, hər birinin öz qısayolu ilə. Hazırda işləyə bilməyən düymə və ya menyu elementi boz olur; üzərinə gəlib səbəbini oxuya bilərsiniz (məsələn, "hələ heç nə kopyalanmayıb").

Hər yapışdırma, kəsmə, surət çıxarma və silmə bir addımdır: bir {{key:Mod+Z}} hamısını geri qaytarır.

## Bir neçə hissə seçin

- Hissəni seçmək üçün üzərinə klik edin. {{key:Shift}} (və ya {{key:Ctrl}}, ya da {{key:Mod}}) düyməsini basıb saxlayın və daha çox hissəyə klik edərək onları əlavə edin; seçilmiş birinə eyni üsulla klik edərək onu çıxarın.
- {{key:Mod+A}} və ya {{ui:Hamısını seç}} bütün elementləri, birləşmələri və bünövrələri seçir.
- {{key:Esc}} və ya {{ui:Heç nəyi seçmə}} seçimi təmizləyir.

Bir neçə şey seçiləndə {{ui:Xüsusiyyətlər}} panelinin başlığı "4 seçilib" (və ya neçə olduğu) olur və elementləri növünə görə, birləşmələri, bünövrələri və ümumi polad çəkisini sadalayır, həmçinin {{ui:Kopyala}}, {{ui:Surət çıxar}} və {{ui:Sil}} düymələri ilə.

## Kopyalama

1. İstədiyiniz elementləri və bünövrələri seçin.
2. {{ui:Kopyala}} seçin və ya {{key:Mod+C}} basın.

Nə kopyalanır:

- Hər element tam halda: profil, material, uclar, mövqe, fırlanma, ad, deşiklər və kəsiklər. İstifadə etdiyi fərdi profil də kopyalanır.
- Hər bünövrə tam halda: ölçü, beton, aşağı şəbəkə və başlanğıc çubuqları.
- Son lövhələr və baza lövhələri, yalnız hər birləşdirdiyi element kopyalandıqda: tirin son lövhəsi həm tiri, həm də sütununu tələb edir. Status paneli neçə birləşmənin çıxarıldığını göstərir. Birləşmələri qəsdən çıxarmaq üçün [DetailCraft parametrləri](topic:settings) bölməsində **Son lövhələri və baza lövhələrini üzvləri ilə birlikdə kopyala** seçimini təmizləyin.

Tək başına birləşmə kopyalana bilməz; bunun əvəzinə onun elementlərini seçin. Digər birləşmələri eyni birləşməyə çevirmək üçün {{ui:Oxşar}} istifadə edin (bax: [Son lövhələr](topic:end-plates#copy-it-to-every-similar-joint)).

Başqa bir şey kopyalayana qədər kopyalanmış məlumat bu brauzerdə qalır. Eyni brauzerdəki başqa DetailCraft vərəqi və ya pəncərəsi onu yapışdıra bilər, beləliklə bir modeldən çərçivə kopyalayıb başqa modelə yapışdıra bilərsiniz.

## Şəbəkə kəsişməsinə yapışdırma

1. {{ui:Yapışdır}} seçin və ya {{key:Mod+V}} basın.
2. Göstəricini görünüşün üzərinə aparın. Kopyanın kəsikli konturu göstəriciyə ən yaxın şəbəkə kəsişməsini izləyəcək.
3. Kəsişməyə klik edin. Kopyanın baza nöqtəsi (aşağı küncü: kopyalanan hər şeyin ən kiçik x, y və z dəyərləri) oraya düşəcək.

Yapışdırılmış hissələr sonradan seçilir, belə ki, başqa yerə yenidən yapışdıra və ya onları dəyişə bilərsiniz. {{key:Esc}} yapışdırmanı ləğv edir; kopya buferdə qalır. {{ui:Plan}} və {{ui:Fasad}} düzgün kəsişməni tapmağı asanlaşdırır.

:::tip
Bölməni təkrarlamaq üçün bölmənin elementlərini seçin (və ya {{key:Mod+A}} ilə hər şeyi), kopyalayın, yapışdırın və kopyanın aşağı küncünün olduğu yerdən bir bölmə yan tərəfdəki kəsişməyə klik edin.
:::

## Klaviaturadan yapışdırma

Yapışdırma zamanı {{ui:Xüsusiyyətlər}} paneli buferdə nə olduğunu və iki formanı göstərir:

- {{ui:Sürüşmə ilə yapışdır (mm, orijinaldan)}}: x, y və z yazın və {{ui:Bu sürüşmədə yapışdır}} seçin. [DetailCraft parametrlərindən](topic:settings) götürülmüş sürüşmə ilə başlayır.
- {{ui:Şəbəkə kəsişməsinə yapışdır}}: hərflərlə işarələnmiş şəbəkəni, nömrələnmiş şəbəkəni və səviyyəni seçin və {{ui:Burada yapışdır}} seçin. Baza nöqtəsi oraya düşəcək.

## Yerində yapışdırma

{{ui:Yerində yapışdır}} ({{key:Mod+Shift+V}}) kopyanı tam olaraq kopyalandığı koordinatlara qoyur. {{ui:Kəs}} əməliyyatından sonra və ya digər modeldən hissələri eyni yerə gətirmək üçün istifadə edin. Orijinallar hələ yerindədirsə, kopya onların üzərinə düşür və status paneli xəbərdarlıq edir: kopyaları {{ui:Xüsusiyyətlər}} paneldə {{ui:Başlanğıc}} və {{ui:Son}} ilə köçürün və ya geri qaytarın.

## Surət çıxarma

{{ui:Surət çıxar}} ({{key:Mod+D}}) seçimi kopyalayır və dərhal yapışdırır; [DetailCraft parametrlərində](topic:settings) göstərilən sürüşmə qədər yerdəyişdirilir (başlanğıcda x boyu 6000 mm). Buferdəki məlumatı dəyişmir. Surətlər sonradan seçilir, buna görə {{key:Mod+D}} yenidən basdıqda onlardan növbəti surət yaranır.

## Kəsmə və silmə

- {{ui:Kəs}} ({{key:Mod+X}}) seçimi kopyalayır, sonra silir. Onu lazım olan yerə yapışdırın.
- {{ui:Sil}} ({{key:Delete}} və ya {{key:Backspace}}) seçimi silir. Elementi silmək onun birləşmələrini də silir.

## Yapışdırmadan sonra markalar

Hissə və yığım markaları heç vaxt saxlanmır; DetailCraft hər dəyişiklikdən sonra onları modelə görə yenidən nömrələyir ([Markalar necə verilir](topic:mark-rules)). Buna görə:

- Orijinalı ilə eyni parça olan kopya (eyni profil, marka, kəsim uzunluğu, deşiklər və kəsiklər) orijinalın markasını alır və {{ui:Hissə markaları}} və hesabat siyahısındakı say artır.
- Fərqli olan kopya öz markasını alır. Məsələn, son lövhələri olmadan yapışdırılmış tir kəsilmədiyi üçün başqa parçadır. Markalar bütün model üzrə yenidən nömrələnir, buna görə başqa hissələrin nömrələri də dəyişə bilər.

Yapışdırılmış hər element, deşik, kəsik, birləşmə və bünövrə yeni id alır, buna görə modeldə heç nə kopya ilə orijinal arasında heç vaxt paylaşılmır.

## Bufer rədd edildikdə

Buferdəki məlumat açdığınız model faylı kimi diqqətlə yoxlanılır: etibarlı DetailCraft hissəsi olmayan hər şey atılır və status paneli nəyin atıldığını göstərir. Daha yeni DetailCraft-dan və ya başqa mənbədən gələn bufer mesajla rədd edilir və heç nə yapışdırılmır. Gizli pəncərə kopyanı brauzer yaddaşında saxlaya bilmirsə, kopya həmin vərəqdə yenə işləyir.
