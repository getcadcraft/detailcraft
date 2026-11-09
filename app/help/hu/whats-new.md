---
title: Újdonságok a 0.8 és 0.8.1 verzióban
summary: Szerelési film egy daru teherdiagramjából, kapcsolat-autopilóta, betétvas-torlódási térkép, alapellenőrzések, fa- és könnyűacél-vázszerkezeti panelek, kivitelezhetőségi és hegesztés-hozzáférési ellenőrzések, beszállítói készlet, mi törik el először, élő újraszámolás, további betonellenőrzések és a 0.8.1 javítások.
keywords: újdonságok, mi újdonság, kiadási jegyzetek, változásnapló, változások, 0.8, 0.8.1, verzió, új funkciók, szerelés, daru, teherdiagram, film, autopilóta, kapcsolatok, betétvas, torlódás, alap, talp, süllyedés, szerkezet, fa, könnyűacél, vágólista, kivitelezhetőség, hegesztés-hozzáférés, beszállító, készlet, szállítási idő, mi törik el először, élő, beton, szeizmikus, födém, nyelvek, asszisztens
from: 6e33e052
---

Ez a változás a DetailCraft 0.7 verziójához képest a 0.8 (2026. november 1.) és a 0.8.1 (2026. november 2.) verzióban. A 0.7 acél rúdelemeket ellenőrzött; a 0.8 megtervezi az emeléseket, javasolja a kapcsolatokat, ellenőrzi az alapokat és a betétvasat, valamint fából és könnyűacélból készült falakat, födémeket és tetőket állít össze.

## Új

### Szerelés

- **Szerelési terv és film.** A {{ui:Szerelés}} lapon írja le a darut (hol áll, a legmagasabb horgát, a diagramban nem szereplő kötélzetet), és írja be a teherdiagramja sorait. A DetailCraft összeállításonként emeli a modellt, fázissorrendben és szintenként, és minden emelést ellenőriz a diagram szerint az adott sugárnál, a beállított tartalékkal együtt. A {{ui:Videó mentése}} egy HTML-fájlt ír, amely bármely böngészőben lejátszható offline, telefonon is. A diagramon túli, azt meghaladó vagy túl magas emelések a {{ui:Problémák}} alatt vannak. Ez a számaiból készült terv, nem emelési terv. Lásd: [Szerelési terv és film](topic:erection-movie).

### Kapcsolatok

- **Kapcsolat-autopilóta.** Az {{ui:Automata}} lap minden olyan csomópontot megvizsgál, amelynek nincs kapcsolata, és az alakok alapján javasol egyet: talplemezek, nyírólemezek, homloklemezek azokhoz a gerendákhoz, amelyeket nyomatéki gerendának jelöl meg, toldások és csomólemezek. Adjon meg egyenletes terhelést vagy egy végi nyíróerőt, és a csavarok száma a csavar tervezési szilárdságát követi. A {{ui:Mind hozzáadása}} gomb a javaslatokat egyetlen visszavonási lépésként adja hozzá. Ezek átnézendő kiindulási értékek, nem kapcsolattervezés.
- **Kivitelezhetőségi ellenőrzések.** A {{ui:Problémák}} lista azokat a csavarokat jelzi, amelyekhez nem fér hozzá a kulcs, azokat, amelyek túl közel vannak a dugókulcs számára, a sarokvarratokat, amelyek mérethatáron kívül esnek, és a vizet megtartó üreges szelvényeket. Új a hegesztés-hozzáférés: a körbefutó sarokvarrat, amelyhez a hegesztő égője nem fér hozzá, felkerül a listára, a takarásban lévő alkatrésszel és a varrat érintett arányával együtt. Lásd: [Kivitelezhetőségi ellenőrzések](topic:constructability).

### Alapok és betétvas

- **Alapellenőrzések.** Az {{ui:Alapozás}} lap a megadott talajon ellenőrzi a talpakat, az összevont talpakat és a lemezalapokat: teherbírás, csúszás és felborulás használati terhekből; hajlítás, nyírás, átszúródás, betétvas-kifejlesztés és minimális vasalás a tényezőkkel szorzott terhekből (ACI 318-19). A szél vagy sarok közelében álló oszlopot a talp szélével levágott keresztmetszettel ellenőrzi. A süllyedés a talaj modulusából adódik, a rugalmas lemezt altalaj-modulus alapján, rugókon oldja meg, a cölöpcsoportoknak és a támfalaknak pedig saját paneljük van. Az oszlopterhek beírhatók, vagy átvehetők az {{ui:Analízis}} lapról. Lásd: [Alapellenőrzések](topic:foundation-checks).
- **Betétvas-torlódási térkép.** A {{ui:Zsúfoltság}} lap minden talpról felülnézeti hőtérképet rajzol: ott, ahol a vasak túl kevés helyet hagynak a betonnak a lejutáshoz, a szabad távolság szabálya szerint, és ha megadja, a legnagyobb adalékanyag-szemcsét és a vibrátorfejet is figyelembe véve. Lásd: [Betétvas-torlódási térkép](topic:rebar-congestion).

### Szerkezet és beszerzés

