---
title: Lagyan ng reinforcement ang rectangular na concrete column
summary: Halimbawang hakbang-hakbang sa pagdedetalye ng rectangular na concrete column sa DetailCraft: ilagay ito, bigyan ng longitudinal na bar at tie, basahin ang mga check, ang lap sa itaas nito at ang mark ng bar, at iguhit ang shop sheet nito.
keywords: concrete column, rectangular column, column reinforcement, longitudinal bars, vertical bars, ties, hoops, cross-ties, lap splice, splice, starter bars, column steel ratio, 1 percent, 8 percent, tie spacing, ACI 318-19 25.7.2, EN 1992-1-1 9.5, shop drawing, bar marks, 8C1, 3C2
from: aee2a3ca
---

Tinatalakay ng paksang ito ang isang parisukat na column mula sa wala hanggang sa isang detalyeng sinuri, iginuhit at naka-iskedyul. Nasa [Detalyehin ang reinforced concrete](topic:reinforced-concrete) ang mga pangkalahatang tuntunin para sa beam, slab at wall; ito ang bahagi nito para sa column, kasama ang mga numerong maaari mong ulitin.

:::warning
Dinedetalye ng DetailCraft ang mga bar na ibibigay mo. Hindi nito dinidisenyo ang mga ito. Panimulang halaga lamang para sa halimbawa ang mga bar sa ibaba, hindi rekomendasyon: ang engineer of record ang pumipili ng sukat, bilang at spacing.
:::

## Ano ang column dito

May lapad (kasama ng lokal na x nito) at lalim sa kabila (kasama ng lokal na y nito) ang rectangular na column, may malinaw na cover hanggang sa tie, longitudinal na bar sa bawat mukha, at saradong tie. Kapag iniikot ito, iikot ang buo; nananatiling "width face" at "depth face" ang mga mukha.

- Ibinibigay ang longitudinal na bar bilang bilang sa width face at bilang sa depth face. Binibilang sa dalawa ang corner bar, kaya ang 3 at 3 ay gumagawa ng 8 bar; ang 4 at 4 ay gumagawa ng 12.
- Ang tie ay saradong rectangle na may dalawang hook sa isang sulok, 135° o 90°. Ang unang tie ay nasa takdang distansya sa itaas ng sahig (at sa ibaba ng susunod), mas malapit ang spacing sa end zone, mas malawak sa gitna.
- Ang gagawin ng mga bar sa itaas: magpapatuloy at mag-lap sa mga bar sa itaas, papasok na may 90° hook sa sahig, o hihinto sa ilalim ng tuktok.

## Ang halimbawang column

Column na 400 × 400 mm, 3600 mm sa pagitan ng sahig sa itaas at sahig sa ibaba, longitudinal na bar na #8, tie na #3, 40 mm na malinaw na cover, f'c 28 MPa, fy 420 MPa, ACI 318-19, interior.

1. Buksan ang {{ui:Kongkreto}} tab at i-set up ang mga linya ng grid at mga level na kinatatayuan ng column (kaliwang panel).
2. Sa {{ui:Idagdag ayon sa grid}}, piliin ang {{ui:Concrete column}}, piliin ang intersection ng grid at ang dalawang level, itakda ang {{ui:Lapad (mm)}} at {{ui:Lalim sa kabila (mm)}} sa 400 at piliin ang {{ui:Idagdag}}.
3. Sa {{ui:Properties}} panel, itakda:
   - {{ui:Malinaw na cover (mm)}} 40;
   - {{ui:Longitudinal bars}} #8, {{ui:Bar sa mukha ng lapad}} 3, {{ui:Bar sa mukha ng lalim}} 3;
   - {{ui:Ties}} #3, {{ui:Mga hook}} 135°, {{ui:Spacing sa pagitan (mm)}} 300, {{ui:Haba ng end zone (mm)}} 600, {{ui:Spacing sa end zones (mm)}} 150, {{ui:Una mula sa mukha (mm)}} 50;
   - {{ui:Mga bar sa tuktok}} {{ui:Dumaan at mag-lap sa mga bar sa itaas}}.

Ang bawat pagbabago ay isang hakbang ng undo.

### Ang makukuha mo

