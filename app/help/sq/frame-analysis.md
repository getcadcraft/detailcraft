---
title: Analizo skeletin
summary: Forcat, reagimet dhe lakimet e trarëve, kolonave dhe diagonaleve siç janë vizatuar, nën raste ngarkese dhe kombinime që cakton. Një ndihmë analize, jo një kontroll kodi; kontrollet e projektimit janë një hap i veçantë.
keywords: analizë, analizë strukturore, analizë skeleti, metoda e ngurtësisë, ngarkesa, rast ngarkese, kombinim, ngarkesë e vdekur, ngarkesë e gjallë, peshë e vetë, reagime, moment përkulës, prerje, forcë boshtore, lakim, formë e lakuar, mbështetje, artikuluar, e ngulitur, lirim, raport, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Skeda {{ui:Analiza}} në fund gjen forcat në çdo tra, kolonë dhe diagonale të modelit, reagimet te bazat e kolonave dhe sa përkulen elementët, për ngarkesat që jep.

:::warning
Është një **ndihmë analize, jo një kontroll kodi**. Analiza nuk zbaton asnjë kod projektimi: nuk dimensionon elementët, nuk kontrollon kapacitetet ose lidhjet, dhe nuk zgjedh faktorët e ngarkesës. Një inxhinier kontrollon modelin, ngarkesat dhe mbështetjet e tij, dhe vendos se çfarë do të thotë numrat. Për kontrollet e elementëve sipas ASCE 7 / AISC 360 ose EN 1990 / EN 1993-1-1 shih [Kontrollo elementët çelikë sipas një kodi projektimi](topic:design-checks), një hap i veçantë që është gjithashtu një ndihmë.
:::

## Ekzekuto

1. Hap skedën {{ui:Analiza}}.
2. Zgjidh një ose më shumë elementë në pamje, zgjidh një {{ui:Rasti}}, një {{ui:Ngarkesa}} dhe një {{ui:Drejtimi}}, shkruaj vlerën dhe shtyp {{ui:Shto ngarkesë}}. Një ngarkesë e shpërndarë përgjatë një elementi është në kN/m, një ngarkesë e përqendruar në kN. {{ui:Poshtë (graviteti)}} është më e zakonshmja.
3. Shtyp {{ui:Nis analizën}}.

Tabela liston për çdo element forcën më të madhe boshtore N, prerjet Vz dhe Vy, momentet përkulëse My dhe Mz, rrotullimin T dhe lakimin e tij, me momentin më të madh të parë; kliko emrin e një elementi për ta zgjedhur. Më poshtë janë reagimet te çdo mbështetje. {{ui:Në model}} vizaton formën e lakuar, ose një veprim si diagram pranë çdo elementi me vlerën e tij më të madhe të shkruar te vendi i saj. Rezultatet bëhen të vjetruara sapo ndryshon modeli: ekzekuto përsëri.

Çdo ngarkesë, rast dhe cilësim është një hap zhbërjeje ({{key:Mod+Z}}) dhe ruhet në skedarin e modelit.

## Rastet e ngarkesës dhe kombinimet

Analiza fillon me tre: **E vdekur** (pesha e vetë e elementëve, nga profilet e tyre të vizatuara dhe 7850 kg/m³), **E gjallë** (bosh) dhe **E vdekur + e gjallë**. Shto raste të tuat (erë, borë …) dhe kombinime: një kombinim mbledh rastet me faktorët që shkruan. Analiza është lineare, kështu që çdo rast zgjidhet një herë dhe kombinimet janë shuma. Shkruaj faktorët vetë, ose zgjidh një kod projektimi dhe lër {{ui:Bëj kombinimet}} të shkruajë atë të kodit ([Kontrollo elementët çelikë sipas një kodi projektimi](topic:design-checks)).

## Nga përbëhet skeleti

- Trarë, kolona dhe diagonale, secili mbi vijën e tij të punës (vijën që vizatove), me vetitë reale të profilit të llogaritura nga kontura e tij. Pllakat, shkallët, themelet dhe bulonat nuk janë pjesë e skeletit.
- Një element ndahet aty ku mbaron skaji i një elementi tjetër mbi të, kështu që një tra që lidhet me një kolonë në lartësinë e mesme bashkohet me kolonën aty.
- **Bazat e kolonave**: të ngulitura (fillimi) ose të artikuluara (të mbajtura në vend dhe kundër rrotullimit, por të lira të rrotullohen). Një pllakë bazë bën gjithmonë një mbështetje.
- **Skajet e trarëve**: një pllakë skaji është e ngurtë, një pllakë prerjeje është e artikuluar. {{ui:Skajet e trarëve pa lidhje}} cakton pjesën tjetër. **Diagonalet** janë të artikuluara në të dy skajet.
- Zgjidh një element për t'i dhënë skajeve të tij, ose bazës së një kolone, një rregull të vetin.
- Çelik kudo: E = 200 GPa, G = 77 GPa.

