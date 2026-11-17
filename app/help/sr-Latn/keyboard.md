---
title: Tasteri i radnje mišem
summary: Svaka prečica na tastaturi i svaka radnja mišem, touchpad-om i dodirom u DetailCraft-u, iz koda.
keywords: tastatura, prečice, skraćenice, tasteri, miš, touchpad, dodir, ctrl, command, podsetnik
from: 05a2dea0
---

Kako su tasteri zapisani u ovoj pomoći: [Tasteri, miševi i touchpad-ovi](common:keys). Na Mac-u je {{key:Mod}} taster Command; drugde je Ctrl.

## Alati

Ove radnje rade kada kursor nije u polju za tekst ili broj.

| Taster | Radi |
|---|---|
| {{key:V}} | {{ui:Izaberi}} |
| {{key:B}} | {{ui:Greda}} |
| {{key:C}} | {{ui:Stub}} |
| {{key:R}} | {{ui:Dijagonala}} |
| {{key:P}} | {{ui:Lim}} |
| {{key:F}} | {{ui:Temelj}} |
| {{key:S}} | {{ui:Stepenište}} |
| {{key:M}} | Pomeri izbor birajući dva preseka mreže ([Izbor prozorom, pomeranje, rotiranje, ogledanje, promena više](topic:select-and-change)) |
| {{key:Esc}} | Ispusti izbor prozora koji se prevlači ili vrati prevučene delove na mesto; otkaži pomeranje, prvu tačku grede, dijagonale ili lima, ili nalepljivanje; pritisni ponovo da pređeš na {{ui:Izaberi}}; u {{ui:Izaberi}} poništi izbor. Kada je meni {{ui:Više}} otvoren, zatvori ga |
| {{key:Delete}} ili {{key:Backspace}} | Izbriši izbor (sve izabrano, u jednom koraku opozivanja) |

## Datoteka i uređivanje

| Taster | Radi |
|---|---|
| {{key:Mod+S}} | Sačuvaj model (preuzimanje). Radi i dok kucate u polju |
| {{key:Mod+O}} | Otvori model. Radi i dok kucate u polju |
| {{key:Mod+Z}} | {{ui:Opozovi}} (van polja za tekst; unutar njega opoziva vaše kucanje) |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | {{ui:Ponovi}} |

## Kopiranje i nalepljivanje

Ove radnje rade kada kursor nije u polju za tekst ili broj (tamo kopiraju, nalepljuju i biraju vaš tekst kao obično). Svako nalepljivanje, sečenje, dupliranje ili brisanje je jedan korak opozivanja. Više: [Kopiranje, nalepljivanje i dupliranje](topic:copy-paste).

| Taster | Radi |
|---|---|
| {{key:Mod+C}} | {{ui:Kopiraj}} izabrane elemente i temelje (sa njihovim rupama, zasecima i vezama) |
| {{key:Mod+X}} | {{ui:Iseci}}: kopiraj izbor, pa ga izbriši |
| {{key:Mod+V}} | {{ui:Nalepi}}: kopija prati pokazivač; klikni na presek mreže za nju |
| {{key:Mod+Shift+V}} | {{ui:Nalepi na mestu}}: na koordinatama sa kojih je kopirano |
| {{key:Mod+D}} | {{ui:Dupliraj}}: odmah kopija, pomerena za pomeraj u [Podešavanjima DetailCraft-a](topic:settings) |
| {{key:Mod+A}} | {{ui:Izaberi sve}}: svaki element, veza i temelj |
| {{key:Esc}} | {{ui:Ukloni izbor}} |

Ako ste izabrali tekst na stranici (u tabeli izveštaja, recimo), a ništa u modelu, {{key:Mod+C}} kopira tekst, kao obično.

{{ui:Novi}}, {{ui:Primer}} i izvozi nemaju tastere; koristite traku sa alatkama.

Nijedan od ovih tastera ne radi dok je otvoren dijalog (pregled radioničkog crteža ili pitanje).

## Polja i paneli

| Taster | Radi |
|---|---|
| {{key:Enter}} ili {{key:Tab}} | Primeni upisanu vrednost (svaka promena je jedan korak opozivanja) |
| {{key:Enter}} u polju {{ui:Mreže}}, {{ui:Nivoi}}, {{ui:Prilagođeni profil}}, rupe ili zaseka | Isto kao dugme tog obrasca |
| {{key:Left}} {{key:Right}} | Pređi između kartica {{ui:Problemi}}, {{ui:Spisak materijala}} i {{ui:Raspored savijanja}} kada je kartica u fokusu |
| {{key:Esc}} | Zatvori pregled radioničkog crteža ili dijalog pitanja (isto kao {{ui:Otkaži}}) |

