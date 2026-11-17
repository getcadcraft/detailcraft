---
title: Exportul IFC pentru coordonare
summary: Scrieți un fișier IFC4 cu întregul model, oțel, șuruburi, fundații și armătură, pentru a-l partaja cu arhitecții, inginerii și alte programe.
keywords: ifc, ifc4, ifc2x3, bim, export, import, import ifc, găuri, șuruburi, șuruburi libere, deschideri, elemente de fixare, coordonare, schimb de model, step, openbim, conflict, vizualizator
from: cfcb0cd6
---

Exportul IFC scrie întregul model ca un singur fișier IFC4, pe care programele BIM și vizualizatoarele IFC îl pot deschide.

## Export

1. Alegeți {{ui:IFC}} din grupul {{ui:Ieșire}}.
2. Browserul descarcă `<name>.ifc`. Bara de stare arată ce a intrat, de exemplu „IFC4 exportat: 25 de piese, 88 de elemente de fixare, 7 fundații, 132 de bare.”

Dacă modelul nu are piese, fundații sau bare, bara de stare afișează „Nimic de exportat încă.”

## Ce conține fișierul

| În DetailCraft | În fișierul IFC |
|---|---|
| Fiecare nivel | Un etaj de clădire (IfcBuildingStorey), sub un singur proiect, amplasament și clădire |
| Rețele de axe | Un IfcGrid cu axele și etichetele lor |
| Stâlpi, grinzi, contravântuiri | IfcColumn, IfcBeam, IfcMember (contravântuire), fiecare o extrudare a unei forme standard de profil, cu dimensiunile reale |
| Plăci, plăci de capăt, plăci de bază | IfcPlate |
| Găuri și decupări | Deschideri (IfcOpeningElement) tăiate din piesă |
| O bară și plăcile sudate de ea | Un ansamblu (IfcElementAssembly) etichetat cu marca de ansamblu |
| Șuruburi și tije de ancorare | IfcMechanicalFastener, cu diametru și lungime |
| Fundații | IfcFooting (talpă), cu textul betonului ca material |
| Fiecare bară | IfcReinforcingBar, cu marca, diametrul, aria și lungimea barei, trasată de-a lungul axului real, cu arce reale la îndoituri |

Eticheta fiecărei piese este marca ei. Fiecare element poartă și un set de proprietăți „DetailCraft” cu mărcile, profilul și greutatea sa. Fiecare element se află la cel mai înalt etaj situat la sau sub punctul său cel mai de jos. Materialele sunt grupate după clasă.

## Identificatori stabili pentru reexporturi

Identificatorul IFC (GlobalId) al fiecărui element este calculat din numele modelului și din identificatorul propriu al elementului în model. Exportați același model de două ori și identificatorii coincid, astfel încât programele care compară versiuni pot spune ce s-a schimbat.

:::warning
Redenumirea modelului schimbă fiecare identificator. Păstrați același nume de model între emiterile unui proiect.
:::

## Verificare

Fișierele IFC ale DetailCraft sunt citite înapoi de un cititor IFC independent din suita de teste. Programele diferă în modul în care citesc IFC, așa că deschideți fișierul în programul pe care îl folosește echipa dumneavoastră înainte să vă bazați pe el. Aplicația BimCraft din CadCraft deschide și ea fișiere IFC.

## Încă neacoperit

- Aducerea conexiunilor, a fundațiilor și a armăturii dintr-un fișier IFC. {{ui:Import IFC}} aduce grinzi, stâlpi, elemente de contravântuire, plăci, rețele, niveluri, găuri, decupări și șuruburi și listează ce a lăsat afară.
- Date analitice sau de analiză structurală.
- Orice altceva decât vizualizarea de referință IFC4.

## Import

{{ui:Import IFC}} din grupul {{ui:Fișier}} (sau tragerea unui fișier `.ifc` pe vedere) creează un model nou dintr-un fișier IFC2X3 sau IFC4:

- **Grinzi, stâlpi, elemente de contravântuire și plăci** al căror corp este un singur profil extrudat pe care DetailCraft îl cunoaște, potrivit cu catalogul sau păstrat ca profil personalizat; **rețelele** și **nivelurile** din rețeaua și etajele fișierului.
- **Găuri:** fiecare deschidere rotundă (IfcOpeningElement care golește o piesă adusă) perpendiculară pe una dintre fețele piesei: inima sau tălpile unui profil I sau ale unui canal, pereții unei țevi, o placă, aripile unui cornier. O gaură prin ambii pereți ai unei țevi intră o singură dată.
- **Decupări:** o deschidere dreptunghiulară care ia toată lățimea unui profil I sau a unui canal de la un capăt, de sus în jos sau de jos în sus.
- **Șuruburi:** fiecare IfcMechanicalFastener sau IfcFastener, cu diametrul, lungimea, clasa și tipul său (șurub sau tijă de ancorare), ca **șurub liber**. Șuruburile libere apar în vedere, în lista de materiale și în exportul IFC și rămân pe loc când mutați elementele. Panoul {{ui:Proprietăți}}, fără nimic selectat, le numără și are {{ui:Eliminare șuruburi libere}} pentru cazul în care adăugați conexiuni în schimb.

Raportul listează tot restul pe clase, cu motivul pentru care a fost lăsat afară: pereți și plăci, fundații și bare, găuri alungite, găuri în țevi rotunde, conexiuni (un fișier IFC transportă plăcile și șuruburile lor, nu regula care le-a generat).
