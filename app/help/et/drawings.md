---
title: Üldpaigutus- ja koostejoonised
summary: Koosta mudelist plaanid, vaated ja üks koostejoonis iga koostemärgise kohta lehtedel A4 kuni A1 või ANSI B kuni D, väljasta need revisjonitähtedega ning laadi alla PDF-, DWG- või DXF-vormingus.
keywords: varjatud jooned, varjatud joonte eemaldamine, katkendjoon, revisjonipilv, pilved, revisjonikolmnurk, ankrupoldi plaan, ankrutangid, tangide loend, aluseplaatide loend, mõõtmine, väljastamine, revisjon, rev, revisjonitabel, uuesti väljastamine, väljastuslogi, saatekiri, dwg, dxf, cad-fail, joonise eksport, joonised, üldpaigutus, ga, plaan, vaade, koostejoonis, lehe suurus, paberi suurus, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, printimine, mõõtkava, tiitelplokk, mudeli viide
from: 709f8604
---

Vali rühmast {{ui:Väljund}} {{ui:Joonised}}. DetailCraft koostab kogu komplekti mudelist sellisena, nagu ta praegu on. Midagi ei salvestata: muuda mudelit, ava {{ui:Joonised}} uuesti ja komplekt koostatakse uuesti.

## Mis komplektis on

- **Plaanid**, üks iga tasandi kohta, millel midagi on, vaadatuna ülalt alla.
- **Vaated**, üks iga ruudustiku joone kohta, mille 1 m piires on elemente.
- **Ankrupoltide plaan**, kui mudelil on aluseplaadid: iga aluseplaat ülevalt nähtuna koos oma postiga ja ankrutangidega, ruudustikud koos mõõtmetega, iga tangimustri tüüpdetail (BP1, BP2 …) koos tangide vahe ja servakaugustega ning kaks loetelu: ankrutangid märgise järgi (R1, R2 …: kogus, läbimõõt, pikkus, ulatus üle plaadi, süvistus, klass) ja aluseplaadid ruudustiku järgi (post, muster, plaat, tangid, plaadi ülaserv). Post, mis ei ole ruudustikul, paigutatakse koordinaatide järgi.
- **Koostejoonised**, üks iga koostemärgise kohta: eest-, pealt- ja otsavaade, ahelmõõtmed aukudeni ja plaatide servadeni, osade nimekiri, lahtised poldid ja tangid ning keevis- ja avamärkused. Iga keevitatud plaadi juures on eestvaates keevise sümbol (AWS A2.4): nool osutab liitekohale, nurgake joone all tähendab noole poolt, arv selle vasakul on keevise suurus mm-des ning ring, kus nool joone kohtub, tähendab ümbritsevat keevist.

**Varjatud jooned.** Plaanid ja vaated jätavad välja osa jooned, kui detail on täielikult ees oleva detaili taga (talaots, mis on tagant nähtav posti taga). Koostejoonistel joonistatakse plaat katkendjoonena seal, kus peamine osa seda katab: eestvaates võrgu taga (vaadatuna osa −u poolelt) ja pealtvaates ülemise flantsi all. Osad, mis on samal sügavusel või sügavuses kattuvad, joonistatakse mõlemad täielikult.

Igal lehel on tiitelplokk joonise numbri, mõõtkava, mudeli nime, kuupäeva, lehe numbri koos lehe suurusega ja mudeli viitega: salvestatud mudelist tehtud kood, et väljatrükk saaks sobitada mudeliga, millest see tuli.

## Vali lehe suurus

