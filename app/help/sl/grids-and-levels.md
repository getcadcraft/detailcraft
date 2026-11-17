---
title: Nastavitev mrež in nivojev
summary: Vnesite osi mreže, njihove razmike in nivoje, na katere je postavljen vsak element.
keywords: mreža, mreže, osi, osne črte, nivoji, kote višin, etaže, plošče, razmik, nastavitev
from: 9cad233c
---

Vsak element v programu DetailCraft je postavljen na presečišče mreže na nekem nivoju. Najprej nastavite mreže in nivoje; kasneje ju lahko spremenite.

## Kako tu delujejo mreže

- **Oštevilčene osi** potekajo v eno smer, **osi s črkami** pa v drugo. Imena so le navada: oznaka je lahko poljubno besedilo do 8 znakov (1, 2, 3 ali A1, A2, ali 10, 20).
- Vnesete oznake in razmike med njimi, ne koordinat. Prva os v vsakem nizu je na 0.
- Oštevilčene osi so črte s konstantnim x; osi s črkami so črte s konstantnim y. Tako greda od mreže 1 do mreže 2 teče vzdolž x, greda od A do B pa vzdolž y.
- Vse vrednosti so v milimetrih.

Nov model se začne z oštevilčenimi osmi 1 2 3 na 6000 6000, osmi s črkami A B na 6000 in dvema nivojema.

## Nastavitev mrež

1. V podoknu {{ui:Model}} na levi odprite {{ui:Mreže}}, če je zloženo.
2. V {{ui:Oštevilčene osi}} vnesite oznake, ločene s presledki, npr. `1 2 3 4 5`.
3. V polju {{ui:Razmiki}} pod njim vnesite en razmik za vsako vrzel, npr. `6000 6000 7500 6000`. Štiri vrzeli za pet osi.
4. Enako storite v {{ui:Osi s črkami}} in njihovih {{ui:Razmikih}}, npr. `A B C` in `8000 8000`.
5. Izberite {{ui:Uporabi mreže}}.

Vrstica stanja izpiše „Mreže so posodobljene.“, pogled pa se približa novi mreži. Vejice delujejo tudi kot ločila.

Če nekaj ne sedi, se nič ne spremeni in vrstica stanja pove razlog, npr. „Oštevilčene mreže: vnesite en razmik med vsakim parom osi (4).“ Druga preverjanja: razmiki morajo biti pozitivni milimetri, oznake se morajo razlikovati, v vsako smer je lahko največ 60 osi.

:::note
Elementi obdržijo svoje koordinate, ko se mreže premaknejo. Če spremenite razmik po postavitvi jekla, jeklo ostane tam, kjer je bilo, in ni več na mreži. Najprej spremenite mrežo ali premaknite elemente tako, da uredite njihove koordinate konca.
:::

## Nastavitev nivojev

1. Odprite {{ui:Nivoji}} v podoknu {{ui:Model}}.
2. Vsaka vrstica ima ime nivoja in njegovo koto v milimetrih. Uredite ju po želji.
3. Izberite {{ui:Dodaj nivo}} za novo vrstico. Ime je „Nivo 3“ (in tako naprej), postavljen pa je 4000 mm nad najvišjim nivojem; spremenite obe vrednosti, če je treba.
4. Če želite odstraniti nivo, izberite gumb × na koncu njegove vrstice.
5. Izberite {{ui:Uporabi nivoje}}.

Nič se ne spremeni, dokler ne izberete {{ui:Uporabi nivoje}}. Nivoji se ob uporabi razvrstijo po koti. Vsak nivo potrebuje ime, dva nivoja ne smeta imeti istega imena, obdržati pa morate vsaj en nivo.

Nivoji so lahko pod ničlo (klet pri `-3500`) in jim ni treba biti enakomerno razporejeni.

## Uporaba nivojev

- Steber, postavljen na nivoju, sega do naslednjega nivoja ali do nivoja, ki ga izberete v {{ui:Do}}.
- Grede in plošče so postavljene med dvema presečiščema na nivoju, ki ga kliknete.
- Temeljne stope so postavljene z zgornjim robom na nivoju, ki ga kliknete.
- {{ui:Tloris}} gleda navzdol na en nivo naenkrat.
- Izvoz IFC ustvari eno stavbno etažo za vsak nivo.

## Razveljavitev

Spremembe mrež in nivojev so urejanja kot vsa druga: {{key:Mod+Z}} vrne prejšnjo mrežo.

## Naprej

[Postavitev stebrov, gred in diagonal](topic:place-members)
