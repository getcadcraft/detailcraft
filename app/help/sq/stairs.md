---
title: Shkallët
summary: Vendos një shkallë të drejtë çeliku nga lartësia e ngritjes, shtrirja dhe gjerësia: dy mbajtëse dhe pllaka hapi, një montim i vetëm i saldosur.
keywords: shkallë, shkallët, shkallore, mbajtëse, pllakë hapi, ngritje, shtrirje, buzë, shkallë çeliku, ibc 1011, blondel
from: 62fa3845
---

Një shkallë e drejtë çeliku: dy mbajtëse (kanale me majat brenda, ose shirita të sheshtë vendosur mbi skaj) dhe një pllakë hapi në çdo hap, e saldosur midis tyre. DetailCraft llogarit numrin e ngritjeve nga lartësia e ngritjes, i kontrollon me kufijtë e kodit të ndërtimit, dhe e bën shkallën një montim të vetëm në punëtori.

## Vendos një shkallë

1. Zgjidh {{ui:Stair}} te grupi {{ui:Place}}, ose shtyp {{key:S}}.
2. Cakto shkallën në të djathtë: **drejtimin e ngjitjes** (0° ngjitet përgjatë +x, 90° përgjatë +y), **ngritjen** (0 = deri në nivelin tjetër), **shtrirjen**, **gjerësinë e lirë** midis mbajtëseve, **ngritjen më të lartë të lejuar**, **mbajtësen**, **trashësinë e pllakës së hapit**, **buzën e hapit** dhe materialin.
3. Kliko një kryqëzim rrjeti: ai është këmba e ngritjes së parë, në vijën qendrore të shkallës.

Shiriti i gjendjes thotë sa ngritje bëri. Zgjidh shkallën (kliko një mbajtëse ose një pllakë hapi) për të ndryshuar çdo cilësim të saj, pozicionin ose fazën; vetitë tregojnë gjithashtu ngritjet, hapat, gjatësinë totale, pjerrësinë dhe 2 × ngritja + shtrirja.

## Çfarë llogarit DetailCraft

- **Ngritjet.** Sa më pak që mbajnë çdo ngritje në ose nën ngritjen më të lartë të lejuar: një ngritje 3000 mm me 178 mm ose më pak jep 17 ngritje prej 176.5 mm. Ka një pllakë hapi më pak se ngritje (dyshemeja e sipërme është hapi i fundit).
- **Pllakat e hapit.** Një pllakë me thellësi shtrirje + buzë (280 + 25 = PL6x305 si parazgjedhje) dhe aq e gjatë sa gjerësia e lirë, me sipërfaqen e sipërme në lartësinë e çdo ngritjeje, me skajin e përparmë (buzën) përpara vijës së ngritjes.
- **Mbajtëset.** Me pjerrësinë e shkallës, nga aty ku takohen me dyshemenë e poshtme deri aty ku takohen me atë të sipërme, pak jashtë gjerësisë së lirë, me buzën e sipërme 50 mm mbi vijën e buzëve. Maja e një kanali shikon brenda shkallës; një shirit i sheshtë si PL12x250 qëndron mbi skaj.
- **Saldimet.** Çdo pllakë hapi te të dyja mbajtëset. Pllakat e hapit dhe mbajtësja e djathtë janë të saldosura te mbajtësja e majtë, kështu që shkalla merr një shenjë montimi të vetme (ST1) dhe vizatimin e vet të montimit; mbajtëset marrin shenjat e pjesëve st…, pllakat e hapit p….
- **Kontrollet.** Paralajmërime kur një ngritje është jashtë 4 deri 7 in. (102 deri 178 mm) ose shtrirja është nën 11 in. (279 mm), kufijtë e IBC 2021 seksioni 1011.5.2, kur 2 × ngritja + shtrirja është jashtë 600 deri 650 mm (një rregull i zakonshëm rehatie), dhe kur mbajtësja është shumë e cekët për të mbajtur pllakat e hapit. Një profil i panjohur mbajtëse e ndalon shkallën nga ndërtimi.

## Vlen të dish

- Zhvendos, rrotullo, pasqyro, kopjo, ngjit, fshi dhe fazat funksionojnë te një shkallë si te një element. Një rrotullim e kthen ngjitjen; një pasqyrim e dërgon në drejtimin e pasqyruar.
- Mbajtëset eksportohen në IFC si IfcMember dhe pllakat e hapit si IfcPlate; të dyja shkojnë te skedarët NC dhe lista e materialeve. Kontrolli i përplasjeve i lë jashtë pjesët vetë të shkallës (janë të saldosura bashkë).
- Kjo shkallë e thjeshtë është një fluturim me pllaka hapi. Për pllatforma, rrokore me balusta, pllaka të palosura ose rrjetë, një grup rregullash që zgjedh ti, një listë prerjesh dhe vizatimet e vrimave të mbajtëseve, shëno {{ui:Use the steel stair generator}} te mjeti {{ui:Stair}} (shih Gjeneratori i shkallës prej çeliku).
- Mbajtëset priten drejt: prerjet e skajeve kundër dyshemeve nuk bëhen.
- DetailCraft nuk e projekton shkallën: mbajtëset dhe pllakat e hapit nuk kontrollohen për forcë ose përkulje.
