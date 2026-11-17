---
title: Gaffelverbindings
summary: Verbind twee I-vormlede wat teen 'n hoek ontmoet: albei punte gesny op die vlak wat die hoek halveer, met eindplate, boute en versterkers as jy dit wil hê.
keywords: gaffel, miter, gaffelverbinding, knie, haunch, portaalraam, nok, hoek, hoeksnit, skuins snit, eindplaat, geboutde eindplaat, versterker, koppel
from: cd8380d4
---

'n Gaffel verbind twee I-vormlede waarvan die punte teen 'n hoek ontmoet, soos die knie van 'n portaalraam, 'n nok, of twee balke wat in plan 'n hoek draai. DetailCraft sny albei punte op die vlak wat die hoek tussen hulle halveer, sodat die twee gesnyde vlakke pas. As jy wil, voeg dit 'n eindplaat by elke gesnyde punt, bout die twee plate aan mekaar, en plaas 'n paar lyfversterkers in elke lid.

## Waar dit werk

- Twee **I-vorms** (IPE, HEA, HEB, W en dergelike) waarvan die **punte op dieselfde knoop ontmoet**. Enige lid kan in enige rigting geteken word.
- Die hoek tussen die lede moet minstens 15° wees. Lede in lyn word geweier: gebruik 'n [splitsing](topic:splices).
- Die gewone snit (geen plate) werk hoe die lede ook al ontmoet. **Eindplate** vereis dat die twee lede in die vlak van hul lywe ontmoet, soos by 'n portaalknie of 'n nok. Twee balke wat in plan 'n hoek draai, ontmoet in die vlak van hul flense, so hulle kry net die gewone snit.
- Lede van verskillende groottes word verbind, maar met 'n waarskuwing: hul gesnyde vlakke pas nie.

## Voeg 'n gaffel by

1. Kies die twee lede: klik een, dan {{key:Shift}}+klik die ander.
2. Kies {{ui:Gaffel}} in die {{ui:Koppel}}-groep se {{ui:Meer}}-kieslys. Die gaffeldialoog maak oop.
3. Stel die genommerde velde. Die tekening daarnaas word uit jou getalle gemaak soos jy tik, en sy genommerde sirkels wys wat elke veld stel.
4. Kies {{ui:Voeg die verstek by}}. As jy meer as twee lede gekies het, kry elke vrye verbinding onder hulle dieselfde gaffel.

Om 'n gaffel later te verander, kies dit (klik op een van sy plate) en kies {{ui:Verstekdialoog met voorskou}} in die regterpaneel, of verander die instellings daar direk. 'n Gewone snit het geen plate om op te klik nie: kies sy twee lede en kies weer {{ui:Gaffel}}, en die dialoog maak oop op daardie gaffel. {{ui:Pas toe op soortgelyke (n)}} kopieer dit na elke vrye verbinding tussen lede van dieselfde twee profiele teen dieselfde hoek.

## Die genommerde velde (mm)

| Nr. | Instelling | Standaard | Wat dit doen |
|---|---|---|---|
| 1 | Gaping tussen die plate (of die gesnyde punte) | 0 | Duidelike gaping by die verbinding. Elke kant hou die helfte daarvan |
| 2 | Eindplate, plaatdikte | aan, 20 | 'n Eindplaat rondom elke gesnyde punt gelas. Ontmerk vir 'n gewone snit |
| 3 | Boutrye, rysteek, meter, buitenste ry | 4, 0, 0, af | Steek 0 versprei die rye gelyk tussen die flense. Meter 0 = half die plaatbreedte, minstens 2.4 × die gat. Die buitenste ry gaan in die plaat se verlenging verby die buitenste flens |
| 4 | Plaat verby die buitenste flens | 0 | Hoe ver die plate verby die buitenste flens reik, langs die snit |
| 5 | Plaat verby die binneste flens | 0 | Dieselfde aan die binnekant |
| 6 | Lyfversterkers, afstand verby die snit | af, 50 | 'n Paar in elke lid, aan albei kante van die lyf, reghoekig op die lid, so ver verby die verre punt van sy snit |
| 7 | Dikte van versterker | 10 | |

Onder {{ui:Boute}}: boutdeursnee, gat, graad en lengtetoelae (20, 22, A325, 30), soos vir eindplate. Onder {{ui:Plate en sweislasse}}: plaatbreedte (0 = die flensbreedte), hoeklas-grootte (8) en plaatmateriaal (A36).

## Wat jy kry

- **Die snitte.** Elke lid se punt word op sy vlak gesny. Sy lengte in lyste, tekeninge en NC-lêers is die **algehele lengte**, van sy vierkantige punt tot die verste punt van die snit.
- **Die plate** behoort aan hul eie lid: elke lid se samestelling is die lid, sy eindplaat en sy versterkers. Die boute is werfboute van die verbinding: die materiaallys tel hulle een keer, en elke lid se samestellingstekening lys hulle as los boute.
- **Tekeninge** wys die skuins punte en die plate; die werkstekening van 'n gaffel-lid noem elke snit se hoek vanaf vierkant.
- **NC-lêers** (DSTV) dra die skuins snithoeke in die kop, soos die standaard vra, en kontoere wat die snit volg. Kontroleer hulle in jou werkwinkel se eie NC-kyker voordat jy sny, soos vir elke NC-lêer.
- **IFC** knip elke lid se ekstrusie by sy snitvlak af, sodat ander programme die ware snit wys.
- **Merke:** 'n gaffel-lid is 'n ander stuk as 'n vierkant gesnyde een van dieselfde lengte. Twee lede met dieselfde snitte deel 'n merk, soos die twee sperre van 'n nok.

## Goed om te weet

- Die gaffel bly lewend. Skuif of verander die grootte van enige lid, en die snit, plate en boute volg. Skrap een van die lede en die gaffel verdwyn, en die ander lid se punt is weer vierkant.
- Waarskuwings gebruik dieselfde EN 1993-1-8-minimums as die ander verbindings (punt- en randafstand 1.2 × gat, steek 2.2 × gat, meter 2.4 × gat), plus boutrye te na aan 'n flens, plate smaller as die flense en versterkers sonder ruimte.
- Die waardes is beginwaardes, nie 'n ontwerp nie. DetailCraft kontroleer nie die verbinding se sterkte nie, en maak geen haunch, geen gelaste gaffel met 'n stomplas nie, en geen versterkers in lyn met die ander lid se flense nie.
