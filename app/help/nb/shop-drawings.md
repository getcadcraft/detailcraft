---
title: Lag verkstedtegninger
summary: Ett ark per delenummer, laget alt på en gang: forhåndsvis hvilket som helst og last ned ett ark eller hele settet som PDF på A4 til A1 eller ANSI B til D, med hull, utklinkninger, mål og tegningshode.
keywords: verkstedtegning, verkstedtegninger, alle deler, batch, hele settet, enkeltdelstegning, produksjonstegning, stykketegning, pdf, detaljtegning, skriv ut
from: d25fe035
---

DetailCraft lager ett ark per delenummer, for hver bjelke, søyle, avstivning og plate i modellen, alt på en gang: du må ikke velge dem én etter én. Identiske stykker deler et merke, og deler derfor et ark. Arkene lages på stedet fra modellen; de lagres ikke og kan ikke redigeres.

## Lag hele settet

1. Velg {{ui:Verkstedtegning}} i gruppen {{ui:Utdata}}. Ingenting trenger å være valgt. Med en del valgt åpnes vinduet på den delens ark. I panelet {{ui:Egenskaper}} heter den samme knappen {{ui:Verkstedtegning}} for stavene og {{ui:Platetegning}} for forbindelser.
2. En forhåndsvisning åpnes, med tittel etter delenummeret, for eksempel «Verkstedtegning b1». Den første listen ved siden av tittelen holder hvert delenummer med profil, lengde og antall: velg ett for å se arket. Den andre listen endrer arkstørrelsen; hele settet lages på nytt i den (se [Generelle og sammenstillingstegninger](topic:drawings#choose-the-sheet-size)).
3. Velg {{ui:Last ned alle}} (knappen viser antall ark) for én PDF med en side per delenummer, `<name> Shop drawings.pdf`. Hvert ark sier «Ark 3 av 42» i tegningshodet. Eller velg {{ui:Last ned PDF}} for det arket du ser på, `<name> <mark>.pdf`.
4. Lukk forhåndsvisningen med × eller {{key:Esc}}.

Hvis {{ui:Verkstedtegning}} er gråtonet, har modellen ingen deler ennå.

## Hva som er på arket

For en I-profil:

- **Fasade**, sett mot livet: delen med utklinkningene sine, hull i livet som sirkler og flenshull som skjulte (stiplede) linjer.
- **Plan over overflensen**, sett ovenfra, når noen flens har hull. Hull i underflensen vises stiplet.
- **Snitt** gjennom profilen.
- **Mål:** kjedede hullposisjoner langs delen pluss total lengde, hullhøyder i livet, rissmålet og utklinkningsstørrelser.
- **Hullliste:** hver gruppe hull, for eksempel «8 x Ø22 i overflensen».
- **Sveis**, når delen har plater sveiset til seg.
- **Tegningshode:** delenummer, sammenstillingsmerke, profil, materiale, lengde, antall, vekt per stykk og total, modellnavn og dato.

For U-profil, vinkeljern eller hult profil er arket det samme, sett mot livet eller siden: et rørs vegger er skjulte (stiplede) linjer, og snittet gir veggtykkelsen.

For en plate: plateflaten med hullene, og kanten som snitt.

## Målestokker

Målestokken velges fra en liste (1:1 opp til 1:200) slik at delen får plass på arket. En lang, grunn del ville blitt for tynn å lese i én målestokk, så når dybden ville blitt under 30 mm på papiret, tegnes dybden i en større målestokk enn lengden. Visningstittelen sier det da, for eksempel «lengde 1:20, dybde 1:5 (ikke i én målestokk; mål styrer)». Les alltid størrelser fra målene, ikke ved å måle på arket.

## Ting å vite

- Antallet er antall deler med det merket i modellen. Merker kan nummereres om etter en endring; se [Kontroller merking og stykkliste](topic:marks-and-bom).
- Hvert ark er én del for seg, uten sveisesymboler. Sammenstillingstegninger (med sveisesymboler) og generelle oppstillingstegninger finnes under [Tegninger](topic:drawings). Arket kan ikke redigeres eller merkes opp i DetailCraft. For å merke det opp, åpne PDF-en i et PDF-merkeprogram som MarkupCraft.
- Tegningshodet sier «DetailCraft-labbversjon — millimeter».
- Teksten bruker standard PDF-skrifttypen Helvetica. Tegn utenfor det vesteuropeiske tegnsettet skrives ut som «?», og statuslinjen teller dem.

## Skriv den ut

Åpne den nedlastede PDF-en i PDF-leseren din og skriv den ut i 100 % (ingen «tilpass til side») på papir i størrelsen du valgte, hvis de angitte målestokkene skal stemme. På et mindre ark skalerer du den og stoler på målene.
