---
title: Catalogul de profile
summary: Fiecare dimensiune de oțel integrată, cum se scriu numele profilelor, de unde vin dimensiunile și cum se denumesc plăcile și secțiunile personalizate.
keywords: profile, secțiuni, catalog, dimensiuni, profile W, wide flange, profile S, profile U, cornier, hss, țeavă, ipe, hea, heb, upn, uk, britanic, ub, uc, pfc, ea, uea, cornier cu laturi inegale, shs, rhs, chs, formate la rece, laminate la cald, carte albastră, placă, aisc, en 10365, denumire
from: cd9b2bc3
---

DetailCraft are 2,311 dimensiuni integrate, fiecare copiată dintr-un tabel publicat și verificată de testele aplicației: aria calculată din dimensiuni trebuie să fie egală cu aria publicată, iar greutatea publicată trebuie să fie egală cu această arie înmulțită cu densitatea oțelului. Plăcile și profilele personalizate sunt făcute din dimensiunile lor.

## Denumire

- **Profilele US** se scriu cum le tipărește manualul AISC, cu x mic: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Tastarea nu deosebește majusculele de minuscule.
- **Țevile** se scriu ca în baza de date AISC: Pipe4STD, Pipe4XS, Pipe4XXS (standard, extra puternică, dublu extra puternică).
- **Profilele europene** se scriu ca în EN 10365: IPE200, HEA240, HEB300, UPN200 (fără spațiu).
- **Profilele britanice** se scriu cu familia întâi, apoi dimensiunea din Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Secțiunile tubulare formate la rece încep cu CF: CFSHS100x100x5.0. Scrierea așa cum apare des în desene funcționează și ea: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plăcile** sunt `PL<grosime>x<lățime>` în milimetri: PL20x200 are 20 mm grosime și 200 mm lățime. Orice dimensiune din instrumentul {{ui:Placă}} funcționează.
- **Profilele personalizate** au numele pe care îl dați, atâta timp cât nu este un nume din catalog și nu arată ca un nume de placă.

În listele {{ui:Profil}}, titlul fiecărui grup numește sursa sa, de exemplu „Profile W — AISC Shapes Database v16.0”.

## Surse

| Grup | Sursă | Note |
|---|---|---|
| Profile W, profile S, profile U (C), corniere (L), HSS, țevi | AISC Shapes Database v16.0 | Dimensiuni convertite exact din inch în milimetri; masa pe metru din lb/ft publicat |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimetri și kg/m așa cum sunt publicate |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabelul v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimetri și kg/m așa cum sunt publicate |
| Plăci | Parametric | Masa din aria × 7850 kg/m³ |
| Personalizate | Dimensiunile introduse | Masa din aria × 7850 kg/m³ |

Cum sunt desenate secțiunile:

- **Profile W:** baza de date AISC nu dă raza de racordare, deci DetailCraft desenează racordarea ca r = kdes − tf.
- **Profile S și profile U (C, UPN):** tălpi paralele cu grosimea medie publicată, colțuri drepte (talpa reală este înclinată).
- **Cornierele:** colțuri drepte.
- **HSS dreptunghiulare:** grosimea de proiectare a peretelui (0.93 × nominală, cum permite AISC 360-22 B4.2), cu raza exterioară a colțului de două ori mai mare.
- **HSS rotunde și țevi:** grosimea de proiectare a peretelui (0.93 × nominală).
- **IPE, HEA, HEB, UB, UC:** raza de racordare publicată la rădăcină.
- **PFC, EA, UEA:** colțuri drepte (masa și aria publicate includ încă razele).
- **SHS, RHS, CHS:** peretele nominal. Colțuri laminate la cald: exterior 1.5 t, interior t. Formate la rece: exterior 2 t, interior t până la 6 mm; 2.5 t și 1.5 t până la 10 mm; 3 t și 2 t peste.

## Dimensiunile

