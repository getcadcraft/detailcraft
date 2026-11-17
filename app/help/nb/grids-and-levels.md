---
title: Sett opp rutenett og nivåer
summary: Skriv inn rutenettlinjene, avstandene mellom dem og nivåene som alle staver plasseres på.
keywords: rutenett, akser, rutenettlinjer, nivåer, koter, etasjer, gulv, avstand, oppsett
from: 9cad233c
---

Hver stav i DetailCraft plasseres i et rutenettskryss på et nivå. Sett rutenettene og nivåene først; de kan endres senere.

## Hvordan rutenett fungerer her

- **Nummererte linjer** går den ene veien, **bokstavlinjer** den andre. Navnene er bare vane: en etikett kan være hvilken som helst tekst på inntil 8 tegn (1, 2, 3 eller A1, A2, eller 10, 20).
- Etikettene og avstandene mellom dem skrives inn, ikke koordinater. Første linje i hvert sett er på 0.
- Nummererte linjer er linjer med konstant x; bokstavlinjer er linjer med konstant y. Så en bjelke fra rutenett 1 til 2 går langs x, og en bjelke fra A til B går langs y.
- Alle verdier er i millimeter.

En ny modell starter med nummererte linjer 1 2 3 med 6000 6000, bokstavlinjer A B med 6000, og to nivåer.

## Sett rutenettene

1. I panelet {{ui:Modell}} til venstre, åpne {{ui:Rutenett}} hvis det er brettet sammen.
2. I {{ui:Nummererte linjer}} skrives etikettene adskilt med mellomrom, for eksempel `1 2 3 4 5`.
3. I feltet {{ui:Avstander}} under skrives én avstand for hvert mellomrom, for eksempel `6000 6000 7500 6000`. Fire mellomrom for fem linjer.
4. Gjør det samme i {{ui:Bokstavlinjer}} og dens {{ui:Avstander}}, for eksempel `A B C` og `8000 8000`.
5. Velg {{ui:Bruk rutenett}}.

Statuslinjen sier «Rutenett oppdatert.», og visningen zoomes til det nye rutenettet. Komma fungerer også som skilletegn.

Hvis noe ikke stemmer, endres ingenting, og statuslinjen sier hvorfor, for eksempel «Nummererte rutenett: oppgi én avstand mellom hvert par linjer (4).» Andre kontroller: avstander må være positive millimeter, etikettene må være ulike, og det kan være høyst 60 linjer i hver retning.

:::note
Staver beholder sine koordinater når rutenettene flyttes. Hvis en avstand endres etter at stål er plassert, blir stålet stående der det var, og er ikke lenger på rutenettet. Endre rutenettet først, eller flytt stavene ved å redigere endekoordinatene deres.
:::

## Sett nivåene

1. Åpne {{ui:Nivåer}} i panelet {{ui:Modell}}.
2. Hver rad har et nivånavn og dets kote i millimeter. Rediger dem etter behov.
3. Velg {{ui:Legg til nivå}} for en ny rad. Den får navnet «Nivå 3» (og så videre) og plasseres 4000 mm over det høyeste nivået. Endre begge deler hvis det trengs.
4. For å fjerne et nivå, velg ×-knappen på slutten av raden.
5. Velg {{ui:Bruk nivåer}}.

Ingenting endres før {{ui:Bruk nivåer}} velges. Nivåene sorteres etter kote når de tas i bruk. Hvert nivå må ha et navn, to nivåer kan ikke ha samme navn, og minst ett nivå må beholdes.

Nivåer kan ligge under null (en kjeller på `-3500`) og trenger ikke være jevnt fordelt.

## Hvordan nivåene brukes

- En søyle plassert på et nivå går opp til neste nivå, eller til nivået som velges i {{ui:Opp til}}.
- Bjelker og plater plasseres mellom to skjæringspunkter på nivået der det klikkes.
- Fundamenter plasseres med toppen på nivået der det klikkes.
- {{ui:Plan}} ser ned på ett nivå om gangen.
- IFC-eksporten lager én bygningsetasje per nivå.

## Angre

Endringer i rutenett og nivåer er vanlige redigeringer: {{key:Mod+Z}} setter forrige rutenett tilbake.

## Neste

[Plasser søyler, bjelker og avstivninger](topic:place-members)
