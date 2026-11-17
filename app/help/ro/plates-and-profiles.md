---
title: Plasarea plăcilor și adăugarea profilelor personalizate
summary: Plasați plăci libere după grosime și lățime și definiți propriile secțiuni I, U, cornier, țeavă sau platbandă.
keywords: placă, platbandă, profil personalizat, profil de utilizator, parametric, secțiune, formă, secțiune transversală, pl
from: c24c3b51
---

## Plasarea unei plăci

O placă se plasează ca o grindă: merge între două intersecții, cu lățimea transversală și grosimea în sus.

1. Alegeți {{ui:Placă}} din grupul {{ui:Plasare}}, sau apăsați {{key:P}}.
2. În panoul {{ui:Proprietăți}}, setați {{ui:Grosime (mm)}} și {{ui:Lățime (mm)}}. Implicit este 20 x 200 în A36.
3. Setați {{ui:Material}} și {{ui:Rotire (°)}} dacă este nevoie. O rotire de 90 pune placa pe muchie.
4. Faceți clic pe două intersecții sau folosiți formularul {{ui:Adăugare după grilă}}.

Numele profilului plăcii se scrie `PL<grosime>x<lățime>`, de exemplu PL20x200. Lungimea sa este distanța dintre cele două puncte.

Ca să redimensionați o placă plasată, selectați-o și schimbați {{ui:Grosime (mm)}} sau {{ui:Lățime (mm)}}.

Plăcile pe care le plasați sunt piese proprii (marca p, ansamblul P). Plăcile de capăt și plăcile de bază făcute de conexiuni sunt tot plăci, dar le modificați prin conexiunea lor; vezi [Plăci de capăt](topic:end-plates).

## Adăugarea unui profil personalizat

Când secțiunea de care aveți nevoie nu este în catalog, creați-o din dimensiunile sale. Un profil personalizat aparține modelului și este salvat cu el. Ca să îl folosiți în fiecare model nou, păstrați-l în {{ui:Profilele mele}}, descris la „Păstrarea unui profil pentru modele noi” de mai jos.

1. În panoul {{ui:Model}} din stânga, deschideți {{ui:Profil personalizat}}.
2. Scrieți un {{ui:Nume}}, de exemplu `W8x18-custom` sau `RHS 120x80x5`. Nu poate fi un nume din catalog și nici nu poate arăta ca un nume de placă.
3. Alegeți o {{ui:Formă}}: {{ui:Profil I}}, {{ui:Profil U}}, {{ui:Cornier cu aripi egale}}, {{ui:Țeavă dreptunghiulară}}, {{ui:Țeavă rotundă}} sau {{ui:Platbandă}}.
4. Completați dimensiunile care apar, toate în milimetri:

| Formă | Dimensiuni |
|---|---|
| Profil I | Înălțime d, lățimea tălpii bf, grosimea inimii tw, grosimea tălpii tf, raza de racordare r (poate fi 0) |
| Profil U | Înălțime d, lățimea tălpii bf, grosimea inimii tw, grosimea tălpii tf (colțuri drepte) |
| Cornier cu aripi egale | Lățimea b (fiecare aripă), grosimea t |
| Țeavă dreptunghiulară | Înălțime h, lățime b, grosime t (raza exterioară a colțului 2t) |
| Țeavă rotundă | Diametru D, grosime t |
| Platbandă | Lățime b, grosime t |

5. Lăsați bifat {{ui:Păstrare în Profilele mele}} ca să fie în fiecare model nou (vezi mai jos), sau debifați-l ca să rămână doar în acest model.
6. Alegeți {{ui:Adăugare profil}}.

Bara de stare spune „Profilul „…” a fost adăugat; este în fiecare listă de profile, sub Personalizate.” Profilul apare în lista de sub formular și la sfârșitul fiecărei liste {{ui:Profil}}.

DetailCraft verifică dacă forma poate exista. Apar mesaje precum „Inima și tălpile nu încap în înălțimea și lățimea date.”, „Raza de racordare este prea mare pentru talpă.” sau „Peretele este prea gros.” Corectați cifrele și alegeți din nou {{ui:Adăugare profil}}.

### Ce primesc profilele personalizate

- Masa pe metru din aria × 7850 kg/m³ (profilele din catalog folosesc greutatea publicată).
- Profilele I personalizate primesc găuri, decupări, plăci de capăt, fișiere NC și desene de execuție, ca profilele I din catalog.
- Platbandele personalizate se comportă ca plăcile.
- Profilele U și țevile personalizate primesc găuri; cornierele și țevile rotunde nu încă.

Un profil personalizat nu poate fi editat sau scos dintr-un model după ce a fost adăugat (folosiți {{key:Mod+Z}} imediat dacă ați greșit). Dați unui profil corectat un nume nou.

## Păstrarea unui profil pentru modele noi

{{ui:Profilele mele}}, sub formular, este lista proprie de profile personalizate. Este păstrată în acest browser, pe acest calculator, nu într-un fișier de model și nici în cont.

- Un profil adăugat cu {{ui:Păstrare în Profilele mele}} bifat intră în listă. Fiecare model nou, inclusiv cel pe care DetailCraft îl deschide la pornire, începe cu toate profilele din listă în listele sale de profile.
- Un profil deja folosit într-un model, dar care nu este în listă, are lângă el un buton {{ui:Păstrare}}.
- Într-un model care nu are unul dintre profilele personale (un fișier mai vechi, de exemplu), alegeți {{ui:Utilizare aici}} ca să îl adăugați.
- {{ui:Eliminare}} scoate un profil din listă. Modelele care îl folosesc deja își păstrează propria copie.
- Un model deschis își păstrează profilele salvate în fișierul său. Deschiderea unui fișier nu schimbă niciodată lista.
- Un nume care există deja în listă cu alte dimensiuni este refuzat: dați noului profil alt nume.
- Ștergerea datelor site-ului din browser, sau folosirea altui browser sau calculator, pornește cu o listă goală. O fereastră privată nu o poate păstra; aplicația o spune.
