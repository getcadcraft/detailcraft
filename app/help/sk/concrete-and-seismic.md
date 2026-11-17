---
title: Kontrola betónových prvkov a seizmické zaťaženia
summary: Nastavte výstuž betónových trámov a stĺpov, skontrolujte ich podľa ACI 318-19, vytvorte ekvivalentné bočné sily podľa ASCE 7-22 na tuhých podlažiach a pozrite posun podlaží. Pomôcka pre inžiniera na kontrolu.
keywords: betón, železobetón, ACI 318, ACI 318-19, výstuž, trám, stĺp, šmyk, strmene, seizmika, zemetrasenie, ekvivalentná bočná sila, ELF, ASCE 7-22, posun, posun podlažia, podlahy, tuhá membrána, hmotnosť podlažia, využitie, konštrukcia, inžinier
from: 94d3001d
---

Bloky {{ui:Betónové prvky}} a {{ui:Seizmické zaťaženia}} na karte {{ui:Analýza}} kontrolujú železobetónové trámy a stĺpy a vytvárajú bočné sily zemetrasenia na podlažiach rámu. Obe sa riadia behom karty {{ui:Analýza}} a ukladajú sa spolu s modelom.

:::warning
Výsledky sú **na kontrolu inžinierom**: pomôcka, kým ich niekto nepreskúma. Kontroly betónu používajú sily prvého rádu, s výnimkou stĺpa v ráme, ktorý označíte ako nekývavý: ten sa navrhuje na zväčšený moment, bez zväčšenia od kývania, bez návrhu krútenia, bez seizmického detailovania (kapitola 18 ACI) a bez detailovania strmeňov. Seizmické zaťaženia nezohľadňujú súčiniteľ redundancie, zvislý seizmický účinok, zosilnenie krútenia ani účinky P-delta. Zaťaženie vetrom ešte nie je hotové.
:::

## Nakreslite prvky

Betónové prvky kreslite ako obdĺžniky: profil {{ui:Doska}} ako `PL400x400` pre stĺp a `PL300x600` pre trám dá prierez. Stĺpy a trámy sa umiestňujú ako ostatné prvky.

## Nastavte prierezy

Blok {{ui:Betónové prvky}} vypíše všetky prierezy, ktoré prvky používajú. Stlačte {{ui:Nastaviť ako betón…}} pri tých, ktoré sú betónové. DetailCraft prečíta šírku **b** (pozdĺž vlastnej osi y prvku) a výšku **h** (pozdĺž z) z nakresleného profilu a potom sa spýta na:

- **krytie** po stred prútov a **horné**, **spodné** a **bočné** prúty (koľko a aký priemer) pre trám, alebo **koš stĺpa** (prúty pozdĺž b a pozdĺž h, aký priemer, špirálové strmene) pre stĺp;
- **strmene**: vetvy, priemer a rozstup;
- čím prvok **pôsobí**: trám, stĺp, alebo sa rozhodne podľa síl (zvislý prvok, alebo prvok, ktorý nesie viac než 0.10 f′c Ag, je stĺp).

Nastavte f′c, medzu klzu prútov fy a medzu klzu strmeňov fyt (pri šmyku sa počíta najviac 420 MPa), K a či je rám nad nimi nekývavý alebo kývavý. Prierez nastavený ako betón sa analyzuje ako betón: E = 4700 √f′c, 2400 kg/m³, a predvolene s **popraskanými prierezmi** (stĺpy 0.70 Ig, trámy 0.35 Ig; ACI 318-19 tabuľka 6.6.3.1.1(a)). Vyberte {{ui:Hrubé prierezy}}, ak to chcete vypnúť.

## Vytvorte kombinácie a skontrolujte

Zadajte zaťažovacím prípadom ich druh, potom {{ui:Vytvoriť kombinácie}}: ACI 318-19 preberá pevnostné kombinácie z ASCE 7 (§5.3.1). Stlačte {{ui:Skontrolovať betón}} a každý prvok dostane využitie, sfarbené na modeli ako ocelové kontroly: ohyb a minimálna výstuž (22.2, 9.6.1.2), deformácia riadená ťahom (9.3.3.1), šmyk so strmeňmi (22.5, 9.6.3), rozstup strmeňov a normálová sila s momentom pre stĺpy (22.4, s Breslerovou metódou pre ohyb v dvoch smeroch). Prvok, kde sa nakreslený prierez líši od b × h, ktoré ste zadali, sa zobrazí ako *čiastočne skontrolovaný*, rovnako ako štíhly stĺp alebo krútenie nad prahom: tie sa nenavrhujú.

Prvky nad kapacitou sú uvedené v {{ui:Problémy}}; prijmite jeden s dôvodom, alebo upravte prierez.

## Podlažia a seizmické zaťaženia

