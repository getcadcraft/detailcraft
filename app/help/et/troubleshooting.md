---
title: Veaotsing
summary: Mida DetailCraft'i teated tähendavad ja mida teha, alates puuduvast 3D-vaatest kuni ühendusteni, mida ei saa ehitada.
keywords: probleem, viga, ei tööta, abi, parandus, teade, keeldumine, webgl, tühi, hoiatus, ei saa, küsimus
from: f8c3b2b1
---

Enamik keeldumisi on selgitatud ekraani all olevas olekuribas või vahekaardil {{ui:Probleemid}}. Loe need kõigepealt. Allpool on teated tsiteeritud täpselt nii, nagu DetailCraft need näitab.

## 3D-vaade on puudu

**„Selles brauseris ei saanud käivitada 3D-graafikat (WebGL). Mudel, aruanded ja eksport töötavad ikka.“**

Brauser ei saanud käivitada WebGL-i, 3D-graafikat, mida DetailCraft joonistab.

1. Uuenda brauser viimasele versioonile.
2. Lülita sisse riistvaraline kiirendus ja käivita brauser uuesti (vt allpool).
3. Uuenda graafikadraiverit või proovi teist brauserit. Kaugtöölaudadel ja virtuaalmasinatel WebGL sageli puudub.
4. Vahepeal saad ikka töötada: paiguta elemente vormiga {{ui:Lisa ruudustiku järgi}}, loe aruandeid ja ekspordi. Ainult vaates klõpsamine vajab WebGL-i.

:::chromium
Riistvaralise kiirenduse sisselülitamiseks ava **Seaded, Süsteem** ja lülita sisse **Kasuta graafikakiirendust, kui see on saadaval**, seejärel käivita brauser uuesti.
:::

:::firefox
Riistvaralise kiirenduse sisselülitamiseks ava **Seaded, Üldine, Jõudlus**, eemalda linnuke **Kasuta soovitatud jõudlusseadeid** ja märgi **Kasuta riistvaralist kiirendust, kui see on saadaval**. Käivita Firefox uuesti.
:::

:::safari
Safaris on WebGL vaikimisi sees. Uuenda macOS, kui vaade ikka ei käivitu, ja kontrolli, et ükski laiendus seda ei blokeeri.
:::

Lisaks: [Brauserid ja arvutid](common:browsers).

## Klõpsamine vaates ei tee midagi

- **Klõpsu lähedal ristumiskohta ei ole.** Paigutustööriistad püüavad kinni ainult ruudustiku ristumiskohti. Klõps kaugel igast punktist ei tee midagi. Liigu lähemale, kuni punkt süttib.
- **Tööriist on {{ui:Vali}} ja klõpsasid tühja ruumi.** See tühistab valiku.
- **Lohistasid.** Vajutus ja vabastus, mis on üksteisest rohkem kui mõne pikslit kaugel, on lohistamine: see pöörab või nihutab vaadet.
- **Osa on lõigatud.** Vaadetes {{ui:Plaan}} ja {{ui:Vaade}} on lõikest väljapoole jääv teras peidetud ega ole klõpsatav. Lülitu vaatesse {{ui:3D}}.
- **Ristumiskoht on vales tasandis.** Vaates {{ui:3D}} võivad mitme tasandi ristumiskohad ekraanil kattuda; klõps võtab lähima. Kasuta {{ui:Plaan}} või {{ui:Vaade}}.

## Paigutusteated

| Teade | Mida teha |
|---|---|
| Tasandit 2 kohal ei ole, kuhu post ulatuks. Lisa esmalt tasand. | Lisa tasand jaotises {{ui:Tasandid}} või klõpsa madalamat tasandit |
| Vali teiseks otsaks teine ristumiskoht. | Klõpsasid kaks korda sama punkti |
| Kaks otsa on sama punkt. | Vormis {{ui:Lisa ruudustiku järgi}} on algus ja lõpp samad |
| Elementide paigutamiseks lisa vasakule ruudustiku jooned. | Mudelil ei ole ühes suunas ruudustiku jooni |
| Tundmatu profiil „…“ | Profiili ei ole kataloogis ega mudeli kohandatud profiilides. Vali nimekirjast üks |
| Sisesta number. | Numbriväli jäi tühjaks või sisaldab teksti |

## Ühendusi ei saa ehitada

### „See tala ei lõpe postijoonel.“

Otsaplaadid vajavad, et talaots oleks täpselt vertikaalse posti joonel, selle alumise ja ülemise serva vahel (1 mm täpsusega). Kontrolli tala {{ui:Otspunktid (x, y, z mm)}} ja posti asukohta.

