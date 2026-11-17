---
title: Stahlmodell als USD exportieren
summary: Jedes Teil und jede Baugruppe als USD für Renderprogramme, Szenenaufbau und andere 3D-Software schreiben, mit Teilemarken, Profilen und Gewichten.
keywords: usd, usda, usdc, usdz, OpenUSD, Export, Stahl, Baugruppe, Teilemarken, Profile, Rendering
from: c3f67931
---

1. Wählen Sie {{ui:USD}} in der Gruppe {{ui:Ausgabe}}.
2. Wählen Sie {{ui:Text (.usda)}}, {{ui:Binär (.usdc)}} oder {{ui:Paket (.usdz)}}.

Jede Baugruppe ist ein Objekt, das ihre Teile enthält; jedes Teil ist sein Querschnitt entlang seiner Länge, mit ausgeklinkten Stellen. Jedes Teil trägt seine Teilemarke, sein Profil, seine Festigkeitsklasse, seine Länge und sein Gewicht. Alles ist in Metern angegeben, mit Z nach oben.

:::note
Schraublöcher, Schrauben, Schweißnähte und Fundamente sind nicht in den USD-Netzen enthalten. Sie stehen in den IFC-, NC- und Stücklistenausgaben.
:::
