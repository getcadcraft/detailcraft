---
title: Vystuženie obdĺžnikového betónového stĺpa
summary: Prepracovaný príklad detailu obdĺžnikového betónového stĺpa v DetailCraft: umiestnite ho, dajte mu pozdĺžne prúty a strmene, prečítajte kontroly, preplátovanie nad ním a značky prútov a nakreslite jeho dielenský list.
keywords: betónový stĺp, obdĺžnikový stĺp, výstuž stĺpa, pozdĺžne prúty, zvislé prúty, strmene, priečne strmene, preplátovanie, spoj preplátovaním, začínajúce prúty, stupeň výstuže stĺpa, 1 percento, 8 percent, rozstup strmeňov, ACI 318-19 25.7.2, EN 1992-1-1 9.5, dielenský výkres, značky prútov, 8C1, 3C2
from: aee2a3ca
---

Tento návod zavedie jeden štvorcový stĺp od nuly až po skontrolovaný, nakreslený a rozpísaný detail. Všeobecné pravidlá pre trámy, dosky a steny sú v [Detailing železobetónu](topic:reinforced-concrete); toto je stĺpová časť, s číslami, ktoré si môžete zopakovať.

:::warning
DetailCraft detailuje prúty, ktoré mu dáte. Nenavrhuje ich. Prúty nižšie sú východiskové hodnoty pre príklad, nie odporúčanie: projektant zodpovedný za návrh vyberie veľkosť, počet a rozstup.
:::

## Čo je tu stĺp

Obdĺžnikový stĺp má šírku (pozdĺž svojho lokálneho x) a hĺbku naprieč (pozdĺž lokálneho y), čisté krytie ku strmeňom, pozdĺžne prúty na každej strane a uzavreté strmene. Otočenie celého prvku otočí všetko; strany zostávajú "strana šírky" a "strana hĺbky".

- Pozdĺžne prúty sa zadávajú ako počet na strane šírky a počet na strane hĺbky. Rohové prúty sa počítajú na oboch, takže 3 a 3 dávajú 8 prútov; 4 a 4 dávajú 12.
- Strmene sú uzavreté obdĺžniky s dvoma háčikmi v jednom rohu, 135° alebo 90°. Prvý strmeň je nastavená vzdialenosť nad podlahou (a pod ďalším); koncové zóny majú hustejší rozstup, stred širší.
- Čo prúty robia hore: pokračujú a preplátujú sa s prútmi nad nimi, zahnú sa 90° háčikmi do podlahy, alebo končia pod hornou hranou.

## Pracovný stĺp

Stĺp 400 × 400 mm, 3600 mm medzi podlažím nad ním a podlažím pod ním, pozdĺžne prúty #8, strmene #3, čisté krytie 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, vnútorný stĺp.

1. Otvorte kartu {{ui:Betón}} a nastavte osi mriežky a úrovne, na ktorých stĺp stojí (ľavý panel).
2. V {{ui:Pridať podľa mriežky}} vyberte {{ui:Betónový stĺp}}, zvoľte priesečník mriežky a dve úrovne, nastavte {{ui:Šírka (mm)}} a {{ui:Hĺbka naprieč (mm)}} na 400 a zvoľte {{ui:Pridať}}.
3. Na paneli {{ui:Vlastnosti}} nastavte:
   - {{ui:Čisté krytie (mm)}} 40;
   - {{ui:Pozdĺžne prúty}} #8, {{ui:Prúty na strane šírky}} 3, {{ui:Prúty na strane hĺbky}} 3;
   - {{ui:Viazacie prúty}} #3, {{ui:Háčiky}} 135°, {{ui:Rozstup medzi (mm)}} 300, {{ui:Dĺžka koncovej zóny (mm)}} 600, {{ui:Rozstup v koncových zónach (mm)}} 150, {{ui:Prvý od líca (mm)}} 50;
   - {{ui:Prúty hore}} {{ui:Pokračovať a preplátovať s prútmi nad ním}}.

Každá zmena je jeden krok späť.

### Čo dostanete