### „See tala liitub postivõrguga või on nurga all“

Või jaotises {{ui:Probleemid}}: „Postivõrku liituvaid talasid ei ehitata veel: pööra posti 90° või kasuta teist ühendust.“

Tala liitub postivõrku. Vali post ja sea {{ui:Pööre (°)}} väärtuseks 90 ning proovi uuesti. Kaldliited ei ole veel tehtud.

### „Otsaplaate ehitatakse ainult tasaste talade jaoks (see tala on kaldu).“

Mõlema talaotsa peab olema samal kõrgusel.

### „Otsaplaadid eeldavad, et tala on püsti (pööre 0).“

Sea tala {{ui:Pööre (°)}} tagasi väärtusele 0.

### „Otsaplaadid vajavad I-profiilist talad.“ / „Otsaplaadid vajavad I-profiilist posti.“

Otsaplaate võtavad vastu ainult I-profiilid (W, IPE, HEA, HEB või kohandatud I).

### „Talaots ei ole enam posti joonel.“

Pärast ühenduse lisamist liigutasid talat või posti. Liiguta see tagasi või kustuta ühendus.

### „Ühendused lõikasid selle elemendi nulliks.“

Mõlema otsa ühendused lõikavad elemendi tagasi kaugemale, kui selle pikkus on, näiteks väga lühike tala kahe sügava posti vahel. Kontrolli elemendi otsi ja plaadi paksust.

### „Ühtegi teist sellist liidet ilma ühenduseta …“

{{ui:Sarnane}} kopeerib ainult liidetele, millel on sama talaprofiil, sama postiprofiil ja sama ühenduse tüüp (tala flensi sisse) ning millel ühendust veel ei ole.

### „Mõlemal otsal on juba ühendused.“ / „Sellel postil on juba aluseplaat.“

Vali olemasolev ühendus, et seda muuta, või kustuta see enne.

## Hoiatused vahekaardil Probleemid

Hoiatused ei takista ühenduse ega vundamendi ehitamist; need palutakse sul üle kontrollida. Serva- ja vahekauguse hoiatused kasutavad EN 1993-1-8 tabeli 3.3 miinimumi (serv 1,2 × auk, samm 2,2 × auk, vahe 2,4 × auk). Kui sinu projektis kehtivad muud reeglid, ei pruugi hoiatus kehtida; DetailCraft ei projekteeri ühendusi.

„Auk on elemendi otsast väljas“ tähendab, et augu x on väiksem kui 0 või suurem kui lõikepikkus. Pea meeles, et x mõõdetakse lõike algusest pärast seda, kui ühendused elemendi tagasi lõikasid.

## Vundamendi muudatused on keelatud

| Teade | Mida teha |
|---|---|
| Kate ei jäta selles vundamendis armatuuri jaoks ruumi. | Tee vundament suuremaks või kate väiksemaks |
| Vundament on liiga madal kahe armatuurikihi jaoks kattekihi sees. | Tee see sügavamaks või vähenda katet |
| Algarmatus ei mahu vundamenti 75 mm kattega. | Vähem algarmatust, tihedam samm või suurem vundament |
| Armatuuri samm peab olema 50–1000 mm. | Sisesta samm selles vahemikus |
| Pikkus peab olema 300–50000 mm. | Vundamendi mõõtudel on piirangud: pikkus ja laius 300–50000, sügavus 150–10000 |

## Ruudustikke ja tasandeid ei saa muuta

| Teade | Mida teha |
|---|---|
| Numbritega ruudustik: anna iga kahe joone vahele üks samm (4). | Loenda vahed üle: viis joont vajab nelja sammu |
| Tähtedega ruudustik: sammud peavad olema positiivsed millimeetrid. | Ei nulle, negatiivseid arve ega teksti |
| Numbriliste ruudustike sildid peavad olema erinevad. | Kahel joonel on sama silt |
| Igas suunas on kuni 60 ruudustiku joont. | Jaga mudel |
| Hoia alles vähemalt üks tasand. | Eemaldasid kõik tasandi read |
| Igal tasandil peab olema nimi. / Kaks tasandit on nimega „…“. | Anna igale tasandile erinev nimi |

## Faili avamine ebaõnnestub

