---
title: Provjere temelja
summary: Provjerite temelje, kombinirane temelje i temeljne ploče na tlu koje opisujete, slijeganje, fleksibilnu ploču na oprugama, skupine pilota i potporne zidove. Pomoć inženjeru pri provjeri.
keywords: temelj, kombinirani temelj, temeljna ploča, slijeganje, modul ležišta, opruge, rubni stup, kutni stup, nosivost, klizanje, prevrtanje, proboj, jednosmjerni posmik, savijanje, sidrenje, minimalna armatura, skupina pilota, potporni zid, ACI 318-19
from: 6961ad52
---

:::warning
Ovo su provjere prvog reda za pregled inženjera, a ne odobrenje projekta. Dopušteni tlak na tlo i koeficijent trenja određujete vi: DetailCraft ne zna vaše tlo.
:::

Kartica {{ui:Temelji}} provjerava temelje u modelu prema opterećenjima stupova koja im zadate.

## Opišite tlo

Upišite {{ui:Dopušteni tlak na tlo}} i {{ui:Koeficijent trenja na podlozi}}. Oba počinju s 0, što znači „nije uneseno“: provjera tada prikazuje tlak kao napomenu i ne tvrdi da prolazi. Za slijeganje upišite modul tla {{ui:Es}} (MPa), Poissonov koeficijent i dopušteno slijeganje (za početak 25 mm). Za fleksibilnu ploču upišite modul ležišta {{ui:ks}}. Tu su i nasip iznad temelja, jedinična težina tla, faktori sigurnosti za klizanje i prevrtanje (za početak 1.5) i granica tečenja armature.

## Unesite opterećenja

Svaki temelj ima popis opterećenja stupova. Upotrijebite {{ui:Dodaj opterećenje stupa}} i ispunite redak uporabnih opterećenja (za nosivost, klizanje i prevrtanje) i redak faktoriziranih opterećenja (za provjere čvrstoće): vertikalnu silu P prema dolje, vodoravne sile Vx i Vy na vrhu temelja, momente Mx i My, položaj stupa na temelju i njegovu veličinu.

Ili pokrenite karticu {{ui:Analiza}} i pritisnite {{ui:Preuzmi opterećenja stupova iz Analize}}: svaki oslonac koji stoji na temelju postaje opterećenje stupa, iz uporabnog i faktoriziranog skupa koji odaberete. Pozitivni My jače opterećuje stranu temelja +x; pozitivni Mx jače opterećuje stranu −y.

## Što se provjerava

Iz uporabnih opterećenja, uz vlastitu težinu temelja i dodani nasip:

- **Nosivost:** tlak ispod krutog temelja. Unutar srednje trećine cijela baza je u dodiru; izvan nje dio baze se odiže i vršni tlak je veći. Rezultanta izvan baze znači neuspjeh.
- **Klizanje:** trenje puta vertikalno opterećenje naspram vodoravne sile.
- **Prevrtanje:** udaljenost rezultante od ruba.
- **Slijeganje:** elastično slijeganje srednjeg tlaka na poluprostor s unesenim modulom, u sredini i u kutu (Timoshenko i Goodierovo rješenje za fleksibilni pravokutnik), u odnosu na granicu. To je gornja granica za kruti temelj i ne uzima u obzir sloj tla ograničene dubine, rasterećenje iskopanim tlom i konsolidaciju. Bez modula prikazuje tlak kao napomenu.

Iz samih faktoriziranih opterećenja stupova (ACI 318-19):

- **Savijanje** na licu stupa, s minimalnom armaturom (0.0018 za šipke od 420 MPa) i šipkama koje ste nacrtali.
- **Jednosmjerni posmik** na udaljenosti d od lica.
- **Proboj** na udaljenosti d/2 oko svakog stupa, s momentom stupa. Za stup blizu ruba kritični presjek je odrezan rubom temelja (tri strane na rubu, dvije u kutu; ACI 318-19 22.6.4.1 i manji αs iz tablice 22.6.5.2), a moment oko središta presjeka uključuje pomak opterećenja.
- **Sidrenje** šipki iza lica stupa, ravnih ili s kukama.
- **Visina** iznad donjih šipki (150 mm).

Kombinirani temelj ili ploča uzimaju se kao kruti, a poprečna sila i moment dolaze iz statike na presjecima kroz punu širinu.

## Fleksibilna ploča na oprugama

Označite {{ui:Analiziraj ovaj temelj kao fleksibilnu ploču na oprugama}} kad temelj nosi mnogo stupova, a kruti temelj je pregrub. Temelj postaje ploča od četveročvornih konačnih elemenata na podlozi od opruga (upisani {{ui:ks}}, koncentrirani u čvorovima), a opterećenje svakog stupa raspoređuje se na čvorove vlastitog otiska. Druga tablica daje najveći tlak tla i slijeganje (te razliku između najvećeg i najmanjeg), moment savijanja u oba smjera s potrebnom armaturom, vlačno naprezanje na gornjoj strani naspram čvrstoće običnog betona (temelj nema gornje šipke), jednosmjerni posmik na udaljenosti d od stupova i proboj prema tlaku samih opruga. Mreža se usitnjava dok stup nije širok tri elementa; velika ploča traje nekoliko sekundi. Vlastita težina ploče i tlo iznad nje se poništavaju i nisu uključeni.

Svaka neuspjela provjera je u panelu {{ui:Problemi}} uz pripadajući stavak.

## Skupine pilota i potporni zidovi

{{ui:Dodaj skupinu pilota}} postavlja mrežu pilota pod kruti naglavnik: upišite opterećenje i momente te što jedan pilot smije nositi na tlak i na vlak (brojevi iz proračuna pilota, a ne iz ove kartice). Reakcija svakog pilota je P/n plus njegov udio u momentima (elastična metoda), a najveći tlak i svaki vlak se provjeravaju.

{{ui:Dodaj potporni zid}} provjerava konzolni zid na vodoravnom zasipu, po metru: Rankineov aktivni tlak, prevrtanje oko prsta, klizanje i tlak ispod baze. Pasivni tlak ispred prsta nije uključen. Vaš pomoćnik može provesti iste provjere pomoću `pile_group_check` i `retaining_wall_check`.

Skupine pilota, zidovi i opcija ploče spremaju se u datoteku modela, a neuspjela provjera je u {{ui:Problemi}}.
