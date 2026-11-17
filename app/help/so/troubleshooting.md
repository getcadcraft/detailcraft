---
title: Xallinta dhibaatada
summary: Waxa farriimaha DetailCraft ka dhigan yihiin iyo waxa la sameeyo, laga bilaabo muuqaalka 3D oo maqan ilaa xidhiidhyo aan dhismin.
keywords: dhibaato, khalad, ma shaqeynayo, caawin, hagaaji, farriin, diidan, webgl, madhan, digniin, ma suurogal, arrin
from: f8c3b2b1
---

Inta badan diidmooyinka waxaa lagu sharaxay bar-ka hoose ee shaashadda, ama tab-ka {{ui:Problems}}. Marka hore akhri kuwaas. Farriimaha hoose waxaa lagu soo xigtay sida DetailCraft u muujiyo.

## Muuqaalka 3D ma muuqdo

**"Browser-kan ma bilaabi karin garaafyada 3D (WebGL). Moodeelka, warbixinnada iyo dhoofinta weli way shaqeeyaan."**

Browser-ku ma bilaabi karin WebGL, kaas oo garaafyada 3D ee DetailCraft ku sawiro.

1. Cusbooneysii browser-ka nooca ugu dambeeya.
2. Shid xawaaraynta qalabka oo dib u bilow browser-ka (eeg hoos).
3. Cusbooneysii darawalka garaafka, ama isticmaal browser kale. Desktop-yada fog iyo mashiinnada virtual-ka badanaa ma lahan WebGL.
4. Intaas dhexdeed waad sii shaqayn kartaa: ku dhig xubno foomka {{ui:Add by grid}}, akhri warbixinnada, oo dhoofi. Guji muuqaalka oo keliya ayaa u baahan WebGL.

:::chromium
Si aad u shidato xawaaraynta qalabka, fur **Dejinta, Nidaamka** oo shid **Isticmaal xawaaraynta garaafyada markii la heli karo**, kadibna dib u bilow.
:::

:::firefox
Si aad u shidato xawaaraynta qalabka, fur **Dejinta, Guud, Waxqabadka**, ka saar calaamadda **Isticmaal dejinta waxqabadka ee la taliyay**, oo calaamadi **Isticmaal xawaaraynta qalabka markii la heli karo**. Dib u bilow Firefox.
:::

:::safari
Safari-ga WebGL waa la shidaa caadi ahaan. Cusbooneysii macOS haddii aragtidu weli bilaabmin, oo hubi in wax kordhin ah aanu xannibin.
:::

Wax dheeraad ah ee [Browser-yada iyo kombiyuutarada](common:browsers).

## Gujinta muuqaalka wax ma sameeyo

- **Ma jiro isgoys u dhow guji.** Qalabyada dhigista waxay ku qabtaan isgoysyada gridka oo keliya. Guji meel ka fog dhibcaha ma sameeyo wax. U soo dhow ilaa dhibcuhu iftiimo.
- **Qalabku waa {{ui:Select}} oo waxaad gujisay meel madhan.** Taasi waa ka saaraysaa xulashada.
- **Waad jiidday.** Riix iyo sii deyn oo ka fog dhowr pixel waa jiid: wuxuu leexiyaa ama wuu u socodsiiyaa muuqaalka.
- **Qaybta waa la jaray.** Gudaha {{ui:Plan}} iyo {{ui:Elevation}}, birta ka baxsan goynta waa la qariyay oo ma la guji karo. U beddel {{ui:3D}}.
- **Isgoysku waa heer qaldan.** Gudaha {{ui:3D}}, isgoysyada dhowr heer ayaa shaashadda isku dul marin kara; gujintu waxay qaadataa kan ugu dhow. Isticmaal {{ui:Plan}} ama {{ui:Elevation}}.

## Farriimaha dhigista

