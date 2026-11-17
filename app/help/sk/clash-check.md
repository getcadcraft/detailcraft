---
title: Kontrola kolízií
summary: Nájdite prvky, plechy a pätky, ktoré do seba zasahujú, s vynechaním častí, ktoré sa spoj zámerne stretáva, a prejdite na každú kolíziu.
keywords: kolízia, kontrola kolízií, zrážka, interferencia, prekrytie, prienik, tvrdá kolízia, koordinácia, kontrola modelu
from: 04d72d3b
---

Otvorte kartu {{ui:Kolízie}} pod pohľadom a vyberte {{ui:Skontrolovať teraz}}. DetailCraft prechádza každú dvojicu častí v zobrazených fázach: oceľ do ocele a oceľ do pätky. Karta vypíše každú kolíziu, najhlbšiu ako prvú, s:

- dvoma časťami podľa značky časti (alebo značky pätky) a profilu;
- **Prienik (mm)**: ako ďaleko je bod jednej časti vo vnútri druhej, až po najbližšiu plochu;
- **Blízko**: priesečník mriežky a úroveň, na ktorej sa nachádza, alebo jeho súradnice;
- {{ui:Zobraziť}}: vyberie obe časti a presunie miesto do stredu pohľadu.

Názov karty ukazuje, koľko kolízií našla posledná kontrola. Kontrola sa nespúšťa sama: po zmene modelu to zoznam oznámi a {{ui:Skontrolovať teraz}} ju spustí znova.

## Čo nie je kolízia

- Časti, ktoré sa iba dotýkajú: plech pri prírube, pätná doska na pätke, dva prvky koniec na koniec. **Tolerancia (mm)** určuje, o koľko sa dve časti môžu zasahovať, kým sa to počíta (na začiatku 1 mm; najviac 50).
- Časti, ktoré spoj spája: čelná doska s nosníkom a s prírubou stĺpa, ku ktorej je priskrutkovaná, nosník a stĺp tohto spoja, pätná doska so stĺpom, dosky spojky s oboma kusmi, diagonála so styčníkovým plechom (drážka rúry sa v modeli nevyreže). Spoj ich má určené na stretnutie.
- Strižný výstupok pätnej dosky v pätke pod ňou (sedí v jamke na maltu).
- Skrutky a kotevné tyče (prechádzajú otvormi) a výstuž.
- Časti v skrytých fázach. Pozri [Fázy](topic:phases).

Diagonála alebo nosník, ktorý zasahuje do stĺpa bez spojenia medzi nimi, **je** kolízia: tento spoj ešte potrebuje spojenie. Ukazuje to diagonála vzorového rámu: nemá styčníkový plech. Vyberte ju a zvoľte {{ui:Styčníkový plech}} ([Styčníkové plechy diagonál](topic:brace-gussets)) a jej kolízie zmiznú.

## Dobré vedieť

- Prienik meria hĺbku do materiálu, takže nosník zasahujúci do tenkej stojiny alebo príruby stĺpa ukáže len pár milimetrov, aj keď zasahuje ďaleko.
- Časti sa kontrolujú tak, ako sú vyrezané: vyrezania (copes) a skrátenie nosníka na jeho koncových doskách sa počítajú. Otvory nie.
