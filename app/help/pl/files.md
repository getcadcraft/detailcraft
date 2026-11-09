---
title: Otwieranie, zapisywanie i eksportowanie plików
summary: Plik modelu DetailCraft, każdy eksport, miejsca, do których trafiają pliki, oraz różnice zależne od przeglądarki i połączenia.
keywords: otwórz, zapisz, eksport, pobierz, plik, json, ifc, nc1, dstv, csv, pdf, zip, formaty, import
from: 6fbc8e8f
---

DetailCraft ma jeden własny plik, model, oraz pięć eksportów. Każdy zapis i każdy eksport to pobranie. Nic nie jest wysyłane i nic nie jest przechowywane na serwerze.

## Plik modelu

Model DetailCraft zapisuje się jako `<name>.detailcraft.json`, gdzie `<name>` to nazwa modelu w panelu {{ui:Model}}. Zawiera siatki, poziomy, elementy (wraz z ich otworami i wycięciami), połączenia i ich ustawienia, ławy oraz twoje własne profile.

Części, znaczniki, śruby, spoiny i pręty nie są zapisywane: DetailCraft wylicza je ponownie z modelu za każdym razem, gdy go otwiera. Dlatego plik modelu jest mały.

### Zapisywanie

1. Wpisz nazwę w polu {{ui:Name}} na górze panelu {{ui:Model}}.
2. Wybierz {{ui:Save}} w grupie {{ui:File}} albo naciśnij {{key:Mod+S}}.
3. Przeglądarka pobiera `<name>.detailcraft.json`. Pasek stanu pokazuje „Zapisano … (pobrano)”, a kropka na początku tytułu karty przeglądarki znika.

Każdy zapis to nowe pobranie. Przeglądarka nie nadpisuje pliku, który otworzyłeś; zależnie od ustawień dodaje numer do nazwy, na przykład `Frame (1).detailcraft.json`, albo pyta, gdzie zapisać. Własne wersje zachowasz, zmieniając nazwy pobranych plików.

:::chromium
Chrome i Edge zapisują do folderu Pobrane, chyba że w ustawieniach pobierania przeglądarki włączona jest opcja **Pytaj, gdzie zapisać każdy plik przed pobraniem**. Włącz ją, jeśli chcesz za każdym razem wybierać folder i nazwę pliku.
:::

:::firefox
Firefox zapisuje do folderu Pobrane albo pyta za każdym razem, jeśli w jego ustawieniach włączona jest opcja **Zawsze pytaj, gdzie zapisywać pliki**.
:::

:::safari
Safari zapisuje do folderu Pobrane. Aby zmienić folder, otwórz **Safari, Ustawienia, Ogólne, Lokalizacja pobranych plików**.
:::

### Otwieranie

1. Wybierz {{ui:Open}} w grupie {{ui:File}} albo naciśnij {{key:Mod+O}}.
2. Wskaż plik `.detailcraft.json`.

Albo przeciągnij plik z {{pick:mac=Findera|windows=Eksploratora plików|linux=menedżera plików}} i upuść go na widok. Widok pokazuje „Upuść model DetailCraft, aby go otworzyć”, dopóki przeciągasz plik.

Jeśli otwarty model ma niezapisane zmiany, DetailCraft najpierw pyta: {{ui:Cancel}}, {{ui:Discard changes}} lub {{ui:Save first}}.

DetailCraft sprawdza każde pole pliku, zanim go użyje. Wszystko, czego nie może użyć, zostaje pominięte, a pasek stanu mówi, co to było, na przykład „2 elementy były nieprawidłowe i zostały pominięte.” Model zapisany przez nowszy DetailCraft zostaje odrzucony z komunikatem, zamiast otworzyć się częściowo poprawnie.

### Co się otwiera

