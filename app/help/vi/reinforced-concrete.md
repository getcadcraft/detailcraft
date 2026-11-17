---
title: Chi tiết dầm, cột, sàn và tường bê tông cốt thép
summary: Thêm dầm, cột, sàn và tường bê tông theo lưới, đặt thanh thép, cốt đai và đai, kiểm tra nối chồng và neo theo ACI 318-19 hoặc EN 1992-1-1, rồi lập bản vẽ thi công và bảng uốn thép.
keywords: bê tông cốt thép, thép thanh, cốt thép, dầm, cột, sàn, tường, cốt đai, đai, móc, nối chồng, nối chồng ghép, neo, chiều dài phát triển, ld, ldh, lbd, lớp bảo vệ, khoảng cách, thép gia cường lỗ, lưới thép, ký hiệu thép, bảng uốn thép, bbs, bản vẽ thi công, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, nhập IFC
from: 3835b7ec
---

Tab {{ui:Bê tông}} bên dưới khung nhìn chi tiết hóa các thanh của dầm, cột, sàn và tường bê tông. Bạn đưa kích thước và các thanh; DetailCraft đặt từng thanh, đánh số, kiểm tra nối chồng, neo, lớp bảo vệ và khoảng cách theo điều khoản mà chúng xuất phát, rồi vẽ ra.

:::warning
DetailCraft chi tiết hóa các thanh bạn đưa cho nó. Nó không thiết kế chúng. Mọi kết quả là để kỹ sư kiểm tra.
:::

## Mở tab Bê tông

Chọn tab {{ui:Bê tông}} bên dưới khung nhìn. Trong bố cục dải lệnh, {{ui:Bê tông}} nằm trong tab {{ui:Mô hình hóa}} cạnh {{ui:Móng}}. Với kiểu dòng lệnh bản vẽ, gõ {{cmd:CONCRETE}}.

## Thêm cấu kiện theo lưới

Cấu kiện bê tông được đặt trên các đường lưới và cao độ của mô hình, nên hãy thiết lập chúng trước (bảng bên trái).

1. Trong {{ui:Thêm theo lưới}}, chọn {{ui:Phần tử}}: {{ui:Dầm bê tông}}, {{ui:Cột bê tông}}, {{ui:Sàn}} hoặc {{ui:Tường}}.
2. Chọn các đường lưới và cao độ:
   - dầm chạy từ một giao điểm lưới đến một giao điểm khác, đỉnh của nó ở cao độ;
   - cột đứng tại một giao điểm, từ cao độ này đến cao độ khác;
   - sàn lấp đầy hình chữ nhật giữa hai đường lưới số và hai đường lưới chữ, đỉnh của nó ở cao độ;
   - tường chạy dọc theo đường tâm từ một giao điểm đến một giao điểm khác, từ cao độ này đến cao độ khác.
3. Nhập kích thước và chọn {{ui:Thêm}}. Cấu kiện được chọn và các ô nhập của nó mở trong bảng {{ui:Thuộc tính}}.

Mỗi cấu kiện bắt đầu với các thanh là giá trị khởi đầu, không phải thiết kế: hãy đổi chúng theo kỹ sư.

## Đổi thép

Chọn cấu kiện (trong khung nhìn, hoặc tên của nó trong tab {{ui:Bê tông}}). Bảng {{ui:Thuộc tính}} hiển thị:

| Cấu kiện | Bạn đặt những gì |
|---|---|
| Dầm | Chiều rộng, chiều sâu, lớp bảo vệ thông thủy; thanh đỉnh và đáy (kích thước, số lượng, thẳng hoặc móc 90° ở hai đầu); thanh hông; cốt đai (kích thước, móc 135° hoặc 90°, khoảng cách của cái đầu tiên tính từ mặt gối, chiều dài và khoảng cách của vùng đầu, khoảng cách giữa các cái); chiều dài gối; chiều dài nối chồng |
| Cột | Chiều rộng, chiều sâu theo phương ngang, góc xoay, lớp bảo vệ; thanh dọc trên mỗi mặt; đai như cốt đai; thanh làm gì ở đỉnh (nối chồng với cột phía trên, móc vào sàn, hoặc dừng) |
| Sàn | Chiều dày, kích thước, lớp bảo vệ trên và dưới; lưới đáy và lưới đỉnh theo mỗi phương (kích thước và khoảng cách); thép chữ U quanh các cạnh; {{ui:Thép gia cường lỗ}}; lỗ mở |
| Tường | Chiều dày, lớp bảo vệ, một hoặc hai lớp, thanh ngang và thanh đứng, thép chữ U ở đầu, thanh đứng có nối chồng phía trên hoặc không, thép gia cường lỗ, lỗ mở |

