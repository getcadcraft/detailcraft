---
title: Analiza okvira
summary: Sile, reakcije i progibi greda, stubova i dijagonala kako su nacrtani, pod slučajevima opterećenja i kombinacijama koje zadate. Pomoćno sredstvo za analizu, a ne provjera prema propisu; provjere projekta su poseban korak.
keywords: analiza, strukturalna analiza, analiza okvira, metoda krutosti, opterećenja, slučaj opterećenja, kombinacija, stalno opterećenje, korisno opterećenje, vlastita težina, reakcije, moment savijanja, posmik, aksijalna sila, progib, deformisani oblik, oslonci, zglobno, ukliješteno, oslobađanje, izvještaj, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Kartica {{ui:Analiza}} na dnu pronalazi sile u svakoj gredi, stubu i dijagonali modela, reakcije u bazama stubova i koliko se elementi savijaju, za opterećenja koja zadate.

:::warning
To je **pomoćno sredstvo za analizu, a ne provjera prema propisu**. Analiza ne primjenjuje projektni propis: ne dimenzioniše elemente, ne provjerava nosivost ili spojeve i ne bira faktore opterećenja. Inženjer provjerava model, njegova opterećenja i oslonce i odlučuje šta brojevi znače. Za provjere elemenata prema ASCE 7 / AISC 360 ili EN 1990 / EN 1993-1-1 vidi [Provjera čeličnih elemenata prema projektnom propisu](topic:design-checks), također poseban korak i pomoćno sredstvo.
:::

## Pokretanje

1. Otvori karticu {{ui:Analiza}}.
2. Odaberi jedan ili više elemenata u prikazu, izaberi {{ui:Slučaj}}, {{ui:Opterećenje}} i {{ui:Pravac}}, upiši vrijednost i pritisni {{ui:Dodaj opterećenje}}. Opterećenje raspoređeno duž elementa je u kN/m, tačkasto opterećenje u kN. {{ui:Dolje (gravitacija)}} je uobičajeno.
3. Pritisni {{ui:Pokreni analizu}}.

Tabela navodi najveću aksijalnu silu N, posmike Vz i Vy, momente savijanja My i Mz, torziju T i progib svakog elementa, počevši od najvećeg momenta; kliknite na naziv elementa da ga odaberete. Ispod su reakcije u svakom osloncu. {{ui:Na modelu}} crta deformisani oblik ili jednu veličinu kao dijagram pored svakog elementa, s najvećom vrijednošću upisanom na njegovom mjestu. Rezultati zastarijevaju čim se model promijeni: pokrenite ponovo.

Svako opterećenje, slučaj i postavka je jedan korak poništavanja ({{key:Mod+Z}}) i čuva se u datoteci modela.

## Slučajevi opterećenja i kombinacije

Analiza počinje s tri: **Stalno** (vlastita težina elemenata, iz njihovih nacrtanih presjeka i 7850 kg/m³), **Korisno** (prazno) i **Stalno + korisno**. Dodajte slučajeve po vlastitom izboru (vjetar, snijeg …) i kombinacije: kombinacija zbraja slučajeve s faktorima koje upišete. Analiza je linearna, pa se svaki slučaj rješava jednom, a kombinacije su zbirovi. Faktore upišite sami ili izaberite projektni propis i pustite {{ui:Napravi kombinacije}} da napiše propisane ([Provjera čeličnih elemenata prema projektnom propisu](topic:design-checks)).

## Od čega se sastoji okvir

- Grede, stubovi i dijagonale, svaki na svojoj radnoj liniji (liniji koju ste nacrtali), sa stvarnim svojstvima presjeka izračunatim iz njegovog obrisa. Ploče, stepenice, temelji i vijci nisu dio okvira.
- Element se dijeli tamo gdje se kraj drugog elementa oslanja na njega, pa se greda koja se spaja na stub na sredini visine spaja na stub tu.
- **Baze stubova**: ukliještene (početak) ili zglobne (pridržane i spriječene da se uvrću, slobodne da se okreću). Osnovna ploča uvijek čini oslonac.
- **Krajevi greda**: krajnja ploča je kruta, a smična spojnica je zglobna. {{ui:Krajevi greda bez veze}} postavlja ostale. **Dijagonale** su zglobne na oba kraja.
- Izaberite jedan element da mu dodijelite pravilo za krajeve ili za bazu stuba.
- Čelik svuda: E = 200 GPa, G = 77 GPa.

