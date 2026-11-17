---
title: Ngjit një zonë të kopjuar si imazh referencë
summary: Kopjo një pjesë të fletës PDF në MarkupCraft dhe ngjite në DetailCraft në madhësinë e saj reale, të shtrirë mbi një nivel nën çelikun, për të modeluar mbi të.
keywords: imazh, imazh referencë, nënshtresë, sfond, kopjo zonën, markupcraft, pdf, gjurmo, madhësi reale, shkallë, opacitet, mbivendosje
from: 0c48445f
---

Mjeti Kopjo zonën i MarkupCraft kopjon një pjesë të fletës si imazh që di madhësinë e vet. Ngjiteni në DetailCraft dhe ai shtrihet i sheshtë mbi një nivel, në madhësinë e tij reale, nën rrjetën dhe çelikun, që të mund të vendosni elementët mbi një planimetri nga vizatimet.

## Ngjiteni

1. Në MarkupCraft, kopjoni zonën me {{ui:Më shumë}} › {{ui:Kopjo një zonë të faqes…}}, pastaj {{ui:Kopjo}} (ose {{ui:Kopjo si mbivendosje}}, që e bën letrën transparente).
2. Në DetailCraft (në të njëjtin shfletues), shtypni {{key:Mod+V}} ose zgjidhni {{ui:Ngjit}}.

Imazhi bie në mes të rrjetës, në nivelin e treguar në planimetri (në 3D ose në një fasadë, në nivelin më të ulët), dhe zgjidhet. Shiriti i statusit thotë sa i madh është.

- **Madhësi reale:** kur fleta kishte shkallë vizatimi, një piksel vizatohet si gjatësia që tregon në vizatim.
- **Madhësi në letër:** kur fleta nuk kishte shkallë, imazhi është aq i madh sa ishte zona në letër, dhe shiriti i statusit e thotë këtë. Shkruani një **mm për piksel** të ri te {{ui:Vetitë}} për ta shkallëzuar.

Një zonë e kopjuar si mbivendosje fillon me opacitetin me të cilin u kopjua.

{{key:Mod+V}} ngjit atë që keni kopjuar të fundit: zonën nga MarkupCraft, ose elementët dhe themelet e kopjuara në DetailCraft. Nëse pas zonës u kopjua në kujtesën e ndërmjetme një imazh tjetër (nga një program tjetër), asgjë nuk ngjitet; kopjoni zonën përsëri.

## Zhvendoseni, ndryshoni dhe fshijeni

- Klikoni imazhin për ta zgjedhur (çdo gjë përpara tij zgjidhet e para). Një kontur blu tregon që është zgjedhur.
- Tërhiqeni për ta zhvendosur në të gjithë nivelin. Mesi dhe qoshet e tij ngjiten në kryqëzimet e rrjetës.
- Te {{ui:Vetitë}}, shkruani ku shkon mesi i tij (x, y) dhe niveli ku shtrihet (z), **mm për piksel** dhe **opacitetin** e tij.
- {{key:Delete}} ose {{ui:Fshi}} e heq.

Çdo ngjitje, zhvendosje, ndryshim dhe fshirje është një hap: {{key:Mod+Z}} e kthen mbrapsht.

Imazhi ruhet në skedarin e modelit, kështu hapet bashkë me modelin. Është vetëm referencë: nuk është në vizatime, eksportime, listën e materialeve ose në një kopje.
