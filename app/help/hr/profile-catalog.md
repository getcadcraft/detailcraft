---
title: Katalog profila
summary: Svaka ugrađena čelična dimenzija, kako se pišu nazivi profila, odakle dolaze dimenzije i kako se nazivaju ploče i prilagođeni presjeci.
keywords: profili, presjeci, katalog, dimenzije, W profili, široki pojas, S profili, U-profil, kutnik, HSS, cijev, pipe, ipe, hea, heb, upn, uk, britanski, ub, uc, pfc, ea, uea, nejednakokračni kutnik, shs, rhs, chs, hladno oblikovano, toplo valjano, Blue Book, ploča, aisc, en 10365, nazivlje
from: cd9b2bc3
---

DetailCraft ima 2,311 ugrađenih dimenzija, svaka je prenesena iz objavljene tablice i provjerena testovima aplikacije: površina izračunata iz dimenzija mora se podudarati s objavljenom površinom, a objavljena masa mora biti jednaka toj površini pomnoženoj gustoćom čelika. Ploče i prilagođeni profili izrađuju se iz svojih dimenzija.

## Nazivlje

- **US profili** pišu se onako kako ih ispisuje AISC Manual, s malim x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Pri upisu nije važno velika ili mala slova.
- **Pipe** se piše kao u bazi AISC: Pipe4STD, Pipe4XS, Pipe4XXS (standardna, pojačana, dvostruko pojačana).
- **Europski profili** pišu se kao u EN 10365: IPE200, HEA240, HEB300, UPN200 (bez razmaka).
- **UK profili** pišu se najprije s obitelji, zatim dimenzijom iz Blue Booka: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Hladno oblikovani šuplji profili počinju s CF: CFSHS100x100x5.0. Upisivanje onako kako to često piše na crtežima također radi: 305x165x40 UB, L100x100x10, SHS100x5.
- **Ploče** su `PL<thickness>x<width>` u milimetrima: PL20x200 je debela 20 mm i široka 200 mm. Radi bilo koja dimenzija iz alata {{ui:Ploča}}.
- **Prilagođeni profili** imaju naziv koji im dajete, sve dok nije naziv iz kataloga i dok ne izgleda kao naziv ploče.

U popisima {{ui:Profil}} naslov svake grupe navodi izvor, na primjer „W profili — AISC Shapes Database v16.0“.

## Izvori

| Grupa | Izvor | Napomene |
|---|---|---|
| W profili, S profili, U-profili (C), kutnici (L), HSS, Pipe | AISC Shapes Database v16.0 | Dimenzije preračunate iz palaca u milimetre točno; masa po metru iz objavljenih lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimetri i kg/m kako su objavljeni |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), table v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimetri i kg/m kako su objavljeni |
| Ploče | Parametarski | Masa iz površine × 7850 kg/m³ |
| Prilagođeni | Vaše dimenzije | Masa iz površine × 7850 kg/m³ |

Kako se oblici crtaju:

- **W profili:** baza AISC ne daje polumjer zaobljenja, pa DetailCraft zaobljenje crta kao r = kdes − tf.
- **S profili i U-profili (C, UPN):** paralelni pojasevi objavljene prosječne debljine, oštri kutovi (stvarni pojas je nagnut).
- **Kutnici:** oštri kutovi.
- **Pravokutni HSS:** računska debljina stijenke (0.93 × nazivna, kako dopušta AISC 360-22 B4.2) s vanjskim polumjerom kuta dvostruko većim od toga.
- **Okrugli HSS i Pipe:** računska debljina stijenke (0.93 × nazivna).
- **IPE, HEA, HEB, UB, UC:** objavljeni polumjer korijena.
- **PFC, EA, UEA:** oštri kutovi (objavljena masa i površina i dalje uključuju polumjere).
- **SHS, RHS, CHS:** nazivna stijenka. Toplo valjani kutovi: vanjski 1.5 t, unutarnji t. Hladno oblikovani: vanjski 2 t, unutarnji t do 6 mm; 2.5 t i 1.5 t do 10 mm; 3 t i 2 t iznad.

