---
title: Noutăți în 0.9 (anterioare)
summary: Dimensiuni de oțel din Blue Book-ul britanic și corniere inegale, desene de execuție pentru fiecare piesă într-un singur set PDF, Profilele mele pentru secțiuni personalizate, P-Delta și frecvențe proprii, încărcări din vânt ASCE 7, amplasament seismic și combinații, precum și cursoare live cu Urmărire.
keywords: noutăți 0.9, versiune anterioară, noutăți, note de lansare, jurnal de modificări, 0.9, oțel britanic, blue book, ub, uc, pfc, shs, rhs, chs, cornier inegal, desen de execuție, desene de execuție, set de planșe, marcă de piesă, pdf, profilele mele, profil personalizat, p-delta, ordinul doi, frecvență proprie, elemente finite, masă modală, încărcare din vânt, asce 7, seismic, clasa sitului, usgs, combinații de încărcări, lrfd, asd, live, cursoare, urmărire, persoane, indicații, noutăți, note de lansare, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, montaj, macara, diagrama de sarcină, film, pilot automat, conexiuni, armătură, aglomerare, fundație, talpă, radier, tasare, structură, lemn, profile ușoare, listă de debitare, constructibilitate, accesul la sudură, furnizor, stoc, termen de livrare, ce cedează primul, live, beton, seismic, planșeu, limbi, asistent
from: ab0c7f05
---

Iată ce s-a schimbat în DetailCraft 0.9, comparativ cu 0.8.1. 0.9 aduce dimensiunile de oțel britanice, un desen de execuție pentru fiecare piesă dintr-o singură dată, o filă {{ui:Analiză}} mai mare pentru cadre și o vizualizare a cursoarelor celorlalți când lucrați împreună.

## Noutăți

### Oțel britanic și desene de execuție

- **Dimensiuni de oțel britanice.** Listele de profile conțin acum 976 de dimensiuni din Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS și RHS, cu secțiunile tubulare formate la rece păstrate separat (numele lor încep cu CF). Numele sunt scrise cu familia întâi, cum ar fi UB305x165x40 sau SHS100x100x5.0, iar scrierea lor așa cum apar pe desene funcționează și ea: 305x165x40 UB, L100x100x10, SHS100x5. Vezi [Catalogul profilelor](topic:profile-catalog).
- **Corniere inegale.** Cornierele UEA își păstrează ambele aripi prin IFC la intrare și ieșire și prin fișierele NC, iar o oglindire întoarce piesa cap la cap.
- **Toate desenele de execuție deodată.** Alegeți {{ui:Desen de execuție}} în grupul {{ui:Ieșire}}, fără nimic selectat. Fereastra listează fiecare marcă de piesă, previzualizează oricare dintre ele, iar {{ui:Descărcare toate}} salvează un singur PDF cu câte o pagină pentru fiecare marcă, fiecare titrată „Foaia 3 din 42”. {{ui:Descărcare PDF}} salvează doar foaia pe care o vedeți. Canalele, cornierele și secțiunile tubulare primesc acum și ele foi. Vezi [Realizarea desenelor de execuție](topic:shop-drawings).
- **Profilele mele.** Un profil personalizat poate fi păstrat acum pentru fiecare model nou. În formularul profilului personalizat, lăsați bifat {{ui:Păstrare în Profilele mele}}; lista {{ui:Profilele mele}} de sub el are {{ui:Păstrare}}, {{ui:Utilizare aici}} și {{ui:Eliminare}}. Lista este păstrată în acest browser (până la 200), nu în contul dumneavoastră. Vezi [Plăci și profile](topic:plates-and-profiles).

### Analiză

