---
title: Hubi qaybaha kaadhida iyo samee culeysyada jilicsanaanta
summary: Deji birta biimaha iyo tiirarka kaadhida, hubi iyaga sida ACI 318-19, samee xoogagga dhinaca ah ee ASCE 7-22 ee dabaqyada adag, oo eeg dhaqdhaqaaqa dabaqa. Caawin injineer si uu u hubiyo.
keywords: kaadhi, kaadhi birta, ACI 318, ACI 318-19, birta, biim, tiir, ties, dhulgariir, xoog dhinac u socda, ELF, ASCE 7-22, dhaqdhaqaaq, dabaq, dabaqyada, diaphragm adag, miisaanka dabaqa, utilisation, qaab-dhismeed, injineer
from: 94d3001d
---

Qaybaha {{ui:Xubnaha kontaadada}} iyo {{ui:Culeysyada jilicsanaanta}} ee tab-ka {{ui:Falanqayn}} waxay hubiyaan biimaha kaadhida birta ah iyo tiirarka, waxayna sameeyaan xoogagga dhinaca ee dhulgariirka ee dabaqyada qaab-dhismeedka. Labaduba waxay raacaan socodka tab-ka {{ui:Falanqayn}} waana la kaydiyaa moodeelka.

:::warning
Natiijooyinku **waa kuwo injineer hubiyo**: caawin ilaa injineer uu dib u eego. Hubinta kaadhida waxay isticmaashaa xoogag tartiib-kowaad, marka laga reebo tiirka qaab-dhismeed aad u sheegtay non-sway, kaas oo loo naqshadeeyo moment-ka kor u kacay, iyada oo aan jirin kor u kac sway, naqshadeyn torsion, faahfaahin jilicsanaan (ACI cutubka 18) iyo faahfaahin ties. Culeysyada dhulgariirka waxay ka reebaan factor-ka redundancy, saameynta dhulka ee toosan, kor u kaca torsion iyo saameynta P-delta. Culeysyada dabaysha weli lama dhisin.
:::

## Samee xubnaha

Samee xubnaha kaadhida sida leexyo: profile {{ui:Saxan}} sida `PL400x400` tiir ahaan iyo `PL300x600` biim ahaan ayaa bixiya qaybta. Tiirarka iyo biimaha waa la dhigaa sida qayb kasta oo kale.

## Deji qaybaha

Qaybta {{ui:Xubnaha kontaadada}} waxay liistaa qaybo kasta oo xubnuhu isticmaalaan. Riix {{ui:Ku deji kontaado…}} kuwa kaadhida ah. DetailCraft wuxuu akhrinayaa ballaca **b** (dhererka y-ka xubnaha) iyo dhererka **h** (z) profile-ka la sawiray, kadibna wuxuu weydiiyaa:

- **dahaarka** ilaa bartamaha birta, iyo birta **sare**, **hoose** iyo **dhinac** (tirada iyo dhexroorka) biim ahaan, ama **tiirka birta** (birta dhinaca b iyo dhinaca h, dhexroorka, ties-ka wareegsan) tiir ahaan;
- **ties**: lugaha, dhexroorka iyo masaafada;
- waxa xubinta **ay u shaqeyso**: biim, tiir, ama go'aan laga gaaro xoogagga (xubin toosan, ama mid qaadaysa in ka badan 0.10 f′c Ag waa tiir).

Deji f′c, yield-ka birta fy iyo yield-ka ties fyt (420 MPa ugu badnaan ayaa tirin shear-ka), K iyo in qaab-dhismeedku yahay sway ama non-sway kor ahaan. Qaybta loo dejiyay sida kaadhi waa la falanqeeyaa sida kaadhi: E = 4700 √f′c, 2400 kg/m³, iyo caadi ahaan **qaybaha la jeexay** (tiirarka 0.70 Ig, biimaha 0.35 Ig; ACI 318-19 Table 6.6.3.1.1(a)). Dooro {{ui:Qaybaha buuxa}} si aad taas u demiso.

## Samee isku-darka iyo hubi

Siiso load cases nooca ay yihiin, kadibna {{ui:Samee isku-darka}}: ACI 318-19 wuxuu qaataa isku-darka xoogga ee ASCE 7 (§5.3.1). Riix {{ui:Hubi kontaadada}} wuxuuna xubin kasta siinayaa utilisation, oo lagu midabeeyo moodeelka sida hubinta birta: flexure iyo birta ugu yar (22.2, 9.6.1.2), xakamaynta xiriirka tension (9.3.3.1), shear oo leh ties (22.5, 9.6.3), fogaanta ties, iyo cadaadiska axial oo leh moment tiirarka (22.4, iyo habka Bresler ee laba-jihada). Xubin qaabkeedu ka duwan yahay b × h aad qortay wuxuu akhrinayaa *partly checked*, sidaas oo kale tiir sirdhan ama torsion ka sarreeya heerka xadka: kuwaas lama naqshadeeyo.

Xubnaha ka sarreeya awoodooda waa la liistaa {{ui:Dhibaatooyinka}}; aqbal mid sabab, ama hagaaji qaybta.

## Dabaqyada iyo xoogagga dhulgariirka

