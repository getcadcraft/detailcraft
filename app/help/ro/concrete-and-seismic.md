---
title: Verificarea elementelor de beton și încărcările seismice
summary: Stabiliți armăturile grinzilor și stâlpilor de beton, verificați-le conform ACI 318-19, calculați forțele laterale echivalente ASCE 7-22 pe planșee rigide și vedeți derivarea de etaj. Un ajutor pentru ca un inginer să verifice.
keywords: beton, beton armat, ACI 318, ACI 318-19, armătură, grindă, stâlp, forfecare, cercuri, seismic, cutremur, forță laterală echivalentă, ELF, ASCE 7-22, derivă, derivă de etaj, planșee, diafragmă rigidă, greutate de etaj, utilizare, grad de utilizare, structural, inginer
from: 94d3001d
---

Blocurile {{ui:Elemente din beton}} și {{ui:Încărcări seismice}} din fila {{ui:Analiză}} verifică grinzile și stâlpii din beton armat și fac forțele laterale ale unui cutremur pe planșeele unui cadru. Ambele urmează rularea din fila {{ui:Analiză}} și sunt salvate cu modelul.

:::warning
Rezultatele sunt **pentru verificare de către un inginer**: un ajutor până când cineva le-a revizuit. Verificările de beton folosesc forțe de ordinul întâi, cu excepția cazului în care un stâlp dintr-un cadru pe care îl numiți fără deplasare laterală (non-sway) este proiectat pentru momentul său amplificat, fără amplificare de deplasare, fără proiectare la torsiune, fără detaliere seismică (capitolul 18 ACI) și fără detaliere a cercurilor. Încărcările seismice nu includ factorul de redundanță, efectul seismic vertical, amplificarea torsională și efectele P-delta. Încărcările de vânt nu sunt încă realizate.
:::

## Desenarea elementelor

Desenați elementele de beton ca dreptunghiuri: un profil {{ui:Placă}} precum `PL400x400` pentru un stâlp și `PL300x600` pentru o grindă dau secțiunea. Stâlpii și grinzile se așază ca orice alt element.

## Stabilirea secțiunilor

Blocul {{ui:Elemente din beton}} listează fiecare secțiune folosită de elemente. Apăsați {{ui:Configurare ca beton…}} pe cele care sunt din beton. DetailCraft citește lățimea **b** (de-a lungul axei y proprii a elementului) și adâncimea **h** (de-a lungul z) din profilul desenat, apoi cere:

- **acoperirea** până la centrul barelor, și barele de **sus**, **jos** și **laterale** (câte și ce diametru) pentru o grindă, sau un **cuib de stâlp** (bare pe b și pe h, ce diametru, cercuri în spirală) pentru un stâlp;
- **cercurile**: laturi, diametru și distanță;
- ce **funcționează** elementul: o grindă, un stâlp, sau decis după forțele sale (un element vertical sau unul care poartă mai mult de 0.10 f′c Ag este stâlp).

Setați f′c, limita de curgere a barelor fy și limita de curgere a cercurilor fyt (cel mult 420 MPa contează la forfecare), K și dacă cadrul este cu deplasare sau fără deplasare laterală deasupra lor. O secțiune setată ca beton este analizată ca beton: E = 4700 √f′c, 2400 kg/m³ și, implicit, cu **secțiuni fisurate** (stâlpi 0.70 Ig, grinzi 0.35 Ig; ACI 318-19 Tabelul 6.6.3.1.1(a)). Alegeți {{ui:Secțiuni brute}} pentru a dezactiva asta.

## Combinații și verificare

Dați cazurilor de încărcare tipul lor, apoi {{ui:Creare combinații}}: ACI 318-19 ia combinațiile de rezistență ale ASCE 7 (§5.3.1). Apăsați {{ui:Verificare beton}} și fiecare element primește o utilizare, colorată pe model ca verificările oțelului: încovoiere și armătura minimă (22.2, 9.6.1.2), deformația controlată de întindere (9.3.3.1), forfecarea cu cercurile (22.5, 9.6.3), distanța dintre cercuri și forța axială cu moment pentru stâlpi (22.4, cu metoda lui Bresler pentru încovoiere în două direcții). Un element a cărui secțiune desenată diferă de b × h pe care l-ați scris apare ca *verificat parțial*, la fel ca un stâlp zvelt sau o torsiune peste prag: acestea nu sunt proiectate.

Elementele peste capacitate sunt listate în {{ui:Probleme}}; acceptați una cu un motiv sau corectați secțiunea.

