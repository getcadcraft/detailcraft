---
title: Það sem enn er ekki smíðað
summary: Það sem þessi snemmbúna útgáfa af DetailCraft getur ekki gert, og hvað á að gera í staðinn í dag.
keywords: takmörk, takmarkanir, vantar, vegvísir, ekki studd, væntanlegt, áætlað, lausn, todo
from: ea411885
---

DetailCraft er snemmbúin útgáfa. Þessi síða telur upp það sem hún gerir ekki enn, svo þú getir skipulagt þig í kringum það. Ekkert hér er loforð um dagsetningu.

## Líkanagerð

| Ekki enn | Í staðinn, í dag |
|---|---|
| Að draga annan enda hluta (teygja hann) | Breyttu {{ui:Upphaf}} eða {{ui:Endi}} undir {{ui:Endar (x, y, z mm)}} í spjaldinu {{ui:Eiginleikar}} |
| Valsía (aðeins bitar, aðeins eitt snið) | Dragðu glugga, og smelltu síðan með {{key:Shift}}+smelli til að taka hluta út |
| Fjölfalda valið; snúa um hallandi ás; spegla í hallandi plani | Afrita og líma það með hliðrun, eða {{ui:Tvöfalda}} það; snúningur og speglun virka í grunnmynd ([Velja með glugga, færa, snúa, spegla, breyta mörgu](topic:select-and-change)) |
| Punktar utan ássins við smellingu | Staðsettu á ásnum, og sláðu síðan inn hnit endanna |
| Útlit eftir tölusettum ásalínum; vistaðar sýnir; vinnuplön | Notaðu {{ui:3D}}, eða {{ui:Bæta við eftir ás}} |
| Göt teiknuð sem raunverulegir skurðir í þrívíddarsýninni | Göt birtast sem dökkir tappar; þau eru raunveruleg í öllum útflutningi |
| Ávalar eða hallandi úrtökur, aðrir skurðir og festingar | Ferkantaðar úrtökur, aðeins á I-sniðum |
| Göt sem þú bætir við horn og kringlótt rör | Göt í hornum koma aðeins frá [hornplötum](topic:brace-gussets) |
| Innsláttur í enskum mælieiningum | Sláðu inn millimetra (25,4 á tommu) |
| Breyting eða eyðing á sérsniðnu sniði | Bættu við leiðréttu sniði undir nýju heiti |

## Stigar

| Ekki enn | Í staðinn, í dag |
|---|---|
| Handrið, pallar, tábretti, ristarþrep, spíral- og hálfsnúnir stigar | Aðeins beinar stigaskákir; sjá [Stigar](topic:stairs) |
| Endaskurðir burðarbita stiga við gólfin | Ferkantaðir burðarbitar; skerðu þá í hugbúnaði verkstæðisins |

## Tengingar

DetailCraft býr til sex tengingar: hornplötu fyrir stífu (sjá [Hornplötur](topic:brace-gussets)); boltaða samsetningu milli tveggja hluta eins I-sniðs (sjá [Skeyti](topic:splices)); skáskurð milli tveggja I-sniða sem mætast í horni, aðeins skorið eða með boltuðum endaplötum (sjá [Skáskurðartengingar](topic:mitres)); fleygta eða framlengda boltaða endaplötu frá lóðréttum, uppréttum I-sniðsbita á kóta í flans eða sál I-sniðssúlu; skurðarlappa (shear tab) frá bita (ferkantaðri, skáhallri eða hallandi) í flans eða sál súlu; og súlu-undirplötu með fjórum akkerisstöngum.

