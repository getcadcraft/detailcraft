---
title: Panele szkieletowe z drewna i lekkiej stali
summary: Układaj panele ścienne, stropowe i dachowe z drewna lub lekkiej stali formowanej na zimno, z każdym elementem, listą cięć, rysunkiem warsztatowym i materiałem do zakupu.
keywords: szkielet, drewno, tarcica, drewno konstrukcyjne, lekka stal, formowana na zimno, słupek, legar, krokiew, nadproże, słupek skrajny, słupek podporowy, słupek krótki, lista cięć, rysunek warsztatowy, panel
from: 3e38ffb9
---

Karta {{ui:Szkielety}} układa panele, które opisujesz, i podaje to, czego potrzebują ekipa cieśli i tartak. Panele są zapisywane w pliku modelu.

:::warning
Wymiary, rozstaw i nadproża są Twoje. DetailCraft nie sprawdza, czy słupek przy tym rozstawie przenosi tę ścianę ani czy nadproże przekrywa ten otwór: to zadanie tablic Twojej normy i inżyniera.
:::

## Dodawanie panelu

Wybierz {{ui:Dodaj ścianę}}, {{ui:Dodaj strop}} lub {{ui:Dodaj dach}}, a następnie wpisz wymiary w milimetrach, materiał (drewno lub lekka stal) i rozmiar elementów. Wymiary drewna to nazwy nominalne z wymiarami po struganiu (2×4 to 38 × 89 mm). Słupki stalowe nazywa się według wysokości i grubości, na przykład `C92-1.2`.

## Ściany

Ściana ma dolną schwellę, jedną lub więcej górnych schwelle (przy stali jeden pas), słupki skrajne, słupki w rozstawie, który podajesz, a dla każdego otworu: dwa słupki skrajne, dwa słupki podporowe, nadproże o rozmiarze i liczbie warstw, które wybierzesz, oraz słupki krótkie nad nadprożem (i pod parapetem okna). Podaj dla każdego otworu jego odległość od lewego końca, szerokość oraz górę i dół otworu w świetle mierzone od podłogi; drzwi mają dół równy 0.

## Stropy i dachy

Strop ma legary rozciągnięte na szerokość, wzdłuż rozpiętości, rygle obwodowe na obu końcach oraz, jeśli zaznaczysz, usztywnienia w połowie rozpiętości. Panel dachowy to szczyt dwuspadowy: para krokwi w rozstawie, który podajesz (ich długość obejmuje okap wzdłuż połaci), oraz płatew kalenicowa.

## Co otrzymujesz

Każdy panel pokazuje swoje elementy na rysunku w skali, z każdym elementem oznaczonym, listą cięć według oznaczeń i sumą. Tabela {{ui:Materiał do zakupu}} układa wszystkie cięcia paneli w długości handlowe, najkrótsze, które mieszczą cięcia każdego pręta. {{ui:Zapisz rysunek warsztatowy (SVG)}} zapisuje rysunek; przycisk {{ui:CSV}} zapisuje wszystkie listy cięć i listę materiału.

## Umieszczanie panelu w modelu

Pod każdym panelem podaj, gdzie ma się znaleźć (x, y, z w milimetrach oraz kąt), i naciśnij {{ui:Umieść jako elementy}}: każdy element staje się elementem modelu, z przekrojem po struganiu odpowiadającym jego rozmiarowi i ciężarem materiału (ok. 500 kg/m³ dla drewna, stal dla słupków). Ściana biegnie wzdłuż kąta od dolnego lewego końca, a jej dół znajduje się na z; spód legarów stropu leży na z; elewacja szczytowa dachu biegnie wzdłuż kąta, a z odpowiada górze schwelli ściennych. Każda warstwa nadproża to element obok siebie. Ponowne naciśnięcie zastępuje elementy umieszczone wcześniej, a {{ui:Usuń umieszczone elementy}} je usuwa; każda operacja to jeden krok cofnięcia. Analiza pomija te elementy: nie są elementami ramy stalowej.

## Arkusze PDF

{{ui:Arkusze PDF}} zapisuje jedną stronę A3 dla każdego panelu: panel w skali z każdym elementem oznaczonym, wymiary całkowite, listę cięć i pasek tytułowy.

Problemy w panelu {{ui:Problemy}}: otwór zbyt blisko końca ściany lub innego otworu, nadproże, które nie mieści się pod górnymi schwellami, element dłuższy niż najdłuższy materiał.

Panel {{ui:Problemy}} wymienia także **Interfejsy (LOD 350)** dla paneli ściennych i ścian betonowych: otwór wychodzący poza koniec lub górę swojej ściany, dwa nachodzące na siebie otwory oraz otwór w ścianie betonowej szerszy niż 1000 mm bez prętu obramowującego. To wskazówki, te same reguły, które uruchamia audyt BimCraft; szerokość to startowa wartość CadCraft, a nie norma.
