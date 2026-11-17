---
title: Dodavanje podložnih ploča i sidrenih vijaka
summary: Stavite zavarenu podložnu ploču sa četiri sidrena vijka ispod stupa, postavite njezine dimenzije i kopirajte je na svaki sličan stup.
keywords: podložna ploča, baseplate, sidreni vijci, sidreni ankeri, vijci za učvršćenje, baza stupa, temeljni vijci, slično
from: 619ebc64
---

Spoj s podložnom pločom stavlja ploču ispod stupa, skraćuje stup za debljinu ploče, zavari ih zajedno i dodaje četiri sidrena vijka kroz rupe u ploči.

:::warning
Dimenzije su početne vrijednosti, a ne projekt. DetailCraft ne provjerava nosivost, čvrstoću sidrenih vijaka ni ukotvljenje.
:::

## Dodaj podložnu ploču

1. Odaberite alat {{ui:Odaberi}} ({{key:V}}) i kliknite stup. Mora biti vertikalan.
2. Odaberite {{ui:Podložna ploča}} u grupi {{ui:Povezivanje}}, ili {{ui:Dodaj podložnu ploču}} na panelu {{ui:Svojstva}}.
3. Statusna traka kaže „Dodana je podložna ploča s četiri sidrena vijka.“ Novi spoj je odabran.

Stup može imati jednu podložnu ploču. Ako je već ima, statusna traka kaže „Ovaj stup već ima podložnu ploču.“

## Promjena

Odaberite podložnu ploču (kliknite ploču ili vijak). Pod {{ui:Ploča, vijci i zavar (mm)}}:

| Postavka | Zadano | Što radi |
|---|---|---|
| Debljina ploče | 25 | Stup se skraćuje za toliko |
| Duljina ploče | 450 | Duž dubine stupa |
| Širina ploče | 400 | Preko stupa |
| Promjer sidrenog vijka | 20 | Veličina sidrenog vijka |
| Promjer rupe | 33 | Rupa u ploči |
| Razred vijka | F1554 Gr 36 | Razred sidrenog vijka, kao tekst |
| Razmak vijaka (duž dubine) | 350 | Između središta vijaka, duž duljine ploče |
| Razmak vijaka (poprijeko) | 300 | Između središta vijaka, poprijeko |
| Istak vijka iznad ploče | 100 | Od gornje strane ploče do vrha vijka |
| Ukopavanje vijka ispod ploče | 450 | Od donje strane ploče dolje u beton |
| Veličina kutnog zavara | 8 | Oko cijele baze stupa |
| Materijal ploče | A36 | Tekst |
| Zazor za injekcijsku smjesu | 0 | Razmak između vrha betona i donje strane ploče |
| Ukrute | Nema | Odaberite Nema, 2 (u liniji s hrptom) ili 4 (i okomito na nju); vidi dolje |
| Debljina i visina ukrute | 12, 150 | |
| Dubina smičnog zuba | 0 | Koliko zub seže ispod ploče; 0 = bez zuba |
| Debljina i širina smičnog zuba | 25, 150 | |
| Pločaste podloške | Nema | Na svakom vijku ili nijedna |
| Veličina i debljina podloške | 0, 0 | 0 = najmanja vrijednost iz AISC Design Guide 1 za vijak |

Duljina vijka = ukopavanje + zazor za injekcijsku smjesu + debljina ploče + istak. Sa zadanim vrijednostima to je 575 mm.

## Detalji baze: injekcijska smjesa, ukrute, smični zub, podloške

Sve četiri opcije isključene su na novoj podložnoj ploči i na podložnim pločama iz modela izrađenih prije DetailCraft 0.4.

- **Zazor za injekcijsku smjesu.** Ploča je za toliko iznad vrha betona, a vijci su za toliko dulji. AISC Design Guide 1 (2.10) preporučuje 1 in. na završenom podu i 1½ do 2 in. na temelju ili stupu; više za velike ploče i ploče sa smičnim zubom.
- **Ukrute.** Okomite ploče zavarene na stup i ploču, od lica stupa do ruba ploče, kao pravokutnici (još bez skošenja ili suženja). **2** stoje u liniji s hrptom, izvan svake pojasnice; **4** dodaje još dvije okomite na hrbat, između pojasnica, do bočnih strana ploče. Na cijevnom stupu stoje na sredini svake strane. Svaka je zavarena na stup i ploču s obje strane.
- **Smični zub.** Ploča zavarena uokolo ispod podložne ploče, u liniji s dubinom stupa, centrirana. DetailCraft upozorava ako nije dublja od zazora za injekcijsku smjesu. Ne izrezuje džep u temelju; zato [provjera sudara](topic:clash-check) izostavlja zub i temelj.
- **Pločaste podloške.** Četvrtasta pločasta podloška na svakom vijku, na podložnoj ploči, navedena u sklopu stupa kao slobodna (isporučuje se uz stup, nije zavarena: Design Guide 1, 2.6). Uz veličinu i debljinu 0, DetailCraft uzima najmanju podlošku iz AISC Design Guide 1, 2. izd., tablica 2.3 za vijak; metrički vijak dobiva sljedeću veću inčnu veličinu (vijak M20 dobiva red 7/8 in.: 2½ in. × 5/16 in.). Panel svojstava prikazuje upotrijebljenu veličinu. Rupa podloške je promjer vijka + 1/16 in.: to je izbor DetailCraft-a, jer tablica ne daje rupu. DetailCraft upozorava kada vijci možda ne strše dovoljno za podlošku i maticu (istak manji od debljine podloške + promjera vijka).

Tablica 2.3 iz Design Guide 1 također preporučuje rupu za vijak u ploči: 1-5/16 in. za vijak ¾ in., 1-9/16 in. za ⅞ in., 1-13/16 in. za 1 in. DetailCraft ne mijenja vašu veličinu rupe.

Upozorenja se pojavljuju i kada su rupe za vijke bliže rubu ploče od 1.2 × promjera rupe, kada vijci padaju unutar obrisa stupa ili kada je ploča manja od stupa.

## Kopiranje na slične stupove

1. Odaberite podložnu ploču.
2. Odaberite {{ui:Primijeni na slične (n)}}, ili {{ui:Slično}} u izborniku {{ui:Više}} grupe {{ui:Povezivanje}}.
3. Svaki okomiti stup istog profila koji nema podložnu ploču i ne stoji na drugom stupu dobije kopiju.

## Podložne ploče i temelji

Podložna ploča ne treba temelj, a temelj ne zna za podložnu ploču iznad sebe: sidreni vijci nisu povezani s armaturom temelja. Temelje postavite pomoću {{ui:Temelj}}; vidi [Postavljanje temelja s armaturom](topic:footings-and-rebar).