| Časť | Výsledok |
|---|---|
| Pozdĺžne prúty | 8 prútov #8 (prsteň 3 × 3), každý dlhý 4375 mm: stĺp 3600 mm plus preplátovanie 775 mm nad ním |
| Preplátovanie | Potrebných 757 mm na preplátovanie v tlaku (ACI 318-19 25.5.5.1, fy 420), poskytnutých 775 mm: potreba zaokrúhlená nahor na ďalších 25 mm |
| Strmene | 17 strmeňov #3, každý s rezanou dĺžkou asi 1359 mm, rozstup 150 mm v dvoch koncových zónach po 600 mm a 300 mm medzi nimi |
| Stupeň výstuže | 2.5 % hrubého prierezu (limity 1 % až 8 %, ACI 318-19 10.6.1.1) |
| Čistý rozstup prútov | 112 mm (potrebných aspoň 40 mm, ACI 318-19 25.2.3) |
| Rozstup strmeňov | 300 mm (povolených 400 mm: najmenšie z 16 priemerov prúta, 48 priemerov strmeňa a menšej strany, ACI 318-19 25.7.2.1) |
| Veľkosť strmeňa | #3 (povolené až do 9.5 mm, ACI 318-19 25.7.2.2) |

Všetky tieto hodnoty sú v zozname {{ui:Kontroly}} prvku; preplátovanie je aj v {{ui:Preplátovanie a ukotvenie}}.

## Priečne strmene

S jedným obvodovým strmeňom sú držané len rohové prúty. ACI 318-19 25.7.2.3 dovoľuje prút v strede strany bez podpory, ak je do 150 mm čistej vzdialenosti od rohového prúta. Pri 3 prútoch na strane, ako vyššie, je to splnené. Pri 4 alebo viac prútoch na strane nie je, a DetailCraft to oznámi ako upozornenie ({{ui:Kontroly}} a {{ui:Problémy}}): "priečne strmene" sú potrebné. **Priečne strmene ešte nie sú nakreslené**: doplňte ich vo výkrese ručne, alebo zvoľte menej prútov na strane.

Pre EN 1992-1-1 DetailCraft kontroluje veľkosť prúta (aspoň 8 mm), počet prútov (aspoň 4), plochu výstuže (0.2 % až 4 % prierezu), čistý rozstup a rozstup strmeňov (9.5.2 a 9.5.3).

## Preplátovanie, základ a stĺp pod ním

- Kde **pod stĺpom stojí pätka modelu**, stĺp sa preplátuje so začínajúcimi prútmi pätky a ich preplátovanie sa tiež kontroluje.
- Kde **pod ním stojí iný stĺp modelu**, preplátuje sa s prútmi tohto stĺpa.
- Zadajte vlastnú {{ui:Dĺžka preplátovania (mm, 0 = podľa potreby)}}, ak to chcete prepísať; kratšia než potrebná je problém a v tabuľke je označená *.
- Predvolene sa používajú preplátovania v tlaku ({{ui:Preplátovanie v tlaku}} v nastaveniach); zvoľte {{ui:Preplátovanie v ťahu}}, keď môže byť stĺp v ťahu.

## Značky, rozpis a dielenský list

Rovnaké prúty majú jednu značku: pozdĺžne prúty stĺpa nad ním sú 8C1, jeho strmene 17C2 (najprv číslo, potom písmeno druhu C pre stĺp a bežné číslo). Objavia sa na karte {{ui:Výkaz ohýbania}} s rezanou dĺžkou a hmotnosťou a v CSV z {{ui:Výstup}} › {{ui:Viac}} › {{ui:Ohýbanie}}.

Vyberte {{ui:Dielenský výkres}} vedľa stĺpa pre list so stĺpom v pohľade (každý prút, jeho značka, zóny strmeňov a preplátovanie okótované) a rezom v strede, za ním list ohýbania prútov. Uložte {{ui:Tento list ako PDF}}.

## Čo toto nerobí

- Okrúhle stĺpy a špirály a stĺpy, ktoré nie sú obdĺžnikové: ešte nie je hotové.
- Rohové a priečne strmene vnútri prierezu a seizmický detail (ACI 318-19 kapitola 18): ešte nie je hotové.
- Spoje na miestach, ktoré si zvolíte, alebo striedavé: všetky prúty sa preplátujú v jednom reze.
- Či prúty stačia na zaťaženie: to je návrh inžiniera.