Nëse skeleti mund të lëvizë pa përkulur asgjë — një mekanizëm, si p.sh. baza të artikuluara pa lidhje diagonale në një drejtim — ekzekutimi ndalet dhe thotë ku dhe në cilin drejtim; mbaje atë me një mbështetje, një nyje të ngurtë ose një diagonale.

## Shenjat

N > 0 është tërheqje. My > 0 e vendos anën lokale −z të elementit në tërheqje: një tra që ulet nën graviteti ka My > 0. Mz > 0 e vendos anën lokale −y në tërheqje. Lakimi matet nga vija e drejtë ndërmjet skajeve të elementit. Z lokale e elementit tregon lart (për një kolonë: sipas X); boshtet e tij lokale rrotullohen me rrotullimin e elementit.

## Raporti

{{ui:Raporti (PDF)}} dhe {{ui:Raporti (CSV)}} përmbajnë gjithçka: supozimet mbi të cilat u ndërtua skeleti, profilet, rastet dhe kombinimet, pastaj për çdo rast dhe kombinim reagimet (me shumat e ngarkesave dhe të reagimeve, që balancohen), forcat e elementëve dhe zhvendosjet, dhe një zarf të çdo rasti. {{ui:Eksporto si CraftScript}} shkruan të njëjtin skelet si skript për hapësirën e punës Script të PartCraft, ku funksioni i bibliotekës `frame3d` e zgjidh hap pas hapi në kod të lexueshëm.

## Metoda

Metoda e drejtpërdrejtë e ngurtësisë, lineare dhe e rendit të parë, përveç nëse shënon Rendi i dytë (P-Delta): kolona-trarë me dy nyje, me ngurtësi boshtore, rrotulluese dhe dy përkulëse (pa deformim prerjeje, pa shtrembërim), lirime skajesh me kondensim statik, ngarkesa përgjatë elementëve përmes funksioneve të vetë formës së elementëve. Përgjigjet e saj janë kontrolluar me rastet klasike të teksteve (konzola, trarë të thjeshtë, të ngulitur dhe të vazhdueshëm, një kornizë portale, një rrjet në rrotullim, një fermë).

**Rendi i dytë (P-Delta).** Shëno *Rendi i dytë (P-Delta)* pranë Nis: çdo kombinim zgjidhet përsëri me forcat boshtore të elementëve që veprojnë mbi skeletin e lakuar (çdo element ndahet në 4 pjesë, kështu që përkulja e një elementi midis skajeve të tij gjithashtu llogaritet), deri sa forcat boshtore të stabilizohen. Rreshti i rezultatit jep numrin e përsëritjeve dhe sa u rrit lëkundja; momentet, lakimet, kontrollet e projektimit dhe raporti përdorin pastaj këto rezultate. Mbi ngarkesën kritike elastike të skeletit, ekzekutimi ndalet dhe e thotë këtë. Është elastik me rrotullime të vogla, vetëm përkulës, pa reduktim të ngurtësisë ose ngarkesa nominale (jo vetëm metoda e analizës direkte AISC); pllakat, muret dhe dyshemetë e ngurta mbeten të rendit të parë.

**Frekuencat natyrore (elemente të fundëm).** Blloku {{ui:Elementë të fundëm: frekuencat natyrore}} nën rezultatet gjen modalitetet më të ulëta të të njëjtit model me motorin e elementëve të fundëm: trarë me lirimet e skajeve të tyre, pllaka dhe muret si guaska të sheshta me katër nyje, dyshemetë e ngurta, mbështetjet. Zgjidh sa modalitete (3, 6, 10 ose 20) dhe elementin e pllakës (guaskën me katër nyje për pllaka të trasha ose të holla, ose atë për pllaka shumë të holla), dhe shtyp {{ui:Gjej frekuencat}}. Tabela jep frekuencën e çdo modaliteti në Hz, periudhën e tij në sekonda dhe masën efektive modale përgjatë X, Y dhe Z si pjesë të masës që mund të lëvizë; {{ui:Shfaq te modeli}} vizaton çdo modalitet ashtu si vizatohet forma e lakuar. Masa është dendësia e materialit shumëzuar me vëllimin: ngarkesat nuk shtojnë masë, dhe një material pa dendësi nuk ka asnjë. Raporti (PDF, CSV) mban tabelën. Është elastik dhe vetëm për lëvizje të vogla, dhe asnjë ngarkesë sizmike ose erës nuk krijohet këtu nga një kod. Nuk është një kontroll kodi; inxhinieri yt shqyrton rezultatet.

