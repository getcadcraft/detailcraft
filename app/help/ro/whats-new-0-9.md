---
title: Noutăți în versiunea 0.9
summary: Dimensiuni de oțel din Blue Book-ul britanic și corniere inegale, desene de execuție pentru fiecare piesă într-un singur set PDF, Profilele mele pentru secțiuni personalizate, P-Delta și frecvențe proprii, încărcări din vânt ASCE 7, amplasament seismic și combinații, precum și cursoare vii și Urmărire.
keywords: noutăți, ce este nou, note de lansare, jurnal de modificări, 0.9, oțel britanic, blue book, ub, uc, pfc, shs, rhs, chs, cornier inegal, desen de execuție, desene de execuție, set de planșe, marcă de piesă, pdf, profilele mele, profil personalizat, p-delta, ordinul doi, frecvență proprie, elemente finite, masă modală, încărcare din vânt, asce 7, seismic, clasă de teren, usgs, combinații de încărcări, lrfd, asd, live, cursoare, urmărire, persoane, sfaturi, noutăți, ce este nou, note de lansare, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, montaj, macara, diagramă de sarcină, film, pilot automat, îmbinări, armătură, aglomerare, fundație, talpă, radier, tasare, structură, lemn, tablă ușoară, listă de debitare, constructibilitate, accesul sudurii, furnizor, stoc, termen de livrare, ce cedează primul, live, beton, seismic, placă, limbi, asistent
from: 4c95a2de
---

Iată ce s-a modificat în DetailCraft 0.9, comparativ cu 0.8.1. Versiunea 0.9 aduce dimensiunile de oțel britanice, un desen de execuție pentru fiecare piesă dintr-o singură dată, o filă {{ui:Analysis}} mai mare pentru cadre și o vizualizare a cursoarelor celorlalți când lucrați împreună.

## Noi

### Oțel britanic și desene de execuție

- **Dimensiuni de oțel britanice.** Listele de profile conțin acum 976 de dimensiuni din Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS și RHS, profilele tubulare formate la rece fiind separate (numele lor încep cu CF). Numele se scriu începând cu familia, ca UB305x165x40 sau SHS100x100x5.0, iar scrierea lor așa cum apar în desene funcționează și ea: 305x165x40 UB, L100x100x10, SHS100x5. Vezi [Catalogul de profile](topic:profile-catalog).
- **Corniere inegale.** Cornierele UEA păstrează ambele aripi prin IFC intrare și ieșire și prin fișierele NC, iar o oglindire întoarce piesa de la un capăt la celălalt.
- **Toate desenele de execuție deodată.** Alegeți {{ui:Shop drawing}} din grupul {{ui:Output}} fără nimic selectat. Fereastra listează fiecare marcă de piesă, previzualizează oricare dintre ele, iar {{ui:Descărcare toate}} salvează un singur PDF cu o pagină pentru fiecare marcă, fiecare titrată „Foaia 3 din 42”. {{ui:Download this sheet}} salvează doar foaia pe care o vedeți. Canalele, cornierele și profilele tubulare primesc acum și ele foi. Vezi [Realizarea desenelor de execuție](topic:shop-drawings).
- **Profilele mele.** Un profil personalizat poate fi păstrat acum pentru fiecare model nou. În formularul Profil personalizat, lăsați bifată opțiunea {{ui:Păstrare în Profilele mele}}; lista {{ui:My profiles}} de sub ea are {{ui:Keep}}, {{ui:Use here}} și {{ui:Remove}}. Lista se păstrează în acest browser (până la 200), nu în contul dvs. Vezi [Plăci și profile](topic:plates-and-profiles).

### Analiză

- **Ordinul doi (P-Delta).** Bifați {{ui:Second order (P-Delta)}} lângă {{ui:Run}} din fila {{ui:Analysis}}, iar forțele axiale acționează asupra cadrului deformat. Plăcile și planșeele rigide rămân de ordinul întâi, cu un avertisment. Vezi [Forțe, reacțiuni și deformări](topic:frame-analysis).
- **Frecvențe proprii.** Blocul {{ui:Finite elements: natural frequencies}} de sub rezultate găsește cele mai joase moduri ale aceluiași model, cu perioadă și masă modală efectivă, și arată un mod pe model. Vezi [Forțe, reacțiuni și deformări](topic:frame-analysis).
- **Încărcări din vânt și amplasament seismic.** Trei blocuri noi în fila {{ui:Analysis}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} și {{ui:ASCE 7 load combinations}}. Vezi [Vânt, amplasament seismic și combinații ASCE 7](topic:wind-seismic-combinations).

### Lucrul împreună

- **Cursoare și nume.** Într-o sesiune Live, indicatorul fiecărei persoane este desenat în model împreună cu numele și culoarea sa, iar ce a selectat primește o casetă.
- **Urmărirea unei persoane.** Deschideți {{ui:People}} în sesiune și alegeți {{ui:Follow}} lângă un nume; vizualizarea dvs. se mișcă odată cu a lor. Gazda poate alege {{ui:Ask everyone to follow me}}. Vezi [Urmărirea unei persoane într-o sesiune Live](topic:follow-in-live).

