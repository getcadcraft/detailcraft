---
title: Waxa cusub ee 0.8 iyo 0.8.1
summary: Muuqaal rakibidda oo ka timid miiska culeyska cranka, autopilot-ka isku-xirka, khariidadda xirmada birta, hubinta aasaasaha, panelada qaab-dhismeedka alwaaxda iyo birta fiican, hubinta dhismaha iyo gelitaanka alxanka, kaydka bixiyaha, waxa ugu horreeya jabaya, dib-u-xalinta toosan, hubinta kontiriidhka dheeraad ah iyo sax-yaraynta 0.8.1.
keywords: waxa cusub, waxa-cusub, sii deynta, liiska isbedelada, isbedelo, 0.8, 0.8.1, nooca, astaamo cusub, rakibidda, cranka, miiska culeyska, muuqaal, autopilot, isku-xirka, birta, xirmada, aasaaska, footing, mat, dhaqdhaqaaq, qaab-dhismeed, alwaaxda, birta fiican, liiska goynta, dhismaha, gelitaanka alxanka, bixiyaha, kaydka, wakhtiga gaadhiga, waxa ugu horreeya jabaya, toosan, kontiriido, seismic, slab, luqadaha, caawiye
from: 6e33e052
---

Waa waxa isbedelay DetailCraft 0.8 (1 Noofembar 2026) iyo 0.8.1 (2 Noofembar 2026), marka la barbar dhigo 0.7. 0.7 wuxuu hubiyey xubnaha birta; 0.8 wuxuu qorsheeyaa kor-u-qaadista, wuxuu soo jeediyaa xidhidhiyaasha, wuxuu hubiyaa aasaasaha iyo birta dhismaha, wuxuuna qaabeeyaa darbiyada, dabaqyada iyo saqafyada alwaaxda iyo birta fiican.

## Cusub

### Rakibidda

- **Qorshaha rakibidda iyo muuqaalka.** Tab-ka {{ui:Erection}}, qeex cranka (meesha uu taagan yahay, qaadista ugu sareysa, iyo qalabka rigging-ka oo aan ku jirin miiska). Ku qor safafka miiska culeyska cranka. DetailCraft wuxuu kor u qaadaa moodeelka isku-dhis kasta mar keliya, sida ay u dhacaan marxaladaha iyo dabaq-dabaq, wuxuuna hubiyaa kor-u-qaadista kasta miiska ku taxan radiuskiisa iyo marginka aad dejisay. {{ui:Save movie}} wuxuu qoraa hal fayl HTML ah oo offline ku ciyaara browser kasta, xataa taleefan. Kor-u-qaadista ka baxsan miiska, ka dambeysa ama aad u sarreysa waxay ku jiraan {{ui:Problems}}. Waa qorshe ka yimid tirooyinkaaga, ma aha qorshe kor-u-qaadis. Eeg [Qorshaha rakibidda iyo muuqaalka](topic:erection-movie).

### Xidhidhiyaasha

- **Autopilot-ka isku-xirka.** Tab-ka {{ui:Autopilot}} wuxuu eegaa isku-xiran kasta oo aan xidhidh lahayn, wuxuuna ka soo jeediyaa mid oo ka yimid qaabkooda: saxannada aasaaska, shear tabs, saxannada dhammaadka biimarka aad calaamaysay sida biimarka xagga-wakhtiga, splices iyo gussets. Siiso culeys isku mid ah ama hal cadaadis oo dhamaadka, tirada boolaha waxay raacaysaa xoogga naqshadeynta boolaha. {{ui:Add them all}} wuxuu ku daraa soo jeedinta hal tallaabo oo furis. Waa qiyamka bilowga ah ee la eego, ma aha naqshadeyn isku-xirka.
- **Hubinta dhismaha.** {{ui:Problems}} oo u qoran boolaha aan furaha gacanta gaadhi karin, boolaha aad u dhow ee socket-ka, welds-ka fillet ah ee ka baxsan xadkooda cabbirka, iyo qaybaha godan ee biyo haya. Gelitaanka welding-ka waa cusub: weld fillet ah oo wadar ahaan ah oo torch-ka welder-ka gaadhi kari waayo waa la liistaa, qaybta ku jirta jidka iyo qaybta weld-ka ee saamaysan. Eeg [Hubinta dhismaha](topic:constructability).

