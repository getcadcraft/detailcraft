---
title: Używanie DetailCraft z asystentem AI
summary: Pozwól własnemu asystentowi AI lub skryptowi odczytywać model, jego części, problemy i kolizje, dodawać elementy i połączenia, zapisywać i eksportować (także USD): uprawnienia, połączenie przez CadCraft Studio i dziennik aktywności.
keywords: ai, asystent, agent, mcp, model context protocol, skrypt, automatyzacja, części, kolizje, połączenia, uprawnienia, rozłączenie, aktywność, cofnij
from: d624c9a0
---

## Czego się nauczysz

Jak pozwolić asystentowi AI (albo napisanemu przez Ciebie skryptowi) pracować z DetailCraft i jak zdecydować, czego może dotykać.

DetailCraft **nie ma własnej AI** i niczego nigdzie nie wysyła. Asystenta przynosisz sam: dowolny program, który mówi w Model Context Protocol (MCP). DetailCraft udostępnia mu tylko narzędzia, a wybierasz, które.

## Włączanie

1. Otwórz {{ui:Ustawienia}} (koło zębate na pasku aplikacji lub {{key:Mod+,}}) i przejdź na kartę {{ui:DetailCraft}}.
2. W sekcji {{ui:Asystenci}} zaznacz **Pozwól asystentom AI i skryptom korzystać z DetailCraft**. Jest wyłączone, dopóki tego nie zrobisz.
3. Wybierz, co może robić: **Odczyt** jest zaznaczony na początku; zaznacz **Edycja**, **Zapis** lub **Eksport** tylko wtedy, gdy ich potrzebujesz.

Narzędzia spoza zaznaczonych uprawnień nie są oferowane asystentowi, a jeśli mimo to o któreś poprosi, DetailCraft je odrzuca i zapisuje w dzienniku aktywności. Wyłączenie przełącznika kończy natychmiast wszystkie połączenia.

## Połącz asystenta

Asystenci łączą się przez **CadCraft Studio** na Twoim komputerze: Studio uruchamia mały serwer, do którego dotrze tylko ten komputer, chroniony tokenem, który tworzy przy każdym uruchomieniu. W Studio wybierz {{ui:Połącz asystenta}} i skopiuj adres oraz token do swojego asystenta (Studio pokazuje dokładne ustawienia do wklejenia). Nigdy nie udostępniaj tokenu.

:::note
Karta przeglądarki nie może otworzyć połączenia dla asystenta: w aplikacjach przeglądarkowych przełącznik nie działa, dopóki nie użyjesz CadCraft Studio na swoim komputerze.
:::

## Ty masz kontrolę

- **Każda zmiana to jeden krok cofania**, oznaczony jako zmiana asystenta (na przykład „Asystent: dodaj belkę”, „Asystent: dodaj blachy węzłowe”). {{key:Mod+Z}} cofa ostatnią zmianę asystenta w całości. Własne `undo` asystenta cofa tylko jego kroki, nigdy Twoich, chyba że wyraźnie o to poprosi.
- **Czeka na Ciebie.** Gdy umieszczasz element, przesuwasz części lub wklejasz, DetailCraft odrzuca zmiany asystenta i każe mu spróbować ponownie.
- **Wiesz, kiedy jest połączony.** Przycisk na pasku aplikacji podaje nazwę asystenta, gdy jest połączony; kliknij go, aby zobaczyć, co może robić, albo aby go **Rozłączyć**.
- **Aktywność.** {{ui:Ustawienia}} › {{ui:DetailCraft}} › {{ui:Asystenci}} › {{ui:Aktywność}} pokazuje każde wywołanie: kiedy, które narzędzie, wykonane czy odrzucone. {{ui:Zapisz dziennik}} zachowuje kopię.

## O co asystent może poprosić

Wszystkie długości są w milimetrach, punkty `[x, y, z]` z osią z skierowaną w górę, jak w modelu.

| Narzędzie | Uprawnienie | Co robi |
|---|---|---|
| `app_info`, `model_describe` | Odczyt | Otwarty model: siatki, poziomy, etapy, elementy według typu i profilu, połączenia, fundamenty, schody, części, masa stali, problemy |
| `parts_list` | Odczyt | Znaki części z profilem, materiałem, długością cięcia, liczbą, masą, etapem i znakami złożeń; według typu, profilu, znaku lub etapu |
| `problems_list` | Odczyt | Co wypisuje karta {{ui:Problemy}}, każdy z opisem, czego dotyczy |
| `clash_check` | Odczyt | [Sprawdzenie kolizji](topic:clash-check), z tolerancją i etapami |
| `selection_get` | Odczyt | To, co zaznaczyłeś |
| `selection_set` | Edycja | Zaznacza elementy, połączenia, fundamenty lub schody (po id albo znaku części), aby Ci je pokazać; nic nie zmienia |
| `member_add` | Edycja | Belka, słup, stężenie lub blacha między dwoma punktami |
| `connection_add` | Edycja | Płyty czołowe, uchwyty ścinania, płyty podstawy, połączenia doczołowe lub blachy węzłowe tam, gdzie spotykają się podane elementy, tak jak robią to przyciski {{ui:Połącz}} |
| `undo` | Edycja | Cofa ostatnie kroki asystenta |
| `model_save` | Zapis | Własny zapis DetailCraft |
| `model_export` | Eksport | IFC, pliki NC, BOM, zestawienie gięcia, plik KISS lub lista cięcia, tak jak tworzą je przyciski {{ui:Wyjście}} |
| `usd_export` | Eksport | Model stalowy jako USD (.usda, .usdc lub .usdz), tak jak zapisuje go {{ui:Wyjście}} › {{ui:USD}} (zobacz [Eksport modelu stalowego do USD](topic:usd)); w Studio może zapisać plik do folderu, na który pozwoliłeś |

## Gdy coś nie działa

- **Asystent nie widzi narzędzi DetailCraft:** sprawdź, czy przełącznik jest włączony w tym oknie i czy okno jest otwarte w Studio.
- **„wymaga uprawnienia do edycji”** (albo zapisu, eksportu): zaznacz je w sekcji {{ui:Asystenci}}, a potem zapytaj ponownie.
- **„Osoba umieszcza element”:** dokończ, co robisz (albo naciśnij {{key:Esc}}), a potem pozwól asystentowi spróbować ponownie.
- **Błędy „401” lub „token”:** token się zmienił (Studio uruchomiono ponownie albo utworzono {{ui:Nowy token}}). Skopiuj nowy do ustawień asystenta.

## Zobacz także

- [Przepisy dla asystentów AI](common:assistants-recipes): przykłady, każdy z narzędziami, które wywołuje.
