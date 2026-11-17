---
title: Steel stair generator
summary: Steel stair mula sa taas ng palapag-hanggang-palapag, run at lapad: ang rise at going ayon sa rule set na pipiliin mo, landing, rail at baluster, shop drawing at cut list na may timbang.
keywords: steel stair, stair generator, stringer, tread, chequer plate, grating, folded pan, landing, handrail, balusters, rise, going, osha, ibc, approved document k, cut list, timbang, shop drawing
from: a4f0a985
---

Ginagawa ng stair generator ang buong steel stair mula sa ilang numero: ang mga stringer, ang mga tread, landing kapag masyadong mataas ang flight, handrail na may post at baluster, ang mga butas ng pagkakabit sa mga stringer, cut list na may timbang, at ang shop drawing. Nagsisimula ito sa tool na {{ui:Stair}}, gaya ng payak na stair (tingnan ang Stairs), na may isang switch na dinagdag.

## Maglagay ng steel stair

1. Piliin ang {{ui:Stair}} sa grupong {{ui:Ilagay}}, o pindutin ang {{key:S}}.
2. Sa kanan, lagyan ng tsek ang {{ui:Gamitin ang steel stair generator}}.
3. Piliin ang **rule set** para sa lugar kung saan itatayo ang stair, ang **rise** (floor hanggang floor; 0 = hanggang sa susunod na level), ang **run available** (0 = hayaang magpasya ang panuntunan), ang **malinaw na lapad** at ang **uri ng tread**: chequer plate, grating o folded plate pan.
4. Itakda ang seksyon ng stringer, ang mga landing (ayon sa panuntunan, o isang numero), ang handrail (magkabilang gilid, isa, o wala), ang taas ng rail at ang puwang ng baluster.
5. I-click ang intersection ng grid: iyon ang paanan ng unang riser.

Piliin ang stair (i-click ang stringer, tread o rail) para baguhin ang anumang setting; ipinapakita ng properties ang mga riser, going, pitch, flight at landing, ang steel dito, ang cut list, at ang mga pinagmulan ng rule set.

## Mga rule set

Nililimitahan ng rule set ang hugis ng stair: ang rise at going, 2 × riser + going, ang pitch, ang landing, ang taas ng rail at ang pinakamalaking bukana. Nag-aalok ang DetailCraft ng mga nasa ibaba; setting ang rehiyon, hindi hula. Buksan ang **Saan galing ang mga numero ng rule set na ito** sa properties: pinangalanan ng bawat numero ang pinagmulan nito at sinasabi kung gaano ito nasuri.

- **International Building Code 2021**: riser 4 hanggang 7 in., tread na hindi bababa sa 11 in., rail 34 hanggang 38 in. Ang 12 ft na limitasyon sa pagitan ng landing ay ipinapakita bilang *hindi nabasa*, at ang mga numero ng rail bilang nabasa sa mga handout na nagsisipi ng code: kumpirmahin ang mga ito bago umasa sa mga ito.
- **OSHA 29 CFR 1910.25 at 1910.29** (industrial na standard na stair): 30° hanggang 50°, riser na hanggang 9.5 in., tread na hindi bababa sa 9.5 in., hindi bababa sa 22 in. ang lapad, landing na kasing lapad ng stair at 30 in. ang lalim, at isang top rail na ginagamit bilang handrail na 36 hanggang 38 in. Nabasa ang mga ito mismo sa regulasyon.
- **Approved Document K 2013, England** (pangkalahatang access at utility stair): ang mga saklaw ng rise at going at 2 × riser + going na 550 hanggang 700 mm, nabasa sa ulat ng gobyerno na naglilista ng mga ito. Hindi nagbibigay ang dokumento ng taas ng rail sa DetailCraft, kaya ginagamit ang taas na itinakda mo at sinasabi ito ng listahan ng Mga problema.

Hindi hinuhulaan ang rule set na wala rito: ang stair ay sumusunod sa payak na comfort rule na 600 hanggang 650 mm at sinasabing wala itong rule.

## Ano ang kinakalkula nito

- **Riser at going.** Ang pinakakaunting riser na ang 2 × riser + going ay nasa gitna ng saklaw ng rule, nang hindi bumababa ang going sa pinakamababa ng rule. Kapag ibinigay ang run, ang going ay ang run na hinati sa mga tread, at anumang nasa labas ng rule ay sinasabi.
- **Flight at landing.** Ang flight na mas mataas sa pinapayagan ng rule ay hinahati ng landing na kasing lapad ng stair at hindi kukulangin sa pinakamababa ng rule; maaari ka ring humiling ng landing. Ang landing ay frame ng dalawang side beam at dalawang cross angle sa ilalim ng takip, nakapatong sa dalawang post.
- **Tread.** Ang chequer plate ay welded na plato (6 mm bilang default; hindi idinadagdag sa timbang ang pattern). Ang folded plate pan ay may return sa nosing at nakakabit sa web ng stringer gamit ang bolt: dalawang butas na 2 mm mas malaki kaysa sa bolt sa 0.3 at 0.7 ng lalim. Iginuguhit ang grating bilang plato na magkapareho ang timbang (lalim ng bearing bar × kapal ÷ pitch); hindi binibilang ang mga cross bar at banding, at sinasabi ito ng cut list.
- **Rail.** Pipe na top rail sa mga post sa kahabaan ng bawat flight at bawat landing, at puwang ng baluster na walang sphere na mas malaki sa bukana ng rule ang makakalusot (100 mm sa pinakamataas bilang default).

## Mga drawing, cut list, export

- Isang assembly ang flight; isa pang assembly ang mga rail (magkapareho ang dalawang gilid, ginawa nang dalawang beses). May kanya-kanyang assembly drawing ang bawat isa, at ipinapakita ng drawing ng stringer ang mga butas nito.
- Ipinapakita ng **stair sheet** (ST-…) ang tuwid na stringer ng bawat flight na may nakasulat na istasyon ng butas mula sa mas mababang dulo, at ang detalye ng tread: seksyon, nosing, return at ang end flange na may mga butas nito.
- Inililista ng {{ui:Cut list at timbang}} sa properties ang bawat seksyon at haba kasama ang mga dami at kilogramo; sine-save ito ng {{ui:I-download ang cut list (CSV)}}.
- Lahat ay napupunta sa bill of materials, NC file at IFC bilang karaniwang part (IfcMember, IfcColumn, IfcPlate).

## Mabuting malaman

- Ito ay panimulang punto, hindi design. Walang sinusuri para sa lakas o deflection; nililimitahan lamang ng rule set ang hugis.
- Ang mga dulo ng stringer laban sa mga palapag ay pinuputol nang patayo at hindi dinedetalye; ang landing post ay nakatayo sa palapag sa ibaba at walang base plate.
- Hindi pa naka-wire ang paglalagay ng stair bilang isang elemento sa BimCraft.
