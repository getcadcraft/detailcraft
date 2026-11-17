---
title: Įstrižainių jungiamosios plokštės
summary: Sujunkite įstrižainės galą su kolona ar sija jungiamąja plokšte – kampai ir plokščiosios juostos sujungiami varžtais, vamzdžiai įleidžiami į plokštę ir suvirinami.
keywords: jungiamoji plokštė, jungiamoji plokštė, įstrižainė, įstrižinis standinimas, vertikalus standinimas, kampinė įstrižainė, plokščioji juosta, juosta, HSS įstrižainė, peilio plokštė, įpjautas vamzdis, jungti
from: 22f6598d
---

Įstrižainės jungiamoji plokštė – plokštė, suvirinta dirbtuvėse prie kolonos (ar sijos), prie kurios remiasi įstrižainė, įstrižainės plokštumoje. DetailCraft nukerta įstrižainę, kad ji būtų toliau nuo visko jungties vietoje, įdeda ir nustato jungiamąją plokštę bei sujungia įstrižainę su ja: **kampas** arba **plokščioji juosta** vienos eilės varžtais, arba **vamzdis** (kvadratinis, stačiakampis ar apvalus HSS), įleistas per jungiamąją plokštę ir suvirintas.

## Kur tai veikia

- Įstrižainės galas guli ant kolonos ar sijos linijos (iki 1 mm tikslumu), o įstrižainė nėra beveik lygiagreti tai linijai. Kolona yra atrama, kai ji yra; kitu atveju – sija.
- Jungiamoji plokštė guli įstrižainės ir atramos linijos plokštumoje. **Kampas** turi turėti vieną kraštinę toje plokštumoje, o **plokščioji juosta** – savo paviršių: pasukite įstrižainę (jos {{ui:Pasukimas (°)}}), kol taip bus. Jei kampo kraštinės yra 45° kampu į plokštumą, DetailCraft tai pažymi ir nieko nesukuria.
- Dvitaurio profilio ir kanalo formos įstrižainės nejungiamos.

## Pridėti jungiamąsias plokštes

1. Pasirinkite vieną ar daugiau įstrižainių.
2. Pasirinkite {{ui:Jungiamoji plokštė}} grupės {{ui:Jungti}} meniu {{ui:Daugiau}}.
3. Kiekvienas pasirinktų įstrižainių galas, kuris patenka ant kolonos ar sijos ir neturi jungiamosios plokštės, gauna ją.

Pasirinkite jungiamąją plokštę (spustelėkite plokštę), kad pakeistumėte jos nustatymus. {{ui:Taikyti panašiems (n)}} nukopijuoja ją į kiekvieną laisvą įstrižainės galą su tais pačiais įstrižainės ir atramos profiliais.

## Ką apskaičiuoja DetailCraft

- **Nukirtimas.** Įstrižainė tame gale sutrumpinama, kol jos kampai išsilaisvina nuo visko jungties vietoje: {{ui:Įstrižainės tarpas}} (25), kiekvieno elemento jungtyje (šalia jo arba už jo galo, jei elementas čia baigiasi) ir pagrindo plokštės po kolona.
- **Varžtai (kampai, plokštės).** {{ui:Varžtai}} (3) vienoje eilėje išilgai įstrižainės, pirmasis – {{ui:Varžto galo atstumas}} (40) nuo nupjauto galo, kas {{ui:Varžto žingsnis}} (75). Kampuose jie eina per kraštinę jungiamosios plokštės plokštumoje, {{ui:Varžto skersinis atstumas}} nuo kulno (0 = kraštinės vidurys); plokščiosiose juostose – per jos centrinę ašį (arba nuo jos per skersinį atstumą). Varžto suspaudžiamas storis = kraštinė arba plokštė + jungiamoji plokštė.
- **Jungiamoji plokštė.** Stačiakampis: nuo atramos paviršiaus iki už paskutinio varžto, per galo atstumą, ir išilgai atramos tiek, kiek reikia varžtams. Ji guli prie kampo kraštinės nugarėlės (arba plokštės paviršiaus). Vamzdžiui ji eina per vamzdžio vidurį, įleista per {{ui:Vamzdžio persidengimas ant jungiamosios plokštės}} (200) vamzdžio, palikus vietos suvirinimams.
- **Jungtys.** Kolonos pagrinde jungiamoji plokštė nuleidžiama ant pagrindo plokštės. Kai sija kerta jungtį (įstrižainė, kylanti į sijos ir kolonos kampą), jungiamoji plokštė lieka po sija arba virš jos. Jei dėl to varžtams ar persidengimui trūksta galo atstumo, DetailCraft įspėja.
- **Suvirinimai.** Jungiamoji plokštė prie atramos, abiejose pusėse. Vamzdis prie jungiamosios plokštės – keturios linijos išilgai persidengimo.

## Verta žinoti

- Jungiamoji plokštė priklauso atramos surinkimui (suvirinta dirbtuvėse). Įstrižainė atkeliauja su išgręžtomis skylėmis ir eina į savo NC failą.
- Vamzdžio įpjova modelyje neišpjaunama; [susidūrimų patikra](topic:clash-check) nepaliečia įstrižainės ir jos jungiamosios plokštės.
- Jungiamoji plokštė nesuvirinama prie sijos, su kuria liečiasi; kampinės jungiamosios plokštės, suvirintos prie sijos ir kolonos, nukirstieji kampai ir Uniform Force Method jungties darbinio taško išdėstymas kol kas nepadaromi.
- DetailCraft nesuprojektuoja nei jungiamosios plokštės, nei varžtų (stiprumo tikrinimų nėra); įspėjimai – tai tarpai ir tinkamumas.
