---
title: Kontrola betonových prvků a seismická zatížení
summary: Nastavte výztuž betonových nosníků a sloupů, zkontrolujte je podle ACI 318-19, vytvořte ekvivalentní vodorovné síly podle ASCE 7-22 na tuhých podlažích a sledujte mezipodlažní posun. Pomůcka pro kontrolu inženýrem.
keywords: beton, železobeton, ACI 318, ACI 318-19, výztuž, nosník, sloup, smyk, třmínky, seismika, zemětřesení, ekvivalentní vodorovná síla, ELF, ASCE 7-22, posun, mezipodlažní posun, podlaží, tuhá deska, hmotnost podlaží, vytížení, využití, konstrukční, inženýr
from: 94d3001d
---

Bloky {{ui:Concrete members}} a {{ui:Seismic loads}} na kartě {{ui:Analysis}} kontrolují železobetonové nosníky a sloupy a vytvářejí vodorovné síly zemětřesení na podlažích rámu. Oba navazují na běh karty {{ui:Analysis}} a ukládají se spolu s modelem.

:::warning
Výsledky jsou **určeny pro kontrolu inženýrem**: pomůcka, dokud je neprohlédne inženýr. Kontroly betonu používají síly prvního řádu, s tím že sloup v rámu bez vybočení, který označíte, se navrhuje na zvětšený moment, bez zvětšení vlivem vybočení, bez návrhu kroucení, bez seismického detailování (kapitola 18 ACI) a bez detailování třmínků. Seismická zatížení nezahrnují součinitel redundance, svislý seismický účinek, zesílení od kroucení ani účinky P-delta. Zatížení větrem ještě není hotovo.
:::

## Nakreslení prvků

Betonové prvky kreslete jako obdélníky: profil {{ui:Plate}} jako `PL400x400` pro sloup a `PL300x600` pro nosník dává průřez. Sloupy a nosníky se umísťují jako kterýkoli jiný člen.

## Nastavení průřezů

Blok {{ui:Concrete members}} vypisuje každý průřez, který prvky používají. U těch, které jsou beton, stiskněte {{ui:Set up as concrete…}}. DetailCraft přečte z nakresleného profilu šířku **b** (podél vlastní osy y prvku) a hloubku **h** (podél z) a pak požádá o:

- **krytí** ke středu prutů a **horní**, **spodní** a **boční** pruty (kolik a jakého průměru) u nosníku, nebo **kostru sloupu** (pruty podél b a podél h, jaký průměr, spirálové třmínky) u sloupu;
- **třmínky**: počet větví, průměr a rozteč;
- jak se prvek **chová**: jako nosník, jako sloup, nebo podle svých sil (svislý prvek nebo ten, který nese více než 0.10 f′c Ag, je sloup).

Nastavte f′c, mez kluzu prutů fy a mez kluzu třmínků fyt (nejvýše 420 MPa se počítá pro smyk), K a zda je rám nad nimi s vybočením, nebo bez něj. Průřez nastavený jako beton se analyzuje jako beton: E = 4700 √f′c, 2400 kg/m³, a standardně s **průřezy s trhlinami** (sloupy 0.70 Ig, nosníky 0.35 Ig; ACI 318-19 tab. 6.6.3.1.1(a)). Zvolte {{ui:Gross sections}}, chcete-li to vypnout.

## Vytvoření kombinací a kontrola

Zadejte zatěžovacím případům jejich druh a pak zvolte {{ui:Make combinations}}: ACI 318-19 přebírá pevnostní kombinace z ASCE 7 (§5.3.1). Stiskněte {{ui:Check concrete}} a každý prvek dostane vytížení, vybarvené na modelu stejně jako ocelové kontroly: ohyb a minimální výztuž (22.2, 9.6.1.2), deformace řízená tahem (9.3.3.1), smyk s třmínky (22.5, 9.6.3), rozteč třmínků a normálová síla s momentem u sloupů (22.4, s Breslerovou metodou pro dvouosý ohyb). Prvek, u něhož se nakreslený průřez liší od zadaného b × h, je označen jako *částečně zkontrolován*, stejně jako štíhlý sloup nebo kroucení nad hranicí: ty se nenavrhují.

Prvky nad jejich únosností jsou vypsány v {{ui:Problems}}; přijměte jeden s důvodem, nebo upravte průřez.

## Podlaží a seismická zatížení

