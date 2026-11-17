---
title: Nýtt í 0.9
summary: Breskar stálstærðir UK Blue Book og ójafnar horn, verkstæðisteikningar fyrir hvern hlut í einu PDF-setti, Mínir prófílar fyrir sérsniðin snið, P-Delta og eigintíðnir, vindálag samkvæmt ASCE 7, jarðskjálftasvæði og samsetningar, og lifandi bendlar með Fylgja.
keywords: nýtt, hvað er nýtt, útgáfuskýringar, breytingaskrá, 0.9, uk steel, blue book, ub, uc, pfc, shs, rhs, chs, ójafnt horn, verkstæðisteikning, verkstæðisteikningar, blaðasett, hlutamerki, pdf, mínir prófílar, sérsniðinn prófíll, p-delta, önnur röð, eigintíðni, endanleg frumefni, massi sveiflu, vindálag, asce 7, jarðskjálfti, jarðskjálftaflokkur, usgs, álagssamsetningar, lrfd, asd, lifandi, bendlar, fylgja, fólk, verkfæraábendingar, nýtt, hvað er nýtt, útgáfuskýringar, breytingaskrá, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, uppsetning, krani, álagstafla, kvikmynd, sjálfstýring, tengingar, járnbending, þéttleiki, grunnur, undirstaða, sökkull, steypa, setning, rammi, timbur, léttveggir, skurðarlisti, byggingarhæfni, aðgangur að suðu, birgir, lager, afhendingartími, hvað brotnar fyrst, lifandi, steypa, jarðskjálfti, plata, tungumál, aðstoðarmaður
from: 4c95a2de
---

Þetta er það sem breyttist í DetailCraft 0.9, miðað við 0.8.1. 0.9 færir breskar stálstærðir, verkstæðisteikningu fyrir hvern hlut í einu, stærri flipann {{ui:Analysis}} fyrir ramma og sýn á bendla hvors annars þegar þið vinnið saman.

## Nýtt

### Breskt stál og verkstæðisteikningar

- **Breskar stálstærðir.** Prófílalistarnir hafa nú 976 stærðir úr Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS og RHS, með kaldmótuðu holu sniðunum aðskildum (nöfn þeirra byrja á CF). Nöfn eru skrifuð fjölskyldan fyrst, eins og UB305x165x40 eða SHS100x100x5.0, og það virkar líka að skrifa þau eins og teikningar segja: 305x165x40 UB, L100x100x10, SHS100x5. Sjá [Prófílaskrá](topic:profile-catalog).
- **Ójöfn horn.** UEA-horn halda báðum fótum í gegnum IFC inn og út og í gegnum NC-skrár, og spegill snýr stykkinu við frá enda til enda.
- **Allar verkstæðisteikningar í einu.** Veldu {{ui:Shop drawing}} í hópnum {{ui:Output}} án þess að velja neitt. Glugginn listar öll hlutamerki, forskoðar hvert þeirra, og {{ui:Download all}} vistar eitt PDF með einni síðu fyrir hvert merki, merkta "Blað 3 af 42". {{ui:Download this sheet}} vistar það sem þú ert að skoða. Rásir, hornjárn og holu snið fá nú blöð líka. Sjá [Gerðu verkstæðisteikningar](topic:shop-drawings).
- **Mínir prófílar.** Sérsniðinn prófíll má nú geyma fyrir hvert nýtt líkan. Í eyðublaðinu Sérsniðinn prófíll skaltu hafa {{ui:Keep in My profiles}} merkt við; listinn {{ui:My profiles}} undir honum hefur {{ui:Keep}}, {{ui:Use here}} og {{ui:Remove}}. Listinn er geymdur í þessum vafra (allt að 200), ekki í reikningnum þínum. Sjá [Plötur og prófílar](topic:plates-and-profiles).

### Greining

