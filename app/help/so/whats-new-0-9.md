---
title: Waxa cusub ee 0.9 (hore)
summary: Cabbirrada birta UK ee Blue Book iyo angles aan isle'egin, naqshadaha shaqada ee qayb kasta hal PDF ah, My profiles ee qaabab gaar ah, P-Delta iyo dhaqdhaqaaqyada dabiiciga ah, culeysyada dabaysha ee ASCE 7, goobta dhulgariirka iyo isku-darka, iyo kursoriyada tooska ah oo leh Follow.
keywords: waxa cusub 0.9, nuqul hore, waxa cusub, whats new, sii-deynta, changelog, 0.9, birta UK, blue book, ub, uc, pfc, shs, rhs, chs, angle aan isle'egin, naqshadda shaqada, xaashiyo, calaamadda qaybta, pdf, my profiles, qaab gaar ah, p-delta, dalab labaad, dhaqdhaqaaqa dabiiciga ah, finite elements, modal mass, culeyska dabaysha, asce 7, dhulgariir, goobta dhulgariirka, usgs, isku-darka culeysyada, lrfd, asd, tooska, kursoriyada, follow, dadka, tooltips, 0.8, 0.8.1, nooca, astaamaha cusub, rakibidda, crane, chart-ka culeyska, filim, autopilot, isku-xidhka, rebar, xirmada, aasaaska, footing, mat, settlement, qaab-dhismeed, timber, light-gauge, cut list, constructability, weld access, bixiye, stock, waqtiga sugitaanka, what breaks first, kaadhka, dhulgariir, slab, luqadaha, caawiye
from: ab0c7f05
---

Tani waa waxa isbedelay DetailCraft 0.9, marka la barbardhigo 0.8.1. 0.9 wuxuu keenayaa cabbirrada birta UK, naqshad shaqo oo qayb kasta hal jeer, tab {{ui:Falanqayn}} oo weyn qaab-dhismeedka, iyo muuqaal ah kursoriyada kuwa kale marka aad wada shaqaynayso.

## Cusub

### Birta UK iyo naqshadaha shaqada

- **Cabbirrada birta UK.** Liisaska profile-ka hadda waxay leeyihiin 976 cabbir oo laga soo qaatay Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS iyo RHS, iyadoo qaybaha hollow ee birta qaboojisay la kala saaray (magacyadoodu waxay ku bilaabmaan CF). Magacyada waxaa lagu qoraa qoyska marka hore, sida UB305x165x40 ama SHS100x100x5.0, iyo sidoo kale waa shaqeysaa in aad u qortid sida naqshadaha ay u qoraan: 305x165x40 UB, L100x100x10, SHS100x5. Eeg [Liiska profile-yada](topic:profile-catalog).
- **Angles aan isle'egin.** Angles-ka UEA waxay haystaan labada leg ilaa IFC soo-galinta iyo soo-saarka, iyo ilaa faylasha NC, muraayaddu waxay qaybta u rogtaa dhamaadkeeda ilaa dhamaadka kale.
- **Dhammaan naqshadaha shaqada isku mar.** Dooro {{ui:Shop drawing}} koox {{ui:Output}} hoostiisa adigoo aan wax dooran. Daaqaddu waxay liisteeysaa calaamad qayb kasta, waxay hore u eegi kartaa mid kasta, {{ui:Soo deji dhammaan}} waxay kaydisaa hal PDF oo bog kasta calaamad u ah, oo cinwaan leh "Xaashi 3 ka 42" mid kastaba. {{ui:Soo deji PDF}} waxay kaydisaa midka aad eegeyso. Qaybaha kanaalyada, angles-ka iyo qaybaha hollow hadda waxay helaan xaashiyo sidoo kale. Eeg [Samee naqshadaha shaqada](topic:shop-drawings).
- **Qaababka gaarka ah (My profiles).** Qaab gaar ah hadda waa la kaydin karaa moodeel kasta oo cusub. Foomka Custom profile, ka reeb **{{ui:Kaydi ku jira My profiles}}** oo la hubiyay; liiska {{ui:My profiles}} ee hoosta wuxuu leeyahay {{ui:Keep}}, {{ui:Use here}} iyo {{ui:Remove}}. Liiska waxaa lagu kaydiyaa browser-kan (ilaa 200), ma aha akoonkaaga. Eeg [Plates iyo profiles](topic:plates-and-profiles).

### Falanqayn

