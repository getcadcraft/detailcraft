---
title: Bản vẽ bố trí chung và bản vẽ lắp ráp
summary: Tạo mặt bằng, mặt đứng và một bản vẽ lắp ráp cho mỗi ký hiệu lắp ráp từ mô hình, trên tờ A4 đến A1 hoặc ANSI B đến D, phát hành với chữ cái sửa đổi, và tải xuống dưới dạng PDF, DWG hoặc DXF.
keywords: nét khuất, loại bỏ nét khuất, nét đứt, đám mây sửa đổi, đám mây, tam giác sửa đổi, mặt bằng bu lông neo, thanh neo, bảng thanh, bảng bản đế, bố trí, phát hành, sửa đổi, rev, bảng sửa đổi, phát hành lại, nhật ký phát hành, phiếu chuyển giao, dwg, dxf, tệp CAD, xuất bản vẽ, bản vẽ, bố trí chung, ga, mặt bằng, mặt đứng, bản vẽ lắp ráp, khổ tờ, khổ giấy, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, in, tỷ lệ, khung tên, tham chiếu mô hình
from: 709f8604
---

Chọn {{ui:Drawings}} trong nhóm {{ui:Output}}. DetailCraft tạo toàn bộ bộ bản vẽ từ mô hình như hiện tại. Không có gì được lưu: thay đổi mô hình, mở lại {{ui:Drawings}}, và bộ bản vẽ được tạo lại.

## Những gì có trong bộ bản vẽ

- **Mặt bằng**, một bản cho mỗi cốt có chứa gì đó, nhìn từ trên xuống.
- **Mặt đứng**, một bản cho mỗi đường lưới có cấu kiện trong vòng 1 m.
- **Mặt bằng bu lông neo**, khi mô hình có bản đế: mọi bản đế nhìn từ trên với cột và thanh neo của nó, các lưới kèm kích thước, một chi tiết điển hình cho mỗi mẫu thanh (BP1, BP2 …) với khoảng cách thanh và khoảng cách mép, và hai bảng thống kê: thanh neo theo ký hiệu (R1, R2 …: số lượng, đường kính, chiều dài, phần nhô trên bản, chiều sâu chôn, cấp) và bản đế theo lưới (cột, mẫu, bản, thanh, cao độ đỉnh bản). Cột nằm ngoài lưới được xác định bằng tọa độ của nó.
- **Bản vẽ lắp ráp**, mỗi ký hiệu lắp ráp một bản: hình chiếu đứng, hình chiếu bằng và hình chiếu cạnh, kích thước nối chuỗi đến lỗ và mép bản, danh sách chi tiết, bu lông và thanh rời, và ghi chú về mối hàn và lỗ. Mỗi bản có hàn đều có ký hiệu mối hàn góc trong hình chiếu đứng (AWS A2.4): mũi tên chỉ vào mối nối, tam giác phía dưới đường tham chiếu nghĩa là phía của mũi tên, con số bên trái là kích thước mối hàn tính bằng mm, và một vòng tròn tại chỗ mũi tên gặp đường nghĩa là hàn quanh toàn bộ.

**Nét khuất.** Mặt bằng và mặt đứng bỏ đi các nét của cấu kiện mà một cấu kiện hoàn toàn nằm phía trước che khuất (dầm nhìn theo đầu, đặt sau cột). Bản vẽ lắp ráp vẽ bản theo nét đứt ở chỗ cấu kiện chính che khuất: sau bụng trong hình chiếu đứng (nhìn từ phía −u của cấu kiện), dưới cánh trên trong hình chiếu bằng. Các cấu kiện nằm cùng độ sâu, hoặc chồng lấn về độ sâu, được vẽ đầy đủ cả hai.

Mỗi tờ có khung tên với số bản vẽ, tỷ lệ, tên mô hình, ngày, số tờ kèm khổ tờ, và mã tham chiếu mô hình: một mã được tạo từ mô hình đã lưu, để bản in có thể được đối chiếu với mô hình mà nó lấy ra.

## Chọn khổ tờ

