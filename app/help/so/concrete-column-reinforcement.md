---
title: Birlow tiir kaadhi oo afar-geesle ah
summary: Tusaale shaqo oo ku saabsan qaabaynta tiir kaadhi afar-geesle ah DetailCraft: dhig, siiso birta dhererka iyo ties-ka, akhri hubinta, lap-ka ka sarreeya iyo calaamadaha birta, kadibna sawir xaashida shaqada.
keywords: tiir kaadhi, tiir afar-geesle, birlowga tiirka, birta dhererka, birta toosan, ties, hoops, cross-ties, lap splice, splice, birta bilowga, nisbada birta tiirka, 1 %, 8 %, fogaanta ties, ACI 318-19 25.7.2, EN 1992-1-1 9.5, naqshadda shaqada, calaamadaha birta, 8C1, 3C2
from: aee2a3ca
---

Mawduucan wuxuu qaadaa hal tiir afar-geesle ah ka bilaabo eber ilaa faahfaahin la hubiyay, la sawiray oo la qorsheeyay. Qawaaniinta guud ee biimaha, saxamada iyo darbiyada waxay ku jiraan [Birlow kaadhida](topic:reinforced-concrete); tani waa dhinaca tiirka, leh tirooyin aad dib u samayn kartid.

:::warning
DetailCraft wuxuu faahfaahiyaa birta aad siiso. Ma naqshadeeyo. Birta hoose waa qiyamka bilowga tusaalaha, ma aha talo: injineerka diiwaanka wuxuu doortaa cabbirka, tirada iyo fogaanta.
:::

## Waa maxay tiirka halkan

Tiir afar-geesle ah wuxuu leeyahay ballac (dhinaca local x) iyo dhinac u dhaxeeya (dhinaca local y), dahaar saafi ah oo ilaa ties, birta dhererka dhinac kasta iyo ties xidhan. Wareejinta wuxuu leexiyaa wax kasta; wajiyada waxay ahaanayaan "wajiga ballaca" iyo "wajiga dhinaca".

- Birta dhererka waxa lagu siiyaa tirada ku jirta wajiga ballaca iyo tirada wajiga dhinaca. Birta geesaha labadooda ayaa tirin, sidaas darteed 3 iyo 3 waxay samaysaa 8 birood; 4 iyo 4 waxay samaysaa 12.
- Ties-ka waa rectangles xidhan oo leh laba kalsoonaan hal geesood, 135° ama 90°. Ties-ka koowaad waa masaafo go'an oo ka sarreeya dabaqa (iyo ka hooseeya kan xiga), aagagga dhamaadka waxay leeyihiin fogaan dhow, bartamaha ayaa fogaan ballaaran.
- Waxa birtu sameyso sare: ku sii wad oo lap ku samee birta ka sarreeya, ama u leexo 90° kalsoonaan dabaqa, ama ku joog hoosta sare.

## Tiirka tusaalaha

Tiir 400 × 400 mm, 3600 mm u dhexeeya dabaqa sare iyo kan hoose, birta dhererka #8, ties #3, dahaar saafi 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, dhexe.

1. Fur tab-ka {{ui:Kaadhi}} oo deji khadadka grid-ka iyo heerarka uu tiirku ku taagan yahay (daaqadda bidix).
2. Gudaha {{ui:Ku dar gridka}}, dooro {{ui:Tiir shub ah}}, dooro barta grid-ka iyo labada heer, deji {{ui:Ballac (mm)}} iyo {{ui:Dhinac (mm)}} 400 oo dooro {{ui:Ku dar}}.
3. Daaqadda {{ui:Sifooyinka}} deji:
   - {{ui:Dahaarka saafiga ah (mm)}} 40;
   - {{ui:Birta dhererka}} #8, {{ui:Birood wajiga ballaca}} 3, {{ui:Birood wajiga joogga}} 3;
   - {{ui:Xidhidhka}} #3, {{ui:Qalloocyada}} 135°, {{ui:Fogaanta ka dhexeeya (mm)}} 300, {{ui:Dherer aagga dhamaadka (mm)}} 600, {{ui:Fogaanta aagga dhamaadka (mm)}} 150, {{ui:Midka ugu horreeya laga bilaabo wajiga (mm)}} 50;
   - {{ui:Birta sare}} {{ui:Ku sii wad oo isku-dhufo birta kor ku jirta}}.

Isbeddel kasta waa hal tallaabo oo ka noqosho.

### Waxa aad heleysid

