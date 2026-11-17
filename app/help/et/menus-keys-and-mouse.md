---
title: Menüüd, klahvid ja hiir
summary: Vali menüülaad, mis sobib sinu senise töövooga, anna mistahes käsule oma klahv, teisalda käske lintide vahekaartide vahel ning määra, mida ratas ja hiire nupud teevad.
keywords: menüülaad, menüüd, lint, tööriistariba, käsurida, kiirklahvid, otseteed, klahvid, kohandamine, ümbermääramine, hiir, ratas, pööra ümber, suumi suund, keskmine nupp, parem nupp, nihuta vaadet, pööra, eksport, import, vahetamine, tuttav, klassikaline joonistamine, terase lint
from: 4132c6e5
---

DetailCraft'i käsud on samad, kuidas neid ka ei kutsu. **Menüülaad** määrab ainult selle, kus need ekraanil asuvad, mida neid seal nimetatakse ja millise klahviga need käivituvad. Vali see jaotises {{ui:Sätted}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menüüd, klahvid ja hiir}}; muudatus jõustub kohe ning see brauser mäletab seda.

## Kolm laadi

| Laad | Mida saad |
|---|---|
| {{ui:DetailCraft}} | DetailCraft'i oma tööriistariba (Fail, Paiguta, Ühenda, Muuda, Väljund) ja selle ühetähelised klahvid: {{key:V}} vali, {{key:B}} tala, {{key:C}} post, {{key:R}} diagonaal, {{key:P}} plaat, {{key:F}} vundament, {{key:S}} trepp. Algseis. |
| {{ui:Klassikaline joonistamine}} | Neile, kes kirjutavad käske: väike lint ({{ui:Avaleht}}, {{ui:Vaade}}, {{ui:Väljund}}) ja käsurida. Kirjuta BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (võta tagasi), ZOOM, PLAN, 3D, DRAWINGS, NC või HELP ja vajuta {{key:Enter}}; {{key:Enter}} tühjal real kordab viimast käsku, {{key:Esc}} tühjendab selle. Kui hakkad kuhugi tippima, lähevad tähed käsureale. Keskmine nupp nihutab vaadet; 3D-vaates pööravad {{key:Shift}} ja keskmine nupp mudelit. |
| {{ui:Terase lint}} | Vahekaardid, nagu terasedetailiplaneerimise programmid need paigutavad: {{ui:Modelleerimine}} (liikmed, betoon, trepid), {{ui:Detailimine}} (liitmikud), {{ui:Muuda}}, {{ui:Joonised}} (joonised ja aruanded), {{ui:Valmistus}} (NC-failid, IFC) ja {{ui:Vaade}}, koos menüüga {{ui:Fail}} ja kiirnuppudega paremal. Ühetähelised klahvid jäävad. Keskmine nupp nihutab vaadet; 3D-vaates pöörab mudelit vasak nupp. |

Iga laad säilitab {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} ja {{key:Mod+A}}. Lintidel on ka vaateriba nupud {{ui:3D}}, {{ui:Plaan}}, {{ui:Vaade}} ja {{ui:Mahuta}}.

:::tip
Klahv, mis kuulub DetailCraft'i enda paigutusele, kuid mille sinu laad andis mõnele teisele käsule, ei tee midagi, ja olekurida ütleb, kuhu käsk läks (näiteks „Laadis „Minu terase lint“ on Post klahviga Ctrl+Alt+C“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nooleklahvid säilitavad alati oma tähenduse ning kui liige on pooleldi paigutatud või koopia järgib osutit, kuuluvad tähed DetailCraft'ile.
:::

## Tee oma

1. Vali laad, mis on sulle kõige lähedasem, ja klõpsa {{ui:Kohanda…}}.
2. Jaotises {{ui:Klahvid ja menüüd}} leia käsk (otsikast on abi). Vali {{ui:Lisa klahv}} ja vajuta klahvi või kahte klahvi järjest kaheklahvilise jaoks. Klõpsa klahvil, et see eemaldada.
3. Lindi korral viib {{ui:Asukoht}} käsu teise vahekaardi ja paneeli, menüüsse {{ui:Fail}} või {{ui:Ainult klahvid}}.
4. Jaotises {{ui:Hiir}} määra ratas, nupud, mis nihutavad plaani ja vaateid, ning mida iga nupp 3D-vaates teeb.
5. Anna sellele nimi ja klõpsa {{ui:Salvesta}}.

Sisseehitatud laadi salvestamine teeb sinu enda koopia („Minu terase lint“); sisseehitatud laad ei muutu kunagi. Klahv, mis on antud kahele käsule, kuvatakse punasena ja tuleb enne salvestamist parandada.

## Hiir

- **Hiireratas**: {{ui:Ratast üles kerides suumitakse sisse}} (algseis) või {{ui:Ratast üles kerides suumitakse välja}}, ning kui kiiresti. Puuteplaadi näpistus suumib alati nii, nagu sõrmed liiguvad.
- **Plaani ja vaadete nihutamine**: keskmise nupuga, parema nupuga või mõlemaga. Valiku tööriistaga joonistab vasak nupp alati valikuakna.
- **Lohistamine 3D-vaates**: {{ui:Iga vaate oma}} säilitab DetailCraft'i nupud (vasak pöörab, keskmine suumib, parem nihutab). Või määra iga nupp pöörama, nihutama, suumima või mitte midagi; {{key:Shift}} koos nupuga, mis pöörab või nihutab, vahetab need kaks.

## Võta kaasa

{{ui:Ekspordi}} salvestab kasutuses oleva laadi väikese `.ccinput.json` failina; {{ui:Impordi…}} lisab ühe teisest arvutist või kolleegilt. Imporditud fail võib osutada ainult DetailCraft'i enda käskudele: kõik muu jäetakse välja ja loendatakse olekureal. {{ui:Kustuta see stiil}} eemaldab ühe sinu enda laadidest.

:::note
Need sätted jäävad sellesse brauserisse. {{ui:Kasuta seda stiili kõigis rakendustes}} stiilikaartide all paneb iga rakenduse avanema oma vastavas laadis (oma tööriistariba, lint või Klassikaline joonistamine), koos muudatustega igas rakenduses. DetailCraftil ei ole menüüribaga laadi: kui teise rakenduse menüüriba on valitud kõigi rakenduste jaoks, säilitab DetailCraft oma tööriistariba.
:::

Seotud: [Klahvid ja hiir](topic:keyboard) · [DetailCraft'i sätted](topic:settings) · [Tulek muust detailiplaneerimise tarkvarast](topic:coming-from)
