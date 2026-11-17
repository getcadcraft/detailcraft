---
title: Prihod iz drugih programov za detajliranje
summary: Kako se navade polnega programa za detajliranje preslikajo v DetailCraft in katere razlike presenetijo izkušene detajliste.
keywords: preklop, selitev, znano, potek dela, primerjava, razlike, oštevilčevanje, komponente, katalog, risbe, navade
from: 39639a5d
---

Če detajlirate v Tekla Structures, se vam bo večina DetailCrafta zdela znana: mreže, nivoji, profili iz kataloga, deli in sestavi, spoji, oštevilčevanje, datoteke NC, IFC. Obseg je zelo drugačen: Tekla Structures je poln proizvodni sistem, DetailCraft pa je majhna, zgodnja aplikacija za brskalnik, ki opravi nekaj nalog od začetka do konca. Ta stran pove, kje se vaše navade ohranijo in kje ne.

:::tip
Če vam roke poznajo trak Tekla Structures, izberite slog menija {{ui:Jekleni trak}} v {{ui:Nastavitve}} › {{ui:DetailCraft}} › {{ui:Meniji, tipke in miška}}: zavihki Modeliranje, Detajliranje, Uredi, Risbe, Izdelava in Pogled, srednji gumb pa pomika. Če prihajate iz AutoCADa in radi tipkate ukaze, {{ui:Klasično risanje}} doda ukazno vrstico (BEAM, COLUMN, ENDPLATE, ZOOM …). Glejte [Meniji, tipke in miška](topic:menus-keys-and-mouse).
:::

## Hitri pregled

| Na kar ste navajeni | V DetailCraftu |
|---|---|
| Ustvarjanje mrež s koordinatami v pogovornem oknu | {{ui:Mreže}} v levem podoknu: oznake in razmiki med črtami, ne absolutne koordinate. Oštevilčene črte tečejo v eno smer, črkovne v drugo |
| Nivoji kot Z-koordinate mreže | Ločen seznam {{ui:Nivoji}}, ime in kota na vrstico, uporabi se z {{ui:Uporabi nivoje}} |
| Izbiranje točk kjerkoli s prilepljanjem | Kliki se prilepijo le na presečišča mreže. Točke izven mreže vtipkate v {{ui:Konca (x, y, z mm)}} elementa |
| Ukazi za steber, nosilec in ploščo | {{ui:Steber}} ({{key:C}}), {{ui:Nosilec}} ({{key:B}}), {{ui:Diagonala}} ({{key:R}}), {{ui:Plošča}} ({{key:P}}), {{ui:Temeljna stopa}} ({{key:F}}) |
| Pogovorno okno lastnosti dela (dvojni klik na del) | Kliknite enkrat: podokno {{ui:Lastnosti}} desno je vedno aktivno; ni pogovornega okna in ni gumba Spremeni ali Uporabi |
| Položaj na ravnini, zasuk in nastavitve globine | {{ui:Položaj}} (vrh jekla, sredina ali spodaj na črti) in {{ui:Zasuk (°)}}. Ni ločenih vodoravnih zamikov |
| Katalog profilov | Fiksni seznam 2,311 objavljenih velikosti (AISC W, S, C, L, HSS, Pipe; evropski IPE, HEA, HEB, UPN; britanski UB, UC, PFC, EA, UEA, SHS, RHS, CHS in hladno oblikovani votli profili), poleg parametričnih plošč in vaših {{ui:Profil po meri}} |
| Katalog materialov | Sedem razredov v seznamu: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Uporaba komponente spoja in njenega pogovornega okna | Izberite nosilec in izberite {{ui:Čelne plošče}}. Nastavitve se prikažejo v podoknu {{ui:Lastnosti}}. Obstajata le dva spoja (čelna plošča na pasnico stebra, podložna plošča) |
| Samodejna povezava ali kopiranje spoja na podobne spoje | Izberite povezavo in izberite {{ui:Uporabi za podobne (n)}} |
| Oštevilčevanje z nizi in začetnimi številkami | Ni ukaza: oznake se same posodobijo po vsaki spremembi, s fiksnimi predponami c, b, br, p in C, B, BR, P |
| Pogovorna okna za vijake in luknje | Luknje vtipkate po ploskvi in položaju. Vijaki pridejo le iz spojev |
| Orodja za rezanje, prileganje in rezanje poligona | Izrezi (zgoraj ali spodaj, na obeh koncih) le na oblikah I. Skrajšanja pri spojih so samodejna |
| Poročila in predloge | Tri fiksna poročila v zavihkih spodaj in prenosi CSV |
| Ustvarjanje risb in seznam risb | Ena delavniška risba na oznako dela, vse naenkrat ustvarjene, predogled, nato prenos kot en PDF ali list za listom. Nič se ne shrani ali ureja |
| Izvoz datoteke NC | {{ui:Datoteke NC}}: ena datoteka DSTV na oznako dela, samo oblike I in plošče, stisnjeno v zip |
| Izvoz IFC | {{ui:IFC}}: IFC4 celotnega modela z armaturo |
| Armatura v poljubnem betonskem delu | Armatura le v pravokotnih temeljnih blazinah, ameriške velikosti palic, s spodnjo mrežo in izhodnimi palicami |
| Model, shranjen v projektni mapi, več uporabnikov | Ena datoteka `.detailcraft.json`, ki jo prenesete. En uporabnik, na vašem računalniku |
| Zgodovina razveljavitev | {{key:Mod+Z}} in {{key:Mod+Y}}, do 200 korakov, ohranjeno, dokler ne odprete ali začnete drugega modela |

