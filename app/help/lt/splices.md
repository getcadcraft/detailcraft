---
title: Sujungimai
summary: Sujunkite dvi sijos ar kolonos dalis galas į galą varžtuojamomis flanšų ir sienelės dengiamosiomis plokštėmis.
keywords: sujungimas, sijos sujungimas, kolonos sujungimas, dengiamoji plokštė, sujungimo plokštė, flanšo plokštė, sienelės plokštė, varžtinis sujungimas, jungtis, kolonos segmentas, jungti
from: 97d141c2
---

Varžtinis sujungimas jungia dvi vieno I formos profilio dalis galas į galą: ant kiekvieno flanšo išorės – dengiamoji plokštė, o abiejose sienelės pusėse – po plokštę, sutvirtinta varžtais per abi dalis. DetailCraft nupjauna dalis iki tarpo, įdeda keturias plokštes, išgręžia skyles plokštėse ir abiejose dalyse, prideda varžtus ir įspėja apie krašto atstumus, žingsnį bei tikslumą.

## Kur tai veikia

- Dvi sijos arba dvi kolonos segmentai to paties **I formos profilio**, besiliečiantys **galas į galą tiesiai**: galai ne toliau kaip 50 mm vienas nuo kito, dalys lygiagrečios ir vienoje tiesėje (iki 1 mm tikslumu). Bet kuri dalis gali būti nubrėžta bet kuria kryptimi.
- Horizontalios, nuožulnios ar vertikalios dalys veikia visos.
- Dvi skirtingo aukščio ar skirtingo flanšo pločio dalys atmetamos, kaip ir kanalai, kampuotieji profiliai bei vamzdžiai.

## Pridėti sujungimus

1. Nubrėžkite dvi dalis taip, kad jos susiliestų galas į galą. Kad padalytumėte jau nubrėžtą elementą, nubrėžkite jį iš naujo kaip dvi dalis.
2. Pasirinkite vieną (arba abi) ir grupės {{ui:Jungti}} meniu {{ui:Daugiau}} pasirinkite {{ui:Sujungimas}}.
3. Kiekviena laisva pasirinktų dalių jungtis su kita to paties profilio dalimi gauna sujungimą. Būsenos juostoje rodoma, kiek jų sukurta.

Pasirinkite sujungimą (spustelėkite vieną iš jo plokščių), kad pakeistumėte jo parametrus dešiniajame skydelyje. {{ui:Taikyti panašiems (n)}} nukopijuoja jį į kiekvieną kitą laisvą jungtį tarp to paties profilio dalių.

## Parametrai (mm)

| Parametras | Numatytoji reikšmė | Ką daro |
|---|---|---|
| Tarpas tarp galų | 10 | Kiekviena dalis atkerpama per pusę šio tarpo |
| Varžto skersmuo, skylė, klasė, ilgio rezervas | 20, 22, A325, 30 | Kaip ir galinėms plokštėms |
| Flanšo plokštės storis | 12 | Plokštė tokio pločio kaip flanšas |
| Flanšo varžtų eilės (kiekvienoje pusėje) | 3 | Eilės per flanšą kiekvienoje jungties pusėje |
| Flanšo varžtų žingsnis | 75 | Išilgai elemento |
| Flanšo varžtų skersinis atstumas | 0 | Tarp dviejų varžtų linijų; 0 = flanšo plotis atimti 80 |
| Flanšo galo atstumas | 40 | Nuo elemento galo iki pirmojo varžto ir nuo paskutinio varžto iki plokštės galo |
| Sienelės plokštės storis | 8 | Po vieną kiekvienoje sienelės pusėje |
| Sienelės varžtų eilės | 3 | Išilgai sienelės, centruotai |
| Sienelės varžtų stulpeliai (kiekvienoje pusėje) | 2 | Išilgai elemento kiekvienoje jungties pusėje |
| Sienelės varžtų žingsnis, aukštyn per sienelę / išilgai elemento | 75, 75 | |
| Sienelės galo atstumas | 40 | Kaip ir flanšams |
| Sienelės plokštės aukštis | 0 | 0 = laisva sienelė tarp apvalinimų, atimant 10 viršuje ir apačioje |
| Plokštės medžiaga | A36 | Tekstas |

Plokščių ilgiai priklauso nuo varžtų: flanšo plokštė = tarpas + 2 × (2 × galo atstumas + (eilės − 1) × žingsnis); sienelės plokštės – analogiškai, su jų stulpeliais. Su numatytosiomis reikšmėmis flanšo plokštės yra 470 ilgio.

## Verta žinoti

- Plokštės priklauso **pirmajai nubrėžtai** iš dviejų dalių (jos savybėse ji vadinama pirmąja dalimi): jos rodomos jos surinkimo brėžinyje ir tiekiamos kartu, sujungtos varžtais, o ne suvirintos. Antrosios dalies surinkimo brėžinyje rodomos tik jos skylės.
- Flanšo varžtai laiko flanšą ir jo plokštę; sienelės varžtai laiko sienelę ir abi sienelės plokštes. Varžtų ilgiai savybėse nurodomi atskirai.
- Įspėjimams taikomi tie patys EN 1993-1-8 minimalūs dydžiai kaip ir kitoms jungtims (galo ir krašto atstumas 1.2 × skylė, žingsnis išilgai 2.2 × skylė, skersinis atstumas 2.4 × skylė), be to – sienelės plokštė, gilesnė už laisvą sienelę, ir flanšo varžtai per arti sienelės apvalinimo.
- DetailCraft sujungimo nekonstruoja (stiprumo patikros nėra) ir nedaro užpildymo plokščių dalims su skirtingu storiu.
- Nukopijavus abi dalis, nukopijuojamas ir jų sujungimas; ištrynus bet kurią dalį, ištrinamas ir sujungimas.
