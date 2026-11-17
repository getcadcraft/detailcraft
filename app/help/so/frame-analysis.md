---
title: Falanqee qaabka
summary: Xoogagga, falcelinta iyo gooyaanka beamyada, tiirarka iyo xidhidhka sida loo sawiray, iyadoo la adeegsanayo kiisaska culeyska iyo isku-darrada aad dejisay. Caawimo falanqeyn, ma aha hubin xeer; hubinta naqshadda waa tallaabo kale.
keywords: falanqayn, falanqaynta qaabka, falanqaynta qaabka, habka adkaysiga, culeysyo, kiiska culeyska, isku-dar, culeyska joogtada ah, culeyska hawlgalka, miisaanka iskiis, falcelinta, momentka qallooca, jiidista, xoogga tooska ah, gooyaanka, qaabka gooyaanka, taageerooyin, xidhan, go'an, sii-deyn, warbixin, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Tab-ka {{ui:Falanqayn}} ee hoosta wuxuu helaa xoogagga beam kasta, tiir kasta iyo brace kasta ee moodeelka, falcelinta saldhigyada tiirarka, iyo sida xubnuhu u gooyaan, iyadoo loo eegayo culeysyada aad siisay.

:::warning
Waa **caawimo falanqeyn, ma aha hubin xeer**. Falanqeyntu ma adeegsato xeer naqshad: ma cabbirto xubnaha, ma hubiso awoodda ama xidhiidhka, ma doorto factor-yada culeyska. Injineer ayaa dib u eegaya moodeelka, culeyska iyo taageerooyinka, wuxuuna go'aamiyaa macnaha tirooyinka. Hubinta xubnaha sida ASCE 7 / AISC 360 ama EN 1990 / EN 1993-1-1 eeg [Hubi xubnaha birta xeer naqshadeed](topic:design-checks), oo ah tallaabo kale oo caawimo ah.
:::

## Socodsii

1. Fur tab-ka {{ui:Falanqayn}}.
2. Dooro hal ama dhowr xubin muuqaalka, dooro {{ui:Xaaladda}}, {{ui:Culeys}} iyo {{ui:Jihada}}, qor qiimaha oo riix {{ui:Ku dar culeys}}. Culeys fidsan xubin dheer waa kN/m, culeys barta waa kN. {{ui:Hoos (jaadbiga)}} waa midka caadiga ah.
3. Riix {{ui:Socodso falanqaynta}}.

Miiska wuxuu liistaa xoogga tooska ah N ee xubin kasta oo ugu weyn, jiidista Vz iyo Vy, momentsyada qallooca My iyo Mz, torsion T iyo gooyaankiisa, iyadoo momentka ugu weyn ku horreeya. Riix magaca xubinta si aad u doorato. Hoosta waxaa ah falcelinta taageero kasta. {{ui:Moodeelka dushiisa}} wuxuu sawiraa qaabka gooyaanka, ama hal falcelin jaantus dhinac xubin kasta oo qiimihiisa ugu weyn lagu qoray meeshiisa. Natijooyinku way duuban yihiin marka moodeelka isbeddelo: dib u socodsii.

Culeys kasta, xaalad iyo dejin kasta waa hal tallaabo oo dib loo celin karo ({{key:Mod+Z}}) waana la kaydiyaa faylka moodeelka.

## Xaaladaha culeysyada iyo isku-darka

Falanqaynta waxay bilaabataa saddex: **Joog** (miisaanka xubnaha, laga bilaabo qaybahooda la sawiray iyo 7850 kg/m³), **Hawl** (eber) iyo **Joog + hawl**. Ku dar xaalado kaaga (dabayl, barafka …) iyo isku-darro: isku-darku wuxuu isku daraa xaaladaha factor-yada aad qortay. Falanqeyntu waa toosan tahay, sidaas darteed xaalad kasta mar ayaa la xalliyaa, isku-darradu waa wadar. Factor-yada ku qor adiga, ama dooro koodh naqshadeed oo {{ui:Samee isku-darka}} qorto koodhkaas (eeg [Hubi xubnaha birta xeer naqshadeed](topic:design-checks)).

## Waxa qaabku ka samaysan yahay

- Beamyo, tiirar iyo braces, mid kastaa ku yaal khadkiisa shaqada (khadka aad sawirtay), iyo sifooyinka dhabta ah ee cutubka oo laga xisaabiyey qaabkiisa. Plates, sallaallada, aasaasyada iyo boolalku ma ka mid aha qaabka.
- Xubin waa la jaray marka dhamaadka xubin kale ku dhacayo, sidaas darteed beam ku xidhan tiir dhexda ka xidhiidha tiirka halkaas.
- **Saldhigyada tiirarka**: go'an (bilowga) ama xidhan (la xidhay oo laga ilaaliyo jeexjeexa, xoraa inuu leexdo). Plate-ka saldhigga had iyo jeer wuxuu sameeyaa taageero.
- **Dhamaadyada beamka**: plate-ka dhamaadku waa adag, shear tab waa xidhan. {{ui:Dhamaadyada beamka oo aan xidhiidh lahayn}} wuxuu dejiyaa kuwa kale. **Braces** waa xidhan labada dhamaadba.
- Dooro hal xubin si aad u siiso dhamaadkeeda, ama saldhigga tiir, xeer gaar ah.
- Birta oo dhan: E = 200 GPa, G = 77 GPa.

