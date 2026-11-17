---
title: Kontrollera betongdelar och ta fram seismiska laster
summary: Ställ in armeringen i betongbalkar och -pelare, kontrollera dem enligt ACI 318-19, ta fram ekvivalenta horisontella krafter enligt ASCE 7-22 på styva bjälklag, och se våningsdrift. Ett hjälpmedel för en ingenjör att granska.
keywords: betong, armerad betong, ACI 318, ACI 318-19, armering, balk, pelare, skjuvning, ringar, seismisk, jordbävning, ekvivalent horisontell kraft, ELF, ASCE 7-22, drift, våningsdrift, bjälklag, styvt diafragma, våningsvikt, utnyttjandegrad, utnyttjande, konstruktion, ingenjör
from: 94d3001d
---

Blocken {{ui:Betongdelar}} och {{ui:Seismiska laster}} i fliken {{ui:Analys}} kontrollerar armerade betongbalkar och -pelare, och tar fram de horisontella krafterna från en jordbävning på bjälklagen i en ram. Båda följer körningen i fliken {{ui:Analys}} och sparas med modellen.

:::warning
Resultaten är **för kontroll av en ingenjör**: ett hjälpmedel tills någon har granskat dem. Betongkontrollerna använder förstaordningskrafter, förutom att en pelare i en ram som du kallar icke-sidoförskjutbar dimensioneras för sitt förstorade moment, utan sidoförskjutningsförstoring, utan vridningsdimensionering, utan seismisk detaljering (ACI kapitel 18) och utan detaljering av ringar. De seismiska lasterna utelämnar redundansfaktorn, den vertikala seismiska effekten, vridningsförstoring och P-delta-effekter. Vindlaster finns inte ännu.
:::

## Rita delarna

Rita betongdelar som rektanglar: en {{ui:Plåt}}-profil som `PL400x400` för en pelare och `PL300x600` för en balk ger tvärsnittet. Pelare och balkar placeras som alla andra delar.

## Ställ in tvärsnitten

Blocket {{ui:Betongdelar}} listar alla tvärsnitt som delarna använder. Tryck på {{ui:Ställ in som betong…}} på dem som är betong. DetailCraft läser bredden **b** (längs delens egen y-axel) och djupet **h** (längs z) från den ritade profilen, och frågar sedan efter:

- **täckskiktet** till stängernas centrum, och **överst**, **underst** och **sidoarmering** (hur många och vilken diameter) för en balk, eller en **pelarkorg** (stänger längs b och längs h, vilken diameter, spiralringar) för en pelare;
- **ringarna**: ben, diameter och avstånd;
- vad delen **agerar som**: en balk, en pelare, eller avgjort från dess krafter (en vertikal del, eller en som bär mer än 0.10 f′c Ag, är en pelare).

Ange f′c, stångens sträckgräns fy och ringarnas sträckgräns fyt (högst 420 MPa räknas för skjuvning), K och om ramen är sidoförskjutbar eller icke-sidoförskjutbar ovanför dem. En sektion som ställts in som betong analyseras som betong: E = 4700 √f′c, 2400 kg/m³, och som standard med **sprickade sektioner** (pelare 0.70 Ig, balkar 0.35 Ig; ACI 318-19 tabell 6.6.3.1.1(a)). Välj {{ui:Bruttotvärsnitt}} för att stänga av det.

## Gör kombinationer och kontrollera

Ge lastfallen deras typ, och välj sedan {{ui:Skapa kombinationer}}: ACI 318-19 tar hållfasthetskombinationerna från ASCE 7 (§5.3.1). Tryck på {{ui:Kontrollera betong}} och varje del får en utnyttjandegrad, färgad i modellen som stålkontrollerna: böjning och minimiarmering (22.2, 9.6.1.2), dragstyrd töjning (9.3.3.1), skjuvning med ringarna (22.5, 9.6.3), ringavstånd, och normalkraft med moment för pelare (22.4, med Bresslers metod för tvåaxlig böjning). En del där den ritade sektionen skiljer sig från det b × h du skrev in visas som *delvis kontrollerad*, liksom en slank pelare eller vridning över gränsvärdet: de dimensioneras inte.

Delar som överskrider sin kapacitet listas i {{ui:Problem}}; godkänn en med en motivering, eller rätta sektionen.

