---
title: Pošalji NC datoteke u radionicu
summary: Izvezi DSTV NC datoteke za svaku oznaku dela (I-profili, U-profili, uglovi, HSS, limovi), spakovane u zip, i proveri ih pre nego što stignu do mašine.
keywords: nc, nc1, dstv, cnc, mašina, linija greda, linija bušenja, sečenje limova, izvoz, izrada, zip
from: 598b6091
---

DetailCraft upisuje jednu DSTV NC datoteku (`.nc1`) za svaku oznaku dela, za I-profile, U-profile, uglove, pravougaone i okrugle HSS profile i limove, i spakuje ih zajedno u zip arhivu. Linijske mašine za grede i mašine za sečenje limova čitaju ove datoteke da bi pilile, bušile i sekle.

## Izvoz

1. Najpre isprazni karticu {{ui:Problemi}}: veza koja ne može da se napravi ne dodaje nijednu rupu.
2. Sačuvaj model ({{key:Mod+S}}), da se NC datoteke poklapaju sa sačuvanim modelom.
3. Izaberi {{ui:NC datoteke}} u grupi {{ui:Izlaz}}.
4. Pregledač preuzima `<naziv> NC.zip`. Statusna traka kaže koliko datoteka sadrži i navodi oznake koje nije upisala (ugao ili okrugla cev sa izrezom).

Unutar zip arhive svaka datoteka dobija ime po oznaci dela: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip arhiva nije kompresovana i otvara se bilo kojim alatom za zip arhive.

Ako model nema delova, statusna traka to kaže.

## Šta sadrži svaka datoteka

- **Zaglavlje (ST):** naziv modela kao porudžbina, oznaka dela kao crtež i komad, faza 1, oznaka kvaliteta materijala, količina, profil i njegove dimenzije, masa po metru i površina za farbanje po metru. Rezovi testerom su upravni.
- **Spoljašnji konturi (AK):** obris rebra sa svim izrezima, i svaki obris pojasa skraćen tamo gde ga izrez uklanja.
- **Rupe (BO):** svaka rupa sa svojom stranom, položajem i prečnikom, uključujući rupe koje naprave krajnji limovi i podložni limovi.

Polje po polje, sa pravilima za strane i koordinate: [Polja NC datoteke](topic:nc1-fields).

## Šta se ne upisuje

- Uglovi i okrugle cevi sa izrezom: nema NC datoteke. Njihove oznake su navedene u statusnoj traci.
- Rupe u okruglim cevima (DetailCraft ih ne pravi).
- Skosi, unutrašnji konturi, oznake za obeležavanje i uglovi reza različiti od upravnog.
- Duguljaste rupe (DetailCraft ima samo okrugle rupe).

## Proveri pre obrade

DetailCraft-ove NC datoteke čita nazad sopstveni skup testova, ali nisu pokrenute na mašinama tvoje radionice.

1. Otvori datoteke u pregledaču NC datoteka tvoje radionice ili u softveru mašine i uporedi ih sa radioničkim crtežima.
2. Proveri jedan deo svake vrste na mašini pre nego što pokreneš seriju.
3. Proveri kako tvoj softver čita y-koordinate pojasa i strane U-profila: DetailCraft meri y pojasa od zadnje ivice i polaže U-profile na leđa kako ih standard crta (vidi [Polja NC datoteke](topic:nc1-fields#faces-and-coordinates)).
