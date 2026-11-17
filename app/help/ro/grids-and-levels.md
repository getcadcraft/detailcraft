---
title: Configurarea grilelor și a nivelurilor
summary: Introduceți liniile de grilă, distanțele dintre ele și nivelurile pe care este plasat fiecare element.
keywords: grilă, grile, axe, linii de grilă, niveluri, cote, etaje, planșee, distanțe, configurare
from: 9cad233c
---

Fiecare element din DetailCraft este plasat pe o intersecție a grilei, la un nivel. Grilele și nivelurile se configurează primele; se pot schimba oricând.

## Cum funcționează grilele aici

- **Liniile numerotate** merg într-o direcție, **liniile cu litere** în cealaltă. Numele țin doar de obicei: o etichetă poate fi orice text de până la 8 caractere (1, 2, 3 sau A1, A2, ori 10, 20).
- Se introduc etichetele și distanțele dintre ele, nu coordonate. Prima linie din fiecare set este la 0.
- Liniile numerotate sunt linii de x constant; liniile cu litere sunt linii de y constant. Așadar, o grindă de la grila 1 la grila 2 merge pe direcția x, iar o grindă de la A la B merge pe direcția y.
- Toate valorile sunt în milimetri.

Un model nou începe cu liniile numerotate 1 2 3 la 6000 6000, liniile cu litere A B la 6000 și două niveluri.

## Setarea grilelor

1. În panoul {{ui:Model}} din stânga, deschideți {{ui:Grile}} dacă este restrâns.
2. La {{ui:Axe numerotate}}, introduceți etichetele separate prin spații, de exemplu `1 2 3 4 5`.
3. În câmpul {{ui:Distanțe}} de sub el, introduceți o distanță pentru fiecare interval, de exemplu `6000 6000 7500 6000`. Patru intervale pentru cinci linii.
4. Același lucru la {{ui:Axe cu litere}} și la {{ui:Distanțe}} ei, de exemplu `A B C` și `8000 8000`.
5. Alegeți {{ui:Aplicare grile}}.

Bara de stare spune „Grile actualizate.”, iar vederea se apropie de noua grilă. Virgulele funcționează și ca separatori.

Dacă ceva nu se potrivește, nimic nu se schimbă și bara de stare spune de ce, de exemplu „Grile numerotate: indicați o distanță între fiecare pereche de linii (4).” Alte verificări: distanțele trebuie să fie pozitive, în milimetri, etichetele trebuie să fie diferite, iar pot fi cel mult 60 de linii în fiecare sens.

:::note
Elementele își păstrează coordonatele când grilele se mută. Dacă o distanță se schimbă după ce a fost plasat oțel, oțelul rămâne unde era și nu mai este pe grilă. Schimbați mai întâi grila sau mutați elementele editându-le coordonatele capetelor.
:::

## Setarea nivelurilor

1. Deschideți {{ui:Niveluri}} din panoul {{ui:Model}}.
2. Fiecare rând are un nume de nivel și cota sa în milimetri. Se editează după nevoie.
3. Alegeți {{ui:Adăugare nivel}} pentru un alt rând. Acesta se numește „Nivel 3” (și așa mai departe) și este plasat cu 4000 mm deasupra celui mai înalt nivel; se schimbă ambele dacă este nevoie.
4. Pentru a elimina un nivel, alegeți butonul × de la capătul rândului său.
5. Alegeți {{ui:Aplicare niveluri}}.

Nimic nu se schimbă până nu se alege {{ui:Aplicare niveluri}}. Nivelurile sunt sortate după cotă la aplicare. Fiecare nivel trebuie să aibă un nume, două niveluri nu pot avea același nume, iar trebuie păstrat cel puțin un nivel.

Nivelurile pot fi sub zero (un subsol la `-3500`) și nu trebuie să fie distanțate uniform.

## Cum sunt folosite nivelurile

- Un stâlp plasat la un nivel merge până la nivelul următor sau până la nivelul ales la {{ui:Până la}}.
- Grinzile și plăcile sunt plasate între două intersecții, la nivelul la care s-a făcut clic.
- Tălpile sunt plasate cu vârful la nivelul la care s-a făcut clic.
- {{ui:Plan}} privește în jos la un singur nivel pe rând.
- Exportul IFC face câte un etaj de clădire pentru fiecare nivel.

## Anulare

Modificările de grile și niveluri sunt editări ca oricare altele: {{key:Mod+Z}} readuce grila anterioară.

## Următorul

[Plasarea stâlpilor, grinzilor și contravântuirilor](topic:place-members)
