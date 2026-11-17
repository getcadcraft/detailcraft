---
title: Výkresy celkového uspořádání a sestav
summary: Vytvořte z modelu půdorysy, pohledy a jeden výkres sestavy pro každou značku montážního celku, na listech A4 až A1 nebo ANSI B až D, vydejte je s revizními písmeny a stáhněte jako PDF, DWG nebo DXF.
keywords: skryté čáry, odstranění skrytých čar, čárkovaně, revizní oblak, oblaky, revizní trojúhelník, půdorys kotevních šroubů, kotevní tyče, tabulka tyčí, tabulka patních plechů, vytyčení, vydání, revize, rev, tabulka revizí, nové vydání, záznam vydání, předávací list, dwg, dxf, soubor CAD, export výkresů, výkresy, celkové uspořádání, ga, půdorys, pohled, výkres sestavy, formát listu, formát papíru, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, tisk, měřítko, razítko, odkaz na model
from: 709f8604
---

Vyberte {{ui:Drawings}} ve skupině {{ui:Output}}. DetailCraft vytvoří celou sadu z modelu v jeho současném stavu. Nic se neukládá: změníte model, znovu otevřete {{ui:Drawings}} a sada se vytvoří znovu.

## Co je v sadě

- **Půdorysy**, jeden pro každou úroveň, na které je něco, pohled shora.
- **Pohledy**, jeden pro každou osu, ke které jsou ve vzdálenosti do 1 m prvky.
- **Půdorys kotevních šroubů**, když model obsahuje patní plechy: každý patní plech shora se sloupem a kotevními tyčemi, osy s jejich kótami, typický detail každého vzoru tyčí (BP1, BP2 …) s roztečí tyčí a vzdálenostmi od okraje, a dva rozpisy: kotevní tyče podle značky (R1, R2 …: množství, průměr, délka, vyčnívání nad plechem, zabetonování, jakost) a patní plechy podle osy (sloup, vzor, plech, tyče, horní hrana plechu). Sloup mimo osu je určen svými souřadnicemi.
- **Výkresy sestav**, jeden pro každou značku montážního celku: pohledy zepředu, shora a z čela, řetězené kóty k otvorům a okrajům plechů, seznam dílů, volné šrouby a tyče a poznámky svarů a otvorů. Každý svařovaný plech má ve čelním pohledu symbol koutového svaru (AWS A2.4): šipka ukazuje na spoj, trojúhelník pod referenční čárou označuje stranu šipky, číslo nalevo je velikost svaru v mm a kružnice tam, kde šipka dosáhne čáry, znamená kolem dokola.

**Skryté čáry.** Půdorysy a pohledy vynechávají čáry dílu tam, kde jej zcela zakrývá díl, který je před ním (nosník viděný z čela za sloupem). Výkresy sestav kreslí plech čárkovaně tam, kde jej zakrývá hlavní díl: za stojinou v čelním pohledu (při pohledu z −u strany dílu), pod horní pásnicí v pohledu shora. Díly ve stejné hloubce nebo s překrývajícím se hloubkovým rozsahem jsou kresleny celé.

Každý list má razítko s číslem výkresu, měřítkem, názvem modelu, datem, číslem listu s formátem listu a odkazem na model: kódem vytvořeným z uloženého modelu, aby bylo možné výtisk přiřadit k modelu, ze kterého pochází.

## Volba formátu listu

