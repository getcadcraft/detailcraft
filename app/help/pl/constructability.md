---
title: Sprawdzenia wykonalności
summary: Problemy wykrywane gołym okiem przez detalistę, na przykład śruba, do której klucz nie dosięgnie, śruby zbyt blisko dla nasadki, spoiny pachwinowe poza limitami rozmiaru, spoiny, do których nie dosięgnie palnik, oraz rury zatrzymujące wodę.
keywords: wykonalność, klucz, nasadka, dostęp do śrub, dokręcanie, rozmiar spoiny, spoina pachwinowa, minimalna spoina, maksymalna spoina, woda, otwór wentylacyjny, otwór odpływowy, cynkowanie, profil zamknięty, problemy
from: 72315151
---

DetailCraft szuka czterech rodzajów kłopotów, których żadne sprawdzenie wytrzymałości nie znajdzie, i wypisuje je w panelu {{ui:Problemy}}. To ostrzeżenia i uwagi do obejrzenia, a nie błędy: model nadal się buduje.

## Śruba, do której nie dosięgnie klucz

Dla każdej śruby DetailCraft kładzie nasadkę na łeb i na nakrętkę. Nasadka to walec tak szeroki jak nakrętka po narożach, plus ścianka 4 mm, długi na 60 mm. Jeśli środnik belki, półka, blacha albo stężenie stoi w tym walcu, problem nazywa połączenie, liczbę śrub, część, która przeszkadza, i to, jak daleko jest od śruby.

Nasadka jest typową nasadką udarową. Klucz płaski potrzebuje mniej miejsca, a większe narzędzie więcej. Poproś połączonego asystenta, aby uruchomił `constructability_check` z innym `socketLength`, i zobacz, jak zmienia się wynik.

## Śruby zbyt blisko dla nasadki

Nasadka na jednej śrubie nie może dotykać łba następnej. Śruby połączenia, które stoją bliżej niż szerokość nasadki plus łeb sąsiedniej, są wypisane z rozstawem, jaki znaleziono, i rozstawem, jaki jest potrzebny.

## Rozmiary spoin pachwinowych

AISC 360-16 tabela J2.4 określa najmniejszą spoinę pachwinową według grubości cieńszej części (3 mm do grubości 6,35 mm, 5 mm do 12,7, 6 mm do 19,05, 8 mm powyżej), a J2.2b największą wzdłuż krawędzi materiału: nie większą niż materiał, gdy jest cieńszy niż 6,35 mm, w przeciwnym razie o 1,6 mm mniejszą. Połączenia o tym samym rozmiarze na tej samej grubości są wypisane jako jeden problem.

Użyta grubość to najcieńsza część nazwana przez spoinę, więc spoina 8 mm dookoła belki ze środnikiem 6,35 mm jest wypisana.

## Woda i odpowietrzenie

- **Otwarty górny koniec** profilu zamkniętego, który stoi pionowo albo jest nachylony o więcej niż 10°, wpuszcza deszcz.
- Profil zamknięty **na obu końcach** potrzebuje otworu wentylacyjnego i odpływowego; cynkowanie ogniowe i ciśnienie ogrzanego powietrza wymagają go.

## Czy spawacz dosięgnie

Spoina pachwinowa jest wykonywana z palnikiem w połowie między dwiema powierzchniami, które łączy. Dla każdej spoiny pachwinowej dookoła (blacha czołowa, blacha podstawy, blacha ukosowa) sprawdzenie bierze obrys przekroju elementu przy blasze i co 20 mm prowadzi ścieżkę palnika pod kątem 45° od miejsca, w którym jego dysza (promień 10 mm na początek) najpierw wychodzi poza obie powierzchnie, przez kolejne 30 mm. Jeśli ścieżka trafia w półkę własnej belki albo w inną część, ta część spoiny jest wypisana z tą częścią i odległością. Te liczby są typowe, a nie wynikają z normy: zapytaj swojego wykonawcę o proces i dyszę. Spoiny wzdłuż dwóch krawędzi (blacha ścinana) nie są lokalizowane i nie są sprawdzane.
