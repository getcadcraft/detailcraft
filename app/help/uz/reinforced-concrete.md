---
title: Temir-beton balkalar, ustunlar, plitalar va devorlarni batafsil chizish
summary: Beton balkalar, ustunlar, plitalar va devorlarni toʻr boʻyicha qoʻshing, ularga armatura, xomutlar va bogʻlovchi xomutlar bering, ulanmalar va langarlashni ACI 318-19 yoki EN 1992-1-1 boʻyicha tekshiring hamda ishlab chiqarish chizmalari va armatura egish varaqlarini tayyorlang.
keywords: temir-beton, armatura, armaturalash, balka, ustun, plita, devor, xomutlar, bogʻlovchi xomutlar, ilgaklar, ulanmalar, ulanma, langarlash, langarlash uzunligi, ld, ldh, lbd, himoya qatlami, oraliq, trimmerlar, teshiklar, toʻrlar, armatura belgilari, egish jadvali, armatura egish jadvali, bbs, ishlab chiqarish chizmasi, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC import
from: 3835b7ec
---

{{ui:Beton}} yorligʻi koʻrinish pastida temir-beton balkalar, ustunlar, plitalar va devorlarning armaturasini batafsil koʻrsatadi. Siz oʻlchamlar va armaturalarni berasiz; DetailCraft har bir armaturani joylashtiradi, raqamlaydi, ulanmalar, langarlash, himoya qatlami va oraliqni ularni keltirib chiqargan band boʻyicha tekshiradi va chizadi.

:::warning
DetailCraft siz bergan armaturalarni batafsil koʻrsatadi. U ularni loyihalamaydi. Har bir natija muhandis tomonidan tekshirilishi uchun moʻljallangan.
:::

## Beton yorligʻini ochish

Koʻrinish pastidagi {{ui:Beton}} yorligʻini tanlang. Lenta joylashuvida {{ui:Beton}} {{ui:Modellashtirish}} yorligʻida {{ui:Poydevor}} yonida joylashgan. Chizma uslubidagi buyruq qatorida {{cmd:CONCRETE}} ni yozing.

## Toʻr boʻyicha element qoʻshish

Beton elementlari modelning toʻr chiziqlari va sathlariga joylashtiriladi, shuning uchun avval ularni oʻrnating (chap panel).

1. {{ui:Toʻr boʻyicha qoʻshish}} da {{ui:Element}} ni tanlang: {{ui:Beton balka}}, {{ui:Beton ustun}}, {{ui:Plita}} yoki {{ui:Devor}}.
2. Toʻr chiziqlari va sathlarni tanlang:
   - balka bir toʻr kesishmasidan boshqasigacha boradi, yuqori qismi sathda;
   - ustun kesishmada turadi, bir sathdan boshqasigacha;
   - plita ikkita raqamli va ikkita harfli toʻr chiziqlari orasidagi toʻrtburchakni toʻldiradi, yuqori qismi sathda;
   - devor oʻz oʻrta chizigʻi boʻylab bir kesishmadan boshqasigacha, bir sathdan boshqasigacha boradi.
3. Oʻlchamni kiriting va {{ui:Qoʻshish}} ni tanlang. Element tanlanadi va uning maydonlari {{ui:Xususiyatlar}} panelida ochiladi.

Har bir element boshlangʻich qiymatdagi armaturalar bilan boshlanadi: bular loyiha emas, muhandisning qiymatlariga oʻzgartiring.

## Armaturalarni oʻzgartirish

Elementni tanlang (koʻrinishda yoki {{ui:Beton}} yorligʻidagi nomi orqali). {{ui:Xususiyatlar}} paneli quyidagilarni koʻrsatadi:

| Element | Nima sozlanadi |
|---|---|
| Toʻsin | Kengligi, chuqurligi, toza himoya qatlami; yuqori va pastki armaturalar (oʻlchami, soni, uchlarida toʻgʻri yoki 90° ilgak); yon armaturalar; xomutlar (oʻlchami, 135° yoki 90° ilgaklar, birinchisining tayanch yuzidan masofasi, oxirgi zona uzunligi va oraligʻi, oʻrtadagi oraliq); {{ui:Boshidagi tayanch uzunligi (mm)}}; ulanma uzunliklari |
| Ustun | Kengligi, chuqurligi, koʻndalang oʻlchami, aylanishi, himoya qatlami; har bir yuzdagi boʻylama armaturalar; bogʻlovchi xomutlar xomutlar kabi; yuqorida armaturalar nima qilishi (ustida turgan ustun bilan ulanma, qavatga ilgak bilan kirish yoki toʻxtatish) |
| Plita | Qalinligi, oʻlchami, yuqori va himoya qatlamlari; pastki toʻr va yuqori toʻr har bir yoʻnalishda (oʻlchami va oraligʻi); chekkalar boʻylab U-armaturalar; trimmer armatura; teshiklar |
| Devor | Qalinligi, himoya qatlami, bir yoki ikki qatlam, gorizontal va vertikal armaturalar, uchlaridagi U-armaturalar, yuqorida ulangan yoki ulanmagan vertikal armaturalar, trimmer armatura, teshiklar |