Dabaq waa heer halkaas oo qaab-dhismeedku ku xidhan yahay dusha adag (**rigid diaphragm**). Qaybta {{ui:Culeysyada jilicsanaanta}} riix {{ui:Hel dabaqyada}}: wuxuu qaadaa heerarka ay biimo laba ama in ka badan isku kulmaan. Kadibna dabaq kasta siiso **miisaanka dhulgariirka**, la qoray ama la akhriyay. {{ui:Qaado miisaanka kiisaska}} wuxuu isku daraa culeysyada toosan ee load cases-ka aad siiso factor (dead case waa 1; ku dar 0.25 case kaydka ama barafka saqafka fiiqan sida ASCE 7-22 12.7.2 weydiiso). Culeys toosan oo node kasta waxa loo gudbiyaa dabaqa ku jira ama ka sarreeya, sidaas darteed tiir u dhexeeya laba dabaq wuxuu siiyaa nus miisaankiisa dabaq kasta.

Buuxi qiyamka naqshadda: SDS, SD1, S1, R, Ie, Cd, TL, qaab-dhismeedka (xilliga) iyo qeybta khatarta. {{ui:Samee kiisaska jilicsanaanta}} wuxuu kadibna xisaabiyaa xilliga dhererka dhismaha (12.8.2.1), cadaadiska saldhiga V = Cs W (12.8.1), wuxuu u kala qaybiyaa dabaqyada kor (12.8.3) wuxuuna qoraa afar load cases, X iyo Y, oo leh 5 % torsion gaar ah dhinac kasta (12.8.4.2). Xoogagga dabaqa iyo hubinta drift-ka dabaqa (12.8.6, Table 12.12-1, drift Cd δxe / Ie oo lagu barbar dhigo 0.020 hsx) waxay soo muuqdaan kadib socod; drift ka sarreeya xadkiisa waa dhibaato kale. Riix {{ui:Samee isku-darka}} mar kale si aad kiisaska jilicsanaanta isugu geliso isku-darka.

**Xilliga ka yimid falanqaynta.** Xilliga qiyaasta ah Ta waxa laga helaa dhererka dhismaha. Markaad socodsiiso falanqaynta kiisaska jilicsanaanta, {{ui:Qaado xilliga falanqaynta ka yimid}} wuxuu akhrinayaa inta dabaq kasta u dhaqaaqday xoogagga hoostooda, wuxuuna xisaabiyaa xilliga habka Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), mar X iyo mar Y; kiisaska jilicsanaanta mar kale ayaa la sameeyaa. Xilliga la isticmaalo marna kama badna Cu·Ta (ASCE 7-22 12.8.2), sidaas darteed moodeel jilicsan ma hoos u dhigi karo cadaadiska saldhiga ka hooseeya taasi. Xilliga mar kale qaado kadib socodka labaad: wuxuu isku dhaqaaqaa tallaabo ama laba. Ka saar {{ui:Xilliga ka yimid falanqaynta}} si aad ugu noqoto Ta.

**Tiirarka sirdhan (ACI 318-19 6.6.4.5).** Qaab-dhismeedka aad u sheegtay non-sway, tiir kasta oo k·ℓu/r uu ka sarreeyo 34 + 12·M1/M2 (ugu badnaan 40) waxaa loo naqshadeeyaa moment-ka kor u kacay Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² iyo (EI)eff = 0.4 Ec Ig / (1 + βdns), iyo moment-ka ugu yar Pu (15 + 0.03 h). βdns (0.6 bilowga) waa qaybta cadaadiska toosan ee la qabtay ee xisaabaysa: qor kaaga. Tiir Pu-keedu gaaro 0.75 Pc wuxuu fashilmaa hubintiisa gaarka ah. Warbixintu waxay liistaa tirooyinka tiir kasta oo sirdhan ah. Qaab-dhismeed **sway** ah tiir sirdhan ayaa wali "partly checked": kor u kaceeda wuxuu u baahan yahay falanqayn dalab labaad, taas oo weli lama dhisin.

**Saxamada.** Marka moodeelka uu leeyahay saxamo, block-ka {{ui:Birta sagxadda}} wuxuu qaadaa momentyada saxamada ee dhammaan isku-darka xoogga, wuxuuna habka Wood–Armer (oo kala soo jeedinta iyo wareegga wada) xisaabiyaa birta ay kasta layrka u baahan tahay mitir kasta: hoose iyo sare, x iyo y. Waxaad siisaa dhumucda, dahaarka iyo birta; miiskuna wuxuu muujinayaa waxa loo baahan yahay iyo waxa la siiyey, iyo shear-ka hal-dhinac ee ka soo horjeeda φVc; layrka waxa ka yar yahayna waa dhibaato oo leh qodobkeeda. Hoos u dhaca, dilka tiirarka iyo birta ilaalinta furitaanka lama daboolin, momentka dhexe ee taageerada ayaa si gaabis ah ugu dhow yimaadaa saxamada afar-geesle.

Dabaq kasta oo aad liistaysid waxa uu noqdaa diaphragm adag falanqaynta: biimahiisu ma qaadaan xoog toosan oo ka yimid dhaqdhaqaaqa dabaqa. Soo saarista CraftScript looma sameeyo moodeel leh dabaqyo.

## Warbixinta

{{ui:Warbixin (PDF)}} iyo {{ui:Warbixin (CSV)}} waxay ku daraan miisaska kaadhida (male-guuraha, utilisation sida xubin, dhammaan clause-ka), cabbirrada jilicsanaanta iyo base shear, xoogagga dabaqa iyo miiska drift.
