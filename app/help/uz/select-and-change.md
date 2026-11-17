---
title: Oyna bilan tanlash, surish, aylantirish, akslantirish, koʻp narsani oʻzgartirish
summary: Tanlash uchun oynani torting, tanlangan detallarni surish uchun sudrang, tanlovni (yoki uning nusxasini) surish, aylantirish yoki akslantirish, yoki bir vaqtda koʻp elementning profilini, materialini, joylashuvini yoki aylanishini oʻzgartiring.
keywords: lasso, qamrov, erkin tanlash, sudrash, sudrab koʻchirish, surish bilan koʻchirish, tutish, oyna, kesishgan, quti bilan tanlash, sudrab tanlash, koʻp tanlash, surish, aylantirish, akslantirish, nusxa, koʻp oʻzgartirish, bir nechta element, profil, material, joylashuv, aylanish, oʻzgaruvchan, setka chizigʻi
from: 50b16f9a
---

Bularning har biri bitta amal: bitta {{key:Mod+Z}} bosilsa hammasi qaytariladi.

## Oyna bilan tanlash

- {{ui:Plan}} va {{ui:Elevation}} da boʻsh joydan chap tugma bilan torting. {{ui:3D}} da {{key:Shift}} ni bosib turing va torting (oddiy sudrash modelni aylantiradi).
- Oyna uchun **oʻngga** torting: toʻliq ichida boʻlgan narsalar olinadi, u yaxlit chiziq bilan chiziladi.
- Kesishgan oyna uchun **chapga** torting: tegib oʻtgan hamma narsa olinadi, u uzuq chiziq bilan chiziladi.
- Tanlovni almashtirmasdan qoʻshish uchun sudrashni boshlaganda {{key:Shift}} ni bosib turing.
- Plan yoki fasad faqat koʻrsatgan narsalarni taklif qiladi: plan ustidan kesib olingan, yoki fasad setka chizigʻidan 1 m dan uzoqroq detallar tanlanmaydi.
- Sudrash paytida {{key:Esc}} oynani bekor qiladi.

### Lasso

[DetailCraft sozlamalari](topic:settings) ichidagi {{ui:Dragging to select}} ostida **Lasso** ni tanlang, shunda oddiy sudrash toʻrtburchak oʻrniga erkin chiziq chizadi.

- Birinchi yon harakat tanlash usulini belgilaydi: **oʻngga** — toʻliq ichidagilar (yaxlit chiziq); **chapga** — tegib oʻtganlar (uzuq chiziq).
- Sudrash paytida {{key:Space}} ni bosib ichida, tegib oʻtish va **qamrov** oʻrtasida almashtiring: ochiq chiziq, u kesib oʻtgan hamma narsani oladi (nuqtali, toʻq sariq).
- {{key:Shift}} qoʻshadi, {{key:Esc}} bekor qiladi, oyna uchun ishlagani kabi.

:::touch
Sensorli ekranda bir barmoq plan va fasadni avvalgidek suradi; detallarni ularga teginib tanlang.
:::

{{ui:Plan}} va {{ui:Elevation}} da, {{ui:Select}} asbobi yoqilgan boʻlsa, oʻng yoki oʻrta tugma bilan suring.

## Detallarni sudrab surish

1. Avval detallarni tanlang (bosish, {{key:Shift}}+bosish yoki oyna).
2. Tanlangan detallardan birini bosing va torting. Butun tanlov suriladi; punktir kontur qayerga borishini koʻrsatadi.
3. Joylashtirish uchun qoʻyib yuboring. Qoʻyib yuborishdan oldin {{key:Esc}} bossangiz hammasi joyiga qaytadi.

- {{ui:3D}} va {{ui:Plan}} da detallar sath boʻylab suriladi. {{ui:3D}} da ularni yuqoriga va pastga surish uchun sudrashni boshlaganda {{key:Mod}} ni bosib turing.
- {{ui:Elevation}} da ular fasad ichida suriladi: setka chizigʻi boʻylab va yuqoriga-pastga.
- Ushlab turgan detal uchi setka kesishmasidan bir necha piksel yaqinlashganda unga yopishadi (kesishma yonadi va holat satri uni nomlaydi). Boshqa joyda surish 10 mm qadamlar bilan boʻladi.
- Tanlanmagan detalni bossangiz, koʻrinish baribir aylanadi yoki suriladi, shuning uchun sudrash bilan biror narsa tasodifan surilmaydi.
- Sudrash {{ui:Move}} kabi bitta amal. Birikmalar oʻz elementlariga ergashadi.

## Koʻp elementda xususiyatni oʻzgartirish

Ikki yoki undan koʻp element tanlang. {{ui:Properties}} panelidagi **Change on all of them** ostida:

- {{ui:Profile}}, {{ui:Position}}: ular orasidagi toʻsinlar, ustunlar va tirgaklar uchun.
- {{ui:Plate thickness (mm)}} va {{ui:Plate width (mm)}}: plastinalar uchun.
- {{ui:Material}} va {{ui:Rotation (°)}}: hammasi uchun.

Elementlar kelishmasa, maydonda **Varies** koʻrsatiladi. Qiymat tanlang yoki kiriting, unga tegishli har bir element uni oladi; holat satri nechtasi oʻzgarganini va nechtasi oʻz qiymatini saqlaganini aytadi.

{{ui:Properties}} panelidagi raqamli maydonlar hisoblashni ham qabul qiladi: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Oʻqib boʻlmaydigan hisoblash rad etiladi va holat satri xato qayerdaligini aytadi.

## Surish, aylantirish yoki akslantirish

Elementlar va poydevorlarni tanlang (bitta boʻlsa ham boʻladi), soʻng {{ui:Properties}} panelidagi **Move, rotate, mirror** dan foydalaning. Birikmalar oʻzicha suriladi emas: ular oʻz elementlariga ergashadi. Agar toʻsinni surib, uning ustunini surmasangiz, holat satri nechta birikma harakatlangan elementni turgan elementga bogʻlayotganini aytadi va [Muammolar](topic:troubleshooting) ular mos kelmasligini aytadi.

- **Surish:** x, y va z ni millimetrda kiriting va {{ui:Move}} ni tanlang. Yoki {{ui:Pick two points}} ni tanlang ({{key:M}} ni bosing): qaysi setka kesishmasidan surish va qayerga surish uchun ikki nuqtani bosing. Punktir kontur koʻrsatkichni kuzatadi.
- **Plandagi aylanish:** burchakni kiriting (tepadan qaralganda soat miliga teskari) va nimaga nisbatan aylantirishni tanlang: tanlovning oʻrtasiga yoki setka kesishmasiga. Ustunlar ramka bilan birga aylanadi.
- **Akslantirish:** setka chizigʻini tanlang. Aks tasviri xuddi shu profil, faqat teskari burilgan: I-profil flanesini saqlaydi, shveller teskari qaraydi (yuqori va pastki qismi almashadi), teshik va kesiklar detal bilan birga koʻchadi.
- **Asl nusxani saqlash (nusxa yaratish)** ni belgilasangiz, tanlov oʻz joyida qoladi va nusxa suriladi, aylantiriladi yoki aks ettiriladi. Uning birikmalari, agar [DetailCraft sozlamalari](topic:settings) da {{ui:Copy end plates and base plates with their members}} yoqilgan boʻlsa, unga birga koʻchadi.

Aylantirish vertikal chiziq atrofida boʻladi, akslantirish esa vertikal tekislikda boʻladi, shuning uchun sathlar gorizontal qoladi va poydevorlar tik turadi.
