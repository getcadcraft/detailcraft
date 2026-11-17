---
title: Pridanie otvorov a vykrojení
summary: Zadajte otvory do stojín, pásnic a dosiek a vykrojte pásnice na konci nosníka, merané od rezaného konca dielca.
keywords: otvor, otvory, otvor pre skrutku, vykrojenie, zárez, rez, vykrojovanie, vŕtanie, prebíjanie, otvor v stojine, otvor v pásnici
from: 33d12398
---

Otvory a vykrojenia sa zadávajú podľa polohy. Patria prvku a pohybujú sa s ním.

Otvory vytvorené spojmi (čelné dosky, pätné dosky) sa pridávajú automaticky; nezadávate ich. Sú uvedené ako "… otvory zo spojov (upravte spoj)".

## Odkiaľ sa polohy merajú

- **x** ide pozdĺž dielca od jeho **rezaného začiatku**: začiatočný koniec po každom spoji, ktorý ho odrezal. Takže x = 0 je skutočný koniec ocele, nie bod mriežky.
- **y** sa meria naprieč plochou od stredu prierezu:
   - na **stojine**: nahor (kladne) alebo nadol od polovice výšky;
   - na **pásnici** alebo **doske**: naprieč šírkou, od stredovej čiary.
- Začiatok prvku je prvý bod, na ktorý ste klikli pri umiestňovaní. Riadky {{ui:Konce (x, y, z mm)}} ukazujú, ktorý koniec je ktorý.

## Pridanie otvoru

1. Vyberte prvok.
2. V poli {{ui:Otvory}} na paneli {{ui:Vlastnosti}} zvoľte {{ui:Plocha}}: {{ui:Stojina}}, {{ui:Horná pásnica}} alebo {{ui:Dolná pásnica}} (pre I-profil, U-profil alebo obdĺžnikovú rúrku) alebo {{ui:Plocha dosky}} (pre dosku).
3. Zadajte {{ui:x pozdĺž (mm)}}, {{ui:y naprieč (mm)}} a {{ui:Priemer (mm)}}. Formulár začína s x 100, y 0, priemerom 22.
4. Zvoľte {{ui:Pridať otvor}}.

Stavový riadok hlási "Otvor bol pridaný. x je od rezaného začiatku; y od stredu prierezu (stojina: nahor, pásnica/doska: naprieč)." Otvor sa objaví v zozname a v pohľade ako tmavá zátka cez plochu.

Ak chcete otvor odstrániť, zvoľte × pri ňom v zozname.

Uholníky a okrúhle rúry zatiaľ otvory neprijímajú: ich pole {{ui:Otvory}} to uvádza.

:::note
V 3D pohľade sú otvory kreslené ako tmavé zátky, nie ako vyrezané cez oceľ. Sú to skutočné otvory v súboroch NC, na dielenských výkresoch a pri exporte IFC.
:::

Otvor, ktorého x je za niektorým koncom dielca, sa zobrazí na karte {{ui:Problémy}} ako "otvor je mimo konca dielca".

## Pridanie vykrojenia

Vykrojenia sú pre I-profily: na jednom konci odrežú hornú alebo dolnú pásnicu (a tú hĺbku stojiny), aby nosník prešiel okolo iného prvku.

1. Vyberte prvok I-profilu.
2. V poli {{ui:Vykrojenia}} zvoľte {{ui:Koniec}} ({{ui:Začiatok}} alebo {{ui:Koniec}}) a {{ui:Strana}} ({{ui:Zhora}} alebo {{ui:Zdola}}).
3. Zadajte {{ui:Dĺžka (mm)}} (pozdĺž nosníka od toho konca) a {{ui:Hĺbka (mm)}} (nadol od hornej hrany alebo nahor od dolnej). Formulár začína so 100 x 40.
4. Zvoľte {{ui:Pridať vykrojenie}}.

Pohľad zobrazuje vykrojenie vyrezané z ocele. Zoznam uvádza napríklad "Zhora na začiatku: 100 x 40". Odstráňte ho tlačidlom ×.

Vykrojenia sú hranaté: vnútorný roh zatiaľ nemá polomer.

## Ako otvory a vykrojenia ovplyvňujú označenia

Dva dielce dostanú rovnaké označenie dielca, iba ak sa ich otvory a vykrojenia zhodujú v rámci 1 mm, pričom sa uvažuje, že dielec môže byť otočený naopak. Pridanie otvoru jednému nosníku zo skupiny mu dá nové označenie. Pozri [Pravidlá označení](topic:mark-rules).
