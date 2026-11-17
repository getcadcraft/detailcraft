---
title: Verificarea mărcilor și a listei de materiale
summary: Citiți mărcile de piesă și de ansamblu pe care DetailCraft le dă fiecărei piese, verificați lista de materiale și descărcați-o ca CSV.
keywords: mărci, numerotare, marcă de piesă, marcă de ansamblu, marcă de bucată, bom, listă de materiale, greutăți, listă de șuruburi, csv, numerotare
from: caa2ee80
---

DetailCraft marchează modelul singur. Nu există o comandă de numerotare și nimic de rulat: după fiecare modificare calculează care piese sunt aceeași bucată de oțel și le dă o singură marcă.

## Unde apar mărcile

- Lista {{ui:Mărci de piese}} din panoul {{ui:Model}}: fiecare marcă, cu profilul, lungimea și numărul său. Faceți clic pe una pentru a selecta prima piesă cu acea marcă.
- Panoul {{ui:Proprietăți}} al unui element selectat (și lista **Mărci de piese** din panoul din stânga): {{ui:Marcă piesă}} și {{ui:Ansamblu}}. Titlul panoului poartă și marca, de exemplu „Grindă b1”.
- Fila {{ui:Listă de materiale}}, CSV-ul, numele fișierelor NC, desenele de execuție și exportul IFC (ca etichetă a fiecărui element).

## Cum sunt marcate piesele

- **Mărci de piese:** c pentru stâlpi, b pentru grinzi, br pentru contravântuiri, st pentru limoanele scărilor, p pentru plăci (inclusiv plăcile de capăt și plăcile de bază). Apoi un număr: c1, c2, b1, p1 … Când piesele sunt în mai mult de o etapă, numărul etapei vine primul, de exemplu 2-b1.
- **Mărci de ansamblu:** C, B, BR sau P. Un ansamblu este un element principal și plăcile sudate de el, cum ar fi o grindă cu cele două plăci de capăt sau un stâlp cu placa sa de bază.
- Două piese au aceeași marcă dacă au același profil, material și lungime de tăiere și aceleași găuri și decupări, toate în limita a 1 mm, chiar dacă una este întoarsă cu capul în jos sau pe dos față de cealaltă.
- Numerotarea merge mai întâi stâlpi, apoi grinzi, contravântuiri și plăci; în fiecare grupă, după numele profilului, cea mai lungă primă.

Regulile complete, inclusiv ce întoarceri contează pentru canale și corniere: [Reguli pentru mărci](topic:mark-rules).

:::warning
Mărcile sunt recalculate după fiecare modificare, așa că pot fi renumerotate. Adăugarea unei piese, schimbarea unui profil sau adăugarea unei găuri pot muta b3 în b4. Considerați mărcile definitive doar când modelul este terminat și faceți lista de materiale, fișierele NC și desenele de execuție din același model salvat.
:::

## Citirea listei de materiale

Deschideți fila {{ui:Listă de materiale}} de jos. Are trei tabele.

**Piese**, cu greutatea totală de oțel în titlu:

| Coloană | Înseamnă |
|---|---|
| Marcă piesă | Faceți clic pe ea pentru a selecta prima piesă cu această marcă |
| Tip | grindă, stâlp, contravântuire, limon sau placă |
| Profil | De exemplu W16x26 sau PL20x180 |
| Material | Clasa pe care ați setat-o |
| Lungime (mm) | Lungimea de tăiere, după conexiuni |
| Număr | Câte sunt |
| Greutate unitară (kg) | Masa profilului pe metru × lungime |
| Greutate totală (kg) | Greutate unitară × număr |

Ultimul rând dă numărul total și greutatea totală.

**Ansambluri:** fiecare marcă de ansamblu, piesa sa principală, toate piesele sale (de exemplu „b1 + p1 + p1”), numărul, greutatea unitară și greutatea totală.

**Șuruburi și tije de ancorare:** grupate pe tip, diametru, lungime și clasă, cu un număr.

:::note
Greutățile sunt brute: găurile și decupările nu sunt scăzute. Șuruburile, piulițele, șaibele și cordoanele de sudură nu sunt incluse în greutatea de oțel.
:::

## Descărcarea

Alegeți {{ui:Descărcare CSV}} în filă sau {{ui:BOM}} din grupul {{ui:Ieșire}}. Fișierul `<name> BOM.csv` conține cele trei tabele unul după altul, fiecare sub titlul său, cu un rând gol între ele. Se deschide în orice program de calcul tabelar.

## Verificare înainte de trimitere

1. Deschideți fila {{ui:Probleme}} și rezolvați fiecare rând. O conexiune care nu a putut fi construită nu adaugă placă, găuri sau șuruburi, deci lista de materiale va fi incompletă.
2. Căutați mărci la care nu vă așteptați. Două grinzi despre care credeți că sunt la fel, dar cu mărci diferite, diferă de obicei printr-o gaură, o decupare sau o lungime de tăiere; selectați fiecare și comparați-le.
3. Salvați modelul, apoi faceți toate exporturile din această stare salvată.
