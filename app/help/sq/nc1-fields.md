---
title: Fushat e skedarit NC
summary: Çfarë shkruan DetailCraft në çdo skedar DSTV NC, fushë për fushë, dhe si matën faqet dhe koordinatat.
keywords: nc1, dstv, skedar nc, blloku st, ak, bo, kreu, faqet, koordinatat, cnc, format
from: 1b676fc1
---

Çdo skedar `.nc1` përshkruan një shenjë pjese. Rreshtat mbyllen me CR LF. Fushat e tekstit mbajnë vetëm ASCII të thjeshtë; karakteret e tjera bëhen "?". Rreshti i dytë është koment, `** DetailCraft <mark>.nc1`.

## Kreu (ST)

| Fusha | I-shape, kanal | Këndore | HSS drejtkëndore | HSS rrethore | Pllakë |
|---|---|---|---|---|---|
| Porosia | Emri i modelit | ← | ← | ← | ← |
| Vizatimi, copa | Shenja e pjesës | ← | ← | ← | ← |
| Faza | Faza e pjesës, ose 1 | ← | ← | ← | ← |
| Cilësia e çelikut | Klasa e materialit | ← | ← | ← | ← |
| Sasia | Numri i pjesëve me këtë shenjë | ← | ← | ← | ← |
| Profili | Emri i profilit, për shembull W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Kodi i profilit | I ose U (kanal) | L | M | RO | B |
| Gjatësia | Gjatësia e prerjes | ← | ← | ← | Gjatësia |
| Lartësia | Thellësia d | Krahu | Lartësia | Diametri | Gjerësia e pllakës |
| Gjerësia e flanxhës | bf | Krahu | Gjerësia | Diametri | 0 |
| Trashësia e flanxhës | tf | t | Muri t | Muri t | 0 |
| Trashësia e rrjetës | tw | t | Muri t | Muri t | Trashësia e pllakës |
| Rrezja | Rrezja e rrumbullakimit (0 për kanalet AISC) | 0 | Rrezja e jashtme e qoshes | 0 | 0 |
| Pesha për metër | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Sipërfaqja e lyerjes për metër | Perimetri i jashtëm, m²/m | ← | ← | ← | 2 (të dy faqet, m²/m²) |
| Këndet e sharrës (4 fusha) | 0 (drejt) | ← | ← | ← | ← |
| Fushat e tekstit (4) | `-` | ← | ← | ← | ← |

Pllakat ndjekin kolonën e standardit "për fletët". Standardi nuk ka kolonë për tubat rrethorë: DetailCraft e shkruan diametrin si lartësi dhe gjerësi flanxhe, dhe murin si të dy trashësitë.

## Konturet e jashtme (AK)

- **I-shape dhe kanale:** rrjeta (v), me një prerje drejtkëndore për çdo prerje kënde; çdo flanxhë (o dhe u), e shkurtuar në një skaj aty ku një prerje kënde është të paktën aq e thellë sa flanxha.
- **HSS drejtkëndore:** të dy muret anësore (v dhe h), me prerje kënde, dhe muret e sipërm dhe të poshtëm (o dhe u).
- **Këndore:** një drejtkëndësh për çdo krah (v dhe u). Prerjet kënde te këndoret nuk shkruhen: një pjesë e tillë listohet si e pashkruar. Një diagonale këndore e lidhur me bulona me një [pllakë lidhëse](topic:brace-gussets) ka vrimat e saj në krahun e lidhur me bulona: v për krahun përgjatë u-së së pjesës, u për krahun përgjatë v-së së saj.
- **HSS rrethore:** një drejtkëndësh në v, tubi i parë nga para (gjatësi × diametër).
- **Pllakat:** një drejtkëndësh në faqen v.

Çdo kontur është i mbyllur (pika e parë përsëritet në fund) dhe shkon në drejtim të kundërt të akrepave të orës.

## Vrimat (BO)

Një rresht për vrimë: faqja, x, y, diametri, thellësia 0 (e hapur). Përfshihen të gjitha vrimat, ato që ke shtypur dhe ato që krijojnë lidhjet. Një vrimë që kalon nëpër muret anësore të një HSS drejtkëndore shkruhet dy herë, një herë në v dhe një herë në h.

## Faqet dhe koordinatat

Çdo profil vendoset ashtu si e vizaton figura e standardit për pozicionet e profileve (DSTV 1998, f. 7): x përgjatë pjesës, Y tërthorazi, Z lart nga faqja e pasme, me pikën zero në qoshen e jashtme. DetailCraft nuk e pasqyron kurrë një pjesë për t'iu përshtatur figurës.

| Faqja | I-shape | Kanal | Këndore | HSS drejtkëndore | Pllakë |
|---|---|---|---|---|---|
| v | Rrjeta, para | Rrjeta, e parë nga ana e buzëve të flanxhave | Krahu përgjatë u-së së pjesës | Muri anësor në −u | Faqja e pllakës |
| h | | | | Muri anësor në +u | |
| o | Flanxha e sipërme | **Flanxha e poshtme** | | Muri i sipërm | |
| u | Flanxha e poshtme | **Flanxha e sipërme** | Krahu përgjatë v-së së pjesës | Muri i poshtëm | |

- **x** shtrihet përgjatë pjesës nga fillimi i prerjes.
- **I-shape dhe HSS drejtkëndore:** y te rrjeta ose muret anësore nga pjesa e poshtme e profilit; y te një flanxhë ose muret e sipërm dhe të poshtëm nga skaji i saj në anën e pasme (ana +u e pjesës).
- **Kanalet** shtrihen mbi shpinë me buzët lart, siç tregon figura e standardit. Kështu y te rrjeta shkon nga jashtë flanxhës së sipërme poshtë, flanxha e sipërme është faqja u dhe flanxha e poshtme faqja o, dhe y te një flanxhë shkon nga pjesa e pasme e rrjetës drejt buzës.
- **Këndore:** y te çdo krah nga thembra.
- **Pllakat:** y nga skaji −u i pllakës.

Kontrollo si lexon softveri i makinës faqet e kanaleve përpara se të presësh: disa programe i kthejnë kanalet përmbys.

## Nuk shkruhet

Skajet e pjerrëta, konturat e brendshme, shënimet (SI), kënde sharre të ndryshme nga ato të drejta, vrimat e gjata, vrimat në tubat rrethorë (DetailCraft nuk ka asnjë), dhe prerjet kënde te këndoret dhe tubat rrethorë.
