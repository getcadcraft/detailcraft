---
title: Chuyển từ phần mềm triển khai chi tiết khác
summary: Thói quen của một gói triển khai chi tiết đầy đủ ánh xạ sang DetailCraft thế nào, và những khác biệt khiến người triển khai có kinh nghiệm vấp.
keywords: chuyển đổi, di chuyển, quen thuộc, quy trình, so sánh, khác biệt, đánh số, cấu kiện, thư viện, bản vẽ, thói quen
from: 39639a5d
---

Nếu bạn triển khai chi tiết trong Tekla Structures, phần lớn DetailCraft sẽ quen thuộc: lưới, cao độ, tiết diện từ thư viện, cấu kiện và cụm lắp ráp, liên kết, đánh số, tệp NC, IFC. Quy mô thì rất khác: Tekla Structures là một hệ thống sản xuất đầy đủ, còn DetailCraft là một ứng dụng trình duyệt nhỏ, còn sớm, làm một số việc từ đầu đến cuối. Trang này cho bạn biết thói quen nào tiếp tục dùng được và thói quen nào thì không.

:::tip
Nếu bạn quen với dải lệnh của Tekla Structures, hãy chọn kiểu menu {{ui:Dải lệnh thép}} trong {{ui:Cài đặt}} › {{ui:DetailCraft}} › {{ui:Menu, phím và chuột}}: các thẻ Mô hình hóa, Triển khai chi tiết, Chỉnh sửa, Bản vẽ, Chế tạo và Xem, và nút giữa di chuyển khung nhìn. Nếu bạn đến từ AutoCAD và thích gõ lệnh, {{ui:Kiểu bản vẽ 2D cổ điển}} thêm một dòng lệnh (BEAM, COLUMN, ENDPLATE, ZOOM …). Xem [Menu, phím và chuột](topic:menus-keys-and-mouse).
:::

## Bảng so sánh nhanh

| Bạn quen với | Trong DetailCraft |
|---|---|
| Tạo lưới với tọa độ trong hộp thoại lưới | {{ui:Lưới}} trong bảng bên trái: nhãn và khoảng cách giữa các đường, không phải tọa độ tuyệt đối. Các đường đánh số chạy theo một hướng, các đường đánh chữ chạy theo hướng kia |
| Cao độ là tọa độ Z của lưới | Một danh sách {{ui:Tầng}} riêng, tên và cao độ cho mỗi dòng, áp dụng bằng {{ui:Áp dụng tầng}} |
| Chọn điểm ở bất kỳ đâu bằng bắt điểm | Các nhấp chỉ bắt vào giao điểm lưới. Các điểm ngoài lưới được gõ vào {{ui:Đầu (x, y, z mm)}} của một cấu kiện |
| Lệnh cột, dầm và bản | {{ui:Cột}} ({{key:C}}), {{ui:Dầm}} ({{key:B}}), {{ui:Thanh giằng}} ({{key:R}}), {{ui:Bản}} ({{key:P}}), {{ui:Móng}} ({{key:F}}) |
| Hộp thoại thuộc tính cấu kiện (nhấp đúp vào cấu kiện) | Nhấp một lần: bảng {{ui:Thuộc tính}} bên phải luôn hoạt động; không có hộp thoại và không có nút Sửa hay Áp dụng |
| Thiết lập vị trí trên mặt phẳng, xoay và chiều sâu | {{ui:Vị trí}} (đỉnh thép, giữa hoặc đáy trên đường) và {{ui:Xoay (°)}}. Không có độ lệch ngang riêng |
| Thư viện tiết diện | Một danh sách cố định gồm 2,311 kích thước đã công bố (AISC W, S, C, L, HSS, Pipe; IPE, HEA, HEB, UPN châu Âu; UB, UC, PFC, EA, UEA, SHS, RHS, CHS của Anh và các tiết diện rỗng tạo nguội), cùng các bản tham số và các {{ui:Tiết diện tùy chỉnh}} của riêng bạn |
| Thư viện vật liệu | Bảy cấp trong một danh sách: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Áp dụng một thành phần liên kết và hộp thoại của nó | Chọn dầm, chọn {{ui:Bản đầu}}. Các thiết lập xuất hiện trong bảng {{ui:Thuộc tính}}. Chỉ có hai liên kết (bản đầu với cánh cột, bản chân cột) |
| Liên kết tự động, hoặc sao chép một nút sang các nút tương tự | Chọn một liên kết, chọn {{ui:Áp dụng cho tương tự (n)}} |
| Đánh số với dãy và số bắt đầu | Không có lệnh: ký hiệu tự cập nhật sau mỗi thay đổi, với tiền tố cố định c, b, br, p và C, B, BR, P |
| Hộp thoại bulông và lỗ | Lỗ được gõ vào theo mặt và vị trí. Bulông chỉ đến từ liên kết |
| Công cụ cắt, khớp và cắt đa giác | Cắt góc (trên hoặc dưới, ở một trong hai đầu) chỉ cho thép chữ I. Cắt lùi của liên kết là tự động |
| Báo cáo và mẫu | Ba báo cáo cố định trong các thẻ ở dưới, và tải xuống CSV |
| Tạo bản vẽ và danh sách bản vẽ | Một bản vẽ thi công cho mỗi ký hiệu chi tiết, tất cả tạo cùng lúc, xem trước rồi tải xuống thành một PDF hoặc từng tờ. Không có gì được giữ hay sửa |
| Xuất tệp NC | {{ui:Tệp NC}}: một tệp DSTV cho mỗi ký hiệu chi tiết, chỉ thép chữ I và bản, được nén zip |
| Xuất IFC | {{ui:IFC}}: IFC4 của toàn bộ mô hình, có thép thanh |
| Thép thanh trong mọi cấu kiện bê tông | Thép thanh chỉ có trong móng đệm chữ nhật, cỡ thanh theo Mỹ, có lớp đáy và thép chờ |
| Mô hình lưu trong thư mục dự án, nhiều người dùng | Một tệp `.detailcraft.json` bạn tải xuống. Một người dùng, trên máy tính của bạn |
| Lịch sử hoàn tác | {{key:Mod+Z}} và {{key:Mod+Y}}, tối đa 200 bước, giữ cho đến khi bạn mở hoặc bắt đầu mô hình khác |

