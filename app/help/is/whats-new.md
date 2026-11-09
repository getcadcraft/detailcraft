---
title: Nýtt í 0.8 og 0.8.1
summary: Uppsetningarkvikmynd úr álagstöflu krana, sjálfstýring tenginga, þéttleikakort fyrir járnabindingu, undirstöðuathuganir, timbur- og léttstálsrammar, smíðanleika- og suðuaðgengisathuganir, birgðir birgja, hvað brotnar fyrst, endurreikningur í beinni, fleiri steinsteypuathuganir og lagfæringar í 0.8.1.
keywords: hvað er nýtt, útgáfuskýrslur, breytingaskrá, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, uppsetning, krani, álagstafla, kvikmynd, sjálfstýring, tengingar, járnabinding, þéttleiki, undirstaða, undirstöður, botnnet, setning, rammi, timbur, léttstál, klippilisti, smíðanleiki, aðgengi suðu, birgir, birgðir, afgreiðslutími, hvað brotnar fyrst, í beinni, steinsteypa, jarðskjálfti, plata, tungumál, aðstoðarmaður
from: 6e33e052
---

Þetta er það sem breyttist í DetailCraft 0.8 (1. nóvember 2026) og 0.8.1 (2. nóvember 2026), miðað við 0.7. 0.7 athugaði stálstangir; 0.8 skipuleggur lyftur, leggur til tengingar, athugar undirstöður og járnabindingu, og rammar timbur- og léttstálsveggi, gólf og þök.

## Nýtt

### Uppsetning

- **Uppsetningaráætlun og kvikmynd.** Í flipanum {{ui:Erection}} lýsir þú krana (hvar hann stendur, hæsta krók hans, lyftibúnaðinum sem er ekki í töflunni) og slærð inn raðirnar úr álagstöflu hans. DetailCraft lyftir líkaninu einni samsetningu í einu, í áfangaröð og hæð fyrir hæð, og athugar hverja lyftu gegn töflunni við radíus hennar og gegn því öryggisbili sem þú setur. {{ui:Save movie}} skrifar eina HTML-skrá sem spilast án tengingar í hvaða vafra sem er, líka í síma. Lyftur sem eru yfir töflunni, utan hennar eða of háar eru í {{ui:Problems}}. Þetta er áætlun út frá þínum tölum, ekki lyftuáætlun. Sjá [Uppsetningaráætlun og kvikmynd](topic:erection-movie).

### Tengingar

- **Sjálfstýring tenginga.** Flipinn {{ui:Autopilot}} skoðar hverja samskeyti sem hefur enga tengingu og leggur til eina út frá lögununum: súlufótarplötur, klippiplötur, endaplötur fyrir bita sem þú merkir sem beygjubita, skeyti og kjálkaplötur. Gefðu jafndreift álag eða einn endaskurð, og fjöldi bolta fylgir hönnunarstyrk boltans. {{ui:Add them all}} bætir tillögunum við sem eitt afturkallsskref. Þetta eru upphafsgildi til yfirferðar, ekki tengihönnun.
- **Athuganir á smíðanleika.** {{ui:Problems}} fyrir bolta sem lykill nær ekki að, bolta sem eru of þétt fyrir innstunguna, hornsuður utan stærðarmarka þeirra og holu snið sem halda vatni. Aðgengi suðu er nýtt: hringsuða sem suðutorka nær ekki að er skráð með hlutanum sem er í veginum og hlutfalli suðunnar sem verður fyrir áhrifum. Sjá [Athuganir á smíðanleika](topic:constructability).

### Undirstöður og járnabinding

- **Undirstöðuathuganir.** Flipinn {{ui:Foundation}} athugar undirstöður, samsettar undirstöður og botnnet á jarðveginum sem þú lýsir: burðarþol, skrið og velti frá þjónustuálagi; beygju, skurð, gegnumskurð, festilengd og lágmarksstál frá margfölduðu álagi (ACI 318-19). Súla nálægt jaðri eða horni er athuguð með þversniðinu sem jaðar undirstöðunnar sker af. Setning kemur út frá stuðli jarðvegsins, sveigjanlegt botnnet er leyst á fjöðrum út frá undirstuðli, og staurahópar og veggir gegn jarðvegsþrýstingi hafa eigin reiti. Súlukraftar má slá inn eða taka úr {{ui:Analysis}}. Sjá [Undirstöðuathuganir](topic:foundation-checks).
- **Þéttleikakort fyrir járnabindingu.** Flipinn {{ui:Congestion}} teiknar hitakort af hverri undirstöðu séðri að ofan: þar sem stengurnar skilja of lítið rými eftir fyrir steypuna að komast niður, miðað við regluna um frítt bil og, ef þú gefur þau upp, stærsta fyllefnið og titrarahausinn. Sjá [Þéttleikakort fyrir járnabindingu](topic:rebar-congestion).

### Rammi og birgðir