Har bir oʻzgarish bitta bekor qilish qadami. Qurib boʻlmaydigan oʻzgarish rad etiladi va holat satri sababini koʻrsatadi, masalan: "Teshik himoya qatlami bilan element ichiga sigʻmaydi."

Xomutlar va bogʻlovchi xomutlar yopiq boʻladi, ikkala ilgak bir burchakda. Balkaning uchlaridagi armaturalar beton ustunga, ustunning narigi yuzigacha, himoya qatlami ayirilgan holda kiradi; ustun boʻlmagan joyda boshidagi va oxiridagi {{ui:Boshidagi tayanch uzunligi (mm)}} ni bering.

## Ulanmalar va langarlash

{{ui:Standart armatura uzunligi (mm)}} (boshida 12000) dan uzun armaturalar teng uzunlikdagi boʻlaklarga boʻlinadi va ulanadi. {{ui:Ulanmalar va langarlash}} jadvali har bir ulanmani va har bir langarlashni koʻrsatadi: nima kerakligi, band va uning shartlari hamda detalda nima borligi.

- Ulanma uzunligi 0 "kerak boʻlganicha" degani: kod bergan uzunlik, 25 mm gacha yaxlitlangan.
- Oʻz ulanma uzunligingizni kiriting, uni ishlatish uchun. Agar u kerakligidan qisqa boʻlsa, bu muammo hisoblanadi (quyida), jadvalda * bilan belgilanadi.
- Langarlash tayanch yuzidan armatura uchining tayanch ichidagi nuqtasigacha oʻlchanadi. Maʼlum tayanchi boʻlmagan balka buni aytadi va uni tekshirmaydi.
- Poydevorda turgan ustun poydevorning boshlangʻich armaturalari bilan ulanadi, boshqa ustunda esa oʻsha ustunning armaturalari bilan: ularning ulanmasi ham tekshiriladi.

**ACI 318-19** (SI): choʻzilishdagi toʻgʻri armaturalar 25.4.2.3 (jadval, ψt, ψe, ψg, λ bilan), standart ilgaklar 25.4.3.1 (ψr 1.6 va ψo 1.25 boshqacha maʼlum boʻlmasa qabul qilinadi), siqilishdagi armaturalar 25.4.9.2, choʻzilishdagi ulanmalar 25.5.2.1 (B sinf, yoki sozlamalarda A sinf), siqilishdagi ulanmalar 25.5.5.1.

**EN 1992-1-1**: langarlash 8.4.4, 8.4.2 dan fbd bilan (yaxshi yoki yomon bogʻlanish), ulanmalar 8.7.3, bir kesimda ulangan har bir armatura uchun α6 bilan. γc, γs va αct tavsiya qiymatlaridan boshlanadi; oʻz milliy ilovangizniki bilan oʻrnating.

## Tekshiruvlar

Muvaffaqiyatsiz boʻlgan har bir tekshiruv umumiy {{ui:Muammolar}} panelida (manba {{ui:Armatura tekshiruvlari}}) va elementning {{ui:Tekshiruvlar}} roʻyxatida koʻrinadi:

| Tekshiruv | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Himoya qatlami | Jadval 20.5.1.3.1, ekspozitsiya boʻyicha | Bogʻlanish minimumi, jadval 4.2 (mustahkamlik himoyasini siz berasiz) |
| Armaturalar orasidagi toza oraliq | 25.2.1 (balkalar, plitalar, devorlar), 25.2.3 (ustunlar) | 8.2 (2) |
| Xomutlar oraligʻi | 9.7.6.2.2 | 9.2.2 (6) |
| Balka minimal poʻlati | 9.6.1.2 | 9.2.1.1 (1) |
| 900 mm dan chuqur balkaning yon armaturalari | 9.7.2.3 | tekshirilmaydi |
| Ustun poʻlat nisbati, armaturalar soni | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Bogʻlovchi xomutlar: oraliq, oʻlcham, koʻndalang bogʻlamalar | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Plita oraligʻi, minimal poʻlat | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Devor oraligʻi, minimal poʻlat, ikki qatlam | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Ulanmalar, langarlash | yuqoridagidek | yuqoridagidek |