- **Ordinul doi (P-Delta).** Bifați {{ui:Efecte de ordinul doi (P-Delta)}} lângă Rulare în fila {{ui:Analiză}}, iar forțele axiale acționează asupra cadrului deformat. Plăcile și planșeele rigide rămân de ordinul întâi, cu un avertisment. Vezi [Forțe, reacțiuni și deformări](topic:frame-analysis).
- **Frecvențe proprii.** Blocul {{ui:Elemente finite: frecvențe proprii}} de sub rezultate găsește cele mai joase moduri ale aceluiași model, cu perioada și masa modală efectivă, și arată un mod pe model. Vezi [Forțe, reacțiuni și deformări](topic:frame-analysis).
- **Încărcări din vânt și amplasament seismic.** Trei blocuri noi în fila {{ui:Analiză}}: {{ui:Încărcări din vânt (procedeul direcțional ASCE 7)}}, {{ui:Amplasament și sistem seismic (ASCE 7)}} și {{ui:Combinații de încărcări ASCE 7}}. Vezi [Vânt, amplasament seismic și combinații ASCE 7](topic:wind-seismic-combinations).

### Lucrul împreună

- **Cursoare și nume.** Într-o sesiune Live, indicatorul fiecărei persoane este desenat în model împreună cu numele și culoarea sa, iar ce a selectat primește o casetă.
- **Urmărirea unei persoane.** Deschideți {{ui:Persoane}} în sesiune și alegeți {{ui:Urmărire}} lângă un nume; vizualizarea dumneavoastră se mișcă odată cu a sa. Gazda poate alege {{ui:Cere tuturor să mă urmărească}}. Vezi [Urmărirea unei persoane într-o sesiune Live](topic:follow-in-live).

### În fiecare aplicație

- Indicațiile sunt indicații Bootstrap, cardul cu sfatul de pornire are un buton de închidere, șirurile de file derulează lateral când nu încap, iar numele filei browserului indică documentul deschis, urmat de DetailCraft și CadCraft.

## Remediate

- O bară personalizată se pierdea când începeați un model nou.
- Canalele, cornierele și secțiunile tubulare lipseau din setul de desene de execuție.

## Limite reale

- Blocurile pentru vânt, seismic și elemente finite sunt instrumente de ajutor pentru verificare. Inginerul dumneavoastră revizuiește rezultatele; ele nu sunt o verificare după cod. Căutarea USGS a fost testată pe un înlocuitor, nu pe serviciul live.
- Elementele finite și P-Delta au fost verificate față de răspunsuri de calcul manual și închise, nu față de o clădire reală. Analiza de flambaj nu este realizată.
- Niciun fabricant britanic nu a încercat încă dimensiunile britanice, iar fișierele NC pentru cornierele inegale nu au rulat pe o mașină.
- Setul de desene de execuție este doar în PDF.
- Limbile în afara engleză sunt ciorne făcute automat.
- Programele de instalare Windows nu sunt semnate digital (Mai multe informații, apoi Rulare oricum); imaginea de disc macOS nu este notarizată (clic dreapta, apoi Deschidere).

Modificările anterioare se află în notele pentru 0.8 și 0.8.1 mai jos pe această pagină.

## Anterioare: 0.8 și 0.8.1

Iată ce s-a schimbat în DetailCraft 0.8 (1 noiembrie 2026) și 0.8.1 (2 noiembrie 2026), comparativ cu 0.7. 0.7 verifica bare din oțel; 0.8 planifică ridicările, propune conexiunile, verifică fundațiile și armătura și realizează structuri din lemn și din profile ușoare pentru pereți, planșee și acoperișuri.

### Noutăți

**Montaj**

- **Plan de montaj și film.** În fila {{ui:Montaj}}, descrieți o macara (unde stă, cârligul său cel mai înalt, echipamentul de ridicare care nu se află în diagramă) și introduceți rândurile diagramei sale de sarcină. DetailCraft ridică modelul câte un ansamblu o dată, în ordinea fazelor și etaj cu etaj, și verifică fiecare ridicare față de diagramă, la raza sa și față de marja pe care o stabiliți. {{ui:Salvare film}} scrie un singur fișier HTML care se redă offline în orice browser, și pe telefon. Ridicările care depășesc diagrama, o trec sau sunt prea înalte apar în {{ui:Probleme}}. Este un plan făcut din cifrele dumneavoastră, nu un plan de ridicare. Vezi [Planul de montaj și filmul](topic:erection-movie).

