---
title: Suvirinių tikrinimas ten, kur elementai susijungia
summary: Atlikę projektavimo patikrinimą, išbandykite kampinius ir stumiamuosius suvirinimus aplink kiekvieną elementą ten, kur jis susijungia su kitu elementu ar atrama, pagal AISC 360-16 J skyrių arba EN 1993-1-8, ir matykite, kuri suvirinių grupė labiausiai naudojama bei kuriame derinyje. Tai pagalba, kol inžinierius neperžiūrės rezultatų.
keywords: suvirinimas, suvirinimai, suvirinių patikrinimas, kampinė siūlė, stumiamasis suvirinimas, pilnas įvirinimas, AISC 360, EN 1993-1-8, suvirinių grupė, panaudojimas, atsparumas, jungtis, sujungimas, konstrukcinis, inžinierius
from: e8eebbe6
---

Skirtuke „{{ui:Analizė}}“, bloke „{{ui:Projektavimo patikrinimai}}“ esantis „{{ui:Suvirinių patikrinimas}}“ naudoja paskutinio išspręsto rėmo jėgas ir jūsų sudarytus stiprumo derinius bei patikrina suvirinimą aplink kiekvieną elementą kiekvienoje jungtyje: ten, kur elementas susijungia su kitu elementu arba stovi ant atramos.

:::warning
Tai **pagalba, kol inžinierius neperžiūrės rezultatų**. Tikrinamas suvirinimas, nubrėžtas aplink visą skerspjūvį kaip viena grupė, pagal paties rėmo galinių galų jėgas. Nenuskaitomas dirbtuvių brėžiniuose nubrėžtų suvirinimų dydis ar ilgis; netikrinami varžtai, plokštės, atrama, bloko šlytis ar atvertimas (prying). Jos rezultatai nėra patvirtinimas antspaudu.
:::

## Paleidimas

1. Išspręskite rėmą skirtuke „{{ui:Analizė}}“, bloke „{{ui:Projektavimo patikrinimai}}“ pasirinkite „{{ui:Projektavimo norma}}“ ir spauskite „{{ui:Sudaryti derinius}}“ (suvirinių patikrinimui reikia tų pačių stiprumo derinių).
2. Bloke „{{ui:Suvirinių patikrinimas}}“ nustatykite „{{ui:Kampinės siūlės kraštinė (mm, 0 = sienelė, daugiausia 8)}}“. 0 reiškia, kad kraštinė seka plonesnę skerspjūvio sienelę, iki 8 mm. Pagal AISC normą „{{ui:Suvirinio siūlės metalo stiprumas F_EXX (MPa)}}“ yra suvirinio metalo stiprumas (482.6 MPa atitinka E70 elektrodą). Pagal EN 1993 plieno markė nurodo suvirinio metalo stiprumą ir koreliacijos koeficientą.
3. Spauskite „{{ui:Tikrinti suvirinius}}“.

Kiekviena lentelės eilutė yra viena suvirinių grupė (elemento jungties galas). Skaičiai: jos lemiančio patikrinimo **panaudojimo koeficientas**, būsena (atitinka arba neatitinka) ir kuris patikrinimas bei punktas lėmė kuriame deriniu. Grupė, kurios patikrinimas negali įvertinti, nurodo priežastį (nėra plieno markės, nėra koreliacijos koeficiento markei EN 1993-1-8 4.1 lentelėje, nėra suvirinimo tame profilyje) vietoj skaičiaus.

Pakeitus kraštinę ar suvirinio metalą arba redagavus modelį, lentelė išvalomas: ji buvo skirta senoms reikšmėms. Spauskite „{{ui:Tikrinti suvirinius}}“ dar kartą.

## Kas tikrinama

- **ASCE 7 + AISC 360:** kampinių suvirinių metalas (apkrovos kampas iki suvirinio skaičiuojamas, J2.4), pagrindinio metalo šlyties trūkis (J4.2) ir pilnai įvirinti stumiamieji suvirinimai (Table J2.5).
- **EN 1990 + EN 1993:** kampiniai suvirinimai supaprastintu metodu pagal EN 1993-1-8 4.5.3.3 ir stumiamieji suvirinimai pagal 4.7.1.
- Projektavimo įspėjimai, lyginant su mažiausia ir didžiausia kraštine bei mažiausiu ilgiu, nurodant palygintą reikšmę.

Suvirinių grupė laikoma linijiniu pjūviu ir apkraunama elastiniu vektorių metodu: kiekviena suvirinio dalis perima jėgą iš elemento ašinės jėgos, abiejų šlyties jėgų, sukimo ir abiejų lenkimo momentų, sudedamų kaip vektoriai.

## Kas netikrinama

Dalinio įvirinimo suvirinimai, įstrižos kampinės siūlės, kaiščių ir angų suvirinimai, pertraukiami suvirinimai, momentinio centro metodas, EN krypties metodas, nuovargis ir pagrindinio metalo bloko šlytis dar neįgyvendinti. Kai kurios standartų konstantos buvo perrašytos iš standartų ir dar nebuvo palygintos su spausdinta kopija; ataskaitoje nurodyta, iš kur paimtas kiekvienas skaičius („{{ui:Ataskaita (PDF)}}“ įgauna suvirinimo lenteles, kai patikrinimas atliktas). Žr. [Plieninių elementų tikrinimas](topic:design-checks) ir [Dar neįgyvendinta](topic:not-built-yet).
