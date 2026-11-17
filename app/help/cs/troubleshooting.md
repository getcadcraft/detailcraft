---
title: Řešení potíží
summary: Co znamenají hlášení DetailCraft a co dělat, od chybějícího 3D zobrazení po spoje, které nelze vytvořit.
keywords: problém, chyba, nefunguje, nápověda, oprava, hlášení, odmítnuto, webgl, prázdné, varování, nelze, potíž
from: f8c3b2b1
---

Většina odmítnutí je vysvětlena ve stavovém řádku u spodního okraje obrazovky nebo na kartě {{ui:Problémy}}. Nejdříve si je přečtěte. Níže uvedená hlášení jsou citována tak, jak je DetailCraft zobrazuje.

## Chybí 3D zobrazení

**"Tento prohlížeč nemohl spustit 3D grafiku (WebGL). Model, zprávy a exporty stále fungují."**

Prohlížeč nemohl spustit WebGL, 3D grafiku, kterou DetailCraft vykresluje.

1. Aktualizujte prohlížeč na nejnovější verzi.
2. Zapněte hardwarovou akceleraci a restartujte prohlížeč (viz níže).
3. Aktualizujte ovladač grafiky, nebo zkuste jiný prohlížeč. Vzdálené plochy a virtuální počítače často WebGL nemají.
4. Mezitím můžete pracovat dál: umísťujte prvky pomocí formuláře {{ui:Přidat podle os}}, čtěte zprávy a exportujte. Jen kliknutí do zobrazení vyžaduje WebGL.

:::chromium
Chcete-li zapnout hardwarovou akceleraci, otevřete **Nastavení, Systém** a zapněte **Použít hardwarovou akceleraci, je-li k dispozici**, pak prohlížeč restartujte.
:::

:::firefox
Chcete-li zapnout hardwarovou akceleraci, otevřete **Nastavení, Obecné, Výkon**, odznačte **Použít doporučená nastavení výkonu** a zaškrtněte **Použít hardwarovou akceleraci, je-li k dispozici**. Restartujte Firefox.
:::

:::safari
Safari má WebGL ve výchozím nastavení zapnutý. Pokud se zobrazení stále nespustí, aktualizujte macOS a zkontrolujte, zda WebGL neblokuje některé rozšíření.
:::

Více v [Prohlížeče a počítače](common:browsers).

## Kliknutí do zobrazení nic neudělá

- **Žádný průsečík poblíž kliknutí.** Nástroje pro umísťování přichytávají pouze k průsečíkům mřížky. Kliknutí mimo všechny tečky nic neudělá. Přibližte se, dokud se tečka nerozsvítí.
- **Nástroj je {{ui:Vybrat}} a kliknuli jste do prázdného prostoru.** Výběr se tím zruší.
- **Táhli jste.** Stisk a uvolnění vzdálené o více než několik pixelů je tažení: otáčí nebo posouvá zobrazení.
- **Část je odříznuta.** V {{ui:Půdorys}} a {{ui:Pohled}} je ocel mimo řez skrytá a nelze na ni kliknout. Přepněte na {{ui:3D}}.
- **Průsečík je v chybné úrovni.** V {{ui:3D}} se průsečíky z více úrovní mohou na obrazovce překrývat; kliknutí vezme nejbližší. Použijte {{ui:Půdorys}} nebo {{ui:Pohled}}.

## Hlášení při umísťování

| Hlášení | Co dělat |
|---|---|
| Nad úrovní 2 není žádná úroveň, do které by sloup mohl dosáhnout. Nejdříve přidejte úroveň. | Přidejte úroveň v {{ui:Úrovně}}, nebo klikněte na nižší úroveň |
| Zvolte pro druhý konec jiný průsečík. | Kliknuli jste dvakrát na stejný bod |
| Oba konce jsou stejný bod. | V {{ui:Přidat podle os}} jsou volby "Od" a "Do" stejné |
| Přidejte osy vlevo, abyste mohli umísťovat prvky. | Model nemá osy v jednom směru |
| Neznámý profil "…" | Profil není v katalogu ani mezi vlastními profily modelu. Vyberte jeden ze seznamu |
| Zadejte číslo. | Pole pro číslo je prázdné nebo obsahuje text |

## Spoje nelze vytvořit

### "Tento nosník nekončí na ose sloupu."

