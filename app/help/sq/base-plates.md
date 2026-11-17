---
title: Shto pllaka baze dhe shufra ankorimi
summary: Vendos një pllakë baze të saldosur me katër shufra ankorimi nën një kolonë, cakto përmasat e saj dhe kopjoje te çdo kolonë e ngjashme.
keywords: pllakë baze, base plate, shufra ankorimi, anchor rods, bulona ankorimi, bulona mbajtëse, bazë kolone, bulona themeli, e ngjashme
from: 619ebc64
---

Një lidhje me pllakë baze vendos një pllakë nën kolonë, e shkurton kolonën me trashësinë e pllakës, i saldon të dyja së bashku dhe shton katër shufra ankorimi që kalojnë përmes vrimave të pllakës.

:::warning
Përmasat janë vlera fillestare, jo projekt. DetailCraft nuk kontrollon mbajtjen, forcën e shufrave ose thellësinë e futjes.
:::

## Shto një pllakë baze

1. Përdor {{ui:Select}} ({{key:V}}) dhe kliko një kolonë. Ajo duhet të jetë vertikale.
2. Zgjidh {{ui:Base plate}} te grupi {{ui:Connect}}, ose {{ui:Add base plate}} te paneli {{ui:Properties}}.
3. Shiriti i gjendjes thotë: "Pllaka e bazës u shtua me katër shufra ankorimi." Lidhja e re zgjidhet.

Një kolonë mund të ketë një pllakë baze. Nëse ka tashmë një, shiriti i gjendjes thotë: "Kjo kolonë ka tashmë një pllakë baze."

## Ndrysho

Zgjidh pllakën e bazës (kliko pllakën ose një shufër). Te {{ui:Plate, bolts and weld (mm)}}:

| Cilësimi | Parazgjedhja | Çfarë bën |
|---|---|---|
| Trashësia e pllakës | 25 | Kolona shkurtohet aq |
| Gjatësia e pllakës | 450 | Përgjatë thellësisë së kolonës |
| Gjerësia e pllakës | 400 | Tërthor kolonës |
| Diametri i shufrës | 20 | Përmasa e shufrës së ankorimit |
| Diametri i vrimës | 33 | Vrima në pllakë |
| Klasa e bulonit | F1554 Gr 36 | Klasa e shufrës, si tekst |
| Hapësira e shufrave (sipas thellësisë) | 350 | Midis qendrave të shufrave, përgjatë gjatësisë së pllakës |
| Hapësira e shufrave (tërthor) | 300 | Midis qendrave të shufrave, tërthor |
| Dalja e shufrës mbi pllakë | 100 | Nga maja e pllakës deri në majën e shufrës |
| Futja e shufrës nën pllakë | 450 | Nga fundi i pllakës poshtë në betonin |
| Përmasa e saldimit të cepit | 8 | Rreth gjithë bazës së kolonës |
| Materiali i pllakës | A36 | Tekst |
| Hapësira e llaçit | 0 | Hapësira midis sipërfaqes së betonit dhe fundit të pllakës |
| Forcuesit | Asnjë | Zgjidh Asnjë, 2 (në vijë me shpinën) ose 4 (edhe pingul me të); shih më poshtë |
| Trashësia, lartësia e forcuesit | 12, 150 | |
| Thellësia e dhëmbëzës kundër prerjes | 0 | Sa thellë zbret dhëmbëza nën pllakë; 0 = pa dhëmbëz |
| Trashësia, gjerësia e dhëmbëzës | 25, 150 | |
| Rondelet e pllakës | Asnjë | Te çdo shufër, ose asnjë |
| Përmasa, trashësia e rondelës | 0, 0 | 0 = minimumi nga AISC Design Guide 1 për shufrën |

Gjatësia e shufrës = futja + hapësira e llaçit + trashësia e pllakës + dalja. Me parazgjedhjet kjo është 575 mm.

