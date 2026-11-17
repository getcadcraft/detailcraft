---
title: Stoku i furnitorit dhe kohët e dorëzimit
summary: Kontrollo shiritat e stokut që blen lista e prerjeve me listën e stokut të një furnitori: a ka mjaftueshëm, dhe sa duhet pritur?
keywords: furnitor, stok, kohë dorëzimi, depo çeliku, fabrikë, disponueshmëri, porosi e prapambetur, shirita, prokurim, furnizim
from: 1373f5a3
---

Skheda {{ui:Furnizimi}} kërkon çdo profil që blen {{ui:Listë prerjesh}} në listën e stokut të një furnitori. Skedari mbetet në model; asgjë nuk dërgohet askund.

## Shto skedarin e furnitorit

Shtyp {{ui:Shto një skedar furnitori}} dhe zgjidh një CSV nga furnitori yt (të ndarë me presje, pikëpresje ose tab). Duhet një kolonë për artikullin ose profilin (Item, Name, Description, Section, SKU), dhe një për stokun (In stock, Quantity, On hand) ose për kohën e dorëzimit. Njësia (each, metres, kilograms, tonnes), çmimi, furnitori dhe data e rimbushjes lexohen kur ka kolonë për to. Fjalët kuptohen gjithashtu: "Out of stock", "In stock", "2-3 weeks", "backorder". Mund të mbahen deri në pesë skedarë; shtimi i një skedari me të njëjtin emër e zëvendëson atë.

## Çfarë shihni

Për çdo profil që blen lista e prerjeve, tabela tregon çfarë kërkon modeli, çfarë ka në stok, kohën e dorëzimit, furnitorin dhe një rezultat:

- **Mbuluar:** ka mjaftueshëm në stok.
- **Mungon:** stoku është nën nevojën. Nëse stoku është nën nevojën dhe vendos një pritje maksimale, koha e dorëzimit tregon sa zgjat pjesa tjetër.
- **Shumë vonë:** nuk ka shifër stoku dhe koha e dorëzimit është më e gjatë se pritja që pranon.
- **Pa shifër stoku:** skedari nuk e thotë.
- **Njësi tjetër:** furnitori e liston profilin në një njësi që modeli nuk mund ta japë.

Nevoja e modelit jepet në shirita (nga lista e prerjeve të rregulluar, me gjatësitë e stokut tuaj), në metra shiriti të blerë dhe në kilogramë (pesha e profilit për metër), dhe përdoret njësia e vetë skedarit. Një profil përputhet sipas emrit të tij ("W16 X 26" dhe "w16x26" janë të njëjta). Profilet që nuk janë në skedar listohen.

Profilet që mungojnë dhe ato të vonuara janë te paneli {{ui:Problemet}}. Këtu asgjë nuk porosit.

## Kufizimet

Shifrat e stokut dhe kohët e dorëzimit janë të skedarit, siç ishin ditën që u bë. Pllakat nuk rregullohen, prandaj nuk kërkohen. Skedari vetëm lexohet: çdo udhëzim brenda tij është thjesht tekst.
