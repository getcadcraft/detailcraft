---
title: Medinių ir plonasienių karkaso sienelių paneliai
summary: Įrenkite sienų, perdangų ir stogų panelius iš medienos ar plonasienio plieno su kiekvienu gabalu, pjovimo sąrašu, dirbtuvių brėžiniu ir reikalinga medžiaga.
keywords: karkasas, mediena, pjautinė mediena, mediena, plonasienis plienas, šaltai formuotas, stovas, sija, kraigas, perdaba, pagrindinis stovas, papildomas stovas, trumpas stovas, pjovimo sąrašas, dirbtuvių brėžinys, panelis
from: 3e38ffb9
---

Skirtukas {{ui:Karkasas}} įrengia jūsų aprašytus panelius ir pateikia tai, ko reikia karkaso brigadai bei medienos sandėliui. Paneliai įrašomi modelio faile.

:::warning
Dydžiai, žingsnis ir sijos yra jūsų. DetailCraft netikrina, ar stovas tokiu žingsniu laiko tą sieną ir ar sija perdengia tą angą: tai nurodo jūsų normų lentelės ir jūsų inžinierius.
:::

## Panelio pridėjimas

Pasirinkti {{ui:Pridėti sieną}}, {{ui:Pridėti grindis}} arba {{ui:Pridėti stogą}}, tuomet užpildykite matmenis milimetrais, medžiagą (mediena arba plonasienis plienas) ir elemento dydį. Medienos dydžiai – nominalūs pavadinimai su apdirbtais matmenimis (2×4 yra 38 × 89 mm). Plieniniai stovai įvardijami pagal gylį ir storį, pavyzdžiui, `C92-1.2`.

## Sienos

Sienoje yra apatinė juosta, viena ar daugiau viršutinių juostų (plieno atveju – viena bėgelis), galiniai stovai, stovai pagal nurodytą žingsnį ir kiekvienai angai: du pagrindiniai stovai, du papildomi stovai, sija pasirinkto dydžio ir sluoksnių ir trumpi stovai virš sijos (ir po palangės, jei tai langas). Kiekvienai angai nurodykite jos atstumą nuo kairiojo galo, plotį bei angos viršų ir apačią, matuojamus nuo grindų pagrindo; durų apačia – 0.

## Perdangos ir stogai

Perdanga turi sijas per visą plotį išilgai jos tarpatramio, galines sijas abiejuose galuose ir, jei pažymėsite, tarpinius blokus per vidurį tarpatramio. Stogo panelis yra dvišlaitis: pora kraigų pagal nurodytą žingsnį (jų ilgis apima stogo lėkštės iškyšą išilgai šlaito) ir kraigo lenta.

## Ką gausite

Kiekvienas panelis rodo savo gabalus mastelio brėžinyje, kiekvienas gabalas pažymėtas, pateikiamas pjovimo sąrašas pagal žymes ir bendras kiekis. Lentelė {{ui:Reikalingos atsargos}} sudeda visų panelių pjūvius į atsargų ilgius – trumpiausius, kuriuose telpa kiekvieno strypo pjūviai. {{ui:Įrašyti brėžinį dirbtuvėms (SVG)}} įrašo brėžinį; mygtukas {{ui:CSV}} įrašo visus pjovimo sąrašus ir atsargų sąrašą.

## Panelio įdėjimas į modelį

Po kiekvienu panelio nurodykite, kur jis yra (x, y, z milimetrais ir kampą) ir paspauskite {{ui:Įstatyti kaip elementus}}: kiekvienas gabalas tampa modelio elementu su apdirbto dydžio skerspjūviu ir medžiagos svoriu (apie 500 kg/m³ medienai, plienas stovams). Siena eina išilgai kampo nuo savo apatinio kairiojo galo, o jos apačia yra z; perdangos sijos guli taip, kad apatinė pusė būtų z; stogo fasado linija eina išilgai kampo, o z yra viršutinės sienos juostos lygyje. Kiekvienas sijos sluoksnis yra elementas šalia kito. Spaudžiant dar kartą, anksčiau įdėti elementai pakeičiami, o {{ui:Pašalinti įdėtus elementus}} juos pašalina; kiekvienas veiksmas yra vienas atšaukimo žingsnis. {{ui:Analizė}} šiuos elementus praleidžia: jie nėra plieniniai karkaso elementai.

## PDF lapai

{{ui:PDF lapai}} įrašo po vieną A3 lapą kiekvienam panelio: panelį mastelio brėžinyje su visais pažymėtais gabalais, bendrus matmenis, pjovimo sąrašą ir antraštės juostą.

Problemos skirtuke {{ui:Problemos}}: anga per arti sienos galo arba kitos angos, sija, kuri netelpa po viršutinėmis juostomis, gabalas ilgesnis už ilgiausią atsargą.

Skydelis {{ui:Problemos}} taip pat išvardija **Sąveikas (LOD 350)** sienų paneliams ir betoninėms sienoms: anga, kuri išeina už sienos galo ar viršaus, dvi persidengiančios angos ir betoninės sienos anga, platesnė nei 1000 mm, be atraminio strypo. Tai patarimai – tos pačios taisyklės, kurias vykdo BimCraft auditas; plotis yra CadCraft pradinė reikšmė, o ne standartas.
