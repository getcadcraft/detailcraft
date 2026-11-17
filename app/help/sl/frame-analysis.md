---
title: Analiza okvira
summary: Sile, reakcije in pomiki gred, stebrov in diagonal, kot so narisani, pod obtežnimi primeri in kombinacijami, ki jih nastavite. Pomoč pri analizi, ne kontrola predpisov; kontrole projektiranja so ločen korak.
keywords: analiza, konstrukcijska analiza, analiza okvira, metoda togosti, obtežbe, obtežni primer, kombinacija, lastna teža, lastna teža elementa, reakcije, upogibni moment, strig, osna sila, pomik, deformirana oblika, podpore, členkasto, vpetje, sprostitev, poročilo, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Zavihek {{ui:Analiza}} na dnu poišče sile v vsaki gredi, stebru in diagonali modela, reakcije na stebrnih podstavkih ter to, kako se elementi upognejo, za obtežbe, ki jih vnesete.

:::warning
To je **pomoč pri analizi, ne kontrola predpisov**. Analiza ne uporablja nobenega predpisa: ne dimenzionira elementov, ne preverja nosilnosti ali spojev in ne izbira faktorjev obtežbe. Inženir pregleda model, njegove obtežbe in podpore ter odloči, kaj številke pomenijo. Za kontrolo elementov po ASCE 7 / AISC 360 ali EN 1990 / EN 1993-1-1 glejte [Kontrola jeklenih elementov po predpisu](topic:design-checks), ki je prav tako ločen korak in samo pomoč.
:::

## Zagon

1. Odprite zavihek {{ui:Analiza}}.
2. Izberite enega ali več elementov v pogledu, izberite {{ui:Primer}}, {{ui:Obtežba}} in {{ui:Smer}}, vnesite vrednost in pritisnite {{ui:Dodaj obtežbo}}. Obtežba, razporejena vzdolž elementa, je v kN/m, točkovna obtežba pa v kN. {{ui:Navzdol (težnost)}} je običajna izbira.
3. Pritisnite {{ui:Zaženi analizo}}.

Tabela navede za vsak element največjo osno silo N, strižni sili Vz in Vy, upogibna momenta My in Mz, torzijo T in njen pomik, z največjim momentom na vrhu; kliknite ime elementa, da ga izberete. Spodaj so reakcije v vsaki podpori. {{ui:Na modelu}} nariše deformirano obliko ali eno od obtežbenih količin kot diagram ob vsakem elementu z največjo vrednostjo, zapisano na njegovem mestu. Rezultati zastarajo takoj, ko se model spremeni: zaženite analizo znova.

Vsaka obtežba, primer in nastavitev je en korak razveljavitve ({{key:Mod+Z}}) in se shrani v datoteko modela.

## Obtežni primeri in kombinacije

Analiza se začne s tremi: **Lastna teža** (lastna teža elementov iz njihovih narisanih prerezov in 7850 kg/m³), **Koristna obtežba** (prazno) in **Lastna + koristna**. Dodajte lastne primere (veter, sneg ...) in kombinacije: kombinacija sešteje primere s faktorji, ki jih vnesete. Analiza je linearna, zato se vsak primer reši enkrat, kombinacije pa so vsote. Faktorje vnesite sami ali izberite projektni predpis in pustite, da {{ui:Sestavi kombinacije}} zapiše kombinacije predpisa ([Kontrola jeklenih elementov po predpisu](topic:design-checks)).

## Iz česa je okvir sestavljen

- Gred, stebri in diagonale, vsak na svoji delovni osi (črti, ki ste jo narisali), z dejanskimi lastnostmi prereza, izračunanimi iz njegovega obrisa. Plošče, stopnice, temeljne stope in vijaki niso del okvira.
- Element se razdeli tam, kjer se konec drugega elementa stakne nanj, zato se greda, ki se stakne v steber na sredini višine, tam pritrdi na steber.
- **Stebrni podstavki**: vpeti (začetek) ali členkasti (pridržani in zavarovani proti zasuku, prosti vrtenja). Podložna plošča vedno ustvari podporo.
- **Konci gred**: čelna plošča je togo vpeta, strižni jeziček pa členkast. {{ui:Konci gred brez spoja}} nastavi ostale. **Diagonale** so na obeh koncih členkaste.
- Izberite en element, da njegovim koncem ali stebrnemu podstavku dodelite lastno pravilo.
- Jeklo povsod: E = 200 GPa, G = 77 GPa.

