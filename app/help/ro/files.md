---
title: Deschiderea, salvarea și exportul fișierelor
summary: Fișierul modelului DetailCraft, fiecare export pe care îl scrie, unde ajung fișierele și ce diferă în funcție de browser și de conexiune.
keywords: deschidere, salvare, export, descărcare, fișier, json, ifc, nc1, dstv, csv, pdf, zip, formate, import
from: bd715ea3
---

DetailCraft are un singur fișier propriu, modelul, și cinci exporturi. Fiecare salvare și fiecare export este o descărcare. Nimic nu este încărcat și nimic nu este păstrat pe un server.

## Fișierul modelului

Un model DetailCraft se salvează ca `<name>.detailcraft.json`, unde `<name>` este numele modelului din panoul {{ui:Model}}. El conține grilele, nivelurile, barele (cu gaurile și decupările lor), îmbinările și setările lor, tălpile de fundare și profilele personalizate.

Piesele, marcajele, șuruburile, sudurile și armăturile nu sunt stocate: DetailCraft le calculează din nou din model de fiecare dată când se deschide. De aceea un fișier de model este mic.

### Salvare

1. Scrieți un nume în câmpul {{ui:Nume}} din partea de sus a panoului {{ui:Model}}.
2. Alegeți {{ui:Salvare}} din grupul {{ui:Fișier}} sau apăsați {{key:Mod+S}}.
3. Browserul descarcă `<name>.detailcraft.json`. Bara de stare spune „Salvat … (descărcat)”, iar punctul de la începutul titlului filei browserului dispare.

Fiecare salvare este o descărcare nouă. Browserul nu suprascrie fișierul pe care l-ați deschis; în funcție de setările sale, adaugă un număr la nume, de exemplu `Frame (1).detailcraft.json`, sau întreabă unde să salveze. Păstrați propriile versiuni redenumind descărcările.

:::chromium
Chrome și Edge salvează în folderul Descărcări, cu excepția cazului în care **Solicită locul de salvare pentru fiecare fișier înainte de descărcare** este activată în setările de descărcare ale browserului. Activați-o dacă doriți să alegeți de fiecare dată un folder și un nume de fișier.
:::

:::firefox
Firefox salvează în folderul Descărcări sau întreabă de fiecare dată dacă **Întreabă-mă întotdeauna unde să salvez fișierele** este activată în setările sale.
:::

:::safari
Safari salvează în folderul Descărcări. Pentru a schimba folderul, deschideți **Safari, Setări, General, Locația descărcărilor de fișiere**.
:::

### Deschidere

1. Alegeți {{ui:Deschidere}} din grupul {{ui:Fișier}} sau apăsați {{key:Mod+O}}.
2. Selectați un fișier `.detailcraft.json`.

Sau trageți fișierul din {{pick:mac=Finder|windows=File Explorer|linux=gestionarul de fișiere}} și plasați-l în vizualizare. Vizualizarea afișează „Trageți un model DetailCraft pentru a-l deschide” cât timp trageți.

Dacă modelul deschis are modificări nesalvate, DetailCraft întreabă mai întâi: {{ui:Anulare}}, {{ui:Renunțare la modificări}} sau {{ui:Salvare mai întâi}}.

DetailCraft verifică fiecare câmp al unui fișier înainte să îl folosească. Tot ce nu poate fi folosit este lăsat deoparte, iar bara de stare spune ce anume, de exemplu „2 bare nu erau valide și au fost excluse.” Un model salvat de un DetailCraft mai nou este refuzat cu un mesaj, în loc să fie deschis pe jumătate corect.

### Ce se deschide

