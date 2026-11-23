---
title: Pārbaudiet metinājumus vietās, kur elementi saskaras
summary: Pēc projektēšanas pārbaudes pārbaudiet stūra un sviedru metinājumus visapkārt katram elementam tur, kur tas saskaras ar citu elementu vai balstu, pēc AISC 360-16 J nodaļas vai EN 1993-1-8, un redziet, kura metinājumu grupa tiek izmantota visvairāk un kurā kombinācijā. Palīglīdzeklis, līdz inženieris to ir pārskatījis.
keywords: metinājums, metinājumi, metinājumu pārbaude, stūra metinājums, sviedru metinājums, pilna penetrācija, AISC 360, EN 1993-1-8, metinājumu grupa, noslodze, kapacitāte, savienojums, konstrukcija, inženieris
from: e8eebbe6
---

Bloks {{ui:Metinājumu pārbaudes}} cilnē {{ui:Aprēķins}} zem {{ui:Projektēšanas pārbaudes}} ņem pēdējā atrisinātā rāmja spēkus un jūsu veidotās stiprības kombinācijas un pārbauda metinājumu visapkārt katram elementam katrā mezglā: tur, kur elements saskaras ar citu elementu vai stāv uz balsta.

:::warning
Tas ir **palīglīdzeklis, līdz inženieris to ir pārskatījis**. Tas pārbauda metinājumu, kas vilkts visapkārt šķērsgriezumam kā viena grupa, no rāmja pašu gala spēkiem. Tas nelasa metinājumu izmērus vai garumus, ko esat zīmējis darbnīcas rasējumos, un nepārbauda skrūves, plāksnes, balstspēju, bloka bīdi vai atsvirzīšanos. Tā rezultāti nav apstiprinājuma zīmogs.
:::

## Palaidiet pārbaudi

1. Atrisiniet rāmi cilnē {{ui:Aprēķins}} un sadaļā {{ui:Projektēšanas pārbaudes}} izvēlieties {{ui:Projektēšanas norma}}, pēc tam nospiediet {{ui:Izveidot kombinācijas}} (metinājumu pārbaudei vajadzīgas tās pašas stiprības kombinācijas).
2. Sadaļā {{ui:Metinājumu pārbaudes}} iestatiet {{ui:Stūra mala (mm, 0 = sienas biezums, ne vairāk kā 8)}}. 0 nozīmē, ka mala seko šķērsgriezuma plānākajai sienai, līdz 8 mm. Saskaņā ar AISC normu {{ui:Metinājuma metāla stiprība F_EXX (MPa)}} ir metinājuma metāla stiprība (482.6 MPa ir E70 elektrods). Saskaņā ar EN 1993 tērauda klase nosaka metinājuma metāla stiprību un korelācijas koeficientu.
3. Nospiediet {{ui:Pārbaudīt metinājumus}}.

Katra tabulas rindiņa ir viena metinājumu grupa (elementa gala mezgls). Skaitļi: tās noteicošās pārbaudes **noslodze**, stāvoklis (iztur vai nesaiet) un tas, kura pārbaude un klauzula noteica rezultātu kurā kombinācijā. Grupa, ko pārbaude nevar novērtēt, norāda iemeslu (nav tērauda klases, nav korelācijas koeficienta šai klasei EN 1993-1-8 4.1. tabulā, nav metinājuma šim šķērsgriezumam) skaitļa vietā.

Ja mainīsiet malu vai metinājuma metālu vai rediģēsiet modeli, tabula tiek notīrīta, jo tā bija domāta vecajām vērtībām. Nospiediet {{ui:Pārbaudīt metinājumus}} vēlreiz.

## Ko pārbauda

- **ASCE 7 + AISC 360:** stūra metinājuma metāls (leņķis starp slodzi un metinājumu tiek ņemts vērā, J2.4), pamatmetāla bīdes plīsums (J4.2) un pilnās penetrācijas sviedru metinājumi (J2.5. tabula).
- **EN 1990 + EN 1993:** stūra metinājumi ar vienkāršoto metodi pēc EN 1993-1-8 4.5.3.3 un sviedru metinājumi pēc 4.7.1.
- Detalizācijas brīdinājumi par minimālo un maksimālo malu un minimālo garumu, kopā ar vērtību, ar kuru tie salīdzināti.

Metinājumu grupa tiek uzskatīta par līnijveida šķērsgriezumu un noslogota ar elastīgo vektoru metodi: katra metinājuma daļa uzņem spēku no elementa aksiālā spēka, abām bīdēm, vērpes un abiem lieces momentiem, kas saskaitīti kā vektori.

## Ko nepārbauda

Daļēji penetrējoši metinājumi, slīpi stūra metinājumi, tapu un spraugu metinājumi, pārtrauktie metinājumi, momentānā centra metode, EN virziena metode, nogurums un pamatmetāla bloka bīde vēl nav izveidoti. Dažas standartu konstantes ir ierakstītas pēc standartiem un vēl nav salīdzinātas ar drukātu eksemplāru; atskaite norāda, no kurienes nāk katrs skaitlis ({{ui:Atskaite (PDF)}} papildinās ar metinājumu tabulām, kad esat pārbaudījis). Skatiet [Pārbaudiet tērauda elementus](topic:design-checks) un [Vēl nav izveidots](topic:not-built-yet).
