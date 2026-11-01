---
title: Çfarë është e re në 0.7
summary: Kontrolle projektimi të profileve I të çelikut me kombinime ngarkesash nga ASCE 7 ose EN 1990, dhe kontrolle elementësh sipas AISC 360 ose EN 1993-1-1; eksport USD i modelit të çelikut, një mjet ndihmës për USD, një shirit Çeliku me butona të mëdhenj dhe të vegjël, panele që fshihen dhe dialogë që lëvizin.
keywords: çfarë është e re, what's new, shënime lëshimi, ndryshimet, ndryshime, 0.7, version, veçori të reja, kontrollet e projektimit, projektimi i çelikut, shfrytëzimi, utilization, kombinime ngarkesash, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Shtojca Kombëtare, ngarkesa e gjallë e çatisë, kufiri i deformimit, usd, usda, usdc, usdz, openusd, asistent, mcp, shirit çeliku, shirit, buton i ndarë, njësitë, kompakt, panele, dialogë, portugalisht
from: 17d1e0bb
---

Kjo është ajo që ndryshoi në DetailCraft 0.7, krahasuar me 0.6. Analiza e kornizës së 0.6 ka tani një hap të dytë: kontrollimin e elementëve të çelikut sipas një kodi projektimi.

## E re

### Bashkime mitër (0.7.1)

- **Dy profile I që takohen me kënd**, si gjuri i një portali ose kulmi i çatisë: zgjidh të dyja, zgjidh {{ui:Mitre}} te menuja {{ui:More}} e grupit {{ui:Connect}}, dhe të dy skajet pritet në planin që përgjysmon këndin. Pllakat e skajit të bulonuara së bashku dhe nervat e shpinës së profilit janë kutiza zgjedhjeje në dialogun e ri Mitër, ku fushat e numëruara përputhen me një vizatim të bashkimit tënd të bërë ndërsa shkruan. Mitra ndjek elementët kur lëvizin, dhe kalon te vizatimet, skedarët NC (prerje të anuara), IFC dhe lista e materialeve. Shih [Bashkimet mitër](topic:mitres).

### Kontrollet e projektimit

