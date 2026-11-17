---
title: Təchizatçı ehtiyatı və tədarük müddətləri
summary: Kəsim siyahınızın aldığı ehtiyat çubuqlarını təchizatçının ehtiyat siyahısı ilə yoxlayın: kifayət qədər varmı və gözləmə nə qədər çəkəcək?
keywords: təchizatçı, ehtiyat, tədarük müddəti, polad anbar, zavod, mövcudluq, geriyə sifariş, çubuqlar, satınalma, təchizat
from: 1373f5a3
---

{{ui:Təchizat}} sekmesi kəsim siyahısının aldığı hər profili təchizatçının ehtiyat siyahısında axtarır. Fayl modeldə qalır; heç yerə göndərilmir.

## Təchizatçının faylını əlavə edin

{{ui:Təchizatçı faylı əlavə et}} düyməsinə basın və təchizatçınızdan CSV seçin (vergül, nöqtəli vergül və ya tabulyasiya ilə ayrılmış). Ona elementin və ya profilin sütunu (Item, Name, Description, Section, SKU) və ehtiyat (In stock, Quantity, On hand) və ya tədarük müddəti üçün bir sütun lazımdır. Vahid (each, metres, kilograms, tonnes), qiymət, təchizatçı və yenidən doldurma tarixi, sütunları olduqda oxunur. Sözlər də başa düşülür: "Out of stock", "In stock", "2-3 weeks", "backorder". Beş fayla qədər saxlanıla bilər; eyni adlı fayl əlavə etmək onu əvəz edir.

## Nə görürsünüz

Hər kəsim siyahısının aldığı bölmə üçün cədvəl modelin nəyə ehtiyacı olduğunu, ehtiyatda nə olduğunu, tədarük müddətini, təchizatçını və nəticəni göstərir:

- **Təmin olunub:** ehtiyat kifayət qədərdir.
- **Çatışmır:** ehtiyat ehtiyacdan azdır. Ehtiyat ehtiyacdan azdırsa və ən uzun gözləmə təyin etmisinizsə, tədarük müddəti qalanın nə qədər çəkəcəyini göstərir.
- **Gecikir:** ehtiyat rəqəmi yoxdur və tədarük müddəti qəbul etdiyiniz gözləmədən uzundur.
- **Ehtiyat rəqəmi yoxdur:** fayl bunu demir.
- **Başqa vahid:** təchizatçı bölməni modelin verə bilmədiyi vahiddə göstərir.

Ehtiyac çubuqlarla verilir (yerləşdirilmiş kəsim siyahısından, ehtiyat uzunluqlarınızla), alınan çubuq metrləri ilə və kiloqramla (bölmənin metrə çəkisi), və faylın öz vahidi istifadə olunur. Bölmə adına görə uyğunlaşdırılır ("W16 X 26" və "w16x26" eynidir). Faylda olmayan bölmələr siyahıya alınır.

Çatışmayanlar və gecikən bölmələr {{ui:Problemlər}} panelindədir. Burada heç nə sifariş edilmir.

## Məhdudiyyətlər

Ehtiyat rəqəmləri və tədarük müddətləri faylın özünün, onun hazırlandığı günə aiddir. Lövhələr yerləşdirilmir, buna görə onlar axtarılmır. Fayl yalnız oxunur: içindəki hər hansı təlimat sadəcə mətndir.
