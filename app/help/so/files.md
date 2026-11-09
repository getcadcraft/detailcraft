---
title: Fur, kaydi iyo soo saar faylasha
summary: Faylka moodeelka DetailCraft, soo saarista kasta oo uu qoro, meesha faylashu tagaan, iyo waxa ka duwan browser-ka iyo xiriirka.
keywords: fur, kaydi, soo saar, soo deji, fayl, json, ifc, nc1, dstv, csv, pdf, zip, qaababka, soo geli
from: 6fbc8e8f
---

DetailCraft wuxuu leeyahay hal fayl oo gaar ah, moodeelka, iyo shan soo saar. Kaydin kasta iyo soo saar kasta waa soo dejin. Wax lagama soo raro, waxna server kuma kaydsan.

## Faylka moodeelka

Moodeel DetailCraft waxa lagu kaydiyaa `<name>.detailcraft.json`, halkaas oo `<name>` yahay magaca moodeelka ee panel-ka {{ui:Model}}. Waxa ku jira shabakadaha, heerarka, xubnaha (oo leh godadkooda iyo gooyooyinkooda), xidhiidhyada iyo habayntooda, aasaasyada iyo profile-adaada gaarka ah.

Qaybaha, calaamadaha, boolt-yada, weldada iyo baararka lama kaydiyo: DetailCraft mar kasta markuu furmo ayuu dib ugu xisaabiyaa moodeelka. Taasi waa sababta faylka moodeelku yar yahay.

### Kaydi

1. Ku qor magac goobta {{ui:Name}} ee sare ee panel-ka {{ui:Model}}.
2. Dooro {{ui:Save}} kooxda {{ui:File}}, ama riix {{key:Mod+S}}.
3. Browser-ku wuxuu soo dejinayaa `<name>.detailcraft.json`. Status bar-ku wuxuu leeyahay "La kaydiyay … (la soo dejiyay)", dhibcda ku taal bilowga cinwaanka tab-ka browser-ka way baxaysaa.

Kaydin kasta waa soo dejin cusub. Browser-ku ma dhejiyo faylka aad furtay; si waafaqsan dejinteeda wuxuu ku darayaa lambar magaca, sida `Frame (1).detailcraft.json`, ama wuxuu weydiinayaa meesha lagu kaydiyo. Nuqullada aad rabto inaad hayso ku magacow adiga oo bedelaya magacyada soo dejinta.

:::chromium
Chrome iyo Edge waxay ku kaydiyaan folder-ka Downloads ilaa **Ask where to save each file before downloading** lagu shido dejinta soo dejinta browser-ka. Shid haddii aad rabto inaad folder iyo magac fayl doorato mar kasta.
:::

:::firefox
Firefox wuxuu ku kaydiyaa folder-ka Downloads, ama wuu weydiin doonaa mar kasta haddii **Always ask you where to save files** ay ku shidan tahay dejinteeda.
:::

:::safari
Safari wuxuu ku kaydiyaa folder-ka Downloads. Si aad folder-ka u beddesho, fur **Safari, Settings, General, File download location**.
:::

### Fur

1. Dooro {{ui:Open}} kooxda {{ui:File}}, ama riix {{key:Mod+O}}.
2. Dooro fayl `.detailcraft.json`.

Ama fayl ka jiid {{pick:mac=Finder|windows=File Explorer|linux=maamulaha faylalkaaga}} oo ku dhig muuqaalka. Muuqaalku wuxuu leeyahay "Drop a DetailCraft model to open it" inta aad jiidayso.

Haddii moodeelka furan uu leeyahay isbeddello aan la kaydin, DetailCraft marka hore wuu weydiinayaa: {{ui:Cancel}}, {{ui:Discard changes}} ama {{ui:Save first}}.

DetailCraft wuxuu hubiyaa goob kasta oo faylka ah ka hor intuusan isticmaalin. Wax aan loo isticmaali karin waa la iska daayaa, status bar-kuna wuxuu sheegaa waxa ka dhacay, tusaale ahaan "2 xubin ma sax ahayn oo laga tegay." Moodeel uu kaydiyay DetailCraft cusub waa la diidaa oo fariin ayaa la siiyaa, halkii laga furi lahaa qayb ahaan qaldan.

### Waxa uu furayo

