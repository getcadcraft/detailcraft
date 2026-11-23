---
title: Újdonságok a 0.9 verzióban (korábbi)
summary: UK Blue Book acélméretek és egyenlőtlen szögacélok, gyártmányrajzok minden alkatrészhez egy PDF-készletben, Saját profilok egyedi szelvényekhez, P-Delta és sajátfrekvenciák, ASCE 7 szélterhek, földrengési helyszín és kombinációk, valamint élő kurzorok a Követés funkcióval.
keywords: újdonságok 0.9, korábbi kiadás, újdonságok, kiadási jegyzetek, változásnapló, 0.9, UK acél, Blue Book, ub, uc, pfc, shs, rhs, chs, egyenlőtlen szögacél, gyártmányrajz, gyártmányrajzok, rajzlapkészlet, alkatrészjel, pdf, saját profilok, egyedi profil, P-Delta, másodrendű, sajátfrekvencia, véges elemek, modális tömeg, szélteher, ASCE 7, földrengés, helyszín, talajosztály, USGS, teherkombinációk, LRFD, ASD, élő, kurzorok, követés, személyek, súgócímkék, változások, 0.8, 0.8.1, verzió, új funkciók, szerelés, daru, teherdiagram, videó, automata, kapcsolatok, betonacél, földrengés, födém, nyelvek, asszisztens
from: ab0c7f05
---

Ez változott a DetailCraft 0.9 verzióban, a 0.8.1 verzióhoz képest. A 0.9 hozza az UK acélméreteket, a gyártmányrajzot minden alkatrészhez egy lépésben, egy nagyobb {{ui:Analysis}} lapot kereteknek, és az egymás kurzorainak megtekintését, amikor együtt dolgoznak.

## Új

### UK acélméretek és gyártmányrajzok

- **UK acélméretek.** A profillisták most 976 méretet tartalmaznak a Steel for Life Blue Book-ból: UB, UC, PFC, EA, UEA, CHS, SHS és RHS, a hidegen hajlított üreges szelvényeket külön tartva (a nevük CF-fel kezdődik). A neveket a család neve áll elöl, például UB305x165x40 vagy SHS100x100x5.0, és az is működik, ahogy a rajzokon szerepel: 305x165x40 UB, L100x100x10, SHS100x5. Lásd: [Profilkatalógus](topic:profile-catalog).
- **Egyenlőtlen szögacélok.** Az UEA szögacélok mindkét szárukat megtartják IFC be- és kimenetnél, valamint NC fájloknál, a tükrözés pedig a darabot a végeivel felcseréli.
- **Minden gyártmányrajz egyszerre.** Válassza a {{ui:Shop drawing}} lehetőséget az {{ui:Output}} csoportban, semmi kijelölése nélkül. Az ablak felsorolja az összes alkatrészjelet, bármelyiket megelőnézheti, és az Összes letöltése gomb egyetlen PDF-be menti mindet, jelölésenként egy oldallal; minden oldal címe „3. rajzlap, összesen 42”. A {{ui:Download this sheet}} a most megnézett lapot menti. A csatornák, szögacélok és üreges szelvények most már kapnak lapot is. Lásd: [Gyártmányrajzok készítése](topic:shop-drawings).
- **Saját profilok.** Egyedi profil mostantól minden új modellhez megtartható. Az Egyedi profil űrlapban hagyja bejelölve a Megtartás a Saját profilok között jelölőnégyzetet; az alatta lévő {{ui:My profiles}} listán van {{ui:Keep}}, {{ui:Use here}} és {{ui:Remove}}. A lista ebben a böngészőben tárolódik (legfeljebb 200), nem a fiókjában. Lásd: [Lemezek és profilok](topic:plates-and-profiles).

### Analízis