## Dimenzije

Svaka dimenzija koju tablice navode u tim grupama, od najmanje:

| Grupa | Dimenzije |
|---|---|
| W profili (289) | W4x13 do W44x408 |
| S profili (28) | S3x5.7 do S24x121 |
| U-profili (32) | C3x3.5 do C15x50 |
| Kutnici, jednaki kraci (61) | L2x2x1/8 do L12x12x1-3/8 |
| HSS, pravokutni i kvadratni (525) | HSS1-1/2x1-1/2x1/8 do HSS34x10x1 |
| HSS, okrugli (189) | HSS1.660x0.140 do HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD do Pipe26XS |
| IPE (18) | IPE80 do IPE600 |
| HEA (24) | HEA100 do HEA1000 |
| HEB (24) | HEB100 do HEB1000 |
| UPN (18) | UPN50 do UPN400 |
| Kutnici, nejednaki kraci (76) | L2-1/2x1-1/2x3/16 do L8x6x1 |
| UB (107) | UB127x76x13 do UB1016x305x584 |
| UC (46) | UC152x152x23 do UC356x406x1299 |
| PFC (16) | PFC100x50x10 do PFC430x100x64 |
| EA (42) | EA20x20x3.0 do EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 do UEA200x150x18.0 |
| SHS, toplo valjani (123) | SHS40x40x3.2 do SHS400x400x17.5 |
| RHS, toplo valjani (161) | RHS50x30x3.2 do RHS500x300x17.5 |
| CHS, toplo valjani (103) | CHS42.4x3.2 do CHS508.0x17.5 |
| CFSHS, hladno oblikovani (96) | CFSHS25x25x2.0 do CFSHS400x400x12.5 |
| CFRHS, hladno oblikovani (137) | CFRHS50x25x2.0 do CFRHS500x300x12.5 |
| CFCHS, hladno oblikovani (106) | CFCHS33.7x3.0 do CFCHS508.0x16.0 |

Zrcaljeni nejednaki kutnik je isti komad okrenut s kraja na kraj, kako radionica izrađuje suprotnu izvedbu: provrti, izrezi i čvorna ploča idu s njim.

Odaberite alat za postavljanje i odaberite dimenziju da vidite visinu, širinu pojasa, debljinu hrpta i pojasa, polumjer zaobljenja, površinu (cm²), masu (kg/m) i izvor u okviru {{ui:Profil}} na ploči {{ui:Svojstva}}.

## Što koji oblik može

| Oblik | Provrti | Izrezi | Čeone i podložne ploče | NC datoteka | Radionički crtež |
|---|---|---|---|---|---|
| I-profili (W, S, IPE, HEA, HEB, UB, UC, prilagođeni I) | Hrbat, gornji pojas, donji pojas | Da | Čeone ploče: greda i stup. Podložne ploče: da | Da | Da |
| U-profili (C, UPN, PFC) | Hrbat, gornji pojas, donji pojas | Ne | Samo podložne ploče | Da | Da |
| Pravokutni HSS, SHS, RHS | Bočna stijenka (hrbat), gornja, donja | Ne | Samo podložne ploče | Da | Da |
| Okrugli HSS, Pipe, CHS | Još ne | Ne | Samo podložne ploče | Da | Da |
| Kutnici (L, EA, UEA) | Još ne | Ne | Samo podložne ploče | Da | Da |
| Ploče i prilagođeni plosnati čelici | Ploha ploče | Ne | Ne | Da | Da |

Za pravokutnu cijev, provrt na plohi „hrbat“ prolazi kroz obje bočne stijenke. Što sadrži svaka NC datoteka je u [Polja NC datoteke](topic:nc1-fields).

## Trebate drugu dimenziju?

Dodajte je kao [prilagođeni profil](topic:plates-and-profiles#add-a-custom-profile). Ugrađeni popis se iz aplikacije još ne može uređivati.