Agregat oʻlchami maʼlum emas, shuning uchun toza oraliq uni hisobga olmasdan tekshiriladi.

## Teshiklar, trimmerlar va chekka armaturalar

Tanlangan plita yoki devor ostida {{ui:Teshik qoʻshish}} ni tanlang va uning joyi hamda oʻlchamini belgilang. Teshik kesib oʻtgan armaturalar uning chetidan himoya qatlami masofasida toʻxtaydi. Trimmer armaturalar har ikki tomonga, bir xil qatlamda qoʻshiladi: ular kesilgan armaturalar maydonining yarmini koʻtaradi va teshikdan bir langarlash uzunligi narida boʻladi. Bu DetailCraft ning boshlangʻich qoidasi, kod bandi emas: {{ui:Trimmer armatura}} ni muhandisnikiga oʻzgartiring. Burchak armaturalari qoʻshilmaydi.

Plitaning erkin chekkalari va devor uchlari boʻylab U-armaturalar bir ulanma uzunligiga teng oyoqlarga ega.

## Armatura belgilari va egish jadvali

Bir xil armaturalar bitta belgini ulashadi: poydevorlar F belgilarini saqlaydi (5F1), balkalar B, ustunlar C, plitalar S va devorlar W (7B1, 8C1, 4S2). {{ui:Egish jadvali}} yorligʻi va uning CSV fayli endi inshootning har bir armaturasini sanab chiqadi, avval poydevorlar. {{ui:Chiqish}} › {{ui:Yana}} › {{ui:Egish}} uni yuklab oladi.

## Ishlab chiqarish chizmalari

{{ui:Chiqish}} › {{ui:Yana}} › {{ui:Armatura chizmalari}}, {{ui:Beton}} yorligʻidagi {{ui:Armatura chizmalari}} yoki bitta element yonidagi {{ui:Ishlab chiqarish chizmasi}} ni tanlang. Har bir element varaq oladi: har bir armaturani va uning belgisini, xomut yoki bogʻlovchi xomut zonalarini va oʻlchamli ulanmalarni koʻrsatuvchi fasad (plita uchun reja) hamda oʻrtadagi kesim. Soʻngra egish varaqlari har bir belgini shakl eskizi, oʻlchamlari, soni, kesish uzunligi va og'irligi bilan sanab chiqadi.

Varaqlar har safar modeldan qayta yaratiladi va oyna ochiq boʻlganda har bir oʻzgarishdan keyin yana: sarlavha blokida model havolasi koʻrsatiladi. Saqlang {{ui:Bu varaqni PDF sifatida}} yoki {{ui:Barcha varaqlarni PDF sifatida}}.

## IFC dan armaturalar

{{ui:Fayl}} › {{ui:IFC import qilish}} endi IfcReinforcingBar ni oʻqiydi: uning oʻq chizigʻi boʻylab siljigan disk toʻgʻri qismlar va egilishlar sifatida qaytadi, diametri, belgisi va uni ushlab turgan element bilan birga. Armaturalar oʻqilganidek saqlanadi (ular balka yoki plitaning qoidalariga aylantirilmaydi), koʻrinishda koʻrsatiladi, egish jadvalida roʻyxatga olinadi va IFC eksport bilan qayta yoziladi. Import hisoboti nechta armatura oʻqilganini, qaysi oʻlchamda, nechta elementda va nima qoldirilgani hamda nega ekanini aytadi.

Bu fayldagi armatura olib yuradigan yoki betonli materialga ega boʻlgan balka, ustun, plita yoki devor poʻlat deb qabul qilinmaydi; hisobotda buni aytiladi. DetailCraft ning oʻz IFC eksporti har bir beton elementning taʼrifini olib yuradi, shuning uchun u oʻz holicha qaytadi va uning armaturalari undan qayta yaratiladi.

:::note
Tuzilmaviy loyihalash dasturining oʻz fayllarini oʻqish (IFC emas) hali qurilmagan: undan IFC eksport qiling.
:::

## IFC eksporti

Beton balkalar, ustunlar, plitalar (teshiklar bilan) va devorlar IfcBeam, IfcColumn, IfcSlab va IfcWall sifatida chiqadi. Har biri oʻz armaturalari bilan IfcReinforcingBar sifatida biriktirilgan (asosiy armaturalar, xomutlar uchun bogʻlamalar, chekka armaturalar); har bir armatura oʻq chizigʻi boʻylab siljigan disk boʻlib, egilishlarda haqiqiy yoylar, belgisi va kesish uzunligi bilan.