Ako okvir može da se pomjera bez savijanja ičega (mehanizam, na primjer zglobne baze bez ukrućenja u jednom pravcu), pokretanje se zaustavlja i kaže gdje i u kom pravcu. Zadržite ga osloncem, krutim spojem ili dijagonalom.

## Predznaci

N > 0 je zatezanje. My > 0 stavlja lokalnu −z stranu elementa u zatezanje: greda koja se savija pod gravitacijom ima My > 0. Mz > 0 stavlja lokalnu −y stranu u zatezanje. Progib se mjeri od prave linije između krajeva elementa. Lokalna z osa elementa pokazuje gore (za stub: duž X); njegove lokalne ose se okreću s rotacijom elementa.

## Izvještaj

{{ui:Izvještaj (PDF)}} i {{ui:Izvještaj (CSV)}} sadrže sve: pretpostavke na kojima je okvir izgrađen, presjeke, slučajeve i kombinacije, zatim za svaki slučaj i kombinaciju reakcije (sa zbirovima opterećenja i reakcija, koji se poništavaju), sile u elementima i pomjeranja, te anvelopu svih slučajeva. {{ui:Izvezi kao CraftScript}} zapisuje isti okvir kao skriptu za radni prostor Script u programu PartCraft, gdje biblioteška funkcija `frame3d` rješava okvir korak po korak u čitljivom kodu.

## Metoda

Metoda direktne krutosti, linearna i prvog reda, osim ako ne označite *Drugi red (P-Delta)*: greda-stubovi s dva čvora, s aksijalnom, torzijskom i dvije savojne krutosti (bez deformacije smicanjem, bez izvijanja), krajnja oslobađanja statičkom kondenzacijom, opterećenja duž elemenata kroz vlastite funkcije oblika elemenata. Odgovori su provjereni prema klasičnim udžbeničkim slučajevima (konzole, proste, ukliještene i kontinualne grede, portalni okvir, rešetka u torziji, ravni rešetkasti nosač).

**Drugi red (P-Delta).** Označite *Drugi red (P-Delta)* pored dugmeta {{ui:Pokreni analizu}}: svaka kombinacija se ponovo rješava s aksijalnim silama elemenata koje djeluju na deformisani okvir (svaki element podijeljen na 4 dijela, pa se računa i savijanje elementa između krajeva), dok se aksijalne sile ne ustale. Red rezultata daje broj prolaza i koliko je porasla bočna deformacija; momenti, pomjeranja, provjere projekta i izvještaj tada koriste ove rezultate. Iznad elastičnog kritičnog opterećenja okvira pokretanje se zaustavlja i to kaže. Radi se o elastičnom ponašanju s malim rotacijama, samo savijanju, bez redukcije krutosti i bez fiktivnih opterećenja (sama po sebi nije AISC metoda direktne analize); ploče, zidovi i kruti podovi ostaju prvog reda.

**Vlastite frekvencije (konačni elementi).** Blok {{ui:Konačni elementi: vlastite frekvencije}} ispod rezultata nalazi najniže oblike istog modela pomoću motora konačnih elemenata: grede s njihovim krajnjim oslobađanjima, ploče i zidovi kao ravne četvoročvorne ljuske, kruti podovi, oslonci. Izaberite broj oblika (3, 6, 10 ili 20) i element ploče (četvoročvorna ljuska za debele ili tanke ploče, ili element za tanku ploču) i pritisnite {{ui:Pronađi frekvencije}}. Tabela daje frekvenciju svakog oblika u Hz, njegov period u sekundama i efektivnu modalnu masu duž X, Y i Z kao udio mase koja se može pomjerati; {{ui:Prikaži na modelu}} crta bilo koji oblik na isti način kao deformisani oblik. Masa je gustina materijala pomnožena zapreminom: opterećenja ne dodaju masu, a materijal bez gustine nema masu. Izvještaj (PDF, CSV) sadrži tabelu. Radi se samo o elastičnom ponašanju i malim pomjeranjima, a seizmičko ili vjetrovno opterećenje se ovdje ne pravi prema propisu. Nije provjera prema propisu; inženjer pregleda rezultate.

