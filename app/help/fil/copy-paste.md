---
title: Kopyahin, i-paste at i-duplicate
summary: Pumili ng ilang piyesa, kopyahin ang mga ito kasama ang kanilang butas, cope at connection, at i-paste sa intersection ng grid, sa offset, sa mismong lugar, o sa ibang tab. I-cut, i-duplicate, burahin at piliin lahat.
keywords: kopyahin, i-paste, cut, duplicate, clipboard, i-paste sa mismong lugar, piliin lahat, huwag piliin ang alinman, maramihang pagpili, shift click, ilan, ulitin ang isang bay, kopyahin ang isang frame, offset, burahin ang ilan, menu ng edit, menu ng more
from: f25f1829
---

Ang pangkat na {{ui:Edit}} sa toolbar ay may {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} at {{ui:Paste}}. Nasa {{ui:More}} menu nito ang iba pa: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} at {{ui:Select none}}, kasama ang kani-kanilang key. Naka-gray out ang button o menu item na hindi kayang gumana sa ngayon; i-hover ito para mabasa kung bakit (halimbawa "walang nakopya pa").

Bawat paste, cut, duplicate at delete ay isang hakbang: isang {{key:Mod+Z}} lang ang magbabawi ng lahat.

## Pumili ng ilang piyesa

- I-click ang piyesa para piliin ito. Pindutin nang matagal ang {{key:Shift}} (o {{key:Ctrl}}, o {{key:Mod}}) at i-click ang iba pang piyesa para idagdag ang mga ito; i-click din nang ganoon ang napiling piyesa para alisin ito.
- {{key:Mod+A}} o {{ui:Select all}} ay pumipili ng bawat member, connection at footing.
- {{key:Esc}} o {{ui:Select none}} ay nag-aalis ng pagpili.

Kapag may ilang bagay na napili, ang panel na {{ui:Properties}} ay may pamagat na "4 selected" (o ilan man ang bilang) at nakalista ang mga member ayon sa uri, ang mga connection, ang mga footing at ang gross steel weight, kasama ang mga button na {{ui:Copy}}, {{ui:Duplicate}} at {{ui:Delete}}.

## Kopyahin

1. Piliin ang mga member at footing na gusto mo.
2. Piliin ang {{ui:Copy}} o pindutin ang {{key:Mod+C}}.

Kasama sa kopya:

- Bawat member nang buo: profile, materyal, dulo, posisyon, rotation, pangalan, butas at cope. Kinokopya rin ang custom profile na ginagamit nito.
- Bawat footing nang buo: sukat, kongkreto, bottom mat at starter bar.
- End plate at base plate, pero lamang kapag nakopya ang lahat ng member na pinagdudugtong ng connection: kailangan ng end plate ng beam ang beam at ang column nito. Sinasabi ng status bar kung ilang connection ang naiwan. Para sadyang iwan ang mga connection, i-clear ang **Copy end plates and base plates with their members** sa [mga setting ng DetailCraft](topic:settings).

