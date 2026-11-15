---
title: Noutăți în 0.8 și 0.8.1
summary: Un film de montaj din diagrama de sarcini a unei macarale, un pilot automat pentru conexiuni, o hartă a aglomerării armăturii, verificări ale fundațiilor, panouri de cadre din lemn și din profile ușoare, verificări de constructibilitate și de accesibilitatea sudurilor, stocul furnizorilor, ce cedează primul, recalcularea live, verificări suplimentare ale betonului și corecturile din 0.8.1.
keywords: noutăți, ce este nou, note de lansare, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, montaj, macara, diagramă de sarcini, film, pilot automat, conexiuni, armătură, aglomerare, fundație, talpă, radier, tasare, cadru, lemn, profil ușor, listă de tăiere, constructibilitate, accesibilitate sudură, furnizor, stoc, termen de livrare, ce cedează primul, live, beton, seismic, placă, limbi, asistent
from: 6e33e052
---

Acestea sunt modificările din DetailCraft 0.8 (1 noiembrie 2026) și 0.8.1 (2 noiembrie 2026), față de 0.7. 0.7 verifica barele din oțel; 0.8 planifică ridicările, propune conexiunile, verifică fundațiile și armăturile și încadrează pereți, planșee și acoperișuri din lemn și din profile ușoare.

## Nou

### Montaj

- **Plan de montaj și film.** În fila {{ui:Erection}}, descrieți o macara (unde stă, cârligul său cel mai înalt, echipamentul de prindere care nu este în diagramă) și introduceți rândurile diagramei sale de sarcini. DetailCraft ridică modelul câte un ansamblu, în ordinea fazelor și etaj cu etaj, și verifică fiecare ridicare față de diagramă, la raza sa și față de marja pe care o setați. {{ui:Save movie}} scrie un singur fișier HTML care se redă offline în orice browser, inclusiv pe telefon. Ridicările care depășesc diagrama, o trec sau sunt prea înalte apar în {{ui:Problems}}. Este un plan din cifrele dvs., nu un plan de ridicare. Vedeți [Planul de montaj și filmul](topic:erection-movie).

### Conexiuni

- **Pilot automat pentru conexiuni.** Fila {{ui:Autopilot}} analizează fiecare îmbinare fără conexiune și propune una potrivit formelor: plăci de bază, plăcuțe de forfecare, plăci de capăt pentru grinzile marcate ca grinzi de moment, îmbinări de continuitate și guseie. Dați o sarcină uniformă sau o forfecare la un capăt, iar numărul de șuruburi urmează rezistența de calcul a șurubului. {{ui:Add them all}} adaugă propunerile ca un singur pas de anulare. Sunt valori de pornire de revizuit, nu un proiect de conexiune.
- **Verificări de constructibilitate.** {{ui:Problems}} pentru un șurub la care nu ajunge o cheie, șuruburi prea apropiate pentru cheia tubulară, suduri de colț în afara limitelor de dimensiune și profile goale care rețin apa. Accesibilitatea sudurii este nouă: o sudură de colț pe tot conturul, la care nu ajunge flacăra sudorului, este listată împreună cu piesa care stă în cale și cu procentul din sudură afectat. Vedeți [Verificări de constructibilitate](topic:constructability).

### Fundații și armături

- **Verificări ale fundațiilor.** Fila {{ui:Foundation}} verifică tălpi, tălpi combinate și radiere pe terenul pe care îl descrieți: capacitatea portantă, alunecarea și răsturnarea din sarcini de exploatare; încovoierea, forfecarea, străpungerea, ancorarea și armătura minimă din sarcini de calcul (ACI 318-19). O coloană aflată aproape de o margine sau de un colț este verificată cu secțiunea tăiată de marginea tălpii. Tasarea rezultă din modulul de deformație al terenului, un radier flexibil este rezolvat pe arcuri dintr-un modul de reacție a terenului, iar grupurile de piloți și zidurile de sprijin au panouri proprii. Sarcinile stâlpilor pot fi introduse sau luate din {{ui:Analysis}}. Vedeți [Verificări ale fundațiilor](topic:foundation-checks).
- **Harta aglomerării armăturii.** Fila {{ui:Congestion}} desenează o hartă termică a fiecărei tălpi, privită de sus: unde armăturile lasă prea puțin loc ca betonul să ajungă jos, față de regula distanței libere și, dacă le dați, agregatul cel mai mare și capul vibratorului. Vedeți [Harta aglomerării armăturii](topic:rebar-congestion).

### Cadre și aprovizionare

