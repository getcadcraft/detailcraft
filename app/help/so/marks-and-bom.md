---
title: Hubi calaamadaha iyo liiska alaabta
summary: Akhri calaamadaha qaybta iyo isku-dhiska ee DetailCraft siiso qayb kasta, hubi liiska alaabta, oo soo deji CSV.
keywords: calaamadaha, lambar-dhigid, calaamadda qaybta, calaamadda isku-dhiska, calaamadda qayb-ka, bom, liiska alaabta, liiska agabka, miisaanka, liiska boolalka, csv
from: caa2ee80
---

DetailCraft calaamadeeyaa moodeelka isagu. Ma jiro amar lambar-dhigid ah, wax la fulo ma jiraan: markasta oo isbeddel ah kadib, wuxuu go'aaminayaa qaybaha oo kala ah isla birta, wuxuuna siiyaa hal calaamad.

## Meelaha calaamadaha ka muuqdaan

- Liiska {{ui:Calaamadaha qaybaha}} ku jira daafaca {{ui:Moodeelka}}: calaamad kasta oo leh profile, dherer iyo tiro. Guji mid si uu u doorto qaybta ugu horreysa ee leh calaamadaas.
- Daafaca {{ui:Sifooyinka}} ee xubin la doortay (iyo liiska **Calaamadaha qaybaha** ee daafaca bidix): {{ui:Calaamadda qaybta}} iyo {{ui:Isku-dhis}}. Madasha daafaca ayaa sidoo kale leh calaamadda, tusaale ahaan "Biim b1".
- Tab-ka {{ui:Liiska alaabta}}, CSV-ga, magacyada faylalka NC, xaashiyada naqshadda iyo dhoofinta IFC (tag element kasta).

## Sida qaybaha loo calaamadeeyo

- **Calaamadaha qaybaha:** c tiirarka, b biimarka, br xidhka, st stringer-ka jaranjarada, p saxannada (oo ay ku jiraan saxannada dhamaadka iyo saxannada aasaaska). Kadibna lambar: c1, c2, b1, p1 … Haddii qaybtu ku jirto in ka badan hal phase, lambarka phase-ka ayaa hore u iman doona, tusaale ahaan 2-b1.
- **Calaamadaha isku-dhiska:** C, B, BR ama P. Isku-dhis waa xubin aasaasi ah iyo saxannada laxaamaysan, sida biim leh labada saxan dhamaadka, ama tiir leh saxan aasaaskiisa.
- Laba qayb waxay wadaagaan calaamad haddii ay leeyihiin isla profile, birta iyo dherer gooyo, iyo isla godadka iyo jaridda, dhammaantood dhex-marin 1 mm, xitaa haddii mid laga rogay mid kale.
- Lambar-dhigiddu wuxuu bilaabmaa tiirarka, ka dib biimarka, xidhka iyo saxannada; gudaha mid kasta, magaca profile-ka, ka dibna kan ugu dheer marka hore.

Xeerarka oo dhan, oo ku jira wareegyada channel-ka iyo angle-ka: [Xeerarka calaamadda](topic:mark-rules).

:::warning
Calaamadaha waxaa dib loo xisaabiyaa mar kasta oo isbeddel ah, sidaas darteed waa dib loo lambar-dhigi karaa. Ku dar qayb, bedel profile ama ku dar god ayaa u wareejin kara b3 b4. Calaamadaha u qaad kuwo go'an kaliya marka moodeelku dhammaystiran yahay, oo BOM-ka, faylalka NC iyo xaashiyada naqshadda ka samee isla moodeelka la kaydiyay.
:::

## Akhri liiska alaabta

Fur tab-ka {{ui:Liiska alaabta}} hoose. Wuxuu leeyahay saddex miis.

**Qaybaha**, oo miisaanka birta ee wadarta ahi ku jiro madasha:

| Tiir | Macnaha |
|---|---|
| Calaamadda qaybta | Guji si uu u doorto qaybta ugu horreysa ee calaamadan |
| Nooca | biim, tiir, xidh, stringer ama saxan |
| Profile | Tusaale: W16x26 ama PL20x180 |
| Agabka | Darajada aad dejisay |
| Dherer (mm) | Dherer la gooyay, kadib xidhiidhka |
| Tiro | Inta ay tahay |
| Miisaanka unit-ka (kg) | Miisaanka profile-ka halkii mitir × dherer |
| Miisaanka wadarta (kg) | Miisaanka unit-ka × tiro |

Safka ugu dambeeya wuxuu bixiyaa wadarta tirada iyo miisaanka.

**Isku-dhisyada:** calaamad kasta oo isku-dhis, qaybtiisa ugu weyn, dhammaan qaybahooda (tusaale "b1 + p1 + p1"), tiro, miisaanka unit-ka iyo wadarta.

**Boolalka iyo rodadka angkoorka:** waxaa lagu kooxeeyaa nooca, dhexroorka, dherer iyo darajada, tiro leh.

:::note
Miisaanku waa gross: godadka iyo jaridda lama jaro. Boolalka, nuts-ka, wishaarada iyo laxaamadu ma ku jiraan miisaanka birta.
:::

## Soo deji

Dooro {{ui:Soo deji CSV}} tab-ka, ama {{ui:BOM}} kooxda {{ui:Wax soo saar}}. Faylka `<name> BOM.csv` wuxuu haystaa saddexda miis, mid ka dib midka kale, mid kasta oo leh cinwaankiisa, iyadoo safka madhan u dhexeeya. Waa la furi karaa barnaamij kasta oo spreadsheet ah.

## Hubi kahor inta aadan diraynin

1. Fur tab-ka {{ui:Dhibaatooyinka}} oo nadiifi safka kasta. Connection aan la dhisi karin ma ku darto saxan, godad ama boolal, sidaas darteed BOM-ku wuu gaabnaan doonaa.
2. Eeg calaamadaha aadan filayn. Laba biim oo aad u malaynayso inay isku mid yihiin laakiin calaamado kala duwan leh, badanaa waxay ku kala duwan yihiin god, jarid ama dherer gooyo; guji mid kasta oo isbarbardhig.
3. Kaydi moodeelka, kadibna samee dhoofin kasta laga bilaabo xaaladda la kaydiyay.
