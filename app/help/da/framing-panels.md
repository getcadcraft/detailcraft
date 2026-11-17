---
title: Paneler i træ og letstål
summary: Konstruér væg-, gulv- og tagpaneler i træ eller letstål med alle emner, en tilskæringsliste, en værkstedstegning og det lager, der skal købes.
keywords: konstruktion, træ, tømmer, træværk, letstål, koldvalset, stænder, strø, spær, overligger, kongestænder, jackstænder, korte stænder, tilskæringsliste, værkstedstegning, panel
from: 3e38ffb9
---

Fanen {{ui:Konstruktion}} konstruerer paneler, du beskriver, og giver dig det, et tømrerhold og en trælasthandel spørger efter. Panelerne gemmes i modelfilen.

:::warning
Størrelserne, afstandene og overliggerne er dine. DetailCraft kontrollerer ikke, at en stænder med den afstand bærer den væg, eller at en overligger spænder den åbning: det er din norms tabeller og din ingeniørs ansvar.
:::

## Tilføj et panel

Vælg {{ui:Tilføj en væg}}, {{ui:Tilføj et gulv}} eller {{ui:Tilføj et tag}}, og udfyld derefter målene i millimeter, materialet (træ eller letstål) og emnets størrelse. Træstørrelser er de nominelle navne med deres høvlede mål (2×4 er 38 × 89 mm). Stålstænder navngives efter dybde og tykkelse, f.eks. `C92-1.2`.

## Vægge

En væg har en bundsvill, en eller flere overremme (én skinne for stål), endestænder, stænder med den afstand, du angiver, og for hver åbning: to kongestænder, to jackstænder, en overligger i den størrelse og de lag, du vælger, og korte stænder over overliggeren (og under vinduets underkarm). Angiv hver åbnings afstand fra venstre ende, dens bredde og dens rå åbnings top og bund målt fra gulvunderlaget; en dør har en bund på 0.

## Gulve og tage

Et gulv har strøer på tværs af sin bredde langs spændet, randstrøer i begge ender og, hvis du sætter flueben, afstivninger på midten af spændet. Et tagpanel er en sadeltag: et par spær med den afstand, du angiver (deres længde inkluderer udhænget langs skråningen), og et kipbræt.

## Hvad du får

Hvert panel viser sine emner på en tegning i målestok med hvert emne markeret, en tilskæringsliste efter mærke og en total. Tabellen {{ui:Lager der skal købes}} indlejrer alle panelernes tilskæringer i lagerlængder, den korteste, der passer til hver stangs tilskæringer. {{ui:Gem værkstedstegningen (SVG)}} skriver tegningen; knappen {{ui:CSV}} skriver alle tilskæringslister og lagerlisten.

## Placér et panel i modellen

Under hvert panel angiver du, hvor det står (x, y, z i millimeter og vinklen), og trykker {{ui:Placér som stålprofiler}}: hvert emne bliver til et element i modellen med det høvlede tværsnit af sin størrelse og vægten af materialet (ca. 500 kg/m³ for træet, stål for stænderne). En væg løber langs vinklen fra sin nedre venstre ende med bunden ved z; et gulvs strøer ligger med undersiden ved z; et tags gavlopstalt løber langs vinklen med z ved toppen af vægremmene. Hvert overliggerlag er et element ved siden af det andet. Trykker du igen, erstattes de elementer, der blev placeret før, og {{ui:Fjern de placerede elementer}} fjerner dem; hver er ét fortrydelsestrin. Analysen udelader disse elementer: de er ikke stålrammeelementer.

## PDF-ark

{{ui:PDF-ark}} gemmer én A3-side for hvert panel: panelet i målestok med hvert emne markeret, de samlede mål, tilskæringslisten og en titelstrimmel.

Problemer i panelet {{ui:Problemer}}: en åbning for tæt på enden af en væg eller på en anden, en overligger, der ikke passer under overremmene, og et emne længere end den længste lagervare.

Panelet {{ui:Problemer}} viser også **Grænseflader (LOD 350)** for vægpaneler og betonvægge: en åbning, der løber forbi enden eller toppen af sin væg, to åbninger, der overlapper, og en åbning i en betonvæg bredere end 1000 mm uden trimstang. Det er vejledning, de samme regler som den kontrol, BimCraft kører; bredden er CadCraft's startværdi, ikke en standard.