## Những khác biệt khiến người ta vấp

### Ký hiệu tự thay đổi

Không có bước đánh số. Ký hiệu được tính lại sau mỗi thay đổi, nên luôn cập nhật, nhưng chúng cũng có thể đánh số lại: thêm một cột và c3 của hôm qua có thể thành c4. Không có "lịch sử đánh số" để giữ ký hiệu cũ. Hoàn tất mô hình, rồi phát hành BOM, tệp NC và bản vẽ thi công cùng lúc từ một tệp đã lưu.

### Nút giữa chuột phóng to; nó không di chuyển

Trong khung nhìn 3D: kéo trái để xoay, kéo phải để di chuyển, con lăn để phóng to, và kéo bằng nút giữa cũng phóng to. Giữ {{key:Shift}} khi kéo trái cũng di chuyển được. Con lăn phóng to về phía giữa khung nhìn, không về phía con trỏ. Không có chọn tâm xoay: mô hình xoay quanh giữa khung nhìn. Xem [Di chuyển trong khung nhìn 3D](topic:navigate-3d).

### Cột mặc định quay theo một hướng

Ở góc xoay 0, cánh cột chạy theo hướng lưới đánh số. Dầm chạy giữa các đường lưới đánh chữ liên kết vào bụng, và bản đầu bị từ chối ở đó ("Dầm nối vào bụng cột chưa được xây dựng"). Xoay các cột đó 90° trước khi thêm liên kết.

### Mặt đứng chỉ trên các đường đánh chữ

{{ui:Mặt đứng}} chỉ nhìn dọc theo các đường lưới đánh chữ. Không có khung nhìn dọc theo đường đánh số, không có khung nhìn đã lưu và không có mặt phẳng làm việc. Dùng {{ui:3D}} hoặc {{ui:Thêm theo lưới}} cho khung trên đường đánh số.

### Chọn, sao chép và di chuyển

Chọn nhiều cấu kiện bằng {{key:Shift}}+nhấp hoặc {{key:Mod+A}}, rồi sao chép, cắt, dán (tại giao điểm lưới, tại một độ lệch đã gõ, hoặc tại chỗ) và nhân bản chúng, kể cả liên kết ([Sao chép, dán và nhân bản](topic:copy-paste)). Không có chọn bằng cửa sổ, không có bộ lọc chọn, không có di chuyển, đối xứng hay mảng, và thuộc tính được thay đổi từng cấu kiện một trong bảng {{ui:Thuộc tính}}.

### Lưới không kéo cấu kiện theo

Cấu kiện giữ nguyên tọa độ khi bạn đổi khoảng cách lưới; không có gì di chuyển theo các đường lưới. Đổi lưới trước khi đặt thép, hoặc sửa tọa độ đầu của từng cấu kiện sau đó.

### Liên kết không được thiết kế

Hai liên kết đặt bản, lỗ, bulông và mối hàn từ các số bạn cho. Không có kiểm tra thiết kế nào, chỉ có cảnh báo về mép và khoảng cách (từ EN 1993-1-8 Bảng 3.3).

### Lỗ không được cắt trong khung nhìn 3D

Lỗ hiện như các nút tối. Chúng là lỗ thật trong các tệp NC, bản vẽ thi công và tệp IFC. Phần cắt góc được cắt trong khung nhìn.

### Trọng lượng là trọng lượng thô

Trọng lượng thép không trừ lỗ hay phần cắt góc, và trọng lượng bulông không được tính.

### Chỉ milimét

Mọi thứ được gõ và hiển thị bằng milimét, kể cả với hình dạng AISC. Tên tiết diện giữ dạng đã công bố (W12x50, HSS6x6x1/4).

### Không có bản vẽ để quản lý

Không có danh sách bản vẽ, không có trình soạn thảo bản vẽ, không có bản vẽ bố trí chung hay bản vẽ lắp ráp. Bản vẽ thi công được tạo khi bạn yêu cầu và được tải xuống; để thay đổi, hãy đổi mô hình và tạo lại.

### Nó chạy trong trình duyệt

Lưu là tải xuống một tệp. Các phím tắt mà trình duyệt tự giữ không dùng được. Mô hình của bạn không bao giờ rời máy tính của bạn: xem [Tệp của bạn đi đâu](common:your-files).

## Những gì nên tiếp tục làm trong phần mềm hiện tại

Hiện nay DetailCraft phù hợp với khung nhỏ, kiểm tra một ý tưởng, giảng dạy, hoặc tạo tệp NC và bản vẽ thi công cho công việc dầm và cột đơn giản. Hãy giữ các liên kết phức tạp, bản vẽ bố trí chung, bản vẽ lắp dựng, dự án nhiều người dùng và mọi thứ được liệt kê trong [Những gì chưa được xây dựng](topic:not-built-yet) trong phần mềm bạn đang dùng.
