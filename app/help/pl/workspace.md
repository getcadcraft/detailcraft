---
title: Przegląd ekranu
summary: Każdy pasek, panel i karta w DetailCraft pod nazwą z ekranu oraz to, do czego służą.
keywords: ekran, układ, pasek narzędzi, panele, właściwości, pasek stanu, raporty, interfejs, karty
from: 454f74fd
---

DetailCraft wypełnia okno przeglądarki pod paskiem aplikacji. Od góry do dołu: pasek narzędzi, potem trzy kolumny (panel {{ui:Model}}, widok, panel {{ui:Właściwości}}), potem karty raportów, potem pasek stanu.

## Pasek aplikacji

Wąski pasek na samej górze należy do witryny CadCraft, nie do modelu. Pokazuje nazwę i wersję aplikacji, odsyłacz {{ui:O DetailCraft}}, {{ui:Pomoc}} (albo {{key:F1}}) dla tej pomocy, {{ui:Zapisz do pracy offline}}, przycisk trybu ekranu i przełącznik {{ui:Papier}} / {{ui:Model}}.

- {{ui:Zapisz do pracy offline}} zachowuje w przeglądarce DetailCraft, jego widok 3D i tę pomoc, żeby otwierał się bez połączenia. Po zapisie pokazuje {{ui:Gotowe offline}}; naciśnij go wtedy, aby użyć {{ui:Zapisz ponownie (pobierz najnowszą wersję)}} lub {{ui:Usuń kopię offline}}. Zobacz [Praca offline](common:offline).
- {{ui:Papier}} daje jasny ekran, a {{ui:Model}} ciemny. Widok 3D podąża od razu; nic w modelu się nie zmienia.
- Przycisk trybu ekranu i {{key:Ctrl+Shift+F}} przełączają tryby: normalny, pełny ekran i pełny ekran z ukrytymi paskami. {{key:Ctrl+Shift+F}} używa klawisza Control na każdym komputerze, także na Macu. Przy ukrytych paskach wskaż górną krawędź ekranu (albo dotknij jej), aby je przywrócić. {{key:Esc}} opuszcza pełny ekran.

## Pasek narzędzi

Pasek narzędzi ma pięć grup. Najedź na przycisk, aby zobaczyć, co robi, i jego klawisz.

| Grupa | Przyciski | Co robią |
|---|---|---|
| {{ui:Plik}} | {{ui:Nowy}}, {{ui:Otwórz}}, {{ui:Importuj IFC}}, {{ui:Zapisz}}, {{ui:Przykład}} | Rozpocząć model, otworzyć zapisany `.detailcraft.json` albo plik IFC, zapisać model lub otworzyć przykładową ramę |
| {{ui:Umieść}} | {{ui:Zaznacz}}, {{ui:Belka}}, {{ui:Słup}}, {{ui:Stężenie}}, {{ui:Blacha}}, {{ui:Ława}}, {{ui:Schody}} | Narzędzie, którego użyje następne kliknięcie w widoku |
| {{ui:Połącz}} | {{ui:Blachy czołowe}}, {{ui:Blacha podstawy}}, a w {{ui:Więcej}}: {{ui:Blachy przyłączeniowe}}, {{ui:Połączenie doczołowe}}, {{ui:Blacha węzłowa}}, {{ui:Podobne}} | Dodać połączenie do zaznaczonej belki, słupa lub stężenia albo skopiować zaznaczone połączenie na każdy taki sam węzeł |
| {{ui:Edycja}} | {{ui:Cofnij}}, {{ui:Ponów}}, {{ui:Kopiuj}}, {{ui:Wklej}}, {{ui:Więcej}} | Cofać i ponawiać edycje; kopiować zaznaczenie i je wklejać. {{ui:Więcej}} otwiera menu z {{ui:Wytnij}}, {{ui:Kopiuj}}, {{ui:Wklej}}, {{ui:Wklej w miejscu}}, {{ui:Duplikuj}}, {{ui:Usuń}}, {{ui:Zaznacz wszystko}} i {{ui:Odznacz wszystko}}, każde z własnym klawiszem |
| {{ui:Wyjście}} | {{ui:IFC}}, {{ui:Pliki NC}}, {{ui:Zestawienie}}, {{ui:Rysunek warsztatowy}}, {{ui:Rysunki}}, a w {{ui:Więcej}}: {{ui:Gięcie}}, {{ui:Raport masy według etapu}}, {{ui:Plik KISS dla oprogramowania do produkcji}} | Pobrać eksport albo otworzyć arkusze rysunkowe |

Przyciski i pozycje menu, które w danej chwili nie mogą działać, są wyszarzone, a najechanie na nie mówi dlaczego. {{ui:Blachy czołowe}} wymagają zaznaczonej belki, {{ui:Blacha podstawy}} zaznaczonego słupa, {{ui:Podobne}} zaznaczonego połączenia, {{ui:Rysunek warsztatowy}} zaznaczonej części będącej kształtownikiem dwuteowym lub blachą, {{ui:Kopiuj}} zaznaczonego elementu lub ławy, a {{ui:Wklej}} czegoś skopiowanego. Zobacz [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).

## Panel Model (po lewej)

- {{ui:Model}}: {{ui:Nazwa}} modelu. Nazywa każdy zapisywany lub eksportowany plik.
- {{ui:Siatki}}: linie siatek i ich rozstawy oraz {{ui:Zastosuj siatki}}. Zobacz [Przygotowanie siatek i poziomów](topic:grids-and-levels).
- {{ui:Poziomy}}: po jednym wierszu na poziom (nazwa i rzędna w mm), {{ui:Dodaj poziom}} i {{ui:Zastosuj poziomy}}.
- {{ui:Profil niestandardowy}}: utwórz własny przekrój parametryczny. Zamknięty, dopóki go nie otworzysz.
- {{ui:Znaczniki elementów}}: każdy znacznik części w modelu z profilem, długością i liczbą. Naciśnij znacznik, aby zaznaczyć pierwszą część z nim.