Koncové plechy vyžadují, aby konec nosníku ležel přesně na ose svislého sloupu, mezi jeho spodní a horní hranou (v toleranci 1 mm). Zkontrolujte {{ui:Konce (x, y, z mm)}} nosníku a polohu sloupu.

### "Tento nosník se stýká se stojinou sloupu nebo pod úhlem"

Nebo v {{ui:Problémy}}: "Nosníky napojené do stojiny sloupu ještě nejsou hotové: otočte sloup o 90° nebo použijte jiný spoj."

Nosník se napojuje do stojiny sloupu. Vyberte sloup, nastavte {{ui:Natočení (°)}} na 90 a zkuste to znovu. Šikmé spoje ještě nejsou hotové.

### "Koncové plechy se vytvářejí jen pro vodorovné nosníky (tento nosník je šikmý)."

Oba konce nosníku musí být ve stejné výšce.

### "Koncové plechy vyžadují, aby byl nosník v základní poloze (natočení 0)."

Nastavte {{ui:Natočení (°)}} nosníku zpět na 0.

### "Koncové plechy vyžadují nosník I-profilu." / "Koncové plechy vyžadují sloup I-profilu."

Koncové plechy přijímají jen I-profily (W, IPE, HEA, HEB nebo vlastní I).

### "Konec nosníku už neleží na ose sloupu."

Po přidání spoje jste přesunuli nosník nebo sloup. Vraťte je zpět, nebo spoj smažte.

### "Spoje tento prvek zkrátí na nulu."

Spoje na obou koncích zkrátí prvek více, než je jeho délka, například velmi krátký nosník mezi dvěma hlubokými sloupy. Zkontrolujte konce prvku a tloušťku plechu.

### "Žádné další podobné spoje … nemají spoj."

{{ui:Podobné}} kopíruje jen na spoje se stejným profilem nosníku, stejným profilem sloupu a stejným druhem spoje (nosník do pásnice), které ještě nemají spoj.

### "Oba konce už mají spoje." / "Tento sloup už má patní plech."

Chcete-li jej změnit, vyberte stávající spoj, nebo jej nejprve smažte.

## Upozornění na kartě Problémy

Upozornění nebrání vytvoření spoje nebo základu; vyzývají vás ke kontrole. Upozornění na okraje a rozteče používají minima z tabulky 3.3 normy EN 1993-1-8 (okraj 1.2 × otvor, rozteč 2.2 × otvor, vzdálenost řad 2.4 × otvor). Pokud váš projekt používá jiná pravidla, upozornění nemusí platit; DetailCraft spoje nenavrhuje.

"otvor je mimo konec dílu" znamená, že x otvoru je menší než 0 nebo větší než délka řezu. Pamatujte, že x se měří od začátku řezu, až poté, co spoje díl zkrátí.

## Změny základů jsou odmítnuty

| Hlášení | Co dělat |
|---|---|
| Krytí ponechává v tomto základu místo pro pruty. | Zvětšete základ, nebo zmenšete krytí |
| Základ je pro dvě vrstvy prutů uvnitř krytí příliš mělký. | Udělejte jej hlubší, nebo zmenšete krytí |
| Startovací pruty se do základu s krytím 75 mm nevejdou. | Méně startérů, těsnější rozestup, nebo větší základ |
| Rozestup prutů musí být 50–1000 mm. | Zadejte rozestup v tomto rozmezí |
| Délka musí být 300–50000 mm. | Rozměry základu mají limity: délka a šířka 300 až 50000, hloubka 150 až 10000 |

## Mřížky a úrovně jsou odmítnuty

| Hlášení | Co dělat |
|---|---|
| Číslované mřížky: zadejte jeden rozestup mezi každou dvojicí os (4). | Počítejte mezery: pět os potřebuje čtyři rozestupy |
| Písmenné mřížky: rozestupy musí být kladné milimetry. | Žádné nuly, záporné hodnoty ani text |
| Číslované mřížky: popisky os musí být různé. | Dvě osy mají stejný popisek |
| Nejvýše 60 os v každém směru. | Rozdělte model |
| Ponechte alespoň jednu úroveň. | Odstranili jste všechny řádky úrovní |
| Každá úroveň potřebuje název. / Dvě úrovně se jmenují "…". | Dejte každé úrovni jiný název |

## Otevření souboru selže

