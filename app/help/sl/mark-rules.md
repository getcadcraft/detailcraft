---
title: Pravila oznak
summary: Natančno, kdaj imata dva dela ali dva sestava isto oznako, kako se oznake številčijo in kako delujeta oznaki temeljev in palic.
keywords: oznake, številčenje, oznaka dela, oznaka sestava, oznaka kosa, predpona, toleranca, enaki deli, oznake palic, oznake temeljev
from: ce02c98e
---

DetailCraft ponovno izračuna vsako oznako po vsaki spremembi. Nič se ne shrani, zato oznake vedno opisujejo model, kakršen je zdaj. Glejte [Preverite oznake in kosovnico](topic:marks-and-bom), kako jih uporabljati.

## Oznake delov

Dva dela imata isto oznako dela, kadar se ujemajo vsi ti pogoji:

1. Tip dela (nosilec, steber, diagonala ali plošča).
2. Ime profila (brez razlikovanja velikih in malih črk).
3. Material (brez razlikovanja velikih in malih črk).
4. Dolžina reza, znotraj 1 mm.
5. Vsaka luknja: stran, položaj vzdolž in čez, znotraj 1 mm, in premer znotraj 0.1 mm.
6. Vsak izrez: konec, stran, dolžina in globina, znotraj 1 mm.

Ime elementa {{ui:Name}} (Ime) se ne šteje. Prav tako ne njegov položaj v modelu, rotacija ali smer, v kateri je bil narisan, dokler je sam del enak.

### Obrnjeni deli

Del se primerja na vse načine, kako ga je mogoče obrniti, da se njegov prerez preslika sam nase. Če eden od teh načinov povzroči ujemanje z drugim delom, imajo isto oznako.

| Oblika | Obrati, ki štejejo |
|---|---|
| I-profili, pravokotni HSS, plošče | Konec za konec (okrog navpične osi), konec za konec (okrog vodoravne osi) in na glavo okrog lastne dolžine |
| Kanali (U profili) | Samo konec za konec okrog vodoravne osi, tako da rebro ostane na isti strani |
| Koti (L profili), okrogli HSS | Nobeden: primerjajo se, kot so položeni |

Tako nosilec z luknjo blizu levega konca ustreza nosilcu z isto luknjo blizu desnega konca, steber z luknjami v eni pasnici pa stebru z istimi luknjami v drugi pasnici.

### Številčenje

| Tip | Predpona dela | Predpona sestava |
|---|---|---|
| Steber | c | C |
| Nosilec | b | B |
| Diagonala | br | BR |
| Plošča (postavljena, čelna plošča ali temeljna plošča) | p | P |

Oznake so številčene od 1 znotraj vsake predpone. Vrstni red je: stebri, nato nosilci, diagonale in plošče; znotraj tipa po imenu profila v naravnem vrstnem redu (W8x10 pred W12x26); nato daljši deli prej.

Ker številčenje sledi temu vrstnemu redu, lahko dodajanje ali spreminjanje enega dela premakne številke drugih.

## Oznake sestavov

- Vsak del, ki ni zvarjen z drugim delom, je glavni del lastnega sestava.
- Čelne plošče so zvarjene na svoj nosilec, temeljne plošče na svoj steber, zato pripadajo sestavu tega elementa.
- Dva sestava imata isto oznako, kadar imata njuna glavna dela isto oznako dela in njuni pripeti deli imajo iste oznake na istih mestih (znotraj 1 mm), ob dovoljenju istih obratov kot pri glavnem delu.
- Predpona sestava sledi glavnemu delu: nosilec z dvema čelnima ploščama je sestav B.

Plošče, ki jih postavite z orodjem {{ui:Plate}} (Plošča), niso zvarjene na nič, zato je vsaka svoj sestav P.

## Oznake temeljev

Temelji z isto dolžino, širino, globino, besedilom betona, spodnjo mrežo in začetnimi palicami imajo isto oznako: F1, F2 … v vrstnem redu, kot so bili postavljeni. Položaj in rotacija se ne štejeta.

## Oznake palic

Palice z isto velikostjo, obliko in merami A, B in C (zaokroženo na milimeter) imajo isto oznako v vseh temeljih. Oznaka je številka palice, F in števec za vsako velikost palice: 5F1, 5F2, 6F1. Dolga in kratka palica kvadratnega temelja sta ista palica in imata isto oznako; stolpec {{ui:Used for}} (Uporaba) v izvleku navaja obe uporabi.
