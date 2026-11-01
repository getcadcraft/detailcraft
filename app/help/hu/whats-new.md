---
title: Újdonságok a 0.7-ben
summary: Acél I-szelvények tervezési ellenőrzései az ASCE 7 vagy EN 1990 teherkombinációival és az AISC 360 vagy EN 1993-1-1 szerinti rúdelem-ellenőrzésekkel, az acélmodell USD-exportálása, USD-eszköz az asszisztenseknek, nagy és kis gombokkal ellátott Acél szalag, eltűnő panelek és mozgó párbeszédpanelek.
keywords: újdonságok, kiadási jegyzet, változásnapló, változások, 0.7, verzió, új funkciók, tervezési ellenőrzések, acélszerkezet-tervezés, kihasználtság, teherkombinációk, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, nemzeti melléklet, tetőhasznos teher, lehajlás, lehajlási határ, usd, usda, usdc, usdz, openusd, asszisztens, mcp, acél szalag, szalag, osztott gomb, mértékegységek, kompakt, panelek, párbeszédpanelek, portugál
from: 17d1e0bb
---

Ez változott a DetailCraft 0.7-ben a 0.6-hoz képest. A 0.6 keretanalízise most kapott egy második lépést: az acél rúdelemek ellenőrzését egy tervezési előírás szerint.

## Újdonságok

### Gérvágott csomópontok (0.7.1)

- **Két szögben találkozó I-szelvény**, például egy keretsarok vagy egy gerinc: jelölje ki mindkettőt, válassza a {{ui:Kapcsolás}} csoport {{ui:Továbbiak}} menüjében a {{ui:Gérvágás}} lehetőséget, és mindkét vég a szöget felező síkban vágódik. Az összecsavarozott homloklemezek és a gerincmerevítők jelölőnégyzetek az új Gérvágás párbeszédpanelen, amelynek számozott mezői egy, a gépelés közben készülő rajzzal egyeznek a csomópontról. A gérvágás követi a rúdelemeket, ha mozognak, és átmegy a rajzokba, az NC-fájlokba (ferde vágások), az IFC-be és az anyagjegyzékbe. Lásd: [Gérvágott csomópontok](topic:mitres).

### Tervezési ellenőrzések

