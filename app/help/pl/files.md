---
title: Otwieranie, zapisywanie i eksport plików
summary: Plik modelu DetailCraft, każdy eksport, który zapisuje, dokąd trafiają pliki i co różni się zależnie od przeglądarki i połączenia.
keywords: otwórz, zapisz, eksport, pobieranie, plik, json, ifc, nc1, dstv, csv, pdf, zip, formaty, import
from: bd715ea3
---

DetailCraft ma jeden własny plik, model, i pięć eksportów. Każdy zapis i każdy eksport to pobranie. Nic nie jest wysyłane i nic nie jest przechowywane na serwerze.

## Plik modelu

Model DetailCraft jest zapisywany jako `<nazwa>.detailcraft.json`, gdzie `<nazwa>` to nazwa modelu w panelu {{ui:Model}}. Zawiera siatki, poziomy, elementy (z otworami i wycięciami), połączenia i ich ustawienia, ławy oraz Twoje własne profile.

Części, znaczniki, śruby, spoiny i pręty nie są zapisywane: DetailCraft wylicza je od nowa z modelu przy każdym otwarciu. Dlatego plik modelu jest mały.

### Zapis

1. Wpisz nazwę w polu {{ui:Nazwa}} na górze panelu {{ui:Model}}.
2. Wybierz {{ui:Zapisz}} w grupie {{ui:Plik}} albo naciśnij {{key:Mod+S}}.
3. Przeglądarka pobierze `<nazwa>.detailcraft.json`. Pasek stanu podaje „Saved … (downloaded)”, a kropka na początku tytułu karty przeglądarki znika.

Każdy zapis to nowe pobranie. Przeglądarka nie nadpisuje otwartego pliku; zależnie od ustawień dodaje numer do nazwy, na przykład `Frame (1).detailcraft.json`, albo pyta, gdzie zapisać. Własne wersje zachowuj, zmieniając nazwy pobranych plików.

:::chromium
Chrome i Edge zapisują w folderze Pobrane, chyba że w ustawieniach pobierania przeglądarki włączono **Pytaj, gdzie zapisać każdy plik przed pobraniem**. Włącz to, jeśli chcesz za każdym razem wybierać folder i nazwę pliku.
:::

:::firefox
Firefox zapisuje w folderze Pobrane albo pyta za każdym razem, jeśli w jego ustawieniach włączono **Zawsze pytaj, gdzie zapisać pliki**.
:::

:::safari
Safari zapisuje w folderze Pobrane. Aby zmienić folder, otwórz **Safari, Ustawienia, Ogólne, Miejsce pobierania plików**.
:::

### Otwieranie

1. Wybierz {{ui:Otwórz}} w grupie {{ui:Plik}} albo naciśnij {{key:Mod+O}}.
2. Wskaż plik `.detailcraft.json`.

Albo przeciągnij plik z {{pick:mac=Findera|windows=Eksploratora plików|linux=menedżera plików}} i upuść go na widoku. Podczas przeciągania widok podaje „Drop a DetailCraft model to open it”.

Jeśli otwarty model ma niezapisane zmiany, DetailCraft najpierw zapyta: {{ui:Anuluj}}, {{ui:Odrzuć zmiany}} lub {{ui:Najpierw zapisz}}.

DetailCraft sprawdza każde pole pliku, zanim go użyje. Wszystko, czego nie może użyć, jest pomijane, a pasek stanu mówi co, na przykład „2 members were not valid and left out.” Model zapisany przez nowszy DetailCraft jest odrzucany z komunikatem zamiast otwierany w połowie poprawnie.

### Co otwiera

