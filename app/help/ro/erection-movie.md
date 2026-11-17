---
title: Plan de montaj și film
summary: Introduceți o macara și diagrama ei de sarcini, vedeți fiecare ridicare verificată față de diagramă în ordinea fazelor și salvați un film de montaj care se redă offline pe orice telefon.
keywords: montaj, macara, ridicare, diagramă de sarcini, rază, capacitate, accesorii de ridicare, secvență, film, animație, telefon, offline, plan de ridicare
from: fa7b0133
---

Fila {{ui:Montaj}} transformă modelul într-o comandă de montaj și verifică fiecare ridicare față de o macara pe care o descrieți. Planifică din cifrele pe care le introduceți. Nu este un plan de ridicare: el este făcut de riggeri și de operatorul macaralei.

## Descrierea macaralei

Alegeți {{ui:Adăugare macara}}, apoi completați:

- **Centrul macaralei X și Y:** unde stă macaraua, în milimetri.
- **Cârligul cel mai sus:** cât poate urca cel mai mult cârligul, în milimetri. 0 înseamnă că nu se verifică nicio limită.
- **Blocul de cârlig și accesoriile care nu sunt în diagramă:** kilograme scăzute din diagramă înainte de a se adăuga o sarcină, când diagrama dumneavoastră nu o face deja.
- **Diagrama de sarcini:** câte un rând pe linie, raza în metri și apoi capacitatea în kilograme. Copiați rândurile din diagrama proprie a macaralei.

Diagrama se citește cum se citește o diagramă de sarcini: capacitatea listată pentru o rază ține până la acea rază. O sarcină la o rază între două rânduri primește capacitatea rândului **mai îndepărtat**, niciodată o valoare între ele. Înăuntrul primului rând, capacitatea primului rând se păstrează. Dincolo de ultimul rând macaraua nu poate ridica deloc. Raza care contează pentru o ridicare este cea mai mare dintre raza de preluare și raza setată.

O a doua macara se adaugă la fel. Fiecare ridicare merge la prima macara care o poate face în limitele marjei dumneavoastră.

## Ce face planul

- O ridicare pe ansamblu: o grindă cu plăcile sale de capăt, un stâlp cu placa sa de bază, o scară.
- Ordinea urmează mai întâi fazele, apoi nivel cu nivel: stâlpi, grinzile pe care le poartă, contravântuiri, plăci, scări. O piesă nu este ridicată niciodată înaintea a ceea ce o susține.
- Fiecare ridicare arată greutatea sa (greutatea brută a modelului, plus {{ui:Accesorii de ridicare adăugate la fiecare greutate}}), raza sa, partea din diagramă pe care o folosește și minutul la care începe.
- {{ui:Cea mai mare parte a diagramei pe care o poate folosi o ridicare}} este marja dumneavoastră de siguranță. O ridicare peste ea este marcată **Peste marja dumneavoastră**; peste diagramă, **Peste diagramă**; dincolo de ultima rază a diagramei, **Dincolo de diagramă**; iar o piesă mai sus decât cârligul, **Cârlig prea jos**.

Găurile și decupările nu se scad din greutăți, iar șuruburile sunt acoperite de procentul pentru accesoriile de ridicare.

## Probleme

Fiecare ridicare care este peste, dincolo, prea sus sau pusă înaintea a ceea ce o susține apare în panoul {{ui:Probleme}}. O grindă fără nicio conexiune care s-o susțină este listată ca având nevoie de sprijin temporar.

## Salvarea filmului

{{ui:Salvare film}} scrie un singur fișier HTML. Deschideți-l în orice browser, și pe telefon, fără rețea și fără cont: redare și pauză, trageți bara până la orice minut, rotiți modelul cu degetul, măriți cu două degete. Legenda numește fiecare ridicare, greutatea, raza și partea din diagramă. Modelul este desenat ca cutii simple: arată ordinea și ridicările, nu profilele reale.

Același tabel se salvează ca CSV cu butonul {{ui:CSV}}. Macaraua și diagrama sunt salvate în fișierul modelului, iar fiecare modificare este un singur pas de anulare.
