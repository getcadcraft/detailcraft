---
title: Armuoto betono sijų, kolonų, perdangų ir sienų detalizavimas
summary: Pridėkite betonines sijas, kolonas, perdangas ir sienas pagal ašis, nurodykite jų strypus, kilpas ir sąvaržas, patikrinkite persiklojimus ir įtvirtinimą pagal ACI 318-19 arba EN 1992-1-1 ir sukurkite dirbtuvių brėžinius bei lenkimo žiniaraščius.
keywords: armuotas betonas, armatūra, armavimas, sija, kolona, perdanga, siena, kilpos, sąvaržos, kabliukai, persiklojimai, persiklojimo ilgis, įtvirtinimas, ld, ldh, lbd, apsauginis sluoksnis, tarpas, angų apvadai, tinklai, strypų žymės, lenkimo žiniaraštis, bbs, dirbtuvių brėžinys, ACI 318, EN 1992, Eurokodas 2, IfcReinforcingBar, IFC importas
from: 3835b7ec
---

Skirtukas {{ui:Betonas}} po rodiniu detalizuoja betoninių sijų, kolonų, perdangų ir sienų strypus. Jūs nurodote dydžius ir strypus; DetailCraft išdėsto kiekvieną strypą, sunumeruoja jį, patikrina persiklojimus, įtvirtinimą, apsauginį sluoksnį ir tarpus pagal punktą, iš kurio jie kyla, ir jį nubraižo.

:::warning
DetailCraft detalizuoja jums pateiktus strypus. Jų neprojektuoja. Kiekvienas rezultatas skirtas inžinieriaus patikrinimui.
:::

## Atidarykite skirtuką Betonas

Pasirinkite skirtuką {{ui:Betonas}} po rodiniu. Juostos išdėstyme {{ui:Betonas}} yra skirtuke {{ui:Modeliavimas}} šalia {{ui:Pamatas}}. Naudodami brėžimo stiliaus komandinę eilutę, įveskite {{cmd:CONCRETE}}.

## Pridėkite elementą pagal ašis

Betono elementai dedami ant modelio tinklelio linijų ir lygių, todėl pirmiausia jas nustatykite (kairiajame skydelyje).

1. Skiltyje {{ui:Pridėti pagal ašis}} pasirinkite {{ui:Elementas}}: {{ui:Betoninė sija}}, {{ui:Betoninė kolona}}, {{ui:Perdanga}} arba {{ui:Siena}}.
2. Nurodykite tinklelio linijas ir lygius:
   - sija eina nuo vienos tinklelio sankirtos iki kitos, jos viršus – lygyje;
   - kolona stovi sankirtoje, nuo vieno lygio iki kito;
   - perdanga užpildo stačiakampį tarp dviejų skaitmenimis ir dviejų raidėmis pažymėtų tinklelio linijų, jos viršus – lygyje;
   - siena eina išilgai savo centrinės linijos nuo vienos sankirtos iki kitos, nuo vieno lygio iki kito.
3. Nurodykite dydį ir pasirinkite {{ui:Pridėti}}. Elementas pasirenkamas, o jo laukai atsidaro skydelyje {{ui:Savybės}}.

Kiekvienas elementas pradedamas strypais, kurie yra pradinės reikšmės, ne projektas: pakeiskite juos į inžinieriaus.

## Keiskite strypus

Pasirinkite elementą (rodinyje arba jo pavadinimą skirtuke {{ui:Betonas}}). Skydelis {{ui:Savybės}} rodo:

| Elementas | Ką nustatote |
|---|---|
| Sija | Plotis, gylis, laisvas apsauginis sluoksnis; viršutiniai ir apatiniai strypai (dydis, kiekis, tiesus arba 90° kabliukas galuose); šoniniai strypai; kilpos (dydis, 135° arba 90° kabliukai, pirmosios atstumas nuo atramos paviršiaus, galinės zonos ilgis ir žingsnis, tarpas tarp jų); atramų ilgiai; persiklojimų ilgiai |
| Kolona | Plotis, gylis skersai, pasukimas, apsauginis sluoksnis; išilginiai strypai kiekvienoje pusėje; sąvaržos kaip kilpoms; ką strypai daro viršuje (persiklojimas su kolona virš, kabliukas į grindis arba sustojimas) |
| Perdanga | Storis, dydis, viršus, apsauginiai sluoksniai; apatinis ir viršutinis tinklas kiekviena kryptimi (dydis ir žingsnis); U formos strypai aplink kraštus; angų apvadų strypai; angos |
| Siena | Storis, apsauginis sluoksnis, vienas ar du sluoksniai, horizontalūs ir vertikalūs strypai, U formos strypai galuose, vertikalūs strypai, persiklojantys viršuje arba ne, angų apvadų strypai, angos |

