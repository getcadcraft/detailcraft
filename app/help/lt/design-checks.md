---
title: Plieniniai elementai tikrinami pagal projektavimo normą
summary: Sudarykite apkrovų derinius pagal ASCE 7 arba EN 1990, tikrinkite kiekvieną plieninį dvitėjį profilį pagal AISC 360 arba EN 1993-1-1 ir matykite, kiek jo atsparumo panaudoja kiekvienas elementas. Tai pagalba, kol inžinierius neperžiūrės rezultatų.
keywords: projektavimas, projektavimo patikrinimas, plieno projektavimas, panaudojimo koeficientas, panaudojimas, atsparumas, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokodas, apkrovų deriniai, LRFD, Nacionalinis priedas, išsilenkimas, šoninis sukamasis išsilenkimas, šlytis, lenkimas, sąveika, konstrukcinis, studentai, inžinierius
from: 15685c4e
---

Atlikę skaičiavimą, skirtuke „{{ui:Analizė}}“ esantis blokas „{{ui:Projektavimo patikrinimai}}“ jo jėgas paverčia išvada apie kiekvieną plieninį elementą: kiek jo atsparumo panaudoja blogiausias derinys.

:::warning
Tai **pagalba, kol inžinierius neperžiūrės rezultatų**. Naudojamos tik pirmos eilės jėgos (be antros eilės poveikių), netikrinamas sukimas, lieknos (4 klasės) dalys, suvirinti profiliai ir jungtys; tai, ko negali patikrinti, praleidžiama ir apie tai pranešama. Ji nepakeičia inžinieriaus patikrinimo, o jos rezultatai nėra patvirtinimas antspaudu.
:::

## Pasirinkite normą

„{{ui:Projektavimo norma}}“ įrašoma kartu su modeliu; pasirinkite vieną iš dviejų šeimų:

- **ASCE 7 + AISC 360** (JAV, LRFD): ASCE 7-16 §2.3.1 apkrovų deriniai ir ANSI/AISC 360-16 elementų patikrinimai.
- **EN 1990 + EN 1993-1-1** (Eurokodas): EN 1990 deriniai (6.10 lygtis arba 6.10a ir 6.10b) ir EN 1993-1-1 elementų patikrinimai.

Tada pasirinkite „{{ui:Plieno markė}}“ (A992, A36 ir kitas; arba S235–S450, kai virš 40 mm taikoma mažesnė takumo riba).

## Sudarykite derinius

Apkrovų atvejų sąraše kiekvienam atvejui nurodykite jo **rūšį** (nuolatinė, naudingoji, stogo naudingoji, sniego, vėjo, seisminė), tada spauskite „{{ui:Sudaryti derinius}}“. DetailCraft užrašo normos derinius kaip jūsų atvejų derinius: visus stiprumo derinius, kuriuos norma nurodo jūsų turimoms rūšims, ir eksploatacinės tinkamumo derinius lenkiui. Patys įvesti deriniai lieka; jie su norma netikrinami. Atvejis, kurio rūšis yra „{{ui:Kita}}“, nederinamas.

Eurokodui koeficientai yra **rekomenduojamosios reikšmės** pagal EN 1990 A1 priedą (γG 1.35, γQ 1.5, naudingųjų, sniego ir vėjo apkrovų ψ reikšmės) ir EN 1993-1-1 (γM0 = γM1 = 1.0). Jūsų šalies nacionalinis priedas kai kuriuos iš jų keičia: atidarykite „{{ui:Nacionalinio priedo reikšmės}}“, įveskite savąsias ir vėl sudarykite derinius. Jos įrašomos kartu su modeliu.

## Patikrinkite elementus

Spauskite „{{ui:Patikrinti elementus}}“. Kiekvienam plieniniam dvitėjam profiliui lentelėje rodomas jo **panaudojimo koeficientas** (poreikis, padalytas iš atsparumo: 100 % yra riba), ar jis atitinka reikalavimus, kuris patikrinimas lemia ir kuris derinys. Elementai modelyje nuspalvinami: mėlyna – mažai naudojamas, žalia – apie pusė, ochros spalvos – arti ribos, raudona – viršija, pilka – nepatikrinta. Norėdami pasirinkti elementą, spustelėkite jo pavadinimą.

Patikrinimai ir punktas, kurio kiekvienas laikosi (jie išvardyti ataskaitoje):

- tempimas; gniuždymas su lenkiamuoju ir sukamuoju išsilenkimu; lenkimas apie abi ašis su šoniniu sukamuoju išsilenkimu; šlytis; lenkimas kartu su ašine jėga;
- eksploatacinės tinkamumo derinių įlinkis, lyginamas su jūsų nustatyta „{{ui:Lenkio riba}}“ (pradžioje L/360; tai projekto, o ne normos reikšmė).

**Ilgiai.** Sutvirtintas ilgis yra kiekvienos analizuojamos dalies dalis (1 = nesutvirtinta); tvirtinimai laikomi vienodai nutolusiais nuo pradžios. K koeficientai ilgį dauginami išsilenkimui. Mazgas, kuriame remiasi kitas elementas, padalija elementą, ir kiekviena dalis tikrinama pagal savo ilgį, laikant, kad ten yra sutvirtinta.

## Kas netikrinama

Elementas rodomas **nepatikrintas**, nurodant priežastį, vietoj skaičiaus, kai jo skerspjūvis nėra profilis, kurį žino patikrinimai (kampiniai ir U formos profiliai; stačiakampiai ir apvalūs vamzdžiai tikrinami, kai jų sienelės kompaktiškos), kai tai pasirinktinis (suvirintas) profilis arba kai lenkiamoji dalis yra liekna (AISC) ar 4 klasės (Eurokodas). Liekna gniuždoma dalis pašalina gniuždymo patikrinimus, o elementas rodomas *atitinka, iš dalies patikrinta*. Suvirinimai mazguose turi [savo patikrinimą](topic:weld-checks). Taip pat neįgyvendinta: antros eilės poveikiai, sukimas, kartu su lenkimu veikiantis šlyties išsilenkimas, varžtinės jungtys, nuovargis, gaisro ir seisminio detalizavimo. Gelžbetoniniams elementams ir seisminėms apkrovoms yra [savi patikrinimai](topic:concrete-and-seismic). Žr. [Dar neįgyvendinta](topic:not-built-yet).

## Ataskaita

„{{ui:Ataskaita (PDF)}}“ ir „{{ui:Ataskaita (CSV)}}“ įgauna projektavimo lenteles, kai patikrinimas atliktas: normų redakcijas, parametrus ir Nacionalinio priedo reikšmes, panaudojimą pagal elementą, kiekvieną taikytą punktą, o kiekvienam elementui – poreikį, atsparumą ir kiekvieno patikrinimo panaudojimą lemiančiame derinyje.
