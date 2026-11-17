---
title: Kaj še ni izdelano
summary: Česa ta zgodnja različica DetailCraft še ne zmore in kaj storiti namesto tega.
keywords: omejitve, manjkajoče, načrt razvoja, ni podprto, prihaja, načrtovano, obhod, todo
from: ea411885
---

DetailCraft je zgodnja različica. Ta stran našteva, česa še ne zmore, da lahko načrtujete okoli tega. Nič na tej strani ni obljuba o datumu.

## Modeliranje

| Še ne | Namesto tega, za zdaj |
|---|---|
| Vlečenje enega konca elementa (raztegovanje) | Uredite {{ui:Začetek}} ali {{ui:Konec}} pod {{ui:Konca (x, y, z mm)}} v podoknu {{ui:Lastnosti}} |
| Filter izbora (samo nosilci, samo en profil) | Povlecite okno, nato {{key:Shift}}+klik, da odstranite dele |
| Matrika izbora; vrtenje okoli nagnjene osi; zrcaljenje v nagnjeni ravnini | Kopirajte in prilepite z odmikom ali uporabite {{ui:Podvoji}}; vrtenje in zrcaljenje delujeta v tlorisu ([Izbor z oknom, premik, vrtenje, zrcaljenje, spreminjanje več](topic:select-and-change)) |
| Točke izven mreže pri klikanju | Postavite na mrežo, nato vtipkajte koordinate koncev |
| Pogledi po številčenih mrežnih osi; shranjeni pogledi; delovne ravnine | Uporabite {{ui:3D}} ali {{ui:Dodaj po mreži}} |
| Izvrtine, narisane kot pravi rezi v 3D pogledu | Izvrtine so vidne kot temni čepi; v vseh izvozih so prave |
| Zaobljeni ali poševni izrezi, drugi rezi in okovje | Samo kvadratni izrezi na profilih I |
| Izvrtine, ki jih dodate kotnikom in okroglim votlim profilom | Izvrtine kotnikov prihajajo samo iz [vozliščnih pločevin](topic:brace-gussets) |
| Vnos v palcih | Vtipkajte milimetre (25.4 na palec) |
| Urejanje ali odstranjevanje profila po meri | Dodajte popravljen profil pod novim imenom |

## Stopnice

| Še ne | Namesto tega, za zdaj |
|---|---|
| Ograje, podesti, robne plošče, stopnice iz rešetk, spiralne in dvokrake stopnice | Samo ravni deli; glejte [Stopnice](topic:stairs) |
| Rezi koncev stranskih nosilcev stopnic ob etažah | Stranski nosilci z pravokotnimi rezi; zrežite jih v svoji delavniški programski opremi |

## Povezave

DetailCraft izdela šest povezav: vozliščno pločevino diagonale (glejte [Vozliščne pločevine diagonal](topic:brace-gussets)); privijačen stik med dvema kosoma enega profila I (glejte [Stiki](topic:splices)); poševni spoj med dvema profiloma I, ki se stikata pod kotom, samo rezan ali s privijačenimi čelnimi ploščami (glejte [Poševni spoji](topic:mitres)); poravnano ali podaljšano privijačeno čelno ploščo od vodoravnega, pokončnega nosilca I do pasu ali stojine stebra I; strižni jeziček od nosilca (pravokotnega, poševnega ali nagnjenega) do pasu ali stojine stebra; in podložno ploščo stebra s štirimi sidrnimi vijaki.

| Še ne | Namesto tega, za zdaj |
|---|---|
| Poševne ali nagnjene čelne plošče | Uporabite [strižne jezičke](topic:shear-tabs), ki sprejmejo poševne in nagnjene nosilce |
| Pritrdilni kotniki; polnilne plošče stikov in stiki med različnimi velikostmi; vogalne vozliščne pločevine, varjene na nosilec in steber; skošene vozliščne pločevine | Detajlirajte jih v drugi programski opremi ali dodajte plošče in izvrtine ročno kot proste dele; glejte [Stiki](topic:splices), [Vozliščne pločevine diagonal](topic:brace-gussets) |
| Skošene ali zožene podložne ojačitve; izvrtine za zalivno maso; žep temeljne stope za strižni zob | Pravokotne ojačitve; glejte [Podložne plošče](topic:base-plates) |
| Vute (haunches); varjeni poševni spoji s stikom na čelo; ojačitve v ravni s pasovi drugega elementa | [Poševni spoj](topic:mitres) s čelnimi ploščami in ojačitvami stojine ali navaden poševni rez; druge plošče dodajte ročno kot proste dele |
| Preverjanja nosilnosti povezav (trdnost) | Povezave preverite z izračuni vašega inženirja; DetailCraft opozarja samo na razdaljo do roba in razmik |
| Podolgovate izvrtine | Samo okrogle izvrtine |

## Analiza

| Še ne | Namesto tega, za zdaj |
|---|---|
| Preverjanja projekta, ki presegajo jeklene profile I: cevi, kotniki, profili U, varjene oblike, vitki elementi ali elementi razreda 4, zvijanje, povezave; beton: vitkost zaradi premika, zvijanje, potresno detajliranje, plošče in stene | Zavihek {{ui:Analiza}} preverja jeklene profile I po AISC 360 ali EN 1993-1-1 ([Preverite jeklene elemente po projektnem predpisu](topic:design-checks)); ostalo pusti označeno kot „ni preverjeno“; vse pregleda inženir |
| Analiza uklona, vibracije | Drugi red je samo P-Delta (elastičen); analize uklona ni (modalna, odzivni spekter, časovni potek in pushover so v zavihku Analiza) |
| Preverjanja projekta, ki jih je pregledal inženir | Do takrat so le pomoč: pred uporabo preverite dva ali tri elemente ročno ali v programski opremi vašega inženirja |
| Obtežbe zaradi tal, vetra in snega, izračunane iz površin | Obtežbe nanesite na elemente ročno, v kN/m ali kN |
| Zamiki elementov, ekscentrične spojnice, diagonale samo na nateg, plošče in temelji v okvirju | Elementi se analizirajo na svojih delovnih črtah; diagonale prenašajo nateg in tlak |

