---
title: DetailCraft-ı AI köməkçisi ilə istifadə edin
summary: Öz AI köməkçinizin və ya skriptinizin modeli, onun hissələrini, problemlərini və toqquşmaları oxumasına, elementlər və birləşmələr əlavə etməsinə, saxlamasına və ixrac etməsinə (USD də daxil) icazə verin: icazələr, CadCraft Studio vasitəsilə qoşulma və fəaliyyət jurnalı.
keywords: ai, köməkçi, agent, mcp, model context protocol, skript, avtomatlaşdırma, hissələr, toqquşmalar, birləşmələr, icazələr, ayırma, fəaliyyət, geri qaytarma
from: d624c9a0
---

## Nəyi öyrənəcəksiniz

Necə AI köməkçisinə (və ya yazdığınız skriptə) DetailCraft ilə işləməyə icazə verirsiniz və nəyə toxunmasına necə qərar verirsiniz.

DetailCraft-ın **öz AI-ı yoxdur** və heç nə heç yerə göndərmir. Köməkçini siz gətirirsiniz: Model Context Protocol (MCP) dilində danışan istənilən proqram. DetailCraft ona yalnız alətlər verir və hansının olduğunu siz seçirsiniz.

## Yandırın

1. {{ui:Parametrlər}} açın (tətbiq panelindəki dişli, və ya {{key:Mod+,}}) və {{ui:DetailCraft}} sekmesinə keçin.
2. {{ui:Köməkçilər}} altında **AI köməkçilərinin və skriptlərin DetailCraft-dan istifadə etməsinə icazə ver** işarəsini qoyun. Siz qoymayana qədər söndürülüb.
3. Nəyə icazəsi olduğunu seçin: **Oxu** başlanğıcda işarələnib; **Redaktə**, **Saxla** və ya **İxrac**-ı yalnız lazım olanda işarələyin.

İcazələrinizə uyğun olmayan alətlər köməkçiyə təklif olunmur, və o, yenə də birini istəsə, DetailCraft rədd edir və bunu fəaliyyət jurnalına yazır. Açarı söndürmək bütün qoşulmaları dərhal bitirir.

## Köməkçinizi qoşun

Köməkçilər kompüterinizdəki **CadCraft Studio** vasitəsilə qoşulur: Studio yalnız bu kompüterin çata biləcəyi kiçik bir server işlədir, hər başlanğıcda yaratdığı token ilə qorunur. Studio-da {{ui:Köməkçi qoşun}} seçin və ünvanı və tokeni köməkçinizə kopyalayın (Studio yapışdırmaq üçün dəqiq parametrləri göstərir). Tokeni heç vaxt paylaşmayın.

:::note
Brauzer sekmesi köməkçi üçün bağlantı aça bilməz: brauzer tətbiqlərində açar kompüterinizdəki CadCraft Studio-nu istifadə edənə qədər təsir etmir.
:::

## Siz nəzarətdə qalırsınız

- **Hər dəyişiklik bir geri qaytarma addımıdır**, köməkçininki kimi etiketlənir (məsələn "Köməkçi: kiriş əlavə et", "Köməkçi: köşə lövhələri əlavə et"). {{key:Mod+Z}} köməkçinin son dəyişikliyini bütövlükdə geri qaytarır. Köməkçinin öz `undo`-su yalnız öz addımlarını geri qaytarır, sizinkini heç vaxt — açıq şəkildə tələb etmədikcə.
- **O, sizi gözləyir.** Elementi yerləşdirəndə, hissələri hərəkət etdirəndə və ya yapışdıranda DetailCraft köməkçinin dəyişikliklərini rədd edir və ona yenidən cəhd etməyi deyir.
- **Qoşulduğunu bilirsiniz.** Tətbiq panelindəki düymə köməkçi qoşulu olduğu müddətdə onun adını göstərir; nə edə biləcəyini görmək və ya onu **Ayır** üçün klikləyin.
- **Fəaliyyət.** {{ui:Parametrlər}} › {{ui:DetailCraft}} › {{ui:Köməkçilər}} › {{ui:Fəaliyyət}} hər çağırışı siyahılayır: nə vaxt, hansı alət, icra olundu və ya rədd edildi. {{ui:Jurnalı saxla}} bir nüsxəni saxlayır.

## Köməkçi nə tələb edə bilər

Bütün uzunluqlar millimetrdir, nöqtələr `[x, y, z]` şəklindədir, z yuxarı, modeldə olduğu kimi.

| Alət | İcazə | Nə edir |
|---|---|---|
| `app_info`, `model_describe` | Oxu | Açıq model: şəbəkələr, səviyyələr, mərhələlər, növə və profilə görə elementlər, birləşmələr, təməllər, pilləkənlər, hissələr, polad çəkisi, problemlər |
| `parts_list` | Oxu | Hissə işarələri, profil, material, kəsik uzunluğu, say, çəki, mərhələ və yığım işarələri ilə; növə, profilə, işarəyə və ya mərhələyə görə |
| `problems_list` | Oxu | {{ui:Problemlər}} sekmesinin siyahıladığı hər şey, hər birinin nə ilə bağlı olduğu ilə |
| `clash_check` | Oxu | [Toqquşma yoxlaması](topic:clash-check), tolerantlığı və mərhələləri ilə |
| `selection_get` | Oxu | Seçdiyiniz |
| `selection_set` | Redaktə | Elementləri, birləşmələri, təməlləri və ya pilləkənləri (id və ya hissə işarəsi ilə) sizə göstərmək üçün seçir; heç nəyi dəyişmir |
| `member_add` | Redaktə | İki nöqtə arasında kiriş, sütun, bənd (brace) və ya lövhə |
| `connection_add` | Redaktə | Verilən elementlərin birləşdiyi yerdə uc lövhələri, kəsmə qulaqları (shear tabs), baza lövhələri, ulamalar və ya künc lövhələri, {{ui:Birləşdirmə}} düymələrinin etdiyi kimi |
| `undo` | Redaktə | Köməkçinin son addımlarını geri qaytarır |
| `model_save` | Saxla | DetailCraft-ın öz Saxla əmri |
| `model_export` | İxrac | IFC, NC faylları, BOM, əyilmə cədvəli, KISS faylı və ya kəsim siyahısı, {{ui:Çıxış}} düymələrinin yaratdığı kimi |
| `usd_export` | İxrac | Polad modeli USD kimi (.usda, .usdc və ya .usdz), {{ui:Çıxış}} › {{ui:USD}} yazdığı kimi (bax: [Polad modelini USD kimi ixrac edin](topic:usd)); Studio-da icazə verdiyiniz qovluğa fayl yaza bilər |

## Bir şey işləməsə

- **Köməkçi DetailCraft alətlərini görmür:** bu pəncərədə açarın yandırıldığını və pəncərənin Studio-da açıq olduğunu yoxlayın.
- **"redaktə icazəsi tələb olunur"** (və ya saxlama, ixrac): {{ui:Köməkçilər}} altında onu işarələyin, sonra yenidən soruşun.
- **"İstifadəçi elementi yerləşdirir":** işinizi bitirin (və ya {{key:Esc}} basın), sonra köməkçinin yenidən cəhd etməsinə icazə verin.
- **"401" və ya "token" xətaları:** token dəyişib (Studio yenidən başladılıb və ya {{ui:Yeni token}}). Yeni tokeni köməkçinizin parametrlərinə kopyalayın.

## Həmçinin baxın

- [AI köməkçiləri üçün reseptlər](common:assistants-recipes): hər biri çağırdığı alətlərlə işlənmiş nümunələr.