- **Másodrendű (P-Delta).** Jelölje be a {{ui:Second order (P-Delta)}} jelölőnégyzetet a Futtatás mellett az {{ui:Analysis}} lapon, és a normálerők a deformált kereten hatnak. A lemezek és merev födémek elsőrendűek maradnak, figyelmeztetéssel. Lásd: [Erők, reakciók és lehajlások](topic:frame-analysis).
- **Sajátfrekvenciák.** Az eredmények alatti {{ui:Finite elements: natural frequencies}} blokk ugyanazon modell legalacsonyabb módusait keresi meg, periódussal és hatékony modális tömeggel, és a modellen mutatja meg az egyes módusokat. Lásd: [Erők, reakciók és lehajlások](topic:frame-analysis).
- **Szélterhek és földrengési helyszín.** Három új blokk az {{ui:Analysis}} lapon: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} és {{ui:ASCE 7 load combinations}}. Lásd: [Szél, földrengési helyszín és ASCE 7 kombinációk](topic:wind-seismic-combinations).

### Együttműködés

- **Kurzorok és nevek.** Élő munkamenetben minden személy mutatója a nevével és a színével jelenik meg a modellen, a kijelölése pedig dobozt kap.
- **Személy követése.** Nyissa meg a munkamenet {{ui:People}} panelját, és válassza a {{ui:Follow}} lehetőséget egy név mellett; a nézete követi az övét. A házigazda választhatja a {{ui:Ask everyone to follow me}} lehetőséget. Lásd: [Személy követése élő munkamenetben](topic:follow-in-live).

### Minden alkalmazásban

- A súgócímkék Bootstrap-súgócímkék, az indítási tippkártyán van bezáró gomb, a lapsorok vízszintesen görgethetők, ha nem férnek ki, a böngészőlap neve pedig a megnyitott dokumentumot mutatja, mögötte DetailCraft és CadCraft.

## Javítva

- Az egyedi profil elveszett, amikor új modellt kezdett.
- A csatornák, szögacélok és üreges szelvények hiányoztak a gyártmányrajz-készletből.

## Ismert korlátok

- A szél-, földrengési és véges elemes blokkok ellenőrzési segédeszközök. Mérnöke átnézi az eredményeket; nem előírás szerinti ellenőrzések. Az USGS-keresést egy helyettesítő szolgáltatáson tesztelték, nem az élő szolgáltatáson.
- A véges elemeket és a P-Delta-t kézi és zárt alakú megoldásokkal ellenőrizték, nem valódi épületen. A kihajlás-analízis nincs elkészítve.
- Még egyetlen UK acélgyártó sem próbálta ki az UK méreteket, és az egyenlőtlen szögacélok NC fájljai még nem futottak géppel.
- A gyártmányrajz-készlet csak PDF.
- Az angolon kívüli nyelvek gépi piszkozatok.
- A Windows telepítők nincsenek kódaláírva (További információ, majd Futtatás mégis); a macOS lemezkép nincs notarizálva (jobb klikk, majd Megnyitás).

A korábbi változások a 0.8 és 0.8.1 jegyzeteiben vannak, az oldal lejjebb.

## Korábbi: 0.8 és 0.8.1

Ez változott a DetailCraft 0.8 (2026. november 1.) és 0.8.1 (2026. november 2.) verziójában, a 0.7-hez képest. A 0.7 acélrúdelemeket ellenőrzött; a 0.8 tervezi az emeléseket, javasol kapcsolatokat, ellenőrzi az alapozásokat és a betonacélt, valamint faszerkezetű és könnyűacél falakat, födémeket és tetőket keretez.

### Új

**Szerelés**

- **Emelési terv és videó.** A {{ui:Erection}} lapon írja le a darut (hol áll, a legmagasabb horgát, az emelőfelszerelést, amely nincs benne a diagramban), és írja be a teherdiagramja sorait. A DetailCraft egyesével, a szerelési sorrend és a szintek szerint emeli a modellt, és minden emelést ellenőriz a diagram szerint a hozzá tartozó sugárnál, valamint az Ön által megadott tartalékkal. A {{ui:Save movie}} egy HTML-fájlt ír, amely offline, bármely böngészőben lejátszható, telefonon is. A diagramon kívüli, azon túli vagy túl magas emelések a {{ui:Problems}} listában vannak. Ez az Ön számaiból készült terv, nem emelési terv. Lásd: [Emelési terv és videó](topic:erection-movie).

