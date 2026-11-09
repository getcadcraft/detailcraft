---
title: Deschidere, salvare și export de fișiere
summary: Fișierul de model DetailCraft, fiecare export pe care îl scrie, locul unde ajung fișierele și ce diferă între browsere și conexiuni.
keywords: deschidere, salvare, export, descărcare, fișier, json, ifc, nc1, dstv, csv, pdf, zip, formate, import
from: 6fbc8e8f
---

DetailCraft are un fișier propriu, modelul, și cinci exporturi. Fiecare salvare și fiecare export este o descărcare. Nimic nu se încarcă pe un server și nimic nu se păstrează pe un server.

## Fișierul de model

Un model DetailCraft se salvează ca `<name>.detailcraft.json`, unde `<name>` este numele modelului din panoul {{ui:Model}}. Acesta conține grilele, nivelurile, barele (cu găurile și decupările lor), conexiunile și setările lor, tălpile de fundare și profilele personalizate.

Piesele, mărcile, șuruburile, sudurile și armăturile nu sunt stocate: DetailCraft le recalculează din model de fiecare dată când îl deschide. De aceea fișierul de model este mic.

### Salvare

1. Scrieți un nume în câmpul {{ui:Name}} din partea de sus a panoului {{ui:Model}}.
2. Alegeți {{ui:Save}} din grupul {{ui:File}} sau apăsați {{key:Mod+S}}.
3. Browserul descarcă `<name>.detailcraft.json`. Bara de stare afișează „Salvat … (descărcat)”, iar punctul de la începutul titlului filei browserului dispare.

Fiecare salvare este o descărcare nouă. Browserul nu suprascrie fișierul deschis; în funcție de setările sale, adaugă un număr la nume, de exemplu `Frame (1).detailcraft.json`, sau întreabă unde să salveze. Păstrați propriile versiuni redenumind descărcările.

:::chromium
Chrome și Edge salvează în dosarul Descărcări, dacă opțiunea **Întreabă unde să salvezi fiecare fișier înainte de descărcare** nu este activată în setările de descărcare ale browserului. Activați-o dacă doriți să alegeți de fiecare dată un dosar și un nume de fișier.
:::

:::firefox
Firefox salvează în dosarul Descărcări sau întreabă de fiecare dată dacă opțiunea **Întreabă-mă întotdeauna unde să salvez fișierele** este activată în setări.
:::

:::safari
Safari salvează în dosarul Descărcări. Pentru a schimba dosarul, deschideți **Safari, Setări, General, Locul de descărcare a fișierelor**.
:::

### Deschidere

1. Alegeți {{ui:Open}} din grupul {{ui:File}} sau apăsați {{key:Mod+O}}.
2. Selectați un fișier `.detailcraft.json`.

Sau trageți fișierul din {{pick:mac=Finder|windows=File Explorer|linux=managerul de fișiere}} și plasați-l pe vizualizare. Vizualizarea afișează „Plasați un model DetailCraft pentru a-l deschide” cât timp trageți.

Dacă modelul deschis are modificări nesalvate, DetailCraft întreabă mai întâi: {{ui:Cancel}}, {{ui:Discard changes}} sau {{ui:Save first}}.

DetailCraft verifică fiecare câmp al unui fișier înainte să îl folosească. Ce nu poate folosi este lăsat deoparte, iar bara de stare spune ce anume, de exemplu „2 bare nu erau valide și au fost lăsate deoparte.” Un model salvat de un DetailCraft mai nou este refuzat cu un mesaj, în loc să fie deschis pe jumătate corect.

### Ce se deschide

