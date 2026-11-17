---
title: DetailCraft'i sätted
summary: Alusta uusi elemente USA või Euroopa profiilidena, sea, kui kaugele Dubleeri nihutab koopiat, vali, kas koopiad toovad kaasa oma ühendused, ning näita või peida poldid 3D-vaates.
keywords: sätted, eelistused, lehe suurus, paberi suurus, joonised, suvandid, teras, aisc, en, euroopa, USA kujud, meetermõõdus kujud, vaikeprofiil, klass, S355, A992, dubleerimise nihe, kleepimise nihe, kopeeri ühendused, poldid, ankruvardad, peida poldid, lähtesta
from: e46cea57
---

Ava {{ui:Sätted}} rakenduseriba hammasrattaga või {{key:Mod+,}}. Esimene vahekaart, {{ui:DetailCraft}}, sisaldab selle rakenduse sätteid; {{ui:Üldine}} sisaldab neid, mida kõik CadCraft'i rakendused jagavad (teema, tööriistariba, paneelid). DetailCraft'i sätted kehtivad ainult rakenduses: muudad neid siin, need jõustuvad kohe ja see brauser mäletab neid. Neid ei salvestata sinu mudelifaili.

## Uued elemendid

Millised profiilid ja klassid paigutustööriistad alustavad:

| Tööriist | USA kujud (AISC), A992 | Euroopa kujud (EN), S355 |
|---|---|---|
| {{ui:Tala}} | W16x26, A992 | IPE300, S355 |
| {{ui:Post}} | W12x50, A992 | HEB200, S355 |
| {{ui:Diagonaal}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plaat}} | A36 | S355 |

Algus on USA kujud. Euroopa valik kasutab diagonaalide jaoks HEA160, sest DetailCraft'i EN-kataloogis ei ole veel õõnesprofiile ([Profiilikataloog](topic:profile-catalog)). Sa saad ikka valida mis tahes profiili ja klassi järgmisele detailile {{ui:Omadused}} paneelis, kui paigutustööriist on sees. Mudelis juba olevad elemendid säilitavad oma profiili ja klassi.

## Dubleerimine ja kleepimine

- **Nihe (mm)**: x, y ja z. {{ui:Dubleeri}} ({{key:Mod+D}}) paneb koopia nii kaugele originaalist ja vorm {{ui:Kleebi nihkega (mm, algsest)}} algab sellega. See algab väärtustest 6000, 0, 0: üks 6 m väli mööda nummerdatud ruudustikke. Sea see oma välja sammuks või tasandi kõrguseks z-teljel, et kopeerida korrus üles.
- **Kopeeri otsaplaadid ja aluseplaadid koos elementidega** (algselt sees): ühendus tuleb koopiaga kaasa ainult siis, kui kõik elemendid, mida see ühendab, kopeeritakse. Eemalda märge, et kopeerida elemendid ja vundamendid ilma nende ühendusteta, näiteks et proovida koopial teistsugust ühendust.

Vaata [Kopeerimine, kleepimine ja dubleerimine](topic:copy-paste).

## 3D-vaade

**Näita polte ja ankruvardaid** (algselt sees). Eemalda märge, et need vaates peita ja näha hõivatud liitekoha auke ja plaate. Peidetud polte ei saa klõpsata; klõpsa plaadil, et valida ühendus. Materjalinimekiri, joonised ja iga eksport sisaldavad siiski iga polti ja varrast.

## Nurgaindikaator

Mida näidatakse 3D-vaate nurgas: **Vaatekuup** (algus; paremal üleval — klõpsa tahule, servale või nurgale, et sealt vaadata, lohista seda orbiidi jaoks, lohista selle kompassirõngast mudeli pööramiseks), **Teljeikoon** (väike X, Y, Z märk vasakul all, mis pöördub koos vaatega: X punane, Y roheline, Z sinine) või **Puudub**. Ainult vaates {{ui:3D}}; {{ui:Plaan}} ja {{ui:Vaade}} ei näita kumbagi. Vaata [Vaatekuup](topic:view-cube).

## Lähtestamine

{{ui:Lähtesta DetailCraft'i sätted}} dialoogi all paneb need tagasi algseisu (USA kujud, nihe 6000, 0, 0, ühendused kopeeritud, poldid näidatud), koos {{ui:Üldine}} sätetega.

## Joonised

**Lehe suurus**: lehejoonised ja tööjoonised tehakse rõhtpaigutuses: A4, A3 (algus), A2, A1, ANSI B, ANSI C või ANSI D. Aknad {{ui:Joonised}} ja tööjoonised on sama loendiga. Vaata [Üldjoonised ja koostejoonised](topic:drawings).

## Armatuur

- **ASTM-varraste nimed**: #3 kuni #11 või samade varraste pehmed meetrilised #10 kuni #36.
- **Painutusloendi kujukoodid**: DetailCraft'i S, L, U; ACI 315 tüübid; või BS 8666 kujukoodid. Vaata [Armatuuri andmik](topic:rebar-reference).

## Lohistamine valimiseks

**Ristkülik** (nagu varem) või **Lasso**: vabakäeline joon, kus {{key:Space}} vahetab sees, puudutab ja piirjoone vahel lohistamise ajal. Vaata [Vali aknaga](topic:select-and-change#select-with-a-window).
