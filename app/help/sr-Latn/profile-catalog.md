---
title: Katalog profila
summary: Svaka ugrađena čelična veličina, kako se pišu nazivi profila, odakle dolaze dimenzije i kako se nazivaju limovi i prilagođeni preseci.
keywords: profili, preseci, katalog, veličine, w profili, široki pojas, s profili, U-profil, ugao, hss, cev, pipe, ipe, hea, heb, upn, uk, britanski, ub, uc, pfc, ea, uea, nejednakokraki ugao, shs, rhs, chs, hladno oblikovani, toplo valjani, plava knjiga, lim, aisc, en 10365, nazivanje
from: cd9b2bc3
---

DetailCraft ima 2,311 ugrađenih veličina, svaka prepisana iz objavljene tabele i proverena testovima aplikacije: površina izračunata iz dimenzija mora da se poklapa sa objavljenom površinom, a objavljena težina mora da se poklapa sa tom površinom pomnoženom gustinom čelika. Limovi i prilagođeni profili se prave od svojih dimenzija.

## Nazivanje

- **Američki profili** su napisani kako ih štampa AISC Manual, sa malim x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Kucanje ne razlikuje velika i mala slova.
- **Pipe** je napisan kao u AISC bazi: Pipe4STD, Pipe4XS, Pipe4XXS (standardna, ojačana, dvostruko ojačana).
- **Evropski profili** su napisani kao u EN 10365: IPE200, HEA240, HEB300, UPN200 (bez razmaka).
- **Britanski profili** su napisani sa porodicom prvo, pa veličinom iz Plave knjige: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Hladno oblikovani šuplji profili počinju sa CF: CFSHS100x100x5.0. Kucanje na način kako to crteži često pišu takođe radi: 305x165x40 UB, L100x100x10, SHS100x5.
- **Limovi** su `PL<debljina>x<širina>` u milimetrima: PL20x200 je debeo 20 mm i širok 200 mm. Bilo koja veličina iz alata {{ui:Lim}} radi.
- **Prilagođeni profili** imaju naziv koji im daš, sve dok nije naziv iz kataloga i dok ne liči na naziv lima.

U listama {{ui:Profil}}, naslov svake grupe navodi svoj izvor, na primer „W shapes — AISC Shapes Database v16.0“.

## Izvori

| Grupa | Izvor | Napomene |
|---|---|---|
| W profili, S profili, U-profili (C), uglovi (L), HSS, Pipe | AISC Shapes Database v16.0 | Dimenzije preračunate iz inča u milimetre tačno; masa po metru iz objavljenih lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimetri i kg/m kako su objavljeni |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabela v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimetri i kg/m kako su objavljeni |
| Limovi | Parametarski | Masa iz površine × 7850 kg/m³ |
| Prilagođeni | Tvoje dimenzije | Masa iz površine × 7850 kg/m³ |

Kako se profili crtaju:

- **W profili:** AISC baza ne daje poluprečnik zaobljenja, pa DetailCraft crta zaobljenje kao r = kdes − tf.
- **S profili i U-profili (C, UPN):** paralelni pojasevi prosečne objavljene debljine, oštri uglovi (stvarni pojas je nagnut).
- **Uglovi:** oštri uglovi.
- **Pravougaoni HSS:** projektna debljina zida (0.93 × nominalna, kako AISC 360-22 B4.2 dozvoljava) sa spoljašnjim poluprečnikom ugla od dvostruke te vrednosti.
- **Okrugli HSS i Pipe:** projektna debljina zida (0.93 × nominalna).
- **IPE, HEA, HEB, UB, UC:** objavljeni poluprečnik korena.
- **PFC, EA, UEA:** oštri uglovi (objavljena masa i površina i dalje uključuju zaobljenja).
- **SHS, RHS, CHS:** nominalni zid. Toplo valjani uglovi: spolja 1.5 t, iznutra t. Hladno oblikovani: spolja 2 t, iznutra t do 6 mm; 2.5 t i 1.5 t do 10 mm; 3 t i 2 t iznad.

## Veličine

Svaka veličina koju tabele navode u ovim grupama, od najmanje ka većoj:

| Grupa | Veličine |
|---|---|
| W profili (289) | W4x13 do W44x408 |
| S profili (28) | S3x5.7 do S24x121 |
| U-profili (32) | C3x3.5 do C15x50 |
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
| SHS, toplo valjani (123) | SHS40x40x3.2 do SHS400x400x17.5 |
| RHS, toplo valjani (161) | RHS50x30x3.2 do RHS500x300x17.5 |
| CHS, toplo valjani (103) | CHS42.4x3.2 do CHS508.0x17.5 |
| CFSHS, hladno oblikovani (96) | CFSHS25x25x2.0 do CFSHS400x400x12.5 |
| CFRHS, hladno oblikovani (137) | CFRHS50x25x2.0 do CFRHS500x300x12.5 |
| CFCHS, hladno oblikovani (106) | CFCHS33.7x3.0 do CFCHS508.0x16.0 |

Ogledalski nejednaki ugao je isti komad okrenut s kraja na kraj, kako radionica pravi suprotnu stranu: njegove rupe, izrezi i čvorni lim idu s njim.

Izaberi alat za postavljanje i izaberi veličinu da vidiš njenu dubinu, širinu pojasa, debljinu rebra i pojasa, poluprečnik zaobljenja, površinu (cm²), masu (kg/m) i izvor u polju {{ui:Profil}} panela {{ui:Svojstva}}.

## Šta može svaki oblik

| Oblik | Rupe | Izrezi | Krajnji i podložni limovi | NC datoteka | Radionički crtež |
|---|---|---|---|---|---|
| I-profili (W, S, IPE, HEA, HEB, UB, UC, prilagođeni I) | Rebro, gornji pojas, donji pojas | Da | Krajnji limovi: greda i stub. Podložni limovi: da | Da | Da |
| U-profili (C, UPN, PFC) | Rebro, gornji pojas, donji pojas | Ne | Samo podložni limovi | Da | Da |
| Pravougaoni HSS, SHS, RHS | Bočni zid (rebro), gornji, donji | Ne | Samo podložni limovi | Da | Da |
| Okrugli HSS, Pipe, CHS | Još ne | Ne | Samo podložni limovi | Da | Da |
| Uglovi (L, EA, UEA) | Još ne | Ne | Samo podložni limovi | Da | Da |
| Limovi i prilagođene ravne trake | Lice lima | Ne | Ne | Da | Da |

Za pravougaonu cev, rupa na „rebru“ prolazi kroz oba bočna zida. Šta sadrži svaka NC datoteka nalazi se u [Polja NC datoteke](topic:nc1-fields).

## Treba ti druga veličina?

Dodaj je kao [prilagođeni profil](topic:plates-and-profiles#add-a-custom-profile). Ugrađena lista se još ne može menjati iz aplikacije.
