---
title: Styrkja rétthyrnda steypta súlu
summary: Dæmi um smáatriði á rétthyrndri steypusúlu í DetailCraft: settu hana, gefðu henni langsstengur og bindingar, lestu athuganirnar, skörunina fyrir ofan hana og stangamerkin, og teiknaðu verkstæðisblaðið hennar.
keywords: steypusúla, rétthyrnd súla, styrking súlu, langsstengur, lóðréttar stengur, bindingar, bönd, þverbindingar, skarð, skörun, upphafsstengur, stálhlutfall súlu, 1 prósent, 8 prósent, bil binda, ACI 318-19 25.7.2, EN 1992-1-1 9.5, verkstæðisteikning, stangamerki, 8C1, 3C2
from: aee2a3ca
---

Þetta efni tekur eina ferkantaða súlu frá engu yfir í yfirfarið, teiknað og skráð smáatriði. Almennu reglurnar fyrir bita, plötur og veggi eru í [Smáatriði járnbentrar steypu](topic:reinforced-concrete); þetta er hlið súlunnar á því, með tölum sem þú getur endurtekið.

:::warning
DetailCraft smáatriðir þær stangir sem þú gefur því. Það hannar þær ekki. Stangirnar hér að neðan eru upphafsgildi fyrir dæmið, ekki tilmæli: hönnunarverkfræðingurinn velur stærðina, fjöldann og bilið.
:::

## Hvað súla er hér

Rétthyrnd súla hefur breidd (eftir staðbundnum x-ási sínum) og dýpt þvert á hana (eftir staðbundnum y-ási sínum), hreina þekju að bindingunum, langsstengur á hverjum fleti og lokaðar bindingar. Snúningur snýr allri súlunni; flatirnir haldast „breiðflötur“ og „dýptarflötur“.

- Langsstengurnar eru gefnar sem fjöldinn á breiðfleti og fjöldinn á dýptarfleti. Hornstengurnar telja á báðum, þannig að 3 og 3 gera 8 stengur; 4 og 4 gera 12.
- Bindingarnar eru lokaðir rétthyrningar með tveimur krókum í einu horni, 135° eða 90°. Fyrsta bindingin er ákveðin fjarlægð fyrir ofan gólfið (og neðan þeirrar næstu), endasvæðin hafa þéttara bil, miðjan breiðara.
- Hvað stangirnar gera efst: halda áfram og skarast við stengur fyrir ofan, beygjast inn með 90° krókum í gólfið, eða stoppa undir efstu hliðinni.

## Dæmissúlan

400 × 400 mm súla, 3600 mm á milli gólfsins fyrir ofan og gólfsins fyrir neðan, #8 langsstengur, #3 bindingar, 40 mm hrein þekja, f'c 28 MPa, fy 420 MPa, ACI 318-19, innri súla.

1. Opnaðu flipann {{ui:Steypa}} og settu upp ásalínurnar og kótana sem súlan stendur á (vinstra spjaldið).
2. Í {{ui:Bæta við eftir ás}} velur þú {{ui:Steypusúla}}, velur ásskurðpunktinn og báða kótana, setur {{ui:Breidd (mm)}} og {{ui:Dýpt þvert (mm)}} í 400 og velur {{ui:Bæta við}}.
3. Í spjaldinu {{ui:Eiginleikar}} setur þú:
   - {{ui:Hrein þekja (mm)}} 40;
   - {{ui:Langsstengur}} #8, {{ui:Stengur á breiðum fleti}} 3, {{ui:Stengur á dýptarfleti}} 3;
   - {{ui:Bindingar}} #3, {{ui:Krókar}} 135°, {{ui:Bil á milli (mm)}} 300, {{ui:Lengd endasvæðis (mm)}} 600, {{ui:Bil á endasvæðum (mm)}} 150, {{ui:Fyrsta frá fleti (mm)}} 50;
   - {{ui:Stengur efst}} {{ui:Halda áfram og skarða við stengur fyrir ofan}}.

Sérhver breyting er eitt skref sem hægt er að afturkalla.

### Það sem þú færð

