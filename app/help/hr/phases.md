---
title: Faze
summary: Podijelite model na faze (slijedove montaže ili isporuke), prikažite ili sakrijte svaku fazu, stavite dijelove u fazu i numerirajte oznake po fazi.
keywords: faza, faze, upravitelj faza, slijed montaže, isporuka, serija, slijed, sakrij fazu, prikaži fazu, filtar, numeriranje, prefiks oznake, po fazi
from: bae506f5
---

Faza je skupina dijelova koji se izrađuju, isporučuju ili montiraju zajedno: slijed montaže, isporuka, serija. Svaki štap i temelj nalazi se u jednoj fazi. Veza je u fazi svog glavnog štapa: greda čeone ploče, stup podložne ploče. Novi model ima jednu fazu.

## Ploča Faze

Odjeljak {{ui:Faze}} na ploči {{ui:Model}} navodi svaku fazu:

- potvrdni okvir prikazuje ili skriva fazu u prikazu;
- broj i naziv koji možete upisati (prazno = „Faza 2“ i tako dalje);
- koliko je dijelova u njoj;
- gumb {{ui:×}} uklanja fazu. Može se ukloniti samo prazna faza: prije toga premjestite njezine dijelove u drugu fazu.

{{ui:Dodaj fazu}} dodaje sljedeći broj i postavlja ga kao fazu u koju idu novi dijelovi.

## Stavljanje dijelova u fazu

- **Novi dijelovi:** {{ui:Novi dijelovi idu u}} odabire fazu u koju idu svi štapovi i temelji koje postavite od sada.
- **Jedan dio:** odaberite ga i promijenite {{ui:Faza}} na ploči {{ui:Svojstva}}.
- **Više dijelova:** odaberite ih (prozorom, {{key:Shift}}+klik, {{key:Mod+A}}) i promijenite {{ui:Faza}} na vrhu ploče {{ui:Svojstva}}. Prikazuje **Različito** kada su u različitim fazama. Jedna promjena je jedan korak poništavanja.

Kopije zadržavaju fazu dijela iz kojeg su kopirane, i kad se zalijepe u drugi model (faza se tamo dodaje).

## Prikaz i skrivanje faza

Skrivena faza se ne crta u prikazu, ne može se kliknuti niti je obuhvatiti prozorom za odabir, a {{key:Mod+A}} je izostavlja. I dalje je u sastavnici, izvješćima, crtežima i svakom izvozu. Skrivanje vrijedi samo za prikaz: ne sprema se i nema poništavanja.

## Oznake po fazi

Uz uključeno **Numeriraj oznake po fazi** (inicijalno je uključeno) i dijelove u više faza, svaka faza numerira se zasebno i njezine oznake počinju brojem faze: oznake pozicija 1-b1, 2-b1, oznake sklopova 2-B1, temelji 2-F1. Dvije identične grede u različitim fazama tada imaju različite oznake, jer se izrađuju i otpremaju u različito vrijeme. S jednom fazom u upotrebi oznake nemaju prefiks. Isključite to da biste cijeli model numerirali kao jedan, pa identični komadi dijele oznaku bez obzira na fazu.

Faza se upisuje u IFC izvoz (skup svojstava DetailCraft, Phase).

:::note
Modeli s fazama spremaju se u formatu datoteke 2 programa DetailCraft. Izdanje DetailCraft 0.3 ih ne može otvoriti; ovo izdanje otvara starije datoteke, sa svim dijelovima u fazi 1.
:::
