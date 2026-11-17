---
title: Katalogu i profileve
summary: Çdo madhësi çeliku e integruar, si shkruhen emrat e profileve, nga vijnë përmasat, dhe si emërtohen pllakat dhe prerjet e personalizuara.
keywords: profile, prerje, katalog, madhësi, W shapes, flanxhë e gjerë, S shapes, kanal, këndore, hss, tub, pipe, ipe, hea, heb, upn, uk, britanik, ub, uc, pfc, ea, uea, këndore e pabarabartë, shs, rhs, chs, cold formed, hot finished, blue book, pllakë, aisc, en 10365, emërtim
from: cd9b2bc3
---

DetailCraft ka 2,311 madhësi të integruara, secila e kopjuar nga një tabelë e publikuar dhe e kontrolluar nga testet e aplikacionit: sipërfaqja e llogaritur nga përmasat duhet të përputhet me sipërfaqen e publikuar, dhe pesha e publikuar duhet të përputhet me atë sipërfaqe shumëzuar me densitetin e çelikut. Pllakat dhe profilet e personalizuara krijohen nga përmasat e tyre.

## Emërtimi

- **Format US** shkruhen si i printon AISC Manual, me x të vogël: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Shkrimi nuk bën dallim midis shkronjave të mëdha dhe të vogla.
- **Pipe** shkruhet si në bazën e të dhënave AISC: Pipe4STD, Pipe4XS, Pipe4XXS (standard, ekstra e fortë, dyfish ekstra e fortë).
- **Format evropiane** shkruhen si në EN 10365: IPE200, HEA240, HEB300, UPN200 (pa hapësirë).
- **Format britanike** shkruhen me familjen e parë, pastaj madhësia e Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Profilet e formuara në të ftohtë nisin me CF: CFSHS100x100x5.0. Shkrimi siç e thonë shpesh vizatimet funksionon gjithashtu: 305x165x40 UB, L100x100x10, SHS100x5.
- **Pllakat** janë `PL<thickness>x<width>` në milimetra: PL20x200 është 20 mm e trashë dhe 200 mm e gjerë. Çdo madhësi nga mjeti {{ui:Pllaka}} funksionon.
- **Profilet e personalizuara** kanë emrin që u jep, me kusht të mos jetë emër katalogu dhe të mos duket si emër pllake.

Në listat {{ui:Profili}}, titulli i çdo grupi emëron burimin e tij, për shembull "W shapes — AISC Shapes Database v16.0".

## Burimet

| Grupi | Burimi | Shënime |
|---|---|---|
| W shapes, S shapes, Kanale (C), Këndore (L), HSS, Pipe | AISC Shapes Database v16.0 | Përmasat e konvertuara nga inç në milimetra saktësisht; masa për metër nga lb/ft e publikuar |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimetra dhe kg/m siç publikohen |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabela v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimetra dhe kg/m siç publikohen |
| Pllakat | Parametrike | Masa nga sipërfaqja × 7850 kg/m³ |
| Të personalizuara | Dimensionet e tua | Masa nga sipërfaqja × 7850 kg/m³ |

Si vizatohen format:

- **W shapes:** baza e AISC nuk jep rreze rrumbullakimi, prandaj DetailCraft e vizaton rrumbullakimin si r = kdes − tf.
- **S shapes dhe kanalet (C, UPN):** flanxha paralele me trashësinë mesatare të publikuar, qoshe të drejta (flanxha reale është e pjerrët).
- **Këndore:** qoshe të drejta.
- **HSS drejtkëndore:** trashësia e projektimit të murit (0.93 × nominale, siç lejon AISC 360-22 B4.2) me një rreze të jashtme qoshe prej dyfishit të saj.
- **HSS rrethore dhe Pipe:** trashësia e projektimit të murit (0.93 × nominale).
- **IPE, HEA, HEB, UB, UC:** rrezja e publikuar e rrënjës.
- **PFC, EA, UEA:** qoshe të drejta (masa dhe sipërfaqja e publikuar ende përfshijnë rrezet).
- **SHS, RHS, CHS:** muri nominal. Qoshe të mbaruara të nxehta: jashtë 1.5 t, brenda t. Të formuara në të ftohtë: jashtë 2 t, brenda t deri në 6 mm; 2.5 t dhe 1.5 t deri në 10 mm; 3 t dhe 2 t mbi 10 mm.

