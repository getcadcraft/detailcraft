---
title: Issues, revisies en het tekenwijzigingslogboek
summary: Houd één issuegeschiedenis bij met het model van de architect: lees de issues in, leg bouwplaatsinstructies, werkplaatstekeningen en gekoppelde modellen vast bij een issue, en lees het tekenwijzigingslogboek.
keywords: issue, revisie, revisies, wijzigingslogboek, tekenwijzigingslogboek, tekenregister, bouwplaatsinstructie, werkplaatstekening, gekoppeld model, aanbesteding, bouw, issuegeschiedenis, werkplaatstekeningen, fabricage
from: 4b9a1b7b
---

## Wat u gaat doen

Werk met dezelfde issuegeschiedenis als de rest van het team. Zie welke bladen met welke revisie zijn uitgegeven, en houd bij wat er op de bouwplaats gebeurt, gekoppeld aan het issue waartoe het behoort.

## Stappen

1. Open **Issues en revisies**.
2. Kies **Een issuegeschiedenis inlezen** en selecteer het `.issues.json`-bestand dat is opgeslagen vanuit BimCraft of een andere app. De issues en records worden aan de uwe toegevoegd. Niets wordt vervangen.
3. Kies **Een record toevoegen** voor een bouwplaatsinstructie, een werkplaatstekening, een markupset, een gekoppeld model of een notitie. Kies het issue waarop het betrekking heeft en de status. Een bestand dat u kiest, wordt vastgelegd met zijn naam, grootte en SHA-256; het bestand blijft waar het is.
4. **Tekenwijzigingslogboek** toont één rij per blad en één kolom per issue. Een revisie tussen haakjes is opnieuw uitgegeven zonder wijzigingen.
5. **Het logboek downloaden (CSV)** slaat de issues, de bladentabel en de records op. **De issuegeschiedenis opslaan** schrijft een bestand dat de andere apps kunnen lezen.

## Goed om te weten

- Bladen worden nog steeds uitgegeven vanuit {{ui:Tekeningen}}, blad voor blad. Die issues verschijnen hier: de bladen die op één datum met één notitie zijn uitgegeven, vormen samen één issue.
- Records en issues die u inleest, worden opgeslagen in het modelbestand. Elke wijziging is één Ongedaan maken.
- Hetzelfde bestand twee keer inlezen voegt niets dubbel toe. Als twee kopieën hetzelfde record bevatten, blijft de nieuwste behouden.