Własne pliki modeli (`.json`, do 50 MB) i pliki IFC (`.ifc`, IFC2X3 lub IFC4, do 200 MB). Plik IFC, otwarty lub wprowadzony przez {{ui:Importuj IFC}}, staje się nowym modelem z jego belek, słupów, elementów, blach, siatek i poziomów, z wyciętymi w nich otworami i wycięciami, a jego śruby są luźnymi śrubami; raport wymienia, co pominięto. Zobacz [Eksport IFC](topic:ifc-export#import). Nie otwiera jeszcze DWG, DXF ani modelu z żadnego innego programu do detalowania; próba pokazuje „DetailCraft opens its own models (.detailcraft.json) and IFC files (.ifc).”

## Utracona praca, ostatnie pliki, aplikacja na komputer

- Gdy model ma niezapisane zmiany, DetailCraft przechowuje kopię w tej przeglądarce. Jeśli karta albo przeglądarka przestanie działać przed zapisem, przy następnym otwarciu DetailCraft zapyta **Recover your work?**: odzyskaj kopię albo ją porzuć. Zobacz [Odzyskaj swoją pracę](common:recover).
- Modele otwierane ostatnio są wymienione na ekranie startowym, gdy przeglądarka pozwala DetailCraft otworzyć je ponownie; naciśnij jeden, aby otworzyć go ponownie.
- W aplikacji na komputer {{ui:Zapisz}} zapisuje model z powrotem do otwartego pliku (w przeglądarce pobiera kopię), a dwukrotne kliknięcie modelu DetailCraft lub pliku IFC otwiera go w DetailCraft.

## Eksporty

Wszystkie eksporty używają nazwy modelu. Wybierz je w grupie {{ui:Wyjście}}.

| Przycisk | Plik | Co zawiera |
|---|---|---|
| {{ui:IFC}} | `<nazwa>.ifc` | IFC4: kondygnacje, siatki, każda część stalowa jako wyciągnięcie profilu z otworami i wycięciami, zespoły, śruby i pręty kotwiące, ławy i każdy pręt. Zobacz [Eksport IFC](topic:ifc-export). |
| {{ui:Pliki NC}} | `<nazwa> NC.zip` | Jeden plik DSTV `.nc1` na znacznik części. Zobacz [Wysyłanie plików NC do warsztatu](topic:nc-export). |
| {{ui:Zestawienie}} | `<nazwa> BOM.csv` | Trzy tabele w jednym pliku: części, zespoły oraz śruby i pręty kotwiące. Zobacz [Znaczniki i zestawienie materiałów](topic:marks-and-bom). |
| {{ui:Gięcie}} | `<nazwa> bending schedule.csv` | Każdy znacznik pręta w ławach. Zobacz [Ławy i zbrojenie](topic:footings-and-rebar). |
| {{ui:Rysunek warsztatowy}} | `<nazwa> <znacznik>.pdf` | Jeden arkusz (A3, chyba że wybrano inny rozmiar) dla zaznaczonej części (kształtowniki dwuteowe i blachy). Zobacz [Tworzenie rysunku warsztatowego](topic:shop-drawings). |
| {{ui:Rysunki}} | `<nazwa> drawings.pdf`, `<nazwa> <arkusz>.pdf`; `<nazwa> <arkusz>.dwg` lub `.dxf`, kilka w `<nazwa> drawings DWG.zip` (albo `DXF.zip`) | Rzuty, elewacje i rysunki zespołów na wybranym rozmiarze arkusza; DWG i DXF w pełnym rozmiarze, 1 jednostka = 1 mm na papierze. Zobacz [Rysunki rozmieszczenia i zespołów](topic:drawings). |

### Uwagi o plikach CSV

- Zaczynają się od znacznika kolejności bajtów, aby arkusze kalkulacyjne poprawnie czytały znaki z akcentami.
- Komórka zaczynająca się od `=`, `+`, `-` lub `@` (i niebędąca zwykłą liczbą) dostaje na początku apostrof, żeby arkusz nigdy nie wykonał jej jako formuły.
- Długości są w milimetrach, a masy w kilogramach.

### Uwagi o PDF

Tekst w PDF używa standardowej czcionki Helvetica. Znaki, których w niej nie ma (poza zestawem zachodnioeuropejskim), drukują się jako „?”, a pasek stanu podaje, ile ich było.

## Jednostki

DetailCraft pracuje wszędzie w milimetrach: siatki, poziomy, współrzędne, profile, otwory i każdy eksport. Nazwy profili zachowują opublikowaną postać (W12x50 to oznaczenie amerykańskie, choć jego wymiary są pokazywane w mm). Nie ma jeszcze wprowadzania w jednostkach imperialnych.

## Online i offline

Otwieranie, zapisywanie i eksport odbywają się w Twojej przeglądarce, więc działają tak samo z połączeniem i bez, gdy DetailCraft już się załaduje.

Aby później używać DetailCraft bez połączenia, wybierz {{ui:Zapisz do pracy offline}} na pasku aplikacji, gdy jesteś online. Przycisk liczy w górę („Saving 3 of 20”), a potem pokazuje {{ui:Gotowe offline}}. Zapisana kopia zawiera bibliotekę grafiki 3D (około 2,6 MB) i tę pomoc, więc po zapisie widok 3D, każdy eksport i pomoc działają offline. Szczegóły i to, co nadal wymaga połączenia: [Praca offline](common:offline).

:::offline
Jesteś offline. Jeśli pasek aplikacji pokazuje {{ui:Gotowe offline}}, otwieranie, zapisywanie i eksport działają jak zwykle. Jeśli nie, zostaw tę kartę otwartą, nie przeładowuj jej, dopóki nie wrócisz online, i zapisz model teraz.
:::

Zapis w chmurze nie jest jeszcze dostępny i nie ma jeszcze wersji na komputer. Kopie zapasowe plików `.detailcraft.json` rób tak, jak każdej innej pracy. Więcej w [Dokąd trafiają Twoje pliki](common:your-files).

## Niezapisana praca

DetailCraft trzyma model tylko w otwartej karcie. Jeśli zamkniesz lub przeładujesz kartę z niezapisanymi zmianami, przeglądarka zapyta, czy opuścić stronę; jej sformułowanie jest własnością przeglądarki. Zapisuj często przez {{key:Mod+S}}.
