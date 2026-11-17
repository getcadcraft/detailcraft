---
title: Era, vendi sizmik dhe kombinimet ASCE 7
summary: Krijo raste ngarkese ere për një ndërtesë të mbyllur dhe rigide, llogarit vlerat sizmike të projektimit për një vend dhe krijo kombinimet ASCE 7, te skeda Analiza.
keywords: erë, ngarkesë ere, asce 7, procedura direktive, ekspozim, mbyllje, sizmik, klasa e vendit, ss, s1, sds, sd1, usgs, spektër projektimi, kombinimet e ngarkesave, lrfd, asd, kzt, kd, rrufe
from: 676fcbf3
---

Tri blloqe te skeda {{ui:Analiza}} përgatisin hyrjet e erës dhe sizmikes të një kornize dhe i kombinojnë ato: {{ui:Ngarkesat e erës (procedura direktive ASCE 7)}}, {{ui:Vendi dhe sistemi sizmik (ASCE 7)}} dhe {{ui:Kombinimet e ngarkesave ASCE 7}}. Janë ndihmës: **nuk është kontroll kodi; inxhinieri yt i shqyrton rezultatet.**

## Çfarë do të bësh

Krijo raste ngarkese ere për një ndërtesë të mbyllur dhe rigide, merr vlerat sizmike për një vend dhe krijo kombinimet që i përdorin ato. Modeli ka nevojë për dysheme, kështu që ekzekuto analizën së pari (shih [Forcat, reaksionet dhe deformimet](topic:frame-analysis)).

## Hapat

1. Hap skedën {{ui:Analiza}} dhe zgjidh {{ui:Ekzekuto}}, që dyshemetë dhe madhësia e ndërtesës të dihen. Nëse një bllok thotë se nuk ka dysheme, zgjidh {{ui:Gjej dysheme}} brenda tij.
2. Te {{ui:Ngarkesat e erës (procedura direktive ASCE 7)}}, zgjidh {{ui:Botimi}}, shkruaj {{ui:Shpejtësia bazë e erës V}} nga harta jote e erës dhe zgjidh {{ui:Njësia e shpejtësisë}}, pastaj {{ui:Ekspozimi}} dhe {{ui:Mbyllja}}. Kzt, Kd, G, lartësia mbi tokë, Cp në anën e pasme ndaj erës, ekscentriciteti dhe drejtimi janë gjithashtu aty.
3. Lexo presionin në çdo dysheme dhe forcën mbi çdo dysheme në tabelë, pastaj zgjidh {{ui:Krijo rastet e erës}}. Rastet janë +X, -X, +Y dhe -Y.
4. Te {{ui:Vendi dhe sistemi sizmik (ASCE 7)}}, zgjidh botimin dhe shkruaj Ss dhe S1 (SMS, SM1 dhe S1 për ASCE 7-22), klasën e vendit A deri D, kategorinë e rrezikut dhe sistemin sizmik të qëndrueshmërisë. Ose shkruaj gjerësinë dhe gjatësinë gjeografike dhe zgjidh {{ui:Kërko në USGS (online)}}; pyet shërbimin online vetëm kur shtyp butonin.
5. Lexo Fa, Fv, SDS dhe SD1, R, Cd dhe Omega0 dhe spektrin e projektimit, pastaj zgjidh {{ui:Përdor te blloku sizmik}}. Shtyp {{ui:Bëj rastet sizmike}} te blloku sizmik (shih [Kontrollo elementët prej betoni dhe bëj ngarkesat sizmike](topic:concrete-and-seismic)).
6. Te {{ui:Kombinimet e ngarkesave ASCE 7}}, zgjidh {{ui:Metoda}} (LRFD ose ASD) dhe zgjidh {{ui:Krijo kombinimet ASCE 7}}. Ekzekuto analizën përsëri.

## Gjëra për t'u ditur

- Era: vetëm për një ndërtesë të mbyllur dhe rigide, me procedurën direktive. Një ndërtesë fleksibël ka nevojë për një faktor rrufeje nga standardi, të cilin DetailCraft nuk e krijon.
- Klasat E dhe F të vendit kërkojnë një studim të vendit dhe nuk janë ndërtuar.
- Një listë burimesh në fund të blloqeve tregon nga erdhi çdo numër dhe çfarë u la jashtë.
- Kërkimi USGS u testua mbi një zëvendësues, jo mbi shërbimin e drejtpërdrejtë.