| Hlášení | Příčina |
|---|---|
| DetailCraft otevírá jen své modely (.detailcraft.json). Import IFC ještě není hotový. | Soubor není soubor `.json` |
| Toto není model DetailCraft (není JSON). | Soubor je poškozen, nebo jde o jiný JSON |
| Toto není model DetailCraft. | Soubor JSON z jiného programu |
| Tento model uložil novější DetailCraft (formát 2). | Otevřete jej v novějším DetailCraft, který jej uložil |
| Tento soubor je příliš velký na model DetailCraft. | Více než 50 MB |

Pokud se soubor otevře s upozorněními typu "2 prvky nebyly platné a byly vynechány.", zbytek modelu je v pořádku. Původní soubor nepřepisujte, dokud nezkontrolujete, co bylo vynecháno.

## Exporty

| Hlášení | Příčina |
|---|---|
| Zatím není co exportovat. | {{ui:IFC}} s prázdným modelem |
| Pro zápis souborů NC nejsou žádné díly I-profilu ani plechu. | V modelu jsou jen U-profily, úhelníky nebo trubky |
| Nezapsáno (zatím jen I-profily a plechy): … | Tyto značky nejsou I-profily ani plechy; ostatní byly zapsány |
| Žádné základy, takže není co rozvrhnout do prutů. | {{ui:Ohýbání}} bez základů |
| … znak(y) mimo písmo PDF vytištěny jako "?". | Název modelu nebo jakost obsahuje znaky, které písmo PDF nemá |

{{ui:Dílenský výkres}} je šedý: model zatím nemá žádné díly.

## Stahování se nezobrazuje

Každé uložení a export je stažení v prohlížeči. Zkontrolujte seznam stažených souborů v prohlížeči. Pokud se prohlížeč před stažením několika souborů zeptá, nebo blokuje stahování z tohoto webu, povolte je. V Safari zkontrolujte tlačítko stahování na panelu nástrojů.

## Klávesy nic nedělají

- Kurzor je v textovém nebo číselném poli: klávesy nástrojů a {{key:Delete}} se tam ignorují, abyste mohli psát. Stiskněte {{key:Tab}} nebo klikněte do zobrazení.
- Je otevřen dialog: nejdříve jej zavřete.
- Klávesnici má prohlížeč (například adresní řádek): klikněte dovnitř DetailCraft.
- {{key:Ctrl+Shift+F}} používá Control i na Macu.

## Problémy v režimu offline

Tlačítko {{ui:Uložit pro offline}} na liště aplikace ukazuje, v jakém stavu je offline kopie. Jak ukládání funguje: [Práce offline](common:offline).

| Tlačítko zobrazuje | Co to znamená | Co dělat |
|---|---|---|
| {{ui:Uložit pro offline}} | V tomto prohlížeči zatím není offline kopie | Zvolte to, když jste online |
| Ukládání 5 z 20 | Ukládání probíhá | Počkejte na {{ui:Připraveno offline}}; nechte kartu otevřenou |
| {{ui:Připraveno offline}} | DetailCraft, jeho 3D zobrazení, všechny exporty a tato nápověda fungují bez připojení | Nic. Kliknutím získáte {{ui:Uložit znovu (získat nejnovější verzi)}} nebo {{ui:Odebrat offline kopii}} |
| {{ui:Nepodařilo se uložit}} | Některé soubory se nestáhly | Zkontrolujte připojení a kliknutím to zkuste znovu |
| {{ui:Offline není dostupné}} | Toto okno nemůže uchovat offline kopii: soukromé okno a některé spravované počítače to blokují | Použijte běžné okno, nebo pracujte online |

Pokud jste offline a tlačítko nezobrazuje {{ui:Připraveno offline}}, nenačítejte stránku znovu ani kartu nezavírejte: co se načetlo, dál funguje. Model uložte pomocí {{key:Mod+S}} a počkejte, až budete zase online.

## Neuložená práce

Pokud se prohlížeč zeptá, zda chcete opustit stránku, DetailCraft má neuložené změny. Zvolte zůstat a poté stiskněte {{key:Mod+S}}. DetailCraft nedokáže model obnovit poté, co je karta zavřena.

## Stále nefunguje

Zapište, co jste udělali, a přesné hlášení, a napište nám přes [stránku podpory](https://getcadcraft.com/support).
