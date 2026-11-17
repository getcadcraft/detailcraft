---
title: Tipke in dejanja miške
summary: Vsaka bližnjica na tipkovnici ter vsako dejanje z miško, sledilno ploščico in dotikom v DetailCraft, iz kode.
keywords: tipkovnica, bližnjice, bližnjične tipke, tipke, miška, sledilna ploščica, dotik, ctrl, command, hitri pregled
from: 05a2dea0
---

Kako so tipke zapisane v tej pomoči: [Tipke, miške in sledilne ploščice](common:keys). Na Macu je {{key:Mod}} tipka Command; drugje je to Ctrl.

## Orodja

Ta delujejo, kadar kazalec ni v besedilnem ali številskem polju.

| Tipka | Naredi |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:B}} | {{ui:Beam}} |
| {{key:C}} | {{ui:Column}} |
| {{key:R}} | {{ui:Brace}} |
| {{key:P}} | {{ui:Plate}} |
| {{key:F}} | {{ui:Footing}} |
| {{key:S}} | {{ui:Stair}} |
| {{key:M}} | Premakni izbor z izbiro dveh presečišč mreže ([Izberi z oknom, premakni, zasukaj, zrcali, spremeni več](topic:select-and-change)) |
| {{key:Esc}} | Spusti izbirno okno, ki ga vlečete, ali vrni vlečene dele nazaj; prekliči premik, prvo točko nosilca, diagonale ali plošče ali prilepljanje; pritisnite znova, da se vrnete na {{ui:Select}}; v {{ui:Select}} počisti izbor. Ko je odprt meni {{ui:More}}, ga zapre |
| {{key:Delete}} ali {{key:Backspace}} | Izbriši izbor (vse izbrano, v enem koraku razveljavitve) |

## Datoteka in urejanje

| Tipka | Naredi |
|---|---|
| {{key:Mod+S}} | Shrani model (prenos). Deluje tudi med vnašanjem v polje |
| {{key:Mod+O}} | Odpri model. Deluje tudi med vnašanjem v polje |
| {{key:Mod+Z}} | Razveljavi (zunaj besedilnih polj; znotraj njih razveljavi vaše tipkanje) |
| {{key:Mod+Y}} ali {{key:Mod+Shift+Z}} | Uveljavi |

## Kopiranje in lepljenje

Ti delujejo, kadar kazalec ni v besedilnem ali številskem polju (tam kopirajo, prilepijo in izberejo vaše besedilo kot običajno). Vsako prilepljanje, izrezovanje, podvajanje ali brisanje je en korak razveljavitve. Več: [Kopiraj, prilepi in podvoji](topic:copy-paste).

| Tipka | Naredi |
|---|---|
| {{key:Mod+C}} | {{ui:Copy}} izbrane elemente in temeljne stope (z njihovimi luknjami, izrezi in povezavami) |
| {{key:Mod+X}} | {{ui:Cut}}: kopiraj izbor, nato ga izbriši |
| {{key:Mod+V}} | {{ui:Paste}}: kopija sledi kazalcu; zanjo kliknite presečišče mreže |
| {{key:Mod+Shift+V}} | {{ui:Paste in place}}: na koordinatah, iz katerih je bila kopirana |
| {{key:Mod+D}} | {{ui:Duplicate}}: takoj ustvari kopijo, premaknjeno za odmik v [nastavitvah DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Select all}}: vsak element, povezava in temeljna stopa |
| {{key:Esc}} | {{ui:Select none}} |

Če ste na strani izbrali besedilo (na primer v tabeli poročila) in nič v modelu, {{key:Mod+C}} kopira besedilo, kot običajno.

{{ui:New}}, {{ui:Sample}} in izvozi nimajo tipk; uporabite orodno vrstico.

Nobena od teh tipk ne naredi ničesar, dokler je odprto pogovorno okno (predogled delavniške risbe ali vprašanje).

## Polja in podokna

| Tipka | Naredi |
|---|---|
| {{key:Enter}} ali {{key:Tab}} | Uporabi vneseno vrednost (vsaka sprememba je en korak razveljavitve) |
| {{key:Enter}} v polju {{ui:Grids}}, {{ui:Levels}}, {{ui:Custom profile}}, luknje ali izreza | Enako kot pritisk na gumb tega obrazca |
| {{key:Left}} {{key:Right}} | Premikanje med zavihki {{ui:Problems}}, {{ui:Bill of materials}} in {{ui:Bending schedule}}, kadar je zavihek v fokusu |
| {{key:Esc}} | Zapri predogled delavniške risbe ali vprašalno pogovorno okno (enako kot {{ui:Cancel}}) |

