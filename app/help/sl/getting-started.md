---
title: Začetek z DetailCraft
summary: Kaj DetailCraft zdaj počne, kako ga odprete in prvi model od mrež do delavniške risbe v desetih minutah.
keywords: začetek, prvi model, uvod, detajliranje jekla, armatura, hitri začetek, vadnica, pregled
from: e4f16bbe
---

DetailCraft je aplikacija za detajliranje jekla in armature v družini CadCraft. Zgradite 3D model jeklenega okvirja na mrežah in nivojih, ga povežete in dobite, kar potrebuje delavnica: oznake delov in sestavov, kosovnico, delavniške risbe posameznih delov, datoteke DSTV NC, model IFC in armaturni izvleček za temeljne stope.

Ta izdaja je zgodnja. Dobro opravi nekaj stvari in ne vsega naenkrat. Preden za pravo delo načrtujete, preberite [Kaj še ni izdelano](topic:not-built-yet).

## Kaj zdaj počne

- Mreže in nivoje, ki jih vnesete, v milimetrih.
- Stebri, nosilci, diagonale in plošče iz objavljenih katalogov profilov (AISC W, S, C, L, HSS in Pipe; evropski IPE, HEA, HEB in UPN; britanski UB, UC, PFC, EA, UEA, SHS, RHS in CHS) ter vaše parametrične profile.
- Dva spoja: vijačen čelni spoj od nosilca do pasnice stebra in temeljna plošča stebra s štirimi sidrnimi palicami. Vsak se lahko kopira na vsak podoben spoj.
- Izvrtine in izrezi, vneseni z mestom.
- Pravokotne temeljne stope s spodnjo mrežo in začetnimi palicami.
- Oznake delov in sestavov, ki se same posodobijo po vsaki spremembi.
- Izvozi: IFC4, datoteke DSTV NC (I-profili in plošče), kosovnica kot CSV, armaturni izvleček kot CSV in PDF delavniške risbe enega dela.

## Odprite DetailCraft

1. Odprite DetailCraft v namiznem brskalniku: Chrome, Edge, Firefox ali Safari. Glejte [Brskalniki in računalniki](common:browsers).
2. Počakajte, da zaslon napolni okno. Vrstica stanja na dnu pravi: „Pripravljeno. Odprite Vzorec ali nastavite mreže in nivoje ter začnite postavljati elemente.“

Pogled modela potrebuje 3D grafiko (WebGL). Če sredina zaslona pravi „Ta brskalnik ni mogel zagnati 3D grafike (WebGL)“, glejte [Odpravljanje težav](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vaši modeli ostanejo v vašem računalniku. Odpiranje modela ga prebere v brskalniku, shranjevanje pa prenese datoteko. Ničesar se ne naloži. Shranjevanje v oblak še ni na voljo. Glejte [Kje so vaše datoteke](common:your-files). Za uporabo DetailCraft pozneje brez povezave enkrat, medtem ko ste na spletu, izberite {{ui:Shrani za delo brez povezave}} v vrstici aplikacije; glejte [Delo brez povezave](common:offline).
:::

:::offline
Niste povezani z omrežjem. DetailCraft deluje brez povezave samo, če je bil prej shranjen za uporabo brez povezave: gumb {{ui:Shrani za delo brez povezave}} v vrstici aplikacije mora potem prikazovati {{ui:Pripravljeno za delo brez povezave}}. Glejte [Delo brez povezave](common:offline).
:::

## Najprej poglejte vzorec

Najhitreje vidite, kaj DetailCraft naredi, na vzorčnem okvirju.

1. V skupini {{ui:Datoteka}} orodne vrstice izberite {{ui:Vzorec}}.
2. Pogled prikaže dvopoljni okvir: šest stebrov s podložnimi ploščami, štiri nosilce s čelnimi ploščami, eno diagonalo in sedem temeljnih stop z armaturo.
3. Kliknite nosilec. Podokno {{ui:Lastnosti}} na desni prikaže njegovo oznako dela, dolžino reza, težo in izvrtine, ki so jih naredile čelne plošče.
4. Odprite zavihek {{ui:Kosovnica}} na dnu, da vidite vsako oznako dela s številom in težo.

Vadnica [Ogled vzorčnega okvirja](topic:sample-model) ga razloži del za delom.

## Vaš prvi model

Nov model že ima mreže 1 do 3 po A do B na 6000 mm in dva nivoja, Nivo 1 na 0 in Nivo 2 na 4000.

1. Izberite {{ui:Novo}}. Če trenutni model vsebuje spremembe, DetailCraft vpraša, ali jih želite najprej shraniti.
2. Izberite {{ui:Tloris}} nad pogledom. Seznam nivojev ob njem izbere Nivo 1.
3. Izberite {{ui:Steber}} v orodni vrstici ali pritisnite {{key:C}}.
4. Kliknite presečišče mrež A/1. Od Nivoja 1 do Nivoja 2 se pojavi steber W12x50. Vrstica stanja pove, kam je bil postavljen.
5. Kliknite B/1, A/2 in B/2, da postavite še tri.
6. Na seznamu nivojev izberite Nivo 2 in nato izberite {{ui:Nosilec}} ali pritisnite {{key:B}}.
7. Kliknite A/1, nato A/2. Nosilec W16x26 poveže vrhova obeh stebrov, njegov zgornji rob jekla pa je na nivoju.
8. Pritisnite {{key:Esc}}, da se vrnete na {{ui:Izberi}}, nato kliknite nosilec.
9. Izberite {{ui:Čelne plošče}} v skupini {{ui:Poveži}}. Na obeh koncih nastane vijačna čelna plošča, nosilec se skrajša, da se prilega, prva čelna plošča pa je zdaj izbrana.
10. Znova kliknite nosilec.
11. Izberite {{ui:Delavniška risba}} v skupini {{ui:Izhod}}. Odpre se predogled delavniške risbe nosilca. Izberite {{ui:Prenesi PDF}}.
12. Pritisnite {{key:Mod+S}}, da shranite model. Brskalnik prenese `Untitled.detailcraft.json`.

Preimenujte model v polju {{ui:Ime}} na zgornjem levem robu, preden shranite, da datoteka in vsi izvozi nosijo njegovo ime.

## Kam naprej

- [Ogled zaslona](topic:workspace)
- [Nastavitev mrež in nivojev](topic:grids-and-levels)
- [Premikanje po 3D pogledu](topic:navigate-3d), z miško, sledilno ploščico ali zaslonom na dotik
- [Prehod z drugih programov za detajliranje](topic:coming-from), če poznate kak velik paket za detajliranje
- [Uporaba te pomoči](common:help)
