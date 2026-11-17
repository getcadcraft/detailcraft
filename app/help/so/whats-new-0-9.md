---
title: Waxa cusub ee 0.9
summary: Cabbirrada birta UK ee Blue Book iyo xagalada aan isku mid ahayn, naqshadaha shaqada ee qayb kasta oo ku jira hal set PDF ah, My profiles oo loogu talagalay profile-yada gaarka ah, P-Delta iyo dhaqdhaqaaqyada dabiiciga ah, culeysyada dabaysha ee ASCE 7, goobta dhulgariirka iyo isku-darka, iyo kursar-yo nolol ah oo leh Raac.
keywords: waxa cusub, nooca hore, sii-deynta, changelog, 0.9, birta UK, blue book, ub, uc, pfc, shs, rhs, chs, xagal aan isku mid ahayn, naqshadda shaqada, shop drawing, set-ka xaashiyaha, lambarka qaybta, pdf, My profiles, profile gaar ah, P-Delta, dhaqdhaqaaq labaad, dhaqdhaqaaqa dabiiciga ah, finite elements, modal mass, culeyska dabaysha, ASCE 7, dhulgariirka, site class, USGS, isku-darka culeysyada, LRFD, ASD, tooska, kursar, raac, dadka, tooltips, release notes, changelog, isbeddelo, 0.8, 0.8.1, nooca, astaamo cusub, rakibidda, cranes, load chart, movie, autopilot, isku-xidhka, rebar, xirmada birta, aasaas, qaab-dhismeed, timber, light-gauge, liis gooyo, constructability, weld access, bixiye, kaydka, waqtiga sugitaanka, waa maxay ugu horreeya ee jabta, tooska, kontaraydh, dhulgariirka, slab, luuqadaha, caawiye
from: 4c95a2de
---

Waa wixii isbedel ku yimid DetailCraft 0.9, marka la barbardhigo 0.8.1. 0.9 waxay keenaysaa cabbirrada birta UK, naqshad shaqo oo qayb kasta hal jeer, tab {{ui:Falanqayn}} oo weyn oo loogu talagalay qaab-dhismeedyada, iyo aragti ah isku-cursor-kooda markaad wada shaqeysaan.

## Cusub

### Birta UK iyo naqshadaha shaqada

- **Cabbirrada birta UK.** Liisaska profile-ka hadda waxay leeyihiin 976 cabbir oo ka yimid Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS iyo RHS, iyadoo godadka birta ee la qaabeeyay qaboojinta ay kala go'an yihiin (magacyadooda waxay ku bilaabmaan CF). Magacyada waxaa lagu qoraa qoyska marka hore, sida UB305x165x40 ama SHS100x100x5.0, waxaana sidoo kale shaqeysa in la qoro sida naqshadaha ay u sheegaan: 305x165x40 UB, L100x100x10, SHS100x5. Eeg [Liiska profile-yada](topic:profile-catalog).
- **Xagalada aan isku mid ahayn.** Xagalada UEA waxay ilaaliyaan labada lug ee IFC gelinta iyo ku baxa iyo faylasha NC, mirror-ku wuxuu qaybta rogaa darafkeeda.
- **Dhammaan naqshadaha shaqada hal jeer.** Dooro {{ui:Naqshadda shaqada}} kooxda {{ui:Wax soo saar}} iyadoo aan wax la dooran. Daaqadu wuxuu liistaa calaamad kasta oo qayb ah, wuxuu hor-eegi karaa mid kasta, {{ui:Soo deji dhammaan}} wuxuu keydiyaa hal PDF oo bog kasta uu u yahay calaamad, oo cinwaankeedu yahay "Sheet 3 of 42". {{ui:Soo deji PDF}} wuxuu keydiyaa midka aad eegayso. Kanaalada, xagalada iyo tuubooyinka godan hadda waxay helaan xaashiyo. Eeg [Samee naqshadaha shaqada](topic:shop-drawings).
- **My profiles.** Profile gaar ah hadda waa la kaydin karaa moodel kasta oo cusub. Foomka Custom profile, ka tag {{ui:Kaydi gudaha My profiles}} oo calaamad lagu sameeyay; liiska {{ui:My profiles}} ee hoosta ka taal wuxuu leeyahay {{ui:Kaydi}}, {{ui:Isticmaal halkan}} iyo {{ui:Ka saar}}. Liiska waxaa lagu kaydiyaa browser-kan (ilaa 200), ma aha akoonkaaga. Eeg [Plate-yada iyo profile-yada](topic:plates-and-profiles).

