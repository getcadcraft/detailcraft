---
title: Plasser søyler, bjelker og avstivninger
summary: Velg en profil, et materiale og en posisjon, og klikk deretter på rutenettskjæringer eller skriv dem inn for å plassere stålstaver.
keywords: søyle, bjelke, avstivning, stav, plasser, profil, materiale, rotasjon, posisjon, forskyvning, sett inn, legg til etter rutenett
from: d6db0dc1
---

Stavene plasseres på rutenettskjæringer: en søyle på én, en bjelke eller en avstivning mellom to. Sett opp [rutenett og nivåer](topic:grids-and-levels) først.

## Velg et verktøy og dets valg

1. Velg {{ui:Søyle}} ({{key:C}}), {{ui:Bjelke}} ({{key:B}}) eller {{ui:Avstivning}} ({{key:R}}) i gruppen {{ui:Plasser}}.
2. Panelet {{ui:Egenskaper}} til høyre blir "Plasser en søyle" (eller bjelke, eller avstivning) og viser valgene for neste stav:
   - {{ui:Profil}}: velg fra listen. Størrelser er gruppert etter katalog (W-profiler, U-profiler, vinkelstål, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, og dine egendefinerte profiler). Se [Profilkatalog](topic:profile-catalog).
   - {{ui:Materiale}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 eller S355.
   - {{ui:Posisjon}}: hvor profilet ligger på linjen mellom de to punktene: {{ui:Overkant av stål på linjen}}, {{ui:Sentrert på linjen}} eller {{ui:Underkant på linjen}}.
   - {{ui:Rotasjon (°)}}: dreier profilet om elementets egen akse.
   - {{ui:Opp til}} (bare søyler): {{ui:Neste nivå opp}}, eller et nivånavn.
3. Under valgene viser en boks {{ui:Profil}} profilets mål, areal, masse per meter og katalogen det kommer fra.

Standardvalgene er W12x50 i A992 for søyler (sentrert), W16x26 i A992 for bjelker (overkant av stål på linjen) og HSS6x6x1/4 i A500 Gr C for avstivninger (sentrert). Valgene blir stående til du endrer dem.

## Plasser ved å klikke

### En søyle

1. Velg {{ui:Plan}} og velg nivået søylen starter på.
2. Velg {{ui:Søyle}}.
3. Før pekeren nær en skjæring. Nærmeste prikk lyser opp, og statuslinjen nevner den.
4. Klikk. Søylen går fra det nivået til neste nivå opp (eller til nivået {{ui:Opp til}}). Statuslinjen sier for eksempel «Søyle W12x50 ved A/1, Nivå 1 til Nivå 2.»
5. Fortsett å klikke for å plassere flere. Trykk {{key:Esc}} når du er ferdig.

Hvis det ikke finnes et nivå over det du klikket på, sier statuslinjen «Det finnes ikke et nivå over Nivå 2 for søylen å nå. Legg til et nivå først.»

### En bjelke

1. Velg {{ui:Plan}} og velg bjelkens nivå.
2. Velg {{ui:Bjelke}}.
3. Klikk den første skjæringen. Statuslinjen sier «Fra A/1 ved Nivå 2. Klikk nå den andre enden (Esc avbryter).» En stiplet linje følger pekeren.
4. Klikk den andre skjæringen. Bjelken vises.
5. Klikk igjen for å starte neste bjelke, eller trykk {{key:Esc}}.

{{key:Esc}} etter det første klikket avbryter bare det punktet; et nytt {{key:Esc}} legger verktøyet bort.

### En avstivning

En avstivning går mellom to skjæringer på ulike nivåer, så det er enklest i {{ui:Fasade}}.

1. Velg {{ui:Fasade}} og velg den bokstavmerkede rutenettlinjen avstivningen ligger på.
2. Velg {{ui:Avstivning}}.
3. Klikk nederste ende, og deretter øverste ende.

Fasader finnes bare for bokstavmerkede rutenettlinjer. For en avstivning i en ramme langs en nummerert linje (fra A til B), bruk {{ui:3D}} eller skjemaet {{ui:Legg til etter rutenett}} nedenfor.

:::touch
På en berøringsskjerm: trykk nær skjæringen. Et trykk velger nærmeste prikk innen kort avstand, og gjør ingenting hvis ingen prikk er nær. Det er ingen markering før du trykker, så sjekk statuslinjens melding etter hvert trykk. Dra med én finger snur eller panorerer visningen i stedet for å plassere.
:::

## Plasser etter rutenett, uten å klikke

Hvert plasseringsverktøy har et skjema {{ui:Legg til etter rutenett}} nederst i panelet {{ui:Egenskaper}}. Det fungerer med tastaturet alene og trenger ikke 3D-visningen.

1. Velg verktøyet, for eksempel {{ui:Bjelke}}.
2. I {{ui:Legg til etter rutenett}} velger du {{ui:Fra rutenett (bokstav)}}, {{ui:Fra rutenett (nummer)}} og {{ui:Fra nivå}}.
3. Velg {{ui:Til rutenett (bokstav)}}, {{ui:Til rutenett (nummer)}} og {{ui:Til nivå}}.
4. Velg {{ui:Legg til}}.

For en søyle eller et fundament har skjemaet bare ett punkt: {{ui:Rutenett (bokstav)}}, {{ui:Rutenett (nummer)}} og {{ui:Nivå}}.

## Endre en stav etter plassering

1. Trykk {{key:Esc}} (eller velg {{ui:Velg}}, {{key:V}}) og klikk på staven.
2. I panelet {{ui:Egenskaper}} endrer du {{ui:Navn}}, {{ui:Profil}}, {{ui:Materiale}}, {{ui:Posisjon}} eller {{ui:Rotasjon (°)}}.
3. For å flytte den, rediger x, y og z for {{ui:Start}} eller {{ui:Slutt}} under {{ui:Ender (x, y, z mm)}}. Rutenettnavnet for hver ende vises under, eller koordinatene når den er utenfor rutenettet.

Hver endring er ett angresteg. Under feltene ser du staven sitt {{ui:Delenummer}}, {{ui:Sammenstilling}}, {{ui:Kappelengde}}, {{ui:Vekt}} (brutto: hull og utklinkninger trekkes ikke fra) og hvilken katalog profilet kommer fra.

Staver kan ikke dras eller matriseres ennå. For å lage en lik stav, kopier og lim inn den, eller dupliser den ({{key:Mod+D}}): se [Kopier, lim inn og dupliser](topic:copy-paste).

## Slett en stav

Velg den og trykk {{key:Delete}} eller {{key:Backspace}}, eller velg {{ui:Slett}}. Forbindelser på den går også. {{key:Mod+Z}} henter alt tilbake.

## Greit å vite

- **Hvilken vei en søyle vender.** Ved {{ui:Rotasjon (°)}} 0 har en søyles flenser retning langs x, mot de nabostilte nummererte rutenettlinjene. En bjelke fra rutenett 1 til rutenett 2 kobles til en flens; en bjelke fra A til B kobles til steget. Endeplater bygges bare inn i flenser, så hvis bjelkene går fra A til B, gi disse søylene rotasjon 90.
- **Bjelker på et nivå henger under det** med standardvalget {{ui:Overkant av stål på linjen}}. Velg {{ui:Sentrert på linjen}} hvis nivåene dine er senterlinjer for elementene.
- **Søyler går nivå til nivå.** For en søyle gjennom to etasjer setter du {{ui:Opp til}} til det høyere nivået.
- **Skrå bjelker** er tillatt (velg ender på ulike nivåer), men endeplater bygges ikke på dem ennå.

Neste: [Koble bjelker til søyler med endeplater](topic:end-plates).
