---
title: Dodajanje podložnih plošč in sidrnih palic
summary: Pod steber postavite zavarjeno podložno ploščo s štirimi sidrnimi palicami, nastavite njene mere in jo kopirajte na vse podobne stebre.
keywords: podložna plošča, baseplate, sidrne palice, sidrni vijaki, pritrdilni vijaki, podnožje stebra, temeljni vijaki, podobno
from: 619ebc64
---

Povezava s podložno ploščo postavi ploščo pod steber, steber skrajša za debelino plošče, obe zavari skupaj in doda štiri sidrne palice skozi luknje v plošči.

:::warning
Mere so začetne vrednosti, ne projekt. DetailCraft ne preverja nosilnosti, trdnosti palic ali vpetja.
:::

## Dodajanje podložne plošče

1. Izberite {{ui:Izberi}} ({{key:V}}) in kliknite steber. Mora biti navpičen.
2. Izberite {{ui:Podložna plošča}} v skupini {{ui:Poveži}} ali {{ui:Dodaj podložno ploščo}} v podoknu {{ui:Lastnosti}}.
3. Vrstica stanja pove: „Podložna plošča dodana s štirimi sidrnimi palicami.“ Nova povezava je izbrana.

Steber lahko ima eno podložno ploščo. Če jo že ima, vrstica stanja pove: „Ta steber že ima podložno ploščo.“

## Spreminjanje

Izberite podložno ploščo (kliknite ploščo ali palico). Pod {{ui:Plošča, vijaki in var (mm)}}:

| Nastavitev | Privzeto | Kaj naredi |
|---|---|---|
| Debelina plošče | 25 | Steber se skrajša za to vrednost |
| Dolžina plošče | 450 | Vzdolž globine stebra |
| Širina plošče | 400 | Čez steber |
| Premer palice | 20 | Velikost sidrne palice |
| Premer luknje | 33 | Luknja v plošči |
| Kakovost vijaka | F1554 Gr 36 | Kakovost palice, kot besedilo |
| Razmik palic (vzdolž globine) | 350 | Med središči palic, vzdolž dolžine plošče |
| Razmik palic (čez) | 300 | Med središči palic, čez |
| Štrlina palice nad ploščo | 100 | Od vrha plošče do vrha palice |
| Vpetje palice pod ploščo | 450 | Od spodnje strani plošče v beton |
| Velikost kotnega vara | 8 | Okoli podnožja stebra |
| Material plošče | A36 | Besedilo |
| Reža za malto | 0 | Razmik med vrhom betona in spodnjo stranjo plošče |
| Ojačitve | Brez | Izberite Brez, 2 (v smeri stojine) ali 4 (tudi pravokotno nanjo); glejte spodaj |
| Debelina, višina ojačitve | 12, 150 | |
| Globina strižnega jezička | 0 | Kako daleč jeziček sega pod ploščo; 0 = brez jezička |
| Debelina, širina strižnega jezička | 25, 150 | |
| Ploščate podložke | Brez | Na vsaki palici ali brez |
| Velikost, debelina podložke | 0, 0 | 0 = najmanjša vrednost iz AISC Design Guide 1 za palico |

Dolžina palice = vpetje + reža za malto + debelina plošče + štrlina. Pri privzetih vrednostih je to 575 mm.

## Podrobnosti podnožja: malta, ojačitve, strižni jeziček, podložke

Vse štiri so na novi podložni plošči izklopljene, prav tako pri podložnih ploščah iz modelov, narejenih pred DetailCraft 0.4.

- **Reža za malto.** Plošča je za toliko višje nad vrhom betona, palice pa se za toliko podaljšajo. AISC Design Guide 1 (2.10) predlaga 1 in. pri končanem tlaku in 1½ do 2 in. pri temelju ali stebru; več za velike plošče in plošče s strižnim jezičkom.
- **Ojačitve.** Navpične plošče, zavarjene na steber in ploščo, od površine stebra do roba plošče, kot pravokotniki (zaenkrat brez skosa ali zožitve). **2** sta v smeri stojine, onstran vsake pasnice; **4** dodajo še dve pravokotno na stojino, med pasnicama, do stranic plošče. Na cevastem stebru so na sredini vsake stranice. Vsaka je z obeh strani zavarjena na steber in ploščo.
- **Strižni jeziček.** Plošča, zavarjena po vsem obodu pod podložno ploščo, v smeri globine stebra, na sredini. DetailCraft opozori, če ni globlja od reže za malto. Ne izreže žepa v temelju; zato [preverjanje kolizij](topic:clash-check) izpusti jeziček in temelj.
- **Ploščate podložke.** Kvadratna ploščata podložka na vsaki palici, ki sedi na podložni plošči, v sestavu stebra pa je navedena kot prosta (dobavljena s stebrom, ne zavarjena; Design Guide 1, 2.6). Pri velikosti in debelini 0 DetailCraft vzame najmanjšo podložko iz AISC Design Guide 1, 2. izd., preglednica 2.3, za palico; metrična palica dobi naslednjo večjo palčno velikost (palica M20 dobi vrstico 7/8 in.: 2½ in. × 5/16 in.). Podokno lastnosti prikaže uporabljeno velikost. Luknja podložke je premer palice + 1/16 in.: to je izbira DetailCraft, preglednica je ne določa. DetailCraft opozori, če palice morda ne štrlijo dovolj daleč za podložko in matico (štrlina manj kot debelina podložke + premer palice).

Preglednica 2.3 v Design Guide 1 priporoča tudi luknjo za palico v plošči: 1-5/16 in. za palico ¾ in., 1-9/16 in. za ⅞ in., 1-13/16 in. za 1 in. DetailCraft ne spremeni velikosti vaše luknje.

Opozorila se prikažejo tudi, ko so luknje za palice bližje robu plošče od 1.2 × premer luknje, ko palice padejo v obris stebra ali ko je plošča manjša od stebra.

## Kopiranje na podobne stebre

1. Izberite podložno ploščo.
2. Izberite {{ui:Uporabi za podobne (n)}} ali {{ui:Podobno}} v meniju {{ui:Več}} skupine {{ui:Poveži}}.
3. Vsak navpični steber z enakim profilom, ki nima podložne plošče in ne stoji na drugem stebru, dobi kopijo.

## Podložne plošče in temelji

Podložna plošča ne potrebuje temelja, temelj pa ne ve za podložno ploščo nad seboj: sidrne palice niso povezane z armaturo temelja. Temelje postavite z {{ui:Temeljna stopa}}; glejte [Postavitev temeljnih stop z armaturo](topic:footings-and-rebar).