Vali suurus {{ui:Joonised}} akna ülaosas olevast loendist: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 tolli), {{ui:ANSI C}} (17 × 22 tolli) või {{ui:ANSI D}} (22 × 34 tolli). Kõik lehed on horisontaalsed. Komplekt koostatakse uuel suurusel kohe uuesti ning sama suurust kasutatakse ka töökoja joonistel. See on ka [DetailCraft'i sätetes](topic:settings#drawings) ja see brauser mäletab seda.

- Suurem leht joonistatakse suurema mõõtkavaga. Mõõtkavad on alati standardsed (1:10, 1:20, 1:25, 1:50, 1:100 jne).
- Tekst on igal lehel sama suur, nii et see jääb trükituna loetavaks.
- Väikesel lehel võib pikk ja kitsas koost saada suurema mõõtkava sügavuses kui pikkuses. Vaate pealkirjas on siis öeldud mõlemad mõõtkavad ja mõõtmed on määravad.

## Väljasta joonised ja revisjonid

Eelvaate kohal olev rida ütleb, mis seisus on näidatud leht: **Pole veel väljastatud**, **Revisjon B, väljastatud …; pole sellest ajast muutunud** või punasena **Muudetud pärast revisjonit B: vajab uut väljastamist**. Lehtede loend märgib väljastatud lehed nende revisjoniga ning need, mis vajavad uut väljastamist.

- Kirjuta, milleks väljastamine on (algselt „Väljastatud valmistamiseks") ja vali {{ui:Väljasta see leht}} või {{ui:Väljasta muudetud lehed}}, et väljastada kõik uued või viimasest väljastamisest muudetud lehed.
- Lehe esimene väljastamine on revisjon A, siis B, C jne (I ja O jäetakse vahele).
- Tiitelplokk näitab joonise numbrit koos revisjoniga („A-B1  rev B") ning selle kõrval on revisjonitabel viimaste väljastustega: revisjon, kuupäev ja kirjeldus. Väikesel lehel näidatakse nii palju, kui mahub.
- Leht „muutub", kui sellel joonistatu muutub: liigutatud detail, uus auk, ümbernumbrieritud märgis. Kuupäev, lehtede arv ja revisjonitabel ise ei lugu. Lehe suuruse muutmine muudab kõiki lehti.
- Väljastuslogi salvestatakse mudelifaili ja väljastamine on üks tagasivõtmise samm. [KISS-fail](topic:kiss-export) kannab iga joonise viimast revisjoni.

### Revisjonipilved

Lehe teisest väljastamisest alates joonistatakse iga muudetud detail või alus revisjonipilve sisse koos kirjaga kandva revisjonikolmnurgaga.

- Kuni leht on muutunud pärast viimast väljastamist, näitavad pilved, mis on muutunud sellest ajast, ja kolmnurgas on tulev revisjon (revisjon B väljastatud ja muudetud: kolmnurgad ütlevad C).
- Kui oled selle välja andnud, jäävad pilved selle revisjoni lehele, nagu trükitud komplektis, kuni leht uuesti muutub.
- Iga leht pilvestab ainult seda, mida ta näitab. Plaanid ja vaated ei joonista auke ega lõikeid, seega pilvestavad nad detaili, mis liikus, pöördus või muutis suurust, või kelle märgis muutus. Koostejoonised ja ankrupoltide plaan pilvestavad ka uusi või liigutatud auke ja lõikeid.
- Ümbernumbrieritud märgis loeb: kui muudatus teeb talast uue koosti, pilvestatakse plaanidel ja vaadetel talad, mille märgis tõusis (B1 kuni B2).
- Kustutatud detail ei jäta midagi pilvestada.
- Enne revisjonipilvede lisandumist (DetailCraft 0.4) väljastatud lehed hakkavad pilvestama alates järgmisest väljastamisest.
- Pilved on PDF-, DXF- ja DWG-allalaadimistes ning ise ei loe kunagi muudatusena.

## Allalaadimine

Vali vorming nuppude kõrval olevast loendist, seejärel {{ui:See leht}} praegu näidatud lehe jaoks või {{ui:Kõik lehed}} kogu komplekti jaoks.

- **PDF**: printimiseks või saatmiseks. {{ui:Kõik lehed}} teeb ühe PDF-i, ühe lehekülje lehe kohta, iga lehekülg valitud suuruses.
- **DWG**, vormingus 2018, 2013, 2010, 2007, 2004 või 2000: lehtede avamiseks CAD-programmis. Vanema programmi jaoks vali vanem vorming.
- **DXF (R12)**: versioon, mida peaaegu iga CAD-programm avab.

DWG- või DXF-leht joonistatakse täissuuruses: üks joonistusühik on paberil üks millimeeter, nii et see prinditakse mõõtkavas 1:1 ja iga vaade säilitab mõõtkava, mis on tema pealkirjas. Iga pliiats on oma kiht: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID jne, oma joonepaksuse (DWG) ja katkestusmustriga. Sõnad on tekst DetailCraft'i tekstistiilis (Arial). Mõõtmed on jooned ja numbrid, mida näed, mitte mõõtmeobjektid. {{ui:Kõik lehed}} paneb DWG- või DXF-failid ühte zip-faili, üks fail lehe kohta.

:::note
DXF R12-s ei ole joonepaksusi ega täitmisi: kihid säilitavad oma nimed, nii et määra pliiatsid kihi järgi, kui printid, ning täidetud kujundid jäetakse välja (olekuriba ütleb, mitu).
:::

Prindi 100% (mitte „sobita lehele") samas suuruses paberile, kui tahad, et öeldud mõõtkavad kehtiksid.
