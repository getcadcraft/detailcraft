---
title: Izvoz datoteke KISS za programe za izdelavo
summary: Pošljite kosovnico v program za upravljanje izdelave (MIS) kot datoteko KISS 1.1: sestavi, deli, faze kot zaporedja, luknje, izrezi in var.
keywords: kiss, kss, mis, upravljanje izdelave, nadzor proizvodnje, ocenjevanje, kosovnica, bom, izvoz, fabtrol, zaporedje
from: 30cf3951
---

V skupini {{ui:Output}} (Izhod) odprite {{ui:More}} (Več) in izberite {{ui:KISS file for fabrication software}} (Datoteka KISS za programe za izdelavo). DetailCraft prenese `<name>.kss`, datoteko KISS („Keep It Simple, Steel“, različica 1.1), navadno besedilno obliko, iz katere večina programov za upravljanje izdelave uvozi kosovnico.

## Kaj je v njej

- Glava: številka posla (prvih osem črk in številk imena modela), ime modela, datum in čas ter ali so mere metrične.
- Za vsako oznako sestava: njegov glavni del (količina = koliko sestavov), vrstica risbe (A-B1 in podobno, številka risbe sestava), vrstica sestava (ime, tip, teža, skupna dolžina, višina in širina), ena vrstica zaporedja za vsako [fazo](topic:phases), v kateri je sestav, ter vrstice dela: luknje (koliko, premer, debelina skozi), izrezi in var.
- Nato vsak del, pripet nanj, s **skupno** količino (na sestav × sestavi), kot zahteva standard.
- Prosti vijaki in sidrni drogovi na risbi BOLTS, sestav FIELD.
- Vsaka vrstica navaja tip (W, C, L, HSS, PL ali MI za profil po meri), velikost, razred, dolžino reza v milimetrih, ime dela in težo.

## Palčne ali metrične

V [nastavitvah DetailCraft](topic:settings) **Velikosti datoteke KISS** izbere:

- **Samodejno** (privzeto): palčne, kadar je vsak element profil AISC, sicer metrične.
- **Palčne**: profili po oznaki AISC (W 16X26, HSS 4X4X.250); plošče in vijaki, ki jih DetailCraft hrani v milimetrih, na najbližjo 1/16 palca; teže v funtih.
- **Metrične**: evropski profili po imenu (IPE300), plošče kot debelina X širina v milimetrih; teže v kilogramih.

Dolžine so vedno v milimetrih z dvema decimalkama, ne glede na nastavitev: standard KISS to zahteva, prejemni program pa jih pretvori.

:::note
Razredi se skrajšajo na osem znakov standarda: A572 Gr 50 postane A572-50. Vejice v imenih postanejo presledki (format nima narekovajev). Preden se zanesete nanj, preverite en uvoz v vašem programu: datoteke KISS iz DetailCraft so tu preverjene glede na standard, še ne v programu za izdelavo.
:::
