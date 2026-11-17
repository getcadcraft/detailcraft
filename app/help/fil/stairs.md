---
title: Mga stair
summary: Maglagay ng tuwid na steel stair mula sa rise, going at lapad nito: dalawang stringer at tread plate, isang welded na assembly.
keywords: stair, stairs, staircase, stringer, tread, riser, going, nosing, flight, steel stair, ibc 1011, blondel
from: 62fa3845
---

Isang tuwid na steel stair: dalawang stringer (channel na nakaharap ang dulo papasok, o flat bar na nakatayo sa gilid) at plate tread sa bawat hakbang, na dinikitan sa pagitan nila. Kinakalkula ng DetailCraft ang bilang ng riser mula sa rise, sinusuri ang mga ito laban sa limitasyon ng building code, at ginagawang iisang shop assembly ang stair.

## Maglagay ng stair

1. Piliin ang {{ui:Stair}} sa grupong {{ui:Ilagay}}, o pindutin ang {{key:S}}.
2. Itakda ang stair sa kanan: ang **direksyon ng pag-akyat** (0° umaakyat sa +x, 90° sa +y), ang **rise** (0 = hanggang sa susunod na level), ang **going**, ang **malinaw na lapad** sa pagitan ng mga stringer, ang **pinakamataas na riser na pinapayagan**, ang **stringer**, ang **kapal ng tread plate**, ang **nosing** at ang materyal.
3. I-click ang intersection ng grid: iyon ang paanan ng unang riser, sa center line ng stair.

Sinasabi ng status bar kung ilang riser ang nagawa. Piliin ang stair (i-click ang stringer o tread) para baguhin ang alinman sa mga setting nito, posisyon o phase; ipinapakita rin ng properties ang mga riser, tread, run, pitch at 2 × riser + going.

## Ano ang kinakalkula ng DetailCraft

- **Riser.** Ang pinakakaunting bilang na nagpapanatili sa bawat riser na mas mababa o katumbas ng pinakamataas na pinapayagan: ang rise na 3000 mm sa 178 mm o mas mababa ay nagbibigay ng 17 riser na 176.5 mm. Isang tread na mas kaunti kaysa sa riser (ang itaas na palapag ang huling hakbang).
- **Tread.** Isang plato na going + nosing ang lalim (280 + 25 = PL6x305 bilang default) at kasing haba ng malinaw na lapad, ang itaas nito sa bawat taas ng riser, ang harap na gilid nito (ang nosing) nasa unahan ng linya ng riser.
- **Stringer.** Sa pitch ng stair, mula sa kung saan sila nagtatagpo sa mas mababang palapag hanggang kung saan sila nagtatagpo sa itaas na palapag, sa labas lang ng malinaw na lapad, at ang itaas na gilid nila ay 50 mm sa itaas ng linya ng mga nosing. Nakaharap papasok sa stair ang mga dulo ng channel; ang flat bar gaya ng PL12x250 ay nakatayo sa gilid nito.
- **Weld.** Bawat tread sa parehong stringer. Ang mga tread at ang kanang stringer ay dinidikitan sa kaliwang stringer, kaya nakakakuha ang stair ng isang assembly mark (ST1) at sarili nitong assembly drawing; ang mga stringer ay nakakakuha ng part mark na st…, ang mga tread ay p….
- **Checks.** Mga babala kapag nasa labas ng 4 hanggang 7 in. (102 hanggang 178 mm) ang isang riser, o mas mababa sa 11 in. (279 mm) ang going: ang mga limitasyon ng IBC 2021 section 1011.5.2. Babala rin kapag nasa labas ng 600 hanggang 650 mm ang 2 × riser + going (karaniwang tuntunin sa ginhawa), at kapag masyadong mababaw ang stringer para dalhin ang mga tread. Ang hindi kilalang profile ng stringer ay pumipigil sa paggawa ng stair.

## Mabuting malaman

- Gumagana ang move, rotate, mirror, copy, paste, delete at phases sa stair gaya ng sa member. Iniikot ng rotation ang pag-akyat; ipinapadala ng mirror ito sa kabaligtarang direksyon.
- Ini-export ang mga stringer sa IFC bilang IfcMember at ang mga tread bilang IfcPlate; pareho silang napupunta sa NC file at bill of materials. Iniiwan ng clash check ang sariling part ng stair (magkakadikit silang dinikitan).
- Ang payak na stair na ito ay isang flight na may plate tread. Para sa mga landing, handrail na may baluster, folded-pan o grating tread, rule set na pipiliin mo, cut list at mga guhit ng butas ng stringer, lagyan ng tsek ang {{ui:Gamitin ang steel stair generator}} sa tool na Stair (tingnan ang Steel stair generator).
- Pinuputol nang patayo ang mga stringer: hindi ginagawa ang mga dulong putol nila laban sa mga palapag.
- Hindi dinidisenyo ng DetailCraft ang stair: hindi sinusuri ang lakas o deflection ng mga stringer at tread.