**Conexiuni**

- **Pilotul automat al conexiunilor.** Fila {{ui:Pilot automat}} analizează fiecare îmbinare fără conexiune și propune una pe baza profilelor: plăci de bază, table de forfecare, plăci de capăt pentru grinzile marcate ca grinzi de moment, îmbinări de continuitate și guseie. Dați o încărcare uniformă sau o forfecare la un capăt, iar numărul de șuruburi urmează rezistența de calcul a șurubului. {{ui:Adăugare toate}} adaugă propunerile ca un singur pas de anulare. Sunt valori de pornire de revizuit, nu un proiect de conexiune.
- **Verificări de constructibilitate.** {{ui:Probleme}} pentru un șurub la care nu ajunge o cheie, șuruburi prea apropiate pentru cheia tubulară, cordoane de sudură în afara limitelor lor de dimensiune și secțiuni tubulare care rețin apa. Accesul la sudură este nou: un cordon de colț pe tot conturul, la care nu ajunge arzătorul sudorului, este listat cu piesa care stă în cale și cu partea din sudură afectată. Vezi [Verificări de constructibilitate](topic:constructability).

**Fundații și armătură**

- **Verificări ale fundațiilor.** Fila {{ui:Fundație}} verifică tălpi, tălpi combinate și radiere pe terenul pe care îl descrieți: capacitatea portantă, alunecarea și răsturnarea din încărcările de exploatare; încovoierea, forfecarea, străpungerea, ancorarea și armătura minimă din încărcările de calcul (ACI 318-19). O coloană aproape de o margine sau de un colț este verificată cu secțiunea tăiată de marginea tălpii. Tasarea rezultă din modulul terenului, un radier flexibil este rezolvat pe resorturi dintr-un modul de reacție a terenului, iar grupurile de piloți și zidurile de sprijin au panouri proprii. Încărcările din coloane pot fi introduse sau luate din {{ui:Analiză}}. Vezi [Verificări ale fundațiilor](topic:foundation-checks).
- **Harta aglomerării armăturii.** Fila {{ui:Aglomerare armătură}} desenează o hartă termică a fiecărei tălpi văzute de sus: unde barele lasă prea puțin loc ca betonul să ajungă jos, față de regula distanței libere și, dacă le dați, agregatul cel mai mare și capul vibratorului. Vezi [Harta aglomerării armăturii](topic:rebar-congestion).

**Structură și aprovizionare**

- **Structură din lemn și din profile ușoare.** Fila {{ui:Structură}} structurează panouri de pereți, planșee și acoperișuri cu fiecare piesă, o listă de debitare, stocul de cumpărat și un desen de execuție la scară. {{ui:Plasare ca elemente}} pune piesele în model, iar {{ui:Planșe PDF}} salvează câte o foaie pentru fiecare panou. Dimensiunile, distanțele și grinzile de capăt sunt ale dumneavoastră: DetailCraft nu verifică dacă ele preiau încărcările. Vezi [Panouri de structură din lemn și din profile ușoare](topic:framing-panels).
- **Stocul furnizorului și termenele de livrare.** Fila {{ui:Furnizor}} citește lista de stoc a unui furnizor (CSV) și arată, pentru fiecare secțiune pe care o cumpără lista de debitare, dacă există suficient în stoc și cât durează așteptarea. Lipsurile și secțiunile întârziate sunt în {{ui:Probleme}}. Nimic nu se comandă. Vezi [Stocul furnizorului și termenele de livrare](topic:supplier-stock).

**Analiză și proiectare**

