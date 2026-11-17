---
title: Feilsøking
summary: Hva DetailCrafts meldinger betyr og hva du skal gjøre, fra en manglende 3D-visning til forbindelser som ikke vil bygges.
keywords: problem, feil, virker ikke, hjelp, fiks, melding, avvist, webgl, tom, advarsel, kan ikke, problem
from: f8c3b2b1
---

De fleste avvisninger forklares i statuslinjen nederst på skjermen, eller i fanen {{ui:Problemer}}. Les dem først. Meldingene nedenfor er sitert slik DetailCraft viser dem.

## Den 3D-visningen mangler

**"Denne nettleseren kunne ikke starte 3D-grafikk (WebGL). Modellen, rapportene og eksportene fungerer fortsatt."**

Nettleseren kunne ikke starte WebGL, 3D-grafikken DetailCraft tegner med.

1. Oppdater nettleseren til nyeste versjon.
2. Slå på maskinvareakselerasjon og start nettleseren på nytt (se nedenfor).
3. Oppdater skjermdriveren, eller prøv en annen nettleser. Fjernskrivebord og virtuelle maskiner har ofte ikke WebGL.
4. I mellomtiden kan du fortsatt arbeide: plasser stav med skjemaet {{ui:Legg til etter rutenett}}, les rapportene og eksporter. Bare klikking i visningen krever WebGL.

:::chromium
For å slå på maskinvareakselerasjon, åpne **Innstillinger, System** og slå på **Bruk maskinvareakselerasjon når det er tilgjengelig**, og start på nytt.
:::

:::firefox
For å slå på maskinvareakselerasjon, åpne **Innstillinger, Generelt, Ytelse**, fjern merket for **Bruk anbefalte ytelsesinnstillinger**, og merk av for **Bruk maskinvareakselerasjon når det er tilgjengelig**. Start Firefox på nytt.
:::

:::safari
Safari har WebGL slått på som standard. Oppdater macOS hvis visningen fortsatt ikke starter, og sjekk at ingen utvidelse blokkerer den.
:::

Mer i [Nettlesere og datamaskiner](common:browsers).

## Klikk i visningen gjør ingenting

- **Ingen skjæringspunkt nær klikket.** Plasseringsverktøyene fester bare til rutenettskryss. Et klikk langt fra alle prikkene gjør ingenting. Flytt nærmere til prikken lyser.
- **Verktøyet er {{ui:Velg}}, og du klikket på tomt rom.** Det fjerner utvalget.
- **Du dro.** Et trykk og en slipping som er mer enn noen få piksler fra hverandre, er et drag: det snur eller panorerer visningen.
- **Delen er kuttet bort.** I {{ui:Plan}} og {{ui:Fasade}} er stål utenfor snittet skjult og kan ikke klikkes. Bytt til {{ui:3D}}.
- **Skjæringspunktet er på feil nivå.** I {{ui:3D}} kan skjæringspunkter på flere nivåer overlappe på skjermen; klikket tar det nærmeste. Bruk {{ui:Plan}} eller {{ui:Fasade}}.

## Plasseringsmeldinger

| Melding | Hva du gjør |
|---|---|
| Det finnes ikke noe nivå over Nivå 2 for søylen å nå. Legg til et nivå først. | Legg til et nivå i {{ui:Nivåer}}, eller klikk på et lavere nivå |
| Velg et annet skjæringspunkt for den andre enden. | Du klikket to ganger på samme punkt |
| De to endene er samme punkt. | I {{ui:Legg til etter rutenett}} er valgene «Fra» og «Til» de samme |
| Legg til rutenettlinjer til venstre for å plassere stav. | Modellen har ingen rutenettlinjer i én retning |
| Ukjent profil "…" | Profilen finnes ikke i katalogen eller i modellens egne profiler. Velg en fra listen |
| Skriv inn et tall. | Et talfelt sto tomt, eller har tekst i seg |

## Forbindelser vil ikke bygges

### "Denne bjelken ender ikke på en søylelinje."

Endeplater krever at bjelkens ende ligger nøyaktig på en vertikal søyles linje, mellom dens bunn og topp (innen 1 mm). Kontroller bjelkens {{ui:Ender (x, y, z mm)}} og søylens plassering.

