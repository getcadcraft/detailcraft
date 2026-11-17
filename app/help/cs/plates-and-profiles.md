---
title: Umístění plechů a přidání vlastních profilů
summary: Umísťujte volné plechy podle tloušťky a šířky a definujte vlastní průřezy I, U, úhelník, trubku nebo plochou tyč.
keywords: plech, plochá tyč, vlastní profil, uživatelský profil, parametrický, průřez, tvar, příčný řez, pl
from: c24c3b51
---

## Umístění plechu

Plech se umísťuje jako nosník: vede mezi dvěma průsečíky, šířka je napříč a tloušťka nahoru.

1. Vyberte {{ui:Plech}} ve skupině {{ui:Umístit}}, nebo stiskněte {{key:P}}.
2. Na panelu {{ui:Vlastnosti}} nastavte {{ui:Tloušťka (mm)}} a {{ui:Šířka (mm)}}. Výchozí je 20 x 200 v A36.
3. Případně nastavte {{ui:Materiál}} a {{ui:Natočení (°)}}. Natočení 90 postaví plech na hranu.
4. Klikněte na dva průsečíky, nebo použijte formulář {{ui:Přidat podle os}}.

Název profilu plechu se zapisuje `PL<thickness>x<width>`, například PL20x200. Jeho délka je vzdálenost mezi oběma body.

Rozměry umístěného plechu změníte tak, že ho vyberete a změníte {{ui:Tloušťka (mm)}} nebo {{ui:Šířka (mm)}}.

Plechy, které umístíte, jsou samostatné díly (označení p, sestava P). Koncové plechy a patní plechy vytvořené spoji jsou také plechy, ale měníte je přes jejich spoj; viz [Koncové plechy](topic:end-plates).

## Přidání vlastního profilu

Když potřebný průřez v katalogu není, vytvořte ho podle jeho rozměrů. Vlastní profil patří k modelu a ukládá se s ním. Chcete-li ho používat v každém novém modelu, uložte ho do {{ui:Moje profily}}, popsáno níže v části "Ponechání profilu pro nové modely".

1. V panelu {{ui:Model}} vlevo otevřete {{ui:Vlastní průřez}}.
2. Napište {{ui:Název}}, například `W8x18-custom` nebo `RHS 120x80x5`. Nesmí to být název z katalogu ani název vypadající jako název plechu.
3. Zvolte {{ui:Tvar}}: {{ui:I-profil}}, {{ui:U-profil}}, {{ui:Rovnoramenný úhelník}}, {{ui:Obdélníková trubka}}, {{ui:Kruhová trubka}} nebo {{ui:Plochá tyč}}.
4. Vyplňte rozměry, které se objeví, všechny v milimetrech:

| Tvar | Rozměry |
|---|---|
| I-profil | Výška d, šířka pásnice bf, stojina tw, pásnice tf, poloměr zaoblení r (může být 0) |
| U-profil | Výška d, šířka pásnice bf, stojina tw, pásnice tf (ostré rohy) |
| Rovnoramenný úhelník | Šířka b (každé rameno), tloušťka t |
| Obdélníková trubka | Výška h, šířka b, tloušťka t (vnější poloměr rohu 2t) |
| Kruhová trubka | Průměr D, tloušťka t |
| Plochá tyč | Šířka b, tloušťka t |

5. Nechte zaškrtnuté {{ui:Ponechat v Moje profily}}, aby byl v každém novém modelu (viz níže), nebo ho odškrtněte, aby zůstal jen v tomto modelu.
6. Zvolte {{ui:Přidat průřez}}.

Stavový řádek hlásí "Profil "…" přidán; je v každém seznamu profilů pod položkou Vlastní." Objeví se v seznamu pod formulářem a na konci každého seznamu {{ui:Profil}}.

DetailCraft kontroluje, zda tvar může existovat. Uvidíte zprávy jako "Stojina a pásnice se nevejdou do výšky a šířky.", "Poloměr zaoblení je pro pásnici příliš velký." nebo "Stěna je příliš tlustá." Opravte čísla a znovu zvolte {{ui:Přidat průřez}}.

### Co vlastní profily dostanou

- Hmotnost na metr z plochy × 7850 kg/m³ (katalogové velikosti používají publikovanou hmotnost).
- Vlastní I-profily přijímají otvory, vybrání, koncové plechy, soubory NC a výrobní výkresy jako katalogové I-profily.
- Vlastní ploché tyče se chovají jako plechy.
- Vlastní U-profily a trubky přijímají otvory; úhelníky a kruhové trubky zatím ne.

Vlastní profil v modelu nelze po přidání upravit ani odebrat (pokud jste se spletli, použijte hned {{key:Mod+Z}}). Opravenou verzi dejte novým názvem.

## Ponechání profilu pro nové modely

{{ui:Moje profily}} pod formulářem je váš vlastní seznam vlastních profilů. Uchovává se v tomto prohlížeči, na tomto počítači, ne v souboru modelu ani na vašem účtu.

- Profil přidaný se zaškrtnutým {{ui:Ponechat v Moje profily}} se dostane do seznamu. Každý nový model, včetně toho, který DetailCraft otevře při spuštění, začíná se všemi těmito profily v seznamech profilů.
- Profil, který už je v modelu, ale v seznamu chybí, má vedle sebe tlačítko {{ui:Ponechat}}.
- V modelu, který některý z vašich profilů nemá (například ve starším souboru), zvolte {{ui:Použít zde}}, aby se přidal.
- {{ui:Odebrat}} vyjme profil ze seznamu. Modely, které ho už používají, si ponechají vlastní kopii.
- Model, který otevřete, si ponechá profily uložené ve svém souboru. Otevření souboru váš seznam nikdy nemění.
- Název, který je už v seznamu s jinými rozměry, se odmítne: dejte novému profilu jiný název.
- Vymazání údajů webu v prohlížeči, nebo použití jiného prohlížeče či počítače, začne s prázdným seznamem. Soukromé okno ho nemůže uchovat; aplikace to oznámí.