Podlažie je úroveň, kde je rám spojený tuhou doskou (**tuhá membrána**). V bloku {{ui:Seizmické zaťaženia}} stlačte {{ui:Nájsť podlažia}}: vezme úrovne, kde sa stretáva dva alebo viac trámov. Potom dajte každému podlaží jeho **seizmickú hmotnosť**, zadanú alebo prečítanú. {{ui:Prevziať hmotnosti z prípadov}} sčíta zvislé zaťaženia prípadov, ktorým dáte súčiniteľ (stály prípad je 1; pri skladovom užitkovom zaťažení alebo snehu na plochej streche pridajte 0.25, ako to žiada ASCE 7-22 12.7.2). Zvislé zaťaženie každého uzla ide na podlažie na jeho úrovni alebo nad ňou, takže stĺp medzi dvoma podlažiami dá polovicu svojej hmotnosti každému.

Vyplňte návrhové hodnoty: SDS, SD1, S1, R, Ie, Cd, TL, nosnú sústavu (pre periódu) a kategóriu rizika. {{ui:Vytvoriť seizmické prípady}} potom vypočíta periódu z výšky budovy (12.8.2.1), základnú šmykovú silu V = Cs W (12.8.1), rozdelí ju po podlažiach (12.8.3) a zapíše štyri zaťažovacie prípady, v X a Y, každý s 5 % náhodným krútením v oboch smeroch (12.8.4.2). Sily podlaží a kontrola posunu podlaží (12.8.6, tabuľka 12.12-1, posun Cd δxe / Ie oproti 0.020 hsx) sa zobrazia po behu; posun nad limitom je tiež problém. Stlačte znova {{ui:Vytvoriť kombinácie}}, aby sa seizmické prípady dostali do kombinácií.

**Perióda z analýzy.** Približná perióda Ta vychádza z výšky budovy. Keď ste spustili analýzu so seizmickými prípadmi, {{ui:Prevziať periódu z analýzy}} prečíta, ako sa každé podlažie pohlo pod silami, a vypočíta periódu Rayleighovou metódou, T = 2π √(Σ w δ² / (g Σ f δ)), raz pre X a raz pre Y; seizmické prípady sa potom vytvoria znova s ňou. Použitá perióda nikdy nie je väčšia než Cu·Ta (ASCE 7-22 12.8.2), takže mäkký model nemôže znížiť základnú šmykovú silu pod túto hodnotu. Prevezmite periódu znova po druhom behu: ustáli sa v jednom či dvoch krokoch. Zrušte označenie {{ui:Perióda z analýzy}}, ak sa chcete vrátiť k Ta.

**Štíhle stĺpy (ACI 318-19 6.6.4.5).** Pri ráme, ktorý označíte ako nekývavý, sa stĺp, ktorého k·ℓu/r je nad 34 + 12·M1/M2 (najviac 40), navrhuje na zväčšený moment Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² s (EI)eff = 0.4 Ec Ig / (1 + βdns), a minimálny moment Pu (15 + 0.03 h). βdns (na začiatku 0.6) je podiel súčiniteľom zváženého normálového zaťaženia, ktoré trvá: zadajte vlastnú hodnotu. Stĺp, ktorého Pu dosiahne 0.75 Pc, neprejde vlastnou kontrolou. Správa uvádza hodnoty každého štíhleho stĺpa. V **kývavom** ráme zostáva štíhly stĺp "čiastočne skontrolovaný": jeho zväčšenie vyžaduje analýzu druhého rádu, ktorá ešte nie je hotová.

**Dosky.** Keď model obsahuje dosky, blok {{ui:Výstuž dosky}} zoberie momenty dosiek z každej pevnostnej kombinácie a podľa pravidla Wood–Armer (ohyb a krútenie spolu) vypočíta výstuž, ktorú každá vrstva potrebuje na meter: spodnú a hornú, v x aj v y. Zadáte hrúbku, krytie a prúty; tabuľka ukáže potrebné oproti zadanému a jednosmerný šmyk oproti φVc, a vrstva, ktorá nestačí, je problém s uvedenou klauzulou. Priehyb, prestrihovanie pri stĺpoch a okrajová výstuž pri otvoroch nie sú pokryté a moment nad podporou konverguje pomaly so štvoruzlovými doskami.

Každé podlažie, ktoré uvediete, sa v analýze stane tuhou membránou: jeho trámy nenesú normálovú silu z pohybu podlažia. Export CraftScript nie je určený pre model s podlažiami.

## Správa

{{ui:Správa (PDF)}} a {{ui:Správa (CSV)}} získajú tabuľky betónu (predpoklady, využitie podľa prvku, každú klauzulu), seizmické parametre a základnú šmykovú silu, sily na podlažiach a tabuľku posunov.
