---
title: Çfarë ka të re në 0.7 (më herët)
summary: Kontrolle projektimi të profileve I të çelikut me kombinime ngarkesash nga ASCE 7 ose EN 1990 dhe kontrolle elementësh sipas AISC 360 ose EN 1993-1-1, eksport USD i modelit të çelikut, një mjet ndihmës për USD, një shirit çeliku me butona të mëdhenj dhe të vegjël, panele që rregullohen dhe dialogë që lëvizin.
keywords: çfarë ka të re 0.7, version i mëparshëm, shënimet e versionit, regjistri i ndryshimeve, ndryshimet, 0.7, versioni, veçori të reja, kontrollet e projektimit, projektimi i çelikut, shfrytëzimi, kombinimet e ngarkesave, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokod, Shtojca Kombëtare, ngarkesa e gjallë e çatisë, kufiri i deformimit, usd, usda, usdc, usdz, openusd, asistent, mcp, shiriti i çelikut, shirit, buton i ndarë, njësitë, kompakte, panelet, dialogët, portugalisht
from: 54a7a8f0
---

Kjo është ajo që ndryshoi në DetailCraft 0.7, krahasuar me 0.6. Analiza e kornizës së 0.6 ka tani një hap të dytë: kontrollimin e elementëve të çelikut sipas një kodi projektimi.

## Të reja

### Bashkimet me mitër (0.7.1)

- **Dy profile I që takohen në një kënd**, si një gju portali ose një kulm: përzgjidh të dyja, zgjidh {{ui:Mitër}} te menyja {{ui:Më shumë}} e grupit {{ui:Lidh}}, dhe të dy skajet priten në planin që e ndan në gjysmë kënddin. Pllakat e skajit të lidhura me bulona dhe nervaturat e bërthamës janë kutia për t'u zgjedhur te dialogu i ri Mitër, ku fushat e numëruara përputhen me një vizatim të bashkimit tënd që krijohet ndërsa shkruan. Mitra ndjek elementët kur lëvizin, dhe kalon te vizatimet, skedarët NC (prerje të pjerrëta), IFC dhe lista e materialeve. Shih [Bashkimet me mitër](topic:mitres).

### Kontrollet e projektimit