Kiekvienas pakeitimas yra vienas anuliavimo žingsnis. Pakeitimas, kurio negalima įgyvendinti, atmetamas, o būsenos juostoje nurodoma priežastis, pavyzdžiui: „Anga netelpa elemento viduje su jo apsauginiu sluoksniu.“

Kilpos ir sąvaržos uždaros, abu kabliukai – viename kampe. Sijos strypai galuose įeina į betoninę koloną iki tolimojo kolonos paviršiaus minus apsauginis sluoksnis; kur kolonos nėra, nurodykite {{ui:Atramos ilgis pradžioje (mm)}} ir {{ui:Atramos ilgis pabaigoje (mm)}}.

## Persiklojimai ir įtvirtinimas

Strypai, ilgesni nei {{ui:Sandėlio strypo ilgis (mm)}} (pradžioje 12000), supjaunami į lygaus ilgio gabalus, persiklojantys. Lentelėje {{ui:Persiklojimai ir įtvirtinimas}} išvardyti visi persiklojimai ir visi įtvirtinimai: ko reikia, su punktu ir jo sąlygomis, ir ką turi detalė.

- Persiklojimo ilgis 0 reiškia „kiek reikia“: ilgis, kurį nurodo norma, suapvalintas iki 25 mm.
- Įveskite savo persiklojimo ilgį, kad jį naudotumėte vietoj. Jei jis trumpesnis nei reikia, tai problema (žr. žemiau), ir lentelėje pažymimas *.
- Įtvirtinimas matuojamas nuo atramos paviršiaus iki strypo galo atramos viduje. Sija be žinomos atramos apie tai praneša vietoj patikrinimo.
- Kolona, stovinti ant pamato, persiklojasi su pamato išsikišančiais strypais, o su kita kolona – su tos kolonos strypais: jų persiklojimas taip pat tikrinamas.

**ACI 318-19** (SI): tiesūs strypai tempimui 25.4.2.3 (lentelė su ψt, ψe, ψg, λ), standartiniai kabliukai 25.4.3.1 (ψr 1.6 ir ψo 1.25 imami, nebent žinoma kitaip), strypai gniuždymui 25.4.9.2, tempiamieji persiklojimai 25.5.2.1 (B klasė arba A klasė parametruose), gniuždomieji persiklojimai 25.5.5.1.

**EN 1992-1-1**: įtvirtinimas 8.4.4 su fbd iš 8.4.2 (geras arba prastas sukibimas), persiklojimai 8.7.3 su α6 kiekvienam strypui, persiklojančiam vienoje pjūvyje. γc, γs ir αct pradedami rekomenduojamomis reikšmėmis; nustatykite savo nacionalinį priedą.

## Patikrinimai

Kiekvienas nesėkmingas patikrinimas yra skydelyje „Problemos“ (šaltinis {{ui:Armatūros patikrinimai}}) ir elemento sąraše {{ui:Patikrinimai}}:

| Patikrinimas | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Apsauginis sluoksnis | 20.5.1.3.1 lentelė, pagal poveikį | Mažiausias sukibimas, 4.2 lentelė (tvarumo apsauginį sluoksnį nurodote jūs) |
| Laisvas strypų tarpas | 25.2.1 (sijos, perdangos, sienos), 25.2.3 (kolonos) | 8.2 (2) |
| Kilpų žingsnis | 9.7.6.2.2 | 9.2.2 (6) |
| Mažiausias sijos plienas | 9.6.1.2 | 9.2.1.1 (1) |
| Sijos šoniniai strypai, kai gylis didesnis nei 900 mm | 9.7.2.3 | netikrinama |
| Kolonos plieno santykis, strypų skaičius | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Sąvaržos: žingsnis, dydis, skersinės sąvaržos | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Perdangos žingsnis, mažiausias plienas | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Sienos žingsnis, mažiausias plienas, du sluoksniai | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Persiklojimai, įtvirtinimas | kaip aukščiau | kaip aukščiau |

