---
title: Umiestnenie pätiek s výstužou
summary: Umiestnite obdĺžnikové pätky so spodným roštom a štartovacími prútmi, skontrolujte ich a stiahnite výkaz ohýbania.
keywords: pätka, plošná pätka, základ, výstuž, prúty, rošt, štartovacie prúty, kolíky, výkaz ohýbania, zoznam prútov, betón, háky, krytie
from: 41a048be
---

Táto téma sa týka obdĺžnikových plošných pätiek. Nosníky, stĺpy, dosky a steny sú v [Detail železobetónu](topic:reinforced-concrete). Každá pätka dostane spodný rošt v oboch smeroch a, ak ich chcete, štartovacie prúty vyčnievajúce z nej nahor. Prúty sú americkými veľkosťami #3 až #11.

## Umiestnenie pätky

1. Zvoľte {{ui:Pôdorys}} a vyberte úroveň hornej hrany pätky.
2. Zvoľte {{ui:Pätka}} v skupine {{ui:Umiestnenie}} alebo stlačte {{key:F}}.
3. Nastavte pätku v paneli {{ui:Vlastnosti}} (pozri nižšie) alebo ponechajte predvolené hodnoty.
4. Kliknite na priesečník osí. Pätka je vycentrovaná na ňom a jej horná hrana je na úrovni. Stavový riadok hovorí napríklad „Pätka 2000 x 2000 x 600 pod A/1.“

Môžete použiť aj formulár {{ui:Pridať podľa mriežky}} v dolnej časti panela.

Pätka je kreslená priehľadne, aby ste videli jej prúty, ktoré sú kreslené ako plné trubice.

## Nastavenia pätky

| Pole | Predvolené | Poznámky |
|---|---|---|
| Dĺžka L (mm) | 2000 | Pozdĺž x; 300 až 50000 |
| Šírka B (mm) | 2000 | Pozdĺž y; 300 až 50000 |
| Hĺbka H (mm) | 600 | 150 až 10000 |
| Betón | 4000 psi | Text, vypísaný pri exporte IFC |

**Spodný rošt**

| Pole | Predvolené | Poznámky |
|---|---|---|
| Dlhé prúty | #5 | Prúty pozdĺž L, spodná vrstva |
| Rozstup (mm) | 250 | Najväčší dovolený rozstup; prúty sú rozmiestnené rovnomerne s týmto alebo menším rozstupom |
| Krátke prúty | #5 | Prúty pozdĺž B, uložené na dlhých prútoch |
| Rozstup (mm) | 250 | Ako vyššie |
| Krytie (mm) | 75 | Voľné krytie na každej strane |
| Háky na koncoch | Zapnuté | Ohne oba konce každého prúta roštu do štandardného háku 90° (tvar U); vypnuté dá rovné prúty (tvar S) |

**Štartovacie prúty**

| Pole | Predvolené | Poznámky |
|---|---|---|
| Štartovacie prúty | Zapnuté | Vypnite ich pri pätke bez štartovacích prútov |
| Prút | #6 | |
| Prúty pozdĺž L / Prúty pozdĺž B | 2 / 2 | Mriežka prútov, vycentrovaná na pätku |
| Rozstup pozdĺž L / Rozstup pozdĺž B | 250 / 250 | Medzi stredmi prútov |
| Vyčnievanie nad hornú hranu | 600 | Ako ďaleko prúty vyčnievajú nad hornú hranu pätky |
| Hák na spodku | Zapnuté | Hák 90° smerujúci von, ležiaci na rošte (tvar L) |

Pod poľami DetailCraft zobrazuje dĺžku háku pre dlhé prúty, napríklad "Dĺžka háku pre #5: 254 mm od vonkajšej hrany k vonkajšej hrane."

## Zmena umiestnenej pätky

Vyberte pätku (kliknite na jej betón mimo stĺpa alebo na niektorý z jej prútov). Zobrazia sa rovnaké polia a navyše {{ui:Stred x}}, {{ui:Stred y}}, {{ui:Horná kóta z}} a {{ui:Otočenie (°)}}. Pod nimi tabuľka uvádza prúty tejto pätky s ich označeniami, počtami a dĺžkami a objem betónu v kubických metroch.

Každá zmena sa pred uložením skontroluje. Zmena, ktorú nie je možné zrealizovať, sa odmietne a stavový riadok uvedie dôvod, napríklad "Krytie v tejto pätke nenecháva miesto pre prúty.", "Pätka je príliš plytká pre dve vrstvy prútov vo vnútri krytia." alebo "Štartovacie prúty sa nezmestia do pätky s krytím 75 mm."

Zmeny, ktoré sa dajú zrealizovať, ale vyžadujú kontrolu, sú uvedené pod pätkou a na karte {{ui:Problémy}}:

- "#11 prúty s roztečou 59.6 mm ponechávajú voľnú medzeru menšiu ako 35.8 mm (ACI 318-19 25.2.1)." Voľná medzera medzi prútmi musí byť aspoň rovná priemeru prúta a zároveň aspoň 25.4 mm.
- "Háky #5 potrebujú hĺbku 254 mm; do krytia sa zmestí iba 150 mm." Ramená háku sa potom skrátia, aby sa zmestili, a preto už nie sú štandardnými hákmi.
- "Háky štartovacích prútov zasahujú do krytia."
- "Štartovacie prúty sú bližšie, než je minimálny voľný rozstup."

## Označenia prútov a výkaz ohýbania

Rovnaké prúty (rovnaká veľkosť, tvar a rozmery na milimeter) majú spoločné označenie prúta pre všetky pätky. Označenia sa píšu ako `<bar number>F<n>`: 5F1, 5F2 pre prúty #5, 6F1 pre prvý prút #6 a tak ďalej. Pätky s rovnakou veľkosťou, betónom, roštom a štartovacími prútmi majú spoločné označenie pätky: F1, F2 …

1. Otvorte kartu {{ui:Výkaz ohýbania}} v dolnej časti. Každý riadok je jedno označenie prúta: veľkosť, tvar, rozmery A, B a C, počet, dĺžka rezu, celková dĺžka, hmotnosť na meter, hmotnosť každého kusu, celková hmotnosť a na čo sa prút používa.
2. Zvoľte {{ui:Stiahnuť CSV}} na karte alebo {{ui:Ohýbanie}} v ponuke {{ui:Viac}} skupiny {{ui:Výstup}}, čím získate súbor `<name> bending schedule.csv`.

Tvary sú vlastné kódy DetailCraftu, nie normové: S rovný, L jeden ohyb, U dva ohyby. Rozmery sú od vonkajšej hrany k vonkajšej hrane; dĺžka rezu je presná dĺžka stredovej čiary cez ohyby. Pozri [Referencia výstuže](topic:rebar-reference).

## Čo DetailCraft nekontroluje

- Dĺžky kotvenia a presahov a to, či sú štartovacie prúty dosť dlhé pre stĺp nad nimi.
- Časť pravidla voľného rozstupu týkajúca sa veľkosti kameniva (nepozná zloženie zmesi).
- Nič o stĺpe ani pätnej doske nad ním: pätky a oceľ sú oddelené.

Pozri tiež [Čo ešte nie je hotové](topic:not-built-yet).
