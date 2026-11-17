---
title: Įklijuoti nukopijuotą sritį kaip nuorodinį paveikslėlį
summary: Nukopijuokite dalį PDF lapo MarkupCraft ir įklijuokite į DetailCraft tikru dydžiu, gulintį ant lygio po plienu, kad galėtumėte modeliuoti virš jo.
keywords: paveikslėlis, nuorodinis paveikslėlis, pagrindas, fonas, kopijuoti sritį, markupcraft, pdf, perbraižymas, tikras dydis, mastelis, nepermatomumas, uždanga
from: 0c48445f
---

MarkupCraft įrankis „Kopijuoti sritį“ nukopijuoja dalį lapo kaip paveikslėlį, kuris žino savo dydį. Įklijuokite jį į DetailCraft, ir jis guli plokščias ant lygio, tikru dydžiu, po tinkleliu ir plienu, todėl galite išdėstyti elementus virš plano iš brėžinių.

## Įklijuokite

1. MarkupCraft nukopijuokite sritį su {{ui:Daugiau}} › {{ui:Kopijuoti puslapio sritį…}}, tada {{ui:Kopijuoti}} (arba {{ui:Kopijuoti kaip permatomą uždangą}}, kuri padaro popierių permatomą).
2. DetailCraft (toje pačioje naršyklėje) paspauskite {{key:Mod+V}} arba pasirinkite {{ui:Įklijuoti}}.

Paveikslėlis atsiranda tinklelio viduryje lygyje, rodomame plane (3D ar fasado rodinyje – žemiausiame lygyje), ir yra pasirinktas. Būsenos juostoje nurodomas jo dydis.

- **Tikras dydis:** kai lape buvo brėžinio mastelis, vienas pikselis nubrėžiamas kaip ilgis, kurį jis rodo brėžinyje.
- **Popieriaus dydis:** kai lape nebuvo mastelio, paveikslėlis yra toks didelis, koks buvo sritis popieriuje, ir apie tai rašoma būsenos juostoje. Norėdami jį pamastelinti, įveskite naują **mm vienam pikseliui** laukelyje {{ui:Savybės}}.

Sritis, nukopijuota kaip uždanga, prasideda tuo nepermatomumu, kuriuo buvo nukopijuota.

{{key:Mod+V}} įklijuoja tai, ką nukopijuojate paskutinį: sritį iš MarkupCraft arba DetailCraft nukopijuotus elementus ir pamatus. Jei po srities į mainų sritį buvo nukopijuotas kitas paveikslėlis (iš kitos programos), nieko neįklijuojama; nukopijuokite sritį dar kartą.

## Perkelkite, keiskite ir naikinkite

- Spustelėkite paveikslėlį, kad jį pasirinktumėte (pirmiausia pasirenkama viskas, kas yra priešais jį). Mėlynas kontūras rodo, kad jis pasirinktas.
- Vilkite jį, kad perkeltumėte per lygį. Jo vidurys ir kampai prisitraukia prie tinklelio sankirtų.
- {{ui:Savybės}} įveskite, kur turi būti jo vidurys (x, y) ir lygis, kuriame jis guli (z), taip pat jo **mm vienam pikseliui** ir **nepermatomumas**.
- {{key:Delete}} arba {{ui:Naikinti}} pašalina jį.

Kiekvienas įklijavimas, perkėlimas, keitimas ir naikinimas yra vienas žingsnis: {{key:Mod+Z}} jį atšaukia.

Paveikslėlis įrašomas modelio faile, todėl atsidaro kartu su modeliu. Tai tik nuoroda: jo nėra brėžiniuose, eksportuose, medžiagų sąraše ar kopijoje.
