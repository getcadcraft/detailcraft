---
title: Tuklasin ang sample frame
summary: Buksan ang built-in na two-bay frame at gamitin ito para matutunan kung ano ang ginagawa ng DetailCraft, mula sa mga mark hanggang sa NC files.
keywords: sample, halimbawa, demo, frame, matuto, tour, subukan
from: 5c5944dd
---

Ang sample frame ay maliit at kumpletong model: lumalabas nang kahit isang beses ang bawat uri ng bagay na binubuo ng DetailCraft. Ito ang pinakamabilis na paraan para matutunan ang app at para subukan ang isang export bago mo ito pagkatiwalaan.

## Buksan ito

1. Piliin ang {{ui:Sample}} sa grupong {{ui:File}}.
2. Kung may hindi pa nase-save na pagbabago ang kasalukuyan mong model, piliin ang {{ui:I-save muna}} o {{ui:Burahin ang mga pagbabago}}.
3. Sinasabi ng status bar ang "Sample frame: 6 na column na may base plate, 4 na beam na may end plate, isang brace, 7 na footing na may rebar."

Bumubukas ang sample bilang bagong model na tinatawag na "Sample frame". Wala itong binabago pang iba, at wala itong maiu-undo.

## Ano ang nasa loob nito

- **Mga grid** 1, 2, 3 sa 6000 mm at A, B sa 7000 mm. **Mga level** Level 1 sa 0 at Level 2 sa 4000.
- **Anim na column**, W12x50, mula Level 1 hanggang Level 2 sa bawat intersection, bawat isa ay nasa 25 mm na base plate na may apat na anchor rod.
- **Apat na beam**, W16x26, sa Level 2 sa kahabaan ng grid line A at B, nasa level ang tuktok ng steel, na may flush na bolted na end plate sa magkabilang dulo (walo lahat).
- **Isang brace**, HSS4x4x1/4, mula A/1 sa Level 1 pataas hanggang A/2 sa Level 2.
- **Anim na pad footing**, 2000 x 2000 x 600, isa sa ilalim ng bawat column, na may hooked na bottom mat sa magkabilang direksyon.
- **Isa pang footing** sa tabi ng frame, 2400 x 1800 x 600, na may anim na hooked na starter bar na nakatayo para sa concrete pier.

## Mga dapat subukan

1. I-click ang isang beam. Basahin ang {{ui:Marka ng part}}, {{ui:Assembly}}, {{ui:Haba ng putol}} at {{ui:Setback}}: mas maikli ang haba ng putol kaysa 6000 mm na grid spacing dahil pinuputol ng bawat end plate ang beam paatras ng kalahati ng lalim ng column kasama ang kapal ng plate.
2. I-click ang isang column. Sa ilalim ng {{ui:Mga butas}}, nakalista ang mga butas na ginawa ng end plate sa flange nito ("8 na butas mula sa connections"; ang mga gitnang column ay may 16, isang set sa bawat flange).
3. Sa listahan ng {{ui:Mga part mark}} sa kaliwa, makikita na iisang mark ang pinagsasaluhan ng apat na beam: iisang piraso ng steel ang mga ito. Pinagsasaluhan din ng mga corner column ang isang mark, kahit magkasalungat ang direksyon ng kanilang mga butas, dahil ang column na nilingon nang baligtad ang dulo ay iisang piraso pa rin. Ang mga gitnang column, na may mga butas sa parehong flange, ay nakakakuha ng ibang mark.
4. I-click ang isang end plate (o isa sa mga bolt nito). Ipinapakita ng panel na {{ui:Properties}} ang mga setting ng plato, bolt at weld, ang mga bolt na ginagawa nito (kasama ang haba nila na kinuwenta mula sa grip) at anumang babala sa edge distance.
5. Buksan ang tab na {{ui:Bill of materials}}. Nakalista na may timbang ang mga part, assembly (ang beam kasama ang dalawang end plate nito ay isang assembly), at ang mga bolt at anchor rod. Dapat makita mo ang anim na part mark: c1 (ang dalawang gitnang column) at c2 (ang apat na corner column), kapwa W12x50 sa 3975 mm; b1, apat na beam na W16x26 sa 5650 mm; br1, ang brace; p1, walong PL20x180 na end plate; at p2, anim na PL25x400 na base plate. Ang mga fastener ay 64 na bolt na 20 x 70 A325 at 24 na anchor rod na 20 x 575.
6. Buksan ang tab na {{ui:Bending schedule}}. Pinagsasaluhan ng anim na magkakatulad na footing ang mga bar mark; nagdadagdag ng sarili nitong mark ang pier footing.
7. I-click ang brace at tingnan ang grupong {{ui:Output}}: naka-gray out ang {{ui:Shop drawing}}, dahil sa ngayon ay para lamang sa I-shape at plato ang mga shop drawing.
8. Piliin ang {{ui:NC files}}. Naglalaman ang zip ng file para sa bawat mark ng I-shape at plato; inililista ng status bar ang mark ng brace bilang hindi naisulat.
9. Piliin ang {{ui:IFC}} at buksan ang file sa anumang IFC viewer para tingnan kung paano ito binabasa ng iba mo pang software.

## Gamitin ito bilang panimulang punto

Ordinaryong model ang sample. Baguhin ito, pagkatapos ay palitan ang pangalan nito sa field na {{ui:Pangalan}} at i-save ito sa bagong pangalan gamit ang {{key:Mod+S}}.
