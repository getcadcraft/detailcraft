---
title: Meniji, tipke in miška
summary: Izberite slog menijev, ki ustreza vašemu načinu dela, dodelite poljubnemu ukazu svojo tipko, premaknite ukaze med zavihki traku in določite, kaj počneta kolešček in gumbi miške.
keywords: slog menijev, meniji, trak, orodna vrstica, ukazna vrstica, bližnjice, bližnjične tipke, tipke, prilagodi, preslikaj, ponovno dodeli, miška, kolešček, obrni, smer povečave, srednji gumb, desni gumb, pomik, vrtenje, izvoz, uvoz, preklop, znan, klasično risanje, jekleni trak
from: 4132c6e5
---

Ukazi DetailCraft so enaki, ne glede na pot, po kateri do njih pridete. **Slog menijev** določa le, kje so na zaslonu, kako se imenujejo in katere tipke jih sprožijo. Izberete ga v {{ui:Settings}} (Nastavitve) ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menus, keys and mouse}} (Meniji, tipke in miška); sprememba je takojšnja, ta brskalnik pa si jo zapomni.

## Trije slogi

| Slog | Kaj dobite |
|---|---|
| {{ui:DetailCraft}} | Lastna orodna vrstica DetailCraft (Datoteka, Postavi, Poveži, Uredi, Izhod) in njene enočrkovne tipke: {{key:V}} izberi, {{key:B}} nosilec, {{key:C}} steber, {{key:R}} diagonala, {{key:P}} plošča, {{key:F}} temeljna stopa, {{key:S}} stopnišče. Začetni slog. |
| {{ui:Drafting classic}} | Za ljudi, ki tipkajo ukaze: majhen trak ({{ui:Home}} (Domov), {{ui:View}} (Pogled), {{ui:Output}} (Izhod)) in ukazna vrstica. Vtipkajte BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (razveljavi), ZOOM, PLAN, 3D, DRAWINGS, NC ali HELP in pritisnite {{key:Enter}}; {{key:Enter}} na praznem ponovi zadnji ukaz, {{key:Esc}} ga počisti. Začnite tipkati kjerkoli in črke gredo v ukazno vrstico. Srednji gumb premika pogled; v 3D {{key:Shift}} in srednji gumb vrtita pogled. |
| {{ui:Steel ribbon}} (Jekleni trak) | Zavihki, kot jih urejajo programi za detajliranje jekla: {{ui:Modeling}} (Modeliranje) (elementi, beton, stopnišča), {{ui:Detailing}} (Detajliranje) (povezave), {{ui:Edit}} (Uredi), {{ui:Drawings}} (Risbe) (risbe in poročila), {{ui:Fabrication}} (Izdelava) (datoteke NC, IFC) in {{ui:View}} (Pogled), z menijem {{ui:File}} (Datoteka) in hitrimi gumbi na desni. Enočrkovne tipke ostanejo. Srednji gumb premika pogled; v 3D levi gumb vrti model. |

Vsak slog ohrani {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} in {{key:Mod+A}}. Trakova prav tako vsebujeta {{ui:3D}}, {{ui:Plan}} (Tloris), {{ui:Elevation}} (Pogled) in {{ui:Fit}} (Prilagodi) iz vrstice pogleda.

:::tip
Tipka, ki pripada lastni postavitvi DetailCraft, a ji je vaš slog dodelil drug ukaz, nič ne naredi, statusna vrstica pa pove, kam je njen ukaz šel („V Mojem jeklenem traku je Steber na Ctrl+Alt+C“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} in puščične tipke vedno ohranijo svoj pomen, medtem ko je del na pol postavljen ali kopija sledi kazalcu, črke pripadajo DetailCraft.
:::

## Naredite po svoje

1. Izberite slog, ki je najbližje tistemu, kar želite, nato kliknite {{ui:Customize…}} (Prilagodi…).
2. Na {{ui:Keys and menus}} (Tipke in meniji) poiščite ukaz (iskalno polje pomaga). Kliknite {{ui:Add a key}} (Dodaj tipko) in pritisnite tipko ali dve tipki zapored za dvočrkovno tipko. Kliknite tipko, da jo odstranite.
3. Pri traku {{ui:Where it sits}} (Kje je) premakne ukaz na drug zavihek in panel, v meni {{ui:File}} (Datoteka) ali na {{ui:Keys only}} (Samo tipke).
4. Na {{ui:Mouse}} (Miška) nastavite kolešček, gumbe, ki premikajo pogled v tlorisu in pogledu, ter kaj počne vsak gumb v 3D pogledu.
5. Dajte mu ime in kliknite {{ui:Save}} (Shrani).

Shranitev vgrajenega sloga ustvari vašo kopijo („Moj jekleni trak“); vgrajeni se nikoli ne spremeni. Tipka, dodeljena dvema ukazoma, se prikaže rdeče in jo je treba popraviti, preden lahko shranite.

## Miška

- **Kolešček**: {{ui:Scroll up zooms in}} (Drsenje navzgor poveča) (privzeto) ali {{ui:Scroll up zooms out}} (Drsenje navzgor pomanjša), in kako hitro. Stiskanje na sledilni ploščici vedno povečuje tako, kot se premikajo vaši prsti.
- **Pomik v tlorisu in pogledu z**: srednjim gumbom, desnim gumbom ali obema. Z orodjem {{ui:Select}} levi gumb vedno riše izbirno okno.
- **Vlečenje v 3D pogledu**: {{ui:Each view's own}} (Lastno za vsak pogled) ohrani gumbe DetailCraft (levi vrti, srednji povečuje, desni pomika). Ali nastavite vsak gumb na vrtenje, pomik, povečavo ali nič; {{key:Shift}} z gumbom, ki vrti ali pomika, zamenja obe.

## Vzemite jo s seboj

{{ui:Export}} (Izvoz) shrani uporabljeni slog kot majhno datoteko `.ccinput.json`; {{ui:Import…}} (Uvozi…) jo doda, z drugega računalnika ali od sodelavca. Uvožena datoteka lahko kaže le na ukaze DetailCraft: vse drugo je izpuščeno in prešteto v statusni vrstici. {{ui:Delete this style}} (Izbriši ta slog) odstrani enega od vaših.

:::note
Te nastavitve ostanejo v tem brskalniku. {{ui:Use this style in every app}} (Uporabi ta slog v vseh programih) pod karticami slogov naredi, da se vsak program odpre v ustreznem slogu (lastna orodna vrstica, trak ali {{ui:Drafting classic}}), s spremembami, ki ste jih naredili v vsakem programu. DetailCraft nima sloga z menijsko vrstico: ko je za vse programe izbrana menijska vrstica drugega programa, DetailCraft ohrani svojo orodno vrstico.
:::

Sorodno: [Tipkovnica in miška](topic:keyboard) · [Nastavitve DetailCraft](topic:settings) · [Prehod z drugih programov za detajliranje](topic:coming-from)
