---
title: Katalog profilov
summary: Vsaka vgrajena jeklena velikost, kako so zapisana imena profilov, od kod prihajajo mere ter kako so poimenovane pločevine in prerezi po meri.
keywords: profili, prerezi, katalog, velikosti, oblike W, široki pas, oblike S, profil U, kotnik, hss, cev, pipe, ipe, hea, heb, upn, uk, britanski, ub, uc, pfc, ea, uea, neenakokraki kotnik, shs, rhs, chs, hladno oblikovani, vroče dokončani, blue book, pločevina, aisc, en 10365, poimenovanje
from: cd9b2bc3
---

DetailCraft ima 2,311 vgrajenih velikosti; vsaka je prepisana iz objavljene tabele in preverjena s testi aplikacije: površina, izračunana iz mer, se mora ujemati z objavljeno površino, objavljena teža pa mora biti enaka tej površini, pomnoženi z gostoto jekla. Pločevine in profili po meri so narejeni iz svojih mer.

## Poimenovanje

- **Ameriški profili** so zapisani tako, kot jih natisne priročnik AISC, z malo črko x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Pisanje ni občutljivo na velike in male črke.
- **Cevi** so zapisane kot v bazi AISC: Pipe4STD, Pipe4XS, Pipe4XXS (standardna, debelostenska in zelo debelostenska).
- **Evropski profili** so zapisani kot v EN 10365: IPE200, HEA240, HEB300, UPN200 (brez presledka).
- **Britanski profili** so zapisani z družino na začetku, nato sledi velikost iz Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Hladno oblikovani votli profili se začnejo s CF: CFSHS100x100x5.0. Vtipkanje tako, kot pogosto piše na risbah, prav tako deluje: 305x165x40 UB, L100x100x10, SHS100x5.
- **Pločevine** so `PL<debelina>x<širina>` v milimetrih: PL20x200 je debela 20 mm in široka 200 mm. Deluje vsaka velikost iz orodja {{ui:Plošča}}.
- **Profili po meri** imajo ime, ki ga dodelite, dokler ni ime iz kataloga in dokler ne izgleda kot ime pločevine.

V seznamih {{ui:Profil}} navede naslov vsake skupine svoj vir, na primer „Oblike W — AISC Shapes Database v16.0“.

## Viri

| Skupina | Vir | Opombe |
|---|---|---|
| Oblike W, oblike S, profili U (C), kotniki (L), HSS, cevi | AISC Shapes Database v16.0 | Mere pretvorjene iz palcev v milimetre natančno; masa na meter iz objavljenih lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimetri in kg/m, kot so objavljeni |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabela v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimetri in kg/m, kot so objavljeni |
| Pločevine | Parametrično | Masa iz površine × 7850 kg/m³ |
| Po meri | Vaše mere | Masa iz površine × 7850 kg/m³ |

Kako so oblike narisane:

- **Oblike W:** baza AISC ne da polmera zaobljenja, zato DetailCraft riše zaobljenje kot r = kdes − tf.
- **Oblike S in profili U (C, UPN):** vzporedni pasovi objavljene povprečne debeline, ostri vogali (pravi pas je nagnjen).
- **Kotniki:** ostri vogali.
- **Pravokotni HSS:** projektna debelina stene (0.93 × nominalna, kot dovoljuje AISC 360-22 B4.2) z zunanjim polmerom vogala, ki je dvakratnik te debeline.
- **Okrogli HSS in cevi:** projektna debelina stene (0.93 × nominalna).
- **IPE, HEA, HEB, UB, UC:** objavljeni korenski polmer.
- **PFC, EA, UEA:** ostri vogali (objavljena masa in površina še vedno vključujeta polmere).
- **SHS, RHS, CHS:** nominalna stena. Vroče dokončani vogali: zunanji 1.5 t, notranji t. Hladno oblikovani: zunanji 2 t, notranji t do 6 mm; 2.5 t zunaj in 1.5 t notranji do 10 mm; 3 t zunaj in 2 t notranji nad tem.