Propriile fișiere de model (`.json`, până la 50 MB) și fișiere IFC (`.ifc`, IFC2X3 sau IFC4, până la 200 MB). Un fișier IFC, deschis sau adus cu {{ui:Import IFC}}, devine un model nou cu grinzile, stâlpii, barele, plăcile, grilele și nivelurile sale, cu gaurile și decupările tăiate în ele și cu șuruburile sale ca șuruburi libere; un raport arată ce a fost lăsat deoparte. Vedeți [Exportul IFC](topic:ifc-export#import). Încă nu deschide fișiere DWG, DXF sau modelele altui program de detaliere; încercarea afișează „DetailCraft deschide propriile modele (.detailcraft.json) și fișiere IFC (.ifc).”

## Lucru pierdut, fișiere recente, aplicația desktop

- Cât timp modelul are modificări nesalvate, DetailCraft păstrează o copie în acest browser. Dacă fila sau browserul se oprește înainte să salvați, la următoarea deschidere a DetailCraft vi se va arăta întrebarea **Recuperați lucrarea?**: recuperați copia sau renunțați la ea. Vedeți [Recuperarea lucrării](common:recover).
- Modelele deschise recent sunt listate pe ecranul de start, atunci când browserul permite DetailCraft să le deschidă din nou; faceți clic pe unul ca să îl redeschideți.
- În aplicația desktop, {{ui:Salvare}} scrie modelul înapoi în fișierul deschis (în browser descarcă o copie), iar un dublu clic pe un model DetailCraft sau pe un fișier IFC îl deschide în DetailCraft.

## Exporturi

Toate exporturile folosesc numele modelului. Alegeți-le din grupul {{ui:Ieșire}}.

| Buton | Fișier | Ce conține |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: etaje, grile, fiecare piesă de oțel ca extruziune de profil cu gaurile și decupările sale, ansambluri, șuruburi și tije de ancorare, tălpi de fundare și fiecare armătură. Vedeți [Exportul IFC](topic:ifc-export). |
| {{ui:Fișiere NC}} | `<name> NC.zip` | Un fișier DSTV `.nc1` pentru fiecare marcaj de piesă. Vedeți [Trimiterea fișierelor NC la atelier](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Trei tabele într-un singur fișier: piese, ansambluri, șuruburi și tije de ancorare. Vedeți [Marcajele și lista de materiale](topic:marks-and-bom). |
| {{ui:Întinderi}} | `<name> bending schedule.csv` | Fiecare marcă de armătură din tălpile de fundare. Vedeți [Tălpile de fundare și armătura](topic:footings-and-rebar). |
| {{ui:Desen de execuție}} | `<name> <mark>.pdf` | O foaie (A3 dacă nu ați ales altă dimensiune) pentru piesa selectată (profile I și plăci). Vedeți [Realizarea unui desen de execuție](topic:shop-drawings). |
| {{ui:Desene}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` sau `.dxf`, mai multe în `<name> drawings DWG.zip` (sau `DXF.zip`) | Planurile, fațadele și desenele generale de amplasare și de ansamblu, pe dimensiunea de foaie aleasă; DWG și DXF la scară reală, 1 unitate = 1 mm pe hârtie. Vedeți [Desenele generale de amplasare și de ansamblu](topic:drawings). |

### Note despre fișierele CSV

- Încep cu o marcă de ordine a octeților, ca programele de tabele să citească corect caracterele cu diacritice.
- O celulă care începe cu `=`, `+`, `-` sau `@` (și nu este un număr simplu) primește un apostrof în față, astfel încât un program de tabele să nu o execute niciodată ca formulă.
- Lungimile sunt în milimetri, iar greutățile în kilograme.

### Note despre PDF

Textul din PDF folosește fontul standard Helvetica. Caracterele pe care nu le are (în afara setului vest-european) sunt tipărite ca „?”, iar bara de stare vă spune câte sunt.

## Unități

DetailCraft lucrează în milimetri peste tot: grile, niveluri, coordonate, profile, găuri și fiecare export. Numele profilelor își păstrează forma publicată (W12x50 este o denumire din SUA, chiar dacă dimensiunile sunt afișate în mm). Încă nu există introducere în unități imperiale.

## Online și offline

Deschiderea, salvarea și exportul au loc toate în browserul dvs., deci funcționează la fel cu sau fără conexiune, odată ce DetailCraft s-a încărcat.

Ca să folosiți DetailCraft mai târziu fără nicio conexiune, alegeți {{ui:Salvare pentru offline}} din bara aplicației cât timp sunteți online. Butonul numără în sus („Salvare 3 din 20”) și apoi afișează {{ui:Pregătit pentru offline}}. Copia salvată include biblioteca grafică 3D (circa 2.6 MB) și acest ajutor, deci odată salvată, vizualizarea 3D, fiecare export și ajutorul funcționează offline. Detalii și ce mai necesită conexiune: [Lucrul offline](common:offline).

:::offline
Sunteți offline. Dacă bara aplicației afișează {{ui:Pregătit pentru offline}}, deschiderea, salvarea și exportul funcționează ca de obicei. Dacă nu, păstrați această filă deschisă, nu o reîncărcați până nu reveniți online și salvați modelul acum.
:::

Salvarea în cloud nu este disponibilă încă, iar aplicațiile desktop nu există încă. Faceți copii de rezervă pentru fișierele `.detailcraft.json` așa cum faceți pentru orice alt fișier de lucru. Mai multe în [Unde ajung fișierele dvs.](common:your-files).

## Lucru nesalvat

DetailCraft păstrează modelul doar în fila deschisă. Dacă închideți sau reîncărcați fila cu modificări nesalvate, browserul întreabă dacă doriți să părăsiți pagina; formularea este a browserului. Salvați des cu {{key:Mod+S}}.
