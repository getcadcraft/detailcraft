---
title: Újdonságok a 0.7 verzióban (korábbi)
summary: Acélszelvények tervezési ellenőrzése ASCE 7 vagy EN 1990 szerinti teherkombinációkkal, rúdelemek ellenőrzése AISC 360 vagy EN 1993-1-1 szerint, az acélmodell USD-exportja, USD-hez készült asszisztenseszköz, acélszalag nagy és kis gombokkal, elrendezhető panelek és mozgatható párbeszédpanelek.
keywords: újdonságok 0.7, korábbi kiadás, kiadási megjegyzések, változásnapló, változások, 0.7, verzió, új funkciók, tervezési ellenőrzések, acéltervezés, kihasználtság, teherkombinációk, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, nemzeti melléklet, tető hasznos terhe, alakváltozási határ, usd, usda, usdc, usdz, openusd, asszisztens, mcp, acélszalag, szalag, osztott gomb, mértékegységek, kompakt, panelek, párbeszédpanelek, portugál
from: 54a7a8f0
---

Az alábbiakban a DetailCraft 0.6-hoz képest a 0.7 verzióban történt változások szerepelnek. A 0.6 keretanalízisének most második lépése van: az acélrudak ellenőrzése tervezési előírás szerint.

## Újdonságok

### Gérvágásos illesztések (0.7.1)

- **Két I-szelvény szögben találkozik**, például keretsarokban vagy gerincnél: jelölje ki mindkettőt, válassza a {{ui:Kapcsolás}} csoport {{ui:Továbbiak}} menüjéből a {{ui:Mitre}} parancsot, és mindkét végük a szöget felező síkon lesz levágva. Az összecsavarozott homloklemezek és a gerincmerevítők az új Gérvágás párbeszédpanelben jelölőnégyzetek; a számozott mezők a beírás közben készülő illesztésrajzhoz igazodnak. A gérvágás követi a rudakat, ha mozognak, és megjelenik a rajzokon, az NC-fájlokban (ferde vágások), az IFC-ben és az anyagjegyzékben. Lásd: [Gérvágásos illesztések](topic:mitres).

### Tervezési ellenőrzések

