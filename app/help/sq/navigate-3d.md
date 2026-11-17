---
title: Lëvizja në pamjen 3D
summary: Rrotullo, lëviz dhe zmadho me një miu, panel prekjeje ose ekran me prekje, dhe kur të përdorësh Planimetrinë dhe Fasadën në vend të saj.
keywords: rrotullo, rrotullim, lëviz, zmadho, navigo, pamje, kamera, paneli i prekjes, prekje, planimetri, fasadë, përshtat, miu
from: 02c9c7b9
---

Pamja ka tre mënyra, të zgjedhura në shiritin e pamjes mbi të: {{ui:3D}}, {{ui:Planimetria}} dhe {{ui:Fasada}}. Butonat e miut bëjnë gjëra të ndryshme në 3D nga Planimetria dhe Fasada, kështu që lexo të dyja tabelat.

## Në 3D

:::mouse
| Për të | Bëj këtë |
|---|---|
| Rrotullo modelin | Tërhiq me butonin e majtë |
| Lëviz | Tërhiq me butonin e djathtë, ose mbaj {{key:Shift}} dhe tërhiq me butonin e majtë |
| Zmadho | Lëviz rrotën, ose tërhiq lart e poshtë me butonin e mesit (rota e shtypur) |
| Përzgjidh një pjesë | Kliko (një klikim që lëviz më pak se disa piksel) |
| Shiko të gjithë modelin | Butoni përshtat në skajin e djathtë të shiritit të pamjes |
:::

:::touch
| Për të | Bëj këtë |
|---|---|
| Rrotullo modelin | Tërhiq me një gisht |
| Lëviz | Tërhiq me dy gishta |
| Zmadho | Pinç me dy gishta |
| Përzgjidh një pjesë | Prek |
| Shiko të gjithë modelin | Butoni përshtat në skajin e djathtë të shiritit të pamjes |
:::

Kubi i pamjes në të djathtën e sipërme (nën shiritin e pamjes) rrotullohet me modelin: kliko një faqe, skaj ose qoshe për të parë nga aty, tërhiqe për ta rrotulluar, ose kliko butonin e shtëpisë për t'u kthyer në fillim. Shih [Kubi i pamjes](topic:view-cube).

Modeli rrotullohet rreth mesit të pamjes, dhe rota zmadhon drejt mesit të pamjes, jo drejt treguesit. Për të parë nga afër një qoshe, lëvize së pari në mes, pastaj zmadho.

## Në Planimetri dhe Fasadë

Këto pamje shohin drejt e modelin dhe nuk mund të rrotullohen.

:::mouse
| Për të | Bëj këtë |
|---|---|
| Lëviz | Tërhiq me butonin e majtë ose të djathtë |
| Zmadho | Lëviz rrotën, ose tërhiq lart e poshtë me butonin e mesit |
| Përzgjidh një pjesë | Kliko |
:::

:::touch
| Për të | Bëj këtë |
|---|---|
| Lëviz | Tërhiq me një gisht |
| Zmadho | Pinç me dy gishta (tërheqja me dy gishta lëviz edhe pamjen) |
| Përzgjidh një pjesë | Prek |
:::

## Në panelin e prekjes të Mac

:::mac
- **Zmadhim:** lëvize me dy gishta lart ose poshtë, ose pinço. Të dyja arrijnë te pamja si zmadhim.
- **Rrotullim (3D):** shtyp panelin e prekjes dhe tërhiq me një gisht. Nëse përdor prekjen për klikim, prekja e dyfishtë dhe tërheqja funksionon gjithashtu kur tërheqja është aktivizuar në **System Settings, Accessibility, Pointer Control, Trackpad Options**.
- **Lëvizje (3D):** mbaj {{key:Shift}} dhe tërhiq. Mbajtja e {{key:Ctrl}} ose {{key:Mod}} gjatë tërheqjes gjithashtu lëviz. Klikimi me dy gishta është një klikim i djathtë, por tërheqja me të është e vështirë në panelin e prekjes.
- **Lëvizje (Planimetri dhe Fasadë):** thjesht tërhiq.
- Një Magic Mouse nuk ka buton të mesit: përdor tërheqjen me {{key:Shift}} për të lëvizur dhe një lëvizje mbi sipërfaqen e tij për të zmadhuar.
:::

Më shumë për klikimin e djathtë dhe lëvizjen pa miun: [Tastet, miu dhe paneli i prekjes](common:keys).

## Planimetria dhe Fasada e lehtësojnë vendosjen

Në {{ui:3D}}, kryqëzimet në nivele të ndryshme mund të qëndrojnë njëri mbi tjetrin në ekran, dhe një klikim shkon te pika më e afërt. Në {{ui:Planimetria}} dhe {{ui:Fasada}} mund të zgjidhen vetëm pikat e nivelit ose të vijës së rrjetit që po shikon.

1. Zgjidh {{ui:Planimetria}}, pastaj zgjidh një nivel në listën pranë butonave. Pamja shikon poshtë te ai nivel; çdo gjë më shumë se 1.5 m mbi të hiqet.
2. Ose zgjidh {{ui:Fasada}}, pastaj zgjidh një vijë rrjeti me shkronjë ("Rrjeti A", "Rrjeti B" …). Pamja shikon drejt e te ajo vijë; shfaqet vetëm çeliku brenda 1 m prej saj.

Fasadat janë vetëm te vijat e rrjetit me shkronja. Për të punuar te një vijë rrjetesh me numra (një kornizë që shkon nga A te B), përdor {{ui:3D}}, ose vendos duke shkruar në formularin {{ui:Shto sipas rrjetit}}. Shih [Vendos kolona, trarë dhe diagonale](topic:place-members#place-by-grid-without-clicking).

## Përzgjedhja

- Kliko një pjesë për ta përzgjedhur. Ajo merr ngjyrën e theksimit dhe paneli {{ui:Vetitë}} e shfaq.
- Kliko hapësirë boshe, ose shtyp {{key:Esc}}, për të pastruar përzgjedhjen.
- Çeliku fiton ndaj betonit: një klikim te një kolonë brenda një themeli transparent përzgjedh kolonën. Kliko themelin larg kolonës, ose një nga shufrat e tij, për të përzgjedhur themelin.
- Klikimi i një bulonit ose i një pllake skaji përzgjedh lidhjen e saj.
- Në Planimetri dhe Fasadë, pjesët që janë hequr nuk mund të klikohen.
- Mbaj {{key:Shift}} (ose {{key:Ctrl}}, ose {{key:Mod}}) dhe kliko për të shtuar një pjesë te përzgjedhja ose për ta hequr; {{key:Mod+A}} përzgjedh gjithçka. Ende nuk ka përzgjedhje me dritare (tërheq një kuti). Çfarë mund të bësh me disa: [Kopjo, ngjit dhe dyfisho](topic:copy-paste).

Mund të përzgjedhësh edhe nga listat: kliko një shenjë te {{ui:Shenjat e elementëve}} në të majtë, një shenjë pjese te skeda {{ui:Lista e materialeve}}, ose {{ui:Përzgjidh}} pranë një rreshti te {{ui:Problemet}}.

## Nëse pamja duket e gabuar

- Ke humbur modelin? Zgjidh butonin përshtat.
- Pamja është bosh ose gri me një mesazh për WebGL: shih [Zgjidhja e problemeve](topic:troubleshooting#the-3d-view-is-missing).
- Gjithçka punon edhe pa pamjen 3D përveç klikimit në të: panelet, raportet dhe eksportet të gjitha funksionojnë, dhe {{ui:Shto sipas rrjetit}} vendos elementët duke shkruar.
