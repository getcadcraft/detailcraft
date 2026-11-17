---
title: Kontroly základů
summary: Kontrolujte patky, spojené patky a základové desky na půdě, kterou popíšete, sedání, pružnou desku na pružinách, skupiny pilot a opěrné zdi. Pomůcka pro inženýra ke kontrole.
keywords: základ, patka, spojená patka, základová deska, sedání, modul podloží, pružiny, okrajový sloup, rohový sloup, únosnost, posun, překlopení, průraz, smyk v jednom směru, ohyb, vývoj, minimální výztuž, skupina pilot, opěrná zeď, ACI 318-19
from: 6961ad52
---

:::warning
Jde o předběžné kontroly pro inženýra k posouzení, nikoli o schválení návrhu. Přípustný tlak na půdu a součinitel tření zadáváte vy: DetailCraft nezná vaši půdu.
:::

Záložka {{ui:Základy}} kontroluje patky v modelu proti zatížením sloupů, která jim zadáte.

## Popis půdy

Zadejte {{ui:Přípustný tlak na půdu}} a {{ui:Součinitel tření základu}}. Obě začínají na 0, což znamená „nezadáno“: kontrola pak tlak zobrazí jako poznámku a neuvede, že vyhovuje. Pro sedání zadejte modul pružnosti půdy {{ui:Es}} (MPa), její Poissonovo číslo a sedání, které připouštíte (zpočátku 25 mm). Pro pružnou desku zadejte modul podloží {{ui:ks}}. Jsou zde také násyp nad patkou, objemová tíha půdy, součinitele bezpečnosti pro posun a překlopení (zpočátku 1.5) a mez kluzu výztuže.

## Zadání zatížení

Každá patka má seznam zatížení sloupů. Použijte {{ui:Přidat zatížení sloupu}} a vyplňte řádek provozního zatížení (pro únosnost, posun a překlopení) a řádek se zatěžovacími součiniteli (pro kontroly pevnosti): svislé zatížení P směrem dolů, vodorovné síly Vx a Vy na horní hraně patky, momenty Mx a My, polohu sloupu na patce a jeho velikost.

Nebo spusťte záložku {{ui:Analýza}} a stiskněte {{ui:Převzít zatížení sloupů z Analýzy}}: každá podpora stojící na patce se stane zatížením sloupu z provozních a zatěžovacích sad, které zvolíte. Kladný My více zatěžuje stranu +x patky; kladný Mx více zatěžuje stranu −y.

## Co se kontroluje

Z provozních zatížení, s vlastní tíhou patky a přidaným násypem:

- **Únosnost:** tlak pod tuhou patkou. Uvnitř střední třetiny je celá základna v kontaktu; vně ní se část základny odlepí a špička je vyšší. Výslednice vně základny neprojde.
- **Posun:** tření krát svislé zatížení proti vodorovné síle.
- **Překlopení:** vzdálenost výslednice od hrany.
- **Sedání:** pružné sedání průměrného tlaku na poloprostoru s modulem, který jste zadali, uprostřed a v rohu (Timoshenkovo a Goodierovo řešení pro pružný obdélník), proti mezi. Je to horní odhad pro tuhou patku a vynechává vrstvu půdy omezené hloubky, úlevu od vytěžené zeminy a konsolidaci. Bez modulu zobrazí tlak jako poznámku.

Z samotných zatěžovacích sil sloupů (ACI 318-19):

- **Ohyb** u líce sloupu, s minimální výztuží (0.0018 pro pruty 420 MPa) a pruty, které jste nakreslili.
- **Smyk v jednom směru** ve vzdálenosti d od líce.
- **Průraz** ve vzdálenosti d/2 kolem každého sloupu, s momentem sloupu. U sloupu blízko okraje je kritický průřez oříznut hranou patky (na třech stranách u okraje, na dvou v rohu; ACI 318-19 22.6.4.1 a menší αs v tabulce 22.6.5.2) a moment k vlastnímu středu průřezu zahrnuje posun zatížení.
- **Vývoj** prutů za lícem sloupu, přímých nebo s háky.
- **Hloubka** nad spodními pruty (150 mm).

Spojená patka nebo základová deska se bere jako tuhá a smyk a moment vycházejí ze statiky řezů přes celou šířku.

## Pružná deska na pružinách

Zaškrtněte {{ui:Analyzovat tuto patku jako pružnou desku na pružinách}}, když patka nese mnoho sloupů a tuhá patka je příliš hrubá. Patka se stane deskou ze čtyřuzlových prvků na lůžku pružin (zadaný {{ui:ks}}, soustředěný do uzlů) a zatížení každého sloupu se rozloží do uzlů jeho vlastní půdorysné plochy. Druhá tabulka uvádí největší tlak na půdu a sedání (a rozdíl mezi největším a nejmenším), ohybový moment v obou směrech s potřebnou výztuží, tah nahoře proti pevnosti prostého betonu (patka nemá horní pruty), smyk v jednom směru ve vzdálenosti d od sloupů a průraz podle tlaku samotných pružin. Síť se zjemňuje, dokud sloupec není tři prvky široký; velká deska trvá několik sekund. Vlastní tíha desky a půda nad ní se vyruší a nejsou zahrnuty.

Každá neúspěšná kontrola je v panelu {{ui:Problémy}} s odkazem na příslušný článek normy.

## Skupiny pilot a opěrné zdi

{{ui:Přidat skupinu pilot}} umístí mříž pilot pod tuhou hlavici: zadejte zatížení a momenty a to, co smí jedna pilota nést v tlaku a v tahu (čísla z návrhu pilot, ne z této záložky). Reakce každé piloty je P/n plus její podíl na momentech (pružná metoda) a kontroluje se největší tlak a případný tah.

{{ui:Přidat opěrnou zeď}} kontroluje konzolovou zeď na rovném zásypu, na metr: aktivní tlak podle Rankina, překlopení kolem paty, posun a tlak pod základem. Pasivní tlak před patou je vynechán. Váš asistent může tytéž kontroly spustit pomocí `pile_group_check` a `retaining_wall_check`.

Skupiny pilot, zdi a přepínač desky se ukládají do souboru modelu a neúspěšná kontrola je v {{ui:Problémy}}.
