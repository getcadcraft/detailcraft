---
title: Kostka pohledu
summary: Klikněte na stěnu, hranu nebo roh kostky v rohu zobrazení, abyste se podívali odtamtud; tažením ji otáčejte, otočte kruh kompasu, přejděte kolem pohledu čelem a vraťte se domů.
keywords: kostka pohledu, viewcube, kostka, kompas, sever, výchozí pohled, standardní pohledy, shora, zepředu, zprava, iso, roh, hrana, obíhání, otočení pohledu, ikona os, indikátor rohu, navigace
from: 3666ea8a
---

Kostka pohledu sídlí vpravo nahoře v 3D zobrazení, pod lištou zobrazení (pouze v {{ui:3D}}: {{ui:Půdorys}} a {{ui:Pohled}} se již dívají kolmo na model). Otáčí se spolu s pohledem, takže vždy ukazuje, kam se díváte: {{ui:Shora}} je nahoře, {{ui:Zepředu}} směřuje na jih (na stranu, ze které se písmenné osy vidí v {{ui:Pohled}}), {{ui:Zprava}} směřuje na východ, podél číslovaných os. Zůstává průhledná, dokud na ni nemíříte.

## Pohled ze strany, z hrany nebo z rohu

1. Ukažte na kostku. Část pod ukazatelem se rozsvítí: střed stěny, hrana (rozsvítí se na obou stěnách, které sdílí) nebo roh (na všech třech stěnách).
2. Klikněte na ni. Zobrazení se otočí tak, aby se díváte odtamtud, přičemž zachová střed i přiblížení.

Na kostce je 26 míst ke kliknutí: 6 stěn ({{ui:Shora}}, {{ui:Zdola}}, {{ui:Zepředu}}, {{ui:Zezadu}}, {{ui:Zleva}}, {{ui:Zprava}}), 12 hran a 8 rohů. Roh dá klasický tříčtvrteční pohled; hrana vypadá na půl cesty mezi dvěma stěnami.

Pohled na stěnu kostky je 3D pohled, nikoli {{ui:Půdorys}} nebo {{ui:Pohled}}: nic se neodřezává a model lze stále otáčet.

## Obíhání tažením kostky

Tažením kostky otočíte zobrazení, stejně jako obíháním přímo v zobrazení. Tah se nikdy nebere jako kliknutí, takže můžete kostku uchopit kdekoli.

## Kruh kompasu

Kruh pod kostkou nese písmena N, E, S a W.

- **Táhněte kruhem**, aby se model otočil kolem svislé osy, jako by stál na otočném stolku. Kruh sleduje ukazatel.
- **Klikněte na písmeno**, abyste se podívali z této strany, se zachováním sklonu pohledu dolů. V pohledu přímo shora se písmeno, na které kliknete, přesune na spodní okraj obrazovky.

## Pohledy čelem: šipky

Když se díváte přímo na stěnu, kolem kostky se objeví malé šipky:

- Čtyři **trojúhelníky** přivedou stěnu na dané straně doprostřed: trojúhelník nad kostkou ukazuje stěnu, která byla nahoře, a tak dále.
- Dvě **zakřivené šipky** vpravo nahoře otočí obrázek o čtvrt otáčky po směru nebo proti směru hodinových ručiček, aniž se změní stěna, na kterou se díváte. Použijte je k otočení půdorysu tak, aby se dlouhá stěna táhla přes obrazovku.

## Domů

Tlačítko domečku vlevo nahoře u kostky vrátí výchozí tříčtvrteční pohled a přizpůsobí celý model zobrazení, stejně jako tlačítko přizpůsobení. {{key:Home}} dělá totéž, když má kostka zaměření klávesnice.

## Klávesnicí

Přejděte na kostku pomocí {{key:Tab}}, potom:

| Klávesa | Co dělá |
|---|---|
| {{key:left}} / {{key:right}} | vybere stranu, hranu nebo roh kolem kostky, po osminách otáčky (čtečky obrazovky řeknou, který) |
| {{key:up}} / {{key:down}} | vybere vyšší nebo nižší prvek, až na {{ui:Shora}} nebo dolů na {{ui:Zdola}} |
| {{key:Enter}} nebo {{key:Space}} | podívá se z vybraného |
| {{key:Shift+left}} / {{key:Shift+right}} | otočí zobrazení o čtvrt otáčky kolem svislé osy |
| {{key:Home}} | výchozí pohled |
| {{key:Esc}} | opustí kostku |

Klávesy stisknuté na kostce zůstávají u kostky: nespouštějí nástroje DetailCraft.

## Místo toho ikona os nebo nic

Otevřete {{ui:Nastavení}} ({{key:Mod+,}}), kartu {{ui:DetailCraft}}, a u **Indikátor rohu** nastavte {{ui:Kostka pohledu}} (výchozí), {{ui:Ikona os}} (malá značka X, Y, Z vlevo dole: X červeně, Y zeleně, Z modře) nebo {{ui:Žádný}}. Tento prohlížeč si volbu pamatuje. Viz [Nastavení DetailCraft](topic:settings#corner-indicator).
