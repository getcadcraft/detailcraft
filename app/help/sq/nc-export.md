---
title: Dërgo skedarët NC në punishte
summary: Eksporto skedarët NC DSTV për çdo shenjë pjese (profile I, kanale, këndore, HSS, pllaka), të ZIP-uar, dhe kontrolloji para se të arrijnë te një makinë.
keywords: nc, nc1, dstv, cnc, makinë, linjë traresh, linjë vrimimi, prerje pllakash, eksport, fabrikim, zip
from: 598b6091
---

DetailCraft shkruan një skedar DSTV NC (`.nc1`) për çdo shenjë pjese, për profilet I, kanalet, këndoret, HSS drejtkëndore dhe rrethore, dhe pllakat, dhe i ZIP-on të gjitha bashkë. Linjat e traresh dhe makinat e pllakave lexojnë këto skedarë për të prerë me sharrë, vrimuar dhe prerë.

## Eksporti

1. Pastro skedën {{ui:Problemet}} më parë: një lidhje që nuk mund të ndërtohet nuk shton vrima.
2. Ruaje modelin ({{key:Mod+S}}), që skedarët NC të përputhen me një model të ruajtur.
3. Përzgjidh {{ui:Skedarët NC}} në grupin {{ui:Dalja}}.
4. Shfletuesi shkarkon `<name> NC.zip`. Shiriti i statusit thotë sa skedarë përmban dhe liston çdo shenjë që nuk e shkroi (një këndore ose një tub rrethor me prerje kënde).

Brenda zip-it çdo skedar emërtohet sipas shenjës së pjesës: `b1.nc1`, `c1.nc1`, `p1.nc1` … ZIP-i nuk është i ngjeshur dhe hapet me çdo mjet ZIP.

Nëse modeli nuk ka pjesë, shiriti i statusit e thotë këtë.

## Çfarë përmban çdo skedar

- **Kreu (ST):** emri i modelit si porosi, shenja e pjesës si vizatim dhe copë, faza 1, cilësia e çelikut, sasia, profili dhe përmasat e tij, masa për metër dhe sipërfaqja e lyerjes për metër. Prerjet me sharrë janë drejtkëndëshe.
- **Konturet e jashtme (AK):** kontura e rrjetës me prerjet e kënde të hequra, dhe kontura e secilës flanxhë, e shkurtuar aty ku një prerje e heq.
- **Vrimat (BO):** çdo vrimë me faqen, pozicionin dhe diametrin, duke përfshirë vrimat e bëra nga pllakat fundore dhe pllakat bazë.

Fushë për fushë, me rregullat për faqet dhe koordinatat: [Fushat e skedarit NC](topic:nc1-fields).

## Çfarë nuk shkruhet

- Këndoret dhe tubat rrethorë me prerje kënde: nuk ka skedar NC. Shenjat e tyre listohen në shiritin e statusit.
- Vrimat në tubat rrethorë (DetailCraft nuk i bën fare).
- Skajet e pjerrëta, konturat e brendshme, shënimet e pjesëve (gdhendja) dhe kënde sharre të ndryshme nga ato të drejta.
- Vrimat e gjata (DetailCraft ka vetëm vrima rrethore).

## Kontrollo para përpunimit

Skedarët NC të DetailCraft lexohen përsëri nga paketa e vet e testeve, por nuk janë ekzekutuar në makinat e punishtes sate.

1. Hap skedarët në shfaqësin NC të punishtes ose në softverin e makinës dhe krahasoi me vizatimet e punishtes.
2. Kontrollo një pjesë nga çdo lloj në makinë përpara se të nisësh një grup.
3. Kontrollo si lexon softveri yt koordinatat y të flanxhave dhe faqet e kanaleve: DetailCraft e mat y-në e flanxhës nga skaji i pasmë, dhe i vendos kanalet mbi shpinë siç i tregon standardi (shih [Fushat e skedarit NC](topic:nc1-fields#faces-and-coordinates)).
