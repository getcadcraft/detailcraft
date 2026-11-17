---
title: Foutoplossing
summary: Wat DetailCraft se boodskappe beteken en wat om te doen, van ’n ontbrekende 3D-aansig tot verbindings wat nie gebou wil word nie.
keywords: probleem, fout, werk nie, hulp, regstel, boodskap, geweier, webgl, leeg, waarskuwing, kan nie, kwessie
from: f8c3b2b1
---

Die meeste weigerings word in die statusbalk onderaan die skerm verduidelik, of in die {{ui:Probleme}}-oortjie. Lees daardie eerste. Die boodskappe hieronder is aangehaal soos DetailCraft dit wys.

## Die 3D-aansig ontbreek

**"Hierdie blaaier kon nie 3D-grafika (WebGL) begin nie. Die model, verslae en uitvoere werk steeds."**

Die blaaier kon nie WebGL begin nie, die 3D-grafika waarmee DetailCraft teken.

1. Werk die blaaier op na die nuutste weergawe.
2. Skakel hardewareversnelling aan en herbegin die blaaier (sien hieronder).
3. Werk jou grafiekbestuurder op, of probeer ’n ander blaaier. Afstandwerkskerms en virtuele masjiene het dikwels geen WebGL nie.
4. Intussen kan jy nog werk: plaas lede met die {{ui:Voeg by rooster}}-vorm, lees die verslae, en voer uit. Net klik in die aansig benodig WebGL.

:::chromium
Om hardewareversnelling aan te skakel, maak **Instellings, Stelsel** oop en skakel **Gebruik grafiekversnelling wanneer beskikbaar** aan, en herlaai.
:::

:::firefox
Om hardewareversnelling aan te skakel, maak **Instellings, Algemeen, Werkverrigting** oop, ontmerk **Gebruik aanbevole werkverrigtinginstellings**, en merk **Gebruik hardewareversnelling wanneer beskikbaar** aan. Herbegin Firefox.
:::

:::safari
Safari het WebGL standaard aan. Werk macOS op as die aansig steeds nie begin nie, en kontroleer dat geen uitbreiding dit blokkeer nie.
:::

Meer in [Blaaiers en rekenaars](common:browsers).

## Klik in die aansig doen niks nie

- **Geen kruising naby die klik nie.** Plaasgereedskap snap net na roosterkruisings. ’n Klik weg van elke stip doen niks nie. Beweeg nader totdat die stip oplig.
- **Die gereedskap is {{ui:Kies}} en jy het op leë ruimte geklik.** Dit maak die keuse skoon.
- **Jy het gesleep.** ’n Druk en loslating meer as ’n paar pixels uitmekaar is ’n sleep: dit draai of skuif die aansig.
- **Die deel is afgesny.** In {{ui:Plan}} en {{ui:Aansig}} is staal buite die snit verborge en kan nie geklik word nie. Skakel oor na {{ui:3D}}.
- **Die kruising is op die verkeerde vlak.** In {{ui:3D}} kan kruisings op verskeie vlakke op die skerm oorvleuel; die klik neem die naaste een. Gebruik {{ui:Plan}} of {{ui:Aansig}}.

## Plaasboodskappe

| Boodskap | Wat om te doen |
|---|---|
| Daar is geen vlak bo Vlak 2 vir die kolom om te bereik nie. Voeg eers ’n vlak by. | Voeg ’n vlak by in {{ui:Vlakke}}, of klik op ’n laer vlak |
| Kies ’n ander kruising vir die ander punt. | Jy het dieselfde punt twee keer geklik |
| Die twee punte is dieselfde punt. | In {{ui:Voeg by rooster}} is die "Van" en "Tot"-keuses dieselfde |
| Voeg roosterlyne aan die linkerkant by om lede te plaas. | Die model het geen roosterlyne in een rigting nie |
| Onbekende profiel "…" | Die profiel is nie in die katalogus of die model se pasgemaakte profiele nie. Kies een uit die lys |
| Tik ’n getal. | ’n Getalveld is leeg gelaat of het teks daarin |

## Verbindings bou nie

### "Hierdie balk eindig nie op ’n kolomlyn nie."

Eindplate het die balk se einde presies op ’n vertikale kolom se lyn nodig, tussen sy onderkant en boonkant (binne 1 mm). Kontroleer die balk se {{ui:Eindpunte (x, y, z mm)}} en die kolom se posisie.