{{ui:Siatki}}, {{ui:Poziomy}} i {{ui:Profil niestandardowy}} się zwijają: naciśnij ich nagłówki.

## Widok (pośrodku)

Widok pokazuje model w 3D. Nad nim pasek widoku ma trzy przyciski i listę:

- {{ui:3D}}: obracaj model swobodnie.
- {{ui:Rzut}}: patrz prosto w dół na jeden poziom. Obok przycisków pojawia się lista poziomów. Wszystko wyżej niż 1,5 m nad poziomem jest ucięte, żebyś mógł wyraźnie widzieć i klikać ten poziom.
- {{ui:Elewacja}}: patrz prosto na jedną literowaną linię siatki (Siatka A, Siatka B …). Pojawia się lista siatek literowanych. Pokazana jest tylko stal w odległości do 1 m od tej linii.
- Przycisk dopasowania na prawym końcu paska widoku powiększa tak, by pokazać cały model.

Małe kropki oznaczają każde przecięcie siatek na każdym poziomie. Gdy narzędzie umieszczania jest włączone, kropka najbliższa wskaźnikowi się zaświeca, a pasek stanu ją nazywa, na przykład „A/2 at Level 1”. Kolory odróżniają typy elementów: słupy, belki, stężenia i blachy mają każde własny kolor, śruby i pręty inny, ławy są przezroczyste, a zbrojenie jest rysowane jako rurki. Otwory pokazują się jako ciemne wtyczki; wycięcia są wycięte.

Jak obracać, przesuwać i powiększać: [Poruszanie się w widoku 3D](topic:navigate-3d).

Gdy model jest pusty, widok pokazuje krótką listę „Start a model”. Zapisany plik modelu możesz też upuścić w dowolnym miejscu widoku, aby go otworzyć.

## Panel Właściwości (po prawej)

To, co pokazuje ten panel, zależy od tego, co robisz, a mówi o tym jego nagłówek: „Model”, „Place a beam”, „Beam b2”, „End plate connection”, „Base plate”, „Footing F1”, „3 selected” lub „Paste”.

- **Nic nie zaznaczono:** podsumowanie modelu (elementy, połączenia, ławy, części, znaczniki, śruby, masa stali i zbrojenia, siatki, poziomy).
- **Włączone narzędzie umieszczania:** opcje następnego elementu (profil, materiał, położenie, obrót, a dla słupów {{ui:Do}}), podsumowanie wybranego profilu i formularz {{ui:Dodaj według siatki}} do umieszczania bez klikania w widoku.
- **Zaznaczony element:** jego nazwa, profil, materiał, położenie, obrót, współrzędne obu końców, znaczniki, długość cięcia i masa, otwory i wycięcia oraz przyciski połączeń, rysunku warsztatowego i {{ui:Usuń}}.
- **Zaznaczone połączenie:** każde ustawienie blachy, śruby i spoiny, śruby i spoina, które wytwarza, jego ostrzeżenia i {{ui:Zastosuj do podobnych}}.
- **Zaznaczona ława:** jej położenie i rozmiar, siatka dolna, pręty startowe i używane znaczniki prętów.
- **Zaznaczonych kilka rzeczy:** ile elementów każdego typu, połączeń i ław, ich masa stali oraz {{ui:Kopiuj}}, {{ui:Duplikuj}} i {{ui:Usuń}}.
- **Wklejanie:** co jest w schowku oraz formularze wklejania z wpisanym przesunięciem albo na przecięcie siatek wybrane z list.

Pola liczbowe działają po naciśnięciu {{key:Enter}} lub opuszczeniu pola. Każda zmiana to jeden krok, który możesz cofnąć.

## Karty raportów (na dole)

- {{ui:Problemy}}: wszystko, czego DetailCraft nie mógł zbudować albo co chce, abyś sprawdził, z przyciskiem {{ui:Zaznacz}} w każdym wierszu. Karta pokazuje liczbę w nawiasach.
- {{ui:Zestawienie materiałów}}: części, zespoły oraz śruby i pręty kotwiące, z masami i odsyłaczem {{ui:Pobierz CSV}}. Naciśnij znacznik części, aby zaznaczyć tę część.
- {{ui:Zestawienie gięcia}}: każdy znacznik pręta w każdej ławie, z odsyłaczem {{ui:Pobierz CSV}}.

Gdy karta ma fokus, {{key:Left}} i {{key:Right}} przechodzą między kartami.

## Pasek stanu

Pasek wzdłuż dołu ma trzy części: przecięcie siatek pod wskaźnikiem podczas umieszczania, ostatni komunikat (co się właśnie stało albo dlaczego coś odrzucono) i bieżące sumy części, śrub, masy stali i masy zbrojenia. Gdy działanie wydaje się nic nie robić, najpierw przeczytaj komunikat tutaj.

Tytuł karty przeglądarki zaczyna się kropką (•), gdy model ma niezapisane zmiany.

## Na wąskim ekranie

Poniżej około 760 pikseli szerokości kolumny układają się jedna pod drugą: pasek narzędzi, widok, pasek stanu, {{ui:Właściwości}}, karty raportów, a na końcu panel {{ui:Model}}. Przewijaj stronę, aby do nich dotrzeć. DetailCraft jest ułożony pod ekran komputera stacjonarnego lub laptopa; telefon nadaje się do oglądania, nie do detalowania.
