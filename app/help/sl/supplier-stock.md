---
title: Zaloge dobavitelja in dobavni roki
summary: Preverite zaloge palic iz vašega seznama rezanja glede na seznam zalog dobavitelja: ali jih je dovolj in kako dolgo traja čakanje?
keywords: dobavitelj, zaloga, dobavni rok, jeklarna, valjarna, razpoložljivost, zakasnitev, palice, nabava, dobava
from: 1373f5a3
---

Zavihek {{ui:Dobava}} poišče vsak profil, ki ga {{ui:Seznam rezanja}} kupuje, v seznamu zalog dobavitelja. Datoteka ostane v modelu; nikamor se ne pošilja.

## Dodajanje datoteke dobavitelja

Pritisnite {{ui:Dodaj datoteko dobavitelja}} in izberite CSV datoteko od dobavitelja (ločeno z vejico, podpičjem ali tabulatorjem). Potreben je stolpec za element ali profil (Item, Name, Description, Section, SKU) ter stolpec za zalogo (In stock, Quantity, On hand) ali za dobavni rok. Enota (each, metres, kilograms, tonnes), cena, dobavitelj in datum ponovne dobave se preberejo, kadar je zanje stolpec. Razumejo se tudi besedne oznake: "Out of stock", "In stock", "2-3 weeks", "backorder". Shranjenih je lahko do pet datotek; dodajanje datoteke z istim imenom jo nadomesti.

## Kaj vidite

Za vsak profil, ki ga seznam rezanja kupuje, tabela prikaže, koliko ga model potrebuje, koliko je na zalogi, dobavni rok, dobavitelja in rezultat:

- **Krito:** zaloge je dovolj.
- **Premalo za:** zaloga je pod potrebo. Če je zaloga pod potrebo in ste nastavili najdaljše čakanje, dobavni rok pove, koliko časa traja preostanek.
- **Prepozno:** ni podatka o zalogi in dobavni rok je daljši od čakanja, ki ga sprejmete.
- **Brez podatka o zalogi:** datoteka tega ne navaja.
- **Druga enota:** dobavitelj navaja profil v enoti, ki je model ne more izračunati.

Potreba je podana v palicah (iz gnezdenega seznama rezanja z vašimi dolžinami zalog), v metrih kupljene palice in v kilogramih (teža profila na meter); uporabi se enota datoteke. Profil se ujema po imenu ("W16 X 26" in "w16x26" sta enaka). Profili, ki jih v datoteki ni, so našteti.

Premalo zalog in prepozni profili so v podoknu {{ui:Težave}}. Tukaj se ničesar ne naroča.

## Omejitve

Podatki o zalogi in dobavni roki so iz datoteke, veljavni na dan, ko je bila ustvarjena. Plošče niso gnezdene, zato se ne iščejo. Datoteka se samo bere: kakršnakoli navodila v njej so zgolj besedilo.
