---
title: Depanare
summary: Ce înseamnă mesajele DetailCraft și ce trebuie să faceți, de la o vedere 3D lipsă până la conexiuni care nu se construiesc.
keywords: problemă, eroare, nu funcționează, ajutor, reparare, mesaj, refuzat, webgl, gol, avertisment, nu se poate, probleme
from: f8c3b2b1
---

Majoritatea refuzurilor sunt explicate în bara de stare din partea de jos a ecranului sau în fila {{ui:Probleme}}. Citiți-le mai întâi. Mesajele de mai jos sunt citate așa cum le arată DetailCraft.

## Vederea 3D lipsește

**„Acest browser nu a putut porni grafica 3D (WebGL). Modelul, rapoartele și exporturile funcționează în continuare.”**

Browserul nu a putut porni WebGL, grafica 3D cu care desenează DetailCraft.

1. Actualizați browserul la ultima versiune.
2. Activați accelerarea hardware și reporniți browserul (vezi mai jos).
3. Actualizați driverul plăcii grafice sau încercați alt browser. Desktopurile de la distanță și mașinile virtuale nu au adesea WebGL.
4. Între timp puteți lucra: plasați elemente cu formularul {{ui:Adăugare după grilă}}, citiți rapoartele și exportați. Doar clicul în vedere are nevoie de WebGL.

:::chromium
Pentru a activa accelerarea hardware, deschideți **Setări, Sistem** și activați **Utilizare accelerare grafică când este disponibilă**, apoi relansați.
:::

:::firefox
Pentru a activa accelerarea hardware, deschideți **Setări, General, Performanță**, debifați **Utilizare setări de performanță recomandate** și bifați **Utilizare accelerare hardware când este disponibilă**. Reporniți Firefox.
:::

:::safari
Safari are WebGL activat implicit. Actualizați macOS dacă vederea tot nu pornește și verificați că nicio extensie nu îl blochează.
:::

Mai multe în [Browsere și calculatoare](common:browsers).

## Clicul în vedere nu face nimic

- **Nicio intersecție lângă clic.** Uneltele de plasare se fixează doar pe intersecțiile grilei. Un clic departe de orice punct nu face nimic. Apropiați-vă până când punctul se aprinde.
- **Unealta este {{ui:Selectare}} și ați dat clic pe spațiu gol.** Asta anulează selecția.
- **Ați tras.** O apăsare și o eliberare la mai mult de câțiva pixeli distanță este o tragere: rotește sau mută vederea.
- **Piesa este tăiată.** În {{ui:Plan}} și {{ui:Fațadă}}, oțelul din afara secțiunii este ascuns și nu poate fi dat clic. Treceți la {{ui:3D}}.
- **Intersecția este la nivelul greșit.** În {{ui:3D}}, intersecțiile de la mai multe niveluri se pot suprapune pe ecran; clicul ia cea mai apropiată. Folosiți {{ui:Plan}} sau {{ui:Fațadă}}.

## Mesaje la plasare

| Mesaj | Ce trebuie făcut |
|---|---|
| Nu există niciun nivel deasupra Level 2 la care să ajungă stâlpul. Adăugați mai întâi un nivel. | Adăugați un nivel în {{ui:Niveluri}}, sau dați clic pe un nivel inferior |
| Alegeți o altă intersecție pentru celălalt capăt. | Ați dat clic de două ori pe același punct |
| Cele două capete sunt același punct. | În {{ui:Adăugare după grilă}}, alegerile „De la” și „Până la” sunt aceleași |
| Adăugați linii de grilă în stânga pentru a plasa elemente. | Modelul nu are linii de grilă pe o direcție |
| Profil necunoscut „…” | Profilul nu este în catalog sau în profilele personalizate ale modelului. Alegeți unul din listă |
| Introduceți un număr. | Un câmp numeric a rămas gol sau are text |

## Conexiunile nu se construiesc

### „Această grindă nu se termină pe o linie de stâlp.”

Plăcile de capăt cer ca finalul grinzii să fie exact pe linia unui stâlp vertical, între baza și vârful lui (în limita de 1 mm). Verificați {{ui:Capete (x, y, z mm)}} ale grinzii și poziția stâlpului.

### „Această grindă intră în inima unui stâlp sau este oblică”