- **Cadre din lemn și din profile ușoare.** Fila {{ui:Framing}} încadrează panouri de pereți, planșee și acoperișuri, cu fiecare piesă, o listă de tăiere, materialul de cumpărat și un desen de execuție la scară. {{ui:Place as members}} pune piesele în model, iar {{ui:PDF sheets}} salvează câte o planșă pentru fiecare panou. Dimensiunile, distanțele și buiandrugii sunt ale dvs.: DetailCraft nu verifică dacă acestea preiau sarcina. Vedeți [Panourile de cadru din lemn și din profile ușoare](topic:framing-panels).
- **Stocul furnizorului și termenele de livrare.** Fila {{ui:Supply}} citește lista de stoc a unui furnizor (CSV) și arată, pentru fiecare secțiune pe care o cere lista de tăiere, dacă există suficient în stoc și cât durează așteptarea. Lipsurile și secțiunile întârziate sunt în {{ui:Problems}}. Nimic nu se comandă. Vedeți [Stocul furnizorului și termenele de livrare](topic:supplier-stock).

### Analiză și proiectare

- **Ce cedează primul?** În fila {{ui:Analysis}}, butonul găsește combinația de rezistență care guvernează, bara cea mai slabă, cât pot crește sarcinile până când prima bară atinge limita sa, și cea mai slabă placă de capăt sau plăcuță de forfecare, acolo unde rezistența la forfecare a șuruburilor sale este cunoscută. Are nevoie întâi de combinații și de un cod de proiectare. Strivirea, forfecarea de bloc, sudurile și pârghierea nu sunt verificate. Asistentul conectat poate cere același lucru.
- **Live.** Bifați {{ui:Live: solve again after each edit}} și cadrul este rezolvat din nou după fiecare modificare.
- **Beton, și altele.** O coloană zveltă dintr-un cadru fără deplasare laterală este proiectată pentru momentul său amplificat (ACI 318-19 6.6.4.5). Perioada seismică poate fi luată din analiză prin metoda Rayleigh. O placă realizată din plăci primește oțelul necesar fiecărui strat din momentele sale, precum și forfecarea într-o direcție. Vedeți [Verificarea elementelor din beton și încărcările seismice](topic:concrete-and-seismic).
- **Pentru verificarea unui inginer.** Rezultatele pentru fundații, beton și din „Ce cedează primul?” sunt ajutoare. Încărcările de vânt sunt încă nerealizate.

### În toate aplicațiile

- **Limbi.** Ajutorul este în 54 de limbi. Cele diferite de engleză sunt ciorne generate automat, până când le citește un vorbitor nativ; zece sunt noi (lituaniană, letonă, bosniacă, marathi, telugu, albaneză, afrikaans, filipineză, swahili, uzbekă).
- **Rânduri ale barei de instrumente.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} alege încadrarea automată, 2 rânduri sau 1 rând. O bară care încape deja rămâne cum este; restul se derulează lateral.
- **Grila de proprietăți.** Câmpurile tălpii folosesc grila comună: categorii pliabile și densitate compactă. Aritmetica tastată, precum 2*450, funcționează în continuare.
- **Dispozitive de intrare.** Touchpadul, creionul, mouse-ul 3D, controlerul și MIDI pot comanda aplicațiile. Vedeți [Navigarea în 3D](topic:navigate-3d).
- **Panoul de probleme.** Avertismentele noilor verificări de mai sus apar în același panou {{ui:Problems}} ca înainte.
- **Conectați-vă AI-ul.** Un asistent propriu, conectat prin CadCraft Studio, funcționează cu toate cele opt aplicații și vede doar ce permiteți. Conectarea dintr-un clic, conectorul găzduit și cheia proprie de API din Studio urmează încă. Vedeți [Folosirea DetailCraft cu un asistent AI](topic:use-with-ai-assistants).

## Corectat în 0.8.1

- **Limbile în Studio.** Studio și edițiile împachetate pot schimba limba în timpul rulării; înainte erau doar în engleză. Nu este încă testat pe fiecare platformă: spuneți-ne dacă limba nu se schimbă.
- **Selectarea cu fereastră de intersectare.** Programele de instalare 0.8.1 includ deja comportamentul corect al selectării prin fereastră din versiunea web 0.8; un program de instalare mai vechi nu îl avea.
- **Tablete în orientare verticală.** Înălțimea rămasă a grilei merge la pânza de desenare, iar aspectul foii începe la 760 px sau mai puțin.

## Nu este încă în această versiune

- **Trimiterea NC către o mașină** nu este lansată.
- **Încărcările de vânt** pentru beton nu sunt încă realizate, iar verificările betonului și ale fundațiilor sunt pentru un inginer să le revizuiască.
- **Semnarea codului.** Programele de instalare Windows și fișierul .dmg pentru macOS nu sunt semnate, deci Windows poate avertiza, iar macOS cere clic dreapta, apoi Deschidere.

Modificările anterioare sunt în [Noutăți în 0.7](topic:whats-new-0-7).
