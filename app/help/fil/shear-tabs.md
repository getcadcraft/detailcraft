---
title: Shear tab
summary: I-bolt ang web ng beam sa isang plato na naka-shop-weld sa flange o web ng column, pati kung saan nagtatagpo ang beam at column sa anggulo sa plano o nakahilig.
keywords: shear tab, single plate, fin plate, simple connection, web connection, hilig, skew, nakahilig, raked, beam na may anggulo, bolted, connect
from: 18afc8ab
---

Ang shear tab (single plate, fin plate) ay plato na naka-weld sa column sa shop; sa site, ang web ng beam ay ibinobolt dito sa isang patayong hanay ng mga bolt. Inilalagay ng DetailCraft ang tab, pinuputol paatras ang beam palayo sa column, dinadrill ang mga butas sa tab at sa web ng beam, idinadagdag ang mga bolt at weld, at nagbababala tungkol sa edge distance at fit.

## Saan ito gumagana

- Isang beam (I-shape o channel) na ang dulo ay nasa linya ng isang **patayong** I-shape column, at tumatagpo sa **flange** o **web** nito.
- **Parisukat, hilig sa plano, o nakahilig**: sinusundan ng tab ang web ng beam at pinuputol paatras ang beam para mapanatili ng pinakamalapit nitong sulok ang puwang sa column. Tinatanggihan ang beam na tumataas o bumababa nang higit sa 60°.

## Magdagdag ng shear tab

1. Piliin ang beam.
2. Sa grupong {{ui:Connect}}, buksan ang {{ui:Higit pa}} at piliin ang {{ui:Shear tabs}} (o piliin ang {{ui:Magdagdag ng shear tab}} sa panel na {{ui:Properties}}).
3. Bawat malayang dulo ng beam na tumatagpo sa column ay nakakakuha ng tab. Bawat dulo ng beam ay tumatanggap ng isang connection: shear tab o end plate.

Piliin ang tab (i-click ito, o isang bolt) para makita at mabago ang mga setting nito. Kinokopya ng {{ui:Ilapat sa katulad}} ito, bilang shear tab, sa bawat joint na katulad nito na wala pang connection.

## Mga setting (mm)

| Setting | Nagsisimula sa | Kahulugan |
|---|---|---|
| Kapal ng plato | 10 | Ang kapal ng tab |
| Lapad ng plato | 115 | Gaano kalayo lumalabas ang tab mula sa mukha ng column, sa kahabaan ng beam |
| Diameter ng bolt, Diameter ng butas, Grade ng bolt | 20, 22, A325 | Gaya ng sa end plate |
| Mga hanay ng bolt, Pitch ng hanay | 3, 75 | Ang mga bolt sa patayong hanay |
| Edge distance (itaas at ibabang bolt) | 38 | Mula sa itaas at ibabang bolt hanggang sa dulo ng tab; ang lalim ng tab ay hanay × pitch + 2 × ito |
| Itinaas ang grupo ng bolt nang | 0 | Ang 0 ay nagse-center sa mga bolt sa lalim ng beam |
| Puwang sa column | 13 | Malinaw na puwang sa pagitan ng column at ng pinakamalapit na sulok ng beam |
| Linya ng bolt mula sa mukha ng column | 65 | Sa kahabaan ng beam, mula sa mukha ng column hanggang sa bolt |
| Allowance sa haba ng bolt | 30 | Idinadagdag sa grip (tab + web ng beam), ni-round up sa 5 mm |
| Laki ng fillet weld | 6 | Magkabilang gilid ng tab papunta sa column |

## Dapat malaman

- Bahagi ang tab ng assembly ng column (naka-weld sa shop); ang assembly ng beam ay may mga butas lamang.
- Mas pinuputol paatras ang hilig o nakahilig na beam kaysa sa parisukat para mapanatili ng pinakamalapit nitong sulok ang puwang. Pinuputol ng DetailCraft ang beam nang parisukat: ang fabricator ang nagpuputol ng dulo ayon sa kailangan. Parisukat din ang pagkakaguhit sa gilid ng tab sa column.
- Hindi chinecheck ng DetailCraft ang lakas. Ang mga babala ay gumagamit ng pinakamababang halaga ng EN 1993-1-8 Table 3.3 para sa edge distance at pitch, at sinasabi kung kailan mas malalim ang tab kaysa web ng beam sa pagitan ng mga fillet nito, o kung masyadong malapit ang mga bolt sa pinutol na dulo ng beam.
- Hindi isinasama ng [pagsusuri ng clash](topic:clash-check) ang isang tab at ang mga member na dinudugtungan nito: sadya silang magkatagpo.
