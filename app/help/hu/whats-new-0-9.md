---
title: Újdonságok a 0.9 verzióban
summary: Brit acélszelvény-méretek és egyenlőtlen szögacélok, gyártmányrajzok minden alkatrészhez egy PDF-készletben, Saját profilok egyedi szelvényekhez, P-Delta és sajátfrekvenciák, ASCE 7 szélterhek, szeizmikus helyszín és kombinációk, valamint élő kurzorok és követés.
keywords: újdonságok, mi újdonság, kiadási megjegyzések, változásnapló, 0.9, brit acél, blue book, ub, uc, pfc, shs, rhs, chs, egyenlőtlen szögacél, gyártmányrajz, gyártmányrajzok, rajzlapkészlet, alkatrészjel, pdf, saját profilok, egyedi profil, p-delta, másodrendű, sajátfrekvencia, véges elemek, modális tömeg, szélteher, asce 7, szeizmikus, talajosztály, usgs, teherkombinációk, lrfd, asd, élő, kurzorok, követés, személyek, eszköztippek, 0.8, 0.8.1, verzió, új funkciók, szerelés, daru, teherdiagram, film, automata, kapcsolatok, betonvas, zsúfoltság, alapozás, süllyedés, keretezés, fa, könnyűszerkezet, vágási lista, kivitelezhetőség, hegesztési hozzáférés, beszállító, készlet, szállítási idő, mi törik el először, beton, födém, nyelvek, asszisztens
from: 4c95a2de
---

Az alábbiakban a DetailCraft 0.8.1-hez képest a 0.9 verzióban történt változások szerepelnek. A 0.9 hozza a brit acélméreteket, egy lépésben készülő gyártmányrajzokat minden alkatrészhez, a keretekhez szánt nagyobb {{ui:Analízis}} lapot, valamint az együttműködéskor egymás kurzorainak megtekintését.

## Újdonságok

### Brit acél és gyártmányrajzok

- **Brit acélméretek.** A profillisták mostantól 976 méretet tartalmaznak a Steel for Life Blue Book kiadványból: UB, UC, PFC, EA, UEA, CHS, SHS és RHS, a hidegen hajlított üreges szelvényeket külön tartva (nevük CF-fel kezdődik). A nevek a szelvénycsalád nevével kezdődnek, például UB305x165x40 vagy SHS100x100x5.0, de úgy is beírhatja, ahogy a rajzokon szerepel: 305x165x40 UB, L100x100x10, SHS100x5 is működik. Lásd: [Profilkatalógus](topic:profile-catalog).
- **Egyenlőtlen szögacélok.** Az UEA szögacélok mindkét szárát megtartják az IFC be- és kimenetben, valamint az NC-fájlokban, a tükrözés pedig a darabot végétől végéig megfordítja.
- **Minden gyártmányrajz egyszerre.** Semmi sincs kijelölve, és úgy válassza a {{ui:Kimenet}} csoport {{ui:Gyártmányrajz}} parancsát. Az ablak felsorolja az összes alkatrészjelet, bármelyiket előnézetben megnézheti, és az {{ui:Összes letöltése}} egy PDF-fájlba menti mindet, alkatrészjelenként egy oldallal, mindegyik címe „3/42. lap” formában. A {{ui:PDF letöltése}} a jelenleg látott lapot menti. A csatornák, szögacélok és üreges szelvények is kapnak most lapot. Lásd: [Gyártmányrajzok készítése](topic:shop-drawings).
- **Saját profilok.** Egyedi profil mostantól minden új modellhez megőrizhető. Az Egyedi profil űrlapban hagyja bejelölve a {{ui:Megtartás a Saját profilokban}} jelölőnégyzetet; az alatta lévő {{ui:Saját profilok}} listán van a {{ui:Megtartás}}, a {{ui:Használat itt}} és az {{ui:Eltávolítás}} gomb. A lista ebben a böngészőben tárolódik (legfeljebb 200), nem a fiókjában. Lásd: [Lemezek és profilok](topic:plates-and-profiles).

### Analízis

