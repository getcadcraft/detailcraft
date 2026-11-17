---
title: Analiza okvira
summary: Sile, reakcije i progibi greda, stupova i spregova onako kako su nacrtani, pod slučajevima i kombinacijama opterećenja koje postavite. Pomoć za analizu, a ne provjera prema propisu; provjere projektiranja su zaseban korak.
keywords: analiza, konstrukcijska analiza, analiza okvira, metoda krutosti, opterećenja, slučaj opterećenja, kombinacija, stalno opterećenje, uporabno opterećenje, vlastita težina, reakcije, moment savijanja, posmična sila, uzdužna sila, progib, deformirani oblik, oslonci, zglobni, uklještenje, otpuštanje, izvješće, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Kartica {{ui:Analiza}} pri dnu pronalazi sile u svakoj gredi, stupu i spregu modela, reakcije u bazama stupova i koliko se članovi savijaju, za opterećenja koja zadate.

:::warning
To je **pomoć za analizu, a ne provjera prema propisu**. Analiza ne primjenjuje nikakav projektni propis: ne dimenzionira štapove, ne provjerava nosivosti ni spojeve i ne odabire faktore opterećenja. Inženjer provjerava model, njegova opterećenja i oslonce te odlučuje što brojevi znače. Za provjere čeličnih štapova prema ASCE 7 / AISC 360 ili EN 1990 / EN 1993-1-1 vidi [Provjera čeličnih štapova prema projektnom propisu](topic:design-checks), također zaseban korak i samo pomoć.
:::

## Pokretanje

1. Otvorite karticu {{ui:Analiza}}.
2. Odaberite jedan ili više štapova u prikazu, odaberite {{ui:Slučaj}}, {{ui:Opterećenje}} i {{ui:Smjer}}, upišite vrijednost i pritisnite {{ui:Dodaj opterećenje}}. Opterećenje raspoređeno duž štapa je u kN/m, a koncentrirana sila u kN. Najčešće je {{ui:Prema dolje (gravitacija)}}.
3. Pritisnite {{ui:Pokreni analizu}}.

Tablica navodi za svaki štap najveću uzdužnu silu N, poprečne sile Vz i Vy, momente savijanja My i Mz, torziju T i njegov progib, s najvećim momentom na vrhu; kliknite na naziv štapa da ga odaberete. Ispod su reakcije u svakom osloncu. {{ui:Na modelu}} crta deformirani oblik ili jedno djelovanje kao dijagram uz svaki štap, s najvećom vrijednošću upisanom na njegovo mjesto. Rezultati zastarijevaju čim se model promijeni: pokrenite ponovno.

Svako opterećenje, slučaj i postavka je jedan korak poništavanja ({{key:Mod+Z}}) i sprema se u datoteku modela.

## Slučajevi opterećenja i kombinacije

Analiza kreće s tri: **Stalno** (vlastita težina štapova iz nacrtanih presjeka i 7850 kg/m³), **Uporabno** (prazno) i **Stalno + uporabno**. Dodajte vlastite slučajeve (vjetar, snijeg …) i kombinacije: kombinacija zbraja slučajeve s faktorima koje upišete. Analiza je linearna, pa se svaki slučaj rješava jednom, a kombinacije su zbrojevi. Faktore upišite sami ili odaberite projektni propis i pustite {{ui:Izradi kombinacije}} da zapiše propisane ([Provjera čeličnih štapova prema projektnom propisu](topic:design-checks)).

## Od čega se sastoji okvir

- Grede, stupovi i spregovi, svaki na svojoj radnoj liniji (liniji koju ste nacrtali), sa stvarnim svojstvima presjeka izračunatima iz njegova obrisa. Limovi, stepenice, temelji i vijci nisu dio okvira.
- Štap se dijeli tamo gdje na njega dolazi kraj drugog štapa, pa se greda koja dolazi na stup na pola visine spaja na stup tamo.
- **Baze stupova**: uklještene (na početku) ili zglobne (držane na mjestu i protiv uvijanja, slobodne za zakretanje). Podložna ploča uvijek čini oslonac.
- **Krajevi greda**: čeona ploča je kruta, a posmična spojna ploča je zglobna. {{ui:Krajevi greda bez priključka}} postavlja ostale. **Spregovi** su zglobno vezani na oba kraja.
- Odaberite jedan štap da njegovim krajevima ili bazi stupa dodijelite vlastito pravilo.
- Čelik svuda: E = 200 GPa, G = 77 GPa.

