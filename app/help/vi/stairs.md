---
title: Cầu thang
summary: Đặt một cầu thang thép thẳng từ chiều cao bậc, độ sâu bậc và chiều rộng: hai dầm dọc và các bậc bản, thành một cụm hàn.
keywords: cầu thang, stair, stairs, staircase, dầm dọc, stringer, bậc, tread, alzơ, riser, mép bậc, nosing, vế thang, cầu thang thép, ibc 1011, blondel
from: 62fa3845
---

Một cầu thang thép thẳng: hai dầm dọc (thép chữ C với mũi quay vào trong, hoặc thép dẹt đặt đứng) và một bản bậc ở mỗi bậc, hàn giữa chúng. DetailCraft tính số alzơ từ chiều cao bậc, kiểm tra chúng với giới hạn của quy chuẩn xây dựng, và tạo cầu thang thành một cụm chế tạo tại xưởng.

## Đặt cầu thang

1. Chọn {{ui:Cầu thang}} trong nhóm {{ui:Đặt}}, hoặc nhấn {{key:S}}.
2. Đặt cầu thang ở bảng bên phải: **hướng leo** (0° leo dọc theo +x, 90° dọc theo +y), **chiều cao bậc** (0 = lên đến tầng kế tiếp), **độ sâu bậc**, **chiều rộng thông thủy** giữa các dầm dọc, **alzơ cao nhất cho phép**, **dầm dọc**, **độ dày bản bậc**, **mép bậc** và vật liệu.
3. Nhấp một giao điểm lưới: đó là chân của alzơ đầu tiên, trên đường tâm cầu thang.

Thanh trạng thái ghi cầu thang đã tạo bao nhiêu alzơ. Chọn cầu thang (nhấp vào một dầm dọc hoặc một bậc) để đổi bất kỳ thiết lập nào, vị trí hay giai đoạn của nó; các thuộc tính cũng hiển thị alzơ, bậc, chiều dài mặt bằng, độ nghiêng và 2 × alzơ + độ sâu bậc.

## DetailCraft tính những gì

- **Alzơ.** Ít nhất sao cho mỗi alzơ bằng hoặc dưới mức cao nhất cho phép: chiều cao 3000 mm với 178 mm trở xuống cho 17 alzơ 176.5 mm. Có ít hơn một bậc so với số alzơ (sàn tầng trên là bước cuối cùng).
- **Bậc.** Một bản có chiều sâu bằng độ sâu bậc + mép bậc (mặc định 280 + 25 = PL6x305) và dài bằng chiều rộng thông thủy, mặt trên ở độ cao mỗi alzơ, mép trước (mép bậc) nằm trước đường alzơ.
- **Dầm dọc.** Theo độ nghiêng cầu thang, từ nơi chúng gặp sàn dưới đến nơi chúng gặp sàn trên, nằm ngay ngoài chiều rộng thông thủy, mép trên cao hơn đường mép bậc 50 mm. Mũi thép chữ C quay vào trong cầu thang; thép dẹt như PL12x250 được đặt đứng.
- **Mối hàn.** Mỗi bậc vào cả hai dầm dọc. Các bậc và dầm dọc bên phải được hàn vào dầm dọc bên trái, nên cầu thang có một ký hiệu cụm (ST1) và bản vẽ cụm riêng; các dầm dọc có ký hiệu cấu kiện st…, các bậc có p….
- **Kiểm tra.** Cảnh báo khi một alzơ nằm ngoài khoảng 4 đến 7 in. (102 đến 178 mm) hoặc độ sâu bậc dưới 11 in. (279 mm), các giới hạn của IBC 2021 mục 1011.5.2; khi 2 × alzơ + độ sâu bậc nằm ngoài 600 đến 650 mm (quy tắc thoải mái thông dụng); và khi dầm dọc quá thấp để chịu các bậc. Một tiết diện dầm dọc không xác định sẽ ngăn cầu thang được dựng.

## Cần biết

- Di chuyển, xoay, đối xứng, sao chép, dán, xóa và giai đoạn hoạt động với cầu thang như với một thanh. Xoay làm đổi hướng leo; đối xứng đưa nó đi theo hướng ngược lại.
- Dầm dọc xuất sang IFC dưới dạng IfcMember và bậc dưới dạng IfcPlate; cả hai đi vào tệp NC và bảng kê vật tư. Kiểm tra va chạm bỏ qua các phần của chính cầu thang (chúng được hàn vào nhau).
- Cầu thang đơn giản này là một vế với bậc bản. Với chiếu nghỉ, tay vịn có con tiện, bậc máng gấp hoặc bậc lưới, một bộ quy tắc bạn chọn, danh sách cắt và các bản vẽ lỗ của dầm dọc, hãy đánh dấu {{ui:Dùng trình tạo cầu thang thép}} trong công cụ Cầu thang (xem Trình tạo cầu thang thép).
- Các dầm dọc được cắt vuông: đầu cắt của chúng vào sàn không được tạo.
- DetailCraft không thiết kế cầu thang: dầm dọc và bậc không được kiểm tra cường độ hay độ võng.
