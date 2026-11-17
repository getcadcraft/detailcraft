---
title: Kontrollér positionsnumre og stykliste
summary: Læs del- og samlingsmærkerne, som DetailCraft giver hvert stykke, kontrollér stykheden, og download den som CSV.
keywords: mærker, nummerering, positionsnummer, samlingsmærke, stykmærke, stykliste, BOM, materialeliste, vægte, boltliste, csv
from: caa2ee80
---

DetailCraft markerer modellen selv. Der er ingen nummereringskommando, og intet at køre: efter hver ændring finder det ud af, hvilke dele der er det samme stykke stål, og giver dem ét mærke.

## Hvor mærkerne vises

- Listen {{ui:Positionsnumre}} i panelet {{ui:Model}}: hvert mærke med sin profil, længde og antal. Klik på et for at vælge den første del med det mærke.
- Panelet {{ui:Egenskaber}} for en valgt stålprofil (og listen **Positionsnumre** i venstre panel): {{ui:Positionsnummer}} og {{ui:Samling}}. Panelets overskrift viser også mærket, for eksempel »Bjælke b1«.
- Fanen {{ui:Stykliste}}, CSV-filen, NC-filernes navne, værkstedstegningerne og IFC-eksporten (som hvert elements mærke).

## Hvordan dele mærkes

- **Positionsnumre:** c for søjler, b for bjælker, br for afstivninger, st for trappevanger, p for plader (inklusive endeplader og fodplader). Derefter et tal: c1, c2, b1, p1 … Når dele står i mere end én fase, kommer et fasenummer først, for eksempel 2-b1.
- **Samlingsmærker:** C, B, BR eller P. En samling er en hovedstålprofil og de plader, der er svejst til den, for eksempel en bjælke med sine to endeplader, eller en søjle med sin fodplade.
- To dele deler et mærke, når de har samme profil, materiale og tilskæringslængde, og samme huller og udskæringer, alle inden for 1 mm, selv om den ene er vendt om ende eller på hovedet i forhold til den anden.
- Nummereringen går søjler først, derefter bjælker, afstivninger og plader; inden for hver, efter profilnavn, længste først.

De fulde regler, inklusive hvilke vendinger der tæller for U-profiler og vinkler: [Regler for mærker](topic:mark-rules).

:::warning
Mærkerne udregnes frisk efter hver ændring, så de kan blive nummereret om. Tilføjes en del, ændres en profil, eller tilføjes et hul, kan b3 blive til b4. Betragt kun mærkerne som endelige, når modellen er færdig, og lav stykliste, NC-filer og værkstedstegninger fra den samme gemte model.
:::

## Læs stykheden

Åbn fanen {{ui:Stykliste}} nederst. Den har tre tabeller.

**Dele**, med den samlede stålvægt i overskriften:

| Kolonne | Betydning |
|---|---|
| Positionsnummer | Klik for at vælge den første del med dette mærke |
| Type | bjælke, søjle, afstivning, trappevange eller plade |
| Profil | For eksempel W16x26 eller PL20x180 |
| Materiale | Den kvalitet du har valgt |
| Længde (mm) | Tilskæringslængde, efter forbindelser |
| Antal | Hvor mange |
| Enhedsvægt (kg) | Profilmasse pr. meter × længde |
| Samlet vægt (kg) | Enhedsvægt × antal |

Den sidste række giver det samlede antal og vægt.

**Samlinger:** hvert samlingsmærke, dets hoveddel, alle dets dele (for eksempel »b1 + p1 + p1«), antal, enhedsvægt og samlet vægt.

**Bolte og ankerbolte:** grupperet efter type, diameter, længde og kvalitet, med et antal.

:::note
Vægtene er brutto: huller og udskæringer trækkes ikke fra. Bolte, møtrikker, skiver og svejsninger er ikke med i stålvægten.
:::

## Download den

Vælg {{ui:Download CSV}} i fanen, eller {{ui:Stykliste}} i gruppen {{ui:Uddata}}. Filen `<name> BOM.csv` indeholder de tre tabeller efter hinanden, hver under sin titel, med en tom linje imellem. Den åbnes i ethvert regnearksprogram.

## Kontrollér før du sender

1. Åbn fanen {{ui:Problemer}} og ryd hver linje. En forbindelse, der ikke kunne bygges, tilføjer ingen plade, huller eller bolte, så stykheden vil være for kort.
2. Se efter mærker, du ikke forventede. To bjælker, du tror er ens, men med forskellige mærker, adskiller sig typisk ved et hul, en udskæring eller en tilskæringslængde; vælg hver og sammenlign.
3. Gem modellen, og lav alle eksporter fra den gemte tilstand.
