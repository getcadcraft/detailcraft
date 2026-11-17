---
title: Realizarea desenelor de execuție
summary: Câte o foaie pentru fiecare marcă de piesă, făcute toate deodată: previzualizați oricare dintre ele și descărcați o foaie sau întregul set ca PDF pe A4 până la A1 sau ANSI B până la D, cu găuri, decupări, cote și cartuș.
keywords: desen de execuție, desene de execuție, toate piesele, lot, set complet, desen al unei singure piese, desen de fabricație, pdf, desen de detaliu, desen de bucată, imprimare
from: d25fe035
---

DetailCraft face o foaie pentru fiecare marcă de piesă, pentru fiecare grindă, stâlp, contravântuire și placă din model, toate deodată: nu trebuie să le selectați una câte una. Piesele identice au aceeași marcă, deci au aceeași foaie. Foile sunt făcute pe loc din model; nu sunt stocate și nu se editează.

## Realizarea întregului set

1. Alegeți {{ui:Desen de execuție}} din grupul {{ui:Ieșire}}. Nu trebuie să fie selectat nimic. Cu o piesă selectată, fereastra se deschide pe foaia acelei piese. În panoul {{ui:Proprietăți}}, același buton se numește {{ui:Desen de execuție}} pentru elemente și {{ui:Desen placă}} pentru conexiuni.
2. Se deschide o previzualizare, cu titlul marcat de marca piesei, de exemplu „Desen de execuție b1”. Prima listă de lângă titlu conține fiecare marcă de piesă, cu profilul, lungimea și cantitatea sa: alegeți una pentru a vedea foaia ei. A doua listă schimbă dimensiunea foii; întregul set se face din nou pe ea (vezi [Desene de ansamblu și de aranjament general](topic:drawings#choose-the-sheet-size)).
3. Alegeți {{ui:Descărcare tot}} (butonul arată numărul de foi) pentru un singur PDF cu câte o pagină pentru fiecare marcă de piesă, `<name> Shop drawings.pdf`. Fiecare foaie spune „Foaia 3 din 42” în cartușul său. Sau alegeți {{ui:Descărcare PDF}} pentru foaia pe care o vedeți, `<name> <mark>.pdf`.
4. Închideți previzualizarea cu × sau cu {{key:Esc}}.

Dacă {{ui:Desen de execuție}} este estompat, modelul nu are încă piese.

## Ce apare pe foaie

Pentru un profil I:

- **Fațada**, privind inima: piesa cu decupările ei, găurile din inimă ca cercuri și găurile din tălpi ca linii ascunse (punctate).
- **Planul tălpii de sus**, văzut de sus, când vreo talpă are găuri. Găurile tălpii de jos apar punctate.
- **Secțiunea** prin profil.
- **Cote:** poziții înlănțuite ale găurilor de-a lungul piesei plus lungimea totală, înălțimile găurilor din inimă, ecartamentul și dimensiunile decupărilor.
- **Lista găurilor:** fiecare grup de găuri, de exemplu „8 x Ø22 în talpa de sus”.
- **Sudura**, când piesa are plăci sudate de ea.
- **Cartușul:** marca piesei, marca ansamblului, profilul, materialul, lungimea, cantitatea, greutatea unitară și totală, numele modelului și data.

Pentru un canal, un cornier sau o secțiune goală, foaia este aceeași, privind inima sau latura: pereții unei țevi sunt linii ascunse (punctate), iar secțiunea dă grosimea peretelui.

Pentru o placă: fața plăcii cu găurile ei și marginea ei ca secțiune.

## Scările

Scara se alege dintr-o listă (1:1 până la 1:200) astfel încât piesa să încapă pe foaie. O piesă lungă și joasă ar fi prea subțire ca să se citească la o singură scară, așa că, atunci când adâncimea ar ieși sub 30 mm pe hârtie, adâncimea este desenată la o scară mai mare decât lungimea. Titlul vederii spune asta, de exemplu „lungime 1:20, adâncime 1:5 (nu la o singură scară; contează cotele)”. Citiți întotdeauna dimensiunile din cote, nu măsurând foaia.

## De reținut

- Cantitatea este numărul de piese cu acea marcă din model. Mărcile se pot renumerota după o modificare; vezi [Verificarea mărcilor și a listei de materiale](topic:marks-and-bom).
- Fiecare foaie este o singură piesă, fără simboluri de sudură; desenele de ansamblu (cu simboluri de sudură) și desenele de aranjament general sunt în [Desene](topic:drawings). Foaia nu poate fi editată sau adnotată în DetailCraft. Pentru a o marca, deschideți PDF-ul într-o aplicație de adnotare PDF, cum este MarkupCraft.
- Cartușul spune „DetailCraft lab build — millimeters”.
- Textul folosește fontul standard PDF Helvetica. Caracterele din afara setului Europei de Vest se imprimă ca „?”, iar bara de stare le numără.

## Imprimarea

Deschideți PDF-ul descărcat în vizualizatorul dumneavoastră de PDF și imprimați-l la 100% (fără „potrivire la pagină”), pe hârtie de dimensiunea aleasă, dacă doriți ca scările afișate să rămână valabile. Pe o foaie mai mică, scalați-l și bazați-vă pe cote.
