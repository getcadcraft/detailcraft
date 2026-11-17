---
title: Çfarë nuk është ndërtuar ende
summary: Çfarë nuk mund të bëjë ky version i hershëm i DetailCraft, dhe çfarë të bësh në vend të tij sot.
keywords: kufizime, kufizim, mungon, plan rrugor, nuk mbështetet, do të vijë, planifikuar, zgjidhje, detyrë
from: ea411885
---

DetailCraft është një version i hershëm. Kjo faqe liston çfarë nuk bën ende, që të planifikosh rreth tij. Asgjë këtu nuk është premtim për një datë.

## Modelimi

| Ende jo | Në vend të kësaj, sot |
|---|---|
| Tërheqja e një skaji të elementit (zgjatja e tij) | Redakto {{ui:Start}} ose {{ui:End}} nën {{ui:Ends (x, y, z mm)}} në panelin {{ui:Properties}} |
| Filtër përzgjedhjeje (vetëm trarë, vetëm një profil) | Tërhiq një dritare, pastaj {{key:Shift}}+klik për të hequr pjesë |
| Rreshtim (array) i një përzgjedhjeje; rrotullim rreth një boshti të pjerrët; pasqyrim në një plan të pjerrët | Kopjo dhe ngjit në një zhvendosje, ose dyfisho atë; rrotullimi dhe pasqyrimi punojnë në plan ([Përzgjidh me dritare, zhvendos, rrotullo, pasqyro, ndrysho shumë](topic:select-and-change)) |
| Pikat jashtë rrjetës gjatë klikimit | Vendos në rrjetë, pastaj shkruaj koordinatat e fundit |
| Elevacione përgjatë vijave numerike të rrjetës; pamje të ruajtura; plane pune | Përdor {{ui:3D}}, ose {{ui:Shto sipas rrjetit}} |
| Vrimat e vizatuara si prerje reale në pamjen 3D | Vrimat shfaqen si tapa të errët; janë reale në çdo eksport |
| Prerje me kënd të rrumbullakosura ose të pjerrëta, prerje të tjera dhe aksesorë | Prerje katrore vetëm në I-shape |
| Vrimat që shton në këndore dhe tuba rrethorë | Vrimat e këndoreve vijnë vetëm nga [pllakat lidhëse](topic:brace-gussets) |
| Hyrje në sistem imperial | Shkruaj milimetra (25.4 për inç) |
| Redaktimi ose heqja e një profili të personalizuar | Shto një profil të korrigjuar me emër të ri |

## Shkallët

| Ende jo | Në vend të kësaj, sot |
|---|---|
| Parmakë, shesh-pushimi, pllaka këmbësh, hapa rrjetë, shkallë spirale dhe me dy krahë | Vetëm fluturime të drejta; shih [Shkallët](topic:stairs) |
| Prerjet e fundit të mbajtësve kundër dyshemeve | Mbajtës me prerje të drejta; pritini në softverin e punishtes |

## Lidhjet

DetailCraft ndërton gjashtë lidhje: një pllakë lidhëse diagonale (shih [Pllakat lidhëse](topic:brace-gussets)); një bashkim me bulona mes dy pjesëve të një I-shape (shih [Bashkimet](topic:splices)); një prerje me kënd mes dy I-shape që takohen në kënd, vetëm prerje ose me pllaka fundore me bulona (shih [Prerjet me kënd](topic:mitres)); një pllakë fundore me bulona, e rrafshët ose e zgjatur, nga një nivel, trari I-shape vertikal, te flanxha ose rrjeta e një kolone I-shape; një pllakë prerëse nga një trar (katrore, e shtrembër ose e pjerrët) te flanxha ose rrjeta e një kolone; dhe një pllakë baze kolone me katër shufra ankorimi.