Hindi maaaring kopyahin ang connection nang mag-isa; piliin na lang ang mga member nito. Para bigyan ng parehong connection ang ibang joint, gamitin ang {{ui:Similar}} (tingnan ang [End plates](topic:end-plates#copy-it-to-every-similar-joint)).

Mananatili ang kopya sa browser na ito hanggang may kopyahin kang iba. Maaari itong i-paste ng ibang tab o window ng DetailCraft sa parehong browser, kaya maaari mong kopyahin ang isang frame mula sa isang model at i-paste ito sa iba.

## I-paste sa intersection ng grid

1. Piliin ang {{ui:Paste}} o pindutin ang {{key:Mod+V}}.
2. Ilipat ang pointer sa view. Lalabas ang dashed na outline ng kopya na susunod sa pinakamalapit na intersection ng grid sa pointer.
3. I-click ang isang intersection. Doon mapupunta ang base point ng kopya (ang pinakamababang sulok nito: ang pinakamaliit na x, y at z ng lahat ng nakopya).

Pagkatapos, napipili ang mga na-paste na piyesa, kaya maaari kang mag-paste ulit sa ibang lugar, o baguhin ang mga ito. Kinakansela ng {{key:Esc}} ang paste; nananatili ang kopya sa clipboard. Nakatutulong ang {{ui:Plan}} at {{ui:Elevation}} para mas madaling tamaan ang tamang intersection.

:::tip
Para ulitin ang isang bay, piliin ang mga member ng bay (o lahat gamit ang {{key:Mod+A}}), kopyahin, i-paste, at i-click ang intersection na isang bay ang layo mula sa kinalalagyan ng pinakamababang sulok ng kopya.
:::

## I-paste gamit ang keyboard

Habang nagpe-paste, ipinapakita ng panel na {{ui:Properties}} kung ano ang nasa clipboard at ang dalawang form:

- {{ui:Paste by offset (mm, from the original)}}: i-type ang x, y at z at piliin ang {{ui:Paste at this offset}}. Nagsisimula ito sa offset mula sa [mga setting ng DetailCraft](topic:settings).
- {{ui:Paste onto a grid intersection}}: pumili ng letrang grid, numerong grid at level, at piliin ang {{ui:Paste here}}. Doon mapupunta ang base point.

## I-paste sa mismong lugar

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) ay inilalagay ang kopya sa eksaktong coordinates kung saan ito kinopya. Gamitin ito pagkatapos ng {{ui:Cut}}, o para dalhin ang mga piyesa mula sa ibang model sa parehong lugar. Kung nandoon pa ang orihinal, nakapatong ang kopya sa mga ito at binabalaan ka ng status bar: ilipat ang mga kopya sa pamamagitan ng kanilang {{ui:Start}} at {{ui:End}} sa {{ui:Properties}}, o i-undo.

## Duplicate

{{ui:Duplicate}} ({{key:Mod+D}}) ay kinokopya ang pinili at agad itong ipinapaste, inilipat ng offset sa [mga setting ng DetailCraft] (sa simula, 6000 mm sa x). Hindi nito binabago ang laman ng clipboard. Napipili ang mga kopya pagkatapos, kaya kapag pinindot ulit ang {{key:Mod+D}}, gagawa ito ng susunod mula sa mga iyon.

## I-cut at burahin

- {{ui:Cut}} ({{key:Mod+X}}) ay kinokopya ang pinili, saka binubura ito. I-paste ito kung saan ito dapat mapunta.
- {{ui:Delete}} ({{key:Delete}} o {{key:Backspace}}) ay binubura ang pinili. Kapag binura ang member, nabubura rin ang mga connection nito.

## Mga mark pagkatapos ng paste

Hindi kailanman itinatabi ang part at assembly mark; muling ninumero ng DetailCraft ang mga ito mula sa model pagkatapos ng bawat pagbabago ([Paano binibigyan ng mark](topic:mark-rules)). Kaya:

- Ang kopyang kapareho ng orihinal (parehong profile, grade, haba ng cut, butas at cope) ay nakikibahagi sa mark ng orihinal, at tumataas ang bilang sa {{ui:Part marks}} at sa bill of materials.
- Ang kopyang naiba ang kinalabasan ay magkakaroon ng sariling mark. Halimbawa, ang beam na na-paste nang walang end plate nito ay hindi pinutol pabalik, kaya iba na itong piyesa. Muling ninumero ang mga mark sa buong model, kaya maaari ring magbago ang numero ng ibang piyesa.

Ang bawat na-paste na member, butas, cope, connection at footing ay nakakakuha ng bagong id, kaya walang anumang bagay sa model na pinagsasaluhan ng kopya at ng orihinal.

## Kapag tinanggihan ang clipboard

Sinusuri ang laman ng clipboard nang kasing-ingat ng model file na binubuksan mo: anumang hindi wastong piyesa ng DetailCraft ay tinatanggal, at sinasabi ng status bar kung alin. Kapag ang clipboard ay puno ng mas bagong DetailCraft, o ng ibang bagay, tinatanggihan ito na may mensahe at walang na-paste. Kung hindi kayang itago ng pribadong window ang kopya sa browser storage, gumagana pa rin ang kopya sa tab na iyon.
