---
title: Nýtt í 0.9 (eldra)
summary: Stálstærðir úr UK Blue Book og ójafnir hornjárn, verkstæðisteikningar fyrir alla hluti í einu PDF-setti, Mínir prófílar fyrir sérsniðna snið, P-Delta og eigintíðnir, ASCE 7 vindálag, jarðskjálftasvæði og samsetningar, og lifandi bendlar með Fylgja.
keywords: nýtt í 0.9, eldri útgáfa, hvað er nýtt, útgáfuskýringar, breytingaskrá, 0.9, uk-stál, blue book, ub, uc, pfc, shs, rhs, chs, ójafn hornjárn, verkstæðisteikning, verkstæðisteikningar, blaðasett, hlutamerki, pdf, mínir prófílar, sérsniðinn prófíll, p-delta, annað stig, eigintíðni, endanleg frumefni, massi sveiflu, vindálag, asce 7, jarðskjálfti, jarðskjálftasvæði, usgs, álagssamsetningar, lrfd, asd, lifandi, bendlar, fylgja, fólk, 0.8, 0.8.1, útgáfa, nýir eiginleikar, uppsetning, krani, álagstafla, myndband, sjálfstýring, tengingar, athuganir, þéttleiki, undirstöður, rammar, timbur, léttir veggir, skurðarlisti, smíðanleiki, aðgengi að suðu, birgir, lager, afhendingartími, hvað brotnar fyrst, steypa, tungumál, aðstoðarmaður
from: ab0c7f05
---

Þetta er það sem breyttist í DetailCraft 0.9, samanborið við 0.8.1. 0.9 færir með sér stálstærðir fyrir Bretland, verkstæðisteikningu fyrir alla hluti í einni lotu, stærri flipa {{ui:Analysis}} fyrir ramma, og sýn á bendla hvors annars þegar þið vinnið saman.

## Nýtt

### Stál fyrir Bretland og verkstæðisteikningar

- **Stærðir á breskum stálum.** Prófílalistarnir innihalda nú 976 stærðir úr Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS og RHS, með kaldmótuðu holu sniðunum aðskildum (heiti þeirra byrja á CF). Heitin eru skrifuð ættarheiti fyrst, eins og UB305x165x40 eða SHS100x100x5.0, og það virkar líka að slá þau inn eins og teikningar segja þau: 305x165x40 UB, L100x100x10, SHS100x5. Sjá [Prófílaskrá](topic:profile-catalog).
- **Ójafnir hornjárn.** UEA hornjárn halda báðum fótum við IFC inn og út og í NC-skrám, og spegill snýr stykkinu við enda fyrir enda.
- **Allar verkstæðisteikningar í einu.** Veldu {{ui:Shop drawing}} í hópnum {{ui:Output}} án þess að neitt sé valið. Glugginn listar öll hlutamerki, forskoðar hvert þeirra, og {{ui:Download all}} vistar eitt PDF með einni síðu fyrir hvert merki, hver merkt „Blað 3 af 42“. {{ui:Download this sheet}} vistar blaðið sem þú ert að skoða. Rásjárn, hornjárn og hol snið fá nú blöð líka. Sjá [Gerðu verkstæðisteikningar](topic:shop-drawings).
- **Mínir prófílar.** Hægt er nú að geyma sérsniðinn prófíl fyrir hvert nýtt líkan. Á formi fyrir sérsniðinn prófíl skaltu láta {{ui:Keep in My profiles}} vera hakað; listinn {{ui:My profiles}} fyrir neðan hefur {{ui:Keep}}, {{ui:Use here}} og {{ui:Remove}}. Listinn er geymdur í þessum vafra (allt að 200), ekki á aðgangnum þínum. Sjá [Plötur og prófílar](topic:plates-and-profiles).

### Greining

