---
title: Odpravljanje težav
summary: Kaj pomenijo sporočila DetailCraft in kaj storiti, od manjkajočega 3D pogleda do povezav, ki se ne dajo zgraditi.
keywords: težava, napaka, ne deluje, pomoč, popravilo, sporočilo, zavrnjeno, webgl, prazno, opozorilo, ne more, zadeva
from: f8c3b2b1
---

Večina zavrnitev je pojasnjena v statusni vrstici na dnu zaslona ali na zavihku {{ui:Težave}}. Najprej preberite to. Spodnja sporočila so navedena tako, kot jih prikaže DetailCraft.

## Manjka 3D pogled

**"Ta brskalnik ni mogel zagnati 3D grafike (WebGL). Model, poročila in izvozi še vedno delujejo."**

Brskalnik ni mogel zagnati WebGL, 3D grafike, ki jo DetailCraft riše.

1. Posodobite brskalnik na najnovejšo različico.
2. Vklopite strojno pospeševanje in ponovno zaženite brskalnik (glejte spodaj).
3. Posodobite grafični gonilnik ali preizkusite drug brskalnik. Oddaljena namizja in virtualni stroji pogosto nimajo WebGL.
4. Medtem lahko še vedno delate: elemente postavljate z obrazcem {{ui:Dodaj po mreži}}, berete poročila in izvažate. WebGL potrebuje samo klik v pogledu.

:::chromium
Za vklop strojnega pospeševanja odprite **Nastavitve, Sistem** in vklopite **Uporabi strojno pospeševanje, če je na voljo**, nato ponovno zaženite brskalnik.
:::

:::firefox
Za vklop strojnega pospeševanja odprite **Nastavitve, Splošno, Zmogljivost**, odznačite **Uporabi priporočene nastavitve zmogljivosti** in označite **Uporabi strojno pospeševanje, če je na voljo**. Ponovno zaženite Firefox.
:::

:::safari
Safari ima WebGL privzeto vklopljen. Če se pogled še vedno ne zažene, posodobite macOS in preverite, ali kakšna razširitev tega ne blokira.
:::

Več v [Brskalniki in računalniki](common:browsers).

## Klik v pogledu ne naredi ničesar

- **Ni presečišča blizu klika.** Orodja za postavljanje se pripnejo samo na presečišča mreže. Klik stran od vseh pik nič ne naredi. Približajte se, dokler pika ne zasveti.
- **Orodje je {{ui:Izberi}}, kliknili ste prazen prostor.** To izbor počisti.
- **Povlekli ste.** Pritisk in sprostitev, oddaljena za nekaj slikovnih točk, je vlečenje: zavrti ali premakne pogled.
- **Del je odrezan.** V {{ui:Tloris}} in {{ui:Pogled}} je jeklo zunaj reza skrito in ga ni mogoče klikniti. Preklopite na {{ui:3D}}.
- **Presečišče je na napačni etaži.** V {{ui:3D}} se lahko presečišča več etaž na zaslonu prekrivajo; klik vzame najbližje. Uporabite {{ui:Tloris}} ali {{ui:Pogled}}.

## Sporočila pri postavljanju

| Sporočilo | Kaj storiti |
|---|---|
| "Nad Level 2 ni etaže, do katere bi steber segel. Najprej dodajte etažo." | Dodajte etažo v {{ui:Nivoji}} ali kliknite nižjo etažo |
| "Za drugi konec izberite drugo presečišče." | Dvakrat ste kliknili isto točko |
| "Konca sta ista točka." | V {{ui:Dodaj po mreži}} sta izbrani točki "Od" in "Do" enaki |
| "Za postavitev elementov dodajte mrežne črte na levi strani." | Model nima mrežnih črt v eni smeri |
| "Neznan profil "…"" | Profila ni v katalogu ali med profili modela. Izberite enega s seznama |
| "Vnesite število." | Številsko polje je prazno ali vsebuje besedilo |

## Povezav ni mogoče zgraditi

### "This beam does not end on a column line."

Končne plošče potrebujejo, da je konec nosilca natančno na navpični osi stebra, med njegovim spodnjim in zgornjim robom (v 1 mm). Preverite {{ui:Konca (x, y, z mm)}} nosilca in položaj stebra.

