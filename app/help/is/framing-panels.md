---
title: Timbur- og léttstálsgrindareiningar
summary: Rammið veggi, gólf og þök úr timbri eða léttstáli, með hverju stykki, skurðarlista, verkstæðisteikningu og lagerinn sem þarf að kaupa.
keywords: grind, timbur, viður, léttstál, kaldmótað, stoð, gólfbiti, sperra, yfirbiti, aðalstoð, tjakkstoð, stutt stoð, skurðarlisti, verkstæðisteikning, eining
from: 3e38ffb9
---

Flipinn {{ui:Rammi}} rammar einingar sem þú lýsir og gefur þér það sem grindarflokkur og timburverslun biðja um. Einingarnar eru vistaðar í líkanaskránni.

:::warning
Stærðirnar, bilið og yfirbitarnir eru þín mál. DetailCraft athugar ekki hvort stoð með því bili beri þann vegg eða hvort yfirbiti spanni þá op: það er mál fyrir töflur byggingarreglugerðarinnar þinnar og verkfræðinginn.
:::

## Bættu við einingu

Veldu {{ui:Bæta við vegg}}, {{ui:Bæta við gólfi}} eða {{ui:Bæta við þaki}}, fylltu svo inn málin í millimetrum, efnið (timbur eða léttstál) og stærð stykkjanna. Stærðir timburs eru nafnheitin með hefluðum málum sínum (2×4 er 38 × 89 mm). Léttstálsstoðir eru nefndar eftir dýpt og þykkt, til dæmis `C92-1.2`.

## Veggir

Veggur hefur neðri plötu, eina eða fleiri efri plötur (eitt spor fyrir stál), endastoðir, stoðir með því bili sem þú gefur, og fyrir hvert op: tvær aðalstoðir, tvær tjakkstoðir, yfirbita af þeirri stærð og lögum sem þú velur, og stuttar stoðir yfir yfirbitanum (og undir sillu glugga). Gefðu hverju opi fjarlægð sína frá vinstri enda, breidd þess, og efri og neðri brún grófa opsins mælda frá undirgólfinu; hurð hefur neðri brún 0.

## Gólf og þök

Gólf hefur gólfbita þvert yfir breidd sína eftir spönninni, kantbita við báða enda og, ef þú hakar við það, millibita á miðri spönn. Þakeining er gaflþak: par af sperrum með því bili sem þú gefur (lengd þeirra nær yfir þakskeggið meðfram hallanum) og mænisbretti.

## Það sem þú færð

Hver eining sýnir stykki sín á teikningu í réttum hlutföllum með merktu hverju stykki, skurðarlista eftir merki og heildartölu. Taflan {{ui:Lager til kaups}} raðar öllum skurðum eininganna í lagerlengdir, þeirri stystu sem rúmar skurði hvers stangar. {{ui:Vista verkstæðisteikningu (SVG)}} skrifar teikninguna; hnappurinn {{ui:CSV}} skrifar alla skurðarlista og lagerlistann.

## Settu eininguna inn í líkanið

Undir hverri einingu gefurðu upp hvar hún fer (x, y, z í millimetrum og hornið) og ýtir á {{ui:Setja inn sem stangir}}: hvert stykki verður að stöng í líkaninu, með hefluðu sniði af sinni stærð og þyngd efnisins (um 500 kg/m³ fyrir timburið, stál fyrir stoðirnar). Veggur liggur eftir horninu frá neðri vinstri enda sínum með neðri brún í z; gólfbitar liggja með undirhlið sína í z; hliðarmynd gaflþaks liggur eftir horninu með z í efri brún veggplatnanna. Hvert lag yfirbitans er stöng við hlið annarrar. Ef ýtt er aftur koma nýju stangirnar í stað þeirra sem áður voru settar inn, og {{ui:Fjarlægja innsettar stangir}} tekur þær út; hver aðgerð er eitt skref í afturköllun. Greiningin sleppir þessum stöngum: þær eru ekki stálrammastangir.

## PDF-blöð

{{ui:PDF-blöð}} vistar eina A3-síðu fyrir hverja einingu: eininguna í réttum hlutföllum með merktu hverju stykki, heildarmálin, skurðarlistann og titilræmu.

Vandamál í glugganum {{ui:Vandamál}}: op sem er of nálægt enda veggjar eða öðru opi, yfirbiti sem passar ekki undir efri plötunum, stykki lengra en lengsti lager.

Í glugganum {{ui:Vandamál}} eru einnig **Snertifletir (LOD 350)** fyrir veggeiningar og steinsteypta veggi: op sem nær út fyrir enda eða efri brún veggsins, tvö op sem skarast, og op í steinsteyptum vegg breiðara en 1000 mm án styrkingarstangar við opið. Þetta eru ráðleggingar, sömu reglur og BimCraft-úttektin keyrir; breiddin er upphafsgildi CadCraft, ekki staðall.
