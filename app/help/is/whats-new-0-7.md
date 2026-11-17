---
title: Nýtt í 0.7 (eldra)
summary: Hönnunarathuganir á stálbitum af gerðinni I-prófíl með álagssamsetningum úr ASCE 7 eða EN 1990 og athugun á einingum samkvæmt AISC 360 eða EN 1993-1-1, USD-útflutningur á stállíkaninu, aðstoðartól fyrir USD, stálborði með stórum og litlum hnöppum, spjöld sem fela sig og gluggar sem færast til.
keywords: nýtt 0.7, eldri útgáfa, útgáfuskýringar, breytingaskrá, breytingar, 0.7, útgáfa, nýir eiginleikar, hönnunarathuganir, stálhönnun, nýting, utilization, álagssamsetningar, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, landsviðauki, þakálag, durðarmörk, usd, usda, usdc, usdz, openusd, aðstoðarmaður, mcp, stálborði, borði, skiptur hnappur, einingar, þétt, spjöld, gluggar, portúgalska
from: 54a7a8f0
---

Þetta er það sem breyttist í DetailCraft 0.7, miðað við 0.6. Rammagreiningin úr 0.6 hefur nú annað skref: athugun stálstanga samkvæmt hönnunarstaðli.

## Nýtt

### Hornsamskeyti (0.7.1)

- **Tveir I-prófílar sem mætast í horni**, eins og hornstykki í grind eða mænir: veldu þá báða, veldu {{ui:Mitre}} í valmyndinni {{ui:More}} í hópnum {{ui:Connect}}, og báðir endar eru skornir á fletinum sem deilir horninu í tvennt. Endaplötur sem eru boltaðar saman og veggstyrkingar eru gátreitir í nýja glugganum Hornsamskeyti, og númeruðu reitirnir passa við teikningu af samskeytinu sem verður til meðan þú skrifar. Hornsamskeytið fylgir einingunum þegar þær færast og berst yfir í teikningar, NC-skrár (skáskurðir), IFC og efnislistann. Sjá [Hornsamskeyti](topic:mitres).

### Hönnunarathuganir

