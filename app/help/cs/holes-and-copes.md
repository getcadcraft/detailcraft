---
title: Přidání otvorů a výřezů
summary: Zadejte otvory do stojin, pásnic a plechů a vykrojte pásnice na konci trámu, měřeno od řezného konce dílu.
keywords: otvor, otvory, šroubový otvor, výřez, vykrojení, řez, vykrojit, vrtání, děrování, otvor ve stojině, otvor v pásnici
from: 33d12398
---

Otvory a výřezy se zadávají polohou. Patří prvku a pohybují se s ním.

Otvory vytvořené spoji (koncové a patní plechy) se přidávají za vás; nezadáváte je. Jsou uvedeny jako „… otvory ze spojů (upravte spoj)“.

## Odkud se měří polohy

- **x** běží podél dílu od jeho **řezného začátku**: začátku po každém odříznutí spojem. Takže x = 0 je skutečný konec oceli, ne bod mřížky.
- **y** se měří napříč plochou od středu průřezu:
   - na **stojině**: nahoru (kladně) nebo dolů od poloviny výšky;
   - na **pásnici** nebo **plechu**: napříč šířkou, od střední čáry.
- Začátek prvku je první bod, na který jste klikli při umístění. Řádky {{ui:Konce (x, y, z mm)}} ukazují, který konec je který.

## Přidání otvoru

1. Vyberte prvek.
2. V poli {{ui:Otvory}} panelu {{ui:Vlastnosti}} vyberte {{ui:Strana}}: {{ui:Stojina}}, {{ui:Horní příruba}} nebo {{ui:Dolní příruba}} (pro profil I, U nebo obdélníkovou trubku), nebo {{ui:Plocha plechu}} (pro plech).
3. Zadejte {{ui:x podél (mm)}}, {{ui:y napříč (mm)}} a {{ui:Průměr (mm)}}. Formulář začíná s x 100, y 0 a průměrem 22.
4. Zvolte {{ui:Přidat otvor}}.

Stavový řádek hlásí „Otvor přidán. x je od řezného začátku; y od středu průřezu (stojina: nahoru, pásnice/plech: napříč).“ Otvor se objeví v seznamu a v pohledu jako tmavá zátka skrz plochu.

Pro odstranění otvoru zvolte × vedle něj v seznamu.

Úhelníky a kulaté trubky zatím otvory nepřijímají: jejich pole {{ui:Otvory}} to uvádí.

:::note
V 3D pohledu se otvory kreslí jako tmavé zátky, ne jako prořez ocelí. Jsou to skutečné otvory v souborech NC, v dílenských výkresech a v exportu IFC.
:::

Otvor, jehož x je za některým koncem dílu, se v záložce {{ui:Problémy}} zobrazí jako „otvor je mimo konec dílu“.

## Přidání výřezu

Výřezy jsou pro profily I: na jednom konci odříznou horní nebo dolní pásnici (a tu hloubku stojiny), aby trám prošel kolem jiného prvku.

1. Vyberte prvek profilu I.
2. V poli {{ui:Výřezy}} vyberte {{ui:Konec}} ({{ui:Začátek}} nebo {{ui:Konec}}) a {{ui:Strana}} ({{ui:Shora}} nebo {{ui:Zdola}}).
3. Zadejte {{ui:Délka (mm)}} (podél trámu od toho konce) a {{ui:Hloubka (mm)}} (dolů od horní hrany, nebo nahoru od dolní). Formulář začíná na 100 x 40.
4. Zvolte {{ui:Přidat výřez}}.

Pohled ukazuje výřez vyříznutý z oceli. Seznam uvádí například „Shora na začátku: 100 x 40“. Odstraňte jej pomocí ×.

Výřezy jsou hranaté: zatím nemají poloměr ve vnitřním rohu.

## Jak otvory a výřezy ovlivňují značky

Dva díly dostanou stejnou značku dílu jen tehdy, když se jejich otvory a výřezy shodují do 1 mm, s přihlédnutím k otočení dílu. Přidání otvoru k jednomu trámu ve skupině mu dá novou značku. Viz [Pravidla značek](topic:mark-rules).