## Zaslon in pomoč

| Tipka | Naredi |
|---|---|
| {{key:Ctrl+Shift+F}} | Preklopi med običajnim načinom, celozaslonskim in celozaslonskim s skritimi vrsticami. Ctrl na vsakem računalniku, tudi na Macu |
| {{key:Mod+,}} | Odpri {{ui:Settings}} ([nastavitve DetailCraft](topic:settings)) |
| {{key:Esc}} | Zapusti celozaslonski način |
| {{key:F1}} | Odpri to pomoč |

## Miška

| Dejanje | V 3D | V tlorisu in pogledu |
|---|---|---|
| Klik | Izberi del ali postavi na najbližje presečišče, kadar je vključeno orodje za postavljanje (ali prilepi tam med lepljenjem) | Enako |
| {{key:Shift}}, {{key:Ctrl}} ali {{key:Mod}} in klik | Dodaj del k izboru ali ga odstrani | Enako |
| Pritisk na izbran del in vlečenje | Premakni izbor preko nivoja; ob pridržanem {{key:Mod}} gor in dol | Premakni izbor (v pogledu: vzdolž njega ter gor in dol) |
| Vleci z levim gumbom | Zavrti model | Z {{ui:Select}}: izbirno okno (desno: popolnoma znotraj; levo: dotikanje). Med postavljanjem: pomik |
| {{key:Shift}} in vleci z levim gumbom | Z {{ui:Select}}: izbirno okno, dodano k izboru. Med postavljanjem: pomik | Z {{ui:Select}}: izbirno okno, dodano k izboru |
| {{key:Ctrl}} ali {{key:Mod}} in vleci z levim gumbom | Pomik | Nič |
| Vleci z desnim gumbom | Pomik | Pomik |
| Kolešček | Povečava proti sredini pogleda | Povečava |
| Vleci s srednjim gumbom | Povečava | Z {{ui:Select}}: pomik. Sicer povečava |
| Spustite datoteko `.detailcraft.json` na aplikacijo | Odpri jo | Odpri jo |

Klik šteje le, če se kazalec med pritiskom in spustitvijo premakne manj kot približno 5 slikovnih pik; daljši premik je vlečenje.

## Sledilna ploščica

| Dejanje | Naredi |
|---|---|
| Dvoprstno drsenje gor ali dol ali stiskanje | Povečava |
| Pritisk in vlečenje | Zasuk (3D) ali pomik (tloris in pogled) |
| {{key:Shift}} in pritisk ter vlečenje | Pomik v 3D |
| Dvoprstni klik | Desni klik (v pogledu ni menija) |

## Dotik

Na tablici ali zaslonu na dotik:

| Dejanje | Naredi |
|---|---|
| Tap | Izberi del ali postavi na najbližje presečišče mreže, kadar je vključeno orodje za postavljanje (tap v razdalji približno širine prsta šteje) |
| Dolg pritisk na del | Dodaj k izboru ali odstrani (kar naredi {{key:Shift}}+klik z miško) |
| En prst na izbranem delu, nato vleci | Premakni izbor, pri čemer se pritrdi na presečišča mreže |
| En prst drugje | Zavrti model (3D) ali pomik (tloris in pogled) |
| Dva prsta | Stisni za povečavo, premakni skupaj za pomik |

Gumbi, seznami in polja so večji, kadar je zaslon samo dotikalen. Izbirna okna potrebujejo miško; s prsti uporabljajte tap in dolg pritisk.

## Tipke, ki jih ohrani brskalnik

Nekatere bližnjice pripadajo brskalniku in jih nobena stran ne more uporabiti, na primer {{key:Mod+W}} (zapri zavihek), {{key:Mod+T}} (nov zavihek) in {{key:Mod+N}} (novo okno). Če {{key:Mod+Y}} odpre zgodovino brskalnika namesto uveljavitve, uporabite {{key:Mod+Shift+Z}}.

Bližnjice dosežejo DetailCraft le, kadar ima stran tipkovnico. Če tipka nič ne naredi ali jo izvede brskalnik, najprej kliknite prazen del okna DetailCraft (na primer po vnosu v naslovno vrstico).

## Kje je Premakni

Ukaza Premakni ni: izberite del in ga povlecite preko nivoja (držite {{key:Mod}} za vlečenje gor in dol) ali uredite njegova {{ui:Start}} (Začetek) in {{ui:End}} (Konec) v {{ui:Properties}} (Lastnosti).
