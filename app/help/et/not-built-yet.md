---
title: Mis on veel valmimata
summary: Mida see varajane DetailCraft'i versioon veel ei tee ja mida praegu selle asemel teha.
keywords: piirangud, puudused, puuduv, tegevuskava, ei toetata, tulemas, planeeritud, lahendus, tehtav
from: ea411885
---

DetailCraft on varajane versioon. See leht loetleb, mida ta veel ei tee, et saaksid oma tööd sellest lähtuvalt planeerida. Miski siin pole kuupäevalubadus.

## Modelleerimine

| Pole veel | Praegu selle asemel |
|---|---|
| Elemendi ühe otsa lohistamine (venitamine) | Muuda paneelis {{ui:Omadused}} jaotises {{ui:Otspunktid (x, y, z mm)}} väärtusi {{ui:Algus}} või {{ui:Lõpp}} |
| Valikufilter (ainult talad, ainult üks profiil) | Lohista aken ja seejärel {{key:Shift}}+klõps, et detaile valikust välja võtta |
| Valiku massiivina paigutamine; pööramine kaldtelje ümber; peegeldamine kaldtasandis | Kopeeri ja kleebi nihkega või {{ui:Dubleeri}}; pööramine ja peegeldamine toimivad plaanis ([Vali aknaga, teisalda, pööra, peegelda, muuda mitut korraga](topic:select-and-change)) |
| Punktide määramine klõpsates väljaspool ruudustikku | Paiguta ruudustikule ja seejärel sisesta lõpp-punkti koordinaadid |
| Vaated nummerdatud ruudustikujoontel; salvestatud vaated; töötasandid | Kasuta {{ui:3D}} või {{ui:Lisa ruudustiku järgi}} |
| Augud 3D-vaates päriselt lõigatud | Augud kuvatakse tumedate korkidena; need on igas eksportis päris |
| Ümardatud või nurgaga väljalõiked, muud lõiked ja liitmikud | Ristkülikukujulised väljalõiked ainult I-profiilidel |
| Augud, mis lisad nurkadele ja ümmargustele torudele | Nurkade augud tulevad ainult [diagonaalide sõlmeplaatidest](topic:brace-gussets) |
| Sisend tolli-ühikutes | Sisesta millimeetrites (25.4 mm tolli kohta) |
| Kohandatud profiili muutmine või eemaldamine | Lisa parandatud profiil uue nimega |

## Trepid

| Pole veel | Praegu selle asemel |
|---|---|
| Käsipuud, vahepealsed, varbaplaadid, restastmed, spiraaltrepid ja kaksikpöördega trepid | Ainult sirged trepiastmed; vt [Trepid](topic:stairs) |
| Kaarvöö otsalõiked vastu põrandaid | Risti lõigatud kaarvööd; lõika need oma tootmistarkvaras |

## Ühendused

DetailCraft koostab kuus ühendust: diagonaalide sõlmeplaadi (vt [Diagonaalide sõlmeplaadid](topic:brace-gussets)); poltidega skarvi ühe I-profiili kahe tüki vahel (vt [Skarvid](topic:splices)); nurgaliite kahe nurga all kokkuvasuva I-profiili vahel, ainult lõigatuna või poltidega otsplaatidega (vt [Nurgaliited](topic:mitres)); poltidega otsplaadi, tasase või pikendatud, tasemel püstise I-profiilist tala ja I-profiilist posti tiiva või vöödi vahel; lõikeplaadi tala (risti, viltuse või kaldu) ja posti tiiva või vöödi vahel; ning posti aluseplaadi nelja ankruvarrasega.

