---
title: Zgjidhja e problemeve
summary: Çfarë do të thotë çdo mesazh i DetailCraft dhe çfarë të bësh, nga një pamje 3D që mungon te lidhjet që nuk ndërtohen.
keywords: problem, gabim, nuk funksionon, ndihmë, rregullo, mesazh, refuzuar, WebGL, bosh, paralajmërim, nuk mund, çështje
from: f8c3b2b1
---

Shumicën e refuzimeve i shpjegon shiriti i statusit në fund të ekranit, ose skeda {{ui:Problemet}}. Lexoji ato së pari. Mesazhet më poshtë citohen ashtu si i shfaq DetailCraft.

## Pamja 3D mungon

**"Ky shfletues nuk mundi të nisë grafikën 3D (WebGL). Modeli, raportet dhe eksportet vazhdojnë të funksionojnë."**

Shfletuesi nuk mundi të nisë WebGL, grafikën 3D me të cilën vizaton DetailCraft.

1. Përditëso shfletuesin në versionin e fundit.
2. Aktivizo përshpejtimin me harduer dhe rinis shfletuesin (shih më poshtë).
3. Përditëso drejtuesin e grafikës, ose provo një shfletues tjetër. Desktopët në distancë dhe makinat virtuale shpesh nuk kanë WebGL.
4. Ndërkohë mund të punosh akoma: vendos elementët me formularin {{ui:Shto sipas rrjetit}}, lexo raportet dhe eksporto. Vetëm klikimi në pamje ka nevojë për WebGL.

:::chromium
Për të aktivizuar përshpejtimin me harduer, hap **Cilësimet, Sistemi** dhe aktivizo **Përdor përshpejtimin e grafikës kur është i disponueshëm**, pastaj rihap.
:::

:::firefox
Për të aktivizuar përshpejtimin me harduer, hap **Cilësimet, Të përgjithshme, Performanca**, hiq shenjën te **Përdor cilësimet e rekomanduara të performancës**, dhe vër shenjë te **Përdor përshpejtimin me harduer kur është i disponueshëm**. Rinis Firefox-in.
:::

:::safari
Safari e ka WebGL të aktivizuar si parazgjedhje. Përditëso macOS nëse pamja akoma nuk niset, dhe kontrollo që asnjë shtesë ta bllokojë.
:::

Më shumë te [Shfletuesit dhe kompjuterët](common:browsers).

## Klikimi në pamje nuk bën asgjë

- **Asnjë kryqëzim pranë klikimit.** Veglat e vendosjes kapen vetëm te kryqëzimet e rrjetit. Një klikim larg çdo pike nuk bën asgjë. Afrohu derisa pika të ndizet.
- **Vegla është {{ui:Përzgjidh}} dhe ke klikuar hapësirë bosh.** Kjo heq përzgjedhjen.
- **Ke tërhequr.** Një shtypje dhe lëshim më larg se disa piksela njëri nga tjetri është tërheqje: e rrotullon ose lëviz pamjen.
- **Pjesa është e prerë.** Te {{ui:Planimetria}} dhe {{ui:Fasada}}, çeliku jashtë prerjes fshihet dhe nuk mund të klikohet. Kalo te {{ui:3D}}.
- **Kryqëzimi është në nivel të gabuar.** Te {{ui:3D}}, kryqëzimet në disa nivele mund të mbivendosen në ekran; klikimi merr më të afërtin. Përdor {{ui:Planimetria}} ose {{ui:Fasada}}.

## Mesazhet e vendosjes

| Mesazhi | Çfarë të bësh |
|---|---|
| "Nuk ka nivel mbi Nivelin 2 që kolona të arrijë. Shto fillimisht një nivel." | Shto një nivel te {{ui:Nivelet}}, ose kliko një nivel më poshtë |
| "Zgjidh një kryqëzim tjetër për skajin tjetër." | Ke klikuar të njëjtën pikë dy herë |
| "Dy skajet janë e njëjta pikë." | Te {{ui:Shto sipas rrjetit}}, zgjedhjet "Nga" dhe "Deri" janë të njëjta |
| "Shto vija rrjeti në panelin e majtë për të vendosur elementët." | Modeli nuk ka vija rrjeti në një drejtim |
| "Profil i panjohur "…"" | Profili nuk është në katalog ose te profilet e personalizuara të modelit. Zgjidh një nga lista |
| "Shkruaj një numër." | Një fushë numri u la bosh ose ka tekst në të |

## Lidhjet nuk ndërtohen

### "Ky trar nuk përfundon në një vijë kolone."

Pllakat e skajit kanë nevojë që skaji i trarit të jetë saktësisht në vijën e një kolone vertikale, midis fundit dhe majës së saj (brenda 1 mm). Kontrollo {{ui:Skajet (x, y, z mm)}} të trarit dhe pozicionin e kolonës.