Fișierele proprii de model (`.json`, până la 50 MB) și fișierele IFC (`.ifc`, IFC2X3 sau IFC4, până la 200 MB). Un fișier IFC, deschis sau importat cu {{ui:Import IFC}}, devine un model nou cu grinzile, stâlpii, barele, plăcile, grilele și nivelurile sale, cu găurile și decupările făcute în ele și cu șuruburile sale ca șuruburi libere; un raport arată ce a fost lăsat deoparte. Vedeți [Exportul IFC](topic:ifc-export#import). Nu deschide încă DWG, DXF sau modelul altui program de detaliere; la încercare apare mesajul „DetailCraft deschide propriile modele (.detailcraft.json) și fișiere IFC (.ifc).”

## Lucru pierdut, fișiere recente, aplicația desktop

- Cât timp modelul are modificări nesalvate, DetailCraft păstrează o copie în acest browser. Dacă fila sau browserul se închide înainte să salvați, la următoarea deschidere DetailCraft întreabă **Recuperarea lucrării?**: recuperați copia sau o renunțați. Vedeți [Recuperarea lucrării](common:recover).
- Modelele deschise recent sunt listate pe ecranul de pornire, atunci când browserul permite DetailCraft să le deschidă din nou; faceți clic pe unul pentru a-l redeschide.
- În aplicația desktop, {{ui:Save}} scrie modelul înapoi în fișierul deschis (în browser descarcă o copie), iar un dublu clic pe un model DetailCraft sau pe un fișier IFC îl deschide în DetailCraft.

## Exporturi

Toate exporturile folosesc numele modelului. Alegeți-le din grupul {{ui:Output}}.

| Buton | Fișier | Ce conține |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: etaje, grile, fiecare piesă din oțel ca extrudare de profil, cu găurile și decupările sale, ansambluri, șuruburi și tije de ancorare, tălpi de fundare și fiecare armătură. Vedeți [Exportul IFC](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Un fișier DSTV `.nc1` pentru fiecare marcă de piesă. Vedeți [Trimiterea fișierelor NC la atelier](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Trei tabele într-un singur fișier: piese, ansambluri, și șuruburi și tije de ancorare. Vedeți [Mărcile și lista de materiale](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Fiecare marcă de armătură din tălpile de fundare. Vedeți [Tălpile de fundare și armătura](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` conține câte o planșă pentru fiecare marcă de piesă; {{ui:Download this sheet}} dă planșa afișată (A3, dacă nu ați ales altă dimensiune). Vedeți [Realizarea desenelor de execuție](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` sau `.dxf`, mai multe în `<name> drawings DWG.zip` (sau `DXF.zip`) | Planurile, fațadele și desenele de ansamblu pe dimensiunea de foaie aleasă; DWG și DXF la dimensiune reală, 1 unitate = 1 mm pe hârtie. Vedeți [Desenele de aranjament general și de ansamblu](topic:drawings). |

### Note despre fișierele CSV

- Încep cu un marcaj de ordine a octeților, ca programele de calcul tabelar să citească corect caracterele cu diacritice.
- O celulă care începe cu `=`, `+`, `-` sau `@` (și nu este un număr simplu) primește un apostrof în față, ca un program de calcul tabelar să nu o execute ca formulă.
- Lungimile sunt în milimetri, iar greutățile în kilograme.

### Note despre PDF

Textul din PDF folosește fontul standard Helvetica. Caracterele pe care nu le are (în afara setului vest-european) se tipăresc ca „?”, iar bara de stare arată câte sunt.

## Unități

DetailCraft lucrează în milimetri peste tot: grile, niveluri, coordonate, profile, găuri și fiecare export. Numele profilelor păstrează forma publicată (W12x50 este o denumire din SUA, chiar dacă dimensiunile sunt afișate în mm). Încă nu există introducere în unități imperiale.

## Online și offline

Deschiderea, salvarea și exportul se fac toate în browser, deci funcționează la fel, cu sau fără conexiune, după ce DetailCraft s-a încărcat.

Pentru a folosi DetailCraft fără conexiune mai târziu, alegeți {{ui:Save for offline}} din bara aplicației cât timp sunteți online. Butonul numără („Se salvează 3 din 20”) și apoi afișează {{ui:Offline ready}}. Copia salvată include biblioteca grafică 3D (circa 2,6 MB) și acest ajutor, deci odată salvată, vizualizarea 3D, fiecare export și ajutorul funcționează offline. Detalii și ce mai are nevoie de conexiune: [Lucrul offline](common:offline).

:::offline
Sunteți offline. Dacă bara aplicației afișează {{ui:Offline ready}}, deschiderea, salvarea și exportul funcționează normal. Dacă nu, mențineți această filă deschisă, nu o reîncărcați până nu reveniți online și salvați modelul acum.
:::

Salvarea în cloud nu este disponibilă încă, iar aplicațiile desktop nu există încă. Faceți copii de siguranță pentru fișierele `.detailcraft.json` așa cum faceți pentru orice alt fișier de lucru. Mai multe în [Unde ajung fișierele](common:your-files).

## Lucrul nesalvat

DetailCraft păstrează modelul doar în fila deschisă. Dacă închideți sau reîncărcați fila cu modificări nesalvate, browserul întreabă dacă să părăsească pagina; formularea este a browserului. Salvați des cu {{key:Mod+S}}.
