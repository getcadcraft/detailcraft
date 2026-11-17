---
title: Pangkalahatang-ayos at assembly drawing
summary: Gumawa ng mga plano, elevation at isang assembly drawing bawat assembly mark mula sa model, sa mga A4 hanggang A1 o ANSI B hanggang D na sheet, i-issue ang mga ito kasama ang mga revision letter, at i-download bilang PDF, DWG o DXF.
keywords: nakatagong linya, pagtanggal ng nakatagong linya, dashed, revision cloud, cloud, revision triangle, anchor bolt plan, anchor rod, rod schedule, base plate schedule, setting out, issue, revision, rev, talahanayan ng revision, re-issue, log ng issue, transmittal, dwg, dxf, CAD file, i-export ang mga drawing, drawing, general arrangement, ga, plano, elevation, assembly drawing, laki ng sheet, laki ng papel, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, print, scale, title block, model ref
from: 709f8604
---

Piliin ang {{ui:Drawings}} sa pangkat na {{ui:Output}}. Ginagawa ng DetailCraft ang buong set mula sa model sa kasalukuyan nitong estado. Walang naka-save: baguhin ang model, buksan ulit ang {{ui:Drawings}}, at muling gagawin ang set.

## Ano ang nasa set

- **Mga plano**, isa bawat level na may laman, tinitingnan mula sa itaas.
- **Mga elevation**, isa bawat grid line na may mga member sa loob ng 1 m mula rito.
- **Ang anchor bolt plan**, kapag may base plate ang model: bawat base plate na nakikita mula sa itaas kasama ang column at mga anchor rod nito, ang mga grid na may dimensyon, isang typical detail ng bawat pattern ng rod (BP1, BP2 …) na may spacing ng rod at edge distance, at dalawang schedule: ang mga anchor rod ayon sa mark (R1, R2 …: dami, diameter, haba, projection sa ibabaw ng plato, embedment, grade) at ang mga base plate ayon sa grid (column, pattern, plato, rod, tuktok ng plato). Ang column na wala sa grid ay natutukoy sa pamamagitan ng mga coordinate nito.
- **Mga assembly drawing**, isa bawat assembly mark: front, top at end view, mga chained dimension papunta sa mga butas at gilid ng plato, ang listahan ng mga piyesa, mga maluwag na bolt at rod, at mga tala ng weld at butas. Ang bawat welded na plato ay may fillet weld symbol sa front view (AWS A2.4): tumuturo ang arrow sa joint, ang tatsulok sa ibaba ng reference line ay nangangahulugang panig ng arrow, ang numerong nasa kaliwa nito ay ang laki ng weld sa mm, at ang bilog kung saan nagtatagpo ang arrow at linya ay nangangahulugang all around.

**Mga nakatagong linya.** Inaalis ng mga plano at elevation ang mga linya ng isang piyesa kung saan ito tinatakpan ng isang piyesang buong nasa harap nito (isang beam na tinitingnan mula sa dulo, nasa likod ng column). Ginuguhitan ng mga assembly drawing ng dashed ang plato kung saan ito tinatakpan ng pangunahing piyesa: sa likod ng web sa front view (tiningnan mula sa −u side ng piyesa), at sa ilalim ng top flange sa top view. Ang mga piyesang nasa magkaparehong lalim, o nagsasapawan sa lalim, ay parehong ginuguhit nang buo.

Bawat sheet ay may title block na may numero ng drawing, scale, pangalan ng model, petsa, numero ng sheet kasama ang laki ng sheet, at ang model ref: isang code na gawa sa naka-save na model, para maitugma ang isang print sa model na pinanggalingan nito.

## Piliin ang laki ng sheet

