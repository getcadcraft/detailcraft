---
title: Radnje tipkama i mišem
summary: Svaka tipkovnička prečica te radnje mišem, trackpadom i dodirom u DetailCraftu, prema kodu.
keywords: tipkovnica, prečaci, tipkovnički prečaci, tipke, miš, trackpad, dodir, ctrl, command, podsjetnik
from: 05a2dea0
---

Kako su tipke zapisane u ovoj pomoći: [Tipke, miševi i trackpadovi](common:keys). Na Macu je {{key:Mod}} tipka Command; inače je Ctrl.

## Alati

Ovo radi kad se kursor ne nalazi u polju za tekst ili broj.

| Tipka | Radi |
|---|---|
| {{key:V}} | {{ui:Odaberi}} |
| {{key:B}} | {{ui:Greda}} |
| {{key:C}} | {{ui:Stup}} |
| {{key:R}} | {{ui:Spreg}} |
| {{key:P}} | {{ui:Ploča}} |
| {{key:F}} | {{ui:Temelj}} |
| {{key:S}} | {{ui:Stubište}} |
| {{key:M}} | Pomiče odabir odabirom dva presjecišta mreže ([Odaberi prozorom, pomakni, zakreni, zrcali, promijeni mnogo](topic:select-and-change)) |
| {{key:Esc}} | Odbacuje odabirni prozor koji se povlači ili vraća povučene dijelove na mjesto; poništava pomicanje, prvu točku grede, spreg ili ploče, ili lijepljenje; ponovnim pritiskom vraća na {{ui:Odaberi}}; u {{ui:Odaberi}} briše odabir. Kad je izbornik {{ui:Više}} otvoren, zatvara ga |
| {{key:Delete}} ili {{key:Backspace}} | Briše odabir (sve odabrano, u jednom koraku poništavanja) |

## Datoteka i uređivanje

| Tipka | Radi |
|---|---|
| {{key:Mod+S}} | Sprema model (preuzimanje). Radi i dok tipkate u polju |
| {{key:Mod+O}} | Otvara model. Radi i dok tipkate u polju |
| {{key:Mod+Z}} | Poništava (izvan polja za tekst; unutar njega poništava vaš unos) |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi |

## Kopiranje i lijepljenje

Ovo radi kad se kursor ne nalazi u polju za tekst ili broj (tamo se tekst kopira, lijepi i označava kao inače). Svako lijepljenje, izrezivanje, dupliciranje ili brisanje je jedan korak poništavanja. Više: [Kopiraj, zalijepi i dupliciraj](topic:copy-paste).

| Tipka | Radi |
|---|---|
| {{key:Mod+C}} | {{ui:Kopiraj}} odabrane štapove i temelje (s njihovim provrtima, izrezima i spojevima) |
| {{key:Mod+X}} | {{ui:Izreži}}: kopira odabir, zatim ga briše |
| {{key:Mod+V}} | {{ui:Zalijepi}}: kopija prati pokazivač; kliknite presjecište mreže za nju |
| {{key:Mod+Shift+V}} | {{ui:Zalijepi na isto mjesto}}: na koordinatama s kojih je kopirano |
| {{key:Mod+D}} | {{ui:Dupliciraj}}: odmah kopija, pomaknuta za pomak u [postavkama DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Odaberi sve}}: svaki štap, spoj i temelj |
| {{key:Esc}} | {{ui:Poništi odabir}} |

Ako ste na stranici odabrali tekst (primjerice u tablici izvješća), a ništa u modelu, {{key:Mod+C}} kopira tekst kao inače.

{{ui:Novo}}, {{ui:Primjer}} i izvozi nemaju tipke; koristite alatnu traku.

Nijedna od ovih tipki ne radi dok je otvoren dijalog (pregled radioničkog crteža ili pitanje).

## Polja i ploče

| Tipka | Radi |
|---|---|
| {{key:Enter}} ili {{key:Tab}} | Primjenjuje upisanu vrijednost (svaka promjena je jedan korak poništavanja) |
| {{key:Enter}} u polju {{ui:Mreže}}, {{ui:Razine}}, {{ui:Prilagođeni profil}}, provrta ili izreza | Isto što i odabir gumba tog obrasca |
| {{key:Left}} {{key:Right}} | Pomiče između kartica {{ui:Problemi}}, {{ui:Sastavnica}} i {{ui:Plan savijanja}} kad je kartica u fokusu |
| {{key:Esc}} | Zatvara pregled radioničkog crteža ili dijalog s pitanjem (isto što i {{ui:Odustani}}) |

## Zaslon i pomoć