| Ekki enn | Í staðinn, í dag |
|---|---|
| Skáar eða hallandi endaplötur | Notaðu [skurðarlappa](topic:shear-tabs), sem taka við skáum og hallandi bitum |
| Klippihorn (clip angles); fyllingarplötur í skeytum og skeyti milli mismunandi stærða; hornplötur soðnar við bita og súlu, skásettar hornplötur | Teiknaðu þau í öðrum hugbúnaði, eða bættu við plötum og götum handvirkt sem lausum hlutum; sjá [Skeyti](topic:splices), [Hornplötur](topic:brace-gussets) |
| Skásettar eða keiluð undirstyrkingar; göt fyrir fyllingarsteypu; undirstöðuvasinn fyrir skurðarstykkið | Ferkantaðar styrkingar; sjá [Undirplötur](topic:base-plates) |
| Hnéfar (haunches); soðnir skáskurðir með stúfsuðu; styrkingar í línu við flansa hins hlutans | [Skáskurður](topic:mitres) með endaplötum og sálarstyrkingum, eða einfaldur skáskurður; bættu öðrum plötum við handvirkt sem lausum hlutum |
| Hönnunarathuganir tenginga (styrkur) | Athugaðu tengingar með útreikningum verkfræðingsins; DetailCraft varar aðeins við fjarlægð frá brún og bili |
| Langgöt | Aðeins kringlótt göt |

## Greining

| Ekki enn | Í staðinn, í dag |
|---|---|
| Hönnunarathuganir umfram I-snið úr stáli: rör, horn, rásir, soðin snið, grönn eða flokks 4 snið, snúningur, tengingar; steinsteypa: sveigjanleiki (sway), snúningur, jarðskjálftahönnun, plötur og veggir | Flipinn {{ui:Greining}} athugar stálsnið I eftir AISC 360 eða EN 1993-1-1 ([Athugaðu stálbita eftir hönnunarstaðli](topic:design-checks)); afgangurinn merkir hann „ekki athugað“; verkfræðingur fer yfir allt |
| Bognunargreining, titringur | Annarrar gráðu er aðeins P-Delta (teygjanleg); engin bognunargreining (mótgreining, svörunarróf, tímasaga og pushover eru í flipanum Greining) |
| Hönnunarathuganir sem verkfræðingur hefur farið yfir | Þær eru hjálpartæki þangað til: athugaðu tvo eða þrjá hluta handvirkt eða í eigin hugbúnaði verkfræðingsins áður en þú treystir á þær |
| Gólf-, vind- og snjóálag reiknað fyrir þig út frá flötum | Settu álag á hluta handvirkt, í kN/m eða kN |
| Hliðrun hluta, útmiðjaðar tengingar, stífur sem bera aðeins tog, plötur og undirstöður í grindinni | Hlutar eru greindir eftir vinnulínum sínum; stífur bera tog og þrýsting |

## Steypustyrktarjárn

