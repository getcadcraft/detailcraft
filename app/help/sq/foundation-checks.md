---
title: Kontrollet e themelit
summary: Kontrollo themelet, themelet e kombinuar dhe rrjetat mbi tokën që përshkruan ti, uljen, një rrjetë fleksibël mbi susta, grupet e pilotave dhe muret mbajtëse. Një ndihmë për t'u shqyrtuar nga inxhinieri.
keywords: themel, themel i kombinuar, rrjetë, ulje, moduli i nënshtresës, susta, kolonë anësore, kolonë qoshe, mbajtje, rrëshqitje, përmbysje, prerje shpuese, prerje njëdrejtimëshe, përkulje, zhvillim, armaturë minimale, grup pilotash, mur mbajtës, ACI 318-19
from: 6961ad52
---

:::warning
Këto janë kontrolle të shkallës së parë për t'u shqyrtuar nga një inxhinier, jo një miratim projekti. Presioni i lejuar i mbajtjes dhe koeficienti i fërkimit janë të tuat: DetailCraft nuk e njeh tokën tënde.
:::

Skeda {{ui:Themeli}} kontrollon themelet e modelit kundrejt ngarkesave të kolonave që jep ti.

## Përshkruaj tokën

Shkruaj {{ui:Presioni i lejuar i mbajtjes}} dhe {{ui:Koeficienti i fërkimit në bazë}}. Të dyja fillojnë nga 0, që do të thotë se nuk janë futur: kontrolli atëherë e shfaq presionin si shënim dhe nuk thotë se kalon. Për uljen, shkruaj modulin e tokës {{ui:Es}} (MPa), raportin e Poisson-it të saj dhe uljen që lejon (25 mm në fillim). Për një rrjetë fleksibël, shkruaj një modul nënshtrese {{ui:ks}}. Këtu janë edhe mbushja mbi themel, pesha njësi e tokës, faktorët e sigurisë për rrëshqitjen dhe përmbysjen (1.5 në fillim) dhe forca e rrjedhjes së shufrave.

## Jep ngarkesat

Çdo themel ka një listë ngarkesash kolonash. Përdor {{ui:Shto një ngarkesë kolone}} dhe plotëso rreshtin e shërbimit (për mbajtjen, rrëshqitjen dhe përmbysjen) dhe rreshtin e faktorizuar (për kontrollet e forcës): ngarkesën vertikale P poshtë, forcat horizontale Vx dhe Vy në pjesën e sipërme të themelit, momentet Mx dhe My, vendin e kolonës mbi themel dhe madhësinë e saj.

Ose hap skedën {{ui:Analiza}} dhe shtyp {{ui:Merr ngarkesat e kolonave nga Analiza}}: çdo mbështetje që ndodhet mbi një themel bëhet një ngarkesë kolone, nga grupet e shërbimit dhe të faktorizuara që zgjedh. Një My pozitiv e ngarkon më shumë anën +x të themelit; një Mx pozitiv e ngarkon më shumë anën −y.

## Çfarë kontrollohet

Nga ngarkesat e shërbimit, me peshën e vetë themelit dhe mbushjen e shtuar:

- **Mbajtja:** presioni nën një themel të ngurtë. Brenda të tretës së mesme e gjithë baza është në kontakt; jashtë saj, një pjesë e bazës ngrihet dhe maja është më e lartë. Një rezultante jashtë bazës dështon.
- **Rrëshqitja:** fërkimi shumëzuar me ngarkesën vertikale kundrejt forcës horizontale.
- **Përmbysja:** distanca e rezultantes nga skaji.
- **Ulja:** ulja elastike e presionit mesatar në një gjysmëhapësirë me modulin që ke dhënë, në mes dhe në një qoshe (zgjidhja e Timoshenko dhe Goodier për një drejtkëndësh fleksibël), krahasuar me kufirin. Është një kufi i sipërm për një themel të ngurtë dhe lë jashtë një shtresë toke me thellësi të kufizuar, lehtësimin nga toka e gërmuar dhe konsolidimin. Pa modul, shfaq presionin si shënim.

Vetëm nga ngarkesat e faktorizuara të kolonave (ACI 318-19):

- **Përkulja** te fytyra e kolonës, me armaturën minimale (0.0018 për shufra 420 MPa) dhe shufrat që ke vizatuar.
- **Prerja njëdrejtimëshe** në d nga fytyra.
- **Prerja shpuese** në d/2 rreth çdo kolone, me momentin e kolonës. Për një kolonë pranë skajit, seksioni kritik prritet nga skaji i themelit (tri anë te një skaj, dy në një qoshe, ACI 318-19 22.6.4.1 dhe αs më i vogël në Tabelën 22.6.5.2), dhe momenti rreth qendrës së vetë seksionit përfshin zhvendosjen e ngarkesës.
- **Zhvillimi** i shufrave përtej fytyrës së kolonës, të drejta ose me grepat e tyre.
- **Thellësia** mbi shufrat e poshtme (150 mm).

Një themel i kombinuar ose një rrjetë merret si i ngurtë, dhe prerja dhe momenti rrjedhin nga statika te prerjet përgjatë gjithë gjerësisë.

## Një rrjetë fleksibël mbi susta

Shëno {{ui:Analizo këtë themel si një rrjetë fleksibël mbi susta}} kur themeli mban shumë kolona dhe themeli i ngurtë është shumë i trashë. Themeli bëhet një pllakë elementësh katërnyjëshe mbi një shtrat sustash (ks që ke shkruar, të përqendruar në nyje), me ngarkesën e çdo kolone të shpërndarë mbi nyjet e gjurmës së vet. Një tabelë e dytë jep presionin më të madh të tokës dhe uljet (dhe ndryshimin ndërmjet më të madhit dhe më të voglit), momentin përkulës në çdo drejtim me armaturën që i duhet, tendosjen në pjesën e sipërme kundrejt forcës së betonit të thjeshtë (një themel nuk ka shufra të sipërme), prerjen njëdrejtimëshe në d nga kolonat, dhe prerjen shpuese sipas presionit të vet të sustave. Rrjeta rafinohet deri sa një kolonë të jetë tre elementë e gjerë; një rrjetë e madhe merr disa sekonda. Pesha e vetë rrjetës dhe toka mbi të anulohen dhe lihen jashtë.

Çdo kontroll që dështon është në panelin {{ui:Problemet}} me klauzolën e vet.

## Grupet e pilotave dhe muret mbajtëse

{{ui:Shto një grup pilotash}} vendos një rrjet pilotash nën një kapak të ngurtë: shkruaj ngarkesën dhe momentet dhe atë që një pilotë mund të mbajë në shtypje dhe në tërheqje (numrat e projektimit të pilotës, jo të kësaj skede). Reagimi i çdo pilote është P/n plus pjesa e tij e momenteve (metoda elastike), dhe kontrollohen shtypja më e madhe dhe çdo tërheqje.

{{ui:Shto një mur mbajtës}} kontrollon një mur konzolë mbi mbushje të niveluar, për metër: presionin aktiv të Rankine, përmbysjen rreth gishtit, rrëshqitjen dhe presionin e bazës. Presioni pasiv përpara gishtit lihet jashtë. Asistenti yt mund të ekzekutojë të njëjtat kontrolle me `pile_group_check` dhe `retaining_wall_check`.

Grupet e pilotave, muret dhe çelësi i rrjetës ruhen në skedarin e modelit, dhe një kontroll që dështon është te {{ui:Problemet}}.
