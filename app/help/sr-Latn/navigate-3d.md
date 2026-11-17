---
title: Kretanje po 3D prikazu
summary: Okrećite, pomerajte i zumirajte mišem, touchpad-om ili dodirnim ekranom, i kada koristiti Osnovu i Izgled umesto toga.
keywords: orbita, okretanje, pomeranje, zum, kretanje, prikaz, kamera, touchpad, dodir, osnova, izgled, uklopi, miš
from: 02c9c7b9
---

Prikaz ima tri režima, birana u traci prikaza iznad njega: {{ui:3D}}, {{ui:Osnova}} i {{ui:Izgled}}. Dugmad miša rade različite stvari u 3D nego u osnovi i izgledu, pa pročitajte obe tabele.

## U 3D

:::mouse
| Za | Uradite ovo |
|---|---|
| Okrenite oko modela | Prevucite levim dugmetom |
| Pomerite pogled | Prevucite desnim dugmetom, ili držite {{key:Shift}} i prevucite levim dugmetom |
| Zumirajte | Okrenite točkić, ili prevucite gore i dole srednjim dugmetom (točkić pritisnut) |
| Izaberite deo | Kliknite na njega (klik koji pomeri manje od nekoliko piksela) |
| Vidite ceo model | Dugme uklapanja na desnom kraju trake prikaza |
:::

:::touch
| Za | Uradite ovo |
|---|---|
| Okrenite oko modela | Prevucite jednim prstom |
| Pomerite pogled | Prevucite dvama prstima |
| Zumirajte | Štipnite dvama prstima |
| Izaberite deo | Dodirnite ga |
| Vidite ceo model | Dugme uklapanja na desnom kraju trake prikaza |
:::

Kocka prikaza u gornjem desnom uglu (ispod trake prikaza) okreće se sa modelom: kliknite na lice, ivicu ili ugao da gledate odatle, prevucite je da je okrenete, ili kliknite njeno dugme kućice da se vratite na početak. Pogledajte [Kocka prikaza](topic:view-cube).

Model se okreće oko sredine prikaza, a točkić zumira ka sredini prikaza, a ne ka pokazivaču. Da pogledate pomno jedan ugao, prvo ga pomerite u sredinu, pa zumirajte.

## U osnovi i izgledu

Ovi prikazi gledaju pravo u model i ne mogu se okretati.

:::mouse
| Za | Uradite ovo |
|---|---|
| Pomerite pogled | Prevucite levim ili desnim dugmetom |
| Zumirajte | Okrenite točkić, ili prevucite gore i dole srednjim dugmetom |
| Izaberite deo | Kliknite na njega |
:::

:::touch
| Za | Uradite ovo |
|---|---|
| Pomerite pogled | Prevucite jednim prstom |
| Zumirajte | Štipnite dvama prstima (prevlačenje dva prsta takođe pomera pogled) |
| Izaberite deo | Dodirnite ga |
:::

## Na Mac touchpad-u

:::mac
- **Zum:** prevucite gore ili dole dvama prstima, ili štipnite. Oba stižu u prikaz kao zumiranje.
- **Okretanje (3D):** pritisnite touchpad i prevucite jednim prstom. Ako koristite dodir za klik, dupli dodir i prevlačenje takođe radi kada je prevlačenje uključeno u **System Settings, Accessibility, Pointer Control, Trackpad Options**.
- **Pomeranje (3D):** držite {{key:Shift}} i prevucite. Držanje {{key:Ctrl}} ili {{key:Mod}} dok prevlačite takođe pomera pogled. Klik dvama prstima je desni klik, ali prevlačenje njime je nezgodno na touchpad-u.
- **Pomeranje (osnova i izgled):** samo prevucite.
- Magic Mouse nema srednje dugme: koristite prevlačenje sa {{key:Shift}} za pomeranje i prevlačenje po njegovoj površini za zum.
:::

Više o desnom klikanju i pomeranju bez miša: [Tasteri, miševi i touchpad-ovi](common:keys).

## Osnova i izgled olakšavaju postavljanje

U {{ui:3D}}, preseci na različitim nivoima mogu se naći jedan iznad drugog na ekranu, a klik ide na najbližu tačku. U {{ui:Osnova}} i {{ui:Izgled}} mogu se birati samo tačke nivoa ili linije mreže koju gledate.

1. Izaberite {{ui:Osnova}}, pa izaberite nivo u listi pored dugmadi. Prikaz gleda dole na taj nivo; sve što je više od 1,5 m iznad njega je odsečeno.
2. Ili izaberite {{ui:Izgled}}, pa izaberite slovnu liniju mreže ("Mreža A", "Mreža B" …). Prikaz gleda pravo u tu liniju; prikazan je samo čelik unutar 1 m od nje.

Izgledi postoje samo na slovnim linijama mreže. Da radite na liniji brojevnih mreža (okvir od A do B), koristite {{ui:3D}}, ili postavljajte kucanjem u obrascu {{ui:Dodaj prema mreži}}. Pogledajte [Postavljanje stubova, greda i dijagonala](topic:place-members#place-by-grid-without-clicking).

## Izbor

- Kliknite na deo da ga izaberete. Dobija boju isticanja, a panel {{ui:Svojstva}} ga prikazuje.
- Kliknite prazan prostor, ili pritisnite {{key:Esc}}, da poništite izbor.
- Čelik ima prednost nad betonom: klik na stub unutar providnog temelja izabere stub. Kliknite na temelj dalje od stuba, ili na jednu od njegovih šipki, da izaberete temelj.
- Klik na zavrtanj ili krajnju ploču bira njegovu vezu.
- U osnovi i izgledu, delovi koji su odsečeni ne mogu se kliknuti.
- Držite {{key:Shift}} (ili {{key:Ctrl}}, ili {{key:Mod}}) i kliknite da dodate deo izboru ili ga izvadite; {{key:Mod+A}} bira sve. Izbor prozorom (prevlačenjem okvira) još nije moguć. Šta možete sa više njih: [Kopiranje, nalepljivanje i dupliranje](topic:copy-paste).

Izbor možete vršiti i iz lista: kliknite oznaku u {{ui:Oznake delova}} levo, oznaku dela na kartici {{ui:Spisak materijala}}, ili {{ui:Izaberi}} pored reda u {{ui:Problemi}}.

## Ako prikaz izgleda pogrešno

- Izgubili ste model? Izaberite dugme uklapanja.
- Prikaz je prazan ili siv sa porukom o WebGL-u: pogledajte [Rešavanje problema](topic:troubleshooting#the-3d-view-is-missing).
- Sve radi i bez 3D prikaza osim klikanja u njemu: paneli, izveštaji i izvozi rade, a {{ui:Dodaj prema mreži}} postavlja elemente kucanjem.
