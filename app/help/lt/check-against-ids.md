---
title: Patikrinkite IFC eksportą pagal kliento IDS
summary: Įkelkite jums pateiktą .ids failą ir Problemos skiltyje pamatykite kiekvieną eksportuotą detalę, kuri jo neatitinka, prieš siųsdami IFC.
keywords: ids, informacijos pateikimo specifikacija, buildingsmart, reikalavimai, pristatymas, tikrinimas, patikra, kokybės kontrolė, IFC eksportas, savybė, medžiaga, pirkimas
from: 50d0f785
---

## Ką darysite

IDS (Information Delivery Specification, buildingSMART standartas – informacijos pateikimo specifikacija) yra sąrašas, ką IFC turi turėti. DetailCraft patikrina IFC, kurį būtų eksportavęs (tą patį failą, kurį rašo {{ui:IFC}}), pagal jums pateiktą IDS ir išvardija kiekvieną elementą, kuris neatitinka.

## Žingsniai

1. Atidarykite arba nubraižykite savo modelį.
2. Spustelėkite {{ui:Tikrinti pagal IDS…}} grupėje {{ui:Išvestis}} įrankių juostoje.
3. Spustelėkite {{ui:Įkelti .ids failą…}} ir pasirinkite failą. Niekas neįkeliama į tinklą.
4. Perskaitykite rezultatą: kiekvieną specifikaciją su {{ui:Atitinka}} arba {{ui:Neatitinka}} ir kiek elementų ji taikoma.
5. Atidarykite Problemos ({{key:Ctrl+Shift+M}}) ir spustelėkite nesėkmę: elementas, jungtis, laiptai ar pamatas, iš kurio ji kilo, pažymimas, o vaizdas priartinamas prie jo.

## Ko tikėtis

- Vienas įspėjimas kiekvienam eksportuotam elementui ir reikalavimui, kurio jis neatitinka, su specifikacijos pavadinimu, tuo, ko reikalauja IDS, ir tuo, ką turi eksportas.
- Tikrinimo ataskaita (Problemos skiltyje) prasideda IDS: jo pavadinimu, versija, autoriumi ir kiekvienos specifikacijos skaičiais.

## Verta žinoti

- IDS išsaugomas modelio faile, todėl jis tikrinamas iš naujo atidarius modelį. Įkelti ar pamiršti jį – vienas veiksmas, kurį galima atšaukti.
- Kiekvienas pakeitimas patikrinamas iš naujo po akimirkos; didelio modelio atveju tarp paleidimų tikrinimas užtrunka šiek tiek ilgiau.
- Eksporto GlobalId sudaromi iš modelio pavadinimo ir DetailCraft viduje esančių detalių numerių, todėl jie išlieka tokie patys nuo vieno tikrinimo iki kito. Pervadinus modelį, kiekvienas elementas gauna naujus GlobalId.
- Skaičiai lyginami SI vienetais (eksportas yra milimetrais; ilgiai pirmiausia konvertuojami į metrus).

- IDS šablonai skaitomi kaip visa reikšmė. `^` pradžioje ir `$` pabaigoje taip pat laikomi „visa reikšme“, kaip dauguma IDS failų jas ir supranta.

## Kitas

- [Eksportuoti IFC](topic:ifc-export)
