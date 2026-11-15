---
title: Muuqaalka shaashadda
summary: Qayb kasta, panel kasta iyo tab kasta oo DetailCraft ah magaceeda shaashadda, iyo waxa ay u adeegto.
keywords: shaashad, qaabeyn, toolbar, panelo, sifooyin, status bar, warbixin, interface, ui, tabs
from: 94f81073
---

DetailCraft wuxuu buuxiyaa daaqadda browser-ka ee hoosta app bar-ka. Ka bilow sare ilaa hoose: toolbar-ka, kadibna saddex tiir (panel-ka {{ui:Model}}, muuqaalka, panel-ka {{ui:Properties}}), kadibna tabs-ka warbixinta, kadibna status bar-ka.

## App bar

Bar-ka dhuuban ee ugu sarreeya wuxuu leeyahay website-ka CadCraft, ma aha moodeelka. Wuxuu muujiyaa magaca app-ka iyo nooca, link ku ah {{ui:About DetailCraft}}, {{ui:Help}} (ama {{key:F1}}) caawimaadda, {{ui:Save for offline}}, badhanka habka shaashadda, iyo beddelka {{ui:Paper}} / {{ui:Model}}.

- {{ui:Save for offline}} wuxuu DetailCraft, muuqaalka 3D-ga iyo caawimaaddan ku hayaa browser-kaaga si uu ugu furmo xiriir la'aan. Wuxuu akhrinayaa {{ui:Offline ready}} markii la kaydiyo; kadib guji si aad u hesho {{ui:Save again (get the newest version)}} ama {{ui:Remove the offline copy}}. Eeg [Shaqaynta khadka ka baxsan](common:offline).
- {{ui:Paper}} wuxuu siinayaa shaashad iftiin leh, {{ui:Model}} mid mugdi ah. Muuqaalka 3D wuu raacaa isla markiiba; waxba kama bedelo moodeelkaaga.
- Badhanka habka shaashadda iyo {{key:Ctrl+Shift+F}} waxay wareegaan caadi, shaashad buuxa, iyo shaashad buuxa oo bars-ka laga qariyo. {{key:Ctrl+Shift+F}} wuxuu isticmaalaa furaha Control kombiyuutar kasta, Mac-ka ku jiraba. Markii bars-ka la qariyo, dhinaca sare ee shaashadda ku tilmaan (ama taabo) si aad u soo celiso. {{key:Esc}} wuxuu ka baxaa shaashad buuxa.

## Toolbar-ka

Toolbar-ku wuxuu leeyahay shan koox. Ku dhaji mouse-ka badhanka si aad u aragto waxa uu sameeyo iyo furihiisa.

| Koox | Badhamada | Waxa ay sameeyaan |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Bilow moodeel, fur `.detailcraft.json` kaydsan ama fayl IFC, kaydi mid, ama fur frame-ka tusaalaha |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Qalabka uu guji xiga ee muuqaalka isticmaali doono |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, iyo {{ui:More}} gudahiisa: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Ku dar xidhiidh biim, tiir ama brace la doortay, ama koobiyee xidhiidhka la doortay ilaa isku-xidh kasta oo la mid ah |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Dib u noqo oo hore u samee wax-beddelka; koobiyee doorashada oo dhaji. {{ui:More}} wuxuu furaa menu leh {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} iyo {{ui:Select none}}, mid kasta furihiisa |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, iyo {{ui:More}} gudahiisa: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Soo deji soo saar, ama fur xaashiyada naqshadaha |

Badhamada iyo walxaha menu-ga ee hadda ma shaqeyn karaan waa la ceeriyay, markasta oo aad ku dhex dhejiso waxay kuu sheegaan sababta. {{ui:End plates}} wuxuu u baahan yahay biim la doortay, {{ui:Base plate}} tiir la doortay, {{ui:Similar}} xidhiid la doortay, {{ui:Shop drawing}} moodeel leh qaybo, {{ui:Copy}} xubin ama aasaas la doortay, iyo {{ui:Paste}} wax la koobiyeeyay. Eeg [Koobiyee, dhaji iyo laba-jibbaari](topic:copy-paste).

## Panel-ka Model (bidix)

- {{ui:Model}}: {{ui:Name}} moodeelka. Wuxuu magac siiyaa fayl kasta oo aad kaydiso ama soo saarto.
- {{ui:Grids}}: khadadka shabakadda iyo masaafadooda, iyo {{ui:Apply grids}}. Eeg [Diyaari shabakadaha iyo heerarka](topic:grids-and-levels).
- {{ui:Levels}}: hal safka heer kasta (magaca iyo kor-u-kaca mm), {{ui:Add level}} iyo {{ui:Apply levels}}.
- {{ui:Custom profile}}: samee qaybtaada parametric ah. Waa la xidhay ilaa aad furto.
- {{ui:Part marks}}: calaamad kasta oo qayb ah moodeelka ku jirta, oo leh profile-keeda, dherkeeda iyo tirada. Guji calaamad si aad u doorato qaybta ugu horreysa ee leh calaamadaas.

{{ui:Grids}}, {{ui:Levels}} iyo {{ui:Custom profile}} way fuulaan: guji cinwaankooda.

## Muuqaalka (dhexe)

Muuqaalku wuxuu muujiyaa moodeelka 3D. Kor ka, view bar-ku wuxuu leeyahay saddex badhan iyo liis:

- {{ui:3D}}: wareeg moodeelka si xor ah.
- {{ui:Plan}}: fiiri toos hoos heer keliya. Liis heerarka ayaa ka muuqda badhamada dhinaca. Waxa ka sarreeya 1.5 m heerka waa la jaraa, si aad u aragto oo aad heerka si cad ugu gujin karto.
- {{ui:Elevation}}: fiiri toos hal khad shabakad oo xarfaysan (Grid A, Grid B …). Liis gridyada xarfaysan ayaa muuqda. Kaliya birta ku dhow 1 m khadkaas ayaa la muujiyaa.
- Badhanka fit ee dhinaca midig ee view bar-ka wuxuu weynaysaa si uu u muujiyo moodeelka oo dhan.

