---
title: Konstruktīvās pārbaudes
summary: Problēmas, ko detalizētājs pamana ar aci: skrūve, kuru atslēga nevar sasniegt, skrūves, kas par tuvu uzgalim, stūrmetinājumi ārpus to izmēru robežām, metinājumi, kurus degļis nevar sasniegt, un caurules, kas tur ūdeni.
keywords: konstruktīvā pārbaude, atslēga, uzgalis, skrūves piekļuve, pievilkšana, metinājuma izmērs, stūrmetinājums, minimālais metinājums, maksimālais metinājums, ūdens, ventilācijas caurums, drenāžas caurums, cinkošana, dobais profils, problēmas
from: 72315151
---

DetailCraft meklē četrus problēmu veidus, ko neatrod neviena izturības pārbaude, un uzskaita tos panelī {{ui:Problēmas}}. Tie ir brīdinājumi un piezīmes, kas jāaplūko, nevis kļūdas: modelis joprojām tiek veidots.

## Skrūve, ko atslēga nevar sasniegt

Katrai skrūvei DetailCraft uzliek uzgali pāri galvai un uzgrieznim. Uzgalis ir cilindrs, tikpat plats kā uzgrieznis pāri stūriem plus 4 mm siena, 60 mm garš. Ja cilindra iekšpusē atrodas sijas siena, flanša, plāksne vai saite, problēmā norādīts savienojums, skrūvju skaits, kura detaļa traucē un cik tālu tā atrodas no skrūves.

Uzgalis ir tipisks triecienuzgalis. Uzgriežņu atslēgai vajag mazāk vietas, lielākam instrumentam — vairāk. Lūdziet pieslēgto asistentu palaist `constructability_check` ar citu `socketLength`, lai redzētu, kā mainās atbilde.

## Skrūves par tuvu uzgalim

Uzgalis virs vienas skrūves nedrīkst pieskarties nākamās skrūves galvai. Savienojuma skrūves, kas atrodas tuvāk nekā uzgaļa platums plus kaimiņa galva, tiek uzskaitītas ar atrasto un nepieciešamo attālumu.

## Stūrmetinājumu izmēri

AISC 360-16 J2.4 tabula nosaka mazāko stūrmetinājumu pēc plānākās daļas biezuma (3 mm līdz 6.35 mm biezumam, 5 mm līdz 12.7, 6 mm līdz 19.05, 8 mm virs tā), un J2.2b — lielāko gar materiāla malu: ne lielāku par materiālu, ja tas plānāks par 6.35 mm, citādi par 1.6 mm mazāku. Savienojumi ar vienādu izmēru uz vienāda biezuma tiek uzskaitīti kā viena problēma.

Izmantotais biezums ir plānākā daļa, kas nosaukta metinājumā, tāpēc 8 mm metinājums visapkārt sijai ar 6.35 mm sienu tiek uzskaitīts.

## Ūdens un ventilācija

- **Atvērts augšējais gals** dobam profilam, kas stāv vertikāli vai ir slīps vairāk nekā par 10°, ļauj iekļūt lietus ūdenim.
- Dobam profilam, **noslēgtam abos galos**, vajadzīgs ventilācijas un drenāžas caurums; karstā cinkošana un karsēta gaisa spiediens abi to prasa.

## Vai metinātājs var sasniegt

Stūrmetinājums tiek veidots, degli turot pusceļā starp abām virsmām, ko tas savieno. Katram visapkārt esošam stūrmetinājumam (galaplāksnei, pamatplāksnei, slīpai plāksnei) pārbaude ņem elementa šķērsgriezuma kontūru plāksnes līmenī un ik pēc 20 mm virza degļa trajektoriju 45° leņķī uz āru no vietas, kur tā sprausla (sākumā 10 mm rādiuss) pirmo reizi atbrīvo abas virsmas, vēl 30 mm. Ja trajektorija saskaras ar sijas pašas flanšu vai citu detaļu, šī metinājuma daļa tiek uzskaitīta kopā ar detaļu un attālumu. Šie skaitļi ir tipiski, nevis standarta: procesu un sprauslu jautājiet savam izgatavotājam. Metinājumi gar divām malām (bīdes cilpa) netiek noteikti un netiek pārbaudīti.