Sau în {{ui:Probleme}}: „Grinzile care intră în inima unui stâlp nu sunt încă realizate: rotiți stâlpul cu 90° sau folosiți altă conexiune.”

Grinda intră în inima stâlpului. Selectați stâlpul și setați {{ui:Rotire (°)}} la 90, apoi încercați din nou. Îmbinările oblice nu sunt încă realizate.

### „Plăcile de capăt sunt făcute doar pentru grinzi orizontale (această grindă este înclinată).”

Ambele capete ale grinzii trebuie să fie la aceeași înălțime.

### „Plăcile de capăt cer grinda în poziție verticală (rotire 0).”

Setați {{ui:Rotire (°)}} a grinzii înapoi la 0.

### „Plăcile de capăt cer o grindă cu profil I.” / „Plăcile de capăt cer un stâlp cu profil I.”

Doar profilele I (W, IPE, HEA, HEB sau un I personalizat) primesc plăci de capăt.

### „Capătul grinzii nu mai este pe linia stâlpului.”

Ați mutat grinda sau stâlpul după ce ați adăugat conexiunea. Mutați-l înapoi sau ștergeți conexiunea.

### „Conexiunile au redus acest element la nimic.”

Conexiunile de la ambele capete taie elementul mai mult decât lungimea lui, de exemplu o grindă foarte scurtă între doi stâlpi înalți. Verificați capetele elementului și grosimea plăcii.

### „Nicio altă îmbinare de acest fel … nu este fără conexiune.”

{{ui:Similare}} copiază doar către îmbinările cu același profil de grindă, același profil de stâlp și același tip de conexiune (grindă în talpă), care nu au încă o conexiune.

### „Ambele capete au deja conexiuni.” / „Acest stâlp are deja o placă de bază.”

Selectați conexiunea existentă ca s-o modificați, sau ștergeți-o mai întâi.

## Avertismente în fila Probleme

Avertismentele nu opresc construirea unei conexiuni sau a unei fundații; ele vă cer doar să verificați. Cele despre margini și pasuri folosesc minimele din EN 1993-1-8 Tabelul 3.3 (margine 1.2 × gaură, pas 2.2 × gaură, gabarit 2.4 × gaură). Dacă proiectul dvs. folosește alte reguli, avertismentul poate să nu se aplice; DetailCraft nu dimensionează conexiuni.

„o gaură este în afara capătului piesei” înseamnă că x al unei găuri este mai mic decât 0 sau mai mare decât lungimea tăiată. Rețineți că x se măsoară de la începutul tăierii, după ce conexiunile au tăiat piesa înapoi.

## Refuzuri la modificarea fundațiilor

| Mesaj | Ce trebuie făcut |
|---|---|
| Acoperirea nu lasă loc pentru bare în această fundație. | Faceți fundația mai mare sau acoperirea mai mică |
| Fundația este prea puțin adâncă pentru două straturi de bare în interiorul acoperirii. | Faceți-o mai adâncă sau reduceți acoperirea |
| Barele de așteptare nu încap în fundație cu o acoperire de 75 mm. | Mai puține bare de așteptare, distanțe mai mici sau o fundație mai mare |
| Distanța dintre bare trebuie să fie 50–1000 mm. | Introduceți o distanță în acest interval |
| Lungimea trebuie să fie 300–50000 mm. | Dimensiunile fundațiilor au limite: lungimea și lățimea de la 300 la 50000, adâncimea de la 150 la 10000 |

## Refuzuri la grile și niveluri

| Mesaj | Ce trebuie făcut |
|---|---|
| Grile numerotate: dați câte o distanță între fiecare pereche de linii (4). | Numărați intervalele: cinci linii înseamnă patru distanțe |
| Grile cu litere: distanțele trebuie să fie milimetri pozitivi. | Fără zerouri, valori negative sau text |
| Grile numerotate: etichetele grilelor trebuie să fie diferite. | Două linii au aceeași etichetă |
| Cel mult 60 de linii de grilă pe fiecare direcție. | Împărțiți modelul |
| Păstrați cel puțin un nivel. | Ați șters toate rândurile de nivel |
| Fiecare nivel trebuie să aibă un nume. / Două niveluri se numesc „…”. | Dați fiecărui nivel un nume diferit |

## Deschiderea unui fișier eșuează