| Ende jo | Në vend të kësaj, sot |
|---|---|
| Pllaka fundore të shtrembra ose të pjerrëta | Përdor [pllakat prerëse](topic:shear-tabs), që pranojnë trarë të shtrembër dhe të pjerrët |
| Këndore mbajtëse (clip angles); pllaka mbushëse bashkimi dhe bashkime midis madhësive të ndryshme; pllaka lidhëse të qoshes të saldueme te trari dhe kolona, pllaka lidhëse të fasuara | Detajoje në softverë të tjerë, ose shto pllaka dhe vrima me dorë si pjesë të lira; shih [Bashkimet](topic:splices), [Pllakat lidhëse](topic:brace-gussets) |
| Përforcime bazë të fasuara ose të hollësuara; vrima injektimi; gropa e themelit për një bulon prerjeje | Përforcime drejtkëndore; shih [Pllakat bazë](topic:base-plates) |
| Mbajtës (haunches); prerje me kënd të saldueme me saldim ballor; përforcime në linjë me flanxhat e elementit tjetër | Një [prerje me kënd](topic:mitres) me pllaka fundore dhe përforcime shtylle, ose një prerje e thjeshtë me kënd; shto pllaka të tjera me dorë si pjesë të lira |
| Kontrollet e projektimit të lidhjes (forca) | Kontrollo lidhjet me llogaritjet e inxhinierit; DetailCraft vetëm paralajmëron për distancën nga skaji dhe hapësirën |
| Vrima të gjata | Vetëm vrima rrethore |

## Analiza

| Ende jo | Në vend të kësaj, sot |
|---|---|
| Kontrolle projektimi përtej I-shape çeliku: tuba, këndore, kanale, forma të saldueme, elementë të hollë ose të klasës 4, torsion, lidhje; beton: hollësi në lëkundje (sway), torsion, detajim sizmik, pllaka dhe mure | Skeda {{ui:Analiza}} kontrollon I-shape çeliku sipas AISC 360 ose EN 1993-1-1 ([Kontrollo elementët e çelikut sipas një kodi projektimi](topic:design-checks)); pjesën tjetër e lë të shënuar "nuk është kontrolluar"; një inxhinier e rishikon të gjitha |
| Humbja e stabilitetit (buckling), dridhjet | Rendi i dytë është vetëm P-Delta (elastik); pa analizë humbjeje stabiliteti (analiza modale, spektri i përgjigjes, historia kohore dhe pushover janë në skedën {{ui:Analiza}}) |
| Kontrolle projektimi që ka rishikuar një inxhinier | Janë një ndihmë deri atëherë: kontrollo dy ose tre elemente me dorë ose në softverin e vet të inxhinierit përpara se t'u besosh |
| Ngarkesat e dyshemesë, erës dhe borës të llogaritura automatikisht nga sipërfaqet | Vendos ngarkesat në elemente me dorë, në kN/m ose kN |
| Zhvendosjet e elementeve, lidhjet ekscentrike, diagonalet që punojnë vetëm në tërheqje, pllaka dhe themele në kornizë | Elementet analizohen në vijat e tyre të punës; diagonalet mbajnë tërheqje dhe shtypje |

## Armimi