- **Kombinimet e ngarkesave nga kodi.** Te skeda {{ui:Analiza}}, blloku i ri {{ui:Kontrollet e projektimit}} ka një {{ui:Kodi i projektimit}}: ASCE 7 + AISC 360 (SHBA, LRFD) ose EN 1990 + EN 1993-1-1 (Eurokod). Jepi çdo rasti të ngarkesës llojin e vet (i vdekur, i gjallë, ngarkesa e re e gjallë e çatisë, bora, era, sizmiku), shtyp {{ui:Bëj kombinimet}}, dhe DetailCraft shkruan kombinimet e forcës dhe të shërbimit të kodit për rastet tuaja. Kombinimet që ke shkruar vetë mbeten. Shih [Bëj kombinimet](topic:design-checks#make-the-combinations).
- **Vlerat e Shtojcës Kombëtare.** Për Eurokodin, faktorët fillojnë nga vlerat e rekomanduara; {{ui:Vlerat e Shtojcës Kombëtare}} të lejon të shkruash ato të vendit tënd, dhe ruhen në model. Shih [Bëj kombinimet](topic:design-checks#make-the-combinations).
- **Kontrollo elementët.** {{ui:Kontrollo elementët}} kontrollon çdo profil I të çelikut për tërheqje, shtypje me lakim, përkulje me lakim anësor-torsional, prerje, përkulje me forcë aksiale dhe deformim kundrejt {{ui:Kufirit të deformimit}} që cakton. Tabela tregon shfrytëzimin e çdo elementi, kontrollin që e drejton dhe kombinimin e tij, dhe elementët ngjyrosen në model (blu, jeshile, okër, e kuqe, gri për ata që nuk janë kontrolluar). Shih [Kontrollo elementët](topic:design-checks#check-the-members).
- **Në raport.** {{ui:Raporti (PDF)}} dhe {{ui:Raporti (CSV)}} shtojnë edicionet e kodit, cilësimet, shfrytëzimin sipas elementit dhe çdo klauzolë të përdorur. Shih [Raporti](topic:design-checks#the-report).
- **Një ndihmë derisa një inxhinier ta shqyrtojë.** Përdor vetëm forcat e rendit të parë. Tubat, këndoret, kanalet, format e saldueme dhe pjesët e holla ose të klasës 4 shënohen "nuk është kontrolluar", me arsyen; torsioni, lidhjet dhe betoni nuk kontrollohen. Shih [Çfarë nuk kontrollohet](topic:design-checks#what-is-not-checked).

### USD

- **Eksporto modelin e çelikut si USD.** {{ui:Eksporto USD}} te grupi {{ui:Dalja}} e shkruan modelin si {{ui:Tekst (.usda)}}, {{ui:Binar (.usdc)}} ose {{ui:Paketë (.usdz)}} për programet e renderimit dhe montimin e skenës: çdo montim mban pjesët e veta, çdo pjesë është prerja e saj e shtrirë përgjatë gjatësisë me prerjet e shkurtuara, dhe çdo pjesë mban shenjën, profilin, klasën, gjatësinë dhe peshën e saj. Vrimat e bulonave, bulonat, saldimet dhe themelet nuk janë në rrjetat USD. Shih [Eksporto modelin e çelikut si USD](topic:usd).

### Asistentët AI

- **USD për asistentët.** Asistenti yt, i lidhur përmes CadCraft Studio, mund ta eksportojë modelin si USD (`usd_export`), dhe në Studio ta shkruajë në një dosje që ke lejuar. Shih [Çfarë mund të kërkojë një asistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Ndryshuar

- **Shiriti i çelikut** ka butona të mëdhenj dhe të vegjël: një {{ui:Trari}} i madh pranë {{ui:Kolona}}, {{ui:Diagonalja}} dhe {{ui:Pllaka}} të vegjël te {{ui:Modelimi}} › {{ui:Elementët}}; një {{ui:Pllaka skaji}} i madh te {{ui:Detajimi}} › {{ui:Lidhjet}}, me {{ui:Bashkim}} dhe {{ui:Pllaka lidhëse}} që ndajnë një buton të ndarë; një {{ui:Ngjit}} i madh te {{ui:Ndrysho}} › {{ui:Kujtesa e fragmenteve}}, me {{ui:Ngjit në vend}} dhe {{ui:Dyfisho}} pas shigjetës së grupit. {{ui:Prodhimi}} › {{ui:Shkëmbimi}} ka {{ui:Eksporto USD}} pranë IFC. Stilet e tjerë të menusë duken si më parë. Shih [Menutë, tastet dhe miu](topic:menus-keys-and-mouse#the-three-styles).
- [Analizo kornizën](topic:frame-analysis) tani të përcjell te kontrollet e projektimit, dhe kombinimet e saj mund të bëhen sipas kodit.

## Në çdo aplikacion

- **Njësitë.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}} ka një listë për secilën nga gjatësia, sipërfaqja, vëllimi, këndi dhe pjerrësia, me madhësitë e sakta që japin përkufizimet e njësive (njësia e anketës së SHBA-së, këmba, është njësi e vet). Çaktivizo njësitë që nuk i përdor kurrë dhe ato largohen nga listat; vendos yll te një dhe puna e re fillon me të. Një skedar mban gjithmonë njësinë e vet. Kutitë e vetë DetailCraft nuk i ndjekin ende listat: gjatësitë e tyre shkruhen ende në milimetra. Shih [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Një paraqitje më e dendur dhe panele që rregullohen.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Dendësia e paraqitjes}} › {{ui:Kompakte}} nxjerr më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit titulli të hollë: tërhiqe për ta ngjitur ose për ta lënë të lirë, lëshoje mbi shiritin e një paneli tjetër për të ndarë një kornizë me skeda, fikse për ta shtyrë në skaj, ose fshihe dhe ktheje nga skaji. Shih [Rregullo panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogët lëvizin.** Tërhiq një dialog nga shiriti i titullit për ta larguar nga vizatimi; kthehet aty ku e le. Kliko dy herë shiritin e titullit për ta vendosur përsëri në qendër. Shih [Lëviz një dialog](common:arrange-panels#move-a-dialog).
- **Receta për asistentët AI.** Dhjetë kërkesa të punuara për asistentin tënd (rregullo një vizatim, nxirr një grup, kontrollo vizatimet, bëj pyetje modelit, mblidh një llogaritje sasish, provo një variant pjese…), secila me veglat që thërret dhe lejet që i duhen, dhe secila e riluajtur nga testet tona. Aplikacionet nuk përmbajnë AI. Shih [Receta për asistentët AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Gjuha}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si drafte që nuk janë shqyrtuar ende nga një folës amtar. Temat e ndihmës janë në anglisht.
- **CadCraft Studio** tregon pse një kontroll përditësimi dështoi (nuk ka ende skedar për sistemin tënd, s'ka rrjet, nënshkrim i gabuar) në vend që të thotë vetëm "U krye", dhe nuk sjell më përsëri një kartë Çfarë ka të re që e ke mbyllur, deri sa të ketë një version më të ri.

## Nuk është ende në këtë version

- **0.7 nuk është e nënshkruar me kod.** Nënshkrimi dhe paketa e Microsoft Store u zhvendosën në 0.8, sepse vërtetimi i certifikatës nuk ka ardhur ende. Kontrollo SHA-256 pranë çdo skedari në getcadcraft.com/download. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në Mac, herën e parë, kliko me butonin e djathtë mbi CadCraft Studio dhe zgjidh {{ui:Hap}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Listat e këndit dhe të pjerrësisë te {{ui:Njësitë}} ruhen, por asnjë kuti nuk i lexon ende.
- **Kontrollet e projektimit nuk janë shqyrtuar ende nga një inxhinier.** Testet tona i krahasojnë me vlerat e tabelave të shtypura dhe me formulat e llogaritura me dorë, jo ende me shembujt e punuar të një udhëzuesi projektimi. Deri në shqyrtim, ato janë një ndihmë: kontrollo me dorë elementët që kanë rëndësi.
- Kontrollet e projektimit përdorin forca të rendit të parë (pa efekte të rendit të dytë) dhe kontrollojnë vetëm profile I. Nuk janë ndërtuar: tubat, këndoret, kanalet, format e saldueme, pjesët e holla (AISC) ose të klasës 4 (Eurokod) në përkulje, torsion, shpërthim prerjeje së bashku me përkuljen, lidhjet, lodhja, zjarri, detajimi sizmik dhe betoni. Një pjesë e hollë në shtypje lë jashtë kontrollet e shtypjes, dhe elementi shfaqet "kalon, pjesërisht i kontrolluar".
- Analiza e kornizës është ende e rendit të parë dhe lineare, dhe nuk është provuar ende nga një inxhinier në një punë reale.
- Vrimat e bulonave, bulonat, saldimet dhe themelet nuk janë në eksportin USD.

Gjithçka tjetër është te [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
