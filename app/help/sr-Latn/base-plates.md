---
title: Dodavanje baznih limova i ankernih šipki
summary: Postavi zavareni bazni lim sa četiri ankerne šipke ispod stuba, podesi dimenzije i kopiraj ga na svaki sličan stub.
keywords: bazni lim, bazna ploča, ankerne šipke, ankerni zavrtnji, zavrtnji za pričvršćenje, baza stuba, temeljni zavrtnji, slično
from: 619ebc64
---

Veza sa baznim limom stavlja lim ispod stuba, skraćuje stub za debljinu lima, zavari ih zajedno i dodaje četiri ankerne šipke kroz rupe u limu.

:::warning
Dimenzije su polazne vrednosti, a ne projekat. DetailCraft ne proverava pritisak na podlogu, čvrstoću šipki ni dubinu ukopavanja.
:::

## Dodavanje baznog lima

1. Izaberi {{ui:Izaberi}} ({{key:V}}) i klikni na stub. Mora biti vertikalan.
2. Izaberi {{ui:Bazni lim}} u grupi {{ui:Poveži}}, ili {{ui:Dodaj podnu ploču}} na panelu {{ui:Svojstva}}.
3. Statusna traka kaže: „Bazni lim je dodat sa četiri ankerne šipke.“ Nova veza je izabrana.

Stub može imati jedan bazni lim. Ako ga već ima, statusna traka kaže: „Ovaj stub već ima bazni lim.“

## Promena

Izaberi bazni lim (klikni na lim ili šipku). Pod {{ui:Lim, zavrtnji i var (mm)}}:

| Podešavanje | Podrazumevano | Šta radi |
|---|---|---|
| Debljina lima | 25 | Stub se skraćuje za toliko |
| Dužina lima | 450 | Duž dubine stuba |
| Širina lima | 400 | Poprečno na stub |
| Prečnik šipke | 20 | Dimenzija ankerne šipke |
| Prečnik rupe | 33 | Rupa u limu |
| Klasa zavrtnja | F1554 Gr 36 | Klasa šipke, kao tekst |
| Razmak šipki (duž dubine) | 350 | Između osa šipki, duž dužine lima |
| Razmak šipki (poprečno) | 300 | Između osa šipki, poprečno |
| Izlaz šipke iznad lima | 100 | Od gornje ivice lima do vrha šipke |
| Ugrađenost šipke ispod lima | 450 | Od donje strane lima dole u beton |
| Dimenzija ugaonog vara | 8 | Oko cele baze stuba |
| Materijal lima | A36 | Tekst |
| Razmak za malter | 0 | Prostor između vrha betona i donje strane lima |
| Ukrućenja | Nema | Izaberi Nema, 2 (u pravcu hrbata) ili 4 (i upravno na njega); videti dole |
| Debljina, visina ukrućenja | 12, 150 | |
| Dubina ušice za smicanje | 0 | Koliko ušica seže ispod lima; 0 = nema ušice |
| Debljina, širina ušice za smicanje | 25, 150 | |
| Limene podloške | Nema | Na svakoj šipki ili nijedna |
| Dimenzija, debljina podloške | 0, 0 | 0 = minimum iz AISC Design Guide 1 za šipku |

Dužina šipke = ugrađenost + razmak za malter + debljina lima + izlaz. Sa podrazumevanim vrednostima to je 575 mm.

## Detalji baze: malter, ukrućenja, ušica za smicanje, podloške

Sva četiri su isključena kod novog baznog lima i kod baznih limova iz modela napravljenih pre DetailCraft 0.4.

- **Razmak za malter.** Lim stoji toliko iznad vrha betona, a šipke se produže za isto toliko. AISC Design Guide 1 (2.10) predlaže 1 in. na završenom podu i 1½ do 2 in. na temelju ili stubu; više za velike limove i limove sa ušicom za smicanje.
- **Ukrućenja.** Vertikalni limovi zavareni za stub i lim, od lica stuba do ivice lima, kao pravougaonici (još nema ukošenja ni sužavanja). **2** stoje u pravcu hrbata, iza svakog pojasa; **4** dodaju dva upravno na hrbat, između pojasa, do bočnih ivica lima. Kod cevastog stuba stoje na sredini svake strane. Svako je zavareno za stub i lim sa obe strane.
- **Ušica za smicanje.** Lim zavaren sa svih strana ispod baznog lima, u pravcu dubine stuba, centriran. DetailCraft upozorava ako nije dublja od razmaka za malter. Ne seče džep u temelju; [provera sudara](topic:clash-check) zbog toga ostavlja ušicu i temelj van provere.
- **Limene podloške.** Kvadratna limena podloška na svakoj šipki, koja leži na baznom limu, navedena u sklopu stuba kao rasuta (isporučuje se uz stub, nije zavarena: Design Guide 1, 2.6). Sa dimenzijom i debljinom 0, DetailCraft uzima najmanju podlošku iz AISC Design Guide 1, 2. izd., tabela 2.3 za šipku; metrička šipka dobija sledeću veću inčnu dimenziju (šipka M20 dobija red za 7/8 in.: 2½ in. × 5/16 in.). Panel sa svojstvima prikazuje korišćenu dimenziju. Rupa podloške je prečnik šipke + 1/16 in.: to je izbor DetailCraft-a, tabela ga ne daje. DetailCraft upozorava kada šipke možda ne vire dovoljno da stanu podloška i matica (izlaz manji od debljine podloške + prečnika šipke).

AISC Design Guide 1, tabela 2.3, takođe preporučuje rupu za šipku u limu: 1-5/16 in. za šipku ¾ in., 1-9/16 in. za ⅞ in., 1-13/16 in. za 1 in. DetailCraft ne menja vašu dimenziju rupe.

Upozorenja se pojavljuju i kada su rupe za šipke bliže od 1.2 × prečnik rupe do ivice lima, kada šipke padnu unutar konture stuba ili kada je lim manji od stuba.

## Kopiranje na slične stubove

1. Izaberi bazni lim.
2. Izaberi {{ui:Primeni na slične (n)}}, ili {{ui:Slično}} u meniju {{ui:Više}} grupe {{ui:Poveži}}.
3. Svaki vertikalni stub istog profila koji nema bazni lim i ne stoji na drugom stubu dobija kopiju.

## Bazni limovi i temelji

Bazni lim ne zahteva temelj, a temelj ne zna za bazni lim iznad sebe: ankerne šipke nisu vezane za šipke armature temelja. Postavi temelje sa {{ui:Temelj}}; videti [Postavljanje temelja sa armaturom](topic:footings-and-rebar).
