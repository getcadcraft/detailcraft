---
title: Folosirea DetailCraft cu un asistent AI
summary: Lăsați asistentul AI propriu sau un script să citească modelul, piesele, problemele și conflictele, să adauge elemente și conexiuni, să salveze și să exporte (și USD): permisiuni, conectare prin CadCraft Studio și jurnalul de activitate.
keywords: ai, asistent, agent, mcp, model context protocol, script, automatizare, piese, conflicte, conexiuni, permisiuni, deconectare, activitate, anulare
from: d624c9a0
---

## Ce veți învăța

Cum să lăsați un asistent AI (sau un script scris de dvs.) să lucreze cu DetailCraft și cum să decideți ce are voie să atingă.

DetailCraft **nu are AI propriu** și nu trimite nimic nicăieri. Aduceți dvs. asistentul: orice program care vorbește Model Context Protocol (MCP). DetailCraft îi oferă doar unelte, iar dvs. alegeți care.

## Activați-l

1. Deschideți {{ui:Setări}} (roata din bara aplicației sau {{key:Mod+,}}) și mergeți la fila {{ui:DetailCraft}}.
2. Sub {{ui:Asistenți}}, bifați **Permiteți asistenților AI și scripturilor să folosească DetailCraft**. Este dezactivat până o faceți.
3. Alegeți ce are voie să facă: **Citire** este bifată la început; bifați **Editare**, **Salvare** sau **Export** doar când aveți nevoie de ele.

Uneltele din afara permisiunilor bifate nu sunt oferite asistentului, iar dacă acesta cere totuși una, DetailCraft o refuză și o notează în jurnalul de activitate. Oprirea comutatorului încheie imediat toate conexiunile.

## Conectați asistentul

Asistenții se conectează prin **CadCraft Studio** de pe calculatorul dvs.: Studio rulează un server mic, la care poate ajunge doar acest calculator, protejat de un token pe care îl generează de fiecare dată când pornește. În Studio, alegeți {{ui:Conectare asistent}} și copiați adresa și tokenul în asistentul dvs. (Studio arată setările exacte pe care trebuie să le lipiți). Nu partajați niciodată tokenul.

:::note
Un tab de browser nu poate deschide o conexiune pentru un asistent: în aplicațiile din browser, comutatorul nu are efect până nu folosiți CadCraft Studio de pe calculatorul dvs.
:::

## Rămâneți în control

- **Fiecare modificare este un singur pas de anulare**, etichetat ca fiind al asistentului (de exemplu „Asistent: adăugare grindă”, „Asistent: adăugare guseuri”). {{key:Mod+Z}} anulează ultima modificare a asistentului în întregime. Comanda `undo` a asistentului anulează doar propriii pași, niciodată pe ai dvs., decât dacă cere explicit asta.
- **Așteaptă după dvs.** Cât plasați un element, mutați piese sau lipiți, DetailCraft refuză modificările asistentului și îi spune să încerce din nou.
- **Știți când este conectat unul.** Un buton din bara aplicației numește asistentul cât timp este conectat; faceți clic pe el ca să vedeți ce are voie să facă sau ca să îl **deconectați**.
- **Activitate.** {{ui:Setări}} › {{ui:DetailCraft}} › {{ui:Asistenți}} › {{ui:Activitate}} listează fiecare apel: când, ce unealtă, realizat sau refuzat. {{ui:Salvarea jurnalului}} păstrează o copie.

## Ce poate cere un asistent

Toate lungimile sunt în milimetri, punctele `[x, y, z]` cu z în sus, ca în model.

| Unealtă | Permisiune | Ce face |
|---|---|---|
| `app_info`, `model_describe` | Citire | Modelul deschis: grile, niveluri, etape, elemente după tip și profil, conexiuni, fundații, scări, piese, greutatea oțelului, probleme |
| `parts_list` | Citire | Mărcile de piesă cu profil, material, lungime tăiată, număr, greutate, etapă și mărci de ansamblu; după tip, profil, marcă sau etapă |
| `problems_list` | Citire | Ce listează fila {{ui:Probleme}}, fiecare cu subiectul său |
| `clash_check` | Citire | [Verificarea conflictelor](topic:clash-check), cu toleranța și etapele sale |
| `selection_get` | Citire | Ce ați selectat |
| `selection_set` | Editare | Selectează elemente, conexiuni, fundații sau scări (după id sau marcă de piesă) ca să vi le arate; nu schimbă nimic |
| `member_add` | Editare | O grindă, un stâlp, o contravântuire sau o placă între două puncte |
| `connection_add` | Editare | Plăci de capăt, tăblii de forfecare, plăci de bază, îmbinări de continuitate sau guseuri acolo unde se întâlnesc elementele date, ca butoanele {{ui:Îmbinare}} |
| `undo` | Editare | Anulează ultimii pași ai asistentului |
| `model_save` | Salvare | Salvarea proprie a DetailCraft |
| `model_export` | Export | IFC, fișiere NC, BOM, tabelul de întinderi, fișierul KISS sau lista de debitare, cum le fac butoanele {{ui:Ieșire}} |
| `usd_export` | Export | Modelul de oțel ca USD (.usda, .usdc sau .usdz), cum îl scrie {{ui:Ieșire}} › {{ui:USD}} (vezi [Exportul modelului de oțel ca USD](topic:usd)); în Studio poate scrie fișierul într-un dosar pe care l-ați permis |

## Dacă ceva nu funcționează

- **Asistentul nu vede uneltele DetailCraft:** verificați că comutatorul este pornit în această fereastră și că fereastra este deschisă în Studio.
- **„are nevoie de permisiunea de editare”** (sau de salvare, de export): bifați-o sub {{ui:Asistenți}}, apoi cereți din nou.
- **„Utilizatorul plasează un element”:** terminați ce faceți (sau apăsați {{key:Esc}}), apoi lăsați asistentul să încerce din nou.
- **Erori „401” sau „token”:** tokenul s-a schimbat (Studio a fost repornit sau ați apăsat {{ui:Token nou}}). Copiați cel nou în setările asistentului.

## Vezi și

- [Rețete pentru asistenții AI](common:assistants-recipes): exemple lucrate, fiecare cu uneltele pe care le apelează.
