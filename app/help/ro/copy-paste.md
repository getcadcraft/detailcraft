---
title: Copiere, lipire și duplicare
summary: Selectați mai multe piese, copiați-le cu găurile, decupările și conexiunile lor și lipiți-le pe o intersecție de grilă, cu decalaj, în aceeași poziție sau într-o altă filă. Decupați, duplicați, ștergeți și selectați totul.
keywords: copiere, lipire, decupare, duplicare, clipboard, lipire în aceeași poziție, selectare totală, anularea selecției, selectare multiplă, clic cu Shift, mai multe, repetare travee, copiere cadru, decalaj, ștergere mai multor, meniul Editare, meniul Mai multe
from: f25f1829
---

Grupul {{ui:Editare}} de pe bara de instrumente are {{ui:Anulare}}, {{ui:Refacere}}, {{ui:Copiere}} și {{ui:Lipire}}. Meniul său {{ui:Mai multe}} conține restul: {{ui:Decupare}}, {{ui:Copiere}}, {{ui:Lipire}}, {{ui:Lipire în aceeași poziție}}, {{ui:Duplicare}}, {{ui:Ștergere}}, {{ui:Selectare totală}} și {{ui:Anularea selecției}}, fiecare cu tasta sa. Un buton sau un element de meniu care nu poate acționa în acest moment este estompat; treceți peste el cu indicatorul ca să citiți motivul (de exemplu „nimic copiat încă”).

Fiecare lipire, decupare, duplicare și ștergere este un singur pas: un {{key:Mod+Z}} le anulează pe toate.

## Selectarea mai multor piese

- Faceți clic pe o piesă ca s-o selectați. Țineți apăsat {{key:Shift}} (sau {{key:Ctrl}}, ori {{key:Mod}}) și faceți clic pe alte piese ca să le adăugați; faceți clic pe una selectată în același mod ca s-o scoateți din selecție.
- {{key:Mod+A}} sau {{ui:Selectare totală}} selectează fiecare bară, conexiune și fundație.
- {{key:Esc}} sau {{ui:Anularea selecției}} golește selecția.

Cu mai multe elemente selectate, panoul {{ui:Proprietăți}} are titlul „4 selectate” (sau câte sunt) și listează barele pe tipuri, conexiunile, fundațiile și greutatea brută a oțelului, cu butoanele {{ui:Copiere}}, {{ui:Duplicare}} și {{ui:Ștergere}}.

## Copiere

1. Selectați barele și fundațiile dorite.
2. Alegeți {{ui:Copiere}} sau apăsați {{key:Mod+C}}.

Ce se copiază:

- Fiecare bară întreagă: profil, material, capete, poziție, rotație, nume, găuri și decupări. Un profil personalizat pe care îl folosește este copiat și el.
- Fiecare fundație întreagă: dimensiuni, beton, plasa de jos și barele de așteptare.
- Plăcile de capăt și plăcile de bază, dar numai dacă sunt copiate toate barele pe care le leagă o conexiune: placa de capăt a unei grinzi are nevoie de grindă și de stâlpul ei. Bara de stare arată câte conexiuni au fost lăsate afară. Ca să lăsați conexiuni afară intenționat, debifați **Copiere plăci de capăt și plăci de bază împreună cu barele lor** în [Setările DetailCraft](topic:settings).