| Hluti | Niðurstaða |
|---|---|
| Langsstengur | 8 stengur #8 (hringur 3 × 3), hver 4375 mm löng: 3600 mm súlan plús 775 mm skörun fyrir ofan hana |
| Skörun | 757 mm þörf fyrir þrýstiskörun (ACI 318-19 25.5.5.1, fy 420), 775 mm veitt: þörfin námunduð upp í næsta 25 mm |
| Bindingar | 17 bindingar #3, hver með skurðlengd um 1359 mm, bil 150 mm á tveimur 600 mm endasvæðum og 300 mm á milli |
| Stálhlutfall | 2.5 % af heildarsniðinu (mörk 1 % til 8 %, ACI 318-19 10.6.1.1) |
| Hrein bil stanganna | 112 mm (þarf að vera að minnsta kosti 40 mm, ACI 318-19 25.2.3) |
| Bil binda | 300 mm (leyft 400 mm: minnst af 16 þvermálum stanga, 48 þvermálum binda og minni hliðinni, ACI 318-19 25.7.2.1) |
| Stærð bindinga | #3 (leyft niður í 9,5 mm, ACI 318-19 25.7.2.2) |

Allt þetta er í lista hlutans {{ui:Athuganir}}; skörunin er líka í {{ui:Skarðir og festing}}.

## Þverbindingar

Með einni ytri bindingu eru aðeins hornstengurnar haldnar. ACI 318-19 25.7.2.3 leyfir miðstöng á fleti að vera óstudd ef hún er innan 150 mm hreins bils frá hornstöng. Með 3 stöngum á fleti, eins og hér að ofan, er það uppfyllt. Með 4 eða fleiri stöngum á fleti er það ekki, og DetailCraft segir það sem viðvörun ({{ui:Athuganir}} og {{ui:Vandamál}}): „þverbindingar“ eru nauðsynlegar. **Þverbindingar eru ekki teiknaðar enn**: bættu þeim við í teikninguna handvirkt, eða veldu færri stengur á fletinum.

Fyrir EN 1992-1-1 athugar DetailCraft stærð stanganna (að minnsta kosti 8 mm), fjölda stanganna (að minnsta kosti 4), stálflötinn (0,2 % til 4 % af sniðinu), hreina bilið og bil bindinga (9.5.2 og 9.5.3).

## Skörunin, undirstaðan og súlan fyrir neðan

- Þar sem **undirstaða líkansins stendur undir súlunni** skarast súlan við upphafsstangir undirstöðunnar, og skörun þeirra er athuguð líka.
- Þar sem **önnur súla líkansins stendur undir henni** skarast hún við stangir þeirrar súlu.
- Gefðu þína eigin {{ui:Lengd skarðs (mm, 0 = eftir þörfum)}} til að yfirskrifa; of stutt skörun er vandamál og er merkt * í töflunni.
- Þrýstiskarðir eru notaðir sjálfgefið ({{ui:Þrýstiskarð}} í stillingunum); veldu {{ui:Togskarð}} þegar súlan getur verið í togi.

## Merki, listi og verkstæðisblaðið

Eins stangir deila einu merki: langsstengur súlunnar fyrir ofan eru 8C1, bindingar hennar 17C2 (talan fyrst, síðan tegundarstafurinn C fyrir súlu og runnúmerið). Þau birtast í flipanum {{ui:Beygjulisti}} með skurðlengd og þyngd, og í CSV-skránni frá {{ui:Útkoma}} › {{ui:Meira}} › {{ui:Beygjulisti}}.

Veldu {{ui:Verkstæðisteikning}} við hliðina á súlunni fyrir blað með súlunni í útliti (hverja stöng, merki hennar, bindingasvæðin og skörunina mælda) og sniði á miðjunni, og síðan beygjublaðinu. Vistaðu {{ui:Þetta blað sem PDF}}.

## Það sem þetta gerir ekki

- Kringlóttar súlur og spírallar, og súlur sem eru ekki rétthyrndar: ekki smíðað.
- Hornbindingar og þverbindingar innan sniðsins, og jarðskjálftaaðferðir (ACI 318-19 kafli 18): ekki smíðað.
- Skarðir á stöðum sem þú velur, eða stígandi skarðir: allar stengur skarast í einu sniði.
- Hvort stangirnar nægja fyrir álagið: það er hönnun verkfræðingsins.
