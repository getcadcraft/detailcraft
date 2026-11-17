---
title: Umiestnenie plechov a pridanie vlastných profilov
summary: Umiestnite voľné plechy podľa hrúbky a šírky a definujte vlastné prierezy I, U, uholníky, rúrky alebo ploché ocele.
keywords: plech, plochá oceľ, vlastný profil, používateľský profil, parametrický, prierez, tvar, pl
from: c24c3b51
---

## Umiestnenie plechu

Plech sa umiestňuje ako nosník: vedie medzi dvoma priesečníkmi, so šírkou naprieč a hrúbkou nahor.

1. V skupine {{ui:Umiestnenie}} vyberte {{ui:Doska}}, alebo stlačte {{key:P}}.
2. V paneli {{ui:Vlastnosti}} nastavte {{ui:Hrúbka (mm)}} a {{ui:Šírka (mm)}}. Predvolené je 20 x 200 z A36.
3. V prípade potreby nastavte {{ui:Materiál}} a {{ui:Otočenie (°)}}. Otočenie o 90 postaví plech na hranu.
4. Kliknite na dva priesečníky, alebo použite formulár {{ui:Pridať podľa mriežky}}.

Názov profilu plechu sa zapisuje ako `PL<thickness>x<width>`, napríklad PL20x200. Jeho dĺžka je vzdialenosť medzi dvoma bodmi.

Ak chcete zmeniť veľkosť umiestneného plechu, vyberte ho a zmeňte {{ui:Hrúbka (mm)}} alebo {{ui:Šírka (mm)}}.

Plechy, ktoré umiestnite, sú vlastné dielce (značka p, zostava P). Čelné dosky a pätné dosky vytvorené spojmi sú tiež plechy, ale meníte ich cez ich spoj; pozri [Čelné dosky](topic:end-plates).

## Pridanie vlastného profilu

Ak potrebný prierez nie je v katalógu, vytvorte ho z jeho rozmerov. Vlastný profil patrí modelu a ukladá sa spolu s ním. Ak ho chcete používať vo všetkých nových modeloch, uložte ho do Moje profily, popísané nižšie v časti "Uloženie profilu pre nové modely".

1. Na ľavom paneli {{ui:Model}} otvorte {{ui:Vlastný profil}}.
2. Zadajte {{ui:Názov}}, napríklad `W8x18-custom` alebo `RHS 120x80x5`. Nesmie to byť názov z katalógu ani nesmie vyzerať ako názov plechu.
3. Zvoľte {{ui:Tvar}}: {{ui:Profil I}}, {{ui:Profil U}}, {{ui:Rovnoramenný uholník}}, {{ui:Obdĺžniková rúrka}}, {{ui:Kruhová rúrka}} alebo {{ui:Plochá oceľ}}.
4. Vyplňte rozmery, ktoré sa zobrazia, všetky v milimetroch:

| Tvar | Rozmery |
|---|---|
| Profil I | Hĺbka d, šírka pásnice bf, hrúbka stojiny tw, hrúbka pásnice tf, polomer zaoblenia r (môže byť 0) |
| Profil U | Hĺbka d, šírka pásnice bf, hrúbka stojiny tw, hrúbka pásnice tf (kolmé rohy) |
| Rovnoramenný uholník | Šírka b (každé rameno), hrúbka t |
| Obdĺžniková rúrka | Výška h, šírka b, hrúbka t (polomer vonkajšieho rohu 2t) |
| Kruhová rúrka | Priemer D, hrúbka t |
| Plochá oceľ | Šírka b, hrúbka t |

5. Ponechajte začiarknuté {{ui:Uložiť do Moje profily}}, aby bol vo všetkých nových modeloch (pozri nižšie), alebo ho odškrtnite, aby zostal iba v tomto modeli.
6. Vyberte {{ui:Pridať profil}}.

Stavový riadok uvedie, že profil "…" bol pridaný; je vo všetkých zoznamoch profilov v časti Vlastné. Zobrazí sa v zozname pod formulárom a na konci každého zoznamu {{ui:Profil}}.

DetailCraft overuje, či tvar môže existovať. Uvidíte hlásenia, napríklad: "Stojina a pásnice sa nezmestia do hĺbky a šírky.", "Polomer zaoblenia je pre pásnicu príliš veľký." alebo "Stena je príliš hrubá." Opravte čísla a znova vyberte {{ui:Pridať profil}}.

### Čo vlastné profily dostanú

- Hmotnosť na meter z plochy × 7850 kg/m³ (rozmery z katalógu používajú uverejnenú hmotnosť).
- Vlastné profily I dostávajú otvory, výrezy, čelné dosky, súbory NC a dielenské výkresy rovnako ako profily I z katalógu.
- Vlastné ploché ocele sa správajú ako plechy.
- Vlastné profily U a rúrky dostávajú otvory; uholníky a kruhové rúrky zatiaľ nie.

Vlastný profil v modeli po pridaní nemôžete upraviť ani odstrániť (ak ste urobili chybu, hneď použite {{key:Mod+Z}}). Opravený profil pomenujte novým názvom.

## Uloženie profilu pre nové modely

{{ui:Moje profily}} pod formulárom je váš vlastný zoznam vlastných profilov. Uchováva sa v tomto prehliadači, na tomto počítači, nie v súbore modelu a nie vo vašom účte.

- Profil pridaný so začiarknutým {{ui:Uložiť do Moje profily}} sa dostane do zoznamu. Každý nový model vrátane modelu, ktorý DetailCraft otvorí pri štarte, začína so všetkými týmito profilmi vo svojich zoznamoch profilov.
- Profil, ktorý je už v modeli, ale nie v zozname, má vedľa seba tlačidlo {{ui:Uložiť}}.
- V modeli, ktorý váš profil nemá (napríklad v staršom súbore), vyberte {{ui:Použiť tu}}, aby ho pridal.
- {{ui:Odstrániť}} odstráni profil zo zoznamu. Modely, ktoré ho už používajú, si ponechajú vlastnú kópiu.
- Model, ktorý otvoríte, si zachová profily uložené vo svojom súbore. Otvorenie súboru váš zoznam nikdy nezmení.
- Názov, ktorý už v zozname je s inými rozmermi, sa odmietne: novému profilu dajte iný názov.
- Vymazanie údajov stránky v prehliadači alebo použitie iného prehliadača či počítača začína s prázdnym zoznamom. Súkromné okno ho nemôže uchovať; aplikácia to uvedie.