Mỗi thay đổi là một bước hoàn tác. Thay đổi không thể thực hiện được sẽ bị từ chối và thanh trạng thái nói lý do, ví dụ "Lỗ mở không vừa bên trong cấu kiện cùng lớp bảo vệ của nó."

Cốt đai và đai là khép kín, với cả hai móc ở cùng một góc. Thanh của dầm chạy vào một cột bê tông ở hai đầu tới mặt xa của cột, trừ lớp bảo vệ; nơi không có cột, hãy nhập {{ui:Chiều dài gối đầu (mm)}} ở đầu và ở cuối.

## Nối chồng và neo

Thanh dài hơn {{ui:Chiều dài thanh thép tiêu chuẩn (mm)}} (mặc định 12000) được cắt thành các đoạn dài bằng nhau, nối chồng. Bảng {{ui:Nối chồng và neo}} liệt kê mọi mối nối chồng và mọi neo: cần gì, với điều khoản và các điều kiện của nó, và chi tiết có gì.

- Chiều dài nối chồng bằng 0 nghĩa là "theo nhu cầu": chiều dài mà điều luật yêu cầu, làm tròn lên 25 mm.
- Nhập chiều dài nối chồng của riêng bạn để dùng nó thay thế. Nếu nó ngắn hơn yêu cầu, đó là một vấn đề (xem bên dưới), và được đánh dấu * trong bảng.
- Neo được đo từ mặt gối đến đầu thanh bên trong gối. Dầm không có gối đã biết sẽ nói như vậy thay vì kiểm tra.
- Cột đứng trên móng nối chồng với thép chờ của móng, và trên cột khác với thanh của cột đó: nối chồng của chúng cũng được kiểm tra.

**ACI 318-19** (SI): thanh thẳng chịu kéo 25.4.2.3 (bảng, với ψt, ψe, ψg, λ), móc tiêu chuẩn 25.4.3.1 (lấy ψr 1.6 và ψo 1.25 nếu không biết khác), thanh chịu nén 25.4.9.2, nối chồng chịu kéo 25.5.2.1 (Loại B, hoặc Loại A trong cài đặt), nối chồng chịu nén 25.5.5.1.

**EN 1992-1-1**: neo 8.4.4 với fbd từ 8.4.2 (bám dính tốt hoặc kém), nối chồng 8.7.3 với α6 cho mọi thanh được nối chồng tại một tiết diện. γc, γs và αct bắt đầu ở giá trị khuyến nghị; hãy đặt theo phụ lục quốc gia của bạn.

## Các kiểm tra

Mọi kiểm tra không đạt đều nằm trong bảng Vấn đề của vỏ ứng dụng (nguồn {{ui:Kiểm tra cốt thép}}), và trong danh sách {{ui:Kiểm tra}} của cấu kiện:

| Kiểm tra | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Lớp bảo vệ | Bảng 20.5.1.3.1, theo điều kiện tiếp xúc | Lớp bảo vệ tối thiểu theo bám dính, Bảng 4.2 (lớp bảo vệ độ bền do bạn cung cấp) |
| Khoảng cách thông thủy của thanh | 25.2.1 (dầm, sàn, tường), 25.2.3 (cột) | 8.2 (2) |
| Khoảng cách cốt đai | 9.7.6.2.2 | 9.2.2 (6) |
| Thép tối thiểu của dầm | 9.6.1.2 | 9.2.1.1 (1) |
| Thanh hông của dầm sâu hơn 900 mm | 9.7.2.3 | không kiểm tra |
| Tỷ lệ thép cột, số thanh | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Đai: khoảng cách, kích thước, đai chéo | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Khoảng cách sàn, thép tối thiểu | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Khoảng cách tường, thép tối thiểu, hai lớp | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Nối chồng, neo | như trên | như trên |

Kích thước cốt liệu không được biết, nên khoảng cách thông thủy được kiểm tra mà không tính đến nó.

