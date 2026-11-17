---
title: Tloris montaže in film
summary: Vnesite žerjav in njegov diagram nosilnosti, preverite vsak dvig glede na diagram v vrstnem redu faz ter shranite film montaže, ki se predvaja brez povezave na vsakem telefonu.
keywords: montaža, žerjav, dvig, diagram nosilnosti, polmer, nosilnost, vezanje, zaporedje, film, animacija, telefon, brez povezave, načrt dvigovanja
from: fa7b0133
---

Zavihek {{ui:Montaža}} pretvori model v nalog za montažo in preveri vsak dvig glede na žerjav, ki ga opišete. Načrtuje iz številk, ki jih vnesete. Ni načrt dvigovanja: to naredita vezalec in upravljalec žerjava.

## Opišite žerjav

Izberite {{ui:Dodaj žerjav}}, nato izpolnite:

- **Središče žerjava X in Y:** kje stoji žerjav, v milimetrih.
- **Najvišji kavelj:** kolikor se kavelj lahko dvigne, v milimetrih. 0 pomeni, da omejitev ni preverjena.
- **Blok kavlja in vezalna oprema, ki nista v diagramu:** kilogrami, odšteti od diagrama, preden se doda obremenitev, kadar vaš diagram tega že ne upošteva.
- **Diagram nosilnosti:** ena vrstica na vrstico, polmer v metrih, nato nosilnost v kilogramih. Vrstice prekopirajte z lastnega diagrama žerjava.

Diagram se bere tako, kot se bere diagram nosilnosti: nosilnost, navedena za polmer, velja do tega polmera. Obremenitev pri polmeru med dvema vrsticama dobi nosilnost **bolj oddaljene** vrstice, nikoli vrednosti vmes. Znotraj prve vrstice velja nosilnost prve vrstice. Preko zadnje vrstice žerjav ne more dvigniti ničesar. Polmer, ki šteje za dvig, je večji od polmera prijema in polmera nastavitve.

Drugi žerjav se doda na enak način. Vsak dvig gre prvemu žerjavu, ki ga lahko opravi znotraj vaše meje.

## Kaj načrt naredi

- En dvig na sestav: nosilec s svojimi čelnimi ploščami, steber s svojo podložno ploščo, stopnišče.
- Vrstni red sledi najprej fazam, nato nivo za nivojem: stebri, nosilci, ki jih nosijo, diagonale, plošče, stopnišča. Del ni nikoli dvignjen pred tem, kar ga nosi.
- Vsak dvig prikaže svojo težo (bruto teža modela, plus {{ui:Vezalna oprema dodana vsaki teži}}), svoj polmer, delež diagrama, ki ga uporablja, in minuto, ob kateri se začne.
- {{ui:Največ diagrama, ki ga dvig sme uporabiti}} je vaša varnostna meja. Dvig nad njo je označen **Nad mejo**; nad diagramom **Nad diagramom**; preko zadnjega polmera diagrama **Preko diagrama**; in del, višji od kavlja, **Kavelj prenizek**.

Luknje in izrezi se ne odštejejo od teže, vijaki pa so zajeti v odstotku vezalne opreme.

## Težave

Vsak dvig, ki je nad mejo, preko diagrama, previsok ali nastavljen pred tem, kar ga nosi, se prikaže na plošči {{ui:Težave}}. Nosilec brez spoja, ki bi ga nosil, je naveden kot tisti, ki potrebuje začasno podporo.

## Shranite film

{{ui:Shrani film}} zapiše eno datoteko HTML. Odprite jo v kateremkoli brskalniku, tudi na telefonu, brez omrežja in računa: predvajajte in ustavite, povlecite vrstico na poljubno minuto, zavrtite model s prstom, povečajte s stiskom. Napis navaja vsak dvig, njegovo težo, polmer in delež diagrama. Model je narisan kot preprosti kvadri: kaže vrstni red in dvige, ne dejanskih profilov.

Ista tabela se shrani kot CSV z gumbom {{ui:CSV}}. Žerjav in diagram se shranita v datoteko modela, vsaka sprememba pa je en korak razveljavitve.
