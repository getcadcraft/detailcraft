---
title: Prilepenie skopírovanej oblasti ako referenčného obrázka
summary: Skopírujte časť listu PDF v MarkupCraft a prilepte ju do DetailCraft v skutočnej veľkosti, položenú na úrovni pod oceľou, aby ste nad ňou mohli modelovať.
keywords: referenčný obrázok, obrázok, podklad, pozadie, kopírovať oblasť, markupcraft, pdf, obkresliť, skutočná veľkosť, mierka, nepriehľadnosť, prekrytie
from: 0c48445f
---

Nástroj MarkupCraft na kopírovanie oblasti skopíruje časť listu ako obrázok, ktorý pozná svoju veľkosť. Prilepte ho do DetailCraft a ľahne si na úroveň v skutočnej veľkosti pod mriežku a oceľ, takže môžete prvky umiestniť nad pôdorys z výkresov.

## Prilepte ho

1. V MarkupCraft skopírujte oblasť pomocou {{ui:Viac}} › {{ui:Kopírovať oblasť strany…}}, potom {{ui:Kopírovať}} (alebo {{ui:Kopírovať ako prekrytie}}, ktoré urobí papier priehľadným).
2. V DetailCraft (v tom istom prehliadači) stlačte {{key:Mod+V}} alebo vyberte {{ui:Prilepiť}}.

Obrázok sa vloží do stredu mriežky na úrovni zobrazenej v pôdoryse (v 3D alebo v pohľade na najnižšej úrovni) a je vybratý. Stavový riadok uvedie, aká je jeho veľkosť.

- **Skutočná veľkosť:** ak mal list mierku výkresu, jeden pixel sa vykreslí ako dĺžka, ktorú zobrazuje na výkrese.
- **Veľkosť papiera:** ak list nemal mierku, obrázok je taký veľký, aká bola oblasť na papieri, a stavový riadok to uvedie. Zadajte nové **mm na pixel** v {{ui:Vlastnosti}}, aby sa upravila jeho mierka.

Oblasť skopírovaná ako prekrytie sa začne s nepriehľadnosťou, s ktorou bola skopírovaná.

{{key:Mod+V}} prilepí to, čo ste skopírovali naposledy: oblasť z MarkupCraft alebo prvky a pätky skopírované v DetailCraft. Ak bol do schránky po oblasti skopírovaný iný obrázok (z iného programu), nič sa neprilepí; skopírujte oblasť znova.

## Presun, zmena a zmazanie

- Kliknutím na obrázok ho vyberte (najskôr sa vyberie všetko, čo je pred ním). Modrý obrys znamená, že je vybratý.
- Ťahaním ho presuňte po úrovni. Jeho stred a rohy sa prichytia na priesečníky mriežky.
- V {{ui:Vlastnosti}} zadajte, kam má ísť jeho stred (x, y) a úroveň, na ktorej leží (z), jeho **mm na pixel** a jeho **nepriehľadnosť**.
- {{key:Delete}} alebo {{ui:Zmazať}} ho odstráni.

Každé prilepenie, presun, zmena a zmazanie je jeden krok: {{key:Mod+Z}} ho vráti späť.

Obrázok sa uloží do súboru modelu, takže sa otvorí spolu s modelom. Je iba referenčný: nie je vo výkresoch, exportoch, kusovníku ani v kópii.
