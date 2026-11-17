---
title: Tipke i radnje mišem
summary: Svaka tastaturna prečica i svaka radnja mišem, trackpadom i dodirom u DetailCraft-u, iz samog koda.
keywords: tipkovnica, prečice, tipke, brze tipke, miš, trackpad, dodir, ctrl, command, pregled prečica
from: 05a2dea0
---

Kako su tipke napisane u ovoj pomoći: [Tipke, miševi i trackpadovi](common:keys). Na Mac-u je {{key:Mod}} tipka Command; drugdje je Ctrl.

## Alati

Ovo radi kada kursor nije u polju za tekst ili broj.

| Tipka | Radi |
|---|---|
| {{key:V}} | {{ui:Odaberi}} |
| {{key:B}} | {{ui:Greda}} |
| {{key:C}} | {{ui:Stub}} |
| {{key:R}} | {{ui:Dijagonala}} |
| {{key:P}} | {{ui:Lim}} |
| {{key:F}} | {{ui:Temelj}} |
| {{key:S}} | {{ui:Stepenice}} |
| {{key:M}} | Premjesti odabir biranjem dva čvora mreže ([Odabir prozorom, premještanje, rotiranje, zrcaljenje, mijenjanje više](topic:select-and-change)) |
| {{key:Esc}} | Ispusti prozor odabira koji se prevlači ili vrati prevučene dijelove; otkaži premještanje, prvu tačku grede, dijagonale ili lima, ili lijepljenje; ponovo pritisnite da se vratite na {{ui:Odaberi}}; u {{ui:Odaberi}} poništava odabir. Kada je meni {{ui:Više}} otvoren, zatvara ga |
| {{key:Delete}} ili {{key:Backspace}} | Briše odabir (sve odabrano, u jednom koraku poništavanja) |

## Datoteka i uređivanje

| Tipka | Radi |
|---|---|
| {{key:Mod+S}} | Spasi model (preuzimanje). Radi i dok kucate u polju |
| {{key:Mod+O}} | Otvori model. Radi i dok kucate u polju |
| {{key:Mod+Z}} | Poništi (van polja za tekst; unutar njega poništava vaše kucanje) |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi |

## Kopiranje i lijepljenje

Ovo radi kada kursor nije u polju za tekst ili broj (tamo kopiraju, lijepe i biraju vaš tekst kao obično). Svako lijepljenje, izrezivanje, dupliranje ili brisanje je jedan korak poništavanja. Više: [Kopiranje, lijepljenje i dupliranje](topic:copy-paste).

| Tipka | Radi |
|---|---|
| {{key:Mod+C}} | {{ui:Kopiraj}} odabrane elemente i temelje (s njihovim rupama, izrezima i vezama) |
| {{key:Mod+X}} | {{ui:Izreži}}: kopira odabir, pa ga briše |
| {{key:Mod+V}} | {{ui:Zalijepi}}: kopija prati pokazivač; kliknite čvor mreže za nju |
| {{key:Mod+Shift+V}} | {{ui:Zalijepi na mjesto}}: na koordinatama s kojih je kopirano |
| {{key:Mod+D}} | {{ui:Dupliraj}}: odmah kopija, pomjerena za pomak u [postavkama DetailCraft-a](topic:settings) |
| {{key:Mod+A}} | {{ui:Odaberi sve}}: svaki element, veza i temelj |
| {{key:Esc}} | {{ui:Poništi odabir}} |

Ako ste odabrali tekst na stranici (na primjer u tabeli izvještaja), a ništa u modelu, {{key:Mod+C}} kopira tekst, kao obično.

{{ui:Novi}}, {{ui:Primjer}} i izvozi nemaju tipke; koristite traku alata.

Nijedna od ovih tipki ne radi dok je otvoren dijalog (pregled radioničkog crteža ili pitanje).

## Polja i paneli

| Tipka | Radi |
|---|---|
| {{key:Enter}} ili {{key:Tab}} | Primjenjuje upisanu vrijednost (svaka promjena je jedan korak poništavanja) |
| {{key:Enter}} u polju {{ui:Mreže}}, {{ui:Nivoi}}, {{ui:Prilagođeni profil}}, rupe ili izreza | Isto što i dugme tog obrasca |
| {{key:Left}} {{key:Right}} | Pomjera između kartica {{ui:Problemi}}, {{ui:Spisak materijala}} i {{ui:Spisak savijanja}} kada je kartica u fokusu |
| {{key:Esc}} | Zatvara pregled radioničkog crteža ili dijalog s pitanjem (isto što i {{ui:Otkaži}}) |

## Ekran i pomoć