Haddii qaabku dhaqaajin karo isagoo aan wax qallooca — mechanism, sida saldhigyo xidhan oo aan xidhid lahayn hal jiho — socodsiinta way joogsanaysaa, waxayna sheegtaa meesha iyo jihada; ku hay taageero, isku-xirnaan adag ama brace.

## Calaamadaha

N > 0 waa jiid (tension). My > 0 wuxuu dhinaca local −z ee xubinta ku dhigaa jiid: beam ku hoos dhacaya jaadbiga wuxuu leeyahay My > 0. Mz > 0 wuxuu dhinaca local −y ku dhigaa jiid. Gooyaanka waxaa lagu cabbiraa khadka toosan ee u dhexeeya dhamaadyada xubinta. Local z-ka xubintu wuxuu u fiiqdaa sare (tiir ahaan: dhinaca X); local axes-kooda wuxuu leexdaa sida xubintu u leexato.

## Warbixinta

{{ui:Warbixin (PDF)}} iyo {{ui:Warbixin (CSV)}} waxay haystaa wax kasta: male-awgyada qaabka lagu dhisay, cutubyada, kiisaska iyo isku-darrada, kadibna kiis kasta iyo isku-dar kasta falcelinta (wadarta culeysyada iyo falcelinta oo isku dheelitiran), xoogagga xubnaha iyo dhaqaaqyada, iyo envelope kiis kasta. {{ui:U dhoofi CraftScript}} wuxuu qoraa qaabka isla qaabka sida script loogu talo galay meel-shaqada Script ee PartCraft, halkaasoo shaqada maktabada `frame3d` ay xalliso tallaabo tallaabo koodh la akhriyi karo.

## Habka

