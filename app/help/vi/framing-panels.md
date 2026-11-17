---
title: Panel khung gỗ và thép mỏng
summary: Dựng các panel tường, sàn và mái bằng gỗ hoặc thép mỏng, với mọi chi tiết, danh sách cắt, bản vẽ thi công và phôi cần mua.
keywords: khung, gỗ, gỗ xẻ, thép mỏng, thép tạo hình nguội, thanh đứng, xà, kèo, dầm đỡ, dầm đầu, thanh đứng đầu, thanh đứng chân, thanh lửng, danh sách cắt, bản vẽ thi công, panel
from: 3e38ffb9
---

Thẻ {{ui:Khung sườn}} dựng các panel bạn mô tả và cho bạn những gì tổ thi công khung và xưởng gỗ cần. Các panel được lưu trong tệp mô hình.

:::warning
Kích thước, khoảng cách và dầm đầu là do bạn quyết định. DetailCraft không kiểm tra liệu một thanh đứng ở khoảng cách đó có chịu được bức tường đó, hay một dầm đầu có vượt qua lỗ mở đó không: việc này thuộc về bảng tra của tiêu chuẩn bạn dùng và kỹ sư của bạn.
:::

## Thêm một panel

Chọn {{ui:Thêm một tường}}, {{ui:Thêm một sàn}} hoặc {{ui:Thêm một mái}}, rồi điền kích thước theo milimét, vật liệu (gỗ hoặc thép mỏng) và kích thước cấu kiện. Kích thước gỗ là tên danh định cùng kích thước đã bào (2×4 là 38 × 89 mm). Thanh đứng thép được đặt tên theo chiều sâu và chiều dày, ví dụ `C92-1.2`.

## Tường

Tường có một thanh đáy, một hoặc nhiều thanh đỉnh (một thanh ray đối với thép), các thanh đứng đầu, các thanh đứng theo khoảng cách bạn nhập, và với mỗi lỗ mở: hai thanh đứng chính, hai thanh đứng đỡ, một dầm đầu với kích thước và số lớp bạn chọn, và các thanh lửng phía trên dầm đầu (và dưới ngưỡng cửa sổ). Nhập cho mỗi lỗ mở khoảng cách từ đầu trái, chiều rộng, và đỉnh cùng đáy của lỗ thô đo từ sàn lót; cửa đi có đáy bằng 0.

## Sàn và mái

Sàn có các xà chạy qua chiều rộng theo nhịp, dầm biên ở hai đầu và, nếu bạn đánh dấu, các thanh chặn ở giữa nhịp. Panel mái là một đầu hồi: một cặp kèo theo khoảng cách bạn nhập (chiều dài của chúng gồm cả phần mái hiên chìa theo mái dốc) và một xà nóc.

## Bạn nhận được gì

Mỗi panel hiển thị các chi tiết của nó trên bản vẽ đúng tỷ lệ, với mọi chi tiết được đánh dấu, một danh sách cắt theo ký hiệu, và tổng. Bảng {{ui:Phôi cần mua}} xếp tất cả các đoạn cắt của các panel vào các chiều dài phôi, chọn chiều ngắn nhất đủ chứa các đoạn cắt của mỗi thanh. {{ui:Lưu bản vẽ thi công (SVG)}} ghi bản vẽ; nút {{ui:CSV}} ghi mọi danh sách cắt và danh sách phôi.

## Đặt một panel trong mô hình

Dưới mỗi panel, ghi vị trí của nó (x, y, z theo milimét và góc) rồi nhấn {{ui:Đặt như các cấu kiện}}: mỗi chi tiết thành một cấu kiện của mô hình, với tiết diện đã bào đúng kích thước và trọng lượng của vật liệu (khoảng 500 kg/m³ đối với gỗ, và thép đối với các thanh đứng). Tường chạy theo góc từ đầu dưới bên trái, với đáy tại z; các xà sàn nằm với mặt dưới tại z; đầu hồi của mái chạy theo góc, với z ở đỉnh các thanh đỉnh tường. Mỗi lớp của dầm đầu là một cấu kiện đặt cạnh nhau. Nhấn lại sẽ thay thế các cấu kiện đã đặt trước đó, và {{ui:Gỡ bỏ các cấu kiện đã đặt}} sẽ xóa chúng; mỗi lần là một bước hoàn tác. Phân tích bỏ qua các cấu kiện này: chúng không phải là cấu kiện khung thép.

## Tờ PDF

{{ui:Tờ PDF}} lưu một trang A3 cho mỗi panel: panel đúng tỷ lệ với mọi chi tiết được đánh dấu, kích thước tổng thể, danh sách cắt và một dải tiêu đề.

Các vấn đề trong bảng {{ui:Vấn đề}}: một lỗ mở quá gần đầu tường hoặc gần lỗ khác, một dầm đầu không vừa dưới các thanh đỉnh, một chi tiết dài hơn phôi dài nhất.

Bảng {{ui:Vấn đề}} cũng liệt kê **Giao diện (LOD 350)** cho các panel tường và tường bê tông: một lỗ mở chạy qua đầu hoặc đỉnh của tường, hai lỗ mở chồng lên nhau, và một lỗ mở tường bê tông rộng hơn 1000 mm không có thanh gia cố biên. Đây là khuyến nghị, theo cùng các quy tắc mà kiểm toán của BimCraft áp dụng; chiều rộng là giá trị khởi đầu của CadCraft, không phải tiêu chuẩn.