Podlaží je úroveň, kde rám drží pohromadě tuhá deska (**tuhý diafragma**). V bloku {{ui:Seismic loads}} stiskněte {{ui:Find floors}}: vezme úrovně, kde se sejdou dva nebo více nosníků. Pak dejte každému podlaží jeho **seismickou tíhu**, zadanou nebo načtenou: {{ui:Take weights from cases}} sečte svislá zatížení případů, kterým zadáte součinitel (stálé zatížení má 1; u užitného případu skladování nebo sněhu na plochou střechu přidejte 0.25, jak žádá ASCE 7-22 12.7.2). Svislé zatížení každého uzlu jde do podlaží na něm nebo nad ním, takže sloup mezi dvěma podlažími dá každému polovinu své tíhy.

Vyplňte návrhové hodnoty: SDS, SD1, S1, R, Ie, Cd, TL, konstrukční systém (pro periodu) a kategorii rizika. {{ui:Make seismic cases}} pak vypočte periodu z výšky budovy (12.8.2.1), základní smyk V = Cs W (12.8.1), rozdělí jej po podlažích (12.8.3) a zapíše čtyři zatěžovací případy, ve směrech X a Y, každý s 5 % nahodilým kroucením na obě strany (12.8.4.2). Síly v patrech a kontrola mezipodlažního posunu (12.8.6, tabulka 12.12-1, posun Cd δxe / Ie proti 0.020 hsx) se objeví po běhu; posun nad svou mezí je také problém. Stiskněte {{ui:Make combinations}} znovu, aby se seismické případy dostaly do kombinací.

**Perioda z analýzy.** Přibližná perioda Ta vychází z výšky budovy. Když jste spustili analýzu se seismickými případy, {{ui:Take the period from the analysis}} načte, jak se každé podlaží posunulo pod silami, a vypočte periodu Rayleighovou metodou, T = 2π √(Σ w δ² / (g Σ f δ)), zvlášť pro X a zvlášť pro Y; seismické případy se pak vytvoří znovu s ní. Použitá perioda nikdy není větší než Cu·Ta (ASCE 7-22 12.8.2), takže měkký model nemůže snížit základní smyk pod tuto hodnotu. Periodu vezměte znovu po druhém běhu: ustálí se během jednoho nebo dvou kroků. Odškrtněte {{ui:Period from the analysis}}, chcete-li se vrátit k Ta.

**Štíhlé sloupy (ACI 318-19 6.6.4.5).** U rámu, který označíte jako bez vybočení, se sloup, jehož k·ℓu/r je nad 34 + 12·M1/M2 (nejvýše 40), navrhuje na zvětšený moment Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² s (EI)eff = 0.4 Ec Ig / (1 + βdns), a minimální moment Pu (15 + 0.03 h). βdns (zpočátku 0.6) je podíl návrhové normálové síly, který působí trvale: zadejte vlastní hodnotu. Sloup, jehož Pu dosáhne 0.75 Pc, neprojde vlastní kontrolou. Zpráva vypíše čísla každého štíhlého sloupu. V rámu **s vybočením** zůstává štíhlý sloup "částečně zkontrolován": jeho zvětšení vyžaduje analýzu druhého řádu, která ještě není hotová.

**Desky.** Když model obsahuje plechy, blok {{ui:Výztuž desek}} převezme momenty desek ze všech pevnostních kombinací a podle pravidla Wood–Armer (ohyb a kroucení dohromady) spočte, kolik oceli každá vrstva potřebuje na metr: dole a nahoře, v x a v y. Zadáte tloušťku, krytí a pruty; tabulka ukáže potřebné proti zadaným a jednosměrný smyk proti φVc, a vrstva, která nevyhoví, je problém s odkazem na svůj článek. Průhyb, probíjení u sloupů a ztužující pruty u otvorů nejsou zahrnuty a moment nad podporou konverguje pomalu u čtyřuzlových desek.

Každé podlaží, které uvedete, se v analýze stane tuhou deskou: jeho nosníky nepřenášejí normálovou sílu z pohybu podlaží. Export CraftScript není určen pro model s podlažími.

## Zpráva

{{ui:Report (PDF)}} a {{ui:Report (CSV)}} získají betonové tabulky (předpoklady, vytížení podle prvků, každý článek), seismické parametry a základní smyk, síly na podlažích a tabulku posunů.