Własne pliki modeli (`.json`, do 50 MB) oraz pliki IFC (`.ifc`, IFC2X3 lub IFC4, do 200 MB). Plik IFC otwarty albo wczytany przez {{ui:Import IFC}} staje się nowym modelem swoich belek, słupów, elementów, blach, siatek i poziomów, z wyciętymi w nich otworami i wycięciami oraz śrubami jako luźnymi śrubami; raport wymienia, co zostało pominięte. Zobacz [Eksport IFC](topic:ifc-export#import). Nie otwiera jeszcze plików DWG, DXF ani modeli z innych programów do detailingu. Próba pokazuje: „DetailCraft otwiera własne modele (.detailcraft.json) i pliki IFC (.ifc).”

## Utracona praca, ostatnie pliki, aplikacja na komputer

- Dopóki model ma zmiany, których nie zapisałeś, DetailCraft trzyma kopię w tej przeglądarce. Jeśli karta lub przeglądarka zostanie zamknięta przed zapisem, przy następnym otwarciu DetailCraft zapyta **Odzyskać swoją pracę?**: możesz odzyskać kopię albo ją odrzucić. Zobacz [Odzyskaj swoją pracę](common:recover).
- Ostatnio otwarte modele są wymienione na ekranie startowym, gdy przeglądarka pozwala DetailCraft ponownie je otworzyć; kliknij jeden, aby go ponownie otworzyć.
- W aplikacji na komputer {{ui:Save}} zapisuje model z powrotem do otwartego pliku (w przeglądarce pobiera kopię), a dwukrotne kliknięcie modelu DetailCraft lub pliku IFC otwiera go w DetailCraft.

## Eksporty

Wszystkie eksporty używają nazwy modelu. Wybierz je w grupie {{ui:Output}}.

| Przycisk | Plik | Co zawiera |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: poziomy, siatki, każda stalowa część jako wyciągnięty profil z otworami i wycięciami, zespoły, śruby i pręty kotwiące, ławy oraz każdy pręt. Zobacz [Eksport IFC](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Jeden plik DSTV `.nc1` na każdy znacznik części. Zobacz [Wysyłanie plików NC do warsztatu](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Trzy tabele w jednym pliku: części, zespoły oraz śruby i pręty kotwiące. Zobacz [Znaczniki i zestawienie materiałów](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Każdy znacznik pręta w ławach. Zobacz [Ławy i zbrojenie](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` zawiera arkusz na każdy znacznik części; {{ui:Download this sheet}} daje pokazany arkusz (A3, chyba że wybrano inny rozmiar). Zobacz [Tworzenie rysunków warsztatowych](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` albo `.dxf`, kilka w `<name> drawings DWG.zip` (lub `DXF.zip`) | Rzuty, elewacje i rysunki zestawień montażowych w wybranym rozmiarze arkusza; DWG i DXF w pełnym rozmiarze, 1 jednostka = 1 mm na papierze. Zobacz [Rysunki ogólnego układu i montażowe](topic:drawings). |

### Uwagi do plików CSV

- Zaczynają się od znacznika kolejności bajtów, dzięki czemu arkusze kalkulacyjne poprawnie odczytują znaki z akcentami.
- Komórka zaczynająca się od `=`, `+`, `-` lub `@` (i nie będąca zwykłą liczbą) dostaje wiodący apostrof, aby arkusz nigdy nie uruchomił jej jako formuły.
- Długości są w milimetrach, a masy w kilogramach.

### Uwagi do PDF

Tekst w PDF używa standardowej czcionki Helvetica. Znaki, których ona nie ma (poza zachodnioeuropejskim zestawem), drukowane są jako „?”, a pasek stanu podaje, ile ich było.

## Jednostki

DetailCraft pracuje w milimetrach: siatki, poziomy, współrzędne, profile, otwory i każdy eksport. Nazwy profili zachowują swoją opublikowaną postać (W12x50 to oznaczenie amerykańskie, mimo że wymiary są pokazane w mm). Wprowadzania w jednostkach imperialnych jeszcze nie ma.

## Praca online i offline

Otwieranie, zapisywanie i eksportowanie odbywają się w przeglądarce, więc działają tak samo z połączeniem lub bez, gdy DetailCraft się już załadował.

Aby później korzystać z DetailCraft bez połączenia, wybierz {{ui:Save for offline}} w pasku aplikacji, gdy jesteś online. Przycisk liczy („Zapisywanie 3 z 20”), a potem pokazuje {{ui:Offline ready}}. Zapisana kopia zawiera bibliotekę grafiki 3D (około 2,6 MB) oraz tę pomoc, więc po zapisaniu widok 3D, każdy eksport i pomoc działają offline. Szczegóły oraz to, czego nadal wymaga połączenia: [Praca offline](common:offline).

:::offline
Jesteś offline. Jeśli pasek aplikacji pokazuje {{ui:Offline ready}}, otwieranie, zapisywanie i eksportowanie działają jak zwykle. Jeśli nie, zostaw tę kartę otwartą, nie przeładowuj jej, dopóki nie wrócisz online, i zapisz model od razu.
:::

Zapisywanie w chmurze nie jest jeszcze dostępne i nie ma jeszcze wersji na komputer. Rób kopie zapasowe plików `.detailcraft.json` tak jak każdego innego pliku roboczego. Więcej w [Gdzie trafiają twoje pliki](common:your-files).

## Niezapisana praca

DetailCraft trzyma model tylko w otwartej karcie. Jeśli zamkniesz lub przeładujesz kartę z niezapisanymi zmianami, przeglądarka zapyta, czy opuścić stronę; jej treść należy do przeglądarki. Zapisuj często, naciskając {{key:Mod+S}}.