Če se lahko okvir premakne, ne da bi se karkoli upognil — mehanizem, na primer členkasti podstavki brez stranskega zavetja v eni smeri —, se izvajanje ustavi in pove, kje in v katero smer; to zadržite s podporo, togim spojem ali diagonalo.

## Predznaki

N > 0 je nateg. My > 0 da lokalno stran −z elementa v nategu: greda, ki se pod težo upogne navzdol, ima My > 0. Mz > 0 da lokalno stran −y v nategu. Pomik se meri od ravne črte med koncema elementa. Lokalna z os elementa kaže navzgor (za steber: vzdolž X); njegove lokalne osi se zavrtijo skupaj z zasukom elementa.

## Poročilo

{{ui:Poročilo (PDF)}} in {{ui:Poročilo (CSV)}} vsebujeta vse: predpostavke, na katerih je okvir zgrajen, prereze, primere in kombinacije, nato za vsak primer in kombinacijo reakcije (z vsotami obtežb in reakcij, ki se uravnotežijo), sile v elementih in pomike ter ovojnico vseh primerov. {{ui:Izvozi kot CraftScript}} zapiše isti okvir kot skript za delovno okolje Script programa PartCraft, kjer knjižnična funkcija `frame3d` reši okvir korak za korakom v berljivi kodi.

## Metoda

Metoda neposredne togosti, linearna in prvega reda, razen če označite Drugi red (P-Delta): dvovozliščni elementi steber-greda z osno, torzijsko in dvema upogibnima togostma (brez strižne deformacije, brez izbočenja), sprostitve koncev z statično kondenzacijo, obtežbe vzdolž elementov prek lastnih oblikovnih funkcij elementov. Odgovori so preverjeni z klasičnimi učbeniškimi primeri (konzole, prosto podprte, vpete in zvezne grede, portalni okvir, rešetka v torziji, rešetka).

**Drugi red (P-Delta).** Označite *Drugi red (P-Delta)* ob gumbu Zaženi: vsaka kombinacija se reši znova, pri čemer osne sile elementov delujejo na deformirani okvir (vsak element je razdeljen na 4 dele, da se upogib elementa med koncema šteje tudi), dokler se osne sile ne ustalijo. Vrstica rezultata navede število prehodov in koliko se je povečal premik zaradi nihanja; momenti, pomiki, kontrole projektiranja in poročilo nato uporabijo te rezultate. Nad elastično kritično obtežbo okvirja se izvajanje ustavi in to pove. Je elastičen z majhnimi zasuki, samo upogibno, brez zmanjšanja togosti in brez fiktivnih obtežb (sam po sebi ni metoda neposredne analize AISC); plošče, stene in togi stropi ostanejo prvega reda.

**Lastne frekvence (končni elementi).** Blok {{ui:Končni elementi: lastne frekvence}} pod rezultati poišče najnižje oblike nihanja istega modela z motorjem končnih elementov: gredi z njihovimi sprostitvami konca, plošče in stene kot ravne štirivozliščne lupine, togi stropi, podpore. Izberite število oblik (3, 6, 10 ali 20) in vrsto elementa plošče (štirivozliščna lupina za debele ali tanke plošče ali element za tanke plošče) ter pritisnite {{ui:Poišči frekvence}}. Tabela navede frekvenco vsake oblike v Hz, njeno periodo v sekundah in njeno učinkovito modalno maso po X, Y in Z kot delež mase, ki se lahko giblje; {{ui:Prikaži na modelu}} nariše poljubno obliko na enak način kot deformirano obliko. Masa je gostota materiala, pomnožena s prostornino: obtežbe ne dodajajo mase, material brez gostote pa je nima. Poročilo (PDF, CSV) vsebuje tabelo. Velja samo za elastične in majhne premike; potresna ali vetrna obtežba tu ni izdelana po predpisu. Ni kontrola predpisov; rezultate pregleda vaš inženir.