| Mesaj | Cauză |
|---|---|
| DetailCraft deschide propriile modele (.detailcraft.json). Importul IFC nu este încă realizat. | Fișierul nu este un fișier `.json` |
| Acesta nu este un model DetailCraft (nu este JSON). | Fișierul este deteriorat sau este alt JSON |
| Acesta nu este un model DetailCraft. | Un fișier JSON de la alt program |
| Acest model a fost salvat de o versiune mai nouă de DetailCraft (format 2). | Deschideți-l în versiunea mai nouă de DetailCraft care l-a salvat |
| Acest fișier este prea mare ca să fie un model DetailCraft. | Peste 50 MB |

Când un fișier se deschide cu avertismente precum „2 elemente nu au fost valide și au fost omise.”, restul modelului este în regulă. Nu salvați peste originalul până nu ați verificat ce a fost omis.

## Exporturi

| Mesaj | Cauză |
|---|---|
| Nimic de exportat încă. | {{ui:IFC}} cu un model gol |
| Nu există piese cu profil I sau plăci pentru care să se scrie fișiere NC. | Modelul conține doar profile U, cornieri sau țevi |
| Nescris (deocamdată doar profile I și plăci): … | Acele marcaje nu sunt profile I sau plăci; restul au fost scrise |
| Nu există fundații, deci nu sunt bare de programat. | {{ui:Întinderi}} fără fundații |
| … caracter(e) din afara fontului PDF au fost tipărite ca „?”. | Numele modelului sau o clasă are caractere pe care fontul PDF nu le are |

{{ui:Desen de execuție}} estompat: modelul nu are încă piese.

## Descărcările nu apar

Fiecare salvare și export este o descărcare din browser. Verificați lista de descărcări a browserului. Dacă browserul cere confirmare înainte să descarce mai multe fișiere sau blochează descărcările de pe acest site, permiteți-le. În Safari, verificați butonul de descărcări din bara de instrumente.

## Tastele nu fac nimic

- Cursorul este într-un câmp de text sau numeric: tastele de unelte și {{key:Delete}} sunt ignorate acolo, ca să puteți scrie. Apăsați {{key:Tab}} sau dați clic în vedere.
- Este deschisă o casetă de dialog: închideți-o mai întâi.
- Browserul are tastatura (de exemplu bara de adrese): dați clic în DetailCraft.
- {{key:Ctrl+Shift+F}} folosește Ctrl chiar și pe Mac.

## Probleme offline

Butonul {{ui:Salvare pentru offline}} din bara aplicației arată în ce stare este copia offline. Cum funcționează salvarea: [Lucrul offline](common:offline).

| Butonul afișează | Ce înseamnă | Ce trebuie făcut |
|---|---|---|
| {{ui:Salvare pentru offline}} | Nu există încă o copie offline în acest browser | Alegeți-o cât sunteți online |
| Se salvează 5 din 20 | Salvarea este în curs | Așteptați până la {{ui:Pregătit pentru offline}}; lăsați fila deschisă |
| {{ui:Pregătit pentru offline}} | DetailCraft, vederea 3D, fiecare export și acest ajutor funcționează fără conexiune | Nimic. Dați clic pentru {{ui:Salvare din nou (obținere a celei mai noi versiuni)}} sau {{ui:Eliminare a copiei offline}} |
| {{ui:Nu s-a putut salva}} | Unele fișiere nu s-au descărcat | Verificați conexiunea și dați clic pentru a încerca din nou |
| {{ui:Modul offline nu este disponibil}} | Această fereastră nu poate păstra o copie offline: ferestrele private și unele calculatoare administrate o blochează | Folosiți o fereastră normală sau lucrați online |

Dacă sunteți offline și butonul nu arată {{ui:Pregătit pentru offline}}, nu reîncărcați și nu închideți fila: ce s-a încărcat continuă să funcționeze. Salvați modelul cu {{key:Mod+S}} și așteptați până reveniți online.

## Lucru nesalvat

Dacă browserul întreabă dacă să părăsiți pagina, DetailCraft are modificări nesalvate. Alegeți să rămâneți, apoi apăsați {{key:Mod+S}}. DetailCraft nu poate recupera un model după ce fila a fost închisă.

## Încă blocat

Notați ce ați făcut și mesajul exact, apoi scrieți-ne prin [pagina de asistență](https://getcadcraft.com/support).
