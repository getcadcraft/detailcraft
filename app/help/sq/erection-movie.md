---
title: Plani i ngritjes dhe filmi
summary: Fut një vinç dhe tabelën e tij të ngarkesës, shiko çdo ngritje të kontrolluar kundrejt tabelës sipas rendit të fazave, dhe ruaj një film montimi që luhet pa lidhje në çdo telefon.
keywords: montim, ngritje, vinç, ngritje me vinç, tabelë ngarkese, rreze, kapacitet, lidhje ngarkese, sekuencë, film, animacion, telefon, pa lidhje, plan ngritjeje
from: fa7b0133
---

Skeda {{ui:Ngritja}} e kthen modelin në një urdhër montimi dhe kontrollon çdo ngritje kundrejt një vinçi që ti e përshkruan. Planifikon nga numrat që shkruan. Nuk është një plan ngritjeje: lidhësi dhe operatori i vinçit e bëjnë atë.

## Përshkruaj vinçin

Zgjidh {{ui:Shto një vinç}}, pastaj plotëso:

- **Qendra X dhe Y e vinçit:** ku qëndron vinçi, në milimetra.
- **Grepi më i lartë:** sa mund të ngrihet grepi, në milimetra. 0 do të thotë se nuk kontrollohet asnjë kufi.
- **Blloku i grepit dhe lidhjet që nuk janë në tabelë:** kilogramë që hiqen nga tabela para se të shtohet një ngarkesë, kur tabela jote nuk e bën këtë vetë.
- **Tabela e ngarkesës:** një rresht për rresht, rreze në metra dhe pastaj kapaciteti në kilogramë. Kopjo rreshtat nga tabela e vinçit.

Tabela lexohet ashtu si lexohet një tabelë ngarkese: kapaciteti i listuar për një rreze mbahet deri në atë rreze. Një ngarkesë në një rreze midis dy rreshtave merr kapacitetin e rreshtit **më të largët**, kurrë një vlerë midis tyre. Brenda rreshtit të parë, kapaciteti i rreshtit të parë mbahet. Përtej rreshtit të fundit vinçi nuk ngre fare. Rrezja që numëron për një ngritje është më e madhe midis rrezes së marrjes dhe rrezes së vendosjes.

Një vinç i dytë shtohet në të njëjtën mënyrë. Çdo ngritje shkon te vinçi i parë që mund ta marrë brenda marxhës tënde.

## Çfarë bën plani

- Një ngritje për çdo montim: një trarë me pllakat e skajit, një kolonë me pllakën e bazës, një shkallë.
- Rendi ndjek fazat së pari, pastaj shkallë pas shkalle: kolonat, trarët që mbajnë, diagonalet, pllakat, shkallët. Një pjesë nuk ngrihet kurrë para asaj që e mban.
- Çdo ngritje shfaq peshën e saj (pesha bruto e modelit, plus {{ui:Lidhjet e ngarkesës të shtuara në çdo peshë}}), rrezen e saj, pjesën e tabelës që përdor dhe minutën kur fillon.
- {{ui:Pjesa më e madhe e tabelës që një ngritje mund ta përdorë}} është marxha jote e sigurisë. Një ngritje mbi të shënohet **Mbi marxhën tënde**; mbi tabelë, **Mbi tabelën**; mbi rrezen e fundit të tabelës, **Përtej tabelës**; dhe një pjesë më e lartë se grepi, **Grepi shumë i ulët**.

Vrimat dhe prerjet nuk zbriten nga peshat, dhe bulonat mbulohen nga përqindja e lidhjes së ngarkesës.

## Problemet

Çdo ngritje që është mbi, përtej, shumë e lartë ose e vendosur para asaj që e mban shfaqet në panelin {{ui:Problemet}}. Një trarë pa asnjë lidhje që ta mbajë listohet si që ka nevojë për mbështetje të përkohshme.

## Ruaj filmin

{{ui:Ruaj filmin}} shkruan një skedar HTML. Hape në çdo shfletues, edhe në telefon, pa rrjet dhe pa llogari: luaj dhe pauzo, tërhiq shiritin te çdo minutë, rrotullo modelin me gisht, shtrydh për zmadhim. Titulli i shënon çdo ngritje, peshën, rrezen dhe pjesën e tabelës. Modeli vizatohet si kuti të thjeshta: tregon rendin dhe ngritjet, jo profilet e vërteta.

E njëjta tabelë ruhet si CSV me butonin {{ui:CSV}}. Vinçi dhe tabela ruhen në skedarin e modelit, dhe çdo ndryshim është një hap zhbërjeje.
