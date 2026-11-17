---
title: ViewCube
summary: Kliknite stranu, brid ili kut kocke u kutu prikaza da biste gledali odatle, povucite je za kruženje, okrenite prsten kompasa, prijeđite oko pogleda s čela i vratite se na početak.
keywords: viewcube, view cube, kocka, kocka pogleda, kompas, sjever, početni pogled, standardni pogledi, gore, naprijed, desno, iso, kut, brid, kruženje, zakretanje prikaza, ikona osi, indikator kuta, navigacija
from: 3666ea8a
---

ViewCube se nalazi u gornjem desnom kutu 3D prikaza, ispod trake prikaza (samo u {{ui:3D}}: {{ui:Tlocrt}} i {{ui:Pročelje}} već gledaju ravno u model). Okreće se s prikazom, pa uvijek pokazuje kuda gledate: {{ui:Gore}} je gore, {{ui:Naprijed}} gleda prema jugu (strana s koje se u {{ui:Pročelje}} gledaju slovne mreže), {{ui:Desno}} gleda prema istoku, uz brojčane mreže. Ostaje prozirna dok na nju ne pokažete.

## Pogled s bočne strane, brida ili kuta

1. Pokažite na kocku. Dio ispod pokazivača svijetli: sredina strane, brid (svijetli na obje strane koje dijeli) ili kut (na sve tri strane).
2. Kliknite. Prikaz se okrene da gleda odatle, zadržavajući istu sredinu i zumiranje.

Ima 26 mjesta za klik: 6 strana ({{ui:Gore}}, {{ui:Dolje}}, {{ui:Naprijed}}, {{ui:Straga}}, {{ui:Lijevo}}, {{ui:Desno}}), 12 bridova i 8 kutova. Kut daje klasični trodijelni pogled; brid izgleda kao na pola puta između dviju strana.

Pogled na stranu kocke je 3D prikaz, a ne {{ui:Tlocrt}} ili {{ui:Pročelje}}: ništa nije odrezano i model se još može okretati.

## Okretanje povlačenjem kocke

Povucite kocku da okrenete prikaz, isto kao kruženje u samom prikazu. Povlačenje se nikada ne uzima kao klik, pa kocku možete uhvatiti bilo gdje.

## Prsten kompasa

Prsten ispod kocke nosi S, I, J i Z.

- **Povucite prsten** da okrenete model oko okomite osi, kao na okretnoj ploči. Prsten prati pokazivač.
- **Kliknite slovo** da gledate s te strane, zadržavajući koliko strmo gledate dolje. U pogledu ravno odozgo, slovo koje kliknete ide na dno zaslona.

## Pogledi s čela: strelice

Kada gledate ravno u stranu, oko kocke se pojave male strelice:

- Četiri **trokuta** dovode stranu s te strane naprijed: trokut iznad kocke pokazuje stranu koja je bila gore, i tako dalje.
- Dvije **zakrivljene strelice** u gornjem desnom kutu zakreću sliku za četvrtinu okreta u smjeru kazaljke ili suprotno, bez promjene strane koju gledate. Upotrijebite ih da okrenete tlocrt tako da duga zidna linija prolazi preko zaslona.

## Početak

Gumb kućice u gornjem lijevom kutu kocke vraća na početni trodijelni pogled i uklapa cijeli model, isto kao gumb prilagodbe. {{key:Home}} radi isto dok kocka ima fokus tipkovnice.

## S tipkovnicom

{{key:Tab}} do kocke, zatim:

| Tipka | Radi |
|---|---|
| {{key:left}} / {{key:right}} | odabire stranu, brid ili kut oko kocke, u koracima od osmine okreta (čitači zaslona govore koji) |
| {{key:up}} / {{key:down}} | odabire višu ili nižu, do {{ui:Gore}} ili do {{ui:Dolje}} |
| {{key:Enter}} ili {{key:Space}} | gleda s odabranog |
| {{key:Shift+left}} / {{key:Shift+right}} | okreće prikaz za četvrtinu okreta oko okomite osi |
| {{key:Home}} | početni pogled |
| {{key:Esc}} | napušta kocku |

Tipke pritisnute na kocki ostaju s kockom: ne pokreću alate DetailCrafta.

## Ikona osi ili ništa umjesto toga

Otvorite {{ui:Postavke}} ({{key:Mod+,}}), karticu {{ui:DetailCraft}}, i postavite **Indikator kuta** na {{ui:ViewCube}} (početni), {{ui:Ikona osi}} (mala oznaka X, Y, Z dolje lijevo: X crveno, Y zeleno, Z plavo) ili {{ui:Nema}}. Ovaj preglednik pamti izbor. Vidi [Postavke DetailCrafta](topic:settings#corner-indicator).
