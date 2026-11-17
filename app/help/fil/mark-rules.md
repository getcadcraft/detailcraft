---
title: Mga patakaran sa marka
summary: Eksaktong kailan nagbabahagi ng marka ang dalawang parte o dalawang assembly, paano nunumerohan ang mga marka, at paano gumagana ang mga marka ng footing at bar.
keywords: marka, pagnunumero, numbering, part mark, assembly mark, piece mark, prefix, tolerance, magkakaparehong parte, bar marks, footing marks
from: ce02c98e
---

Muling kinakalkula ng DetailCraft ang bawat marka pagkatapos ng bawat pagbabago. Walang nakaimbak, kaya palaging inilalarawan ng mga marka ang model sa kasalukuyang estado nito. Tingnan ang [Suriin ang mga marka at bill of materials](topic:marks-and-bom) para sa kung paano gamitin ang mga ito.

## Part mark

Nagbabahagi ng part mark ang dalawang parte kapag tugma ang lahat ng ito:

1. Ang uri ng parte (biga, haligi, brace o plato).
2. Ang pangalan ng profile (hindi case-sensitive).
3. Ang materyal (hindi case-sensitive).
4. Ang cut length, sa loob ng 1 mm.
5. Bawat butas: face, posisyon sa haba at sa kabila, sa loob ng 1 mm, at diameter sa loob ng 0.1 mm.
6. Bawat cope: dulo, gilid, haba at lalim, sa loob ng 1 mm.

Hindi binibilang ang {{ui:Name}} ng member. Hindi rin ang posisyon nito sa model, ang rotation nito, o kung paano ito iginuhit, basta't pareho ang mismong parte.

### Mga parteng binaliktad

Inihahambing ang parte sa lahat ng paraan na maaari itong baligtarin na nagmamapa ng seksyon nito sa sarili nito. Kung alinman doon ang nagpapatugma dito sa ibang parte, nagbabahagi sila ng marka.

| Hugis | Mga pagbaligtad na binibilang |
|---|---|
| I-shape, parihabang HSS, plato | Dulo sa dulo (sa vertical na axis), dulo sa dulo (sa horizontal na axis), at baligtad sa paligid ng sarili nitong haba |
| Channel | Dulo sa dulo sa horizontal na axis lang, para mananatili ang web sa parehong gilid |
| Angle, bilog na HSS | Wala: inihahambing gaya ng pagkakalagay |

Kaya ang beam na may butas malapit sa kaliwang dulo nito ay tumutugma sa beam na may parehong butas malapit sa kanang dulo nito, at ang column na may mga butas sa isang flange ay tumutugma sa column na may parehong mga butas sa kabilang flange.

### Pagnunumero

| Uri | Prefix ng parte | Prefix ng assembly |
|---|---|---|
| Haligi | c | C |
| Biga | b | B |
| Brace | br | BR |
| Plato (nakalagay, end plate o base plate) | p | P |

Nagsisimula ang mga marka sa 1 sa loob ng bawat prefix. Ang order ay: mga column, saka mga beam, brace at plate; sa loob ng bawat uri, ayon sa pangalan ng profile sa natural na pagkakasunod (W8x10 bago ang W12x26); pagkatapos, ang mas mahabang parte muna.

Dahil sumusunod ang pagnunumero sa order na iyon, maaaring magbago ang numero ng iba kapag nagdagdag o nagbago ka ng isang parte.

## Assembly mark

- Bawat parteng hindi naka-weld sa ibang parte ay ang pangunahing parte ng sarili nitong assembly.
- Ang mga end plate ay naka-weld sa kanilang beam, at ang mga base plate sa kanilang column, kaya kabilang sila sa assembly ng member na iyon.
- Nagbabahagi ng mark ang dalawang assembly kapag nagbabahagi ng part mark ang kanilang pangunahing parte at magkapareho ang mga marka ng kanilang nakakabit na parte sa parehong lugar (sa loob ng 1 mm), at pinapayagan ang parehong pagbaligtad gaya ng pangunahing parte.
- Sumusunod ang prefix ng assembly sa pangunahing parte: ang beam na may dalawang end plate ay isang B assembly.

Ang mga plate na inilalagay mo gamit ang tool na {{ui:Plate}} ay hindi naka-weld sa anuman, kaya bawat isa ay sarili nitong P assembly.

## Footing mark

Nagbabahagi ng mark ang mga footing na may parehong haba, lapad, lalim, concrete text, bottom mat at starter bar: F1, F2 … ayon sa pagkakalagay. Hindi binibilang ang posisyon at rotation.

## Bar mark

Nagbabahagi ng mark sa lahat ng footing ang mga bar na may parehong laki, hugis at dimensyon A, B at C (bilugan sa millimeter). Ang mark ay ang numero ng bar, ang F, at isang counter kada laki ng bar: 5F1, 5F2, 6F1. Iisang bar ang long-way bar at short-way bar ng isang square footing at nagbabahagi ng mark; nakalista sa column na {{ui:Used for}} ng schedule ang parehong gamit.
