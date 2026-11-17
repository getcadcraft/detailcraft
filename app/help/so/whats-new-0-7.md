---
title: Waxa cusub ee 0.7 (hore)
summary: Hubinta naqshadda ee biimaha I-shape ee birta, oo leh isku-darka culeysyada ee ASCE 7 ama EN 1990 iyo hubinta xubnaha ee AISC 360 ama EN 1993-1-1, dhoofinta USD ee moodeelka birta, qalab caawiye oo loogu talagalay USD, Steel ribbon oo leh batamaan weyn iyo yar, iyo daaqado ka nadiifiya oo dialog-yo la dhaqaajin karo.
keywords: waxa cusub 0.7, nooca hore, sii-deynta hore, sheekada isbedelka, isbeddel, 0.7, nooca, astaamo cusub, hubinta naqshadda, naqshadda birta, utilisation, isku-darka culeysyada, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, National Annex, roof live, deflection limit, usd, usda, usdc, usdz, openusd, caawiye, mcp, steel ribbon, ribbon, batamaan kala qaybsan, cabbirrada, kooban, daaqadaha, dialog-yada, Bortuqiis
from: 54a7a8f0
---

Waa wixii isbedel ku yimid DetailCraft 0.7, marka la barbardhigo 0.6. Falanqaynta qaab-dhismeedka ee 0.6 hadda waxay leedahay tallaabo labaad: hubinta xubnaha birta iyada oo loo eegayo code-ka naqshadda.

## Cusub

### Isku-xidhka mitre (0.7.1)

- **Laba I-shape oo isku kulma xagal**, sida jilbaha qaab-dhismeedka ama dhidibka sare: dooro labaduba, dooro {{ui:Mitre}} ka mid ah kooxda {{ui:Xidh}} ee menu-ga {{ui:Dheeraad}}, labada dhamaadka ayaa la gooyaa diyaarka qaybinaya xagalka. Saxanada dhammaadka oo boolt lagu xidhay iyo tirooyinka xagalka ayaa ah calaamadaha lagu doorto dialog-ga cusub ee Mitre, kaas oo goobaha lambarada leh ku habboon yihiin sawir ku saabsan isku-xidhkaaga oo la sameeyay intaad qorayso. Mitre-ku wuu raacaa xubnaha markay dhaqaaqaan, wuxuuna gaaraa naqshadaha, faylasha NC (gooyn xagal), IFC iyo liistada alaabta. Eeg [Isku-xidhka mitre](topic:mitres).

### Hubinta naqshadda

