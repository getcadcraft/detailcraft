---
title: Analiza rama
summary: Sile, reakcije i progibi greda, stubova i dijagonala onako kako su nacrtani, pod opterećenjima i kombinacijama koje zadaš. Pomoćno sredstvo za analizu, a ne provera prema propisu; provere su poseban korak.
keywords: analiza, strukturalna analiza, analiza rama, metoda krutosti, opterećenja, slučaj opterećenja, kombinacija, stalno opterećenje, korisno opterećenje, sopstvena težina, reakcije, moment savijanja, smicanje, aksijalna sila, progib, deformisani oblik, oslonci, zglobno, uklješteno, otpuštanje, izveštaj, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Kartica {{ui:Analiza}} na dnu nalazi sile u svakoj gredi, stubu i dijagonali modela, reakcije u osnovama stubova i koliko se članovi savijaju, za opterećenja koja zadaš.

:::warning
To je **pomoćno sredstvo za analizu, a ne provera prema propisu**. Analiza ne primenjuje nijedan propis za projektovanje: ne dimenzioniše članove, ne proverava nosivosti ni veze i ne bira faktore opterećenja. Inženjer proverava model, njegova opterećenja i oslonce i odlučuje šta brojevi znače. Za provere članova prema ASCE 7 / AISC 360 ili EN 1990 / EN 1993-1-1 vidi [Provera čeličnih članova prema propisu](topic:design-checks), poseban korak, takođe pomoćno sredstvo.
:::

## Pokretanje

1. Otvori karticu {{ui:Analiza}}.
2. Izaberi jedan ili više članova u prikazu, izaberi {{ui:Slučaj}}, {{ui:Opterećenje}} i {{ui:Pravac}}, unesi vrednost i pritisni {{ui:Dodaj opterećenje}}. Opterećenje raspoređeno duž člana je u kN/m, a tačkasto opterećenje u kN. {{ui:Nadole (gravitacija)}} je uobičajeno.
3. Pritisni {{ui:Pokreni analizu}}.

Tabela navodi najveću aksijalnu silu N, smicanja Vz i Vy, momente savijanja My i Mz, torziju T i njen progib za svaki član, sa najvećim momentom na vrhu. Klikni na ime člana da ga izabereš. Ispod su reakcije u svakom osloncu. {{ui:Na modelu}} crta deformisani oblik ili jedno dejstvo kao dijagram uz svaki član, sa najvećom vrednošću ispisanom na njegovom mestu. Rezultati zastarevaju čim se model promeni: pokreni analizu ponovo.

Svako opterećenje, slučaj i podešavanje je jedan korak poništavanja ({{key:Mod+Z}}) i čuva se u datoteci modela.

## Slučajevi opterećenja i kombinacije

Analiza počinje sa tri: **Stalno** (sopstvena težina članova, iz njihovih nacrtanih preseka i 7850 kg/m³), **Korisno** (prazno) i **Stalno + korisno**. Dodaj sopstvene slučajeve (vetar, sneg …) i kombinacije: kombinacija sabira slučajeve sa faktorima koje ukucaš. Analiza je linearna, pa se svaki slučaj rešava jednom, a kombinacije su zbirovi. Faktore upiši sam ili izaberi projektni propis i pusti da {{ui:Napravi kombinacije}} upiše propisane ([Provera čeličnih članova prema propisu](topic:design-checks)).

## Od čega je rám sastavljen

- Grede, stubovi i dijagonale, svaki na svojoj radnoj liniji (liniji koju si nacrtao), sa stvarnim karakteristikama preseka izračunatim iz njegovog obrisa. Ploče, stepenice, temelji i zavrtnji nisu deo rama.
- Član se deli tamo gde kraj drugog člana naleže na njega, pa se greda koja se na sredini visine spaja na stub tu vezuje za stub.
- **Osnove stubova**: uklještene (početak) ili zglobne (držane na mestu i protiv uvijanja, slobodne da se okreću). Osnovna ploča uvek pravi oslonac.
- **Krajevi greda**: krajnja ploča je kruta, a smičuća spojnica je zglobna. {{ui:Krajevi greda bez spoja}} postavlja ostalo. **Dijagonale** su zglobne na oba kraja.
- Izaberi jedan član da mu daš posebno pravilo za krajeve ili za osnovu stuba.
- Čelik svuda: E = 200 GPa, G = 77 GPa.