### "Denne bjelken møter et søylesteg eller står i vinkel"

Eller i {{ui:Problemer}}: "Bjelker som går inn i et søylesteg er ikke bygget ennå: snu søylen 90° eller bruk en annen forbindelse."

Bjelken går inn i søylestegget. Velg søylen og sett {{ui:Rotasjon (°)}} til 90, og prøv igjen. Skjeve skjøter er ikke bygget ennå.

### "Endeplater bygges bare for nivåbjelker (denne bjelken heller)."

Begge ender av bjelken må være i samme høyde.

### "Endeplater krever at bjelken står rett (rotasjon 0)."

Sett bjelkens {{ui:Rotasjon (°)}} tilbake til 0.

### "Endeplater krever en I-profilbjelke." / "Endeplater krever en I-profilsøyle."

Bare I-profiler (W, IPE, HEA, HEB eller en egen I-profil) kan få endeplater.

### "Bjelkeenden er ikke lenger på søylelinjen."

Du flyttet bjelken eller søylen etter at forbindelsen ble lagt til. Flytt den tilbake, eller slett forbindelsen.

### "Forbindelsene kutter dette stavet helt bort."

Forbindelsene i begge ender kutter stavet tilbake lenger enn lengden sin, for eksempel en svært kort bjelke mellom to dype søyler. Kontroller stavets ender og platetykkelsen.

### "Ingen andre tilsvarende skjøter … mangler en forbindelse."

{{ui:Lignende}} kopierer bare til skjøter med samme bjelkeprofil, søyleprofil og type forbindelse (bjelke inn i en flens), som ennå ikke har en forbindelse.

### "Begge endene har allerede forbindelser." / "Denne søylen har allerede en fotplate."

Velg den eksisterende forbindelsen for å endre den, eller slett den først.

## Advarsler i fanen Problemer

Advarsler stopper ikke en forbindelse eller et fundament fra å bygges; de ber deg kontrollere den. Advarslene om kant- og avstand bruker minimumsverdiene i EN 1993-1-8 tabell 3.3 (kant 1.2 × hull, avstand 2.2 × hull, linjeavstand 2.4 × hull). Hvis prosjektet bruker andre regler, gjelder kanskje ikke advarselen; DetailCraft dimensjonerer ikke forbindelser.

"Et hull er utenfor enden av delen" betyr at et hulls x er mindre enn 0 eller større enn kuttlengden. Husk at x måles fra kuttstarten, etter at forbindelsene har kuttet delen tilbake.

## Endringer i fundamenter avvises

| Melding | Hva du gjør |
|---|---|
| Overdekningen etterlater ikke plass til armering i dette fundamentet. | Gjør fundamentet større, eller dekningen mindre |
| Fundamentet er for grunt til to lag armering innenfor overdekningen. | Gjør det dypere, eller reduser overdekningen |
| Støpeskjøtearmeringen får ikke plass inne i fundamentet med 75 mm overdekning. | Færre støpeskjøtearmeringer, tettere avstand, eller et større fundament |
| Armeringsavstanden må være 50–1000 mm. | Skriv inn en avstand innenfor det området |
| Lengden må være 300–50000 mm. | Fundamentstørrelser har grenser: lengde og bredde 300 til 50000, dybde 150 til 10000 |

## Rutenett og nivåer avvises

| Melding | Hva du gjør |
|---|---|
| Nummererte rutenett: oppgi én avstand mellom hvert par linjer (4). | Tell mellomrommene: fem linjer trenger fire avstander |
| Bokstavrutenett: avstandene må være positive millimeter. | Ingen nuller, negative tall eller tekst |
| Nummererte rutenett: rutenettetikettene må være ulike. | To linjer har samme etikett |
| Høyst 60 rutenettlinjer i hver retning. | Del opp modellen |
| Behold minst ett nivå. | Du fjernet alle nivåradene |
| Hvert nivå må ha et navn. / To nivåer heter "…". | Gi hvert nivå et eget navn |

## Åpning av en fil mislykkes