- **Álagssamsetningar úr staðlinum.** Á flipanum {{ui:Analysis}} hefur nýi reiturinn {{ui:Design checks}} {{ui:Design code}}: ASCE 7 + AISC 360 (US, LRFD) eða EN 1990 + EN 1993-1-1 (Eurocode). Gefðu hverju álagstilviki sína gerð (fast, breytilegt, nýja þakálagið, snjó, vind, jarðskjálfta), ýttu á {{ui:Make combinations}} og DetailCraft skrifar styrk- og nothæfissamsetningar staðalsins fyrir tilvikin þín. Samsetningar sem þú skrifaðir sjálfur haldast. Sjá [Búa til samsetningarnar](topic:design-checks#make-the-combinations).
- **Gildi úr landsviðauka.** Fyrir Eurocode byrja stuðlarnir á ráðlögðum gildum; {{ui:National Annex values}} leyfir þér að skrifa inn gildi lands þíns og þau vistast í líkaninu. Sjá [Búa til samsetningarnar](topic:design-checks#make-the-combinations).
- **Athuga einingar.** {{ui:Check members}} athugar hvern stálbita af gerðinni I-prófíl með tilliti til togs, þrýstings með knékkun, beygju með hliðarsnúnings-knékkun, skurðar, beygju ásamt ásálagi og durðar miðað við {{ui:Deflection limit}} sem þú stillir. Töflan sýnir nýtingu hverrar einingar, athugunina sem ræður og samsetningu hennar, og einingarnar eru litaðar á líkaninu (blátt, grænt, okkurgult, rautt, grátt fyrir þær sem ekki voru athugaðar). Sjá [Athuga einingarnar](topic:design-checks#check-the-members).
- **Í skýrslunni.** {{ui:Report (PDF)}} og {{ui:Report (CSV)}} bæta við útgáfum staðlanna, stillingunum, nýtingu eftir einingum og hverri grein sem var notuð. Sjá [Skýrslan](topic:design-checks#the-report).
- **Hjálpartæki þar til verkfræðingur hefur yfirfarið.** Það notar einungis krafta af fyrstu röð. Rör, hornjárn, rásir, soðin snið og grannir hlutar eða hlutar af flokki 4 fá "ekki athugað", ásamt ástæðu; snúningur, samskeyti og steypa eru ekki athuguð. Sjá [Það sem er ekki athugað](topic:design-checks#what-is-not-checked).

### USD

- **Flytja út stállíkanið sem USD.** {{ui:USD}} í hópnum {{ui:Output}} skrifar líkanið sem {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} eða {{ui:Package (.usdz)}} fyrir myndgerðarforrit og samsetningu senu: hver samsetning heldur utan um sína hluti, hver hluti er þversniðið sitt dregið eftir lengdinni með skornum endum, og hver ber hlutamerki, prófíl, stálgæði, lengd og þyngd. Boltagöt, boltar, suður og undirstöður eru ekki í USD-netunum. Sjá [Flytja út stállíkanið sem USD](topic:usd).

### Aðstoðarmenn

- **USD fyrir aðstoðarmenn.** Þinn eigin aðstoðarmaður, tengdur í gegnum CadCraft Studio, getur flutt líkanið út sem USD (`usd_export`), og í Studio skrifað það í möppu sem þú heimilaðir. Sjá [Hvað aðstoðarmaður getur beðið um](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Breytt

- **Stálborðið** hefur stóra og litla hnappa: stór {{ui:Beam}} við hliðina á litlu {{ui:Column}}, {{ui:Brace}} og {{ui:Plate}} á {{ui:Modeling}} › {{ui:Members}}; stór {{ui:End plates}} á {{ui:Detailing}} › {{ui:Connections}}, þar sem {{ui:Splice}} og {{ui:Gusset}} deila einum skiptum hnappi; stórt {{ui:Paste}} á {{ui:Edit}} › {{ui:Clipboard}}, með {{ui:Paste in place}} og {{ui:Duplicate}} á bak við örvina á hópnum. {{ui:Fabrication}} › {{ui:Exchange}} er með {{ui:Export USD}} við hliðina á IFC. Aðrir valmyndarstílar líta út eins og áður. Sjá [Valmyndir, lyklar og mús](topic:menus-keys-and-mouse#the-three-styles).
- [Greina rammann](topic:frame-analysis) vísar nú í hönnunarathuganirnar, og samsetningar hans má búa til eftir staðlinum.

## Í öllum forritum

- **Einingar.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} hefur einn lista hvor fyrir lengd, flatarmál, rúmmál, horn og halla, með nákvæmu stærðunum sem skilgreiningar einingarinnar gefa (US survey foot er sín eigin eining). Slökktu á einingunum sem þú notar aldrei og þær hverfa af listunum; merktu eina með stjörnu og nýtt verk byrjar í henni. Skrá heldur alltaf sinni eigin einingu. Reitir DetailCraft fylgja ekki listunum enn: lengdir þar eru enn skrifaðar í millimetrum. Sjá [Einingar, skrifuð gildi og einingalistarnir](common:unit-lists).
- **Þéttara skipulag og spjöld sem fela sig.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} kemur meira fyrir á skjánum (snertiskjáir og símar halda stóru hnöppunum). Hvert hliðarspjald er með grannri titilslá: dragðu hana til að festa spjaldið eða gera það fljótandi, slepptu henni á slá annars spjalds til að deila einum ramma sem flipum, festu það til að renna út að jaðrinum, eða feldu það og sæktu það aftur af jaðrinum. Sjá [Raðaðu spjöldunum](common:arrange-panels#make-the-layout-denser).
- **Gluggar færast til.** Dragðu glugga á titilslánni út úr teikningunni; hann kemur aftur þangað sem þú skildir við hann. Tvísmelltu á titilsláina til að miðja hann aftur. Sjá [Færa glugga](common:arrange-panels#move-a-dialog).
- **Uppskriftir fyrir aðstoðarmenn.** Tíu unnin verkefni fyrir þinn eigin aðstoðarmann (taka til teikningu, teikna sett, athuga teikningar, spyrja líkan spurninga, taka saman magntöku, prófa afbrigði af hlut…), hvert með þeim verkfærum sem það kallar á og heimildunum sem það þarfnast, og hvert endurkeyrt af prófunum okkar. Forritin innihalda enga gervigreind. Sjá [Uppskriftir fyrir aðstoðarmenn](common:assistants-recipes).
- **Tungumál.** **Português (Portugal)** er nýtt í {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Það, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** hafa nú hvert orð forritanna, sem drög sem móðurmálsmaður hefur ekki yfirfarið. Hjálparefnið er á ensku.
- **CadCraft Studio** segir hvers vegna athugun á uppfærslu mistókst (engin skrá fyrir stýrikerfið þitt enn, ekkert net, röng undirskrift) í stað þess að segja bara "Done", og hættir að skila aftur spjaldinu Nýtt sem þú lokaðir fyrr en nýrri útgáfa er komin.

## Ekki komið í þessa útgáfu enn

- **0.7 er ekki kóðaundirritað.** Undirritun og Microsoft Store-pakkinn færðust yfir í 0.8 því staðfesting skírteinisins hefur ekki borist enn. Athugaðu SHA-256 við hverja skrá á getcadcraft.com/download. Á Windows, ef SmartScreen stöðvar uppsetninguna, veldu {{ui:More info}}, og síðan {{ui:Run anyway}}. Á Mac, í fyrsta skipti, hægrismelltu á CadCraft Studio og veldu {{ui:Open}}. CadCraft Studio er ekki komið í forritaverslun enn, og það er ekki til iPad- eða iPhone-útgáfa enn.
- Horna- og hallalistarnir í {{ui:Units}} eru vistaðir, en enginn reitur les þá enn.
- **Hönnunarathuganirnar hafa ekki verið yfirfarnar af verkfræðingi enn.** Prófanir okkar bera þær saman við prentuð töflugildi og formúlur reiknaðar í höndum, ekki enn við unnin dæmi úr hönnunarleiðbeiningum. Þar til yfirferð hefur farið fram eru þær hjálpartæki: athugaðu einingar sem skipta máli í höndunum.
- Hönnunarathuganirnar nota krafta af fyrstu röð (engin áhrif af annarri röð) og athuga einungis I-prófíla. Ekki smíðað: rör, hornjárn, rásir, soðin snið, grannir (AISC) eða hlutar af flokki 4 (Eurocode) í beygju, snúningi, skurðknékkun ásamt beygju, samskeytum, þreytu, eldi, jarðskjálftahönnun og steypu. Hlutur sem er grannur í þrýstingi sleppir þrýstingsathugunum og einingin fær "stenst, að hluta athugað".
- Rammagreining er enn af fyrstu röð og línuleg, og verkfræðingur hefur ekki prófað hana á raunverulegu verki enn.
- Boltagöt, boltar, suður og undirstöður eru ekki í USD-útflutningnum.

Allt annað er í [Það sem er ekki smíðað enn](topic:not-built-yet).
