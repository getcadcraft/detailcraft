---
title: Gumawa ng shop drawing
summary: Isang sheet bawat part mark, sabay-sabay na ginawa: i-preview ang alinman sa mga ito at i-download ang isang sheet o ang buong set bilang PDF sa A4 hanggang A1 o ANSI B hanggang D, may mga butas, copes, dimensyon at title block.
keywords: shop drawing, shop drawings, lahat ng part, batch, buong set, drawing ng isang part, fabrication drawing, pdf, detail drawing, piece drawing, print
from: d25fe035
---

Gumagawa ang DetailCraft ng isang sheet bawat part mark, para sa bawat biga, column, brace at plato sa model, sabay-sabay: hindi mo kailangang piliin ang bawat isa. Nagbabahagi ng sheet ang magkakaparehong piraso dahil nagbabahagi sila ng mark. Ginagawa ang mga sheet sa mismong sandali mula sa model; hindi sila naka-store o ine-edit.

## Gumawa ng buong set

1. Piliin ang {{ui:Shop drawing}} sa grupong {{ui:Output}}. Hindi kailangang may napili. Kapag may napiling part, bubukas ang window sa sheet ng part na iyon. Sa panel na {{ui:Properties}}, ang parehong button ay tinatawag na {{ui:Shop drawing}} para sa mga member at {{ui:Drawing ng plato}} para sa mga connection.
2. Magbubukas ang preview, may titulong part mark, halimbawa "Shop drawing b1". Ang unang listahan sa tabi ng titulo ay naglalaman ng bawat part mark kasama ang profile, haba at dami nito: piliin ang isa para makita ang sheet nito. Binabago ng ikalawang listahan ang laki ng sheet; muling ginagawa ang buong set dito (tingnan ang [Mga general arrangement at assembly drawing](topic:drawings#choose-the-sheet-size)).
3. Piliin ang {{ui:I-download lahat}} (ipinapakita ng button ang bilang ng sheet) para sa iisang PDF na may isang pahina bawat part mark, `<name> Shop drawings.pdf`. Sinasabi ng bawat sheet na "Sheet 3 ng 42" sa title block nito. O piliin ang {{ui:I-download ang PDF}} para sa tinitingnan mo, `<name> <mark>.pdf`.
4. Isara ang preview gamit ang × o {{key:Esc}}.

Kung naka-grey out ang {{ui:Shop drawing}}, wala pang part ang model.

## Ano ang nasa sheet

Para sa I-shape:

- **Elevation**, tinitingnan ang web: ang part na may mga cope na nakaukit, mga butas sa web bilang bilog at mga butas sa flange bilang nakatagong (dashed) na linya.
- **Top flange plan**, tiningnan mula sa itaas, kapag may butas ang alinmang flange. Ang mga butas sa bottom flange ay dashed.
- **Section** sa kabuuan ng profile.
- **Dimensyon:** magkakasunod na posisyon ng butas sa kahabaan ng part kasama ang kabuuang haba, taas ng butas sa web, gauge, at sukat ng cope.
- **Listahan ng butas:** bawat pangkat ng butas, halimbawa "8 x Ø22 sa top flange".
- **Weld**, kapag may mga plato na dinikitan sa part.
- **Title block:** part mark, assembly mark, profile, materyal, haba, bilang at timbang bawat isa at kabuuan, pangalan ng model at petsa.

Para sa channel, angle o hollow section, pareho ang sheet, tinitingnan ang web o gilid: ang mga wall ng tube ay nakatagong (dashed) na linya, at ipinapakita ng section ang kapal ng wall.

Para sa plato: ang mukha ng plato na may mga butas nito, at ang gilid nito bilang section.

## Mga scale

Pinipili ang scale mula sa listahan (1:1 hanggang 1:200) para kasya ang part sa sheet. Hindi mabasa sa iisang scale ang mahaba at mababaw na part, kaya kapag lalabas na mas mababa sa 30 mm sa papel ang lalim, iginuguhit ang lalim sa mas malaking scale kaysa sa haba. Sinasabi ito ng titulo ng view, halimbawa "length 1:20, depth 1:5 (hindi iisang scale; ang dimensyon ang masusunod)". Laging basahin ang mga sukat mula sa dimensyon, hindi sa pagsukat sa sheet.

## Mga dapat malaman

- Ang quantity ay bilang ng mga part na may ganoong mark sa model. Maaaring mag-renumber ang mga mark pagkatapos ng pagbabago; tingnan ang [Suriin ang mga marka at ang bill of materials](topic:marks-and-bom).
- Bawat sheet ay iisang part sa sarili nito, walang weld symbol; ang assembly drawing (na may weld symbol) at general arrangement drawing ay nasa [Mga drawing](topic:drawings). Hindi maaaring i-edit o lagyan ng anotasyon ang sheet sa DetailCraft. Para markahan ito, buksan ang PDF sa PDF markup app gaya ng MarkupCraft.
- Sinasabi ng title block na "DetailCraft lab build — millimeters".
- Gumagamit ang teksto ng karaniwang PDF Helvetica font. Ang mga karakter sa labas ng Western European set ay nilalabas bilang "?", at binibilang ito ng status bar.

## I-print ito

Buksan ang na-download na PDF sa iyong PDF viewer at i-print sa 100% (walang "fit to page") sa papel ng sukat na pinili mo kung gusto mong manatiling tama ang nakasaad na scale. Sa mas maliit na sheet, i-scale ito at umasa sa mga dimensyon.
