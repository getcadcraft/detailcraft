---
title: Üleminek muust detailimise tarkvarast
summary: Kuidas täisfunktsionaalse detailimispaketi harjumused vastavad DetailCraftile ja erinevused, mis tabavad kogenud detailijaid ootamatult.
keywords: üleminek, migreerimine, tuttav, töövoog, võrdlus, erinevused, nummerdamine, komponendid, kataloog, joonised, harjumused
from: 39639a5d
---

Kui detailid Tekla Structuresis, tundub suurem osa DetailCraftist tuttav: ruudustik, tasandid, kataloogi profiilid, osad ja koosted, liited, nummerdamine, NC-failid, IFC. Ulatus on väga erinev: Tekla Structures on täielik tootmissüsteem, DetailCraft aga väike, varajases arengus brauserirakendus, mis teeb mõned tööd algusest lõpuni. See lehekülg näitab, kus sinu harjumused kaasa lähevad ja kus mitte.

:::tip
Kui sinu käed tunnevad Tekla Structuresi lintu, vali {{ui:Sätted}} › {{ui:DetailCraft}} › {{ui:Menüüd, klahvid ja hiir}} all menüülaadiks {{ui:Terase lint}}: vahelehed Modelleerimine, Detailimine, Muuda, Joonised, Valmistus ja Vaade ning keskmine nupp nihutab vaadet. Kui tuled AutoCAD-ist ja tahad käske kirjutada, lisab {{ui:Klassikaline joonistamine}} käsurea (BEAM, COLUMN, ENDPLATE, ZOOM …). Vt [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse).
:::

## Kiire vastavus

| Oled harjunud | DetailCraftis |
|---|---|
| Ruudustike loomine koordinaatidega ruudustiku dialoogis | {{ui:Ruudustik}} vasakul paneelil: sildid ja joonte vahed, mitte absoluutsed koordinaadid. Numbrilised jooned lähevad ühes suunas, tähtjooned teises |
| Tasandid ruudustiku Z-koordinaatidena | Eraldi nimekiri {{ui:Tasandid}}, igal real nimi ja kõrgus, rakendatakse valikuga {{ui:Rakenda tasandid}} |
| Punktide valimine suvalistes kohtades haakumisega | Klõpsud haakuvad ainult ruudustiku ristumistesse. Ruudustikust väljapoole jäävad punktid sisestatakse liikme {{ui:Otspunktid (x, y, z mm)}} väljale |
| Posti, tala ja plaadi käsud | {{ui:Post}} ({{key:C}}), {{ui:Tala}} ({{key:B}}), {{ui:Diagonaal}} ({{key:R}}), {{ui:Plaat}} ({{key:P}}), {{ui:Vundament}} ({{key:F}}) |
| Osa omaduste dialoog (topeltklõps osal) | Üks klõps: paremal asuv paneel {{ui:Omadused}} on alati aktiivne; dialoogi ei ole ning nuppe Muuda ega Rakenda ei ole |
| Asend tasandil, pöörde ja sügavuse sätted | {{ui:Asend}} (terase ülaserv, keskel või alumine serv joonel) ja {{ui:Pööre (°)}}. Eraldi horisontaalseid nihkeid ei ole |
| Profiilikataloog | Fikseeritud loend 2 311 avaldatud mõõdust (AISC W, S, C, L, HSS, Pipe; Euroopa IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS ja külmvormitud õõnesprofiilid), lisaks parameetrilised plaadid ja sinu enda {{ui:Kohandatud profiil}} lõigud |
| Materjalikataloog | Seitse klassi loendis: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Liitekomponendi rakendamine ja selle dialoog | Vali tala, vali {{ui:Otsaplaadid}}. Sätted ilmuvad paneelile {{ui:Omadused}}. Liiteid on ainult kaks (otsaplaat posti flanššile, aluseplaat) |
| Automaatne liide või liite kopeerimine sarnastele liidetele | Vali liide, vali {{ui:Rakenda sarnastele (n)}} |
| Nummerdamine seeriate ja algnumbritega | Käsku ei ole: märgid uuenevad pärast iga muudatust iseenesest, fikseeritud eesliidetega c, b, br, p ja C, B, BR, P |
| Poltide ja aukude dialoogid | Augud sisestatakse pinna ja asendi järgi. Poldid tulevad ainult liidetest |
| Lõikamise, sobitamise ja hulknurga lõiketööriistad | Lõiked (ülal või all, kummalgi otsal) ainult I-profiilidel. Liidete tagasilõiked on automaatsed |
| Aruanded ja mallid | Kolm fikseeritud aruannet alumise serva vahelehtedel ja CSV allalaadimised |
| Joonise loomine ja joonisenimekiri | Üks tööjoonis iga osamärgi kohta, kõik tehakse korraga, eelvaade ja seejärel allalaadimine ühe PDF-ina või lehtede kaupa. Midagi ei säilitata ega muudeta |
| NC-failide eksport | {{ui:NC-failid}}: üks DSTV-fail osamärgi kohta, ainult I-profiilid ja plaadid, ZIP-pakitud |
| IFC eksport | {{ui:IFC}}: IFC4 kogu mudelist koos armatuuriga |
| Armatuur igas betoonosas | Armatuur ainult ristkülikukujulistes tallevundamentides, USA varraste suurustes, alumise võrgu ja ootevardadega |
| Mudel salvestatud projektikausta, mitme kasutajaga | Üks allalaaditav fail `.detailcraft.json`. Üks kasutaja, sinu arvutis |
| Tagasivõtmise ajalugu | {{key:Mod+Z}} ja {{key:Mod+Y}}, kuni 200 sammu, säilib kuni avad või alustad teist mudelit |