### Falanqaynta

- **Dhaqdhaqaaqa labaad (P-Delta).** Calaamadee {{ui:Dhaqdhaqaaqa labaad (P-Delta)}} xagga {{ui:Socodsii}} ee tab-ka {{ui:Falanqayn}}, xoogagga toosan ee dhaqdhaqaaqa waxay ku shaqeeyaan qaab-dhismeedka la foororsaday. Saxanada iyo dabaqyada adag waxay ku sii jiraan tallaabada kowaad, iyadoo digniin la siinayo. Eeg [Xoogagga, dhimmadaha iyo foororsashada](topic:frame-analysis).
- **Dhaqdhaqaaqyada dabiiciga ah.** Block-ga {{ui:Finite elements: natural frequencies}} ee hoosta natiijooyinka wuxuu helaa qaababka ugu hooseeya ee moodelkaas isku mid ah, oo leh muddada iyo effective modal mass, wuxuuna muujiyaa qaab moodelka dushiisa. Eeg [Xoogagga, dhimmadaha iyo foororsashada](topic:frame-analysis).
- **Culeysyada dabaysha iyo goobta dhulgariirka.** Saddex block oo cusub oo ku jira tab-ka {{ui:Falanqayn}}: {{ui:Culeysyada dabaysha (habka jihada ASCE 7)}}, {{ui:Goobta dhulgariirka iyo nidaamka (ASCE 7)}} iyo {{ui:Isku-darka culeysyada ASCE 7}}. Eeg [Dabaysha, goobta dhulgariirka iyo isku-darka ASCE 7](topic:wind-seismic-combinations).

### Wada shaqaynta

- **Kursarrada iyo magacyada.** Kulan Live ah, pointer-ka qof kasta waxaa lagu rinjiyeeyaa moodelka oo leh magaciisa iyo midabkiisa, wixii uu doortayna waxaa lagu hareeeyaa sanduuq.
- **Raac qof.** Fur {{ui:Dadka}} kulanka oo dooro {{ui:Raac}} magac kasta; aragtaadu way raacaysaa tiisa. Martiqaadaha wuxuu dooran karaa {{ui:Ku dalbo dhammaan inay i raacaan}}. Eeg [Raac qof kulan Live ah](topic:follow-in-live).

### Dhammaan barnaamijyada