- **Isku-darka culeysyada code-ka ka yimid.** Tab-ka {{ui:Falanqayn}}, block-ga cusub ee {{ui:Hubinta naqshadda}} wuxuu leeyahay {{ui:Code-ka naqshadda}}: ASCE 7 + AISC 360 (US, LRFD) ama EN 1990 + EN 1993-1-1 (Eurocode). Siiso kiis kasta nooceeda (dead, live, roof live cusub, snow, wind, seismic), riix {{ui:Samee isku-darka}}, DetailCraft wuxuu qori doonaa isku-darka xoogga iyo adkaysiga ee code-ka ee kiisaskaaga. Isku-darka aad adigu qortay wuu sii jiri doonaa. Eeg [Samee isku-darka](topic:design-checks#make-the-combinations).
- **Qiyamaha Annex-ka Qaranka.** Eurocode-ka, isugeynta waxay ka bilaabmaan qiyamaha la taliyay; {{ui:Qiyamaha Annex-ka Qaranka}} wuxuu kuu ogolaanayaa inaad ku qortid kuwa dalkaaga, oo waxay ku kaydsamaan moodelka. Eeg [Samee isku-darka](topic:design-checks#make-the-combinations).
- **Hubi xubnaha.** {{ui:Hubi xubnaha}} wuxuu hubiyaa I-shape kasta oo birta ah xoog-jiid, cadaadis oo leh buckling, qallafsanaan oo leh lateral-torsional buckling, jiid, qallafsanaan oo leh xoog toosan, iyo hoos-u-dhac marka la barbardhigo {{ui:Xadka hoos-u-dhacga}} aad dejiso. Miiska wuxuu muujinayaa utilisation ee xubin kasta, hubinta xukunta iyo isku-darkeeda, xubnaha moodelka ayaa midab la siiyay (buluug, cagaar, jaalle-cad, casaan, boodhka oo ah aan la hubin). Eeg [Hubi xubnaha](topic:design-checks#check-the-members).
- **Warbixinta gudaheeda.** {{ui:Warbixin (PDF)}} iyo {{ui:Warbixin (CSV)}} waxay ku daraan daabacaadaha code-ka, dejinta, utilisation xubin kasta iyo dhammaan qodobbada la isticmaalay. Eeg [Warbixinta](topic:design-checks#the-report).
- **Caawimo ilaa injineer uu dib u eego.** Waxay isticmaashaa oo keliya xoogagga tallaabada kowaad. Tuubooyinka, xagalada, kanaalada, qaabab la alxamay iyo qaybo dhuuban ama class 4 waxay akhrinayaan "not checked", iyo sababta; torsion, xidhiidhka iyo kontaraydhka lama hubiyo. Eeg [Waxa aan la hubin](topic:design-checks#what-is-not-checked).

### USD

- **Dhoofi moodeelka birta USD ahaan.** {{ui:USD}} ee kooxda {{ui:Wax soo saar}} wuxuu qoraa moodeelka {{ui:Qoraal (.usda)}}, {{ui:Binary (.usdc)}} ama {{ui:Xidhmo (.usdz)}} oo loogu talagalay barnaamijyada muuqaalka iyo isku-dhafka goobta: isku-dhigga kasta wuxuu hayaa qaybihiisa, qayb kasta waa qaybtiisa oo socota dhererkeeda oo leh gooyo la gooyay, oo qayb kasta wuxuu leeyahay calaamadda qaybtiisa, profile-ka, grade-ka, dhererka iyo miisaanka. Godadka boolt-ka, boolt-yada, alxanka iyo aasaaska kuma jiraan meshyada USD. Eeg [Dhoofi moodeelka birta USD ahaan](topic:usd).

### Caawiyayaasha AI

- **USD loogu talagalay caawiyayaasha.** Caawiyahaaga gaarka ah, oo lagu xidhay CadCraft Studio, wuxuu dhoofin karaa moodeelka USD (`usd_export`), iyo Studio-da wuxuu ku qori karaa gal aad oggolaatay. Eeg [Waxa caawiyuhu weydiisan karo](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Waa la beddelay

- **Steel ribbon-ka** wuxuu leeyahay batamaan weyn iyo yar: {{ui:Biim}} weyn oo ku xiga {{ui:Tiir}}, {{ui:Xidhe}} iyo {{ui:Saxan}} yaryar oo ku yaal {{ui:Moodeelin}} › {{ui:Xubnaha}}; {{ui:Saxanada dhammaadka}} weyn oo ku yaal {{ui:Faahfaahin}} › {{ui:Xiriirrada}}, oo {{ui:Jiidka}} iyo {{ui:Saxanka xidhka}} wada batamaan kala qaybsan oo mid ah; {{ui:Dhaji}} weyn oo ku yaal {{ui:Tafatir}} › {{ui:Koobiga}}, oo {{ui:Ku dhaji meeshii}} iyo {{ui:Laba-jibbaari}} ku jiraan fallaadha kooxda. {{ui:Samaynta}} › {{ui:Isdhaafsi}} wuxuu leeyahay {{ui:U dhoofi USD}} oo ku taal IFC-da dhinaciisa. Qaababka kale ee menu-ga waxay u eegan sidii hore. Eeg [Menus, keys and mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Falanqeynta qaab-dhismeedka](topic:frame-analysis) hadda wuxuu u tilmaamaa hubinta naqshadda, isku-darkeedana code-ka ayaa lagu samayn karaa.

## Dhammaan barnaamijyada

- **Cabbirrada.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Cabbirrada}} wuxuu leeyahay liis kala duwan oo dhererka, bedka, mugga, xagalka iyo janjeerka, oo leh cabbirrada saxda ah ee qeexidda cabbirrada ay bixiyaan (US survey foot waa cabbir gaar ah). Cabbir aadan adeegsan dami, waxayna ka baxaan liisaska cabbirrada; mid aad caddaysid oo shaqo cusub ayaa ku bilaabmaysa. Fayl kasta had iyo jeer wuxuu hayaa cabbirkiisa. Sanduuqyada DetailCraft ma raacaan liisaska weli: dherer kasta wuxuu weli lagu qoraa millimitir. Eeg [Cabbirrada, qiyamaha la qoro iyo liisaska cabbirrada](common:unit-lists).
- **Qaabeyn ku dhow oo daaqadaha ka nadiifiya.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Cabbirka qaabeynta}} › {{ui:Kooban}} wuxuu shaashadda ku dhex geliyaa wax badan (shaashadaha taabtaabka iyo taleefannada waxay haystaan batamaannadoodii weynaa). Daaqad kasta oo dhinac ah waxay leedahay bar cinwaan oo dhuuban: jiid si aad u xidho ama u gooyso daaqada, ku rid bar daaqad kale si aad frame-ka ula wadaagto sida tab-yo, dhig si uu ugu dhaqaaqo geeska, ama qarsii oo ka soo celi geeska. Eeg [Qaabeynta daaqadaha](common:arrange-panels#make-the-layout-denser).
- **Dialog-yada waa la dhaqaajin karaa.** Dialog-ga ku jiid bar cinwaankiisa si uu uga baxo sawirka; wuxuu ku soo noqdaa meeshii aad ka tagtay. Bar cinwaanka laba jeer riix si dib loogu dhex dhigo. Eeg [Dialog-ga dhaqaajinta](common:arrange-panels#move-a-dialog).
- **Tusaalooyin caawiyayaasha AI.** Toban codsi oo shaqeysan oo caawiyahaaga gaarka ah (nadiifi sawirka, qorsho ururi, hubi sawirrada, weydii moodeelka su'aalo, isku-geeyo takeoff, isku day variant-ka qaybta…), mid kasta oo leh qalabyada uu isticmaalo iyo ogolaanshaha uu u baahan yahay, oo mid kasta baadhitaankeenu dib u socodsiiyo. Barnaamijyadu ma leeyihiin AI. Eeg [Tusaalooyin caawiyayaasha AI](common:assistants-recipes).
- **Luuqadaha.** **Português (Portugal)** waa cusub {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Luuqad}}. Waxay, **Português (Brasil)**, **Español (México)** iyo **Bahasa Indonesia** hadda leeyihiin erey kasta oo barnaamijyada ah, iyagoo ah qabyo aan weli ku dhaqan xagga afka hooyo. Bogagga caawinta waxay ku qoran yihiin Ingiriisi.
- **CadCraft Studio** wuxuu sheegaa sababta hubinta cusboonaysiinta ay fashilantay (fayl aan weli u jirin nidaamkaaga, shabakad la'aan, saxeexa xun) halkii uu kaliya ku qori lahaa "Done", wuxuuna joojiyaa soo celinta kaarka Waxa cusub ee aad xirtay ilaa ay jirto sii-deyn cusub.

## La saxay

- Profile gaar ah ayaa lumay markaad bilowday moodel cusub.
- Kanaalada, xagalada iyo godadka birta ee bannaan ayaa ka maqnaa set-ka naqshadaha shaqada.

## Ma jirto nooca hadda

- **0.7 lama saxeexin code-ka.** Saxeexa iyo xirmada Microsoft Store waxay u guureen 0.8 sababtoo ah hubinta shahaadada weli ma dhammaan. Hubi SHA-256 ee fayl kasta oo ku taal getcadcraft.com/download. Windows, haddii SmartScreen joojiyo installer-ka, dooro {{ui:Macluumaad dheeraad ah}}, ka dibna {{ui:Socodsii si kastaba ha ahaatee}}. Mac-ka, markii ugu horeysay, midig-riix CadCraft Studio oo dooro {{ui:Fur}}. CadCraft Studio weli ma joogo dukaanka barnaamijyada, mana jiro dhismaha iPad ama iPhone.
- Liisaska kuma iyo sarar ee {{ui:Cabbirrada}} waa la kaydiyay, laakiin sanduuq weli ma akhrinayo.
- **Hubinta naqshadda weli injineer uma dib u eegin.** Tijaabooyinkeenu waxay barbardhigaan miisaska la daabacay iyo qaacidooyinka gacanta lagu xisaabiyay, ma aha tusaalooyinka shaqada ee code-ka naqshadda. Ilaa dib-u-eegis, waa caawimo: hubi xubnaha muhiimka ah gacanta.
- Hubinta naqshadda waxay isticmaashaa xoogagga tallaabada kowaad (ma jiro saameyn labaad) oo waxay hubisaa I-shape keliya. Lama dhisin: tuubooyin, xagalo, kanaalo, qaabab la alxamay, qaybo dhuuban (AISC) ama class 4 (Eurocode) oo ku jira qallafsanaan, torsion, jiid oo buckling-ka ku jira la socda qallafsanaan, xidhiidh, fatigue, dab, faahfaahinta dhulgariirka iyo kontaraydhka. Qayb dhuuban oo cadaadis ku jirta waxay ka saartaa hubinta cadaadiska, xubinta waxay akhrisaa "passes, partly checked".
- Falanqaynta qaab-dhismeedka weli waa tallaabo kowaad oo toosan, mana ay weli injineer ku tijaabin mashruuc dhab ah.
- Boolt-yada, boolt-yada, alxanka iyo aasaasaha ma ku jiraan dhoofinta USD.

Wax kale oo dheeraad ah waxay ku jiraan [Waxa aan weli la dhisin](topic:not-built-yet).