- **Teherkombinációk az előírásból.** Az {{ui:Analízis}} lapon az új {{ui:Tervezési ellenőrzések}} blokknak van {{ui:Tervezési előírás}} választója: ASCE 7 + AISC 360 (US, LRFD) vagy EN 1990 + EN 1993-1-1 (Eurocode). Adja meg az egyes teheresetek fajtáját (állandó, hasznos, az új tetőhasznos, hó, szél, szeizmikus), nyomja meg a {{ui:Kombinációk készítése}} gombot, és a DetailCraft megírja az előírás szilárdsági és használhatósági kombinációit az Ön eseteiből. A saját maga beírt kombinációk megmaradnak. Lásd: [A kombinációk elkészítése](topic:design-checks#make-the-combinations).
- **Nemzeti melléklet értékei.** Az Eurocode-nál a tényezők az ajánlott értékekkel indulnak; a {{ui:Nemzeti melléklet értékei}} lehetővé teszi az Ön országáét, és ezek a modellben mentődnek. Lásd: [A kombinációk elkészítése](topic:design-checks#make-the-combinations).
- **Rúdelemek ellenőrzése.** A {{ui:Rúdelemek ellenőrzése}} minden acél I-szelvényt ellenőriz húzásra, kihajlással járó nyomásra, kifordulással járó hajlításra, nyírásra, hajlítás és normálerő együttesére, valamint lehajlásra az Ön által megadott {{ui:Lehajlási határ}} szerint. A táblázat mutatja az egyes rúdelemek kihasználtságát, a mértékadó ellenőrzést és annak kombinációját, a rúdelemek pedig színezve látszanak a modellen (kék, zöld, okker, piros, szürke a nem ellenőrzötteknél). Lásd: [A rúdelemek ellenőrzése](topic:design-checks#check-the-members).
- **A jelentésben.** A {{ui:Jelentés (PDF)}} és a {{ui:Jelentés (CSV)}} hozzáadja az előírás kiadásait, a beállításokat, a kihasználtságot rúdelemenként és minden felhasznált szakaszt. Lásd: [A jelentés](topic:design-checks#the-report).
- **Segédeszköz, amíg mérnök át nem nézte.** Csak elsőrendű erőket használ. A csövek, szögacélok, U-szelvények, hegesztett szelvények és a karcsú vagy 4. osztályú elemek „nincs ellenőrizve” jelzést kapnak az okkal; a csavarást, a kapcsolatokat és a betont nem ellenőrzi. Lásd: [Mit nem ellenőriz](topic:design-checks#what-is-not-checked).

### USD

- **Az acélmodell exportálása USD-be.** A {{ui:Kimenet}} csoport {{ui:USD}} gombja a modellt {{ui:Szöveg (.usda)}}, {{ui:Bináris (.usdc)}} vagy {{ui:Csomag (.usdz)}} formában írja renderelő programokhoz és jelenetösszeállításhoz: minden összeállítás tartalmazza az alkatrészeit, minden alkatrész a szelvénye a hossza mentén kihúzva a kivágásokkal, és mindegyik hordozza az alkatrészjelét, szelvényét, minőségét, hosszát és tömegét. A csavarfuratok, csavarok, hegesztések és alapok nincsenek az USD-hálókban. Lásd: [Az acélmodell exportálása USD-be](topic:usd).

### MI-asszisztensek

- **USD az asszisztenseknek.** A saját asszisztense, a CadCraft Studión át csatlakozva, exportálhatja a modellt USD-be (`usd_export`), és a Studióban egy engedélyezett mappába írhatja. Lásd: [Mit kérhet az asszisztens](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Módosult

- **Az Acél szalagnak** vannak nagy és kis gombjai: egy nagy {{ui:Gerenda}} a kis {{ui:Oszlop}}, {{ui:Merevítő}} és {{ui:Lemez}} mellett a {{ui:Modellezés}} › {{ui:Rúdelemek}} alatt; egy nagy {{ui:Homloklemezek}} a {{ui:Részletezés}} › {{ui:Kapcsolatok}} alatt, a {{ui:Toldás}} és a {{ui:Csomólemez}} egy osztott gombon osztozva; egy nagy {{ui:Beillesztés}} a {{ui:Szerkesztés}} › {{ui:Vágólap}} alatt, a {{ui:Beillesztés helyben}} és a {{ui:Kettőzés}} a csoport nyila mögött. A {{ui:Gyártás}} › {{ui:Csere}} alatt van {{ui:USD exportálása}} az IFC mellett. A többi menüstílus úgy néz ki, mint korábban. Lásd: [Menük, billentyűk és egér](topic:menus-keys-and-mouse#the-three-styles).
- Az [A keret analízise](topic:frame-analysis) most a tervezési ellenőrzésekre mutat, a kombinációit pedig az előírás szerint is el lehet készíteni.

## Minden alkalmazásban

- **Mértékegységek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Mértékegységek}} hossznak, területnek, térfogatnak, szögnek és lejtésnek külön listát ad, a mértékegységek definíciói szerinti pontos méretekkel (az amerikai geodéziai láb külön mértékegység). Kapcsolja ki a soha nem használtakat, és kikerülnek a listákból; csillagozzon meg egyet, és az új munka azzal indul. A fájl mindig megtartja a saját mértékegységét. A DetailCraft saját mezői még nem követik a listákat: a hosszait továbbra is milliméterben kell beírni. Lásd: [Mértékegységek, beírt értékek és a mértékegységlisták](common:unit-lists).
- **Sűrűbb elrendezés és eltűnő panelek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Elrendezés sűrűsége}} › {{ui:Kompakt}} több mindent elhelyez a képernyőn (az érintőképernyők és a telefonok megtartják a nagy gombjaikat). Minden oldalpanelnek van egy karcsú címsora: húzza a panel dokkolásához vagy lebegtetéséhez, ejtse egy másik panel sávjára, hogy egy keretben osztozzanak lapokként, rögzítse, hogy a szélre csússzon, vagy rejtse el, és hozza vissza a szélről. Lásd: [A panelek elrendezése](common:arrange-panels#make-the-layout-denser).
- **A párbeszédpanelek mozognak.** Húzza a párbeszédpanelt a címsoránál fogva a rajz elől; oda tér vissza, ahol hagyta. A címsorra duplán kattintva újra középre kerül. Lásd: [Párbeszédpanel mozgatása](common:arrange-panels#move-a-dialog).
- **Receptek MI-asszisztensekhez.** Tíz kidolgozott kérés a saját asszisztensének (rajz rendbetétele, rajzkészlet plottolása, rajzok ellenőrzése, kérdések egy modellről, mennyiségkimutatás összesítése, alkatrészváltozat kipróbálása…), mindegyikhez a hívott eszközökkel és a szükséges engedélyekkel, és mindegyiket lejátszották a tesztjeink. Az alkalmazások nem tartalmaznak MI-t. Lásd: [Receptek MI-asszisztensekhez](common:assistants-recipes).
- **Nyelvek.** Új a **Português (Portugal)** a {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Nyelv}} alatt. Ez, a **Português (Brasil)**, az **Español (México)** és a **Bahasa Indonesia** most már az alkalmazások minden szavát tartalmazza, anyanyelvi beszélő által még nem ellenőrzött piszkozatként. A súgótémakörök angolul vannak.
- **A CadCraft Studio** megmondja, miért hiúsult meg egy frissítésellenőrzés (még nincs fájl az Ön rendszeréhez, nincs hálózat, hibás aláírás), a puszta „Kész” helyett, és nem hozza vissza a bezárt Újdonságok kártyát, amíg nincs újabb kiadás.

## Ebben a verzióban még nincs

- **A 0.7 nincs kódaláírással ellátva.** Az aláírás és a Microsoft Store csomag átkerült a 0.8-ba, mert a tanúsítvány érvényesítése még nem érkezett meg. Ellenőrizze a getcadcraft.com/download oldalon az egyes fájlok melletti SHA-256 értéket. Windowson, ha a SmartScreen megállítja a telepítőt, válassza a {{ui:További információ}}, majd a {{ui:Futtatás mindenképp}} lehetőséget. Macen az első alkalommal kattintson jobb gombbal a CadCraft Studióra, és válassza a {{ui:Megnyitás}} parancsot. A CadCraft Studio még nincs alkalmazásboltban, és iPad- vagy iPhone-verzió sincs még.
- A {{ui:Mértékegységek}} szög- és lejtéslistái mentődnek, de mező még nem olvassa őket.
- **A tervezési ellenőrzéseket mérnök még nem nézte át.** A tesztjeink nyomtatott táblázati értékekkel és kézzel számolt képletekkel vetik össze őket, tervezési segédlet kidolgozott példáival még nem. Az áttekintésig segédeszköz: a fontos rúdelemeket ellenőrizze kézzel.
- A tervezési ellenőrzések elsőrendű erőket használnak (másodrendű hatások nélkül), és csak I-szelvényeket ellenőriznek. Nincs elkészítve: csövek, szögacélok, U-szelvények, hegesztett szelvények, hajlított karcsú (AISC) vagy 4. osztályú (Eurocode) elemek, csavarás, nyírási horpadás hajlítással együtt, kapcsolatok, fáradás, tűz, szeizmikus részletképzés és beton. A nyomott karcsú elem kimarad a nyomási ellenőrzésekből, és a rúdelem „megfelel, részben ellenőrizve” jelzést kap.
- A keretanalízis továbbra is elsőrendű és lineáris, és mérnök még nem próbálta ki valódi munkán.
- A csavarfuratok, csavarok, hegesztések és alapok nincsenek az USD-exportban.

Minden más a [Mi nincs még elkészítve](topic:not-built-yet) témakörben van.