| Ende jo | Në vend të kësaj, sot |
|---|---|
| Kolona rrethore, spirale, trarë të pjerrët ose të lakuar, pllaka të tjera nga drejtkëndëshat, mure që nuk janë të drejta | Trarë, kolona, pllaka dhe mure drejtkëndore ([Detajo betonin e armuar](topic:reinforced-concrete)) |
| Shufra të përkulura në një lidhje, lidhje të zhvendosura, lidhje të vendosura sipas zgjedhjes | Lidhje me hapa të barabartë, çdo shufër e lidhur në një prerje (ACI Class B, EN α6 = 1.5) |
| Shufra këndore te hapjet, armim për prerje shtypjeje, detajim sizmik (ACI 318-19 kapitulli 18) | Mbajtës nga të dyja anët e hapjes; kontrollo pjesën tjetër vetë |
| Leximi i skedarëve të vet të një programi projektimi strukturor | Eksporto IFC nga ai: shufrat e tij IfcReinforcingBar hyjnë si shufra ([Shufrat nga një skedar IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Forma kodesh përtej drejtë, një përkulje dhe U; llojet ACI 315 për shufra të drejta dhe me një grep | Tre format shtypen si BS 8666 00, 11, 21 ose ACI Type 2; shih [Referenca e armimit](topic:rebar-reference) |
| Shufra metrike të tjera nga BS 4449 H8–H40 (p.sh. CSA 10M–35M) | Emrat ASTM soft-metric #10–#36, ose shufra BS |

## Vizatimet dhe eksportet

| Ende jo | Në vend të kësaj, sot |
|---|---|
| Fletë portret, A0, dhe fletë me madhësinë tënde; pamje të përgjithshme të rrjetës së shtrembër | Fletë A4 deri A1 horizontale dhe ANSI B deri D ([Vizatimet e përgjithshme dhe të montimit](topic:drawings)); përshtat PDF-in për ta printuar në madhësi tjetër |
| Simbolet e saldimit në vizatimet e punishtes të një pjese; simbole të tjera nga ato të brazdave | Vizatimet e montimit mbajnë simbolet e saldimit me brazdë; vizatimi i punishtes e jep saldimin si tekst |
| Redaktimi i një vizatimi në aplikacion | Ndrysho modelin dhe bëje përsëri vizatimin; shëno PDF-in në një aplikacion PDF si MarkupCraft |
| Vizatimet si DWG me objekte dimensionale, ose modeli në madhësi të plotë në hapësirën e modelit me fletët si layout | Çdo fletë është një DWG ose DXF me madhësi të plotë të letrës, dimensionet si vija dhe shifra ([Vizatimet e përgjithshme dhe të montimit](topic:drawings#download)) |
| Vrimat NC në tuba rrethorë, prerje kënde te këndoret dhe tubat rrethorë në skedarët NC | Nuk shkruhen; shih [Fushat e skedarit NC](topic:nc1-fields) |
| Skaje të pjerrëta, shënime dhe kontura të brendshme në skedarët NC | Asgjë sot |
| Vrimat e bulonave, bulonat, saldimet dhe themelet në eksportin USD | Janë në daljet IFC, NC dhe BOM; shih [Eksporto modelin e çelikut si USD](topic:usd) |
| Sjellja e lidhjeve, themeleve, vrimave të gjata ose drejtkëndore dhe vrimave në tuba rrethorë nga një skedar IFC | {{ui:Importo IFC}} sjell trarë, kolona, elementë, pllaka, rrjeta, nivele, vrima rrethore, prerje, bulona dhe shufra armimi, dhe raporti i tij liston çfarë la jashtë |
| Paraqitje e personalizuar e raporteve | Tre skedarët CSV |

## Panelet

| Ende jo | Në vend të kësaj, sot |
|---|---|
| Lëvizja e raporteve në fund ({{ui:Problemet}}, {{ui:Lista e materialeve}}, {{ui:Tabela e përkuljes}}) | Vetëm panelet {{ui:Modeli}} dhe {{ui:Vetitë}} lëvizin. Shih [Rregullo panelet](common:arrange-panels) |

## Puna së bashku dhe ruajtja

| Ende jo | Në vend të kësaj, sot |
|---|---|
| Ruajtja në cloud dhe sinkronizimi midis kompjuterëve | Ruaj skedarët `.detailcraft.json` dhe ndaji ashtu si çdo skedar. Ruajtja në cloud nuk është e disponueshme ende |
| Kursorët e të tjerëve dhe etiketat "po redakton" në një sesion Live TeamWork; rrjetat, nivelet dhe fazat e bashkuara artikull për artikull | Redaktimet bashkohen akoma (rrjetat, nivelet dhe fazat shkojnë të tëra, ndryshimi i fundit fiton); shih [Detajo një strukturë bashkë, drejtpërdrejt](topic:work-live) |
| Lidhjet e ftesës për një sesion Live TeamWork përmes internetit | Bashkohu me një kod të shkurtër në të njëjtin rrjet |

## Platformat

- DetailCraft është bërë për ekran desktopi, laptopi ose tablete. Funksionon edhe në telefon: modeli mban ekranin dhe panelet, dhe raportet hapen si fletë nga një shirit në fund, por ka pak vend për panelet.
- Përdorimi jashtë linje kërkon që DetailCraft të ruhet më parë për përdorim jashtë linje, me {{ui:Ruaje për jashtë linje}} në shiritin e aplikacionit; sapo shfaq {{ui:Gati jashtë linje}}, gjithçka në këtë version punon pa lidhje. Shih [Puna jashtë linje](common:offline).

Nëse një nga këto mungesa e bllokon punën tënde, na e thuaj përmes [faqes së mbështetjes](https://getcadcraft.com/support); na ndihmon të vendosim çfarë të ndërtojmë më tej.
