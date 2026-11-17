---
title: Menutë, tastet dhe miu
summary: Zgjidh një stil menuje që përputhet me mënyrën si punon tashmë, jep çdo komande tastin tënd, zhvendos komandat mes skedave të shiritit, dhe cakto çfarë bën rrota dhe butonat e miut.
keywords: stil menuje, menu, shirit, mjetet, rreshti i komandave, shkurtore tastiere, tastet e shkurtra, taste, personalizo, ri-cakto, miu, rrota, përmbys, drejtimi i zmadhimit, butoni i mesit, butoni i djathtë, lëviz, rrotullo, eksporto, importo, ndërrim, i njohur, hartim klasik, shirit çeliku
from: 4132c6e5
---

Komandat e DetailCraft janë të njëjta sido që t'i arrish. Një **stil menuje** vendos vetëm ku ndodhen në ekran, si quhen atje dhe cilat taste i ekzekutojnë. Zgjidh një te {{ui:Cilësimet}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menutë, tastet dhe miu}}; ndryshimi është i menjëhershëm dhe ky shfletues e mban mend.

## Tre stilet

| Stili | Çfarë merr |
|---|---|
| {{ui:DetailCraft}} | Shiriti i veglave i DetailCraft (Skedar, Vendos, Lidh, Ndrysho, Dalja) dhe tastet e tij me një shkronjë: {{key:V}} përzgjidh, {{key:B}} trari, {{key:C}} kolona, {{key:R}} diagonalja, {{key:P}} pllaka, {{key:F}} themeli, {{key:S}} shkallë. Fillimisht. |
| {{ui:Hartim klasik}} | Për njerëzit që shkruajnë komanda: një shirit i vogël ({{ui:Kryefaqja}}, {{ui:Pamja}}, {{ui:Dalja}}) dhe një rresht komandash. Shkruaj BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (zhbëj), ZOOM, PLAN, 3D, DRAWINGS, NC ose HELP dhe shtyp {{key:Enter}}; {{key:Enter}} pa asgjë përsërit komandën e fundit, {{key:Esc}} e pastron. Fillo të shkruash kudo dhe shkronjat shkojnë te rreshti i komandave. Butoni i mesit lëviz pamjen; në 3D, {{key:Shift}} dhe butoni i mesit rrotullojnë. |
| {{ui:Shirit çeliku}} | Skedat ashtu si i rregullojnë programet e detajimit të çelikut: {{ui:Modelimi}} (elementët, betoni, shkallët), {{ui:Detajimi}} (lidhjet), {{ui:Ndrysho}}, {{ui:Vizatimet}} (vizatimet dhe raportet), {{ui:Prodhimi}} (skedarët NC, IFC) dhe {{ui:Pamja}}, me një menu {{ui:Skedar}} dhe butona të shpejtë në të djathtë. Tastet me një shkronjë mbeten. Butoni i mesit lëviz pamjen; në 3D butoni i majtë rrotullon. |

Çdo stil mban {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} dhe {{key:Mod+A}}. Shiritat mbajnë gjithashtu {{ui:3D}}, {{ui:Planimetria}}, {{ui:Fasada}} dhe {{ui:Përshtat}} të shiritit të pamjes.

:::tip
Një tast që i takon paraqitjes së vetë DetailCraft, por që stili yt ia ka dhënë një komande tjetër, nuk bën asgjë, dhe rreshti i gjendjes tregon ku shkoi komanda e tij ("Në Shiritin tim të çelikut, Kolona është Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} dhe shigjetat mbajnë gjithmonë kuptimin e tyre, dhe kur një element është vendosur përgjysmë ose një kopje ndjek treguesin, shkronjat i takojnë DetailCraft.
:::

## Bëje tënden

1. Zgjidh stilin më të afërt me atë që dëshiron, pastaj kliko {{ui:Personalizo…}}.
2. Te {{ui:Tastet dhe menutë}}, gjej një komandë (kutia e kërkimit ndihmon). {{ui:Shto një çelës}} dhe shtyp tastin, ose dy taste radhazi për një çelës me dy shkronja. Kliko një tast për ta hequr.
3. Me një shirit, {{ui:Ku ndodhet}} zhvendos komandën te një skedë dhe panel tjetër, te menuja {{ui:Skedar}}, ose te {{ui:Vetëm tastet}}.
4. Te {{ui:Miu}}, cakto rrotën, butonat që lëvizin planimetrinë dhe fasadat, dhe çfarë bën secili buton në pamjen 3D.
5. Jepi një emër dhe kliko {{ui:Ruaj}}.

Ruajtja e një stili të integruar bën një kopje tënde ("Shiriti im i çelikut"); ai i integruari nuk ndryshon kurrë. Një tast i dhënë dy komandave shfaqet me të kuqe dhe duhet rregulluar përpara se të mund ta ruash.

## Miu

- **Rrota e miut**: {{ui:Lëvizja lart zmadhon}} (fillimi) ose {{ui:Lëvizja lart zvogëlon}}, dhe sa shpejt. Pinça në panelin e prekjes zmadhon gjithmonë në drejtimin e lëvizjes së gishtave.
- **Lëviz planimetrinë dhe fasadat me**: butonin e mesit, butonin e djathtë, ose të dy. Me mjetin Përzgjidh, butoni i majtë gjithmonë vizaton një dritare përzgjedhjeje.
- **Tërheqja në pamjen 3D**: {{ui:Çdo pamje me butonat e vet}} mban butonat e DetailCraft (i majti rrotullon, i mesit zmadhon, i djathti lëviz). Ose cakto çdo buton të rrotullojë, lëvizë, zmadhojë ose asgjë; {{key:Shift}} me një buton që rrotullon ose lëviz i ndërron të dy.

## Merre me vete

{{ui:Eksporto}} ruan stilin në përdorim si një skedar të vogël `.ccinput.json`; {{ui:Importo…}} shton një të tillë, nga një kompjuter tjetër ose një kolegu. Një skedar i importuar mund të tregojë vetëm te komandat e veta të DetailCraft: çdo gjë tjetër në të lihet jashtë dhe numërohet në rreshtin e gjendjes. {{ui:Fshi këtë stil}} heq një nga stilet e tua.

:::note
Këto cilësime mbeten në këtë shfletues. {{ui:Përdore këtë stil në çdo aplikacion}} nën kartat e stileve bën që çdo aplikacion të hapet në stilin e vet përkatës (shiritin e veglave të vet, një shirit ose Hartim klasik), me ndryshimet që bëre në çdo aplikacion. DetailCraft nuk ka stil me shirit menuje: kur për çdo aplikacion zgjidhet shiriti i menusë së një aplikacioni tjetër, DetailCraft mban shiritin e vet të veglave.
:::

Të lidhura: [Tastiera dhe miu](topic:keyboard) · [Cilësimet e DetailCraft](topic:settings) · [Të ardhur nga programe të tjera detajimi](topic:coming-from)