| Qayb | Natiijo |
|---|---|
| Birta dhererka | 8 birood #8 (giraan 3 × 3), mid kasta 4375 mm dheer: tiirka 3600 mm oo ku dheeraada lap 775 mm oo kor ku jira |
| Lap | 757 mm oo loo baahan yahay lap cadaadis (ACI 318-19 25.5.5.1, fy 420), 775 mm la siiyay: baahida oo loo wareejiyay 25 mm xiga |
| Ties | 17 ties #3, mid kasta dherer gooyid ku dhow 1359 mm, la fogeeyay 150 mm labada aagga dhamaadka 600 mm, iyo 300 mm ka dhexeeya |
| Nisbada birta | 2.5 % qaybta buuxa (xadka 1 % ilaa 8 %, ACI 318-19 10.6.1.1) |
| Fogaanta saafiga ah ee birta | 112 mm (waa in ay ahaataa ugu yaraan 40 mm, ACI 318-19 25.2.3) |
| Fogaanta ties-ka | 300 mm (oggol 400 mm: ugu yar ee 16 dhexroor birta, 48 dhexroor ties-ka iyo dhinaca yar, ACI 318-19 25.7.2.1) |
| Cabbirka ties-ka | #3 (oggol ilaa 9.5 mm, ACI 318-19 25.7.2.2) |

Dhammaan kuwan waxay ku jiraan liiska {{ui:Hubinta}} ee qaybta; lap-ka waxa kale oo ku jira {{ui:Isku-xidhka iyo ku xidhitaanka}}.

## Cross-ties

Hal ties oo wareegsan oo keliya, kaliya birta geesaha ayaa la taageeraa. ACI 318-19 25.7.2.3 wuxuu oggolaanayaa birta bartamaha wajiga inay taageero la'aan ahaato haddii ay ku jirto 150 mm saafi ah birta geeska. Wajiga leh 3 birood, sida kor, taasi way buuxisaa. Leh 4 ama in ka badan wajiga, taasi ma buuxiso, DetailCraft wuxuu sheegaa digniin ({{ui:Hubinta}} iyo Dhibaatooyinka): "cross-ties" ayaa loo baahan yahay. **Cross-ties weli lama sawirin**: ku dar naqshadda gacanta, ama dooro birood yar wajiga.

EN 1992-1-1 ah, DetailCraft wuxuu hubiyaa cabbirka birta (ugu yaraan 8 mm), tirada birood (ugu yaraan 4), aagga birta (0.2 % ilaa 4 % qaybta), fogaanta saafiga ah iyo fogaanta link-ka (9.5.2 iyo 9.5.3).

## Lap-ka, aasaaska iyo tiirka hoose

- Haddii **aasaas ku jirto moodeelka oo tiirka hoostiisa taagan**, tiirku lap buu la samaynayaa birta bilowga aasaaska, lap-kooda ayaa sidoo kale la hubiyaa.
- Haddii **tiir kale oo moodeelka ku jira uu hoostiisa taagan yahay**, wuxuu lap la samaynayaa birta tiirkaas.
- Siiso {{ui:Dherer isku-dhufashada (mm, 0 = sida loo baahdo)}} si aad u beddesho; mid ka gaaban inta loo baahan yahay waa dhibaato, waxaana lagu calaamadiyaa * miiska.
- Lap-yada cadaadiska ayaa caadi ahaan la isticmaalaa ({{ui:Isku-dhufashada cadaadiska}} dejinta); dooro {{ui:Isku-dhufashada jiidashada}} marka tiirku ku jiri karo jiidasho.

## Calaamadaha, jadwalka iyo xaashida shaqada

Birta isku mid ah waxay wadaagaan hal calaamad: birta dhererka tiirka kor ku jira waa 8C1, ties-keeda 17C2 (lambarka marka hore, kadibna xarafka nooca C ee tiirka iyo lambarka socda). Waxay ka muuqdaan tab-ka {{ui:Jadwalka qallooca}}, leh dherer gooyid iyo miisaan, iyo CSV ee laga soo dejiyo {{ui:Wax soo saar}} › {{ui:Dheeraad}} › {{ui:Qallooc}}.

Dooro {{ui:Naqshadda shaqada}} tiirka dhinaceeda si aad u hesho xaashi tiirka muuqaal dhinac ku jiro (birta oo dhan, calaamadeeda, aagagga ties-ka iyo lap-ka oo cabbiran) iyo qayb bartamaha ah, oo ku xiga xaashida qallooca birta. Kaydi {{ui:Xaashidan PDF ahaan}}.

## Waxa aan samaynin

- Tiirar wareegsan iyo spirals, iyo tiirar aan afar-geesle ahayn: lama dhisin.
- Cross-ties gudaha qaybta iyo faahfaahinta jilicsanaanta (ACI 318-19 cutubka 18): lama dhisin.
- Splices meel aad doorato ama kala-fogaan: dhammaan birood waxay lap ku samaysaan hal qayb.
- In birtu ku filan tahay culeyska: waa naqshadda injineerka.