| Farriin | Waxa la sameeyo |
|---|---|
| Ma jiro dabaq ka sarreeya Heer 2 oo tiirku gaari karo. Marka hore dabaq ku dar. | Ku dar dabaq {{ui:Levels}}, ama guji heer ka hooseeya |
| Dooro isgoys kale oo dhamaadka kale. | Waxaad gujisay isla barta labo jeer |
| Labada dhamaad isla barta ayay yihiin. | Gudaha {{ui:Add by grid}}, "Laga bilaabo" iyo "Ilaa" waa isku mid |
| Ku dar khadadka gridka bidix si aad xubnaha u dhigto. | Moodeelku ma lahan khadadka gridka hal jihood |
| Profile aan la aqoon "…" | Profile-ka ma ku jiro katalogka ama profile-yada gaarka ah ee moodeelka. Dooro mid liiska ka mid ah |
| Qor tiro. | Goob tiro ah ayaa madhan ama qoraal ayaa ku jira |

## Xidhiidhyadu ma dhismaan

### "Biimkan ma dhamaado khadka tiirka."

Saxannada dhamaadka waxay u baahan yihiin in dhamaadka biimka uu si saxda ah ugu yaal khadka tiir toosan, u dhexeeya hoosta iyo sareeya (1 mm dhexdood). Hubi {{ui:Ends (x, y, z mm)}} ee biimka iyo booska tiirka.

### "Biimkan wuxuu ku xidhmaa web-ka tiirka ama xagal"

Ama tab-ka {{ui:Problems}}: "Biimyada ku xidhmaya web-ka tiirka weli lama dhisin: rogo tiirka 90° ama isticmaal xidhiidh kale."

Biimku wuxuu ku xidhmaa web-ka tiirka. Dooro tiirka oo deji {{ui:Rotation (°)}} ilaa 90, kadibna mar kale isku day. Xidhiidhyada xagalka ah weli lama dhisin.

### "Saxannada dhamaadka waxaa loo dhisaa biimyada toosan oo keliya (biimkan way sinjiyahay)."

Labada dhamaad ee biimku waa inay isla heer ku jiraan.

### "Saxannada dhamaadka waxay u baahan yihiin biimka istaagan (rogidda 0)."

Dib u deji {{ui:Rotation (°)}} ee biimka ilaa 0.

### "Saxannada dhamaadka waxay u baahan yihiin biim I-shape." / "Saxannada dhamaadka waxay u baahan yihiin tiir I-shape."

Keliya qaabka I (W, IPE, HEA, HEB ama I gaar ah) ayaa qaadan kara saxannada dhamaadka.

### "Dhamaadka biimka ma aha khadka tiirka mar dambe."

Biimka ama tiirka ayaa la dhaqaajiyay kadib markii xidhiidhka la daray. Dib ugu celi, ama tirtir xidhiidhka.

### "Xidhiidhyadu waxay xubintan ku gooyeen wax aan dhererka lahayn."

Xidhiidhyada labada dhamaad ayaa xubinta ka gooya wax ka dheer dhererkeeda, tusaale biim aad u gaaban oo u dhexeeya tiiro aad u qoto dheer. Hubi dhamaadyada xubinta iyo dhumucda saxanka.

### "Ma jiro xidhiidh kale oo sidan oo aan xidhiidh lahayn …"

{{ui:Similar}} wuxuu koobiyeeyaa oo keliya xidhiidhyada leh isla profile-ka biimka, isla profile-ka tiirka iyo isla nooca xidhiidhka, biim ku xidhan flanj-ka, oo aan weli xidhiidh lahayn.

### "Dhamaadyada labaduba horay xidhiidh ayay u leeyihiin." / "Tiirkan horay ayuu base plate u leeyahay."

Dooro xidhiidhka jira si aad u beddesho, ama tirtir marka hore.

## Digniinaha tab-ka Problems

