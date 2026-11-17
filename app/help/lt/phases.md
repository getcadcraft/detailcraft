---
title: Etapai
summary: Padalykite modelį į etapus (montavimo sekas arba pristatymus), rodykite arba slėpkite kiekvieną etapą, priskirkite detales etapams ir numeruokite žymes pagal etapus.
keywords: etapas, etapai, etapų tvarkytuvas, montavimo seka, pristatymas, partija, seka, slėpti etapą, rodyti etapą, filtras, numeravimas, žymės priešdėlis, pagal etapą
from: bae506f5
---

Etapas – tai detalių grupė, kurios gaminamos, pristatomos arba montuojamos kartu: montavimo seka, pristatymas, partija. Kiekvienas elementas ir pamatas yra viename etape. Jungtis priklauso savo pagrindinio elemento etapui: galinė plokštė – sijos, pagrindo plokštė – kolonos. Naujas modelis turi vieną etapą.

## Etapų skydelis

Skiltis {{ui:Etapai}} skydelyje {{ui:Modelis}} išvardija visus etapus:

- žymimasis langelis rodo arba slepia etapą vaizde;
- numeris ir pavadinimas, kurį galite įvesti (tuščias = „Etapas 2“ ir taip toliau);
- kiek detalių yra etape;
- mygtukas {{ui:×}} pašalina etapą. Pašalinti galima tik tuščią etapą: pirmiausia perkelkite jo detales į kitą etapą.

{{ui:Pridėti etapą}} prideda kitą numerį ir padaro jį etapu, į kurį patenka naujos detalės.

## Detalių priskyrimas etapui

- **Naujos detalės:** {{ui:Naujos detalės patenka į}} pasirenka etapą, į kurį patenka kiekvienas elementas ir pamatas, kurį įdedate nuo šiol.
- **Viena detalė:** pažymėkite ją ir pakeiskite {{ui:Etapas}} skydelyje {{ui:Savybės}}.
- **Daug detalių:** pažymėkite jas (langu, {{key:Shift}}+spragtelėjimu, {{key:Mod+A}}) ir pakeiskite {{ui:Etapas}} viršuje skydelio {{ui:Savybės}}. Jei jos yra skirtinguose etapuose, rodoma **Įvairūs**. Vienas pakeitimas – vienas atšaukimo žingsnis.

Kopijos išlaiko detalės, iš kurios buvo nukopijuotos, etapą, taip pat įklijavus į kitą modelį (etapas ten pridedamas).

## Etapų rodymas ir slėpimas

Paslėptas etapas nerodomas vaizde, į jį negalima spragtelėti ar patekti pasirinkimo langu, o {{key:Mod+A}} jo neįtraukia. Jis vis dar yra medžiagų sąraše, ataskaitose, brėžiniuose ir visuose eksportuose. Slėpimas skirtas tik vaizdui: jis neįrašomas ir neturi atšaukimo.

## Žymės pagal etapus

Kai įjungta **Numeruoti žymes pagal etapus** (pradžioje ji įjungta) ir detalės yra daugiau nei viename etape, kiekvienas etapas numeruojamas atskirai, o jo žymės prasideda etapo numeriu: detalių žymės 1-b1, 2-b1, surinkimo žymės 2-B1, pamatai 2-F1. Dvi vienodos sijos skirtinguose etapuose tada turi skirtingas žymes, nes jos gaminamos ir siunčiamos skirtingu laiku. Kai naudojamas tik vienas etapas, žymės be priešdėlio. Išjunkite ją, kad visas modelis būtų numeruojamas kaip vienas: tada vienodos detalės turi bendrą žymę, nepriklausomai nuo etapo.

Etapas įrašomas į IFC eksportą (savybių rinkinys DetailCraft, Phase).

:::note
Modeliai su etapais įrašomi DetailCraft failo formatu 2. DetailCraft 0.3 leidimas jų atidaryti negali; šis leidimas atidaro senesnius failus, kuriuose visos detalės yra 1 etape.
:::
