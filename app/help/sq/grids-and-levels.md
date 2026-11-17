---
title: Konfiguro rrjetet dhe nivelet
summary: Shkruaj vijat e rrjetit, distancat e tyre dhe nivelet ku vendoset çdo element.
keywords: rrjet, rrjete, akse, vija të rrjetit, nivele, kota, kate, dysheme, distancë, konfigurim
from: 9cad233c
---

Çdo element në DetailCraft vendoset në një kryqëzim rrjeti në një nivel. Cakto fillimisht rrjetet dhe nivelet; mund t'i ndryshosh më vonë.

## Si funksionojnë rrjetet këtu

- **Vijat e numëruara** shkojnë në një drejtim, **vijat me shkronja** në tjetrin. Emrat janë vetëm zakon: një etiketë mund të jetë çdo tekst deri në 8 karaktere (1, 2, 3 ose A1, A2, ose 10, 20).
- Shkruan etiketat dhe distancat ndërmjet tyre, jo koordinatat. Vija e parë e çdo grupi është në 0.
- Vijat e numëruara janë vija me x konstant; vijat me shkronja janë vija me y konstant. Kështu një tra nga rrjeti 1 në rrjetin 2 shtrihet përgjatë x, dhe një tra nga A në B shtrihet përgjatë y.
- Të gjitha vlerat janë në milimetra.

Një model i ri fillon me vijat e numëruara 1 2 3 në 6000 6000, vijat me shkronja A B në 6000, dhe dy nivele.

## Cakto rrjetet

1. Në panelin {{ui:Modeli}} në të majtë, hap {{ui:Rrjetet}} nëse është e palosur.
2. Te {{ui:Vijat me numra}}, shkruaj etiketat e ndara me hapësira, për shembull `1 2 3 4 5`.
3. Te fusha {{ui:Distancat}} poshtë saj, shkruaj një distancë për çdo hapësirë, për shembull `6000 6000 7500 6000`. Katër hapësira për pesë vija.
4. Bëj të njëjtën te {{ui:Vijat me shkronja}} dhe {{ui:Distancat}} e saj, për shembull `A B C` dhe `8000 8000`.
5. Zgjidh {{ui:Zbato rrjetet}}.

Shiriti i statusit thotë "Rrjetet u përditësuan." dhe pamja zmadhohet te rrjeti i ri. Presjet funksionojnë gjithashtu si ndarës.

Nëse diçka nuk përputhet, asgjë nuk ndryshon dhe shiriti i statusit thotë arsyen, për shembull "Rrjetet e numëruara: jep një distancë midis çdo çifti vijash (4)." Kontrolle të tjera: distancat duhet të jenë milimetra pozitivë, etiketat duhet të jenë të ndryshme, dhe mund të ketë më së shumti 60 vija në çdo drejtim.

:::note
Elementët ruajnë koordinatat e tyre kur lëvizin rrjetet. Nëse ndryshon një distancë pasi ke vendosur çelik, çeliku mbetet aty ku ishte dhe nuk është më në rrjet. Ndrysho fillimisht rrjetin, ose lëviz elementët duke redaktuar koordinatat e skajeve të tyre.
:::

## Cakto nivelet

1. Hap {{ui:Nivelet}} në panelin {{ui:Modeli}}.
2. Çdo rresht ka një emër niveli dhe kotën e tij në milimetra. Redakto ato sipas dëshirës.
3. Zgjidh {{ui:Shto nivel}} për një rresht tjetër. Emërtohet "Niveli 3" (e kështu me radhë) dhe vendoset 4000 mm mbi nivelin më të lartë; ndrysho të dyja nëse të duhet.
4. Për të hequr një nivel, zgjidh butonin × në fund të rreshtit të tij.
5. Zgjidh {{ui:Zbato nivelet}}.

Asgjë nuk ndryshon deri sa zgjedh {{ui:Zbato nivelet}}. Nivelet renditen sipas kotës kur zbatohen. Çdo nivel ka nevojë për emër, dy nivele nuk mund të ndajnë të njëjtin emër, dhe duhet të mbash të paktën një nivel.

Nivelet mund të jenë nën zero (një bodrum në `-3500`) dhe nuk kanë nevojë të jenë të ndara njëtrajtshëm.

## Si përdoren nivelet

- Një kolonë e vendosur në një nivel shkon deri në nivelin tjetër, ose te niveli që zgjedh te {{ui:Deri në}}.
- Trarët dhe pllakat vendosen ndërmjet dy kryqëzimeve në nivelin ku klikon.
- Themelet vendosen me pjesën e sipërme në nivelin ku klikon.
- {{ui:Planimetria}} shikon nga lart një nivel në të njëjtën kohë.
- Eksporti IFC krijon një kat ndërtese për çdo nivel.

## Zhbërja

Ndryshimet e rrjetit dhe niveleve janë redaktime si çdo tjetër: {{key:Mod+Z}} e kthen rrjetin e mëparshëm.

## Më pas

[Vendos kolonat, trarët dhe diagonalet](topic:place-members)