- Tooltips waa Bootstrap tooltips, kaarka bilowga wuxuu leeyahay badhanka xirka, bararka tab-yada wuu ku dhex socdaa dhinac haddii aanay ku habboon, magaca tab-ka browser-ka wuxuu ku magacaabaa dokumentka furan oo ku xiga DetailCraft iyo CadCraft.
- **Caawiyayaasha AI ee tusaalaha.** Toban codsi oo shaqeysan oo caawiyahaaga gaarka ah (nadiifi sawirka, qorsho ururi, hubi sawirrada, weydii moodeelka su'aalo, isku-geeyo takeoff, isku day variant-ka qaybta…), mid kasta oo leh qalabyada uu isticmaalo iyo ogolaanshaha uu u baahan yahay, oo mid kasta baadhitaankeenu dib u socodsiiyo. Barnaamijyadu ma leeyihiin AI. Eeg [Tusaalooyin caawiyayaasha AI](common:assistants-recipes).

## La saxay

- Profile gaar ah ayaa lumay markii aad bilowday moodel cusub.
- Kanaalada, xagalada iyo tuubooyinka godan ayaa ka maqnaa set-ka naqshadaha shaqada.

## Xadka run ahaanshaha

- Block-yada dabaysha, dhulgariirka iyo finite element waa caawimo hubinta. Injineerkaagu wuu dib u eegaa natiijooyinka; ma aha hubinta code-ka. Raadinta USGS waxaa lagu tijaabiyay adeeg la mid ah, ma aha adeegga toosan.
- Finite elements iyo P-Delta waxaa lagu hubiyay jawaabaha gacanta iyo kuwa closed-form, ma aha dhismo dhab ah. Falanqaynta isku-buckling-ka lama dhisin.
- Ma jiro warshad birta UK ah oo weli isticmaashay cabbirrada UK, faylasha NC ee xagalada aan isku mid ahayn weli ma socon kombiyuutar.
- Set-ka naqshadaha shaqada waa PDF keliya.
- Luuqadaha ka sokow Ingiriisiga waa qabyo tarjumaad mashiin ah.
- Installer-ada Windows lama saxeexin code-ka (More info, ka dibna Run anyway); sawirka diskka macOS lama ansixin (midig-riix, ka dibna Open).

Isbeddelada hore waxay ku jiraan xusuusta 0.8 iyo 0.8.1 ee bogaan hoose.

## Hore: 0.8 iyo 0.8.1

Waa wixii isbedel ku yimid DetailCraft 0.8 (1 Nofeembar 2026) iyo 0.8.1 (2 Nofeembar 2026), marka la barbardhigo 0.7. 0.7 wuxuu hubiyay xubnaha birta; 0.8 wuxuu qorsheeyaa kor-u-qaadista, wuxuu soo jeediyaa isku-xidhka, wuxuu hubiyaa aasaaska iyo rebar-ka, wuxuuna dhisaa derbiyada, dabaqyada iyo saqafyada alwaaxda iyo light-gauge.

### Cusub

**Rakibidda**

- **Qorshaha rakibidda iyo filimka.** Tab-ka {{ui:Rakibidda}}, ku qor crane (meesha uu taagan yahay, jiidkiisa ugu sarreeya, rigging-ka aan ku jirin chart-ka), oo ku qor safafka load chart-kiisa. DetailCraft wuxuu kor u qaadaa moodelka hal assembly mar, siday u kala horreeyaan phase-ka iyo tier mar kasta, wuxuuna hubiyaa kor-u-qaadid kasta chart-ka radius-kiisa iyo margin-ka aad dejisay. {{ui:Kaydi filimka}} wuxuu qoraa hal fayl HTML ah oo ciyaara khadka-ka-baxsan browser kasta, xataa taleefanka. Kor-u-qaadista ka baxsan chart-ka, ka dhaafsan ama aad u sarreeya waxay ku jiraan {{ui:Dhibaatooyinka}}. Waa qorshe ku salaysan tirooyinkaaga, ma aha qorshe kor-u-qaad. Eeg [Qorshaha rakibidda iyo filimka](topic:erection-movie).

**Xiriirrada**

- **Autopilot-ka isku-xidhka.** Tab-ka {{ui:Autopilot}} wuxuu eegaa isku-xidh kasta oo aan xidhiidh lahayn, wuxuuna soo jeedinayaa mid ku salaysan qaabka: saxanada saldhiga, shear tabs, saxanada dhammaadka biimaha aad u calaamadeeysay sida moment beams, jiidka iyo saxanka xidhka. Siiso culeys isku mid ah ama hal dhammaad shear, tirada boolt-ka ayaa raacaysa xoogga naqshadda boolt-ka. {{ui:Dhammaantood ku dar}} wuxuu ku daraa soo jeedinta hal tallaabo oo undo ah. Waa qiyamo bilow oo la eegi karo, ma aha naqshadda isku-xidhka.
- **Hubinta suurtogalnimada dhismaha.** {{ui:Dhibaatooyinka}} waxay u sheegtaa boolt aan furaha gaadhi karin, boolt-yada oo ag dhow socket-ka, welds-ka fillet ee ka baxsan xadka cabbirkooda iyo godadka birta ee biyo haya. Weld access waa cusub: weld fillet oo wareega oo dhan oo mash-alka welder-ka aan gaadhin waxaa lagu liistaa qaybta ku jirta iyo qeybta alxanka ee saameysan. Eeg [Hubinta suurtogalnimada dhismaha](topic:constructability).

**Aasaaska iyo rebar-ka**

- **Hubinta aasaaska.** Tab-ka {{ui:Aasaaska}} wuxuu hubiyaa footings, combined footings iyo mats oo ku saleysan dhulka aad sharaxday: bearing, sliding iyo overturning culeysyada adeegga; flexure, shear, punching, development iyo ugu yar ee birta culeysyada factored (ACI 318-19). Column ku dhow geesha ama cidhifka waxaa lagu hubiyaa qaybta ka jarmay cidhifka footing-ka. Settlement wuxuu ka imanayaa modulus-ka dhulka, mat-ka dhuuban waxaa lagu xalliyaa springs ka subgrade modulus, pile groups iyo derbiyada xaqiijinta waxay leeyihiin panels gaar ah. Culeysyada column waa la qori karaa ama laga qaadan karaa {{ui:Falanqayn}}. Eeg [Hubinta aasaaska](topic:foundation-checks).
- **Khariitada xirmada rebar.** Tab-ka {{ui:Xirmada birta}} wuxuu sawirayaa khariita kulaylka footing kasta sida laga arko sare: meelaha ay gadaashu wax yar oo meel u reebtaan kontaraydhka inuu hoos u galo, marka la barbardhigo xeerka farsamada ee ugu yar, iyo, haddii aad bixiso, aggregate-ka ugu weyn iyo madaxa vibrator-ka. Eeg [Khariitada xirmada rebar](topic:rebar-congestion).

**Qaab-dhismeedka iyo bixinta**

- **Qaab-dhismeedka alwaaxda iyo light-gauge.** Tab-ka {{ui:Qaab-dhismeed}} wuxuu qaabeeyaa derbiyada, dabaqyada iyo saqafyada qayb kasta, liis gooyo, kaydka la iibsanayo iyo shop drawing-ka miisaan ku habboon. {{ui:Dhig sida xubno}} wuxuu geliyaa qaybaha moodelka, {{ui:Xaashiyaha PDF}} wuxuu keydiyaa hal xaashi panel kasta. Cabbirrada, masaafada iyo headers-ka waa kuwaaga; DetailCraft ma hubinayo inay qaadayaan culeyska. Eeg [Panels-ka qaab-dhismeedka alwaaxda iyo light-gauge](topic:framing-panels).
- **Kaydka bixiyaha iyo waqtiga sugitaanka.** Tab-ka {{ui:Bixinta}} wuxuu akhrisaa liiska kaydka bixiyaha (CSV) wuxuuna muujiyaa, qaybta kasta oo liiska gooyo iibsanayo, in kaydka ku filan yahay iyo intee le'eg ayuu sugitaanku yahay. Qaybaha yaraanta iyo kuwa daahay waxay ku jiraan {{ui:Dhibaatooyinka}}. Waxba lama dalbo. Eeg [Kaydka bixiyaha iyo waqtiga sugitaanka](topic:supplier-stock).

**Falanqaynta iyo naqshadda**

- **Waa maxay ugu horreeya ee jabta?** Tab-ka {{ui:Falanqayn}}, badhanku wuxuu helaa isku-darka xoogga ee xukunta, xubinta ugu nugul, intee in le'eg culeysyadu koraan ka hor inta xubinta koowaad ay gaarto xaddigeeda, iyo saxanka isku-xidhka ama shear tab-ka ugu nugul marka xoogga shear-ka boolt-yadiisa la yaqaan. Waxay u baahan tahay isku-darka iyo code-ka naqshadda marka hore. Bearing, block shear, welds iyo prying lama hubiyo. Caawiyahaaga isku-xidhka ah ayaa weydiin kara isla markaana.
- **Tooska.** Calaamadee {{ui:Live: solve again after each edit}} oo qaab-dhismeedka waa la xalliyaa mar kasta oo wax la beddelo.
- **Kontaraydh, wax dheeraad ah.** Column dheer oo ku jira qaab-dhismeed aan socod lahayn waa la naqshadeeyaa muuqaalkeeda la weyneeyay (ACI 318-19 6.6.4.5). Xilliga dhulgariirka waxaa laga qaadan karaa falanqaynta habka Rayleigh. Slab ka samaysan plates waxay helaa birta ay dabaqa kasta u baahan tahay iyada oo ku salaysan momentsyadiisa, iyo one-way shear-ka. Eeg [Hubi qaybaha kontaraydhka iyo samee culeysyada dhulgariirka](topic:concrete-and-seismic).
- **Injineer si uu u hubiyo.** Natiijooyinka aasaaska, kontaraydhka iyo Waa maxay ugu horreeya ee jabta waa caawimo. Culeysyada dabaysha lama dhisin.

**Dhammaan barnaamijyada**

- **Luuqadaha.** Caawintu waxay ku qoran tahay 54 luuqadood. Kuwa ka sokow Ingiriisiga waa qabyo tarjumaad mashiin ah ilaa ay akhriyaan dadka afka hooyo; toban waa cusub (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek).
- **Bararka qalabka.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Safafka qalabka}} wuxuu dooranayaa wrap, 2 safar ama 1 safar. Bar hore u habboon ayuu sidiisa ku sii jiraa; kuwa kale waxay ku dhaqaaqaan dhinac.
- **Miiska hantida.** Goobaha aasaaska waxay adeegsadaan miiska wadaagga ah: qaybaha la ruxi karo iyo heerka dhex-dhexaadka. Hawlaha xisaabta sida 2*450 wali way shaqeeyaan.
- **Qalabka gacanta.** Trackpad, qalin, 3D mouse, controller iyo MIDI waxay wadi karaan barnaamijyada. Eeg [Ku soco 3D](topic:navigate-3d).
- **Shaashadda dhibaatooyinka.** Digniinta hubinta cusub ee kor ku xusan waxay ku soo muuqanaysaa shaashadda {{ui:Dhibaatooyinka}} isla sidii hore.
- **Ku xidh AI-gaaga.** Caawiyahaaga gaarka ah, oo lagu xidhay CadCraft Studio, wuxuu la shaqeeyaa dhammaan siddeed barnaamij, wuxuuna arkaa kaliya waxa aad ogolaatay. Xidhka hal-tallaabo, connector-ka martiqaadka iyo furaha API-gaaga ee Studio weli way imanayaan. Eeg [Isticmaal DetailCraft caawiye AI ah](topic:use-with-ai-assistants).