Habka adkaysiga toosan (direct stiffness): toosan oo kala horreeya marka aan la dooran {{ui:Dalabka labaad (P-Delta)}}: beam-column labo dhamaad leh adkaysiga tooska, torsion iyo labo qallooc (aan jiidin, aan warping lahayn), sii-deynta dhamaadyada oo leh condensation static, culeysyada dhererka xubinta oo leh shape-functions-ka xubinta. Jawaabahooda waxaa la hubiyaa tiirarka buugga caadiga ah (cantilever, beam fudud, go'an iyo joogta ah, portal frame, shabakad torsion, truss).

**Dalabka labaad (P-Delta).** Calaamadee *Dalabka labaad (P-Delta)* ee ku taal Socodso: isku-dar kasta mar labaad ayaa la xalliyaa, xoogagga tooska ah ee xubnaha oo saameynaya qaabka gooyaanka (xubin kasta waxaa loo jaray 4 qaybood, sidaas darteed qallooca xubinta dhexdeeda ayaa tiran), ilaa xoogagga tooska ah ay xasillaan. Safka natijadu wuxuu siinayaa tirada marxalado iyo inta uu kor u kacay sway-ga; momentsyada, gooyaanka, hubinta naqshadda iyo warbixinta ayaa markaas isticmaala natijadan. Ka sarreeya culeyska caadiga ah ee qaabka joogsanaya, run-ku wuu joogsadaa oo sheegaa. Waa elastic oo leexashada yar, qallooc keliya, ma leh yaraynta adkaanta iyo culeys la-malaayo (ma aha habka AISC direct analysis oo keligiis); sagxadaha, derbiyada iyo sagxadaha adag waxay sii joogaan first-order.

**Dhaqdhaqaaqyada dabiiciga ah (finite elements).** Block-ka {{ui:Finite element: dhaqdhaqaaqyada dabiiciga ah}} ee ka hooseeya natijooyinka wuxuu helaa qaababka ugu hooseeya isla moodeelka isagoo adeegsanaya engine-ka finite element: beamyo leh sii-deynta dhamaadyada, sagxadaha iyo derbiyada oo ah shell afar-nood ah, sagxado adag, taageerooyin. Dooro inta qaab (3, 6, 10 ama 20) iyo element-ka sagxadda (shell afar-nood ah oo sagxadaha qoto weyn ama yar, ama element-ka sagxadda khafiifka ah), oo riix {{ui:Hel dhaqdhaqaaqyada}}. Miiska wuxuu siinayaa kala soocidda qaab kasta ee Hz, muddadiisa ilbiriqsi iyo massa-ka habka ee waxtarka leh ee X, Y iyo Z, qayb ka mid ah massa-ka la dhaqaajin karo. {{ui:Ku muuji moodeelka}} wuxuu sawiraa qaab kasta sida gooyaanka loo sawiro. Massa waa density-ga alaabta oo jeer ka mid ah mugga: culeysyadu ma kordhiyaan massa, alaab aan density lahayn ma leh massa. Warbixinta (PDF, CSV) waxay sidoo kale qaadaa miiska. Waa elastic oo dhaqdhaqaaq yar oo keliya, lama sameynayo culeys dhulgariir ama dabayl oo xeer ka yimid halkan. Ma aha hubin xeer; injineerkaaga ayaa dib u eegaya natijooyinka.

**Muraayadda jawaabta, taariikhda waqtiga iyo pushover.** Saddex block oo kale ayaa ka hooseeya dhaqdhaqaaqyada, iyagoo adeegsanaya isla moodeelka finite element. Massa dhammaantooda waa density-ga alaabta oo ku daraysan culeysyada hoos u dhacaya ee kiisaska aad dooratay, mid kastaana wuxuu ku jirtaa factor aad qortay (tusaale ahaan Joog 1 iyo Hawl qaybta aad u tirinayso massa).

{{ui:Muraayadda jawaabta}} wuxuu akhriyaa qaab kasta muraayad aad siisay (miis muddo iyo xawaare, ama qaabka ASCE 7 ee SDS, SD1 iyo TL; badhanka {{ui:Isticmaal qiimayaasha qaybta dhulgariirka}} wuxuu nuqulaa iyaga qaybta dhulgariirka), wuxuuna isku daraa qaababka CQC, SRSS, qaanuunka toban boqolkiiba ama wadar buuxa, kadibna wuxuu isku daraa jihooyinka X, Y iyo Z (100 % + 30 % ama SRSS). Wuxuu siiyaa base shear, dhaqdhaqaaqa dabaqyada, xoogagga dhamaadka xubinta iyo miis qaab oo digniin bixisa marka qaababka la isticmaalay ay qaadaan ka yar 90 % massa. Natijooyinka waxaad ku dhufan kartaa factor ama base shear aad qortay ilaa; block-ku ma xisaabinayo base shear-ka laftiisa. Natijooyinku ma leh calaamad.

{{ui:Taariikhda waqtiga}} wuxuu socodsiiyaa xawaaraha dhulka isagoo adeegsanaya superposition-ka qaababka (saxan marka khadadka toosan ee u dhexeeya barta) ama integration toos ah (Newmark average acceleration oo leh Rayleigh damping). Gelinta waa mooshin sine ama pulse la sameeyey (had iyo jeer lagu calaamadeeyaa synthetic), duubis aad ku dhejisay, ama fayl qoraal ah oo aad furtay (waqti iyo xawaare, hal xawaare safkasta oo step leh, ama fayl nooca PEER oo leh DT= header; g ama m/s²). Wuxuu siiyaa dhaqaaqa saqafka iyo base shear-ka waqtiga ku saabsan, drift-ka dabaq kasta, iyo envelope-ka xoogagga dhamaadka xubinta. Moodeelada duubis aad dheer leh waxay kaydiyaan kaliya fadhiga.

{{ui:Pushover}} wuxuu riixaa saqafka dhinac ah tallaabooyin yaryar (qaab sida qaabka koowaad, ama isku mid), oo leh hinges-ka plastic-ka dhamaadka xubnaha leh shape I. Hinge wuxuu bixiyaa momentka plastic-ka, kaas oo hoos u dhacaa marka xoogga tooska ah kordho (laga xisaabiyo qaabka la sawiray, fillets ayaa la iska dhaafay); hardening waa ikhtiyaari, P-delta waa ikhtiyaari, wuxuuna dabaqi karaa isku-dar culeys hore. Wuxuu siiyaa qalloocda awoodda (base shear oo ka dhan roof displacement), hinge-ka koowaad, iyo xaalada iyo wareegga plastic-ka ee hinge kasta. {{ui:Orod taariikhda waqtiga aan toosnayn}} wuxuu socodsiiyaa hinges-kaas isla duubistii Taariikhda waqtiga, moodeelada yaryar. Hinges-ka waxay ka samaysmaan dhamaadka xubnaha oo keliya (dhig nuq halkaas oo uu ka samaysmi lahaa gudaha span-ka); xubin labada dhamaad ka sii-deysan ma helayso midna; yielding iyo buckling ee braces lama moodelin; sagxadaha iyo derbiyada waxay sii joogaan adkaan; xadka aqbalaadda ee hinges lama siin. Ma aha hubin xeer; injineerkaaga ayaa dib u eegaya natijooyinka. Dejinta waxaa lagu kaydiyaa moodeelka, warbixinta ayaa leh miisaska.

Weli lama dhisin: falanqaynta buckling-ka, saxidda nuugista ee muraayadda jawaabta, scaling-ka duubista, xadka aqbalaadda ee hinges (jawaabta dynamic-ka waa jirtaa, kor ku eeg), culeysyada aagga iyo dabayl oo adiga loo sameeyo (xoogagga dhulgariirka ee sagxadaha waxaa ku jira [Hubi xubnaha konkreetka oo samee culeysyada dhulgariirka](topic:concrete-and-seismic)), offsets-ka xubnaha, braces-ka tension-ka kaliya. Eeg [Wali lama dhisin](topic:not-built-yet).
