---
title: Opsæt gitre og niveauer
summary: Skriv gitterlinjerne, deres afstande og de niveauer, som hvert element placeres på.
keywords: gitter, gitre, akser, gitterlinjer, niveauer, koter, etager, dæk, afstande, opsætning
from: 9cad233c
---

Hvert element i DetailCraft placeres på et gittersnit i et niveau. Opsæt gitre og niveauer først; du kan ændre dem senere.

## Sådan virker gitre her

- **Nummererede linjer** løber den ene vej, **Linjer med bogstaver** den anden. Navnene er kun vane: en etiket kan være en hvilken som helst tekst på op til 8 tegn (1, 2, 3 eller A1, A2, eller 10, 20).
- Du skriver etiketterne og afstandene mellem dem, ikke koordinater. Den første linje i hvert sæt er ved 0.
- Nummererede linjer er linjer med konstant x; linjer med bogstaver er linjer med konstant y. Så en bjælke fra gitter 1 til gitter 2 løber langs x, og en bjælke fra A til B løber langs y.
- Alle værdier er i millimeter.

En ny model starter med nummererede linjer 1 2 3 ved 6000 6000, linjer med bogstaver A B ved 6000 og to niveauer.

## Opsæt gitrene

1. I panelet {{ui:Model}} til venstre åbnes {{ui:Gitre}}, hvis den er foldet sammen.
2. I {{ui:Nummererede linjer}} skriver du etiketterne adskilt af mellemrum, f.eks. `1 2 3 4 5`.
3. I feltet {{ui:Afstande}} under skriver du én afstand for hvert mellemrum, f.eks. `6000 6000 7500 6000`. Fire mellemrum for fem linjer.
4. Gør det samme i {{ui:Linjer med bogstaver}} og dets {{ui:Afstande}}, f.eks. `A B C` og `8000 8000`.
5. Vælg {{ui:Anvend gitre}}.

Statuslinjen siger »Gitre opdateret.«, og visningen zoomer til det nye gitter. Kommaer virker også som adskillere.

Hvis noget ikke går op, ændres intet, og statuslinjen siger hvorfor, f.eks. »Nummererede gitre: angiv én afstand mellem hvert par linjer (4).« Øvrige kontroller: afstande skal være positive millimeter, etiketterne skal være forskellige, og der kan højst være 60 linjer i hver retning.

:::note
Elementer beholder deres koordinater, når gitrene flyttes. Hvis du ændrer en afstand, efter at du har placeret stål, bliver stålet, hvor det var, og er ikke længere på gitteret. Ændr gitteret først, eller flyt elementerne ved at redigere deres endekoordinater.
:::

## Opsæt niveauerne

1. Åbn {{ui:Niveauer}} i panelet {{ui:Model}}.
2. Hver række har et niveaunavn og dens kote i millimeter. Rediger dem, som du vil.
3. Vælg {{ui:Tilføj niveau}} for en ny række. Den hedder »Niveau 3« (og så videre) og placeres 4000 mm over det højeste niveau; ændr begge dele, hvis du har brug for det.
4. For at fjerne et niveau vælges ×-knappen i slutningen af dets række.
5. Vælg {{ui:Anvend niveauer}}.

Intet ændres, før du vælger {{ui:Anvend niveauer}}. Niveauer sorteres efter kote, når de anvendes. Hvert niveau skal have et navn, to niveauer kan ikke dele et navn, og du skal beholde mindst ét niveau.

Niveauer kan ligge under nul (en kælder ved `-3500`) og behøver ikke være jævnt fordelt.

## Sådan bruges niveauer

- En søjle placeret i et niveau løber op til det næste niveau eller til det niveau, du vælger i {{ui:Op til}}.
- Bjælker og plader placeres mellem to skæringspunkter i det niveau, du klikker i.
- Punktfundamenter placeres med deres top i det niveau, du klikker i.
- {{ui:Plan}} kigger ned på ét niveau ad gangen.
- IFC-eksporten laver én bygningsetage pr. niveau.

## Fortryd

Gitter- og niveauændringer er redigeringer som alle andre: {{key:Mod+Z}} sætter det forrige gitter tilbage.

## Næste

[Placér søjler, bjælker og afstivninger](topic:place-members)
