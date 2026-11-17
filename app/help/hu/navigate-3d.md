---
title: Mozgás a 3D nézetben
summary: Forgatás, eltolás és nagyítás egérrel, érintőpaddal vagy érintőképernyővel, és mikor használja ehelyett az alaprajzot és a homlokzatot.
keywords: forgatás, elforgatás, eltolás, nagyítás, navigálás, nézet, kamera, érintőpad, érintés, alaprajz, homlokzat, illesztés, egér
from: 02c9c7b9
---

A nézetnek három módja van, amelyet a fölötte lévő nézetsávban választhat ki: {{ui:3D}}, {{ui:Alaprajz}} és {{ui:Homlokzat}}. Az egér gombjai másként működnek 3D-ben, mint az alaprajzban és a homlokzatban, ezért olvassa el mindkét táblázatot.

## 3D-ben

:::mouse
| Cél | Teendő |
|---|---|
| A modell körbeforgatása | Húzás a bal gombbal |
| Eltolás | Húzás a jobb gombbal, vagy tartsa lenyomva a {{key:Shift}} billentyűt, és húzzon a bal gombbal |
| Nagyítás | Forgassa a görgőt, vagy húzzon fel-le a középső gombbal (a görgő benyomva) |
| Alkatrész kijelölése | Kattintson rá (olyan kattintás, amely néhány pixelnél kevesebbet mozdul) |
| A teljes modell megtekintése | A nézetsáv jobb végén lévő {{ui:Illesztés}} gomb |
:::

:::touch
| Cél | Teendő |
|---|---|
| A modell körbeforgatása | Húzás egy ujjal |
| Eltolás | Húzás két ujjal |
| Nagyítás | Csippentés két ujjal |
| Alkatrész kijelölése | Koppintson rá |
| A teljes modell megtekintése | A nézetsáv jobb végén lévő {{ui:Illesztés}} gomb |
:::

A jobb felső sarokban lévő nézetkocka (a nézetsáv alatt) a modellel együtt forog: kattintson egy lapra, élre vagy sarokra, hogy onnan nézzen rá, húzza a forgatáshoz, vagy kattintson a házikó gombjára a kiindulási nézethez való visszatéréshez. Lásd: [A nézetkocka](topic:view-cube).

A modell a nézet közepe körül fordul, a görgő pedig a nézet közepe felé nagyít, nem a mutató felé. Ha közelebbről szeretne megnézni egy sarkot, előbb tolja a nézet közepére, majd nagyítson.

## Alaprajzban és homlokzatban

Ezek a nézetek egyenesen a modellre néznek, és nem foroghatók.

:::mouse
| Cél | Teendő |
|---|---|
| Eltolás | Húzás a bal vagy a jobb gombbal |
| Nagyítás | Forgassa a görgőt, vagy húzzon fel-le a középső gombbal |
| Alkatrész kijelölése | Kattintson rá |
:::

:::touch
| Cél | Teendő |
|---|---|
| Eltolás | Húzás egy ujjal |
| Nagyítás | Csippentés két ujjal (két ujj húzása is eltol) |
| Alkatrész kijelölése | Koppintson rá |
:::

## Macen érintőpaddal

:::mac
- **Nagyítás:** húzzon fel vagy le két ujjal, vagy csippentsen. Mindkettő nagyításként jut el a nézetbe.
- **Forgatás (3D):** nyomja le az érintőpadot, és húzzon egy ujjal. Ha a koppintással kattintást használ, a dupla koppintás és húzás is működik, ha a húzás be van kapcsolva a **Rendszerbeállítások, Akadálymentesítés, Mutatóvezérlés, Érintőpad-beállítások** menüpontban.
- **Eltolás (3D):** tartsa lenyomva a {{key:Shift}} billentyűt, és húzzon. A {{key:Ctrl}} vagy a {{key:Mod}} tartása húzás közben szintén eltol. A két ujjas kattintás jobb gombos kattintás, de érintőpadon ezzel húzni kényelmetlen.
- **Eltolás (alaprajz és homlokzat):** csak húzzon.
- A Magic Mouse-nak nincs középső gombja: a {{key:Shift}}-es húzás eltol, a felületén végzett csúsztatás nagyít.
:::

Több a jobb gombos kattintásról és az egér nélküli eltolásról: [Billentyűk, egerek és érintőpadok](common:keys).

## Az alaprajz és a homlokzat megkönnyíti az elhelyezést

3D-ben a különböző szinteken lévő metszéspontok a képernyőn egymás fölé eshetnek, és a kattintás a legközelebbi pontra megy. Az alaprajzban és a homlokzatban csak a megtekintett szint vagy rácsvonal pontjai választhatók ki.

1. Válassza az {{ui:Alaprajz}} lehetőséget, majd a gombok melletti listából válasszon egy szintet. A nézet arra a szintre néz le; minden, ami az ettől számított 1,5 m-nél magasabb, ki van vágva.
2. Vagy válassza a {{ui:Homlokzat}} lehetőséget, majd egy betűvel jelölt rácsvonalat („A rács”, „B rács” …). A nézet egyenesen a vonalra néz; csak az attól 1 m-en belüli acélszerkezet látszik.

A homlokzatok csak betűvel jelölt rácsvonalakon érhetők el. Számozott rácsvonalak során (egy A-tól B-ig tartó keret) való munkához használja a 3D nézetet, vagy helyezzen el a {{ui:Hozzáadás rács szerint}} űrlapon, gépelve. Lásd: [Oszlopok, gerendák és merevítők elhelyezése](topic:place-members#place-by-grid-without-clicking).

## Kijelölés

- Kattintson egy alkatrészre a kijelöléséhez. Kiemelő színt kap, és a {{ui:Tulajdonságok}} panelen látszik.
- Kattintson üres helyre, vagy nyomja meg a {{key:Esc}} billentyűt a kijelölés törléséhez.
- Az acél győz a beton felett: egy oszlopra kattintás egy áttetsző alap belsejében az oszlopot jelöli ki. Az alap kijelöléséhez kattintson az oszloptól távol eső alaprészre, vagy valamelyik vasalására.
- Csavarra vagy véglemezre kattintva a kapcsolatát jelöli ki.
- Az alaprajzban és a homlokzatban a kivágott alkatrészekre nem lehet kattintani.
- Tartsa lenyomva a {{key:Shift}} (vagy a {{key:Ctrl}}, vagy a {{key:Mod}}) billentyűt, és kattintson egy alkatrészre, hogy hozzáadja a kijelöléshez vagy eltávolítsa belőle; a {{key:Mod+A}} mindent kijelöl. Egyelőre nincs ablakos (dobozhúzásos) kijelölés. Több elemmel végezhető műveletek: [Másolás, beillesztés és kettőzés](topic:copy-paste).

A kijelölést listákból is megteheti: kattintson a bal oldali {{ui:Alkatrészjelek}} listában lévő jelölésre, az {{ui:Anyagjegyzék}} lap alkatrészjelére, vagy a {{ui:Problémák}} listában egy sor melletti {{ui:Kijelölés}} gombra.

## Ha a nézet hibásnak tűnik

- Elveszett a modell? Válassza az {{ui:Illesztés}} gombot.
- A nézet üres vagy szürke, és WebGL-re vonatkozó üzenet jelenik meg: lásd [Hibaelhárítás](topic:troubleshooting#the-3d-view-is-missing).
- A 3D nézet nélkül is minden működik, kivéve a benne való kattintást: a panelek, jelentések és exportok mind futnak, és a {{ui:Hozzáadás rács szerint}} gépelve helyezi el a tagokat.