**Spektri i përgjigjes, historia kohore dhe pushover.** Tre blloqe të tjerë janë nën frekuencat, duke përdorur të njëjtin model elementësh të fundëm. Masa për të gjithë është dendësia e materialit plus ngarkesat poshtë të rasteve që shënon, secila shumëzuar me një faktor që shkruan (p.sh. E vdekur me 1 dhe E gjallë me pjesën që llogarit si masë).

{{ui:Spektri i përgjigjes}} lexon çdo modalitet nga një spektër që jep (një tabelë periudhe dhe nxitimi, ose forma ASCE 7 nga SDS, SD1 dhe TL; butoni {{ui:Përdor vlerat e blokut Sizmik}} i kopjon ato nga blloku Sizmik) dhe kombinon modalitetet me CQC, SRSS, rregullin e dhjetë përqindjes ose një shumë absolute, pastaj i bashkon drejtimet X, Y dhe Z (100 % + 30 % ose SRSS). Jep prerjen në bazë, zhvendosjet e kateve, forcat në skajet e elementëve dhe një tabelë modalitetesh që paralajmëron kur modalitetet e përdorura mbartin më pak se 90 % të masës. Mund t'i shkallëzosh rezultatet me një faktor ose deri në një prerje në bazë që shkruan; blloku nuk e llogarit kurrë vetë atë prerje në bazë. Rezultatet nuk kanë shenjë.

{{ui:Historia kohore}} zbaton një nxitim tokësor me mbivendosje modale (e saktë për vijat e drejta të regjistrimit midis pikave) ose me integrim të drejtpërdrejtë (nxitim mesatar i Newmark me amortizim Rayleigh). Hyrja është një sinus ose impuls i krijuar (gjithmonë i etiketuar si sintetik), një regjistrim që ngjit, ose një skedar tekst që hap (koha dhe nxitimi, një nxitim për rresht me një hap, ose një skedar në stilin PEER me kokë DT=; në g ose m/s²). Jep zhvendosjen e çatisë dhe prerjen në bazë ndaj kohës, lakimin e çdo niveli dhe zarfin e forcave në skajet e elementëve. Modelet me një regjistrim shumë të gjatë e mbajnë atë vetëm për sesionin.

{{ui:Pushover}} e shtyn çatinë anash në hapa të vegjël (model si modaliteti i parë, ose uniform), me artikulacione plastike në skajet e elementëve që kanë formë I. Një artikulacion ndryshon në momentin plastik, që bie ndërsa rritet forca boshtore (llogaritet nga forma e vizatuar, skajet e rrumbullakosura injorohen); forcimi është opsional, P-delta është opsionale, dhe një kombinim graviteti mund të aplikohet më parë. Jep kurbën e kapacitetit (prerja në bazë ndaj zhvendosjes së çatisë), artikulacionin e parë, dhe gjendjen dhe rrotullimin plastik të çdo artikulacioni. {{ui:Ekzekuto historinë kohore jolineare}} ekzekuton të njëjtët artikulacione nën regjistrimin e blokut Historia kohore, në modele të vogla. Artikulacionet formohen vetëm në skajet e elementëve (vendos një nyje aty ku duhet të formohet brenda një hapësire); një element i liruar në të dy skajet nuk merr asnjë; rrjedhja dhe kërcimi i diagonaleve nuk modelohen; pllakat dhe muret mbeten elastikë; nuk jepen kritere pranimi. Nuk është një kontroll kodi; inxhinieri yt shqyrton rezultatet. Cilësimet ruhen me modelin dhe raporti mban tabelat.

Ende nuk është ndërtuar: analiza e kërcimit, korrigjimi i masës së munguar për spektrin e përgjigjes, shkallëzimi i regjistrimit, kriteret e pranimit për artikulacionet (përgjigjja dinamike është atje, më lart), ngarkesat e sipërfaqes dhe të erës të krijuara automatikisht për ty (forcat sizmike në dysheme janë te [Kontrollo elementët e betonit dhe krijo ngarkesat sizmike](topic:concrete-and-seismic)), shmangiet e elementëve, diagonalet vetëm për tërheqje. Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
