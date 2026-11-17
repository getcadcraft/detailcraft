---
title: Verificări de fundație
summary: Verificări ale tălpilor, tălpilor combinate și plăcilor pe terenul descris, tasare, placă flexibilă pe resorturi, grupuri de piloți și ziduri de sprijin. Un ajutor pentru ca un inginer să verifice.
keywords: fundație, talpă, talpă combinată, placă, tasare, modul de reacție al terenului, resorturi, stâlp de margine, stâlp de colț, presiune pe teren, alunecare, răsturnare, străpungere, forfecare într-o direcție, încovoiere, dezvoltare, armare minimă, grup de piloți, zid de sprijin, ACI 318-19
from: 6961ad52
---

:::warning
Acestea sunt verificări de ordinul întâi pentru ca un inginer să le analizeze, nu o aprobare a proiectului. Presiunea admisibilă pe teren și coeficientul de frecare sunt introduse de proiectant: DetailCraft nu cunoaște terenul.
:::

Fila {{ui:Fundație}} verifică tălpile din model în raport cu sarcinile de stâlp pe care le introduceți.

## Descrierea terenului

Introduceți {{ui:Presiune admisibilă pe teren}} și {{ui:Coeficient de frecare la bază}}. Ambele pornesc de la 0, adică „nu este introdus”: atunci verificarea arată presiunea ca notă și nu spune că trece. Pentru tasare, introduceți modulul de elasticitate al terenului {{ui:Es}} (MPa), coeficientul lui Poisson și tasarea admisă (25 mm la început). Pentru o placă flexibilă, introduceți un modul de reacție al terenului {{ui:ks}}. Sunt disponibile și umplutura de deasupra tălpii, greutatea volumică a terenului, factorii de siguranță pentru alunecare și răsturnare (1.5 la început) și rezistența la curgere a barelor.

## Introducerea sarcinilor

Fiecare talpă are o listă de sarcini de stâlp. Folosiți {{ui:Adăugare sarcină de stâlp}} și completați rândul de exploatare (pentru presiune pe teren, alunecare și răsturnare) și rândul factorizat (pentru verificările de rezistență): sarcina verticală P în jos, forțele orizontale Vx și Vy pe vârful tălpii, momentele Mx și My, poziția stâlpului pe talpă și dimensiunea lui.

Sau rulați fila {{ui:Analiză}} și apăsați {{ui:Preluare sarcini de stâlpi din Analiză}}: fiecare reazem care stă pe o talpă devine o sarcină de stâlp, din seturile de exploatare și factorizate alese. Un moment My pozitiv încarcă mai mult latura +x a tălpii; un moment Mx pozitiv încarcă mai mult latura −y.

## Ce se verifică

Din sarcinile de exploatare, cu greutatea proprie a tălpii și umplutura adăugate:

- **Presiune pe teren:** presiunea sub o talpă rigidă. În interiorul treimii mijlocii, toată baza este în contact; în afara ei, o parte a bazei se ridică de pe teren, iar vârful este mai mare. O rezultantă în afara bazei nu trece verificarea.
- **Alunecare:** frecarea înmulțită cu sarcina verticală, comparată cu forța orizontală.
- **Răsturnare:** distanța rezultantei față de margine.
- **Tasare:** tasarea elastică a presiunii medii pe un semispațiu, cu modulul introdus, în mijloc și într-un colț (soluția lui Timoshenko și Goodier pentru o placă dreptunghiulară flexibilă), comparată cu limita. Este o limită superioară pentru o talpă rigidă și nu ia în calcul un strat de sol de adâncime limitată, descărcarea prin pământul excavat și consolidarea. Fără modul, presiunea apare ca notă.

Din sarcinile factorizate ale stâlpului, singure (ACI 318-19):

- **Încovoiere** la fața stâlpului, cu armarea minimă (0.0018 pentru bare de 420 MPa) și barele desenate.
- **Forfecare într-o direcție** la distanța d de la față.
- **Forfecare de străpungere** la d/2 în jurul fiecărui stâlp, cu momentul stâlpului. Pentru un stâlp aproape de margine, secțiunea critică este tăiată de marginea tălpii (trei laturi la margine, două la colț, ACI 318-19 22.6.4.1 și αs mai mic din Tabelul 22.6.5.2), iar momentul față de centrul secțiunii include deplasarea încărcării.
- **Dezvoltarea** barelor după fața stâlpului, drepte sau cu cârligele lor.
- **Adâncime** deasupra barelor de jos (150 mm).

O talpă combinată sau o placă este considerată rigidă, iar forfecarea și momentul vin din statică, pe secțiuni tăiate pe toată lățimea.

## O placă flexibilă pe resorturi

Bifați {{ui:Analizează această talpă ca placă flexibilă pe resorturi}} când talpa poartă mai mulți stâlpi și talpa rigidă este prea grosieră. Talpa devine o placă din elemente cu patru noduri, pe un pat de resorturi (valoarea {{ui:ks}} introdusă, concentrată în noduri), iar sarcina fiecărui stâlp este repartizată pe nodurile propriei amprente. Un al doilea tabel dă cea mai mare presiune pe teren și tasare (și diferența dintre cea mai mare și cea mai mică), momentul încovoietor pe fiecare direcție cu armătura necesară, întinderea de sus comparată cu rezistența betonului simplu (talpa nu are bare sus), forfecarea într-o direcție la distanța d de stâlpi și străpungerea pe presiunea proprie a resorturilor. Rețeaua este rafinată până când un stâlp are trei elemente lățime; o placă mare durează câteva secunde. Greutatea proprie a plăcii și a terenului de deasupra se compensează și nu sunt incluse.

Fiecare verificare eșuată apare în panoul {{ui:Probleme}}, cu articolul său.

## Grupuri de piloți și ziduri de sprijin

{{ui:Adăugare grup de piloți}} pune o grilă de piloți sub un bloc rigid: introduceți sarcina, momentele și ce poate prelua un pilot la compresiune și la întindere (valorile proiectului de piloți, nu ale acestei file). Reacția fiecărui pilot este P/n plus partea lui din momente (metoda elastică), iar cea mai mare compresiune și orice întindere sunt verificate.

{{ui:Adăugare zid de sprijin}} verifică un zid în consolă pe umplutură orizontală, pe metru: presiunea activă Rankine, răsturnarea în jurul vârfului, alunecarea și presiunea pe bază. Presiunea pasivă din fața vârfului nu este inclusă. Asistentul poate rula aceleași verificări cu `pile_group_check` și `retaining_wall_check`.

Grupurile de piloți, zidurile și opțiunea de placă sunt salvate în fișierul modelului, iar o verificare eșuată apare în {{ui:Probleme}}.
