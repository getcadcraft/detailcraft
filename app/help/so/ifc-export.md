---
title: Dhoofinta IFC ee isku-socodka
summary: Qor fayl IFC4 oo ah moodeelka oo dhan, birta, boolalka, saldhigyada iyo bir-bararka, si aad ula wadaagto naqshadeeyayaasha, injineerada iyo software kale.
keywords: ifc, ifc4, ifc2x3, bim, dhoofinta, soo geli, soo geli ifc, godad, boolal, boolal xor ah, furitaanno, isku-socodka, isku-beddelka moodeelka, step, openbim, clash, muuqaal
from: cfcb0cd6
---

Dhoofinta IFC waxay qortaa moodeelka oo dhan hal fayl IFC4 ah oo software BIM iyo muuqaalada IFC ka furi karaan.

## Dhoofi

1. Dooro {{ui:IFC}} kooxda {{ui:Wax soo saar}}.
2. Browser-ka wuxuu soo dejiyaa `<name>.ifc`. Bar-ka xaaladda wuxuu sheegayaa waxa gashay, tusaale ahaan "IFC4 waa la dhoofiyay: 25 qayb, 88 xidh, 7 aasaas, 132 bir-bar."

Haddii moodeelku aanu lahayn qaybo, aasaasyo ama bir-bar, bar-ka xaaladda wuxuu leeyahay "Weli wax la dhoofiyo ma jiraan."

## Waxa fayl-ka ku jira

| DetailCraft-ka | Fayl-ka IFC |
|---|---|
| Dabaq kasta | Dabaq dhismeed (IfcBuildingStorey), hoos hal mashruuc, goob iyo dhismeed |
| Gridyada | IfcGrid oo leh axes iyo calaamadahooda |
| Tiirarka, biimarka, xidhka | IfcColumn, IfcBeam, IfcMember (xidhka), mid kasta oo ah extrusion qaab profile caadi ah oo leh cabbirradiisa dhabta ah |
| Saxannada, saxannada dhamaadka, saxannada aasaaska | IfcPlate |
| Godadka iyo jaridda | Openings (IfcOpeningElement) oo laga gooyay qaybta |
| Xubin iyo saxannada laxaamaysan | Isku-dhis (IfcElementAssembly) oo calaamadda isku-dhiska lagu calaamadeeyay |
| Boolalka iyo rodadka angkoorka | IfcMechanicalFastener oo leh dhexroor iyo dherer |
| Aasaasyo | IfcFooting (pad footing), oo qoraalka kongireetka ah agabkiisa |
| Bir kasta | IfcReinforcingBar oo leh calaamadda biraha, dhexroorka, bakhaarka iyo dherer, oo lagu dhex-jiidey dhexda run-ka dhabta ah oo leh qalloocyo dhab ah |

Calaamad kasta qaybta waa calaamadda qaybta. Element kasta wuxuu sidoo kale wataa property set-ka "DetailCraft" oo leh calaamadahooda, profile-kooda iyo miisaankooda. Element kasta wuxuu ku jiraa dabaqa ugu sareeya ee ka hooseeya ama isla kan ugu hooseeya. Agabka waxaa lagu kooxeeyaa darajada.

## Aqoonsiyada xasilloon ee dib-u-dhoofinta

Aqoonsiga IFC ee element kasta (GlobalId) waxaa laga soo saaray magaca moodeelka iyo aqoonsiga element kiisa gudaha moodeelka. Moodeelka isku mar laba jeer dhoofi, aqoonsiyadu way isku mid yihiin, sidaas darteed software-ka isbarbardhigaya nooca wuu ogaan karaa waxa isbeddelay.

:::warning
Magaca moodeelka oo la beddelo wuxuu beddelaa aqoonsi kasta. Magaca moodeelka isku mid ahaaw inta u dhaxaysa nuqullada mashruuc.
:::

## Hubi

Faylasha IFC ee DetailCraft waxaa akhriya akhriye IFC madax-bannaan oo ku jira test suite-kiisa. Barnaamijyadu way kala duwan yihiin sida ay u akhriyaan IFC, sidaas darteed fayl-ka ku fur software-ka kooxdaadu isticmaasho ka hor intaadan ku tiirsanaan. Abbaanduulaha BimCraft ee CadCraft wuxuu sidoo kale furaa faylasha IFC.

## Weli ma jiro

- Keenista connections-ka, aasaasyada iyo bir-bararka fayl IFC ka. {{ui:Soo geli IFC}} wuxuu keenaa biimarka, tiirarka, xubinta (xidhka), saxannada, gridyada, dabaqyada, godadka, jaridda iyo boolalka, wuxuuna liistaa waxa ka reebay.
- Xogta analytical-ka ama structural-analysis-ka.
- Wax ka duwan IFC4 reference view.

## Soo geli

{{ui:Soo geli IFC}} kooxda {{ui:Fayl}} (ama dhigista fayl `.ifc` muuqaalka dushiisa) waxay sameysaa moodeel cusub oo ka yimid fayl IFC2X3 ama IFC4:

- **Biimarka, tiirarka, xubinta (xidhka) iyo saxannada** oo jidhkoodu yahay hal profile la extrude gareeyay oo DetailCraft yaqaano, oo lagu xidhay catalog-ka ama loo hayo profile gaar ah; **gridyada** iyo **dabaqyada** faylka gridka iyo dabaqyada.
- **Godad:** godad wareeg ah oo kasta (IfcOpeningElement oo ku dhex-jeexaya qayb la keenay), oo toosan qaab qayb ka mid ah DetailCraft: web-ka ama flange-yada I-shape ama channel, derbiyada tuubada, saxanka, lugaha angle-ka. God ka gudba labada derbi ee tuubo wuxuu soo gala hal mar.
- **Jaridda:** godad afar-geesle ah oo ka buuxda ballaca I-shape ama channel laga bilaabo hal dhamaad, xagga hoose ee sare ama xagga sare ee hoose.
- **Boolalka:** kasta IfcMechanicalFastener ama IfcFastener, oo leh dhexroor, dherer, darajo iyo nooc (boolt ama rod angkoor), **boolt xor ah** (loose bolt). Boolalka xorta ah waxay muuqdaan muuqaalka, liiska alaabta iyo dhoofinta IFC, waxayna sii joogaan meesha ay joogaan marka xubnaha la guuro. Daafaca {{ui:Sifooyinka}}, marka wax la doorin, wuu tiriyaa, wuuna leeyahay {{ui:Ka saar boolalka xorta ah}} marka connections ku darayso.

Warbixinta waxay liistaa wax kasta oo kale sida fasalka iyo sababta laga reebay: derbiyada iyo sagxadaha, aasaasyada iyo bir-bararka, godadka dheer, godadka tuubooyinka wareegga ah, iyo xidhiidhka (fayl IFC wuxuu qaadaa saxannada iyo boolalkooda, ma aha xeerka sameeyay).
