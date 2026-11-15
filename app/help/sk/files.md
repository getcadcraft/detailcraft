---
title: Otváranie, ukladanie a export súborov
summary: Súbor modelu DetailCraft, každý export, ktorý zapisuje, kam súbory smerujú a v čom sa líši podľa prehliadača a pripojenia.
keywords: otvoriť, uložiť, export, stiahnuť, súbor, json, ifc, nc1, dstv, csv, pdf, zip, formáty, import
from: 6fbc8e8f
---

DetailCraft má vlastný súbor, model, a päť exportov. Každé uloženie a každý export je stiahnutie. Nič sa nenahráva a nič sa neuchováva na serveri.

## Súbor modelu

Model DetailCraft sa ukladá ako `<name>.detailcraft.json`, kde `<name>` je názov modelu v paneli {{ui:Model}}. Obsahuje mriežky, úrovne, prvky (s ich otvormi a výrezmi), spoje a ich nastavenia, pätky a vaše vlastné profily.

Súčiastky, značky, skrutky, zvary a výstuž sa neukladajú: DetailCraft ich pri každom otvorení modelu vypočíta znova. Preto je súbor modelu malý.

### Uložiť

1. Zadajte názov do poľa {{ui:Názov}} v hornej časti panela {{ui:Model}}.
2. Vyberte {{ui:Uložiť}} v skupine {{ui:Súbor}} alebo stlačte {{key:Mod+S}}.
3. Prehliadač stiahne `<name>.detailcraft.json`. Stavový riadok hlási "Uložené … (stiahnuté)" a bodka na začiatku názvu karty prehliadača zmizne.

Každé uloženie je nové stiahnutie. Prehliadač neprepíše súbor, ktorý ste otvorili; podľa svojich nastavení pridá k názvu číslo, napríklad `Frame (1).detailcraft.json`, alebo sa opýta, kam súbor uložiť. Svoje vlastné verzie si uchovajte premenovaním stiahnutých súborov.

:::chromium
Chrome a Edge ukladajú do priečinka Stiahnuté súbory, pokiaľ nie je v nastaveniach sťahovania prehliadača zapnutá možnosť **Pred stiahnutím každého súboru sa opýtať, kam ho uložiť**. Zapnite ju, ak chcete zakaždým vybrať priečinok a názov súboru.
:::

:::firefox
Firefox ukladá do priečinka Stiahnuté súbory, alebo sa pri každom stiahnutí opýta, ak je v jeho nastaveniach zapnuté **Vždy sa opýtať, kam uložiť súbory**.
:::

:::safari
Safari ukladá do priečinka Stiahnuté súbory. Priečinok zmeníte tak, že otvoríte **Safari, Nastavenia, Všeobecné, Umiestnenie sťahovaných súborov**.
:::

### Otvoriť

1. Vyberte {{ui:Otvoriť}} v skupine {{ui:Súbor}} alebo stlačte {{key:Mod+O}}.
2. Vyberte súbor `.detailcraft.json`.

Alebo presuňte súbor z {{pick:mac=Finder|windows=File Explorer|linux=váš správca súborov}} a pustite ho na zobrazenie. Zobrazenie počas ťahania hlási "Pustite model DetailCraft, aby sa otvoril".

Ak má otvorený model neuložené zmeny, DetailCraft sa najskôr opýta: {{ui:Zrušiť}}, {{ui:Zahodiť zmeny}} alebo {{ui:Najprv uložiť}}.

DetailCraft pred použitím skontroluje každé pole súboru. Čo nevie použiť, sa vynechá a stavový riadok povie, čo to bolo, napríklad "2 prvky boli neplatné a vynechané." Model uložený novšou verziou DetailCraft sa odmietne so správou, namiesto aby sa otvoril len sčasti správne.

### Čo sa otvorí