- **Dalab labaad (P-Delta).** Calaamadee {{ui:Dalab labaad (P-Delta)}} oo ku xiga Run tab {{ui:Falanqayn}}, xoogagga axial-ka waxay ku shaqeeyaan frame-ka la foorarsaday. Saxanka iyo dabaqyada adag waxay sii joogaan heer-koowaad, digniin ayaa la muujiyaa. Eeg [Xoogagga, falcelinta iyo foorarsashada](topic:frame-analysis).
- **Dhaqdhaqaaqyada dabiiciga ah.** Block-ka {{ui:Finite elements: natural frequencies}} ee hoosta natiijooyinka wuxuu helaa qaababka ugu hooseeya ee isla moodeelka, oo leh muddo iyo effective modal mass, wuxuuna muujiyaa qaab moodeelka ku jira. Eeg [Xoogagga, falcelinta iyo foorarsashada](topic:frame-analysis).
- **Culeysyada dabaysha iyo goobta dhulgariirka.** Saddex block oo cusub tab {{ui:Falanqayn}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} iyo {{ui:ASCE 7 load combinations}}. Eeg [Dabaysha, goobta dhulgariirka iyo isku-darka ASCE 7](topic:wind-seismic-combinations).

### Wada shaqaynta

- **Kursoriyada iyo magacyada.** Session Live ah, saarka (pointer) mid kasta waxaa lagu rinjiyaa moodeelka magaciisa iyo midabkiisa, wixii uu doortayna waxaa lagu siiyaa sanduuq.
- **Raac qof.** Fur {{ui:People}} session-ka oo dooro {{ui:Follow}} magac kasta; muuqaalkaaga wuxuu u socdaa kan kaaga. Martida ayaa dooran karta {{ui:Ask everyone to follow me}}. Eeg [Raacida qof session Live ah](topic:follow-in-live).

### Dhammaan apps-ka

- Tooltips waa Bootstrap tooltips, kaadhka bilowga wuxuu leeyahay badhanka xidhista, safafka tab-ka way u jiifaan dhinacyada marka aanay ku habboon, magaca tab-ka browser-ka wuxuu muujiyaa dukumeentiga furan oo ku xiga DetailCraft iyo CadCraft.

## Waa la hagaajiyay

- Qaab gaar ah ayaa lumay markaad bilowdo moodeel cusub.
- Qaybaha kanaalyada, angles-ka iyo qaybaha hollow ayaa ka maqnaa xaashiyaha naqshadaha shaqada.

## Xuduudaha runta ah

- Block-yada dabaysha, dhulgariirka iyo finite element waa caawimo hubin ah. Injineerkaaga ayaa dib u eegaya natiijooyinka; ma aha hubin code. Raadinta USGS waxaa lagu tijaabiyay adeeg beddel ah, ma aha adeegga toosan.
- Finite elements iyo P-Delta waxaa lagu hubiyay jawaabo gacan iyo jawaabo xisaab xuruf ah, ma aha dhismo dhab ah. Falanqaynta buckling weli lama dhisin.
- Ma jiro fabricator UK ah oo isticmaalay cabbirrada UK weli, faylasha NC ee angles aan isle'egin ma shaqeynin mashiin.
- Xaashiyaha naqshadaha shaqada waa PDF oo keliya.
- Luqadaha ka baxsan Ingiriisiga waa qabyo mashiin ah ilaa ay akhriyaan dad afka hooyo ku hadla.
- Rakibayaasha Windows lama saxeexin code (Macluumaad dheeraad ah, ka dib Orod si kastaba); sawirka disk-ka macOS lama notarize gareyn (midig guji, ka dib Fur).

Isbedelada hore waxay ku jiraan qoraalada 0.8 iyo 0.8.1 ee hoose bogaan.

## Hore: 0.8 iyo 0.8.1

Tani waa waxa isbedelay DetailCraft 0.8 (1 November 2026) iyo 0.8.1 (2 November 2026), marka la barbardhigo 0.7. 0.7 wuxuu hubiyay xubnaha birta; 0.8 wuxuu qorsheeyaa qaadista, wuxuu soo jeediyaa isku-xidhka, wuxuu hubiyaa aasaaska iyo rebar-ka, wuxuuna dhisaa qaab-dhismeedka timber iyo darbiyada, dabaqyada iyo saqafyada light-gauge.

### Cusub

**Rakibidda**

