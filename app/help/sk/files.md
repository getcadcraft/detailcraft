---
title: Otvorenie, uloženie a export súborov
summary: Súbor modelu DetailCraft, každý export, ktorý zapisuje, kam súbory idú a čo sa líši podľa prehliadača a pripojenia.
keywords: otvoriť, uložiť, export, stiahnuť, súbor, json, ifc, nc1, dstv, csv, pdf, zip, formáty, import
from: bd715ea3
---

DetailCraft má jeden vlastný súbor, model, a päť exportov. Každé uloženie a každý export je stiahnutie. Nič sa nenahráva a nič sa neuchováva na serveri.

## Súbor modelu

Model DetailCraft sa ukladá ako `<názov>.detailcraft.json`, kde `<názov>` je názov modelu v paneli {{ui:Model}}. Obsahuje mriežky, úrovne, prvky (s ich otvormi a vyrezaniami), spoje a ich nastavenia, pätky a vaše vlastné profily.

Dielce, značky, skrutky, zvary a prúty sa neukladajú: DetailCraft ich pri každom otvorení znova vypočíta z modelu. Preto je súbor modelu malý.

### Uloženie

1. Napíšte názov do poľa {{ui:Názov}} na vrchu panela {{ui:Model}}.
2. V skupine {{ui:Súbor}} zvoľte {{ui:Uložiť}} alebo stlačte {{key:Mod+S}}.
3. Prehliadač stiahne `<názov>.detailcraft.json`. Riadok stavu hovorí „Súbor … bol uložený (stiahnutý)“ a bodka na začiatku názvu karty prehliadača zmizne.

Každé uloženie je nové stiahnutie. Prehliadač neprepíše súbor, ktorý ste otvorili; podľa svojich nastavení pridá k názvu číslo, napríklad `Frame (1).detailcraft.json`, alebo sa opýta, kam ukladať. Vlastné verzie si uchovajte premenovaním stiahnutých súborov.

:::chromium
Chrome a Edge ukladajú do priečinka Stiahnuté súbory, ibaže je v nastaveniach sťahovania prehliadača zapnuté **Pred stiahnutím sa pýtať, kam sa má každý súbor uložiť**. Zapnite to, ak chcete pri každom uložení vybrať priečinok a názov súboru.
:::

:::firefox
Firefox ukladá do priečinka Stiahnuté súbory, alebo sa pýta pri každom uložení, ak je v nastaveniach zapnuté **Vždy sa pýtať, kam ukladať súbory**.
:::

:::safari
Safari ukladá do priečinka Stiahnuté súbory. Priečinok zmeníte v **Safari, Nastavenia, Všeobecné, Umiestnenie sťahovaných súborov**.
:::

### Otvorenie

1. V skupine {{ui:Súbor}} zvoľte {{ui:Otvoriť}} alebo stlačte {{key:Mod+O}}.
2. Vyberte súbor `.detailcraft.json`.

Alebo súbor pretiahnite z {{pick:mac=Finderu|windows=Prieskumníka|linux=vášho správcu súborov}} a pustite ho na pohľad. Počas ťahania pohľad hovorí „Pustením otvoríte model DetailCraft alebo súbor IFC“.

Ak má otvorený model neuložené zmeny, DetailCraft sa najprv opýta: {{ui:Zrušiť}}, {{ui:Zahodiť zmeny}} alebo {{ui:Najprv uložiť}}.

DetailCraft skontroluje každé pole súboru, kým ho použije. Všetko, čo nevie použiť, vynechá a riadok stavu povie čo, napríklad „Prvky (2) neboli platné a boli vynechané.“ Model uložený novším DetailCraft sa odmietne so správou namiesto toho, aby sa otvoril napoly správne.

### Čo otvára