- **Másodrendű hatás (P-Delta).** Jelölje be a {{ui:Másodrendű (P-Delta)}} jelölőnégyzetet a {{ui:Futtatás}} mellett az {{ui:Analízis}} lapon, és a normálerők a lehajlott kereten hatnak. A lemezek és a merev födémek elsőrendűek maradnak, figyelmeztetéssel. Lásd: [Erők, támaszreakciók és lehajlások](topic:frame-analysis).
- **Sajátfrekvenciák.** Az eredmények alatti {{ui:Véges elemek: sajátfrekvenciák}} blokk ugyanazon modell legalacsonyabb sajátalakjait keresi meg a periódussal és a hatásos modális tömeggel együtt, és az egyik sajátalakot megjeleníti a modellen. Lásd: [Erők, támaszreakciók és lehajlások](topic:frame-analysis).
- **Szélterhek és szeizmikus helyszín.** Három új blokk az {{ui:Analízis}} lapon: {{ui:Szélterhek (ASCE 7 irányított eljárás)}}, {{ui:Szeizmikus helyszín és rendszer (ASCE 7)}} és {{ui:ASCE 7 teherkombinációk}}. Lásd: [Szél, szeizmikus helyszín és ASCE 7 kombinációk](topic:wind-seismic-combinations).

### Együttes munka

- **Kurzorok és nevek.** Egy Live-munkamenetben minden résztvevő mutatója a modellben jelenik meg a nevével és színével, a kijelölt elemek pedig keretet kapnak.
- **Egy személy követése.** Nyissa meg a munkamenetben a {{ui:Személyek}} részt, és válassza valamelyik nevénél a {{ui:Követés}} lehetőséget; a nézete az övével együtt mozog. A munkamenet vezetője választhatja a {{ui:Mindenkitől követés kérése}} lehetőséget. Lásd: [Egy személy követése Live-munkamenetben](topic:follow-in-live).

### Minden alkalmazásban

- Az eszköztippek Bootstrap-tippek, a kezdő tippkártyán van bezárógomb, a lapsávok oldalirányban görgethetők, ha nem férnek ki, a böngészőlap pedig a megnyitott dokumentum nevét mutatja, mögötte a DetailCraft és a CadCraft nevével.

## Javítva

- Egyedi profil elveszett új modell indításakor.
- A csatornák, szögacélok és üreges szelvények hiányoztak a gyártmányrajz-készletből.

## Őszinte korlátok

- A szél-, szeizmikus és véges elem blokkok ellenőrzési segédeszközök. Az eredményeket mérnöknek kell átnéznie; nem tervezési előírás szerinti ellenőrzések. Az USGS-keresést helyettesítő szolgáltatáson tesztelték, nem az élő szolgáltatáson.
- A véges elemeket és a P-Delta-t kézi és zárt képletű eredményekkel ellenőrizték, nem valódi épületen. A kihajlásvizsgálat még nincs elkészítve.
- Még egyetlen brit gyártó sem próbálta ki a brit méreteket, és az egyenlőtlen szögacélok NC-fájljait még nem futtatták gépen.
- A gyártmányrajz-készlet csak PDF-formátumú.
- Az angolon kívüli nyelvek gépi piszkozatok.
- A Windows-telepítők nincsenek kódaláírva (További információ, majd Mégis futtatás); a macOS lemezkép nincs notarizálva (jobb gombbal kattintás, majd Megnyitás).

A korábbi változások a 0.8 és 0.8.1 jegyzeteiben, az oldal alsó részén találhatók.

## Korábbi: 0.8 és 0.8.1

Az alábbiakban a DetailCraft 0.7-hez képest a 0.8 (2026. november 1.) és a 0.8.1 (2026. november 2.) verzió változásai szerepelnek. A 0.7 acélrudakat ellenőrzött; a 0.8 tervezi az emeléseket, javasolja a kapcsolatokat, ellenőrzi az alapozásokat és a betonvasalást, valamint fa- és könnyűszerkezetű falak, födémek és tetők keretezését végzi.

### Újdonságok

**Szerelés**

- **Szerelési terv és film.** A {{ui:Szerelés}} lapon írja le a darut (hol áll, legmagasabb horgát, a teherdiagramban nem szereplő kötélzetet), és írja be a teherdiagramja sorait. A DetailCraft a modellt egyenként emeli, fázissorrendben és szintenként, és minden emelést a teherdiagramhoz ellenőriz a sugárnál, valamint a megadott tartalékkal szemben. A {{ui:Videó mentése}} egy HTML-fájlt ír, amely bármely böngészőben működik, telefonon is, internetkapcsolat nélkül. A diagramot túllépő, a sugarat meghaladó vagy túl magas emelések a {{ui:Problémák}} között vannak. Ez a megadott számok alapján készült terv, nem emelési terv. Lásd: [Szerelési terv és film](topic:erection-movie).