Ako rám može da se pomeri, a da ništa ne savija (mehanizam, na primer zglobne osnove bez ukrućenja u jednom pravcu), analiza staje i kaže gde i u kom pravcu. Zadrži ga osloncem, krutim spojem ili dijagonalom.

## Znaci

N > 0 je zatezanje. My > 0 stavlja lokalnu −z stranu člana pod zatezanje: greda koja se savija nadole pod gravitacijom ima My > 0. Mz > 0 stavlja lokalnu −y stranu pod zatezanje. Progib se meri od prave linije između krajeva člana. Lokalna z osa člana gleda nagore (za stub: duž X); njegove lokalne ose se okreću sa rotacijom člana.

## Izveštaj

{{ui:Izveštaj (PDF)}} i {{ui:Izveštaj (CSV)}} sadrže sve: pretpostavke na kojima je rám napravljen, preseke, slučajeve i kombinacije, zatim za svaki slučaj i kombinaciju reakcije (sa zbirovima opterećenja i reakcija, koji se poništavaju), sile u članovima i pomeranja, i obvojnicu svih slučajeva. {{ui:Izvezi kao CraftScript}} piše isti rám kao skriptu za radni prostor za skripte u PartCraft-u, gde biblioteka funkcija `frame3d` rešava korak po korak u čitljivom kodu.

## Metoda

Direktna metoda krutosti, linearna i prvog reda, osim ako ne označiš Drugi red (P-Delta): gredno-stubni elementi sa dva čvora, sa krutostima na aksijalno, uvijanje i dva savijanja (bez deformacije smicanjem, bez vitoperenja), otpuštanja krajeva statičkom kondenzacijom, opterećenja duž članova kroz sopstvene funkcije oblika. Odgovori se proveravaju prema klasičnim udžbeničkim slučajevima (konzole, proste, uklještene i kontinualne grede, portalni rám, rešetka na uvijanju, rešetkasta konstrukcija).

**Drugi red (P-Delta).** Označi *Drugi red (P-Delta)* pored Pokreni: svaka kombinacija se ponovo rešava sa aksijalnim silama članova koje deluju na deformisani rám (svaki član je podeljen na 4 dela, pa se računa i savijanje člana između krajeva), dok se aksijalne sile ne ustale. Red rezultata daje broj prolaza i koliko se ljuljanje povećalo; momenti, progibi, provere i izveštaj tada koriste ove rezultate. Iznad elastičnog kritičnog opterećenja rama analiza staje i to kaže. Elastična je, sa malim rotacijama, samo savijanje, bez smanjenja krutosti i fiktivnih opterećenja (sama po sebi nije AISC metoda direktne analize); ploče, zidovi i kruti podovi ostaju prvog reda.

**Prirodne frekvencije (konačni elementi).** Blok {{ui:Konačni elementi: sopstvene frekvencije}} ispod rezultata nalazi najniže oblike istog modela sa motorom konačnih elemenata: grede sa svojim otpuštanjima krajeva, ploče i zidovi kao ravne četvoročvorne ljuske, kruti podovi, oslonci. Izaberi koliko oblika (3, 6, 10 ili 20) i ljusku ploče (četvoročvornu za debele ili tanke ploče, ili onu za tanke ploče) i pritisni {{ui:Nađi frekvencije}}. Tabela daje frekvenciju svakog oblika u Hz, njegov period u sekundama i efektivnu modalnu masu duž X, Y i Z kao udeo mase koja može da se kreće. {{ui:Prikaži na modelu}} crta bilo koji oblik na isti način kao deformisani oblik. Masa je gustina materijala puta zapremina: opterećenja ne dodaju masu, a materijal bez gustine je nema. Izveštaj (PDF, CSV) nosi tabelu. Elastična je i samo za male pomeraje, a seizmičko ili vetrovno opterećenje se ovde ne pravi iz propisa. Nije provera prema propisu; inženjer pregleda rezultate.

