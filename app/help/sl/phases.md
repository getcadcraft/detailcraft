---
title: Faze
summary: Razdelite model na faze (zaporedja montaže ali dobave), prikažite ali skrijte vsako fazo, dodajte dele v fazo in številčite oznake po fazah.
keywords: faza, faze, upravitelj faz, zaporedje montaže, dobava, serija, zaporedje, skrij fazo, prikaži fazo, filter, številčenje, predpona oznake, po fazi
from: bae506f5
---

Faza je skupina delov, ki so izdelani, dobavljeni ali montirani skupaj: zaporedje montaže, dobava, serija. Vsak element in vsaka temeljna stopa sta v eni fazi. Povezava je v fazi svojega glavnega elementa: nosilca pri čelni plošči, stebra pri podložni plošči. Nov model ima eno fazo.

## Podokno Faze

Razdelek {{ui:Faze}} v podoknu {{ui:Model}} navede vsako fazo:

- potrditveno polje prikaže ali skrije fazo v pogledu;
- številka in ime, ki ga lahko vtipkate (prazno = „Faza 2“ in tako naprej);
- koliko delov je v njej;
- gumb {{ui:×}} odstrani fazo. Odstrani se lahko samo prazna faza: najprej premaknite njene dele v drugo fazo.

{{ui:Dodaj fazo}} doda naslednjo številko in jo naredi za fazo, v katero gredo novi deli.

## Dajte dele v fazo

- **Novi deli:** {{ui:Novi deli gredo v}} izbere fazo, v katero gre vsak element in vsaka temeljna stopa, ki ju postavite od zdaj naprej.
- **En del:** izberite ga in spremenite {{ui:Faza}} v podoknu {{ui:Lastnosti}}.
- **Več delov:** izberite jih (okno, {{key:Shift}}+klik, {{key:Mod+A}}) in spremenite {{ui:Faza}} na vrhu podokna {{ui:Lastnosti}}. Prikaže **Različno**, če so v različnih fazah. Ena sprememba je en korak razveljavitve.

Kopije ohranijo fazo dela, iz katerega so bile kopirane, tudi če jih prilepite v drug model (faza se tam doda).

## Prikaz in skrivanje faz

Skrita faza ni prikazana v pogledu, je ni mogoče klikniti ali zajeti z oknom izbora, {{key:Mod+A}} pa jo izpusti. Še vedno je v kosovnici, poročilih, risbah in vseh izvozih. Skrivanje velja samo za pogled: ne shrani se in nima razveljavitve.

## Oznake po fazah

Z vklopljeno možnostjo **Številči oznake po fazah** (privzeto je vklopljena) in deli v več kot eni fazi se vsaka faza številči posebej, njene oznake pa se začnejo s številko faze: oznake delov 1-b1, 2-b1, oznake sestavov 2-B1, temeljne stope 2-F1. Dva enaka nosilca v različnih fazah imata zato različni oznaki, ker sta izdelana in odpeljana ob različnih časih. Če je v uporabi ena sama faza, oznake nimajo predpone. Izklopite možnost, če želite številčiti ves model kot enega, tako da imajo enaki kosi isto oznako, ne glede na fazo.

Faza je zapisana v izvozu IFC (nabor lastnosti DetailCraft, Phase).

:::note
Modeli s fazami so shranjeni v formatu datoteke DetailCraft 2. Izdaja 0.3 DetailCraft jih ne more odpreti; ta izdaja odpre starejše datoteke, pri čemer so vsi deli v fazi 1.
:::