Dhibcyo yar ayaa calaamadinaya isgoys kasta oo shabakad ah heer kasta. Intaad qalab dhigid shaqaynayso, dhibcda u dhow mouse-ka ayaa iftiimaysa, status bar-kuna magacaabaa, tusaale ahaan "A/2 ee Heer 1". Midabada ayaa kala saara noocyada xubnaha: tiirarka, biimaha, brace-yada iyo saxannada midkood midab u gaar ah; boolt-yada iyo alxanka midab kale; aasaasyada way kala iftiimaan, rebar-na waxa loo muujiyaa tuubooyin. Godadku waxay u muuqdaan dabool madow; gooyooyinka waa la jaray.

Sida loo wareego, loo dhex maro iyo loo weynaysto: [Ku wareeg muuqaalka 3D](topic:navigate-3d).

Marka moodeelku madhan yahay, muuqaalku wuxuu muujiyaa liis gaaban oo "Bilow moodeel" ah. Waxa kale oo aad fayl moodeel la kaydiyay ku dhigi kartaa meel kasta oo muuqaalka ku jirta si aad u furto.

## Panel-ka Properties (midig)

Panel-kan waxa uu muujiyo wuxuu ku xidhan yahay waxa aad sameyneyso, cinwaankeedana wuxuu sheegaa: "Moodeel", "Dhig biim", "Biim b2", "Xidhiidhka saxanka dhammaadka", "Saxanka aasaaska", "Aasaas F1", "3 la doortay" ama "Dhaji".

- **Wax la doortay ma jiro:** koobid moodeelka (xubnaha, xidhiidhyada, aasaasyada, qaybaha, calaamadaha, bolt-yada, miisaanka birta iyo rebar-ka, shabakadaha, heerarka).
- **Qalab dhigid shaqaynayso:** ikhtiyaarada qaybta xigta (profile, material, booska, rotation, iyo tiirarka {{ui:Up to}}), koobid profile-ka la doortay, iyo foomka {{ui:Add by grid}} si aad u dhigto adigoon muuqaalka gujin.
- **Xubin la doortay:** magaceeda, profile, material, booska, rotation, kooradhinaadhka labada dhamaadkeeda, calaamadahooda, dherer goynta iyo miisaanka, godadkeeda iyo gooyooyinkeeda, badhamada xidhiidhyada, naqshadda shaqada ee ay leedahay, iyo {{ui:Delete}}.
- **Xidhiidh la doortay:** dhammaan dejinta saxanka, bolt-ka iyo welda, boolt-yada iyo welda uu sameeyo, digniinahooda, iyo {{ui:Apply to similar}}.
- **Aasaas la doortay:** booskeeda iyo cabbirkeeda, mat-ka hoose, baararka bilowga, iyo calaamadaha baararka ee uu isticmaalo.
- **Dhowr shay la doortay:** tirada xubnaha nooc kasta, xidhiidhyada iyo aasaasyada, miisaanka birtooda, iyo {{ui:Copy}}, {{ui:Duplicate}} iyo {{ui:Delete}}.
- **Dhaji:** waxa ku jira clipboard-ka, iyo foomo lagu dhejiyo offset la qoray ama isgoys shabakad oo aad ka doorato liis.

Goobaha lambarka ayaa shaqeeya markaad riixdo {{key:Enter}} ama aad ka baxdo goobta. Isbeddel kasta waa hal tallaabo oo aad dib u noqon kartaa.

## Tabs-ka warbixinta (hoose)

- {{ui:Problems}}: waxa kasta oo DetailCraft aanu dhisi karin ama uu rabo inaad hubiso, oo leh badhanka {{ui:Select}} safka kasta. Tab-ka wuxuu muujiyaa tirada gudaha qaw-yaasha.
- {{ui:Bill of materials}}: qaybaha, isku-dhisyada, iyo bolt-yada iyo alxanka, miisaankooda, iyo xidhiidhka {{ui:Download CSV}}. Guji calaamad qayb si aad u doorato qaybtaas.
- {{ui:Bending schedule}}: calaamad kasta oo baar ah oo aasaas kasta ku jirta, oo leh xidhiidhka {{ui:Download CSV}}.

Marka tab la xulo, {{key:Left}} iyo {{key:Right}} waxay u dhexeeyaan tabs-ka.

## Status bar-ka

Xariiqda ku socota hoose waxay leedahay saddex qaybood: isgoyska shabakadda ee mouse-ka hoosteeda intaad dhigayso, fariinta ugu dambeysay (wixii dhacay, ama sababta wax loo diiday), iyo wadarta socota ee qaybaha, bolt-yada, miisaanka birta iyo miisaanka rebar. Marka ficil uu u muuqdo inuusan wax samaynin, marka hore fariinta halkan ka akhri.

Cinwaanka tab-ka browser-ka wuxuu ku bilaabmaa dhibic (•) inta moodeelku leeyahay isbeddello aadan kaydin.

## Shaashad yar

Ka hooseeya qiyaastii 760 pixel ballaca, tiirarku way ku kala dhacaan: toolbar, muuqaal, status bar, {{ui:Properties}}, tabs-ka warbixinta, kadibna panel-ka {{ui:Model}} ugu dambeeya. Bogga u gudub si aad u gaarto. DetailCraft waxa loo habeeyey shaashad desktop ama laptop; telefoonku waa u fiican yahay in la daawado, ma aha in la faahfaahiyo.
