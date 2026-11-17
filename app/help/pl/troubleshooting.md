---
title: Rozwiązywanie problemów
summary: Co znaczą komunikaty DetailCraft i co zrobić – od brakującego widoku 3D po połączenia, których nie da się wykonać.
keywords: problem, błąd, nie działa, pomoc, napraw, komunikat, odrzucone, webgl, pusty, ostrzeżenie, nie można, usterka
from: f8c3b2b1
---

Większość odrzuceń jest wyjaśniona na pasku stanu u dołu ekranu lub na karcie {{ui:Problemy}}. Najpierw przeczytaj je. Poniższe komunikaty są cytowane tak, jak pokazuje je DetailCraft.

## Brak widoku 3D

**„Ta przeglądarka nie mogła uruchomić grafiki 3D (WebGL). Model, raporty i eksporty nadal działają.”**

Przeglądarka nie mogła uruchomić WebGL, czyli grafiki 3D, którą rysuje DetailCraft.

1. Zaktualizuj przeglądarkę do najnowszej wersji.
2. Włącz akcelerację sprzętową i uruchom przeglądarkę ponownie (patrz niżej).
3. Zaktualizuj sterownik karty graficznej albo wypróbuj inną przeglądarkę. Pulpity zdalne i maszyny wirtualne często nie mają WebGL.
4. W międzyczasie możesz nadal pracować: umieszczać elementy formularzem {{ui:Dodaj według siatki}}, czytać raporty i eksportować. Tylko klikanie w widoku wymaga WebGL.

:::chromium
Aby włączyć akcelerację sprzętową, otwórz **Ustawienia, System** i włącz **Użyj akceleracji sprzętowej, jeśli jest dostępna**, a następnie uruchom przeglądarkę ponownie.
:::

:::firefox
Aby włączyć akcelerację sprzętową, otwórz **Ustawienia, Ogólne, Wydajność**, odznacz **Użyj zalecanych ustawień wydajności** i zaznacz **Użyj akceleracji sprzętowej, jeśli jest dostępna**. Uruchom ponownie Firefox.
:::

:::safari
Safari ma WebGL włączone domyślnie. Jeśli widok nadal się nie uruchamia, zaktualizuj macOS i sprawdź, czy żadne rozszerzenie go nie blokuje.
:::

Więcej w [Przeglądarki i komputery](common:browsers).

## Kliknięcie w widoku nic nie robi

- **Brak przecięcia w pobliżu kliknięcia.** Narzędzia umieszczania przyciągają tylko do przecięć siatki. Kliknięcie daleko od każdej kropki nic nie robi. Przysuń kursor, aż kropka się podświetli.
- **Narzędziem jest {{ui:Zaznacz}}, a kliknąłeś puste miejsce.** To czyści zaznaczenie.
- **Przeciągnąłeś.** Naciśnięcie i zwolnienie oddalone o kilka pikseli to przeciągnięcie: obraca lub przesuwa widok.
- **Część jest odcięta przekrojem.** W {{ui:Rzut}} i {{ui:Elewacja}} stal poza przekrojem jest ukryta i nie można w nią kliknąć. Przełącz na {{ui:3D}}.
- **Przecięcie jest na złym poziomie.** W {{ui:3D}} przecięcia z kilku poziomów mogą nakładać się na ekranie; kliknięcie wybiera najbliższe. Użyj {{ui:Rzut}} lub {{ui:Elewacja}}.

## Komunikaty przy umieszczaniu

| Komunikat | Co zrobić |
|---|---|
| Nie ma poziomu powyżej Poziomu 2, do którego słup mógłby sięgnąć. Najpierw dodaj poziom. | Dodaj poziom w {{ui:Poziomy}} albo kliknij niższy poziom |
| Wybierz inne przecięcie dla drugiego końca. | Kliknąłeś ten sam punkt dwa razy |
| Oba końce są w tym samym punkcie. | W {{ui:Dodaj według siatki}} wybory „Od” i „Do” są takie same |
| Dodaj linie siatki po lewej, aby umieścić elementy. | Model nie ma linii siatki w jednym kierunku |
| Nieznany profil „…” | Profilu nie ma w katalogu ani w niestandardowych profilach modelu. Wybierz jeden z listy |
| Wpisz liczbę. | Pole liczbowe jest puste albo zawiera tekst |

## Połączeń nie da się wykonać

### „Ta belka nie kończy się na osi słupa.”

Płyty czołowe wymagają, aby koniec belki leżał dokładnie na pionowej osi słupa, między jego dołem a górą (z dokładnością do 1 mm). Sprawdź {{ui:Końce (x, y, z mm)}} belki i położenie słupa.

