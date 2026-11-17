---
title: Deplasarea în vizualizarea 3D
summary: Rotiți, panoramați și faceți zoom cu mouse-ul, trackpad-ul sau ecranul tactil, și când să folosiți în schimb Plan și Fațadă.
keywords: orbitare, rotire, pan, zoom, navigare, vizualizare, cameră, trackpad, atingere, plan, fațadă, potrivire, mouse
from: 02c9c7b9
---

Vizualizarea are trei moduri, alese din bara de vizualizare de deasupra ei: {{ui:3D}}, {{ui:Plan}} și {{ui:Fațadă}}. Butoanele mouse-ului fac lucruri diferite în 3D față de Plan și Fațadă, așa că citiți ambele tabele.

## În 3D

:::mouse
| Pentru | Ce faceți |
|---|---|
| Rotire în jurul modelului | Trageți cu butonul stâng |
| Pan | Trageți cu butonul drept sau țineți {{key:Shift}} și trageți cu butonul stâng |
| Zoom | Rotiți rotița sau trageți în sus și în jos cu butonul din mijloc (rotița apăsată) |
| Selectarea unei piese | Faceți clic pe ea (un clic care mișcă mai puțin de câțiva pixeli) |
| Vizualizarea întregului model | Butonul de potrivire din capătul din dreapta al barei de vizualizare |
:::

:::touch
| Pentru | Ce faceți |
|---|---|
| Rotire în jurul modelului | Trageți cu un deget |
| Pan | Trageți cu două degete |
| Zoom | Ciupiți cu două degete |
| Selectarea unei piese | Atingeți-o |
| Vizualizarea întregului model | Butonul de potrivire din capătul din dreapta al barei de vizualizare |
:::

Cubul de vizualizare din dreapta sus (sub bara de vizualizare) se rotește odată cu modelul: faceți clic pe o față, muchie sau colț pentru a privi de acolo, trageți-l pentru a-l roti sau faceți clic pe butonul de casă pentru a reveni la început. Vedeți [Cubul de vizualizare](topic:view-cube).

Modelul se rotește în jurul mijlocului vizualizării, iar rotița face zoom spre mijlocul vizualizării, nu spre indicator. Pentru a privi de aproape un colț, mutați-l mai întâi la mijloc (pan), apoi faceți zoom.

## În Plan și Fațadă

Aceste vizualizări privesc drept în model și nu pot fi rotite.

:::mouse
| Pentru | Ce faceți |
|---|---|
| Pan | Trageți cu butonul stâng sau cu cel drept |
| Zoom | Rotiți rotița sau trageți în sus și în jos cu butonul din mijloc |
| Selectarea unei piese | Faceți clic pe ea |
:::

:::touch
| Pentru | Ce faceți |
|---|---|
| Pan | Trageți cu un deget |
| Zoom | Ciupiți cu două degete (trăgând cu două degete se face și pan) |
| Selectarea unei piese | Atingeți-o |
:::

## Pe trackpad Mac

:::mac
- **Zoom:** glisați în sus sau în jos cu două degete, sau ciupiți. Ambele ajung la vizualizare ca zoom.
- **Rotire (3D):** apăsați trackpad-ul și trageți cu un deget. Dacă folosiți atingerea pentru clic, dubla atingere și tragerea funcționează și ele, când tragerea este activată în **System Settings, Accessibility, Pointer Control, Trackpad Options**.
- **Pan (3D):** țineți {{key:Shift}} și trageți. Ținând {{key:Ctrl}} sau {{key:Mod}} în timp ce trageți, se face și pan. Un clic cu două degete este clic dreapta, dar tragerea cu el este incomodă pe trackpad.
- **Pan (Plan și Fațadă):** pur și simplu trageți.
- Un Magic Mouse nu are buton din mijloc: folosiți tragerea cu {{key:Shift}} pentru pan și un gest de glisare pe suprafața lui pentru zoom.
:::

Mai multe despre clicul dreapta și pan fără mouse: [Taste, mouse-uri și trackpad-uri](common:keys).

## Planul și fațada fac plasarea ușoară

În {{ui:3D}}, intersecțiile de la niveluri diferite pot sta una peste alta pe ecran, iar un clic merge la punctul cel mai apropiat. În {{ui:Plan}} și {{ui:Fațadă}} pot fi alese doar punctele nivelului sau ale liniei de grilă pe care le priviți.

1. Alegeți {{ui:Plan}}, apoi un nivel din lista de lângă butoane. Vizualizarea privește de sus acel nivel; tot ce este mai sus de 1.5 m deasupra lui este tăiat.
2. Sau alegeți {{ui:Fațadă}}, apoi o linie de grilă notată cu literă („Grila A”, „Grila B” …). Vizualizarea privește drept spre acea linie; se arată doar oțelul aflat la cel mult 1 m de ea.

Fațadele sunt doar pe liniile de grilă cu litere. Pentru a lucra pe o linie de grile numerotate (un cadru care merge de la A la B), folosiți {{ui:3D}} sau plasați prin scriere în formularul {{ui:Adăugare după grilă}}. Vedeți [Plasarea stâlpilor, grinzilor și contravântuirilor](topic:place-members#place-by-grid-without-clicking).

## Selectarea

- Faceți clic pe o piesă pentru a o selecta. Aceasta capătă culoarea de evidențiere, iar panoul {{ui:Proprietăți}} o arată.
- Faceți clic pe spațiul gol sau apăsați {{key:Esc}} pentru a șterge selecția.
- Oțelul are prioritate față de beton: un clic pe un stâlp dintr-o talpă transparentă selectează stâlpul. Faceți clic pe talpă departe de stâlp sau pe una dintre bare pentru a selecta talpa.
- Un clic pe un șurub sau pe o placă de capăt selectează îmbinarea lui.
- În Plan și Fațadă, piesele tăiate nu pot fi selectate.
- Țineți {{key:Shift}} (sau {{key:Ctrl}}, sau {{key:Mod}}) și faceți clic pentru a adăuga o piesă la selecție sau a o scoate; {{key:Mod+A}} selectează tot. Nu există încă selectare cu fereastră (tragere de dreptunghi). Ce puteți face cu mai multe: [Copiere, lipire și duplicare](topic:copy-paste).

Puteți selecta și din liste: faceți clic pe o marcă din {{ui:Mărci de piese}} din stânga, pe o marcă de piesă din fila {{ui:Listă de materiale}} sau pe {{ui:Selectare}} de lângă un rând din {{ui:Probleme}}.

## Dacă vizualizarea arată greșit

- Ați pierdut modelul? Alegeți butonul de potrivire.
- Vizualizarea este goală sau gri, cu un mesaj despre WebGL: vedeți [Depanare](topic:troubleshooting#the-3d-view-is-missing).
- Totul funcționează și fără vizualizarea 3D, în afară de clicul în ea: panourile, rapoartele și exporturile rulează, iar {{ui:Adăugare după grilă}} plasează barele prin scriere.
