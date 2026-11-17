---
title: Postavljanje mreža i razina
summary: Upišite linije mreže, njihove razmake i razine na kojima se postavlja svaki štap.
keywords: mreža, mreže, osi, linije mreže, razine, kote, etaže, podovi, razmak, postavljanje
from: 9cad233c
---

Svaki štap u DetailCraftu postavlja se na presjecište mreže na nekoj razini. Najprije postavite mreže i razine; kasnije ih možete promijeniti.

## Kako mreže rade ovdje

- **Numerirane linije** idu u jednom smjeru, **linije sa slovima** u drugom. Nazivi su samo navika: oznaka može biti bilo koji tekst do 8 znakova (1, 2, 3 ili A1, A2, ili 10, 20).
- Upisujete oznake i razmake između njih, a ne koordinate. Prva linija u svakom skupu je na 0.
- Numerirane linije su linije stalnog x; linije sa slovima su linije stalnog y. Dakle greda od mreže 1 do mreže 2 ide duž x, a greda od A do B ide duž y.
- Sve vrijednosti su u milimetrima.

Novi model počinje s numeriranim linijama 1 2 3 na 6000 6000, linijama sa slovima A B na 6000 i dvjema razinama.

## Postavljanje mreža

1. U panelu {{ui:Model}} lijevo otvorite {{ui:Mreže}} ako je sklopljen.
2. U {{ui:Numerirane linije}} upišite oznake odvojene razmacima, na primjer `1 2 3 4 5`.
3. U polju {{ui:Razmaci}} ispod njega upišite jedan razmak za svaki međuprostor, na primjer `6000 6000 7500 6000`. Četiri razmaka za pet linija.
4. Isto učinite u {{ui:Linije s slovima}} i njezinim {{ui:Razmacima}}, na primjer `A B C` i `8000 8000`.
5. Odaberite {{ui:Primijeni mreže}}.

Statusna traka kaže „Mreže su ažurirane.“, a prikaz se zumira na novu mrežu. Zarezi također rade kao razdjelnici.

Ako nešto ne štima, ništa se ne mijenja i statusna traka kaže zašto, na primjer „Numerirane mreže: zadajte jedan razmak između svakog para linija (4).“ Ostale provjere: razmaci moraju biti pozitivni milimetri, oznake se moraju razlikovati i može biti najviše 60 linija u svakom smjeru.

:::note
Štapovi zadržavaju svoje koordinate kad se mreže pomaknu. Ako promijenite razmak nakon postavljanja čelika, čelik ostaje gdje je bio i više nije na mreži. Najprije promijenite mrežu ili pomaknite štapove uređivanjem koordinata njihovih krajeva.
:::

## Postavljanje razina

1. Otvorite {{ui:Razine}} u panelu {{ui:Model}}.
2. Svaki redak ima naziv razine i njezinu visinu u milimetrima. Uredite ih po želji.
3. Odaberite {{ui:Dodaj razinu}} za još jedan redak. Imenuje se „Razina 3“ (i tako dalje) i postavlja se 4000 mm iznad najviše razine; promijenite oboje ako treba.
4. Za uklanjanje razine odaberite gumb × na kraju njezina retka.
5. Odaberite {{ui:Primijeni razine}}.

Ništa se ne mijenja dok ne odaberete {{ui:Primijeni razine}}. Razine se pri primjeni sortiraju po visini. Svaka razina mora imati naziv, dvije razine ne smiju imati isti naziv i morate zadržati barem jednu razinu.

Razine mogu biti ispod nule (podrum na `-3500`) i ne moraju biti jednako razmaknute.

## Kako se razine koriste

- Stup postavljen na razini ide do sljedeće razine ili do razine koju odaberete u {{ui:Do}}.
- Grede i lim postavljaju se između dvaju presjecišta na razini na koju kliknete.
- Temelji se postavljaju tako da im je vrh na razini na koju kliknete.
- {{ui:Tlocrt}} gleda na jednu razinu odjednom.
- IFC izvoz stvara jednu građevinsku etažu po razini.

## Poništavanje

Promjene mreža i razina su uređivanja kao i sva ostala: {{key:Mod+Z}} vraća prethodnu mrežu.

## Dalje

[Postavljanje stupova, greda i spregova](topic:place-members)