- **Qorshaha rakibidda iyo filimka.** Tab-ka {{ui:Erection}}, sharax crane (meesha uu taagan yahay, hook-ka ugu sareeya, rigging-ka aan ku jirin chart-ka), oo qor safafka chart-ka culeyska crane-ka. DetailCraft wuxuu qaadaa moodeelka hal assembly mar, wax walba marka ay ku dhacaan phase-ka iyo tier kasta, oo wuxuu hubiyaa qaadista kasta chart-ka radius-kiisa iyo margin-ka aad dejisay. {{ui:Save movie}} wuxuu qoraa hal fayl HTML ah oo ciyaaraya offline browser kasta, xataa telefoon. Qaadista ka baxda chart-ka, ka dambaysa ama sarreysa waxay ku jiraan {{ui:Problems}}. Waa qorshe ka numberkaaga, ma aha lift plan. Eeg [Qorshaha rakibidda iyo filimka](topic:erection-movie).

**Isku-xidhka**

- **Autopilot-ka isku-xidhka.** Tab-ka {{ui:Autopilot}} wuxuu eegaa isku-xidh kasta oo aan lahayn oo wuxuu soo jeediyaa mid ka soo baxa qaababka: base plates, shear tabs, end plates xubnaha aad calaamadiso sida moment beams, splices iyo gussets. Siiso culeys isku mid ah ama shear hal dhamaad, tirada boolt-ka waxay raacaysaa xoogga naqshadeynta boolt-ka. {{ui:Add them all}} wuxuu ku daraa soo jeedinta hal tallaabo oo undo ah. Waa qiyamaha bilowga ah ee la eego, ma aha naqshadeynta isku-xidhka.
- **Hubinta dhismaha.** {{ui:Problems}} waxay u hubisaa boolt uu furaha gaari karin, boolt-yo u dhow socket-ka, laxaamado fillet ah oo ka baxsan xadka cabbirkooda, iyo qaybaha hollow ee biyo haysta. Weld access waa cusub: laxaamad fillet oo dhan ah oo ay gaari weydo meel-dabka welder-ka, waxaa lagu liisteeyaa qaybta ku jirta jidka iyo qaybta laxaamadda ee ay saamaysay. Eeg [Hubinta dhismaha](topic:constructability).

**Aasaaska iyo rebar-ka**

- **Hubinta aasaaska.** Tab-ka {{ui:Foundation}} wuxuu hubiyaa footings, footings isku-dhafan iyo mats ciidda aad sharaxday: bearing, sliding iyo overturning culeysyada adeegga; flexure, shear, punching, development iyo birta ugu yar culeysyada factored (ACI 318-19). Tiir ku dhow geesha ama xaga ayaa lagu hubiyaa qaybta ka jarmay xaga footing-ka. Settlement waxaa laga helaa modulus-ka ciidda, mat-ka dabacsan waxaa lagu xalliyaa springs oo ka yimid subgrade modulus, pile groups iyo retaining walls waxay leeyihiin panels gaar ah. Culeysyada tiirarka waa la qori karaa ama laga qaadi karaa {{ui:Analysis}}. Eeg [Hubinta aasaaska](topic:foundation-checks).
- **Khariidada xirmada rebar-ka.** Tab-ka {{ui:Congestion}} wuxuu sawiraa khariidad kulul footing kasta sida laga arko sare: meelaha bararku ay uga tageen goob yar oo beton ah inuu hoos u galo, marka loo barbardhigo xeerka farqiga ugu yar, iyo haddii aad siiso, aggregate-ka ugu weyn iyo madaxa vibrator-ka. Eeg [Khariidada xirmada rebar-ka](topic:rebar-congestion).

**Qaab-dhismeed iyo bixinta**

- **Qaab-dhismeedka timber iyo light-gauge.** Tab-ka {{ui:Framing}} wuxuu qaabeeyaa panels-ka darbiga, dabaqa iyo saqafka qayb kasta, cut list, stock-ka la iibsanayo iyo naqshad shaqo oo cabbir ku saabsan. {{ui:Place as members}} wuxuu qaybaha dhigaa moodeelka, {{ui:PDF sheets}} wuxuu kaydiyaa hal xaashi panel kasta. Cabbirrada, masaafada iyo headers-ka waa kuwaaga: DetailCraft ma hubiyo inay qaadayaan culeyska. Eeg [Panels-ka qaab-dhismeedka timber iyo light-gauge](topic:framing-panels).
- **Stock-ka bixiyaha iyo waqtiga sugitaanka.** Tab-ka {{ui:Supply}} wuxuu akhrinayaa liiska stock-ka bixiyaha (CSV) wuxuuna muujiyaa, qaybta kasta oo cut list-ku iibsanayo, in uu ku filan yahay stock-ka iyo inta sugitaanku dheer tahay. Qaybaha yaraanta iyo kuwa daahay waxay ku jiraan {{ui:Problems}}. Wax la dalbo ma jiro. Eeg [Stock-ka bixiyaha iyo waqtiga sugitaanka](topic:supplier-stock).

