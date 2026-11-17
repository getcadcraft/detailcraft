---
title: Rregullat e shenjave
summary: Saktësisht kur dy pjesë ose dy montime ndajnë një shenjë, si numërohen shenjat, dhe si funksionojnë shenjat e themeleve dhe të shufrave.
keywords: shenja, numërim, shenja e pjesës, shenja e montimit, shenja e elementit, parashtesë, tolerancë, pjesë identike, shenja e shufrave, shenja e themeleve
from: ce02c98e
---

DetailCraft rillogarit çdo shenjë pas çdo ndryshimi. Asgjë nuk ruhet, kështu që shenjat përshkruajnë gjithmonë modelin siç është tani. Shih [Kontrollo shenjat dhe listën e materialeve](topic:marks-and-bom) për si t'i përdorësh.

## Shenjat e pjesëve

Dy pjesë ndajnë një shenjë pjese kur përputhen të gjitha këto:

1. Lloji i pjesës (trari, kolona, diagonalja ose pllaka).
2. Emri i profilit (pa dallim midis shkronjave të mëdha dhe të vogla).
3. Materiali (pa dallim midis shkronjave të mëdha dhe të vogla).
4. Gjatësia e prerjes, brenda 1 mm.
5. Çdo vrimë: fytyra, pozicioni përgjatë dhe tërthor, brenda 1 mm, dhe diametri brenda 0.1 mm.
6. Çdo prerje: skaji, ana, gjatësia dhe thellësia, brenda 1 mm.

{{ui:Emri}} i elementit nuk llogaritet. As pozicioni i tij në model, as rrotullimi, as mënyra si u vizatua nuk llogariten, për sa kohë pjesa vetë është e njëjtë.

### Pjesët e kthyera

Një pjesë krahasohet në çdo mënyrë që mund të kthehet dhe që e përshkruan prerjen e saj mbi vetveten. Nëse ndonjëra prej tyre e bën të përputhet me një pjesë tjetër, ato ndajnë një shenjë.

| Formë | Kthesat që numërohen |
|---|---|
| Formë I, HSS drejtkëndëshe, pllaka | Nga skaji në skaj (rreth boshtit vertikal), nga skaji në skaj (rreth boshtit horizontal), dhe përmbys rreth gjatësisë së vet |
| Kanale | Nga skaji në skaj vetëm rreth boshtit horizontal, kështu që trupi mbetet në të njëjtën anë |
| Këndore, HSS rrethore | Asnjë: krahasohen ashtu si janë vendosur |

Kështu një trari me një vrimë afër skajit të majtë përputhet me një trari me të njëjtën vrimë afër skajit të djathtë, dhe një kolonë me vrima në një flanxh përputhet me një kolonë me të njëjtat vrima në flanxhin tjetër.

### Numërimi

| Lloji | Parashtesa e pjesës | Parashtesa e montimit |
|---|---|---|
| Kolona | c | C |
| Trari | b | B |
| Diagonalja | br | BR |
| Pllaka (e vendosur, pllakë skaji ose pllakë themeli) | p | P |

Shenjat numërohen nga 1 brenda çdo parashtese. Rendi është: kolonat, pastaj trarët, diagonalet dhe pllakat; brenda një lloji, sipas emrit të profilit në rend natyror (W8x10 para W12x26); pastaj pjesët më të gjata së pari.

Meqenëse numërimi ndjek atë rend, shtimi ose ndryshimi i një pjese mund të zhvendosë numrat e të tjerave.

## Shenjat e montimeve

- Çdo pjesë që nuk është saldur me një pjesë tjetër është pjesa kryesore e montimit të vet.
- Pllakat e skajit saldohen te trari i tyre, dhe pllakat e themelit te kolona e tyre, kështu që i takojnë montimit të atij elementi.
- Dy montime ndajnë një shenjë kur pjesët e tyre kryesore ndajnë një shenjë pjese dhe pjesët e bashkangjitura kanë të njëjtat shenja në të njëjtat vende (brenda 1 mm), duke lejuar të njëjtat kthesa si pjesa kryesore.
- Parashtesa e montimit ndjek pjesën kryesore: një trari me dy pllaka skaji është montim B.

Pllakat që vendos me mjetin {{ui:Pllaka}} nuk janë saldur me asgjë, kështu që çdo njëra është montimi i vet P.

## Shenjat e themeleve

Themelet me të njëjtën gjatësi, gjerësi, thellësi, specifikim betoni, rrjetë të poshtme dhe shufra fillestare ndajnë një shenjë: F1, F2 … sipas radhës së vendosjes. Pozicioni dhe rrotullimi nuk llogariten.

## Shenjat e shufrave

Shufrat me të njëjtën madhësi, formë dhe dimensione A, B dhe C (të rrumbullakosura në milimetër) ndajnë një shenjë në të gjithë themelet. Shenja është numri i shufrës, F, dhe një numërues për çdo madhësi shufre: 5F1, 5F2, 6F1. Një shufër në drejtimin e gjatë dhe një shufër në drejtimin e shkurtër të një themeli katror janë e njëjta shufër dhe ndajnë një shenjë; kolona {{ui:Përdoret për}} e tabelës tregon të dyja përdorimet.