**Spekter odziva, časovni potek in potisna analiza (pushover).** Pod frekvencami so še trije bloki, ki uporabljajo isti model končnih elementov. Masa za vse je gostota materiala plus navpične obtežbe izbranih primerov, vsaka pomnožena s faktorjem, ki ga vnesete (na primer Lastna teža s 1 in Koristna obtežba z deležem, ki ga štejete kot maso).

{{ui:Spekter odziva}} prebere vsako obliko iz spektra, ki ga vnesete (tabela periode in pospeška ali oblika ASCE 7 iz SDS, SD1 in TL; gumb {{ui:Uporabi vrednosti iz bloka Potresno}} prepiše te vrednosti iz bloka Potresno), oblike pa združi po CQC, SRSS, pravilu desetih odstotkov ali absolutni vsoti, nato pa združi smeri X, Y in Z (100 % + 30 % ali SRSS). Poda bazno strižno silo, medetažne premike, sile na koncih elementov in tabelo oblik, ki opozori, če uporabljene oblike nosijo manj kot 90 % mase. Rezultate lahko pomnožite s faktorjem ali jih skalirate na bazno strižno silo, ki jo vnesete; blok te bazne strižne sile nikoli ne izračuna sam. Rezultati nimajo predznaka.

{{ui:Časovni potek}} zažene pospešek tal z modalno superpozicijo (natančno za ravne črte zapisa med točkami) ali z neposredno integracijo (Newmarkova povprečna metoda pospeška z Rayleighovim dušenjem). Vhod je izmišljen sinus ali impulz (vedno označen kot sintetičen), zapis, ki ga prilepite, ali besedilna datoteka, ki jo odprete (čas in pospešek, en pospešek na vrstico s korakom, ali datoteka v slogu PEER z glavo DT=; v g ali m/s²). Poda pomik strehe in bazno strižno silo v odvisnosti od časa, premik vsake etaže in ovojnico sil na koncih elementov. Modeli z zelo dolgim zapisom ga hranijo samo za trenutno sejo.

{{ui:Potisna analiza}} potiska streho vodoravno v majhnih korakih (oblika kot pri prvi obliki ali enakomerna), s plastičnimi členki na koncih elementov z obliko I. Členek popusti pri plastičnem momentu, ki pada, ko osna sila raste (izračunano iz narisane oblike, zaobljenosti zanemarjene); utrjevanje je neobvezno, P-delta je neobvezna, pred tem pa se lahko uporabi kombinacija s težo. Poda krivuljo nosilnosti (bazna strižna sila v odvisnosti od pomika strehe), prvi členek ter stanje in plastični zasuk vsakega členka. {{ui:Zaženi nelinearni časovni potek}} na majhnih modelih zažene iste členke pod zapisom bloka Časovni potek. Členki nastanejo samo na koncih elementov (postavite vozlišče tam, kjer naj nastane, znotraj razpona); element, sproščen na obeh koncih, nima členkov, popuščanje in zvijanje diagonal pa nista modelirana; plošče in stene ostanejo elastične; merila sprejemljivosti niso podana. Ni kontrola predpisov; rezultate pregleda vaš inženir. Nastavitve se shranijo z modelom, poročilo pa vsebuje tabele.

Še ni izdelano: analiza izbočenja, popravek manjkajoče mase za spekter odziva, skaliranje zapisov, merila sprejemljivosti za členke (dinamični odziv je na voljo zgoraj), površinske in vetrne obtežbe, ki jih program izdela namesto vas (potresne sile na etažah so v [Kontrola betonskih elementov in izdelava potresnih obtežb](topic:concrete-and-seismic)), odmiki elementov, diagonale, ki prenašajo samo nateg. Glejte [Kaj še ni izdelano](topic:not-built-yet).
