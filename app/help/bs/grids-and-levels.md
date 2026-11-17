---
title: Postavljanje mreža i nivoa
summary: Upiši linije mreže, njihove razmake i nivoe na kojima je postavljen svaki element.
keywords: mreža, mreže, ose, linije mreže, nivoi, kote, spratovi, podovi, razmak, postavke
from: 9cad233c
---

Svaki element u DetailCraft-u postavlja se na presjek mreže na nivou. Postavite mreže i nivoe prvo; kasnije ih možete mijenjati.

## Kako mreže ovdje rade

- **Numerisane linije** idu u jednom pravcu, **linije označene slovima** u drugom. Nazivi su samo navika: oznaka može biti bilo koji tekst do 8 znakova (1, 2, 3 ili A1, A2, ili 10, 20).
- Upisujete oznake i razmake između njih, a ne koordinate. Prva linija svakog skupa je na 0.
- Numerisane linije su linije konstantnog x; linije označene slovima su linije konstantnog y. Dakle greda od mreže 1 do mreže 2 ide duž x, a greda od A do B ide duž y.
- Sve vrijednosti su u milimetrima.

Novi model počinje s numerisanim linijama 1 2 3 s razmacima 6000 6000, linijama označenim slovima A B s razmakom 6000 i dva nivoa.

## Postavljanje mreža

1. U panelu {{ui:Model}} s lijeve strane otvorite {{ui:Mreže}} ako je sklopljen.
2. U {{ui:Brojane linije}} upišite oznake odvojene razmacima, na primjer `1 2 3 4 5`.
3. U polju {{ui:Razmaci}} ispod njega upišite jedan razmak za svaki međuprostor, na primjer `6000 6000 7500 6000`. Četiri razmaka za pet linija.
4. Isto uradite u {{ui:Linije označene slovima}} i njegovom {{ui:Razmaci}}, na primjer `A B C` i `8000 8000`.
5. Odaberite {{ui:Primijeni mreže}}.

Statusna traka kaže "Mreže su ažurirane." i prikaz zumira na novu mrežu. Zarezi također rade kao razdjelnici.

Ako nešto ne štima, ništa se ne mijenja i statusna traka kaže zašto, na primjer "Numerisane mreže: zadajte jedan razmak između svakog para linija (4)." Ostale provjere: razmaci moraju biti pozitivni milimetri, oznake moraju biti različite i može biti najviše 60 linija u svakom pravcu.

:::note
Elementi zadržavaju svoje koordinate kada se mreže pomjere. Ako promijenite razmak nakon postavljanja čelika, čelik ostaje gdje je bio i više nije na mreži. Prvo promijenite mrežu ili pomjerite elemente uređivanjem koordinata njihovih krajeva.
:::

## Postavljanje nivoa

1. Otvorite {{ui:Nivoi}} u panelu {{ui:Model}}.
2. Svaki red ima naziv nivoa i njegovu kotu u milimetrima. Uređujte ih kako želite.
3. Odaberite {{ui:Dodaj nivo}} za još jedan red. Zove se "Nivo 3" (i tako dalje) i postavlja se 4000 mm iznad najvišeg nivoa; promijenite oboje ako treba.
4. Za uklanjanje nivoa odaberite dugme × na kraju njegovog reda.
5. Odaberite {{ui:Primijeni nivoe}}.

Ništa se ne mijenja dok ne odaberete {{ui:Primijeni nivoe}}. Nivoi se pri primjeni sortiraju po koti. Svaki nivo mora imati naziv, dva nivoa ne smiju imati isti naziv i morate zadržati najmanje jedan nivo.

Nivoi mogu biti ispod nule (podrum na `-3500`) i ne moraju biti jednako razmaknuti.

## Kako se nivoi koriste

- Stub postavljen na nivou ide do sljedećeg nivoa ili do nivoa koji izaberete u {{ui:Do}}.
- Grede i ploče postavljaju se između dva presjeka na nivou na koji kliknete.
- Temelji se postavljaju tako da im je gornja ivica na nivou na koji kliknete.
- {{ui:Osnova}} gleda odozgo na jedan nivo u jednom trenutku.
- IFC izvoz pravi jedan građevinski sprat po nivou.

## Poništavanje

Promjene mreža i nivoa su izmjene kao i svaka druga: {{key:Mod+Z}} vraća prethodnu mrežu.

## Dalje

[Postavljanje stubova, greda i dijagonala](topic:place-members)
