---
title: Suriin ang mga concrete member at gumawa ng seismic load
summary: Itakda ang mga bar ng concrete na beam at column, suriin ang mga ito ayon sa ACI 318-19, gumawa ng equivalent lateral force ayon sa ASCE 7-22 sa mga rigid na palapag, at tingnan ang storey drift. Katulong lang para sa engineer na susuri.
keywords: concrete, reinforced concrete, kongkreto, ACI 318, ACI 318-19, rebar, beam, column, shear, ties, seismic, lindol, equivalent lateral force, ELF, ASCE 7-22, drift, storey drift, floors, palapag, rigid diaphragm, story weight, utilisation, utilization, structural, engineer
from: 94d3001d
---

Sinusuri ng mga block na {{ui:Mga member na kongkreto}} at {{ui:Mga seismic load}} sa {{ui:Analysis}} tab ang reinforced concrete na beam at column, at gumagawa ng pahalang na puwersa ng lindol sa mga palapag ng isang frame. Sumusunod ang dalawa sa takbo ng {{ui:Analysis}} tab at naka-save kasama ng model.

:::warning
Ang mga resulta ay **para sa pagsusuri ng isang engineer**: isang katulong lamang hanggang may magrepaso nito. Gumagamit ang concrete check ng first-order na puwersa, maliban na ang column sa frame na tinawag mong non-sway ay dinidisenyo para sa pinalaking moment nito, na walang sway magnification, walang torsion design, walang seismic detailing (ACI chapter 18) at walang tie detailing. Hindi isinasama sa seismic load ang redundancy factor, ang vertical seismic effect, ang torsional amplification at ang P-delta effect. Hindi pa nagagawa ang wind load.
:::

## Iguhit ang mga member

Iguhit ang mga concrete member bilang rectangle: ang {{ui:Plato}} profile gaya ng `PL400x400` para sa column at `PL300x600` para sa beam ang magbibigay ng seksyon. Inilalagay ang column at beam tulad ng ibang member.

## I-set up ang mga seksyon

Inililista ng block na {{ui:Mga member na kongkreto}} ang bawat seksyong ginagamit ng mga member. Pindutin ang {{ui:I-set up bilang kongkreto…}} sa mga seksyong kongkreto. Binabasa ng DetailCraft ang lapad **b** (kasama ng sariling y axis ng member) at lalim **h** (kasama ng z) mula sa iginuhit na profile, saka humihingi ng:

- ang **cover** hanggang sa sentro ng mga bar, at ang mga bar sa **itaas**, **ilalim** at **gilid** (ilan at anong diameter) para sa beam, o isang **column cage** (mga bar kasama ng b at kasama ng h, anong diameter, spiral na tie) para sa column;
- ang **tie**: mga binti, diameter at spacing;
- kung ano ang **kikilos** na member: beam, column, o pagpapasyahan mula sa mga puwersa nito (ang patayong member, o ang nagdadala ng higit sa 0.10 f′c Ag, ay column).

Itakda ang f′c, ang yield ng bar na fy, yield ng tie na fyt (hanggang 420 MPa lamang ang binibilang para sa shear), K, at kung sway o non-sway ang frame sa itaas nito. Sinusuri bilang kongkreto ang seksyong naka-set up bilang kongkreto: E = 4700 √f′c, 2400 kg/m³, at bilang default ay may **cracked section** (column 0.70 Ig, beam 0.35 Ig; ACI 318-19 Table 6.6.3.1.1(a)). Piliin ang {{ui:Mga gross section}} para i-off ito.

## Gumawa ng combination at suriin

Bigyan ng uri ang mga load case, saka piliin ang {{ui:Gumawa ng combination}}: kinukuha ng ACI 318-19 ang strength combination ng ASCE 7 (§5.3.1). Pindutin ang {{ui:Suriin ang kongkreto}} at bawat member ay makakakuha ng utilization, kinulayan sa model gaya ng steel check: flexure at minimum na steel (22.2, 9.6.1.2), tension-controlled strain (9.3.3.1), shear kasama ng tie (22.5, 9.6.3), spacing ng tie, at axial load na may moment para sa column (22.4, kasama ng paraan ng Bresler para sa two-way bending). Ang member na hindi tugma ang iginuhit na seksyon sa b × h na tinype mo ay nagpapakitang *partly checked*, gayundin ang payat na column o torsion na lampas sa threshold: hindi ito dinidisenyo.

Ang mga member na lampas sa kapasidad ay nakalista sa {{ui:Mga problema}}; tanggapin ang isa na may dahilan, o ayusin ang seksyon.

## Mga palapag at seismic load