### „Ta belka łączy się ze środnikiem słupa lub pod kątem”

Albo w {{ui:Problemy}}: „Belki łączące się ze środnikiem słupa jeszcze nie są wykonywane: obróć słup o 90° albo użyj innego połączenia.”

Belka łączy się ze środnikiem słupa. Zaznacz słup, ustaw {{ui:Obrót (°)}} na 90 i spróbuj ponownie. Połączenia skośne jeszcze nie są wykonywane.

### „Płyty czołowe są wykonywane tylko dla poziomych belek (ta belka jest pochylona).”

Oba końce belki muszą być na tej samej wysokości.

### „Płyty czołowe wymagają, aby belka stała pionowo (obrót 0).”

Ustaw {{ui:Obrót (°)}} belki z powrotem na 0.

### „Płyty czołowe wymagają belki dwuteowej.” / „Płyty czołowe wymagają słupa dwuteowego.”

Płyty czołowe mają tylko kształtowniki dwuteowe (W, IPE, HEA, HEB lub własny dwuteownik).

### „Koniec belki nie leży już na osi słupa.”

Przesunięto belkę lub słup po dodaniu połączenia. Przesuń je z powrotem albo usuń połączenie.

### „Połączenia przycinają ten element do zera.”

Połączenia na obu końcach przycinają element bardziej, niż wynosi jego długość, na przykład bardzo krótka belka między dwoma wysokimi słupami. Sprawdź końce elementu i grubość płyty.

### „Nie ma innych podobnych węzłów bez połączenia …”

{{ui:Podobne}} kopiuje tylko do węzłów o tym samym profilu belki, tym samym profilu słupa i tym samym rodzaju połączenia (belka do pasa), które nie mają jeszcze połączenia.

### „Oba końce mają już połączenia.” / „Ten słup ma już płytę podstawy.”

Zaznacz istniejące połączenie, aby je zmienić, albo najpierw je usuń.

## Ostrzeżenia na karcie Problemy

Ostrzeżenia nie blokują wykonania połączenia ani fundamentu; proszą o sprawdzenie. Ostrzeżenia dotyczące krawędzi i rozstawu używają minimów z tabeli 3.3 EN 1993-1-8 (krawędź 1,2 × otwór, rozstaw 2,2 × otwór, rozstaw poprzeczny 2,4 × otwór). Jeśli Twój projekt stosuje inne zasady, ostrzeżenie może nie mieć zastosowania; DetailCraft nie projektuje połączeń.

„otwór poza końcem elementu” oznacza, że współrzędna x otworu jest mniejsza niż 0 albo większa niż długość cięcia. Pamiętaj, że x liczy się od początku cięcia, po tym jak połączenia przycięły element.

## Zmiany fundamentu są odrzucane

| Komunikat | Co zrobić |
|---|---|
| Otulina nie zostawia miejsca na pręty w tym fundamencie. | Zwiększ fundament albo zmniejsz otulinę |
| Fundament jest za płytki na dwie warstwy prętów wewnątrz otuliny. | Zwiększ głębokość albo zmniejsz otulinę |
| Pręty oczekiwania nie mieszczą się w fundamencie przy otulinie 75 mm. | Mniej prętów oczekiwania, mniejszy rozstaw albo większy fundament |
| Rozstaw prętów musi wynosić 50–1000 mm. | Wpisz rozstaw z tego zakresu |
| Długość musi wynosić 300–50000 mm. | Wymiary fundamentu mają limity: długość i szerokość od 300 do 50000, głębokość od 150 do 10000 |

## Siatki i poziomy są odrzucane

| Komunikat | Co zrobić |
|---|---|
| Siatki numerowane: podaj jeden rozstaw między każdą parą linii (4). | Policz przerwy: pięć linii wymaga czterech rozstawów |
| Siatki literowe: rozstawy muszą być dodatnimi milimetrami. | Bez zer, wartości ujemnych ani tekstu |
| Siatki numerowane: etykiety siatki muszą być różne. | Dwie linie mają tę samą etykietę |
| Najwyżej 60 linii siatki w każdym kierunku. | Podziel model |
| Zachowaj co najmniej jeden poziom. | Usunięto wszystkie wiersze poziomów |
| Każdy poziom musi mieć nazwę. / Dwa poziomy noszą nazwę „…”. | Nadaj każdemu poziomowi inną nazwę |

## Otwieranie pliku się nie udaje

