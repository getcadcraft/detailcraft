---
title: Stillingar DetailCraft
summary: Byrjaðu nýja liði sem bandarísk eða evrópsk snið, stilltu hversu langt Tvöfalda færir afrit, veldu hvort afrit fylgi tengingum sínum og sýndu eða faldu bolta í 3D-myndinni.
keywords: stillingar, óskir, blaðastærð, pappírsstærð, teikningar, stál, aisc, en, evrópsk, bandarísk snið, metrísk snið, sjálfgefið snið, stálgæði, s355, a992, færsla við tvöföldun, færsla við líminu, afrita tengingar, boltar, akkerisstangir, fela bolta, endurstilla
from: e46cea57
---

Opnaðu {{ui:Settings}} með tannhjólinu í forritastikunni eða {{key:Mod+,}}. Fyrsti flipinn, {{ui:DetailCraft}}, geymir stillingarnar sem tilheyra þessu forriti; {{ui:General}} geymir þær sem öll CadCraft-forrit deila (þema, tækjastika, spjöld). Stillingar DetailCraft eru aðeins í forritinu: þú breytir þeim hér, þær taka gildi strax, og þessi vafri man þær. Þær eru ekki vistaðar í líkanaskránni þinni.

## Nýir liðir

Hvaða snið og gæði verkfærin til að setja liði byrja með:

| Verkfæri | Bandarísk snið (AISC), A992 | Evrópsk snið (EN), S355 |
|---|---|---|
| {{ui:Beam}} | W16x26, A992 | IPE300, S355 |
| {{ui:Column}} | W12x50, A992 | HEB200, S355 |
| {{ui:Brace}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plate}} | A36 | S355 |

Bandarísk snið er upphafið. Evrópska valið notar HEA160 fyrir skástífur því EN-safn DetailCraft hefur ekki holsnið enn ([Sniðasafn](topic:profile-catalog)). Þú getur samt valið hvaða snið og gæði sem er fyrir næsta hlut í spjaldinu {{ui:Eiginleikar}} meðan verkfæri til að setja hluti er virkt. Liðir sem þegar eru í líkaninu halda sínu eigin sniði og gæðum.

## Tvöföldun og líming

- **Færsla (mm)**: x, y og z. {{ui:Tvöfalda}} ({{key:Mod+D}}) setur afritið svo langt frá upprunalega, og eyðublaðið {{ui:Líma með færslu (mm, frá upprunalegu)}} byrjar með því. Það byrjar í 6000, 0, 0: eitt 6 m bil eftir tölusettu ásunum. Stilltu það á ásbilið þitt, eða á hæð hæðar í z til að afrita hæð upp.
- **Afrita endaplötur og undirplötur með liðum sínum** (kveikt í upphafi): tenging fylgir afriti aðeins þegar sérhver liður sem hún tengir er afritaður. Taktu hakið af til að afrita liði og undirstöður án tenginga þeirra, til dæmis til að prófa aðra tengingu á afritinu.

Sjá [Afrita, líma og tvöfalda](topic:copy-paste).

## 3D-myndin

**Sýna bolta og akkerisstangir** (kveikt í upphafi). Taktu hakið af til að fela þá í myndinni og sjá göt og plötur í þéttri tengingu. Faldir boltar er ekki hægt að smella á; smelltu á plötuna til að velja tenginguna. Efnislistinn, teikningar og allur útflutningur hafa samt alla bolta og stangir.

## Hornavísir

Það sem sést í horni 3D-myndarinnar: **Útsýniskubbur** (upphafsgildið; efst til hægri — smelltu á flöt, brún eða horn til að líta þaðan, dragðu hann til að snúast umhverfis, dragðu áttavitahringinn til að snúa líkaninu), **Ásatákn** (lítill X, Y, Z-merki neðst vinstra megin sem snýst með sjónarhorninu: X rautt, Y grænt, Z blátt) eða **Ekkert**. Aðeins í {{ui:3D}}; {{ui:Grunnmynd}} og {{ui:Útlit}} sýna hvorugt. Sjá [Útsýniskubburinn](topic:view-cube).

## Endurstilla

{{ui:Endurstilla DetailCraft-stillingar}} neðst í glugganum setur þetta aftur í upphafsgildi (bandarísk snið, færsla 6000, 0, 0, tengingar afritaðar, boltar sýndir), ásamt {{ui:Almennt}}-stillingunum.

## Teikningar

**Blaðastærð**: blaðateikningar og verkstæðisteikningar eru gerðar á, láréttar: A4, A3 (upphafsgildið), A2, A1, ANSI B, ANSI C eða ANSI D. Gluggar {{ui:Teikningar}} og verkstæðisteikninga hafa sama lista. Sjá [Heildarteikningar og samsetningarteikningar](topic:drawings).

## Steypustyrktarstál

- **ASTM-stangaheiti**: #3 til #11, eða mjúk-metra #10 til #36 fyrir sömu stangir.
- **Lögunarkóðar beygjulista**: S, L, U frá DetailCraft; gerðir ACI 315; eða lögunarkóðar BS 8666. Sjá [Viðmið um steypustyrktarstál](topic:rebar-reference).

## Dráttur til að velja

**Rétthyrningur** (eins og áður) eða **Lasso**: frjáls lína, með {{key:Space}} sem skiptir milli innan, snertingar og girðingar meðan þú dregur. Sjá [Velja með glugga](topic:select-and-change#select-with-a-window).
