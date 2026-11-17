---
title: Kopírovanie, prilepenie a duplikovanie
summary: Vyberte viac dielov, skopírujte ich aj s otvormi, výrezmi a spojmi a prilepte ich na priesečník mriežky, s posunom, na rovnaké miesto alebo na inú kartu. Vystrihnúť, duplikovať, zmazať a vybrať všetko.
keywords: kopírovať, prilepiť, vystrihnúť, duplikovať, schránka, prilepiť na rovnaké miesto, vybrať všetko, zrušiť výber, viacnásobný výber, klik so Shift, viac, zopakovať rozpätie, kopírovať rám, posun, zmazať viac, ponuka úpravy, ponuka viac
from: f25f1829
---

Skupina {{ui:Úpravy}} na paneli nástrojov obsahuje {{ui:Späť}}, {{ui:Znova}}, {{ui:Kopírovať}} a {{ui:Prilepiť}}. Jej ponuka {{ui:Viac}} obsahuje ostatné: {{ui:Vystrihnúť}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Prilepiť na rovnaké miesto}}, {{ui:Duplikovať}}, {{ui:Zmazať}}, {{ui:Vybrať všetko}} a {{ui:Zrušiť výber}}, každé s jeho klávesovou skratkou. Tlačidlo alebo položka ponuky, ktorá momentálne nemôže fungovať, je sivá; najeďte na ňu ukazovateľom a prečítate si, prečo (napríklad „zatiaľ nič nie je skopírované“).

Každé prilepenie, vystrihnutie, duplikovanie a zmazanie je jeden krok: jedným {{key:Mod+Z}} sa všetko vráti späť.

## Výber viacerých dielov

- Kliknutím vyberte diel. Podržte {{key:Shift}} (alebo {{key:Ctrl}}, alebo {{key:Mod}}) a kliknite na ďalšie diely, aby ste ich pridali; vybraný diel odoberiete rovnakým kliknutím.
- {{key:Mod+A}} alebo {{ui:Vybrať všetko}} vyberie každý prvok, spoj a základ.
- {{key:Esc}} alebo {{ui:Zrušiť výber}} zruší výber.

Keď je vybratých viac vecí, panel {{ui:Vlastnosti}} má nadpis „4 vybrané“ (alebo koľko ich je) a uvádza prvky podľa typu, spoje, základy a hrubú hmotnosť ocele, s tlačidlami {{ui:Kopírovať}}, {{ui:Duplikovať}} a {{ui:Zmazať}}.

## Kopírovanie

1. Vyberte prvky a základy, ktoré chcete.
2. Zvoľte {{ui:Kopírovať}} alebo stlačte {{key:Mod+C}}.

Čo sa skopíruje:

- Každý prvok celý: profil, materiál, konce, poloha, rotácia, názov, otvory a výrezy. Vlastný profil, ktorý používa, sa skopíruje tiež.
- Každý základ celý: veľkosť, betón, spodná výstuž a štartovacie tyče.
- Čelné dosky a pätné dosky, ale len vtedy, keď sa skopírujú všetky prvky, ktoré spoj spája: čelná doska nosníka potrebuje nosník aj jeho stĺp. Stavový riadok povie, koľko spojov bolo vynechaných. Ak chcete spoje vynechať úmyselne, zrušte označenie **Kopírovať čelné dosky a pätné dosky spolu s ich prvkami** v [nastaveniach DetailCraft](topic:settings).