- **Annað stig (P-Delta).** Hakaðu við {{ui:Second order (P-Delta)}} við hliðina á Keyra í flipanum {{ui:Analysis}} og ásakraftarnir verka á beygða rammann. Plötur og stíf gólf haldast á fyrsta stigi, með viðvörun. Sjá [Kraftar, viðbrögð og durgun](topic:frame-analysis).
- **Eigintíðnir.** Reiturinn {{ui:Finite elements: natural frequencies}} undir niðurstöðunum finnur lægstu eigintóna sama líkans, ásamt tíma og virkum massa sveiflu, og sýnir einn tón á líkaninu. Sjá [Kraftar, viðbrögð og durgun](topic:frame-analysis).
- **Vindálag og jarðskjálftasvæði.** Þrír nýir reitir í flipanum {{ui:Analysis}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} og {{ui:ASCE 7 load combinations}}. Sjá [Vindur, jarðskjálftasvæði og ASCE 7 samsetningar](topic:wind-seismic-combinations).

### Að vinna saman

- **Bendlar og nöfn.** Í Live-lotu er bendill hvers og eins teiknaður í líkaninu með nafni sínu og lit, og það sem viðkomandi valdi fær reit.
- **Fylgdu einhverjum.** Opnaðu {{ui:People}} í lotunni og veldu {{ui:Follow}} við nafn; sýnin þín hreyfist með þeirra. Stjórnandinn getur valið {{ui:Ask everyone to follow me}}. Sjá [Fylgdu einhverjum í Live-lotu](topic:follow-in-live).

### Í öllum forritum

- Skýringar eru Bootstrap-skýringar, byrjunarráðleggingaspjaldið er með lokahnapp, flipaskemmar fletta til hliðar þegar þær passa ekki, og vafraflipinn sýnir heiti opna skjalsins á eftir DetailCraft og CadCraft.

## Lagað

- Sérsniðinn prófíll glataðist þegar þú byrjaðir nýtt líkan.
- Rásjárn, hornjárn og hol snið vantaði í verkstæðisteikningasettið.

## Hreinskilin takmörk

- Vind-, jarðskjálfta- og endanlegu frumefnisreitirnir eru hjálpartæki við athugun. Verkfræðingurinn yfirfer niðurstöðurnar; þær eru ekki staðalathugun. USGS-leitin var prófuð á staðgengli, ekki á lifandi þjónustunni.
- Endanleg frumefni og P-Delta voru athuguð gegn handreiknuðum og lokuðum lausnum, ekki raunverulegri byggingu. Knésbeygingargreining er ekki smíðuð.
- Enginn breskur smiður hefur enn prófað bresku stærðirnar, og NC-skrár fyrir ójafna hornjárn hafa ekki keyrt á vél.
- Verkstæðisteikningasettið er aðeins PDF.
- Tungumál önnur en enska eru vélþýðingar í drögum.
- Windows-uppsetningarforritin eru ekki kóðaundirrituð (Frekari upplýsingar, síðan Keyra samt); macOS-diskmyndin er ekki staðfest af Apple (hægrismelltu, síðan Opna).

Eldri breytingar eru í 0.8- og 0.8.1-skýringunum neðar á þessari síðu.

## Eldra: 0.8 og 0.8.1

Þetta er það sem breyttist í DetailCraft 0.8 (1. nóvember 2026) og 0.8.1 (2. nóvember 2026), samanborið við 0.7. 0.7 athugaði stálstangir; 0.8 skipuleggur lyftingar, leggur til tengingar, athugar undirstöður og steypustál, og rammar timbur- og léttveggi, gólf og þök.

### Nýtt

**Uppsetning**

- **Uppsetningaráætlun og myndband.** Í flipanum {{ui:Erection}} lýsir þú krana (hvar hann stendur, hæsta krók hans, búnaðinum sem er ekki í töflunni) og slærð inn raðirnar í álagstöflu hans. DetailCraft lyftir líkaninu einni samsetningu í einu, eftir fasaröð og lagi fyrir lag, og athugar hverja lyftingu við töfluna á þeim radíus og gegn öryggisbilinu sem þú stillir. {{ui:Save movie}} skrifar eina HTML-skrá sem spilast án nettengingar í hvaða vafra sem er, líka í síma. Lyftingar sem eru yfir töflunni, utan hennar eða of háar eru í {{ui:Problems}}. Þetta er áætlun úr tölunum þínum, ekki lyftiáætlun. Sjá [Uppsetningaráætlun og myndband](topic:erection-movie).

