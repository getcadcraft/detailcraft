---
title: Temel kontrolleri
summary: Tarif ettiğiniz zemin üzerinde tekil temelleri, birleşik temelleri ve radyeleri, oturmayı, yaylar üzerindeki esnek radyeyi, kazık gruplarını ve istinat duvarlarını kontrol edin. Bir mühendisin inceleyeceği bir yardımcıdır.
keywords: temel, tekil temel, birleşik temel, radye, oturma, zemin yatak katsayısı, yaylar, kenar kolon, köşe kolon, taşıma gücü, kayma, devrilme, delme kesmesi, tek yönlü kesme, eğilme, kenetlenme, asgari donatı, kazık grubu, istinat duvarı, ACI 318-19
from: 6961ad52
---

:::warning
Bunlar bir mühendisin inceleyeceği birinci derece kontrollerdir, tasarım onayı değildir. İzin verilen zemin basıncı ve sürtünme katsayısı sizin değerlerinizdir: DetailCraft zemininizi bilmez.
:::

{{ui:Foundation}} sekmesi, modeldeki temelleri verdiğiniz kolon yüklerine göre kontrol eder.

## Zemini tanımlama

{{ui:İzin verilen taşıma basıncı}} ve {{ui:Taban sürtünme katsayısı}} değerlerini girin. İkisi de 0 ile başlar; bu, girilmedi anlamına gelir. Bu durumda kontrol basıncı bir not olarak gösterir ve geçtiğini söylemez. Oturma için zeminin {{ui:Es}} (MPa) elastisite modülünü, Poisson oranını ve izin verdiğiniz oturmayı girin (başlangıç için 25 mm). Esnek bir radye için {{ui:ks}} zemin yatak katsayısını girin. Temel üzerindeki dolgu, zeminin birim ağırlığı, kayma ve devrilme için güvenlik katsayıları (başlangıç için 1.5) ve donatı akma dayanımı da bu alanda yer alır.

## Yükleri girme

Her temelin bir kolon yükleri listesi vardır. {{ui:Kolon yükü ekle}} düğmesini kullanın ve servis satırını (taşıma gücü, kayma ve devrilme için) ile faktörlü satırı (dayanım kontrolleri için) doldurun: aşağı yönlü düşey yük P, temelin üstündeki yatay kuvvetler Vx ve Vy, momentler Mx ve My, kolonun temel üzerindeki yeri ve boyutu.

Ya da {{ui:Analysis}} sekmesini açın ve {{ui:Take column loads from the Analysis}} düğmesine basın: bir temel üzerinde duran her mesnet, seçtiğiniz servis ve faktörlü kümelerden bir kolon yüküne dönüşür. Pozitif My, temelin +x tarafını daha fazla yükler; pozitif Mx ise −y tarafını daha fazla yükler.

## Neler kontrol edilir

Servis yüklerinden, temelin kendi ağırlığı ve dolgu eklenerek:

- **Taşıma gücü:** rijit bir temel altındaki basınç. Orta üçte birin içinde tabanın tamamı temastadır; dışında kalırsa tabanın bir kısmı kalkar ve tepe basınç daha yüksek olur. Bileşke tabanın dışında kalırsa kontrol başarısız olur.
- **Kayma:** düşey yük ile sürtünme katsayısının çarpımının yatay kuvvete karşı kontrolü.
- **Devrilme:** bileşkenin kenara olan uzaklığı.
- **Oturma:** girdiğiniz elastisite modülüyle yarı uzayda ortalama basıncın, ortada ve köşede elastik oturması (esnek dikdörtgen için Timoshenko ve Goodier çözümü), sınırla karşılaştırılır. Rijit bir temel için üst sınırdır; sınırlı derinlikteki zemin tabakasını, kazılan zeminin yük azaltmasını ve konsolidasyonu hesaba katmaz. Modül yoksa basıncı bir not olarak gösterir.

Yalnızca faktörlü kolon yüklerinden (ACI 318-19):

- **Eğilme**, kolon yüzünde; asgari donatı (420 MPa çubuklar için 0.0018) ve çizdiğiniz donatılarla.
- **Tek yönlü kesme**, yüzeyden d uzaklıkta.
- **Delme kesmesi**, her kolonun çevresinde d/2 uzaklıkta, kolon momentiyle birlikte. Bir kenara yakın kolon için kritik kesit temelin kenarıyla kesilir (kenarda üç taraf, köşede iki taraf; ACI 318-19 22.6.4.1 ve Tablo 22.6.5.2'deki daha küçük αs). Kesitin kendi merkezi etrafındaki moment, yükün kaymasını içerir.
- **Kenetlenme**, donatıların kolon yüzünün ötesinde, düz veya kancalı olarak.
- **Derinlik**, alt donatıların üstünde (150 mm).

Birleşik bir temel veya radye rijit kabul edilir; kesme ve moment, tüm genişlik boyunca alınan kesitlerde statik denklemlerden elde edilir.

## Yaylar üzerinde esnek radye

Temel birçok kolon taşıdığında ve rijit temel fazla kaba olduğunda {{ui:Bu temeli yaylar üzerinde esnek radye olarak analiz et}} seçeneğini işaretleyin. Temel, düğüm noktalarında toplanmış yaylardan oluşan bir yatak üzerinde dört düğümlü elemanlardan oluşan bir plak olur (girdiğiniz {{ui:ks}} değeri düğüm noktalarında toplanır); her kolonun yükü kendi oturma alanının düğümlerine yayılır. İkinci bir tablo, en büyük zemin basıncını ve oturmayı (ve en büyük ile en küçük arasındaki farkı), her iki yönde eğilme momentini ve gereken donatıyı, üst yüzdeki çekme gerilmesini düz betonun dayanımına karşı (temelin üst donatısı yoktur), kolonlardan d uzaklıkta tek yönlü kesmeyi ve yayların kendi basıncı üzerinden delme kesmesini verir. Ağ, bir kolon üç eleman genişliğinde olana kadar inceltilir; büyük bir radye birkaç saniye sürer. Radyenin kendi ağırlığı ile üstündeki zemin birbirini dengeler ve hesaba katılmaz.

Başarısız olan her kontrol, maddesiyle birlikte {{ui:Problems}} panelindedir.

## Kazık grupları ve istinat duvarları

{{ui:Add a pile group}} rijit bir başlık altına bir kazık ızgarası yerleştirir: yükü ve momentleri ve bir kazığın basınçta ve çekmede taşıyabileceği değerleri girin (bunlar kazık tasarımının değerleridir, bu sekmenin değil). Her kazığın tepkisi P/n artı momentlerden payına düşen değerdir (elastik yöntem); en büyük basınç ve varsa çekme kontrol edilir.

{{ui:Add a retaining wall}} düz dolgu üzerindeki konsol istinat duvarını metre başına kontrol eder: Rankine aktif basıncı, ayak etrafında devrilme, kayma ve taban basıncı. Ayak önündeki pasif basınç hesaba katılmaz. Asistanınız aynı kontrolleri `pile_group_check` ve `retaining_wall_check` ile çalıştırabilir.

Kazık grupları, duvarlar ve radye anahtarı model dosyasına kaydedilir; başarısız bir kontrol {{ui:Problems}} içindedir.
