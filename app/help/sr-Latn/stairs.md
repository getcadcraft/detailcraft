---
title: Stepenice
summary: Postavi pravu čeličnu stepenicu iz visine stepenika, gaza i širine: dva kosnika i limena gazišta, jedan zavareni sklop.
keywords: stepenice, stepenište, kosnik, gazište, visina stepenika, istak, krak, čelično stepenište, ibc 1011, blondel
from: 62fa3845
---

Prava čelična stepenica: dva kosnika (U-profili sa prstima okrenutim unutra, ili ravne trake postavljene na ivicu) i limeni gazište na svakom stepenu, zavareni između njih. DetailCraft izračunava broj visina stepenika iz visine, proverava ih prema ograničenjima građevinskog propisa i pravi stepenicu kao jedan sklop u radionici.

## Postavljanje stepenica

1. Izaberi {{ui:Stepenište}} u grupi {{ui:Postavi}}, ili pritisni {{key:S}}.
2. Podesi stepenicu desno: **smer penjanja** (0° ide duž +x, 90° duž +y), **visinu** (0 = do sledećeg nivoa), **gaz**, **svetlu širinu** između kosnika, **najveću dozvoljenu visinu stepenika**, **kosnik**, **debljinu limenog gazišta**, **istak** i materijal.
3. Klikni na presek mreže: to je podnožje prvog stepenika, na osi stepenice.

Statusna traka kaže koliko je stepenika napravljeno. Izaberi stepenicu (klikni na kosnik ili gazište) da promeniš bilo koje od njenih podešavanja, položaj ili fazu; svojstva takođe prikazuju stepenike, gazišta, ukupni gaz, nagib i 2 × visina stepenika + gaz.

## Šta DetailCraft izračunava

- **Visine stepenika.** Što manje, a da svaka visina ostane na najvišoj dozvoljenoj ili ispod nje: visina od 3000 mm sa 178 mm ili manje daje 17 visina stepenika od 176.5 mm. Gazišta ima za jedan manje od visina stepenika (gornji pod je poslednji stepen).
- **Gazišta.** Lim dubine gaza + istaka (280 + 25 = PL6x305 podrazumevano) i dužine kao svetla širina, gornja ivica na visini svakog stepenika, prednja ivica (istak) ispred linije stepenika.
- **Kosnici.** Pod nagibom stepenice, od mesta gde spajaju donji pod do mesta gde spajaju gornji pod, tik izvan svetle širine, a gornja ivica 50 mm iznad linije istaka. Prsti U-profila okrenuti su ka unutrašnjosti stepenice; ravna traka, kao PL12x250, stoji na ivici.
- **Varovi.** Svako gazište za oba kosnika. Gazišta i desni kosnik zavareni su za levi kosnik, pa stepenica dobija jednu oznaku sklopa (ST1) i sopstveni sklopni crtež; kosnici dobijaju oznake delova st…, a gazišta p….
- **Provere.** Upozorenja kada je visina stepenika van 4 do 7 in. (102 do 178 mm) ili je gaz manji od 11 in. (279 mm), granice IBC 2021, odeljak 1011.5.2; kada je 2 × visina + gaz van 600 do 650 mm (uobičajeno pravilo udobnosti); i kada je kosnik suviše plitak da nosi gazišta. Nepoznat profil kosnika sprečava izgradnju stepenice.

## Dobro je znati

- Pomeranje, obrtanje, ogledanje, kopiranje, nalepljivanje, brisanje i faze rade na stepenici kao na elementu. Obrtanje okreće penjanje; ogledanje ga šalje ogledalskim smerom.
- Kosnici se izvoze u IFC kao IfcMember, a gazišta kao IfcPlate; oba idu u NC datoteke i spisak materijala. Provera sudara ostavlja sopstvene delove stepenice van provere (zavareni su zajedno).
- Ova obična stepenica je jedan krak sa limenim gazištima. Za podeste, rukohvate sa balustrima, gazišta od savijenog lima ili rešetke, skup pravila koji biraš, listu sečenja i crteže rupa u kosnicima, označi {{ui:Koristi generator čeličnih stepenica}} u alatu Stepenište (videti Generator čeličnih stepenica).
- Kosnici su sečeni pod pravim uglom: njihovi krajnji preseci prema podovima nisu izrađeni.
- DetailCraft ne projektuje stepenicu: kosnici i gazišta se ne proveravaju na čvrstoću ni na savijanje.
