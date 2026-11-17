---
title: Külək, seysmik sahə və ASCE 7 kombinasiyaları
summary: Qapalı, sərt bina üçün külək yükü halları yaradın, sahə üçün seysmik layihə qiymətlərini hesablayın və Analiz tabında ASCE 7 kombinasiyalarını yaradın.
keywords: külək, külək yükü, asce 7, istiqamətli üsul, məruziyyət, örtülülük, seysmik, sahə sinfi, ss, s1, sds, sd1, usgs, layihə spektri, yük kombinasiyaları, lrfd, asd, kzt, kd, qüvvə
from: 676fcbf3
---

Analiz tabında üç blok çərçivənin külək və seysmik girişlərini hazırlayır və onları birləşdirir: **{{ui:Külək yükləri (ASCE 7 istiqamətli üsul)}}**, **{{ui:Seysmik sahə və sistem (ASCE 7)}}** və **{{ui:ASCE 7 yük kombinasiyaları}}**. Onlar köməkçidir: **norma yoxlaması deyil; nəticələri mühəndisiniz nəzərdən keçirir.**

## Nə edəcəksiniz

Qapalı, sərt bina üçün külək yükü halları yaradacaq, sahə üçün seysmik dəyərləri götürəcək və onlardan istifadə edən kombinasiyaları yaradacaqsınız. Modelə döşəmələr lazımdır, ona görə əvvəlcə analizi işə salın (bax: [Qüvvələr, reaksiyalar və yerdəyişmələr](topic:frame-analysis)).

## Addımlar

1. **{{ui:Analiz}}** tabını açın və **{{ui:İşə sal}}** seçin ki, döşəmələr və binanın ölçüsü məlum olsun. Bloklardan biri döşəmə olmadığını deyirsə, orada **{{ui:Döşəmələri tap}}** seçin.
2. **{{ui:Külək yükləri (ASCE 7 istiqamətli üsul)}}** bölməsində **{{ui:Nəşr}}** seçin, külək xəritənizdən **{{ui:Əsas külək sürəti V}}** yazın və **{{ui:Sürət vahidi}}** seçin, sonra **{{ui:Məruziyyət}}** və **{{ui:Örtülülük}}**. Kzt, Kd, G, yer səviyyəsi, arxa Cp, ekssentrisitet və istiqamət də buradadır.
3. Cədvəldə hər döşəmədəki təzyiqi və hər döşəmədəki qüvvəni oxuyun, sonra **{{ui:Külək halları yarat}}** seçin. Hallar +X, -X, +Y və -Y-dir.
4. **{{ui:Seysmik sahə və sistem (ASCE 7)}}** bölməsində nəşri seçin və Ss və S1 yazın (ASCE 7-22 üçün SMS, SM1 və S1), sahə sinfini A-dan D-yə, risk kateqoriyasını və seysmik qüvvəyə müqavimət sistemini seçin. Və ya enlik və uzunluq yazın və **{{ui:USGS-dən axtar (onlayn)}}** seçin; onlayn xidmətə yalnız siz düyməni basdıqda müraciət edir.
5. Fa, Fv, SDS və SD1, R, Cd və Omega0 və layihə spektrini oxuyun, sonra **{{ui:Seysmik blokda istifadə et}}** seçin. Seysmik blokda **{{ui:Seysmik halları yarat}}** düyməsini basın (bax: [Beton elementlərini yoxlayın və seysmik yükləri hazırlayın](topic:concrete-and-seismic)).
6. **{{ui:ASCE 7 yük kombinasiyaları}}** bölməsində **{{ui:Metod}}** (LRFD və ya ASD) seçin və **{{ui:ASCE 7 kombinasiyalarını yarat}}** seçin. Analizi yenidən işə salın.

## Bilmək lazım olanlar

- Külək: yalnız qapalı, sərt bina, istiqamətli üsul. Deformasiyalı bina norma üzrə külək faktoru tələb edir, DetailCraft onu yaratmır.
- Sahə sinfi E və F sahə tədqiqatı tələb edir və hələ qurulmayıb.
- Blokların aşağısındakı mənbə siyahısı hər rəqəmin haradan gəldiyini və nəyin çıxarıldığını göstərir.
- USGS axtarışı canlı xidmətdə yox, əvəzedici üzərində sınanıb.
