---
title: DetailCraft-a başlanğıc
summary: DetailCraft bu gün nə edir, onu necə açmaq olar və on dəqiqədə şəbəkələrdən sex çertyojuna qədər ilk modeli.
keywords: başla, ilk model, giriş, polad detallaşdırma, armatur, tez başlanğıc, dərslik, icmal
from: e4f16bbe
---

DetailCraft CadCraft ailəsinin polad və armatur detallaşdırma tətbiqidir. Polad karkasın 3D modelini şəbəkələr və səviyyələr üzərində qurursunuz, onu birləşdirirsiniz və sexə lazım olan hər şeyi alırsınız: hissə və yığım markaları, materialların siyahısı, tək hissə üzrə sex çertyojları, DSTV NC faylları, IFC modeli və bünövrələr üçün əyilmə cədvəli.

Bu, erkən versiyadır. O, hər şeyi birdən etmək əvəzinə az sayda işi diqqətlə edir. Real iş planlaşdırmazdan əvvəl [Hələ qurulmayanlar](topic:not-built-yet) bölməsini oxuyun.

## Bu gün nə edir

- Millimetrlə daxil etdiyiniz şəbəkə xətləri və səviyyələr.
- Dərc olunmuş profil kataloqlarından sütunlar, tirlər, diaqonallar və lövhələr (AISC W, S, C, L, HSS və Pipe; Avropa IPE, HEA, HEB və UPN; Böyük Britaniya UB, UC, PFC, EA, UEA, SHS, RHS və CHS), üstəlik sizin öz parametrik profilləriniz.
- İki birləşmə: tirdən sütun flanşına boltlu son lövhə və dörd anker çubuqlu sütun baza lövhəsi. Hər biri oxşar bütün birləşmələrə kopyalana bilər.
- Mövqeyinə görə daxil edilən deşiklər və kəsiklər.
- Alt armatur şəbəkəsi və başlanğıc çubuqları ilə düzbucaqlı blok bünövrələr.
- Hər dəyişiklikdən sonra özü yenilənən hissə və yığım markaları.
- İxraclar: IFC4, DSTV NC faylları (I-formalı profillər və lövhələr), CSV formatında materialların siyahısı, CSV formatında əyilmə cədvəli və bir hissənin sex çertyojunun PDF-i.

## DetailCraft-ı açmaq

1. DetailCraft-ı masaüstü brauzerdə açın: Chrome, Edge, Firefox və ya Safari. Bax: [Brauzerlər və kompüterlər](common:browsers).
2. Ekran dolana qədər gözləyin. Aşağıdakı status paneli yazır: "Hazırdır. Nümunəni açın və ya şəbəkə xətləri və səviyyələri təyin edib elementləri yerləşdirməyə başlayın."

Model görünüşü 3D qrafika (WebGL) tələb edir. Ekranın ortasında "Bu brauzer 3D qrafikanı (WebGL) başlada bilmədi" yazarsa, bax: [Problemlərin həlli](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modelləriniz kompüterinizdə qalır. Modeli açmaq onu brauzerdə oxuyur, saxlamaq isə fayl yükləyir. Heç nə yüklənmir. Bulud saxlanması hələ mövcud deyil. Bax: [Fayllarınız haradadır](common:your-files). Sonra bağlantı olmadan DetailCraft-dan istifadə etmək üçün onlayn olarkən tətbiq panelində bir dəfə {{ui:Save for offline}} seçin; bax: [Oflayn işləmək](common:offline).
:::

:::offline
Oflaynsınız. DetailCraft bağlantısız yalnız əvvəlcədən oflayn istifadə üçün saxlanılıbsa işləyir: tətbiq panelindəki {{ui:Save for offline}} düyməsi {{ui:Offline ready}} yazır. Bax: [Oflayn işləmək](common:offline).
:::

## Əvvəl nümunəyə baxın

DetailCraft-ın nə yaratdığını görməyin ən sürətli yolu nümunə karkasdır.

1. Alətlər panelinin {{ui:File}} qrupunda {{ui:Sample}} seçin.
2. Görünüşdə iki açılışlı karkas göstərilir: baza lövhəli altı sütun, son lövhəli dörd tir, bir diaqonal və armaturlu yeddi bünövrə.
3. Bir tirə klikləyin. Sağdakı {{ui:Properties}} paneli onun hissə markasını, kəsim uzunluğunu, çəkisini və son lövhələrin açdığı deşikləri göstərir.
4. Hər hissə markasını sayı və çəkisi ilə görmək üçün aşağıdakı {{ui:Bill of materials}} sekməsini açın.

[Nümunə karkası ilə tanışlıq](topic:sample-model) onu hissə-hissə izah edir.

## İlk modeliniz

Yeni modeldə artıq A-dan B-yə qədər, 6000 mm aralıqla 1-dən 3-ə qədər şəbəkə xətləri və iki səviyyə var: Səviyyə 1 — 0-da, Səviyyə 2 — 4000-də.

1. {{ui:New}} seçin. Cari modelin dəyişiklikləri varsa, DetailCraft əvvəl onları saxlamağı soruşur.
2. Görünüşün üstündə {{ui:Plan}} seçin. Yanındakı səviyyə siyahısı Səviyyə 1-i seçir.
3. Alətlər panelində {{ui:Column}} seçin və ya {{key:C}} basın.
4. A/1 şəbəkə kəsişməsinə klikləyin. Səviyyə 1-dən Səviyyə 2-yə qədər W12x50 sütunu görünəcək. Status paneli onun harada yerləşdiyini deyir.
5. Daha üç sütun yerləşdirmək üçün B/1, A/2 və B/2-yə klikləyin.
6. Səviyyə siyahısında Səviyyə 2-ni seçin, sonra {{ui:Beam}} seçin və ya {{key:B}} basın.
7. A/1-ə, sonra A/2-yə klikləyin. W16x26 tir iki sütun başını birləşdirir, polad üst hissəsi səviyyə üzərindədir.
8. {{ui:Select}} rejiminə qayıtmaq üçün {{key:Esc}} basın, sonra tirə klikləyin.
9. {{ui:Connect}} qrupunda {{ui:End plates}} seçin. Hər iki ucda boltlu son lövhə yerləşir, tir uyğunlaşmaq üçün kəsilir və birinci son lövhə indi seçilib.
10. Tirə yenidən klikləyin.
11. {{ui:Output}} qrupunda {{ui:Shop drawing}} seçin. Tirin sex çertyojunun önizləməsi açılır. {{ui:Download PDF}} seçin.
12. Modeli saxlamaq üçün {{key:Mod+S}} basın. Brauzer `Untitled.detailcraft.json` faylını yükləyir.

Saxlamazdan əvvəl yuxarı sol küncdəki {{ui:Name}} sahəsində modelin adını dəyişin ki, fayl və hər ixrac onun adını daşısın.

## Növbəti addım

- [Ekran üzrə gəzinti](topic:workspace)
- [Şəbəkə xətlərini və səviyyələri qurmaq](topic:grids-and-levels)
- [3D görünüşdə hərəkət](topic:navigate-3d), siçan, trekpad və ya toxunuş ekranı ilə
- [Başqa detallaşdırma proqramlarından gəlmək](topic:coming-from), əgər böyük detallaşdırma paketini tanıyırsınızsa
- [Bu köməkdən istifadə](common:help)
