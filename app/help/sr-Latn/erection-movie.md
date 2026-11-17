---
title: Plan montaže i film
summary: Unesi dizalicu i njen dijagram nosivosti, pogledaj da je svako dizanje proveren prema dijagramu po redosledu faza, i sačuvaj film montaže koji se pušta van mreže na bilo kom telefonu.
keywords: montaža, dizalica, dizanje, dijagram nosivosti, radijus, nosivost, vezivanje tereta, redosled, film, animacija, telefon, van mreže, plan dizanja
from: fa7b0133
---

Kartica {{ui:Montaža}} pretvara model u nalog za montažu i proverava svako dizanje prema dizalici koju opišeš. Planira iz brojeva koje ukucaš. To nije plan dizanja: taj plan pravi signalista i rukovalac dizalicom.

## Opiši dizalicu

Izaberi {{ui:Dodaj dizalicu}}, pa popuni:

- **Centar dizalice X i Y:** gde dizalica stoji, u milimetrima.
- **Najviša kuka:** najviše koliko kuka može da se podigne, u milimetrima. 0 znači da se ograničenje ne proverava.
- **Blok kuke i vezivanje koji nisu u dijagramu:** kilogrami koji se oduzimaju od dijagrama pre nego što se doda teret, kad tvoj dijagram to već ne radi.
- **Dijagram nosivosti:** jedan red po liniji, radijus u metrima, pa nosivost u kilogramima. Prepiši redove sa sopstvenog dijagrama dizalice.

Dijagram se čita kako se čita dijagram nosivosti: nosivost navedena za radijus važi do tog radijusa. Teret na radijusu između dva reda dobija nosivost **daljeg** reda, nikad vrednost između njih. Unutar prvog reda važi nosivost prvog reda. Preko poslednjeg reda dizalica uopšte ne može da diže. Radijus koji važi za dizanje je veći od radijusa podizanja i radijusa postavljanja.

Druga dizalica se dodaje na isti način. Svako dizanje ide prvoj dizalici koja ga može podneti u tvojoj rezervi.

## Šta plan radi

- Jedno dizanje po sklopu: greda sa svojim čeonim limovima, stub sa svojim osnovnim limom, stepenište.
- Redosled prati faze prvo, pa sloj po sloj: stubovi, grede koje nose, dijagonale, limovi, stepeništa. Deo se nikad ne podiže pre onoga što ga nosi.
- Svako dizanje pokazuje svoju težinu (bruto težina modela, plus {{ui:Vezivanje dodato svakoj težini}}), radijus, udeo dijagrama koji koristi i minut kad počinje.
- {{ui:Najveći deo dijagrama koji dizanje sme da koristi}} je tvoja sigurnosna rezerva. Dizanje iznad nje označava se kao **Preko tvoje rezerve**; iznad dijagrama, **Preko dijagrama**; preko poslednjeg radijusa dijagrama, **Van dijagrama**; a deo viši od kuke, **Kuka je prenisko**.

Rupe i zasečci se ne oduzimaju od težina, a zavrtnji su obuhvaćeni procentom vezivanja.

## Problemi

Svako dizanje koje je preko rezerve, van dijagrama, previsoko ili postavljeno pre onoga što ga nosi pojavljuje se na panelu {{ui:Problemi}}. Greda bez veze koja bi je nosila označava se kao greda kojoj treba privremena podrška.

## Sačuvaj film

{{ui:Sačuvaj film}} piše jedan HTML fajl. Otvori ga u bilo kom pregledaču, i na telefonu, bez mreže i bez naloga: pusti i pauziraj, prevuci traku na bilo koji minut, okreni model prstom, raširi prstima za zum. Natpis navodi svako dizanje, njegovu težinu, radijus i udeo dijagrama. Model je prikazan kao obični kvadri: pokazuje redosled i dizanja, a ne prave profile.

Ista tabela se čuva kao CSV pomoću dugmeta {{ui:CSV}}. Dizalica i dijagram se čuvaju u fajlu modela, a svaka promena je jedan korak poništavanja.