Vlastné súbory modelov (`.json`, do 50 MB) a súbory IFC (`.ifc`, IFC2X3 alebo IFC4, do 200 MB). Súbor IFC, otvorený alebo vložený cez {{ui:Importovať IFC}}, sa stane novým modelom svojich nosníkov, stĺpov, prvkov, dosiek, mriežok a úrovní, s otvormi a vyrezaniami v nich a so skrutkami ako voľnými skrutkami; správa uvádza, čo sa vynechalo. Pozrite [Export IFC](topic:ifc-export#import). Zatiaľ neotvára DWG, DXF ani model iného programu na vypracovanie; pokus zobrazí „DetailCraft otvára vlastné modely (.detailcraft.json) a súbory IFC (.ifc).“

## Stratená práca, nedávne súbory, aplikácia pre počítač

- Kým má model zmeny, ktoré ste neuložili, DetailCraft uchováva kópiu v tomto prehliadači. Ak sa karta alebo prehliadač zastaví pred uložením, pri ďalšom otvorení DetailCraft sa opýta **Obnoviť prácu?**: obnovte kópiu, alebo ju nechajte zaniknúť. Pozrite [Obnovenie práce](common:recover).
- Modely, ktoré ste nedávno otvorili, sú uvedené na úvodnej obrazovke, keď prehliadač dovolí DetailCraft otvoriť ich znova; kliknutím na jeden ho otvoríte znova.
- V aplikácii pre počítač {{ui:Uložiť}} zapíše model späť do súboru, ktorý ste otvorili (v prehliadači stiahne kópiu) a dvojité kliknutie na model DetailCraft alebo súbor IFC ho otvorí v DetailCraft.

## Exporty

Všetky exporty používajú názov modelu. Vyberte ich v skupine {{ui:Výstup}}.

| Tlačidlo | Súbor | Čo obsahuje |
|---|---|---|
| {{ui:IFC}} | `<názov>.ifc` | IFC4: podlažia, mriežky, každý oceľový dielec ako vytlačený profil s otvormi a vyrezaniami, zostavy, skrutky a kotviace tyče, pätky a každý prút. Pozrite [Export IFC](topic:ifc-export). |
| {{ui:Súbory NC}} | `<názov> NC.zip` | Jeden súbor DSTV `.nc1` na značku dielca. Pozrite [Odoslanie súborov NC do dielne](topic:nc-export). |
| {{ui:Kusovník}} | `<názov> BOM.csv` | Tri tabuľky v jednom súbore: dielce, zostavy a skrutky a kotviace tyče. Pozrite [Značky a kusovník](topic:marks-and-bom). |
| {{ui:Ohýbanie}} | `<názov> bending schedule.csv` | Každá značka prúta v pätkách. Pozrite [Pätky a výstuž](topic:footings-and-rebar). |
| {{ui:Dielenský výkres}} | `<názov> <značka>.pdf` | Jeden list (A3, ak ste nezvolili inú veľkosť) pre vybraný dielec (profily I a dosky). Pozrite [Vytvorenie dielenského výkresu](topic:shop-drawings). |
| {{ui:Výkresy}} | `<názov> drawings.pdf`, `<názov> <list>.pdf`; `<názov> <list>.dwg` alebo `.dxf`, viac v `<názov> drawings DWG.zip` (alebo `DXF.zip`) | Pôdorysy, pohľady a výkresy zostáv na veľkosti listu, ktorú ste zvolili; DWG a DXF v skutočnej veľkosti, 1 jednotka = 1 mm na papieri. Pozrite [Výkresy celkového usporiadania a zostáv](topic:drawings). |

### Poznámky k súborom CSV

- Začínajú značkou poradia bajtov, aby tabuľkové programy správne čítali znaky s diakritikou.
- Bunka, ktorá začína `=`, `+`, `-` alebo `@` (a nie je obyčajné číslo), dostane na začiatok apostrof, aby ju tabuľkový program nikdy nespustil ako vzorec.
- Dĺžky sú v milimetroch a hmotnosti v kilogramoch.

### Poznámky k PDF

Text v PDF používa štandardné písmo Helvetica. Znaky, ktoré nemá (mimo západoeurópskej sady), sa vytlačia ako „?“ a riadok stavu povie, koľko ich je.

## Jednotky

DetailCraft pracuje všade v milimetroch: mriežky, úrovne, súradnice, profily, otvory a každý export. Názvy profilov si zachovávajú uverejnenú podobu (W12x50 je americké označenie, hoci jeho rozmery sú zobrazené v mm). Zadávanie v imperiálnych jednotkách zatiaľ neexistuje.

## Online a offline

Otvorenie, uloženie a export prebiehajú vo vašom prehliadači, takže po načítaní DetailCraft fungujú rovnako s pripojením aj bez neho.

Ak chcete DetailCraft neskôr používať bez pripojenia, zvoľte na lište aplikácie {{ui:Uložiť na offline použitie}}, kým ste online. Tlačidlo počíta („Ukladanie 3 z 20“) a potom znie {{ui:Pripravené offline}}. Uložená kópia zahŕňa knižnicu 3D grafiky (asi 2,6 MB) a tohto pomocníka, takže po uložení fungujú offline 3D pohľad, každý export aj pomocník. Podrobnosti a to, čo stále potrebuje pripojenie: [Práca offline](common:offline).

:::offline
Ste offline. Ak lišta aplikácie zobrazuje {{ui:Pripravené offline}}, otvorenie, uloženie a export fungujú ako zvyčajne. Ak nie, nechajte túto kartu otvorenú, nenačítavajte ju znova, kým nebudete online, a model teraz uložte.
:::

Ukladanie do cloudu zatiaľ nie je k dispozícii a zostavenia pre počítač zatiaľ neexistujú. Súbory `.detailcraft.json` zálohujte tak, ako zálohujete akúkoľvek inú pracovný súbor. Viac v [Kam idú vaše súbory](common:your-files).

## Neuložená práca

DetailCraft uchováva model iba v otvorenej karte. Ak zatvoríte alebo znova načítate kartu s neuloženými zmenami, prehliadač sa opýta, či stránku opustiť; jeho znenie je vlastné prehliadaču. Ukladajte často klávesom {{key:Mod+S}}.
