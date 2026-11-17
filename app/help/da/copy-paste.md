---
title: Kopiér, sæt ind og duplikér
summary: Vælg flere dele, kopiér dem med deres huller, udskæringer og forbindelser, og sæt dem ind på et gitterkryds, med forskydning, på samme sted eller i en anden fane. Klip, duplikér, slet og vælg alle.
keywords: kopiér, sæt ind, klip, duplikér, udklipsholder, sæt ind på samme sted, vælg alle, fravælg alle, flervalg, shift-klik, flere, gentag et fag, kopiér en ramme, forskydning, slet flere, menuen Rediger, menuen Mere
from: f25f1829
---

Gruppen {{ui:Rediger}} på værktøjslinjen har {{ui:Fortryd}}, {{ui:Gentag}}, {{ui:Kopiér}} og {{ui:Sæt ind}}. Dens menu {{ui:Mere}} indeholder resten: {{ui:Klip}}, {{ui:Kopiér}}, {{ui:Sæt ind}}, {{ui:Sæt ind på samme sted}}, {{ui:Duplikér}}, {{ui:Slet}}, {{ui:Vælg alle}} og {{ui:Fravælg alle}}, hver med sin genvej. En knap eller et menupunkt, der ikke kan bruges lige nu, er gråtonet; hold musen over det for at læse hvorfor (for eksempel »intet er kopieret endnu«).

Hver indsæt-, klip-, duplikér- og slet-handling er ét trin: ét {{key:Mod+Z}} fortryder det hele.

## Vælg flere dele

- Klik på en del for at vælge den. Hold {{key:Shift}} (eller {{key:Ctrl}}, eller {{key:Mod}}) nede og klik på flere dele for at tilføje dem; klik på en valgt del på samme måde for at fjerne den.
- {{key:Mod+A}} eller {{ui:Vælg alle}} vælger alle stålprofiler, forbindelser og fundamenter.
- {{key:Esc}} eller {{ui:Fravælg alle}} fjerner valget.

Når flere ting er valgt, har panelet {{ui:Egenskaber}} overskriften »4 valgt« (eller hvor mange det er) og lister stålprofilerne efter type, forbindelserne, fundamenterne og den samlede stålvægt, med knapperne {{ui:Kopiér}}, {{ui:Duplikér}} og {{ui:Slet}}.

## Kopiér

1. Vælg de stålprofiler og fundamenter, du vil have.
2. Vælg {{ui:Kopiér}} eller tryk {{key:Mod+C}}.

Med følger:

- Hver stålprofil hel: profil, materiale, ender, position, rotation, navn, huller og udskæringer. En brugerdefineret profil den bruger, kopieres også med.
- Hvert fundament helt: størrelse, beton, bundarmering og studsarmering.
- Endeplader og fodplader, men kun når alle stålprofiler, en forbindelse forbinder, kopieres: en bjælkes endeplade kræver bjælken og dens søjle. Statuslinjen siger, hvor mange forbindelser der blev udeladt. For med vilje at udelade forbindelser fjerner du markeringen i **Kopiér endeplader og fodplader med deres stålprofiler** i [DetailCraft-indstillinger](topic:settings).

