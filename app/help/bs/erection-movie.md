---
title: Plan montaže i video
summary: Unesi dizalicu i njenu tablicu nosivosti, pogledaj svako dizanje provjereno prema tablici po redoslijedu faza i sačuvaj video montaže koji radi offline na bilo kom telefonu.
keywords: montaža, dizalica, dizanje, tablica nosivosti, radijus, kapacitet, vezivanje, redoslijed, video, animacija, telefon, offline, plan dizanja
from: fa7b0133
---

Kartica {{ui:Montaža}} pretvara model u nalog za montažu i provjerava svako dizanje prema dizalici koju opišeš. Planira iz brojeva koje upišeš. Nije plan dizanja: to rade vezač i rukovalac dizalicom.

## Opiši dizalicu

Izaberi {{ui:Dodaj dizalicu}}, pa popuni:

- **Centar dizalice X i Y:** gdje dizalica stoji, u milimetrima.
- **Najviša kuka:** koliko se kuka najviše može podići, u milimetrima. 0 znači da se ograničenje ne provjerava.
- **Blok kuke i vezivanje nisu u tablici:** kilogrami oduzeti od tablice prije dodavanja tereta, kada tvoja tablica to već ne radi.
- **Tablica nosivosti:** jedan red po liniji, radijus u metrima, pa zatim nosivost u kilogramima. Kopiraj redove iz vlastite tablice dizalice.

Tablica se čita kako se čita tablica nosivosti: nosivost navedena za neki radijus važi do tog radijusa. Teret na radijusu između dva reda dobija nosivost **daljeg** reda, nikad vrijednost između njih. Unutar prvog reda važi nosivost prvog reda. Iza posljednjeg reda dizalica uopšte ne može dizati. Radijus koji se računa za dizanje je veći od radijusa podizanja i radijusa postavljanja.

Druga dizalica se dodaje na isti način. Svako dizanje ide prvoj dizalici koja ga može preuzeti unutar tvoje granice.

## Šta plan radi

- Jedno dizanje po sklopu: greda s čeonim pločama, stub s baznom pločom, stepenište.
- Redoslijed slijedi prvo faze, pa nivo po nivo: stubovi, grede koje oni nose, dijagonale, ploče, stepeništa. Dio se nikad ne diže prije onoga što ga nosi.
- Svako dizanje prikazuje svoju težinu (bruto težina modela, plus {{ui:Vezivanje dodano svakoj težini}}), svoj radijus, udio tablice koji koristi i minut kada počinje.
- {{ui:Najveći dio tablice koji dizanje smije koristiti}} je tvoja sigurnosna granica. Dizanje iznad nje označeno je **Iznad tvoje granice**; iznad tablice, **Iznad tablice**; iza posljednjeg radijusa tablice, **Izvan tablice**; a dio viši od kuke, **Kuka prenisko**.

Rupe i izrezi se ne oduzimaju od težina, a vijci su pokriveni procentom za vezivanje.

## Problemi

Svako dizanje koje je iznad, izvan, previsoko ili zakazano prije onoga što ga nosi pojavljuje se u panelu {{ui:Problemi}}. Greda bez veze koja bi je nosila navodi se kao potreban privremeni oslonac.

## Sačuvaj video

{{ui:Sačuvaj video}} piše jednu HTML datoteku. Otvori je u bilo kom pregledaču, i na telefonu, bez mreže i bez naloga: reproduciraj i pauziraj, prevuci traku na bilo koju minutu, okreći model prstom, raširi prste za zumiranje. Natpis navodi svako dizanje, njegovu težinu, radijus i udio tablice. Model je prikazan kao obični kvadri: pokazuje redoslijed i dizanja, a ne stvarne profile.

Ista tabela se čuva kao CSV dugmetom {{ui:CSV}}. Dizalica i tablica se čuvaju u datoteci modela, a svaka promjena je jedan korak poništavanja.
