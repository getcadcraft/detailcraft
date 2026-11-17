---
title: Uporaba DetailCraft z AI pomočnikom
summary: Naj vaš lastni AI pomočnik ali skript bere model, njegove dele, težave in kolizije, dodaja elemente in povezave, shranjuje in izvaža (tudi USD): dovoljenja, povezava prek CadCraft Studio in dnevnik dejavnosti.
keywords: ai, pomočnik, agent, mcp, model context protocol, skript, avtomatizacija, deli, kolizije, povezave, dovoljenja, prekinitev, dejavnost, razveljavi
from: d624c9a0
---

## Kaj boste izvedeli

Kako lahko pomočnik z umetno inteligenco (ali skript, ki ste ga napisali) dela z DetailCraft in kako določite, česa se sme dotikati.

DetailCraft **nima lastne umetne inteligence** in ničesar ne pošilja nikamor. Pomočnika prinesete sami: poljuben program, ki govori Model Context Protocol (MCP). DetailCraft mu ponudi samo orodja, izbor pa je vaš.

## Vklop

1. Odprite {{ui:Nastavitve}} (zobnik v vrstici aplikacije ali {{key:Mod+,}}) in pojdite na zavihek {{ui:DetailCraft}}.
2. Pod {{ui:Pomočniki}} označite **Dovoli pomočnikom z umetno inteligenco in skriptom uporabo DetailCraft**. Dokler tega ne storite, je izklopljeno.
3. Izberite, kaj sme: **Branje** je na začetku označeno; označite **Urejanje**, **Shranjevanje** ali **Izvoz** samo, kadar jih potrebujete.

Orodja, ki so zunaj označenih dovoljenj, pomočniku niso ponujena; če jih kljub temu zahteva, DetailCraft zahtevo zavrne in jo zapiše v dnevnik dejavnosti. Izklop stikala prekine vse povezave naenkrat.

## Povežite pomočnika

Pomočniki se povežejo prek **CadCraft Studio** na vašem računalniku: Studio zažene majhen strežnik, ki ga lahko doseže samo ta računalnik, zaščiten z žetonom, ki ga ustvari ob vsakem zagonu. V Studiu izberite {{ui:Poveži pomočnika}} in kopirajte naslov ter žeton v svojega pomočnika (Studio prikaže točne nastavitve za prilepljanje). Žetona nikoli ne delite.

:::note
Zavihek brskalnika ne more odpreti povezave za pomočnika: v aplikacijah v brskalniku stikalo ne deluje, dokler ne uporabite CadCraft Studio na svojem računalniku.
:::

## Vi ostanete v nadzoru

- **Vsaka sprememba je en korak razveljavitve**, označen kot pomočnikov (na primer "Pomočnik: dodaj nosilec", "Pomočnik: dodaj ojačitve"). {{key:Mod+Z}} vzame nazaj pomočnikovo zadnjo spremembo kot celoto. Pomočnikov lastni `undo` povrne samo njegove korake, nikoli vaših, razen če to izrecno zahteva.
- **Počaka na vas.** Medtem ko postavljate element, premikate dele ali lepite, DetailCraft zavrne pomočnikove spremembe in mu naroči, naj poskusi znova.
- **Veste, kdaj je povezan.** Gumb v vrstici aplikacije med povezavo navede pomočnika; kliknite ga, da vidite, kaj sme, ali da ga **prekinete**.
- **Dejavnost.** {{ui:Nastavitve}} › {{ui:DetailCraft}} › {{ui:Pomočniki}} › {{ui:Dejavnost}} našteje vsak klic: kdaj, kateri orodje, opravljen ali zavrnjen. {{ui:Shrani dnevnik}} shrani kopijo.

## Kaj lahko pomočnik zahteva

Vse dolžine so v milimetrih, točke `[x, y, z]` z osjo z navzgor, kot v modelu.

| Orodje | Dovoljenje | Kaj počne |
|---|---|---|
| `app_info`, `model_describe` | Branje | Odprt model: mreže, etaže, faze, elementi po vrsti in profilu, povezave, temelji, stopnišča, deli, teža jekla, težave |
| `parts_list` | Branje | Oznake delov s profilom, materialom, dolžino reza, številom, težo, fazo in oznakami sestav; po vrsti, profilu, oznaki ali fazi |
| `problems_list` | Branje | Kar našteje zavihek {{ui:Težave}}, vsaka s tem, na kaj se nanaša |
| `clash_check` | Branje | [Preverjanje kolizij](topic:clash-check), s svojo toleranco in fazami |
| `selection_get` | Branje | Kar imate izbrano |
| `selection_set` | Urejanje | Izbere elemente, povezave, temelje ali stopnišča (po ID ali oznaki dela), da vam jih pokaže; ničesar ne spremeni |
| `member_add` | Urejanje | Nosilec, steber, diagonala ali plošča med dvema točkama |
| `connection_add` | Urejanje | Končne plošče, strižni jezički, podnožne plošče, nadaljevanja ali ojačitvene plošče tam, kjer se stikajo dani elementi, kot to naredijo gumbi {{ui:Poveži}} |
| `undo` | Urejanje | Vzame nazaj pomočnikove zadnje korake |
| `model_save` | Shranjevanje | Lastno shranjevanje DetailCraft |
| `model_export` | Izvoz | IFC, datoteke NC, kosovnica (BOM), razpored krivljenja, datoteka KISS ali seznam rezanja, kot jih naredijo gumbi {{ui:Izhod}} |
| `usd_export` | Izvoz | Jeklen model kot USD (.usda, .usdc ali .usdz), kot ga zapiše {{ui:Izhod}} › {{ui:USD}} (glejte [Izvoz jeklenega modela v USD](topic:usd)); v Studiu lahko datoteko zapiše v mapo, ki ste jo dovolili |

## Če kaj ne deluje

- **Pomočnik ne vidi orodij DetailCraft:** preverite, ali je stikalo v tem oknu vklopljeno in ali je okno odprto v Studiu.
- **"potrebuje dovoljenje za urejanje"** (ali za shranjevanje, izvoz): označite ga pod {{ui:Pomočniki}} in ponovno vprašajte.
- **"Oseba postavlja element":** dokončajte, kar delate (ali pritisnite {{key:Esc}}), nato naj pomočnik poskusi znova.
- **Napake "401" ali "token":** žeton se je spremenil (Studio se je znova zagnal ali {{ui:Nov žeton}}). Kopirajte novega v nastavitve pomočnika.

## Glejte tudi

- [Recepti za AI pomočnike](common:assistants-recipes): zgledi, vsak z orodji, ki jih kliče.