| Teade | Põhjus |
|---|---|
| DetailCraft avab oma mudeleid (.detailcraft.json). IFC-importi ei ole veel. | Fail ei ole `.json`-fail |
| See ei ole DetailCraft'i mudel (mitte JSON). | Fail on vigane või on muu JSON |
| See ei ole DetailCraft'i mudel. | JSON-fail muust programmist |
| Selle mudeli salvestas uuem DetailCraft (vorming 2). | Ava see uuemas DetailCraft'is, mis selle salvestas |
| See fail on DetailCraft'i mudeli jaoks liiga suur. | Üle 50 MB |

Kui fail avaneb hoiatustega, näiteks „2 elementi polnud korrektsed ja need jäeti välja.“, on ülejäänud mudel korras. Ära kirjuta originaali üle enne, kui oled kontrollinud, mis välja jäeti.

## Eksport

| Teade | Põhjus |
|---|---|
| Eksportida pole veel midagi. | {{ui:IFC}} tühja mudeliga |
| Pole I-profiile ega plaate, millest NC-faile kirjutada. | Mudelis on ainult kanaleid, nurki või torusid |
| Ei kirjutatud (seni ainult I-profiile ja plaate): … | Need märgised ei ole I-profiilid ega plaadid; ülejäänud kirjutati |
| Vundamente pole, seega pole armatuuri loetelu. | {{ui:Painutamine}} ilma vundamentideta |
| … tähemärki(d) PDF-fondist väljaspool trükitakse „?“-na. | Mudeli nimes või klassis on tähemärke, mida PDF-fondil pole |

{{ui:Tööjoonis}} on hall: mudelil ei ole veel ühtegi detaili.

## Allalaadimised ei ilmu

Iga salvestus ja eksport on brauseri allalaadimine. Kontrolli brauseri allalaadimiste loendit. Kui brauser küsib enne mitme faili allalaadimist või blokeerib selle saidi allalaadimised, luba need. Safaris kontrolli tööriistariba allalaadimisnuppu.

## Klahvid ei tee midagi

- Kursor on tekst- või numbriväljas: tööriistaklahve ja {{key:Delete}} ignoreeritakse, et saaksid kirjutada. Vajuta {{key:Tab}} või klõpsa vaadet.
- Dialoog on avatud: sulge see esmalt.
- Brauser on võtnud klaviatuuri (näiteks aadressiriba): klõpsa DetailCraft'i sees.
- {{key:Ctrl+Shift+F}} kasutab Ctrl-klahvi isegi Macil.

## Võrguta kasutamise probleemid

Nupp {{ui:Salvesta võrguks}} rakenduse ribal näitab, missugune on võrguvaba koopia olek. Kuidas salvestamine toimib: [Töö võrguta režiimis](common:offline).

| Nupp näitab | Mida see tähendab | Mida teha |
|---|---|---|
| {{ui:Salvesta võrguks}} | Selles brauseris ei ole veel võrguvaba koopiat | Vali see, kui oled võrgus |
| Salvestan 5 / 20 | Salvestamine on pooleli | Oota kuni {{ui:Valmis ka võrguta}}; hoia vahekaart avatuna |
| {{ui:Valmis ka võrguta}} | DetailCraft, selle 3D-vaade, iga eksport ja see abi töötavad ilma ühenduseta | Mitte midagi. Klõpsa seda, et {{ui:Salvesta uuesti (võta uusim versioon)}} või {{ui:Eemalda võrguvälise koopia}} |
| {{ui:Salvestamine ebaõnnestus}} | Mõned failid ei laadinud alla | Kontrolli ühendust ja klõpsa uuesti proovimiseks |
| {{ui:Võrguta kasutamine pole saadaval}} | See aken ei saa hoida võrguvaba koopiat: privaatsed aknad ja mõned hallatud arvutid blokeerivad selle | Kasuta tavalist akent või tööta võrgus |

Kui oled võrguühenduseta ja nupp ei näita {{ui:Valmis ka võrguta}}, ära laadi lehte uuesti ega sulge vahekaarti: see, mis on laetud, töötab edasi. Salvesta oma mudel klahvikombinatsiooniga {{key:Mod+S}} ja oota, kuni oled uuesti võrgus.

## Salvestamata töö

Kui brauser küsib, kas lahkuda lehelt, on DetailCraft'il salvestamata muudatusi. Vali jäämine ja vajuta {{key:Mod+S}}. DetailCraft ei saa mudelit taastada pärast vahekaardi sulgemist.

## Ikka jääb tõkkesse

Kirjuta üles, mida tegid ja täpne teade, ning teavita meid [tugilehe](https://getcadcraft.com/support) kaudu.