- **Önnur röð (P-Delta).** Hakaðu við {{ui:Second order (P-Delta)}} við hliðina á {{ui:Run}} á flipanum {{ui:Analysis}} og ásálagið verkar á sveigða grindina. Plötur og stíf gólf haldast af fyrstu röð, með viðvörun. Sjá [Kraftar, viðbrögð og durðir](topic:frame-analysis).
- **Eigintíðnir.** Reiturinn {{ui:Finite elements: natural frequencies}} undir niðurstöðunum finnur lægstu sveiflumyndirnar í sama líkani, ásamt tímabili og virkum massa sveiflunnar, og sýnir sveiflumynd á líkaninu. Sjá [Kraftar, viðbrögð og durðir](topic:frame-analysis).
- **Vindálag og jarðskjálftasvæði.** Þrír nýir reitir á flipanum {{ui:Analysis}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} og {{ui:ASCE 7 load combinations}}. Sjá [Vindur, jarðskjálftasvæði og ASCE 7-samsetningar](topic:wind-seismic-combinations).

### Vinna saman

- **Bendlar og nöfn.** Í Live-fundi er bendill hvers og eins teiknaður í líkaninu ásamt nafni hans og lit, og það sem hann valdi fær reit.
- **Fylgja einhverjum.** Opnaðu {{ui:People}} í fundinum og veldu {{ui:Follow}} við nafn; sýnin þín færist með hans. Gestgjafinn getur valið {{ui:Ask everyone to follow me}}. Sjá [Fylgja einhverjum á Live-fundi](topic:follow-in-live).

### Í öllum forritum

- Verkfæraábendingar eru Bootstrap-ábendingar, ábendingaspjaldið við ræsingu er með lokunarhnapp, flipaslár skrolla til hliðar þegar þær passa ekki, og titill vafraflipans sýnir opna skjalið fylgt af DetailCraft og CadCraft.

## Lagfært

- Sérsniðinn prófíll tapaðist þegar þú byrjaðir nýtt líkan.
- Rásir, hornjárn og holu snið vantaði í verkstæðisteikningasettið.

## Takmarkanir

- Vind-, jarðskjálfta- og eigintíðnireitirnir eru hjálpartæki. Verkfræðingurinn þinn yfirfer niðurstöðurnar; þær eru ekki staðlaathugun. USGS-uppflettingin var prófuð á staðgengli, ekki á raunverulegri þjónustu.
- Eigintíðnir og P-Delta voru prófaðir á móti handreiknuðum og lokuðum svörum, ekki raunverulegri byggingu. Knékkunargreining er ekki smíðuð.
- Enginn breskur framleiðandi hefur prófað bresku stærðirnar enn, og NC-skrár fyrir ójöfn horn hafa ekki verið keyrðar í vél.
- Verkstæðisteikningasettið er aðeins PDF.
- Tungumál önnur en enska eru vélþýðingar.
- Windows-uppsetningarforritin eru ekki kóðaundirrituð (More info, síðan Run anyway); macOS-diskmyndin er ekki staðfest hjá Apple (hægrismelltu, síðan Open).

Eldri breytingar eru í 0.8- og 0.8.1-skýringunum neðar á þessari síðu.

## Eldra: 0.8 og 0.8.1

Þetta er það sem breyttist í DetailCraft 0.8 (1. nóvember 2026) og 0.8.1 (2. nóvember 2026), miðað við 0.7. 0.7 athugaði stálstangir; 0.8 skipuleggur lyftingar, leggur til samskeyti, athugar undirstöður og járnbendingu, og setur saman timbur- og léttveggi, gólf og þök.

### Nýtt

**Uppsetning**

- **Uppsetningaráætlun og kvikmynd.** Á flipanum {{ui:Erection}} lýsirðu krana (hvar hann stendur, hæsta krók hans, búnaðinum sem er ekki í töflunni) og skrifar inn línur álagstöflu hans. DetailCraft lyftir líkaninu einni samsetningu í einu, eftir fasaröð og hæð fyrir hæð, og athugar hverja lyftingu við töfluna í þeirri fjarlægð sem hún er í og við bilið sem þú stillir. {{ui:Save movie}} skrifar eina HTML-skrá sem spilast án nettengingar í hvaða vafra sem er, líka í síma. Lyftingar sem eru yfir töflunni, handan hennar eða of háar eru í {{ui:Problems}}. Þetta er áætlun út frá tölunum þínum, ekki lyftiáætlun. Sjá [Uppsetningaráætlun og kvikmynd](topic:erection-movie).

