---
title: Polia súboru NC
summary: Čo DetailCraft zapisuje do každého súboru DSTV NC, pole po poli, a ako sa merajú plochy a súradnice.
keywords: nc1, dstv, súbor nc, blok st, ak, bo, hlavička, plochy, súradnice, cnc, formát
from: 1b676fc1
---

Každý súbor `.nc1` opisuje jednu značku dielca. Riadky končia znakmi CR LF. Textové polia obsahujú čistý ASCII; ostatné znaky sa zmenia na "?". Druhý riadok je komentár `** DetailCraft <mark>.nc1`.

## Hlavička (ST)

| Pole | Profil I, profil U | Uholník | Obdĺžnikový HSS | Kruhový HSS | Plech |
|---|---|---|---|---|---|
| Zákazka | Názov modelu | ← | ← | ← | ← |
| Výkres, kus | Značka dielca | ← | ← | ← | ← |
| Fáza | Fáza dielca, alebo 1 | ← | ← | ← | ← |
| Akosť ocele | Trieda materiálu | ← | ← | ← | ← |
| Množstvo | Počet dielcov s touto značkou | ← | ← | ← | ← |
| Profil | Názov profilu, napríklad W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Kód profilu | I alebo U (profil U) | L | M | RO | B |
| Dĺžka | Rezná dĺžka | ← | ← | ← | Dĺžka |
| Výška | Hĺbka d | Rameno | Výška | Priemer | Šírka plechu |
| Šírka pásnice | bf | Rameno | Šírka | Priemer | 0 |
| Hrúbka pásnice | tf | t | Hrúbka steny t | Hrúbka steny t | 0 |
| Hrúbka stojiny | tw | t | Hrúbka steny t | Hrúbka steny t | Hrúbka plechu |
| Polomer | Polomer zaoblenia (0 pri profiloch U podľa AISC) | 0 | Polomer vonkajšieho rohu | 0 | 0 |
| Hmotnosť na meter | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Plocha náteru na meter | Vonkajší obvod, m²/m | ← | ← | ← | 2 (obe strany, m²/m²) |
| Uhly píly (4 polia) | 0 (kolmo) | ← | ← | ← | ← |
| Textové polia (4) | `-` | ← | ← | ← | ← |

Plechy sa riadia stĺpcom normy "pre plechy". Norma nemá stĺpec pre kruhové rúrky: DetailCraft zapisuje priemer ako výšku aj šírku pásnice a hrúbku steny ako obe hrúbky.

## Vonkajšie obrysy (AK)

- **Profily I a U:** stojina (v) s obdĺžnikovým zárezom pre každý výrez; každá pásnica (o a u) skrátená na konci tam, kde je výrez aspoň tak hlboký ako pásnica.
- **Obdĺžnikový HSS:** obe bočné steny (v a h), zarezané pre výrezy, a horná a spodná stena (o a u).
- **Uholníky:** jeden obdĺžnik pre každé rameno (v a u). Výrezy na uholníkoch sa nezapisujú: takýto dielec sa uvedie ako nezapísaný. Uholníková diagonála skrutkovaná k [uzlovému plechu](topic:brace-gussets) má otvory na skrutkovanom ramene: v pre rameno pozdĺž u dielca, u pre rameno pozdĺž v.
- **Kruhový HSS:** jeden obdĺžnik na ploche v, rúrka pohľadom spredu (dĺžka × priemer).
- **Plechy:** jeden obdĺžnik na ploche v.

Každý obrys je uzavretý (prvý bod sa zopakuje na konci) a vedie proti smeru hodinových ručičiek.

## Otvory (BO)

Jeden riadok na každý otvor: plocha, x, y, priemer, hĺbka 0 (priechodný). Sú zahrnuté všetky otvory, tie, ktoré ste zadali, aj tie, ktoré vytvorili spoje. Otvor prechádzajúci bočnými stenami obdĺžnikového HSS sa zapíše dvakrát, raz na ploche v a raz na ploche h.

## Plochy a súradnice

Každý profil sa umiestňuje tak, ako ho zobrazuje obrázok polôh profilov normy (DSTV 1998, s. 7): x pozdĺž dielca, Y naprieč, Z nahor od zadnej plochy, s nulovým bodom vo vonkajšom rohu. DetailCraft nikdy nezrkadlí dielec, aby zodpovedal obrázku.

| Plocha | Profil I | Profil U | Uholník | Obdĺžnikový HSS | Plech |
|---|---|---|---|---|---|
| v | Stojina, spredu | Stojina, pohľad zo strany končekov pásnic | Rameno pozdĺž u dielca | Bočná stena pri −u | Plocha plechu |
| h | | | | Bočná stena pri +u | |
| o | Horná pásnica | **Spodná** pásnica | | Horná stena | |
| u | Spodná pásnica | **Horná** pásnica | Rameno pozdĺž v dielca | Spodná stena | |

- **x** vedie pozdĺž dielca od začiatku rezu.
- **Profily I a obdĺžnikový HSS:** y na stojine alebo bočných stenách od spodnej strany profilu; y na pásnici alebo na hornej a spodnej stene od jej hrany na zadnej strane (na strane +u dielca).
- **Profily U** ležia na chrbte s končekmi pásníc hore, ako na obrázku normy. Y na stojine preto vedie od vonkajšej strany hornej pásnice nadol, horná pásnica je plocha u a spodná pásnica plocha o, a y na pásnici vedie od chrbta stojiny smerom ku končeku.
- **Uholníky:** y na každom ramene od päty.
- **Plechy:** y od hrany plechu pri −u.

Pred rezaním overte, ako softvér vášho stroja číta plochy profilov U: niektoré programy otáčajú profily U opačne.

## Nezapisuje sa

Skosenia, vnútorné obrysy, značenia (SI), iné uhly rezu píly než kolmé, podlhovasté otvory, otvory v kruhových rúrkach (DetailCraft ich nemá) a výrezy na uholníkoch a kruhových rúrkach.
