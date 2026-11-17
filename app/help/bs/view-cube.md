---
title: Kocka pogleda
summary: Kliknite stranu, ivicu ili ugao kocke u uglu prikaza da pogledate odatle, prevucite je za orbitiranje, okrenite prsten kompasa, idite oko pogleda okrenutog licem i vratite se na početni pogled.
keywords: kocka pogleda, viewcube, kocka, kompas, sjever, početni pogled, standardni pogledi, gore, sprijeda, desno, iso, ugao, ivica, orbita, rotiranje pogleda, ikona osa, indikator ugla, navigacija
from: 3666ea8a
---

Kocka pogleda je u gornjem desnom uglu 3D prikaza, ispod trake pogleda (samo u {{ui:3D}}: {{ui:Osnova}} i {{ui:Izgled}} već gledaju ravno u model). Okreće se sa pogledom, pa uvijek pokazuje u kojem smjeru gledate: {{ui:Gore}} je gore, {{ui:Sprijeda}} gleda prema jugu (sa strane sa koje se vide slovne mreže u {{ui:Izgled}}), {{ui:Desno}} gleda prema istoku, duž numerisanih mreža. Ostaje providna dok na nju ne pokažete.

## Pogledajte sa strane, ivice ili ugla

1. Pokažite na kocku. Dio ispod pokazivača se osvijetli: sredina strane, ivica (osvijetli se obje strane koje dijele) ili ugao (sve tri strane).
2. Kliknite. Pogled se okreće da gleda odatle, zadržavajući istu sredinu i zumiranje.

Ima 26 mjesta za klik: 6 strana ({{ui:Gore}}, {{ui:Dolje}}, {{ui:Sprijeda}}, {{ui:Straga}}, {{ui:Lijevo}}, {{ui:Desno}}), 12 ivica i 8 uglova. Ugao daje klasičan trodijelni pogled; ivica izgleda na pola puta između dvije strane.

Pogled na stranu kocke je 3D pogled, a ne {{ui:Osnova}} ili {{ui:Izgled}}: ništa nije odsječeno, a model se i dalje može okretati.

## Orbitiranje prevlačenjem kocke

Prevucite kocku da okrenete pogled, isto kao orbitiranje u samom prikazu. Prevlačenje se nikad ne uzima kao klik, pa kocku možete uhvatiti bilo gdje.

## Prsten kompasa

Prsten ispod kocke nosi S, I, J i Z.

- **Prevucite prsten** da okrenete model oko vertikalne ose, kao na okretnom stolu. Prsten prati pokazivač.
- **Kliknite slovo** da pogledate sa te strane, zadržavajući koliko strmo gledate dolje. U pogledu ravno odozgo, slovo koje kliknete ide na dno ekrana.

## Pogledi lica: strelice

Kada gledate ravno u stranu, male strelice se pojavljuju oko kocke:

- Četiri **trougla** dovode stranu sa te strane naprijed: trougao iznad kocke pokazuje stranu koja je bila gore, i tako dalje.
- Dvije **zakrivljene strelice** gore desno okreću sliku za četvrt okreta u smjeru kazaljke ili suprotno, bez promjene strane sa koje gledate. Koristite ih da okrenete plan tako da dugi zid ide preko ekrana.

## Početni pogled

Dugme kuće u gornjem lijevom uglu kocke vraća na početni trodijelni pogled i uklapa cijeli model u prikaz, isto kao dugme za uklapanje. {{key:Home}} radi isto dok kocka ima fokus tastature.

## Sa tastaturom

{{key:Tab}} do kocke, zatim:

| Taster | Radi |
|---|---|
| {{key:left}} / {{key:right}} | bira stranu, ivicu ili ugao oko kocke, u koracima od osmine okreta (čitači ekrana kažu koji) |
| {{key:up}} / {{key:down}} | bira višu ili nižu, do {{ui:Gore}} ili dolje do {{ui:Dolje}} |
| {{key:Enter}} ili {{key:Space}} | gleda sa izabranog |
| {{key:Shift+left}} / {{key:Shift+right}} | okreće pogled za četvrt okreta oko vertikalne ose |
| {{key:Home}} | početni pogled |
| {{key:Esc}} | napušta kocku |

Tasteri pritisnuti na kocki ostaju kod kocke: ne pokreću alate DetailCraft-a.

## Osa ili ništa umjesto toga

Otvorite {{ui:Postavke}} ({{key:Mod+,}}), karticu {{ui:DetailCraft}}, i postavite **Indikator ugla** na {{ui:Kocka pogleda}} (početno), {{ui:Ikona osa}} (mali X, Y, Z oznaka u donjem lijevom uglu: X crveno, Y zeleno, Z plavo) ili {{ui:Ništa}}. Ovaj pretraživač pamti izbor. Vidi [Postavke DetailCraft-a](topic:settings#corner-indicator).
