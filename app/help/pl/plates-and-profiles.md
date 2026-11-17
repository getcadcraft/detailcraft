---
title: Umieszczanie blach i dodawanie profili niestandardowych
summary: Umieszczaj luźne blachy według grubości i szerokości oraz definiuj własne przekroje: dwuteowe, ceowe, kątowe, rurowe lub płaskowniki.
keywords: blacha, płaskownik, profil niestandardowy, profil użytkownika, parametryczny, przekrój, kształt, przekrój poprzeczny, pl
from: c24c3b51
---

## Umieść blachę

Blachę umieszcza się jak belkę: biegnie między dwoma przecięciami, z szerokością w poprzek i grubością w górę.

1. Wybierz {{ui:Blacha}} w grupie {{ui:Umieść}} lub naciśnij {{key:P}}.
2. W panelu {{ui:Właściwości}} ustaw {{ui:Grubość (mm)}} i {{ui:Szerokość (mm)}}. Domyślnie jest to 20 x 200 w A36.
3. W razie potrzeby ustaw {{ui:Materiał}} i {{ui:Obrót (°)}}. Obrót 90 stawia blachę na krawędzi.
4. Kliknij dwa przecięcia albo użyj formularza {{ui:Dodaj według siatki}}.

Nazwa profilu blachy zapisywana jest jako `PL<grubość>x<szerokość>`, na przykład PL20x200. Jej długość to odległość między dwoma punktami.

Aby zmienić rozmiar umieszczonej blachy, zaznacz ją i zmień {{ui:Grubość (mm)}} lub {{ui:Szerokość (mm)}}.

Blachy, które umieszczasz, są osobnymi elementami (znacznik p, zespół P). Blachy czołowe i blachy podstawy tworzone przez połączenia też są blachami, ale zmienia się je przez połączenie; zobacz [Blachy czołowe](topic:end-plates).

## Dodaj profil niestandardowy

Gdy potrzebnego przekroju nie ma w katalogu, utwórz go z wymiarów. Profil niestandardowy należy do modelu i jest zapisywany razem z nim. Aby używać go we wszystkich nowych modelach, zachowaj go w {{ui:Moje profile}}, zgodnie z opisem w sekcji „Zachowanie profilu dla nowych modeli” poniżej.

1. W panelu {{ui:Model}} po lewej otwórz {{ui:Profil niestandardowy}}.
2. Wpisz {{ui:Nazwa}}, na przykład `W8x18-custom` albo `RHS 120x80x5`. Nie może to być nazwa z katalogu ani wyglądać jak nazwa blachy.
3. Wybierz {{ui:Kształt}}: {{ui:Dwuteownik}}, {{ui:Ceownik}}, {{ui:Kątownik równoramienny}}, {{ui:Rura prostokątna}}, {{ui:Rura okrągła}} lub {{ui:Płaskownik}}.
4. Wypełnij pojawiające się wymiary, wszystkie w milimetrach:

| Kształt | Wymiary |
|---|---|
| Dwuteownik | Wysokość d, szerokość pasa bf, grubość środnika tw, grubość pasa tf, promień zaokrąglenia r (może wynosić 0) |
| Ceownik | Wysokość d, szerokość pasa bf, grubość środnika tw, grubość pasa tf (narożniki proste) |
| Kątownik równoramienny | Szerokość b (każde ramię), grubość t |
| Rura prostokątna | Wysokość h, szerokość b, grubość t (promień zewnętrznego narożnika 2t) |
| Rura okrągła | Średnica D, grubość t |
| Płaskownik | Szerokość b, grubość t |

5. Zostaw zaznaczone {{ui:Zachowaj w Moich profilach}}, aby profil był we wszystkich nowych modelach (zobacz poniżej), albo odznacz, aby zachować go tylko w tym modelu.
6. Wybierz {{ui:Dodaj profil}}.

Pasek stanu pokazuje: „Profil „…” dodano; znajduje się na każdej liście profili w grupie Niestandardowe.” Profil pojawia się na liście pod formularzem i na końcu każdej listy {{ui:Przekrój}}.

DetailCraft sprawdza, czy przekrój może istnieć. Zobaczysz komunikaty, na przykład: „Środnik i pasy nie mieszczą się w wysokości i szerokości.”, „Promień zaokrąglenia jest za duży dla pasa.” albo „Ścianka jest zbyt gruba.” Popraw liczby i ponownie wybierz {{ui:Dodaj profil}}.

### Co dostają profile niestandardowe

- Masę na metr z pola × 7850 kg/m³ (wymiary katalogowe używają opublikowanej masy).
- Własne dwuteowniki przyjmują otwory, wycięcia, blachy czołowe, pliki NC i rysunki warsztatowe jak dwuteowniki katalogowe.
- Własne płaskowniki zachowują się jak blachy.
- Własne ceowniki i rury przyjmują otwory; kątowniki i okrągłe rury jeszcze nie.

Własnego profilu nie można edytować ani usunąć z modelu po dodaniu (jeśli się pomylisz, od razu użyj {{key:Mod+Z}}). Poprawiony profil nazwij inaczej.

## Zachowanie profilu dla nowych modeli

{{ui:Moje profile}}, pod formularzem, to lista własnych profili niestandardowych. Jest przechowywana w tej przeglądarce, na tym komputerze, nie w pliku modelu ani na koncie.

- Profil dodany z zaznaczonym polem {{ui:Zachowaj w Moich profilach}} trafia na listę. Każdy nowy model, także ten, który DetailCraft otwiera przy starcie, zaczyna się od wszystkich tych profili na swoich listach profili.
- Profil już obecny w modelu, ale nieobecny na liście, ma obok przycisk {{ui:Zachowaj}}.
- W modelu, który nie ma jednego z tych profili (na przykład w starszym pliku), wybierz {{ui:Użyj tutaj}}, aby go dodać.
- {{ui:Usuń}} usuwa profil z listy. Modele, które już go używają, zachowują własną kopię.
- Otwarty model zachowuje profile zapisane w swoim pliku. Otwieranie pliku nigdy nie zmienia Twojej listy.
- Nazwa już obecna na liście z innymi wymiarami zostanie odrzucona: nadaj nowemu profilowi inną nazwę.
- Wyczyszczenie danych witryny w przeglądarce albo użycie innej przeglądarki lub komputera rozpoczyna od pustej listy. Okno prywatne nie może jej zachować; aplikacja o tym informuje.
