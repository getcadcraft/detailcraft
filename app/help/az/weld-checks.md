---
title: Elementlərin birləşdiyi yerdə qaynaqları yoxlayın
summary: Layihə yoxlamasından sonra hər elementin başqa element və ya dayaqla birləşdiyi yerdə bütün ətrafdakı künc və ucluq qaynaqlarını AISC 360-16 Fəsil J və ya EN 1993-1-8 üzrə yoxlayın və hansı qaynaq qrupunun ən çox istifadə olunduğunu və hansı birləşmədə olduğunu görün. Mühəndis yoxlayana qədər köməkçi vasitə.
keywords: qaynaq, qaynaqlar, qaynaq yoxlaması, künc qaynağı, ucluq qaynağı, tam nüfuzlu, AISC 360, EN 1993-1-8, qaynaq qrupu, istifadə dərəcəsi, tutum, birləşmə, qovşaq, konstruksiya, mühəndis
from: e8eebbe6
---

{{ui:Analysis}} sekmesində, {{ui:Design checks}} altında olan {{ui:Weld checks}} bloku son həll olunmuş çərçivənin qüvvələrini və yaratdığınız möhkəmlik birləşmələrini götürür və hər qovşaqda — elementin başqa elementlə birləşdiyi və ya dayağa oturduğu yerdə — elementin ətrafındakı qaynağı yoxlayır.

:::warning
Bu, **mühəndis yoxlayana qədər köməkçi vasitədir**. O, qaynağı kəsik ətrafında, bir qrup kimi, çərçivənin öz uc qüvvələrindən yoxlayır. Çertyojlarda çəkdiyiniz qaynaqların ölçüsünü və uzunluğunu oxumur; boltları, lövhələri, dayaq təzyiqini, blok kəsməsini və qaldırmanı (prying) yoxlamır. Nəticələri möhür deyil.
:::

## Necə işə salmaq

1. {{ui:Analysis}} sekmesində çərçivəni həll edin, {{ui:Design checks}} bölməsində {{ui:Design code}} seçin, sonra {{ui:Make combinations}} düyməsini basın (qaynaq yoxlaması eyni möhkəmlik birləşmələrini tələb edir).
2. {{ui:Weld checks}} bölməsində {{ui:Fillet leg (mm, 0 = the wall, at most 8)}} dəyərini təyin edin. 0 o deməkdir ki, künc katetı kəsiyin daha nazik divarını izləyir, ən çoxu 8 mm. AISC norması altında {{ui:Weld metal strength F_EXX (MPa)}} qaynaq metalının davamlılığıdır (482.6 MPa E70 elektroduna uyğundur). EN 1993 altında polad markası qaynaq metalının davamlılığını və korrelyasiya əmsalını verir.
3. {{ui:Check welds}} düyməsini basın.

Cədvəlin hər sətri bir qaynaq qrupudur (elementin bir birləşmə ucu). Rəqəmlər: həlledici yoxlamanın **istifadə dərəcəsi**, vəziyyət (keçir və ya keçmir) və hansı yoxlama və bəndin hansı birləşmədə həlledici olduğu. Yoxlaya bilmədiyi qrup səbəbini göstərir (polad markası yoxdur, EN 1993-1-8 Cədvəl 4.1-də həmin marka üçün korrelyasiya əmsalı yoxdur, bu kəsikdə qaynaq yoxdur) və rəqəm əvəzinə bunu bildirir.

Künc katetı, qaynaq metalı dəyişdirildikdə və ya modeli redaktə etdikdə cədvəl təmizlənir: o, köhnə dəyərlər üçün idi. {{ui:Check welds}} düyməsini yenidən basın.

## Nə yoxlanır

- **ASCE 7 + AISC 360:** künc qaynağı metalı (yükün qaynağa bucağı nəzərə alınır, J2.4), əsas metalın kəsmə qırılması (J4.2) və tam nüfuzlu ucluq qaynaqları (Cədvəl J2.5).
- **EN 1990 + EN 1993:** künc qaynaqları EN 1993-1-8 4.5.3.3 üzrə sadələşdirilmiş üsulla, ucluq qaynaqları 4.7.1 üzrə.
- Minimum və maksimum ayaq və minimum uzunluq ilə bağlı detallaşdırma xəbərdarlıqları, müqayisə olunan dəyərlə birlikdə.

Qaynaq qrupu xətt kəsiyi kimi qəbul olunur və elastik vektor üsulu ilə yüklənir: qaynağın hər hissəsi elementin eksenel qüvvəsindən, hər iki kəsici qüvvədən, burulmadan və hər iki əyici momentdən pay alır, bunlar vektor kimi toplanır.

## Nə yoxlanmır

Hissəvi nüfuzlu qaynaqlar, əyilmiş künc qaynaqları, deşik və yuva qaynaqları, fasiləli qaynaqlar, anlıq-mərkəz üsulu, EN istiqamət üsulu, yorulma və əsas metalın blok kəsməsi qurulmayıb. Standartların bəzi sabitləri standartlardan yazılıb və hələ çap nüsxəsi ilə müqayisə olunmayıb; hesabat hər rəqəmin haradan gəldiyini sadalayır ({{ui:Report (PDF)}} yoxladıqdan sonra qaynaq cədvəllərini əlavə edir). Bax: [Polad elementləri layihə norması üzrə yoxlayın](topic:design-checks) və [Hələ qurulmayıb](topic:not-built-yet).
