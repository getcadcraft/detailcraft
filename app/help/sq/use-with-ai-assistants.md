---
title: Përdor DetailCraft me një asistent AI
summary: Lejo asistentin tënd AI ose skriptin të lexojë modelin, pjesët, problemet dhe përplasjet, të shtojë elementë dhe lidhje, të ruajë dhe eksportojë (edhe USD): lejet, lidhja përmes CadCraft Studio dhe regjistri i aktivitetit.
keywords: ai, asistent, agjent, mcp, protokolli i kontekstit të modelit, skript, automatizim, pjesë, përplasje, lidhje, leje, shkëputje, aktivitet, zhbëj
from: d624c9a0
---

## Çfarë do të mësosh

Si ta lejosh një asistent AI (ose një skript që ke shkruar) të punojë me DetailCraft, dhe si të vendosësh çfarë lejohet të prekë.

DetailCraft **nuk ka AI të vetën** dhe nuk dërgon asgjë askund. Ti sjell asistentin: çdo program që flet protokollin e kontekstit të modelit (MCP). DetailCraft i jep vetëm vegla, dhe ti zgjedh cilat.

## Aktivizoje

1. Hap {{ui:Cilësimet}} (ingranazhi te shiriti i aplikacionit, ose {{key:Mod+,}}) dhe shko te skeda {{ui:DetailCraft}}.
2. Nën {{ui:Asistentët}}, vendos shenjë te **Lejo asistentët AI dhe skriptet të përdorin DetailCraft**. Është i fikur derisa ta bësh këtë.
3. Zgjidh çfarë lejohet të bëjë: **Lexo** është me shenjë që në fillim; vendos shenjë te **Ndrysho**, **Ruaj** ose **Eksporto** vetëm kur të duhen.

Veglat jashtë lejeve që ke zgjedhur nuk i ofrohen asistentit, dhe nëse ai kërkon një të tillë gjithsesi, DetailCraft e refuzon dhe e shkruan te regjistri i aktivitetit. Fikja e çelësit i mbyll të gjitha lidhjet menjëherë.

## Lidh asistentin tënd

Asistentët lidhen përmes **CadCraft Studio** në kompjuterin tënd: Studio nis një server të vogël që vetëm ky kompjuter mund ta arrijë, i mbrojtur me një token që e krijon çdo herë kur nis. Në Studio, zgjidh {{ui:Lidh një asistent}} dhe kopjo adresën dhe tokenin te asistenti yt (Studio tregon cilësimet e sakta për t'u ngjitur). Mos e ndaj kurrë tokenin.

:::note
Një skedë shfletuesi nuk mund të hapë lidhje për një asistent: në aplikacionet e shfletuesit çelësi nuk ka efekt derisa të përdorësh CadCraft Studio në kompjuterin tënd.
:::

## Ti mbetesh përgjegjës

- **Çdo ndryshim është një hap zhbërjeje**, i etiketuar si i asistentit (për shembull "Asistenti: shto trar", "Asistenti: shto pllaka mbajtëse"). {{key:Mod+Z}} e kthen të gjithë ndryshimin e fundit të asistentit. `undo` i vetë asistentit kthen vetëm hapat e vet, kurrë të tutë, përveç nëse e kërkon shprehimisht.
- **Pret për ty.** Ndërsa po vendos një element, po zhvendos pjesë ose po ngjit, DetailCraft refuzon ndryshimet e asistentit dhe i thotë të provojë përsëri.
- **Di kur është i lidhur.** Një buton te shiriti i aplikacionit e emëron asistentin ndërsa është i lidhur; kliko për të parë çfarë mund të bëjë, ose për ta **shkëputur**.
- **Aktiviteti.** {{ui:Cilësimet}} › {{ui:DetailCraft}} › {{ui:Asistentët}} › {{ui:Aktiviteti}} liston çdo thirrje: kur, cila vegël, e kryer ose e refuzuar. {{ui:Ruaje regjistrin}} mban një kopje.

## Çfarë mund të kërkojë një asistent

Të gjitha gjatësitë janë në milimetra, pikat `[x, y, z]` me z lart, si në model.

| Vegla | Leja | Çfarë bën |
|---|---|---|
| `app_info`, `model_describe` | Lexo | Modeli i hapur: rrjetet, nivelet, fazat, elementët sipas tipit dhe profilit, lidhjet, themelet, shkallët, pjesët, pesha e çelikut, problemet |
| `parts_list` | Lexo | Shenjat e pjesëve me profil, material, gjatësi prerjeje, numër, peshë, fazë dhe shenja montimi; sipas tipit, profilit, shenjës ose fazës |
| `problems_list` | Lexo | Ajo që liston skeda {{ui:Problemet}}, secila me atë që ka të bëjë |
| `clash_check` | Lexo | [Kontrolli i përplasjeve](topic:clash-check), me tolerancën dhe fazat e tij |
| `selection_get` | Lexo | Çfarë ke përzgjedhur |
| `selection_set` | Ndrysho | Përzgjedh elementë, lidhje, themele ose shkallë (sipas id-së ose shenjës së pjesës) për t'i shfaqur; nuk ndryshon asgjë |
| `member_add` | Ndrysho | Një trar, kolonë, diagonale ose pllakë midis dy pikave |
| `connection_add` | Ndrysho | Pllaka skaji, pllaka prerëse, pllaka themeli, bashkime ose pllaka mbajtëse aty ku takohen elementët e dhënë, si bëjnë butonat {{ui:Lidh}} |
| `undo` | Ndrysho | Kthen hapat e fundit të asistentit |
| `model_save` | Ruaj | Ruajtja e vetë DetailCraft |
| `model_export` | Eksporto | IFC, skedarë NC, BOM, plani i përkuljes, skedari KISS ose lista e prerjeve, ashtu si i bëjnë butonat {{ui:Dalja}} |
| `usd_export` | Eksporto | Modeli i çelikut si USD (.usda, .usdc ose .usdz), ashtu si e shkruan {{ui:Dalja}} › {{ui:USD}} (shih [Eksporto modelin e çelikut si USD](topic:usd)); në Studio mund ta shkruajë skedarin në një dosje që ke lejuar |

## Nëse diçka nuk funksionon

- **Asistenti nuk sheh asnjë vegël DetailCraft:** kontrollo që çelësi të jetë i ndezur në këtë dritare, dhe që dritarja të jetë e hapur në Studio.
- **"kërkon lejen e ndryshimit"** (ose ruajtjes, eksportit): vendose shenjë nën {{ui:Asistentët}}, pastaj kërko përsëri.
- **"Përdoruesi po vendos një element":** mbaro atë që po bën (ose shtyp {{key:Esc}}), pastaj lër asistentin të provojë përsëri.
- **Gabime "401" ose "token":** tokeni ka ndryshuar (Studio u rinis, ose {{ui:Token i ri}}). Kopjo të resë te cilësimet e asistentit.

## Shih edhe

- [Recetat për asistentët AI](common:assistants-recipes): shembuj të punuar, secili me veglat që thërret.
