---
title: Ce nu este încă realizat
summary: Ce nu poate face încă această versiune timpurie a DetailCraft și ce să faceți în schimb, astăzi.
keywords: limite, limitări, lipsă, plan de viitor, nesuportat, urmează, planificat, soluție, de făcut
from: ea411885
---

DetailCraft este o versiune timpurie. Această pagină enumeră ce nu face încă, ca să puteți planifica în jurul lor. Nimic de aici nu reprezintă o promisiune de dată.

## Modelare

| Încă nu | În schimb, astăzi |
|---|---|
| Tragerea de un capăt al unei bare (întinderea ei) | Editați {{ui:Început}} sau {{ui:Sfârșit}} sub {{ui:Capete (x, y, z mm)}} din panoul {{ui:Proprietăți}} |
| Un filtru de selecție (doar grinzi, doar un profil) | Trageți o fereastră, apoi {{key:Shift}}+clic pentru a scoate piese |
| Matrice dintr-o selecție; rotire în jurul unei axe înclinate; oglindire într-un plan înclinat | Copiați și lipiți cu un decalaj, sau {{ui:Duplicare}}; rotirea și oglindirea funcționează în plan ([Selectare prin fereastră, mutare, rotire, oglindire, modificare a mai multor elemente](topic:select-and-change)) |
| Puncte în afara grilei la clic | Plasați pe grilă, apoi tastați coordonatele finale |
| Elevații pe liniile de grilă numerotate; vederi salvate; planuri de lucru | Folosiți {{ui:3D}}, sau {{ui:Adăugare după grilă}} |
| Găuri desenate ca tăieturi reale în vederea 3D | Găurile apar ca dopuri întunecate; sunt reale în orice export |
| Decupări rotunjite sau înclinate, alte tăieturi și accesorii | Decupări pătrate doar la profilele I |
| Găuri adăugate la corniere și țevi rotunde | Găurile de cornier vin doar din [guseele de contravântuire](topic:brace-gussets) |
| Introducerea în sistemul imperial | Tastați milimetri (25.4 pe inch) |
| Editarea sau eliminarea unui profil personalizat | Adăugați un profil corectat, cu un nume nou |

## Scări

| Încă nu | În schimb, astăzi |
|---|---|
| Balustrade, podeste, plăci de protecție a treptelor, trepte din grătar, scări spiralate și în dublu cot | Doar volate drepte; vezi [Scări](topic:stairs) |
| Tăieturi ale capătului limoanelor față de planșee | Limoane cu tăieturi drepte; tăiați-le în software-ul atelierului |

## Conexiuni

DetailCraft creează șase conexiuni: un guseu de contravântuire (vezi [Guseele de contravântuire](topic:brace-gussets)); o îmbinare de continuitate cu șuruburi între două piese ale aceluiași profil I (vezi [Îmbinări de continuitate](topic:splices)); o îmbinare în unghi între două profile I care se întâlnesc sub un unghi, doar tăiată sau cu plăci de capăt cu șuruburi (vezi [Îmbinări în unghi](topic:mitres)); o placă de capăt cu șuruburi, la nivel sau prelungită, de la o grindă cu profil I orizontală, la talpa sau inima unui stâlp cu profil I; o placă de forfecare de la o grindă (dreaptă, oblică sau înclinată) la talpa sau inima unui stâlp; și o placă de bază a stâlpului, cu patru tije de ancorare.

