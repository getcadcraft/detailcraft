---
title: Monteringsplan og film
summary: Indtast en kran og dens lastdiagram, se hvert løft kontrolleret mod diagrammet i faserækkefølge, og gem en monteringsfilm, der kan afspilles offline på enhver telefon.
keywords: montage, kran, løft, lastdiagram, radius, kapacitet, rigning, rækkefølge, film, animation, telefon, offline, løfteplan
from: fa7b0133
---

Fanen {{ui:Montage}} gør modellen til en monteringsordre og kontrollerer hvert løft mod en kran, du beskriver. Den planlægger ud fra tal, du skriver. Det er ikke en løfteplan: riggeren og kranføreren laver den.

## Beskriv kranen

Vælg {{ui:Tilføj en kran}}, og udfyld:

- **Kranens centrum X og Y:** hvor kranen står, i millimeter.
- **Højeste krog:** det højeste, krogen kan løftes, i millimeter. 0 betyder, at ingen grænse kontrolleres.
- **Krogblok og rigning, der ikke er i diagrammet:** kilogram, der trækkes fra diagrammet, før en last lægges til, når dit diagram ikke allerede gør det.
- **Lastdiagram:** én række pr. linje, radius i meter og derefter kapaciteten i kilogram. Kopier rækkerne fra kranens eget diagram.

Diagrammet læses, som et lastdiagram læses: kapaciteten angivet for en radius gælder ud til den radius. En last ved en radius mellem to rækker får kapaciteten fra den **fjernere** række, aldrig en værdi imellem dem. Inden for den første række gælder den første rækkes kapacitet. Ud over den sidste række kan kranen slet ikke løfte. Radius, der tæller for et løft, er den største af løfteradius og sætteradius.

En anden kran tilføjes på samme måde. Hvert løft går til den første kran, der kan tage det inden for din margin.

## Hvad planen gør

- Ét løft pr. samling: en bjælke med sine endeplader, en søjle med sin fodplade, en trappe.
- Rækkefølgen følger først faserne, derefter lag for lag: søjler, de bjælker de bærer, afstivninger, plader, trapper. En del løftes aldrig før det, der bærer den.
- Hvert løft viser sin vægt (modellens brutto vægt, plus {{ui:Rigning lagt til hver vægt}}), sin radius, den andel af diagrammet, det bruger, og minuttet, det starter.
- {{ui:Hvor stor del af lastdiagrammet et løft må bruge}} er din sikkerhedsmargin. Et løft over den markeres **Over din margin**; over diagrammet **Over diagrammet**; ud over diagrammets sidste radius **Forbi diagrammet**; og en del højere end krogen **Krogen for lav**.

Huller og udskæringer trækkes ikke fra vægtene, og bolte er dækket af riggingprocenten.

## Problemer

Hvert løft, der er over, forbi, for højt eller sat før det, der bærer det, vises i panelet {{ui:Problemer}}. En bjælke uden en forbindelse til at bære den listes som værende behov for midlertidig understøtning.

## Gem filmen

{{ui:Gem film}} skriver én HTML-fil. Åbn den i enhver browser, også på en telefon, uden netværk og uden konto: afspil og pause, træk i bjælken til et vilkårligt minut, drej modellen med en finger, knib for at zoome. Teksten under filmen navngiver hvert løft, dets vægt, radius og andel af diagrammet. Modellen tegnes som simple kasser: den viser rækkefølgen og løftene, ikke de rigtige profiler.

Den samme tabel gemmes som CSV med knappen {{ui:CSV}}. Kranen og diagrammet gemmes i modelfilen, og hver ændring er ét trin i fortryd.
