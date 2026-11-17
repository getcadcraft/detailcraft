---
title: Kontroly základov
summary: Kontrolujte pätky, kombinované pätky a rošty podľa pôdy, ktorú opíšete, sadanie, pružný rošt na pružinách, skupiny pilót a oporné múry. Pomôcka pre inžiniera na kontrolu.
keywords: základ, pätka, kombinovaná pätka, rošt, sadanie, modul podložia, pružiny, okrajový stĺp, rohový stĺp, únosnosť, posuv, prevrátenie, priebojový šmyk, jednosmerný šmyk, ohyb, kotvenie, minimálna výstuž, skupina pilót, oporný múr, ACI 318-19
from: 6961ad52
---

:::warning
Ide o predbežné kontroly pre inžiniera na posúdenie, nie o schválenie návrhu. Dovolený tlak na podložie a súčiniteľ trenia zadáva používateľ: DetailCraft nepozná vašu pôdu.
:::

Karta {{ui:Základy}} kontroluje pätky v modeli voči zaťaženiam stĺpov, ktoré im zadáte.

## Opis pôdy

Zadajte {{ui:Dovolený tlak na podložie}} a {{ui:Súčiniteľ trenia pod pätkou}}. Obe začínajú na 0, čo znamená nezadané: kontrola potom zobrazí tlak ako poznámku a netvrdí, že vyhovuje. Pre sadanie zadajte modul pôdy {{ui:Es}} (MPa), jej Poissonovo číslo a dovolené sadanie (na začiatok 25 mm). Pre pružný rošt zadajte modul podložia {{ui:ks}}. Sú tu aj násyp nad pätkou, objemová tiaž pôdy, bezpečnostné súčinitele pre posuv a prevrátenie (na začiatok 1.5) a medza klzu výstuže.

## Zadanie zaťažení

Každá pätka má zoznam zaťažení stĺpov. Použite {{ui:Pridať zaťaženie stĺpa}} a vyplňte riadok pre prevádzkové zaťaženie (pre únosnosť, posuv a prevrátenie) a riadok s faktorovanými zaťaženiami (pre kontroly pevnosti): zvislé zaťaženie P nadol, vodorovné sily Vx a Vy na hornej hrane pätky, momenty Mx a My, polohu stĺpa na pätke a jeho rozmer.

Alebo otvorte kartu {{ui:Analýza}} a stlačte {{ui:Prevziať zaťaženia stĺpov z Analýzy}}: každá podpora stojaca na pätke sa stane zaťažením stĺpa z prevádzkovej a faktorovanej sady, ktorú zvolíte. Kladný moment My zaťažuje viac stranu +x pätky; kladný moment Mx zaťažuje viac stranu −y.

## Čo sa kontroluje

Z prevádzkových zaťažení, pričom sa pridá vlastná tiaž pätky a násyp:

- **Únosnosť:** tlak pod tuhou pätkou. Vo vnútri stredovej tretiny je celá spodná plocha v kontakte; mimo nej sa časť spodnej plochy odlepí a maximum je vyššie. Výslednica mimo spodnej plochy neprejde kontrolou.
- **Posuv:** trenie násobené zvislým zaťažením oproti vodorovnej sile.
- **Prevrátenie:** vzdialenosť výslednice od hrany.
- **Sadanie:** pružné sadanie priemerného tlaku na polpriestor so zadaným modulom, v strede a v rohu (riešenie Timošenka a Goodiera pre pružný obdĺžnik), voči medznej hodnote. Je to horná hranica pre tuhú pätku a nezahŕňa vrstvu pôdy s obmedzenou hĺbkou, odľahčenie vykopanou zeminou ani konsolidáciu. Bez modulu zobrazí tlak ako poznámku.

Samotné faktorované zaťaženia stĺpov (ACI 318-19):

- **Ohyb** na líci stĺpa, s minimálnou výstužou (0.0018 pre prúty 420 MPa) a prútmi, ktoré ste nakreslili.
- **Jednosmerný šmyk** vo vzdialenosti d od líca.
- **Priebojový šmyk** vo vzdialenosti d/2 okolo každého stĺpa, s momentom stĺpa. Pre stĺpec blízko okraja je kritický prierez orezaný hranou pätky (tri strany pri okraji, dve pri rohu, ACI 318-19 22.6.4.1 a menšia αs v tabuľke 22.6.5.2) a moment k vlastnému stredu prierezu zahŕňa posun zaťaženia.
- **Kotvenie** prútov za líce stĺpa, rovných alebo s ich hákmi.
- **Hĺbka** nad spodnými prútmi (150 mm).

Kombinovaná pätka alebo rošt sa berie ako tuhý a šmyk a moment vyplývajú zo statiky rezov cez celú šírku.

## Pružný rošt na pružinách

Zaškrtnite {{ui:Analyzovať túto pätku ako pružný rošt na pružinách}}, keď pätka nesie viac stĺpov a tuhá pätka je príliš hrubá. Pätka sa stane doskou zo štvoruzlových prvkov na podklade z pružín (zadaný {{ui:ks}} sa sústredí do uzlov) a zaťaženie každého stĺpa sa rozloží na uzly jeho vlastnej stopy. Druhá tabuľka uvádza najväčší tlak na pôdu a sadanie (a rozdiel medzi najväčšou a najmenšou hodnotou), ohybový moment v každom smere s výstužou, ktorú potrebuje, ťah na hornej strane oproti pevnosti prostého betónu (pätka nemá horné prúty), jednosmerný šmyk vo vzdialenosti d od stĺpov a priebojový šmyk pri vlastnom tlaku pružín. Sieť sa spresňuje, kým je stĺp široký tri prvky; veľký rošt trvá niekoľko sekúnd. Vlastná tiaž roštu a zemina nad ním sa vzájomne vyrušia a nie sú zahrnuté.

Každá neúspešná kontrola je v paneli {{ui:Problémy}} s uvedeným článkom.

## Skupiny pilót a oporné múry

{{ui:Pridať skupinu pilót}} umiestni mriežku pilót pod tuhú hlavicu: zadajte zaťaženie a momenty a to, čo jedna pilóta smie niesť v tlaku a v ťahu (čísla z návrhu pilót, nie z tejto karty). Reakcia každej pilóty je P/n plus jej podiel na momentoch (pružná metóda); kontroluje sa najväčší tlak a akýkoľvek ťah.

{{ui:Pridať oporný múr}} kontroluje konzolový múr na rovnom zásype, na meter: Rankineov aktívny tlak, prevrátenie okolo päty, posuv a tlak na základ. Pasívny tlak pred pätou sa nezahŕňa. Asistent môže spustiť tie isté kontroly pomocou `pile_group_check` a `retaining_wall_check`.

Skupiny pilót, múry a prepínač roštu sa uložia do súboru modelu a neúspešná kontrola je uvedená na karte {{ui:Problémy}}.
