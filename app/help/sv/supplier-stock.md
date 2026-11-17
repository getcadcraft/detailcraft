---
title: Leverantörslager och leveranstider
summary: Kontrollera stängerna din kapplista köper mot en leverantörs lagerlista: finns det tillräckligt, och hur lång är väntetiden?
keywords: leverantör, lager, leveranstid, stålgård, stålverk, tillgänglighet, restnotering, stänger, inköp, leverans
from: 1373f5a3
---

Fliken {{ui:Leverans}} söker upp varje profil som {{ui:Kapplista}} köper i leverantörens lagerlista. Filen stannar i modellen; ingenting skickas någonstans.

## Lägg till leverantörens fil

Tryck på {{ui:Lägg till en leverantörsfil}} och välj en CSV-fil från din leverantör (separerad med komma, semikolon eller tabb). Den behöver en kolumn för artikeln eller profilen (Item, Name, Description, Section, SKU), och en för lager (In stock, Quantity, On hand) eller för leveranstid. Enheten (each, metres, kilograms, tonnes), priset, leverantören och ett datum för påfyllning läses när det finns en kolumn för dem. Ord förstås också: "Out of stock", "In stock", "2-3 weeks", "backorder". Upp till fem filer kan sparas; en fil med samma namn ersätter den befintliga.

## Vad du ser

För varje profil som kapplistan köper visar tabellen vad modellen behöver, vad som finns i lager, leveranstiden, leverantören och ett resultat:

- **Täckt:** tillräckligt i lager.
- **Kort med:** lagret understiger behovet. Om lagret understiger behovet och du anger en längsta väntetid, visar leveranstiden hur lång tid resten tar.
- **För sent:** det finns ingen lagersiffra och leveranstiden är längre än den väntetid du accepterar.
- **Ingen lagersiffra:** filen anger det inte.
- **Annan enhet:** leverantören anger profilen i en enhet som modellen inte kan räkna i.

Vad modellen behöver anges i stänger (från den nästlade kapplistan, med dina lagerlängder), i meter stång som köps och i kilogram (profilens vikt per meter), och filens egen enhet används. En profil matchas med sitt namn ("W16 X 26" och "w16x26" är samma). Profiler som inte finns i filen listas.

Kort och sena profiler finns i panelen {{ui:Problem}}. Här beställs ingenting.

## Begränsningar

Lagersiffrorna och leveranstiderna är filens, från den dag den gjordes. Plåtar nestas inte, så de slås inte upp. Filen läses bara: eventuella instruktioner i den är enbart text.
