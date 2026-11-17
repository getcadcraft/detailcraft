---
title: Kocka pogleda
summary: Kliknite stranu, ivicu ili ugao kocke u uglu prikaza da pogledate odatle, prevucite je da orbitirate, okrenite prsten sa strelicama, obrćite oko pogleda sa čela i vratite se na početni pogled.
keywords: kocka pogleda, viewcube, kocka, kompas, sever, početni pogled, standardni pogledi, gore, napred, desno, iso, ugao, ivica, orbita, okretanje pogleda, ikona osa, indikator ugla, navigacija
from: 3666ea8a
---

Kocka pogleda se nalazi u gornjem desnom uglu 3D prikaza, ispod trake prikaza (samo u {{ui:3D}}: {{ui:Osnova}} i {{ui:Izgled}} već gledaju pravo u model). Ona se okreće zajedno sa prikazom, pa uvek pokazuje u kom pravcu gledate: {{ui:Gore}} je gore, {{ui:Napred}} gleda na jug (sa strane gde se vide slovne mreže u {{ui:Izgled}}), {{ui:Desno}} gleda na istok, duž numerisanih mreža. Ostaje providna dok na nju ne pokažete.

## Pogledajte sa strane, ivice ili ugla

1. Pokažite na kocku. Deo ispod pokazivača se osvetli: sredina strane, ivica (osvetli se na obe strane koje dele) ili ugao (na sve tri strane).
2. Kliknite ga. Prikaz se okreće da gleda odatle, zadržavajući istu sredinu i zumiranje.

Ima 26 mesta na koja možete kliknuti: 6 strana ({{ui:Gore}}, {{ui:Dole}}, {{ui:Napred}}, {{ui:Pozadi}}, {{ui:Levo}}, {{ui:Desno}}), 12 ivica i 8 uglova. Ugao daje klasičan trodelni pogled; ivica izgleda kao na pola puta između dve strane.

Pogled sa strane kocke je 3D pogled, a ne {{ui:Osnova}} ili {{ui:Izgled}}: ništa nije presečeno, a model se i dalje može okretati.

## Orbitirajte prevlačenjem kocke

Prevucite kocku da okrenete prikaz, isto kao orbitiranje u samom prikazu. Prevlačenje se nikada ne uzima kao klik, pa možete uhvatiti kocku bilo gde.

## Prsten kompasa

Prsten ispod kocke nosi N, E, S i W.

- **Prevucite prsten** da okrenete model oko vertikalne ose, kao na obrtnom postolju. Prsten prati pokazivač.
- **Kliknite slovo** da gledate sa te strane, zadržavajući koliko strmo gledate nadole. U pogledu odozgo, slovo koje kliknete ide na dno ekrana.

## Pogledi naspram strane: strelice

Kada gledate pravo u stranu, oko kocke se pojavljuju male strelice:

- Četiri **trouglića** dovode stranu na toj strani ispred: trougao iznad kocke pokazuje stranu koja je bila gore, i tako dalje.
- Dve **zakrivljene strelice** gore desno okreću sliku za četvrt kruga u smeru kazaljke ili suprotno, bez promene strane na koju gledate. Koristite ih da okrenete plan tako da dugačak zid ide preko ekrana.

## Početni pogled

Dugme kućice u gornjem levom uglu kocke vraća na početni trodelni pogled i uklapa ceo model u ekran, isto kao dugme za uklapanje. {{key:Home}} radi isto dok kocka ima fokus tastature.

## Tastaturom

{{key:Tab}} do kocke, pa:

| Taster | Radi |
|---|---|
| {{key:left}} / {{key:right}} | bira stranu, ivicu ili ugao oko kocke, u koracima od osmine kruga (čitači ekrana kažu koji) |
| {{key:up}} / {{key:down}} | bira višu ili nižu, do {{ui:Gore}} ili do {{ui:Dole}} |
| {{key:Enter}} ili {{key:Space}} | gleda sa izabranog |
| {{key:Shift+left}} / {{key:Shift+right}} | okreće prikaz za četvrt kruga oko vertikalne ose |
| {{key:Home}} | početni pogled |
| {{key:Esc}} | napušta kocku |

Tasteri pritisnuti na kocki ostaju kod kocke: ne pokreću alate DetailCraft-a.

## Ikona ose ili ništa umesto toga

Otvorite {{ui:Podešavanja}} ({{key:Mod+,}}), karticu {{ui:DetailCraft}}, i postavite **Indikator ugla** na {{ui:Kocka pogleda}} (početno), {{ui:Ikona osa}} (mali oznaka X, Y, Z dole levo: X crveno, Y zeleno, Z plavo) ili {{ui:Ništa}}. Ovaj pregledač pamti izbor. Vidi [Podešavanja DetailCraft-a](topic:settings#corner-indicator).
