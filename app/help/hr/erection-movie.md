---
title: Plan montaže i film
summary: Unesite dizalicu i njezin dijagram nosivosti, pogledajte svako dizanje provjereno prema dijagramu po redoslijedu faza i spremite film montaže koji se reproducira izvan mreže na bilo kojem telefonu.
keywords: montaža, dizalica, dizanje, dijagram nosivosti, radijus, nosivost, vezanje, slijed, film, animacija, telefon, izvan mreže, plan dizanja
from: fa7b0133
---

Kartica {{ui:Montaža}} pretvara model u nalog za montažu i provjerava svako dizanje prema dizalici koju opišete. Planira iz brojeva koje upišete. Nije plan dizanja: to izrađuju vezač i rukovatelj dizalicom.

## Opišite dizalicu

Odaberite {{ui:Dodaj dizalicu}}, zatim ispunite:

- **X i Y središta dizalice:** gdje dizalica stoji, u milimetrima.
- **Najviša kuka:** koliko se kuka najviše može podići, u milimetrima. 0 znači da se nikakvo ograničenje ne provjerava.
- **Blok kuke i vezanje koji nisu u dijagramu:** kilogrami koji se oduzimaju od dijagrama prije dodavanja tereta, kad vaš dijagram to već ne čini.
- **Dijagram nosivosti:** jedan redak po liniji, radijus u metrima, a zatim nosivost u kilogramima. Kopirajte retke iz vlastitog dijagrama dizalice.

Dijagram se čita kao što se čita dijagram nosivosti: nosivost navedena za radijus vrijedi do tog radijusa. Teret na radijusu između dva retka dobiva nosivost **daljeg** retka, nikad vrijednost između njih. Unutar prvog retka vrijedi nosivost prvog retka. Iza zadnjeg retka dizalica uopće ne može dizati. Radijus koji vrijedi za dizanje je veći od radijusa podizanja i radijusa postavljanja.

Druga dizalica dodaje se na isti način. Svako dizanje ide prvoj dizalici koja ga može preuzeti unutar vaše sigurnosne granice.

## Što plan radi

- Jedno dizanje po sklopu: greda s čeonim pločama, stup s temeljnom pločom, stubište.
- Redoslijed slijedi faze prvo, zatim razinu po razinu: stupovi, grede koje oni nose, spregovi, ploče, stubišta. Dio se nikad ne diže prije onoga što ga nosi.
- Svako dizanje prikazuje svoju težinu (bruto težina modela plus {{ui:Vezanje dodano uz svaku težinu}}), svoj radijus, udio dijagrama koji koristi i minutu u kojoj počinje.
- {{ui:Najveći udio dijagrama nosivosti za dizanje}} je vaša sigurnosna granica. Dizanje iznad nje označeno je **Preko vaše granice**; iznad dijagrama, **Preko dijagrama**; iza zadnjeg radijusa dijagrama, **Iza dijagrama**; a dio viši od kuke, **Kuka preniska**.

Rupe i izrezi ne odbijaju se od težina, a vijci su pokriveni postotkom za vezanje.

## Problemi

Svako dizanje koje je preko granice, iza dijagrama, previsoko ili postavljeno prije onoga što ga nosi pojavljuje se na ploči {{ui:Problemi}}. Greda bez spoja koji bi je nosio navodi se kao greda kojoj treba privremeno podupiranje.

## Spremite film

{{ui:Spremi film}} zapisuje jednu HTML datoteku. Otvorite je u bilo kojem pregledniku, i na telefonu, bez mreže i bez računa: reproducirajte i pauzirajte, povucite traku na bilo koju minutu, okrećite model prstom, stisnite za zumiranje. Natpis navodi svako dizanje, njegovu težinu, radijus i udio dijagrama. Model je prikazan kao obični kvadri: pokazuje redoslijed i dizanja, a ne stvarne profile.

Ista tablica sprema se kao CSV gumbom {{ui:CSV}}. Dizalica i dijagram spremaju se u datoteku modela, a svaka promjena je jedan korak poništavanja.
