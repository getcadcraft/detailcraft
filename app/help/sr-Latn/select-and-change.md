---
title: Izbor prozorom, pomeranje, obrtanje, ogledanje, promena više elemenata
summary: Prevuci prozor za izbor, prevuci izabrane delove da ih pomeriš, pomeri, obrni ili ogledaj izbor (ili njegovu kopiju), ili promeni profil, materijal, položaj ili obrtanje više elemenata odjednom.
keywords: omča, ograda, slobodan izbor, prevlačenje, prevuci i pusti, pomeranje prevlačenjem, hvatanje, prozor, ukrštanje, izbor okvirom, prevlačenje za izbor, izbor više, pomeri, obrni, ogledaj, kopiraj, promeni više, više elemenata, profil, materijal, položaj, obrtanje, različito, linija mreže
from: 50b16f9a
---

Svaka od ovih radnji je jedan korak opoziva: jedan {{key:Mod+Z}} sve vraća.

## Izbor prozorom

- U {{ui:Osnova}} i {{ui:Izgled}} prevuci levim tasterom miša iz praznog mesta. U {{ui:3D}} drži {{key:Shift}} i prevuci (običan prevlak obrće model).
- Prevuci **udesno** za prozor: uzima ono što je potpuno unutra, nacrtano punom ivicom.
- Prevuci **ulevo** za ukrštajući prozor: uzima sve što dodiruje, nacrtano isprekidano.
- Drži {{key:Shift}} dok počinješ prevlačenje da dodaš u izbor umesto da ga zameniš.
- Osnova ili izgled nude samo ono što prikazuju: delovi odsečeni iznad osnove ili više od 1 m od linije mreže izgleda ne biraju se.
- {{key:Esc}} dok prevlačiš odbacuje prozor.

### Omča

Izaberi **Omča** pod {{ui:Prevlačenje za izbor}} u [DetailCraft podešavanjima](topic:settings) i isto prevlačenje crta slobodnu liniju umesto pravougaonika.

- Prvi pomak u stranu određuje kako bira: **udesno**, ono što je potpuno unutra (puna linija); **ulevo**, ono što dodiruje (isprekidano).
- Pritisni {{key:Space}} dok prevlačiš da prelaziš između unutra, dodirivanja i **ograda**: otvorena linija koja uzima sve što preseče (tačkasto, narandžasto).
- {{key:Shift}} za dodavanje i {{key:Esc}} za odbacivanje rade kao kod prozora.

:::touch
Na ekranu osetljivom na dodir, jedan prst pomera pogled na osnovi i izgledu kao i ranije; biraj delove dodirom.
:::

U {{ui:Osnova}} i {{ui:Izgled}}, pomeraj pogled desnim ili srednjim tasterom dok je alat {{ui:Izaberi}} uključen.

## Prevuci delove da ih pomeriš

1. Prvo izaberi delove (klik, {{key:Shift}}+klik ili prozor).
2. Pritisni na jedan od izabranih delova i prevuci. Ceo izbor se pomera; isprekidana kontura pokazuje gde ide.
3. Pusti da ga postaviš. {{key:Esc}} pre nego što pustiš vraća sve na mesto.

- U {{ui:3D}} i {{ui:Osnova}} delovi se pomeraju po nivou. Drži {{key:Mod}} dok počinješ prevlačenje u {{ui:3D}} da ih umesto toga pomeraš gore i dole.
- U {{ui:Izgled}} se pomeraju unutar izgleda: duž linije mreže i gore–dole.
- Deo koji držiš se hvata za presek mreže kada njegov kraj dođe na nekoliko piksela od njega (presek se osvetli, a statusna traka ga imenuje). Inače se pomeranje ide u koracima od 10 mm.
- Pritisak na deo koji nije izabran i dalje obrće ili pomera pogled, pa prevlačenje nikada ne pomera nešto slučajno.
- Prevlačenje je jedan korak opoziva, kao {{ui:Pomeri}}. Veze prate svoje elemente.

## Promena svojstva na više elemenata

Izaberi dva ili više elemenata. Pod **Promeni na svima** na panelu {{ui:Svojstva}}:

- {{ui:Profil}}, {{ui:Položaj}}: za grede, stubove i dijagonale među njima.
- {{ui:Debljina lima (mm)}} i {{ui:Širina lima (mm)}}: za limove.
- {{ui:Materijal}} i {{ui:Obrtanje (°)}}: za sve njih.

Polje prikazuje **Različito** kada se elementi ne slažu. Izaberi ili upiši vrednost i svaki element na koji se primenjuje je preuzima; statusna traka kaže koliko se promenilo i koliko je zadržalo svoje.

Polja za brojeve na panelu {{ui:Svojstva}} primaju i proračun: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Proračun koji se ne može pročitati se odbija, a statusna traka kaže gde je greška.

## Pomeri, obrni ili ogledaj

Izaberi elemente i temelje (može i jedan), pa koristi **Pomeri, obrni, ogledaj** na panelu {{ui:Svojstva}}. Veze se ne pomeraju same: prate svoje elemente. Ako pomeriš gredu, a ne i njen stub, statusna traka kaže koliko veza sada spaja pomereni element sa onim koji je ostao, a [Problemi](topic:troubleshooting) kaže ako više ne odgovaraju.

- **Pomeri:** upiši x, y i z u milimetrima i izaberi {{ui:Pomeri}}. Ili izaberi {{ui:Izaberi dve tačke}} (ili pritisni {{key:M}}): klikni presek mreže od kog se pomera, pa onaj do kog se pomera. Isprekidana kontura prati pokazivač.
- **Obrni u osnovi:** upiši ugao (suprotno od kazaljke na satu, gledano odozgo) i izaberi oko čega se obrće: sredine izbora ili preseka mreže. Stubovi se obrću zajedno sa okvirom.
- **Ogledaj:** izaberi liniju mreže. Ogledalna slika je isti profil okrenut na drugu stranu: I-profil zadržava svoje pojaseve, U-profil je okrenut na drugu stranu (gornja i donja strana se menjaju), a rupe i useci idu uz deo.
- Označi **Zadrži original (napravi kopiju)** da izbor ostane tamo gde jeste, a da se pomera, obrće ili ogleda kopija. Njene veze idu zajedno kada je uključeno {{ui:Kopiraj čeone i bazne limove zajedno sa elementima}} u [DetailCraft podešavanjima](topic:settings).

Obrtanje ide oko vertikalne linije, a ogledanje je u vertikalnoj ravni, pa nivoi ostaju horizontalni, a temelji stoje uspravno.