### "Hierdie balk raak ’n kolomlyf of is teen ’n hoek"

Of in {{ui:Probleme}}: "Balke wat in ’n kolomlyf aansluit, is nog nie gebou nie: draai die kolom 90° of gebruik ’n ander verbinding."

Die balk sluit aan by die kolomlyf. Kies die kolom en stel {{ui:Rotasie (°)}} op 90, probeer dan weer. Skuins verbindings word nie gebou nie.

### "Eindplate word net vir vlak balke gebou (hierdie balk is skuins)."

Albei eindpunte van die balk moet op dieselfde hoogte wees.

### "Eindplate benodig die balk regop (rotasie 0)."

Stel die balk se {{ui:Rotasie (°)}} terug na 0.

### "Eindplate benodig ’n I-profiel-balk." / "Eindplate benodig ’n I-profiel-kolom."

Slegs I-profiele (W, IPE, HEA, HEB of ’n pasgemaakte I) kry eindplate.

### "Die balk se einde is nie meer op die kolomlyn nie."

Jy het die balk of die kolom verskuif nadat die verbinding bygevoeg is. Skuif dit terug, of skrap die verbinding.

### "Verbindings sny hierdie lid tot niks terug nie."

Die verbindings aan albei eindpunte sny die lid verder terug as sy lengte, byvoorbeeld ’n baie kort balk tussen twee diep kolomme. Kontroleer die lid se eindpunte en die plaatdikte.

### "Geen ander verbindings soos hierdie een … is sonder ’n verbinding nie."

{{ui:Soortgelyk}} kopieer net na verbindings met dieselfde balkprofiel, kolomprofiel en soort verbinding (balk in ’n flens) wat nog geen verbinding het nie.

### "Albei eindpunte het alreeds verbindings." / "Hierdie kolom het alreeds ’n voetplaat."

Kies die bestaande verbinding om dit te verander, of skrap dit eers.

## Waarskuwings in die Probleme-oortjie

Waarskuwings keer nie dat ’n verbinding of fondasie gebou word nie; hulle vra jou om dit te kontroleer. Die rand- en spasieringswaarskuwings gebruik die EN 1993-1-8 Tabel 3.3-minimums (rand 1.2 × gat, spasiëring 2.2 × gat, maat 2.4 × gat). As jou projek ander reëls gebruik, is die waarskuwing dalk nie van toepassing nie; DetailCraft ontwerp nie verbindings nie.

"’n Gat is van die einde van die deel af" beteken dat ’n gat se x minder as 0 of meer as die snitlengte is. Onthou: x is vanaf die snitbegin, nadat verbindings die deel teruggesny het.

## Fondasie-veranderinge word geweier

| Boodskap | Wat om te doen |
|---|---|
| Die dekking laat geen ruimte vir stawe in hierdie fondasie nie. | Maak die fondasie groter of die dekking kleiner |
| Die fondasie is te vlak vir twee lae stawe binne die dekking. | Maak dit dieper of verminder die dekking |
| Die beginstawe pas nie binne die fondasie met 75 mm dekking nie. | Minder beginstawe, nouer spasiëring, of ’n groter fondasie |
| Staafspasiëring moet 50–1000 mm wees. | Tik ’n spasiëring in daardie reeks |
| Lengte moet 300–50000 mm wees. | Fondasiegroottes het grense: lengte en breedte 300 tot 50000, diepte 150 tot 10000 |

## Roosters en vlakke word geweier

| Boodskap | Wat om te doen |
|---|---|
| Genommerde roosters: gee een spasiëring tussen elke paar lyne (4). | Tel jou gapings: vyf lyne benodig vier spasiërings |
| Letterroosters: spasiërings moet positiewe millimeter wees. | Geen nulle, negatiewe getalle of teks nie |
| Genommerde roosters: roosteretikette moet verskil. | Twee lyne het dieselfde etiket |
| Hoogstens 60 roosterlyne in elke rigting. | Verdeel die model |
| Hou ten minste een vlak. | Jy het elke vlakry verwyder |
| Elke vlak benodig ’n naam. / Twee vlakke heet "…". | Gee elke vlak ’n ander naam |

## Oopmaak van ’n lêer misluk

