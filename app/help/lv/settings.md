---
title: DetailCraft iestatījumi
summary: Sākt jaunus elementus kā ASV vai Eiropas profilus, iestatīt, cik tālu dublēšana pārvieto kopiju, izvēlēties, vai kopijas paņem savus savienojumus, un rādīt vai slēpt skrūves 3D skatā.
keywords: iestatījumi, preferences, lapas izmērs, papīra izmērs, rasējumi, opcijas, tērauds, AISC, EN, ASV profili, Eiropas profili, noklusējuma profils, marka, S355, A992, dublēšanas nobīde, ielīmēšanas nobīde, kopēt savienojumus, skrūves, enkurstieņi, slēpt skrūves, atiestatīt
from: e46cea57
---

Atveriet {{ui:Iestatījumi}} ar zobrata ikonu lietotnes joslā vai ar {{key:Mod+,}}. Pirmajā cilnē {{ui:DetailCraft}} ir šai lietotnei piederošie iestatījumi; {{ui:Vispārīgi}} ir tie, ko kopīgi izmanto katra CadCraft lietotne (motīvs, rīkjosla, paneļi). DetailCraft iestatījumi pastāv tikai lietotnē: tos mainiet šeit, tie stājas spēkā uzreiz, un šis pārlūks tos atceras. Tie netiek saglabāti jūsu modeļa failā.

## Jauni elementi

Ar kādiem profiliem un tērauda markām novietošanas rīki sākas:

| Rīks | ASV profili (AISC), A992 | Eiropas profili (EN), S355 |
|---|---|---|
| {{ui:Sija}} | W16x26, A992 | IPE300, S355 |
| {{ui:Kolonna}} | W12x50, A992 | HEB200, S355 |
| {{ui:Saite}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plāksne}} | A36 | S355 |

Sākumā ir ASV profili. Eiropas izvēle saitēm izmanto HEA160, jo DetailCraft EN katalogā vēl nav dobo profilu ([Profilu katalogs](topic:profile-catalog)). Jūs joprojām varat izvēlēties jebkuru profilu un tērauda markas nākamajai detaļai panelī {{ui:Rekvizīti}}, kamēr ir ieslēgts novietošanas rīks. Modelī jau esošie elementi paturē savu profilu un tērauda marku.

## Dublēšana un ielīmēšana

- **Nobīde (mm)**: x, y un z. {{ui:Dublēt}} ({{key:Mod+D}}) novieto kopiju tik tālu no oriģināla, un forma {{ui:Ielīmēt ar nobīdi (mm, no oriģināla)}} sākas ar to. Tā sākas ar 6000, 0, 0: viens 6 m lauks gar numurētajiem režģiem. Iestatiet to uz savu lauka soli vai uz līmeņa augstumu z, lai kopētu stāvu augšup.
- **Kopēt galaplāksnes un balstplāksnes kopā ar elementiem** (sākumā ieslēgts): savienojums tiek pārnests kopā ar kopiju tikai tad, kad tiek kopēts katrs elements, ko tas savieno. Atslēdziet to, lai kopētu elementus un pamatus bez to savienojumiem, piemēram, lai kopijai izmēģinātu citu savienojumu.

Skatiet [Kopēšana, ielīmēšana un dublēšana](topic:copy-paste).

## 3D skats

**Rādīt skrūves un enkurstieņus** (sākumā ieslēgts). Atslēdziet, lai tos paslēptu skatā un redzētu caurumus un plāksnes pārblīvētā mezglā. Paslēptās skrūves nevar noklikšķināt; noklikšķiniet uz plāksnes, lai atlasītu savienojumu. Materiālu saraksts, rasējumi un katrs eksports joprojām iekļauj katru skrūvi un enkurstieni.

## Stūra indikators

Kas rādās 3D skata stūrī: **Skata kubs** (sākumā; augšā pa labi — noklikšķiniet uz virsmas, malas vai stūra, lai skatītu no turienes, velciet to, lai orbitētu, velciet tā kompasa gredzenu, lai pagrieztu modeli), **Asu ikona** (neliels X, Y, Z marķieris apakšā pa kreisi, kas pagriežas kopā ar skatu: X sarkans, Y zaļš, Z zils) vai **Nav**. Tikai skatā {{ui:3D}}; {{ui:Plāns}} un {{ui:Fasāde}} neviens no tiem nerāda. Skatiet [Skata kubs](topic:view-cube).

## Atiestatīšana

{{ui:Atiestatīt DetailCraft iestatījumus}} dialoga apakšā atjauno šos sākotnējos iestatījumus (ASV profili, nobīde 6000, 0, 0, savienojumi kopēti, skrūves rādītas) kopā ar {{ui:Vispārīgi}} iestatījumiem.

## Rasējumi

**Lapas izmērs**: lapu rasējumi un darbnīcas rasējumi tiek veidoti uz ainavas orientācijas lapas: A4, A3 (sākumā), A2, A1, ANSI B, ANSI C vai ANSI D. Logos {{ui:Rasējumi}} un darbnīcas rasējumi ir tas pats saraksts. Skatiet [Vispārējā izkārtojuma un montāžas rasējumi](topic:drawings).

## Stiegrojums

- **ASTM stieņu nosaukumi**: #3 līdz #11 vai mīkstie metriskie #10 līdz #36 tiem pašiem stieņiem.
- **Liekšanas specifikācijas formas kodi**: DetailCraft S, L, U; ACI 315 tipi; vai BS 8666 formas kodi. Skatiet [Stiegrojuma atsauce](topic:rebar-reference).

## Atlasīšana velkot

**Taisnstūris** (kā līdz šim) vai **Lasso**: brīvroku līnija, ar {{key:Space}} pārslēdzot starp iekšpusi, skaršanu un žogu, kamēr velkat. Skatiet [Atlase ar logu](topic:select-and-change#select-with-a-window).
