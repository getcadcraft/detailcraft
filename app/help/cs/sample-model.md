---
title: Prozkoumání ukázkového rámu
summary: Otevřete vestavěný dvoutrámový rám a seznamte se s tím, co DetailCraft vytváří, od označení po soubory NC.
keywords: ukázka, příklad, demo, rám, poznat, prohlídka, zkusit
from: 5c5944dd
---

Ukázkový rám je malý, kompletní model: každý druh věci, který DetailCraft vytváří, se v něm vyskytuje alespoň jednou. Je to nejrychlejší způsob, jak se naučit aplikaci a otestovat export, než se na něj spolehnete.

## Otevření

1. Zvolte {{ui:Ukázka}} ve skupině {{ui:Soubor}}.
2. Pokud má váš aktuální model neuložené změny, zvolte {{ui:Nejdřív uložit}} nebo {{ui:Zahodit změny}}.
3. Stavový řádek hlásí: „Ukázkový rám: 6 sloupů s patními plechy, 4 nosníky s čelními deskami, ztužidlo, 7 patek s výztuží."

Ukázka se otevře jako nový model nazvaný „Ukázkový rám". Nic dalšího nemění a nemá nic k vrácení zpět.

## Co v něm je

- **Osy** 1, 2, 3 po 6000 mm a A, B po 7000 mm. **Úrovně**: Úroveň 1 na 0 a Úroveň 2 na 4000.
- **Šest sloupů**, W12x50, od Úrovně 1 po Úroveň 2 v každém průsečíku, každý na patním plechu 25 mm se čtyřmi kotevními šrouby.
- **Čtyři nosníky**, W16x26, na Úrovni 2 podél os A a B, horní hrana oceli na úrovni, s čelní deskou přišroubovanou zarovnaně na obou koncích (celkem osm).
- **Jedno ztužidlo**, HSS4x4x1/4, od A/1 na Úrovni 1 nahoru k A/2 na Úrovni 2.
- **Šest patek**, 2000 x 2000 x 600, pod každým sloupem, s háčkovou spodní sítí v obou směrech.
- **Jedna další patka** vedle rámu, 2400 x 1800 x 600, se šesti háčkovými startovacími pruty vyčnívajícími pro betonový pilíř.

## Co zkusit

1. Klikněte na nosník. Přečtěte jeho {{ui:Označení dílu}}, {{ui:Sestava}}, {{ui:Délka řezu}} a {{ui:Zkrácení}}: délka řezu je kratší než rozteč os 6000 mm, protože každá čelní deska zkrátí nosník o polovinu hloubky sloupu plus tloušťku plechu.
2. Klikněte na sloup. Pod {{ui:Otvory}} je seznam otvorů, které vytvořily čelní desky v jeho přírubě („8 otvorů z připojení"; střední sloupy mají 16, jednu sadu v každé přírubě).
3. V seznamu {{ui:Označení dílů}} vlevo vidíte, že všechny čtyři nosníky sdílejí jedno označení: jsou to tentýž kus oceli. Rohové sloupy také sdílejí označení, i když jejich otvory směřují opačně, protože sloup otočený z konce na konec je tentýž kus. Střední sloupy s otvory v obou přírubách dostanou jiné označení.
4. Klikněte na čelní desku (nebo na jeden z jejích šroubů). Panel {{ui:Vlastnosti}} ukazuje nastavení plechu, šroubů a svaru, šrouby, které vytváří (s délkou odvozenou z upnutí), a případná varování o vzdálenosti od okraje.
5. Otevřete kartu {{ui:Kusovník}}. Díly, sestavy (nosník se svými dvěma čelními deskami je jedna sestava) a šrouby a kotevní tyče jsou vypsány s hmotnostmi. Měli byste vidět šest označení dílů: c1 (dva střední sloupy) a c2 (čtyři rohové sloupy), oba W12x50 po 3975 mm; b1, čtyři nosníky W16x26 po 5650 mm; br1, ztužidlo; p1, osm čelních desek PL20x180; a p2, šest patních plechů PL25x400. Spojovací prostředky jsou 64 šroubů 20 x 70 A325 a 24 kotevních tyčí 20 x 575.
6. Otevřete kartu {{ui:Výkaz ohybů}}. Šest shodných patek sdílí označení výztuže; patka pilíře přidá své vlastní.
7. Klikněte na ztužidlo a podívejte se do skupiny {{ui:Výstup}}: {{ui:Dílenský výkres}} je neaktivní, protože dílenské výkresy zatím pokrývají jen I-profily a plechy.
8. Zvolte {{ui:Soubory NC}}. Zip obsahuje soubor pro každé označení I-profilu a plechu; stavový řádek uvádí označení ztužidla jako nezapsané.
9. Zvolte {{ui:IFC}} a otevřete soubor v libovolném prohlížeči IFC, abyste ověřili, jak jej čte váš další software.

## Použití jako výchozí bod

Ukázka je běžný model. Změňte ji, pak ji přejmenujte v poli {{ui:Název}} a uložte ji pod novým názvem pomocí {{key:Mod+S}}.