## Razlike, ki zmotijo ljudi

### Oznake se spreminjajo same od sebe

Koraka oštevilčevanja ni. Oznake se po vsaki spremembi preračunajo, zato so vedno aktualne, lahko pa se tudi preštevilčijo: dodate steber in včerajšnji c3 je zdaj lahko c4. Zgodovine oštevilčevanja, ki bi hranila stare oznake, ni. Model dokončajte, nato izdajte kosovnico, datoteke NC in delavniške risbe skupaj iz ene shranjene datoteke.

### Srednji gumb miške povečuje, ne pomika

V 3D-pogledu: levi vlek zasuka, desni vlek pomika, kolešček povečuje, vlek s srednjim gumbom pa tudi povečuje. Ob levem vleku s pridržanim {{key:Shift}} se pogled tudi pomika. Kolešček povečuje proti sredini pogleda, ne proti kazalcu. Središča vrtenja ni mogoče izbrati: model se vrti okoli sredine pogleda. Glejte [Premikanje po 3D-pogledu](topic:navigate-3d).

### Stebri privzeto gledajo v eno smer

Pri zasuku 0 pasnice stebra gledajo v smeri oštevilčenih mrežnih črt. Nosilci, ki tečejo med črkovnimi mrežnimi črtami, se vežejo v rebro, čelne plošče tam niso sprejete („Nosilci, ki se vežejo v rebro stebra, še niso izdelani“). Te stebre zasukajte za 90° preden dodate spoje.

### Pogledi samo na črkovnih črtah

{{ui:Pogled}} gleda samo vzdolž črkovnih mrežnih črt. Vzdolž oštevilčenih črt ni pogledov, shranjenih pogledov ne delovnih ravnin. Za okvirje na oštevilčenih črtah uporabite {{ui:3D}} ali {{ui:Dodaj po mreži}}.

### Izbor, kopiranje in premikanje

Več delov izberete s {{key:Shift}}+klik ali {{key:Mod+A}}, nato jih kopirate, izrežete, prilepite (na presečišče mreže, na vtipkan zamik ali na isto mesto) in podvojite, vključno s spoji ([Kopiranje, prilepljanje in podvajanje](topic:copy-paste)). Izbora z okvirjem ni, filtra izbora ni, premika, zrcaljenja ali razpostavitve (matrike) ni, lastnosti pa spreminjate po en element naenkrat v podoknu {{ui:Lastnosti}}.

### Mreže ne vlečejo elementov s seboj

Elementi obdržijo svoje koordinate, ko spremenite razmik mreže; z mrežnimi črtami se nič ne premakne. Mrežo spremenite, preden postavite jeklo, ali pa potem uredite koordinate konca vsakega elementa.

### Spoji niso dimenzionirani

Oba spoja postavita plošče, luknje, vijake in zvare iz številk, ki jih vnesete. Nobene projektne kontrole ni, le opozorila o robovih in razmikih (iz EN 1993-1-8, preglednica 3.3).

### Luknje v 3D-pogledu niso izrezane

Luknje so prikazane kot temni čepi. Prave luknje so v datotekah NC, delavniških risbah in datoteki IFC. Izrezi so v pogledu izrezani.

### Teže so bruto

Teža jekla ne odšteje lukenj ali izrezov, teža vijakov pa ni vključena.

### Samo milimetri

Vse se vtipka in prikazuje v milimetrih, tudi za oblike AISC. Imena profilov ohranijo objavljeno obliko (W12x50, HSS6x6x1/4).

### Ni risb za upravljanje

Seznama risb ni, urejevalnika risb ni, ni splošnih postavitvenih ali sestavnih risb. Delavniška risba nastane, ko jo zahtevate, in se prenese; če jo želite spremeniti, spremenite model in jo naredite znova.

### Deluje v brskalniku

Shranjevanje prenese datoteko. Bližnjic, ki jih brskalnik zadrži zase, ni mogoče uporabiti. Vaši modeli nikoli ne zapustijo vašega računalnika: glejte [Kam gredo vaše datoteke](common:your-files).

## Kaj nadaljevati v trenutni programski opremi

DetailCraft danes ustreza majhnim okvirjem, preverjanju zamisli, poučevanju ali izdelavi datotek NC in delavniških risb za preprosta nosilna dela in stebre. Zapletene spoje, splošne postavitvene risbe, montažne risbe, projekte z več uporabniki in vse, kar je navedeno v [Kaj še ni izdelano](topic:not-built-yet), še naprej delajte v programu, ki ga uporabljate zdaj.