| Tipka | Radi |
|---|---|
| {{key:Ctrl+Shift+F}} | Mijenja redom: normalno, puni ekran, puni ekran sa sakrivenim trakama. Control na svakom računaru, uključujući i Mac |
| {{key:Mod+,}} | Otvara {{ui:Postavke}} ([Postavke DetailCraft-a](topic:settings)) |
| {{key:Esc}} | Izlazi iz punog ekrana |
| {{key:F1}} | Otvara ovu pomoć |

## Miš

| Radnja | U 3D | U Osnovi i Izgledu |
|---|---|---|
| Klik | Odaberi dio, ili postavi na najbliži čvor mreže kada je alat za postavljanje uključen (ili zalijepi tamo dok lijepite) | Isto |
| {{key:Shift}}, {{key:Ctrl}} ili {{key:Mod}} i klik | Dodaje dio u odabir ili ga uklanja | Isto |
| Pritisnite na odabrani dio i prevucite | Premješta odabir preko nivoa; uz držanje {{key:Mod}}, gore i dolje | Premješta odabir (u izgledu: duž njega i gore i dolje) |
| Prevlačenje lijevim dugmetom | U 3D okreće model | Uz {{ui:Odaberi}}: prozor odabira (udesno: potpuno unutar; ulijevo: dodiruje). Dok postavljate: pomjera pogled |
| {{key:Shift}} i prevlačenje lijevim dugmetom | Uz {{ui:Odaberi}}: prozor odabira, dodat odabiru. Dok postavljate: pomjera pogled | Uz {{ui:Odaberi}}: prozor odabira, dodat odabiru |
| {{key:Ctrl}} ili {{key:Mod}} i prevlačenje lijevim dugmetom | Pomjera pogled | Ništa |
| Prevlačenje desnim dugmetom | Pomjera pogled | Pomjera pogled |
| Točkić | Zumira prema sredini pogleda | Zumira |
| Prevlačenje srednjim dugmetom | Zumira | Uz {{ui:Odaberi}}: pomjera pogled. Inače zumira |
| Prevucite datoteku `.detailcraft.json` na aplikaciju | Otvara je | Otvara je |

Klik se računa samo ako se pokazivač pomjeri manje od oko 5 piksela između pritiska i otpuštanja; duže pomjeranje je prevlačenje.

## Trackpad

| Radnja | Radi |
|---|---|
| Prevlačenje dva prsta gore ili dolje, ili štipanje | Zumira |
| Pritisak i prevlačenje | Okreće (3D) ili pomjera pogled (Osnova i Izgled) |
| {{key:Shift}} i pritisak i prevlačenje | Pomjera pogled u 3D |
| Klik dvama prstima | Desni klik (u pogledu nema menija) |

## Dodir

Na tabletu ili ekranu osjetljivom na dodir:

| Radnja | Radi |
|---|---|
| Dodir | Odabire dio, ili postavlja na najbliži čvor mreže kada je alat za postavljanje uključen (dodir unutar otprilike širine prsta računa se) |
| Dugi pritisak na dio | Dodaje ga odabiru, ili ga uklanja (ono što {{key:Shift}}+klik radi mišem) |
| Jedan prst na odabranom dijelu, pa prevlačenje | Premješta odabir, pričvršćujući se na čvorove mreže |
| Jedan prst bilo gdje drugdje | Okreće model (3D) ili pomjera pogled (Osnova i Izgled) |
| Dva prsta | Štipanje za zumiranje, zajedno pomicanje za pomjeranje |

Dugmad, spiskovi i polja su veći kada je ekran samo na dodir. Prozori odabira trebaju miš; prstima koristite dodir i dugi pritisak.

## Tipke koje pregledač zadržava

Neke prečice pripadaju pregledaču i nijedna stranica ih ne može koristiti, na primjer {{key:Mod+W}} (zatvori karticu), {{key:Mod+T}} (nova kartica) i {{key:Mod+N}} (novi prozor). Ako {{key:Mod+Y}} otvara historiju pregledača umjesto ponavljanja, koristite {{key:Mod+Shift+Z}}.

Prečice dolaze do DetailCraft-a samo kada stranica ima tastaturu. Ako tipka ne radi ili je pregledač obradi umjesto nje, prvo kliknite prazan dio prozora DetailCraft-a (na primjer nakon kucanja u adresnu traku).

## Gdje je Premjesti

Nema naredbe Premjesti: odaberite dio i prevucite ga preko nivoa (držite {{key:Mod}} da prevlačite gore i dolje), ili uredite njegove {{ui:Početak}} i {{ui:Kraj}} u {{ui:Svojstva}}.