| Ekki enn | Í staðinn, í dag |
|---|---|
| Kringlóttar súlur, spírallar, hallandi eða bogadregnir bitar, plötur sem eru ekki ferhyrndar, veggir sem eru ekki beinir | Ferhyrndir bitar, súlur, plötur og veggir ([Teikna styrkta steinsteypu](topic:reinforced-concrete)) |
| Stangir beygðar inn í skörun, skiptar skarnir, skarnir settir þar sem þú velur | Skarnir með jöfnum þrepum, hver stöng skörnuð á einum hluta (ACI flokkur B, EN α6 = 1,5) |
| Hornstangir við op, gegnumstungu-skerstyrking (punching shear), jarðskjálftahönnun (ACI 318-19 kafli 18) | Hliðarstyrkingar beggja vegna opsins; athugaðu hitt sjálfur |
| Lestur á eigin skrám burðarhönnunarforrits | Fluttu út IFC úr því: IfcReinforcingBar þess koma inn sem stangir ([Stangir úr IFC-skrá](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Lögunarkóðar umfram beina stöng, eina beygju og U; ACI 315 gerðir fyrir beinar stangir og stangir með einum krók | Lögunirnar þrjár prentast sem BS 8666 00, 11, 21 eða ACI Type 2; sjá [Viðmiðun steypustyrktarjárns](topic:rebar-reference) |
| Mælieiningastangir aðrar en BS 4449 H8–H40 (t.d. CSA 10M–35M) | ASTM mjúk-mælieiningaheiti #10–#36, eða BS-stangir |

## Teikningar og útflutningur

| Ekki enn | Í staðinn, í dag |
|---|---|
| Standandi blöð, A0 og blöð í þinni eigin stærð; heildarfyrirkomulagsmyndir á skáum ásum | Liggjandi A4 til A1 og ANSI B til D ([Heildarfyrirkomulags- og samsetningarteikningar](topic:drawings)); skalaðu PDF-skrána til að prenta á annarri stærð |
| Suðutákn á einhlutateikningum verkstæðis; tákn önnur en hornsuður | Samsetningarteikningar bera hornsuðutákn; verkstæðisteikningin gefur suðuna sem texta |
| Breyting á teikningu í forritinu | Breyttu líkaninu og gerðu teikninguna aftur; merktu PDF-skrána í PDF-forriti eins og MarkupCraft |
| Teikningar sem DWG með málsetningarhlutum, eða líkanið í fullri stærð í líkanrými með blöðunum sem pappírsskipulagi | Hvert blað er DWG eða DXF í fullri stærð af pappírnum, málsetningar sem línur og tölur ([Heildarfyrirkomulags- og samsetningarteikningar](topic:drawings#download)) |
| NC-göt í kringlóttum rörum, úrtökur á hornum og kringlóttum rörum í NC-skrám | Ekki skrifað; sjá [Reitir NC-skráa](topic:nc1-fields) |
| Skávalir, merkingar og innri útlínur í NC-skrám | Engin í dag |
| Boltagöt, boltar, suður og undirstöður í USD-útflutningi | Þau eru í IFC-, NC- og BOM-útkomum; sjá [Flytja út stálslíkanið sem USD](topic:usd) |
| Innflutningur tenginga, undirstaða, langgata eða ferhyrndra gata og gata í kringlóttum rörum úr IFC-skrá | {{ui:Flytja inn IFC}} flytur inn bita, súlur, hluta, plötur, ása, kóta, kringlótt göt, úrtökur, bolta og steypustyrktarjárn, og skýrsla þess listar það sem var skilið eftir |
| Sérsniðin útlit skýrslna | Skrárnar þrjár á CSV-sniði |

## Spjöld

| Ekki enn | Í staðinn, í dag |
|---|---|
| Að færa skýrslurnar neðst ({{ui:Vandamál}}, {{ui:Efnislisti}}, {{ui:Beygjulisti}}) | Aðeins spjöldin {{ui:Líkan}} og {{ui:Eiginleikar}} færast. Sjá [Raða spjöldum](common:arrange-panels) |

## Samvinna og vistun

| Ekki enn | Í staðinn, í dag |
|---|---|
| Skýjavistun og samstilling milli tölva | Vistaðu `.detailcraft.json`-skrár og deildu þeim eins og hverri annarri skrá. Skýjavistun er ekki í boði enn |
| Bendlar annarra og merkingar „er að breyta“ í Live TeamWork-lotu; ásar, kótar og áfangar sameinaðir atriði fyrir atriði | Breytingar sameinast enn (ásar, kótar og áfangar fara í heild, sú síðari breyting vinnur); sjá [Teikna eitt mannvirki saman, í beinni](topic:work-live) |
| Boðstenglar í Live TeamWork-lotu yfir internetið | Taktu þátt með stuttum kóða á sama neti |

## Vettvangar

- DetailCraft er gert fyrir skjá á borðtölvu, fartölvu eða spjaldtölvu. Það virkar líka í síma: líkanið heldur skjánum, og spjöld og skýrslur opnast sem blöð úr stiku neðst, en lítið pláss er fyrir spjöldin.
- Notkun án nettengingar krefst þess fyrst að DetailCraft sé vistað til notkunar án nettengingar, með {{ui:Vista til notkunar án nettengingar}} í forritastikunni; þegar þar stendur {{ui:Tilbúið án nettengingar}}, virkar allt í þessari útgáfu án tengingar. Sjá [Vinna án nettengingar](common:offline).

Ef eitthvað af þessum bilum hindrar vinnu þína, láttu okkur vita á [stuðningssíðunni](https://getcadcraft.com/support); það hjálpar okkur að ákveða hvað á að smíða næst.