**Tengingar**

- **Sjálfstýring tenginga.** Flipinn {{ui:Autopilot}} skoðar hvern samskeyti sem hefur enga tengingu og leggur til eina út frá sniðunum: undirplötur, skerflipa, endaplötur fyrir bita sem þú merkir sem vægisbita, stykkjatengingar og styrkiplötur. Gefðu jafndreift álag eða einn endaskerkraft og boltafjöldinn fylgir hönnunarstyrk boltans. {{ui:Add them all}} bætir tillögunum við sem eitt afturkallaskref. Þetta eru upphafsgildi til yfirferðar, ekki tengingarhönnun.
- **Athuganir á smíðanleika.** {{ui:Problems}} fyrir bolta sem skiptilykill nær ekki til, bolta sem eru of þétt fyrir toppnykilinn, hornsuður utan stærðarmarka þeirra og hol snið sem halda vatni. Aðgengi að suðu er nýtt: hornsuða allan hringinn sem suðutorch nær ekki til er skráð ásamt hlutanum sem stendur í veginum og hlutfalli suðunnar sem verður fyrir áhrifum. Sjá [Athuganir á smíðanleika](topic:constructability).

**Undirstöður og steypustál**

- **Athuganir á undirstöðum.** Flipinn {{ui:Foundation}} athugar sóla, samsetta sóla og plötur á jarðveginum sem þú lýsir: burðargetu, sleit og veltingu frá nothæfisálagi; beygju, skurð, gegnumstungu, tengilengd og lágmarksstál frá reiknuðu álagi (ACI 318-19). Súla nálægt jaðri eða horni er athuguð með sniðinu sem skorið er af jaðri sólans. Setning kemur úr stuðli jarðvegsins, sveigjanleg plata er leyst á fjöðrum úr undirlagsstuðli, og staurahópar og veggir í jarðvegsstuðningi hafa eigin reiti. Súlukraftar má slá inn eða taka úr {{ui:Analysis}}. Sjá [Athuganir á undirstöðum](topic:foundation-checks).
- **Þéttleikakort steypustáls.** Flipinn {{ui:Congestion}} teiknar hitakort af hverjum sóla séð ofan frá: þar sem stálstengurnar skilja of lítið rými eftir fyrir steypuna til að komast niður, miðað við regluna um hreint bil og, ef þú gefur þær upp, stærsta fyllingarefni og titrarahausinn. Sjá [Þéttleikakort steypustáls](topic:rebar-congestion).

**Rammar og birgðir**

- **Timbur- og léttrammar.** Flipinn {{ui:Framing}} rammar veggja-, gólf- og þakspjöld með öllum stykkjum, skurðarlista, lagerinn til að kaupa og verkstæðisteikningu í mælikvarða. {{ui:Place as members}} setur stykkin inn í líkanið, og {{ui:PDF sheets}} vistar eitt blað fyrir hvert spjald. Stærðir, bil og yfirstykki eru þín: DetailCraft athugar ekki að þau beri álagið. Sjá [Timbur- og léttrammaspjöld](topic:framing-panels).
- **Lager birgja og afhendingartími.** Flipinn {{ui:Supply}} les lagerlista birgis (CSV) og sýnir fyrir hvern snið sem skurðarlistinn kaupir, hvort nægt sé til á lager og hversu langur biðtíminn er. Skortur og seinir snið eru í {{ui:Problems}}. Ekkert er pantað. Sjá [Lager birgja og afhendingartímar](topic:supplier-stock).

**Greining og hönnun**