- **Kombinime ngarkesash nga kodi.** Te skeda {{ui:Analysis}}, blloku i ri {{ui:Design checks}} ka një {{ui:Design code}}: ASCE 7 + AISC 360 (SHBA, LRFD) ose EN 1990 + EN 1993-1-1 (Eurocode). Jep çdo rasti ngarkese llojin e vet (e vdekur, e gjallë, ngarkesa e re e gjallë e çatisë, bora, era, sizmike), shtyp {{ui:Make combinations}}, dhe DetailCraft shkruan kombinimet e kodit për forcën dhe shërbimin e rasteve të tua. Kombinimet që shkrove vetë mbeten. Shih [Bëj kombinimet](topic:design-checks#make-the-combinations).
- **Vlerat e Shtojcës Kombëtare.** Për Eurokodin faktorët fillojnë me vlerat e rekomanduara; {{ui:National Annex values}} të lejon të shkruash ato të vendit tënd, dhe ruhen në model. Shih [Bëj kombinimet](topic:design-checks#make-the-combinations).
- **Kontrollo elementët.** {{ui:Check members}} kontrollon çdo profil I çeliku për tërheqje, shtypje me bukling, përkulje me bukling anësor-rrotullues, prerje, përkulje me forcë aksiale dhe deformim kundrejt {{ui:Deflection limit}} që vendose. Tabela shfaq shfrytëzimin e çdo elementi, kontrollin që e udhëheq dhe kombinimin e tij, dhe elementët ngjyrosen në model (blu, jeshile, ocër, e kuqe, gri për ata që nuk u kontrolluan). Shih [Kontrollo elementët](topic:design-checks#check-the-members).
- **Në raport.** {{ui:Report (PDF)}} dhe {{ui:Report (CSV)}} shtojnë edicionet e kodit, cilësimet, shfrytëzimin sipas elementit dhe çdo klauzolë të përdorur. Shih [Raporti](topic:design-checks#the-report).
- **Një ndihmë derisa një inxhinier ta ketë rishikuar.** Përdor vetëm forca të rendit të parë; tubat, këndoret, kanalet, format e saldura dhe pjesët e holla ose të klasës 4 shfaqen "nuk u kontrollua", me arsyen; torsioni, lidhjet dhe betoni nuk kontrollohen. Shih [Çfarë nuk kontrollohet](topic:design-checks#what-is-not-checked).

### USD

- **Eksporto modelin e çelikut si USD.** {{ui:USD}} te grupi {{ui:Output}} e shkruan modelin si {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} ose {{ui:Package (.usdz)}} për programet e renderimit dhe montimin e skenës: çdo montim mban pjesët e veta, çdo pjesë është profili i saj i shtrirë gjatë gjatësisë me prerjet e bëra, dhe secila mban shenjën e pjesës, profilin, klasën, gjatësinë dhe peshën. Vrimat e bulonave, bulonat, saldimet dhe themelet nuk janë në rrjetat USD. Shih [Eksporto modelin e çelikut si USD](topic:usd).

### Asistentët AI

- **USD për asistentët.** Asistenti yt, i lidhur përmes CadCraft Studio, mund ta eksportojë modelin si USD (`usd_export`), dhe në Studio ta shkruajë në një dosje që ke lejuar. Shih [Çfarë kërkon një asistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Ndryshuar

- **Shiriti i çelikut** ka butona të mëdhenj dhe të vegjël: një {{ui:Beam}} i madh pranë {{ui:Column}}, {{ui:Brace}} dhe {{ui:Plate}} të vegjël te {{ui:Modelimi}} › {{ui:Elementët}}; një {{ui:End plates}} i madh te {{ui:Detajimi}} › {{ui:Lidhjet}}, me {{ui:Splice}} dhe {{ui:Gusset}} që ndajnë një buton të ndarë; një {{ui:Paste}} i madh te {{ui:Edit}} › {{ui:Clipboard}}, me {{ui:Paste in place}} dhe {{ui:Duplicate}} pas shigjetës së grupit. {{ui:Prodhimi}} › {{ui:Shkëmbimi}} ka {{ui:Export USD}} pranë IFC. Stilet e tjera të menusë duken si më parë. Shih [Menutë, tastet dhe miu](topic:menus-keys-and-mouse#the-three-styles).
- [Analizo kornizën](topic:frame-analysis) tani tregon te kontrollet e projektimit, dhe kombinimet e saj mund të bëhen sipas kodit.

## Në çdo aplikacion

- **Njësitë.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}} ka një listë për gjatësinë, sipërfaqen, vëllimin, këndin dhe pjerrësinë, me madhësitë e sakta që japin përkufizimet e njësive (këmba e anketimit të SHBA-së është njësi e vetme). Fik njësitë që nuk i përdor kurrë dhe ato largohen nga listat; vendos yll një dhe puna e re fillon me të. Një skedar gjithmonë mban njësinë e vet. Kutitë e vetë DetailCraft nuk ndjekin ende listat: gjatësitë e tij shkruhen ende në milimetra. Shih [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Një paraqitje më e dendur dhe panele që fshihen.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Dendësia e paraqitjes}} › {{ui:Kompakte}} zë më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit titulli të hollë: tërhiqe për ta vendosur ose për ta bërë të lundrojë, lëshoje mbi shiritin e një paneli tjetër për të ndarë një kornizë si skeda, fiksoje për ta fshehur në anë, ose fshihe dhe kthe nga anësa. Shih [Rregullo panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogët lëvizin.** Tërhiq një dialog nga shiriti i titullit jashtë rrugës së vizatimit; kthehet atje ku e le. Klik dy herë mbi shiritin e titullit për ta vendosur përsëri në qendër. Shih [Zhvendos një dialog](common:arrange-panels#move-a-dialog).
- **Recetat për asistentët AI.** Dhjetë kërkesa të punuara për asistentin tënd (pastro një vizatim, shfaq një grup, kontrollo vizatimet, pyet një model, mblidh një llogaritje sasish, provo një variant pjese…), secila me veglat që thërret dhe lejet që i nevojiten, dhe secila riluhet nga testet tona. Aplikacionet nuk përmbajnë AI. Shih [Recetat për asistentët AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Gjuha}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si draft të pa rishikuar nga një folës amtar. Faqet e {{ui:Ndihmë}} janë në anglisht.
- **CadCraft Studio** tregon pse një kontroll përditësimi dështoi (s'ka ende skedar për sistemin tënd, s'ka rrjet, nënshkrim i gabuar), në vend që të thotë vetëm "U krye", dhe ndalon t'i kthehet një kartë Çfarë është e re që ke mbyllur, derisa të ketë një lëshim më të ri.

## Jo ende në këtë version

- **0.7 nuk është e nënshkruar me kod.** Nënshkrimi dhe paketa e Microsoft Store u zhvendosën në 0.8, sepse validimi i certifikatës nuk ka mbërritur ende. Kontrollo SHA-256 pranë çdo skedari në getcadcraft.com/download. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në Mac, herën e parë, kliko me të djathtën mbi CadCraft Studio dhe zgjidh {{ui:Hap}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Listat e këndit dhe pjerrësisë në {{ui:Njësitë}} ruhen, por asnjë kuti nuk i lexon ende.
- **Kontrollet e projektimit nuk janë rishikuar ende nga një inxhinier.** Testet tona i krahasojnë me vlerat e printuara të tabelave dhe me formulat e punuara me dorë, jo ende me shembujt e punuar të një udhëzuesi projektimi. Deri në një rishikim, janë një ndihmë: kontrollo me dorë elementët që kanë rëndësi.
- Kontrollet e projektimit përdorin forca të rendit të parë (pa efekte të rendit të dytë) dhe kontrollojnë vetëm profile I. Nuk janë ndërtuar ende: tubat, këndoret, kanalet, format e saldura, pjesët e holla (AISC) ose të klasës 4 (Eurocode) në përkulje, torsioni, buklimi nga prerja së bashku me përkuljen, lidhjet, lodhja, zjarri, detajimi sizmik dhe betoni. Një pjesë e hollë në shtypje lë jashtë kontrollet e shtypjes, dhe elementi shfaqet "kalon, pjesërisht i kontrolluar".
- Analiza e kornizës është ende e rendit të parë dhe lineare, dhe nuk është provuar ende nga një inxhinier në një punë reale.
- Vrimat e bulonave, bulonat, saldimet dhe themelet nuk janë në eksportin USD.

Gjithçka tjetër është në [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
