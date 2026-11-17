---
title: Montaažiplaan ja montaaživideo
summary: Sisesta kraana ja selle koormustabel, vaata iga tõstet kontrollituna tabeli vastu faaside järjekorras ning salvesta montaaživideo, mida saab mängida võrguühenduseta igal telefonil.
keywords: montaaž, kraana, tõste, koormustabel, raadius, kandevõime, kinnitamine, järjestus, video, animatsioon, telefon, võrguühenduseta, tõsteplaan
from: fa7b0133
---

Vahekaart {{ui:Montaaž}} muudab mudeli montaažijärjekorraks ja kontrollib iga tõstet kraana vastu, mille sa kirjeldad. See planeerib sinu sisestatud arvude järgi. See ei ole tõsteplaan: selle teevad kinnitaja ja kraanajuht.

## Kirjelda kraana

Vali {{ui:Lisa kraana}} ja täida:

- **Kraana keskpunkt X ja Y:** kus kraana seisab, millimeetrites.
- **Kõrgeim konks:** kõrgeim, kuhu konks võib tõusta, millimeetrites. 0 tähendab, et piirangut ei kontrollita.
- **Konksplokk ja kinnitusvahendid, mida tabelis ei ole:** kilogrammid, mis võetakse tabelist maha enne koormuse lisamist, kui sinu tabel seda juba ei tee.
- **Koormustabel:** üks rida joone kohta: raadius meetrites ning seejärel kandevõime kilogrammides. Kopeeri read kraana enda tabelist.

Tabelit loetakse nii, nagu koormustabelit loetakse: raadiusel antud kandevõime kehtib kuni selle raadiuseni. Koormus raadiusel kahe rea vahel saab **kaugema** rea kandevõime, mitte vahepealse väärtuse. Esimese rea sees kehtib esimese rea kandevõime. Viimase rea taga kraana ei saa tõsta üldse. Tõstele loetav raadius on suurem tõsteraadiustest ja seadistusraadiusest.

Teine kraana lisatakse samamoodi. Iga tõst läheb esimesele kraanale, mis suudab selle võtta sinu varuga.

## Mida plaan teeb

- Üks tõst koosti kohta: talaga koos otsaplaatidega, postiga koos aluseplaadiga, trepp.
- Järjekord järgib esmalt faase, seejärel tasemete kaupa: postid, nende kantavad talad, diagonaalid, plaadid, trepid. Detaili ei tõsteta kunagi enne seda, mis seda kannab.
- Iga tõst näitab oma massi (mudeli bruttomass pluss {{ui:Kinnitusvahendid igale massile lisatud}}), oma raadiust, osa tabelist, mida ta kasutab, ja minutit, millal ta algab.
- {{ui:Suurim lubatud osa koormustabelist}} on sinu ohutusvaru. Tõst, mis on sellest suurem, on märgitud **Ületab sinu varu**; tabelist suurem **Ületab tabelit**; tabeli viimasest raadiusest kaugemal **Tabeli lõppu ületatud**; ja detail, mis on konksust kõrgemal, **Konks liiga madal**.

Auke ja lõikeid massidest ei lahutata, ning poldid on kaetud kinnitusvahendite protsendiga.

## Probleemid

Iga tõst, mis on üle, ületab, liiga kõrge või seatud enne seda, mis seda kannab, ilmub paneelile {{ui:Probleemid}}. Tala, millel pole ühendust, mis seda kannaks, on loetletud kui vajab ajutist toetust.

## Salvesta video

{{ui:Salvesta video}} kirjutab ühe HTML-faili. Ava see millisel brauseril tahes, ka telefonis, ilma võrgu ja kontota: mängi ja peata, lohista riba mis tahes minutini, pööra mudelit sõrmega, suumi kahe sõrmega. Pealkiri nimetab iga tõstet, selle massi, raadiust ja osa tabelist. Mudel on joonistatud lihtsate kastidena: see näitab järjekorda ja tõsteid, mitte tegelikke profiile.

Sama tabel salvestatakse CSV-na nupuga {{ui:CSV}}. Kraana ja tabel salvestatakse mudelifaili ning iga muudatus on üks tagasivõtmise samm.
