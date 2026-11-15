---
title: Bilaabida DetailCraft
summary: Waxa DetailCraft maanta sameeyo, sida loo furo, iyo moodeel koowaad oo laga bilaabo shabakadaha ilaa naqshadda shaqada, daqiiqado 10 gudahood.
keywords: bilow, moodeel koowaad, hordhac, detailing birta, rebar, bilow degdeg ah, casharro, guudmar
from: e4f16bbe
---

DetailCraft waa app-ka faahfaahinta birta iyo rebar-ka ee qoyska CadCraft. Waxaad dhisaa moodeel 3D ah oo frame bir ah oo ku saabsan shabakado iyo heerar, waxaad ku xidhaysaa, waxaadna heleysaa waxa warshadu u baahan: calaamadaha qaybaha iyo isku-dhisyada, liiska alaabta, naqshadaha shaqada ee qayb kasta, faylasha NC ee DSTV, moodeel IFC, iyo jadwalka qallooca ee aasaasyada.

Tani waa dhismo hore. Waxay qabataa liis gaaban oo shaqooyin ah, si taxaddar leh, halkii ay wax walba mar hal mar samayn lahayd. Akhri [Waxa aan weli la dhisin](topic:not-built-yet) ka hor intaadan qorshe shaqo dhab ah ku samayn.

## Waxa uu hadda sameeyo

- Shabakado iyo heerar aad ku qorto, mm.
- Tiirar, biimo, brace-yo iyo saxano oo ka yimid liisaska profile-ka la daabacay (AISC W, S, C, L, HSS iyo Pipe; IPE, HEA, HEB iyo UPN oo Yurub ah; UB, UC, PFC, EA, UEA, SHS, RHS iyo CHS oo UK ah), iyo profile-yo parametric ah oo aad leedahay.
- Laba xidhiidh: saxanka dhammaadka ee bolt-ka ah oo biimka ku xidha flange-ka tiirka, iyo saxanka aasaaska tiirka oo leh afar alxan. Midkood kasta waxa lagu koobiyeyn karaa isku-xidh kasta oo la mid ah.
- Godad iyo gooyo lagu geliyo meesha.
- Aasaasyo tulmaajiyeed oo leh mat hoose iyo baararka bilowga.
- Calaamado qayb iyo isku-dhis oo isbeddelaan kadib isbeddel kasta.
- Soo saarista: IFC4, faylasha NC ee DSTV (I-shapes iyo saxanno), liiska alaabta oo CSV ah, jadwalka qallooca oo CSV ah, iyo PDF naqshad shaqo oo qayb mid ah.

## Fur DetailCraft

1. Fur DetailCraft browser-ka desktop-ka: Chrome, Edge, Firefox ama Safari. Eeg [Browser-ada iyo kombiyuutarada](common:browsers).
2. Sug shaashadu inay buuxsamto. Status bar-ka hoose wuxuu leeyahay "Ready. Open the Sample, or set grids and levels and start placing members."

