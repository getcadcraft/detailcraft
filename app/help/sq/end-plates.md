---
title: Lidh trarët me kolonat me pllaka skaji
summary: Shto pllaka skaji të bulonuara aty ku një trarë takon flanxhën ose shtyllën e kolonës, vendos pllakën, bulonat dhe saldimin, dhe kopjo lidhjen në çdo nyje të ngjashme.
keywords: pllakë skaji, endplate, lidhje momenti, lidhje e bulonuar, nyje, bulona, saldim, pllakë skaji e zgjatur, rrafsh, i ngjashëm, kopjo lidhjen, përbërës
from: 21e028b2
---

Një lidhje me pllakë skaji saldon një pllakë në skajin e trarit dhe e bulonon në flanxhën ose shtyllën e kolonës. DetailCraft e vendos pllakën, pret trarin prapa, shpon vrima që përputhen në pllakë dhe në flanxhën e kolonës, shton bulonat dhe saldimin, dhe kontrollon distancat nga skaji dhe hapësirat.

:::warning
DetailCraft nuk projekton lidhje. Cilësimet janë vlera fillestare që ti duhet t'i ndryshosh; asgjë nuk kontrollon qëndrueshmërinë. Paralajmërimet për skajin dhe hapësirën përdorin minimumet e EN 1993-1-8 Tabela 3.3, që mund të ndryshojnë nga rregullat me të cilat punon ti.
:::

## Çfarë mund të lidhë

- Një trarë **i nivelit** (të dy skajet në të njëjtin lartësi), vertikal (rrotullim 0), me profil formë I.
- Në **flanxhën** ose **shtyllën** e një kolone formë I **vertikale**, pingul me të.
- Skaji i trarit duhet të ndodhet mbi vijën e kolonës, midis fundit dhe majës së kolonës.

Trarët e pjerrët ose me kënd dhe seksionet jo-I refuzohen me arsye: përdor [pllaka prerëse](topic:shear-tabs) për ato. Mbi një shtyllë, pllaka dhe flanxhat e trarit duhet të futen midis flanxhave të kolonës; DetailCraft paralajmëron kur nuk futen.

:::tip
Në rrotullim 0 flanxhat e kolonës shikojnë përgjatë drejtimit të rrjetit të numëruar (x). Një trarë që shkon nga A në B takon shtyllën dhe merr një pllakë skaji mbi shtyllë.
:::

## Shto pllaka skaji te një trarë

1. Zgjidh {{ui:Përzgjidh}} ({{key:V}}) dhe kliko trarin.
2. Zgjidh {{ui:Pllaka skaji}} në grupin {{ui:Lidh}}, ose {{ui:Shto pllaka skaji}} në panelin {{ui:Vetitë}}.
3. Çdo skaj i lirë i trarit që takon një flanxhë ose shtyllë kolone në kënd të drejtë merr një pllakë. Shiriti i statusit thotë "2 pllaka skaji u shtuan. Përzgjidh një për të ndryshuar pllakën, bulonat dhe saldimin; {{ui:Të ngjashme}} e kopjon te nyjet si ajo."
4. Pllaka e parë e re është e përzgjedhur, dhe cilësimet e saj janë në panelin {{ui:Vetitë}}.

Nëse nuk ndodh asgjë, lexo shiritin e statusit:

- "Ky trarë nuk mbaron mbi një vijë kolone. Pllakat e skajit vendosen aty ku skaji i trarit takon një kolonë vertikale."
- "Ky trarë takon një kolonë me kënd ose pjerret: pllakat e skajit ndërtohen për nyje katrore dhe të niveluara. Përdor Pllakat prerëse."
- "Të dy skajet kanë tashmë lidhje."

## Ndrysho pllakën, bulonat dhe saldimin

Kliko pllakën e skajit (ose një nga bulonat e saj) për të përzgjedhur lidhjen. Nën {{ui:Pllaka, bulonat dhe saldimi (mm)}}:

| Cilësimi | Parazgjedhja | Çfarë bën |
|---|---|---|
| Trashësia e pllakës | 20 | Trashësia e pllakës; gjithashtu sa pritet trari prapa flanxhës |
| Gjerësia e pllakës | 180 | Përgjatë nyjes |
| Zgjatja mbi trarë | 0 | Mbi flanxhën e sipërme; mbi 0 bën një pllakë skaji të zgjatur |
| Zgjatja nën trarë | 0 | Nën flanxhën e poshtme |
| Diametri i bulonit | 20 | Madhësia nominale e bulonit |
| Diametri i vrimës | 22 | Hapësira jote e lirë në pllakë dhe në flanxhën e kolonës |
| Klasa e bulonit | A325 | Tekst; shtypet në listën e materialeve |
| Rreshtat e bulonave | 4 | Rreshta me dy bulona, të qendërzuar mbi lartësinë e pllakës |
| Hapi i rreshtit | 75 | Hapësira vertikale midis rreshtave |
| Kalibri | 100 | Hapësira horizontale midis dy bulonave të një rreshti |
| Shtesa e gjatësisë së bulonit | 30 | Shtohet te kapja për dadon, rondelën dhe filetin; shih më poshtë |
| Madhësia e saldimit me filetë | 8 | Përreth gjithë skajit të trarit |
| Materiali i pllakës | A36 | Tekst |

Shkruaj një vlerë të re dhe shtyp {{key:Enter}} ose {{key:Tab}}. Pllaka, vrimat, bulonat dhe gjatësia e prerjes së trarit përditësohen menjëherë. Çdo ndryshim është një hap zhbërjeje.

Poshtë cilësimeve shikon çfarë bën lidhja:

- {{ui:Bulonat}}: për shembull "8 × 20 × 70 A325 (kapja 36.2)".
- {{ui:Saldimi}}: madhësia, vendi dhe gjatësia e tij.
- {{ui:Pllaka}}: madhësia dhe shenja e elementit të saj.

### Si llogariten numrat

- Trarit i preret prapa gjysma e thellësisë së kolonës (në shtyllë: gjysma e trashësisë së shtyllës) plus trashësia e pllakës, që pllaka të ulet mbi sipërfaqe.
- Lartësia e pllakës është thellësia e trarit plus dy zgjatjet.
- Gjatësia e bulonit = kapja (trashësia e pllakës + trashësia e flanxhës ose shtyllës së kolonës) + shtesa, e rrumbullakosur lart në 5 mm të ardhshme.
- Gjatësia e saldimit të treguar është perimetri i seksionit të trarit.

### Paralajmërimet

Lidhja ndërtohet edhe kështu, por këto shfaqen nën të dhe në skedën {{ui:Problemet}}:

- Rreshta bulonash ose bulona më afër skajit të pllakës sesa 1,2 × diametri i vrimës.
- Hapi i rreshtit nën 2,2 × diametri i vrimës, ose kalibri nën 2,4 × diametri i vrimës.
- Vrima që hyjnë në shtyllën e kolonës ose filetin e saj, ose dalin jashtë flanxhës së kolonës.
- Një pllakë më e gjerë se flanxha e kolonës, ose (në shtyllë) më e gjerë se hapësira midis flanxhave; flanxha të trarit që nuk futen midis tyre.
- Një rresht bulonash shumë afër flanxhës së trarit, ose një kalibër shumë i ngushtë për shtyllën e trarit dhe saldimin e tij.

## Kopjo te çdo nyje e ngjashme

1. Përzgjidh lidhjen që ke konfiguruar.
2. Zgjidh {{ui:Apliko te të ngjashmet (n)}} në panelin {{ui:Vetitë}}, ose {{ui:Të ngjashme}} në menunë {{ui:Më shumë}} të grupit {{ui:Lidh}}. Numri në kllapa është sa nyje do ta marrin.
3. Çdo nyje me të njëjtin profil trarë dhe të njëjtin profil kolone, trarë në të njëjtin lloj faqeje, që ende nuk ka lidhje, merr një kopje me të njëjtat cilësime. Shiriti i statusit thotë sa janë.

Kopjet janë të pavarura: ndryshimi i njërës më vonë nuk ndryshon të tjerat. Nyjet që kanë tashmë një lidhje lihen të qeta; fshiji ato së pari nëse dëshiron t'i zëvendësosh.

## Lëvizja dhe fshirja

Lidhjet rikrijohen nga cilësimet e tyre sa herë ndryshon modeli, kështu që lëvizja ose ndryshimi i madhësisë së një trari ose kolone merr me vete pllakat e skajit. Nëse një ndryshim do të thotë se nyja nuk përshtatet më, lidhja mbetet në model dhe skeda {{ui:Problemet}} thotë pse, për shembull "Skaji i trarit nuk është më mbi vijën e kolonës."

Për të fshirë një lidhje, përzgjidhe dhe shtyp {{key:Delete}}. Fshirja e trarit ose e kolonës fshin edhe lidhjet e tyre.

Tjetra: [Shto pllaka baze dhe bulona ankerimi](topic:base-plates).
