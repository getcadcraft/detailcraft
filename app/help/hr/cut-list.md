---
title: Popis za rezanje
summary: Slažite grede, stupove, spregove i tetive stubišta u standardne duljine uz širinu reza pile te vidite koliko šipki treba kupiti i koliko je otpada.
keywords: popis za rezanje, nesting, slaganje, standardna duljina, šipka, širina reza, pila, odrezak, otpad, kombiniranje, nabava, više
from: 81d06ce5
---

Kartica {{ui:Popis za rezanje}}, ispod prikaza, računa kako linijske dijelove modela rezati iz standardnih šipki: koliko šipki svake duljine kupiti za svaki profil i materijal, što ide na koju šipku i koliki je otpad.

## Postavite zalihu

Na vrhu kartice:

- **Standardne duljine (mm):** duljine koje možete kupiti, odvojene razmacima, na primjer `6000 12000` ili šipke od 20 ft i 40 ft kao `6096 12192`. Do osam.
- **Širina reza pile (mm):** koliko svaki rez uzima (3 na početku).
- **Obrezivanje kraja (mm):** odrezuje kraj svake šipke prije prvog komada (0 na početku).
- **Zadrži odreske od (mm):** odrezak barem ove duljine vraća se u zalihu; kraći je otpad (500 na početku).

Ove se postavke čuvaju u ovom pregledniku, kao i ostale [postavke](topic:settings).

## Kako slaže

- Svaka greda, stup, sprega i tetiva stubišta, po oznaci pozicije i broju; ploče se režu iz lima i ovdje se ne slažu.
- Svaki profil i materijal zasebno.
- Najduži komadi prvi, svaki u prvu šipku u koju stane; nova šipka počinje kao najduža standardna duljina. Zatim se svaka šipka kupuje kao najkraća standardna duljina koja još prima njezine rezove.
- Svaki rez uzima širinu reza (ništa nakon reza koji završava točno na kraju šipke); svaka šipka gubi obrezivanje kraja.
- Komad duži od svake standardne duljine navodi se pod **Duže od bilo koje zalihe**, ne slaže se: spojite ga (vidi [Nastavci](topic:splices)) ili dodajte dužu standardnu duljinu.

## Čitanje

- **Sažetak:** po profilu i materijalu: komadi, šipke za kupnju (na primjer „2 × 12000, 1 × 6000“), kupljeni i upotrijebljeni metri te otpad.
- **Šipke i njihovi rezovi:** svaka šipka, njezina standardna duljina, njezini rezovi kao oznaka pozicije i duljina te odrezak, zadržan ili otpad.

{{ui:Preuzmi CSV}} sprema obje tablice kao `<name> cut list.csv`.

DetailCraft ne slaže ploče u limove i ne miješa profile ni materijale na jednoj šipki.