| Komunikat | Przyczyna |
|---|---|
| DetailCraft otwiera własne modele (.detailcraft.json). Import IFC jeszcze nie zbudowano. | Plik nie jest plikiem `.json` |
| To nie jest model DetailCraft (nie JSON). | Plik jest uszkodzony albo to inny plik JSON |
| To nie jest model DetailCraft. | Plik JSON z innego programu |
| Ten model został zapisany przez nowszy DetailCraft (format 2). | Otwórz go w nowszym DetailCraft, w którym został zapisany |
| Ten plik jest za duży na model DetailCraft. | Powyżej 50 MB |

Gdy plik otwiera się z ostrzeżeniami, na przykład „2 elementy były nieprawidłowe i zostały pominięte.”, reszta modelu jest w porządku. Nie zapisuj nad oryginałem, dopóki nie sprawdzisz, co zostało pominięte.

## Eksporty

| Komunikat | Przyczyna |
|---|---|
| Nic jeszcze nie ma do wyeksportowania. | {{ui:IFC}} przy pustym modelu |
| Brak części dwuteowych ani blach, dla których można zapisać pliki NC. | W modelu są tylko kanały, kątowniki lub rury |
| Nie zapisano (na razie tylko dwuteowniki i blachy): … | Te znaki nie oznaczają dwuteowników ani blach; reszta została zapisana |
| Brak fundamentów, więc nie ma prętów do zestawienia. | {{ui:Gięcie}} bez fundamentów |
| … znak(i) spoza czcionki PDF wydrukowano jako „?”. | Nazwa modelu lub gatunek zawiera znaki, których nie ma w czcionce PDF |

{{ui:Rysunek warsztatowy}} wyszarzone: model nie ma jeszcze żadnych części.

## Pliki do pobrania się nie pojawiają

Każdy zapis i eksport to pobranie przez przeglądarkę. Sprawdź listę pobranych plików w przeglądarce. Jeśli przeglądarka pyta przed pobraniem kilku plików albo blokuje pobieranie z tej strony, zezwól na nie. W Safari sprawdź przycisk pobierania na pasku narzędzi.

## Klawisze nic nie robią

- Kursor jest w polu tekstowym lub liczbowym: klawisze narzędzi i {{key:Delete}} są tam ignorowane, abyś mógł pisać. Naciśnij {{key:Tab}} albo kliknij widok.
- Otwarte jest okno dialogowe: najpierw je zamknij.
- Przeglądarka ma klawiaturę (na przykład pasek adresu): kliknij w DetailCraft.
- {{key:Ctrl+Shift+F}} używa klawisza Control nawet na Macu.

## Problemy z trybem offline

Przycisk {{ui:Zapisz do pracy offline}} na pasku aplikacji pokazuje, w jakim stanie jest kopia offline. Jak działa zapis: [Praca offline](common:offline).

| Przycisk pokazuje | Co to oznacza | Co zrobić |
|---|---|---|
| {{ui:Zapisz do pracy offline}} | W tej przeglądarce nie ma jeszcze kopii offline | Wybierz go, będąc online |
| Zapisywanie 5 z 20 | Zapis trwa | Poczekaj na {{ui:Gotowe offline}}; nie zamykaj karty |
| {{ui:Gotowe offline}} | DetailCraft, jego widok 3D, każdy eksport i ta pomoc działają bez połączenia | Nic. Kliknij, aby {{ui:Zapisz ponownie (pobierz najnowszą wersję)}} lub {{ui:Usuń kopię offline}} |
| {{ui:Nie udało się zapisać}} | Niektórych plików nie pobrano | Sprawdź połączenie i kliknij, aby spróbować ponownie |
| {{ui:Tryb offline niedostępny}} | To okno nie może przechowywać kopii offline: blokują to okna prywatne i niektóre zarządzane komputery | Użyj zwykłego okna albo pracuj online |

Jeśli jesteś offline, a przycisk nie pokazuje {{ui:Gotowe offline}}, nie przeładowuj ani nie zamykaj karty: to, co się załadowało, nadal działa. Zapisz model klawiszami {{key:Mod+S}} i poczekaj, aż znów będziesz online.

## Niezapisane zmiany

Jeśli przeglądarka pyta, czy opuścić stronę, DetailCraft ma niezapisane zmiany. Wybierz pozostanie na stronie, a następnie naciśnij {{key:Mod+S}}. DetailCraft nie może odzyskać modelu po zamknięciu karty.

## Nadal masz problem

Zapisz, co zrobiłeś i dokładną treść komunikatu, a następnie napisz do nas przez [stronę pomocy technicznej](https://getcadcraft.com/support).
