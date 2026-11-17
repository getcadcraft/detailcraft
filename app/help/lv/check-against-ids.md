---
title: Pārbaudīt IFC eksportu pret klienta IDS
summary: Ielādējiet jums sniegto .ids failu un pirms IFC nosūtīšanas redziet sadaļā Problēmas katru eksportēto detaļu, kas tam neatbilst.
keywords: ids, informācijas piegādes specifikācija, buildingsmart, prasības, piegāde, pārbaude, validācija, kvalitātes kontrole, ifc eksports, īpašība, materiāls, iepirkums
from: 50d0f785
---

## Ko jūs darīsiet

IDS (Information Delivery Specification, buildingSMART standarts) ir saraksts ar to, kam jābūt IFC failā. DetailCraft pārbauda IFC, ko tas eksportētu (tas pats fails, ko raksta {{ui:IFC}}), pret jums sniegto IDS un uzskaita katru detaļu, kas neatbilst prasībām.

## Soļi

1. Atveriet vai izveidojiet savu modeli.
2. Rīkjoslā grupā {{ui:Izvade}} noklikšķiniet uz {{ui:Pārbaudīt pret IDS…}}.
3. Noklikšķiniet uz {{ui:Ielādēt .ids failu…}} un izvēlieties failu. Nekas netiek augšupielādēts.
4. Izlasiet rezultātu: katra specifikācija ar {{ui:Izpildīts}} vai {{ui:Neizpildīts}} un to elementu skaitu, uz kuriem tā attiecas.
5. Atveriet Problēmas ({{key:Ctrl+Shift+M}}) un noklikšķiniet uz neatbilstības: elements, mezgls, kāpnes vai pamats, no kura tā nāk, tiek atlasīts, un skats tuvināts tam.

## Ko jūs redzēsiet

- Viens brīdinājums par katru eksportēto elementu un prasību, ko tas neizpilda, ar specifikācijas nosaukumu, to, ko IDS prasa, un to, ko satur eksports.
- Pārbaudes pārskats (sadaļā Problēmas) sākas ar IDS: tā nosaukumu, versiju, autoru un katras specifikācijas skaitu.

## Lietderīga informācija

- IDS tiek saglabāts modeļa failā, tāpēc, atverot modeli, tas tiek pārbaudīts vēlreiz. IDS ielāde vai noņemšana ir viens solis, ko var atsaukt.
- Katra izmaiņa tiek pārbaudīta atkārtoti pēc brīža; lielam modelim pārbaude starp palaišanām gaida nedaudz ilgāk.
- Eksporta GlobalId tiek veidoti no modeļa nosaukuma un DetailCraft iekšējiem detaļu numuriem, tāpēc tie no vienas pārbaudes uz nākamo paliek vieni un tie paši. Modeļa pārdēvēšana katram elementam piešķir jaunus GlobalId.
- Skaitļi tiek salīdzināti SI vienībās (eksports ir milimetros; garumi vispirms tiek pārvērsti metros).

- Šablons IDS tiek lasīts kā visa vērtība. `^` sākumā un `$` beigās arī tiek uzskatīti par „visu vērtību”, kā to parasti domā lielākā daļa IDS failu.

## Tālāk

- [IFC eksportēšana](topic:ifc-export)
