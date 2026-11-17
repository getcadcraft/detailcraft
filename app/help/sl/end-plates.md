---
title: Povezava nosilcev s stebri s čelnimi ploščami
summary: Dodajte privijačene čelne plošče tam, kjer nosilec stika s pasnico ali steno stebra, nastavite ploščo, vijake in var ter kopirajte spoj na vse podobne spoje.
keywords: čelna plošča, endplate, momentni spoj, privijačen spoj, spoj, vijaki, var, podaljšana čelna plošča, poravnano, podobno, kopiranje spoja, komponenta
from: 21e028b2
---

Čelna plošča povezuje konec nosilca tako, da ploščo privari na konec nosilca in jo privijači na pasnico ali steno stebra. DetailCraft postavi ploščo, odreže nosilec, izvrta ustrezne luknje v plošči in pasnici stebra, doda vijake in var ter preveri robne razdalje in razmike.

:::warning
DetailCraft ne dimenzionira spojev. Nastavitve so izhodiščne vrednosti, ki jih morate spremeniti; nič ne preverja nosilnosti. Opozorila o robovih in razmikih uporabljajo najmanjše vrednosti iz EN 1993-1-8, tabela 3.3, ki se lahko razlikujejo od pravil, po katerih delate.
:::

## Kaj lahko poveže

- **Vodoraven** nosilec (oba konca na isti višini), navpičen (zasuk 0), s profilom I.
- V **pasnico** ali **steno** **navpičnega** stebra s profilom I, pravokotno nanj.
- Konec nosilca mora ležati na osi stebra, med spodnjim in zgornjim robom stebra.

Poševni ali nagnjeni nosilci in preseki, ki niso I, so zavrnjeni z razlogom: za te uporabite [strižne vezne plošče](topic:shear-tabs). Na steni morata plošča in pasnici nosilca ležati med pasnicama stebra; DetailCraft opozori, kadar ne ležita.

:::tip
Pri zasuku 0 pasnici stebra gledata v smeri oštevilčenih mrež (x). Nosilec od A do B stika steno in dobi čelno ploščo na steni.
:::

## Dodajanje čelnih plošč nosilcu

1. Izberite {{ui:Izberi}} ({{key:V}}) in kliknite nosilec.
2. Izberite {{ui:Čelne plošče}} v skupini {{ui:Poveži}} ali {{ui:Dodaj čelne plošče}} na plošči {{ui:Lastnosti}}.
3. Vsak prosti konec nosilca, ki pravokotno stika pasnico ali steno stebra, dobi ploščo. Vrstica stanja pove: „Dodani sta 2 čelni plošči. Izberite eno, da spremenite ploščo, vijake in var; Podobno jo kopira v podobne spoje.“
4. Prva nova čelna plošča je izbrana, njene nastavitve pa so na plošči {{ui:Lastnosti}}.

Če se nič ne zgodi, preberite vrstico stanja:

- „Ta nosilec se ne konča na osi stebra. Čelne plošče gredo tja, kjer se konec nosilca stika z navpičnim stebrom.“
- „Ta nosilec stika steber pod kotom ali je nagnjen: čelne plošče so narejene za pravokotne, vodoravne spoje. Uporabite strižne vezne plošče.“
- „Oba konca že imata spoje.“

## Spremenite ploščo, vijake in var

Kliknite čelno ploščo (ali enega od njenih vijakov), da izberete spoj. Pod {{ui:Plošča, vijaki in var (mm)}}:

| Nastavitev | Privzeto | Kaj počne |
|---|---|---|
| Debelina plošče | 20 | Debelina plošče; tudi koliko je nosilec odrezan čez pasnico |
| Širina plošče | 180 | Čez spoj |
| Podaljšek nad nosilcem | 0 | Nad zgornjo pasnico; nad 0 naredi podaljšano čelno ploščo |
| Podaljšek pod nosilcem | 0 | Pod spodnjo pasnico |
| Premer vijaka | 20 | Nazivna velikost vijaka |
| Premer luknje | 22 | Vaša reža za luknjo v plošči in pasnici stebra |
| Razred vijaka | A325 | Besedilo; izpiše se v kosovnici |
| Vrste vijakov | 4 | Vrste po dva vijaka, središčno glede na višino plošče |
| Razmik vrst | 75 | Navpični razmik med vrstami |
| Razmik v vrsti | 100 | Vodoravni razmik med dvema vijakoma v vrsti |
| Dodatek za dolžino vijaka | 30 | Dodano k pritrjeni debelini za matico, podložko in navoj; glejte spodaj |
| Velikost kotnega vara | 8 | Okoli celotnega konca nosilca |
| Material plošče | A36 | Besedilo |

Vnesite novo vrednost in pritisnite {{key:Enter}} ali {{key:Tab}}. Plošča, luknje, vijaki in odrezana dolžina nosilca se takoj posodobijo. Vsaka sprememba je en korak razveljavitve.

Pod nastavitvami vidite, kaj spoj naredi:

- {{ui:Vijaki}}: na primer „8 × 20 × 70 A325 (grip 36.2)“.
- {{ui:Var}}: velikost, kje in njegova dolžina.
- {{ui:Plošča}}: njena velikost in oznaka dela.

### Kako se računajo številke

- Nosilec je odrezan za polovico globine stebra (na steni: za polovico debeline stene) plus debelino plošče, tako da plošča leži na površini.
- Višina plošče je globina nosilca plus oba podaljška.
- Dolžina vijaka = oprijem (debelina plošče + debelina pasnice ali stene stebra) + dodatek, zaokrožen navzgor na naslednjih 5 mm.
- Prikazana dolžina vara je obseg preseka nosilca.

### Opozorila

Spoj se še vedno zgradi, vendar se ta opozorila prikažejo pod njim in na zavihku {{ui:Težave}}:

- Vrste vijakov ali vijaki bližje robu plošče kot 1.2 × premer luknje.
- Razmik vrst pod 2.2 × premer luknje ali razmik v vrsti pod 2.4 × premer luknje.
- Luknje, ki segajo v steno stebra ali njen zaobljen prehod, ali izven pasnice stebra.
- Plošča, širša od pasnice stebra, ali (na steni) širša od prostora med pasnicama; pasnice nosilca, ki med njima ne ležijo.
- Vrsta vijakov preblizu pasnice nosilca ali razmik v vrsti pretesen za steno nosilca in njegov var.

## Kopiranje na vse podobne spoje

1. Izberite spoj, ki ste ga nastavili.
2. Izberite {{ui:Uporabi za podobne (n)}} na plošči {{ui:Lastnosti}} ali {{ui:Podobno}} v meniju {{ui:Več}} skupine {{ui:Poveži}}. Številka v oklepaju je število spojev, ki jih bo dobilo.
3. Vsak spoj z enakim profilom nosilca in stebra, z nosilcem v enako vrsto ploskve, ki še nima spoja, dobi kopijo z enakimi nastavitvami. Vrstica stanja pove, koliko jih je.

Kopije so neodvisne: sprememba ene pozneje ne spremeni drugih. Spoji, ki že imajo spoj, ostanejo nedotaknjeni; če jih želite zamenjati, jih najprej izbrišite.

## Premikanje in brisanje

Spoji se ob vsaki spremembi modela znova izdelajo iz svojih nastavitev, zato premik ali spreminjanje velikosti nosilca ali stebra prenese tudi čelne plošče. Če sprememba pomeni, da spoj ne ustreza več, spoj ostane v modelu, zavihek {{ui:Težave}} pa pove, zakaj, na primer „Konec nosilca ni več na osi stebra.“

Spoj izbrišete tako, da ga izberete in pritisnete {{key:Delete}}. Brisanje nosilca ali stebra izbriše tudi njegove spoje.

Naprej: [Dodajanje podložnih plošč in sidrnih palic](topic:base-plates).