**Kapcsolatok**

- **Kapcsolat-automata.** Az {{ui:Autopilot}} lap minden olyan csomópontot megvizsgál, amelyhez nincs kapcsolat, és az alakzatok alapján javasol egyet: talplemezeket, nyírólemezeket, véglemezeket azokhoz a gerendákhoz, amelyeket nyomatéki gerendaként jelöl, továbbá toldásokat és bordákat. Adjon meg egyenletes terhelést vagy egy végi nyíróerőt, és a csavarok száma a csavar tervezési szilárdságát követi. A {{ui:Add them all}} az összes javaslatot egyetlen visszavonható lépésként adja hozzá. Ezek ellenőrizendő kiindulási értékek, nem kapcsolattervezés.
- **Kivitelezhetőségi ellenőrzések.** A {{ui:Problems}} listában megjelennek azok a csavarok, amelyekhez a kulcs nem fér hozzá, azok, amelyek túl közel vannak a dugókulcshoz, a sarokvarratok, amelyek méretkorlátjukon kívül esnek, és a vizet tartó üreges szelvények. A varratelérés új: az a körbefutó sarokvarrat, amelyet a hegesztő égője nem ér el, az útban lévő alkatrésszel és az érintett varratrész arányával együtt jelenik meg. Lásd: [Kivitelezhetőségi ellenőrzések](topic:constructability).

**Alapozás és betonacél**

- **Alapozási ellenőrzések.** Az {{ui:Foundation}} lap talpalapokat, összetett talpalapokat és lemezalapokat ellenőriz az Ön által leírt talajon: teherbírás, csúszás és felborulás használati terhekből; hajlítás, nyírás, átszúrás, kifejtési hossz és minimális acél tényezett terhekből (ACI 318-19). A szélhez vagy sarokhoz közeli oszlopot a talpalap szélével levágott keresztmetszettel ellenőrzi. A süllyedés a talaj rugalmassági moduluszából számítódik, a rugalmas lemezalapot pedig rugókon oldja meg egy alágyazási modulusból; a cölöpcsoportoknak és támfalaknak saját paneljük van. Az oszlopterhek beírhatók, vagy átvehetők az {{ui:Analysis}} lapról. Lásd: [Alapozási ellenőrzések](topic:foundation-checks).
- **Betonacél-zsúfoltság térkép.** A {{ui:Congestion}} lap minden talpalapot hőtérképen ábrázol felülnézetből: hol hagynak a rudak túl kevés helyet a betonnak, hogy lejusson, a tiszta távolság szabályához mérve, és ha megadja, a legnagyobb adalékanyag és a vibrátorfej méretéhez. Lásd: [Betonacél-zsúfoltság térkép](topic:rebar-congestion).

**Keretezés és beszerzés**

- **Faszerkezeti és könnyűacél keretezés.** A {{ui:Framing}} lap falpaneleket, födém- és tetőpaneleket keretez minden darabbal, vágólistával, a megvásárolandó készlettel és méretarányos gyártmányrajzzal. A {{ui:Place as members}} a darabokat a modellbe helyezi, a {{ui:PDF sheets}} pedig panelenként egy lapot ment. A méretek, távolságok és fejgerendák az Ön döntése: a DetailCraft nem ellenőrzi, hogy teherbírók-e. Lásd: [Faszerkezeti és könnyűacél keretezési panelek](topic:framing-panels).
- **Beszállítói készlet és szállítási idők.** A {{ui:Supply}} lap beolvassa a beszállító készletlistáját (CSV), és minden olyan szelvényhez, amelyet a vágólista vásárol, megmutatja, van-e elég készlet, és mennyi a várakozási idő. A hiányok és a késő szelvények a {{ui:Problems}} listában vannak. Semmi nem rendelődik meg. Lásd: [Beszállítói készlet és szállítási idők](topic:supplier-stock).

**Analízis és tervezés**