| Pole veel | Praegu selle asemel |
|---|---|
| Viltused või kaldus otsplaadid | Kasuta [lõikeplaate](topic:shear-tabs), mis sobivad viltuste ja kaldus talade jaoks |
| Kinnitusnurgikud; skarvide täiteplaadid ja erisuuruste vahelised skarvid; tala ja postiga keevitatud nurgasõlmeplaadid; faasitud sõlmeplaadid | Detailista need muus tarkvaras või lisa plaadid ja augud käsitsi eraldi detailidena; vt [Skarvid](topic:splices), [Diagonaalide sõlmeplaadid](topic:brace-gussets) |
| Faasitud või kitsenevad aluseplaadi jäigastid; täitevalu augud; vundamendi süvend lõikekõrva jaoks | Ristkülikukujulised jäigastid; vt [Aluseplaadid](topic:base-plates) |
| Haunchid; keevitatud pooklõiked otsakeevisega; jäigastid teise elemendi tiivaga ühel joonel | [Pooklõige](topic:mitres) otsplaatide ja vööduribide jäigastitega või lihtne pooklõige; lisa muud plaadid käsitsi eraldi detailidena |
| Ühenduste projekteerimise kontrollid (tugevus) | Kontrolli ühendusi insenerarvutustega; DetailCraft hoiatab ainult serva kauguse ja vahede eest |
| Pikkaugud | Ainult ümmargused augud |

## Analüüs

| Pole veel | Praegu selle asemel |
|---|---|
| Projekteerimiskontrollid väljaspool terasest I-profiile: torud, nurgikud, kanalid, keevitatud kujud, saledad või 4. klassi elemendid, väänd, ühendused; betoon: nihkenõtkus, väänd, seismiline detailelahendus, plaadid ja seinad | Vahekaart {{ui:Analüüs}} kontrollib terasest I-profiile standardite AISC 360 või EN 1993-1-1 järgi ([Kontrolli terasdetaile projekteerimisnormi järgi](topic:design-checks)); ülejäänu jääb märgituna „ei ole kontrollitud“; kogu tulemust vaatab üle insener |
| Stabiilsuse kao analüüs, võnkumine | Teise järgu arvutus on ainult P-Delta (elastne); stabiilsuse kao analüüs puudub (modaal-, vastusspektri-, ajaloo- ja pushover-analüüs on vahekaardil {{ui:Analüüs}}) |
| Insener üle vaadanud projekteerimiskontrollid | Kuni selleni on need abivahendiks: enne nende usaldamist kontrolli kahte-kolme elementi käsitsi või insenerile kuuluvas tarkvaras |
| Põranda-, tuule- ja lumekoormused, mis arvutatakse pindadest sinu eest | Aseta koormused elementidele käsitsi, kN/m või kN |
| Elementide nihked, ekstsentrilised liitekohad, ainult tõmbel töötavad diagonaalid, plaadid ja vundamendid raamis | Elemente arvutatakse nende töötelgede järgi; diagonaalid võtavad vastu tõmbe ja surve |

## Armatuur