Digniinaha ma joojiyaan xidhiidh ama aasaas inuu dhismo; waxay kaa codsanayaan inaad hubiso. Digniinaha geeska iyo masaafada waxay isticmaalaan heerarka ugu yar ee EN 1993-1-8 Table 3.3 (geeska 1.2 × dalool, fogaanta 2.2 × dalool, ballaca 2.4 × dalool). Haddii mashruucaagu adeegsado xeer kale, digniintu waxa laga yaabaa inaysan khuseyn; DetailCraft ma naqshadeeyo xidhiidhyada.

"dalool ayaa ka baxsan dhamaadka qaybta" waxay ka dhigan tahay in x-ka daloolka uu ka yar yahay 0 ama ka badan dhererka la gooyay. Xusuus: x wuxuu ka bilaabmaa bilowga goynta, kadib markii xidhiidhyadu xubinta ka gooyeen.

## Beddelka aasaasku diidmay

| Farriin | Waxa la sameeyo |
|---|---|
| Daboolku meel uma dhigo birta aasaaskan. | Ka dhig aasaaska mid weyn ama daboolka mid yar |
| Aasaasku aad ayuu u hooseeyaa laba lakab oo birta ah gudaha daboolka. | Ka dhig mid qoto dheer, ama yaree daboolka |
| Birta bilowga ma ku mahayso aasaaska daboolka 75 mm. | Tiro yar oo bilow, masaafo dhow, ama aasaas weyn |
| Masaafada birta waa inay noqotaa 50–1000 mm. | Ku qor masaafo u dhexaysa tiradaas |
| Dhererku waa inuu noqdaa 300–50000 mm. | Cabbirka aasaaska waxaa leh xadad: dhererka iyo ballaca 300 ilaa 50000, qoto dheerka 150 ilaa 10000 |

## Gridka iyo dabaqyada waa la diidaa

| Farriin | Waxa la sameeyo |
|---|---|
| Gridka lambarka: sii hal masaafo oo u dhexeeya labada khad kasta (4). | Tiri farqiyada: shan khadood waxay u baahan yihiin afar masaafo |
| Gridka xarfaha: masaafooyinku waa inay noqdaan millimitir togan. | Ma jiraan eber, tiro taban, ama qoraal |
| Gridka lambarka: calaamadaha gridka waa inay kala duwan yihiin. | Laba khadood ayaa leh isla calaamad |
| Ugu badnaan 60 khad oo grid ah jihada kasta. | Moodeelka kala qaybi |
| Ilaa hal dabaq ayaa la hayaa. | Safafka dabaqyada oo dhan waad tirtirtay |
| Dabaq kasta waa inuu magac lahaadaa. / Laba dabaq waxay ku magacaaban yihiin "…". | Dabaq kasta u bixi magac kala duwan |

## Furitaanka faylku waa fashilmay

| Farriin | Sababta |
|---|---|
| DetailCraft wuxuu furaa moodeelladiisa (.detailcraft.json). Soo-dejinta IFC weli lama dhisin. | Faylku ma aha fayl `.json` |
| Tani ma aha moodeel DetailCraft ah (ma aha JSON). | Faylku waa dhacay ama waa JSON kale |
| Tani ma aha moodeel DetailCraft ah. | JSON ka timid barnaamij kale |
| Moodeelkan waxaa kaydiyay DetailCraft cusub (qaabka 2). | Ku fur DetailCraft cusub ee kaydiyay |
| Faylkaasi aad buu u weyn yahay si uu u noqdo moodeel DetailCraft. | Ka badan 50 MB |

Marka fayl uu ka furmo digniino sida "2 xubnood ma sax ahayn oo la iska daayay." qaybta kale ee moodeelka way fiican tahay. Ha ku qorin asalka ilaa aad hubiso waxa la iska daayay.

## Dhoofinta

