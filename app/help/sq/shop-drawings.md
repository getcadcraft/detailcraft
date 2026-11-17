---
title: Bëj vizatimet e punëtorisë
summary: Një fletë për çdo shenjë pjese, e bërë të gjitha njëherësh: shiko çdo njërën dhe shkarko një fletë ose gjithë grupin si PDF në A4 deri A1 ose ANSI B deri D, me vrima, prerje, përmasa dhe bllok titulli.
keywords: vizatim punëtorie, vizatime punëtorie, të gjitha pjesët, grup, gjithë grupi, vizatim pjese e vetme, vizatim fabrikimi, pdf, vizatim detaji, vizatim copë, printim
from: d25fe035
---

DetailCraft bën një fletë për çdo shenjë pjese, për çdo trari, kolone, diagonale dhe pllake në model, të gjitha njëherësh: nuk ka nevojë t'i zgjedhësh një nga një. Pjesët identike ndajnë një shenjë, kështu që ndajnë edhe një fletë. Fletët bëhen menjëherë nga modeli; nuk ruhen dhe nuk redaktohen.

## Bëj gjithë grupin

1. Zgjidh {{ui:Shop drawing}} te grupi {{ui:Output}}. Nuk duhet të zgjidhet asgjë. Me një pjesë të zgjedhur, dritarja hapet te fleta e asaj pjese. Te paneli {{ui:Properties}} i njëjti buton quhet {{ui:Shop drawing}} për elementët dhe {{ui:Plate drawing}} për lidhjet.
2. Hapet një pamje paraprake, me titull shenjën e pjesës, për shembull "Vizatim punëtorie b1". Lista e parë pranë titullit mban çdo shenjë pjese me profilin, gjatësinë dhe sasinë e saj: zgjidh një për të parë fletën e saj. Lista e dytë ndryshon përmasën e fletës; gjithë grupi bëhet përsëri në të (shih [Vizatimet e përgjithshme të vendosjes dhe të montimit](topic:drawings#choose-the-sheet-size)).
3. Zgjidh {{ui:Download all}} (butoni tregon numrin e fletëve) për një PDF me një faqe për çdo shenjë pjese, `<name> Shop drawings.pdf`. Çdo fletë thotë "Fleta 3 nga 42" te blloku i titullit. Ose zgjidh {{ui:Download this sheet}} për atë që po shikon, `<name> <mark>.pdf`.
4. Mbyll pamjen paraprake me × ose {{key:Esc}}.

Nëse {{ui:Shop drawing}} është gri, modeli nuk ka ende pjesë.

## Çfarë ka në fletë

Për një profil I:

- **Fasada**, duke parë shpinën: pjesa me prerjet e saj të prera, vrimat e shpinës si rrathë dhe vrimat e flanxhës si vija të fshehura (të ndërprera).
- **Plani i flanxhës së sipërme**, i parë nga lart, kur çdo flanxhë ka vrima. Vrimat e flanxhës së poshtme shfaqen të ndërprera.
- **Prerja** përmes profilit.
- **Përmasat:** pozicionet e lidhura të vrimave përgjatë pjesës plus gjatësia e përgjithshme, lartësitë e vrimave të shpinës, gjerësia, dhe përmasat e prerjeve.
- **Lista e vrimave:** çdo grup vrimash, për shembull "8 x Ø22 te flanxha e sipërme".
- **Saldimi**, kur pjesa ka pllaka të saldosura në të.
- **Blloku i titullit:** shenja e pjesës, shenja e montimit, profili, materiali, gjatësia, sasia, pesha për njësi dhe totali, emri i modelit dhe data.

Për një kanal, këndore ose profil të zbrazët fleta është e njëjtë, duke parë shpinën ose anën: muret e tubit janë vija të fshehura (të ndërprera), prerja jep trashësinë e murit.

Për një pllakë: sipërfaqja e pllakës me vrimat e saj, dhe skaji i saj si prerje.

## Shkallët

Shkalla zgjidhet nga një listë (nga 1:1 deri 1:200) që pjesa të përshtatet në fletë. Një pjesë e gjatë dhe e ulët do të ishte shumë e hollë për t'u lexuar në një shkallë, kështu që kur thellësia del nën 30 mm në letër, thellësia vizatohet në një shkallë më të madhe se gjatësia. Titulli i pamjes e thotë këtë, për shembull "gjatësia 1:20, thellësia 1:5 (jo në një shkallë të vetme; përmasat mbizotërojnë)". Lexo gjithmonë madhësitë nga përmasat, jo duke matur fletën.

## Gjëra që duhet të dish

- Sasia është numri i pjesëve me atë shenjë në model. Shenjat mund të riemërtohen pas një ndryshimi; shih [Kontrollo shenjat dhe listën e materialeve](topic:marks-and-bom).
- Çdo fletë është një pjesë më vete, pa simbole saldimi; vizatimet e montimit (me simbole saldimi) dhe vizatimet e përgjithshme të vendosjes janë në [Vizatimet](topic:drawings). Fleta nuk mund të redaktohet ose të shënohet në DetailCraft. Për ta shënuar, hap PDF-në në një aplikacion shënimesh PDF si MarkupCraft.
- Blloku i titullit thotë "DetailCraft lab build — millimeters".
- Teksti përdor shkronjën standarde PDF Helvetica. Karakteret jashtë grupit të shkronjave Evropiane Perëndimore shtypen si "?", dhe shiriti i gjendjes i numëron ato.

## Printoje

Hap PDF-në e shkarkuar në shikuesin tënd PDF dhe printoje në 100% (pa "përshtat në faqe") në letër të përmasës që zgjodhe, nëse dëshiron që shkallët e deklaruara të mbahen. Në një fletë më të vogël, përshtate shkallën dhe mbështetu te përmasat.
