---
title: Podešavanje mreža i nivoa
summary: Unesi linije mreže, njihove razmake i nivoe na kojima se svaki član postavlja.
keywords: mreža, mreže, ose, linije mreže, nivoi, kote, spratovi, podovi, razmak, podešavanje
from: 9cad233c
---

Svaki član u DetailCraft-u postavlja se na presek mreže na nekom nivou. Prvo postavi mreže i nivoe; kasnije ih možeš promeniti.

## Kako mreže rade ovde

- **Brojevane linije** idu u jednom pravcu, **linije sa slovima** u drugom. Imena su samo navika: oznaka može biti bilo koji tekst do 8 znakova (1, 2, 3 ili A1, A2, ili 10, 20).
- Ukucaš oznake i razmake između njih, a ne koordinate. Prva linija svakog skupa je na 0.
- Brojevane linije su linije konstantnog x; linije sa slovima su linije konstantnog y. Tako greda od mreže 1 do mreže 2 ide duž x, a greda od A do B ide duž y.
- Sve vrednosti su u milimetrima.

Novi model počinje sa brojevanim linijama 1 2 3 na 6000 6000, linijama sa slovima A B na 6000 i dva nivoa.

## Podešavanje mreža

1. U panelu {{ui:Model}} levo otvori {{ui:Mreže}} ako je sklopljena.
2. U {{ui:Brojevane linije}} ukucaj oznake razdvojene razmakom, na primer `1 2 3 4 5`.
3. U polju {{ui:Razmaci}} ispod ukucaj jedan razmak za svaki međuprostor, na primer `6000 6000 7500 6000`. Četiri međuprostora za pet linija.
4. Isto uradi u {{ui:Linije sa slovima}} i njihovom {{ui:Razmaci}}, na primer `A B C` i `8000 8000`.
5. Izaberi {{ui:Primeni mreže}}.

Statusna traka kaže „Mreže su ažurirane.“ i prikaz se zumira na novu mrežu. Zarezi takođe rade kao razdvajači.

Ako nešto ne štima, ništa se ne menja i statusna traka kaže zašto, na primer „Brojevane mreže: zadaj jedan razmak između svakog para linija (4).“ Ostale provere: razmaci moraju biti pozitivni milimetri, oznake moraju biti različite, a može biti najviše 60 linija u svakom pravcu.

:::note
Članovi zadržavaju svoje koordinate kada se mreže pomeraju. Ako promeniš razmak posle postavljanja čelika, čelik ostaje gde je bio i više nije na mreži. Prvo promeni mrežu ili pomeri članove uređivanjem koordinata njihovih krajeva.
:::

## Podešavanje nivoa

1. Otvori {{ui:Nivoi}} u panelu {{ui:Model}}.
2. Svaki red ima naziv nivoa i njegovu kotu u milimetrima. Menjaj ih kako želiš.
3. Izaberi {{ui:Dodaj nivo}} za još jedan red. Dobija naziv „Nivo 3“ (i tako dalje) i postavlja se 4000 mm iznad najvišeg nivoa; promeni oba ako treba.
4. Da ukloniš nivo, izaberi dugme × na kraju njegovog reda.
5. Izaberi {{ui:Primeni nivoe}}.

Ništa se ne menja dok ne izabereš {{ui:Primeni nivoe}}. Nivoi se pri primeni sortiraju po koti. Svaki nivo mora imati naziv, dva nivoa ne smeju imati isti naziv, a moraš zadržati najmanje jedan nivo.

Nivoi mogu biti ispod nule (podrum na `-3500`) i ne moraju biti ravnomerno raspoređeni.

## Kako se nivoi koriste

- Stub postavljen na nivou ide do sledećeg nivoa ili do nivoa koji izabereš u {{ui:Do}}.
- Grede i ploče se postavljaju između dva preseka na nivou na koji klikneš.
- Temelji se postavljaju tako da im je gornja ivica na nivou na koji klikneš.
- {{ui:Osnova}} gleda na dole na jedan nivo u isto vreme.
- IFC izvoz pravi jedan građevinski sprat za svaki nivo.

## Poništavanje

Promene mreža i nivoa su izmene kao i sve ostale: {{key:Mod+Z}} vraća prethodnu mrežu.

## Dalje

[Postavljanje stubova, greda i dijagonala](topic:place-members)
