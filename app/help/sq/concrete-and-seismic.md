---
title: Kontrollo elementët e betonit dhe bëj ngarkesat sizmike
summary: Cakto armaturën e trarëve dhe kolonave të betonit, kontrolloji sipas ACI 318-19, bëj forcat ekuivalente anësore sipas ASCE 7-22 mbi dysheme të ngurta, dhe shiko zhvendosjen e kateve. Një ndihmë për inxhinierin që kontrollon.
keywords: beton, beton i armuar, ACI 318, ACI 318-19, armaturë, trarë, kolona, prerje, lidhëse, sizmik, tërmet, forcë ekuivalente anësore, ELF, ASCE 7-22, zhvendosje, zhvendosje katesh, dysheme, diafragmë e ngurtë, pesha e katit, shfrytëzim, utilization, strukturor, inxhinier
from: 94d3001d
---

Blloqet {{ui:Elemente betoni}} dhe {{ui:Ngarkesat sizmike}} te skeda {{ui:Analiza}} kontrollojnë trarët dhe kolonat e betonit të armuar, dhe bëjnë forcat anësore të një tërmeti mbi katet e një korniza. Të dyja ndjekin ekzekutimin e skedës {{ui:Analiza}} dhe ruhen me modelin.

:::warning
Rezultatet janë **për kontroll nga një inxhinier**: një ndihmë deri sa dikush t'i ketë shqyrtuar. Kontrollet e betonit përdorin forca të rendit të parë, me përjashtim që një kolonë në një kornizë që e quan jo-lëvizëse projektohet për momentin e zmadhuar të saj, pa zmadhim lëvizjeje, pa projektim përdredhjeje, pa detajim sizmik (kapitulli 18 i ACI) dhe pa detajim lidhësish. Ngarkesat sizmike lënë jashtë faktorin e tepricës, efektin vertikal sizmik, zmadhimin përdredhës dhe efektet P-delta. Ngarkesat nga era nuk janë bërë ende.
:::

## Vizato elementët

Vizato elementët e betonit si drejtkëndësha: një profil {{ui:Pllaka}} si `PL400x400` për një kolonë dhe `PL300x600` për një trarë jep prerjen. Kolonat dhe trarët vendosen si çdo element tjetër.

## Cakto prerjet

Blloku {{ui:Elemente betoni}} liston çdo prerje që përdorin elementët. Shtyp {{ui:Konfiguro si beton…}} te ato që janë beton. DetailCraft lexon gjerësinë **b** (përgjatë boshtit y të vetë elementit) dhe thellësinë **h** (përgjatë z) nga profili i vizatuar, dhe pastaj kërkon:

- **mbulesën** deri te qendra e shufrave, dhe shufrat **sipër**, **poshtë** dhe **anësore** (sa dhe çfarë diametri) për një trarë, ose një **kafaz kolone** (shufra përgjatë b dhe përgjatë h, çfarë diametri, lidhëse spirale) për një kolonë;
- **lidhëset**: krahët, diametri dhe distanca;
- çfarë **vepron si** elementi: një trarë, një kolonë, ose vendoset nga forcat e tij (një element vertikal, ose ai që mban më shumë se 0.10 f′c Ag, është kolonë).

Vendos f′c, rrjedhjen e shufrës fy dhe rrjedhjen e lidhëseve fyt (më së shumti 420 MPa llogaritet për prerje), K dhe nëse korniza është lëvizëse ose jo-lëvizëse mbi to. Një prerje e konfiguruar si beton analizohet si beton: E = 4700 √f′c, 2400 kg/m³, dhe si parazgjedhje me **prerje të çarë** (kolonat 0.70 Ig, trarët 0.35 Ig; ACI 318-19 Tabela 6.6.3.1.1(a)). Zgjidh {{ui:Seksione bruto}} për ta çaktivizuar.

## Bëj kombinimet dhe kontrollo

Jepi rasteve të ngarkesës llojin e tyre, pastaj {{ui:Bëj kombinimet}}: ACI 318-19 merr kombinimet e forcës të ASCE 7 (§5.3.1). Shtyp {{ui:Kontrollo betonin}} dhe çdo element merr një shfrytëzim, i ngjyrosur te modeli si kontrollet e çelikut: përkulja dhe armatura minimale (22.2, 9.6.1.2), deformimi i kontrolluar nga tërheqja (9.3.3.1), prerja me lidhëset (22.5, 9.6.3), distanca e lidhëseve dhe ngarkesa aksiale me moment për kolonat (22.4, me metodën e Bresler për përkuljen në dy drejtime). Një element ku prerja e vizatuar ndryshon nga b × h që shkrove lexohet *pjesërisht i kontrolluar*, si edhe një kolonë e hollë ose përdredhja mbi pragun: ato nuk projektohen.

Elementët mbi kapacitetin e tyre listohen te {{ui:Problemet}}; prano një me arsye, ose korrigjo prerjen.

## Dyshemetë dhe ngarkesat sizmike