- **Teherkombinációk a tervezési előírásból.** Az {{ui:Analízis}} lapon az új {{ui:Tervezési ellenőrzések}} blokkban van a {{ui:Tervezési előírás}}: ASCE 7 + AISC 360 (USA, LRFD) vagy EN 1990 + EN 1993-1-1 (Eurocode). Adja meg minden teheresethez a típusát (állandó, hasznos, az új tetőre ható hasznos teher, hó, szél, földrengés), nyomja meg a {{ui:Kombinációk készítése}} gombot, és a DetailCraft felírja a teheresetei előírás szerinti teherbírási és használhatósági kombinációit. A saját maga beírt kombinációk megmaradnak. Lásd: [Kombinációk készítése](topic:design-checks#make-the-combinations).
- **Nemzeti melléklet értékei.** Eurocode esetén a tényezők az ajánlott értékekről indulnak; a {{ui:Nemzeti melléklet értékei}} résznél beírhatja az országa értékeit, azok pedig a modellben mentésre kerülnek. Lásd: [Kombinációk készítése](topic:design-checks#make-the-combinations).
- **Rúdelemek ellenőrzése.** A {{ui:Rúdelemek ellenőrzése}} minden acél I-szelvényt ellenőriz húzásra, nyomásra kihajlással, hajlításra oldalirányú kifordulással, nyírásra, normálerővel kombinált hajlításra, valamint a beállított {{ui:Alakváltozási határ}} szerinti lehajlásra. A táblázat mutatja az egyes rudak kihasználtságát, a mérvadó ellenőrzést és annak kombinációját; a rudak színezve jelennek meg a modellen (kék, zöld, okker, piros, szürke: nincs ellenőrizve). Lásd: [Rúdelemek ellenőrzése](topic:design-checks#check-the-members).
- **A jelentésben.** A {{ui:Jelentés (PDF)}} és a {{ui:Jelentés (CSV)}} tartalmazza a tervezési előírások kiadásait, a beállításokat, a rudankénti kihasználtságot és minden felhasznált előíráspontot. Lásd: [A jelentés](topic:design-checks#the-report).
- **Segédeszköz mindaddig, amíg mérnök át nem nézte.** Csak elsőrendű erőket használ. A csövek, szögacélok, csatornák, hegesztett szelvények és a karcsú vagy 4. osztályú elemek „nincs ellenőrizve” jelzést kapnak, az okkal együtt; a csavarás, a kapcsolatok és a betonszerkezetek nincsenek ellenőrizve. Lásd: [Mi nincs ellenőrizve](topic:design-checks#what-is-not-checked).

### USD

- **Az acélmodell exportálása USD-ként.** A {{ui:Kimenet}} csoport {{ui:USD}} parancsa a modellt ezekben a formátumokban írja ki: {{ui:Szöveg (.usda)}}, {{ui:Bináris (.usdc)}} vagy {{ui:Csomag (.usdz)}}, renderelő programokhoz és jelenetösszeállításhoz. Minden szerelvény tartalmazza az alkatrészeit, minden alkatrész a szelvényét a hossza mentén futtatva, a levágott kiváltásokkal, és mindegyik megkapja az azonosító jelét, profilját, minőségét, hosszát és súlyát. A csavarlyukak, csavarok, hegesztések és alapok nincsenek benne a USD-hálókban. Lásd: [Az acélmodell exportálása USD-ként](topic:usd).

### Asszisztensek

- **USD asszisztenseknek.** A saját asszisztens, amely a CadCraft Studion keresztül kapcsolódik, exportálhatja a modellt USD-ként (`usd_export`), és a Studióban egy engedélyezett mappába írhatja ki. Lásd: [Mit kérhet az asszisztens](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Módosítások

- Az **acélszalag** nagy és kis gombokat kapott: a nagy {{ui:Gerenda}} a kis {{ui:Oszlop}}, {{ui:Merevítő}} és {{ui:Lemez}} mellett a {{ui:Modellezés}} › {{ui:Rúdelemek}} csoportban; a nagy {{ui:Homloklemezek}} a {{ui:Részletezés}} › {{ui:Kapcsolatok}} csoportban, a {{ui:Toldás}} és a {{ui:Csomólemez}} egy osztott gombon osztozik; a nagy {{ui:Beillesztés}} a {{ui:Szerkesztés}} › {{ui:Vágólap}} csoportban, a {{ui:Beillesztés helyben}} és a {{ui:Kettőzés}} pedig a csoport nyílja mögött érhető el. A {{ui:Gyártás}} › {{ui:Csere}} csoportban az {{ui:USD exportálása}} az IFC mellett áll. A többi menüstílus a régi megjelenésű. Lásd: [Menük, billentyűk és egér](topic:menus-keys-and-mouse#the-three-styles).
- A [A keret analízise](topic:frame-analysis) most már a tervezési ellenőrzésekre mutat, és a kombinációi a tervezési előírás szerint készíthetők.

## Minden alkalmazásban

- **Mértékegységek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Egységek}} résznél külön lista van hosszúságra, területre, térfogatra, szögre és lejtésre, a definíciók szerinti pontos értékekkel (az amerikai földmérési láb külön egység). A nem használt egységek kikapcsolhatók: kikerülnek a listákból; a csillaggal megjelölt egység pedig az új munkák kezdő egysége lesz. Egy fájl mindig megtartja a saját egységét. A DetailCraft saját mezői egyelőre nem követik a listákat: a hosszúságokat továbbra is milliméterben kell beírni. Lásd: [Egységek, beírt értékek és mértékegység-listák](common:unit-lists).
- **Sűrűbb elrendezés és elrejthető panelek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Elrendezés sűrűsége}} › {{ui:Kompakt}} beállítással több minden fér a képernyőre (az érintőképernyők és telefonok megtartják a nagy gombjaikat). Minden oldalsó panelnek vékony címsora van: húzza rá a panelt a dokkoláshoz vagy lebegtetéshez, ejtse egy másik panel sávjára, hogy egy keretben lapokként osszanak meg, rögzítse, hogy a szélre csúszva tűnjön el, vagy rejtse el, és a szélről hozza vissza. Lásd: [A panelek elrendezése](common:arrange-panels#make-the-layout-denser).
- **A párbeszédpanelek mozgathatók.** Húzza a párbeszédpanelt a címsávjánál fogva a rajz útjából; visszatéréskor ott marad, ahol hagyta. A címsávra duplán kattintva újra középre kerül. Lásd: [Párbeszédpanel mozgatása](common:arrange-panels#move-a-dialog).
- **Receptek asszisztenseknek.** Tíz kidolgozott kérés egy saját asszisztens számára (rajz rendezése, rajzlapkészlet plottolása, rajzok ellenőrzése, kérdések a modellről, mennyiségkimutatás összesítése, alkatrész-változat kipróbálása…), mindegyik a hívott eszközökkel és a szükséges engedélyekkel, és mindegyiket a tesztjeink ellenőrizték. Az alkalmazások nem tartalmaznak mesterséges intelligenciát. Lásd: [Receptek asszisztenseknek](common:assistants-recipes).
- **Nyelvek.** A **Português (Portugal)** új a {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Nyelv}} résznél. Ez, valamint a **Português (Brasil)**, az **Español (México)** és a **Bahasa Indonesia** most az alkalmazások minden szavát tartalmazza, piszkozatként, amelyet anyanyelvi szakember még nem olvasott át. A súgótémakörök angol nyelvűek.
- A **CadCraft Studio** megmondja, miért nem sikerült a frissítés-ellenőrzés (még nincs fájl a rendszeréhez, nincs hálózat, hibás aláírás), a „Kész” helyett, és nem hozza vissza a bezárt Újdonságok kártyát, amíg nincs újabb kiadás.

## Ebben a verzióban még nincs

- **A 0.7 nincs kódaláírva.** Az aláírás és a Microsoft Store-csomag a 0.8-ba került át, mert a tanúsítvány ellenőrzése még nem készült el. Ellenőrizze az egyes fájlok melletti SHA-256 értéket a getcadcraft.com/download oldalon. Windowson, ha a SmartScreen leállítja a telepítőt, válassza a {{ui:További információ}}, majd a {{ui:Mégis futtatás}} lehetőséget. Macen első alkalommal kattintson jobb gombbal a CadCraft Studióra, és válassza a {{ui:Megnyitás}} lehetőséget. A CadCraft Studio még nincs alkalmazásboltban, és nincs iPad- vagy iPhone-változat.
- Az {{ui:Egységek}} listában szereplő szögek és lejtések mentésre kerülnek, de egyetlen mező sem olvassa őket.
- **A tervezési ellenőrzéseket még nem nézte át mérnök.** A tesztjeink nyomtatott táblázatértékekkel és kézzel számolt képletekkel hasonlítják össze őket, de még nem a tervezési útmutatók kidolgozott példáival. Az átnézésig segédeszköznek tekintendők: a fontos rudakat kézzel ellenőrizze.
- A tervezési ellenőrzések elsőrendű erőket használnak (másodrendű hatások nélkül), és csak I-szelvényeket ellenőriznek. Még nincs elkészítve: csövek, szögacélok, csatornák, hegesztett szelvények, karcsú (AISC) vagy 4. osztályú (Eurocode) elemek hajlításra, csavarás, nyírási kihajlás hajlítással együtt, kapcsolatok, fáradás, tűz, szeizmikus részletezés és beton. Karcsú nyomott elem esetén a nyomási ellenőrzések kimaradnak, a rúd pedig a „megfelel, részben ellenőrizve” jelzést kapja.
- A keretanalízis továbbra is elsőrendű és lineáris, és még nem próbálta ki mérnök valódi munkán.
- A csavarlyukak, csavarok, hegesztések és alapok nincsenek benne a USD-exportban.

Minden más a [Még nincs elkészítve](topic:not-built-yet) részben található.