## Planșee și încărcări seismice

Un planșeu este un nivel unde cadrul este ținut împreună de o placă rigidă (o **diafragmă rigidă**). În blocul {{ui:Încărcări seismice}} apăsați {{ui:Găsire planșee}}: ia nivelurile unde se întâlnesc două sau mai multe grinzi. Apoi dați fiecărui planșeu **greutatea seismică**, scrisă sau citită: {{ui:Preluare greutăți din cazuri}} însumează încărcările verticale ale cazurilor cărora le dați un factor (cazul permanent este 1; adăugați 0.25 pentru un caz de încărcare utilă de depozitare sau zăpadă pe un acoperiș plat, cum cere ASCE 7-22 12.7.2). Încărcarea verticală a fiecărui nod merge la planșeul de la nivelul său sau de deasupra, deci un stâlp între două planșee dă jumătate din greutatea sa fiecăruia.

Completați valorile de proiectare: SDS, SD1, S1, R, Ie, Cd, TL, sistemul structural (pentru perioadă) și categoria de risc. {{ui:Creare cazuri seismice}} calculează apoi perioada din înălțimea clădirii (12.8.2.1), forța tăietoare la bază V = Cs W (12.8.1), o repartizează pe planșee (12.8.3) și scrie patru cazuri de încărcare, pe X și Y, cu torsiunea accidentală de 5 % în fiecare sens (12.8.4.2). Forțele pe etaje și verificarea derivei de etaj (12.8.6, Tabelul 12.12-1, derivarea Cd δxe / Ie față de 0.020 hsx) apar după o rulare; o derivă peste limită este și ea o problemă. Apăsați din nou {{ui:Creare combinații}} pentru a aduce cazurile seismice în combinații.

**Perioada din analiză.** Perioada aproximativă Ta vine din înălțimea clădirii. Când ați rulat analiza cu cazurile seismice, {{ui:Preluarea perioadei din analiză}} citește cât s-a deplasat fiecare planșeu sub forțe și calculează perioada prin metoda lui Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), o dată pentru X și o dată pentru Y; cazurile seismice sunt refăcute cu ea. Perioada folosită nu este niciodată mai mare decât Cu·Ta (ASCE 7-22 12.8.2), deci un model moale nu poate coborî forța tăietoare de la bază sub această valoare. Preluați din nou perioada după a doua rulare: se stabilizează într-un pas sau doi. Debifați {{ui:Perioada din analiză}} pentru a reveni la Ta.

**Stâlpi zvelți (ACI 318-19 6.6.4.5).** Pentru un cadru pe care îl numiți fără deplasare laterală, un stâlp al cărui k·ℓu/r este peste 34 + 12·M1/M2 (cel mult 40) este proiectat pentru momentul amplificat Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)², cu (EI)eff = 0.4 Ec Ig / (1 + βdns), iar momentul minim este Pu (15 + 0.03 h). βdns (0.6 la început) este partea din forța axială de calcul care este susținută permanent: introduceți propria valoare. Un stâlp a cărui Pu atinge 0.75 Pc eșuează cu propria verificare. Raportul listează valorile fiecărui stâlp zvelt. Într-un cadru **cu deplasare laterală**, un stâlp zvelt este încă „verificat parțial”: amplificarea sa necesită o analiză de ordinul doi, care nu este realizată.

**Plăci.** Când modelul are plăci, un bloc {{ui:Armătură planșeu}} ia momentele plăcii din fiecare combinație de rezistență și, prin regula Wood–Armer (încovoiere și torsiune împreună), calculează oțelul pe care îl cere fiecare strat pe metru: jos și sus, pe x și pe y. Dați grosimea, acoperirea și barele; tabelul arată necesarul față de cel dat și forfecarea într-o direcție față de φVc, iar un strat care nu ajunge este o problemă cu clauza sa. Săgeata, străpungerea la stâlpi și barele de margine la goluri nu sunt acoperite, iar momentul peste un reazem converge lent cu plăci cu patru noduri.

Fiecare planșeu pe care îl listați devine o diafragmă rigidă în analiză: grinzile sale nu preiau forță axială din mișcarea planșeului. Exportul CraftScript nu este făcut pentru un model cu planșee.

## Raportul

{{ui:Raport (PDF)}} și {{ui:Raport (CSV)}} primesc tabelele de beton (ipoteze, utilizare pe element, fiecare clauză), parametrii seismici și forța tăietoare de la bază, forțele pe planșee și tabelul derivei.
