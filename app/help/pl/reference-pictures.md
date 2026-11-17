---
title: Wklej skopiowany obszar jako obraz referencyjny
summary: Skopiuj fragment arkusza PDF w MarkupCraft i wklej go do DetailCraft w rzeczywistym rozmiarze, leżący płasko na poziomie pod stalą, aby na jego podstawie modelować.
keywords: obraz, obraz referencyjny, podkład, tło, kopiuj obszar, markupcraft, pdf, obrysowanie, rzeczywisty rozmiar, skala, krycie, nakładka
from: 0c48445f
---

Narzędzie Kopiuj obszar w MarkupCraft kopiuje fragment arkusza jako obraz, który zna swój rozmiar. Wklej go do DetailCraft, a leży płasko na poziomie, w rzeczywistym rozmiarze, pod siatką i stalą, dzięki czemu możesz układać elementy nad rzutem z rysunków.

## Wklejanie

1. W MarkupCraft skopiuj obszar za pomocą {{ui:Więcej}} › {{ui:Kopiuj obszar strony…}}, a następnie {{ui:Kopiuj}} (albo {{ui:Kopiuj jako nakładkę}}, co sprawia, że papier jest przezroczysty).
2. W DetailCraft (w tej samej przeglądarce) naciśnij {{key:Mod+V}} albo wybierz {{ui:Wklej}}.

Obraz trafia na środek siatki, na poziomie pokazanym w {{ui:Rzut}} (w 3D lub w {{ui:Elewacja}} — na najniższym poziomie), i zostaje zaznaczony. Pasek stanu podaje jego rozmiar.

- **Rzeczywisty rozmiar:** jeśli arkusz miał skalę rysunku, jeden piksel jest rysowany jako długość, jaką pokazuje na rysunku.
- **Rozmiar na papierze:** jeśli arkusz nie miał skali, obraz ma taki rozmiar, jaki obszar miał na papierze, a pasek stanu to podaje. Wpisz nowe **mm na piksel** w {{ui:Właściwości}}, aby go przeskalować.

Obszar skopiowany jako nakładka startuje z tym kryciem, z jakim został skopiowany.

{{key:Mod+V}} wkleja to, co skopiowano ostatnio: obszar z MarkupCraft albo elementy i ławy skopiowane w DetailCraft. Jeśli po obszarze do schowka trafił inny obraz (z innego programu), nic nie zostanie wklejone; skopiuj obszar ponownie.

## Przesuwanie, zmiana i usuwanie

- Kliknij obraz, aby go zaznaczyć (najpierw wybierany jest obiekt znajdujący się przed nim). Niebieski obrys pokazuje, że obraz jest zaznaczony.
- Przeciągnij go, aby przesunąć po poziomie. Jego środek i rogi przyciągają się do przecięć siatki.
- W {{ui:Właściwości}} wpisz, gdzie ma być jego środek (x, y) i na jakim poziomie leży (z), a także jego **mm na piksel** i **krycie**.
- {{key:Delete}} albo {{ui:Usuń}} go usuwa.

Każde wklejenie, przesunięcie, zmiana i usunięcie to jeden krok: {{key:Mod+Z}} cofa go.

Obraz jest zapisany w pliku modelu, więc otwiera się razem z modelem. Jest tylko referencją: nie występuje w rysunkach, eksportach, zestawieniu materiałów ani w kopii.