## Madhësitë

Çdo madhësi që tabelat listojnë në këto grupe, më e vogla e para:

| Grupi | Madhësitë |
|---|---|
| W shapes (289) | W4x13 deri W44x408 |
| S shapes (28) | S3x5.7 deri S24x121 |
| Kanale (32) | C3x3.5 deri C15x50 |
| Këndore, krahë të barabartë (61) | L2x2x1/8 deri L12x12x1-3/8 |
| HSS, drejtkëndore dhe katrore (525) | HSS1-1/2x1-1/2x1/8 deri HSS34x10x1 |
| HSS, rrethore (189) | HSS1.660x0.140 deri HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD deri Pipe26XS |
| IPE (18) | IPE80 deri IPE600 |
| HEA (24) | HEA100 deri HEA1000 |
| HEB (24) | HEB100 deri HEB1000 |
| UPN (18) | UPN50 deri UPN400 |
| Këndore, krahë të pabarabartë (76) | L2-1/2x1-1/2x3/16 deri L8x6x1 |
| UB (107) | UB127x76x13 deri UB1016x305x584 |
| UC (46) | UC152x152x23 deri UC356x406x1299 |
| PFC (16) | PFC100x50x10 deri PFC430x100x64 |
| EA (42) | EA20x20x3.0 deri EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 deri UEA200x150x18.0 |
| SHS, të mbaruara të nxehta (123) | SHS40x40x3.2 deri SHS400x400x17.5 |
| RHS, të mbaruara të nxehta (161) | RHS50x30x3.2 deri RHS500x300x17.5 |
| CHS, të mbaruara të nxehta (103) | CHS42.4x3.2 deri CHS508.0x17.5 |
| CFSHS, të formuara në të ftohtë (96) | CFSHS25x25x2.0 deri CFSHS400x400x12.5 |
| CFRHS, të formuara në të ftohtë (137) | CFRHS50x25x2.0 deri CFRHS500x300x12.5 |
| CFCHS, të formuara në të ftohtë (106) | CFCHS33.7x3.0 deri CFCHS508.0x16.0 |

Një këndore e pabarabartë e pasqyruar është e njëjta pjesë e kthyer nga skaji në skaj, ashtu si e bën një punishte dorën e kundërt: vrimat, prerjet dhe pllaka lidhëse shkojnë me të.

Zgjidh një mjet vendosjeje dhe zgjidh një madhësi për të parë thellësinë, gjerësinë e flanxhës, trashësinë e rrjetës dhe flanxhës, rrezen e rrumbullakimit, sipërfaqen (cm²), masën (kg/m) dhe burimin te kutia {{ui:Profili}} e panelit {{ui:Vetitë}}.

## Çfarë mund të bëjë çdo formë

| Forma | Vrimat | Prerjet | Pllakat fundore dhe pllakat bazë | Skedari NC | Vizatimi i punishtes |
|---|---|---|---|---|---|
| I-shape (W, S, IPE, HEA, HEB, UB, UC, I të personalizuara) | Rrjeta, flanxha e sipërme, flanxha e poshtme | Po | Pllaka fundore: trari dhe kolona. Pllaka baze: po | Po | Po |
| Kanale (C, UPN, PFC) | Rrjeta, flanxha e sipërme, flanxha e poshtme | Jo | Vetëm pllaka baze | Po | Po |
| HSS drejtkëndore, SHS, RHS | Muri anësor (rrjeta), e sipërme, e poshtme | Jo | Vetëm pllaka baze | Po | Po |
| HSS rrethore, Pipe, CHS | Jo ende | Jo | Vetëm pllaka baze | Po | Po |
| Këndore (L, EA, UEA) | Jo ende | Jo | Vetëm pllaka baze | Po | Po |
| Pllakat dhe shiritat e sheshtë të personalizuar | Faqja e pllakës | Jo | Jo | Po | Po |

Për një tub drejtkëndor, një vrimë në faqen "rrjetë" kalon nëpër të dy muret anësore. Çfarë përmban çdo skedar NC është te [Fushat e skedarit NC](topic:nc1-fields).

## Të duhet një madhësi tjetër?

Shtoje si një [profil i personalizuar](topic:plates-and-profiles#add-a-custom-profile). Lista e integruar nuk mund të redaktohet nga aplikacioni ende.
