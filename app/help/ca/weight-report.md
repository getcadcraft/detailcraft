---
title: Informe de pes i material per fase
summary: Longituds de tall, quantitats, pesos i àrees de pintura per a cada fase, amb els seus cargols i armadures, en taula, CSV o PDF.
keywords: informe, pes, tonatge, kg, pintura, àrea de pintura, àrea superficial, recobriment, longitud de tall, llista de material, fase, llista de materials, csv, pdf
from: 337d6d92
---

Al grup {{ui:Sortida}}, obriu {{ui:Més}} i trieu {{ui:Informe de pes per fase}}, o obriu la pestanya {{ui:Per fase}} sota la vista. Mostra:

- **Resum per fase**: per a cada fase, el nombre de peces, el pes d'acer, l'àrea de pintura, els cargols i les barres d'ancoratge, i l'armadura; després els totals.
- **Una taula per fase**: cada marca de peça amb el seu tipus, perfil, material, longitud de tall, quantitat, pes unitari, pes i àrea de pintura; després els seus cargols i barres d'ancoratge.

{{ui:Baixa CSV}} desa les mateixes taules en un sol fitxer CSV (`<name> weight report.csv`). {{ui:Baixa PDF}} fa un informe en la mida de full de la [Configuració de DetailCraft](topic:settings#drawings), amb el resum primer, cada fase després, les taules llargues continuades a la pàgina següent, i totes les pàgines numerades.

## Com es calculen les xifres

- **Els pesos** són bruts, com a la llista de materials: el pes del perfil per metre multiplicat per la longitud de tall. No es resten els forats ni els retalls d'encaix.
- **L'àrea de pintura** és l'exterior del perfil al llarg de la longitud de tall: per a un perfil en I, totes les cares de les ales i de l'ànima; per a una placa, les dues cares i les vores; per a un tub, només l'exterior. Els extrems i els forats no es compten.
- **L'armadura** és el pes de les barres de les fonamentacions de la fase, segons el [quadre de doblegat](topic:footings-and-rebar).
- Les plaques i els cargols d'una connexió compten a la fase de la seva barra principal. Vegeu [Fases](topic:phases).

Amb les [marques per fase](topic:phases#marks-per-phase) activades, cada fase té les seves pròpies marques (1-b1, 2-b1). Amb l'opció desactivada, una marca pot aparèixer en més d'una fase: cada fase llista les peces que té.