Ang palapag ay antas kung saan pinagdurugtong ng matigas na slab (isang **rigid diaphragm**) ang frame. Sa block na {{ui:Mga seismic load}}, pindutin ang {{ui:Hanapin ang mga palapag}}: kinukuha nito ang mga antas kung saan nagtatagpo ang dalawa o higit pang beam. Pagkatapos, bigyan ang bawat palapag ng **seismic weight** nito, tina-type o binabasa: kinukuwenta ng {{ui:Kunin ang bigat mula sa mga case}} ang vertical load ng mga case na bibigyan mo ng factor (ang dead case ay 1; magdagdag ng 0.25 sa storage live case o snow sa flat roof, ayon sa hinihingi ng ASCE 7-22 12.7.2). Napupunta ang vertical load ng bawat node sa palapag na nasa itaas nito o doon mismo, kaya ang column na nasa pagitan ng dalawang palapag ay nagbibigay ng kalahati ng bigat nito sa bawat isa.

Punan ang mga design value: SDS, SD1, S1, R, Ie, Cd, TL, ang structural system (para sa period) at ang risk category. Pagkatapos, kinukuwenta ng {{ui:Gumawa ng seismic case}} ang period mula sa taas ng gusali (12.8.2.1), ang base shear na V = Cs W (12.8.1), ipinamamahagi ito pataas sa mga palapag (12.8.3), at sumusulat ng apat na load case, sa X at Y na may 5 % accidental torsion sa bawat direksiyon (12.8.4.2). Lumilitaw pagkatapos ng takbo ang mga puwersa bawat storey at ang pagsusuri ng storey drift (12.8.6, Table 12.12-1, ang drift Cd δxe / Ie laban sa 0.020 hsx); problema rin ang drift na lampas sa limitasyon nito. Pindutin muli ang {{ui:Gumawa ng combination}} para maisama ang seismic case sa mga combination.

**Ang period mula sa analysis.** Nagmumula sa taas ng gusali ang tinatayang period na Ta. Kapag napatakbo mo na ang analysis kasama ng seismic case, binabasa ng {{ui:Kunin ang period mula sa analysis}} kung gaano kalayo ang galaw ng bawat palapag sa ilalim ng mga puwersa at kinukuwenta ang period gamit ang paraan ni Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), isang beses para sa X at isang beses para sa Y; muling ginagawa ang seismic case gamit ito. Hindi kailanman lalampas sa Cu·Ta ang period na ginamit (ASCE 7-22 12.8.2), kaya hindi maibababa ng malambot na model ang base shear sa ilalim nito. Kunin muli ang period pagkatapos ng ikalawang takbo: nagsisimulang mag-stabilize ito sa isa o dalawang hakbang. I-untick ang {{ui:Period mula sa analysis}} para bumalik sa Ta.

**Payat na column (ACI 318-19 6.6.4.5).** Para sa frame na tinawag mong non-sway, ang column na ang k·ℓu/r ay higit sa 34 + 12·M1/M2 (hanggang 40 lamang) ay dinidisenyo para sa pinalaking moment na Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² na may (EI)eff = 0.4 Ec Ig / (1 + βdns), at ang minimum na moment na Pu (15 + 0.03 h). Ang βdns (0.6 sa simula) ay bahagi ng factored na axial load na tuloy-tuloy: i-type ang sarili mo. Ang column na umaabot ang Pu sa 0.75 Pc ay babagsak sa sarili nitong check. Inililista ng ulat ang mga numero ng bawat payat na column. Sa **sway** na frame, nananatiling "partly checked" ang payat na column: kailangan ng magnification nito ng second-order analysis, na hindi pa nagagawa.

**Slab.** Kapag may plato ang model, kumukuha ang block na {{ui:Reinforcement ng slab}} ng moment ng plato ng bawat strength combination at, ayon sa tuntunin ng Wood–Armer (bending at twisting nang sabay), kinukuwenta ang steel na kailangan ng bawat layer bawat metro: ibaba at itaas, sa x at sa y. Ibinibigay mo ang kapal, cover at mga bar; ipinapakita ng table ang kailangan laban sa ibinigay at ang one-way shear laban sa φVc, at ang layer na kulang ay problema na may kaukulang clause. Hindi sakop ang deflection, punching sa mga column at trimmer bar sa mga opening, at mabagal mag-converge ang moment sa ibabaw ng suporta gamit ang four-node na plato.

Bawat palapag na nakalista ay nagiging rigid diaphragm sa analysis: ang mga beam nito ay walang axial force mula sa galaw ng palapag. Hindi ginawa ang CraftScript export para sa model na may palapag.

## Ang ulat

Nadaragdagan ng mga concrete table (mga pagpapalagay, utilization bawat member, bawat clause), ng mga seismic parameter at base shear, ng mga puwersa sa palapag, at ng drift table ang {{ui:Ulat (PDF)}} at {{ui:Ulat (CSV)}}.
