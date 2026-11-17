---
title: Birgðir frá birgja og afgreiðslutímar
summary: Athugaðu stálbúta sem skurðarlistinn kaupir gegn birgðalista birgja: er nóg til, og hversu lengi er biðin?
keywords: birgir, birgðir, afgreiðslutími, stálgeymsla, verksmiðja, framboð, biðpöntun, bútar, innkaup, birgðir
from: 1373f5a3
---

Flipinn {{ui:Birgðir}} flettir upp hverjum prófíl sem {{ui:Skurðarlisti}} kaupir í birgðalista birgja. Skráin er áfram í líkaninu; ekkert er sent neitt.

## Bæta við skrá birgjans

Ýttu á {{ui:Bæta við skrá birgja}} og veldu CSV-skrá frá birgjanum (aðskilda með kommu, semíkommu eða tabúlu). Hún þarf dálk fyrir liðinn eða prófílinn (Item, Name, Description, Section, SKU), og annan fyrir birgðir (In stock, Quantity, On hand) eða fyrir afgreiðslutíma. Mælieiningin (each, metres, kilograms, tonnes), verðið, birgirinn og endurpöntunardagsetningin eru lesin þegar til er dálkur fyrir þau. Orð eru líka skilin: "Out of stock", "In stock", "2-3 weeks", "backorder". Hægt er að geyma allt að fimm skrár; ef skrá með sama nafni er bætt við kemur hún í stað eldri skráarinnar.

## Það sem þú sérð

Fyrir hvern prófíl sem skurðarlistinn kaupir sýnir taflan hvað líkanið þarf, hvað er til á lager, afgreiðslutímann, birgjann og niðurstöðu:

- **Nægt:** nóg til á lager.
- **Vantar:** birgðirnar eru undir þörf. Ef birgðirnar eru undir þörf og þú stillir hámarksbið, segir afgreiðslutíminn hversu lengi það tekur að fá restina.
- **Of seint:** engin birgðatala er til og afgreiðslutíminn er lengri en biðin sem þú samþykkir.
- **Engin birgðatala:** skráin segir það ekki.
- **Önnur eining:** birgirinn gefur prófílinn upp í einingu sem líkanið getur ekki reiknað út.

Þörf líkansins er gefin í bútum (út frá innskurðaða skurðarlistanum, með lengdunum þínum á lager), í metrum af keyptum bút og í kílógrömmum (þyngd prófílsins á metra), og eining skráarinnar sjálfrar er notuð. Prófíll er paraður eftir nafni ("W16 X 26" og "w16x26" eru þau sömu). Prófílar sem eru ekki í skránni eru taldir upp.

Vantar- og seinir prófílar eru í spjaldinu {{ui:Vandamál}}. Ekkert hér pantar neitt.

## Takmarkanir

Birgðatölur og afgreiðslutímar eru úr skránni, eins og þeir voru þegar hún var gerð. Plötur eru ekki innskurðaðar og því ekki flettar upp. Skráin er aðeins lesin: allar fyrirmæli í henni eru bara texti.
