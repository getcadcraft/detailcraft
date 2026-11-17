---
title: Ulat ng materyal at timbang kada phase
summary: Mga cut length, bilang, bigat, at lawak ng pintura kada phase, kasama ang mga bolt at rebar nito, bilang table, CSV, o PDF.
keywords: ulat, report, weight, timbang, tonnage, kg, paint, paint area, lawak ng pintura, surface area, lawak ng ibabaw, coating, cut length, listahan ng materyal, phase, bill of materials, csv, pdf
from: 337d6d92
---

Sa grupong {{ui:Output}}, buksan ang {{ui:More}} at piliin ang {{ui:Weight report by phase}}, o buksan ang tab na {{ui:By phase}} sa ilalim ng view. Ipinapakita nito:

- **Summary by phase**: para sa bawat phase, ang bilang ng mga piyesa, ang bigat ng steel, ang lawak ng pintura, ang mga bolt at anchor rod, at ang rebar; saka ang kabuuan.
- **Isang table bawat phase**: bawat part mark dito kasama ang uri, profile, materyal, cut length, bilang, bigat bawat isa, bigat, at lawak ng pintura; saka ang mga bolt at anchor rod nito.

Ang {{ui:Download CSV}} ay nagse-save ng parehong table sa isang CSV file (`<name> weight report.csv`). Ang {{ui:Download PDF}} ay gumagawa ng ulat sa laki ng sheet mula sa [DetailCraft settings](topic:settings#drawings), na may summary muna, kasunod ang bawat phase, ang mahahabang table ay dinadala sa susunod na pahina, at may numero ang bawat pahina.

## Paano kinakalkula ang mga figure

- **Ang bigat** ay gross, gaya sa bill of materials: ang bigat ng profile bawat metro na pinarami ng cut length. Hindi ibinabawas ang mga butas at cope.
- **Ang lawak ng pintura** ay ang labas ng seksyon sa kahabaan ng cut length: para sa I-shape, bawat face ng mga flange at web; para sa plate, parehong face at mga gilid; para sa tube, ang labas lamang. Hindi binibilang ang mga dulo at butas.
- **Ang rebar** ay ang bigat ng mga bar sa mga footing ng phase, mula sa [bending schedule](topic:footings-and-rebar).
- Ang mga plate at bolt ng connection ay binibilang sa phase ng pangunahing member nito. Tingnan ang [Phases](topic:phases).

Kapag naka-on ang [marks per phase](topic:phases#marks-per-phase), may sariling mark ang bawat phase (1-b1, 2-b1). Kapag naka-off, maaaring lumitaw ang isang mark sa higit sa isang phase: nakalista sa bawat phase ang mga piyesang mayroon ito.
