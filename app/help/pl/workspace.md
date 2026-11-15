---
title: Przegląd ekranu
summary: Każdy pasek, panel i karta w DetailCraft pod nazwą widoczną na ekranie oraz to, do czego służą.
keywords: ekran, układ, pasek narzędzi, panele, właściwości, pasek stanu, raporty, interfejs, ui, karty
from: 94f81073
---

DetailCraft wypełnia okno przeglądarki poniżej paska aplikacji. Od góry: pasek narzędzi, potem trzy kolumny (panel {{ui:Model}}, widok, panel {{ui:Properties}}), potem karty raportów, a na końcu pasek stanu.

## Pasek aplikacji

Cienki pasek na samej górze należy do strony CadCraft, a nie do modelu. Pokazuje nazwę aplikacji i wersję, link do {{ui:About DetailCraft}} (O programie DetailCraft), {{ui:Help}} (albo {{key:F1}}) dla tej pomocy, {{ui:Save for offline}}, przycisk trybu ekranu oraz przełącznik {{ui:Paper}} / {{ui:Model}}.

- {{ui:Save for offline}} zachowuje DetailCraft, jego widok 3D i tę pomoc w przeglądarce, aby otwierał się bez połączenia. Po zapisaniu pokazuje {{ui:Offline ready}}; kliknij go wtedy, aby uzyskać {{ui:Save again (get the newest version)}} albo {{ui:Remove the offline copy}}. Zobacz [Praca offline](common:offline).
- {{ui:Paper}} daje jasny ekran, a {{ui:Model}} ciemny. Widok 3D zmienia się od razu; nic w modelu się nie zmienia.
- Przycisk trybu ekranu i {{key:Ctrl+Shift+F}} przełączają kolejno między trybem normalnym, pełnym ekranem i pełnym ekranem z ukrytymi paskami. {{key:Ctrl+Shift+F}} używa klawisza Ctrl na każdym komputerze, także na Macu. Gdy paski są ukryte, wskaż górną krawędź ekranu (albo ją dotknij), aby je przywrócić. {{key:Esc}} wychodzi z pełnego ekranu.

## Pasek narzędzi

Pasek narzędzi ma pięć grup. Najedź na przycisk, aby zobaczyć, co robi, i jego klawisz.

| Grupa | Przyciski | Co robią |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Rozpoczynają model, otwierają zapisany `.detailcraft.json` lub plik IFC, zapisują model albo otwierają przykładową ramę |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Narzędzie, którego używa następne kliknięcie w widoku |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, a w {{ui:More}}: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Dodają połączenie do zaznaczonej belki, słupa lub stężenia albo kopiują zaznaczone połączenie do każdego podobnego węzła |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Cofają i ponawiają zmiany; kopiują zaznaczenie i wklejają je. {{ui:More}} otwiera menu z {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} i {{ui:Select none}}, każde z klawiszem |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, a w {{ui:More}}: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Pobierają eksport albo otwierają arkusze rysunków |

Przyciski i pozycje menu, których nie można teraz użyć, są wyszarzone, a najechanie na nie mówi dlaczego. {{ui:End plates}} wymaga zaznaczonej belki, {{ui:Base plate}} zaznaczonego słupa, {{ui:Similar}} zaznaczonego połączenia, {{ui:Shop drawing}} modelu z częściami, {{ui:Copy}} zaznaczonego elementu lub stopy, a {{ui:Paste}} czegoś skopiowanego. Zobacz [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).

## Panel modelu (lewy)

- {{ui:Model}}: {{ui:Name}} modelu. Nadaje nazwę każdemu zapisywanemu lub eksportowanemu plikowi.
- {{ui:Grids}}: linie siatki i ich rozstawy oraz {{ui:Apply grids}}. Zobacz [Ustawianie siatek i poziomów](topic:grids-and-levels).
- {{ui:Levels}}: jeden wiersz na poziom (nazwa i rzędna w mm), {{ui:Add level}} i {{ui:Apply levels}}.
- {{ui:Custom profile}}: stwórz własny parametryczny przekrój. Jest zamknięty, dopóki go nie otworzysz.
- {{ui:Part marks}}: każdy znacznik części w modelu z jego profilem, długością i liczbą. Kliknij znacznik, aby zaznaczyć pierwszą część z nim.

{{ui:Grids}}, {{ui:Levels}} i {{ui:Custom profile}} składają się: kliknij ich nagłówki.

## Widok (środek)

Widok pokazuje model w 3D. Nad nim pasek widoku ma trzy przyciski i listę:

- {{ui:3D}}: swobodnie obracaj model.
- {{ui:Plan}}: patrz prosto w dół na jeden poziom. Obok przycisków pojawia się lista poziomów. Wszystko ponad 1,5 m nad poziomem jest odcięte, abyś wyraźnie widział i klikał poziom.
- {{ui:Elevation}}: patrz prosto na jedną literowaną linię siatki (Siatka A, Siatka B …). Pojawia się lista literowanych siatek. Widoczna jest tylko stal w odległości 1 m od tej linii.
- Przycisk dopasowania na prawym końcu paska widoku powiększa, by pokazać cały model.

Małe kropki oznaczają każde przecięcie siatki na każdym poziomie. Gdy narzędzie umieszczania jest włączone, kropka najbliższa wskaźnikowi się zapala, a pasek stanu ją nazywa, na przykład „A/2 at Level 1”. Kolory pozwalają odróżnić typy elementów: słupy, belki, stężenia i blachy mają każdy własny kolor, śruby i pręty kotwiące inny, stopy są półprzezroczyste, a zbrojenie rysowane jest jako rurki. Otwory widać jako ciemne zatyczki, a wycięcia są widoczne jako wycięte fragmenty.

Jak obracać, przesuwać i powiększać: [Poruszanie się po widoku 3D](topic:navigate-3d).

Gdy model jest pusty, widok pokazuje krótką listę „Rozpocznij model”. Zapisany plik modelu możesz też upuścić gdziekolwiek na widok, aby go otworzyć.

## Panel właściwości (prawy)

To, co pokazuje ten panel, zależy od tego, co robisz, a nagłówek mówi, co to jest: „Model”, „Umieść belkę”, „Belka b2”, „Połączenie blachą czołową”, „Blacha podstawy”, „Ława F1”, „Zaznaczono: 3” lub „Wklej”.

- **Nic nie zaznaczono:** podsumowanie modelu (elementy, połączenia, ławy, części, znaczniki, śruby, masa stali i zbrojenia, siatki, poziomy).
- **Narzędzie umieszczania włączone:** opcje następnego elementu (profil, materiał, położenie, obrót, a dla słupów {{ui:Up to}}), podsumowanie wybranego profilu oraz formularz {{ui:Add by grid}} do umieszczania bez klikania w widoku.
- **Zaznaczony element:** jego nazwa, profil, materiał, położenie, obrót, współrzędne obu końców, znaczniki, długość cięcia i masa, otwory i wycięcia oraz przyciski połączeń, jego rysunku warsztatowego i {{ui:Delete}}.
- **Zaznaczone połączenie:** każde ustawienie blachy, śruby i spoiny, śruby i spoina, które tworzy, jego ostrzeżenia oraz {{ui:Apply to similar}} (Zastosuj do podobnych).
- **Zaznaczona stopa:** jej położenie i wymiary, dolna mata, pręty wstępne i znaczniki prętów, których używa.
- **Kilka zaznaczonych rzeczy:** ile elementów każdego typu, połączeń i stóp, ich masa stali oraz {{ui:Copy}}, {{ui:Duplicate}} i {{ui:Delete}}.
- **Wklejanie:** co jest w schowku oraz formularze do wklejania z wpisanym przesunięciem albo na przecięcie siatki wybrane z list.

Pola liczbowe działają po naciśnięciu {{key:Enter}} lub opuszczeniu pola. Każda zmiana to jeden krok, który możesz cofnąć.

## Karty raportów (dół)

- {{ui:Problems}}: wszystko, czego DetailCraft nie mógł zbudować lub co chce, byś sprawdził, z przyciskiem {{ui:Select}} przy każdej linii. Karta pokazuje liczbę w nawiasach.
- {{ui:Bill of materials}}: części, zespoły oraz śruby i pręty kotwiące z masami i linkiem {{ui:Download CSV}}. Kliknij znacznik części, aby zaznaczyć tę część.
- {{ui:Bending schedule}}: każdy znacznik pręta w każdej stopie, z linkiem {{ui:Download CSV}}.

Gdy karta jest aktywna, {{key:Left}} i {{key:Right}} przechodzą między kartami.

## Pasek stanu

Pasek na dole ma trzy części: przecięcie siatki pod wskaźnikiem podczas umieszczania, najnowszy komunikat (co się właśnie stało albo dlaczego coś odrzucono) oraz sumy bieżące części, śrub, masy stali i masy zbrojenia. Gdy działanie wydaje się nic nie robić, najpierw przeczytaj komunikat tutaj.

Tytuł karty przeglądarki zaczyna się od kropki (•), gdy model ma niezapisane zmiany.

## Na wąskim ekranie

Poniżej około 760 pikseli szerokości kolumny układają się jedna pod drugą: pasek narzędzi, widok, pasek stanu, {{ui:Properties}}, karty raportów, a na końcu panel {{ui:Model}}. Przewiń stronę, aby do nich dotrzeć. DetailCraft jest zaprojektowany na ekran komputera stacjonarnego lub laptopa; telefon nadaje się do oglądania, a nie do detailingu.
