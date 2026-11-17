---
title: Talade ühendamine sammastega otsaplaatidega
summary: Lisa poldiga kinnitatud otsaplaadid kohtadesse, kus tala kohtub posti flantsi või võrguga, seadista plaat, poldid ja keevis ning kopeeri ühendus igale sarnasele liitekohale.
keywords: otsaplaat, otsaplaat, jäigaühendus, poltühendus, liitekoht, poldid, keevis, pikendatud otsaplaat, tasane, sarnane, ühenduse kopeerimine, komponent
from: 21e028b2
---

Otsaplaadi ühendus keevitab plaadi talaotsa ja kinnitab selle poltidega posti flantsi või võrgu külge. DetailCraft paigutab plaadi, lõikab talaotsa tagasi, puurib plaadile ja posti flantsile vastavad augud, lisab poldid ja keevise ning kontrollib servakaugusi ja vahesid.

:::warning
DetailCraft ei projekteeri ühendusi. Sätted on algväärtused, mida sa muudad; midagi ei kontrolli tugevust. Serva- ja vahehoiatused kasutavad EN 1993-1-8 tabeli 3.3 miinimumi, mis võivad erineda reeglitest, mida sina järgid.
:::

## Mida see ühendada oskab

- **Tasane** tala (mõlemad otsad samal kõrgusel), püstine (pöörde 0), I-profiiliga.
- **Flantsi** või **võrku** **vertikaalse** I-profiiliga posti, ristiv sellega.
- Talaots peab asuma posti joonel, posti alumise ja ülemise serva vahel.

Kaldu või kaldega talad ja mitte-I-lõigud keeldutakse koos põhjusega: nende jaoks kasuta [põiktugiplaate](topic:shear-tabs). Võrgul peavad plaat ja talaflantsid mahtuma postiflantside vahele; DetailCraft hoiatab, kui ei mahu.

:::tip
Pöördel 0 on posti flantsid suunatud mööda nummerdatud ruudustiku suunda (x). Tala, mis kulgeb punktist A punkti B, kohtub võrguga ja saab võrgule otsaplaadi.
:::

## Lisa tala otsaplaadid

1. Vali {{ui:Vali}} ({{key:V}}) ja klõpsa talale.
2. Vali {{ui:Otsaplaadid}} rühmas {{ui:Ühenda}} või {{ui:Lisa otsaplaadid}} paneelil {{ui:Omadused}}.
3. Iga vaba talaots, mis kohtub posti flantsi või võrguga ristiv, saab plaadi. Olekuriba ütleb „2 otsaplaati lisatud. Vali üks, et muuta selle plaati, poldid ja keevist; {{ui:Sarnane}} kopeerib selle sarnastele liitekohtadele."
4. Esimene uus otsaplaat on valitud ning selle sätted on paneelil {{ui:Omadused}}.

Kui midagi ei juhtu, loe olekuriba:

- „See tala ei lõpe posti joonel. Otsaplaadid asetatakse kohtadesse, kus talaots kohtub püstise postiga."
- „See tala kohtub postiga nurga all või kaldub: otsaplaadid on ehitatud ristivatele tasastele liitekohtadele. Kasuta Põiktugiplaate."
- „Mõlemal otsal on juba ühendused."

## Muuda plaati, polte ja keevist

Klõpsa otsaplaadil (või ühel selle poltidest), et valida ühendus. Jaotises {{ui:Plaat, poldid ja keevis (mm)}}:

| Säte | Vaikimisi | Mida ta teeb |
|---|---|---|
| Plaadi paksus | 20 | Plaadi paksus; ka see, kui palju tala lõigatakse flantsist kaugemalt tagasi |
| Plaadi laius | 180 | Üle liitekoha |
| Pikendus tala kohal | 0 | Ülemise flantsi kohal; üle 0 teeb pikendatud otsaplaadi |
| Pikendus tala all | 0 | Alumise flantsi all |
| Polti läbimõõt | 20 | Nimipoldi suurus |
| Augu läbimõõt | 22 | Sinu vaba ava plaadis ja posti flantsis |
| Poldi klass | A325 | Tekst; prinditakse materjalide nimekirja |
| Poldiread | 4 | Kahe poldi read, keskel plaadi kõrguse suhtes |
| Rea samm | 75 | Vertikaalne vahe ridade vahel |
| Vahe | 100 | Horisontaalne vahe rea kahe poldi vahel |
| Poldi pikkuse varu | 30 | Lisatakse haardele mutri, seibi ja keere jaoks; vt allpool |
| Nurgakeevise suurus | 8 | Ümber talaotsa |
| Plaadi materjal | A36 | Tekst |

Sisesta uus väärtus ja vajuta {{key:Enter}} või {{key:Tab}}. Plaat, augud, poldid ja tala lõikepikkus uuenevad kohe. Iga muudatus on üks tagasivõtmise samm.

Sätete all näed, mida ühendus teeb:

- {{ui:Poldid}}: näiteks „8 × 20 × 70 A325 (haare 36,2)".
- {{ui:Keevis}}: suurus, kus ja selle pikkus.
- {{ui:Plaat}}: selle suurus ja detailimärgis.

### Kuidas arvud välja tulevad

- Tala lõigatakse tagasi poole posti sügavuse võrra (võrgul: poole võrgu paksuse võrra) pluss plaadi paksus, nii et plaat istub vastu pinda.
- Plaadi kõrgus on talasügavus pluss kaks pikendust.
- Poldi pikkus = haare (plaadi paksus + posti flantsi või võrgu paksus) + varu, ümardatud järgmise 5 mm-ni.
- Näidatud keevise pikkus on talalõigu ümbermõõt.

### Hoiatused

Ühendus ehitatakse siiski valmis, kuid need ilmuvad selle alla ja kaardile {{ui:Probleemid}}:

- Poldiread või poldid on plaadi servale lähemal kui 1,2 × augu läbimõõt.
- Rea samm alla 2,2 × augu läbimõõdu või vahe alla 2,4 × augu läbimõõdu.
- Augud, mis ulatuvad posti võrku või selle nurgasse või välja posti flantsilt.
- Plaat, mis on laiem kui posti flants, või (võrgul) laiem kui flantside vaheline ruum; talaflantsid, mis nende vahele ei mahu.
- Poldirida liiga lähedal talaflantsile või vahe liiga kitsas talavõrgule ja selle keevisele.

## Kopeeri see igale sarnasele liitekohale

1. Vali ühendus, mille oled seadistanud.
2. Vali paneelil {{ui:Omadused}} {{ui:Rakenda sarnastele (n)}} või rühma {{ui:Ühenda}} menüüst {{ui:Veel}} {{ui:Sarnane}}. Sulgudes olev arv on liitekohtade arv, mis seda saavad.
3. Iga liitekoht, millel on sama talaprofiil ja posti profiil, tala samasse tüüpi pinda ja millel veel ühendust pole, saab koopia samade sätetega. Olekuriba ütleb, mitu.

Koopiad on sõltumatud: hiljem ühe muutmine ei muuda teisi. Liitekohad, millel on juba ühendus, jäetakse rahule; kustuta need kõigepealt, kui tahad need asendada.

## Liigutamine ja kustutamine

Ühendused luuakse oma sätete järgi uuesti iga kord, kui mudel muutub, seega tala või posti liigutamine või suuruse muutmine viib kaasa ka otsaplaadid. Kui muudatus tähendab, et liitekoht enam ei sobi, jääb ühendus mudelisse ja kaart {{ui:Probleemid}} ütleb põhjuse, näiteks „Talaots ei asu enam posti joonel."

Ühenduse kustutamiseks vali see ja vajuta {{key:Delete}}. Tala või posti kustutamine kustutab ka selle ühendused.

Järgmine: [Aluseplaatide ja ankrutangide lisamine](topic:base-plates).