Faylalkiisa moodeelka (`.json`, ilaa 50 MB) iyo faylasha IFC (`.ifc`, IFC2X3 ama IFC4, ilaa 200 MB). Fayl IFC, oo la furo ama lagu soo geliyo {{ui:Import IFC}}, wuxuu noqdaa moodeel cusub oo ka kooban biimaha, tiirarka, xubnaha, saxanada, shabakadaha iyo heerarka, godadkooda iyo gooyooyinkooda la jaray, boolt-yadana boolt madaxbannaan ah; warbixin ayaa sheegta waxa la iska daayay. Eeg [Soo saarista IFC](topic:ifc-export#import). Weli ma furo DWG, DXF ama moodeel barnaamij kale oo naqshadeyn ah; isku dayida waxay muujinaysaa "DetailCraft wuxuu furaa moodeeladiisa (.detailcraft.json) iyo faylasha IFC (.ifc)."

## Shaqo lumay, faylal dhowaan la furay, app-ka desktop-ka

- Intaad moodeelka isbeddel aan kaydin ku jirto, DetailCraft wuxuu nuqul ku hayaa browser-kan. Haddii tab-ka ama browser-ku joojo kahor intaadan kaydin, marka xiga ee aad furto DetailCraft wuxuu weydiinayaa **Soo celi shaqadaada?**: soo celi nuqulka, ama iska daa. Eeg [Soo celi shaqadaada](common:recover).
- Moodeelada aad dhowaan furtay ayaa ku taxan shaashadda bilowga markii browser-ku ogolaado DetailCraft inuu mar kale furo; guji mid si aad u furto mar kale.
- App-ka desktop-ka, {{ui:Save}} wuxuu moodeelka ku qoraa faylka aad furtay (browser-ka waxa uu soo dejiyaa nuqul), laba jeer gujinta moodeel DetailCraft ama fayl IFC wuxuu ku furaa DetailCraft.

## Soo saarista

Dhammaan soo saaristu waxay isticmaalaan magaca moodeelka. Dooro kooxda {{ui:Output}}.

| Badhanka | Faylka | Waxa ku jira |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: dabaqyada, shabakadaha, qayb kasta oo bir ah oo profile extrusion ah oo leh godadkeeda iyo gooyooyinkeeda, isku-dhisyada, boolt-yada iyo alxanka, aasaasyada iyo baar kasta. Eeg [Soo saarista IFC](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Hal fayl DSTV `.nc1` calaamad qayb kasta. Eeg [U dir faylasha NC dukaanka](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Saddex miis hal fayl ku jira: qaybaha, isku-dhisyada, iyo boolt-yada iyo alxanka. Eeg [Calaamadaha iyo liiska alaabta](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Calaamad kasta oo baar ah ee aasaasyada. Eeg [Aasaasyada iyo rebar](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` wuxuu haystaa xaashi calaamad qayb kasta; {{ui:Download this sheet}} wuxuu siinayaa midka la muujiyay (A3 haddii aadan cabbir kale dooran). Eeg [Samee naqshadaha shaqada](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ama `.dxf`, dhowr midna `<name> drawings DWG.zip` (ama `DXF.zip`) | Qorshayaasha, muuqaalka dhinacyada iyo naqshadaha isku-dhiska, cabbirka xaashiga ee aad dooratay; DWG iyo DXF cabbir buuxa, 1 unit = 1 mm warqadda. Eeg [Naqshadaha guud-ka-hoosaadka iyo isku-dhiska](topic:drawings). |

### Qoraallada faylasha CSV

- Waxay ku bilaabmaan calaamad byte-order ah si barnaamijyada miisaska ay u akhriyaan xarfaha lakabka ah sax ahaan.
- Unug ku bilaabma `=`, `+`, `-` ama `@` (oo aan ahayn lambar caadi ah) waxa hor yaal apostrophe, si miisku aanu u socodsiin sida formula.
- Dherarka waa millimeter, miisaanka waa kilogram.

### Qoraallada PDF

Qoraalka PDF wuxuu isticmaalaa font-ka caadiga ah ee Helvetica. Xarfaha uusan lahayn (ka baxsan Western European set) waxa lagu daabacaa "?", status bar-kuna wuxuu kuu sheegaa inta ay tahay.

## Unit-yada

DetailCraft wuxuu ka shaqeeyaa millimeter meel walba: shabakado, heerar, isku-xidhka, profile-yo, godad iyo soo saar kasta. Magacyada profile-ka waxay haystaan qaabkoodii la daabacay (W12x50 waa qeexid US ah, in kasta oo cabbirradiisu lagu muujiyo mm). Weli ma jiro gelin inch ah.

## Online iyo offline

Furidda, kaydinta iyo soo saarista oo dhan browser-kaaga ayay ka dhacaan, sidaas darteed way shaqeeyaan isla sidii, xiriir la'aan ama xiriir leh, markii DetailCraft uu furmo.

Si aad DetailCraft ugu isticmaasho xiriir la'aan mar dambe, mar online ah dooro {{ui:Save for offline}} app bar-ka. Badhanku wuxuu tirinayaa ("Kaydinaya 3 ka 20") ka dibna wuxuu akhrinayaa {{ui:Offline ready}}. Nuqulka la kaydiyay waxa ku jira maktabadda grafikada 3D (ku dhawaad 2.6 MB) iyo caawimaaddan, sidaas darteed markii la kaydiyo, muuqaalka 3D, dhammaan soo saarista iyo caawimaadduba offline way shaqeeyaan. Faahfaahinta, iyo waxa weli xiriir u baahan: [Shaqaynta khadka ka baxsan](common:offline).

:::offline
Khadka ka baxsan baad tahay. Haddii app bar-ku muujiyo {{ui:Offline ready}}, furidda, kaydinta iyo soo saarista way shaqeeyaan sidii caadiga. Haddii aysan muujin, tab-kan u fur, ha dib u soo rarin ilaa aad xiriirka dib u heshid, oo hadda kaydi moodeelkaaga.
:::

Kaydinta daruuruhda weli ma diyaar aha, nuqullada desktop-kana weli ma jiraan. Ka dhig nuqul faylasha `.detailcraft.json` sida aad u kaydiso faylal shaqo kale. Wax dheeraad ah ka akhri [Meesha ay faylashaadu tagaan](common:your-files).

## Shaqo aan la kaydin

DetailCraft moodeelka wuxuu ku hayaa oo kaliya tab-ka furan. Haddii aad xirto ama dib u soo rarto tab-ka isbeddello aan la kaydin, browser-ku wuxuu weydiinayaa inaad bogga ka baxdo; erayada waa kuwa browser-ka laftiisa. Ku kaydi {{key:Mod+S}} inta badan.