| Melding | Årsak |
|---|---|
| DetailCraft åpner sine egne modeller (.detailcraft.json). Import av IFC er ikke bygget ennå. | Filen er ikke en `.json`-fil |
| Dette er ikke en DetailCraft-modell (ikke JSON). | Filen er skadet, eller er en annen JSON-fil |
| Dette er ikke en DetailCraft-modell. | En JSON-fil fra et annet program |
| Denne modellen ble lagret av en nyere DetailCraft (format 2). | Åpne den i den nyere DetailCraft-versjonen som lagret den |
| Filen er for stor til å være en DetailCraft-modell. | Over 50 MB |

Når en fil åpnes med advarsler som "2 stav var ikke gyldige og ble utelatt.", er resten av modellen i orden. Ikke lagre over originalen før du har kontrollert hva som ble utelatt.

## Eksport

| Melding | Årsak |
|---|---|
| Ingenting å eksportere ennå. | {{ui:IFC}} med en tom modell |
| Ingen I-profil- eller platedeler å skrive NC-filer for. | Bare kanaler, vinkeljern eller rør i modellen |
| Ikke skrevet (så langt bare I-profiler og plater): … | Disse merkene er ikke I-profiler eller plater; resten ble skrevet |
| Ingen fundamenter, så ingen armering å lage liste over. | {{ui:Bøying}} uten fundamenter |
| … tegn utenfor PDF-skriften ble skrevet ut som "?". | Modellnavnet eller en kvalitet har tegn som PDF-skriften mangler |

{{ui:Verkstedtegning}} er nedtonet: modellen har ennå ingen deler.

## Nedlastinger vises ikke

Hver lagring og eksport er en nedlasting i nettleseren. Sjekk nettleserens nedlastingsliste. Hvis nettleseren spør før den laster ned flere filer, eller blokkerer nedlastinger fra denne siden, tillat dem. I Safari finner du nedlastingsknappen i verktøylinjen.

## Taster gjør ingenting

- Markøren står i et tekst- eller tallfelt: verktøytaster og {{key:Delete}} ignoreres der, slik at du kan skrive. Trykk {{key:Tab}} eller klikk i visningen.
- En dialogboks er åpen: lukk den først.
- Nettleseren har tastaturet (for eksempel adressefeltet): klikk inne i DetailCraft.
- {{key:Ctrl+Shift+F}} bruker Control også på en Mac.

## Problemer frakoblet

Knappen {{ui:Lagre for frakoblet bruk}} i programlinjen viser hvilken tilstand den frakoblede kopien er i. Slik fungerer lagringen: [Arbeide frakoblet](common:offline).

| Knappen viser | Hva det betyr | Hva du gjør |
|---|---|---|
| {{ui:Lagre for frakoblet bruk}} | Ingen frakoblet kopi i denne nettleseren ennå | Velg den mens du er tilkoblet |
| Lagrer 5 av 20 | Lagringen pågår | Vent til {{ui:Klar frakoblet}}; hold fanen åpen |
| {{ui:Klar frakoblet}} | DetailCraft, 3D-visningen, alle eksporter og denne hjelpen fungerer uten forbindelse | Ingenting. Klikk på den for å velge {{ui:Lagre på nytt (hent nyeste versjon)}} eller {{ui:Fjern den frakoblede kopien}} |
| {{ui:Kunne ikke lagre}} | Noen filer ble ikke lastet ned | Kontroller forbindelsen og klikk på den for å prøve igjen |
| {{ui:Frakoblet bruk er ikke tilgjengelig}} | Dette vinduet kan ikke ha en frakoblet kopi: private vinduer og noen administrerte datamaskiner blokkerer det | Bruk et vanlig vindu, eller arbeid tilkoblet |

Hvis du er frakoblet og knappen ikke viser {{ui:Klar frakoblet}}, ikke last siden på nytt og ikke lukk fanen: det som er lastet, fortsetter å fungere. Lagre modellen med {{key:Mod+S}} og vent til du er tilkoblet igjen.

## Ulagret arbeid

Hvis nettleseren spør om du vil forlate siden, har DetailCraft ulagrede endringer. Velg å bli, og trykk deretter {{key:Mod+S}}. DetailCraft kan ikke gjenopprette en modell etter at fanen er lukket.

## Fortsatt problemer

Noter hva du gjorde og den nøyaktige meldingen, og gi oss beskjed via [støttesiden](https://getcadcraft.com/support).