## Armatura

| Še ne | Namesto tega, za zdaj |
|---|---|
| Okrogli stebri, spirale, nagnjeni ali ukrivljeni nosilci, plošče, ki niso pravokotne, stene, ki niso ravne | Pravokotni nosilci, stebri, plošče in stene ([Detajlirajte armirani beton](topic:reinforced-concrete)) |
| Palice, zvite v preklop, zamaknjeni preklopi, preklopi na mestih, ki jih izberete | Preklopi v enakih korakih, vsaka palica preklopljena na enem prerezu (ACI razred B, EN α6 = 1.5) |
| Vogalne palice ob odprtinah, armatura proti preboju, potresno detajliranje (ACI 318-19 poglavje 18) | Obrobne palice na vsaki strani odprtine; ostalo preverite sami |
| Branje lastnih datotek konstrukcijskega programa za projektiranje | Izvozite IFC iz njega: njegove IfcReinforcingBar pridejo kot palice ([Palice iz datoteke IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Oblike kljuk, razen ravne, enega upogiba in U; tipi ACI 315 za ravne palice in palice z eno kljuko | Tri oblike se izpišejo kot BS 8666 00, 11, 21 ali ACI Type 2; glejte [Sklic na armaturo](topic:rebar-reference) |
| Metrične palice, razen BS 4449 H8–H40 (npr. CSA 10M–35M) | Imena ASTM soft-metric #10–#36 ali palice BS |

## Risbe in izvozi

| Še ne | Namesto tega, za zdaj |
|---|---|
| Pokončni listi, A0 in listi po vaši meri; splošni pogledi na poševnih mrežah | Ležeči listi od A4 do A1 in ANSI B do D ([Splošne postavitvene risbe in risbe sestavov](topic:drawings)); PDF skalirajte za tiskanje na drugo velikost |
| Simboli varov na enodelnih delavniških risbah; simboli razen kotnih varov | Risbe sestavov imajo simbole kotnih varov; delavniška risba var navede kot besedilo |
| Urejanje risbe v aplikaciji | Spremenite model in risbo ponovno naredite; PDF označite v programu za PDF, na primer MarkupCraft |
| Risbe kot DWG z dimenzijskimi objekti ali model v polnem merilu v prostoru modela z listi kot postavitvami | Vsak list je polnovelik DWG ali DXF papirja; kote so kot črte in številke ([Splošne postavitvene risbe in risbe sestavov](topic:drawings#download)) |
| Izvrtine NC v okroglih votlih profilih, izrezi na kotnikih in okroglih votlih profilih v datotekah NC | Ni zapisano; glejte [Polja datotek NC](topic:nc1-fields) |
| Skosi, označbe in notranji obrisi v datotekah NC | Trenutno nič |
| Izvrtine za vijake, vijaki, vari in temelji v izvozu USD | So v izhodih IFC, NC in BOM; glejte [Izvoz jeklenega modela v USD](topic:usd) |
| Prenos povezav, temeljev, podolgovatih ali pravokotnih izvrtin in izvrtin v okroglih votlih profilih iz datoteke IFC | {{ui:Uvozi IFC}} prenese nosilce, stebre, elemente, plošče, mreže, nivoje, okrogle izvrtine, izreze, vijake in armaturne palice, njegovo poročilo pa našteje, kaj je izpustil |
| Poročila z obrazci po meri | Tri datoteke CSV |

## Podokna

| Še ne | Namesto tega, za zdaj |
|---|---|
| Premikanje poročil na dnu ({{ui:Težave}}, {{ui:Kosovnica}}, {{ui:Armaturni izvleček}}) | Premaknete lahko samo podokna {{ui:Model}} in {{ui:Lastnosti}}. Glejte [Razporedite podokna](common:arrange-panels) |

## Sodelovanje in shranjevanje

| Še ne | Namesto tega, za zdaj |
|---|---|
| Shranjevanje v oblak in sinhronizacija med računalniki | Shranite datoteke `.detailcraft.json` in jih delite kot katero koli datoteko. Shranjevanje v oblak še ni na voljo |
| Kazalci drugih ljudi in oznake „ureja“ v seji Live TeamWork; mreže, nivoji in faze, združeni element za elementom | Spremembe se še vedno združujejo (mreže, nivoji in faze gredo kot celota, velja zadnja sprememba); glejte [Skupaj v živo urejajte eno konstrukcijo](topic:work-live) |
| Povabilne povezave v sejo Live TeamWork prek interneta | Pridružite se s kratko kodo v isti mreži |

## Platforme

- DetailCraft je narejen za zaslon namiznega računalnika, prenosnika ali tabličnega računalnika. Deluje tudi na telefonu: model ohrani zaslon in podokna, poročila pa se odprejo kot listi iz vrstice na dnu, vendar je za podokna malo prostora.
- Delo brez povezave potrebuje najprej DetailCraft, shranjen za delo brez povezave, z {{ui:Shrani za delo brez povezave}} v vrstici aplikacije; ko piše {{ui:Pripravljeno za delo brez povezave}}, vse v tej različici deluje brez povezave. Glejte [Delo brez povezave](common:offline).

Če vam katera od teh vrzeli ovira delo, nam to sporočite prek [strani za podporo](https://getcadcraft.com/support); pomaga nam odločiti, kaj razviti naprej.
