---
title: Raportul de materiale și greutăți pe etape
summary: Lungimi tăiate, numere, greutăți și suprafețe de vopsire pentru fiecare etapă, cu șuruburile și armătura sa, ca tabel, CSV sau PDF.
keywords: raport, greutate, tonaj, kg, vopsea, suprafață de vopsire, suprafață, acoperire, lungime tăiată, listă de materiale, etapă, csv, pdf
from: 337d6d92
---

În grupul {{ui:Ieșire}}, deschideți {{ui:Mai multe}} și alegeți {{ui:Raport de greutăți pe etape}}, sau deschideți fila {{ui:Pe etape}} de sub vedere. Arată:

- **Rezumat pe etape**: pentru fiecare etapă, numărul de piese, greutatea oțelului, suprafața de vopsire, șuruburile și tijele de ancorare și armătura; apoi totalurile.
- **Un tabel pe etapă**: fiecare marcă de piesă din ea cu tipul, profilul, materialul, lungimea tăiată, numărul, greutatea unitară, greutatea și suprafața de vopsire; apoi șuruburile și tijele de ancorare.

{{ui:Descărcare CSV}} salvează aceleași tabele într-un singur fișier CSV (`<name> weight report.csv`). {{ui:Descărcare PDF}} face un raport în dimensiunea de hârtie din [Setările DetailCraft](topic:settings#drawings), cu rezumatul primul, apoi fiecare etapă, tabelele lungi continuate pe pagina următoare și fiecare pagină numerotată.

## Cum se calculează cifrele

- **Greutățile** sunt brute, ca în lista de materiale: greutatea profilului pe metru înmulțită cu lungimea tăiată. Găurile și tăieturile de capăt nu se scad.
- **Suprafața de vopsire** este exteriorul secțiunii pe lungimea tăiată: pentru un profil I, fiecare față a tălpilor și a inimii; pentru o placă, ambele fețe și muchiile; pentru o țeavă, doar exteriorul. Capetele și găurile nu sunt numărate.
- **Armătura** este greutatea barelor din fundațiile etapei, din [tabelul de întinderi](topic:footings-and-rebar).
- Plăcile și șuruburile unei conexiuni se numără în etapa elementului său principal. Vezi [Etape](topic:phases).
- Cu [mărcile pe etape](topic:phases#marks-per-phase) activate, fiecare etapă are propriile mărci (1-b1, 2-b1). Cu ele dezactivate, o marcă poate apărea în mai multe etape: fiecare etapă listează piesele pe care le are.
