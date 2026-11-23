---
title: Athuga suður þar sem stangir mætast
summary: Eftir hönnunarathugunina skaltu prófa hornsuður og stúfsuður allan hringinn í kringum hverja stöng þar sem hún mætir annarri stöng eða stuðningi, gegn AISC 360-16 kafla J eða EN 1993-1-8, og sjá hvaða suðuhópur er mest nýttur og við hvaða samsetningu. Hjálpartæki þar til verkfræðingur hefur yfirfarið það.
keywords: suða, suðuathugun, hornsuða, stúfsuða, full gegnumsuða, AISC 360, EN 1993-1-8, suðuhópur, nýting, nýtingarhlutfall, burðargeta, samskeyti, tenging, burðarvirki, verkfræðingur
from: e8eebbe6
---

Reiturinn {{ui:Weld checks}} í flipanum {{ui:Analysis}}, undir {{ui:Design checks}}, tekur kraftana úr síðasta leysta ramma og burðarsamsetningarnar sem þú bjóst til, og prófar suðuna allan hringinn í kringum hverja stöng á hverjum samskeytum: þar sem stöng mætir annarri stöng eða stendur á stuðningi.

:::warning
Þetta er **hjálpartæki þar til verkfræðingur hefur yfirfarið það**. Það athugar suðu sem er teiknuð allan hringinn um sniðið, sem einn hóp, út frá endakröftum rammans sjálfs. Það les ekki stærð né lengd þeirra suða sem þú teiknaðir í verkstæðisteikningunum, og athugar ekki bolta, plötur, legu, blokkskurð eða prying. Niðurstöður þess eru ekki stimpill.
:::

## Keyrðu hana

1. Leystu rammann í flipanum {{ui:Analysis}} og veldu {{ui:Design code}} í {{ui:Design checks}}, ýttu síðan á {{ui:Make combinations}} (suðuathugunin þarf sömu burðarsamsetningar).
2. Í {{ui:Weld checks}} stillirðu {{ui:Fillet leg (mm, 0 = the wall, at most 8)}}. 0 þýðir að fóturinn fylgir þynnri vegg sniðsins, upp í 8 mm. Samkvæmt AISC staðlinum er {{ui:Weld metal strength F_EXX (MPa)}} styrkur suðumálmsins (482,6 MPa er E70 rafskaut). Samkvæmt EN 1993 gefur stálgæðin styrk suðumálmsins og fylgnistuðulinn.
3. Ýttu á {{ui:Check welds}}.

Hver lína í töflunni er einn suðuhópur (endi samskeytis á stöng). Tölurnar eru **nýting** ráðandi athugunar hans, staðan (stenst eða fellur), og hvaða athugun og grein réði, undir hvaða samsetningu. Hópur sem athugunin getur ekki metið segir ástæðuna (ekkert stálgæði, enginn fylgnistuðull fyrir gæðin í EN 1993-1-8 töflu 4.1, engin suða á því sniði) í stað þess að sýna tölu.

Ef þú breytir fætinum eða suðumálminum, eða breytir líkaninu, hreinsast taflan: hún átti við gömlu gildin. Ýttu aftur á {{ui:Check welds}}.

## Hvað er athugað

- **ASCE 7 + AISC 360:** suðumálmur hornsuðu (horn álagsins að suðunni skiptir máli, J2.4), skurðrof grunnmálms (J4.2) og full gegnumsuða stúfsuða (tafla J2.5).
- **EN 1990 + EN 1993:** hornsuður eftir einfaldaðri aðferð EN 1993-1-8 4.5.3.3 og stúfsuður úr 4.7.1.
- Útfærsluviðvaranir gegn lágmarks- og hámarksfæti og lágmarkslengd, ásamt gildinu sem þau voru borin saman við.

Suðuhópurinn er meðhöndlaður sem línusnið og álagður með teygjanlegu vigraaðferðinni: sérhver hluti suðunnar tekur kraftinn frá ásálagi stangarinnar, báðum skurðkröftum, snúningi og báðum beygjuvægjum, lagt saman sem vigrar.

## Hvað er ekki athugað

Ekki smíðað: hálfgegnumsuður, skávaxnar hornsuður, tappa- og raufarsuður, slitróttar suður, aðferð augnabliksmiðju, stefnuaðferð EN, þreyta og blokkskurður grunnmálmsins. Sum fastagildi staðlanna voru skráð upp úr stöðlunum og hafa ekki enn verið borin saman við prentað eintak; skýrslan skráir hvaðan hver tala er komin ({{ui:Report (PDF)}} fær suðutöflurnar þegar þú hefur athugað). Sjá [Athuga stálstangir](topic:design-checks) og [Ekki smíðað enn](topic:not-built-yet).
