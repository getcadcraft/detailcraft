---
title: Byrjun með DetailCraft
summary: Hvað DetailCraft gerir núna, hvernig á að opna það og fyrsta líkan frá netlínum upp í verkstæðisteikningu á tíu mínútum.
keywords: byrjun, fyrsta líkan, inngangur, smíðateikningar, stál, steypustyrktarjárn, fljótleg byrjun, kennsla, yfirlit
from: e4f16bbe
---

DetailCraft er forritið fyrir smíðateikningar úr stáli og steypustyrktarjárni í CadCraft-fjölskyldunni. Þú býrð til þrívíddarlíkan af stálgrind á netlínum og kótum, tengir það og færð það sem verkstæðið þarf: hluta- og samsetningarmerkingar, efnislista, einstakar verkstæðisteikningar í PDF, DSTV NC-skrár, IFC-líkan og beygjulista fyrir undirstöðurnar.

Þetta er snemmbúin útgáfa. Hún gerir stuttan lista af hlutum vel í stað þess að gera allt í einu. Lestu [Hvað er ekki enn komið](topic:not-built-yet) áður en þú skipuleggur raunverulega vinnu í kringum hana.

## Hvað það gerir núna

- Netlínur og kótar sem þú slærð inn, í millimetrum.
- Súlur, bitar, skástífur og plötur úr birtum sniðasöfnum (AISC W, S, C, L, HSS og Pipe; evrópsk IPE, HEA, HEB og UPN; bresk UB, UC, PFC, EA, UEA, SHS, RHS og CHS), auk þinna eigin breytanlegu sniða.
- Tvær tengingar: boltuð endaplata frá bita í súlu-flans og súlu-undirplata með fjórum akkerisstöngum. Hvor um sig má afrita í hverja svipaða tengingu.
- Göt og úrtökur sem þú slærð inn eftir staðsetningu.
- Ferhyrndar einstakar undirstöður með neðra neti og byrjunarstöngum.
- Hluta- og samsetningarmerkingar sem uppfærast sjálfkrafa eftir hverja breytingu.
- Útflutningur: IFC4, DSTV NC-skrár (I-snið og plötur), efnislisti sem CSV, beygjulisti sem CSV og verkstæðisteikning í PDF af einum hluta.

## Opna DetailCraft

1. Opnaðu DetailCraft í skjáborðsvafra: Chrome, Edge, Firefox eða Safari. Sjá [Vafrar og tölvur](common:browsers).
2. Bíddu þar til skjárinn fyllist. Stöðustikan neðst segir „Tilbúið. Opnaðu sýnishornið, eða stilltu netlínur og kóta og byrjaðu að staðsetja einingar.“

Líkansýnin þarfnast þrívíddargrafík (WebGL). Ef miðja skjásins segir „Þessi vafri gat ekki ræst þrívíddargrafík (WebGL)“, sjá [Úrlausn vandamála](topic:troubleshooting#the-3d-view-is-missing).

:::note
Líkönin þín eru áfram á tölvunni þinni. Opnun líkans les það í vafranum og vistun sækir skrá. Ekkert er sent upp. Skýjavistun er ekki enn í boði. Sjá [Hvert skrárnar þínar fara](common:your-files). Til að nota DetailCraft síðar án nettengingar skaltu velja {{ui:Vista til notkunar án nettengingar}} í forritastikunni einu sinni meðan þú ert á netinu; sjá [Vinna án nettengingar](common:offline).
:::

:::offline
Þú ert án nettengingar. DetailCraft virkar án tengingar aðeins ef það var vistað til notkunar án nettengingar fyrst: hnappurinn {{ui:Vista til notkunar án nettengingar}} í forritastikunni sýnir þá {{ui:Tilbúið án nettengingar}}. Sjá [Vinna án nettengingar](common:offline).
:::

## Skoðaðu sýnishornið fyrst

Fljótlegasta leiðin til að sjá hvað DetailCraft býr til er sýnishornsgrindin.

1. Veldu {{ui:Sýnishorn}} í hópnum {{ui:Skrá}} á verkfæraslánni.
2. Sýnin sýnir tveggja bila grind: sex súlur með undirplötum, fjóra bita með endaplötum, eina skástífu og sjö undirstöður með steypustyrktarjárni.
3. Smelltu á bita. Spjaldið {{ui:Eiginleikar}} hægra megin sýnir merkingu hans, skurðarlengd, þyngd og götin sem endaplöturnar gerðu.
4. Opnaðu flipann {{ui:Efnislisti}} neðst til að sjá hverja hlutamerkingu með fjölda og þyngd.

Leiðsögnin [Skoðaðu sýnishornsgrindina](topic:sample-model) fer í gegnum hana lið fyrir lið.

## Fyrsta líkanið þitt

Nýtt líkan hefur nú þegar netlínur 1 til 3 og A til B við 6000 mm og tvo kóta, Kóti 1 við 0 og Kóti 2 við 4000.

1. Veldu {{ui:Nýtt}}. Ef núverandi líkan hefur breytingar spyr DetailCraft hvort þú viljir vista þær fyrst.
2. Veldu {{ui:Grunnmynd}} fyrir ofan sýnina. Kótalistinn við hliðina velur Kóti 1.
3. Veldu {{ui:Súla}} á verkfæraslánni eða ýttu á {{key:C}}.
4. Smelltu á netlínuskurðpunktinn A/1. W12x50-súla birtist frá Kóti 1 upp í Kóti 2. Stöðustikan segir hvert hún fór.
5. Smelltu á B/1, A/2 og B/2 til að setja þrjár í viðbót.
6. Veldu Kóti 2 í kótalistanum og veldu síðan {{ui:Biti}} eða ýttu á {{key:B}}.
7. Smelltu á A/1, síðan á A/2. W16x26-bitinn tengir tvo súlutoppa, með efsta yfirborð stálsins á kótanum.
8. Ýttu á {{key:Esc}} til að fara aftur í {{ui:Velja}} og smelltu síðan á bitann.
9. Veldu {{ui:Endaplötur}} í hópnum {{ui:Tengja}}. Báðir endar fá boltaða endaplötu, bitinn er skorinn til að passa og fyrsta endaplatan er nú valin.
10. Smelltu aftur á bitann.
11. Veldu {{ui:Verkstæðisteikning}} í hópnum {{ui:Útkoma}}. Forskoðun á verkstæðisteikningu bitans opnast. Veldu {{ui:Sækja PDF}}.
12. Ýttu á {{key:Mod+S}} til að vista líkanið. Vafrinn sækir `Untitled.detailcraft.json`.

Endurnefndu líkanið í reitnum {{ui:Heiti}} efst til vinstri áður en þú vistar, svo að skráin og allar útflutningsskrár beri nafnið þess.

## Hvert skal halda næst

- [Yfirferð um skjáinn](topic:workspace)
- [Setja upp netlínur og kóta](topic:grids-and-levels)
- [Hreyfast um þrívíddarsýnina](topic:navigate-3d), með mús, snertiborði eða snertiskjá
- [Frá öðrum hugbúnaði fyrir smíðateikningar](topic:coming-from), ef þú þekkir stóran pakka fyrir smíðateikningar
- [Notkun þessarar hjálpar](common:help)
