---
title: Nastavenia DetailCraft
summary: Nové prvky začnite ako americké alebo európske profily, nastavte, o koľko sa kópia posunie pri duplikovaní, vyberte, či kópie prinesú aj svoje spoje, a zobrazte alebo skryte skrutky v 3D zobrazení.
keywords: nastavenia, predvoľby, veľkosť listu, formát papiera, výkresy, možnosti, oceľ, aisc, en, európske profily, americké profily, metrické profily, predvolený profil, trieda, S355, A992, posun duplikovania, posun vloženia, kopírovať spoje, skrutky, kotevné tyče, skryť skrutky, obnoviť
from: e46cea57
---

Otvorte {{ui:Nastavenia}} ozubeným kolesom na lište aplikácie alebo {{key:Mod+,}}. Prvá karta, {{ui:DetailCraft}}, obsahuje nastavenia patriace tejto aplikácii; {{ui:Všeobecné}} obsahuje tie, ktoré zdieľajú všetky aplikácie CadCraft (motív, panel nástrojov, panely). Nastavenia DetailCraft existujú iba v aplikácii: meníte ich tu, účinkujú okamžite a tento prehliadač si ich pamätá. Neukladajú sa do súboru modelu.

## Nové prvky

S akými profilmi a triedami začínajú nástroje na umiestňovanie:

| Nástroj | Americké profily (AISC), A992 | Európske profily (EN), S355 |
|---|---|---|
| {{ui:Nosník}} | W16x26, A992 | IPE300, S355 |
| {{ui:Stĺp}} | W12x50, A992 | HEB200, S355 |
| {{ui:Diagonála}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Doska}} | A36 | S355 |

Americké profily sú východiskom. Európska voľba používa HEA160 pre diagonály, pretože katalóg EN v DetailCraft zatiaľ nemá duté profily ([Katalóg profilov](topic:profile-catalog)). Pre ďalší kus môžete stále vybrať ľubovoľný profil a triedu na paneli {{ui:Vlastnosti}}, kým je zapnutý nástroj na umiestňovanie. Prvky už v modeli si ponechávajú vlastný profil a triedu.

## Duplikovanie a vloženie

- **Posun (mm)**: x, y a z. {{ui:Duplikovať}} ({{key:Mod+D}}) umiestni kópiu takto ďaleko od originálu a formulár {{ui:Prilepiť s posunom (mm, od originálu)}} sa s ním začína. Začína na 6000, 0, 0: jedno pole dĺžky 6 m pozdĺž číslovaných osí. Nastavte ho na rozstup polí alebo na výšku úrovne v z, aby ste skopírovali podlažie nahor.
- **Kopírovať čelné a pätné dosky spolu s ich prvkami** (spočiatku zapnuté): spoj sa prenesie s kópiou, iba keď sa skopírujú všetky prvky, ktoré spája. Vypnite ho, ak chcete kopírovať prvky a pätky bez ich spojov, napríklad aby ste na kópii vyskúšali iný spoj.

Pozri [Kopírovanie, vloženie a duplikovanie](topic:copy-paste).

## 3D zobrazenie

**Zobraziť skrutky a kotevné tyče** (spočiatku zapnuté). Vypnite to, aby sa skryli v zobrazení a aby bolo vidieť otvory a dosky pri preplnenom spoji. Skryté skrutky sa nedajú kliknúť; kliknite na dosku, aby ste vybrali spoj. Kusovník, výkresy a každý export stále obsahujú každú skrutku a tyč.

## Indikátor v rohu

Čo sa zobrazí v rohu 3D zobrazenia: **Kocka pohľadu** (východisková; vpravo hore – kliknutím na stenu, hranu alebo roh sa pozriete odtiaľ, ťahaním ju obiehate, ťahaním jej kruhu kompasu otáčate model), **Ikona osí** (malá značka X, Y, Z vľavo dole, ktorá sa otáča s pohľadom: X červená, Y zelená, Z modrá) alebo **Žiadne**. Len v {{ui:3D}}; {{ui:Pôdorys}} a {{ui:Pohľad}} nezobrazujú ani jedno. Pozri [Kocka pohľadu](topic:view-cube).

## Obnovenie

{{ui:Obnoviť nastavenia DetailCraft}} v dolnej časti dialógového okna vráti tieto nastavenia na začiatok (americké profily, posun 6000, 0, 0, spoje skopírované, skrutky zobrazené) spolu s nastaveniami {{ui:Všeobecné}}.

## Výkresy

**Veľkosť listu**: listy výkresov a dielenských výkresov sa tvoria na šírku: A4, A3 (východisková), A2, A1, ANSI B, ANSI C alebo ANSI D. Okná {{ui:Výkresy}} a dielenských výkresov majú rovnaký zoznam. Pozri [Všeobecné usporiadanie a výkresy zostáv](topic:drawings).

## Výstuž

- **Názvy prútov ASTM**: #3 až #11, alebo mäkké metrické #10 až #36 pre tie isté prúty.
- **Kódy tvarov výkazu ohýbania**: S, L, U z DetailCraft; typy podľa ACI 315; alebo tvarové kódy podľa BS 8666. Pozri [Referencia výstuže](topic:rebar-reference).

## Výber ťahaním

**Obdĺžnik** (ako predtým) alebo **Laso**: voľná čiara, pričom {{key:Space}} prepína medzi vnútrom, dotykom a ohradou počas ťahania. Pozri [Výber oknom](topic:select-and-change#select-with-a-window).
