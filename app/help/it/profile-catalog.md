---
title: Catalogo dei profili
summary: Ogni dimensione in acciaio integrata, come sono scritti i nomi dei profili, da dove provengono le dimensioni e come vengono denominate piastre e sezioni personalizzate.
keywords: profili, sezioni, catalogo, dimensioni, forme W, ali larghe, forme S, profilo a U, angolare, hss, tubo, tubo tondo, ipe, hea, heb, upn, uk, britannico, ub, uc, pfc, ea, uea, angolare a lati disuguali, shs, rhs, chs, formato a freddo, laminato a caldo, blue book, piastra, aisc, en 10365, denominazione
from: cd9b2bc3
---

DetailCraft ha 2,311 dimensioni integrate, ciascuna copiata da una tabella pubblicata e verificata dai test dell'applicazione: l'area ricavata dalle dimensioni deve coincidere con l'area pubblicata, e il peso pubblicato deve coincidere con quell'area per la densità dell'acciaio. Le piastre e i profili personalizzati sono ricavati dalle loro dimensioni.

## Denominazione

- **Le forme USA** sono scritte come le stampa l'AISC Manual, con x minuscola: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Nella digitazione non conta maiuscolo o minuscolo.
- **I tubi** sono scritti come nel database AISC: Pipe4STD, Pipe4XS, Pipe4XXS (standard, extra forte, doppio extra forte).
- **Le forme europee** sono scritte come in EN 10365: IPE200, HEA240, HEB300, UPN200 (senza spazio).
- **Le forme UK** sono scritte con prima la famiglia, poi la dimensione del Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Le sezioni cave formate a freddo iniziano con CF: CFSHS100x100x5.0. Funziona anche digitarle come spesso compaiono nei disegni: 305x165x40 UB, L100x100x10, SHS100x5.
- **Le piastre** sono `PL<thickness>x<width>` in millimetri: PL20x200 è 20 mm di spessore e 200 mm di larghezza. Qualsiasi dimensione dallo strumento {{ui:Piastra}} funziona.
- **I profili personalizzati** hanno il nome che si dà loro, purché non sia un nome di catalogo e non abbia l'aspetto di un nome di piastra.

Negli elenchi {{ui:Profilo}}, l'intestazione di ogni gruppo indica la sua fonte, per esempio "W shapes — AISC Shapes Database v16.0".

## Fonti

| Gruppo | Fonte | Note |
|---|---|---|
| Forme W, forme S, profili a U (C), angolari (L), HSS, tubi | AISC Shapes Database v16.0 | Dimensioni convertite esattamente da pollici a millimetri; massa per metro dal lb/ft pubblicato |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimetri e kg/m come pubblicati |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), table v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimetri e kg/m come pubblicati |
| Piastre | Parametrico | Massa da area × 7850 kg/m³ |
| Personalizzato | Dimensioni inserite | Massa da area × 7850 kg/m³ |

Come sono disegnate le forme:

- **Forme W:** il database AISC non dà il raggio di raccordo, quindi DetailCraft disegna il raccordo come r = kdes − tf.
- **Forme S e profili a U (C, UPN):** ali parallele dello spessore medio pubblicato, con spigoli squadrati (l'ala reale è inclinata).
- **Angolari:** spigoli squadrati.
- **HSS rettangolari:** lo spessore di parete di progetto (0.93 × nominale, come consente AISC 360-22 B4.2) con un raggio esterno dello spigolo pari al doppio.
- **HSS tondi e tubi:** spessore di parete di progetto (0.93 × nominale).
- **IPE, HEA, HEB, UB, UC:** il raggio di raccordo pubblicato.
- **PFC, EA, UEA:** spigoli squadrati (la massa e l'area pubblicate includono ancora i raggi).
- **SHS, RHS, CHS:** la parete nominale. Spigoli a caldo: esterno 1.5 t, interno t. A freddo: esterno 2 t, interno t fino a 6 mm; 2.5 t e 1.5 t fino a 10 mm; 3 t e 2 t oltre.

## Le dimensioni

Tutte le dimensioni elencate dalle tabelle in questi gruppi, dalla più piccola:

| Gruppo | Dimensioni |
|---|---|
| Forme W (289) | W4x13 a W44x408 |
| Forme S (28) | S3x5.7 a S24x121 |
| Profili a U (32) | C3x3.5 a C15x50 |
| Angolari, lati uguali (61) | L2x2x1/8 a L12x12x1-3/8 |
| HSS, rettangolari e quadrati (525) | HSS1-1/2x1-1/2x1/8 a HSS34x10x1 |
| HSS, tondi (189) | HSS1.660x0.140 a HSS28.000x1.000 |
| Tubi (51) | Pipe1/2STD a Pipe26XS |
| IPE (18) | IPE80 a IPE600 |
| HEA (24) | HEA100 a HEA1000 |
| HEB (24) | HEB100 a HEB1000 |
| UPN (18) | UPN50 a UPN400 |
| Angolari, lati disuguali (76) | L2-1/2x1-1/2x3/16 a L8x6x1 |
| UB (107) | UB127x76x13 a UB1016x305x584 |
| UC (46) | UC152x152x23 a UC356x406x1299 |
| PFC (16) | PFC100x50x10 a PFC430x100x64 |
| EA (42) | EA20x20x3.0 a EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 a UEA200x150x18.0 |
| SHS, laminati a caldo (123) | SHS40x40x3.2 a SHS400x400x17.5 |
| RHS, laminati a caldo (161) | RHS50x30x3.2 a RHS500x300x17.5 |
| CHS, laminati a caldo (103) | CHS42.4x3.2 a CHS508.0x17.5 |
| CFSHS, formati a freddo (96) | CFSHS25x25x2.0 a CFSHS400x400x12.5 |
| CFRHS, formati a freddo (137) | CFRHS50x25x2.0 a CFRHS500x300x12.5 |
| CFCHS, formati a freddo (106) | CFCHS33.7x3.0 a CFCHS508.0x16.0 |

Un angolare a lati disuguali specchiato è lo stesso pezzo girato da un capo all'altro, come fa un'officina per la versione opposta: i suoi fori, scassi e fazzoletto lo seguono.

Scegliere uno strumento di posizionamento e una dimensione per vedere altezza, larghezza dell'ala, spessori di anima e ala, raggio di raccordo, area (cm²), massa (kg/m) e fonte nella casella {{ui:Profilo}} del pannello {{ui:Proprietà}}.

## Cosa può fare ogni forma

| Forma | Fori | Scassi | Piastre di testa e di base | File NC | Disegno di officina |
|---|---|---|---|---|---|
| Profili a I (W, S, IPE, HEA, HEB, UB, UC, I personalizzato) | Anima, ala superiore, ala inferiore | Sì | Piastre di testa: trave e pilastro. Piastre di base: sì | Sì | Sì |
| Profili a U (C, UPN, PFC) | Anima, ala superiore, ala inferiore | No | Solo piastre di base | Sì | Sì |
| HSS rettangolari, SHS, RHS | Parete laterale (anima), superiore, inferiore | No | Solo piastre di base | Sì | Sì |
| HSS tondi, tubi, CHS | Non ancora | No | Solo piastre di base | Sì | Sì |
| Angolari (L, EA, UEA) | Non ancora | No | Solo piastre di base | Sì | Sì |
| Piastre e piatti personalizzati | Faccia della piastra | No | No | Sì | Sì |

Per un tubo rettangolare, un foro sulla faccia "anima" attraversa entrambe le pareti laterali. Il contenuto di ogni file NC è descritto in [Campi del file NC](topic:nc1-fields).

## Serve un'altra dimensione?

Aggiungerla come [profilo personalizzato](topic:plates-and-profiles#add-a-custom-profile). L'elenco integrato non può ancora essere modificato dall'applicazione.
