---
title: Shto vrima dhe shkurtime
summary: Shkruaj vrima në rrjete, flanxha dhe pllaka, dhe shkurto flanxhat në skajin e trarit, të matura nga skaji i prerë i pjesës.
keywords: vrimë, vrima, vrimë bulloni, shkurtim, shkurtime, prerje, shpim, vrimë rrjeti, vrimë flanxhe
from: 33d12398
---

Vrimat dhe shkurtimet shkruhen sipas pozicionit. Ato i përkasin elementit dhe lëvizin me të.

Vrimat e krijuara nga lidhjet (pllakat e skajit, pllakat bazë) shtohen për ty; ti nuk i shkruan ato. Ato listohen si "… vrima nga lidhjet (redakto lidhjen)".

## Nga matet pozicionet

- **x** shkon përgjatë pjesës nga **fillimi i prerjes**: skaji i fillimit pasi një lidhje e ka prerë. Kështu x = 0 është skaji real i çelikut, jo pika e rrjetit.
- **y** matet tërthor në fytyrë nga qendra e profilit:
   - te **trupi**: lart (pozitiv) ose poshtë nga mesi i thellësisë;
   - te një **flanxhë** ose një **pllakë**: tërthor në gjerësi, nga vija qendrore.
- Fillimi i elementit është pika e parë që klikove kur e vendose. Rreshtat {{ui:Skajet (x, y, z mm)}} tregojnë cili skaj është cili.

## Shto një vrimë

1. Zgjidh elementin.
2. Te kutia {{ui:Vrimat}} e panelit {{ui:Vetitë}}, zgjidh {{ui:Faqja}}: {{ui:Trupi}}, {{ui:Flanxha e sipërme}} ose {{ui:Flanxha e poshtme}} (për një profil I, kanal ose tub drejtkëndor), ose {{ui:Faqja e pllakës}} (për një pllakë).
3. Shkruaj {{ui:x përgjatë (mm)}}, {{ui:y tërthor (mm)}} dhe {{ui:Diametri (mm)}}. Formulari fillon me x 100, y 0, diametër 22.
4. Zgjidh {{ui:Shto vrimë}}.

Shiriti i statusit thotë "Vrima u shtua. x matet nga fillimi i prerjes; y nga qendra e profilit (trupi: lart, flanxha/pllaka: tërthor)." Vrima shfaqet në listë, dhe në pamje si një tapë e errët përmes fytyrës.

Për të hequr një vrimë, zgjidh × pranë saj në listë.

Këndet dhe tubat rrethorë nuk pranojnë ende vrima: kutia e tyre {{ui:Vrimat}} e thotë këtë.

:::note
Në pamjen 3D vrimat vizatohen si tapa të errëta, jo të prera përmes çelikut. Ato janë vrima reale në skedarët NC, vizatimet e punishteve dhe eksportin IFC.
:::

Një vrimë me x jashtë njërit nga skajet e pjesës shfaqet te skeda {{ui:Problemet}} si "një vrimë është jashtë skajit të pjesës".

## Shto një shkurtim

Shkurtimet janë për profile I: ato heqin flanxhën e sipërme ose të poshtme (dhe atë thellësi të trupit) në një skaj, që trari të lirohet nga një element tjetër.

1. Zgjidh një element me profil I.
2. Te kutia {{ui:Shkurtimet}}, zgjidh {{ui:Fundi}} ({{ui:Fillimi}} ose {{ui:Fundi}}) dhe {{ui:Ana}} ({{ui:Sipër}} ose {{ui:Poshtë}}).
3. Shkruaj {{ui:Gjatësia (mm)}} (përgjatë trarit nga ai skaj) dhe {{ui:Thellësia (mm)}} (poshtë nga lart, ose lart nga poshtë). Formulari fillon me 100 x 40.
4. Zgjidh {{ui:Shto shkurtim}}.

Pamja tregon shkurtimin e prerë nga çeliku. Lista thotë, për shembull, "Sipër te fillimi: 100 x 40". Hiqe me × të tij.

Shkurtimet janë kënddrejta: nuk ka ende rreze në qoshen e brendshme.

## Si ndikojnë vrimat dhe shkurtimet te shenjat

Dy pjesë marrin të njëjtën shenjë pjese vetëm nëse vrimat dhe shkurtimet e tyre përputhen brenda 1 mm, duke lejuar që pjesa të jetë e kthyer. Shtimi i një vrime në një tra të një grupi i jep atij një shenjë të re. Shih [Rregullat e shenjave](topic:mark-rules).
