---
title: I-export ang KISS file para sa fabrication software
summary: Ipadala ang bill of materials sa isang programa ng fabrication management (MIS) bilang KISS 1.1 file: mga assembly, parte, phase bilang sequence, butas, cope at weld.
keywords: kiss, kss, mis, fabrication management, production control, tantya, bill of materials, bom, export, fabtrol, sequence
from: 30cf3951
---

Sa grupong {{ui:Output}}, buksan ang {{ui:More}} at piliin ang {{ui:KISS file for fabrication software}}. Ida-download ng DetailCraft ang `<name>.kss`, isang KISS file ("Keep It Simple, Steel", bersyon 1.1), ang plain text na format na karaniwang iniaangkat ng mga programa ng fabrication management mula sa bill of materials.

## Ano ang laman nito

- Ang header: numero ng job (unang walong letra at digit ng pangalan ng model), pangalan ng model, petsa at oras, at kung metric ang mga sukat.
- Para sa bawat assembly mark: ang pangunahing parte nito (quantity = ilan sa assembly), isang drawing line (A-B1 at iba pa, ang numero ng assembly drawing), isang assembly line (pangalan, uri, timbang, kabuuang haba, lalim at lapad), isang sequence line para sa bawat [phase](topic:phases) na kinabibilangan ng assembly, at mga labor line: butas (ilan, diameter, kapal na tinatagusan), cope at weld.
- Pagkatapos, ang bawat parteng nakakabit dito, na may **kabuuang** quantity (bawat assembly × bilang ng assembly), gaya ng hinihingi ng pamantayan.
- Mga maluwag na bolt at anchor rod sa drawing na BOLTS, assembly FIELD.
- Ibinibigay ng bawat linya ang uri (W, C, L, HSS, PL, o MI para sa custom profile), laki, grade, haba ng putol sa millimeter, pangalan ng parte at timbang.

## Imperial o metric

Sa [mga setting ng DetailCraft](topic:settings), pinipili ng **KISS file sizes**:

- **Automatic** (ang panimula): imperial kapag bawat member ay AISC shape, metric kung hindi.
- **Imperial**: mga shape ayon sa AISC designation (W 16X26, HSS 4X4X.250); mga plate at bolt, na pinananatili ng DetailCraft sa millimeter, hanggang sa pinakamalapit na 1/16 in; timbang sa pounds.
- **Metric**: mga European shape ayon sa pangalan (IPE300), mga plate bilang kapal X lapad sa millimeter; timbang sa kilogram.

Laging nasa millimeter na may dalawang decimal ang mga haba, anuman ang setting: hinihingi ito ng pamantayan ng KISS, at kino-convert ito ng tatanggap na programa.

:::note
Pinuputol ang mga grade sa walong karakter ng pamantayan: ang A572 Gr 50 ay nagiging A572-50. Ang mga kuwit sa pangalan ay nagiging espasyo (walang quoting ang format). Suriin ang isang import sa iyong programa bago umasa dito: sinusuri ang mga KISS file ng DetailCraft laban sa pamantayan dito, hindi pa sa isang fabrication program.
:::