**Falanqayn iyo naqshadeyn**

- **Maxay jabaysaa marka hore?** Tab-ka {{ui:Analysis}}, badhanku wuxuu helaa isku-darka xoogagga ee xukuma, xubinta ugu daciifsan, inta culeysyada ay kori karaan ka hor inta xubinta koowaad ay gaarto xadkeeda, iyo end plate-ka ama shear tab-ka ugu daciifsan halkaas oo xoogga shear-ka boolt-kiisa la yaqaan. Waxay u baahan tahay isku-darka iyo code-ka naqshadda marka hore. Bearing, block shear, laxaamadaha iyo prying lama hubin. Caawiyahaaga AI-ga ah ayaa weydiin kara isla wax.
- **Live.** Calaamadee {{ui:Live: solve again after each edit}} frame-ka mar kasta oo wax la beddelo ayaa dib loo xalliyaa.
- **Kaadhka, wax dheeraad ah.** Tiir slender ah oo frame aan sway lahayn waxaa loo naqshadeeyaa momentkiisa weyneeyay (ACI 318-19 6.6.4.5). Muddada dhulgariirka waxaa laga qaadi karaa falanqaynta iyada oo la adeegsanayo habka Rayleigh. Slab ka samaysan plates waxay helaa birta ay dabaqa kasta u baahan tahay momentsyadiisa, iyo one-way shear. Eeg [Hubi kaadhka oo samee culeyska dhulgariirka](topic:concrete-and-seismic).
- **Injineer si uu u hubiyo.** Natiijooyinka aasaaska, kaadhka iyo What breaks first waa caawimo. Culeyska dabaysha lama dhisin.

### Dhammaan apps-ka

- **Luqadaha.** Caawinta waxay ku jirtaa 54 luqadood. Kuwa ka baxsan Ingiriisiga waa qabyo mashiin ah ilaa ay akhriyaan dad afka hooyo ah; toban waa cusub (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek).
- **Safafka qalabka.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} wuxuu doortaa wrap, 2 safaf ama 1 safaf. Bar-ka horeba ku habboon wuu sidiisa sii joogaa; kuwa kale waxay u jiifaan dhinacyada.
- **Property grid.** Goobaha footing-ka waxay isticmaalaan grid-ka la wadaago: qaybo la xidhi karo iyo qaab dhow. Xisaabta qoran sida 2*450 weli way shaqeysaa.
- **Qalabka gelinta.** Trackpad, pen, 3D mouse, controller iyo MIDI waxay wadi karaan apps-ka. Eeg [Ku dhaqaaq 3D](topic:navigate-3d).
- **Panelka dhibaatooyinka.** Digniinta hubinta cusub ee kor ku xusan waxay ku dhex muuqdaan panelka {{ui:Problems}} sidii hore.
- **Ku xidh AI-gaaga.** Caawiyahaaga gaarka ah, oo lagu xidhay CadCraft Studio, wuxuu la shaqeeyaa dhammaan siddeed apps-ka wuxuuna arkaa kaliya wixii aad oggolaatay. Isku-xidhka hal-riix, connector-ka martida iyo API key-gaaga ee Studio weli way iman doonaan. Eeg [Isticmaal DetailCraft AI assistant-ka](topic:use-with-ai-assistants).

### Waa la hagaajiyay 0.8.1

- **Luqadaha Studio.** Studio iyo nooca lagu xirmay waxay bedeli karaan luqadda wakhtiga socodka; ka hor waxay ahaayeen Ingiriisi oo keliya. Weli lama tijaabin dhammaan platforms-ka: nagu sheeg haddii luqaddu ay ku kala bedelmin.
- **Doorashada daaqadda isgoyska.** Installers-ka 0.8.1 waxay leeyihiin habka doorashada daaqadda ee sax ah ee web build-ka 0.8; installer-ka hore ma lahayn.
- **Tablets ee toosan.** Meesha grid-ka ee dheeraadka ah waxay u gudubtaa canvas-ka, layout-ka xaashiga wuxuu bilaabmaa 760 px ama ka yar.

### Weli kuma jirin nooca tan

- **Dir NC mashiin** lama sii daayay.
- **Culeysyada dabaysha** ee beton lama dhisin, hubinta kaadhka iyo aasaaska waa in injineer dib u eego.
- **Code signing.** Installers-ka Windows iyo .dmg-ga macOS lama saxeexin, sidaas darteed Windows waxay digi karta, macOS waxay weydiinaysaa midig guji, ka dib Fur.

Qoraalada isbedelada hore waxay ku jiraan [Waxa cusub ee 0.7](topic:whats-new-0-7).