### "Ky trar takon murin e kolonës ose është me këndë"

Ose te {{ui:Problemet}}: "Trarët që futen në murin e kolonës nuk janë ndërtuar ende: rrotullo kolonën 90° ose përdor një lidhje tjetër."

Trari futet në murin e kolonës. Përzgjidh kolonën dhe vendos {{ui:Rrotullimi (°)}} në 90, pastaj provo përsëri. Nyjet me këndë nuk ndërtohen.

### "Pllakat e skajit ndërtohen vetëm për trarë horizontalë (ky trar është i pjerrët)."

Të dy skajet e trarit duhet të jenë në të njëjtin lartësi.

### "Pllakat e skajit kërkojnë trarin vertikal (rrotullim 0)."

Vendos {{ui:Rrotullimi (°)}} të trarit përsëri në 0.

### "Pllakat e skajit kërkojnë një trar profil I." / "Pllakat e skajit kërkojnë një kolonë profil I."

Vetëm profilet I (W, IPE, HEA, HEB ose një I e personalizuar) pranojnë pllaka skaji.

### "Skaji i trarit nuk është më në vijën e kolonës."

E ke zhvendosur trarin ose kolonën pasi shtove lidhjen. Zhvendose përsëri, ose fshi lidhjen.

### "Lidhjet e prenë këtë element deri në zero."

Lidhjet në të dy skajet e prenë elementin më shumë se gjatësia e tij, për shembull një trar shumë i shkurtër midis dy kolonave të thella. Kontrollo skajet e elementit dhe trashësinë e pllakës.

### "Nuk ka nyje të tjera si kjo … pa lidhje."

{{ui:Të ngjashme}} kopjon vetëm te nyjet me të njëjtin profil trari, të njëjtin profil kolone dhe të njëjtin lloj lidhjeje, trar në flanxhë, që ende nuk kanë lidhje.

### "Të dy skajet kanë tashmë lidhje." / "Kjo kolonë ka tashmë pllakë themeli."

Përzgjidh lidhjen ekzistuese për ta ndryshuar, ose fshije më parë.

## Paralajmërimet te skeda Problemet

Paralajmërimet nuk e pengojnë një lidhje ose themel të ndërtohet; të kërkojnë ta kontrollosh. Ato të distancës nga buza dhe të hapësirës përdorin minimumet e EN 1993-1-8 Tabela 3.3 (buza 1.2 × vrima, hapi 2.2 × vrima, gjurma 2.4 × vrima). Nëse projekti yt përdor rregulla të tjera, paralajmërimi mund të mos zbatohet; DetailCraft nuk projekton lidhje.

"një vrimë është jashtë skajit të pjesës" do të thotë se x i një vrime është më i vogël se 0 ose më i madh se gjatësia e prerjes. Mos harro se x matet nga fillimi i prerjes, pasi lidhjet e kanë prerë pjesën prapa.

## Ndryshimet e themelit refuzohen

| Mesazhi | Çfarë të bësh |
|---|---|
| "Mbulesa nuk lë vend për shufra në këtë themel." | Bëje themelin më të madh ose mbulesën më të vogël |
| "Themeli është shumë i cekët për dy shtresa shufrash brenda mbulesës." | Bëje më të thellë ose zvogëlo mbulesën |
| "Shufrat e nisjes nuk futen brenda themelit me mbulesë 75 mm." | Më pak shufra nisjeje, hapësirë më e afërt, ose themel më i madh |
| "Hapësira e shufrave duhet të jetë 50–1000 mm." | Shkruaj një hapësirë në atë interval |
| "Gjatësia duhet të jetë 300–50000 mm." | Madhësitë e themelit kanë kufij: gjatësia dhe gjerësia 300 deri 50000, thellësia 150 deri 10000 |

## Rrjetet dhe nivelet refuzohen

| Mesazhi | Çfarë të bësh |
|---|---|
| "Rrjetet e numëruar: jep një hapësirë midis çdo çifti vijash (4)." | Numëro hapësirat: pesë vija kanë nevojë për katër hapësira |
| "Rrjetet me shkronja: hapësirat duhet të jenë milimetra pozitivë." | Pa zero, numra negativë ose tekst |
| "Rrjetet e numëruar: etiketat e rrjetit duhet të jenë të ndryshme." | Dy vija kanë të njëjtën etiketë |
| "Jo më shumë se 60 vija rrjeti në çdo drejtim." | Ndaje modelin |
| "Mbaj të paktën një nivel." | Ke hequr çdo rresht niveli |
| "Çdo nivel duhet një emër." / "Dy nivele quhen "…"." | Jepi çdo nivelit një emër të ndryshëm |

## Hapja e skedarit dështon

