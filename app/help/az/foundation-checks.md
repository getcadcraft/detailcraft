---
title: Bünövrə yoxlamaları
summary: Təsvir etdiyiniz torpaq üzərində bünövrələri, birləşmiş bünövrələri və şəbəkələri, oturmanı, yaylar üzərində əyilən şəbəkəni, qazıq qruplarını və saxlayıcı divarları yoxlayın. Mühəndisin nəzərdən keçirməsi üçün köməkçi vasitədir.
keywords: bünövrə, təməl, birləşmiş bünövrə, şəbəkə, oturma, torpaq modulu, yaylar, kənar sütun, künc sütunu, dayaq, sürüşmə, aşırılma, deşilmə, bir istiqamətli kəsilmə, əyilmə, ankraj, minimum polad, qazıq qrupu, saxlayıcı divar, ACI 318-19
from: 6961ad52
---

:::warning
Bunlar mühəndisin nəzərdən keçirməsi üçün birinci dərəcəli yoxlamalardır, layihənin təsdiqi deyil. İcazə verilən dayaq təzyiqi və sürtünmə əmsalı sizindir: DetailCraft torpağınızı bilmir.
:::

{{ui:Təməl}} sekməsi modeldəki bünövrələri verdiyiniz sütun yükləri ilə yoxlayır.

## Torpağı təsvir edin

{{ui:İcazəli dayaq təzyiqi}} və {{ui:Əsas sürtünmə əmsalı}} daxil edin. Hər ikisi 0-dan başlayır, yəni "daxil edilməyib" deməkdir: yoxlama təzyiqi qeyd kimi göstərir və keçdiyini demir. Oturma üçün torpağın modulunu {{ui:Es}} (MPa), Puasson əmsalını və icazə verdiyiniz oturmanı (əvvəlcə 25 mm) daxil edin. Əyilən şəbəkə üçün torpaq modulunu {{ui:ks}} daxil edin. Bünövrə üzərindəki doldurma, torpağın xüsusi çəkisi, sürüşmə və aşırılma üçün təhlükəsizlik əmsalları (əvvəlcə 1.5) və armaturun axma möhkəmliyi də buradadır.

## Yükləri verin

Hər bünövrənin sütun yüklərinin siyahısı var. {{ui:Sütun yükü əlavə et}} seçin və xidmət sətrini (dayaq, sürüşmə və aşırılma üçün) və əmsallı sətri (möhkəmlik yoxlamaları üçün) doldurun: P şaquli yükü aşağı, bünövrənin yuxarısında üfüqi qüvvələr Vx və Vy, Mx və My momentləri, sütunun bünövrə üzərindəki yeri və ölçüsü.

Və ya {{ui:Analiz}} sekməsini işə salın və {{ui:Sütun yüklərini Analizdən götür}} düyməsini basın: bünövrədə duran hər dayaq seçdiyiniz xidmət və əmsallı dəstlərdən sütun yükünə çevrilir. Müsbət My bünövrənin +x tərəfini daha çox yükləyir; müsbət Mx isə −y tərəfini daha çox yükləyir.

## Nə yoxlanılır

Xidmət yükündən, bünövrənin öz çəkisi və doldurma əlavə edilməklə:

- **Dayaq:** sərt bünövrə altında təzyiq. Orta üçdə birdə bütün baza təmasdadır; kənarda isə bazanın bir hissəsi qalxır və pik təzyiq yüksəlir. Bazadan kənarda olan nəticə qüvvə uğursuzluqdur.
- **Sürüşmə:** şaquli yük ilə sürtünmənin üfüqi qüvvəyə qarşı nisbəti.
- **Aşırılma:** nəticə qüvvəsinin kənara olan məsafəsi.
- **Oturma:** verdiyiniz modulla yarımfəza üzərində orta təzyiqin elastik oturması, ortada və künc nöqtəsində (sərt olmayan düzbucaqlı üçün Timoşenko və Quddiyer həlli), həddlə müqayisə olunur. Sərt bünövrə üçün yuxarı sərhəddir və məhdud dərinlikli torpaq təbəqəsini, qazılmış torpağın yükünün azalmasını və konsolidasiyanı nəzərə almır. Modul yoxdursa, təzyiqi qeyd kimi göstərir.