### În fiecare aplicație

- Indicațiile la trecerea cursorului sunt tooltip-uri Bootstrap, cartela de sfat de la pornire are un buton de închidere, bara filelor se derulează lateral când nu încape, iar fila browserului indică documentul deschis, urmat de DetailCraft și CadCraft.

## Corectat

- Un profil personalizat se pierdea când începeați un model nou.
- Canalele, cornierele și profilele tubulare lipseau din setul de desene de execuție.

## Limite reale

- Blocurile de vânt, seism și elemente finite sunt ajutoare de verificare. Inginerul dvs. revizuiește rezultatele; ele nu sunt o verificare de cod. Căutarea USGS a fost testată pe un înlocuitor, nu pe serviciul live.
- Elementele finite și P-Delta au fost verificate prin răspunsuri manuale și în formă închisă, nu pe o clădire reală. Analiza la flambaj nu este realizată.
- Niciun fabricant britanic nu a încercat încă dimensiunile britanice, iar fișierele NC pentru cornierele inegale nu au rulat încă pe o mașină.
- Setul de desene de execuție este doar în PDF.
- Limbile în afară de engleză sunt ciorne automate.
- Programele de instalare pentru Windows nu au semnătură de cod (More info, apoi Run anyway); imaginea de disc pentru macOS nu este notarizată (clic dreapta, apoi Open).

Modificările anterioare se află în notele 0.8 și 0.8.1 mai jos pe această pagină.

## Anterioare: 0.8 și 0.8.1

Iată ce s-a modificat în DetailCraft 0.8 (1 noiembrie 2026) și 0.8.1 (2 noiembrie 2026), comparativ cu 0.7. Versiunea 0.7 verifica barele din oțel; 0.8 planifică ridicările, propune îmbinările, verifică fundațiile și armătura și realizează cadrul pentru pereți, planșee și acoperișuri din lemn și din tablă ușoară.

### Noi

**Montaj**

- **Plan de montaj și film.** În fila {{ui:Erection}}, descrieți o macara (unde stă, cârligul său cel mai înalt, echipamentul de legare care nu apare în diagramă) și scrieți rândurile diagramei sale de sarcină. DetailCraft ridică modelul câte un ansamblu o dată, în ordinea fazelor și nivel cu nivel, și verifică fiecare ridicare față de diagramă, la raza sa și față de marja pe care o stabiliți. {{ui:Save movie}} scrie un singur fișier HTML care se redă offline în orice browser, și pe telefon. Ridicările care depășesc diagrama, trec peste ea sau sunt prea înalte apar în {{ui:Problems}}. Este un plan după cifrele dvs., nu un plan de ridicare. Vezi [Planul de montaj și filmul](topic:erection-movie).

**Îmbinări**

- **Pilot automat pentru îmbinări.** Fila {{ui:Autopilot}} analizează fiecare nod fără îmbinare și propune una după profile: plăci de bază, table de forfecare, plăci de capăt pentru grinzile marcate ca grinzi de moment, îmbinări de continuitate și guseie. Dați o încărcare uniformă sau o forfecare la un capăt, iar numărul de șuruburi urmează rezistența de calcul a șurubului. {{ui:Add them all}} adaugă propunerile ca un singur pas de anulare. Sunt valori de pornire de revizuit, nu o proiectare a îmbinării.
- **Verificări de constructibilitate.** {{ui:Problems}} pentru un șurub la care nu ajunge o cheie, șuruburi prea apropiate pentru cheia de tubulare, suduri de colț în afara limitelor de dimensiune și profile tubulare care rețin apa. Accesul la sudură este nou: o sudură de colț pe tot conturul, la care nu ajunge flacăra sudorului, este listată împreună cu piesa din cale și cu partea din sudură afectată. Vezi [Verificări de constructibilitate](topic:constructability).

**Fundații și armătură**

- **Verificări ale fundațiilor.** Fila {{ui:Foundation}} verifică tălpi, tălpi combinate și radiere pe terenul pe care îl descrieți: capacitatea portantă, alunecarea și răsturnarea din încărcările de exploatare; încovoierea, forfecarea, străpungerea, ancorarea și armătura minimă din încărcările de calcul (ACI 318-19). Un stâlp aproape de o margine sau de un colț este verificat cu secțiunea tăiată de marginea tălpii. Tasarea rezultă din modulul terenului, o placă flexibilă se rezolvă pe resorturi dintr-un modul de reacție al terenului, iar grupurile de piloți și zidurile de sprijin au panouri proprii. Încărcările stâlpilor pot fi scrise sau luate din {{ui:Analysis}}. Vezi [Verificări ale fundațiilor](topic:foundation-checks).
- **Harta aglomerării armăturii.** Fila {{ui:Congestion}} desenează o hartă termică a fiecărei tălpi văzute de sus: unde barele lasă prea puțin loc ca betonul să ajungă jos, față de regula distanței libere și, dacă le indicați, agregatul cel mai mare și capul vibratorului. Vezi [Harta aglomerării armăturii](topic:rebar-congestion).