| Pole veel | Praegu selle asemel |
|---|---|
| Ümmargused postid, spiraalid, kaldus või kumera kujuga talad, muud kui ristkülikukujulised plaadid, sirgeks mitte jäävad seinad | Ristkülikukujulised talad, postid, plaadid ja seinad ([Detailista raudbetoon](topic:reinforced-concrete)) |
| Kõverdatud varrased ülekattesse, nihutatud ülekatted, ülekatted kohas, mida ise valid | Ülekatted ühtlaste sammudega, iga varras ülekattega ühes lõigus (ACI klass B, EN α6 = 1.5) |
| Nurgavardad avade juures, lõikepunktsiooni (punching) armatuur, seismiline detailelahendus (ACI 318-19 peatükk 18) | Avade mõlemal küljel ääreraudad (trimmers); ülejäänu kontrolli ise |
| Konstruktsiooniprogrammi enda failide lugemine | Ekspordi selles IFC; selle IfcReinforcingBar tuleb sisse varraste kujul ([Varrased IFC-failist](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Kujukoodid peale sirge, ühe painde ja U-kuju; ACI 315 tüübid sirgetele ja ühe konksuga varrastele | Kolm kuju prinditakse BS 8666 00, 11, 21 või ACI tüüp 2 järgi; vt [Armatuuri viide](topic:rebar-reference) |
| Meetrilised varrased, välja arvatud BS 4449 H8–H40 (nt CSA 10M–35M) | ASTM soft-metric nimed #10–#36 või BS-varrased |

## Joonised ja eksport

| Pole veel | Praegu selle asemel |
|---|---|
| Püstised lehed, A0 ja oma suurusega lehed; üldpaigutuse vaated viltusel ruudustikul | Maastikulised A4–A1 ja ANSI B–D ([Üldpaigutuse ja koostejoonised](topic:drawings)); skaleeri PDF, et printida mõnes muus suuruses |
| Keevitusmärgid üheosalistel tootmisjoonistel; muud märgid kui nurkõmblused | Koostejoonistel on nurkõmbluste märgid; tootmisjoonis annab keevisõmbluse tekstina |
| Joonise muutmine rakenduses | Muuda mudelit ja tee joonis uuesti; märgi PDF üles PDF-rakenduses, näiteks MarkupCraft |
| Joonised DWG-na mõõtmeobjektidega või mudel täismõõdus mudeliruumis lehtedega paigutustena | Iga leht on täissuuruses DWG või DXF paberist, mõõtmed joontena ja arvudena ([Üldpaigutuse ja koostejoonised](topic:drawings#download)) |
| NC-augud ümmargustes torudes, väljalõiked nurkades ja ümmargustes torudes NC-failides | Ei kirjutata; vt [NC-faili väljad](topic:nc1-fields) |
| Viltlõiked, märgistused ja sisemised kontuurid NC-failides | Praegu mitte midagi |
| Polttaugud, poldid, keevisõmblused ja vundamendid USD-eksportis | Need on IFC-, NC- ja BOM-väljundites; vt [Ekspordi terasmudel USD-na](topic:usd) |
| Ühenduste, vundamentide, pikk- või ristkülikukujuliste aukude ja ümmarguste torude aukude sisseimport IFC-failist | {{ui:Impordi IFC}} toob sisse talad, postid, elemendid, plaadid, ruudustikud, tasandid, ümmargused augud, väljalõiked, poldid ja armatuurvardad ning selle aruanne loetleb, mis jäeti välja |
| Kohandatud aruannete paigutused | Kolm CSV-faili |

## Paneelid

| Pole veel | Praegu selle asemel |
|---|---|
| Alumiste aruannete ({{ui:Probleemid}}, {{ui:Materjalinimekiri}}, {{ui:Painutusloend}}) teisaldamine | Ainult paneelid {{ui:Mudel}} ja {{ui:Omadused}} saab teisaldada. Vt [Paneelide paigutamine](common:arrange-panels) |

## Koostöö ja salvestamine

| Pole veel | Praegu selle asemel |
|---|---|
| Pilvesalvestus ja sünkroonimine arvutite vahel | Salvesta `.detailcraft.json` failid ja jaga neid nagu iga teist faili. Pilvesalvestus pole veel saadaval |
| Teiste inimeste kursorid ja „redigeerib“ sildid reaalajas meeskonnatöös (Live TeamWork); ruudustikud, tasandid ja faasid ühendatud üksikult | Muudatused ühendatakse ikka (ruudustikud, tasandid ja faasid tervikuna, hilisem muudatus võidab); vt [Töötage ühiselt reaalajas](topic:work-live) |
| Kutselingid Live TeamWork sessioonile interneti kaudu | Liitu lühikoodiga samas võrgus |

## Platvormid

- DetailCraft on tehtud lauaarvuti, sülearvuti või tahvli ekraanile. See töötab ka telefonis: mudel säilitab ekraani ning paneelid ja aruanded avanevad lehtedena allservas asuvast ribast, kuid paneelidele on vähe ruumi.
- Võrguta kasutamiseks tuleb DetailCraft kõigepealt salvestada võrguta kasutamiseks rakenduseribal nupuga {{ui:Salvesta võrguks}}; kui seal on kirjas {{ui:Valmis ka võrguta}}, töötab selles versioonis kõik ilma ühenduseta. Vt [Võrguta töötamine](common:offline).

Kui mõni neist puudustest takistab sinu tööd, anna meile teada [toe lehel](https://getcadcraft.com/support); see aitab meil otsustada, mida järgmiseks ehitada.
