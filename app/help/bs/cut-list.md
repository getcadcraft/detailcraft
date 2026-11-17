---
title: Lista rezanja
summary: Složi grede, stubove, dijagonale i stringere u standardne dužine zaliha uzimajući u obzir širinu reza, i vidi koliko šipki kupiti i koliko je otpada.
keywords: lista rezanja, slaganje, dužina zalihe, šipka, širina reza, pila, ostatak, otpadak, kombinovanje, nabavka, više
from: 81d06ce5
---

Kartica {{ui:Lista rezanja}}, ispod prikaza, računa kako da se linearni dijelovi modela režu iz šipki zaliha: koliko šipki svake dužine kupiti za svaki profil i materijal, šta ide na svaku šipku i koliki je otpad.

## Postavi zalihe

Na vrhu kartice:

- **Dužine zaliha (mm):** dužine koje možeš kupiti, odvojene razmakom, na primjer `6000 12000`, ili šipke od 20 ft i 40 ft kao `6096 12192`. Do osam.
- **Širina reza (mm):** koliko svaki rez odnosi (u početku 3).
- **Odsijecanje krajeva (mm):** odsijeca se kraj svake šipke prije prvog komada (u početku 0).
- **Zadrži ostatke od (mm):** ostatak barem ove dužine vraća se u zalihe; kraći je otpad (u početku 500).

Ove vrijednosti se čuvaju u ovom pregledaču, kao i ostale [postavke](topic:settings).

## Kako se slaže

- Svaka greda, stub, dijagonala i stepenički stringer, po oznaci dijela i broju komada; ploče se režu iz lima i ovdje se ne slažu.
- Svaki profil i materijal zasebno.
- Najduži komadi prvi, svaki u prvu šipku u koju stane; nova šipka počinje kao najduža dužina zalihe. Zatim se svaka šipka kupuje kao najkraća dužina zalihe koja još prima njene rezove.
- Svaki rez odnosi širinu reza (ne odnosi se nakon reza koji se završava tačno na kraju šipke); svaka šipka gubi odsječeni kraj.
- Komad duži od svake dužine zalihe navodi se pod **Duže od svake zalihe**, ne slaže se: spoji ga (vidi [Spojevi](topic:splices)) ili dodaj dužu dužinu zalihe.

## Čitanje

- **Sažetak:** po profilu i materijalu, komadi, šipke za kupovinu (na primjer „2 × 12000, 1 × 6000”), kupljeni i utrošeni metri i otpad.
- **Šipke i njihovi rezovi:** svaka šipka, njena dužina zalihe, njeni rezovi kao oznaka dijela i dužina, i ostatak: zadržan ili otpad.

{{ui:Preuzmi CSV}} čuva obje tabele kao `<naziv> lista rezanja.csv`.

DetailCraft ne slaže ploče u limove i ne miješa profile ni materijale na jednoj šipki.