Ako se okvir može pomicati bez savijanja ijednog štapa (mehanizam, primjerice zglobne baze bez spregova u jednom smjeru), izvođenje staje i kaže gdje i u kojem smjeru; zadržite ga osloncem, krutim spojem ili spregom.

## Predznaci

N > 0 je vlak. My > 0 stavlja lokalnu stranu −z štapa u vlak: greda koja se pod gravitacijom progiba ima My > 0. Mz > 0 stavlja lokalnu stranu −y u vlak. Progib se mjeri od pravca između krajeva štapa. Lokalna z os štapa pokazuje prema gore (za stup: duž X); njegove lokalne osi se zakreću zajedno s rotacijom štapa.

## Izvješće

{{ui:Izvješće (PDF)}} i {{ui:Izvješće (CSV)}} sadrže sve: pretpostavke na kojima je okvir izgrađen, presjeke, slučajeve i kombinacije, zatim za svaki slučaj i kombinaciju reakcije (sa zbrojevima opterećenja i reakcija koji se poništavaju), sile u štapovima i pomake te obvojnicu svih slučajeva. {{ui:Izvezi kao CraftScript}} zapisuje isti okvir kao skriptu za radni prostor Script u PartCraftu, gdje knjižnična funkcija `frame3d` rješava okvir korak po korak u čitljivom kodu.

## Metoda

Metoda direktne krutosti, linearna i prvog reda, osim ako ne označite Računanje drugog reda (P-Delta): gredno-stupni elementi s dva čvora, s krutostima na uzdužno, torziju i dva savijanja (bez deformacije posmikom, bez vitoperenja), otpuštanja krajeva statičkom kondenzacijom, opterećenja duž štapova kroz njihove vlastite oblikovne funkcije. Rezultati su provjereni prema klasičnim udžbeničkim slučajevima (konzole, proste, uklještene i kontinuirane grede, portalni okvir, mreža u torziji, ravninski rešetkasti nosač).

**Računanje drugog reda (P-Delta).** Označite *Računanje drugog reda (P-Delta)* pokraj Pokreni: svaka kombinacija se ponovno rješava s uzdužnim silama štapova koje djeluju na deformirani okvir (svaki štap se dijeli na 4 dijela, pa se savijanje štapa između krajeva također računa), dok se uzdužne sile ne ustale. Redak rezultata daje broj prolaza i koliko je porasla bočna deformacija (sway); momenti, progibi, provjere projektiranja i izvješće tada koriste ove rezultate. Iznad elastičnog kritičnog opterećenja okvira izvođenje staje i to kaže. Elastično je uz male zakrete, samo savojno, bez smanjenja krutosti i fiktivnih opterećenja (nije sama po sebi metoda izravne analize prema AISC-u); ploče, zidovi i krute međukatne konstrukcije ostaju prvog reda.

**Vlastite frekvencije (konačni elementi).** Blok {{ui:Konačni elementi: vlastite frekvencije}} ispod rezultata nalazi najniže oblike istog modela pomoću motora konačnih elemenata: grede s otpuštanjem krajeva, ploče i zidovi kao ravne četveročvorne ljuske, kruti katovi i oslonci. Odaberite koliko oblika (3, 6, 10 ili 20) i ploču (četveročvorna ljuska za debele ili tanke ploče, ili element tanke ploče) i pritisnite {{ui:Pronađi frekvencije}}. Tablica daje frekvenciju svakog oblika u Hz, njegov period u sekundama i njegovu efektivnu modalnu masu duž X, Y i Z kao udio mase koja se može pomicati. {{ui:Prikaži na modelu}} crta bilo koji oblik na način na koji se crta deformirani oblik. Masa je gustoća materijala puta volumen: opterećenja ne dodaju masu, a materijal bez gustoće nema masu. Izvješće (PDF, CSV) sadrži tablicu. Elastično je i samo za male pomake; seizmičko ili vjetrovno opterećenje se ovdje ne izrađuje prema propisu. Nije provjera prema propisu; rezultate pregledava vaš inženjer.