- **Fa- és könnyűacél-vázszerkezet.** A {{ui:Szerkezet}} lap fal-, födém- és tetőpaneleket szerkeszt minden darabbal, vágólistával, a megvásárlandó készlettel és léptékhelyes gyártmányrajzzal. A {{ui:Elhelyezés rúdelemekként}} gomb a darabokat a modellbe helyezi, a {{ui:PDF rajzlapok}} pedig panelenként egy lapot ment. A méretek, a távolságok és a fejgerendák a megadott értékek: a DetailCraft nem ellenőrzi, hogy teherbírók-e. Lásd: [Fa- és könnyűacél-vázszerkezeti panelek](topic:framing-panels).
- **Beszállítói készlet és szállítási idő.** A {{ui:Beszerzés}} lap beolvassa a beszállító készletlistáját (CSV), és minden olyan szelvényhez, amelyet a vágólista vásárol, megmutatja, van-e elegendő készlet, és mennyit kell várni. A hiányok és a késő szelvények a {{ui:Problémák}} alatt vannak. Nem történik rendelés. Lásd: [Beszállítói készlet és szállítási idők](topic:supplier-stock).

### Analízis és tervezés

- **Mi törik el először?** Az {{ui:Analízis}} lapon a gomb megkeresi a mérvadó szilárdsági kombinációt, a leggyengébb rudat, azt, hogy a terhek mennyire nőhetnek, mielőtt az első rúd eléri a határát, valamint a leggyengébb homloklemezt vagy nyírólemezt, ahol a csavarok nyírószilárdsága ismert. Ehhez előbb a kombinációk és egy tervezési szabvány kell. A felfekvés, a blokknyírás, a varratok és a kiemelés nincs ellenőrizve. A csatlakoztatott asszisztens ugyanezt kérdezheti meg.
- **Élő.** Jelölje be a {{ui:Élő: újraszámolás minden szerkesztés után}} jelölőnégyzetet, és a vázat minden szerkesztés után újraszámolja.
- **Beton, továbbiak.** A nem eltolódó vázban lévő karcsú oszlopot a megnövelt nyomatékára tervezi (ACI 318-19 6.6.4.5). A szeizmikus periódus a Rayleigh-módszerrel vehető át az analízisből. A lemezekből álló födém minden rétegéhez a nyomatékokból és az egyirányú nyírásból adódó acélt kapja meg. Lásd: [Betonelemek ellenőrzése és szeizmikus terhek készítése](topic:concrete-and-seismic).
- **Mérnöki ellenőrzésre.** Az alap-, beton- és a „Mi törik el először?” eredmények segédeszközök. A szélterhek még nincsenek elkészítve.

### Minden alkalmazásban

- **Nyelvek.** A súgó 54 nyelven érhető el. Az angolon kívüliek gépi piszkozatok, amíg anyanyelvi beszélő el nem olvassa őket; tíz új (litván, lett, bosnyák, maráthi, telugu, albán, afrikaans, filippínó, szuahéli, üzbég).
- **Eszköztársorok.** {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}}: a tördelés, 2 sor vagy 1 sor közül választhat. A már elférő sáv marad, ahogy van; a többi oldalra görgethető.
- **Tulajdonságrács.** A talp mezői a közös rácsot használják: összecsukható kategóriákkal és tömör sűrűséggel. A beírt számtani műveletek, például a 2*450, továbbra is működnek.
- **Beviteli eszközök.** Érintőpad, toll, 3D-egér, kontroller és MIDI vezérelheti az alkalmazásokat. Lásd: [Mozgás 3D-ben](topic:navigate-3d).
- **Problémák panel.** A fenti új ellenőrzések figyelmeztetései ugyanabban a {{ui:Problémák}} panelben jelennek meg, mint korábban.
- **Csatlakoztassa az AI-asszisztensét.** A saját asszisztense, amelyet a CadCraft Studion keresztül csatlakoztat, mind a nyolc alkalmazással működik, és csak azt látja, amit engedélyez. Az egykattintásos csatlakozás, a kiszolgált összekötő és a saját API-kulcs a Studióban még hátravan. Lásd: [A DetailCraft használata AI-asszisztenssel](topic:use-with-ai-assistants).

## A 0.8.1 verzióban javítva

- **Nyelvek a Studióban.** A Studio és a csomagolt kiadások futás közben nyelvet válthatnak; korábban csak angolul voltak. Még nem minden platformon tesztelték: jelezze, ha a nyelv nem változik.
- **Keresztező ablakos kijelölés.** A 0.8.1 telepítők már tartalmazzák a 0.8 webes verzióban helyesen működő ablakos kijelölést; egy régebbi telepítő nem.
- **Táblagépek álló tájolásban.** A szabad rácsmagasság a vászonra kerül, a lapelrendezés 760 px vagy annál kisebb szélességnél indul.

## Még nincs ebben a verzióban

- **Az NC-küldés gépre** még nincs kiadva.
- **Szélterhek** betonhoz még nincsenek elkészítve, a beton- és alapellenőrzéseket pedig mérnöknek kell átnéznie.
- **Kódaláírás.** A Windows-telepítők és a macOS .dmg fájl nincs aláírva, ezért a Windows figyelmeztethet, a macOS pedig jobb gombbal történő kattintást kér, majd a Megnyitást.

A korábbi változások itt olvashatók: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).
