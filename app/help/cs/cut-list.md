---
title: Řezný plán
summary: Rozmístěte nosníky, sloupy, ztužidla a schodnicové tyče do skladových délek se šířkou řezu pily a zjistěte, kolik tyčí koupit a kolik bude odpadu.
keywords: řezný plán, rozmísťování, skladová délka, tyč, šířka řezu, pila, zbytek, odřezek, odpad, slučování, nákup, více
from: 81d06ce5
---

Karta {{ui:Cut list}} pod pohledem určuje, jak nařezat lineární díly modelu z dostupných tyčí: kolik tyčí každé délky koupit pro každý profil a materiál, co se na každou tyč umístí a kolik bude odpadu.

## Nastavení zásoby

Nahoře na kartě:

- **Skladové délky (mm):** délky, které lze koupit, oddělené mezerami, například `6000 12000`, nebo tyče 20 ft a 40 ft jako `6096 12192`. Až osm.
- **Šířka řezu pilou (mm):** kolik zabere každý řez (zpočátku 3).
- **Ořez konce (mm):** odřízne konec každé tyče před prvním kusem (zpočátku 0).
- **Ponechat zbytky od (mm):** zbytek alespoň této délky se vrátí do zásoby; kratší je odpad (zpočátku 500).

Tato nastavení se uchovají v tomto prohlížeči jako ostatní [nastavení](topic:settings).

## Jak se rozmisťuje

- Každý nosník, sloup, ztužidlo a schodnicová tyč podle značky dílu a počtu; desky se řežou z plechu a zde se nerozmisťují.
- Každý profil a materiál zvlášť.
- Nejdelší kusy jako první, každý do první tyče, do které se vejde; nová tyč začíná nejdelší skladovou délkou. Potom se každá tyč koupí jako nejkratší skladová délka, která ještě pojme její řezy.
- Každý řez zabere šířku řezu (žádná po řezu, který končí přesně na konci tyče); každá tyč ztrácí ořez konce.
- Kus delší než každá skladová délka je uveden pod **Delší než jakákoli zásoba**, nerozmisťuje se: spojte jej (viz [Spoje](topic:splices)) nebo přidejte delší skladovou délku.

## Čtení

- **Souhrn:** pro každý profil a materiál kusy, tyče k nákupu (například „2 × 12000, 1 × 6000“), nakoupené a použité metry a odpad.
- **Tyče a jejich řezy:** každá tyč, její skladová délka, její řezy jako značka dílu a délka, a zbytek, ponechaný nebo odpad.

{{ui:Download CSV}} uloží obě tabulky jako `<name> cut list.csv`.

DetailCraft nerozmisťuje desky do plechů a nemíchá profily ani materiály na jedné tyči.
