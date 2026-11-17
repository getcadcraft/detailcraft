---
title: Pasirinkimas langu, perkėlimas, pasukimas, veidrodinis atspindys, daugelio keitimas
summary: Vilkite langą pasirinkimui, vilkite pasirinktas detales perkėlimui, perkelkite, pasukite ar atspindėkite pasirinkimą (ar jo kopiją) arba pakeiskite daugelio elementų profilį, medžiagą, padėtį ar pasukimą vienu metu.
keywords: laisvas kontūras, tvora, laisvasis pasirinkimas, vilkimas, vilkti ir numesti, perkelti vilkant, prisegimas, langas, kertantis langas, langas pasirinkimui, pasirinkti daug, perkelti, pasukti, veidrodinis atspindys, apversti, kopijuoti, keisti daug, keli elementai, profilis, medžiaga, padėtis, pasukimas, skiriasi, tinklelio linija
from: 50b16f9a
---

Kiekvienas iš šių veiksmų yra vienas anuliavimo žingsnis: vienu {{key:Mod+Z}} viskas atšaukiama.

## Pasirinkimas langu

- {{ui:Planas}} ir {{ui:Fasadas}} rodiniuose vilkite kairiuoju klavišu nuo tuščios vietos. {{ui:3D}} rodinyje laikykite {{key:Shift}} ir vilkite (paprastas vilkimas pasuka modelį).
- Vilkite **į dešinę** – tai langas: pasirenka tai, kas visiškai tilpa į jį, nubrėžta ištisine linija.
- Vilkite **į kairę** – tai kertantis langas: pasirenka viską, ką jis paliečia, nubrėžta brūkšnine linija.
- Laikydami {{key:Shift}} pradėdami vilkti, pridedate prie pasirinkimo vietoj to, kad jį pakeistumėte.
- Planas ar fasadas rodo tik tai, ką matyti: detalės, nupjautos virš plano, arba daugiau nei 1 m nuo fasado tinklelio linijos, nepasirenkamos.
- {{key:Esc}} vilkimo metu atsisako lango.

### Laisvasis kontūras

Pasirinkite **Laisvasis kontūras** skiltyje {{ui:Pasirinkimas vilkiant}} [DetailCraft parametrai](topic:settings), ir tas pats vilkimas nubrėžia laisvą liniją vietoj stačiakampio.

- Pirmasis šoninis judesys nusprendžia, kaip pasirenka: **į dešinę** – tai, kas visiškai viduje (ištisinė linija); **į kairę** – tai, ką paliečia (brūkšninė).
- Spauskite {{key:Space}} vilkimo metu, kad perjungtumėte tarp vidaus, paliečiamo ir **tvoros**: atvira linija, kuri pasirenka viską, ką kerta (taškinė, oranžinė).
- {{key:Shift}}, kad pridėtumėte, ir {{key:Esc}}, kad atsisakytumėte, veikia kaip su langu.

:::touch
Jutiklinis ekranas: vienas pirštas, kaip ir anksčiau, perslenka planą ir fasadą; detales pasirinkite bakstelėdami.
:::

{{ui:Planas}} ir {{ui:Fasadas}} rodiniuose perslinkite dešiniuoju ar vidurio klavišu, kai įjungtas įrankis {{ui:Pasirinkti}}.

## Vilkite detales, kad jas perkeltumėte

1. Pirmiausia pasirinkite detales (spustelėjimu, {{key:Shift}}+spustelėjimu ar langu).
2. Paspauskite ant vienos iš pasirinktų detalių ir vilkite. Visas pasirinkimas juda; brūkšninis kontūras rodo, kur jis eina.
3. Atleiskite, kad padėtumėte. {{key:Esc}} prieš atleisdami grąžina viską atgal.

