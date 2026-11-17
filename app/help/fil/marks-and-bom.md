---
title: Suriin ang mga marka at ang bill of materials
summary: Basahin ang part at assembly mark na ibinibigay ng DetailCraft sa bawat piyesa, suriin ang bill of materials, at i-download ito bilang CSV.
keywords: marka, numbering, part mark, assembly mark, piece mark, bom, bill of materials, listahan ng materyal, timbang, listahan ng bolt, csv, numbering
from: caa2ee80
---

Minamarkahan ng DetailCraft ang model nang kusa. Walang command sa pag-number at walang kailangang patakbuhin: pagkatapos ng bawat pagbabago, tinutukoy nito kung aling mga part ang iisang piraso ng bakal at binibigyan sila ng iisang mark.

## Saan lumalabas ang mga mark

- Ang listahan ng {{ui:Mga part mark}} sa panel na {{ui:Model}}: bawat mark kasama ang profile, haba at bilang nito. I-click ang isa para piliin ang unang part na may ganoong mark.
- Ang panel na {{ui:Properties}} ng napiling member (at ang listahan ng **Mga part mark** sa kaliwang panel): {{ui:Marka ng part}} at {{ui:Assembly}}. Ang heading ng panel ay may dala ring mark, halimbawa "Biga b1".
- Ang tab na {{ui:Bill of materials}}, ang CSV, ang mga pangalan ng NC file, ang shop drawing at ang IFC export (bilang tag ng bawat elemento).

## Paano minamarkahan ang mga part

- **Part marks:** c para sa column, b para sa biga, br para sa brace, st para sa stair stringer, p para sa plato (kasama ang end plate at base plate). Pagkatapos, isang numero: c1, c2, b1, p1 … Kapag nasa higit sa isang phase ang mga part, nauuna ang numero ng phase, halimbawa 2-b1.
- **Assembly marks:** C, B, BR o P. Ang assembly ay isang pangunahing member at ang mga plato nitong dinikitan, gaya ng biga na may dalawang end plate, o column na may base plate.
- Nagbabahagi ng mark ang dalawang part kapag pareho ang profile, materyal at putol na haba, at pareho ang mga butas at copes, lahat sa loob ng 1 mm, kahit iikutin ang isa nang pabaligtad o nakatihaya kumpara sa isa.
- Sumusunod ang pag-number sa pagkakasunod: column muna, pagkatapos biga, brace at plato; sa loob ng bawat grupo, ayon sa pangalan ng profile, ang pinakamahaba muna.

Buong panuntunan, kabilang kung aling pag-ikot ang binibilang para sa channel at angle: [Mga patakaran sa mark](topic:mark-rules).

:::warning
Muling kinakalkula ang mga mark pagkatapos ng bawat pagbabago, kaya maaaring mag-renumber. Ang pagdaragdag ng part, pagpalit ng profile o pagdaragdag ng butas ay maaaring maglipat ng b3 sa b4. Ituring na pinal ang mga mark lamang kapag tapos na ang model, at gawin ang BOM, NC file at shop drawing mula sa iisang naka-save na model.
:::

## Basahin ang bill of materials

Buksan ang tab na {{ui:Bill of materials}} sa ibaba. May tatlong table ito.

**Parts**, na may kabuuang timbang ng bakal sa heading:

| Column | Ibig sabihin |
|---|---|
| Part mark | I-click para piliin ang unang part na may ganoong mark |
| Type | biga, column, brace, stringer o plato |
| Profile | Halimbawa W16x26 o PL20x180 |
| Material | Ang grade na itinakda mo |
| Length (mm) | Putol na haba, pagkatapos ng connection |
| Count | Ilan |
| Unit weight (kg) | Masa ng profile bawat metro × haba |
| Total weight (kg) | Unit weight × count |

Ang huling hilera ay nagbibigay ng kabuuang bilang at timbang.

**Assemblies:** bawat assembly mark, ang pangunahing part nito, lahat ng part nito (halimbawa "b1 + p1 + p1"), bilang, unit weight at total weight.

**Bolt at anchor rod:** pinagpapangkat ayon sa uri, diameter, haba at grade, may bilang.

:::note
Brutto ang timbang: hindi ibinabawas ang mga butas at copes. Wala sa timbang ng bakal ang mga bolt, nut, washer at weld.
:::

## I-download ito

Piliin ang {{ui:I-download ang CSV}} sa tab, o ang {{ui:BOM}} sa grupong {{ui:Output}}. Ang file na `<name> BOM.csv` ay naglalaman ng tatlong table nang sunod-sunod, bawat isa sa ilalim ng pamagat nito, na may blangkong linya sa pagitan. Nabubuksan ito sa anumang spreadsheet program.

## Suriin bago magpadala

1. Buksan ang tab na {{ui:Mga problema}} at linisin ang bawat linya. Ang connection na hindi nabuo ay hindi nagdaragdag ng plato, butas o bolt, kaya kulang ang BOM.
2. Hanapin ang mga mark na hindi mo inaasahan. Ang dalawang biga na sa tingin mo ay pareho pero magkaiba ang mark ay kadalasang magkaiba sa isang butas, cope o putol na haba; piliin ang bawat isa at ihambing.
3. I-save ang model, pagkatapos gawin ang bawat export mula sa naka-save na estado.