Muuqaalka moodelka wuxuu u baahan yahay grafikada 3D (WebGL). Haddii bartamaha shaashadda ay tidhaahdo "This browser could not start 3D graphics (WebGL)", eeg [Xalinta dhibaatada](topic:troubleshooting#the-3d-view-is-missing).

:::note
Moodeelladaadu waxay ku sii jiraan kombiyuutarkaaga. Furidda moodeel waxay akhrisaa browser-ka, kaydintana waxay soo dejisaa fayl. Wax lama soo rarayo. Kaydinta daruuruhda weli ma diyaar aha. Si aad DetailCraft ugu isticmaasho xiriir la'aan mar dambe, mar online ah dooro {{ui:Save for offline}} app bar-ka; eeg [Shaqaynta khadka ka baxsan](common:offline).
:::

:::offline
Khadka ka baxsan baad tahay. DetailCraft wuxuu xiriir la'aan u shaqeeyaa kaliya haddii marka hore loo kaydiyay isticmaalka offline: badhanka {{ui:Save for offline}} ee app bar-ka markaas wuxuu akhrinayaa {{ui:Offline ready}}. Eeg [Shaqaynta khadka ka baxsan](common:offline).
:::

## Marka hore muuqaalka tusaalaha eeg

Qaabka ugu dhakhsaha badan ee aad ku aragto waxa DetailCraft soo saaro waa frame-ka tusaalaha.

1. Dooro {{ui:Sample}} kooxda {{ui:File}} ee toolbar-ka.
2. Muuqaalku wuxuu muujinayaa frame laba-khaadan ah: lix tiir oo leh saxanno aasaas, afar biimo oo leh saxanno dhammaadka, hal brace iyo toddobo aasaas oo leh rebar.
3. Guji biim. Panel-ka {{ui:Properties}} ee midig wuxuu muujinayaa calaamadiisa qaybta, dherer goynta, miisaanka iyo godadka ay saxannada dhammaadku sameeyeen.
4. Fur tab-ka {{ui:Bill of materials}} hoosta si aad u aragto calaamad kasta oo qayb ah tiradeeda iyo miisaankeeda.

Casharka [Sahami frame-ka tusaalaha](topic:sample-model) wuxuu tallaabo tallaabo kuu sharraxayaa.

## Moodeelkaaga koowaad

Moodeel cusub horey wuxuu u leeyahay shabakado 1 ilaa 3 oo A ilaa B ah 6000 mm, iyo laba heer, Level 1 oo ku taal 0 iyo Level 2 oo ku taal 4000.

1. Dooro {{ui:New}}. Haddii moodeelka hadda jira isbeddello leeyahay, DetailCraft wuu weydiin doonaa inaad marka hore kaydiso.
2. Dooro {{ui:Plan}} muuqaalka kor. Liiska heerarka ee u dhow wuxuu doortaa Level 1.
3. Dooro {{ui:Column}} toolbar-ka, ama riix {{key:C}}.
4. Guji isgoyska shabakadda A/1. Tiir W12x50 ah ayaa soo muuqda oo ka kacda Level 1 ilaa Level 2. Status bar-ku wuxuu sheegayaa meesha ay tagtay.
5. Guji B/1, A/2 iyo B/2 si aad saddex kale u dhigto.
6. Dooro Level 2 liiska heerarka, kadibna dooro {{ui:Beam}} ama riix {{key:B}}.
7. Guji A/1, kadibna A/2. Biim W16x26 ah ayaa isku xidha madaxa labada tiir, birtiisa sare oo heerka ku taal.
8. Riix {{key:Esc}} si aad ugu noqoto {{ui:Select}}, kadibna guji biimka.
9. Dooro {{ui:End plates}} kooxda {{ui:Connect}}. Labada dhamaadba waxay helayaan saxan dhammaadka oo bolt-ka ah, biimkana waa la jaraa si uu u habboonaado, saxanka koowaadna hadda waa la doortay.
10. Mar kale guji biimka.
11. Dooro {{ui:Shop drawing}} kooxda {{ui:Output}}. Muuqaal ka hor-eeg ah oo naqshadda shaqada ee biimka ayaa furmaya. Dooro {{ui:Download PDF}}.
12. Riix {{key:Mod+S}} si aad moodeelka u kaydiso. Browser-ku wuxuu soo dejinayaa `Untitled.detailcraft.json`.

Magaca moodeelka ka beddel goobta {{ui:Name}} ee geeska sare ee bidix ka hor intaadan kaydin, si fayl kasta iyo soo saar kasta uu magacaas u sii qaado.

## Halkii aad u gudubi karto marka xigta

- [Muuqaalka shaashadda](topic:workspace)
- [Diyaari shabakadaha iyo heerarka](topic:grids-and-levels)
- [Ku wareeg muuqaalka 3D](topic:navigate-3d), mouse, trackpad ama shaashad taabasho
- [Ka timid barnaamijyada kale ee faahfaahinta](topic:coming-from), haddii aad mid weyn oo faahfaahin ah ka yaqaanno
- [Isticmaalka caawimaadan](common:help)