## Bjälklag och seismiska laster

Ett bjälklag är en nivå där ramen hålls samman av en styv platta (ett **styvt diafragma**). Tryck på {{ui:Hitta våningar}} i blocket {{ui:Seismiska laster}}: den tar nivåerna där två eller fler balkar möts. Ge sedan varje bjälklag dess **seismiska vikt**, inskriven eller läst. {{ui:Hämta vikter från fall}} summerar de vertikala lasterna i de fall du ger en faktor (egentyngden är 1; lägg till 0.25 på ett lagerlastfall eller snö på ett platt tak, som ASCE 7-22 12.7.2 kräver). Varje nods vertikala last går till bjälklaget vid eller ovanför den, så en pelare mellan två bjälklag ger hälften av sin vikt till vardera.

Fyll i dimensioneringsvärdena: SDS, SD1, S1, R, Ie, Cd, TL, bärverkssystemet (för perioden) och riskklassen. {{ui:Skapa seismiska fall}} räknar sedan ut perioden utifrån byggnadens höjd (12.8.2.1), basskjuvkraften V = Cs W (12.8.1), fördelar den uppåt på bjälklagen (12.8.3) och skriver fyra lastfall, i X och Y med 5 % oavsiktlig vridning i varje riktning (12.8.4.2). De våningsvisa krafterna och kontrollen av våningsdrift (12.8.6, tabell 12.12-1, driften Cd δxe / Ie mot 0.020 hsx) visas efter en körning; en drift över sin gräns är också ett problem. Tryck på {{ui:Skapa kombinationer}} igen för att föra in de seismiska fallen i kombinationerna.

**Perioden från analysen.** Den approximerade perioden Ta kommer från byggnadens höjd. När du har kört analysen med de seismiska fallen läser {{ui:Hämta egenperioden från analysen}} hur långt varje bjälklag rörde sig under krafterna och räknar ut perioden med Rayleighs metod, T = 2π √(Σ w δ² / (g Σ f δ)), en gång för X och en för Y; de seismiska fallen görs om med den. Den använda perioden är aldrig större än Cu·Ta (ASCE 7-22 12.8.2), så en mjuk modell kan inte sänka basskjuvkraften under det. Hämta perioden igen efter den andra körningen: den stabiliseras på ett eller två steg. Avmarkera {{ui:Egenperiod från analysen}} för att gå tillbaka till Ta.

**Slanka pelare (ACI 318-19 6.6.4.5).** För en ram du kallar icke-sidoförskjutbar dimensioneras en pelare vars k·ℓu/r är över 34 + 12·M1/M2 (högst 40) för det förstorade momentet Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² med (EI)eff = 0.4 Ec Ig / (1 + βdns), och minimimomentet Pu (15 + 0.03 h). βdns (0.6 till att börja med) är andelen av den dimensionerande normalkraften som är bestående: skriv in ditt eget värde. En pelare vars Pu når 0.75 Pc underkänns med sin egen kontroll. Rapporten listar varje slank pelares värden. I en **sidoförskjutbar** ram är en slank pelare fortfarande "delvis kontrollerad": dess förstoring kräver en andra ordningens analys, som inte finns ännu.

**Plattor.** När modellen har plåtar tar blocket {{ui:Plattarmering}} plåtmomenten från varje hållfasthetskombination och, enligt Wood–Armer-regeln (böjning och vridning tillsammans), räknar ut stålet varje lager behöver per meter: undertill och upptill, i x och i y. Du anger tjocklek, täckskikt och stänger; tabellen visar behov mot given armering och enkelriktad skjuvning mot φVc, och ett lager som inte räcker är ett problem med sin paragraf. Nedböjning, genomstansning vid pelare och randarmering vid öppningar täcks inte, och ett moment över ett stöd konvergerar långsamt med fyrnodsplattor.

Varje bjälklag du listar blir ett styvt diafragma i analysen: dess balkar bär ingen normalkraft från bjälklagets rörelse. CraftScript-exporten är inte gjord för en modell med bjälklag.

## Rapporten

{{ui:Rapport (PDF)}} och {{ui:Rapport (CSV)}} får betongtabellerna (antaganden, utnyttjande per del, varje paragraf), de seismiska parametrarna och basskjuvkraften, krafterna på bjälklagen och drifttabellen.