| Mesazhi | Shkaku |
|---|---|
| "DetailCraft hap modelet e veta (.detailcraft.json). Importimi IFC nuk është ndërtuar ende." | Skedari nuk është një skedar `.json` |
| "Ky nuk është model DetailCraft (jo JSON)." | Skedari është i dëmtuar ose është një JSON tjetër |
| "Ky nuk është model DetailCraft." | Një skedar JSON nga një program tjetër |
| "Ky model u ruajt nga një DetailCraft më i ri (formati 2)." | Hape me DetailCraft më të ri që e ruajti |
| "Ai skedar është shumë i madh për të qenë model DetailCraft." | Mbi 50 MB |

Kur një skedar hapet me paralajmërime si "2 elemente nuk ishin të vlefshme dhe u lanë jashtë.", pjesa tjetër e modelit është në rregull. Mos e ruaj mbi origjinalin derisa të kesh kontrolluar çfarë u la jashtë.

## Eksportet

| Mesazhi | Shkaku |
|---|---|
| "Nuk ka asgjë për eksportuar ende." | {{ui:IFC}} me model bosh |
| "Nuk ka pjesë profil I ose pllakë për të shkruar skedarët NC." | Vetëm kanale, këndore ose tuba në model |
| "Nuk u shkrua (deri tani vetëm profile I dhe pllaka): …" | Ato shenja nuk janë profile I ose pllaka; pjesa tjetër u shkrua |
| "Nuk ka themele, pra nuk ka shufra për të planifikuar." | {{ui:Përkulja}} pa themele |
| "… karakter jashtë fontit PDF u shtypën si "?"." | Emri i modelit ose një klasë ka karaktere që fonti PDF nuk i ka |

{{ui:Vizatimi i punëtorisë}} i çaktivizuar: modeli nuk ka ende pjesë.

## Shkarkimet nuk shfaqen

Çdo ruajtje dhe eksport është një shkarkim i shfletuesit. Kontrollo listën e shkarkimeve të shfletuesit tënd. Nëse shfletuesi pyet para se të shkarkojë disa skedarë, ose bllokon shkarkimet nga kjo faqe, lejoji ato. Në Safari, kontrollo butonin e shkarkimeve në shiritin e veglave.

## Tastet nuk bëjnë asgjë

- Kursori është në një fushë teksti ose numri: tastet e veglave dhe {{key:Delete}} injorohen aty që të mund të shkruash. Shtyp {{key:Tab}} ose kliko pamjen.
- Është hapur një dialog: mbylle më parë.
- Shfletuesi e ka tastierën (për shembull shiriti i adresës): kliko brenda DetailCraft.
- {{key:Ctrl+Shift+F}} përdor Control edhe në Mac.

## Problemet jashtë linje

Butoni {{ui:Ruaje për jashtë linje}} te shiriti i aplikacionit tregon në çfarë gjendjeje është kopja jashtë linje. Si funksionon ruajtja: [Puna jashtë linje](common:offline).

| Butoni thotë | Çfarë do të thotë | Çfarë të bësh |
|---|---|---|
| {{ui:Ruaje për jashtë linje}} | Nuk ka ende kopje jashtë linje në këtë shfletues | Zgjidhe kur je në linjë |
| Po ruhet 5 nga 20 | Ruajtja po zhvillohet | Prit deri te {{ui:Gati jashtë linje}}; mbaj skedën hapur |
| {{ui:Gati jashtë linje}} | DetailCraft, pamja e tij 3D, çdo eksport dhe kjo ndihmë funksionojnë pa lidhje | Asgjë. Kliko për {{ui:Ruaje përsëri (merr versionin më të ri)}} ose {{ui:Hiq kopjen jashtë linje}} |
| {{ui:Nuk u ruajt}} | Disa skedarë nuk u shkarkuan | Kontrollo lidhjen dhe kliko për ta provuar përsëri |
| {{ui:Modaliteti jashtë linje nuk është i disponueshëm}} | Kjo dritare nuk mund të mbajë kopje jashtë linje: dritaret private dhe disa kompjuterë të menaxhuar e bllokojnë | Përdor një dritare normale, ose punoje në linjë |

Nëse je jashtë linje dhe butoni nuk thotë {{ui:Gati jashtë linje}}, mos e rifresko ose mbyll skedën: ajo që është ngarkuar vazhdon të punojë. Ruaje modelin me {{key:Mod+S}} dhe prit derisa të jesh përsëri në linjë.

## Punë e paruajtur

Nëse shfletuesi pyet nëse të lësh faqen, DetailCraft ka ndryshime të paruajtura. Zgjidh të qëndrosh, pastaj shtyp {{key:Mod+S}}. DetailCraft nuk mund ta rikthejë një model pasi skeda të jetë mbyllur.

## Ende i bllokuar

Shëno çfarë bëre dhe mesazhin e saktë, dhe na e thuaj përmes [faqes së mbështetjes](https://getcadcraft.com/support).