Vyberte formát v seznamu nahoře v okně {{ui:Drawings}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) nebo {{ui:ANSI D}} (22 × 34 in). Každý list je na šířku. Sada se okamžitě vytvoří znovu ve novém formátu a stejný formát se používá i pro výrobní výkresy. Je také v [nastavení DetailCraft](topic:settings#drawings) a tento prohlížeč si jej pamatuje.

- Větší list se kreslí ve větším měřítku. Měřítka jsou vždy standardní (1:10, 1:20, 1:25, 1:50, 1:100 a tak dále).
- Text má na každém listu stejnou velikost, takže zůstane čitelný při tisku.
- Na malém listu může být dlouhá, tenká sestava v hloubce ve větším měřítku než po délce. Název pohledu pak uvádí obě měřítka a rozhodující jsou kóty.

## Vydání výkresů a revize

Řádek nad náhledem říká, v jakém stavu je zobrazený list: **Ještě nevydáno**, **Rev B, vydáno … ; beze změny od té doby**, nebo červeně **Změněno od rev B: nutné znovu vydat**. Seznam listů označuje vydané listy jejich revizí a ty, které je třeba znovu vydat.

- Napište, k čemu vydání slouží (zpočátku „Vydáno pro výrobu“) a zvolte {{ui:Issue this sheet}}, nebo {{ui:Issue changed sheets}} pro všechny listy, které jsou nové nebo se změnily od posledního vydání.
- První vydání listu je revize A, potom B, C a tak dále (I a O se přeskakují).
- Razítko ukazuje číslo výkresu s jeho revizí („A-B1  rev B“) a vedle něj tabulka revizí uvádí poslední vydání: revize, datum a popis. Na malém listu ukazuje tolik, kolik se vejde.
- List se „změní“, když se změní to, co je na něm nakresleno: přesunutý prvek, nový otvor, přečíslovaná značka. Datum, počet listů a samotná tabulka revizí se nepočítají. Změna formátu listu změní každý list.
- Záznam vydání se uloží v souboru modelu a vydání je jeden krok zpět. [Soubor KISS](topic:kiss-export) nese nejnovější revizi každého výkresu.

### Revizní oblaky

Od druhého vydání listu dál je každý díl nebo základová patka, která se změnila, nakreslen uvnitř revizního oblaku s revizním trojúhelníkem nesoucím písmeno.

- Dokud se list od posledního vydání změnil, oblaky ukazují, co se změnilo od té doby, s nadcházející revizí v trojúhelníku (rev B vydáno a změněno: trojúhelníky říkají C).
- Jakmile jej vydáte, oblaky zůstanou na listu této revize, jako u vytištěné sady, dokud se list znovu nezmění.
- Každý list označí jen změny, které zobrazuje. Půdorysy a pohledy nekreslí otvory ani výřezy, takže oblakem označí díl, který se přesunul, byl otočen nebo změnil velikost, nebo jehož značka se změnila. Výkresy sestav a půdorys kotevních šroubů oblakem označí také nové nebo přesunuté otvory a výřezy.
- Přečíslovaná značka se počítá: když změna udělá z nosníku novou sestavu, nosníky, jejichž značka se posunula nahoru (B1 na B2), jsou na půdorysech a pohledech označeny oblakem.
- Smazaný díl nezanechá nic k označení.
- Listy vydané před zavedením revizních oblaků (DetailCraft 0.4) začnou oblaky od svého dalšího vydání.
- Oblaky jsou v souborech PDF, DXF i DWG a sami o sobě nikdy nejsou změnou.

## Stažení

Vyberte formát v seznamu vedle tlačítek a potom {{ui:This sheet}} pro zobrazený list nebo {{ui:All sheets}} pro celou sadu.

- **PDF**: k tisku nebo odeslání. {{ui:All sheets}} vytvoří jedno PDF, jednu stránku na list, každou ve zvoleném formátu.
- **DWG** ve formátu 2018, 2013, 2010, 2007, 2004 nebo 2000: pro otevření listů v programu CAD. Pro starší program zvolte starší formát.
- **DXF (R12)**: verze, kterou otevře téměř každý program CAD.

Soubor DWG nebo DXF je nakreslen v plné velikosti: jedna jednotka výkresu je jeden milimetr na papíře, takže se tiskne v měřítku 1:1 a každý pohled si zachovává měřítko uvedené v názvu. Každé pero je vlastní vrstva: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID a tak dále, s jeho tloušťkou čáry (DWG) a čárkováním. Texty jsou text ve stylu písma DetailCraft (Arial). Kóty jsou čáry a čísla, která vidíte, nikoli objekty kót. {{ui:All sheets}} vloží soubory DWG nebo DXF do jednoho archivu zip, jeden soubor na list.

:::note
DXF R12 nemá tloušťky čar ani výplně: vrstvy si zachovají své názvy, takže při vykreslování nastavte pera podle vrstvy, a vyplněné tvary jsou vynechány (stavový řádek říká kolik).
:::

Tiskněte na 100 % (bez „přizpůsobit stránce“) na papír stejného formátu, chcete-li, aby uvedená měřítka platila.
