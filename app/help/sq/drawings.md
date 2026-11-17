---
title: Vizatimet e planimetrisë së përgjithshme dhe të montimit
summary: Krijo planimetri, fasada dhe një vizatim montimi për çdo shenjë montimi nga modeli, në fletë A4 deri A1 ose ANSI B deri D, lësho me shkronja revizioni, dhe shkarkoji si PDF, DWG ose DXF.
keywords: linja të fshehura, heqja e linjave të fshehura, me viza, re revizioni, retë, trekëndëshi i revizionit, planimetria e bulonave të ankerimit, shufrat e ankerimit, tabela e shufrave, tabela e pllakave të bazës, vendosja, lëshim, revizion, rev, tabela e revizioneve, ri-lëshim, regjistri i lëshimeve, transmetim, dwg, dxf, skedar cad, eksporto vizatimet, vizatime, planimetri e përgjithshme, ga, planimetri, fasadë, vizatim montimi, madhësia e fletës, madhësia e letrës, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, printim, shkallë, bllok titulli, referencë modeli
from: 709f8604
---

Zgjidh {{ui:Vizatimet}} në grupin {{ui:Dalja}}. DetailCraft e bën gjithë grupin nga modeli siç është tani. Asgjë nuk ruhet: ndrysho modelin, hap {{ui:Vizatimet}} përsëri, dhe grupi bëhet përsëri.

## Çfarë përmban grupi

- **Planimetritë**, një për çdo nivel që ka diçka mbi të, të shikuara nga lart.
- **Fasadat**, një për çdo vijë rrjeti me elementë brenda 1 m prej saj.
- **Planimetria e bulonave të ankerimit**, kur modeli ka pllaka baze: çdo pllakë baze e parë nga lart me kolonën dhe shufrat e ankerimit, rrjetat me përmasat e tyre, një detaj tipik i çdo modeli shufrash (BP1, BP2 …) me distancën e shufrave dhe distancat nga skaji, dhe dy tabela: shufrat e ankerimit sipas shenjës (R1, R2 …: sasia, diametri, gjatësia, dalja mbi pllakën, ngulitja, klasa) dhe pllakat e bazës sipas rrjetit (kolona, modeli, pllaka, shufrat, lart i pllakës). Një kolonë jashtë rrjetit gjendet me koordinatat e saj.
- **Vizatimet e montimit**, një për çdo shenjë montimi: pamjet e përparme, lart dhe të skajit, përmasat e zinxhiruara deri te vrimat dhe skajet e pllakës, lista e pjesëve, bulonat dhe shufrat e lirë, dhe shënimet e saldimit dhe të vrimave. Çdo pllakë e saldueshme ka një simbol saldimi me filetë në pamjen e përparme (AWS A2.4): shigjeta tregon nyjen, trekëndëshi nën vijën referuese do të thotë ana e shigjetës, shifra në të majtë është madhësia e saldimit në mm, dhe një rreth aty ku shigjeta takon vijën do të thotë rreth e qark.

**Linjat e fshehura.** Planimetritë dhe fasadat lënë jashtë linjat e një elementi aty ku një element tërësisht përpara e mbulon (një trarë i parë nga skaji pas një kolone). Vizatimet e montimit vizatojnë një pllakë me vija të çara aty ku elementi kryesor e mbulon: pas shtyllës së I-së në pamjen e përparme (parë nga ana −u e elementit), nën flanxhën e sipërme në pamjen nga lart. Elementët që janë në të njëjtën thellësi, ose mbivendosen në thellësi, vizatohen të plotë.

Çdo fletë ka një bllok titulli me numrin e vizatimit, shkallën, emrin e modelit, datën, numrin e fletës me madhësinë e fletës, dhe referencën e modelit: një kod i krijuar nga modeli i ruajtur, që një printim të lidhet me modelin nga erdhi.

## Zgjidh madhësinë e fletës

