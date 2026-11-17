---
title: Mga setting ng DetailCraft
summary: Itakda ang mga bagong member bilang US o European na shape, itakda kung gaano kalayo ililipat ng Duplicate ang kopya, piliin kung kasama ng mga kopya ang kanilang connection, at ipakita o itago ang bolt sa 3D view.
keywords: settings, preferences, laki ng sheet, laki ng papel, drawings, options, steel, aisc, en, european, us shapes, metric shapes, default profile, grade, s355, a992, duplicate offset, paste offset, kopyahin ang connection, bolts, anchor rods, itago ang bolt, reset
from: e46cea57
---

Buksan ang {{ui:Mga setting}} gamit ang gear sa app bar o {{key:Mod+,}}. Ang unang tab, {{ui:DetailCraft}}, ay naglalaman ng mga setting na pag-aari ng app na ito; ang {{ui:Pangkalahatan}} ay naglalaman ng mga setting na ibinabahagi ng bawat app ng CadCraft (tema, toolbar, panel). Umiiral lamang sa app ang mga setting ng DetailCraft: babaguhin mo ang mga ito rito, agad nagkakabisa ang mga ito, at naaalala ng browser na ito ang mga ito. Hindi ito naka-save sa iyong model file.

## Mga bagong member

Anong profile at grade ang sinisimulan ng mga placing tool:

| Tool | US shapes (AISC), A992 | European shapes (EN), S355 |
|---|---|---|
| {{ui:Beam}} | W16x26, A992 | IPE300, S355 |
| {{ui:Column}} | W12x50, A992 | HEB200, S355 |
| {{ui:Brace}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plate}} | A36 | S355 |

Ang US shapes ang panimula. Gumagamit ang European na pagpili ng HEA160 para sa mga brace dahil wala pang hollow section ang EN catalog ng DetailCraft ([Katalogo ng profile](topic:profile-catalog)). Maaari ka pa ring pumili ng anumang profile at grade para sa susunod na piyesa sa panel na {{ui:Properties}} habang nakabukas ang isang placing tool. Pinananatili ng mga member na nasa model na ang sarili nilang profile at grade.

## Duplicate at paste

- **Offset (mm)**: x, y at z. Inilalagay ng {{ui:Duplicate}} ({{key:Mod+D}}) ang kopya nang ganito kalayo sa orihinal, at nagsisimula rito ang form na {{ui:I-paste ayon sa offset (mm, mula sa orihinal)}}. Nagsisimula ito sa 6000, 0, 0: isang 6 m na bay sa kahabaan ng mga numbered na grid. Itakda ito sa spacing ng iyong bay, o sa taas ng level sa z para kopyahin ang isang palapag pataas.
- **Kopyahin ang end plates at base plates kasama ng kanilang member** (naka-on sa simula): kasama ng kopya ang isang connection lamang kapag bawat member na dinudugtungan nito ay kinopya. Alisin ang tsek para kopyahin ang mga member at footing nang walang connection, halimbawa para subukan ang ibang connection sa kopya.

Tingnan ang [Kopyahin, i-paste at i-duplicate](topic:copy-paste).

## 3D view

**Ipakita ang bolt at anchor rod** (naka-on sa simula). Alisin ang tsek para itago ang mga ito sa view at makita ang mga butas at plato ng isang masikip na joint. Hindi na maki-click ang mga nakatagong bolt; i-click ang plato para piliin ang connection. Kasama pa rin sa bill of materials, mga drawing at bawat export ang bawat bolt at rod.

## Indicator sa sulok

Ang ipinapakita sa sulok ng 3D view: **View cube** (ang panimula; kanang itaas. I-click ang isang mukha, gilid o sulok para tumingin mula roon, i-drag ito para mag-orbit, i-drag ang compass ring nito para paikutin ang model), **Axis icon** (isang maliit na marker na X, Y, Z sa kaliwang ibaba na umiikot kasabay ng view: X pula, Y berde, Z asul) o **None**. Sa {{ui:3D}} lang; wala sa {{ui:Plano}} at {{ui:Elevation}} ang alinman. Tingnan ang [Ang view cube](topic:view-cube).

## I-reset

Ibinabalik ng {{ui:I-reset ang mga setting ng DetailCraft}} sa ibaba ng dialog ang mga ito sa panimula (US shapes, offset 6000, 0, 0, kinopya ang mga connection, ipinapakita ang mga bolt), kasama ang mga {{ui:Pangkalahatan}}.

## Mga drawing

**Laki ng sheet**: ang mga sheet drawing at shop drawing ay ginagawa sa landscape: A4, A3 (ang panimula), A2, A1, ANSI B, ANSI C o ANSI D. Pareho ang listahan sa mga window na {{ui:Mga Drawing}} at shop drawing. Tingnan ang [Mga general-arrangement at assembly drawing](topic:drawings).

## Rebar

- **ASTM bar names**: #3 hanggang #11, o ang soft-metric na #10 hanggang #36 para sa parehong bar.
- **Bending schedule shape codes**: ang S, L, U ng DetailCraft; mga uri ng ACI 315; o mga BS 8666 shape code. Tingnan ang [Sanggunian sa rebar](topic:rebar-reference).

## Pag-drag para pumili

**Rectangle** (gaya ng dati) o **Lasso**: isang freehand na linya, na may {{key:Space}} na nagpapalit sa pagitan ng loob, hinahawakan at fence habang nagdo-drag. Tingnan ang [Pumili gamit ang window](topic:select-and-change#select-with-a-window).