**Spektar odgovora, vremenska istorija i guranje do sloma.** Tri bloka dalje ispod frekvencija koriste isti model konačnih elemenata. Masa za sve je gustina materijala plus nadole opterećenja slučajeva koje označiš, svako pomnoženo faktorom koji ukucaš (na primer Stalno sa 1, a Korisno sa udelom koji računaš kao masu).

{{ui:Spektar odgovora}} čita svaki oblik sa spektra koji zadaš (tabela perioda i ubrzanja, ili oblik po ASCE 7 iz SDS, SD1 i TL; dugme {{ui:Koristi vrednosti iz bloka Seizmički}} kopira te vrednosti iz bloka Seizmički) i kombinuje oblike po CQC, SRSS, pravilu deset procenata ili apsolutnom zbiru, a zatim spaja pravce X, Y i Z (100 % + 30 % ili SRSS). Daje osnovnu silu smicanja, međuspratne pomeraje, sile na krajevima članova i tabelu oblika koja upozorava kad korišćeni oblici nose manje od 90 % mase. Rezultate možeš skalirati faktorom ili do osnovne sile smicanja koju ukucaš; blok nikad sam ne računa tu osnovnu silu. Rezultati nemaju znak.

{{ui:Vremenska istorija}} pušta ubrzanje tla modalnom superpozicijom (tačno za prave linije zapisa između tačaka) ili direktnom integracijom (Njumarkov prosečni metod ubrzanja sa Rejlijevim prigušenjem). Ulaz je izmišljen sinus ili impuls (uvek obeležen kao sintetički), zapis koji nalepiš ili tekstualna datoteka koju otvoriš (vreme i ubrzanje, jedno ubrzanje po redu sa korakom, ili datoteka u stilu PEER sa zaglavljem DT=; u g ili m/s²). Daje pomeraj krova i osnovnu silu smicanja u funkciji vremena, pomeraj svakog nivoa i obvojnicu sila na krajevima članova. Modeli sa veoma dugim zapisom čuvaju ga samo za sesiju.

{{ui:Guranje do sloma}} gura krov bočno u malim koracima (oblik kao prvi oblik ili ravnomeran), sa plastičnim zglobovima na krajevima članova koji imaju I presek. Zglob popušta na plastičnom momentu, koji opada kako aksijalna sila raste (računa se iz nacrtanog oblika, zaobljenja se zanemaruju). Očvršćavanje je opciono, P-delta je opciono, a kombinacija gravitacije može se primeniti prvo. Daje krivu nosivosti (osnovna sila smicanja naspram pomeraja krova), prvi zglob i stanje i plastičnu rotaciju svakog zgloba. {{ui:Pokreni nelinearnu vremensku istoriju}} pušta iste zglobove pod zapisom bloka Vremenska istorija, na malim modelima. Zglobovi se formiraju samo na krajevima članova (postavi čvor tamo gde treba da se formira zglob unutar raspona); član otpušten na oba kraja nema ih; popuštanje i izvijanje dijagonala nisu modelovani; ploče i zidovi ostaju elastični; kriterijumi prihvatljivosti nisu dati. Nije provera prema propisu; inženjer pregleda rezultate. Podešavanja se čuvaju uz model, a izveštaj nosi tabele.

## Još nije napravljeno

Još nije napravljeno: analiza izvijanja, korekcija nedostajuće mase za spektar odgovora, skaliranje zapisa, kriterijumi prihvatljivosti za zglobove (dinamički odgovor je tu, gore), oblasti i vetrovna opterećenja koja se prave automatski (seizmičke sile na podovima su u [Provera betonskih članova i pravljenje seizmičkih opterećenja](topic:concrete-and-seismic)), pomeranja članova, dijagonale koje primaju samo zatezanje. Vidi [Još nije napravljeno](topic:not-built-yet).