| Piyesa | Resulta |
|---|---|
| Longitudinal bar | 8 bar #8 (singsing na 3 × 3), bawat isa ay 4375 mm ang haba: ang 3600 mm na column kasama ang 775 mm na lap sa itaas nito |
| Lap | Kailangan ang 757 mm para sa compression lap (ACI 318-19 25.5.5.1, fy 420), 775 mm ang ibinigay: ang kailangan ay pinataas sa susunod na 25 mm |
| Tie | 17 tie #3, bawat isa ay may putol na haba na humigit-kumulang 1359 mm, may spacing na 150 mm sa dalawang 600 mm na end zone at 300 mm sa pagitan |
| Steel ratio | 2.5 % ng gross section (limitasyon 1 % hanggang 8 %, ACI 318-19 10.6.1.1) |
| Malinaw na spacing ng mga bar | 112 mm (kailangan ng hindi bababa sa 40 mm, ACI 318-19 25.2.3) |
| Spacing ng tie | 300 mm (pinapayagan ang 400 mm: ang pinakamaliit sa 16 na diameter ng bar, 48 na diameter ng tie at ang mas maliit na gilid, ACI 318-19 25.7.2.1) |
| Sukat ng tie | #3 (pinapayagan hanggang 9.5 mm, ACI 318-19 25.7.2.2) |

Nasa listahan ng {{ui:Mga check}} ng elemento ang lahat ng ito; nasa {{ui:Laps at anchorage}} din ang lap.

## Cross-tie

Sa isang perimeter tie lang, ang mga corner bar lamang ang nakakapit. Pinapayagan ng ACI 318-19 25.7.2.3 na walang suporta ang gitnang bar sa isang mukha kung nasa loob ito ng 150 mm na malinaw mula sa corner bar. Sa 3 bar sa isang mukha, gaya ng nasa itaas, natutugunan ito. Sa 4 o higit pang bar sa isang mukha, hindi ito natutugunan, at sinasabi ito ng DetailCraft bilang babala ({{ui:Mga check}} at Mga problema): kailangan ng "cross-tie". **Hindi pa iginuguhit ang cross-tie**: idagdag ang mga ito sa drawing nang manu-mano, o pumili ng mas kaunting bar sa mukha.

Para sa EN 1992-1-1, sinusuri ng DetailCraft ang sukat ng bar (hindi bababa sa 8 mm), bilang ng bar (hindi bababa sa 4), lawak ng steel (0.2 % hanggang 4 % ng seksyon), malinaw na spacing at spacing ng link (9.5.2 at 9.5.3).

## Ang lap, ang footing at ang column sa ibaba

- Kapag **may footing ng model na nasa ilalim ng column**, nag-la-lap ang column sa starter bar ng footing, at sinusuri rin ang lap nila.
- Kapag **may ibang column ng model na nasa ilalim nito**, nag-la-lap ito sa mga bar ng column na iyon.
- Magbigay ng sarili mong {{ui:Haba ng lap (mm, 0 = ayon sa kailangan)}} para i-override; ang mas maikli sa kailangan ay problema at may markang * sa table.
- Ang compression lap ang ginagamit bilang default ({{ui:Compression lap}} sa mga setting); piliin ang {{ui:Tension lap}} kapag maaaring nasa tension ang column.

## Mark, iskedyul at shop sheet

Iisang mark ang pinagsasaluhan ng magkakatulad na bar: ang longitudinal na bar ng column sa itaas ay 8C1, ang tie nito ay 17C2 (ang bilang muna, saka ang letra ng uri na C para sa column at ang tumatakbong numero). Lumilitaw ang mga ito sa tab na {{ui:Bending schedule}}, kasama ang putol na haba at bigat, at sa CSV mula sa {{ui:Output}} › {{ui:Higit pa}} › {{ui:Bending}}.

Piliin ang {{ui:Shop drawing}} sa tabi ng column para sa sheet na may column sa elevation (bawat bar, mark nito, tie zone at lap na may dimensyon) at seksyon sa gitna, kasunod ang bar-bending sheet. I-save ang {{ui:Ang sheet na ito bilang PDF}}.

## Ang hindi nito ginagawa

- Bilog na column at spiral, at column na hindi rectangular: hindi pa nagagawa.
- Corner at cross-tie sa loob ng seksyon, at seismic detailing (ACI 318-19 chapter 18): hindi pa nagagawa.
- Mga splice sa posisyong pipiliin mo, o staggered: sabay-sabay na nag-la-lap ang lahat ng bar sa iisang seksyon.
- Kung sapat ba ang mga bar para sa load: disenyo iyon ng engineer.