Užpildo dydis nežinomas, todėl laisvas tarpas tikrinamas be jo.

## Angos, angų apvadai ir kraštiniai strypai

Pasirinkite {{ui:Pridėti angą}} po pasirinkta perdanga ar siena ir nustatykite jos vietą bei dydį. Strypai, kuriuos ji kerta, sustoja per apsauginį sluoksnį nuo jos krašto. Angų apvadų strypai pridedami iš kiekvienos pusės tame pačiame sluoksnyje, perimdami pusę nukirstų strypų ploto, vienu įtvirtinimo ilgiu už angos. Tai DetailCraft pradinė taisyklė, ne normos punktas: pakeiskite {{ui:Angų apvadų strypai}} į inžinieriaus. Kampiniai strypai nepridedami.

U formos strypai aplink perdangos laisvus kraštus ir sienos galuose turi kojeles, kurių ilgis – vienas persiklojimo ilgis.

## Strypų žymės ir lenkimo žiniaraštis

Vienodi strypai turi vieną žymę: pamatai išlaiko F žymes (5F1), sijos gauna B, kolonos C, perdangos S ir sienos W (7B1, 8C1, 4S2). Skirtukas {{ui:Lenkimo žiniaraštis}} ir jo CSV dabar išvardija visus konstrukcijos strypus, pirmiausia pamatus. {{ui:Išvestis}} › {{ui:Daugiau}} › {{ui:Lenkimas}} atsisiunčia jį.

## Dirbtuvių brėžiniai

Pasirinkite {{ui:Išvestis}} › {{ui:Daugiau}} › {{ui:Armavimo brėžiniai}}, {{ui:Armavimo brėžiniai}} skirtuke {{ui:Betonas}} arba {{ui:Dirbtuvių brėžinys}} šalia vieno elemento. Kiekvienas elementas gauna lapą su fasadu (perdangai – planu), rodančiu kiekvieną strypą ir jo žymę, kilpų ar sąvaržų zonas ir matuojamus persiklojimus, ir pjūvį viduryje; tada strypų lenkimo lapai išvardija kiekvieną žymę su jos formos eskizu, matmenimis, kiekiu, pjovimo ilgiu ir svoriu.

Lapai kiekvieną kartą sukuriami iš modelio ir vėl po kiekvieno pakeitimo, kol langas atviras: antraštės blokas nurodo modelio nuorodą. Įrašykite {{ui:Šis lapas kaip PDF}} arba {{ui:Visi lapai kaip PDF}}.

## Strypai iš IFC failo

{{ui:Failas}} › {{ui:Importuoti IFC}} dabar skaito IfcReinforcingBar: išilgai centrinės linijos išlenktas diskas grįžta kaip tiesios kojelės ir lenkimai, su savo skersmeniu, žyme ir elementu, kuris jį laiko. Strypai išlaikomi tokie, kokie buvo perskaityti (jie nepaverčiami sijos ar perdangos taisyklėmis), rodomi rodinyje, išvardijami lenkimo žiniaraštyje ir vėl įrašomi IFC eksportu. Importo ataskaitoje nurodoma, kiek strypų perskaityta, kokių dydžių, kiek elementuose, ir kas praleista bei kodėl.

Tame faile sija, kolona, perdanga ar siena, kurie laiko strypus arba kurių medžiaga yra betonas, nelaikomi plienu; ataskaitoje tai nurodoma. DetailCraft savo IFC eksportas perduoda kiekvieno betoninio elemento apibrėžimą, todėl jis grįžta kaip pats save, o jo strypai iš jo sukuriami iš naujo.

:::note
Konstrukcijų projektavimo programų failų (ne IFC) skaitymas nėra įdiegtas: eksportuokite iš jos IFC.
:::

## IFC eksportas

Betoninės sijos, kolonos, perdangos (su angomis) ir sienos eksportuojamos kaip IfcBeam, IfcColumn, IfcSlab ir IfcWall, kiekviena su savo strypais kaip IfcReinforcingBar (pagrindiniai strypai, kilpų ir sąvaržų jungtys, kraštiniai strypai), prie jo sujungtais, kiekvienas strypas – išilgai centrinės linijos išlenktas diskas su tikrais lankais lenkimuose, savo žyme ir pjovimo ilgiu.
