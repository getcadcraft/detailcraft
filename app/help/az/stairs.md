---
title: Pilləkənlər
summary: Qalxma hündürlüyü, addım dərinliyi və en ilə düz polad pilləkən yerləşdirin: iki tir və lövhə pillələr, bir qaynaqlanmış yığım.
keywords: pilləkən, pilləkənlər, pilləkən tiri, pillə, pillə hündürlüyü, addım, burun, marş, polad pilləkən, ibc 1011, blondel
from: 62fa3845
---

Düz polad pilləkən: iki tir (ucları pilləkənə doğru olan kanallar və ya kənara qoyulmuş yastı çubuqlar) və hər pillədə lövhə pillə, onların arasında qaynaqlanmış. DetailCraft hündürlükdən pillə hündürlüklərini hesablayır, onları binanın kodu limitləri ilə yoxlayır və pilləkəni bir zavod yığımı edir.

## Pilləkən yerləşdirin

1. {{ui:Yerləşdirmə}} qrupunda {{ui:Pilləkən}} seçin və ya {{key:S}} basın.
2. Pilləkəni sağda qurun: **qalxma istiqaməti** (0° +x boyunca qalxır, 90° +y boyunca), **qalxma hündürlüyü** (0 = növbəti səviyyəyə qədər), **addım dərinliyi**, tirlər arasında **təmiz en**, **icazə verilən ən yüksək pillə hündürlüyü**, **tir**, **pillə lövhəsinin qalınlığı**, **burun** və material.
3. Grid kəsişməsinə klikləyin: bu ilk pillənin ayağıdır, pilləkənin mərkəz xətti üzərində.

Status paneli neçə pillə yaratdığını deyir. Hər hansı tənzimləməni, yerini və ya fazasını dəyişmək üçün pilləkəni seçin (tirə və ya pilləyə klikləyin). Xüsusiyyətlərdə pillə hündürlükləri, pillələr, gediş, meyl və 2 × pillə + addım da göstərilir.

## DetailCraft nəyi hesablayır

- **Pillə hündürlükləri.** Hər pillə icazə verilən ən yüksəkdən aşağı və ya ona bərabər qalacaq qədər az: 3000 mm qalxma 178 mm və ya azdırsa, 176.5 mm-lik 17 pillə verir. Pillələrdən bir az az pillə var (ən üst mərtəbə sonuncu addımdır).
- **Pillələr.** Defolt olaraq addım + burun dərinliyində (280 + 25 = PL6x305) və təmiz en qədər uzun bir lövhə, üstü hər pillə hündürlüyündə, ön kənarı (burun) pillə xəttinin qarşısında.
- **Tirlər.** Pilləkən meylində, aşağı mərtəbə ilə görüşdükləri yerdən yuxarı mərtəbə ilə görüşdükləri yerə qədər, təmiz enin hər tərəfində bir az kənarda, üst kənarı burunların xəttindən 50 mm yuxarıda. Kanalın ucları pilləkənə doğru baxır; PL12x250 kimi yastı çubuq kənara qoyulur.
- **Qaynaqlar.** Hər pillə hər iki tirə. Pillələr və sağ tir sol tirə qaynaqlanır, beləliklə pilləkən bir yığım nişanı (ST1) və öz yığım çertyojunu alır; tirlər detal nişanları st…, pillələr isə p… alır.
- **Yoxlamalar.** Pillə 4–7 in. (102–178 mm) aralığından kənardadırsa və ya addım 11 in.-dən (279 mm) azdırsa xəbərdarlıqlar; bunlar IBC 2021, 1011.5.2 bölməsinin limitləridir. 2 × pillə + addım 600–650 mm-dən kənardadırsa (ümumi rahatlıq qaydası) və ya tir pillələri daşımaq üçün çox dayazdırsa, xəbərdarlıq görünür. Naməlum tir profili pilləkənin qurulmasını dayandırır.

## Yaxşı bilmək üçün

- Köçür, fırlat, güzgü, kopyala, yapışdır, sil və fazalar pilləkəndə elementdəki kimi işləyir. Fırlatma qalxmanı döndərir, güzgü əksi isə onu əks tərəfə yönəldir.
- Tirlər IFC-də IfcMember, pillə lövhələri isə IfcPlate kimi ixrac olunur; hər ikisi NC fayllarına və materiallar siyahısına gedir. Toqquşma yoxlanışı pilləkənin öz detallarını kənarda qoyur (onlar birlikdə qaynaqlanıb).
- Bu sadə pilləkən lövhə pillələrlə bir marşdır. Meydançalar, dayaqlı tutacaqlar, qatlanmış tava və ya barmaqlıq pillələr, seçdiyiniz qayda dəsti, kəsim siyahısı və tir deşik çertyojları üçün Pilləkən alətində {{ui:Polad pilləkən generatorundan istifadə et}} işarəsini qoyun (bax: Polad pilləkən generatoru).
- Tirlər düz kəsilir: döşəmələrə qarşı uc kəsikləri hazırlanmır.
- DetailCraft pilləkəni layihələndirmir: tirlər və pillələr möhkəmlik və ya əyilməyə görə yoxlanmır.
