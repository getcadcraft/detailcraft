---
title: Wydania, rewizje i dziennik zmian rysunków
summary: Prowadź jedną historię wydań wspólnie z modelem architekta: wczytuj wydania, zapisuj instrukcje z budowy, rysunki warsztatowe i dołączone modele przy wydaniu oraz czytaj dziennik zmian rysunków.
keywords: wydanie, rewizja, rewizje, dziennik zmian, rejestr rysunków, instrukcja z budowy, rysunek warsztatowy, dołączony model, przetarg, budowa, historia wydań, rysunki warsztatowe, produkcja
from: 4b9a1b7b
---

## Co zrobisz

Pracuj na tej samej historii wydań co reszta zespołu. Sprawdzisz, które arkusze poszły w jakiej rewizji, i powiążesz to, co dzieje się na budowie, z wydaniem, do którego należy.

## Kroki

1. Otwórz **Wydania i rewizje**.
2. Wybierz **Wczytaj historię wydań** i wskaż plik `.issues.json` zapisany w BimCraft lub innej aplikacji. Jego wydania i zapisy zostaną dodane do Twoich. Nic nie zostanie zastąpione.
3. Wybierz **Dodaj zapis** dla instrukcji z budowy, rysunku warsztatowego, zestawu adnotacji, dołączonego modelu lub notatki. Wybierz wydanie, którego dotyczy, i jego status. Wybrany plik jest zapisywany według nazwy, rozmiaru i SHA-256; plik pozostaje tam, gdzie jest.
4. **Dziennik zmian rysunków** pokazuje jeden wiersz dla każdego arkusza i jedną kolumnę dla każdego wydania. Rewizja w nawiasach została wydana ponownie bez zmian.
5. **Pobierz dziennik zmian (CSV)** zapisuje wydania, tabelę arkuszy i zapisy. **Zapisz historię wydań** tworzy plik, który odczytują inne aplikacje.

## Dobrze wiedzieć

- Arkusze nadal są wydawane z Rysunki, arkusz po arkuszu. Te wydania pojawiają się tutaj: arkusze wydane jednego dnia z jedną notatką tworzą jedno wydanie.
- Zapisy i wydania, które wczytasz, są zapisywane w pliku modelu. Każda zmiana to jedna operacja Cofnij.
- Wczytanie tego samego pliku dwa razy niczego nie dubluje. Gdy dwie kopie zawierają ten sam zapis, zachowywana jest nowsza.