**Spektar odziva, vremenski odziv i pushover.** Ispod vlastitih frekvencija nalaze se još tri bloka, koji koriste isti model konačnih elemenata. Masa za sve njih je gustoća materijala plus sile prema dolje za slučajeve koje označite, svaka pomnožena faktorom koji upišete (na primjer Stalno s 1 i Uporabno s udjelom koji računate kao masu).

{{ui:Spektar odziva}} čita svaki oblik iz spektra koji zadate (tablica perioda i ubrzanja ili oblik prema ASCE 7 iz SDS, SD1 i TL; gumb {{ui:Upotrijebi vrijednosti bloka Seizmika}} kopira ih iz bloka Seizmika) i kombinira oblike pomoću CQC, SRSS, pravila deset posto ili apsolutnog zbroja, zatim spaja smjerove X, Y i Z (100 % + 30 % ili SRSS). Daje ukupnu poprečnu silu, međuetažne pomake, sile na krajevima štapova i tablicu oblika koja upozorava kad korišteni oblici nose manje od 90 % mase. Rezultate možete skalirati faktorom ili do poprečne sile koju upišete; blok sam nikad ne računa tu poprečnu silu. Rezultati nemaju predznak.

{{ui:Vremenski odziv}} pokreće ubrzanje tla superpozicijom oblika (točno za pravce zapisa između točaka) ili izravnom integracijom (Newmarkova srednja ubrzanja s Rayleighovim prigušenjem). Ulaz je izmišljeni sinus ili impuls (uvijek označen kao sintetički), zapis koji zalijepite ili tekstualna datoteka koju otvorite (vrijeme i ubrzanje, jedno ubrzanje po retku s korakom, ili datoteka u stilu PEER-a sa zaglavljem DT=; u g ili m/s²). Daje pomak krova i ukupnu poprečnu silu u vremenu, pomak svake etaže i obvojnicu sila na krajevima štapova. Modeli s vrlo dugim zapisom zadržavaju ga samo za sesiju.

{{ui:Pushover}} gura krov bočno u malim koracima (oblik kao prvi oblik ili jednolik), s plastičnim zglobovima na krajevima štapova koji imaju I-profil. Zglob popušta pri plastičnom momentu koji pada kako uzdužna sila raste (izračunat iz nacrtanog oblika, zanemareni radijusi zaobljenja); očvršćivanje je neobavezno, P-delta je neobavezan, a kombinacija gravitacijskog opterećenja može se prvo primijeniti. Daje krivulju kapaciteta (poprečna sila naspram pomaka krova), prvi zglob te stanje i plastični zakret svakog zgloba. {{ui:Pokreni nelinearni vremenski odziv}} pokreće iste zglobove pod zapisom bloka Vremenski odziv na malim modelima. Zglobovi nastaju samo na krajevima štapova (postavite čvor tamo gdje bi trebao nastati unutar raspona); štap otpušten na oba kraja ih nema, a popuštanje i izvijanje spregova nisu modelirani; ploče i zidovi ostaju elastični; kriteriji prihvatljivosti nisu dani. Nije provjera prema propisu; rezultate pregledava vaš inženjer. Postavke se spremaju s modelom, a izvješće sadrži tablice.

Još nije izrađeno: analiza izvijanja, korekcija nedostajuće mase za spektar odziva, skaliranje zapisa, kriteriji prihvatljivosti za zglobove (dinamički odziv je tu, gore), površinska i vjetrovna opterećenja koja se izrađuju za vas (potresne sile na etažama su u [Provjera betonskih elemenata i izrada seizmičkih opterećenja](topic:concrete-and-seismic)), pomaci osi štapova, sprege koji preuzimaju samo vlak. Vidi [Još nije izrađeno](topic:not-built-yet).