## Velikosti

Vsaka velikost, ki jo tabele navajajo v teh skupinah, od najmanjše:

| Skupina | Velikosti |
|---|---|
| Oblike W (289) | W4x13 do W44x408 |
| Oblike S (28) | S3x5.7 do S24x121 |
| Profili U (32) | C3x3.5 do C15x50 |
| Kotniki, enaki kraki (61) | L2x2x1/8 do L12x12x1-3/8 |
| HSS, pravokotni in kvadratni (525) | HSS1-1/2x1-1/2x1/8 do HSS34x10x1 |
| HSS, okrogli (189) | HSS1.660x0.140 do HSS28.000x1.000 |
| Cevi (51) | Pipe1/2STD do Pipe26XS |
| IPE (18) | IPE80 do IPE600 |
| HEA (24) | HEA100 do HEA1000 |
| HEB (24) | HEB100 do HEB1000 |
| UPN (18) | UPN50 do UPN400 |
| Kotniki, neenaki kraki (76) | L2-1/2x1-1/2x3/16 do L8x6x1 |
| UB (107) | UB127x76x13 do UB1016x305x584 |
| UC (46) | UC152x152x23 do UC356x406x1299 |
| PFC (16) | PFC100x50x10 do PFC430x100x64 |
| EA (42) | EA20x20x3.0 do EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 do UEA200x150x18.0 |
| SHS, vroče dokončani (123) | SHS40x40x3.2 do SHS400x400x17.5 |
| RHS, vroče dokončani (161) | RHS50x30x3.2 do RHS500x300x17.5 |
| CHS, vroče dokončani (103) | CHS42.4x3.2 do CHS508.0x17.5 |
| CFSHS, hladno oblikovani (96) | CFSHS25x25x2.0 do CFSHS400x400x12.5 |
| CFRHS, hladno oblikovani (137) | CFRHS50x25x2.0 do CFRHS500x300x12.5 |
| CFCHS, hladno oblikovani (106) | CFCHS33.7x3.0 do CFCHS508.0x16.0 |

Zrcaljeni neenakokraki kotnik je isti kos, obrnjen od konca do konca, kot ga delavnica izdela za nasprotno izvedbo: njegove izvrtine, izrezi in vozliščna pločevina gredo z njim.

Izberite orodje za postavljanje in izberite velikost, da vidite njeno globino, širino pasu, debelino stojine in pasu, polmer zaobljenja, površino (cm²), maso (kg/m) in vir v oknu {{ui:Profil}} v podoknu {{ui:Lastnosti}}.

## Kaj zmore vsaka oblika

| Oblika | Izvrtine | Izrezi | Čelne in podložne plošče | Datoteka NC | Delavniška risba |
|---|---|---|---|---|---|
| Profili I (W, S, IPE, HEA, HEB, UB, UC, I po meri) | Stojina, zgornji pas, spodnji pas | Da | Čelne plošče: nosilec in steber. Podložne plošče: da | Da | Da |
| Profili U (C, UPN, PFC) | Stojina, zgornji pas, spodnji pas | Ne | Samo podložne plošče | Da | Da |
| Pravokotni HSS, SHS, RHS | Stranska stena (stojina), zgoraj, spodaj | Ne | Samo podložne plošče | Da | Da |
| Okrogli HSS, cevi, CHS | Še ne | Ne | Samo podložne plošče | Da | Da |
| Kotniki (L, EA, UEA) | Še ne | Ne | Samo podložne plošče | Da | Da |
| Pločevine in ploščato jeklo po meri | Ploskev pločevine | Ne | Ne | Da | Da |

Pri pravokotni cevi izvrtina na ploskvi „stojina“ gre skozi obe stranski steni. Kaj vsebuje vsaka datoteka NC, je v [Polja datotek NC](topic:nc1-fields).

## Potrebujete drugo velikost?

Dodajte jo kot [profil po meri](topic:plates-and-profiles#add-a-custom-profile). Vgrajenega seznama aplikacija zaenkrat ne more urejati.