O conexiune de una singură nu poate fi copiată; selectați în schimb barele ei. Ca să dați și altor îmbinări aceeași conexiune, folosiți {{ui:Similare}} (vezi [Plăci de capăt](topic:end-plates#copy-it-to-every-similar-joint)).

Copia rămâne în acest browser până copiați altceva. O altă filă sau fereastră DetailCraft din același browser o poate lipi, astfel că puteți copia un cadru dintr-un model și îl puteți lipi într-un alt model.

## Lipire pe o intersecție de grilă

1. Alegeți {{ui:Lipire}} sau apăsați {{key:Mod+V}}.
2. Mutați indicatorul peste vizualizare. Un contur punctat al copiei urmărește intersecția de grilă cea mai apropiată de indicator.
3. Faceți clic pe o intersecție. Punctul de bază al copiei (colțul ei cel mai de jos: cel mai mic x, y și z din tot ce s-a copiat) ajunge acolo.

Piesele lipite sunt selectate după aceea, așa că puteți lipi din nou în alt loc sau le puteți modifica. {{key:Esc}} anulează lipirea; copia rămâne în clipboard. {{ui:Plan}} și {{ui:Fațadă}} ușurează atingerea intersecției potrivite.

:::tip
Ca să repetați o travee, selectați barele travei (sau totul, cu {{key:Mod+A}}), copiați, lipiți și faceți clic pe intersecția situată o travee mai departe față de locul unde era colțul cel mai de jos al copiei.
:::

## Lipire de la tastatură

În timpul lipirii, panoul {{ui:Proprietăți}} arată ce există în clipboard și două formulare:

- {{ui:Lipire cu decalaj (mm, față de original)}}: introduceți x, y și z și alegeți {{ui:Lipire cu acest decalaj}}. Pornește cu decalajul din [Setările DetailCraft](topic:settings).
- {{ui:Lipire pe o intersecție de grilă}}: alegeți o grilă cu litere, o grilă cu cifre și un nivel și alegeți {{ui:Lipire aici}}. Punctul de bază ajunge acolo.

## Lipire în aceeași poziție

{{ui:Lipire în aceeași poziție}} ({{key:Mod+Shift+V}}) pune copia exact la coordonatele din care a fost copiată. Folosiți-o după {{ui:Decupare}} sau ca să aduceți piese dintr-un alt model în același loc. Dacă originalele există încă, copia stă peste ele, iar bara de stare vă avertizează: mutați copiile după {{ui:Început}} și {{ui:Sfârșit}} din {{ui:Proprietăți}} sau anulați.

## Duplicare

{{ui:Duplicare}} ({{key:Mod+D}}) copiază selecția și o lipește imediat, deplasată cu decalajul din [Setările DetailCraft](topic:settings) (6000 mm pe axa x, la început). Nu modifică ce este în clipboard. Copiile sunt selectate după aceea, deci apăsarea din nou a {{key:Mod+D}} face următoarea copie din ele.

## Decupare și ștergere

- {{ui:Decupare}} ({{key:Mod+X}}) copiază selecția, apoi o șterge. Lipiți-o acolo unde trebuie.
- {{ui:Ștergere}} ({{key:Delete}} sau {{key:Backspace}}) șterge selecția. Ștergerea unei bare șterge și conexiunile ei.

## Mărci după o lipire

Mărcile de piesă și de ansamblu nu sunt memorate; DetailCraft le numerotează din nou, din model, după fiecare modificare ([Cum se acordă mărcile](topic:mark-rules)). Deci:

- O copie care este aceeași piesă cu originalul (același profil, clasă, lungime tăiată, găuri și decupări) primește marca originalului, iar numărul din {{ui:Mărci de piese}} și din lista de materiale crește.
- O copie care ajunge diferită primește o marcă proprie. O grindă lipită fără plăcile sale de capăt, de exemplu, nu este tăiată înapoi, deci este o piesă diferită. Mărcile sunt numerotate din nou în tot modelul, așa că și numerele altor piese se pot schimba.

Fiecare bară, gaură, decupare, conexiune și fundație lipită primește un id nou, astfel că nimic din model nu este partajat între o copie și originalul ei.

## Dacă clipboard-ul este refuzat

Ce se află în clipboard este verificat la fel de atent ca un fișier de model pe care îl deschideți: orice nu este o piesă DetailCraft validă este eliminat, iar bara de stare spune ce s-a întâmplat. Un clipboard umplut de un DetailCraft mai nou sau de altceva este refuzat, cu un mesaj, și nu se lipește nimic. Dacă o fereastră privată nu poate păstra copia în stocarea browserului, copia funcționează în continuare în acea filă.
