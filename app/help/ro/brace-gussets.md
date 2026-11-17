---
title: Guseele contravântuirilor
summary: Conectați capătul unei contravântuiri de un stâlp sau de o grindă cu o placă guseu: corniere și benzi plate înșurubate, țevi cu fantă și sudate.
keywords: guseu, placă guseu, contravântuire, contravântuire verticală, contravântuire cornier, bandă plată, bandă, contravântuire HSS, placă tip cuțit, țeavă cu fantă, îmbinare
from: 22f6598d
---

Un guseu de contravântuire este o placă sudată în atelier de stâlpul (sau de grinda) pe care aterizează contravântuirea, în planul contravântuirii. DetailCraft taie contravântuirea înapoi, astfel încât să fie liberă de tot ce există în nod, plasează și dimensionează guseul și leagă contravântuirea de el: un **cornier** sau o **bandă plată** cu o linie de șuruburi, sau o **țeavă** (pătrată, dreptunghiulară sau rotundă HSS) înfiletată peste guseu și sudată.

## Unde funcționează

- Capătul contravântuirii se află pe linia unui stâlp sau a unei grinzi (în limita a 1 mm), iar contravântuirea nu este aproape paralelă cu acea linie. Stâlpul este reazemul acolo unde există; altfel, grinda.
- Guseul se află în planul contravântuirii și în linia reazemului. Un **cornier** trebuie să aibă o aripă în acest plan, iar o **bandă plată**, fața sa: rotiți contravântuirea ({{ui:Rotire (°)}}) până când este cazul. Dacă aripile cornierului sunt la 45° față de plan, DetailCraft o spune și nu construiește nimic.
- Profilele I și canalele ca șuruburi de contravântuire nu sunt conectate.

## Adăugarea guseelor

1. Selectați una sau mai multe contravântuiri.
2. Alegeți {{ui:Guseu}} din meniul {{ui:Mai multe}} al grupului {{ui:Îmbinare}}.
3. Fiecare capăt al contravântuirilor selectate care aterizează pe un stâlp sau pe o grindă și nu are guseu primește unul.

Selectați un guseu (faceți clic pe placă) pentru a modifica setările. {{ui:Aplicare la similare (n)}} copiază guseul pe fiecare capăt liber de contravântuire cu aceleași profile de contravântuire și de reazem.

## Ce calculează DetailCraft

- **Tăiere înapoi.** Contravântuirea este scurtată la acel capăt până când colțurile ei sunt libere, cu {{ui:Joc contravântuire}} (25), față de fiecare element din nod (alăturat sau după capătul său, dacă elementul se termină acolo) și față de o placă de bază sub stâlp.
- **Șuruburi (cornier, benzi plate).** {{ui:Șuruburi}} (3) pe o linie de-a lungul contravântuirii, primul la {{ui:Distanță la capăt a șuruburilor}} (40) de capătul tăiat, la {{ui:Pas șuruburi}} (75). Pe un cornier trec prin aripa din planul guseului, la {{ui:Ecartament șuruburi}} de călcâi (0 = mijlocul aripii); pe o bandă plată, pe axa ei centrală (sau decalate de ea cu ecartamentul). Strângerea șurubului = aripa sau banda + guseul.
- **Guseul.** Un dreptunghi: de la fața reazemului în afară, dincolo de ultimul șurub cu distanța la capăt, iar de-a lungul reazemului cât necesită șuruburile. Stă lipit de spatele aripii cornierului (sau de fața benzii plate). Pentru o țeavă trece prin mijlocul acesteia, sub {{ui:Suprapunere țeavă pe guseu}} (200) din țeavă, cu loc pentru cordoane.
- **Noduri.** La baza unui stâlp, guseul este coborât pe placa de bază. Acolo unde o grindă traversează nodul (o contravântuire care urcă într-un colț grindă-stâlp), guseul rămâne sub sau peste grindă. Dacă asta lasă șuruburile sau suprapunerea fără distanța lor la capăt, DetailCraft avertizează.
- **Cordoane.** Guseul cu reazemul său, pe ambele părți. Țeava cu guseul, pe patru linii de-a lungul suprapunerii.

## De reținut

- Guseul aparține ansamblului reazemului (sudat în atelier). Contravântuirea sosește cu găurile făcute și merge în propriul fișier NC.
- Fanta unei țevi nu este tăiată în model; [verificarea conflictelor](topic:clash-check) lasă contravântuirea și guseul ei neatinse.
- Guseul nu este sudat de o grindă cu care vine în contact, iar guseele de colț sudate atât de grindă, cât și de stâlp, colțurile teșite și aranjamentul punctului de lucru al unei îmbinări cu Metoda Forței Uniforme nu sunt făcute încă.
- DetailCraft nu proiectează guseul sau șuruburile (fără verificări de rezistență); avertismentele privesc distanțele și încadrarea.
