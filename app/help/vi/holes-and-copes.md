---
title: Thêm lỗ và cắt góc
summary: Nhập lỗ vào bụng, cánh và bản, và cắt góc cánh tại đầu dầm, đo từ đầu cắt của chi tiết.
keywords: lỗ, các lỗ, lỗ bulông, cắt góc, khoét, cắt, khoan, đột, lỗ bụng, lỗ cánh
from: 33d12398
---

Lỗ và cắt góc được nhập theo vị trí. Chúng thuộc về cấu kiện và di chuyển cùng nó.

Các lỗ do liên kết tạo ra (bản đầu, bản chân cột) được thêm tự động; bạn không nhập chúng. Chúng được liệt kê là "… lỗ từ liên kết (chỉnh sửa liên kết)".

## Vị trí được đo từ đâu

- **x** chạy dọc theo chi tiết từ **đầu cắt** của nó: đầu sau khi liên kết đã cắt lùi lại. Vậy x = 0 là đầu thực của thép, không phải điểm lưới.
- **y** được đo qua mặt từ tâm tiết diện:
   - trên **bụng**: lên (dương) hoặc xuống từ giữa chiều sâu;
   - trên **cánh** hoặc **bản**: theo chiều rộng, từ đường tâm.
- Điểm đầu của cấu kiện là điểm đầu tiên bạn nhấp khi đặt nó. Các hàng {{ui:Đầu (x, y, z mm)}} cho biết đầu nào là đầu nào.

## Thêm một lỗ

1. Chọn cấu kiện.
2. Trong hộp {{ui:Lỗ}} của bảng {{ui:Thuộc tính}}, chọn {{ui:Mặt}}: {{ui:Bụng}}, {{ui:Cánh trên}} hoặc {{ui:Cánh dưới}} (với tiết diện chữ I, máng hoặc hộp chữ nhật), hoặc {{ui:Mặt bản}} (với bản).
3. Nhập {{ui:x dọc theo (mm)}}, {{ui:y ngang (mm)}} và {{ui:Đường kính (mm)}}. Biểu mẫu bắt đầu với x 100, y 0, đường kính 22.
4. Chọn {{ui:Thêm lỗ}}.

Thanh trạng thái hiển thị "Đã thêm lỗ. x tính từ đầu cắt; y tính từ tâm tiết diện (bụng: lên, cánh/bản: ngang)." Lỗ xuất hiện trong danh sách, và trong khung nhìn như một nút tối màu xuyên qua mặt.

Để xóa một lỗ, chọn × bên cạnh nó trong danh sách.

Thép góc và ống tròn chưa nhận lỗ: hộp {{ui:Lỗ}} của chúng ghi điều đó.

:::note
Trong khung nhìn 3D, các lỗ được vẽ dưới dạng nút tối, không khoét xuyên qua thép. Chúng là lỗ thực trong các tệp NC, bản vẽ thi công và xuất IFC.
:::

Lỗ có x nằm ngoài một trong hai đầu của chi tiết sẽ hiển thị trong thẻ {{ui:Vấn đề}} là "lỗ nằm ngoài đầu của chi tiết".

## Thêm một cắt góc

Cắt góc dành cho tiết diện chữ I: chúng cắt đi cánh trên hoặc cánh dưới (và chiều sâu bụng tương ứng) tại một đầu, để dầm không va vào cấu kiện khác.

1. Chọn một cấu kiện tiết diện chữ I.
2. Trong hộp {{ui:Cắt góc}}, chọn {{ui:Cuối}} ({{ui:Đầu}} hoặc {{ui:Cuối}}) và {{ui:Phía}} ({{ui:Trên}} hoặc {{ui:Dưới}}).
3. Nhập {{ui:Chiều dài (mm)}} (dọc theo dầm từ đầu đó) và {{ui:Chiều sâu (mm)}} (xuống từ đỉnh, hoặc lên từ đáy). Biểu mẫu bắt đầu với 100 x 40.
4. Chọn {{ui:Thêm cắt góc}}.

Khung nhìn hiển thị phần cắt góc được khoét khỏi thép. Danh sách ghi, ví dụ, "Trên tại đầu: 100 x 40". Xóa nó bằng ×.

Cắt góc là hình vuông: hiện chưa có bán kính tại góc trong.

## Lỗ và cắt góc ảnh hưởng đến ký hiệu thế nào

Hai chi tiết chỉ nhận cùng một ký hiệu chi tiết nếu lỗ và cắt góc của chúng khớp nhau trong phạm vi 1 mm, có tính đến việc chi tiết bị lật úp. Thêm một lỗ cho một dầm trong nhóm sẽ cho dầm đó một ký hiệu mới. Xem [Quy tắc ký hiệu](topic:mark-rules).