Spoj sám osebe sa skopírovať nedá; vyberte namiesto toho jeho prvky. Ak chcete ostatným spojom dať rovnaký spoj, použite {{ui:Podobné}} (pozri [Čelné dosky](topic:end-plates#copy-it-to-every-similar-joint)).

Kópia zostáva v tomto prehliadači, kým neskopírujete niečo iné. Iná karta alebo okno DetailCraft v tom istom prehliadači ju môže prilepiť, takže môžete skopírovať rám z jedného modelu a prilepiť ho do iného.

## Prilepenie na priesečník mriežky

1. Zvoľte {{ui:Prilepiť}} alebo stlačte {{key:Mod+V}}.
2. Presuňte ukazovateľ nad pohľad. Prerušovaný obrys kópie sa pohybuje za priesečníkom mriežky najbližším k ukazovateľu.
3. Kliknite na priesečník. Základný bod kópie (jej najnižší roh: najmenšie x, y a z zo všetkého skopírovaného) sa umiestni tam.

Prilepené diely sú potom vybrané, takže môžete prilepiť znova inde alebo ich upraviť. {{key:Esc}} zruší prilepenie; kópia zostáva v schránke. {{ui:Pôdorys}} a {{ui:Pohľad}} uľahčujú trafenie správneho priesečníka.

:::tip
Ak chcete zopakovať rozpätie, vyberte prvky rozpätia (alebo všetko s {{key:Mod+A}}), skopírujte, prilepte a kliknite na priesečník o jedno rozpätie ďalej od miesta, kde bol najnižší roh kópie.
:::

## Prilepenie z klávesnice

Počas lepenia panel {{ui:Vlastnosti}} ukazuje, čo je v schránke, a dve formy:

- {{ui:Prilepiť s posunom (mm, od originálu)}}: zadajte x, y a z a zvoľte {{ui:Prilepiť s týmto posunom}}. Začína s posunom z [nastavení DetailCraft](topic:settings).
- {{ui:Prilepiť na priesečník mriežky}}: vyberte písmenovú mriežku, číslovanú mriežku a úroveň a zvoľte {{ui:Prilepiť sem}}. Základný bod sa umiestni tam.

## Prilepiť na rovnaké miesto

{{ui:Prilepiť na rovnaké miesto}} ({{key:Mod+Shift+V}}) umiestni kópiu presne na súradnice, z ktorých bola skopírovaná. Použite ju po {{ui:Vystrihnúť}} alebo na prenesenie dielov z iného modelu na to isté miesto. Ak originály ešte existujú, kópia leží na nich a stavový riadok vás upozorní: presuňte kópie za ich {{ui:Začiatok}} a {{ui:Koniec}} v paneli {{ui:Vlastnosti}}, alebo vráťte späť.

## Duplikovať

{{ui:Duplikovať}} ({{key:Mod+D}}) skopíruje výber a okamžite ho prilepí, posunutý o posun z [nastavení DetailCraft](topic:settings) (spočiatku 6000 mm pozdĺž x). Nemení obsah schránky. Kópie sú potom vybrané, takže opätovné stlačenie {{key:Mod+D}} vytvorí ďalšiu z nich.

## Vystrihnúť a zmazať

- {{ui:Vystrihnúť}} ({{key:Mod+X}}) skopíruje výber a potom ho zmaže. Prilepte ho tam, kam patrí.
- {{ui:Zmazať}} ({{key:Delete}} alebo {{key:Backspace}}) zmaže výber. Zmazanie prvku zmaže aj jeho spoje.

## Značky po prilepení

Značky dielov a montážnych celkov sa nikdy neukladajú; DetailCraft ich po každej zmene očísluje znova z modelu ([Ako sa určujú značky](topic:mark-rules)). Preto:

- Kópia, ktorá je rovnakým kusom ako originál (rovnaký profil, trieda, rezná dĺžka, otvory a výrezy), zdieľa značku originálu a počet v {{ui:Značky dielov}} a v kusovníku sa zvýši.
- Kópia, ktorá vyjde inak, dostane vlastnú značku. Nosník prilepený bez čelných dosiek sa napríklad neorezáva, takže je iný kus. Značky sa očíslujú znova v celom modeli, takže sa môžu zmeniť čísla aj iných dielov.

Každý prilepený prvok, otvor, výrez, spoj a základ dostane nové id, takže nič v modeli nie je nikdy zdieľané medzi kópiou a originálom.

## Ak je schránka odmietnutá

Obsah schránky sa kontroluje rovnako dôkladne ako model súboru, ktorý otvárate: čokoľvek, čo nie je platný diel DetailCraft, sa zahodí a stavový riadok povie, čo sa stalo. Schránka naplnená novším DetailCraftom alebo niečím iným sa odmietne správou a nič sa neprilepí. Ak súkromné okno nemôže uchovať kópiu v úložisku prehliadača, kópia v tej karte funguje ďalej.
