---
title: Những gì chưa xây dựng
summary: Bản DetailCraft sơ khai này chưa làm được những gì, và hiện nay nên làm gì thay thế.
keywords: giới hạn, hạn chế, thiếu, lộ trình, chưa hỗ trợ, sắp tới, kế hoạch, cách thay thế, việc cần làm
from: ea411885
---

DetailCraft là một bản sơ khai. Trang này liệt kê những gì nó chưa làm được, để bạn lên kế hoạch xung quanh. Không có gì ở đây là cam kết về ngày phát hành.

## Mô hình hóa

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Kéo một đầu của thanh (kéo giãn) | Sửa {{ui:Đầu}} hoặc {{ui:Cuối}} trong {{ui:Đầu (x, y, z mm)}} ở bảng {{ui:Thuộc tính}} |
| Bộ lọc chọn (chỉ dầm, chỉ một tiết diện) | Kéo khung cửa sổ, rồi {{key:Shift}}+nhấp để bỏ cấu kiện ra |
| Tạo mảng một vùng chọn; xoay quanh trục nghiêng; đối xứng qua mặt phẳng nghiêng | Sao chép và dán với độ lệch, hoặc {{ui:Nhân bản}}; xoay và đối xứng hoạt động trên mặt bằng ([Chọn theo khung, di chuyển, xoay, đối xứng và đổi nhiều đối tượng](topic:select-and-change)) |
| Điểm nằm ngoài lưới khi nhấp | Đặt trên lưới, rồi gõ tọa độ cuối |
| Cao độ dọc theo đường lưới có số; khung nhìn đã lưu; mặt phẳng làm việc | Dùng {{ui:3D}}, hoặc {{ui:Thêm theo lưới}} |
| Lỗ vẽ thành cắt thật trong khung nhìn 3D | Lỗ hiện như nút tối; chúng thật trong mọi lần xuất file |
| Cắt góc bo tròn hoặc xiên, các cắt khác và phụ kiện | Cắt góc vuông, chỉ cho chữ I |
| Lỗ bạn thêm vào thép góc và ống tròn | Lỗ thép góc chỉ đến từ [bản nút thanh giằng](topic:brace-gussets) |
| Nhập theo đơn vị Anh | Gõ bằng milimét (25.4 mm mỗi in) |
| Sửa hoặc xóa một tiết diện tùy chỉnh | Thêm tiết diện đã sửa với tên mới |

## Thang

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Tay vịn, chiếu nghỉ, tấm chắn chân, bậc sàn lưới, cầu thang xoắn và chữ L | Chỉ có vế thẳng; xem [Cầu thang](topic:stairs) |
| Cắt đầu dầm thang sát sàn | Dầm thang cắt vuông; cắt trong phần mềm xưởng của bạn |

## Kết nối

DetailCraft dựng sáu loại kết nối: bản nút thanh giằng (xem [Bản nút thanh giằng](topic:brace-gussets)); mối nối chồng bằng bu lông giữa hai đoạn của một chữ I (xem [Mối nối chồng](topic:splices)); mối vát góc giữa hai chữ I gặp nhau ở một góc, chỉ cắt hoặc có bản đầu bu lông (xem [Mối vát góc](topic:mitres)); bản đầu bu lông phẳng hoặc kéo dài từ một dầm chữ I đứng, thẳng, ở tầng đến cánh hoặc bụng cột chữ I; bản cắt từ dầm (vuông, xiên hoặc nghiêng) vào cánh hoặc bụng cột; và bản chân cột với bốn thanh neo.

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Bản đầu xiên hoặc nghiêng | Dùng [bản cắt](topic:shear-tabs), chịu được dầm xiên và nghiêng |
| Thép góc kẹp; bản lấp mối nối và mối nối giữa các kích thước khác nhau; bản nút góc hàn vào dầm và cột, bản nút vát mép | Chi tiết trong phần mềm khác, hoặc thêm bản và lỗ bằng tay như cấu kiện rời; xem [Mối nối chồng](topic:splices), [Bản nút thanh giằng](topic:brace-gussets) |
| Sườn chân vát mép hoặc thuôn; lỗ vữa; hốc móng cho chốt cắt | Sườn chữ nhật; xem [Bản chân cột](topic:base-plates) |
| Vút dầm (haunch); mối vát góc hàn đối đầu; sườn thẳng hàng với cánh của thanh kia | [Mối vát góc](topic:mitres) với bản đầu và sườn bụng, hoặc mối vát góc trơn; thêm các bản khác bằng tay như cấu kiện rời |
| Kiểm tra thiết kế kết nối (độ bền) | Kiểm tra kết nối bằng tính toán của kỹ sư; DetailCraft chỉ cảnh báo về khoảng cách mép và khoảng cách |
| Lỗ dài | Chỉ lỗ tròn |

