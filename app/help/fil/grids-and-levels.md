---
title: I-set up ang grids at levels
summary: I-type ang mga grid line, ang kanilang spacing, at ang mga level kung saan nakalagay ang bawat member.
keywords: grid, grids, axes, gridlines, levels, elevations, palapag, floors, spacing, setup
from: 9cad233c
---

Bawat member sa DetailCraft ay nakalagay sa intersection ng grid sa isang level. Itakda muna ang grids at levels; maaari mo pa itong baguhin mamaya.

## Paano gumagana ang grids dito

- **Numbered lines** ay tumatakbo sa isang direksyon, **lettered lines** sa kabila. Ugali lang ang mga pangalan: maaaring anumang teksto ang label hanggang 8 karakter (1, 2, 3 o A1, A2, o 10, 20).
- Ang tina-type mo ay mga label at ang spacing sa pagitan nila, hindi mga coordinate. Nasa 0 ang unang linya ng bawat set.
- Ang numbered lines ay mga linyang constant x; ang lettered lines ay mga linyang constant y. Kaya ang beam mula grid 1 hanggang grid 2 ay tumatakbo sa kahabaan ng x, at ang beam mula A hanggang B ay sa kahabaan ng y.
- Lahat ng value ay nasa millimeters.

Ang bagong model ay nagsisimula sa numbered lines 1 2 3 sa 6000 6000, lettered lines A B sa 6000, at dalawang level.

## Itakda ang grids

1. Sa panel na {{ui:Model}} sa kaliwa, buksan ang {{ui:Grids}} kung nakatiklop.
2. Sa {{ui:Mga numerong linya}}, i-type ang mga label na pinaghihiwalay ng espasyo, halimbawa `1 2 3 4 5`.
3. Sa field na {{ui:Mga spacing}} sa ibaba nito, i-type ang isang spacing para sa bawat puwang, halimbawa `6000 6000 7500 6000`. Apat na puwang para sa limang linya.
4. Gawin din ito sa {{ui:Mga linyang may letra}} at sa {{ui:Mga spacing}} nito, halimbawa `A B C` at `8000 8000`.
5. Piliin ang {{ui:Ilapat ang grids}}.

Sinasabi ng status bar na "Grids updated." at nagzo-zoom ang view sa bagong grid. Gumagana rin ang kuwit bilang separator.

Kapag may hindi tugma, walang nagbabago at sinasabi ng status bar kung bakit, halimbawa "Numbered grids: give one spacing between each pair of lines (4)." Iba pang check: dapat positibong millimeters ang spacing, dapat magkaiba ang mga label, at hanggang 60 linya lang bawat direksyon.

:::note
Pinapanatili ng member ang kanilang coordinates kapag gumalaw ang grids. Kapag binago mo ang spacing pagkatapos maglagay ng steel, mananatili ang steel kung saan ito naroon at wala na ito sa grid. Baguhin muna ang grid, o ilipat ang members sa pamamagitan ng pag-edit ng kanilang end coordinates.
:::

## Itakda ang levels

1. Buksan ang {{ui:Levels}} sa panel na {{ui:Model}}.
2. Bawat row ay may pangalan ng level at elevation nito sa millimeters. I-edit ang mga ito ayon sa gusto mo.
3. Piliin ang {{ui:Magdagdag ng level}} para sa ibang row. Tinatawag itong "Level 3" (at iba pa) at inilalagay 4000 mm sa itaas ng pinakamataas na level; baguhin ang pareho kung kailangan.
4. Para mag-alis ng level, piliin ang × na button sa dulo ng row nito.
5. Piliin ang {{ui:Ilapat ang levels}}.

Walang nagbabago hanggang piliin mo ang {{ui:Ilapat ang levels}}. Inaayos ayon sa elevation ang levels kapag inilapat. Kailangan ng bawat level ng pangalan, hindi maaaring magkapareho ang pangalan ng dalawang level, at dapat may kahit isang level na natitira.

Maaaring nasa ibaba ng zero ang levels (basement sa `-3500`) at hindi kailangang pantay ang pagitan nila.

## Paano ginagamit ang levels

- Ang column na nakalagay sa isang level ay umaabot hanggang sa susunod na level, o sa level na pipiliin mo sa {{ui:Hanggang}}.
- Ang beams at plates ay nakalagay sa pagitan ng dalawang intersection sa level na iyong i-click.
- Ang footings ay nakalagay na nasa level ang itaas nila, sa level na iyong i-click.
- Tinitingnan ng {{ui:Plan}} ang isang level sa isang pagkakataon.
- Gumagawa ang IFC export ng isang building palapag bawat level.

## Undo

Ang pagbabago sa grid at level ay edit tulad ng iba: ibinabalik ng {{key:Mod+Z}} ang nakaraang grid.

## Susunod

[Maglagay ng columns, beams at braces](topic:place-members)
