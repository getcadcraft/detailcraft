---
title: Slanje NC datoteka u radionicu
summary: Izvezite DSTV NC datoteke za svaku oznaku pozicije (I-profili, U-profili, kutnici, HSS, ploče), spakirane u zip, i provjerite ih prije nego stignu na stroj.
keywords: nc, nc1, dstv, cnc, stroj, linija za grede, linija za bušenje, rezanje ploča, izvoz, izrada, zip
from: 598b6091
---

DetailCraft zapisuje jednu DSTV NC datoteku (`.nc1`) po oznaci pozicije, za I-profile, U-profile, kutnike, pravokutne i okrugle HSS-ove te ploče, i sve ih spaja u zip arhivu. Linije za grede i strojevi za ploče čitaju te datoteke za pilenje, bušenje i rezanje.

## Izvoz

1. Najprije očistite karticu {{ui:Problemi}}: veza koja nije mogla biti izrađena ne dodaje nikakve provrte.
2. Spremite model ({{key:Mod+S}}) kako bi NC datoteke odgovarale spremljenom modelu.
3. Odaberite {{ui:NC datoteke}} u grupi {{ui:Izlaz}}.
4. Preglednik preuzima `<name> NC.zip`. Statusna traka kaže koliko datoteka sadrži i navodi sve oznake koje nisu zapisane (kutnik ili okrugla cijev s izrezom).

U zip arhivi svaka je datoteka nazvana prema svojoj oznaci pozicije: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip arhiva nije komprimirana i otvara se bilo kojim alatom za zip arhive.

Ako model nema dijelova, statusna traka to navodi.

## Što sadrži svaka datoteka

- **Zaglavlje (ST):** naziv modela kao narudžba, oznaka pozicije kao crtež i komad, faza 1, kvaliteta materijala, količina, profil i njegove dimenzije, masa po metru i površina za bojanje po metru. Rezovi pile su okomiti.
- **Vanjske konture (AK):** obris hrpta s izrezima, te obris svakog pojasa skraćen tamo gdje izrez uklanja pojas.
- **Provrti (BO):** svaki provrt s plohom, položajem i promjerom, uključujući provrte koje izrađuju čeone i podložne ploče.

Polje po polje, s pravilima za plohe i koordinate: [Polja NC datoteke](topic:nc1-fields).

## Što se ne zapisuje

- Kutnici i okrugle cijevi s izrezom: nema NC datoteke. Njihove oznake navedene su u statusnoj traci.
- Provrti u okruglim cijevima (DetailCraft ih ne izrađuje).
- Skošenja, unutarnje konture, označavanje pozicija (ocrtavanje) i kutovi pile različiti od okomitih.
- Provrti s utorom (DetailCraft ima samo okrugle provrte).

## Provjera prije obrade

NC datoteke programa DetailCraft provjerava vlastiti skup testova, ali nisu bile pokrenute na strojevima vaše radionice.

1. Otvorite datoteke u NC pregledniku vaše radionice ili u softveru stroja i usporedite ih s radioničkim crtežima.
2. Prije pokretanja serije na stroju provjerite po jedan dio svake vrste.
3. Provjerite kako vaš softver čita y-koordinate pojasa i plohe U-profila: DetailCraft mjeri y pojasa od stražnjeg ruba i polaže U-profile na leđa kako ih norma crta (vidi [Polja NC datoteke](topic:nc1-fields#faces-and-coordinates)).
