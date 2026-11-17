---
title: Mərhələlər
summary: Modeli mərhələlərə bölün (montaj ardıcıllığı və ya çatdırılmalar), hər mərhələni göstərin və ya gizlədin, detalları mərhələyə qoyun və nişanları mərhələ üzrə nömrələyin.
keywords: mərhələ, mərhələlər, mərhələ meneceri, montaj ardıcıllığı, çatdırılma, partiya, ardıcıllıq, mərhələni gizlət, mərhələni göstər, filtr, nömrələmə, nişan prefiksi, mərhələ üzrə
from: bae506f5
---

Mərhələ birlikdə istehsal olunan, çatdırılan və ya montaj edilən detalların qrupudur: montaj ardıcıllığı, çatdırılma, partiya. Hər element və təməl bir mərhələdədir. Birləşmə onun əsas elementinin mərhələsindədir: son lövhənin tiri, baza lövhəsinin sütunu. Yeni modelin bir mərhələsi var.

## Mərhələlər paneli

{{ui:Model}} panelinin {{ui:Mərhələlər}} bölməsi bütün mərhələləri sadalayır:

- qutucuq mərhələni görünüşdə göstərir və ya gizlədir;
- nömrə və yazıla bilən ad (boş = "Mərhələ 2" və s.);
- onda neçə detal olduğu;
- {{ui:×}} düyməsi mərhələni silir. Yalnız boş mərhələ silinə bilər: əvvəlcə onun detallarını başqa mərhələyə qoyun.

{{ui:Mərhələ əlavə et}} növbəti nömrəni əlavə edir və onu yeni detalların düşdüyü mərhələ edir.

## Detalları mərhələyə qoyun

- **Yeni detallar:** {{ui:Yeni detallar bura düşür}} indidən yerləşdirdiyiniz hər element və təməlin düşəcəyi mərhələni seçir.
- **Bir detal:** onu seçin və {{ui:Xüsusiyyətlər}} panelində {{ui:Mərhələ}} dəyişin.
- **Bir neçə detal:** onları seçin (pəncərə, {{key:Shift}}+klik, {{key:Mod+A}}) və {{ui:Xüsusiyyətlər}} panelinin yuxarısında {{ui:Mərhələ}} dəyişin. Müxtəlif mərhələlərdə olduqda **Müxtəlifdir** göstərir. Bir dəyişiklik bir geri qaytarma addımıdır.

Surətlər kopyalandıqları detalın mərhələsini saxlayır, başqa modelə yapışdırıldıqda da (mərhələ orada əlavə olunur).

## Mərhələləri göstərin və gizlədin

Gizli mərhələ görünüşdə çəkilmir, klik edilə bilməz və ya seçim pəncərəsinə düşmür, {{key:Mod+A}} onu kənarda qoyur. O, hələ də materialların siyahısında, hesabatlarda, çertyojlarda və hər ixracda var. Gizlətmə yalnız görünüş üçündür: saxlanılmır və geri qaytarılmır.

## Mərhələ üzrə nişanlar

**Mərhələ üzrə nişanları nömrələ** açıq olduqda (başlanğıcda açıqdır) və detallar bir neçə mərhələdə olduqda, hər mərhələ öz nömrəsi ilə nömrələnir və nişanları mərhələ nömrəsi ilə başlayır: detal nişanları 1-b1, 2-b1, montaj nişanları 2-B1, təməllər 2-F1. Müxtəlif mərhələlərdə olan iki eyni tir o zaman fərqli nişanlara malik olur, çünki onlar fərqli vaxtlarda istehsal və göndərilir. İstifadədə bir mərhələ olduqda nişanların prefiksi yoxdur. Bütün modeli bir hissə kimi nömrələmək üçün onu söndürün; beləliklə eyni detallar mərhələsindən asılı olmayaraq eyni nişanı bölüşür.

Mərhələ IFC ixracına yazılır (xüsusiyyət dəsti DetailCraft, Phase).

:::note
Mərhələli modellər DetailCraft-ın fayl formatı 2-də saxlanılır. DetailCraft-ın 0.3 buraxılışı onları aça bilməz; bu versiya köhnə faylları açır, bütün detallar mərhələ 1-də olmaqla.
:::