### "This beam meets a column web or at an angle"

Ali v {{ui:Težave}}: "Nosilci, ki se priključujejo na steblo stebra, še niso narejeni: zasukajte steber za 90° ali uporabite drugo povezavo."

Nosilec se priključuje na steblo stebra. Izberite steber in nastavite {{ui:Zasuk (°)}} na 90, nato poskusite znova. Poševni stiki še niso narejeni.

### "End plates are built for level beams only (this beam slopes)."

Oba konca nosilca morata biti na isti višini.

### "End plates need the beam upright (rotation 0)."

Nastavite {{ui:Zasuk (°)}} nosilca nazaj na 0.

### "End plates need an I-shape beam." / "End plates need an I-shape column."

Končne plošče dobijo samo I-profile (W, IPE, HEA, HEB ali I po meri).

### "The beam end is not on the column line any more."

Premaknili ste nosilec ali steber po dodani povezavi. Premaknite ga nazaj ali izbrišite povezavo.

### "Connections cut this member to nothing."

Povezavi na obeh koncih odrežeta element bolj, kot je dolg, na primer zelo kratek nosilec med dvema visokima stebroma. Preverite konca elementa in debelino plošče.

### "No other joints like this one … are without a connection."

{{ui:Podobno}} kopira samo na stike z istim profilom nosilca, profilom stebra in vrsto povezave (nosilec v prirobnico), ki še nimajo povezave.

### "Both ends already have connections." / "This column already has a base plate."

Izberite obstoječo povezavo, da jo spremenite, ali jo najprej izbrišite.

## Opozorila na zavihku Težave

Opozorila ne ustavijo gradnje povezave ali temelja; prosijo vas, naj jih preverite. Opozorila o robovih in razmikih uporabljajo najmanjše vrednosti EN 1993-1-8, tabela 3.3 (rob 1.2 × luknja, korak 2.2 × luknja, razmik 2.4 × luknja). Če vaš projekt uporablja druga pravila, opozorilo morda ne velja; DetailCraft povezav ne projektira.

"luknja je zunaj konca dela" pomeni, da je x luknje manjši od 0 ali večji od dolžine reza. Ne pozabite, da je x merjen od začetka reza, potem ko povezave kos skrajšajo.

## Spremembe temeljev so zavrnjene

| Sporočilo | Kaj storiti |
|---|---|
| "Zaščitni sloj ne pusti prostora za palice v temelju." | Naredite temelj večji ali zaščitni sloj manjši |
| "Temelj je pretanek za dva sloja palic znotraj zaščitnega sloja." | Naredite ga globlje ali zmanjšajte zaščitni sloj |
| "Začetne palice ne gredo v temelj z zaščitnim slojem 75 mm." | Manj začetnih palic, gostejši razmik ali večji temelj |
| "Razmik palic mora biti 50–1000 mm." | Vpišite razmik v tem območju |
| "Dolžina mora biti 300–50000 mm." | Velikosti temeljev imajo omejitve: dolžina in širina 300 do 50000, globina 150 do 10000 |

## Mreže in etaže so zavrnjene

| Sporočilo | Kaj storiti |
|---|---|
| "Oštevilčene mreže: podajte en razmik med vsakim parom črt (4)." | Preštejte vrzeli: pet črt pomeni štiri razmike |
| "Črkovne mreže: razmiki morajo biti pozitivni milimetri." | Brez ničel, negativnih vrednosti ali besedila |
| "Oštevilčene mreže: oznake mrež morajo biti različne." | Dve črti imata isto oznako |
| "Največ 60 mrežnih črt v vsako smer." | Razdelite model |
| "Ohranite vsaj eno etažo." | Izbrisali ste vse vrstice etaž |
| "Vsaka etaža mora imeti ime. / Dve etaži se imenujeta "…"." | Dajte vsaki etaži drugo ime |

## Odpiranje datoteke ne uspe

| Sporočilo | Vzrok |
|---|---|
| "DetailCraft odpira lastne modele (.detailcraft.json). Uvoz IFC še ni narejen." | Datoteka ni datoteka `.json` |
| "To ni model DetailCraft (ni JSON)." | Datoteka je poškodovana ali gre za drug JSON |
| "To ni model DetailCraft." | JSON datoteka iz drugega programa |
| "Ta model je shranil novejši DetailCraft (format 2)." | Odprite ga v novejšem DetailCraft, ki ga je shranil |
| "Ta datoteka je prevelika za model DetailCraft." | Več kot 50 MB |

