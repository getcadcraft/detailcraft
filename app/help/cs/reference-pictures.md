---
title: Vložení zkopírované oblasti jako referenčního obrázku
summary: Zkopírujte část PDF listu v MarkupCraftu a vložte ji do DetailCraftu ve skutečné velikosti, ležící na úrovni pod ocelí, a modelujte nad ní.
keywords: obrázek, referenční obrázek, podklad, pozadí, kopírovat oblast, markupcraft, pdf, obkreslení, skutečná velikost, měřítko, průhlednost, překryv
from: 0c48445f
---

Nástroj MarkupCraftu Kopírovat oblast zkopíruje část listu jako obrázek, který zná svou velikost. Vložte jej do DetailCraftu a leží vodorovně na úrovni, ve skutečné velikosti, pod mřížkou a ocelí, takže můžete prvky umístit nad půdorys z výkresů.

## Vložení

1. V MarkupCraftu zkopírujte oblast pomocí {{ui:Více}} › {{ui:Zkopírovat oblast stránky…}}, pak {{ui:Kopírovat}} (nebo {{ui:Zkopírovat jako překryv}}, který stránku zprůhlední).
2. V DetailCraftu (ve stejném prohlížeči) stiskněte {{key:Mod+V}} nebo zvolte {{ui:Vložit}}.

Obrázek se vloží doprostřed mřížky na úroveň zobrazenou v {{ui:Půdorys}} (ve 3D nebo v pohledu na nejnižší úrovni) a bude vybrán. Stavový řádek ukazuje jeho velikost.

- **Skutečná velikost:** pokud měl list měřítko výkresu, jeden pixel se vykreslí jako délka, kterou na výkresu ukazuje.
- **Velikost na papíře:** pokud list měřítko neměl, obrázek má velikost oblasti na papíře a stavový řádek to uvádí. Zadejte nové **mm na pixel** v {{ui:Vlastnosti}} a změňte měřítko.

Oblast zkopírovaná jako překryv začne s průhledností, se kterou byla zkopírována.

{{key:Mod+V}} vloží to, co jste zkopírovali naposledy: oblast z MarkupCraftu, nebo prvky a patky zkopírované v DetailCraftu. Pokud byl do schránky po oblasti zkopírován jiný obrázek (z jiného programu), nic se nevloží; oblast zkopírujte znovu.

## Přesun, změna a smazání

- Kliknutím na obrázek jej vyberte (co je před ním, se vybere jako první). Modrý obrys znamená, že je vybrán.
- Přetažením jej přesunete po úrovni. Jeho střed a rohy se přichytí na průsečíky mřížky.
- V {{ui:Vlastnosti}} zadejte, kam má přijít jeho střed (x, y), úroveň, na které leží (z), jeho **mm na pixel** a jeho **průhlednost**.
- {{key:Delete}} nebo {{ui:Smazat}} jej odstraní.

Každé vložení, přesun, změna a smazání je jeden krok: {{key:Mod+Z}} jej vrátí zpět.

Obrázek se uloží do souboru modelu, takže se otevře spolu s modelem. Je jen referenční: nezahrnuje se do výkresů, exportů, kusovníku ani kopie.
