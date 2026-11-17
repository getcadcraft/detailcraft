---
title: Odabir okvirom, pomicanje, zakretanje, zrcaljenje, promjena više štapova
summary: Povucite okvir za odabir, povucite odabrane dijelove za pomicanje, pomaknite, zakrenite ili zrcalite odabir (ili njegovu kopiju), ili promijenite profil, materijal, položaj ili zakretanje više štapova odjednom.
keywords: laso, ograda, slobodni odabir, povlačenje, povuci i ispusti, pomicanje povlačenjem, hvatanje, okvir, križanje, odabir kutijom, odaberi više, pomakni, zakreni, zrcali, kopija, promijeni više, više štapova, profil, materijal, položaj, zakretanje, različito, linija mreže
from: 50b16f9a
---

Svaka od ovih radnji je jedan korak poništavanja: jedan {{key:Mod+Z}} sve vraća.

## Odabir okvirom

- U {{ui:Tlocrt}} i {{ui:Pročelje}} povucite lijevom tipkom od praznog mjesta. U {{ui:3D}} držite {{key:Shift}} i povucite (običan povlak okreće model).
- Povucite **udesno** za okvir: uzima ono što je u potpunosti unutra, nacrtano punom linijom.
- Povucite **ulijevo** za okvir križanja: uzima sve što dotakne, nacrtano crtkano.
- Držite {{key:Shift}} dok počinjete povlačenje da dodate u odabir umjesto da ga zamijenite.
- Tlocrt i pročelje nude samo ono što prikazuju: dijelovi odrezani iznad tlocrta, ili više od 1 m od mreže pročelja, nisu odabrani.
- {{key:Esc}} dok povlačite odbacuje okvir.

### Laso

Odaberite **Laso** pod {{ui:Povlačenje za odabir}} u [postavkama DetailCraft-a](topic:settings) i isti potez crta slobodnu liniju umjesto pravokutnika.

- Prvi bočni pomak određuje odabir: **udesno** uzima ono što je u potpunosti unutra (puna linija); **ulijevo** uzima ono što dotakne (crtkano).
- Pritisnite {{key:Space}} dok povlačite da prebacujete između unutra, dotiče i **ograde**: otvorena linija koja uzima sve što prijeđe (točkasto, narančasto).
- {{key:Shift}} za dodavanje i {{key:Esc}} za odbacivanje rade kao kod okvira.

:::touch
Na ekranu osjetljivom na dodir jedan prst i dalje pomiče tlocrt i pročelje; dijelove odabirete dodirom.
:::

U {{ui:Tlocrt}} i {{ui:Pročelje}} pomičite prikaz desnom ili srednjom tipkom dok je alat {{ui:Odaberi}} uključen.

## Povucite dijelove za pomicanje

1. Najprije odaberite dijelove (klikom, {{key:Shift}}+klikom ili okvirom).
2. Pritisnite na jedan od odabranih dijelova i povucite. Cijeli odabir se pomiče; crtkani obris pokazuje kamo ide.
3. Otpustite da ih postavite. {{key:Esc}} prije otpuštanja vraća sve na mjesto.

- U {{ui:3D}} i {{ui:Tlocrt}} dijelovi se pomiču po etaži. Držite {{key:Mod}} dok počinjete povlačenje u {{ui:3D}} da ih pomaknete gore i dolje.
- U {{ui:Pročelje}} pomiču se unutar pročelja: duž linije mreže i gore–dolje.
- Dio koji držite hvata se na sjecište mreže kad mu se kraj približi na nekoliko piksela (sjecište zasvijetli, a statusna traka ga imenuje). Inače se pomak odvija u koracima od 10 mm.
- Pritisak na dio koji nije odabran i dalje okreće ili pomiče prikaz, pa povlačenje nikad slučajno ništa ne pomakne.
- Povlačenje je jedan korak poništavanja, kao {{ui:Pomakni}}. Spojevi slijede svoje štapove.

## Promjena svojstva na više štapova

Odaberite dva ili više štapova. Pod **Promijeni za sve odabrane** na panelu {{ui:Svojstva}}:

- {{ui:Profil}}, {{ui:Položaj}}: za grede, stupove i sprege među njima.
- {{ui:Debljina ploče (mm)}} i {{ui:Širina ploče (mm)}}: za ploče.
- {{ui:Materijal}} i {{ui:Zakretanje (°)}}: za sve njih.

Polje pokazuje **Različito** kad se štapovi ne slažu. Odaberite ili upišite vrijednost i svaki štap na koji se primjenjuje preuzima je; statusna traka kaže koliko ih se promijenilo, a koliko je zadržalo svoju vrijednost.

Numerička polja na panelu {{ui:Svojstva}} također primaju izračun: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Izračun koji se ne može pročitati se odbija, a statusna traka kaže gdje je pogriješio.

## Pomakni, zakreni ili zrcali

Odaberite štapove i temelje (radi i jedan), zatim upotrijebite **Pomakni, zakreni, zrcali** na panelu {{ui:Svojstva}}. Spojevi se ne pomiču sami: slijede svoje štapove. Ako pomaknete gredu, ali ne i njezin stup, statusna traka kaže koliko spojeva sada povezuje pomaknuti štap s onim koji je ostao, a [Problemi](topic:troubleshooting) kaže ako više ne pristaju.

- **Pomakni:** upišite x, y i z u milimetrima i odaberite {{ui:Pomakni}}. Ili odaberite {{ui:Odaberite dvije točke}} (ili pritisnite {{key:M}}): kliknite sjecište mreže s kojeg krećete, pa ono na koje idete. Crtkani obris prati pokazivač.
- **Zakreni u tlocrtu:** upišite kut (suprotno kazaljci na satu, gledano odozgo) i odaberite oko čega se okreće: sredine odabira ili sjecišta mreže. Stupovi se okreću s okvirom.
- **Zrcali:** odaberite liniju mreže. Zrcalna slika je isti profil okrenut na drugu stranu: I-profil zadržava pojasnice, U-profil gleda na drugu stranu (gornja i donja strana se zamijene), a rupe i izrezi idu s dijelom.
- Označite **Zadrži izvornik (napravi kopiju)** da ostavite odabir na mjestu, a pomaknete, zakrenete ili zrcalite kopiju. Njezini spojevi dolaze s njom kad je uključeno {{ui:Kopiraj čeone i podložne ploče sa svojim štapovima}} u [postavkama DetailCraft-a](topic:settings).

Zakretanje se odvija oko okomite osi, a zrcaljenje je u okomitoj ravnini, pa etaže ostaju vodoravne, a temelji uspravni.
