---
title: Tiekėjo atsargos ir pristatymo terminai
summary: Patikrinkite strypus, kuriuos pjovimo sąrašas perka, pagal tiekėjo atsargų sąrašą: ar jų pakanka ir kiek reikės laukti?
keywords: tiekėjas, atsargos, pristatymo terminas, plieno sandėlis, gamykla, prieinamumas, laukiantis užsakymas, strypai, pirkimai, tiekimas
from: 1373f5a3
---

Skirtukas {{ui:Tiekimas}} ieško kiekvieno profilio, kurį perka {{ui:Pjovimo sąrašas}}, tiekėjo atsargų sąraše. Failas lieka modelyje; niekur nieko nesiunčiama.

## Pridėti tiekėjo failą

Spauskite {{ui:Pridėti tiekėjo failą}} ir pasirinkite savo tiekėjo CSV failą (atskirtą kableliais, kabliataškiais arba tabuliacijos ženklais). Jam reikia stulpelio elementui arba profiliui (Item, Name, Description, Section, SKU) ir vieno – atsargoms (In stock, Quantity, On hand) arba pristatymo terminui. Vienetas (each, metres, kilograms, tonnes), kaina, tiekėjas ir papildymo data nuskaitomi, kai jiems yra stulpeliai. Suprantami ir žodžiai: "Out of stock", "In stock", "2-3 weeks", "backorder". Galima išsaugoti iki penkių failų; pridėjus failą tuo pačiu pavadinimu, jis pakeičia senąjį.

## Ką matote

Kiekvienam pjovimo sąrašo perkamam profiliui lentelėje rodoma, kiek reikia modeliui, kiek yra atsargose, pristatymo terminas, tiekėjas ir rezultatas:

- **Padengta:** atsargų pakanka.
- **Trūksta:** atsargų mažiau nei reikia. Jei atsargų mažiau nei reikia ir nustatėte ilgiausią laukimo laiką, pristatymo terminas parodo, kiek laiko užtruks likusi dalis.
- **Per vėlu:** atsargų skaičiaus nėra, o pristatymo terminas ilgesnis nei jūsų priimtinas laukimo laikas.
- **Nėra atsargų skaičiaus:** faile tai nenurodyta.
- **Kitas vienetas:** tiekėjas profilį nurodo vienetu, kurio modelis negali pateikti.

Modeliui reikalingas kiekis pateikiamas strypais (iš išdėstyto pjovimo sąrašo, su jūsų atsargų ilgiais), perkamų strypų metrais ir kilogramais (profilio svoris metrui); naudojamas paties failo vienetas. Profilis atitinkamas pagal pavadinimą („W16 X 26“ ir „w16x26“ yra tas pats). Profiliai, kurių nėra faile, išvardijami.

Trūkumai ir per vėlu pristatomi profiliai rodomi skydelyje {{ui:Problemos}}. Čia nieko neužsakoma.

## Apribojimai

Atsargų skaičiai ir pristatymo terminai yra failo, galiojantys jo sukūrimo dieną. Plokštės nėra išdėstomos, todėl jų neieškoma. Failas tik skaitomas: bet kokia jame esanti instrukcija yra tik tekstas.