Ko se datoteka odpre z opozorili, kot je "2 elementa nista veljavna in sta izpuščena.", je preostanek modela v redu. Dokler ne preverite, kaj je bilo izpuščeno, ne shranjujte čez izvirnik.

## Izvozi

| Sporočilo | Vzrok |
|---|---|
| "Še ni ničesar za izvoz." | {{ui:IFC}} s praznim modelom |
| "Ni I-profilnih ali ploščatih delov, za katere bi zapisali datoteke NC." | V modelu so samo kanali, koti ali cevi |
| "Ni zapisano (doslej samo I-profili in plošče): …" | Te oznake niso I-profili ali plošče; ostali so zapisani |
| "Ni temeljev, zato ni palic za razpored." | {{ui:Krivljenje}} brez temeljev |
| "… znak(ov) zunaj pisave PDF je natisnjenih kot "?"." | Ime modela ali kakovost vsebuje znake, ki jih pisava PDF nima |

{{ui:Delavniška risba}} je zatemnjena: model še nima delov.

## Prenosi se ne pojavijo

Vsako shranjevanje in izvoz je prenos brskalnika. Preverite seznam prenosov v brskalniku. Če brskalnik pred prenosom več datotek vpraša ali blokira prenose s te strani, jih dovolite. V Safariju preverite gumb za prenose na orodni vrstici.

## Tipke ne delujejo

- Kazalec je v besedilnem ali številskem polju: tipke orodij in {{key:Delete}} se tam prezrejo, da lahko pišete. Pritisnite {{key:Tab}} ali kliknite v pogled.
- Pogovorno okno je odprto: najprej ga zaprite.
- Brskalnik ima tipkovnico (na primer naslovno vrstico): kliknite v DetailCraft.
- {{key:Ctrl+Shift+F}} na Macu vedno uporablja Control.

## Težave brez povezave

Gumb {{ui:Shrani za delo brez povezave}} v vrstici aplikacije pokaže, v kakšnem stanju je kopija za delo brez povezave. Kako shranjevanje deluje: [Delo brez povezave](common:offline).

| Gumb kaže | Pomen | Kaj storiti |
|---|---|---|
| {{ui:Shrani za delo brez povezave}} | V tem brskalniku še ni kopije za delo brez povezave | Izberite, ko ste na spletu |
| Shranjevanje 5 od 20 | Shranjevanje poteka | Počakajte na {{ui:Pripravljeno za delo brez povezave}}; zavihek pustite odprt |
| {{ui:Pripravljeno za delo brez povezave}} | DetailCraft, njegov 3D pogled, vsi izvozi in ta pomoč delujejo brez povezave | Nič. Kliknite za {{ui:Shrani znova (pridobi najnovejšo različico)}} ali {{ui:Odstrani kopijo brez povezave}} |
| {{ui:Shranjevanje ni uspelo}} | Nekatere datoteke se niso prenesle | Preverite povezavo in kliknite, da poskusite znova |
| {{ui:Delo brez povezave ni na voljo}} | To okno ne more hraniti kopije za delo brez povezave: zasebna okna in nekateri upravljani računalniki to preprečijo | Uporabite običajno okno ali delajte na spletu |

Če ste brez povezave in gumb ne kaže {{ui:Pripravljeno za delo brez povezave}}, ne osvežujte in ne zapirajte zavihka: kar je naloženo, še naprej deluje. Model shranite s {{key:Mod+S}} in počakajte, da ste spet na spletu.

## Neshranjene spremembe

Če brskalnik vpraša, ali želite zapustiti stran, ima DetailCraft neshranjene spremembe. Izberite ostanek na strani in pritisnite {{key:Mod+S}}. DetailCraft modela ne more obnoviti, potem ko se zavihek zapre.

## Še vedno ne veste, kaj storiti

Zapišite, kaj ste naredili, in točno sporočilo ter nam sporočite prek [strani za podporo](https://getcadcraft.com/support).