| Încă nu | În schimb, astăzi |
|---|---|
| Plăci de capăt oblice sau înclinate | Folosiți [plăcile de forfecare](topic:shear-tabs), care suportă grinzi oblice și înclinate |
| Corniere de prindere; plăci de umplere la îmbinări și îmbinări între dimensiuni diferite; guseuri de colț sudate de grindă și stâlp; guseuri teșite | Detaliați-le în alt software sau adăugați plăci și găuri manual, ca piese separate; vezi [Îmbinări de continuitate](topic:splices), [Guseele de contravântuire](topic:brace-gussets) |
| Rigidizări de bază teșite sau conice; orificii pentru mortar; buzunarul de fundație pentru un dinte de forfecare | Rigidizări dreptunghiulare; vezi [Plăci de bază](topic:base-plates) |
| Consolă de grindă (haunch); îmbinări în unghi sudate cap la cap; rigidizări în prelungirea tălpilor celeilalte bare | O [îmbinare în unghi](topic:mitres) cu plăci de capăt și rigidizări de inimă, sau o tăietură simplă în unghi; adăugați alte plăci manual, ca piese separate |
| Verificări de proiectare a conexiunilor (rezistență) | Verificați conexiunile cu calculele inginerului; DetailCraft avertizează doar asupra distanței față de margine și a distanțelor dintre găuri |
| Găuri alungite | Doar găuri rotunde |

## Analiză

| Încă nu | În schimb, astăzi |
|---|---|
| Verificări de proiectare dincolo de profilele I din oțel: țevi, corniere, profile U, forme sudate, piese zvelte sau clasa 4, torsiune, conexiuni; beton: zvelteța la balansare, torsiune, detaliere seismică, plăci și pereți | Fila {{ui:Analiză}} verifică profilele I din oțel conform AISC 360 sau EN 1993-1-1 ([Verificarea elementelor din oțel conform unui cod de proiectare](topic:design-checks)); restul le lasă marcate „netestat”; un inginer revizuiește totul |
| Analiza la flambaj, vibrații | Ordinul al doilea este doar P-Delta (elastic); fără analiză la flambaj (modală, spectru de răspuns, istoric în timp și pushover se găsesc în fila Analiză) |
| Verificări de proiectare revizuite de un inginer | Sunt un ajutor până atunci: verificați două sau trei elemente manual sau în software-ul propriu al inginerului, înainte de a se conta pe ele |
| Sarcini de planșeu, vânt și zăpadă generate automat din suprafețe | Aplicați sarcinile pe bare manual, în kN/m sau kN |
| Excentricități ale barelor, îmbinări excentrice, contravântuiri care preiau doar întindere, plăci și fundații din cadru | Barele sunt analizate pe liniile lor de lucru; contravântuirile preiau întindere și compresiune |

## Armătură