## Phân tích

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Kiểm tra thiết kế ngoài dầm chữ I thép: ống, thép góc, máng, tiết diện hàn, cấu kiện mảnh hoặc lớp 4, xoắn, kết nối; bê tông: độ mảnh do chuyển vị ngang, xoắn, chi tiết kháng chấn, sàn và tường | Tab {{ui:Phân tích}} kiểm tra dầm chữ I thép theo AISC 360 hoặc EN 1993-1-1 ([Kiểm tra thanh thép theo tiêu chuẩn thiết kế](topic:design-checks)); phần còn lại được đánh dấu "chưa kiểm tra"; kỹ sư sẽ xem lại tất cả |
| Phân tích mất ổn định, rung | Bậc hai chỉ là P-Delta (đàn hồi); không có phân tích mất ổn định (phân tích dạng dao động, phổ phản ứng, lịch sử thời gian và đẩy dần nằm trong tab {{ui:Phân tích}}) |
| Kiểm tra thiết kế mà kỹ sư đã xem xét | Chúng chỉ là công cụ hỗ trợ cho đến khi đó: kiểm tra hai hoặc ba thanh bằng tay, hoặc trong phần mềm riêng của kỹ sư, trước khi bạn dựa vào chúng |
| Tải sàn, gió và tuyết được tạo sẵn từ diện tích | Đặt tải lên thanh bằng tay, theo kN/m hoặc kN |
| Độ lệch thanh, khớp lệch tâm, giằng chỉ chịu kéo, bản và móng trong khung | Thanh được phân tích theo đường làm việc của chúng; giằng chịu kéo và nén |