### Aasaaska iyo birta dhismaha

- **Hubinta aasaasaha.** Tab-ka {{ui:Foundation}} wuxuu hubiyaa footings, footings isku-dhafan iyo mats dhulka aad sharaxday: bearing, sliding iyo overturning culeysyada adeegga; flexure, shear, punching, development iyo birta ugu yar culeysyada factored (ACI 318-19). Tiir u dhow geesta ama xagga geeska ayaa lagu hubiyaa iyadoo qaybta la gooyay xadka aasaasaha. Hoos u dhaca waxay ka imaanaysaa modulus-ka dhulka, mat jilicsan waa la xalliyaa springs ka sameysan subgrade modulus, panelada pile groups iyo derbiyada xannibaadda ayaa leh panel u gaar ah. Culeyska tiirarka waa la qori karaa ama laga qaadan karaa {{ui:Analysis}}. Eeg [Hubinta aasaasaha](topic:foundation-checks).
- **Khariidadda xirmada birta.** Tab-ka {{ui:Congestion}} wuxuu sawiraa khariidad kulul ee footing kasta sida laga arko sare: meesha ay baararku ka dhigaan qol yar oo uu kaadi u helo inuu hoos u galo, marka la barbar dhigo xeerka masaafada caadiga ah iyo, haddii aad bixiso, aggregate-ka ugu weyn iyo madaxa vibrator-ka. Eeg [Khariidadda xirmada birta](topic:rebar-congestion).

### Qaab-dhismeedka iyo kaydka

- **Qaab-dhismeedka alwaaxda iyo birta fiican.** Tab-ka {{ui:Framing}} wuxuu qaabeeyaa panelada darbiga, dabaqa iyo saqafka oo leh qayb kasta, liiska goynta, kaydka la iibsanayo iyo naqshadda shaqada oo cabbir ku habboon. {{ui:Place as members}} wuxuu dhigaa qaybaha moodeelka, {{ui:PDF sheets}} wuxuu kaydiyaa hal xaashi oo panel kasta. Cabbirrada, masaafada iyo madaxyada waa kuwa adiga, DetailCraft ma hubiyo inay qaadayaan culeyska. Eeg [Panelada qaab-dhismeedka alwaaxda iyo birta fiican](topic:framing-panels).
- **Kaydka bixiyaha iyo wakhtiga gaadhiga.** Tab-ka {{ui:Supply}} wuxuu akhrisanayaa liiska kaydka bixiyaha (CSV) wuxuuna muujinayaa, qaybta kasta oo liiska goynta iibsanayo, haddii ay ku filan tahay kaydka iyo intee le'eg ayuu sugista yahay. Kuwa yaraanaya iyo qaybaha daahay waxay ku jiraan {{ui:Problems}}. Ilaa hadda waxba lama dalbado. Eeg [Kaydka bixiyaha iyo wakhtiga gaadhiga](topic:supplier-stock).

### Falanqayn iyo naqshadeyn