## Ekran i pomoć

| Taster | Radi |
|---|---|
| {{key:Ctrl+Shift+F}} | Menjaj redom: normalno, ceo ekran, ceo ekran sa skrivenim trakama. Kontrola na svakom računaru, uključujući Mac |
| {{key:Mod+,}} | Otvori {{ui:Podešavanja}} ([Podešavanja DetailCraft-a](topic:settings)) |
| {{key:Esc}} | Izađi iz celog ekrana |
| {{key:F1}} | Otvori ovu pomoć |

## Miš

| Radnja | U 3D | U osnovi i izgledu |
|---|---|---|
| Klik | Izaberi deo, ili postavi na najbliži presek kada je alat za postavljanje uključen (ili nalepi tu dok lepiš) | Isto |
| {{key:Shift}}, {{key:Ctrl}} ili {{key:Mod}} i klik | Dodaj deo u izbor ili ga izvadi | Isto |
| Pritisni na izabrani deo i prevuci | Pomeri izbor preko nivoa; sa držanim {{key:Mod}}, gore i dole | Pomeri izbor (u izgledu: duž njega i gore i dole) |
| Prevuci levim dugmetom | Okreni model | Sa {{ui:Izaberi}}: prozor za izbor (udesno: potpuno unutra; ulevo: dodiruje). Pri postavljanju: pomeri pogled |
| {{key:Shift}} i prevuci levim dugmetom | Sa {{ui:Izaberi}}: prozor za izbor, dodat izboru. Pri postavljanju: pomeri pogled | Sa {{ui:Izaberi}}: prozor za izbor, dodat izboru |
| {{key:Ctrl}} ili {{key:Mod}} i prevuci levim dugmetom | Pomeri pogled | Ništa |
| Prevuci desnim dugmetom | Pomeri pogled | Pomeri pogled |
| Točkić | Zumiraj ka sredini prikaza | Zumiraj |
| Prevuci srednjim dugmetom | Zumiraj | Sa {{ui:Izaberi}}: pomeri pogled. Inače zumiraj |
| Prevuci datoteku `.detailcraft.json` na aplikaciju | Otvori je | Otvori je |

Klik se računa samo ako se pokazivač pomeri manje od oko 5 piksela između pritiska i otpuštanja; duže pomeranje je prevlačenje.

## Touchpad

| Radnja | Radi |
|---|---|
| Prevlačenje dva prsta gore ili dole, ili štipanje | Zumiraj |
| Pritisni i prevuci | Okreni (3D) ili pomeri pogled (osnova i izgled) |
| {{key:Shift}} i pritisni i prevuci | Pomeri pogled u 3D |
| Klik dvama prstima | Desni klik (u prikazu nema menija) |

## Dodir

Na tabletu ili dodirnom ekranu:

| Radnja | Radi |
|---|---|
| Dodirni | Izaberi deo, ili postavi na najbliži presek mreže kada je alat za postavljanje uključen (dodir u krugu od oko širine prsta se računa) |
| Dodirni i zadrži na delu | Dodaj ga u izbor ili ga izvadi (ono što {{key:Shift}}+klik radi mišem) |
| Jedan prst na izabranom delu, pa prevuci | Pomeri izbor, privlačeći na preseke mreže |
| Jedan prst drugde | Okreni model (3D) ili pomeri pogled (osnova i izgled) |
| Dva prsta | Štipanje za zum, zajedno pomeranje za pomeranje pogleda |

Dugmad, liste i polja su veća kada je ekran samo dodirni. Prozori za izbor traže miš; prstima dodirnite i zadržite.

## Prečice koje pregledač zadržava

Neke prečice pripadaju pregledaču i nijedna stranica ih ne može koristiti, na primer {{key:Mod+W}} (zatvori karticu), {{key:Mod+T}} (nova kartica) i {{key:Mod+N}} (novi prozor). Ako {{key:Mod+Y}} otvara istoriju pregledača umesto ponovnog, koristite {{key:Mod+Shift+Z}}.

Prečice dolaze do DetailCraft-a samo kada stranica ima tastaturu. Ako taster ne radi ili ga pregledač obrađuje, prvo kliknite na prazan deo prozora DetailCraft (na primer posle kucanja u adresnu traku).

## Gde je Pomeri

Nema komande Pomeri: izaberite deo i prevucite ga preko nivoa (držite {{key:Mod}} da prevučete gore i dole), ili izmenite njegove {{ui:Početak}} i {{ui:Kraj}} u {{ui:Svojstva}}.
