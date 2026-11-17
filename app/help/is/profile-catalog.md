---
title: Sniðskrá
summary: Sérhver innbyggð stálstærð, hvernig heiti sniða eru skrifuð, hvaðan málin koma og hvernig plötur og sérsniðin þversnið eru nefnd.
keywords: snið, þversnið, skrá, stærðir, w-snið, breiðir flansar, s-snið, rás, horn, hss, rör, pípa, ipe, hea, heb, upn, uk, bresk, ub, uc, pfc, ea, uea, ójöfn horn, shs, rhs, chs, kaldmótað, heitvalsað, blue book, plata, aisc, en 10365, nafngift
from: cd9b2bc3
---

DetailCraft hefur 2.311 innbyggðar stærðir, hver afrituð úr birtri töflu og prófuð af prófunum forritsins: flatarmálið sem reiknað er út frá málunum verður að passa við birta flatarmálið, og birta þyngdin verður að passa við það flatarmál sinnum eðlismassa stáls. Plötur og sérsniðin snið eru gerð út frá málum sínum.

## Nafngift

- **Bandarísk snið** eru skrifuð eins og AISC-handbókin prentar þau, með lágstafnum x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Ekki skiptir máli hvort stafir eru hástafir eða lágstafir þegar slegið er inn.
- **Pípa** er skrifuð eins og í AISC-gagnagrunninum: Pipe4STD, Pipe4XS, Pipe4XXS (staðlað, extra sterkt, tvöfalt extra sterkt).
- **Evrópsk snið** eru skrifuð eins og í EN 10365: IPE200, HEA240, HEB300, UPN200 (án bils).
- **Bresk snið** eru skrifuð með fjölskyldunni fyrst, síðan stærð Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Kaldmótuð holsnið byrja á CF: CFSHS100x100x5.0. Það virkar líka að slá inn eins og teikningar nota oft: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plötur** eru `PL<thickness>x<width>` í millimetrum: PL20x200 er 20 mm þykk og 200 mm breið. Sérhver stærð úr verkfærinu {{ui:Plata}} virkar.
- **Sérsniðin snið** fá það heiti sem þú gefur þeim, svo lengi sem það er ekki heiti úr skránni og líkist ekki heiti plötu.

Í {{ui:Snið}}-listunum nefnir fyrirsögn hvers hóps uppruna sinn, til dæmis „W-snið — AISC Shapes Database v16.0“.

## Heimildir

| Hópur | Heimild | Athugasemdir |
|---|---|---|
| W-snið, S-snið, rásir (C), horn (L), HSS, pípa | AISC Shapes Database v16.0 | Mál umreiknuð úr tommum í millimetra nákvæmlega; massi á metra úr birtum lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimetrar og kg/m eins og birt er |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tafla v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimetrar og kg/m eins og birt er |
| Plötur | Breytustýrt | Massi út frá flatarmáli × 7850 kg/m³ |
| Sérsniðið | Þín eigin mál | Massi út frá flatarmáli × 7850 kg/m³ |

Svona eru snið teiknuð:

- **W-snið:** AISC-gagnagrunnurinn gefur engan sveigjuradíus, þannig að DetailCraft teiknar sveigjuna sem r = kdes − tf.
- **S-snið og rásir (C, UPN):** samsíða flansar með birtri meðalþykkt, ferkantuð horn (raunverulegi flansinn er hallandi).
- **Horn:** ferkantuð horn.
- **Ferhyrnt HSS:** hönnunarveggþykktin (0,93 × nafnstærð, eins og AISC 360-22 B4.2 leyfir) með ytri hornradíus sem er tvöfalt það.
- **Kringlótt HSS og pípa:** hönnunarveggþykkt (0,93 × nafnstærð).
- **IPE, HEA, HEB, UB, UC:** birti rótarradíusinn.
- **PFC, EA, UEA:** ferkantuð horn (birtur massi og flatarmál innihalda samt radíusana).
- **SHS, RHS, CHS:** nafnveggurinn. Heitvalsuð horn: ytri 1,5 t, innri t. Kaldmótuð: ytri 2 t, innri t upp að 6 mm; 2,5 t og 1,5 t upp að 10 mm; 3 t og 2 t yfir því.

