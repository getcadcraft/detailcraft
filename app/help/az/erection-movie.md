---
title: Quraşdırma planı və filmi
summary: Kran və onun yük cədvəlini daxil edin, hər qaldırışın faza sırası ilə cədvələ görə yoxlandığını görün və istənilən telefonda oflayn oynayan quraşdırma filmini saxlayın.
keywords: quraşdırma, kran, qaldırış, yük cədvəli, radius, tutum, bağlama, ardıcıllıq, film, animasiya, telefon, oflayn, qaldırış planı
from: fa7b0133
---

{{ui:Quraşdırma}} sekmesi modeli quraşdırma sifarişinə çevirir və hər qaldırışı təsvir etdiyiniz kranla yoxlayır. O, yazdığınız rəqəmlərdən planlaşdırır. Bu qaldırış planı deyil: onu bağlayıcı və kran operatoru hazırlayır.

## Kranı təsvir edin

{{ui:Kran əlavə et}} seçin, sonra doldurun:

- **Kranın mərkəzi X və Y:** kranın durduğu yer, millimetrlə.
- **Ən yüksək qarmaq:** qarmağın qalxa biləcəyi ən çox hündürlük, millimetrlə. 0 o deməkdir ki, heç bir limit yoxlanılmır.
- **Qarmaq bloku və bağlama yük cədvəlində yoxdur:** cədvəliniz bunu artıq etmədikdə, yükə əlavə edilməzdən əvvəl cədvəldən çıxarılan kiloqramlar.
- **Yük cədvəli:** hər sətirdə bir sıra, metrlə radius və sonra kiloqramla tutum. Sətirləri kranın öz cədvəlindən kopyalayın.

Yük cədvəli yük cədvəli kimi oxunur: radius üçün sadalanan tutum o radiusa qədər dayanır. İki sıra arasındakı radiusda yük **daha uzaq** sıranın tutumunu alır, heç vaxt onların arasındakı dəyəri yox. İlk sıranın içində ilk sıranın tutumu dayanır. Son sıradan kənarda kran heç nə qaldıra bilmir. Qaldırış üçün sayılan radius götürmə radiusu ilə quraşdırma radiusundan böyük olanıdır.

İkinci kran eyni üsulla əlavə olunur. Hər qaldırış, sizin həddinizdə onu götürə bilən ilk krana verilir.

## Plan nə edir

- Hər yığım üçün bir qaldırış: son lövhələri olan tir, baza lövhəsi olan sütun, pilləkən.
- Sıra əvvəlcə fazaları, sonra pillə-pillə izləyir: sütunlar, onların daşıdığı tirlər, bənzər, lövhələr, pilləkənlər. Hissə onu daşıyandan əvvəl heç vaxt qaldırılmır.
- Hər qaldırış öz çəkisini göstərir (modelin ümumi çəkisi, üstəgəl {{ui:Hər çəkiyə əlavə olunan bağlama}}), radiusu, cədvəlin istifadə etdiyi payı və başladığı dəqiqəni.
- {{ui:Qaldırışın istifadə edə biləcəyi cədvəlin ən çox hissəsi}} sizin təhlükəsizlik həddinizdir. Həddən yuxarı qaldırış **Həddinizdən yuxarı** ilə işarələnir; cədvəldən yuxarı **Cədvəldən yuxarı**; cədvəlin son radiusundan kənar **Cədvəldən kənar**; qarmaqdan yüksək hissə **Qarmaq çox aşağı**.

Dəliklər və kəsiklər çəkidən çıxılmır, boltlar isə bağlama faizinə daxildir.

## Problemlər

Həddən yuxarı, cədvəldən kənar, çox yüksək və ya onu daşıyandan əvvəl təyin olunmuş hər qaldırış {{ui:Problemlər}} panelində görünür. Onu daşıyacaq birləşməsi olmayan tir müvəqqəti dayaq tələb edən kimi sadalanır.

## Filmi saxlayın

{{ui:Filmi saxla}} bir HTML faylı yazır. Onu istənilən brauzerdə açın, telefonda da, şəbəkəsiz və hesab olmadan: oynat və dayandır, çubuğu istənilən dəqiqəyə sürüşdürün, modeli barmaqla fırladın, zoom üçün sıxın. Başlıq hər qaldırışı, onun çəkisini, radiusunu və cədvəl payını adlandırır. Model sadə qutularla çəkilir: sıranı və qaldırışları göstərir, həqiqi profilləri yox.

Eyni cədvəl {{ui:CSV}} düyməsi ilə CSV kimi saxlanılır. Kran və cədvəl model faylında saxlanılır və hər dəyişiklik bir geri alma addımıdır.
