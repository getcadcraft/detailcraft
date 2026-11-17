---
title: Panele skeleti prej druri dhe çeliku të lehtë
summary: Vendos panele muresh, dyshemesh dhe çatish prej druri ose çeliku të lehtë, me çdo pjesë, listë prerjesh, vizatim pune dhe materialin për blerje.
keywords: skelet, skeleti, dru, dru i prerë, çelik i lehtë, i formuar në të ftohtë, stud, trar dyshemeje, mbajtës çatie, architrav, stud mbret, stud xhaki, pjesë e shkurtër, listë prerjesh, vizatim pune, panel
from: 3e38ffb9
---

Skeda {{ui:Skeleti}} krijon skeletin e paneleve që përshkruan dhe jep atë që kërkon një ekip skeleti dhe një depo druri. Panelet ruhen në skedarin e modelit.

:::warning
Përmasat, distanca dhe architravet janë të tuat. DetailCraft nuk kontrollon nëse një stud me atë distancë mban atë mur ose nëse një architrav kalon atë hapje: kjo është për tabelat e kodit tënd dhe për inxhinierin.
:::

## Shto një panel

Zgjidh {{ui:Shto një mur}}, {{ui:Shto një dysheme}} ose {{ui:Shto një çati}}, pastaj plotëso përmasat në milimetra, materialin (dru ose çelik i lehtë) dhe madhësinë e elementit. Përmasat e drurit janë emrat nominalë me përmasat e tyre të rrafshuara (2×4 është 38 × 89 mm). Studat prej çeliku emërtohen sipas thellësisë dhe trashësisë, për shembull `C92-1.2`.

## Muret

Një mur ka një pllakë të poshtme, një ose më shumë pllaka të sipërme (një shinë për çelikun), stud skaji, stud sipas distancës që jep, dhe për çdo hapje: dy stud mbretër, dy stud xhaki, një architrav me madhësinë dhe shtresat që zgjedh, dhe pjesë të shkurtra mbi architravin (dhe nën parapetin e një dritareje). Jep për çdo hapje distancën e saj nga skaji i majtë, gjerësinë e saj, dhe pjesën e sipërme dhe të poshtme të hapjes së papërfunduar, të matura nga nënshtresa e dyshemesë; një derë ka fund 0.

## Dyshemetë dhe çatitë

Një dysheme ka trarë dyshemeje që shtrihen në gjerësinë e saj, përgjatë hapësirës, trarë skaji në të dy skajet dhe, nëse e shënon, blloqe të ndërmjetme në mes të hapësirës. Një panel çatie është një fronton: një palë mbajtësish çatie me distancën që jep (gjatësia e tyre përfshin prollën e strehës përgjatë pjerrësisë) dhe një trarë kulmi.

## Çfarë merr

Çdo panel shfaq pjesët e tij në një vizatim në shkallë, me çdo pjesë të shënuar, një listë prerjesh sipas shenjës dhe një total. Tabela {{ui:Stoku për blerje}} vendos të gjitha prerjet e paneleve në gjatësi stoku, gjatësinë më të shkurtër që i përmban prerjet e çdo shiriti. {{ui:Ruaj vizatimin e punishteje (SVG)}} shkruan vizatimin; butoni {{ui:CSV}} shkruan çdo listë prerjesh dhe listën e stokut.

## Vendos një panel në model

Nën çdo panel, jep ku shkon (x, y, z në milimetra dhe këndi) dhe shtyp {{ui:Vendos si elemente}}: çdo pjesë bëhet një element i modelit, me profilin e rrafshuar të madhësisë së saj dhe peshën e materialit (rreth 500 kg/m³ për drurin, çelikun për studat). Një mur shtrihet përgjatë këndit nga skaji i tij i poshtëm i majtë me fundin te z; trarët e dyshemesë shtrihen me pjesën e poshtme në z; ballina e frontonit të çatisë shtrihet përgjatë këndit me z në majën e pllakave të murit. Çdo shtresë architravi është një element pranë tjetrit. Shtypja e saj përsëri zëvendëson elementët e vendosur më parë, dhe {{ui:Hiq elementët e vendosur}} i heq; çdo veprim është një hap zhbërjeje. Analiza i lë jashtë këta elementë: ata nuk janë elemente skeleti çeliku.

## Fletë PDF

{{ui:Fletë PDF}} ruan një faqe A3 për çdo panel: paneli në shkallë me çdo pjesë të shënuar, përmasat e përgjithshme, listën e prerjeve dhe një shirit titulli.

Problemet në panelin {{ui:Problemet}}: një hapje shumë afër skajit të murit ose një tjetre, një architrav që nuk futet nën pllakat e sipërme, një pjesë më e gjatë se stoku më i gjatë.

Paneli {{ui:Problemet}} liston gjithashtu **Ndërfaqet (LOD 350)** për panelet e murit dhe muret e betonit: një hapje që kalon skajin ose majën e murit të saj, dy hapje që mbivendosen, dhe një hapje muri betoni më e gjerë se 1000 mm pa shufër përforcuese për hapjen. Janë këshilla, të njëjtat rregulla që ekzekuton auditimi i BimCraft; gjerësia është vlera fillestare e CadCraft, jo një standard.