## Stærðirnar

Sérhver stærð sem töflurnar telja upp í þessum hópum, minnst fyrst:

| Hópur | Stærðir |
|---|---|
| W-snið (289) | W4x13 til W44x408 |
| S-snið (28) | S3x5.7 til S24x121 |
| Rásir (32) | C3x3.5 til C15x50 |
| Horn, jafnir fætur (61) | L2x2x1/8 til L12x12x1-3/8 |
| HSS, ferhyrnt og ferkantað (525) | HSS1-1/2x1-1/2x1/8 til HSS34x10x1 |
| HSS, kringlótt (189) | HSS1.660x0.140 til HSS28.000x1.000 |
| Pípa (51) | Pipe1/2STD til Pipe26XS |
| IPE (18) | IPE80 til IPE600 |
| HEA (24) | HEA100 til HEA1000 |
| HEB (24) | HEB100 til HEB1000 |
| UPN (18) | UPN50 til UPN400 |
| Horn, ójafnir fætur (76) | L2-1/2x1-1/2x3/16 til L8x6x1 |
| UB (107) | UB127x76x13 til UB1016x305x584 |
| UC (46) | UC152x152x23 til UC356x406x1299 |
| PFC (16) | PFC100x50x10 til PFC430x100x64 |
| EA (42) | EA20x20x3.0 til EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 til UEA200x150x18.0 |
| SHS, heitvalsað (123) | SHS40x40x3.2 til SHS400x400x17.5 |
| RHS, heitvalsað (161) | RHS50x30x3.2 til RHS500x300x17.5 |
| CHS, heitvalsað (103) | CHS42.4x3.2 til CHS508.0x17.5 |
| CFSHS, kaldmótað (96) | CFSHS25x25x2.0 til CFSHS400x400x12.5 |
| CFRHS, kaldmótað (137) | CFRHS50x25x2.0 til CFRHS500x300x12.5 |
| CFCHS, kaldmótað (106) | CFCHS33.7x3.0 til CFCHS508.0x16.0 |

Spegluð ójöfn horn eru sami hluturinn snúinn á enda, eins og verkstæði býr til gagnstæða hönd: göt þess, úrtökur og hornplata fylgja með.

Veldu staðsetningarverkfæri og veldu stærð til að sjá hæð, breidd flans, þykkt sálar og flans, sveigjuradíus, flatarmál (cm²), massa (kg/m) og heimild í {{ui:Snið}}-reitnum í spjaldinu {{ui:Eiginleikar}}.

## Hvað hvert snið getur

| Lögun | Göt | Úrtökur | Endaplötur og undirplötur | NC-skrá | Verkstæðisteikning |
|---|---|---|---|---|---|
| I-snið (W, S, IPE, HEA, HEB, UB, UC, sérsniðin I) | Sál, efri flans, neðri flans | Já | Endaplötur: biti og súla. Undirplötur: já | Já | Já |
| Rásir (C, UPN, PFC) | Sál, efri flans, neðri flans | Nei | Aðeins undirplötur | Já | Já |
| Ferhyrnt HSS, SHS, RHS | Hliðarveggur (sál), efri, neðri | Nei | Aðeins undirplötur | Já | Já |
| Kringlótt HSS, pípa, CHS | Ekki enn | Nei | Aðeins undirplötur | Já | Já |
| Horn (L, EA, UEA) | Ekki enn | Nei | Aðeins undirplötur | Já | Já |
| Plötur og sérsniðin flatjárn | Plötuflötur | Nei | Nei | Já | Já |

Fyrir ferhyrnt rör fer gat á „sálar“-fletinum í gegnum báða hliðarveggi. Hvað hver NC-skrá geymir er í [Reitir NC-skráa](topic:nc1-fields).

## Þarftu aðra stærð?

Bættu henni við sem [sérsniðið snið](topic:plates-and-profiles#add-a-custom-profile). Ekki er hægt að breyta innbyggðum lista úr forritinu enn.
