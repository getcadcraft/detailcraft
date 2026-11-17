---
title: Lista sečenja
summary: Složi grede, stubove, dijagonale i stringere u standardne dužine sa širinom reza i vidi koliko šipki treba kupiti i koliki je otpad.
keywords: lista sečenja, slaganje, standardna dužina, šipka, širina reza, testera, ostatak, odsečak, otpad, kombinovanje, nabavka, više
from: 81d06ce5
---

Kartica {{ui:Lista sečenja}}, ispod prikaza, računa kako da se linijski delovi modela seku iz šipki: koliko šipki svake dužine treba kupiti za svaki profil i materijal, šta ide na svaku šipku i koliki je otpad.

## Podesi zalihu

Na vrhu kartice:

- **Standardne dužine (mm):** dužine koje možeš kupiti, odvojene razmakom, na primer `6000 12000`, ili šipke od 20 ft i 40 ft kao `6096 12192`. Do osam.
- **Širina reza (mm):** koliko uzima svaki rez (3 u početku).
- **Odsecanje kraja (mm):** odseče se kraj svake šipke pre prvog komada (0 u početku).
- **Zadrži ostatke od (mm):** ostatak bar ove dužine vraća se u zalihu; kraći je otpad (500 u početku).

Ovo se čuva u ovom pregledaču, kao i ostala [podešavanja](topic:settings).

## Kako se slaže

- Svaka greda, stub, dijagonala i stepenički stringer, po oznaci dela i broju; ploče se seku iz lima i ovde se ne slažu.
- Svaki profil i materijal posebno.
- Najduži komadi prvi, svaki u prvu šipku u koju stane; nova šipka počinje kao najduža standardna dužina. Zatim se svaka šipka kupuje kao najkraća standardna dužina koja još primi njene rezove.
- Svaki rez uzima širinu reza (nijedan posle reza koji se završava tačno na kraju šipke); svaka šipka gubi odsecanje kraja.
- Komad duži od svake standardne dužine nalazi se pod **Duže od svake zalihe**, ne slaže se: spoji ga (vidi [Spojevi](topic:splices)) ili dodaj dužu standardnu dužinu.

## Čitanje

- **Zbir:** po profilu i materijalu, komadi, šipke za kupovinu (na primer „2 × 12000, 1 × 6000“), kupljeni i upotrebljeni metri i otpad.
- **Šipke i njihovi rezovi:** svaka šipka, njena standardna dužina, njeni rezovi kao oznaka dela i dužina, i ostatak, sačuvan ili otpad.

{{ui:Preuzmi CSV}} čuva obe tabele kao `<naziv> lista sečenja.csv`.

DetailCraft ne slaže ploče u limove i ne meša profile ni materijale na jednoj šipki.
