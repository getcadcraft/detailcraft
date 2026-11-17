---
title: Įdėkite plokštes ir pridėkite pasirinktinius profilius
summary: Įdėkite atskiras plokštes pagal storį ir plotį bei apibrėžkite savo I, kanalo, kampuotinio, vamzdžio ar plokščiojo strypo pjūvius.
keywords: plokštė, plokščias, pasirinktinis profilis, vartotojo profilis, parametrinis, pjūvis, forma, skerspjūvis, pl
from: c24c3b51
---

## Įdėkite plokštę

Plokštė dedama kaip sija: ji eina tarp dviejų susikirtimų, su plotu skersai ir storiu aukštyn.

1. Grupėje {{ui:Įdėti}} pasirinkite {{ui:Plokštė}} arba paspauskite {{key:P}}.
2. Skydelyje {{ui:Savybės}} nustatykite {{ui:Storis (mm)}} ir {{ui:Plotis (mm)}}. Numatytasis yra 20 x 200 A36.
3. Jei reikia, nustatykite {{ui:Medžiaga}} ir {{ui:Pasukimas (°)}}. 90 pasukimas pastato plokštę ant briaunos.
4. Spragtelėkite du susikirtimus arba naudokite formą {{ui:Pridėti pagal ašis}}.

Plokštės profilio pavadinimas rašomas `PL<thickness>x<width>`, pavyzdžiui PL20x200. Jos ilgis yra atstumas tarp dviejų taškų.

Norėdami pakeisti įdėtos plokštės dydį, pažymėkite ją ir pakeiskite {{ui:Storis (mm)}} arba {{ui:Plotis (mm)}}.

Jūsų įdėtos plokštės yra savarankiškos detalės (žymė p, surinkimas P). Jungčių sukurtos galinės ir pagrindo plokštės taip pat yra plokštės, tačiau keičiate jas per jų jungtį; žr. [Galinės plokštės](topic:end-plates).

## Pridėkite pasirinktinį profilį

Kai reikalingo pjūvio nėra kataloge, sukurkite jį pagal jo matmenis. Pasirinktinis profilis priklauso modeliui ir įrašomas kartu su juo. Kad jį naudotumėte kiekviename naujame modelyje, laikykite jį sąraše {{ui:Mano profiliai}}, aprašytame žemiau skyrelyje „Išsaugokite profilį naujiems modeliams“.

1. Kairiajame skydelyje {{ui:Modelis}} atidarykite {{ui:Pasirinktinis profilis}}.
2. Įveskite {{ui:Pavadinimas}}, pavyzdžiui `W8x18-custom` arba `RHS 120x80x5`. Jis negali būti katalogo pavadinimas ar atrodyti kaip plokštės pavadinimas.
3. Pasirinkite {{ui:Forma}}: {{ui:I formos}}, {{ui:Kanalas}}, {{ui:Lygiašonis kampuotis}}, {{ui:Stačiakampis vamzdis}}, {{ui:Apvalus vamzdis}} arba {{ui:Plokščiasis strypas}}.
4. Užpildykite pasirodžiusius matmenis, visus milimetrais:

| Forma | Matmenys |
|---|---|
| I formos | Aukštis d, diržo plotis bf, sienelė tw, diržas tf, suapvalinimo spindulys r (gali būti 0) |
| Kanalas | Aukštis d, diržo plotis bf, sienelė tw, diržas tf (statūs kampai) |
| Lygiašonis kampuotis | Plotis b (kiekviena briauna), storis t |
| Stačiakampis vamzdis | Aukštis h, plotis b, storis t (išorinio kampo spindulys 2t) |
| Apvalus vamzdis | Skersmuo D, storis t |
| Plokščiasis strypas | Plotis b, storis t |

5. Palikite pažymėtą {{ui:Laikyti sąraše Mano profiliai}}, kad jis būtų kiekviename naujame modelyje (žr. žemiau), arba panaikinkite žymėjimą, kad jis liktų tik šiame modelyje.
6. Pasirinkite {{ui:Pridėti profilį}}.

Būsenos juostoje rašoma: „Profilis „…“ pridėtas; jis yra visuose profilių sąrašuose skiltyje Pasirinktinis.“ Jis atsiranda sąraše po forma ir kiekvieno {{ui:Profilis}} sąrašo gale.

DetailCraft patikrina, ar forma gali egzistuoti. Pamatysite tokius pranešimus: „Sienelė ir diržai netelpa į aukštį ir plotį.“, „Suapvalinimo spindulys per didelis diržui.“ arba „Sienelė per storas.“ Ištaisykite skaičius ir vėl pasirinkite {{ui:Pridėti profilį}}.

### Ką gauna pasirinktiniai profiliai

- Masė metrui pagal plotą × 7850 kg/m³ (katalogo dydžiams naudojama paskelbta masė).
- Pasirinktinėms I formoms taikomos skylės, išpjovos, galinės plokštės, NC failai ir gamybiniai brėžiniai, kaip ir katalogo I formoms.
- Pasirinktiniai plokščiasis strypai elgiasi kaip plokštės.
- Pasirinktiniai kanalai ir vamzdžiai gauna skyles; kampuotiniai ir apvalūs vamzdžiai – dar ne.

Kai pasirinktinis profilis pridėtas, modelyje jo redaguoti ar pašalinti nebegalite (jei suklydote, iškart naudokite {{key:Mod+Z}}). Pataisytam profiliui duokite naują pavadinimą.

## Išsaugokite profilį naujiems modeliams

{{ui:Mano profiliai}}, po forma, yra jūsų pačių pasirinktinių profilių sąrašas. Jis saugomas šioje naršyklėje, šiame kompiuteryje, o ne modelio faile ir ne jūsų paskyroje.

- Profilis, pridėtas su pažymėtu {{ui:Laikyti sąraše Mano profiliai}}, patenka į sąrašą. Kiekvienas naujas modelis, įskaitant tą, kurį DetailCraft atidaro paleidus programą, prasideda su visais jais savo profilių sąrašuose.
- Profilis, jau esantis modelyje, bet ne sąraše, turi šalia esantį mygtuką {{ui:Laikyti}}.
- Modelyje, kuriame nėra vieno iš jūsų profilių (pvz., senesniame faile), pasirinkite {{ui:Naudoti čia}}, kad jį pridėtumėte.
- {{ui:Pašalinti}} išima profilį iš sąrašo. Modeliai, kurie jį jau naudoja, išlaiko savo kopiją.
- Atidarytas modelis išlaiko failyje išsaugotus profilius. Modelio atidarymas niekada nekeičia jūsų sąrašo.
- Pavadinimas, kuris sąraše jau yra su kitais matmenimis, atmetamas: duokite naujam profiliui kitą pavadinimą.
- Išvalius naršyklės svetainės duomenis arba naudojant kitą naršyklę ar kompiuterį, sąrašas prasideda tuščias. Privačiame lange jo išsaugoti negalima; programa apie tai praneša.