Vlastné súbory modelu (`.json`, až 50 MB) a súbory IFC (`.ifc`, IFC2X3 alebo IFC4, až 200 MB). Súbor IFC, otvorený alebo doplnený tlačidlom {{ui:Importovať IFC}}, sa stane novým modelom jeho nosníkov, stĺpov, prvkov, plechov, mriežok a úrovní, s otvormi a výrezmi, ktoré boli v nich vyrezané, a so skrutkami ako voľnými skrutkami; správa uvádza, čo bolo vynechané. Pozri [Export IFC](topic:ifc-export#import). Zatiaľ neotvára DWG, DXF ani model iného programu na detailovanie; pri pokuse sa zobrazí "DetailCraft otvára vlastné modely (.detailcraft.json) a súbory IFC (.ifc)."

## Stratená práca, nedávne súbory, aplikácia pre počítač

- Kým má model zmeny, ktoré ste neuložili, DetailCraft drží kópiu v tomto prehliadači. Ak sa karta alebo prehliadač zastaví skôr, než uložíte, pri ďalšom otvorení DetailCraft sa opýta **Obnoviť vašu prácu?**: obnovte kópiu, alebo ju zahoďte. Pozri [Obnovenie práce](common:recover).
- Modely, ktoré ste nedávno otvorili, sú uvedené na úvodnej obrazovke, keď ich prehliadač dovolí DetailCraft znova otvoriť; kliknutím na jeden ho znova otvoríte.
- V aplikácii pre počítač {{ui:Uložiť}} zapíše model späť do súboru, ktorý ste otvorili (v prehliadači stiahne kópiu), a dvojklik na model DetailCraft alebo súbor IFC ho otvorí v DetailCraft.

## Exporty

Všetky exporty používajú názov modelu. Vyberte ich v skupine {{ui:Výstup}}.

| Tlačidlo | Súbor | Čo je v ňom |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: podlažia, mriežky, každú oceľovú súčiastku ako vytlačený profil s jej otvormi a výrezmi, zostavy, skrutky a kotevné tyče, pätky a každú výstuž. Pozri [Export IFC](topic:ifc-export). |
| {{ui:Súbory NC}} | `<name> NC.zip` | Jeden súbor DSTV `.nc1` na každú značku súčiastky. Pozri [Odoslanie súborov NC do dielne](topic:nc-export). |
| {{ui:Kusovník}} | `<name> BOM.csv` | Tri tabuľky v jednom súbore: súčiastky, zostavy a skrutky s kotevnými tyčami. Pozri [Značky a kusovník](topic:marks-and-bom). |
| {{ui:Ohýbanie}} | `<name> bending schedule.csv` | Každá značka výstuže v pätkách. Pozri [Pätky a výstuž](topic:footings-and-rebar). |
| {{ui:Dielenský výkres}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` obsahuje list na každú značku súčiastky; {{ui:Stiahnuť PDF}} stiahne zobrazený list (A3, pokiaľ ste nezvolili inú veľkosť). Pozri [Tvorba dielenských výkresov](topic:shop-drawings). |
| {{ui:Výkresy}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` alebo `.dxf`, viac v `<name> drawings DWG.zip` (alebo `DXF.zip`) | Pôdorysy, pohľady a montážne výkresy na veľkosti listu, ktorú ste zvolili; DWG a DXF v plnej veľkosti, 1 jednotka = 1 mm na papieri. Pozri [Všeobecné usporiadanie a montážne výkresy](topic:drawings). |

### Poznámky k súborom CSV

- Začínajú značkou poradia bajtov, aby tabuľkové programy správne čítali znaky s diakritikou.
- Bunka, ktorá sa začína `=`, `+`, `-` alebo `@` (a nie je obyčajné číslo), dostane úvodnú apostrofu, aby ju tabuľkový program nikdy nespustil ako vzorec.
- Dĺžky sú v milimetroch a hmotnosti v kilogramoch.

### Poznámky k PDF

Text v PDF používa štandardné písmo Helvetica. Znaky, ktoré nemá (mimo západoeurópskej sady), sa vytlačia ako "?" a stavový riadok povie, koľko ich bolo.

## Jednotky

DetailCraft pracuje všade v milimetroch: mriežky, úrovne, súradnice, profily, otvory a každý export. Názvy profilov si zachovávajú publikovaný tvar (W12x50 je americké označenie, aj keď jeho rozmery sú zobrazené v mm). Zadávanie v imperiálnych jednotkách zatiaľ nie je k dispozícii.

## Online a offline

Otváranie, ukladanie a export prebiehajú všetky vo vašom prehliadači, takže fungujú rovnako s pripojením aj bez neho, keď sa DetailCraft načíta.

Ak chcete DetailCraft neskôr používať bez pripojenia, vyberte {{ui:Uložiť na offline použitie}} na lište aplikácie, kým ste online. Tlačidlo počíta ("Ukladá sa 3 z 20") a potom zobrazí {{ui:Pripravené offline}}. Uložená kópia obsahuje knižnicu 3D grafiky (asi 2.6 MB) a túto pomoc, takže po uložení fungujú 3D zobrazenie, každý export aj pomoc offline. Podrobnosti a to, čo ešte vyžaduje pripojenie: [Práca offline](common:offline).

:::offline
Ste offline. Ak lišta aplikácie zobrazuje {{ui:Pripravené offline}}, otváranie, ukladanie a export fungujú ako obvykle. Ak nie, nechajte kartu otvorenú, neobnovujte ju, kým nebudete znova online, a model uložte hneď.
:::

Ukladanie do cloudu zatiaľ nie je k dispozícii a zatiaľ nie sú k dispozícii ani verzie pre počítač. Zálohujte si súbory `.detailcraft.json` rovnako, ako zálohujete akýkoľvek iný pracovný súbor. Viac v [Kam smerujú vaše súbory](common:your-files).

## Neuložená práca

DetailCraft drží model len v otvorenej karte. Ak zatvoríte alebo obnovíte kartu s neuloženými zmenami, prehliadač sa opýta, či chcete stránku opustiť; jeho znenie je prehliadača. Ukladajte často stlačením {{key:Mod+S}}.
