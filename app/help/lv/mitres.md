---
title: Šķautņu savienojumi
summary: Savienojiet divus I-veida elementus, kas saskaras leņķī: abi gali nogriezti plaknē, kas dala leņķi uz pusēm, ar gala plāksnēm, skrūvēm un stiprinājumiem, ja vēlaties.
keywords: šķautne, šķautņu savienojums, ceļgals, portālrāmis, kore, stūris, leņķa griezums, slīps griezums, gala plāksne, skrūvēta gala plāksne, stiprinājums, savienot
from: cd8380d4
---

Šķautne savieno divus I-veida elementus, kuru gali saskaras leņķī, piemēram, portālrāmja ceļgalu, koru vai divas sijas, kas plānā pagriežas stūrī. DetailCraft abus galus nogriež plaknē, kas dala leņķi starp tiem uz pusēm, tāpēc abas griezuma virsmas sakrīt. Ja vēlaties, tas pievieno gala plāksni katram griezuma galam, savieno abas plāksnes ar skrūvēm un katrā elementā ievieto sieniņas stiprinājumu pāri.

## Kur tā darbojas

- Divi **I-veida profili** (IPE, HEA, HEB, W un līdzīgi), kuru **gali saskaras vienā mezglā**. Jebkuru elementu var zīmēt jebkurā virzienā.
- Leņķim starp elementiem jābūt vismaz 15°. Elementi vienā līnijā tiek noraidīti: izmantojiet [savienojumu](topic:splices).
- Vienkāršs griezums (bez plāksnēm) darbojas neatkarīgi no tā, kā elementi saskaras. **Gala plāksnēm** nepieciešams, lai abi elementi saskartos to sieniņu plaknē, kā portālrāmja ceļgalā vai korē. Divas sijas, kas plānā pagriežas stūrī, saskaras to flanšu plaknē, tāpēc tām ir tikai vienkāršais griezums.
- Dažāda izmēra elementi tiek savienoti, bet ar brīdinājumu: to griezuma virsmas nesakrīt.

## Pievienot šķautni

1. Atlasiet divus elementus: noklikšķiniet uz viena, pēc tam {{key:Shift}}+klikšķis uz otra.
2. Grupas {{ui:Savienot}} izvēlnē {{ui:Vairāk}} izvēlieties {{ui:Šķautņu savienojums}}. Atveras šķautnes dialoglodziņš.
3. Iestatiet numurētos laukus. Zīmējums blakus tiem tiek veidots no jūsu skaitļiem, kamēr rakstāt, un tā numurētie apļi rāda, ko katrs lauks iestata.
4. Izvēlieties {{ui:Pievienot šķautni}}. Ja atlasījāt vairāk nekā divus elementus, katram brīvajam savienojumam starp tiem tiek piemērota tā pati šķautne.

Lai vēlāk mainītu šķautni, atlasiet to (noklikšķiniet uz vienas no tās plāksnēm) un labajā panelī izvēlieties {{ui:Šķautnes dialogs ar priekšskatījumu}}, vai tieši mainiet tās iestatījumus tur. Vienkāršam griezumam nav plākšņu, uz kurām noklikšķināt: atlasiet tā divus elementus un vēlreiz izvēlieties {{ui:Šķautņu savienojums}}, un dialogs atveras šai šķautnei. {{ui:Lietot līdzīgām (n)}} to kopē uz katru brīvo savienojumu starp elementiem ar tiem pašiem diviem profiliem un tādu pašu leņķi.

## Numurētie lauki (mm)

| Nr. | Iestatījums | Noklusējums | Ko dara |
|---|---|---|---|
| 1 | Atstarpe starp plāksnēm (vai griezuma galiem) | 0 | Brīva atstarpe savienojumā. Katra puse saglabā pusi no tās |
| 2 | Gala plāksnes, plāksnes biezums | ieslēgts, 20 | Gala plāksne, metināta visapkārt katram griezuma galam. Noņemiet atzīmi vienkāršam griezumam |
| 3 | Skrūvju rindas, rindu solis, gauge, ārējā rinda | 4, 0, 0, izslēgts | Solis 0 izvieto rindas vienmērīgi starp flanšiem. Gauge 0 = puse no plāksnes platuma, vismaz 2.4 × caurums. Ārējā rinda atrodas plāksnes pagarinājumā aiz ārējā flanša |
| 4 | Plāksne aiz ārējā flanša | 0 | Cik tālu plāksnes sniedzas aiz ārējā flanša, pa griezumu |
| 5 | Plāksne aiz iekšējā flanša | 0 | Tas pats no iekšpuses |
| 6 | Sieniņu stiprinājumi, attālums aiz griezuma | izslēgts, 50 | Pāris katrā elementā, abās sieniņas pusēs, perpendikulāri elementam, tik tālu aiz tā griezuma tālākā gala |
| 7 | Stiprinājuma biezums | 10 | |

Sadaļā {{ui:Skrūves}}: skrūves diametrs, caurums, kvalitātes klase un garuma rezerve (20, 22, A325, 30), kā gala plāksnēm. Sadaļā {{ui:Plāksnes un metinājumi}}: plāksnes platums (0 = flanša platums), stūra metinājuma izmērs (8) un plāksnes materiāls (A36).

## Ko iegūstat

- **Griezumi.** Katra elementa gals tiek nogriezts tā plaknē. Tā garums sarakstos, rasējumos un NC failos ir **kopējais garums**, no tā taisnā gala līdz tālākajam griezuma punktam.
- **Plāksnes** pieder savam elementam: katra elementa mezgls ir elements, tā gala plāksne un tā stiprinājumi. Skrūves ir savienojuma būvlaukuma skrūves: materiālu saraksts tās skaita vienreiz, un katra elementa mezgla rasējums tās uzskaita kā brīvas skrūves.
- **Rasējumi** rāda slīpos galus un plāksnes; šķautnes elementa darbnīcas rasējums norāda katra griezuma leņķi attiecībā pret taisni.
- **NC faili** (DSTV) galvenē satur slīpo griezumu leņķus, kā to prasa standarts, un kontūras, kas seko griezumam. Pārbaudiet tos savā darbnīcas NC skatītājā pirms griešanas, kā jebkuru NC failu.
- **IFC** apgriež katra elementa ekstrūziju pēc tā griezuma plaknes, tāpēc citas programmas rāda īsto griezumu.
- **Zīmes:** šķautnes elements ir cits gabals nekā taisni nogriezts elements tāda paša garuma. Divi elementi ar vienādiem griezumiem dalās ar zīmi, kā kores divi spāri.

## Kas jāzina

- Šķautne paliek aktīva. Pārvietojiet vai mainiet abu elementu izmēru, un griezums, plāksnes un skrūves seko. Dzēšot kādu no elementiem, šķautne pazūd, un otra elementa gals atkal kļūst taisns.
- Brīdinājumos izmanto tos pašus EN 1993-1-8 minimumus, kā citiem savienojumiem (gala un malas attālums 1.2 × caurums, solis 2.2 × caurums, gauge 2.4 × caurums), kā arī skrūvju rindas, kas pārāk tuvu flanšam, plāksnes, kas šaurākas par flanšiem, un stiprinājumus bez vietas.
- Vērtības ir sākuma vērtības, nevis projekts. DetailCraft nepārbauda savienojuma stiprību, un tas neveido ceļgalu, neveido metinātu šķautni ar sadurmetinājumu un neveido stiprinājumus paralēli otra elementa flanšiem.
