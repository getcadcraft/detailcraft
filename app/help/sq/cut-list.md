---
title: Lista e prerjeve
summary: Vendos trarët, kolonat, diagonalet dhe shtyllat e shkallëve në gjatësi stoku me gjerësinë e prerjes së sharrës, dhe shiko sa shirita të blesh dhe mbetjet.
keywords: lista e prerjeve, vendosje, gjatësi stoku, shirit, prerje sharre, gjerësia e prerjes, mbetje, skarto, kombinim, blerje, shumëfish
from: 81d06ce5
---

Skeda {{ui:Listë prerjesh}}, nën pamjen, llogarit se si të priten elementët linearë të modelit nga shirita të stokut: sa shirita të çdo gjatësie të blesh për çdo profil dhe material, çfarë shkon në çdo shirit, dhe mbetjet.

## Vendos stokun

Në krye të skedës:

- **Gjatësitë e stokut (mm):** gjatësitë që mund të blesh, të ndara me hapësira, për shembull `6000 12000`, ose shiritat 20 ft dhe 40 ft si `6096 12192`. Deri në tetë.
- **Gjerësia e prerjes së sharrës (mm):** sa merr secila prerje (3 në fillim).
- **Prerja e fundit (mm):** pritet fundi i çdo shiriti para copës së parë (0 në fillim).
- **Mbaj mbetjet nga (mm):** një mbetje të paktën kaq e gjatë kthehet në stok; më e shkurtër është skarto (500 në fillim).

Këto ruhen në këtë shfletues, si cilësimet e tjera [cilësimet](topic:settings).

## Si vendoset

- Çdo trarë, kolonë, diagonale dhe shtyllë shkalle, sipas shenjës së elementit dhe numrit; pllakat priten nga fletë dhe nuk vendosen këtu.
- Çdo profil dhe material veçmas.
- Copat më të gjata së pari, secila në shiritin e parë ku futet; një shirit i ri fillon si gjatësia më e gjatë e stokut. Pastaj çdo shirit blihet si gjatësia më e shkurtër e stokut që ende i mban prerjet e tij.
- Çdo prerje merr gjerësinë e sharrës (asnjë pas një prerjeje që mbaron saktë në fund të shiritit); çdo shirit humbet prerjen e fundit.
- Një copë më e gjatë se çdo gjatësi stoku listohet nën **Më e gjatë se çdo stok**, pa u vendosur: bashkoje (shih [Bashkimet](topic:splices)) ose shto një gjatësi stoku më të gjatë.

## Lexoje

- **Përmbledhja:** për çdo profil dhe material, copat, shiritat për t'u blerë (për shembull "2 × 12000, 1 × 6000"), metrat e blerë dhe të përdorur, dhe mbetjet.
- **Shiritat dhe prerjet e tyre:** çdo shirit, gjatësia e stokut të tij, prerjet e tij si shenjë elementi dhe gjatësi, dhe mbetja, e mbajtur ose skarto.

{{ui:Shkarko CSV}} ruan të dy tabelat si `<name> cut list.csv`.

DetailCraft nuk vendos pllaka brenda fletëve, dhe nuk përzien profile ose materiale në një shirit.