Dysheme është një nivel ku korniza mbahet bashkë nga një pllakë e ngurtë (një **diafragmë e ngurtë**). Te blloku {{ui:Ngarkesat sizmike}} shtyp {{ui:Gjej dysheme}}: merr nivelet ku takohen dy ose më shumë trarë. Pastaj jepi çdo dyshemeje **peshën e saj sizmike**, e shkruar ose e lexuar: {{ui:Merr peshat nga rastet}} mbledh ngarkesat vertikale të rasteve të cilave jep një faktor (rasti i vdekur është 1; shto 0.25 te një rast i ngarkesës së gjallë depozitimi ose borë mbi një çati të sheshtë, siç kërkon ASCE 7-22 12.7.2). Ngarkesa vertikale e çdo nyje shkon te dyshemeja në ose mbi të, kështu një kolonë midis dy dyshemesh jep gjysmën e peshës së saj çdo njërës.

Plotëso vlerat e projektimit: SDS, SD1, S1, R, Ie, Cd, TL, sistemin strukturor (për periudhën) dhe kategorinë e rrezikut. {{ui:Bëj rastet sizmike}} pastaj llogarit periudhën nga lartësia e ndërtesës (12.8.2.1), forcën bazë V = Cs W (12.8.1), e shpërndan lart nëpër dysheme (12.8.3) dhe shkruan katër raste ngarkese, në X dhe Y me 5 % përdredhje aksidentale në secilin drejtim (12.8.4.2). Forcat e katit dhe kontrolli i zhvendosjes së katit (12.8.6, Tabela 12.12-1, zhvendosja Cd δxe / Ie kundrejt 0.020 hsx) shfaqen pas një ekzekutimi; një zhvendosje mbi kufirin e saj është gjithashtu problem. Shtyp {{ui:Bëj kombinimet}} përsëri për t'i sjellë rastet sizmike në kombinime.

**Periudha nga analiza.** Periudha e përafërt Ta del nga lartësia e ndërtesës. Kur ke ekzekutuar analizën me rastet sizmike, {{ui:Merr periudhën nga analiza}} lexon sa lëvizi çdo dysheme nën forcat dhe e llogarit periudhën me metodën e Rayleigh-ut, T = 2π √(Σ w δ² / (g Σ f δ)), një herë për X dhe një herë për Y; rastet sizmike bëhen përsëri me të. Periudha e përdorur nuk është kurrë më shumë se Cu·Ta (ASCE 7-22 12.8.2), kështu një model i butë nuk mund ta ulë forcën bazë nën atë vlerë. Merr periudhën përsëri pas ekzekutimit të dytë: stabilizohet në një hap ose dy. Hiq shenjën te {{ui:Periudha nga analiza}} për t'u kthyer në Ta.

**Kolonat e holla (ACI 318-19 6.6.4.5).** Për një kornizë që e quan jo-lëvizëse, një kolonë me k·ℓu/r mbi 34 + 12·M1/M2 (më së shumti 40) projektohet për momentin e zmadhuar Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² me (EI)eff = 0.4 Ec Ig / (1 + βdns), dhe momenti minimal Pu (15 + 0.03 h). βdns (0.6 në fillim) është pjesa e ngarkesës aksiale të faktorizuar që mbahet: shkruaje vetë. Një kolonë ku Pu arrin 0.75 Pc dështon me kontrollin e vet. Raporti liston numrat e çdo kolone të hollë. Në një kornizë **lëvizëse** një kolonë e hollë mbetet "pjesërisht e kontrolluar": zmadhimi i saj kërkon një analizë të rendit të dytë, që nuk është bërë.

**Pllakat.** Kur modeli ka pllaka, një bllok {{ui:Armimi i pllakave}} i merr momentet e pllakave të çdo kombinimi të forcës dhe, sipas rregullës së Wood–Armer (përkulja dhe përdredhja së bashku), llogarit çelikun që çdo shtresë i nevojitet për metër: poshtë dhe sipër, në x dhe në y. Ti jep trashësinë, mbulesën dhe shufrat; tabela tregon atë që duhet kundrejt asaj që jepet dhe prerjen njëdrejtimëshe kundrejt φVc, dhe një shtresë që nuk arrin është problem me klauzolën e vet. Deformimi, shpimi (punching) te kolonat dhe shufrat e kornizimit te hapjet nuk mbulohen, dhe një moment mbi një mbështetës konvergon ngadalë me pllaka me katër nyje.

Çdo dysheme që liston bëhet një diafragmë e ngurtë në analizë: trarët e saj nuk mbajnë forcë aksiale nga lëvizja e dyshemesë. Eksporti CraftScript nuk është bërë për një model me dysheme.

## Raporti

{{ui:Raporti (PDF)}} dhe {{ui:Raporti (CSV)}} fitojnë tabelat e betonit (supozimet, shfrytëzimi sipas elementit, çdo klauzolë), parametrat sizmikë dhe forcën bazë, forcat mbi dysheme dhe tabelën e zhvendosjes.