Piliin ang laki sa listahan sa itaas ng window ng {{ui:Drawings}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) o {{ui:ANSI D}} (22 × 34 in). Landscape ang bawat sheet. Agad na muling ginagawa ang set sa bagong laki, at ang parehong laki ang ginagamit para sa shop drawing. Nasa [mga setting ng DetailCraft](topic:settings#drawings) rin ito, at naaalala ito ng browser na ito.

- Mas malaking sheet, mas malaki ang scale. Laging standard na scale ang mga scale (1:10, 1:20, 1:25, 1:50, 1:100 at iba pa).
- Pareho ang laki ng text sa bawat sheet, kaya nababasa ito kapag na-print.
- Sa maliit na sheet, ang mahaba at payat na assembly ay maaaring magkaroon ng mas malaking scale sa lalim nito kaysa sa haba nito. Ipinapakita ng pamagat ng view ang dalawang scale, at ang mga dimensyon ang nananaig.

## I-issue ang mga drawing at revision

Ang linya sa itaas ng preview ay nagsasabi kung nasaan ang ipinapakitang sheet: **Not issued yet**, **Rev B, issued … ; unchanged since**, o, sa pula, **Changed since rev B: needs re-issue**. Minamarkahan ng listahan ng sheet ang mga na-issue na sheet ng kanilang revision at ang mga kailangang i-re-issue.

- I-type kung para saan ang issue (nagsisimula ito sa "Issued for fabrication") at piliin ang {{ui:Issue this sheet}}, o ang {{ui:Issue changed sheets}} para sa bawat sheet na bago o nabago mula noong huling issue.
- Ang unang issue ng sheet ay revision A, saka B, C at iba pa (nilalaktawan ang I at O).
- Ipinapakita ng title block ang numero ng drawing kasama ang revision nito ("A-B1  rev B"), at may talahanayan ng revision sa tabi nito na naglilista ng pinakabagong issue: revision, petsa at paglalarawan. Sa maliit na sheet, ipinapakita nito ang kasya.
- Nagbabago ang sheet kapag nagbago ang iginuhit dito: isang gumalaw na member, bagong butas, o nirenumber na mark. Hindi ito binibilang ng petsa, bilang ng sheet, at mismong talahanayan ng revision. Ang pagbabago ng laki ng sheet ay nagbabago sa bawat sheet.
- Naka-save sa model file ang issue log, at isang undo step ang pag-issue. Dala ng [KISS file](topic:kiss-export) ang pinakabagong revision ng bawat drawing.

### Revision cloud

Mula sa ikalawang issue ng sheet pataas, ang bawat piyesa o footing na nagbago ay iginuguhit sa loob ng revision cloud na may revision triangle na may dalang letra.

- Habang nagbago ang sheet mula sa huling issue, ipinapakita ng mga cloud ang nagbago mula noon, kasama ang paparating na revision sa triangle (na-issue at nagbago ang rev B: sinasabi ng mga triangle na C).
- Kapag na-issue mo na ito, nananatili ang mga cloud sa sheet ng revision na iyon, tulad ng sa naka-print na set, hanggang magbago ulit ang sheet.
- Tanging mga pagbabagong ipinapakita ng bawat sheet ang nilalagyan ng cloud. Hindi gumuguhit ng mga butas o cope ang mga plano at elevation, kaya nilalagyan lang nila ng cloud ang member na gumalaw, iniikot o binago ang laki, o nagbago ang mark. Ang mga assembly drawing at ang anchor bolt plan ay naglalagay din ng cloud sa bago o gumalaw na mga butas at cope.
- Binibilang ang renumbered na mark: kapag ang isang pagbabago ay ginagawang bagong assembly ang isang beam, ang mga beam na tumaas ang mark (B1 papuntang B2) ay nilalagyan ng cloud sa mga plano at elevation.
- Ang piyesang binura ay walang maaaring lagyan ng cloud.
- Ang mga sheet na na-issue bago dumating ang revision cloud (DetailCraft 0.4) ay magsisimulang lagyan ng cloud mula sa susunod nilang issue.
- Nasa mga PDF, DXF at DWG download ang mga cloud, at hindi kailanman binibilang bilang pagbabago ang mga ito mismo.

## I-download

Piliin ang format sa listahan sa tabi ng mga button, saka piliin ang {{ui:This sheet}} para sa ipinapakitang sheet o ang {{ui:All sheets}} para sa buong set.

- **PDF**: para i-print o ipadala. Ang {{ui:All sheets}} ay gumagawa ng isang PDF, isang pahina bawat sheet, bawat pahina ay nasa piniling laki.
- **DWG**, sa format na 2018, 2013, 2010, 2007, 2004 o 2000: para buksan ang mga sheet sa isang CAD program. Pumili ng mas lumang format para sa mas lumang program.
- **DXF (R12)**: ang bersyong halos bawat CAD program ay nabubuksan.

Iginuguhit ang DWG o DXF sheet sa buong laki: isang drawing unit ay isang milimetro sa papel, kaya nagpi-print ito sa 1:1 at pinapanatili ng bawat view ang scale na nakasaad sa pamagat nito. Ang bawat panulat ay sarili nitong layer: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID at iba pa, kasama ang kapal ng linya nito (DWG) at mga dash nito. Ang mga salita ay text sa DetailCraft text style (Arial). Ang mga dimensyon ay ang mga linya at numerong nakikita mo, hindi mga dimension object. Inilalagay ng {{ui:All sheets}} ang mga DWG o DXF file sa isang zip, isang file bawat sheet.

:::note
Walang kapal ng linya at walang punô ang DXF R12: nananatili ang mga pangalan ng layer, kaya itakda ang mga panulat ayon sa layer kapag nagpa-plot ka, at hindi kasama ang mga punô na hugis (sinasabi ng status bar kung ilan ang mga ito).
:::

Mag-print sa 100% (walang "fit to page") sa papel na kaparehong laki kung gusto mong manatili ang mga nakasaad na scale.