- {{ui:3D}} ir {{ui:Planas}} rodiniuose detalės juda per lygį. Vilkimo pradžioje {{ui:3D}} rodinyje laikykite {{key:Mod}}, kad jas judintumėte aukštyn ir žemyn.
- {{ui:Fasadas}} rodinyje jos juda fasado ribose: palei tinklelio liniją ir aukštyn bei žemyn.
- Laikoma detalė prisitraukia prie tinklelio sankirtos, kai jos galas priartėja kelių pikselių atstumu (sankirta nušvinta, o būsenos juosta ją nurodo). Kitur perkėlimas vyksta 10 mm žingsniais.
- Paspaudus ant nepasirinktos detalės, vis tiek pasukamas ar perslenkamas vaizdas, todėl vilkimas niekada netyčia nepajudina ko nors.
- Vilkimas yra vienas anuliavimo žingsnis, kaip {{ui:Perkelti}}. Jungtys seka savo elementus.

## Pakeiskite savybę daugeliui elementų

Pasirinkite du ar daugiau elementų. Skiltyje **Keisti visiems** {{ui:Savybės}} skydelyje:

- {{ui:Profilis}}, {{ui:Padėtis}}: sijoms, kolonoms ir tarp jų esančioms įstrižainėms.
- {{ui:Plokštės storis (mm)}} ir {{ui:Plokštės plotis (mm)}}: plokštėms.
- {{ui:Medžiaga}} ir {{ui:Pasukimas (°)}}: visiems.

Laukas rodo **Skiriasi**, kai elementai nesutampa. Įveskite ar pasirinkite reikšmę, ir kiekvienas elementas, kuriam ji taikoma, ją gauna; būsenos juosta nurodo, kiek pakeista ir kiek paliko savo.

Skaitiniai {{ui:Savybės}} skydelio laukai taip pat priima skaičiavimus: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Skaičiavimas, kurio nepavyksta perskaityti, atmetamas, o būsenos juosta nurodo, kur klaida.

## Perkelkite, pasukite ar atspindėkite

Pasirinkite elementus ir pamatus (vieną taip pat), tada naudokite **Perkelti, pasukti, atspindėti** {{ui:Savybės}} skydelyje. Jungtys nejuda savarankiškai: jos seka savo elementus. Jei perkeliate sijas, bet ne jų kolonas, būsenos juosta nurodo, kiek jungčių dabar jungia perkeltą elementą su likusiu, o [Problemos](topic:troubleshooting) rodo, jei jos nebetinka.

- **Perkelti:** įveskite x, y ir z milimetrais ir pasirinkite {{ui:Perkelti}}. Arba pasirinkite {{ui:Nurodyti du taškus}} (ar paspauskite {{key:M}}): spustelėkite tinklelio sankirtą, iš kurios perkelti, tada tą, į kurią perkelti. Brūkšninis kontūras seka žymeklį.
- **Pasukti plane:** įveskite kampą (prieš laikrodžio rodyklę, žiūrint iš viršaus) ir pasirinkite, apie ką sukti: pasirinkimo vidurį arba tinklelio sankirtą. Kolonos sukasi kartu su rėmu.
- **Atspindys:** pasirinkite tinklelio liniją. Veidrodinis atvaizdas – tas pats profilis, apverstas kita kryptimi: dvitaurio flanšai lieka, kanalas atsuka kitą pusę (viršus ir apačia pasikeičia vietomis), o skylės ir įpjovos eina kartu su detale.
- Pažymėkite **Palikti originalą (kopijuoti)**, kad pasirinkimas liktų vietoje, o perkeltumėte, pasuktumėte ar atspindėtumėte kopiją. Jos jungtys bus perkeltos kartu, kai [DetailCraft parametruose](topic:settings) įjungta {{ui:Kopijuoti galines plokštes ir pagrindo plokštes kartu su elementais}}.

Sukimas vyksta apie vertikalią ašį, o veidrodinis atspindys – vertikalioje plokštumoje, todėl aukštai lieka lygūs, o pamatai – stati.