- **Hvað brotnar fyrst?** Í flipanum {{ui:Analysis}} finnur hnappurinn ráðandi burðarsamsetninguna, veikustu stöngina, hversu mikið álagið getur aukist áður en fyrsta stöngin nær mörkum sínum, og veikustu endaplötuna eða skerflipann þar sem skurðstyrkur bolta þeirra er þekktur. Það þarf fyrst samsetningarnar og hönnunarstaðal. Lega, blokkskurður, suður og prying eru ekki athugaðar. Tengdi aðstoðarmaðurinn þinn getur spurt það sama.
- **Í beinni.** Hakaðu við {{ui:Live: solve again after each edit}} og rammann er leyst aftur eftir hverja breytingu.
- **Steypa, meira.** Grönn súla í ramma án hliðarhreyfingar er hönnuð fyrir magnað vægi sitt (ACI 318-19 6.6.4.5). Jarðskjálftatímabilið má taka úr greiningunni með aðferð Rayleigh. Plata úr spjöldum fær það stál sem hvert lag þarf út frá vægisliðum sínum og einstefnuskurðinum. Sjá [Athugaðu steypustangir og búðu til jarðskjálftaálag](topic:concrete-and-seismic).
- **Fyrir verkfræðing að yfirfara.** Niðurstöður undirstaða, steypu og Hvað brotnar fyrst eru hjálpartæki. Vindálag er ekki smíðað.

**Í öllum forritum**

- **Tungumál.** Hjálpin er á 54 tungumálum. Þau önnur en enska eru vélþýðingar í drögum þar til móðurmálshafi les þau; tíu eru ný (litháska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippínska, svahílí, úsbeska).
- **Línur tækjastikunnar.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} velur vafningu, 2 línur eða 1 línu. Stika sem passar nú þegar helst eins; hinar fletta til hliðar.
- **Eiginleikanet.** Reitir sólans nota sameiginlega netið: fellanlega flokka og þéttan þéttleika. Innsleginn reikningur eins og 2*450 virkar enn.
- **Inntakstæki.** Snertiflötur, penni, þrívíddarmús, stýripinni og MIDI geta stjórnað forritunum. Sjá [Rata í þrívídd](topic:navigate-3d).
- **Vandamálaspjald.** Viðvaranir nýju athuganananna hér að ofan birtast í sama {{ui:Problems}}-spjaldi og áður.
- **Tengdu gervigreindina þína.** Þinn eigin aðstoðarmaður, tengdur í gegnum CadCraft Studio, vinnur með öllum átta forritunum og sér aðeins það sem þú leyfir. Tenging með einum smelli, hýsti tengillinn og þinn eigin API-lykill í Studio eru enn á leiðinni. Sjá [Nota DetailCraft með gervigreindaraðstoðarmanni](topic:use-with-ai-assistants).

### Lagað í 0.8.1

- **Tungumál í Studio.** Studio og pökkuðu útgáfurnar geta skipt um tungumál meðan keyrt er; áður voru þær eingöngu á ensku. Þetta er ekki enn prófað á öllum kerfum: láttu okkur vita ef tungumálið breytist ekki.
- **Val með yfirferðarglugga.** Uppsetningarforrit 0.8.1 bera með sér val með glugga þegar rétt í 0.8 vefútgáfunni; eldra uppsetningarforrit gerði það ekki.
- **Spjaldtölvur í lóðréttri stöðu.** Umframhæð netsins fer í teikniflötinn, og blaðauppsetningin byrjar við 760 px eða minna.

### Ekki í þessari útgáfu enn

- **Senda NC á vél** er ekki komið út.
- **Vindálag** fyrir steypu er ekki smíðað, og steypu- og undirstöðuathuganirnar eru fyrir verkfræðing að yfirfara.
- **Kóðaundirritun.** Windows-uppsetningarforritin og macOS .dmg-skráin eru ekki undirrituð, svo Windows gæti varað við og macOS biður um hægrismell, síðan Opna.

Eldri breytingar eru í [Nýtt í 0.7](topic:whats-new-0-7).
