---
title: Splices
summary: Pagdugtungin ang dalawang piraso ng beam o column nang dulo-sa-dulo gamit ang mga bolted na flange at web cover plate.
keywords: splice, beam splice, column splice, cover plate, splice plate, flange plate, web plate, bolted splice, joint, lift, connect
from: 97d141c2
---

Pinagdudugtong ng bolted splice ang dalawang piraso ng iisang I-shape nang dulo-sa-dulo: isang cover plate sa labas ng bawat flange at isang plate sa bawat gilid ng web, na naka-bolt sa parehong piraso. Pinuputol ng DetailCraft ang mga piraso pabalik sa agwat, inilalagay ang apat na plate, binubutas ang mga plate at ang parehong piraso, dinadagdagan ang mga bolt, at nagbababala tungkol sa edge distance, spacing, at fit.

## Saan ito gumagana

- Dalawang beam, o dalawang column lift, ng **parehong I-shape profile**, nagtatagpo **dulo-sa-dulo at nasa linya**: ang mga dulo ay hindi lalampas sa 50 mm ang layo, ang mga piraso ay magkatapat at nasa iisang linya (sa loob ng 1 mm). Maaaring iguhit ang alinmang piraso sa alinmang direksyon.
- Gumagana ang pahalang, nakahilig, at patayong mga piraso.
- Tinatanggihan ang dalawang piraso na magkaiba ang lalim o lapad ng flange, gayundin ang channel, angle, at tube.

## Magdagdag ng splice

1. Iguhit ang dalawang piraso para magtagpo ang mga ito nang dulo-sa-dulo. Para hatiin ang isang member na nakaguhit na, iguhit itong muli bilang dalawang piraso.
2. Piliin ang isa (o pareho) at piliin ang {{ui:Splice}} sa menu na {{ui:More}} ng grupong {{ui:Connect}}.
3. Makakakuha ng splice ang bawat libreng joint ng mga napiling piraso sa ibang piraso ng parehong profile. Sinasabi ng status bar kung ilan.

Piliin ang splice (i-click ang isa sa mga plate nito) para baguhin ang mga setting nito sa right panel. Kinokopya ng {{ui:Apply to similar (n)}} ito sa bawat ibang libreng joint sa pagitan ng mga piraso ng parehong profile.

## Mga setting (mm)

| Setting | Default | Ano ang ginagawa nito |
|---|---|---|
| Gap between the ends | 10 | Pinuputol ang bawat piraso pabalik ng kalahati nito |
| Bolt diameter, hole, grade, length allowance | 20, 22, A325, 30 | Gaya ng sa end plates |
| Flange plate thickness | 12 | Kasing-lapad ng flange ang plate |
| Flange bolt rows (each side) | 3 | Mga hanay ng bolt sa buong flange sa bawat gilid ng joint |
| Flange bolt pitch | 75 | Sa kahabaan ng member |
| Flange bolt gauge | 0 | Sa pagitan ng dalawang linya ng bolt; 0 = lapad ng flange na bawas 80 |
| Flange end distance | 40 | Mula sa dulo ng member hanggang sa unang bolt, at mula sa huling bolt hanggang sa dulo ng plate |
| Web plate thickness | 8 | Isa sa bawat gilid ng web |
| Web bolt rows | 3 | Paitaas sa web, nakasentro |
| Web bolt columns (each side) | 2 | Sa kahabaan ng member sa bawat gilid ng joint |
| Web bolt pitch, up the web / along the member | 75, 75 | |
| Web end distance | 40 | Gaya ng sa flanges |
| Web plate height | 0 | 0 = ang malinaw na web sa pagitan ng mga fillet, bawas 10 sa itaas at ibaba |
| Plate material | A36 | Teksto |

Sumusunod ang haba ng plate sa mga bolt: flange plate = gap + 2 × (2 × end distance + (rows − 1) × pitch); ganoon din ang web plates kasama ang kanilang mga column. Sa mga default, 470 ang haba ng flange plates.

## Mabuting malaman

- Ang mga plate ay kabilang sa **unang piraso na iginuhit** sa dalawa (tinatawag itong first piece sa properties nito): lumalabas ang mga ito sa assembly drawing nito at kasama itong ipinapadala, naka-bolt, hindi welded. Ang assembly drawing ng ikalawang piraso ay nagpapakita lamang ng mga butas nito.
- Kumakapit ang flange bolts sa flange at sa plate nito; kumakapit ang web bolts sa web at sa dalawang web plate. Nakalista nang hiwalay sa properties ang haba ng mga bolt.
- Ang mga babala ay gumagamit ng parehong pinakamababang halaga ng EN 1993-1-8 gaya ng ibang connection (end at edge distance na 1.2 × hole, pitch na 2.2 × hole sa haba at 2.4 × hole sa kabila), kasama ang web plate na mas malalim kaysa sa malinaw na web at mga flange bolt na masyadong malapit sa web para sa fillet.
- Hindi dinidisenyo ng DetailCraft ang splice (walang strength check), at hindi ito gumagawa ng fill plate para sa mga piraso ng magkaibang kapal.
- Ang pagkopya sa parehong piraso ay kinokopya ang kanilang splice; ang pagbura sa alinman sa mga piraso ay binubura rin ito.