Chọn khổ trong danh sách ở đầu cửa sổ {{ui:Drawings}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) hoặc {{ui:ANSI D}} (22 × 34 in). Mọi tờ đều nằm ngang. Bộ bản vẽ được tạo lại ngay trên khổ mới, và cùng khổ đó được dùng cho bản vẽ xưởng. Khổ cũng có trong [cài đặt DetailCraft](topic:settings#drawings), và trình duyệt này ghi nhớ nó.

- Tờ càng lớn thì vẽ ở tỷ lệ càng lớn. Tỷ lệ luôn là tỷ lệ tiêu chuẩn (1:10, 1:20, 1:25, 1:50, 1:100 và tương tự).
- Chữ giữ cùng cỡ trên mọi tờ, nên vẫn dễ đọc khi in.
- Trên tờ nhỏ, một lắp ráp dài và mảnh có thể có tỷ lệ theo chiều sâu lớn hơn tỷ lệ theo chiều dài. Khi đó tiêu đề hình ghi cả hai tỷ lệ, và kích thước sẽ quyết định.

## Phát hành bản vẽ và sửa đổi

Dòng phía trên bản xem trước cho biết tình trạng của tờ đang hiển thị: **Chưa phát hành**, **Rev B, đã phát hành … ; chưa thay đổi từ đó**, hoặc, màu đỏ, **Đã thay đổi từ rev B: cần phát hành lại**. Danh sách tờ đánh dấu các tờ đã phát hành với bản sửa đổi của chúng, và các tờ cần phát hành lại.

- Nhập mục đích của đợt phát hành (ban đầu là "Đã phát hành để chế tạo") và chọn {{ui:Issue this sheet}}, hoặc {{ui:Issue changed sheets}} cho mọi tờ mới hoặc đã thay đổi kể từ lần phát hành trước.
- Lần phát hành đầu tiên của một tờ là bản sửa đổi A, rồi B, C và cứ thế tiếp tục (bỏ qua I và O).
- Khung tên hiển thị số bản vẽ kèm bản sửa đổi ("A-B1  rev B"), và một bảng sửa đổi bên cạnh liệt kê các lần phát hành gần nhất: bản sửa đổi, ngày và mô tả. Trên tờ nhỏ, bảng hiển thị số dòng vừa đủ.
- Một tờ "thay đổi" khi những gì được vẽ trên đó thay đổi: một cấu kiện bị di chuyển, một lỗ mới, một ký hiệu bị đánh số lại. Ngày, số lượng tờ và chính bảng sửa đổi không được tính. Thay đổi khổ tờ sẽ làm thay đổi mọi tờ.
- Nhật ký phát hành được lưu trong tệp mô hình, và phát hành là một bước hoàn tác. [Tệp KISS](topic:kiss-export) mang bản sửa đổi mới nhất của mỗi bản vẽ.

### Đám mây sửa đổi

Từ lần phát hành thứ hai của một tờ trở đi, mọi cấu kiện hoặc móng đã thay đổi đều được vẽ trong một đám mây sửa đổi có tam giác sửa đổi mang chữ cái.

- Khi một tờ đã thay đổi kể từ lần phát hành trước, các đám mây cho thấy những gì đã thay đổi từ đó, với bản sửa đổi sắp tới trong tam giác (rev B đã phát hành và đã thay đổi: các tam giác ghi C).
- Khi bạn phát hành, các đám mây ở lại trên tờ của bản sửa đổi đó, như trong bộ bản in, cho đến khi tờ thay đổi lần nữa.
- Mỗi tờ chỉ đánh đám mây cho những thay đổi mà nó hiển thị. Mặt bằng và mặt đứng không vẽ lỗ hay lỗ khoét, nên chúng đánh đám mây cho cấu kiện đã di chuyển, bị xoay hoặc đổi kích thước, hoặc có ký hiệu bị đổi. Bản vẽ lắp ráp và mặt bằng bu lông neo cũng đánh đám mây cho các lỗ và lỗ khoét mới hoặc đã di chuyển.
- Việc đánh số lại ký hiệu được tính: khi một thay đổi biến một dầm thành lắp ráp mới, các dầm có ký hiệu bị tăng (B1 thành B2) được đánh đám mây trên mặt bằng và mặt đứng.
- Cấu kiện đã bị xóa không còn gì để đánh đám mây.
- Các tờ đã phát hành trước khi có đám mây sửa đổi (DetailCraft 0.4) sẽ bắt đầu đánh đám mây từ lần phát hành tiếp theo.
- Đám mây có trong các tệp tải xuống PDF, DXF và DWG, và bản thân đám mây không bao giờ được tính là thay đổi.

## Tải xuống

Chọn định dạng trong danh sách cạnh các nút, rồi chọn {{ui:This sheet}} cho tờ đang hiển thị hoặc {{ui:All sheets}} cho toàn bộ bộ bản vẽ.

- **PDF**: để in hoặc gửi. {{ui:All sheets}} tạo một tệp PDF, mỗi trang là một tờ, mỗi trang có khổ đã chọn.
- **DWG**, theo định dạng 2018, 2013, 2010, 2007, 2004 hoặc 2000: để mở các tờ trong chương trình CAD. Chọn định dạng cũ hơn cho chương trình cũ hơn.
- **DXF (R12)**: phiên bản mà hầu hết chương trình CAD đều mở được.

Tệp DWG hoặc DXF được vẽ ở kích thước thật: một đơn vị bản vẽ là một milimét trên giấy, nên in ở 1:1 và mọi hình giữ đúng tỷ lệ ghi trong tiêu đề. Mỗi bút là một lớp riêng: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID và tương tự, với độ dày nét (DWG) và kiểu nét đứt của nó. Chữ là văn bản theo kiểu chữ DetailCraft (Arial). Kích thước là các đường và con số bạn thấy, không phải đối tượng kích thước. {{ui:All sheets}} đặt các tệp DWG hoặc DXF vào một tệp zip, mỗi tờ một tệp.

:::note
DXF R12 không có độ dày nét và không có màu tô: các lớp giữ nguyên tên, nên hãy đặt bút theo lớp khi in, và các hình được tô bị bỏ qua (thanh trạng thái cho biết có bao nhiêu).
:::

In ở 100% (không "vừa trang") trên giấy cùng khổ nếu bạn muốn các tỷ lệ đã ghi được giữ đúng.