- **Mi törik el először?** Az {{ui:Analysis}} lapon ez a gomb megkeresi az irányadó teherbírási kombinációt, a leggyengébb rúdelemet, azt, hogy a terhek mennyire nőhetnek, mielőtt az első rúdelem eléri a határát, és a leggyengébb véglemezt vagy nyírólemezt, ha csavarjainak nyírószilárdsága ismert. Ehhez előbb kombinációk és tervezési előírás kellenek. A palástnyomás, a blokknyírás, a varratok és a kinyílás nincsenek ellenőrizve. A csatlakoztatott asszisztense ugyanezt kérheti.
- **Élő.** Jelölje be a {{ui:Live: solve again after each edit}} jelölőnégyzetet, és a keret minden szerkesztés után újra megoldódik.
- **Beton, továbbiak.** Egy nem oldalirányban elmozduló keret karcsú oszlopát a felnagyított nyomatékára tervezi a rendszer (ACI 318-19 6.6.4.5). A földrengési periódus Rayleigh-módszerrel vehető az analízisből. A lemezekből készült födém minden réteghez szükséges acélt a nyomatékaiból kapja, valamint az egyirányú nyírást. Lásd: [Betonelemek ellenőrzése és földrengési terhek](topic:concrete-and-seismic).
- **Mérnöki átnézésre.** Az alapozási, a beton- és a Mi törik el először eredmények segédeszközök. A szélterhek nincsenek elkészítve.

**Minden alkalmazásban**

- **Nyelvek.** A súgó 54 nyelven érhető el. Az angolon kívüliek gépi piszkozatok, amíg anyanyelvi beszélő át nem nézi; tíz új: litván, lett, bosnyák, maráthi, telugu, albán, afrikaans, filippínó, szuahéli és üzbég.
- **Eszköztársorok.** A {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} menüpontban választható: tördelés, 2 sor vagy 1 sor. Az, ami már elfér, marad úgy, ahogy van; a többi vízszintesen görgethető.
- **Tulajdonságrács.** A talpalap mezői a közös rácsot használják: összecsukható kategóriák és tömör sűrűség. A beírt számtani műveletek, például 2*450, továbbra is működnek.
- **Beviteli eszközök.** Érintőpad, toll, 3D-egér, vezérlő és MIDI is vezérelheti az alkalmazásokat. Lásd: [Navigálás 3D-ben](topic:navigate-3d).
- **Problémák panel.** A fenti új ellenőrzések figyelmeztetései ugyanabban a {{ui:Problems}} panelben jelennek meg, mint korábban.
- **Asszisztens csatlakoztatása.** Saját asszisztense, amelyet a CadCraft Studión keresztül csatlakoztat, mind a nyolc alkalmazással működik, és csak azt látja, amit Ön engedélyez. Az egykattintásos csatlakozás, az üzemeltetett csatlakozó és a Studióban megadható saját API-kulcs még hátravan. Lásd: [DetailCraft használata AI-asszisztenssel](topic:use-with-ai-assistants).

### Javítva a 0.8.1 verzióban

- **Nyelvek a Studióban.** A Studio és a csomagolt kiadások futás közben válthatnak nyelvet; korábban csak angol volt. Még nincs minden platformon tesztelve: jelezze, ha a nyelv nem változik.
- **Keresztező ablakos kijelölés.** A 0.8.1 telepítői már tartalmazzák a helyesen működő ablakos kijelölést a 0.8 webes verzióból; egy régebbi telepítő nem.
- **Táblagépek álló helyzetben.** A szabad rácsmagasság a vászonra kerül, a lapelrendezés 760 px vagy kevesebb esetén kezdődik.

### Ebben a verzióban még nincs

- **NC küldése gépre** nincs kiadva.
- **Szélterhek** betonhoz nincsenek elkészítve; a beton- és alapozási ellenőrzések mérnöki átnézésre valók.
- **Kódaláírás.** A Windows telepítők és a macOS .dmg nincsenek aláírva: a Windows figyelmeztethet, a macOS jobb klikket és Megnyitást kér.

A korábbi változások itt olvashatók: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).
