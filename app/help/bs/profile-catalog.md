---
title: Katalog profila
summary: Svaka ugrađena čelična veličina, kako se pišu nazivi profila, odakle dolaze dimenzije, i kako se imenuju limovi i prilagođeni presjeci.
keywords: profili, presjeci, katalog, veličine, w profili, široka pojasnica, s profili, kanal, ugao, hss, cijev, pipe, ipe, hea, heb, upn, uk, britanski, ub, uc, pfc, ea, uea, nejednaki ugao, shs, rhs, chs, hladno oblikovano, toplo završno, plava knjiga, lim, aisc, en 10365, imenovanje
from: cd9b2bc3
---

DetailCraft ima 2,311 ugrađenih veličina, svaka prepisana iz objavljene tabele i provjerena testovima aplikacije: površina izračunata iz dimenzija mora se poklapati sa objavljenom površinom, a objavljena težina mora biti jednaka toj površini pomnoženoj gustinom čelika. Limovi i prilagođeni profili se prave iz svojih dimenzija.

## Nazivanje

- **US profili** se pišu onako kako ih štampa AISC Manual, sa malim x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Pisanje ne razlikuje velika i mala slova.
- **Cijevi** se pišu kao u AISC bazi: Pipe4STD, Pipe4XS, Pipe4XXS (standardna, debela, dvostruko debela).
- **Evropski profili** se pišu kao u EN 10365: IPE200, HEA240, HEB300, UPN200 (bez razmaka).
- **UK profili** se pišu prvo po porodici, pa po veličini iz Plave knjige: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Hladno oblikovani šuplji profili počinju sa CF: CFSHS100x100x5.0. Pisanje onako kako crteži često kažu također radi: 305x165x40 UB, L100x100x10, SHS100x5.
- **Limovi** su `PL<debljina>x<širina>` u milimetrima: PL20x200 je 20 mm debljine i 200 mm širine. Svaka veličina iz alata {{ui:Plate}} radi.
- **Prilagođeni profili** imaju naziv koji im daš, sve dok nije naziv iz kataloga i dok ne izgleda kao naziv lima.

U listama {{ui:Profile}} naslov svake grupe navodi svoj izvor, na primjer "W profili — AISC Shapes Database v16.0".

## Izvori

| Grupa | Izvor | Napomene |
|---|---|---|
| W profili, S profili, kanali (C), uglovi (L), HSS, Pipe | AISC Shapes Database v16.0 | Dimenzije preračunate iz inča u milimetre tačno; masa po metru iz objavljenih lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimetri i kg/m kako su objavljeni |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabela v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimetri i kg/m kako su objavljeni |
| Limovi | Parametarski | Masa iz površine × 7850 kg/m³ |
| Prilagođeni | Tvoje dimenzije | Masa iz površine × 7850 kg/m³ |

Kako se oblici crtaju:

- **W profili:** AISC baza ne daje radijus zaobljenja, pa DetailCraft crta zaobljenje kao r = kdes − tf.
- **S profili i kanali (C, UPN):** paralelne pojasnice objavljene prosječne debljine, oštri uglovi (stvarna pojasnica je nagnuta).
- **Uglovi:** oštri uglovi.
- **Pravougaoni HSS:** projektna debljina zida (0,93 × nominalna, kako AISC 360-22 B4.2 dozvoljava), sa vanjskim radijusom ugla dvostruko većim.
- **Okrugli HSS i Pipe:** projektna debljina zida (0,93 × nominalna).
- **IPE, HEA, HEB, UB, UC:** objavljeni radijus korijena.
- **PFC, EA, UEA:** oštri uglovi (objavljena masa i površina i dalje uključuju radijuse).
- **SHS, RHS, CHS:** nominalni zid. Toplo završni uglovi: vanjski 1,5 t, unutrašnji t. Hladno oblikovani: vanjski 2 t, unutrašnji t do 6 mm; 2,5 t i 1,5 t do 10 mm; 3 t i 2 t iznad toga.

