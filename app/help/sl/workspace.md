---
title: Ogled zaslona
summary: Vsaka vrstica, podokno in zavihek v DetailCraft po imenu na zaslonu in njihov namen.
keywords: zaslon, postavitev, orodna vrstica, podokna, lastnosti, vrstica stanja, poročila, vmesnik, ui, zavihki
from: 94f81073
---

DetailCraft zapolni okno brskalnika pod vrstico aplikacije. Od zgoraj navzdol: orodna vrstica, nato trije stolpci (podokno {{ui:Model}}, pogled, podokno {{ui:Lastnosti}}), nato zavihki poročil in vrstica stanja.

## Vrstica aplikacije

Tanka vrstica na samem vrhu pripada spletnemu mestu CadCraft, ne modelu. Prikazuje ime in različico aplikacije, povezavo na {{ui:O programu DetailCraft}}, {{ui:Pomoč}} (ali {{key:F1}}) za to pomoč, {{ui:Shrani za delo brez povezave}}, gumb za način zaslona in preklop {{ui:Papir}} / {{ui:Model}}.

- {{ui:Shrani za delo brez povezave}} ohrani DetailCraft, njegov 3D pogled in to pomoč v brskalniku, da se odpre brez povezave. Ko je shranjeno, prikaže {{ui:Pripravljeno za delo brez povezave}}; nato ga kliknite za {{ui:Shrani znova (pridobi najnovejšo različico)}} ali {{ui:Odstrani kopijo brez povezave}}. Glejte [Delo brez povezave](common:offline).
- {{ui:Papir}} da svetel zaslon, {{ui:Model}} temnega. 3D pogled se takoj prilagodi; v modelu se nič ne spremeni.
- Gumb za način zaslona in {{key:Ctrl+Shift+F}} preklapljata med običajnim, celozaslonskim načinom in celozaslonskim načinom s skritimi vrsticami. {{key:Ctrl+Shift+F}} uporablja tipko Control na vsakem računalniku, tudi na Macu. Ko so vrstice skrite, premaknite kazalec na zgornji rob zaslona (ali se ga dotaknite), da se prikažejo. {{key:Esc}} zapusti celozaslonski način.

## Orodna vrstica

Orodna vrstica ima pet skupin. Če se z miško ustavite na gumbu, vidite, kaj naredi, in njegovo tipko.

| Skupina | Gumbi | Kaj počnejo |
|---|---|---|
| {{ui:Datoteka}} | {{ui:Novo}}, {{ui:Odpri}}, {{ui:Uvozi IFC}}, {{ui:Shrani}}, {{ui:Vzorec}} | Začnejo model, odprejo shranjeno `.detailcraft.json` ali datoteko IFC, shranijo model ali odprejo vzorčni okvir |
| {{ui:Postavi}} | {{ui:Izberi}}, {{ui:Nosilec}}, {{ui:Steber}}, {{ui:Diagonala}}, {{ui:Plošča}}, {{ui:Temeljna stopa}}, {{ui:Stopnišče}} | Orodje, ki ga uporabi naslednji klik v pogledu |
| {{ui:Poveži}} | {{ui:Čelne plošče}}, {{ui:Podložna plošča}}, in v {{ui:Več}}: {{ui:Strižne ploščice}}, {{ui:Nadaljevanje}}, {{ui:Vozliščna plošča}}, {{ui:Podobno}} | Doda spoj izbranemu nosilcu, stebru ali diagonali ali kopira izbrani spoj na vsak podoben stik |
| {{ui:Uredi}} | {{ui:Razveljavi}}, {{ui:Uveljavi}}, {{ui:Kopiraj}}, {{ui:Prilepi}}, {{ui:Več}} | Korak nazaj in naprej po urejanjih; kopira izbor in ga prilepi. {{ui:Več}} odpre meni z {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Prilepi}}, {{ui:Prilepi na isto mesto}}, {{ui:Podvoji}}, {{ui:Izbriši}}, {{ui:Izberi vse}} in {{ui:Prekliči izbor}}, vsak s svojo tipko |
| {{ui:Izhod}} | {{ui:IFC}}, {{ui:Datoteke NC}}, {{ui:Kosovnica}}, {{ui:Delavniška risba}}, {{ui:Risbe}}, in v {{ui:Več}}: {{ui:Krivljenje}}, {{ui:Poročilo o teži po fazah}}, {{ui:Datoteka KISS za programe za izdelavo}} | Prenese izvoz ali odpre liste risb |

Gumbi in elementi menija, ki zdaj ne morejo delovati, so zatemnjeni, če se z miško ustavite nanje, pa pove zakaj. {{ui:Čelne plošče}} potrebuje izbran nosilec, {{ui:Podložna plošča}} izbran steber, {{ui:Podobno}} izbran spoj, {{ui:Delavniška risba}} model z deli, {{ui:Kopiraj}} izbran element ali temeljno stopo, {{ui:Prilepi}} pa nekaj kopiranega. Glejte [Kopiranje, lepljenje in podvajanje](topic:copy-paste).

## Podokno Model (levo)

- {{ui:Model}}: {{ui:Ime}} modela. Po njem se poimenuje vsaka datoteka, ki jo shranite ali izvozite.
- {{ui:Mreže}}: mrežne črte in njihovi razmiki ter {{ui:Uporabi mreže}}. Glejte [Nastavitev mrež in nivojev](topic:grids-and-levels).
- {{ui:Nivoji}}: ena vrstica na nivo (ime in kota v mm), {{ui:Dodaj nivo}} in {{ui:Uporabi nivoje}}.
- {{ui:Profil po meri}}: vaš lastni parametrični prerez. Zaprt je, dokler ga ne odprete.
- {{ui:Oznake delov}}: vsaka oznaka dela v modelu s profilom, dolžino in številom. Kliknite oznako, da izberete prvi del z njo.