**Tengingar**

- **Sjálfstýring tenginga.** Flipinn {{ui:Autopilot}} skoðar hvert samskeyti sem hefur enga tengingu og leggur til eina út frá prófílunum: grunnplötur, skurðflipa, endaplötur fyrir bitana sem þú merkir sem beygjubita, skeyti og kjálkaplötur. Gefðu jafndreift álag eða skurðkraft á einum enda og boltafjöldinn fylgir hönnunarstyrk boltans. {{ui:Add them all}} bætir tillögunum við sem eitt afturkallsskref. Þetta eru upphafsgildi til yfirferðar, ekki tengihönnun.
- **Byggingarhæfnisathuganir.** {{ui:Problems}} fyrir bolta sem lykill nær ekki að, bolta of nálægt fyrir innstunguna, horn-suðu utan stærðarmarka þeirra og holu snið sem halda vatni. Aðgangur að suðu er nýr: horn-suða rétt hringinn sem suðutorch nær ekki að er skráð ásamt hlutanum sem er fyrir og því hlutfalli suðunnar sem hefur áhrif. Sjá [Byggingarhæfnisathuganir](topic:constructability).

**Undirstöður og járnbending**

- **Undirstöðuathuganir.** Flipinn {{ui:Foundation}} athugar undirstöður, samsettar undirstöður og plötur á jarðveginum sem þú lýsir: burðarþol, skrið og velti út frá notkunarálagi; beygju, skurð, gegnumskurð, festingarlengd og lágmarksstál út frá hlutföldnu álagi (ACI 318-19). Súla nálægt jaðri eða horni er athuguð með þversniðinu sem undirstaðan skerst af við brún sína. Setning kemur úr stuðli jarðvegsins, sveigjanleg plata er leyst á fjöðrum út frá undirlagsstuðli, og staurahópar og veggir með stoðveggjum hafa eigin hluta. Súlukraftar má skrifa inn eða taka úr {{ui:Analysis}}. Sjá [Undirstöðuathuganir](topic:foundation-checks).
- **Þéttleikakort járnbendingar.** Flipinn {{ui:Congestion}} teiknar hitakort af hverri undirstöðu séð að ofan: þar sem járnin skilja of lítið rými eftir fyrir steypuna til að komast niður, miðað við reglu um lágmarksbil og, ef þú gefur þau, stærsta fyllingarefni og titrarahaus. Sjá [Þéttleikakort járnbendingar](topic:rebar-congestion).

**Rammi og birgðir**

- **Timbur- og léttveggjarammi.** Flipinn {{ui:Framing}} setur saman veggi-, gólf- og þakeiningar með öllum stykkjum, skurðarlista, efninu sem á að kaupa og verkstæðisteikningu í mælikvarða. {{ui:Place as members}} setur stykkin í líkanið, og {{ui:PDF sheets}} vistar eitt blað fyrir hverja einingu. Stærðir, bil og yfirlestir eru þín: DetailCraft athugar ekki hvort þau beri álagið. Sjá [Timbur- og léttveggjaeiningar](topic:framing-panels).
- **Lager birgja og afhendingartími.** Flipinn {{ui:Supply}} les lagerlista birgis (CSV) og sýnir fyrir hvern hluta sem skurðarlistinn kaupir, hvort nóg sé til á lager og hversu lengi biðin er. Stuttir hlutar og seinir hlutar eru í {{ui:Problems}}. Ekkert er pantað. Sjá [Lager birgja og afhendingartími](topic:supplier-stock).

**Greining og hönnun**