| Farriin | Sababta |
|---|---|
| Wax la dhoofin karo weli ma jiro. | {{ui:IFC}} oo moodeel madhan |
| Ma jiraan qayb qaab I ama saxan oo faylal NC lagu qori karo. | Moodeelka waxa kaliya ku jira kanaal, xagal ama tuubo |
| Lama qorin (ilaa hadda qaab I iyo saxanno oo keliya): … | Calaamadahaas ma aha qaab I ama saxan; kuwa kale waa la qoray |
| Ma jiraan aasaasyo, sidaas darteed birta jadwalka ma jiro. | {{ui:Bending}} oo aan aasaas lahayn |
| … xaraf ka baxsan font-ka PDF ayaa lagu daabacay "?". | Magaca moodeelka ama darajada waxaa ku jira xaraf uu font-ka PDF lahayn |

{{ui:Shop drawing}} oo madoobaaday: moodeelka weli qayb ma lahan.

## Soo dejinta ma muuqato

Kaydinta iyo dhoofinta kasta waa soo dejin browser. Hubi liiska soo dejinta browser-kaaga. Haddii browser-ku weydiiyo ka hor intaysan soo dejin faylal dhowr ah, ama xannibo soo dejinta bogan kan, ogolaada. Safari-ga, hubi badhanka soo dejinta ee qalabka sare.

## Furayaasha ma shaqeynayaan

- Kursoorku wuxuu ku yaal qoraal ama lambar: furayaasha qalabka iyo {{key:Delete}} waa la iska dhegeysanayaa si aad u qori karto. Riix {{key:Tab}} ama guji muuqaalka.
- Sanduuq ayaa furan: marka hore xir.
- Browser-ku wuxuu haystaa keyboard-ka (tusaale, bar-ka cinwaanka): guji gudaha DetailCraft.
- {{key:Ctrl+Shift+F}} wuxuu isticmaalaa Control xitaa Mac-ka dushiisa.

## Dhibaatooyinka khadka ka baxsan

Badhanka {{ui:Save for offline}} ee bar-ka app-ka wuxuu muujinayaa xaaladda nuqulka khadka ka baxsan. Sida kaydintu u shaqeyso: [Shaqaynta khadka ka baxsan](common:offline).

| Badhanku wuxuu akhrinayaa | Waxa uu ka dhigan yahay | Waxa la sameeyo |
|---|---|---|
| {{ui:Save for offline}} | Weli ma jiro nuqul khadka ka baxsan browser-kan | Dooro markii aad khadka ku jirto |
| Saving 5 of 20 | Kaydinta ayaa socota | Sug {{ui:Offline ready}}; ilaali tab-ka furan |
| {{ui:Offline ready}} | DetailCraft, muuqaalka 3D, dhoofin kasta iyo kaalmadan waxay shaqeeyaan iyada oo aan xiriir jirin | Waxba. Riix si aad u hesho {{ui:Save again (get the newest version)}} ama {{ui:Remove the offline copy}} |
| {{ui:Could not save}} | Qaar ka mid ah faylalka lama soo dejin | Hubi xiriirkaaga, oo riix si aad mar kale isku daydo |
| {{ui:Offline not available}} | Daaqaddan ma hayn karto nuqul khadka ka baxsan: daaqadaha gaarka ah iyo kombiyuutarada maamulka qaarkood way xannibaan | Isticmaal daaqad caadi ah, ama shaqee khadka ku jirta |

Haddii aad khadka ka baxsan tahay oo badhanku aanu akhrin {{ui:Offline ready}}, ha dib u soo rarin ama ha xirin tab-ka: waxa la soo rarey weli waa shaqeynayaa. Kaydi moodeelkaaga {{key:Mod+S}} oo sug ilaa aad khadka ku soo noqoto.

## Shaqada aan la kaydin

Haddii browser-ku weydiiyo inaad bogga ka baxdo, DetailCraft wuxuu leeyahay isbeddello aan la kaydin. Dooro inaad joogto, kadibna riix {{key:Mod+S}}. DetailCraft ma soo celin karo moodeel kadib markii tab-ka la xiro.

## Weli waa dhib

Qor waxa aad samaysay iyo farriinta saxda ah, oo nala soo xidhiidh [bogga taageerada](https://getcadcraft.com/support).