{{ui:Mreže}}, {{ui:Nivoji}} in {{ui:Profil po meri}} se zložijo: kliknite njihove naslove.

## Pogled (sredina)

Pogled prikaže model v 3D. Nad njim ima vrstica pogleda tri gumbe in seznam:

- {{ui:3D}}: prosto se zavrtite okoli modela.
- {{ui:Tloris}}: pogled naravnost navzdol na en nivo. Ob gumbih se pojavi seznam nivojev. Vse, kar je več kot 1.5 m nad nivojem, je odrezano, da nivo jasno vidite in kliknete.
- {{ui:Pogled}}: pogled naravnost na eno črkovno mrežno črto (Mreža A, Mreža B …). Pojavi se seznam črkovnih mrež. Prikazano je samo jeklo, ki je oddaljeno največ 1 m od te črte.
- Gumb za prilagoditev na desnem koncu vrstice pogleda povečava, da se vidi ves model.

Majhne pike označujejo vsako presečišče mrež na vsakem nivoju. Ko je orodje za postavljanje vklopljeno, se pika, najbližja kazalcu, osvetli, vrstica stanja pa jo poimenuje, na primer „A/2 na nivoju 1“. Barve ločijo vrste elementov: stebri, nosilci, diagonale in plošče imajo vsak svojo barvo, vijaki in palice drugo, temeljne stope so prosojne, armatura pa je narisana kot cevi. Izvrtine so prikazane kot temni zamaški, izrezi pa so izrezani.

Kako se zavrtite, premaknete in povečate: [Premikanje po 3D pogledu](topic:navigate-3d).

Ko je model prazen, pogled prikaže kratek seznam „Začni model“. Shranjeno datoteko modela lahko tudi spustite kamor koli na pogled, da jo odprete.

## Podokno Lastnosti (desno)

Kaj to podokno prikazuje, je odvisno od tega, kaj počnete, njegov naslov pa pove, kaj je: „Model“, „Postavitev nosilca“, „Nosilec b2“, „Spoj s čelno ploščo“, „Podložna plošča“, „Temeljna stopa F1“, „Izbrano: 3“ ali „Prilepi“.

- **Nič ni izbrano:** povzetek modela (elementi, spoji, temeljne stope, deli, oznake, vijaki, teža jekla in armature, mreže, nivoji).
- **Orodje za postavljanje je vklopljeno:** možnosti za naslednji kos (profil, material, položaj, zasuk, za stebre {{ui:Do}}), povzetek izbranega profila in obrazec {{ui:Dodaj po mreži}} za postavljanje brez klikanja v pogledu.
- **Izbran element:** njegovo ime, profil, material, položaj, zasuk, koordinate obeh koncev, njegove oznake, dolžina reza in teža, izvrtine in izrezi ter gumbi za spoje, njegovo delavniško risbo in {{ui:Izbriši}}.
- **Izbran spoj:** vse nastavitve plošč, vijakov in varov, vijaki in var, ki jih naredi, njegova opozorila in {{ui:Uporabi za podobne}}.
- **Izbrana temeljna stopa:** njen položaj in velikost, spodnja mreža, začetne palice in oznake palic, ki jih uporablja.
- **Izbranih več stvari:** koliko elementov vsake vrste, spojev in temeljnih stop, njihova teža jekla ter {{ui:Kopiraj}}, {{ui:Podvoji}} in {{ui:Izbriši}}.
- **Lepljenje:** kaj je na odložišču, ter obrazci za lepljenje z vpisanim odmikom ali na presečišče mreže, ki ga izberete s seznamov.

Številna polja začnejo veljati, ko pritisnete {{key:Enter}} ali zapustite polje. Vsaka sprememba je en korak, ki ga lahko razveljavite.

## Zavihki poročil (spodaj)

- {{ui:Težave}}: vse, kar DetailCraft ni mogel zgraditi ali kar želi, da preverite, z gumbom {{ui:Izberi}} v vsaki vrstici. Zavihek v oklepaju prikazuje število.
- {{ui:Kosovnica}}: deli, sestavi ter vijaki in sidrne palice z težami in povezavo {{ui:Prenesi CSV}}. Kliknite oznako dela, da izberete ta del.
- {{ui:Armaturni izvleček}}: vsaka oznaka palice v vseh temeljnih stopah s povezavo {{ui:Prenesi CSV}}.

Z zavihkom v fokusu se s tipkama {{key:Left}} in {{key:Right}} premikate med zavihki.

## Vrstica stanja

Vrstica ob spodnjem robu ima tri dele: presečišče mrež pod kazalcem med postavljanjem, zadnje sporočilo (kaj se je pravkar zgodilo ali zakaj nekaj ni bilo sprejeto) in tekoče skupne vsote delov, vijakov, teže jekla in teže armature. Kadar se zdi, da dejanje ne naredi nič, najprej preberite sporočilo tukaj.

Naslov zavihka brskalnika se začne s piko (•), dokler ima model neshranjene spremembe.

## Na ozkem zaslonu

Pod približno 760 pikslov širine se stolpci zložijo: orodna vrstica, pogled, vrstica stanja, {{ui:Lastnosti}}, zavihki poročil, nato podokno {{ui:Model}} na koncu. Pomaknite stran, da jih dosežete. DetailCraft je oblikovan za namizni ali prenosni zaslon; telefon je primeren za ogled, ne za detajliranje.