| Tipka | Radi |
|---|---|
| {{key:Ctrl+Shift+F}} | Mijenja redom: normalno, cijeli zaslon, cijeli zaslon sa skrivenim trakama. Control na svakom računalu, uključujući Mac |
| {{key:Mod+,}} | Otvara {{ui:Postavke}} ([Postavke DetailCraft](topic:settings)) |
| {{key:Esc}} | Izlazi iz cijelog zaslona |
| {{key:F1}} | Otvara ovu pomoć |

## Miš

| Radnja | U 3D | U tlocrtu i pročelju |
|---|---|---|
| Klik | Odabire dio ili ga postavlja na najbliže presjecište kad je uključen alat za postavljanje (ili lijepi tamo dok lijepite) | Isto |
| {{key:Shift}}, {{key:Ctrl}} ili {{key:Mod}} i klik | Dodaje dio odabiru ili ga uklanja | Isto |
| Pritisnite na odabrani dio i povucite | Pomiče odabir preko razine; uz držanje {{key:Mod}}, gore i dolje | Pomiče odabir (u pročelju: duž njega te gore i dolje) |
| Povlačenje lijevim gumbom | Okreće model | Uz {{ui:Odaberi}}: odabirni prozor (udesno: potpuno unutar; ulijevo: dodiruje). Dok postavljate: pomicanje prikaza |
| {{key:Shift}} i povlačenje lijevim gumbom | Uz {{ui:Odaberi}}: odabirni prozor, dodan odabiru. Dok postavljate: pomicanje prikaza | Uz {{ui:Odaberi}}: odabirni prozor, dodan odabiru |
| {{key:Ctrl}} ili {{key:Mod}} i povlačenje lijevim gumbom | Pomicanje prikaza | Ništa |
| Povlačenje desnim gumbom | Pomicanje prikaza | Pomicanje prikaza |
| Kotačić | Zumiranje prema sredini prikaza | Zumiranje |
| Povlačenje srednjim gumbom | Zumiranje | Uz {{ui:Odaberi}}: pomicanje prikaza. Inače zumiranje |
| Ispuštanje datoteke `.detailcraft.json` na aplikaciju | Otvara je | Otvara je |

Klik se računa samo ako se pokazivač pomakne manje od oko 5 piksela između pritiska i otpuštanja; dulji pomak je povlačenje.

## Trackpad

| Radnja | Radi |
|---|---|
| Dva prsta prema gore ili dolje, ili stiskanje | Zumiranje |
| Pritisnite i povucite | Okreće (3D) ili pomiče prikaz (tlocrt i pročelje) |
| {{key:Shift}} i pritisnite i povucite | Pomicanje prikaza u 3D |
| Klik dvama prstima | Desni klik (u prikazu nema izbornika) |

## Dodir

Na tabletu ili zaslonu osjetljivom na dodir:

| Radnja | Radi |
|---|---|
| Dodir | Odabire dio ili ga postavlja na najbliže presjecište mreže kad je uključen alat za postavljanje (dodir unutar otprilike širine prsta računa se) |
| Dugi pritisak na dio | Dodaje ga odabiru ili uklanja (što {{key:Shift}}+klik čini mišem) |
| Jedan prst na odabranom dijelu, zatim povlačenje | Pomiče odabir, privlačeći se na presjecišta mreže |
| Jedan prst drugdje | Okreće model (3D) ili pomiče prikaz (tlocrt i pročelje) |
| Dva prsta | Stiskanje za zumiranje, zajedničko pomicanje za pomicanje prikaza |

Gumbi, popisi i polja su veći kad je zaslon samo dodirni. Odabirni prozori trebaju miš; prstima koristite dodir i dugi pritisak.

## Tipke koje zadržava preglednik

Neke prečace posjeduje preglednik i nijedna stranica ih ne može koristiti, primjerice {{key:Mod+W}} (zatvara karticu), {{key:Mod+T}} (nova kartica) i {{key:Mod+N}} (novi prozor). Ako {{key:Mod+Y}} otvori povijest preglednika umjesto ponavljanja, koristite {{key:Mod+Shift+Z}}.

Prečaci dolaze do DetailCraft-a samo kad stranica ima tipkovnicu. Ako tipka ne radi ili je preglednik izvrši, prvo kliknite prazan dio prozora DetailCraft (primjerice nakon tipkanja u adresnu traku).

## Gdje je Pomakni

Nema naredbe Pomakni: odaberite dio i povucite ga preko razine (držite {{key:Mod}} za povlačenje gore i dolje) ili uredite njegove {{ui:Početak}} i {{ui:Kraj}} u {{ui:Svojstva}}.