### Waa la saxay 0.8.1

- **Luuqadaha Studio.** Studio iyo nooca xirmada ayaa bedeli kara luuqadda wakhtiga socodka; ka hor waxay ahaayeen Ingiriisi keliya. Weli lama tijaabin dhammaan madal-yada: naga soo sheeg haddii luuqadu ku ansixin.
- **Doorashada daaqadda isgoysa.** Installer-ada 0.8.1 waxay sii hayaan habka doorashada daaqadda ee hore loogu saxay dhismaha web-ka 0.8; installer-ka duqowday ma lahayn.
- **Tablet-yada toosan.** Dhererka grid-ka ee dhaafsan wuxuu u gudbaa canvas-ka, habaynta xaashiyaha waxay bilaabaa 760 px ama ka yar.

### Ma jirto nooca hadda

- **Dirista NC ilaa mashiin** lama sii daayin.
- **Culeysyada dabaysha** ee kaadiga lama dhisin, kontaraydhka iyo hubinta aasaaska waa kuwa injineer dib u eegi doono.
- **Saxeexa code-ka.** Installer-ada Windows iyo .dmg-ga macOS lama saxeexin, sidaa darteed Windows waxay digi karta, macOS waxay weydiin doontaa midig-riix, ka dibna Open.

Isbeddelada hore waxay ku jiraan [Waxa cusub ee 0.7](topic:whats-new-0-7).
