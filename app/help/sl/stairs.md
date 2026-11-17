---
title: Stopnišča
summary: Postavite ravno jekleno stopnišče iz višine stopnice, gaza in širine: dve tetivi in gazne plošče, ena zavarjena sestava.
keywords: stopnišče, stopnišča, tetiva, gazna plošča, stopnica, gaz, previs, tek, jeklena stopnica, IBC 1011, Blondel
from: 62fa3845
---

Ravno jekleno stopnišče: dve tetivi (U-profila s pasnicami navznoter ali ploščati profili na rob) in ploščata gaznica na vsaki stopnici, zavarjena med njima. DetailCraft iz višine izračuna število stopnic, jih preveri glede na omejitve gradbenega predpisa in izdela stopnišče kot eno sestavo v delavnici.

## Postavitev stopnišča

1. Izberite {{ui:Stopnišče}} v skupini {{ui:Postavi}} ali pritisnite {{key:S}}.
2. Nastavite stopnišče na desni: **smer vzpona** (0° vzpenja vzdolž +x, 90° vzdolž +y), **višino** (0 = do naslednjega nivoja), **gaz**, **svetlo širino** med tetivama, **najvišjo dovoljeno stopnico**, **tetivo**, **debelino gazne plošče**, **previs** in material.
3. Kliknite presečišče mreže: to je podnožje prve stopnice, na središčnici stopnišča.

Vrstica stanja pove, koliko stopnic je naredilo. Izberite stopnišče (kliknite tetivo ali gazno ploščo), da spremenite katero koli njegovo nastavitev, položaj ali fazo; lastnosti prikažejo tudi stopnice, gazne plošče, skupni gaz, naklon in 2 × stopnica + gaz.

## Kaj DetailCraft izračuna

- **Stopnice.** Najmanj, da vsaka stopnica ostane na največji dovoljeni ali pod njo: 3000 mm višine pri 178 mm ali manj da 17 stopnic po 176.5 mm. Gazen je ena manj kot stopnic (zgornja etaža je zadnji korak).
- **Gazne plošče.** Plošča, globoka gaz + previs (privzeto 280 + 25 = PL6x305), in dolga kot svetla širina, njen vrh na višini vsake stopnice, njen sprednji rob (previs) pred črto stopnice.
- **Tetive.** Pod naklonom stopnišča, od mesta, kjer se stikajo s spodnjo etažo, do mesta, kjer se stikajo z zgornjo, tik zunaj svetle širine, njihov zgornji rob 50 mm nad črto previsov. Pasnice U-profila so obrnjene v stopnišče; ploščati profil, kot PL12x250, stoji na rob.
- **Vari.** Vsaka gazna plošča na obe tetivi. Gazne plošče in desna tetiva sta zavarjeni na levo tetivo, zato ima stopnišče eno oznako sestava (ST1) in svojo sestavno risbo; tetive dobijo oznake delov st…, gazne plošče p….
- **Preverjanja.** Opozorila, kadar je stopnica zunaj 4 do 7 in (102 do 178 mm) ali je gaz pod 11 in (279 mm), omejitve IBC 2021, odsek 1011.5.2; kadar je 2 × stopnica + gaz zunaj 600 do 650 mm (pogosto pravilo udobja); in kadar je tetiva prenizka, da bi nosila gazne plošče. Neznan profil tetive preprečuje gradnjo stopnišča.

## Dobro je vedeti

- Premik, zasuk, zrcaljenje, kopiranje, prilepljanje, brisanje in faze delujejo na stopnišču kot na elementu. Zasuk obrne vzpon; zrcaljenje ga pošlje po zrcalni smeri.
- Tetive se izvozijo v IFC kot IfcMember, gazne plošče kot IfcPlate; obe gresta v datoteke NC in kosovnico. Preverjanje kolizij pusti lastne dele stopnišča pri miru (so zavarjeni skupaj).
- Ta preprosto stopnišče je en tek z ploščatimi gaznicami. Za podeste, ograje z količki, gazne plošče iz zložene pločevine ali rešetke, nabor pravil po izbiri, seznam krojenja in risbe lukenj tetive označite {{ui:Uporabi generator jeklenih stopnišč}} v orodju Stopnišče (glejte Generator jeklenega stopnišča).
- Tetive so prirezane pravokotno: njihovi čelni rezi ob etažah niso izdelani.
- DetailCraft ne dimenzionira stopnišča: tetive in gazne plošče se ne preverjajo glede na trdnost ali upogib.