## Lỗ mở, thép gia cường và thép biên

Chọn {{ui:Thêm một lỗ mở}} dưới một sàn hoặc tường đã chọn và đặt vị trí cùng kích thước của nó. Các thanh bị lỗ cắt ngang dừng lại cách mép lỗ một lớp bảo vệ. {{ui:Thép gia cường lỗ}} được thêm ở mỗi bên, cùng lớp, mang một nửa diện tích các thanh bị cắt, vượt quá lỗ một chiều dài neo. Đó là quy tắc khởi đầu của DetailCraft, không phải điều khoản của tiêu chuẩn: hãy đổi {{ui:Thép gia cường lỗ}} theo kỹ sư. Không thêm thép góc.

Thép chữ U quanh các cạnh tự do của sàn và ở đầu tường có các cánh dài bằng một chiều dài nối chồng.

## Ký hiệu thép và bảng uốn thép

Các thanh giống nhau dùng chung một ký hiệu: móng giữ ký hiệu F (5F1), dầm có B, cột có C, sàn có S và tường có W (7B1, 8C1, 4S2). Tab {{ui:Bảng uốn thép}} và tệp CSV của nó giờ liệt kê mọi thanh của kết cấu, móng trước. {{ui:Đầu ra}} › {{ui:Thêm}} › {{ui:Uốn thép}} tải nó xuống.

## Bản vẽ thi công

Chọn {{ui:Đầu ra}} › {{ui:Thêm}} › {{ui:Bản vẽ bố trí cốt thép}}, {{ui:Bản vẽ bố trí cốt thép}} trong tab {{ui:Bê tông}}, hoặc {{ui:Bản vẽ thi công}} bên cạnh một cấu kiện. Mỗi cấu kiện có một tờ với mặt đứng (mặt bằng cho sàn) thể hiện mọi thanh và ký hiệu của nó, các vùng cốt đai hoặc đai và các mối nối chồng có ghi kích thước, cùng một mặt cắt ở giữa; sau đó các tờ bảng uốn thép liệt kê mọi ký hiệu với một phác họa hình dạng của nó, các kích thước, số lượng, chiều dài cắt và khối lượng.

Các tờ được lập từ mô hình mỗi lần, và lập lại sau mỗi thay đổi khi cửa sổ đang mở: khối tiêu đề mang tham chiếu mô hình. Lưu {{ui:Tờ này dưới dạng PDF}} hoặc {{ui:Tất cả tờ dưới dạng PDF}}.

## Thanh từ tệp IFC

{{ui:Tệp}} › {{ui:Nhập IFC}} giờ đọc IfcReinforcingBar: đĩa quét dọc theo đường tâm của nó được trả về dưới dạng các đoạn thẳng và các góc uốn, với đường kính, ký hiệu và cấu kiện chứa nó. Các thanh được giữ như đã đọc (không chuyển thành quy tắc của dầm hay sàn), hiển thị trong khung nhìn, liệt kê trong bảng uốn thép và được ghi lại khi xuất IFC. Báo cáo nhập cho biết đã đọc bao nhiêu thanh, thuộc các kích thước nào, trong bao nhiêu cấu kiện, và những gì bị bỏ qua và vì sao.

Dầm, cột, sàn hoặc tường của tệp đó có chứa thanh hoặc có vật liệu là bê tông sẽ không bị nhận là thép; báo cáo ghi nhận điều này. Tệp xuất IFC của DetailCraft mang định nghĩa của mỗi cấu kiện bê tông, nên khi nhập lại nó vẫn là chính nó, và các thanh của nó được tạo lại từ định nghĩa đó.

:::note
Đọc tệp riêng của chương trình thiết kế kết cấu (không phải IFC) chưa được xây dựng: hãy xuất IFC từ chương trình đó.
:::

## Xuất IFC

Dầm, cột, sàn bê tông (có lỗ mở) và tường được xuất thành IfcBeam, IfcColumn, IfcSlab và IfcWall, mỗi cái có các thanh của nó là IfcReinforcingBar (thanh chính, cốt đai cho cốt đai và đai, thép biên) được gộp vào nó; mỗi thanh là một đĩa quét dọc theo đường tâm, với cung thật tại các góc uốn, cùng ký hiệu và chiều dài cắt của nó.
