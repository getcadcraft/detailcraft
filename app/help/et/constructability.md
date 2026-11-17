---
title: Ehitatavuse kontrollid
summary: Probleemid asjadele, mida detailija märkab silmaga: polt, kuhu mutrivõti ei ulatu, poldid liiga lähestikku tuubivõtme jaoks, nurkkeevised väljaspool suuruspiire, keevised, kuhu põleti ei ulatu, ja torud, mis hoiavad vett.
keywords: ehitatavus, mutrivõti, tuubivõti, polti ligipääs, pingutamine, keevise suurus, nurkkeevis, minimaalne keevis, maksimaalne keevis, vesi, ventilatsiooniava, drenaažiava, tsinkimine, õõnesprofiil, probleemid
from: 72315151
---

DetailCraft otsib nelja liiki probleeme, mida ükski tugevuskontroll ei leia, ja loetleb need paneelil {{ui:Probleemid}}. Need on hoiatused ja märkmed, mida tuleb vaadata, mitte vead: mudel ehitatakse ikka.

## Polt, mida mutrivõti ei ulatu

Iga polti kohta paneb DetailCraft pea ja mutri kohale tuubivõtme. Tuubivõti on silinder, mis on sama lai kui mutri nurkadevaheline mõõt pluss 4 mm sein, 60 mm pikk. Kui talaliide, flanš, plaat või diagonaal seisab selles silindris, nimetab probleem liite, poltide arvu, takistava osa ja selle, kui kaugel see polt on.

Tuubivõti on tüüpiline löökpadrun. Mutrivõti vajab vähem ruumi ja suurem tööriist rohkem. Palu oma ühendatud abilisel käivitada `constructability_check` teise `socketLength`-iga, et näha, kuidas vastus muutub.

## Poldid liiga lähestikku tuubivõtme jaoks

Tuubivõti ühe polti kohal ei tohi puudutada järgmise polti pead. Liite poldid, mis on lähemal kui tuubivõtme laius pluss naabri pea, on loetletud leitud vahe ja vajaliku vahega.

## Nurkkeevise suurused

AISC 360-16 tabel J2.4 määrab väikseima nurkkeevise õhema osa paksuse järgi (3 mm kuni 6.35 mm paksuseni, 5 mm kuni 12.7, 6 mm kuni 19.05, 8 mm üle selle) ja J2.2b suurima serva järgi: ei suurem kui materjal, kui see on õhem kui 6.35 mm, muidu 1.6 mm vähem. Samal paksusel sama suurusega liited on loetletud ühe probleemina.

Kasutatav paksus on keevises nimetatud kõige õhem osa, seega on loetletud 8 mm keevis kõikjal ümber 6.35 mm võrguga tala.

## Vesi ja ventilatsioon

- **Avatud ülemine ots** õõnesprofiilil, mis seisab püsti või kaldub rohkem kui 10° võrra, laseb vihma sisse.
- Õõnesprofiil **mõlemast otsast suletud** vajab ventilatsiooniava ja drenaažiava; kuumtsinkimine ja kuumutatud õhu rõhk nõuavad mõlemat.

## Kas keevitaja ulatub sinna

Nurkkeevis tehakse põleti asendiga poolel teel kahe ühendatava pinna vahel. Iga ümberringi nurkkeevise (otsaplaat, aluseplaat, lõikeplaat) kohta võtab kontroll liikme lõike kontuuri plaadi juures ja iga 20 mm järel käivitab põletirajaraja 45° nurga all väljapoole sellest, kus tema otsak (algselt 10 mm raadius) esmalt vabaneb mõlemast pinnast, veel 30 mm. Kui rada puutub talale endale kuuluva flanšiga või mõne teise osaga, loetakse keevise see osa koos osa ja kaugusega. Need arvud on tüüpilised, mitte standardi omad: küsi oma valmistajalt protsess ja otsak. Kahe serva keevised (nihkeplaat) ei ole lokaliseeritud ega kontrollitud.