**Kapcsolatok**

- **Kapcsolat-automata.** Az {{ui:Automata}} lap minden olyan csomópontot megnéz, amelynek nincs kapcsolata, és az alakzatokból javasol egyet: talplemezek, nyírólemezek, homloklemezek a nyomatéki gerendaként megjelölt gerendákhoz, toldások és csomólemezek. Adjon meg egyenletes terhelést vagy az egyik végén nyíróerőt, és a csavarszám a csavar tervezési szilárdságát követi. A {{ui:Mind hozzáadása}} gomb a javaslatokat egyetlen visszavonási lépésként adja hozzá. Ezek átnézendő kiindulási értékek, nem kapcsolattervezés.
- **Kivitelezhetőségi ellenőrzések.** A {{ui:Problémák}} listában szerepelnek: a csavar, amelyet villáskulcs nem ér el; a csavarok, amelyek túl közel vannak a dugókulcshoz; a sarokvarratok, amelyek méretkorlátjukon kívül esnek; és a vizet megtartó üreges szelvények. A hegesztési hozzáférés új: a körbefutó sarokvarrat, amelyet a hegesztő égője nem ér el, az útban álló alkatrésszel és a varrat érintett hányadával együtt kerül felsorolásra. Lásd: [Kivitelezhetőségi ellenőrzések](topic:constructability).

**Alapozás és betonvas**

- **Alapozási ellenőrzések.** Az {{ui:Alapozás}} lap a megadott talajon ellenőrzi a talpakat, összevont talpakat és lemezalapokat: teherbírás, csúszás és felborulás használati terhekből; hajlítás, nyírás, átszúrás, lehorgonyzás és minimális vasalás tényezett terhekből (ACI 318-19). A szélhez vagy sarokhoz közeli oszlopot a talp széle által levágott metszettel ellenőrzi. A süllyedés a talaj rugalmassági modulusából adódik, a rugalmas lemezalapot egy ágymodulus alapján rugókon oldja meg, a cölöpcsoportoknak és a támfalaknak pedig saját paneljük van. Az oszlopterhek beírhatók, vagy az {{ui:Analízis}} lapról vehetők át. Lásd: [Alapozási ellenőrzések](topic:foundation-checks).
- **Betonvas-zsúfoltsági térkép.** A {{ui:Zsúfoltság}} lap minden talpról felülnézeti hőtérképet rajzol: ott, ahol a vasak túl kevés helyet hagynak a betonnak a lejutáshoz, a szabad távolság szabálya szerint, és ha megadja, a legnagyobb adalékanyag-szemcse és a vibrátorfej méretének függvényében. Lásd: [Betonvas-zsúfoltsági térkép](topic:rebar-congestion).

**Keretezés és beszerzés**

- **Fa- és könnyűszerkezetes keretezés.** A {{ui:Keretezés}} lap a fal-, födém- és tetőpanelek minden darabját kiszámítja, vágási listával, a megvásárolandó készlettel és méretarányos gyártmányrajzzal. Az {{ui:Elhelyezés rúdelemekként}} a darabokat a modellbe helyezi, a {{ui:PDF rajzlapok}} pedig panelenként egy lapot ment. A méretek, a távolságok és a fejgerendák a megadottak: a DetailCraft nem ellenőrzi, hogy elbírják-e a terhet. Lásd: [Fa- és könnyűszerkezetes keretezési panelek](topic:framing-panels).
- **Beszállítói készlet és szállítási idők.** A {{ui:Beszerzés}} lap beolvassa a beszállító készletlistáját (CSV), és minden olyan szelvénynél, amelyet a vágási lista megvásárol, megmutatja, van-e elég készleten, és mennyit kell várni. A hiányok és a későn érkező szelvények a {{ui:Problémák}} között vannak. Semmi nem rendelődik meg. Lásd: [Beszállítói készlet és szállítási idők](topic:supplier-stock).

**Analízis és tervezés**