**Spektar odziva, vremenska historija i pushover.** Tri bloka su ispod frekvencija i koriste isti model konačnih elemenata. Masa za sve njih je gustina materijala plus vertikalna opterećenja naniže slučajeva koje označite, svako pomnoženo faktorom koji upišete (na primjer Stalno s 1 i Korisno s udjelom koji računate kao masu).

{{ui:Spektar odziva}} čita svaki oblik iz spektra koji zadajete (tabela periode i ubrzanja, ili oblik ASCE 7 iz SDS, SD1 i TL; dugme {{ui:Koristi vrijednosti seizmičkog bloka}} kopira te vrijednosti iz seizmičkog bloka) i kombinuje oblike pomoću CQC, SRSS, pravila deset posto ili apsolutnog zbira, zatim spaja pravce X, Y i Z (100 % + 30 % ili SRSS). Daje baznu silu smicanja, međuspratna pomjeranja, sile na krajevima elemenata i tabelu oblika koja upozorava kada oblici koji se koriste nose manje od 90 % mase. Rezultate možete skalirati faktorom ili do bazne sile smicanja koju upišete; blok nikad sam ne računa tu baznu silu. Rezultati nemaju predznak.

{{ui:Vremenska historija}} pokreće ubrzanje tla metodom modalne superpozicije (tačno za prave linije zapisa između tačaka) ili direktnom integracijom (Newmarkova srednja ubrzanja s Rayleighovim prigušenjem). Ulaz je izmišljeni sinus ili impuls (uvijek označen kao sintetički), zapis koji nalijepite, ili tekstualna datoteka koju otvorite (vrijeme i ubrzanje, jedno ubrzanje po redu s korakom, ili datoteka u stilu PEER sa zaglavljem DT=; u g ili m/s²). Daje pomjeranje krova i baznu silu smicanja u funkciji vremena, drift svakog nivoa i anvelopu sila na krajevima elemenata. Modeli s vrlo dugim zapisom čuvaju ga samo za sesiju.

{{ui:Pushover}} gura krov bočno u malim koracima (oblik kao prvi mod ili ravnomjeran), s plastičnim zglobovima na krajevima elemenata koji imaju I oblik. Zglob popušta pri plastičnom momentu, koji opada kako aksijalna sila raste (računa se iz nacrtanog oblika, zanemarena zaobljenja); očvršćavanje je opcionalno, P-delta je opcionalna, a kombinacija s gravitacijom se može primijeniti prije. Daje krivu kapaciteta (bazna sila smicanja naspram pomjeranja krova), prvi zglob, te stanje i plastičnu rotaciju svakog zgloba. {{ui:Pokreni nelinearnu vremensku historiju}} pokreće iste zglobove pod zapisom iz bloka {{ui:Vremenska historija}} na malim modelima. Zglobovi se formiraju samo na krajevima elemenata (postavite čvor tamo gdje zglob treba da se formira unutar raspona); element oslobođen na oba kraja nema nijedan; popuštanje i izvijanje dijagonala nisu modelirani; ploče i zidovi ostaju elastični; kriteriji prihvatljivosti nisu dati. Nije provjera prema propisu; inženjer pregleda rezultate. Postavke se čuvaju s modelom, a izvještaj sadrži tabele.

## Još nije izgrađeno

Analiza izvijanja, korekcija nedostajuće mase za spektar odziva, skaliranje zapisa, kriteriji prihvatljivosti za zglobove (dinamički odziv je tu, gore), površinska i vjetrovna opterećenja koja se prave automatski (seizmičke sile na podovima su u [Provjera betonskih elemenata i pravljenje seizmičkih opterećenja](topic:concrete-and-seismic)), ofseti elemenata, dijagonale koje rade samo na zatezanje. Vidi [Šta još nije izgrađeno](topic:not-built-yet).
