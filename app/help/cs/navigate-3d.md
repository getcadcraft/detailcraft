---
title: Pohyb ve 3D pohledu
summary: Otáčení, posun a zoom myší, touchpadem nebo dotykovou obrazovkou a kdy místo toho použít Půdorys a Pohled.
keywords: obíhání, otáčení, posun, zoom, navigace, pohled, kamera, touchpad, dotyk, půdorys, pohled, přizpůsobit, myš
from: 02c9c7b9
---

Pohled má tři režimy, zvolené v liště pohledu nad ním: {{ui:3D}}, {{ui:Půdorys}} a {{ui:Pohled}}. Tlačítka myši dělají ve 3D něco jiného než v Půdorysu a Pohledu, takže si přečtěte obě tabulky.

## Ve 3D

:::mouse
| Chcete | Udělejte toto |
|---|---|
| Otočit model kolem | Táhněte levým tlačítkem |
| Posunout | Táhněte pravým tlačítkem, nebo podržte {{key:Shift}} a táhněte levým tlačítkem |
| Zoom | Otočte kolečkem, nebo táhněte nahoru a dolů prostředním tlačítkem (kolečko stisknuté) |
| Vybrat díl | Klikněte na něj (kliknutí, které se pohne méně než o několik pixelů) |
| Vidět celý model | Tlačítko přizpůsobení na pravém konci lišty pohledu |
:::

:::touch
| Chcete | Udělejte toto |
|---|---|
| Otočit model kolem | Táhněte jedním prstem |
| Posunout | Táhněte dvěma prsty |
| Zoom | Stáhněte nebo roztáhněte dva prsty |
| Vybrat díl | Klepněte na něj |
| Vidět celý model | Tlačítko přizpůsobení na pravém konci lišty pohledu |
:::

Pohledová kostka vpravo nahoře (pod lištou pohledu) se otáčí s modelem: klikněte na stěnu, hranu nebo roh, abyste se podívali odtud, táhněte ji pro otočení, nebo klikněte na její tlačítko domů pro návrat na začátek. Viz [Pohledová kostka](topic:view-cube).

Model se otáčí kolem středu pohledu a kolečko přibližuje ke středu pohledu, ne k ukazateli. Chcete-li pozorně prohlédnout jeden roh, nejdříve jej posuňte do středu a pak přibližte.

## V Půdorysu a Pohledu

Tyto pohledy se dívají přímo na model a nelze je otáčet.

:::mouse
| Chcete | Udělejte toto |
|---|---|
| Posunout | Táhněte levým nebo pravým tlačítkem |
| Zoom | Otočte kolečkem, nebo táhněte nahoru a dolů prostředním tlačítkem |
| Vybrat díl | Klikněte na něj |
:::

:::touch
| Chcete | Udělejte toto |
|---|---|
| Posunout | Táhněte jedním prstem |
| Zoom | Stáhněte nebo roztáhněte dva prsty (táhnutí dvěma prsty také posouvá) |
| Vybrat díl | Klepněte na něj |
:::

## Touchpad na Macu

:::mac
- **Zoom:** přejeďte dvěma prsty nahoru nebo dolů, nebo stáhněte či roztáhněte prsty. Obojí se projeví jako zoom.
- **Otočit (3D):** stiskněte touchpad a táhněte jedním prstem. Pokud používáte klepnutí pro kliknutí, funguje i dvojité klepnutí a tažení, je-li tažení zapnuto v **Nastavení systému, Přístupnost, Ovládání ukazatele, Možnosti touchpadu**.
- **Posun (3D):** podržte {{key:Shift}} a táhněte. Podržení {{key:Ctrl}} nebo {{key:Mod}} při tažení také posouvá. Dvouprstové klepnutí je pravé kliknutí, ale tažení s ním je na touchpadu nepohodlné.
- **Posun (Půdorys a Pohled):** prostě táhněte.
- Magic Mouse nemá prostřední tlačítko: k posunu použijte tažení s {{key:Shift}} a k zoomu přejetí po jeho povrchu.
:::

Více o pravém kliknutí a posunu bez myši: [Klávesy, myši a touchpady](common:keys).

## Půdorys a Pohled usnadňují umisťování

Ve {{ui:3D}} se průsečíky v různých úrovních mohou na obrazovce překrývat a kliknutí jde na nejbližší tečku. V {{ui:Půdorys}} a {{ui:Pohled}} lze vybrat jen tečky úrovně nebo osy, na kterou se díváte.

1. Zvolte {{ui:Půdorys}} a pak vyberte úroveň v seznamu vedle tlačítek. Pohled se dívá dolů na tuto úroveň; cokoli více než 1.5 m nad ní je odříznuto.
2. Nebo zvolte {{ui:Pohled}} a pak vyberte písmenem označenou osu („Osa A“, „Osa B“ …). Pohled se dívá přímo na tuto osu; zobrazí se jen ocel do 1 m od ní.

Pohledy jsou jen na písmenných osách. Pro práci na řadě číslovaných os (rám od A do B) použijte {{ui:3D}}, nebo umísťujte psaním do formuláře {{ui:Přidat podle os}}. Viz [Umístění sloupů, nosníků a ztužidel](topic:place-members#place-by-grid-without-clicking).

## Výběr

- Kliknutím na díl jej vyberete. Změní barvu zvýraznění a panel {{ui:Vlastnosti}} jej zobrazí.
- Kliknutím do prázdného prostoru nebo stisknutím {{key:Esc}} zrušíte výběr.
- Ocel má přednost před betonem: kliknutí na sloup uvnitř průhledné patky vybere sloup. Kliknutím na patku mimo sloup nebo na některý její prut vyberete patku.
- Kliknutí na šroub nebo koncový plech vybere jeho spoj.
- V Půdorysu a Pohledu nelze klikat na díly, které jsou odříznuty.
- Podržte {{key:Shift}} (nebo {{key:Ctrl}}, nebo {{key:Mod}}) a klikněte, abyste díl přidali do výběru nebo jej odebrali; {{key:Mod+A}} vybere vše. Výběr oknem (tažením rámečku) zatím není k dispozici. Co lze dělat s více prvky: [Kopírovat, vložit a duplikovat](topic:copy-paste).

Vybrat můžete také ze seznamů: kliknutím na označení v {{ui:Označení dílů}} vlevo, na označení dílu na kartě {{ui:Kusovník}}, nebo na {{ui:Vybrat}} vedle řádku v {{ui:Problémy}}.

## Když pohled vypadá špatně

- Ztratili jste model? Zvolte tlačítko přizpůsobení.
- Pohled je prázdný nebo šedý se zprávou o WebGL: viz [Řešení potíží](topic:troubleshooting#the-3d-view-is-missing).
- Vše ostatní funguje i bez 3D pohledu kromě klikání v něm: panely, přehledy a exporty běží a {{ui:Přidat podle os}} umísťuje prvky psaním.
