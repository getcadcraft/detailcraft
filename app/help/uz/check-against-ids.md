---
title: Eksport qilingan IFC ni mijozning IDS bilan tekshirish
summary: Sizga berilgan .ids faylini yuklang va IFC ni yuborishdan oldin unga javob bermaydigan har bir eksport qilingan qismni Muammolar boʻlimida koʻring.
keywords: ids, axborot yetkazish spetsifikatsiyasi, buildingsmart, talablar, yetkazib berish, tekshirish, validatsiya, sifat nazorati, ifc eksport, xususiyat, material, xarid
from: 50d0f785
---

## Nima qilasiz

IDS (Information Delivery Specification, buildingSMART standarti) — IFC tarkibida boʻlishi shart boʻlgan narsalar roʻyxati. DetailCraft siz olgan IDS bilan eksport qiladigan IFC ni tekshiradi (xuddi {{ui:IFC}} yozadigan fayl) va talabga javob bermaydigan har bir qismni roʻyxatga oladi.

## Qadamlar

1. Modelingizni oching yoki chizing.
2. Asboblar panelining {{ui:Chiqish}} guruhidagi {{ui:IDS boʻyicha tekshirish…}} tugmasini bosing.
3. {{ui:.ids faylini yuklash…}} tugmasini bosing va faylni tanlang. Hech narsa yuklanmaydi.
4. Natijani oʻqing: har bir spetsifikatsiya {{ui:Oʻtdi}} yoki {{ui:Oʻtmadi}} holati bilan va u nechta elementga tegishli.
5. {{ui:Muammolar}} ({{key:Ctrl+Shift+M}}) ni oching va xatoni bosing: u kelib chiqqan element, ulanma, zina yoki poydevor tanlanadi va koʻrinish shunga yaqinlashadi.

## Nimani koʻrasiz

- Eksport qilingan har bir element va u oʻtkazmagan talab uchun bitta ogohlantirish: spetsifikatsiya nomi, IDS nimani talab qilgani va eksportda nima borligi bilan.
- Tekshiruv hisoboti ({{ui:Muammolar}} da) IDS bilan boshlanadi: uning sarlavhasi, versiyasi, muallifi va har bir spetsifikatsiya hisoblari.

## Bilish foydali

- IDS model faylida saqlanadi, shuning uchun modelni ochganda u yana tekshiriladi. Uni yuklash yoki oʻchirish bekor qilish mumkin boʻlgan bitta qadam.
- Har bir oʻzgarish bir oz keyin qayta tekshiriladi; katta modelda tekshiruvlar orasida biroz koʻproq kutiladi.
- Eksportning GlobalId lari model nomi va DetailCraft ichidagi qism raqamlaridan olinadi, shuning uchun ular bir tekshiruvdan keyingisiga oʻzgarmaydi. Modelni qayta nomlash har bir elementga yangi GlobalId beradi.
- Sonlar SI birliklarida solishtiriladi (eksport millimetrda; uzunliklar avval metrga aylantiriladi).

- IDS dagi shablonlar butun qiymat sifatida oʻqiladi. Boshidagi `^` va oxiridagi `$` ham "butun qiymat" deb olinadi, chunki koʻpchilik IDS fayllari ularni shunday nazarda tutadi.

## Keyingi

- [IFC eksporti](topic:ifc-export)
