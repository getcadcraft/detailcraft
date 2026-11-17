---
title: Liigu 3D-vaates
summary: Pööra, nihuta ja suumi hiire, puuteplaadi või puuteekraaniga ning millal kasutada hoopis Plaani ja Vaadet.
keywords: orbit, pööra, nihuta, suumi, navigeeri, vaade, kaamera, puuteplaat, puuteekraan, plaan, vaade, mahuta, hiir
from: 02c9c7b9
---

Vaatel on kolm režiimi, mida valitakse selle kohal olevalt vaateribalt: {{ui:3D}}, {{ui:Plaan}} ja {{ui:Vaade}}. Hiire nupud teevad 3D-vaates midagi muud kui plaanil ja vaates, seega loe mõlemad tabelid.

## 3D-vaates

:::mouse
| Soov | Tee nii |
|---|---|
| Pööra mudelit ümber | Lohista vasaku nupuga |
| Nihuta | Lohista parema nupuga või hoia {{key:Shift}} all ja lohista vasaku nupuga |
| Suumi | Keera ratast või lohista üles ja alla keskmise nupuga (ratas vajutatud) |
| Vali detail | Klõpsa sellel (klõps, mis liigub vähem kui mõne pikslit) |
| Vaata kogu mudelit | Mahuta-nupp vaateriba paremas otsas |
:::

:::touch
| Soov | Tee nii |
|---|---|
| Pööra mudelit ümber | Lohista ühe sõrmega |
| Nihuta | Lohista kahe sõrmega |
| Suumi | Näpista kahe sõrmega |
| Vali detail | Puuduta seda |
| Vaata kogu mudelit | Mahuta-nupp vaateriba paremas otsas |
:::

Vaate kuup paremal üleval (vaateriba all) pöördub koos mudeliga: klõpsa tahul, servale või nurgal, et vaadata sealt, lohista seda pööramiseks või klõpsa selle majanuppu, et naasta algseisu. Vt [Vaate kuup](topic:view-cube).

Mudel pöörab ümber vaate keskpunkti ja ratas suumib vaate keskpunkti poole, mitte osuti poole. Et näha ühte nurka lähedalt, nihuta see esmalt keskele ja suumi siis.

## Plaanil ja vaates

Need vaated vaatavad mudelile otse peale ja neid ei saa pöörata.

:::mouse
| Soov | Tee nii |
|---|---|
| Nihuta | Lohista vasaku või parema nupuga |
| Suumi | Keera ratast või lohista üles ja alla keskmise nupuga |
| Vali detail | Klõpsa sellel |
:::

:::touch
| Soov | Tee nii |
|---|---|
| Nihuta | Lohista ühe sõrmega |
| Suumi | Näpista kahe sõrmega (kahe sõrme lohistamine nihutab ka) |
| Vali detail | Puuduta seda |
:::

## Macil puuteplaadiga

:::mac
- **Suumi:** libista kahe sõrmega üles või alla või näpista. Mõlemad jõuavad vaatesse suumina.
- **Pööra (3D):** vajuta puuteplaati ja lohista ühe sõrmega. Kui kasutad puudutusega klõpsamist, töötab ka topeltpuudutus ja lohistamine, kui lohistamine on sisse lülitatud sättes Süsteemi sätted, Juurdepääsetavus, Osuti juhtimine, Puuteplaadi suvandid.
- **Nihuta (3D):** hoia {{key:Shift}} all ja lohista. Lohistamine ka {{key:Ctrl}} või {{key:Mod}} all nihutab samuti. Kahe sõrmega klõps on parem klõps, aga lohistamine sellega on puuteplaadil tülikas.
- **Nihuta (Plaan ja Vaade):** lihtsalt lohista.
- Magic Mouse'il ei ole keskmist nuppu: kasuta nihutamiseks {{key:Shift}}-lohistamist ja suumimiseks libistamist üle selle pinna.
:::

Lisa paremklõpsu ja nihutamise kohta ilma hiireta: [Klahvid, hiired ja puuteplaadid](common:keys).

## Plaan ja Vaade teevad paigutamise lihtsaks

{{ui:3D}}-vaates võivad erinevatel tasanditel olevad ristumispunktid ekraanil üksteise peale langeda ja klõps läheb lähimale punktile. Režiimides {{ui:Plaan}} ja {{ui:Vaade}} saab valida ainult selle tasandi või ruudustikujoone punktid, mida vaatad.

1. Vali {{ui:Plaan}} ja vali nuppude kõrval olevast loendist tasand. Vaade vaatab sellele tasandile alla; kõik, mis on rohkem kui 1,5 m selle kohal, on lõigatud ära.
2. Või vali {{ui:Vaade}} ja vali tähistatud ruudustikujoon („Ruudustik A“, „Ruudustik B“ …). Vaade vaatab sellele joonele otse; näidatakse ainult terast, mis on sellest 1 m piires.

Vaated on saadaval ainult tähtedega tähistatud ruudustikujoontel. Et töötada numbritega ruudustiku joonte reas (raam A-st B-ni), kasuta {{ui:3D}}-vaadet või paiguta vormis {{ui:Lisa ruudustiku järgi}} sisestades. Vt [Paiguta postid, talad ja diagonaalid](topic:place-members#place-by-grid-without-clicking).

## Valimine

- Klõpsa detailil, et see valida. See saab esiletõstmisvärvi ja paneel {{ui:Omadused}} näitab seda.
- Klõpsa tühjal alal või vajuta {{key:Esc}}, et valik tühjendada.
- Teras võidab betooni: klõps posti peal läbipaistvas aluses valib posti. Klõpsa alusel postist eemal või ühel selle varrastest, et valida alus.
- Poldi või otsaplaadi klõps valib selle liitmiku.
- Plaanil ja vaates ei saa lõigatud ära detaile klõpsata.
- Hoia {{key:Shift}} (või {{key:Ctrl}}, või {{key:Mod}}) all ja klõpsa, et detail valikule lisada või sealt eemaldada; {{key:Mod+A}} valib kõik. Akna (kasti lohistamise) valikut ei ole veel. Mida saad mitmega teha: [Kopeeri, kleebi ja dubleeri](topic:copy-paste).

Valida saad ka loenditest: klõpsa vasakul paneelil märgisel {{ui:Detailimärgised}}, vahekaardil {{ui:Materjalinimekiri}} detailimärgisel või rea kõrval jaotises {{ui:Probleemid}} nupul {{ui:Vali}}.

## Kui vaade näib vale

- Kadus mudel? Vali mahuta-nupp.
- Vaade on tühi või hall ning kuvatakse WebGL-i teade: vt [Tõrkeotsing](topic:troubleshooting#the-3d-view-is-missing).
- Kõik töötab ka ilma 3D-vaateta, välja arvatud klõpsamine selles: paneelid, aruanded ja eksportid töötavad kõik ning {{ui:Lisa ruudustiku järgi}} paigutab liikmed sisestades.
