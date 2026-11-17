---
title: Mga phase
summary: Hatiin ang model sa mga phase (erection sequence o delivery), ipakita o itago ang bawat phase, ilagay ang mga part sa isang phase, at lagyan ng numero ang mga marka kada phase.
keywords: phase, phases, phase manager, erection sequence, delivery, lot, sequence, itago ang phase, ipakita ang phase, filter, numbering, mark prefix, kada phase
from: bae506f5
---

Ang phase ay grupo ng mga part na sabay na ginagawa, dinadala, o itinatayo: isang erection sequence, isang delivery, isang lot. Nasa isang phase ang bawat member at footing. Nasa phase ng pangunahing member ang connection: ang beam para sa end plate, ang column para sa base plate. Isang phase lang ang bagong model.

## Ang panel ng phase

Inililista ng seksyon na {{ui:Mga Phase}} ng panel na {{ui:Model}} ang bawat phase:

- ang checkbox ang nagpapakita o nagtatago ng phase sa view;
- ang numero, at pangalang maaari mong i-type (kung walang laman = "Phase 2" at iba pa);
- kung ilang part ang nasa loob nito;
- ang button na {{ui:×}} ang nag-aalis ng phase. Tanggal lang ang walang lamang phase: ilipat muna ang mga part nito sa ibang phase.

Ang {{ui:Magdagdag ng phase}} ay nagdaragdag ng susunod na numero at ginagawa itong phase kung saan mapupunta ang mga bagong part.

## Ilagay ang mga part sa phase

- **Mga bagong part:** Itinatakda ng {{ui:Ang mga bagong part ay mapupunta sa}} ang phase kung saan mapupunta ang bawat member at footing na ilalagay mo simula ngayon.
- **Isang part:** piliin ito at baguhin ang {{ui:Phase}} sa panel na {{ui:Properties}}.
- **Maraming part:** piliin sila (window, {{key:Shift}}+click, {{key:Mod+A}}) at baguhin ang {{ui:Phase}} sa itaas ng panel na {{ui:Properties}}. Ipinapakita nito ang **Iba-iba** kapag nasa magkaibang phase sila. Isang undo step ang isang pagbabago.

Pinapanatili ng mga kopya ang phase ng part na kinopya, pati kapag na-paste sa ibang model (idinadagdag doon ang phase).

## Ipakita at itago ang phase

Ang nakatagong phase ay hindi iginuguhit sa view, hindi ma-click o masasama sa selection window, at iniiwan ito ng {{key:Mod+A}}. Nasa bill of materials, mga report, drawing, at bawat export pa rin ito. Para lang sa view ang pagtatago: hindi ito naka-save at walang undo.

## Mga marka kada phase

Kapag naka-on ang **Numerohan ang mga marka kada phase** (naka-on ito bilang default) at may mga part sa higit sa isang phase, nilalagyan ng sariling numero ang bawat phase at nagsisimula ang mga marka nito sa numero ng phase: part marks 1-b1, 2-b1, assembly marks 2-B1, footings 2-F1. Kaya magkaiba ang marka ng dalawang magkaparehong beam sa magkaibang phase, dahil magkaiba ang oras ng paggawa at pagpapadala nila. Kapag isang phase lang ang ginagamit, walang prefix ang mga marka. I-off ito para bilangin ang buong model bilang isa, para magbahagi ng iisang marka ang magkaparehong piyesa anuman ang phase nila.

Isinusulat ang phase sa IFC export (property set DetailCraft, Phase).

:::note
Naka-save sa file format 2 ng DetailCraft ang mga model na may phase. Hindi ito mabubuksan ng release 0.3 ng DetailCraft; nagbubukas ang build na ito ng mas lumang file, na may bawat part sa phase 1.
:::
