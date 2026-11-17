---
title: Tikintiyə yararlılığın yoxlanması
summary: Detallaşdırıcının gözlə tutduğu şeylər üçün problemlər: açar çatmayan bolt, yuvaya sığmayan sıx boltlar, ölçü limitlərindən kənar künc qaynaqları, məşəl çatmayan qaynaqlar və su saxlayan borular.
keywords: tikintiyə yararlılıq, açar, yuva, bolt girişi, bərkitmə, qaynaq ölçüsü, künc qaynağı, minimal qaynaq, maksimal qaynaq, su, havalandırma deşiyi, drenaj deşiyi, sink örtüyü, boş kəsik, problemlər
from: 72315151
---

DetailCraft heç bir möhkəmlik yoxlamasının tapmadığı dörd növ problemi axtarır və onları {{ui:Problemlər}} panelində siyahıya alır. Bunlar xəta deyil, baxmalı olduğunuz xəbərdarlıq və qeydlərdir: model yenə qurulur.

## Açarın çatmadığı bolt

Hər bolt üçün DetailCraft başının və qaykasının üzərinə yuva qoyur. Yuva qayka künclərində eni qədər və 4 mm divar əlavə edilmiş, 60 mm uzunluqda silindrdir. Əgər tir gövdəsi, flanş, lövhə və ya diaqonal həmin silindrin içində dursa, problem birləşmənin adını, neçə boltun təsir etdiyini, hansı hissənin yolda olduğunu və boltdan nə qədər uzaqda olduğunu göstərir.

Yuva tipik zərbə yuvasıdır. Açar daha az yer tələb edir, daha böyük alət isə daha çox. `constructability_check` əmrini başqa `socketLength` ilə işə salmaq üçün qoşulmuş köməkçinizdən istəyin ki, cavabın necə dəyişdiyini görəsiniz.

## Yuva üçün çox yaxın boltlar

Bir boltun üstündəki yuva növbəti boltun başına toxunmamalıdır. Bir birləşmənin boltları yuvanın eni ilə qonşu başın ölçüsündən az məsafədə olduqda, tapılmış aralıq və tələb olunan aralıq ilə siyahıya alınır.

## Künc qaynağının ölçüləri

AISC 360-16 Cədvəl J2.4 ən kiçik künc qaynağını daha nazik hissənin qalınlığına görə təyin edir (3 mm 6.35 mm qalınlığa qədər, 5 mm 12.7-yə qədər, 6 mm 19.05-ə qədər, 8 mm-dən yuxarı), J2.2b isə materialın kənarı boyunca ən böyüyünü: material 6.35 mm-dən nazikdirsə ona bərabər, əks halda 1.6 mm az. Eyni qalınlıqdakı eyni ölçülü birləşmələr bir problem kimi siyahıya alınır.

İstifadə olunan qalınlıq qaynağın adını çəkdiyi ən nazik hissədir, ona görə də 6.35 mm gövdəsi olan tirin hər tərəfində 8 mm qaynaq siyahıya alınır.

## Su və havalandırma

- Dik duran və ya 10°-dən çox meylli boş kəsiyin **açıq yuxarı ucu** yağış suyunu içəri buraxır.
- **Hər iki ucu bağlı** boş kəsik havalandırma və drenaj deşiyi tələb edir; isti daldırma sinkləmə və qızdırılmış havanın təzyiqi də bunu tələb edir.

## Qaynaqçı ora çata bilirmi

Künc qaynağı iki birləşən üz arasında məşəlin yarı yolda olması ilə edilir. Hər hərtərəfli künc qaynağı üçün (son lövhə, baza lövhəsi, kəsilmiş lövhə) yoxlama lövhədəki elementin kəsik konturunu götürür və hər 20 mm-dən bir, nozzle-nin (başlanğıcda 10 mm radius) hər iki üzü ilk təmizlədiyi yerdən 45° bucaqla, digər 30 mm üçün məşəl yolu keçirir. Yol tirin öz flanşına və ya başqa hissəyə çatarsa, qaynağın həmin hissəsi hissə və məsafə ilə siyahıya alınır. Bu rəqəmlər tipikdir, standartın rəqəmi deyil: proses və nozzle üçün fabrikantınızdan soruşun. İki kənar boyunca qaynaqlar (kəsmə lövhəsi) yerləşdirilmir və yoxlanılmır.
