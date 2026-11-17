---
title: Kontroller merking og stykkliste
summary: Les del- og sammenstillingsmerkene DetailCraft gir hvert stykke, kontroller stykklisten, og last den ned som CSV.
keywords: merking, nummerering, delenummer, sammenstillingsmerke, stykkmerke, bom, stykkliste, materialliste, vekter, boltliste, csv, nummerering
from: caa2ee80
---

DetailCraft merker modellen selv. Det finnes ingen nummereringskommando, og ingenting å kjøre: etter hver endring finner programmet ut hvilke deler som er samme stykke stål, og gir dem ett merke.

## Hvor merkene vises

- Listen {{ui:Delenumre}} i panelet {{ui:Modell}}: hvert merke med profil, lengde og antall. Klikk på ett for å velge den første delen med det merket.
- Panelet {{ui:Egenskaper}} for en valgt stav (og listen **Delenumre** i venstre panel): {{ui:Delenummer}} og {{ui:Sammenstilling}}. Panelets overskrift bærer også merket, for eksempel «Bjelke b1».
- Fanen {{ui:Stykkliste}}, CSV-filen, NC-filnavnene, verkstedtegningene og IFC-eksporten (som hvert elements merkelapp).

## Hvordan delene merkes

- **Delenumre:** c for søyler, b for bjelker, br for avstivninger, st for vanger, p for plater (inkludert endeplater og fotplater). Så et nummer: c1, c2, b1, p1 … Når deler står i mer enn én fase, kommer et fasenummer først, for eksempel 2-b1.
- **Sammenstillingsmerker:** C, B, BR eller P. En sammenstilling er en hovedstav og platene sveiset til den, for eksempel en bjelke med sine to endeplater, eller en søyle med sin fotplate.
- To deler deler et merke når de har samme profil, materiale og kuttlengde, og samme hull og utklinkninger, alt innen 1 mm, selv om den ene er snudd ende for ende eller opp ned i forhold til den andre.
- Nummereringen går søyler først, deretter bjelker, avstivninger og plater; innenfor hver gruppe etter profilnavn, og lengste først.

Fullstendige regler, inkludert hvilke vendinger som teller for U-profiler og vinkeljern: [Merkeregler](topic:mark-rules).

:::warning
Merkene regnes ut på nytt etter hver endring, så de kan nummereres om. Å legge til en del, endre en profil eller legge til et hull kan flytte b3 til b4. Regn merkene som endelige først når modellen er ferdig, og lag stykklisten, NC-filene og verkstedtegningene fra samme lagrede modell.
:::

## Les stykklisten

Åpne fanen {{ui:Stykkliste}} nederst. Den har tre tabeller.

**Deler**, med total stålvekt i overskriften:

| Kolonne | Betydning |
|---|---|
| Delenummer | Klikk for å velge den første delen med dette merket |
| Type | bjelke, søyle, avstivning, vange eller plate |
| Profil | For eksempel W16x26 eller PL20x180 |
| Materiale | Kvaliteten du satte |
| Lengde (mm) | Kuttlengde, etter forbindelser |
| Antall | Hvor mange |
| Enhetsvekt (kg) | Profilens masse per meter × lengde |
| Totalvekt (kg) | Enhetsvekt × antall |

Siste rad gir totalt antall og total vekt.

**Sammenstillinger:** hvert sammenstillingsmerke, hovedstaven, alle delene (for eksempel «b1 + p1 + p1»), antall, enhetsvekt og totalvekt.

**Bolter og ankerstenger:** gruppert etter type, diameter, lengde og kvalitet, med et antall.

:::note
Vektene er brutto: hull og utklinkninger trekkes ikke fra. Bolter, muttere, skiver og sveiser er ikke med i stålvekten.
:::

## Last den ned

Velg {{ui:Last ned CSV}} i fanen, eller {{ui:BOM}} i gruppen {{ui:Utdata}}. Filen `<name> BOM.csv` holder de tre tabellene etter hverandre, hver under sin tittel, med en tom linje mellom. Den åpnes i et hvilket som helst regneark.

## Kontroller før du sender

1. Åpne fanen {{ui:Problemer}} og fjern hver linje. En forbindelse som ikke kunne bygges, legger ikke til plate, hull eller bolter, så stykklisten blir for kort.
2. Se etter merker du ikke forventet. To bjelker du tror er like, men med forskjellige merker, skiller vanligvis i et hull, en utklinkning eller en kuttlengde; velg hver og sammenlign.
3. Lagre modellen, og lag så alle eksporter fra den lagrede tilstanden.