- **Waa maxay ugu horreeya jabaya?** Tab-ka {{ui:Analysis}}, badhanku wuxuu helaa isku-dhafka xoogga ee maamula, xubinta ugu nugul, intee ka badan ayay culeysku kori karaan ka hor inta xubinta ugu horreysa gaadhayso xaddigeeda, iyo saxanka dhammaadka ama shear tab-ka ugu nugul meesha xoogga boolaha la yaqaan. Waxay u baahan tahay isku-dhafyada iyo koodka naqshadeynta marka hore. Bearing, block shear, welds iyo prying ma la hubiyo. Kaaliyahaaga xiriirsan ayaa weydiin kara isla markaana.
- **Live.** Calaamadee {{ui:Live: solve again after each edit}} oo qaabka waa la xalliyaa mar kasta oo isbedel la sameeyo.
- **Kontiriido, iyo wax dheeraad ah.** Tiirka fudud ee qaab aan dhaqdhaqaaq lahayn waxa loo naqshadeeyaa momentkiisa weyneeyay (ACI 318-19 6.6.4.5). Muddada seismic-ka waxa laga qaadan karaa falanqaynta habka Rayleigh. Slab ka samaysan plates-ka wuxuu helaa birta uu dabaq kasta u baahan yahay momentsyadiisa iyo shear-ka hal-dabaqa. Eeg [Hubi kontiriidhka qaybaha iyo samee culeyska seismic-ka](topic:concrete-and-seismic).
- **Injineer ayaa hubin doona.** Natiijooyinka aasaaska, kontiriidhka iyo waxa ugu horreeya jabaya waa caawimo. Culeyska dabaysha ma la dhisin.

### App kasta

- **Luqadaha.** Caawintu waxay ku jirtaa 54 luqadood. Kuwa ka baxsan Ingiriisiga waa qabyo ay sameeyeen makiinadaha ilaa uu dhalinyaro ah ka akhrin; toddobaad ayaa cusub (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek).
- **Safafka qalabka.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} wuxuu doortaa ku laabo, 2 safka ama 1 safka. Bar hore u habboon ayaa sidiisa ku sii jirta; kuwa kale waa la jiidaa dhinac.
- **Shabakadda sifooyinka.** Goobaha footing-ka waxay isticmaalaan shabakadda la wadaago: qaybo la soo xidho iyo cufnaan yar. Xisaabinta lagu qoro sida 2*450 weli way shaqeysaa.
- **Qalabka gelinta.** Trackpad, qalin, mouse 3D, kontoroolar iyo MIDI ayaa wadi kara apps-ka. Eeg [Ku dhaqaaq 3D](topic:navigate-3d).
- **Panelka Problems.** Digniinaha hubinnada cusub ee kor ku xusan waxay ku muuqdaan isla panelka {{ui:Problems}} sida hore.
- **Ku xidh AI-gaaga.** Kaaliyaha aad xiriirsan tahay, oo lagu xiriiriyay CadCraft Studio, wuxuu shaqeeyaa siddeed apps oo dhan wuxuuna arkaa kaliya waxa aad oggolaatay. Xidhiidhka hal-riix, connector-ka martida la marti-geliyo iyo furaha API-gaaga ee Studio weli way imaanayaan. Eeg [Isticmaal DetailCraft kaaliye AI ah](topic:use-with-ai-assistants).

## Sax-yaraynta 0.8.1

- **Luqadaha Studio-ka.** Studio iyo nuqulada xirmada leh waxay beddeli karaan luqadda wakhtiga shaqada; kahor, waxay ahaayeen Ingiriisi keliya. Weli lama tijaabin dhammaan madaxyada: noo sheeg haddii luqaddu ayn beddelin.
- **Doorashada daaqada isgoysa.** Rakibayaasha 0.8.1 waxay leeyihiin habka doorashada daaqada oo sax ah ee hore ugu jiray dhismaha webka 0.8; rakibaha hore ma lahayn.
- **Tablet-yada toosan.** Dhererka gridka ee dheeraadka ah wuxuu u gudbaa canvas-ka, qaabka xaashiga wuxuu bilaabmaa 760 px ama ka yar.

## Weli nooca tan kuma jirto

- **Dir NC mashiin** lama sii daayin.
- **Culeyska dabaysha** ee kontiriidhka lama dhisin, hubinta aasaaska iyo kontiriidhka waa mid injineer u baahan in uu dib u eego.
- **Calaamadaynta koodka.** Rakibayaasha Windows iyo .dmg-ga macOS lama calaamadin, sidaas darteed Windows way digin karaa macOS-na wuxuu weydiin doonaa in aad riixdo midig, ka dibna Open.

Isbedelada hore waxay ku jiraan [Waxa cusub ee 0.7](topic:whats-new-0-7).
