---
title: Gibanje po 3D pogledu
summary: Zasukajte, pomaknite in povečajte z miško, sledilno ploščico ali zaslonom na dotik ter kdaj uporabiti tloris in pogled namesto tega.
keywords: orbita, zasuk, pomik, povečava, krmarjenje, pogled, kamera, sledilna ploščica, dotik, tloris, pogled, prilagodi, miška
from: 02c9c7b9
---

Pogled ima tri načine, izbrane v vrstici pogleda nad njim: {{ui:3D}}, {{ui:Plan}} (Tloris) in {{ui:Elevation}} (Pogled). Miškini gumbi delujejo v 3D drugače kot v tlorisu in pogledu, zato preberite obe tabeli.

## V 3D

:::mouse
| Za | Naredite to |
|---|---|
| Zasuk okoli modela | Vlecite z levim gumbom |
| Pomik | Vlecite z desnim gumbom ali pridržite {{key:Shift}} in vlecite z levim gumbom |
| Povečava | Zavrtite kolešček ali vlecite gor in dol s srednjim gumbom (kolešček pritisnjen) |
| Izberite del | Kliknite nanj (klik, ki se premakne za nekaj slikovnih pik) |
| Poglejte ves model | Gumb prilagodi na desnem koncu vrstice pogleda |
:::

:::touch
| Za | Naredite to |
|---|---|
| Zasuk okoli modela | Vlecite z enim prstom |
| Pomik | Vlecite z dvema prstoma |
| Povečava | Stisnite z dvema prstoma |
| Izberite del | Tapnite ga |
| Poglejte ves model | Gumb prilagodi na desnem koncu vrstice pogleda |
:::

Kocka pogleda zgoraj desno (pod vrstico pogleda) se vrti z modelom: kliknite ploskev, rob ali vogal, da pogledate od tam, jo povlecite za vrtenje ali kliknite njen gumb hiše, da se vrnete na začetek. Glejte [Kocka pogleda](topic:view-cube).

Model se vrti okoli sredine pogleda, kolešček pa povečuje proti sredini pogleda, ne proti kazalcu. Za natančen pogled na en kot ga najprej pomaknite na sredino, nato povečajte.

## V tlorisu in pogledu

Ta pogleda gledata naravnost v model in ju ni mogoče zasukati.

:::mouse
| Za | Naredite to |
|---|---|
| Pomik | Vlecite z levim ali desnim gumbom |
| Povečava | Zavrtite kolešček ali vlecite gor in dol s srednjim gumbom |
| Izberite del | Kliknite nanj |
:::

:::touch
| Za | Naredite to |
|---|---|
| Pomik | Vlecite z enim prstom |
| Povečava | Stisnite z dvema prstoma (vlečenje z dvema prstoma prav tako pomika) |
| Izberite del | Tapnite ga |
:::

## Na sledilni ploščici Mac

:::mac
- **Povečava:** potegnite z dvema prstoma gor ali dol, ali stisnite. Oboje pride do pogleda kot povečava.
- **Zasuk (3D):** pritisnite sledilno ploščico in vlecite z enim prstom. Če uporabljate tapnjenje za klik, deluje tudi dvojni tap in vlečenje, če je vlečenje vklopljeno v **Sistemske nastavitve, Dostopnost, Nadzor kazalca, Možnosti sledilne ploščice**.
- **Pomik (3D):** pridržite {{key:Shift}} in vlecite. Pridržanje {{key:Ctrl}} ali {{key:Mod}} med vlečenjem prav tako pomika. Dvoprstni klik je desni klik, vendar je vlečenje z njim na sledilni ploščici nerodno.
- **Pomik (tloris in pogled):** preprosto vlecite.
- Magic Mouse nima srednjega gumba: za pomik uporabite vlečenje s {{key:Shift}}, za povečavo pa potegnite po njegovi površini.
:::

Več o desnem kliku in pomiku brez miške: [Tipke, miške in sledilne ploščice](common:keys).

## Tloris in pogled omogočata lažje postavljanje

V {{ui:3D}} se presečišča na različnih nivojih lahko prekrivajo na zaslonu, klik pa gre na najbližjo piko. V {{ui:Plan}} (Tloris) in {{ui:Elevation}} (Pogled) so izbirne le pike nivoja ali osi mreže, ki jo gledate.

1. Izberite {{ui:Plan}} (Tloris), nato izberite nivo v seznamu ob gumbih. Pogled gleda navzdol na ta nivo; vse, kar je več kot 1.5 m nad njim, je odrezano.
2. Ali izberite {{ui:Elevation}} (Pogled), nato črto mreže z črko („Mreža A“, „Mreža B“ …). Pogled gleda naravnost v to črto; prikazano je le jeklo, ki je znotraj 1 m od nje.

Pogledi so le na osi mreže z črkami. Za delo na črti številčenih mrež (okvir od A do B) uporabite {{ui:3D}} ali postavljajte z vnosom v obrazec {{ui:Add by grid}} (Dodaj po mreži). Glejte [Postavite stebre, nosilce in diagonale](topic:place-members#place-by-grid-without-clicking).

## Izbiranje

- Kliknite del, da ga izberete. Dobi barvo poudarka, podokno {{ui:Properties}} (Lastnosti) pa ga prikaže.
- Kliknite prazen prostor ali pritisnite {{key:Esc}}, da počistite izbor.
- Jeklo prevlada nad betonom: klik na steber znotraj prosojnega temelja izbere steber. Kliknite temelj stran od stebra ali eno od njegovih palic, da izberete temelj.
- Klik na vijak ali čelno ploščo izbere njegovo povezavo.
- V tlorisu in pogledu odrezanih delov ni mogoče klikniti.
- Pridržite {{key:Shift}} (ali {{key:Ctrl}} ali {{key:Mod}}) in kliknite, da dodate del izboru ali ga odstranite; {{key:Mod+A}} izbere vse. Izbirnega okna (vlečenja okvirja) še ni. Kaj lahko počnete z več izbranimi: [Kopiraj, prilepi in podvoji](topic:copy-paste).

Izbirate lahko tudi iz seznamov: kliknite oznako v {{ui:Part marks}} (Oznake delov) na levi, oznako dela v zavihku {{ui:Bill of materials}} (Kosovnica) ali {{ui:Select}} (Izberi) poleg vrstice v {{ui:Problems}} (Težave).

## Če pogled izgleda narobe

- Ste izgubili model? Izberite gumb prilagodi.
- Pogled je prazen ali siv s sporočilom o WebGL: glejte [Odpravljanje težav](topic:troubleshooting#the-3d-view-is-missing).
- Vse deluje brez 3D pogleda, razen klika vanj: podokna, poročila in izvozi delujejo, {{ui:Add by grid}} (Dodaj po mreži) pa postavlja elemente z vnosom.
