---
title: Kretanje po 3D pogledu
summary: Okrećite, pomjerajte i zumirajte mišem, trackpadom ili ekranom osjetljivim na dodir, i kada koristiti Osnovu i Izgled umjesto toga.
keywords: orbita, rotacija, pomjeranje, zumiranje, kretanje, pogled, kamera, trackpad, dodir, osnova, izgled, uklopi, miš
from: 02c9c7b9
---

Pogled ima tri režima, biraju se u traci pogleda iznad: {{ui:3D}}, {{ui:Osnova}} i {{ui:Izgled}}. Dugmad miša rade različite stvari u 3D nego u Osnovi i Izgledu, pa pročitajte obje tabele.

## U 3D

:::mouse
| Za | Uradite ovo |
|---|---|
| Okrenite oko modela | Prevucite lijevim dugmetom |
| Pomjerite pogled | Prevucite desnim dugmetom, ili držite {{key:Shift}} i prevucite lijevim dugmetom |
| Zumirajte | Okrenite točkić, ili prevucite gore i dolje srednjim dugmetom (točkić pritisnut) |
| Odaberite element | Kliknite ga (klik koji pomjeri miš manje od nekoliko piksela) |
| Vidite cijeli model | Dugme uklapanja na desnom kraju trake pogleda |
:::

:::touch
| Za | Uradite ovo |
|---|---|
| Okrenite oko modela | Prevucite jednim prstom |
| Pomjerite pogled | Prevucite dva prsta |
| Zumirajte | Štipnite dva prsta |
| Odaberite element | Dodirnite ga |
| Vidite cijeli model | Dugme uklapanja na desnom kraju trake pogleda |
:::

Kocka pogleda u gornjem desnom uglu (ispod trake pogleda) se okreće s modelom: kliknite lice, ivicu ili ugao da pogledate odatle, prevucite je da je okrenete, ili kliknite njeno dugme kućice da se vratite na početak. Pogledajte [Kocka pogleda](topic:view-cube).

Model se okreće oko sredine pogleda, a točkić zumira prema sredini pogleda, ne prema pokazivaču. Da pažljivo pogledate jedan ugao, prvo ga pomjerite na sredinu, pa zumirajte.

## U Osnovi i Izgledu

Ovi pogledi gledaju pravo u model i ne mogu se okretati.

:::mouse
| Za | Uradite ovo |
|---|---|
| Pomjerite pogled | Prevucite lijevim ili desnim dugmetom |
| Zumirajte | Okrenite točkić, ili prevucite gore i dolje srednjim dugmetom |
| Odaberite element | Kliknite ga |
:::

:::touch
| Za | Uradite ovo |
|---|---|
| Pomjerite pogled | Prevucite jednim prstom |
| Zumirajte | Štipnite dva prsta (prevlačenje dva prsta također pomjera) |
| Odaberite element | Dodirnite ga |
:::

## Na Mac trackpadu

:::mac
- **Zumiranje:** prevucite gore ili dolje dvama prstima, ili štipnite. Oba stižu do pogleda kao zumiranje.
- **Okretanje (3D):** pritisnite trackpad i prevucite jednim prstom. Ako koristite dodir za klik, dupli dodir i prevlačenje također rade kada je prevlačenje uključeno u **Postavke sistema, Pristupačnost, Kontrola pokazivača, Opcije trackpada**.
- **Pomjeranje (3D):** držite {{key:Shift}} i prevucite. Držanje {{key:Ctrl}} ili {{key:Mod}} dok prevlačite također pomjera. Klik dvama prstima je desni klik, ali prevlačenje tako je nezgodno na trackpadu.
- **Pomjeranje (Osnova i Izgled):** samo prevucite.
- Magic Mouse nema srednje dugme: koristite prevlačenje uz {{key:Shift}} za pomjeranje i pomak po površini za zumiranje.
:::

Više o desnom kliku i pomjeranju bez miša: [Tipke, miševi i trackpadovi](common:keys).

## Osnova i Izgled olakšavaju postavljanje

U {{ui:3D}}, tačke na različitim nivoima mogu biti jedna preko druge na ekranu, a klik ide na najbližu tačku. U {{ui:Osnova}} i {{ui:Izgled}} mogu se odabrati samo tačke nivoa ili linije mreže koju gledate.

1. Izaberite {{ui:Osnova}}, pa izaberite nivo s liste pored dugmadi. Pogled gleda dolje na taj nivo; sve iznad 1.5 m iznad njega je odsječeno.
2. Ili izaberite {{ui:Izgled}}, pa izaberite slovnu liniju mreže ("Mreža A", "Mreža B" …). Pogled gleda pravo u tu liniju; prikazuje se samo čelik unutar 1 m od nje.

Izgledi su samo na slovnim linijama mreže. Za rad na liniji brojčanih mreža (okvir od A do B) koristite {{ui:3D}}, ili postavljajte kucanjem u obrascu {{ui:Dodaj po mreži}}. Pogledajte [Postavljanje stubova, greda i dijagonala](topic:place-members#place-by-grid-without-clicking).

## Odabir

- Kliknite element da ga odaberete. Dobija boju isticanja, a panel {{ui:Svojstva}} ga prikazuje.
- Kliknite prazan prostor, ili pritisnite {{key:Esc}}, da poništite odabir.
- Čelik pobjeđuje beton: klik na stub unutar providnog temelja odabire stub. Kliknite temelj daleko od stuba, ili na jednu od njegovih šipki, da odaberete temelj.
- Klik na vijak ili krajnji lim odabire njegovu vezu.
- U Osnovi i Izgledu, dijelovi koji su odsječeni ne mogu se kliknuti.
- Držite {{key:Shift}} (ili {{key:Ctrl}}, ili {{key:Mod}}) i kliknite da dodate dio u odabir ili ga uklonite; {{key:Mod+A}} odabire sve. Još nema odabira prozorom (prevlačenje okvira). Šta možete raditi s više njih: [Kopiranje, lijepljenje i dupliranje](topic:copy-paste).

Možete birati i sa spiska: kliknite oznaku u {{ui:Oznake dijelova}} lijevo, oznaku dijela u kartici {{ui:Spisak materijala}}, ili {{ui:Odaberi}} pored reda u {{ui:Problemi}}.

## Ako pogled izgleda pogrešno

- Izgubili ste model? Izaberite dugme uklapanja.
- Pogled je prazan ili siv s porukom o WebGL-u: pogledajte [Rješavanje problema](topic:troubleshooting#the-3d-view-is-missing).
- Sve i dalje radi bez 3D pogleda osim klika u njemu: paneli, izvještaji i izvozi rade, a {{ui:Dodaj po mreži}} postavlja elemente kucanjem.