- **Timbur- og léttstálsrammi.** Flipinn {{ui:Framing}} rammar veggi-, gólf- og þakeiningar með hverju stykki, klippilista, birgðum sem á að kaupa og verkstæðisteikningu í mælikvarða. {{ui:Place as members}} setur stykkin í líkanið, og {{ui:PDF sheets}} vistar eitt blað fyrir hverja einingu. Stærðir, bil og yfirstykki eru þín: DetailCraft athugar ekki að þau beri álagið. Sjá [Timbur- og léttstálseiningar](topic:framing-panels).
- **Birgðir birgja og afgreiðslutímar.** Flipinn {{ui:Supply}} les birgðalista birgja (CSV) og sýnir fyrir hvert snið sem klippilistinn kaupir hvort nóg sé til á lager og hversu lengi bið er. Skortur og seinar sendingar eru í {{ui:Problems}}. Ekkert er pantað. Sjá [Birgðir birgja og afgreiðslutímar](topic:supplier-stock).

### Greining og hönnun

- **Hvað brotnar fyrst?** Í flipanum {{ui:Analysis}} finnur hnappurinn ráðandi styrkssamsetninguna, veikasta stykkið, hversu mikið álagið má aukast áður en fyrsta stykkið nær mörkum sínum, og veikustu endaplötuna eða klippiplötuna þar sem skurðstyrkur bolta þeirra er þekktur. Til þess þarf fyrst samsetningarnar og hönnunarstaðal. Burðarþol, blokkarskurður, suður og prying eru ekki athuguð. Tengdi aðstoðarmaðurinn þinn getur spurt sömu spurningar.
- **Í beinni.** Hakaðu við {{ui:Live: solve again after each edit}} og grindin er leyst aftur eftir hverja breytingu.
- **Steinsteypa og fleira.** Grannur súla í grind án hliðarhreyfingar er hönnuð fyrir stækkaða beygjuvægið sitt (ACI 318-19 6.6.4.5). Jarðskjálftatímabilið má taka úr greiningunni með aðferð Rayleighs. Plata úr plötum fær stálið sem hvert lag þarf út frá beygjuvægjum sínum, og einnig skurð í einni stefnu. Sjá [Athugaðu steinsteypustykki og búðu til jarðskjálftaálag](topic:concrete-and-seismic).
- **Fyrir verkfræðing að yfirfara.** Niðurstöður undirstöðu-, steinsteypu- og Hvað brotnar fyrst? eru hjálpartæki. Vindálag er ekki smíðað.

### Í öllum forritum

- **Tungumál.** Hjálpin er á 54 tungumálum. Þau sem eru önnur en enska eru vélþýðingar þar til innfæddur þýðandi hefur lesið þau; tíu eru ný (litháíska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippseyska, svahílí, úsbekska).
- **Tækjastikulínur.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} velur umbrot, 2 línur eða 1 línu. Stika sem passar nú þegar helst óbreytt; hinar fletta til hliðar.
- **Eiginleikanet.** Reitir undirstöðunnar nota sameiginlega netið: fellanlega flokka og þéttan þéttleika. Innsláttur reikninga eins og 2*450 virkar enn.
- **Inntakstæki.** Snertiborð, penni, þrívíddarmús, stýripinni og MIDI geta stjórnað forritunum. Sjá [Vafra í þrívídd](topic:navigate-3d).
- **Vandamálaspjaldið.** Viðvaranir nýju athugananna hér að ofan birtast í sama {{ui:Problems}}-spjaldinu og áður.
- **Tengdu gervigreindina þína.** Þinn eigin aðstoðarmaður, tengdur í gegnum CadCraft Studio, virkar með öllum átta forritunum og sér aðeins það sem þú leyfir. Tenging með einum smelli, hýsti tengillinn og þinn eigin API-lykill í Studio eru enn á leiðinni. Sjá [Notaðu DetailCraft með gervigreindaraðstoðarmanni](topic:use-with-ai-assistants).

## Lagað í 0.8.1

- **Tungumál í Studio.** Studio og pökkuðu útgáfurnar geta skipt um tungumál meðan þær keyra; áður voru þær eingöngu á ensku. Það er ekki enn prófað á öllum kerfum: láttu okkur vita ef tungumálið breytist ekki.
- **Valið með glugga þvert yfir.** Uppsetningarforrit 0.8.1 hafa valhegðunina með glugga sem var þegar rétt í 0.8 vefútgáfunni; eldra uppsetningarforrit hafði hana ekki.
- **Spjaldtölvur í lóðréttri stöðu.** Laust pláss fyrir hnit fer í strigann, og blaðumbrotið byrjar við 760 px eða minna.

## Ekki í þessari útgáfu enn

- **Senda NC í vél** er ekki komið út.
- **Vindálag** fyrir steinsteypu er ekki smíðað, og steinsteypu- og undirstöðuathuganirnar eru fyrir verkfræðing að yfirfara.
- **Undirritun kóðans.** Windows-uppsetningarforritin og macOS .dmg eru ekki undirrituð, svo Windows gæti varað við og macOS biður um hægrismell og síðan Opna.

Eldri breytingar eru í [Nýtt í 0.7](topic:whats-new-0-7).