| Încă nu | În schimb, astăzi |
|---|---|
| Stâlpi rotunzi, spirale, grinzi înclinate sau curbe, planșee în afara dreptunghiurilor, pereți care nu sunt drepți | Grinzi, stâlpi, planșee și pereți dreptunghiulari ([Detalierea betonului armat](topic:reinforced-concrete)) |
| Bare îndoite într-o suprapunere, suprapuneri decalate, suprapuneri plasate unde alegeți | Suprapuneri la pași egali, fiecare bară suprapusă într-o singură secțiune (ACI Clasa B, EN α6 = 1.5) |
| Bare de colț la goluri, armătură de forfecare la străpungere, detaliere seismică (ACI 318-19 capitolul 18) | Grinzi de margine pe fiecare parte a unui gol; restul se verifică manual |
| Citirea fișierelor proprii ale unui program de proiectare structurală | Exportați IFC din acel program: barele sale IfcReinforcingBar intră ca bare ([Bare dintr-un fișier IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Coduri de forme dincolo de drept, o îndoitură și U; tipuri ACI 315 pentru bare drepte și cu un cârlig | Cele trei forme se tipăresc ca BS 8666 00, 11, 21 sau ACI Tipul 2; vezi [Referința armăturii](topic:rebar-reference) |
| Bare metrice altele decât BS 4449 H8–H40 (de ex. CSA 10M–35M) | Denumiri ASTM soft-metric #10–#36, sau bare BS |

## Desene și exporturi

| Încă nu | În schimb, astăzi |
|---|---|
| Foi pe înălțime, A0 și foi de dimensiune proprie; vederi de aranjament general pe grile oblice | Foi A4 până la A1 pe orizontală și ANSI B până la D ([Desene de aranjament general și de ansamblu](topic:drawings)); scalați PDF-ul ca să îl tipăriți pe alt format |
| Simboluri de sudură pe desene de execuție ale unei singure piese; simboluri altele decât cordoanele de colț | Desenele de ansamblu au simboluri de cordon de colț; desenul de execuție dă sudura ca text |
| Editarea unui desen în aplicație | Modificați modelul și refaceți desenul; adnotați PDF-ul într-o aplicație PDF, cum este MarkupCraft |
| Desene în DWG cu obiecte de cotare, sau modelul la scară reală în spațiul model, cu foile ca aranjamente | Fiecare foaie este un DWG sau DXF la dimensiune reală a hârtiei, cu cotele ca linii și cifre ([Desene de aranjament general și de ansamblu](topic:drawings#download)) |
| Găuri NC în țevi rotunde, decupări la corniere și țevi rotunde în fișierele NC | Nu se scriu; vezi [Câmpurile fișierului NC](topic:nc1-fields) |
| Teșituri, marcaje și contururi interioare în fișierele NC | Deocamdată niciuna |
| Găuri pentru șuruburi, șuruburi, suduri și fundații în exportul USD | Sunt în ieșirile IFC, NC și lista de materiale; vezi [Exportul modelului de oțel în USD](topic:usd) |
| Aducerea conexiunilor, fundațiilor, găurilor alungite sau dreptunghiulare și a găurilor din țevi rotunde dintr-un fișier IFC | {{ui:Import IFC}} aduce grinzi, stâlpi, bare, plăci, grile, niveluri, găuri rotunde, decupări, șuruburi și bare de armătură, iar raportul său enumeră ce a lăsat afară |
| Machete de rapoarte personalizate | Cele trei fișiere CSV |

## Panouri

| Încă nu | În schimb, astăzi |
|---|---|
| Mutarea rapoartelor din partea de jos ({{ui:Probleme}}, {{ui:Listă de materiale}}, {{ui:Tabel de întinderi}}) | Doar panourile {{ui:Model}} și {{ui:Proprietăți}} se mută. Vezi [Aranjarea panourilor](common:arrange-panels) |

## Lucru în echipă și salvare

| Încă nu | În schimb, astăzi |
|---|---|
| Salvare în cloud și sincronizare între calculatoare | Salvați fișiere `.detailcraft.json` și partajați-le ca orice fișier. Salvarea în cloud nu este încă disponibilă |
| Cursoarele altor persoane și etichetele „editează” dintr-o sesiune Live TeamWork; grile, niveluri și etape îmbinate element cu element | Modificările se îmbină în continuare (grilele, nivelurile și etapele se mută întregi, iar cea mai recentă modificare câștigă); vezi [Detaliați o structură împreună, în timp real](topic:work-live) |
| Linkuri de invitație la o sesiune Live TeamWork prin internet | Alăturați-vă cu un cod scurt din aceeași rețea |

## Platforme

- DetailCraft este făcut pentru ecranul unui desktop, laptop sau tabletă. Funcționează și pe telefon: modelul păstrează ecranul și panourile, iar rapoartele se deschid ca foi dintr-o bară de jos, dar spațiul pentru panouri este redus.
- Utilizarea offline necesită mai întâi salvarea DetailCraft pentru offline, cu {{ui:Salvare pentru offline}} din bara aplicației; odată ce apare {{ui:Pregătit pentru offline}}, totul din această versiune funcționează fără conexiune. Vezi [Lucrul offline](common:offline).

Dacă unul dintre aceste lipsuri vă blochează lucrul, spuneți-ne prin [pagina de asistență](https://getcadcraft.com/support); ne ajută să decidem ce construim în continuare.