## Cốt thép

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Cột tròn, đai xoắn, dầm nghiêng hoặc cong, sàn khác hình chữ nhật, tường không thẳng | Dầm, cột, sàn và tường chữ nhật ([Chi tiết bê tông cốt thép](topic:reinforced-concrete)) |
| Thanh uốn để nối chồng, nối so le, nối đặt theo ý bạn | Nối chồng theo bước đều, mọi thanh nối tại một mặt cắt (ACI Class B, EN α6 = 1.5) |
| Thanh góc tại lỗ mở, cốt thép chống cắt xuyên thủng, chi tiết kháng chấn (ACI 318-19 chương 18) | Thanh viền hai bên mỗi lỗ mở; tự kiểm tra phần còn lại |
| Đọc tệp của phần mềm thiết kế kết cấu | Xuất IFC từ phần mềm đó: các IfcReinforcingBar của nó sẽ vào như thanh ([Thanh từ tệp IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Mã hình dạng ngoài thẳng, một uốn và chữ U; kiểu ACI 315 cho thanh thẳng và thanh một móc | Ba hình dạng in theo BS 8666 00, 11, 21 hoặc ACI Type 2; xem [Tham chiếu thép thanh](topic:rebar-reference) |
| Thanh hệ mét ngoài BS 4449 H8–H40 (ví dụ CSA 10M–35M) | Tên thanh mềm hệ mét ASTM #10–#36, hoặc thanh BS |

## Bản vẽ và xuất file

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Bản vẽ khổ đứng, A0, và khổ theo kích thước riêng; hình chung trên lưới xiên | Khổ A4 đến A1 nằm ngang và ANSI B đến D ([Bản vẽ bố trí chung và lắp ráp](topic:drawings)); thu tỷ lệ PDF để in trên khổ khác |
| Ký hiệu hàn trên bản vẽ thi công của một cấu kiện; ký hiệu khác ngoài đường hàn góc | Bản vẽ lắp ráp có ký hiệu hàn góc; bản vẽ thi công ghi mối hàn bằng văn bản |
| Chỉnh sửa bản vẽ trong ứng dụng | Đổi mô hình và tạo lại bản vẽ; đánh dấu PDF trong ứng dụng PDF như MarkupCraft |
| Bản vẽ dạng DWG có đối tượng kích thước, hoặc mô hình ở tỷ lệ thật trong không gian mô hình với các tờ là bố cục | Mỗi tờ là DWG hoặc DXF khổ thật của trang giấy, kích thước dưới dạng đường và số ([Bản vẽ bố trí chung và lắp ráp](topic:drawings#download)) |
| Lỗ NC trong ống tròn, cắt góc trên thép góc và ống tròn trong tệp NC | Không ghi; xem [Các trường tệp NC](topic:nc1-fields) |
| Vát mép, ký hiệu và đường bao trong trong tệp NC | Hiện chưa có |
| Lỗ bu lông, bu lông, mối hàn và móng trong xuất USD | Chúng có trong đầu ra IFC, NC và BOM; xem [Xuất mô hình thép sang USD](topic:usd) |
| Đưa kết nối, móng, lỗ dài, lỗ chữ nhật và lỗ trong ống tròn từ tệp IFC | {{ui:Nhập IFC}} đưa vào dầm, cột, thanh, bản, lưới, tầng, lỗ tròn, cắt góc, bu lông và thanh cốt thép; báo cáo của nó liệt kê những gì đã bỏ qua |
| Bố cục báo cáo tùy chỉnh | Ba tệp CSV |

## Bảng điều khiển

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Di chuyển các báo cáo ở dưới ({{ui:Vấn đề}}, {{ui:Bảng kê vật tư}}, {{ui:Bảng uốn thép}}) | Chỉ các bảng {{ui:Mô hình}} và {{ui:Thuộc tính}} di chuyển được. Xem [Sắp xếp các bảng](common:arrange-panels) |

## Làm việc cùng nhau và lưu

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Lưu đám mây và đồng bộ giữa các máy tính | Lưu tệp `.detailcraft.json` và chia sẻ như mọi tệp khác. Lưu đám mây chưa có sẵn |
| Con trỏ của người khác và nhãn "đang chỉnh sửa" trong phiên Live TeamWork; lưới, tầng và giai đoạn được gộp từng mục | Chỉnh sửa vẫn được gộp (lưới, tầng và giai đoạn được thay toàn bộ, thay đổi sau thắng); xem [Cùng chi tiết một công trình, trực tiếp](topic:work-live) |
| Liên kết mời vào phiên Live TeamWork qua internet | Tham gia bằng mã ngắn trong cùng mạng |

## Nền tảng

- DetailCraft được làm cho màn hình máy tính để bàn, máy tính xách tay hoặc máy tính bảng. Nó cũng chạy trên điện thoại: mô hình giữ màn hình và các bảng, còn báo cáo mở như tờ từ thanh dưới cùng, nhưng có rất ít chỗ cho các bảng.
- Dùng ngoại tuyến cần lưu DetailCraft để dùng ngoại tuyến trước, bằng {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng; khi nó hiện {{ui:Sẵn sàng ngoại tuyến}}, mọi thứ trong bản này hoạt động không cần kết nối. Xem [Làm việc ngoại tuyến](common:offline).

Nếu một trong những thiếu sót này cản trở công việc của bạn, bạn có thể báo cho chúng tôi qua [trang hỗ trợ](https://getcadcraft.com/support); điều đó giúp chúng tôi quyết định xây dựng gì tiếp theo.