| Boodskap | Oorsaak |
|---|---|
| DetailCraft maak net sy eie modelle oop (.detailcraft.json). IFC-invoer is nog nie gebou nie. | Die lêer is nie ’n `.json`-lêer nie |
| Dit is nie ’n DetailCraft-model nie (nie JSON nie). | Die lêer is beskadig of is ’n ander JSON |
| Dit is nie ’n DetailCraft-model nie. | ’n JSON-lêer van ’n ander program |
| Hierdie model is gestoor deur ’n nuwer DetailCraft (formaat 2). | Maak dit oop in die nuwer DetailCraft wat dit gestoor het |
| Daardie lêer is te groot om ’n DetailCraft-model te wees. | Oor 50 MB |

Wanneer ’n lêer met waarskuwings oopmaak soos "2 lede was nie geldig nie en is uitgelaat.", is die res van die model in orde. Stoor nie oor die oorspronklike voordat jy nagegaan het wat uitgelaat is nie.

## Uitvoere

| Boodskap | Oorsaak |
|---|---|
| Niks om nog uit te voer nie. | {{ui:IFC}} met ’n leë model |
| Geen I-profiel- of plaatdele om NC-lêers vir te skryf nie. | Net kanale, hoeke of buise in die model |
| Nie geskryf nie (tot dusver net I-profiele en plate): … | Daardie merke is nie I-profiele of plate nie; die res is geskryf |
| Geen fondasies, dus geen stawe om te rooster nie. | {{ui:Buig}} met geen fondasies nie |
| … karakter(s) buite die PDF-lettertipe is as "?" gedruk. | Die modelnaam of ’n graad het karakters wat die PDF-lettertipe nie het nie |

{{ui:Werkswinkeltekening}} is gedeaktiveer: die model het nog geen dele nie.

## Aflaaie verskyn nie

Elke stoor en uitvoer is ’n blaaieraflaai. Kontroleer jou blaaier se aflaailys. As die blaaier vra voordat etlike lêers afgelaai word, of aflaaie van hierdie webwerf blokkeer, laat dit toe. In Safari, kyk na die aflaaiknoppie in die nutsbalk.

## Sleutels doen niks nie

- Die kursor is in ’n teks- of getalveld: gereedskapsleutels en {{key:Delete}} word daar geïgnoreer sodat jy kan tik. Druk {{key:Tab}} of klik op die aansig.
- ’n Dialoog is oop: maak dit eers toe.
- Die blaaier het die sleutelbord (byvoorbeeld die adresbalk): klik binne DetailCraft.
- {{key:Ctrl+Shift+F}} gebruik Control selfs op ’n Mac.

## Vanlynprobleme

Die {{ui:Stoor vir vanlyn}}-knoppie in die programbalk wys in watter toestand die vanlynkopie is. Hoe stoor werk: [Werk vanlyn](common:offline).

| Die knoppie lees | Wat dit beteken | Wat om te doen |
|---|---|---|
| {{ui:Stoor vir vanlyn}} | Nog geen vanlynkopie in hierdie blaaier nie | Kies dit terwyl jy aanlyn is |
| Stoor 5 van 20 | Stoor is aan die gang | Wag vir {{ui:Vanlyn gereed}}; hou die oortjie oop |
| {{ui:Vanlyn gereed}} | DetailCraft, sy 3D-aansig, elke uitvoer en hierdie hulp werk sonder enige verbinding | Niks. Klik dit vir {{ui:Stoor weer (kry die nuutste weergawe)}} of {{ui:Verwyder die vanlynkopie}} |
| {{ui:Kon nie stoor nie}} | Sommige lêers is nie afgelaai nie | Kontroleer jou verbinding en klik dit om weer te probeer |
| {{ui:Vanlyn nie beskikbaar nie}} | Hierdie venster kan nie ’n vanlynkopie hou nie: privaatvensters en sommige bestuurde rekenaars blokkeer dit | Gebruik ’n normale venster, of werk aanlyn |

As jy vanlyn is en die knoppie nie {{ui:Vanlyn gereed}} lees nie, moenie herlaai of die oortjie toemaak nie: wat reeds gelaai is, werk steeds. Stoor jou model met {{key:Mod+S}} en wag tot jy weer aanlyn is.

## Ongestoorde werk

As die blaaier vra of jy die bladsy wil verlaat, het DetailCraft ongestoorde veranderinge. Kies om te bly, en druk dan {{key:Mod+S}}. DetailCraft kan ’n model nie herstel nadat die oortjie gesluit is nie.

## Nog vas

Noteer wat jy gedoen het en die presiese boodskap, en laat ons weet via die [ondersteuningsbladsy](https://getcadcraft.com/support).