## Veličine

Svaka veličina koju tabele navode u ovim grupama, od najmanje prema većoj:

| Grupa | Veličine |
|---|---|
| W profili (289) | W4x13 do W44x408 |
| S profili (28) | S3x5.7 do S24x121 |
| Kanali (32) | C3x3.5 do C15x50 |
| Uglovi, jednaki kraci (61) | L2x2x1/8 do L12x12x1-3/8 |
| HSS, pravougaoni i kvadratni (525) | HSS1-1/2x1-1/2x1/8 do HSS34x10x1 |
| HSS, okrugli (189) | HSS1.660x0.140 do HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD do Pipe26XS |
| IPE (18) | IPE80 do IPE600 |
| HEA (24) | HEA100 do HEA1000 |
| HEB (24) | HEB100 do HEB1000 |
| UPN (18) | UPN50 do UPN400 |
| Uglovi, nejednaki kraci (76) | L2-1/2x1-1/2x3/16 do L8x6x1 |
| UB (107) | UB127x76x13 do UB1016x305x584 |
| UC (46) | UC152x152x23 do UC356x406x1299 |
| PFC (16) | PFC100x50x10 do PFC430x100x64 |
| EA (42) | EA20x20x3.0 do EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 do UEA200x150x18.0 |
| SHS, toplo završni (123) | SHS40x40x3.2 do SHS400x400x17.5 |
| RHS, toplo završni (161) | RHS50x30x3.2 do RHS500x300x17.5 |
| CHS, toplo završni (103) | CHS42.4x3.2 do CHS508.0x17.5 |
| CFSHS, hladno oblikovani (96) | CFSHS25x25x2.0 do CFSHS400x400x12.5 |
| CFRHS, hladno oblikovani (137) | CFRHS50x25x2.0 do CFRHS500x300x12.5 |
| CFCHS, hladno oblikovani (106) | CFCHS33.7x3.0 do CFCHS508.0x16.0 |

Ogledalni nejednaki ugao je isti komad okrenut s kraja na kraj, kako radionica pravi suprotnu ruku: njegove rupe, izrezi i ugaona ploča idu s njim.

Odaberi alat za postavljanje i izaberi veličinu da vidiš dubinu, širinu pojasnice, debljinu rebra i pojasnice, radijus zaobljenja, površinu (cm²), masu (kg/m) i izvor u polju {{ui:Profile}} panela {{ui:Properties}}.

## Šta svaki oblik može

| Oblik | Rupe | Izrezi | Krajnje i bazne ploče | NC datoteka | Radionički crtež |
|---|---|---|---|---|---|
| I-profili (W, S, IPE, HEA, HEB, UB, UC, prilagođeni I) | Rebro, gornja pojasnica, donja pojasnica | Da | Krajnje ploče: greda i stub. Bazne ploče: da | Da | Da |
| Kanali (C, UPN, PFC) | Rebro, gornja pojasnica, donja pojasnica | Ne | Samo bazne ploče | Da | Da |
| Pravougaoni HSS, SHS, RHS | Bočni zid (rebro), gornji, donji | Ne | Samo bazne ploče | Da | Da |
| Okrugli HSS, Pipe, CHS | Još ne | Ne | Samo bazne ploče | Da | Da |
| Uglovi (L, EA, UEA) | Još ne | Ne | Samo bazne ploče | Da | Da |
| Limovi i prilagođene ravne trake | Strana lima | Ne | Ne | Da | Da |

Za pravougaonu cijev, rupa na strani "rebro" prolazi kroz oba bočna zida. Šta sadrži svaka NC datoteka je u [Polja NC datoteke](topic:nc1-fields).

## Treba ti druga veličina?

Dodaj je kao [prilagođeni profil](topic:plates-and-profiles#add-a-custom-profile). Ugrađena lista se još ne može uređivati iz aplikacije.