En forbindelse alene kan ikke kopieres; vælg i stedet dens stålprofiler. For at give andre samlinger den samme forbindelse, brug {{ui:Tilsvarende}} (se [Endeplader](topic:end-plates#copy-it-to-every-similar-joint)).

Kopien bliver i denne browser, indtil du kopierer noget andet. En anden DetailCraft-fane eller et andet vindue i samme browser kan indsætte den, så du kan kopiere en ramme fra én model og indsætte den i en anden.

## Indsæt på et gitterkryds

1. Vælg {{ui:Sæt ind}} eller tryk {{key:Mod+V}}.
2. Flyt musepilen hen over visningen. En stiplet kontur af kopien følger det gitterkryds, der er tættest på musepilen.
3. Klik på et kryds. Kopiens basispunkt (dens nederste hjørne: den mindste x, y og z af alt, der er kopieret) lander der.

De indsatte dele er valgt bagefter, så du kan indsætte igen et andet sted eller ændre dem. {{key:Esc}} annullerer indsættelsen; kopien bliver på udklipsholderen. {{ui:Plan}} og {{ui:Facade}} gør det lettere at ramme det rigtige kryds.

:::tip
For at gentage et fag: vælg fagets stålprofiler (eller alt med {{key:Mod+A}}), kopiér, indsæt, og klik på krydset ét fag længere fremme fra, hvor kopiens nederste hjørne var.
:::

## Indsæt fra tastaturet

Mens du indsætter, viser panelet {{ui:Egenskaber}}, hvad der er på udklipsholderen, og to formularer:

- {{ui:Sæt ind med forskydning (mm, fra originalen)}}: skriv x, y og z og vælg {{ui:Sæt ind med denne forskydning}}. Den starter med forskydningen fra [DetailCraft-indstillinger](topic:settings).
- {{ui:Sæt ind på et gitterkryds}}: vælg et gitter med bogstaver, et gitter med tal og et niveau, og vælg {{ui:Sæt ind her}}. Basispunktet placeres der.

## Sæt ind på samme sted

{{ui:Sæt ind på samme sted}} ({{key:Mod+Shift+V}}) placerer kopien præcis ved de koordinater, den blev kopieret fra. Brug den efter {{ui:Klip}}, eller for at hente dele fra en anden model på samme sted. Hvis originalerne stadig er der, ligger kopien oven på dem, og statuslinjen advarer dig: flyt kopierne ved deres {{ui:Start}} og {{ui:Slut}} i {{ui:Egenskaber}}, eller fortryd.

## Duplikér

{{ui:Duplikér}} ({{key:Mod+D}}) kopierer markeringen og indsætter den med det samme, forskudt med forskydningen i [DetailCraft-indstillinger](topic:settings) (6000 mm langs x til at begynde med). Det ændrer ikke det, der er på udklipsholderen. Kopierne er valgt bagefter, så når du trykker {{key:Mod+D}} igen, laves den næste ud fra dem.

## Klip og slet

- {{ui:Klip}} ({{key:Mod+X}}) kopierer markeringen og sletter den derefter. Indsæt den, hvor den hører hjemme.
- {{ui:Slet}} ({{key:Delete}} eller {{key:Backspace}}) sletter markeringen. Sletning af en stålprofil sletter også dens forbindelser.

## Mærkninger efter en indsættelse

Positionsnumre og samlingsmærker gemmes aldrig; DetailCraft nummererer dem igen ud fra modellen efter hver ændring ([Sådan gives mærkerne](topic:mark-rules)). Derfor:

- En kopi, der er det samme stykke som originalen (samme profil, kvalitet, skærelængde, huller og udskæringer), deler originalens mærke, og antallet i {{ui:Positionsnumre}} og stykkelisten går op.
- En kopi, der bliver anderledes, får sit eget mærke. En bjælke indsat uden sine endeplader bliver for eksempel ikke skåret tilbage, så den er et andet stykke. Mærkerne nummereres igen for hele modellen, så andre delers numre kan også ændre sig.

Hver indsat stålprofil, hvert hul, hver udskæring, forbindelse og fundament får et nyt id, så intet i modellen deles mellem en kopi og dens original.

## Hvis udklipsholderen afvises

Det, der er på udklipsholderen, kontrolleres lige så grundigt som en modelfil, du åbner: alt, der ikke er en gyldig DetailCraft-del, fjernes, og statuslinjen siger hvad. En udklipsholder fyldt af en nyere DetailCraft eller af noget andet afvises med en besked, og intet indsættes. Hvis et privat vindue ikke kan gemme kopien i browserens lager, virker kopien stadig i den fane.
