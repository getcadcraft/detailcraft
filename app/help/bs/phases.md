---
title: Faze
summary: Podijeli model na faze (sekvence montaže ili isporuke), prikaži ili sakrij svaku fazu, stavi dijelove u fazu i numeriši oznake po fazi.
keywords: faza, faze, upravljanje fazama, sekvenca montaže, isporuka, serija, sekvenca, sakrij fazu, prikaži fazu, filter, numerisanje, prefiks oznake, po fazi
from: bae506f5
---

Faza je grupa dijelova koji se prave, isporučuju ili montiraju zajedno: sekvenca montaže, isporuka, serija. Svaki element i temelj je u jednoj fazi. Veza je u fazi svog glavnog elementa: greda za krajnju ploču, stub za baznu ploču. Novi model ima jednu fazu.

## Panel faza

Odjeljak {{ui:Phases}} u panelu {{ui:Model}} navodi svaku fazu:

- potvrdni okvir prikazuje ili skriva fazu u prikazu;
- broj i naziv koji možete upisati (prazno = "Faza 2" i tako dalje);
- koliko dijelova je u njoj;
- dugme {{ui:×}} uklanja fazu. Može se ukloniti samo prazna faza: prvo stavi njene dijelove u drugu fazu.

{{ui:Add phase}} dodaje sljedeći broj i postavlja ga kao fazu u koju idu novi dijelovi.

## Stavljanje dijelova u fazu

- **Novi dijelovi:** {{ui:New parts go in}} bira fazu u koju ide svaki element i temelj koji postavite od sada.
- **Jedan dio:** odaberi ga i promijeni {{ui:Phase}} u panelu {{ui:Properties}}.
- **Više dijelova:** odaberi ih (prozorom, {{key:Shift}}+klik, {{key:Mod+A}}) i promijeni {{ui:Phase}} na vrhu panela {{ui:Properties}}. Prikazuje **Različito** kad su u različitim fazama. Jedna promjena je jedan korak poništavanja.

Kopije zadržavaju fazu dijela iz kojeg su kopirane, i kad se zalijepe u drugi model (faza se tamo dodaje).

## Prikaz i skrivanje faza

Skrivena faza se ne crta u prikazu, ne može se kliknuti niti uhvatiti prozorom odabira, a {{key:Mod+A}} je izostavlja. I dalje je u spisku materijala, izvještajima, crtežima i svakom izvozu. Skrivanje važi samo za prikaz: ne čuva se i nema poništavanja.

## Oznake po fazi

Sa uključenom opcijom **Numeriši oznake po fazi** (uključena je na početku) i dijelovima u više faza, svaka faza se numeriše posebno, a njene oznake počinju brojem faze: oznake dijelova 1-b1, 2-b1, oznake sklopova 2-B1, temelji 2-F1. Dvije identične grede u različitim fazama imaju tada različite oznake, jer se prave i šalju u različito vrijeme. Ako je u upotrebi samo jedna faza, oznake nemaju prefiks. Isključi opciju da bi se cijeli model numerisao kao jedan, pa identični komadi dijele oznaku bez obzira na fazu.

Faza se zapisuje u IFC izvoz (skup svojstava DetailCraft, Phase).

:::note
Modeli sa fazama se spremaju u format datoteke DetailCraft-a 2. Verzija 0.3 DetailCraft-a ne može da ih otvori; ova verzija otvara starije datoteke, sa svim dijelovima u fazi 1.
:::
