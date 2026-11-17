---
title: Pošalji NC datoteke u radionicu
summary: Izvezi DSTV NC datoteke za svaku oznaku dijela (I-profili, kanali, uglovi, HSS, limovi), spakovane u zip, i provjeri ih prije nego stignu na mašinu.
keywords: nc, nc1, dstv, cnc, mašina, linija greda, linija bušenja, rezanje limova, izvoz, proizvodnja, zip
from: 598b6091
---

DetailCraft piše jednu DSTV NC datoteku (`.nc1`) za svaku oznaku dijela, za I-profile, kanale, uglove, pravougaone i okrugle HSS i limove, i sve ih spakuje u zip. Linije za grede i mašine za rezanje limova čitaju ove datoteke za piljenje, bušenje i rezanje.

## Izvoz

1. Najprije isprazni karticu {{ui:Problems}}: veza koja nije mogla biti napravljena ne dodaje rupe.
2. Spasi model ({{key:Mod+S}}), da se NC datoteke poklapaju sa spašenim modelom.
3. Odaberi {{ui:NC files}} u grupi {{ui:Output}}.
4. Preglednik preuzima `<name> NC.zip`. Statusna traka kaže koliko datoteka sadrži i navodi oznake koje nisu zapisane (ugao ili okrugla cijev sa izrezom).

Unutar zipa svaka datoteka nosi naziv po oznaci dijela: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip nije kompresovan i otvara se bilo kojim alatom za zip.

Ako model nema dijelova, statusna traka to kaže.

## Šta sadrži svaka datoteka

- **Zaglavlje (ST):** naziv modela kao narudžba, oznaka dijela kao crtež i komad, faza 1, kvalitet čelika, količina, profil i njegove dimenzije, masa po metru i površina premaza po metru. Rezovi pilom su pod pravim uglom.
- **Vanjski konturi (AK):** obris rebra sa svim izrezima, i svaki obris pojasnice skraćen tamo gdje izrez uklanja pojasnicu.
- **Rupe (BO):** svaka rupa sa svojom stranom, položajem i prečnikom, uključujući rupe koje naprave krajnje ploče i bazne ploče.

Polje po polje, sa pravilima za strane i koordinate: [Polja NC datoteke](topic:nc1-fields).

## Šta se ne zapisuje

- Uglovi i okrugle cijevi sa izrezom: nema NC datoteke. Njihove oznake su navedene u statusnoj traci.
- Rupe u okruglim cijevima (DetailCraft ih ne pravi).
- Zakošenja, unutrašnji konturi, oznake dijelova (scribing) i uglovi piljenja osim pravog ugla.
- Rupe u obliku proreza (DetailCraft ima samo okrugle rupe).

## Provjeri prije obrade

DetailCraft-ove NC datoteke čita nazad njegov vlastiti testni paket, ali nisu pokretane na mašinama vaše radionice.

1. Otvori datoteke u NC pregledniku vaše radionice ili softveru mašine i uporedi ih sa radioničkim crtežima.
2. Provjeri jedan dio svake vrste na mašini prije pokretanja serije.
3. Provjeri kako tvoj softver čita y-koordinate pojasnica i strane kanala: DetailCraft mjeri y pojasnice od zadnje ivice i polaže kanale na leđa kako ih standard crta (vidi [Polja NC datoteke](topic:nc1-fields#faces-and-coordinates)).
