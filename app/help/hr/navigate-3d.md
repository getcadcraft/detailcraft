---
title: Kretanje po 3D prikazu
summary: Okrećite, pomičite i zumirajte mišem, trackpadom ili zaslonom osjetljivim na dodir te kada koristiti tlocrt i pročelje.
keywords: kruženje, rotiranje, pomicanje, zumiranje, navigacija, prikaz, kamera, trackpad, dodir, tlocrt, pročelje, prilagodi, miš
from: 02c9c7b9
---

Prikaz ima tri načina, birana u traci prikaza iznad njega: {{ui:3D}}, {{ui:Tlocrt}} i {{ui:Pročelje}}. Gumbi miša rade različite stvari u 3D-u nego u tlocrtu i pročelju, pa pročitajte obje tablice.

## U 3D-u

:::mouse
| Za | Učinite ovo |
|---|---|
| Okrenuti model oko sebe | Povucite lijevim gumbom |
| Pomaknuti prikaz | Povucite desnim gumbom ili držite {{key:Shift}} i povucite lijevim gumbom |
| Zumirati | Okrenite kotačić ili povucite gore i dolje srednjim gumbom (kotačić pritisnut) |
| Odabrati dio | Kliknite ga (klik koji pomakne miš manje od nekoliko piksela) |
| Vidjeti cijeli model | Gumb prilagodbe na desnom kraju trake prikaza |
:::

:::touch
| Za | Učinite ovo |
|---|---|
| Okrenuti model oko sebe | Povucite jednim prstom |
| Pomaknuti prikaz | Povucite dvama prstima |
| Zumirati | Stisnite dvama prstima |
| Odabrati dio | Dodirnite ga |
| Vidjeti cijeli model | Gumb prilagodbe na desnom kraju trake prikaza |
:::

ViewCube u gornjem desnom kutu (ispod trake prikaza) okreće se s modelom: kliknite lice, rub ili vrh da gledate odande, povucite ga da okrenete ili kliknite njegov gumb kućice da se vratite na početak. Pogledajte [ViewCube](topic:view-cube).

Model se okreće oko sredine prikaza, a kotačić zumira prema sredini prikaza, a ne prema pokazivaču. Da biste iz bliza pogledali jedan kut, prvo ga pomaknite u sredinu, pa zumirajte.

## U tlocrtu i pročelju

Ti prikazi gledaju izravno u model i ne mogu se okretati.

:::mouse
| Za | Učinite ovo |
|---|---|
| Pomaknuti prikaz | Povucite lijevim ili desnim gumbom |
| Zumirati | Okrenite kotačić ili povucite gore i dolje srednjim gumbom |
| Odabrati dio | Kliknite ga |
:::

:::touch
| Za | Učinite ovo |
|---|---|
| Pomaknuti prikaz | Povucite jednim prstom |
| Zumirati | Stisnite dvama prstima (povlačenje dvama prstima također pomiče) |
| Odabrati dio | Dodirnite ga |
:::

## Na Mac trackpadu

:::mac
- **Zumiranje:** povucite dva prsta gore ili dolje, ili stisnite. Oba dolaze do prikaza kao zumiranje.
- **Okretanje (3D):** pritisnite trackpad i povucite jednim prstom. Ako koristite dodir za klik, dvostruki dodir i povlačenje također rade kad je povlačenje uključeno u **Postavke sustava, Pristupačnost, Upravljanje pokazivačem, Opcije trackpada**.
- **Pomicanje (3D):** držite {{key:Shift}} i povucite. Držanje {{key:Ctrl}} ili {{key:Mod}} dok povlačite također pomiče. Klik dvama prstima je desni klik, ali povlačenje njime je nespretno na trackpadu.
- **Pomicanje (tlocrt i pročelje):** jednostavno povucite.
- Magic Mouse nema srednji gumb: za pomicanje koristite povlačenje uz {{key:Shift}}, a za zumiranje prijelaz prstom po njegovoj površini.
:::

Više o desnom klikom i pomicanju bez miša: [Tipke, miševi i trackpadovi](common:keys).

## Tlocrt i pročelje olakšavaju postavljanje

U {{ui:3D}}, presjecišta na različitim razinama mogu se nalaziti jedno iznad drugog na zaslonu, a klik ide na najbližu točku. U {{ui:Tlocrt}} i {{ui:Pročelje}} mogu se odabrati samo točke razine ili linije mreže koju gledate.

1. Odaberite {{ui:Tlocrt}}, zatim odaberite razinu na popisu pokraj gumba. Prikaz gleda dolje na tu razinu; sve više od 1.5 m iznad nje je odrezano.
2. Ili odaberite {{ui:Pročelje}}, zatim liniju mreže označenu slovom ("Mreža A", "Mreža B" …). Prikaz gleda izravno u tu liniju; prikazan je samo čelik unutar 1 m od nje.

Pročelja postoje samo na linijama mreže označenim slovima. Za rad na liniji brojčanih mreža (okvir od A do B) koristite {{ui:3D}} ili postavljajte upisivanjem u obrazac {{ui:Dodaj po mreži}}. Pogledajte [Postavljanje stupova, greda i spregova](topic:place-members#place-by-grid-without-clicking).

## Odabir

- Kliknite dio da ga odaberete. Dobiva boju isticanja, a ploča {{ui:Svojstva}} ga prikazuje.
- Kliknite prazan prostor ili pritisnite {{key:Esc}} za poništavanje odabira.
- Čelik ima prednost nad betonom: klik na stup unutar prozirnog temelja odabire stup. Kliknite temelj podalje od stupa ili na jednu od njegovih šipki da odaberete temelj.
- Klik na vijak ili čeonu ploču odabire njegov spoj.
- U tlocrtu i pročelju dijelovi koji su odrezani ne mogu se kliknuti.
- Držite {{key:Shift}} (ili {{key:Ctrl}}, ili {{key:Mod}}) i kliknite da dodate dio odabiru ili ga uklonite; {{key:Mod+A}} odabire sve. Još nema odabira prozorom (povlačenjem okvira). Što možete s više odabranih: [Kopiraj, zalijepi i dupliciraj](topic:copy-paste).

Također možete odabrati s popisa: kliknite oznaku u {{ui:Oznake pozicija}} lijevo, oznaku pozicije na kartici {{ui:Sastavnica}}, ili {{ui:Odaberi}} pokraj retka u {{ui:Problemi}}.

## Ako prikaz izgleda pogrešno

- Izgubili ste model? Odaberite gumb prilagodbe.
- Prikaz je prazan ili siv s porukom o WebGL-u: pogledajte [Rješavanje problema](topic:troubleshooting#the-3d-view-is-missing).
- Sve radi i bez 3D prikaza osim klika u njemu: ploče, izvješća i izvozi rade, a {{ui:Dodaj po mreži}} postavlja štapove upisivanjem.
