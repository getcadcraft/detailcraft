---
title: Faze
summary: Podeli model na faze (redosled montaže ili isporuke), prikaži ili sakrij svaku fazu, stavi delove u fazu i numeriši oznake po fazi.
keywords: faza, faze, upravljanje fazama, redosled montaže, isporuka, serija, redosled, sakrij fazu, prikaži fazu, filter, numerisanje, prefiks oznake, po fazi
from: bae506f5
---

Faza je grupa delova koji se prave, isporučuju ili montiraju zajedno: redosled montaže, isporuka, serija. Svaki element i temelj je u jednoj fazi. Veza je u fazi svog glavnog elementa: greda krajnjeg lima, stub podložnog lima. Novi model ima jednu fazu.

## Panel Faze

Odeljak {{ui:Faze}} panela {{ui:Model}} navodi svaku fazu:

- polje za potvrdu prikazuje ili sakriva fazu u pogledu;
- broj i naziv koji možeš da upišeš (prazno = „Faza 2“ i tako dalje);
- koliko delova ima u njoj;
- dugme {{ui:×}} uklanja fazu. Ukloniti se može samo prazna faza: prvo premesti njene delove u drugu fazu.

{{ui:Dodaj fazu}} dodaje sledeći broj i čini ga fazom u koju idu novi delovi.

## Stavi delove u fazu

- **Novi delovi:** {{ui:Novi delovi idu u}} bira fazu u koju idu svaki element i temelj koji postaviš od sada.
- **Jedan deo:** izaberi ga i promeni {{ui:Faza}} u panelu {{ui:Svojstva}}.
- **Više delova:** izaberi ih (prozorom, {{key:Shift}}+klik, {{key:Mod+A}}) i promeni {{ui:Faza}} na vrhu panela {{ui:Svojstva}}. Pokazuje **Razlikuje se** kada su u različitim fazama. Jedna promena je jedan korak opozivanja.

Kopije zadržavaju fazu dela iz kog su kopirane, i kada se nalepe u drugi model (faza se tamo dodaje).

## Prikaži i sakrij faze

Sakrivena faza se ne crta u pogledu, ne može da se klikne ni da se uhvati prozorom za izbor, a {{key:Mod+A}} je izostavlja. I dalje je u spisku materijala, izveštajima, crtežima i svim izvozima. Sakrivanje važi samo za pogled: ne čuva se i nema opozivanje.

## Oznake po fazi

Sa uključenom opcijom **Numerisanje oznaka po fazi** (podrazumevano je uključena) i delovima u više faza, svaka faza se numeriše posebno i njene oznake počinju brojem faze: oznake delova 1-b1, 2-b1, oznake sklopova 2-B1, temelji 2-F1. Dve identične grede u različitim fazama imaju tada različite oznake, jer se prave i šalju u različito vreme. Kada je u upotrebi samo jedna faza, oznake nemaju prefiks. Isključi opciju da bi se ceo model numerisao kao jedna celina, pa identični komadi dele oznaku, bez obzira na fazu.

Faza se upisuje u IFC izvoz (skup svojstava DetailCraft, Faza).

:::note
Modeli sa fazama se čuvaju u formatu datoteke DetailCraft-a 2. Izdanje 0.3 DetailCraft-a ne može da ih otvori; ova verzija otvara starije datoteke, sa svim delovima u fazi 1.
:::