**Structură și aprovizionare**

- **Structură din lemn și din tablă ușoară.** Fila {{ui:Framing}} realizează panourile de pereți, planșee și acoperiș cu fiecare piesă, o listă de debitare, materialul de cumpărat și un desen de execuție la scară. {{ui:Place as members}} pune piesele în model, iar {{ui:PDF sheets}} salvează câte o foaie pentru fiecare panou. Dimensiunile, distanțele și grinzile de capăt sunt ale dvs.: DetailCraft nu verifică dacă preiau încărcarea. Vezi [Panourile de structură din lemn și din tablă ușoară](topic:framing-panels).
- **Stocul furnizorului și termenele de livrare.** Fila {{ui:Supply}} citește lista de stoc a unui furnizor (CSV) și arată, pentru fiecare secțiune pe care o cere lista de debitare, dacă există suficient în stoc și cât durează așteptarea. Lipsurile și secțiunile întârziate apar în {{ui:Problems}}. Nimic nu se comandă. Vezi [Stocul furnizorului și termenele de livrare](topic:supplier-stock).

**Analiză și proiectare**

- **Ce cedează primul?** În fila {{ui:Analysis}}, butonul găsește combinația de rezistență determinantă, bara cea mai slabă, cât pot crește încărcările până când prima bară ajunge la limită și cea mai slabă placă de capăt sau tablă de forfecare, acolo unde se cunoaște rezistența la forfecare a șuruburilor. Are nevoie mai întâi de combinații și de un cod de proiectare. Strivirea, forfecarea blocului, sudurile și pârghia nu sunt verificate. Asistentul dvs. conectat poate cere același lucru.
- **Live.** Bifați {{ui:Live: solve again after each edit}}, iar cadrul se rezolvă din nou după fiecare modificare.
- **Beton, și mai mult.** Un stâlp zvelt dintr-un cadru fără deplasare este proiectat pentru momentul său amplificat (ACI 318-19 6.6.4.5). Perioada seismică poate fi luată din analiză prin metoda Rayleigh. O placă realizată din plăci primește armătura de care are nevoie fiecare strat din momentele sale, precum și forfecarea într-o direcție. Vezi [Verificarea elementelor din beton și realizarea încărcărilor seismice](topic:concrete-and-seismic).
- **Pentru verificarea unui inginer.** Rezultatele pentru fundații, beton și Ce cedează primul? sunt ajutoare. Încărcările din vânt nu sunt realizate.

**În fiecare aplicație**

- **Limbi.** Ajutorul este în 54 de limbi. Cele în afara engleză sunt ciorne automate până le citește un vorbitor nativ; zece sunt noi (lituaniană, letonă, bosniacă, marathi, telugu, albaneză, afrikaans, filipineză, swahili, uzbekă).
- **Rândurile barei de instrumente.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} alege încadrare, 2 rânduri sau 1 rând. O bară care încape deja rămâne așa; restul se derulează lateral.
- **Grila de proprietăți.** Câmpurile tălpii folosesc grila comună: categorii pliabile și o densitate compactă. Aritmetica scrisă, precum 2*450, funcționează în continuare.
- **Dispozitive de intrare.** Touchpad-ul, creionul, mouse-ul 3D, comanda și MIDI pot controla aplicațiile. Vezi [Navigarea în 3D](topic:navigate-3d).
- **Panoul Probleme.** Avertismentele noilor verificări de mai sus apar în același panou {{ui:Problems}} ca înainte.
- **Conectați-vă AI-ul.** Asistentul dvs., conectat prin CadCraft Studio, funcționează cu toate cele opt aplicații și vede doar ce permiteți. Conectarea dintr-un clic, conectorul găzduit și cheia proprie de API în Studio sunt încă în lucru. Vezi [Folosirea DetailCraft cu un asistent AI](topic:use-with-ai-assistants).

### Corectat în 0.8.1

- **Limbi în Studio.** Studio și edițiile împachetate pot schimba limba în timpul rulării; înainte erau doar în engleză. Nu este încă testat pe toate platformele: spuneți-ne dacă limba nu se schimbă.
- **Selectarea cu fereastră de trecere.** Programele de instalare 0.8.1 au deja comportamentul corect de selectare cu fereastră din versiunea web 0.8; un program de instalare mai vechi nu îl avea.
- **Tablete în portret.** Înălțimea rămasă a grilei merge la pânză, iar aspectul foii începe la 760 px sau mai puțin.

### Încă nerealizat în această versiune

- **Trimiterea fișierelor NC către o mașină** nu este lansată.
- **Încărcările din vânt** pentru beton nu sunt realizate, iar verificările betonului și ale fundațiilor sunt pentru revizuirea unui inginer.
- **Semnarea de cod.** Programele de instalare pentru Windows și imaginea .dmg pentru macOS nu sunt semnate, așa că Windows poate avertiza, iar macOS cere clic dreapta, apoi Open.

Modificările anterioare se află în [Noutăți în versiunea 0.7](topic:whats-new-0-7).