- **Ce cedează primul?** În fila {{ui:Analiză}}, butonul găsește combinația de rezistență care guvernează, bara cea mai slabă, cât pot crește încărcările până când prima bară ajunge la limită și cea mai slabă placă de capăt sau tablă de forfecare, unde se cunoaște rezistența la forfecare a șuruburilor sale. Are nevoie mai întâi de combinații și de un cod de proiectare. Nu sunt verificate capacitatea la strivire, forfecarea în bloc, sudurile și pârghia. Asistentul dumneavoastră conectat poate cere același lucru.
- **Live.** Bifați {{ui:Live: rezolvare din nou după fiecare modificare}} și cadrul este rezolvat din nou după fiecare modificare.
- **Beton, mai mult.** O coloană zveltă dintr-un cadru fără deplasare laterală este proiectată pentru momentul său amplificat (ACI 318-19 6.6.4.5). Perioada seismică poate fi luată din analiză prin metoda Rayleigh. O placă din plăci primește armătura de care are nevoie fiecare strat din momentele sale, precum și forfecarea într-o direcție. Vezi [Verificarea elementelor din beton și crearea încărcărilor seismice](topic:concrete-and-seismic).
- **Pentru verificarea unui inginer.** Rezultatele pentru fundație, beton și Ce cedează primul? sunt instrumente de ajutor. Încărcările din vânt nu sunt realizate.

**În fiecare aplicație**

- **Limbi.** Ajutorul este disponibil în 54 de limbi. Cele în afara engleză sunt ciorne automate până le citește un vorbitor nativ; zece sunt noi (lituaniană, letonă, bosniacă, marathi, telugu, albaneză, afrikaans, filipineză, swahili, uzbecă).
- **Rânduri ale barei de instrumente.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri ale barei de instrumente}} alege încadrare, 2 rânduri sau 1 rând. O bară care încape deja rămâne așa cum este; restul derulează lateral.
- **Grila de proprietăți.** Câmpurile tălpii folosesc grila comună: categorii pliabile și o densitate compactă. Calculele scrise, cum ar fi 2*450, funcționează în continuare.
- **Dispozitive de intrare.** Touchpad-ul, creionul, mouse-ul 3D, controlerul și MIDI pot comanda aplicațiile. Vezi [Navigarea în 3D](topic:navigate-3d).
- **Panoul Probleme.** Avertismentele noilor verificări de mai sus apar în același panou {{ui:Probleme}} ca înainte.
- **Conectați asistentul AI.** Asistentul propriu, conectat prin CadCraft Studio, lucrează cu toate cele opt aplicații și vede doar ce permiteți. Conectarea dintr-un clic, conectorul găzduit și cheia proprie API din Studio urmează să fie adăugate. Vezi [Utilizarea DetailCraft cu un asistent AI](topic:use-with-ai-assistants).

### Remediate în 0.8.1

- **Limbi în Studio.** Studio și edițiile împachetate pot schimba limba în timpul rulării; înainte erau doar în engleză. Nu este încă testată pe toate platformele: spuneți-ne dacă limba nu se schimbă.
- **Selectarea cu fereastră de traversare.** Programele de instalare 0.8.1 au deja comportamentul corect de selectare cu fereastră, ca în versiunea web 0.8; un program de instalare mai vechi nu îl avea.
- **Tablete în portret.** Înălțimea rămasă a grilei revine pânzei, iar aspectul foii începe la 760 px sau mai puțin.

### Nu este încă în această versiune

- **Trimiterea NC către o mașină** nu este lansată.
- **Încărcările din vânt** pentru beton nu sunt realizate, iar verificările de beton și de fundație sunt pentru revizuirea unui inginer.
- **Semnarea digitală.** Programele de instalare Windows și imaginea .dmg pentru macOS nu sunt semnate, deci Windows poate avertiza, iar macOS cere clic dreapta, apoi Deschidere.

Modificările anterioare se află în [Noutăți în 0.7](topic:whats-new-0-7).
