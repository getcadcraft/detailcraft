---
title: Nastavenie mriežok a úrovní
summary: Zadajte osi mriežky, ich rozstupy a úrovne, na ktoré sa umiestňuje každý prvok.
keywords: mriežka, mriežky, osi, čiary osí, úrovne, kóty výšok, podlažia, podlahy, rozstup, nastavenie
from: 9cad233c
---

Každý prvok v DetailCraft sa umiestňuje na priesečník osí na úrovni. Najprv nastavte mriežky a úrovne; neskôr ich môžete zmeniť.

## Ako tu fungujú mriežky

- **Číslované osi** idú jedným smerom, **osi s písmenami** druhým. Názvy sú len zvyk: označenie môže byť ľubovoľný text do 8 znakov (1, 2, 3 alebo A1, A2, alebo 10, 20).
- Zadávate označenia a rozstupy medzi nimi, nie súradnice. Prvá os každej množiny je na 0.
- Číslované osi sú osi s konštantným x; osi s písmenami sú osi s konštantným y. Takže nosník od osi 1 k osi 2 beží pozdĺž x a nosník od A k B beží pozdĺž y.
- Všetky hodnoty sú v milimetroch.

Nový model začína s číslovanými osami 1 2 3 pri 6000 6000, osami s písmenami A B pri 6000 a dvoma úrovňami.

## Nastavenie mriežok

1. V paneli {{ui:Model}} vľavo otvorte {{ui:Mriežky}}, ak je zbalená.
2. V {{ui:Očíslované osi}} zadajte označenia oddelené medzerami, napríklad `1 2 3 4 5`.
3. V poli {{ui:Rozstupy}} pod ním zadajte jeden rozstup pre každú medzeru, napríklad `6000 6000 7500 6000`. Štyri medzery pre päť osí.
4. Rovnako urobte pri {{ui:Osi s písmenami}} a jeho {{ui:Rozstupy}}, napríklad `A B C` a `8000 8000`.
5. Zvoľte {{ui:Použiť mriežky}}.

Stavový riadok hlási "Mriežky boli aktualizované." a pohľad sa zväčší na novú mriežku. Ako oddeľovače fungujú aj čiarky.

Ak niečo nesedí, nič sa nezmení a stavový riadok uvedie dôvod, napríklad "Číslované mriežky: zadajte jeden rozstup medzi každou dvojicou osí (4)." Ďalšie kontroly: rozstupy musia byť kladné milimetre, označenia sa musia líšiť a v každom smere môže byť najviac 60 osí.

:::note
Prvky si zachovávajú svoje súradnice, keď sa mriežky posunú. Ak zmeníte rozstup po umiestnení ocele, oceľ zostane tam, kde bola, a už nebude na mriežke. Najprv zmeňte mriežku alebo presuňte prvky úpravou ich koncových súradníc.
:::

## Nastavenie úrovní

1. Otvorte {{ui:Úrovne}} v paneli {{ui:Model}}.
2. Každý riadok má názov úrovne a jej výšku v milimetroch. Upravte ich podľa potreby.
3. Zvoľte {{ui:Pridať úroveň}} pre ďalší riadok. Dostane názov "Úroveň 3" (a tak ďalej) a umiestni sa 4000 mm nad najvyššou úrovňou; ak to potrebujete, zmeňte obe hodnoty.
4. Ak chcete úroveň odstrániť, zvoľte tlačidlo × na konci jej riadku.
5. Zvoľte {{ui:Použiť úrovne}}.

Nič sa nezmení, kým nezvolíte {{ui:Použiť úrovne}}. Úrovne sa pri použití zoradia podľa výšky. Každá úroveň potrebuje názov, dve úrovne nemôžu mať rovnaký názov a musíte ponechať aspoň jednu úroveň.

Úrovne môžu byť pod nulou (suterén na `-3500`) a nemusia byť rovnomerne rozmiestnené.

## Ako sa úrovne používajú

- Stĺp umiestnený na úrovni beží nahor k ďalšej úrovni alebo k úrovni, ktorú vyberiete v {{ui:Až do}}.
- Nosníky a dosky sa umiestňujú medzi dva priesečníky na úrovni, na ktorú kliknete.
- Pätky sa umiestňujú s hornou hranou na úrovni, na ktorú kliknete.
- {{ui:Pôdorys}} sa pozerá zhora na jednu úroveň naraz.
- Export IFC vytvorí jedno stavebné podlažie pre každú úroveň.

## Späť

Zmeny mriežok a úrovní sú úpravy ako ostatné: {{key:Mod+Z}} vráti predchádzajúcu mriežku.

## Ďalej

[Umiestnenie stĺpov, nosníkov a diagonál](topic:place-members)
