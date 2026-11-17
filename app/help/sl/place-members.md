---
title: Postavitev stebrov, nosilcev in diagonal
summary: Izberite profil, material in položaj, nato kliknite presečišča mrež ali jih vtipkajte, da postavite jeklene elemente.
keywords: steber, nosilec, diagonala, element, postavi, profil, material, zasuk, položaj, odmik, vstavi, dodaj po mreži
from: d6db0dc1
---

Elementi so postavljeni na presečišča mrež: steber na enem, nosilec ali diagonala med dvema. Najprej nastavite [mreže in nivoje](topic:grids-and-levels).

## Izberite orodje in njegove možnosti

1. Izberite {{ui:Steber}} ({{key:C}}), {{ui:Nosilec}} ({{key:B}}) ali {{ui:Diagonala}} ({{key:R}}) v skupini {{ui:Postavi}}.
2. Podokno {{ui:Lastnosti}} na desni postane „Postavi steber“ (ali nosilec, ali diagonalo) in prikaže možnosti za naslednji element:
   - {{ui:Profil}}: izberite s seznama. Velikosti so razvrščene po katalogu (oblike W, profili U, kotniki, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS in vaši profili po meri). Glejte [Katalog profilov](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 ali S355.
   - {{ui:Položaj}}: kje je prerez na črti med dvema točkama: {{ui:Vrh jekla na črti}}, {{ui:Na sredini črte}} ali {{ui:Dno na črti}}.
   - {{ui:Zasuk (°)}}: zasuka prerez okoli lastne osi elementa.
   - {{ui:Do}} (samo za stebre): {{ui:Naslednji nivo navzgor}} ali ime nivoja.
3. Pod možnostmi okno {{ui:Profil}} prikaže mere izbranega prereza, površino, maso na meter in katalog, iz katerega prihaja.

Privzete vrednosti so W12x50 v A992 za stebre (na sredini), W16x26 v A992 za nosilce (vrh jekla na črti) in HSS6x6x1/4 v A500 Gr C za diagonale (na sredini). Možnosti ostanejo nastavljene, dokler jih ne spremenite.

## Postavitev s klikanjem

### Steber

1. Izberite {{ui:Tloris}} in izberite nivo, na katerem se steber začne.
2. Izberite {{ui:Steber}}.
3. Premaknite kazalec blizu presečišča. Najbližja pika zasveti, vrstica stanja pa jo poimenuje.
4. Kliknite. Steber teče od tega nivoja do naslednjega nivoja navzgor (ali do nivoja {{ui:Do}}). Vrstica stanja pove na primer „Steber W12x50 pri A/1, od nivoja 1 do nivoja 2.“
5. Nadaljujte s klikanjem, da postavite več. Ko končate, pritisnite {{key:Esc}}.

Če nad nivojem, na katerega ste kliknili, ni nobenega nivoja, do katerega bi steber lahko segel, vrstica stanja pove: „Nad nivojem 2 ni nivoja, do katerega bi steber segel. Najprej dodajte nivo.“

### Nosilec

1. Izberite {{ui:Tloris}} in izberite nivo nosilca.
2. Izberite {{ui:Nosilec}}.
3. Kliknite prvo presečišče. Vrstica stanja pove: „Od A/1 na nivoju 2. Zdaj kliknite drugi konec (Esc prekliče).“ Črtkana črta sledi kazalcu.
4. Kliknite drugo presečišče. Nosilec se prikaže.
5. Kliknite znova, da začnete naslednji nosilec, ali pritisnite {{key:Esc}}.

{{key:Esc}} po prvem kliku prekliče samo to točko; drugi {{key:Esc}} odloži orodje.

### Diagonala

Diagonala teče med dvema presečiščema na različnih nivojih, zato je najlažje v {{ui:Pogled}}.

1. Izberite {{ui:Pogled}} in izberite črkovano mrežno os, na kateri je diagonala.
2. Izberite {{ui:Diagonala}}.
3. Kliknite spodnji konec, nato zgornji konec.

Pogledi obstajajo samo za črkovane mrežne osi. Za diagonalo v okvirju vzdolž številčene osi (od A do B) uporabite {{ui:3D}} ali obrazec {{ui:Dodaj po mreži}} spodaj.

:::touch
Na zaslonu na dotik se dotaknite blizu presečišča: dotik izbere najbližjo piko na kratki razdalji, če pa nobena pika ni blizu, ne naredi ničesar. Pred dotikom ni nobenega poudarka, zato po vsakem dotiku preverite sporočilo v vrstici stanja. Vlečenje z enim prstom zavrti ali premakne pogled namesto postavljanja.
:::

## Postavitev po mreži, brez klikanja

Vsako orodje za postavljanje ima obrazec {{ui:Dodaj po mreži}} na dnu podokna {{ui:Lastnosti}}. Deluje samo s tipkovnico in ne potrebuje 3D pogleda.

1. Izberite orodje, na primer {{ui:Nosilec}}.
2. V {{ui:Dodaj po mreži}} izberite {{ui:Od osi (črka)}}, {{ui:Od osi (številka)}} in {{ui:Od nivoja}}.
3. Izberite {{ui:Do osi (črka)}}, {{ui:Do osi (številka)}} in {{ui:Do nivoja}}.
4. Izberite {{ui:Dodaj}}.

Za steber ali temeljno stopo ima obrazec samo eno točko: {{ui:Os (črka)}}, {{ui:Os (številka)}} in {{ui:Nivo}}.

## Spremenite element po postavitvi

1. Pritisnite {{key:Esc}} (ali izberite {{ui:Izberi}}, {{key:V}}) in kliknite element.
2. V podoknu {{ui:Lastnosti}} spremenite {{ui:Ime}}, {{ui:Profil}}, {{ui:Material}}, {{ui:Položaj}} ali {{ui:Zasuk (°)}}.
3. Če ga želite premakniti, uredite x, y in z za {{ui:Začetek}} ali {{ui:Konec}} pod {{ui:Konca (x, y, z mm)}}. Pod polji je viden ime mreže vsakega konca ali njegove koordinate, če ni na mreži.

Vsaka sprememba je en korak razveljavitve. Pod polji vidite {{ui:Oznaka dela}}, {{ui:Sestav}}, {{ui:Dolžina reza}}, {{ui:Teža}} (bruto: izvrtine in izrezi se ne odštejejo) in iz katerega kataloga prihaja profil.

Elementov še ni mogoče vleči ali razpostaviti v matriko. Če želite narediti podobnega, ga kopirajte in prilepite ali podvojite ({{key:Mod+D}}): glejte [Kopiranje, lepljenje in podvajanje](topic:copy-paste).

## Izbrišite element

Izberite ga in pritisnite {{key:Delete}} ali {{key:Backspace}} ali izberite {{ui:Izbriši}}. Povezave nanj gredo prav tako. {{key:Mod+Z}} vse vrne nazaj.

## Na kaj paziti

- **V katero smer je obrnjen steber.** Pri {{ui:Zasuk (°)}} 0 so pasovi stebra obrnjeni vzdolž x, proti sosednjim številčenim mrežnim osem. Nosilec od mreže 1 do 2 se pritrdi na pas; nosilec od A do B se pritrdi na stojino. Čelne plošče se gradijo samo na pase, zato, če vaši nosilci tečejo od A do B, tem stebrom nastavite zasuk 90.
- **Nosilci na nivoju visijo pod njim** s privzetim {{ui:Vrh jekla na črti}}. Izberite {{ui:Na sredini črte}}, če so vaši nivoji središčnice elementov.
- **Stebri tečejo od nivoja do nivoja.** Za steber čez dve etaži nastavite {{ui:Do}} na višji nivo.
- **Nagnjeni nosilci** so dovoljeni (izberite konca na različnih nivojih), vendar nanje čelne plošče še niso zgrajene.

Naslednje: [Povežite nosilce s stebri s čelnimi ploščami](topic:end-plates).
