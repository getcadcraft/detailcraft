---
title: Dodaj temeljne ploče i sidrene šipke
summary: Postavi zavarenu temeljnu ploču s četiri sidrene šipke ispod stuba, podesi dimenzije i kopiraj je na svaki sličan stub.
keywords: temeljna ploča, baseplate, sidrene šipke, sidreni vijci, učvršćujući vijci, baza stuba, temeljni vijci, slično
from: 619ebc64
---

Veza s temeljnom pločom postavlja ploču ispod stuba, skraćuje stub za debljinu ploče, zavaruje njih dvoje i dodaje četiri sidrene šipke kroz rupe u ploči.

:::warning
Dimenzije su početne vrijednosti, a ne projekat. DetailCraft ne provjerava nosivost, čvrstoću šipki ni dubinu ukopavanja.
:::

## Dodaj temeljnu ploču

1. Uključi alat {{ui:Odaberi}} ({{key:V}}) i klikni na stub. On mora biti vertikalan.
2. Izaberi {{ui:Temeljna ploča}} u grupi {{ui:Povezivanje}}, ili {{ui:Dodaj podložni lim}} u panelu {{ui:Svojstva}}.
3. Statusna traka kaže „Temeljna ploča je dodana sa četiri sidrene šipke.“ Nova veza je odabrana.

Stub može imati jednu temeljnu ploču. Ako je već ima, statusna traka kaže „Ovaj stub već ima temeljnu ploču.“

## Promijeni je

Odaberi temeljnu ploču (klikni na ploču ili šipku). Pod {{ui:Lim, vijci i var (mm)}}:

| Postavka | Podrazumijevano | Šta radi |
|---|---|---|
| Debljina lima | 25 | Stub se skrati za toliko |
| Dužina lima | 450 | Duž dubine stuba |
| Širina lima | 400 | Preko stuba |
| Prečnik šipke | 20 | Veličina sidrene šipke |
| Prečnik rupe | 33 | Rupa u ploči |
| Klasa vijaka | F1554 Gr 36 | Klasa šipke, kao tekst |
| Razmak šipki (po dubini) | 350 | Između osa šipki, duž dužine ploče |
| Razmak šipki (poprečno) | 300 | Između osa šipki, poprečno |
| Istak šipke iznad ploče | 100 | Od gornje strane ploče do vrha šipke |
| Ukopavanje šipke ispod ploče | 450 | Od donje strane ploče nadolje u beton |
| Veličina kutnog vara | 8 | Po cijelom obodu baze stuba |
| Materijal lima | A36 | Tekst |
| Razmak podlivnog sloja | 0 | Prostor između vrha betona i donje strane ploče |
| Ukrute | Nema | Izaberi None, 2 (u liniji sa hrbatom) ili 4 (i upravno na njega); vidi dolje |
| Debljina, visina ukrute | 12, 150 | |
| Dubina smicajnog zuba | 0 | Koliko zub seže ispod ploče; 0 = nema zuba |
| Debljina, širina smicajnog zuba | 25, 150 | |
| Limene podloške | Nema | Na svakoj šipki ili nijedna |
| Veličina, debljina podloške | 0, 0 | 0 = minimum iz AISC Design Guide 1 za šipku |

Dužina šipke = ukopavanje + razmak podlivnog sloja + debljina ploče + istak. Sa podrazumijevanim vrijednostima to je 575 mm.

## Detalji baze: podlivni sloj, ukrute, smicajni zub, podloške

Sve četiri su isključene na novoj temeljnoj ploči i na temeljnim pločama iz modela napravljenih prije DetailCraft 0.4.

- **Razmak podlivnog sloja.** Ploča je toliko iznad vrha betona, a šipke su duže za isto toliko. AISC Design Guide 1 (2.10) preporučuje 1 in. na završenom podu i 1½ do 2 in. na temelju ili stubu; više za velike ploče i ploče sa smicajnim zubom.
- **Ukrute.** Vertikalni limovi zavareni za stub i ploču, od lica stuba do ivice ploče, kao pravougaonici (još bez skošenja ili suženja). **2** stoje u liniji sa hrbatom, iza svake pojasnice; **4** dodaju dva upravno na hrbat, između pojasnica, do bočnih strana ploče. Na cijevnom stubu stoje na sredini svake strane. Svaka je zavarena za stub i ploču s obje strane.
- **Smicajni zub.** Lim zavaren po cijelom obodu ispod temeljne ploče, u liniji sa dubinom stuba, centriran. DetailCraft upozorava ako nije dublji od razmaka podlivnog sloja. Ne reže džep u temelju; zato [provjera sudara](topic:clash-check) izostavlja zub i temelj.
- **Limene podloške.** Kvadratna limena podloška na svakoj šipki, leži na temeljnoj ploči, navedena u sklopu stuba kao slobodna (isporučena uz stub, nije zavarena: Design Guide 1, 2.6). Uz veličinu i debljinu 0, DetailCraft uzima minimalnu podlošku iz AISC Design Guide 1, 2. izd., tabela 2.3 za šipku; metrička šipka uzima sljedeću veću inčnu veličinu (šipka M20 dobija red 7/8 in.: 2½ in. × 5/16 in.). Panel sa svojstvima pokazuje korišćenu veličinu. Rupa podloške je prečnik šipke + 1/16 in.: to je izbor DetailCraft-a, tabela ga ne daje. DetailCraft upozorava kad šipke možda ne vire dovoljno da bi stali podloška i matica (istak manji od debljine podloške + prečnika šipke).

Design Guide 1, tabela 2.3, takođe preporučuje rupu za šipku u ploči: 1-5/16 in. za šipku od ¾ in., 1-9/16 in. za ⅞ in., 1-13/16 in. za 1 in. DetailCraft ne mijenja vašu veličinu rupe.

Upozorenja se pojavljuju i kad su rupe za šipke bliže od 1.2 × prečnik rupe ivici ploče, kad šipke padnu unutar obrisa stuba ili kad je ploča manja od stuba.

## Kopiraj je na slične stubove

1. Odaberi temeljnu ploču.
2. Izaberi {{ui:Primijeni na slične (n)}}, ili {{ui:Slično}} u meniju {{ui:Više}} grupe {{ui:Povezivanje}}.
3. Svaki vertikalni stub istog profila koji nema temeljnu ploču i ne stoji na drugom stubu dobija kopiju.

## Temeljne ploče i temelji

Temeljnoj ploči ne treba temelj, a temelj ne zna za temeljnu ploču iznad sebe: sidrene šipke nisu vezane za armaturu temelja. Postavi temelje pomoću {{ui:Temelj}}; vidi [Postavi temelje s armaturom](topic:footings-and-rebar).