## Erinevused, millele inimesed komistavad

### Märgid muutuvad iseenesest

Nummerdamise sammu ei ole. Märgid arvutatakse pärast iga muudatust uuesti, seega on need alati ajakohased, kuid need võivad ka ümber nummerduda: lisa post ja eilne c3 võib nüüd olla c4. Vanade märkide hoidmiseks ei ole „nummerdamise ajalugu“. Lõpeta mudel, seejärel väljasta koguste loend, NC-failid ja tööjoonised koos ühest salvestatud failist.

### Keskmine hiireklahv suumib, ei nihuta

3D-vaates: vasak lohistamine pöörab, parem lohistamine nihutab, ratas suumib ja keskmise nupuga lohistamine suumib samuti. {{key:Shift}} all vasakut nuppu lohistades nihutab samuti. Ratas suumib vaate keskme poole, mitte kursori poole. Pöörlemiskeskme valimist ei ole: mudel pöörleb ümber vaate keskme. Vt [Liigu 3D-vaates](topic:navigate-3d).

### Posti vaikimisi suund

Pöördega 0 on posti flansid suunatud nummerdatud ruudustiku suunas. Tähtjoonte vahel jooksvad talad raamivad võrku ja seal ei lubata otsaplaate („Posti võrku raamivaid talasid ei ole veel ehitatud“). Pööra need postid enne liidete lisamist 90° võrra.

### Vaated ainult tähtjoontel

{{ui:Vaade}} vaatab ainult mööda tähtjooni. Numbrijoonte kohta vaateid ei ole, salvestatud vaateid ega töötasandeid ei ole. Kasuta {{ui:3D}} või {{ui:Lisa ruudustiku järgi}} numbrijoontel olevate raamide jaoks.

### Valimine, kopeerimine ja teisaldamine

Vali mitu osa {{key:Shift}}+klõpsuga või {{key:Mod+A}}, siis kopeeri, lõika, kleebi (ruudustiku ristumisel, sisestatud nihkega või kohapeal) ja dubleeri neid, liited kaasa arvatud ([Kopeeri, kleebi ja dubleeri](topic:copy-paste)). Akna valikut, valikufiltrit, teisaldamist, peegeldamist ega massiivi ei ole ning omadusi muudetakse ühe liikme kaupa paneelil {{ui:Omadused}}.

### Ruudustik ei lohista liikmeid kaasa

Liikmed säilitavad oma koordinaadid, kui muudad ruudustiku vahesid; midagi ei liigu koos ruudustikujoontega. Muuda ruudustikku enne terase paigutamist või muuda hiljem iga liikme otsakoordinaate.

### Liiteid ei projekteerita

Kaks liidet paigutavad plaadid, augud, poldid ja keevised sinu antud arvude järgi. Mingit projekteerimiskontrolli ei ole, ainult serva- ja vahehoiatused (EN 1993-1-8 tabel 3.3).

### Auke ei lõigata 3D-vaates

Augud kuvatakse tumedate tappidena. Need on tõelised augud NC-failides, tööjoonistel ja IFC-failis. Lõiked lõigatakse vaates.

### Kaalud on brutokaalud

Terase kaal ei arvesta auke ega lõikeid ning poltide kaal ei ole sisse arvatud.

### Ainult millimeetrid

Kõik sisestatakse ja kuvatakse millimeetrites, isegi AISC profiilide puhul. Profiilinimed säilitavad avaldatud kuju (W12x50, HSS6x6x1/4).

### Joonistega ei pea tegelema

Joonisenimekirja, joonisteredaktorit, üldpaigutusi ega koostejooniseid ei ole. Tööjoonis tehakse siis, kui seda küsid, ja laaditakse alla; selle muutmiseks muuda mudelit ja tee see uuesti.

### See töötab brauseris

Salvestamine laadib faili alla. Klaviatuurikäsud, mida brauser ise kasutab, ei ole kasutatavad. Sinu mudelid ei lahku kunagi sinu arvutist: vt [Kuhu sinu failid lähevad](common:your-files).

## Mida jätkata praeguses tarkvaras

Täna sobib DetailCraft väikestele raamistikele, idee kontrollimiseks, õpetamiseks või NC-failide ja tööjooniste tegemiseks lihtsate tala- ja postitööde jaoks. Keeruliste liidete, üldpaigutusjooniste, montaažijooniste, mitme kasutajaga projektide ja kõige, mis on loetletud jaotises [Mida ei ole veel ehitatud](topic:not-built-yet), jätka praegu kasutatavas tarkvaras.