- **Mi törik el először?** Az {{ui:Analízis}} lapon a gomb megkeresi a mérvadó teherbírási kombinációt, a leggyengébb rudat, azt, hogy meddig nőhetnek a terhek, mielőtt az első rúd eléri a határát, valamint a leggyengébb homloklemezt vagy nyírólemezt, ha a csavarjainak nyírószilárdsága ismert. Előbb kombinációk és tervezési előírás szükséges. A felfekvés, a blokknyírás, a varratok és a kiemelődés nincs ellenőrizve. A csatlakoztatott asszisztens ugyanezt kérheti.
- **Élő.** Jelölje be az {{ui:Élő: újraszámolás minden szerkesztés után}} jelölőnégyzetet, és a keret minden szerkesztés után újra megoldódik.
- **Beton, további.** Egy karcsú oszlop nem oldalirányban elmozduló keretben a megnövelt nyomatékára méreteződik (ACI 318-19 6.6.4.5). A szeizmikus periódus a Rayleigh-módszerrel vehető az analízisből. Lemezekből készült födém minden rétegéhez a nyomatékaiból kapja meg a szükséges acélt, valamint az egyirányú nyírást. Lásd: [Betonelemek ellenőrzése és szeizmikus terhek készítése](topic:concrete-and-seismic).
- **Mérnöki átnézésre.** Az alapozási, beton- és a Mi törik el először eredmények segédeszközök. A betonhoz tartozó szélterhek még nincsenek elkészítve.

**Minden alkalmazásban**

- **Nyelvek.** A súgó 54 nyelven érhető el. Az angolon kívüli nyelvek gépi piszkozatok, amíg anyanyelvi szakember át nem olvassa; tíz új: litván, lett, bosnyák, maráthi, telugu, albán, afrikaans, filippínó, szuahéli, üzbég.
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} résznél választható a tördelés, 2 sor vagy 1 sor. Az a sáv, amelyik már elfér, marad úgy, ahogy van; a többi oldalirányban görgethető.
- **Tulajdonságrács.** A talp mezői a közös rácsot használják: összecsukható kategóriákkal és kompakt sűrűséggel. A beírt számtani műveletek, például 2*450, továbbra is működnek.
- **Beviteli eszközök.** Érintőpad, toll, 3D-egér, kontroller és MIDI is vezérelheti az alkalmazásokat. Lásd: [Navigálás 3D-ben](topic:navigate-3d).
- **Problémák panel.** A fenti új ellenőrzések figyelmeztetései ugyanabban a {{ui:Problémák}} panelben jelennek meg, mint korábban.
- **Asszisztens csatlakoztatása.** A saját asszisztens, a CadCraft Studion át csatlakoztatva, mind a nyolc alkalmazással működik, és csak azt látja, amit engedélyezett. Az egykattintásos csatlakoztatás, a tárolt csatlakozó és a saját API-kulcs a Studióban még hátravan. Lásd: [A DetailCraft használata AI-asszisztenssel](topic:use-with-ai-assistants).

### Javítva a 0.8.1 verzióban

- **Nyelvek a Studióban.** A Studio és a csomagolt kiadások futás közben tudnak nyelvet váltani; korábban csak angolul voltak. Még nem minden platformon tesztelték: jelezze, ha a nyelv nem változik.
- **Keresztező ablakos kijelölés.** A 0.8.1 telepítői már tartalmazzák a 0.8 webes verziójának helyes ablakos kijelölési viselkedését; egy régebbi telepítő nem.
- **Táblagépek álló helyzetben.** A rács szabad magassága a rajzvászonra kerül, a lapelrendezés pedig 760 px-es vagy kisebb szélességnél kezdődik.

### Ebben a verzióban még nincs

- Az **NC-fájl küldése gépre** nem jelent meg.
- A **szélterhek** betonhoz még nincsenek elkészítve, a beton- és alapozási ellenőrzéseket pedig mérnöknek kell átnéznie.
- **Kódaláírás.** A Windows-telepítők és a macOS .dmg fájl nincs aláírva, ezért a Windows figyelmeztethet, a macOS pedig jobb gombos kattintást kér, majd Megnyitás.

A korábbi változások az [Újdonságok a 0.7 verzióban](topic:whats-new-0-7) részben találhatók.