- **Hvað brotnar fyrst?** Á flipanum {{ui:Analysis}} finnur hnappurinn styrkssamsetninguna sem ræður, veikasta hlutann, hversu mikið álagið getur vaxið áður en fyrsti hluti nær mörkum sínum, og veikasta endaplötu eða skurðflipa þar sem skurðstyrkur bolta hennar er þekktur. Hann þarf fyrst samsetningarnar og hönnunarstaðal. Burðarþol, blokkarskurður, suður og klofning eru ekki athuguð. Tengdur aðstoðarmaður þinn getur beðið um það sama.
- **Í beinni.** Hakaðu við {{ui:Live: solve again after each edit}} og rammanum er leyst aftur eftir hverja breytingu.
- **Steinsteypa, meira.** Grannur súla í ramma án hliðarhreyfingar er hönnuð fyrir magnaða stuðulinn (ACI 318-19 6.6.4.5). Jarðskjálftatímabilið má taka úr greiningunni með aðferð Rayleighs. Plata úr plötum fær það stál sem hvert lag þarf út frá stuðlum sínum, og eináttarskurðinn. Sjá [Athugaðu steinsteyptar einingar og búðu til jarðskjálftaálag](topic:concrete-and-seismic).
- **Fyrir verkfræðing að yfirfara.** Niðurstöður undirstöðu, steypu og Hvað brotnar fyrst eru hjálpartæki. Vindálag er ekki smíðað.

**Í öllum forritum**

- **Tungumál.** Hjálparefnið er á 54 tungumálum. Þau sem eru önnur en enska eru vélþýðingar þar til móðurmálsmaður hefur lesið þau; tíu eru ný (litháska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippseyska, svahílí, úsbekska).
- **Verkfæraraðir.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} velur vafningu, 2 raðir eða 1 röð. Stika sem passar nú þegar helst eins; hinar skrolla til hliðar.
- **Eiginleikatafla.** Reitir undirstöðunnar nota sameiginlegu töfluna: samfellanlegir flokkar og þéttleiki. Skrifaður reikningur eins og 2*450 virkar enn.
- **Inntakstæki.** Snertiflötur, penni, þrívíddarmús, stýripinni og MIDI geta stjórnað forritunum. Sjá [Rata um í þrívídd](topic:navigate-3d).
- **Vandamálaspjaldið.** Viðvaranir nýju athuganna hér að ofan birtast í sama spjaldi {{ui:Problems}} og áður.
- **Tengdu gervigreindina þína.** Þinn eigin aðstoðarmaður, tengdur í gegnum CadCraft Studio, virkar með öllum átta forritunum og sér aðeins það sem þú heimilar. Tenging með einum smelli, hýsti tengillinn og þinn eigin API-lykill í Studio eru enn á leiðinni. Sjá [Notaðu DetailCraft með gervigreindaraðstoðarmanni](topic:use-with-ai-assistants).

### Lagfært í 0.8.1

- **Tungumál í Studio.** Studio og pakkaðar útgáfur geta skipt um tungumál meðan forritið keyrir; áður var aðeins enska. Það hefur ekki verið prófað á öllum stýrikerfum: láttu okkur vita ef tungumálið breytist ekki.
- **Val með glugga yfir þvert.** 0.8.1-uppsetningarforritin hafa valhegðunina með glugga þegar rétta í 0.8 vefútgáfunni; eldri uppsetningarforrit gerðu það ekki.
- **Spjaldtölvur á hæð.** Laus rist fer í striga, og blaðauppsetningin byrjar við 760 px eða minna.

### Ekki komið í þessa útgáfu enn

- **Senda NC í vél** er ekki komið út.
- **Vindálag** fyrir steinsteypu er ekki smíðað, og steypu- og undirstöðuathuganir eru til yfirferðar hjá verkfræðingi.
- **Kóðaundirritun.** Windows-uppsetningarforritin og macOS .dmg-skráin eru ekki undirrituð, þannig að Windows gæti varað við og macOS biður um hægrismell, síðan Open.

Eldri breytingar eru í [Nýtt í 0.7](topic:whats-new-0-7).
