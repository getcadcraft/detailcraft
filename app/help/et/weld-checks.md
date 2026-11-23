---
title: Kontrolli keevisõmblusi, kus elemendid kokku puutuvad
summary: Pärast projekteerimiskontrolli kontrolli elemendi ümber kõiki nurk- ja stumpkeevisõmblusi seal, kus element puutub kokku teise elemendi või toega, AISC 360-16 peatüki J või EN 1993-1-8 järgi, ja vaata, milline keevisgrupp on kõige enam kasutatud ning millise kombinatsiooni all. Abivahend, kuni insener on selle üle vaadanud.
keywords: keevis, keevisõmblused, keevisekontroll, nurkkeevis, stumpkeevis, täisläbikeevis, AISC 360, EN 1993-1-8, keevisgrupp, kasutusaste, kandevõime, liitekoht, ühendus, konstruktsioon, insener
from: e8eebbe6
---

Plokk {{ui:Keevisõmbluste kontrollid}} vahekaardil {{ui:Analüüs}}, jaotises {{ui:Projekteerimiskontrollid}}, võtab viimati lahendatud raami jõud ja sinu koostatud tugevuskombinatsioonid ning kontrollib iga elemendi ümbritsevaid keevisõmblusi igas liitekohas: kus element puutub kokku teise elemendiga või toetub toele.

:::warning
See on **abivahend, kuni insener on selle üle vaadanud**. See kontrollib elemendi ümber joonistatud keevist ühe grupina, raami enda otsajõudude järgi. See ei loe sinu tööjooniste keevisõmbluste suurust ega pikkust ning ei kontrolli polte, plaate, pinnasurvet, blokknihet ega hoobtoimet (prying). Selle tulemused ei ole kinnitus.
:::

## Käivita kontroll

1. Lahenda raam vahekaardil {{ui:Analüüs}} ja vali jaotises {{ui:Projekteerimiskontrollid}} {{ui:Projekteerimisnorm}}, seejärel vajuta {{ui:Koosta kombinatsioonid}} (keevisekontroll vajab samu tugevuskombinatsioone).
2. Jaotises {{ui:Keevisõmbluste kontrollid}} sea {{ui:Nurkkeevise kate (mm, 0 = sein, kuni 8)}}. 0 tähendab, et kate järgib profiili õhemat seina, kuni 8 mm. AISC normi korral on {{ui:Keevismetalli tugevus F_EXX (MPa)}} keevismetalli tugevus (482.6 MPa on E70 elektrood). EN 1993 korral annab terase klass keevismetalli tugevuse ja korrelatsiooniteguri.
3. Vajuta {{ui:Kontrolli keevisõmblusi}}.

Tabeli iga rida on üks keevisgrupp (elemendi ühe otsa liitekoht). Näitajad on selle määrava kontrolli **kasutusaste**, olek (läbib või ei läbi) ning millist kontrolli ja paragrahvi ning millise kombinatsiooni all see määras. Grupp, mida kontroll ei suuda hinnata, ütleb põhjuse (puudub terase klass, EN 1993-1-8 tabelis 4.1 pole selle klassi jaoks korrelatsioonitegurit, sellel profiilil pole keevist), selle asemel et näidata numbrit.

Kui muudad katet või keevismetalli või muudad mudelit, tabel tühjeneb, sest see kehtis vanade väärtuste kohta. Vajuta {{ui:Kontrolli keevisõmblusi}} uuesti.

## Mida kontrollitakse

- **ASCE 7 + AISC 360:** nurkkeevisemetall (koormuse nurk keevisesse arvestatakse, J2.4), põhimaterjali nihkepurunemine (J4.2) ja täisläbikeevisega stumpkeevised (tabel J2.5).
- **EN 1990 + EN 1993:** nurkkeevised EN 1993-1-8 punkti 4.5.3.3 lihtsustatud meetodi järgi ja stumpkeevised punkti 4.7.1 järgi.
- Detailimise hoiatused miinimum- ja maksimumkatte ning miinimumpikkuse kohta koos väärtusega, millega neid võrreldi.

Keevisgruppi käsitletakse joonlõikena ja koormatakse elastse vektormeetodiga: iga keevise osa võtab elemendi normaaljõust, mõlemast nihkejõust, väändest ja mõlemast paindemomendist jõu, mis liidetakse vektoritena.

## Mida ei kontrollita

Osalise läbivusega keevised, kaldus nurkkeevised, pistik- ja pilukeevised, katkendlikud keevised, momentkeskme meetod, EN suunatud meetod, väsimus ja põhimaterjali blokknihe ei ole veel valmis. Mõned standardite konstandid on kirjutatud standarditest ja neid pole veel trükitud eksemplariga võrreldud; aruanne loetleb, kust iga arv pärineb ({{ui:Aruanne (PDF)}} lisab keevise tabelid pärast kontrollimist). Vaata [Kontrolli elemente](topic:design-checks) ja [Veel valmimata](topic:not-built-yet).