## Detajet e bazës: llaçi, forcuesit, dhëmbëza, rondelet

Të katër janë të fikura te një pllakë e re baze, dhe te pllakat e bazës nga modelet e bëra para DetailCraft 0.4.

- **Hapësira e llaçit.** Pllaka qëndron kaq lart mbi sipërfaqen e betonit, dhe shufrat bëhen aq më të gjata. AISC Design Guide 1 (2.10) sugjeron 1 in. mbi dysheme të përfunduar dhe 1½ deri 2 in. mbi themel ose shtyllë; më shumë për pllaka të mëdha dhe për pllaka me dhëmbëz prerjeje.
- **Forcuesit.** Pllaka vertikale të saldosura në kolonë dhe në pllakë, nga sipërfaqja e kolonës deri në skajin e pllakës, si drejtkëndësha (ende pa thyerje këndi ose konicitet). **2** qëndrojnë në vijë me shpinën, përtej çdo flanxhe; **4** shton dy pingul me shpinën, midis flanxhave, deri te anët e pllakës. Te kolona me tub ato qëndrojnë në mes të çdo sipërfaqeje. Secili është i saldosur në kolonë dhe në pllakë në të dy anët.
- **Dhëmbëza kundër prerjes.** Një pllakë e saldosur rreth e qark nën pllakën e bazës, në vijë me thellësinë e kolonës, në qendër. DetailCraft paralajmëron nëse ajo nuk është më e thellë se hapësira e llaçit. Ajo nuk e pret xhepin në themel; [kontrolli i përplasjeve](topic:clash-check) i lë dhëmbëzën dhe themelin jashtë për këtë arsye.
- **Rondelet e pllakës.** Një rondele katrore pllake te çdo shufër, e vendosur mbi pllakën e bazës, e listuar në montimin e kolonës si e lirë (e dërguar me kolonën, jo e saldosur: Design Guide 1, 2.6). Me përmasë dhe trashësi 0, DetailCraft merr rondelen minimale nga AISC Design Guide 1, botimi i 2-të, Tabela 2.3 për shufrën; një shufër metrike merr përmasën e radhës në inç (një shufër M20 merr rreshtin 7/8 in.: 2½ in. × 5/16 in.). Paneli i vetive tregon përmasën e përdorur. Vrima e rondelës është diametri i shufrës + 1/16 in.: kjo është zgjedhja e DetailCraft, tabela nuk jep një të tillë. DetailCraft paralajmëron kur shufrat mund të mos dalin mjaft larg për rondelen dhe dadon (dalja më e vogël se trashësia e rondelës + diametri i shufrës).

Design Guide 1, Tabela 2.3, rekomandon gjithashtu vrimën e shufrës në pllakë: 1-5/16 in. për shufër ¾ in., 1-9/16 in. për ⅞ in., 1-13/16 in. për 1 in. DetailCraft nuk e ndryshon përmasën e vrimës tuaj.

Paralajmërime shfaqen gjithashtu kur vrimat e shufrave janë më afër se 1.2 × diametri i vrimës nga skaji i pllakës, kur shufrat bien brenda konturit të kolonës, ose kur pllaka është më e vogël se kolona.

## Kopjoje te kolonat e ngjashme

1. Zgjidh pllakën e bazës.
2. Zgjidh {{ui:Apply to similar (n)}}, ose {{ui:Similar}} te menyja {{ui:More}} e grupit {{ui:Connect}}.
3. Çdo kolonë vertikale me të njëjtin profil që nuk ka pllakë baze dhe nuk qëndron mbi një kolonë tjetër merr një kopje.

## Pllakat e bazës dhe themelet

Një pllakë baze nuk ka nevojë për themel, dhe një themel nuk e di pllakën e bazës mbi të: shufrat e ankorimit nuk lidhen me hekurin e themelit. Përdor {{ui:Footing}} për të vendosur themelet; shih [Vendos themelet me armaturë](topic:footings-and-rebar).