Zgjidh madhësinë në listën në krye të dritares {{ui:Vizatimet}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) ose {{ui:ANSI D}} (22 × 34 in). Çdo fletë është horizontale. Grupi bëhet përsëri në madhësinë e re menjëherë, dhe e njëjta madhësi përdoret për vizatimet e punëtorisë. Ajo gjendet edhe te [Cilësimet e DetailCraft](topic:settings#drawings), dhe ky shfletues e mban mend.

- Një fletë më e madhe vizaton në shkallë më të madhe. Shkallët janë gjithmonë standarde (1:10, 1:20, 1:25, 1:50, 1:100 e kështu me radhë).
- Teksti mbetet i njëjtë në çdo fletë, kështu që mbetet i lexueshëm kur printohet.
- Në një fletë të vogël, një montim i gjatë dhe i hollë mund të ketë një shkallë më të madhe në thellësi sesa përgjatë gjatësisë. Titulli i pamjes atëherë tregon të dyja shkallët, dhe përmasat mbizotërojnë.

## Lësho vizatimet dhe revizionet

Rreshti mbi pamjen thotë ku qëndron fleta e shfaqur: **Nuk është lëshuar ende**, **Rev B, lëshuar … ; e pandryshuar që atëherë**, ose, me të kuqe, **Ndryshuar që nga rev B: duhet ri-lëshim**. Lista e fletëve shënon fletët e lëshuara me revizionin e tyre dhe ato që kanë nevojë për ri-lëshim.

- Shkruaj për çfarë është lëshimi (fillon si "Lëshuar për fabrikim") dhe zgjidh {{ui:Boto këtë fletë}}, ose {{ui:Boto fletët e ndryshuara}} për çdo fletë që është e re ose ka ndryshuar që nga lëshimi i fundit.
- Lëshimi i parë i një fletë është revizioni A, pastaj B, C e kështu me radhë (I dhe O kalohen).
- Blloku i titullit tregon numrin e vizatimit me revizionin e tij ("A-B1  rev B"), dhe një tabelë revizionesh pranë tij liston lëshimet e fundit: revizionin, datën dhe përshkrimin. Në një fletë të vogël shfaq aq sa futen.
- Një fletë "ndryshon" kur ndryshon ajo që vizatohet mbi të: një element i lëvizur, një vrimë e re, një shenjë e riemërtuar. Data, numri i fletëve dhe vetë tabela e revizioneve nuk numërohen. Ndryshimi i madhësisë së fletës ndryshon çdo fletë.
- Regjistri i lëshimeve ruhet në skedarin e modelit, dhe lëshimi është një hap zhbërjeje. [Skedari KISS](topic:kiss-export) mban revizionin e fundit të çdo vizatimi.

### Retë e revizionit

Nga lëshimi i dytë i një fletë e tutje, çdo element ose themel që ka ndryshuar vizatohet brenda një reje revizioni me një trekëndësh revizioni që mban shkronjën.

- Ndërsa një fletë ka ndryshuar që nga lëshimi i fundit, retë tregojnë atë që ka ndryshuar që atëherë, me revizionin që vjen në trekëndësh (rev B i lëshuar dhe i ndryshuar: trekëndëshat thonë C).
- Pasi e lëshon, retë qëndrojnë në fletën e atij revizioni, si në një grup të printuar, derisa fleta të ndryshojë përsëri.
- Çdo fletë rrethon vetëm ndryshimet që shfaq. Planimetritë dhe fasadat nuk vizatojnë vrima ose prerje, kështu që rrethojnë një element që është lëvizur, është kthyer ose ka ndryshuar madhësi, ose shenja e të cilit ka ndryshuar. Vizatimet e montimit dhe planimetria e bulonave të ankerimit rrethojnë edhe vrimat dhe prerjet e reja ose të lëvizura.
- Një shenjë e riemërtuar numërohet: kur një ndryshim e bën një trarë montimi të ri, trarët shenja e të cilëve është rritur (B1 në B2) rrethohen në planimetri dhe fasada.
- Një element që është fshirë nuk lë asgjë për të rrethuar.
- Fletët e lëshuara përpara retave të revizionit (DetailCraft 0.4) fillojnë të rrethojnë nga lëshimi i tyre i radhës.
- Retë janë në shkarkimet PDF, DXF dhe DWG, dhe nuk numërohen kurrë vetë si ndryshim.

## Shkarko

Zgjidh formatin në listën pranë butonave, pastaj {{ui:Kjo fletë}} për fletën e shfaqur ose {{ui:Të gjitha fletët}} për të gjithë grupin.

- **PDF**: për printim ose dërgim. {{ui:Të gjitha fletët}} krijon një PDF, një faqe për fletë, çdo faqe në madhësinë e zgjedhur.
- **DWG**, në formatin 2018, 2013, 2010, 2007, 2004 ose 2000: për të hapur fletët në një program CAD. Zgjidh një format më të vjetër për një program më të vjetër.
- **DXF (R12)**: versioni që hapet pothuajse nga çdo program CAD.

Fletët DWG ose DXF vizatohen në madhësi të plotë: një njësi vizatimi është një milimetër në letër, kështu që printohet në 1:1 dhe çdo pamje e mban shkallën që thotë titulli i saj. Çdo stilolaps është shtresa e vet: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID e kështu me radhë, me trashësinë e vijës (DWG) dhe vijat e saj të çara. Fjalët janë tekst në stilin e tekstit DetailCraft (Arial). Përmasat janë vijat dhe shifrat që shikon, jo objekte përmasash. {{ui:Të gjitha fletët}} vendos skedarët DWG ose DXF në një zip, një skedar për fletë.

:::note
DXF R12 nuk ka trashësi vijash dhe as mbushje: shtresat mbajnë emrat e tyre, kështu që vendos stilolapsat sipas shtresës kur printon, dhe format e mbushura lihen jashtë (shiriti i statusit thotë sa janë).
:::

Printo në 100% (pa "përshtat në faqe") në letër të së njëjtës madhësi nëse dëshiron që shkallët e deklaruara të mbahen.