Fiecare dimensiune listată de tabelele din aceste grupuri, de la cea mai mică:

| Grup | Dimensiuni |
|---|---|
| Profile W (289) | W4x13 până la W44x408 |
| Profile S (28) | S3x5.7 până la S24x121 |
| Profile U (32) | C3x3.5 până la C15x50 |
| Corniere cu laturi egale (61) | L2x2x1/8 până la L12x12x1-3/8 |
| HSS, dreptunghiulare și pătrate (525) | HSS1-1/2x1-1/2x1/8 până la HSS34x10x1 |
| HSS, rotunde (189) | HSS1.660x0.140 până la HSS28.000x1.000 |
| Țevi (51) | Pipe1/2STD până la Pipe26XS |
| IPE (18) | IPE80 până la IPE600 |
| HEA (24) | HEA100 până la HEA1000 |
| HEB (24) | HEB100 până la HEB1000 |
| UPN (18) | UPN50 până la UPN400 |
| Corniere cu laturi inegale (76) | L2-1/2x1-1/2x3/16 până la L8x6x1 |
| UB (107) | UB127x76x13 până la UB1016x305x584 |
| UC (46) | UC152x152x23 până la UC356x406x1299 |
| PFC (16) | PFC100x50x10 până la PFC430x100x64 |
| EA (42) | EA20x20x3.0 până la EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 până la UEA200x150x18.0 |
| SHS, laminate la cald (123) | SHS40x40x3.2 până la SHS400x400x17.5 |
| RHS, laminate la cald (161) | RHS50x30x3.2 până la RHS500x300x17.5 |
| CHS, laminate la cald (103) | CHS42.4x3.2 până la CHS508.0x17.5 |
| CFSHS, formate la rece (96) | CFSHS25x25x2.0 până la CFSHS400x400x12.5 |
| CFRHS, formate la rece (137) | CFRHS50x25x2.0 până la CFRHS500x300x12.5 |
| CFCHS, formate la rece (106) | CFCHS33.7x3.0 până la CFCHS508.0x16.0 |

Un cornier cu laturi inegale oglindit este aceeași piesă întoarsă cap la cap, așa cum face un atelier varianta de sens opus: găurile, decupările și guseul merg cu ea.

Alegeți un instrument de plasare și o dimensiune ca să vedeți înălțimea, lățimea tălpii, grosimea inimii și a tălpii, raza de racordare, aria (cm²), masa (kg/m) și sursa în caseta {{ui:Profil}} din panoul {{ui:Proprietăți}}.

## Ce poate face fiecare formă

| Formă | Găuri | Decupări | Plăci de capăt și plăci de bază | Fișier NC | Desen de execuție |
|---|---|---|---|---|---|
| Profile I (W, S, IPE, HEA, HEB, UB, UC, I personalizat) | Inimă, talpă de sus, talpă de jos | Da | Plăci de capăt: grindă și stâlp. Plăci de bază: da | Da | Da |
| Profile U (C, UPN, PFC) | Inimă, talpă de sus, talpă de jos | Nu | Doar plăci de bază | Da | Da |
| HSS dreptunghiulare, SHS, RHS | Perete lateral (inimă), sus, jos | Nu | Doar plăci de bază | Da | Da |
| HSS rotunde, țevi, CHS | Încă nu | Nu | Doar plăci de bază | Da | Da |
| Corniere (L, EA, UEA) | Încă nu | Nu | Doar plăci de bază | Da | Da |
| Plăci și platbande personalizate | Fața plăcii | Nu | Nu | Da | Da |

Pentru o țeavă dreptunghiulară, o gaură pe fața „inimă” trece prin ambii pereți laterali. Ce conține fiecare fișier NC este în [Câmpurile fișierului NC](topic:nc1-fields).

## Este nevoie de altă dimensiune?

Adăugați-o ca [profil personalizat](topic:plates-and-profiles#add-a-custom-profile). Lista integrată nu poate fi editată încă din aplicație.
