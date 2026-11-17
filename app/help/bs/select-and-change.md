---
title: Odabir prozorom, pomjeranje, rotiranje, zrcaljenje, promjena više elemenata
summary: Prevuci prozor za odabir, prevuci odabrane dijelove da ih pomjeriš, pomjeri, rotiraj ili zrcali odabir (ili njegovu kopiju), ili promijeni profil, materijal, položaj ili rotaciju više elemenata odjednom.
keywords: omča, ograda, slobodan odabir, prevlačenje, prevuci i pusti, pomjeranje prevlačenjem, hvatanje, prozor, ukrštanje, odabir kutijom, prevuci za odabir, odaberi više, pomjeri, rotiraj, zrcali, okreni, kopiraj, promijeni više, više elemenata, profil, materijal, položaj, rotacija, različito, linija mreže
from: 50b16f9a
---

Svaka od ovih radnji je jedan korak poništavanja: jedan {{key:Mod+Z}} sve vraća.

## Odabir prozorom

- U {{ui:Osnova}} i {{ui:Izgled}}, prevuci lijevim dugmetom s praznog mjesta. U {{ui:3D}}, drži {{key:Shift}} i prevuci (običan prevlak okreće model).
- Prevuci **udesno** za prozor: uzima ono što je potpuno unutra, nacrtano punom ivicom.
- Prevuci **ulijevo** za ukrsni prozor: uzima sve čega dotakne, nacrtano isprekidano.
- Drži {{key:Shift}} dok počinješ prevlačenje da dodaš u odabir umjesto da ga zamijeniš.
- Osnova ili izgled nudi samo ono što prikazuje: dijelovi odsječeni iznad osnove, ili više od 1 m od linije mreže izgleda, ne mogu se odabrati.
- {{key:Esc}} dok prevlačiš odbacuje prozor.

### Omča

Izaberi **Omču** pod {{ui:Prevlačenje za odabir}} u [postavkama DetailCraft-a](topic:settings) i isto prevlačenje crta slobodnu liniju umjesto pravougaonika.

- Prvi pomak u stranu odlučuje kako se bira: **udesno**, ono što je potpuno unutra (puna linija); **ulijevo**, ono čega dotakne (isprekidana).
- Pritisni {{key:Space}} dok prevlačiš da prebacuješ između unutra, dodir i **ograda**: otvorena linija koja uzima sve što presječe (tačkasto, narandžasto).
- {{key:Shift}} za dodavanje i {{key:Esc}} za odbacivanje rade kao kod prozora.

:::touch
Na ekranu osjetljivom na dodir, jedan prst pomjera osnovu i izgled kao i ranije; odaberi dijelove dodirom.
:::

U {{ui:Osnova}} i {{ui:Izgled}}, pomjeri pogled desnim ili srednjim dugmetom dok je alat {{ui:Odaberi}} uključen.

## Prevuci dijelove da ih pomjeriš

1. Prvo odaberi dijelove (klik, {{key:Shift}}+klik ili prozor).
2. Pritisni na jedan od odabranih dijelova i prevuci. Cijeli odabir se pomjera; isprekidana kontura pokazuje gdje ide.
3. Pusti da ga postaviš. {{key:Esc}} prije nego što pustiš sve vraća na mjesto.

- U {{ui:3D}} i {{ui:Osnova}} dijelovi se pomjeraju po nivou. Drži {{key:Mod}} dok počinješ prevlačenje u {{ui:3D}} da ih umjesto toga pomjeraš gore i dolje.
- U {{ui:Izgled}} pomjeraju se unutar izgleda: duž linije mreže i gore i dolje.
- Dio koji držiš hvata se za presjek mreže kad mu kraj dođe na nekoliko piksela od njega (presjek se osvijetli, a statusna traka ga imenuje). Inače se pomjeranje ide u koracima od 10 mm.
- Pritisak na dio koji nije odabran i dalje okreće ili pomjera pogled, pa prevlačenje nikad slučajno ništa ne pomjeri.
- Prevlačenje je jedan korak poništavanja, kao {{ui:Pomjeri}}. Veze prate svoje elemente.

## Promijeni svojstvo na više elemenata

Odaberi dva ili više elemenata. Pod **Promijeni na svima** u panelu {{ui:Svojstva}}:

- {{ui:Profil}}, {{ui:Položaj}}: za grede, stubove i dijagonale među njima.
- {{ui:Debljina lima (mm)}} i {{ui:Širina lima (mm)}}: za limove.
- {{ui:Materijal}} i {{ui:Rotacija (°)}}: za sve njih.

Polje pokazuje **Razlikuje se** kad se elementi ne slažu. Izaberi ili upiši vrijednost i svaki element na koji se odnosi je preuzima; statusna traka kaže koliko je promijenjeno, a koliko zadržalo svoju.

Polja s brojevima u panelu {{ui:Svojstva}} primaju i proračun: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Proračun koji se ne može pročitati se odbija, a statusna traka kaže gdje je pogriješeno.

## Pomjeri, rotiraj ili zrcali

Odaberi elemente i temelje (i jedan radi), pa koristi **Pomjeri, rotiraj, zrcali** u panelu {{ui:Svojstva}}. Veze se ne pomjeraju same: prate svoje elemente. Ako pomjeriš gredu, a ne njen stub, statusna traka kaže koliko veza sada spaja pomjereni element s onim koji je ostao, a [Problemi](topic:troubleshooting) kaže ako više ne pristaju.

- **Pomjeranje:** upiši x, y i z u milimetrima i izaberi {{ui:Pomjeri}}. Ili izaberi {{ui:Odaberi dvije tačke}} (ili pritisni {{key:M}}): klikni presjek mreže s kojeg polaziš, pa onaj na koji ideš. Isprekidana kontura prati pokazivač.
- **Rotiranje u osnovi:** upiši ugao (suprotno od kazaljke, gledano odozgo) i izaberi oko čega se okreće: sredine odabira ili presjeka mreže. Stubovi se okreću zajedno s okvirom.
- **Zrcaljenje:** izaberi liniju mreže. Zrcalna slika je isti profil okrenut na drugu stranu: I-profil zadržava pojasnice, U-profil gleda na drugu stranu (gornja i donja strana se zamijene), a rupe i useci idu s dijelom.
- Označi **Zadrži original (napravi kopiju)** da odabir ostane gdje jeste, a pomjeri, rotiraj ili zrcali kopiju. Njene veze idu zajedno kad je {{ui:Kopiraj čeone i temeljne ploče zajedno s elementima}} uključeno u [postavkama DetailCraft-a](topic:settings).

Rotiranje se odvija oko vertikalne linije, a zrcaljenje je u vertikalnoj ravni, pa nivoi ostaju vodoravni, a temelji uspravni.