Yalnız əmsallı sütun yüklərindən (ACI 318-19):

- **Əyilmə** sütun üzündə, minimum polad (420 MPa çubuqlar üçün 0.0018) və çəkdiyiniz çubuqlarla.
- **Bir istiqamətli kəsilmə** üzdən d məsafədə.
- **Deşilmə kəsilməsi** hər sütun ətrafında d/2 məsafədə, sütunun momenti ilə. Kənara yaxın sütun üçün kritik kəsik bünövrənin kənarı ilə kəsilir (kənarda üç tərəf, küncdə iki tərəf; ACI 318-19 22.6.4.1 və Cədvəl 22.6.5.2-də kiçik αs), kəsiyin öz mərkəzinə nəzərən moment isə yükün yerdəyişməsini daxil edir.
- **Çubuqların ankrajı** sütun üzündən kənarda, düz və ya qarmaqları ilə.
- **Dərinlik** aşağı çubuqların üstündə (150 mm).

Birləşmiş bünövrə və ya şəbəkə sərt qəbul edilir; kəsilmə və moment bütün eni boyunca kəsiklərdə statikadan alınır.

## Yaylar üzərində əyilən şəbəkə

Bünövrə çoxlu sütun daşıyanda və sərt bünövrə çox kobud olanda {{ui:Bu bünövrəni yaylar üzərində əyilən şəbəkə kimi analiz edin}} işarəsini qoyun. Bünövrə yaylar yatağı üzərində dörd düyünlü elementlərdən ibarət lövhəyə çevrilir (daxil etdiyiniz {{ui:ks}} düyünlərdə yayılır), hər sütunun yükü öz oturacağının düyünləri arasında paylanır. İkinci cədvəl ən böyük torpaq təzyiqi və oturmanı (və ən böyük ilə ən kiçik arasındakı fərqi), hər istiqamətdə əyilmə momentini və ona lazım olan poladı, üstdə gərginliyi adi betonun möhkəmliyi ilə (bünövrənin üst armaturu yoxdur), sütunlardan d məsafədə bir istiqamətli kəsilməni və yayların öz təzyiqi üzrə deşilməni verir. Tor sütunun üç elementi enində olana qədər sıxlaşdırılır; böyük şəbəkə bir neçə saniyə çəkir. Şəbəkənin öz çəkisi və üstündəki torpaq bir-birini ləğv edir və hesaba daxil edilmir.

Hər uğursuz yoxlama {{ui:Problemlər}} panelində bəndi ilə birlikdə göstərilir.

## Qazıq qrupları və saxlayıcı divarlar

{{ui:Qazıq qrupu əlavə et}} sərt bazalıq altında qazıqların şəbəkəsini qoyur: yükü və momentləri, həmçinin hər qazığın sıxılmada və dartılmada nə daşıya biləcəyini daxil edin (qazıq layihəsinin rəqəmləri, bu sekmənin deyil). Hər qazığın reaksiyası P/n və momentlərdən payı əlavə olunmuş şəkildə hesablanır (elastik üsul), ən böyük sıxılma və hər hansı dartılma yoxlanılır.

{{ui:Dayaq divarı əlavə et}} səviyyəli doldurma üzərində konsol divarı metrə görə yoxlayır: Rankin aktiv təzyiqi, dabanda aşırılma, sürüşmə və baza təzyiqi. Dabanın qarşısındakı passiv təzyiq nəzərə alınmır. Köməkçiniz eyni yoxlamaları `pile_group_check` və `retaining_wall_check` ilə icra edə bilər.

Qazıq qrupları, divarlar və şəbəkə açarı model faylında saxlanılır, uğursuz yoxlama isə {{ui:Problemlər}} panelindədir.
