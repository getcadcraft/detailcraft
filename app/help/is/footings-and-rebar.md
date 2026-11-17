---
title: Setjið undirstöður með steypustyrktarjárni
summary: Setjið rétthyrndar plötuundirstöður með neðra járnaneti og tengistöngum, athugið þær og sækið beygjulistann.
keywords: undirstaða, plötuundirstaða, undirstöður, steypustyrktarjárn, styrktarjárn, stangir, net, tengistangir, tengi, beygjulisti, stangalisti, steypa, krókar, steypuhlíf
from: 41a048be
---

Þessi efnisgrein fjallar um rétthyrndar plötuundirstöður. Bjálkar, súlur, plötur og veggir eru í [Ítarleg járnbent steinsteypa](topic:reinforced-concrete). Hver undirstaða fær neðra járnanet í báðar áttir og, ef þú vilt, tengistangir sem standa upp úr því. Stangir eru í bandarískum stærðum #3 til #11.

## Setja inn undirstöðu

1. Veldu {{ui:Grunnmynd}} og veldu kótann á efri brún undirstöðunnar.
2. Veldu {{ui:Undirstaða}} í hópnum {{ui:Staðsetja}}, eða ýttu á {{key:F}}.
3. Stilltu undirstöðuna í glugganum {{ui:Eiginleikar}} (sjá hér að neðan), eða láttu sjálfgefnar stillingar standa.
4. Smelltu á skurðpunkt netlína. Undirstaðan er miðjuð á hann með efri brún í kótanum. Stöðustikan segir til dæmis: "Undirstaða 2000 x 2000 x 600 undir A/1."

Þú getur líka notað reitinn {{ui:Bæta við eftir ás}} neðst í glugganum.

Undirstaðan er teiknuð gegnsæ svo þú sjáir stangirnar, sem eru teiknaðar sem heilir rör.

## Stillingar undirstöðu

| Reitur | Sjálfgefið | Athugasemdir |
|---|---|---|
| Lengd L (mm) | 2000 | Eftir x; 300 til 50000 |
| Breidd B (mm) | 2000 | Eftir y; 300 til 50000 |
| Dýpt H (mm) | 600 | 150 til 10000 |
| Steypa | 4000 psi | Texti, prentaður í IFC-útflutningnum |

**Neðra járnanet**

| Reitur | Sjálfgefið | Athugasemdir |
|---|---|---|
| Langar stangir | #5 | Stangir eftir L, neðra lagið |
| Bil (mm) | 250 | Mesta leyfilegt bil; stangirnar dreifast jafnt við þetta bil eða þéttar |
| Stuttar stangir | #5 | Stangir eftir B, lagðar ofan á löngu stangirnar |
| Bil (mm) | 250 | Eins og að ofan |
| Steypuhlíf (mm) | 75 | Hrein steypuhlíf á hverri hlið |
| Endakrókar | Kveikt | Beygir báða enda hverrar netstangar upp í staðlaðan 90° krók (lögun U); slökkt gefur beinar stangir (lögun S) |

**Tengistangir**

| Reitur | Sjálfgefið | Athugasemdir |
|---|---|---|
| Tengistangir | Kveikt | Slökktu á þeim fyrir undirstöðu án tengistanga |
| Stöng | #6 | |
| Stangir eftir L / Stangir eftir B | 2 / 2 | Net stanga, miðjað á undirstöðuna |
| Bil eftir L / Bil eftir B | 250 / 250 | Á milli miðja stanga |
| Útskot yfir efri brún | 600 | Hversu langt stangirnar standa upp yfir efri brún undirstöðunnar |
| Krókur neðst | Kveikt | 90° krókur sem vísar út á við og hvílir á netinu (lögun L) |

Undir reitunum sýnir DetailCraft krókfótinn fyrir löngu stangirnar, til dæmis "Krókfótur fyrir #5: 254 mm út í út."

## Breyta innsettri undirstöðu

Veldu undirstöðuna (smelltu á steypuna hennar fjarri súlum, eða á eina af stöngum hennar). Þú færð sömu reiti auk {{ui:Miðja x}}, {{ui:Miðja y}}, {{ui:Efri z}} og {{ui:Snúningur (°)}}. Fyrir neðan þá sýnir tafla stangir þessarar undirstöðu með merkjum, fjölda og lengdum, og steypumagnið í rúmmetrum.

Hver breyting er athuguð áður en hún er geymd. Breyting sem ekki er hægt að smíða er hafnað og stöðustikan segir hvers vegna, til dæmis "Steypuhlífin skilur ekki eftir rúm fyrir stangir í þessari undirstöðu.", "Undirstaðan er of grunn fyrir tvö lög af stöngum innan steypuhlífarinnar." eða "Tengistangirnar passa ekki inni í undirstöðunni með 75 mm steypuhlíf."

Breytingar sem hægt er að smíða en þarfnast yfirferðar eru skráðar undir undirstöðunni og á flipanum {{ui:Vandamál}}:

- "#11 stangir með 59.6 mm bili skilja eftir minna en 35.8 mm hreint bil (ACI 318-19 25.2.1)." Hreina bilið milli stanga verður að vera að minnsta kosti þvermál stangarinnar og að minnsta kosti 25.4 mm.
- "#5 krókar þurfa 254 mm dýpt; aðeins 150 mm passa innan steypuhlífarinnar." Krókfæturnir eru þá styttir til að passa, svo þeir eru ekki lengur staðlaðir krókar.
- "Tengikrókarnir ná inn í steypuhlífina."
- "Tengistangir eru þéttari en lágmarks hreina bil."

## Stangamerki og beygjulistinn

Eins stangir (sama stærð, lögun og mál upp á millimetra) deila stangamerki yfir allar undirstöður. Merki eru skrifuð `<stangarnúmer>F<n>`: 5F1, 5F2 fyrir #5 stangir, 6F1 fyrir fyrstu #6 stöngina, og svo framvegis. Undirstöður með sömu stærð, steypu, neti og tengistöngum deila undirstöðumerki: F1, F2 …

1. Opnaðu flipann {{ui:Beygjulisti}} neðst. Hver röð er eitt stangamerki: stærð, lögun, mál A, B og C, fjöldi, skurðarlengd, heildarlengd, massi á metra, þyngd hver, heildarþyngd og til hvers stöngin er notuð.
2. Veldu {{ui:Sækja CSV}} á flipanum, eða {{ui:Beygjulisti}} í valmyndinni {{ui:Meira}} í hópnum {{ui:Útkoma}}, fyrir `<heiti> bending schedule.csv`.

Lögun eru eigin kóðar DetailCraft, ekki staðals: S bein, L ein beygja, U tvær beygjur. Mál eru út í út; skurðarlengdin er nákvæm lengd miðlínu í gegnum beygjurnar. Sjá [Viðmiðun fyrir steypustyrktarjárn](topic:rebar-reference).

## Það sem DetailCraft athugar ekki

- Festilengdir og skarðlengdir, og hvort tengistangirnar séu nógu langar fyrir súluna fyrir ofan.
- Stærð fyllefnis í reglunni um hreint bil (það þekkir ekki blönduna).
- Allt sem varðar súluna eða undirstöðuplötuna fyrir ofan: undirstöður og stál eru aðskilin.

Sjá einnig [Það sem er ekki smíðað enn](topic:not-built-yet).
