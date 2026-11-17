---
title: Trình tạo cầu thang thép
summary: Cầu thang thép từ chiều cao sàn đến sàn, chiều dài mặt bằng và chiều rộng: chiều cao và độ sâu bậc theo bộ quy tắc bạn chọn, chiếu nghỉ, lan can và con tiện, bản vẽ thi công và danh sách cắt có khối lượng.
keywords: cầu thang thép, steel stair, trình tạo cầu thang, stair generator, dầm dọc, stringer, bậc, tread, thép chống trượt, lưới thép, bậc máng gấp, chiếu nghỉ, tay vịn, con tiện, chiều cao bậc, độ sâu bậc, osha, ibc, approved document k, danh sách cắt, khối lượng, bản vẽ thi công
from: a4f0a985
---

Trình tạo cầu thang tạo một cầu thang thép hoàn chỉnh từ vài con số: dầm dọc, bậc, chiếu nghỉ khi vế thang quá cao, tay vịn với trụ và con tiện, các lỗ lắp đặt trên dầm dọc, danh sách cắt có khối lượng và các bản vẽ thi công. Nó bắt đầu từ công cụ {{ui:Cầu thang}}, giống cầu thang đơn giản (xem Cầu thang), với thêm một nút gạt.

## Đặt cầu thang thép

1. Chọn {{ui:Cầu thang}} trong nhóm {{ui:Đặt}}, hoặc nhấn {{key:S}}.
2. Ở bên phải, đánh dấu {{ui:Dùng trình tạo cầu thang thép}}.
3. Chọn **bộ quy tắc** cho nơi cầu thang được xây, **chiều cao bậc** (từ sàn đến sàn; 0 = lên đến tầng kế tiếp), **chiều dài mặt bằng có sẵn** (0 = để quy tắc quyết định), **chiều rộng thông thủy** và **loại bậc**: thép chống trượt, lưới thép hoặc bậc máng gấp.
4. Đặt tiết diện dầm dọc, chiếu nghỉ (theo quy tắc, hoặc một số), tay vịn (hai bên, một bên, hoặc không có), chiều cao lan can và khoảng cách con tiện.
5. Nhấp một giao điểm lưới: đó là chân của alzơ đầu tiên.

Chọn cầu thang (nhấp vào một dầm dọc, bậc hoặc lan can) để đổi bất kỳ thiết lập nào; các thuộc tính hiển thị alzơ, độ sâu bậc, độ nghiêng, vế và chiếu nghỉ, lượng thép có trong đó, danh sách cắt và các nguồn của bộ quy tắc.

## Các bộ quy tắc

Bộ quy tắc giới hạn hình dạng của cầu thang: chiều cao và độ sâu bậc, 2 × alzơ + độ sâu bậc, độ nghiêng, chiếu nghỉ, chiều cao lan can và khe hở lớn nhất. DetailCraft cung cấp các bộ dưới đây; vùng là một thiết lập, không phải phỏng đoán. Mở **Nguồn các con số của bộ quy tắc này** trong bảng thuộc tính: mỗi con số nêu nguồn của nó và cho biết mức độ đã được kiểm tra.

- **International Building Code 2021**: alzơ 4 đến 7 in., bậc ít nhất 11 in., lan can 34 đến 38 in. Giới hạn 12 ft giữa các chiếu nghỉ được hiển thị là *chưa đọc được*, và các số lan can được đọc từ tài liệu hướng dẫn trích dẫn quy chuẩn: hãy xác nhận trước khi dựa vào chúng.
- **OSHA 29 CFR 1910.25 và 1910.29** (cầu thang tiêu chuẩn công nghiệp): 30° đến 50°, alzơ tối đa 9.5 in., bậc ít nhất 9.5 in., rộng ít nhất 22 in., chiếu nghỉ rộng bằng cầu thang và sâu 30 in., thanh lan can trên dùng làm tay vịn cao 36 đến 38 in. Các giá trị này được đọc trực tiếp từ chính quy định.
- **Approved Document K 2013, England** (cầu thang tiếp cận và tiện ích chung): các khoảng alzơ và độ sâu bậc, cùng 2 × alzơ + độ sâu bậc 550 đến 700 mm, đọc từ báo cáo do chính phủ ủy quyền có liệt kê các giá trị này. Tài liệu không cho DetailCraft chiều cao lan can, nên chiều cao bạn đặt được dùng và danh sách Vấn đề ghi điều đó.

Bộ quy tắc không có trong danh sách này sẽ không được đoán: cầu thang khi đó theo quy tắc thoải mái 600 đến 650 mm thông thường và báo rằng nó không có quy tắc.

## Nó tính những gì

- **Alzơ và độ sâu bậc.** Số alzơ ít nhất mà 2 × alzơ + độ sâu bậc nằm giữa khoảng của quy tắc, và độ sâu bậc không rơi dưới mức tối thiểu của quy tắc. Khi có cho sẵn chiều dài mặt bằng, độ sâu bậc là chiều dài đó chia cho số bậc, và mọi giá trị ngoài quy tắc đều được nêu.
- **Vế và chiếu nghỉ.** Một vế cao hơn mức quy tắc cho phép được chia bằng một chiếu nghỉ rộng bằng cầu thang và không nhỏ hơn mức tối thiểu của quy tắc; bạn cũng có thể yêu cầu chiếu nghỉ. Chiếu nghỉ là một khung gồm hai dầm bên và hai thép góc ngang, dưới một tấm phủ, trên hai trụ.
- **Bậc.** Thép chống trượt là một bản hàn (mặc định 6 mm; hoa văn không được cộng vào khối lượng). Bậc máng gấp có một mép gấp ở mép trước và được bắt bulông qua bụng dầm dọc: hai lỗ lớn hơn bulông 2 mm ở 0.3 và 0.7 độ sâu. Lưới thép được vẽ như một bản có khối lượng tương đương (chiều sâu thanh chịu lực × độ dày ÷ bước); các thanh ngang và dải viền không được tính và danh sách cắt nêu điều đó.
- **Lan can.** Thanh lan can trên bằng ống, đặt trên các trụ dọc theo mỗi vế và mỗi chiếu nghỉ, với khoảng cách con tiện mà không quả cầu nào lớn hơn khe hở của quy tắc lọt qua (mặc định tối đa 100 mm).

## Bản vẽ, danh sách cắt, xuất

- Vế là một cụm; lan can là một cụm khác (hai bên là cùng một cụm, được làm hai lần). Mỗi cụm có bản vẽ cụm của nó, và bản vẽ dầm dọc cho thấy các lỗ của nó.
- **Tờ cầu thang** (ST-…) cho thấy dầm dọc thẳng của mỗi vế với các vị trí lỗ được ghi từ đầu dưới, cùng chi tiết bậc: mặt cắt, mép bậc, mép gấp và mặt bích cuối với các lỗ của nó.
- {{ui:Danh sách cắt và khối lượng}} trong bảng thuộc tính liệt kê mọi tiết diện và chiều dài với số lượng và kilôgam; {{ui:Tải danh sách cắt (CSV)}} lưu danh sách.
- Mọi thứ đi vào bảng kê vật tư, tệp NC và IFC như các chi tiết thông thường (IfcMember, IfcColumn, IfcPlate).

## Cần biết

- Đây là điểm khởi đầu, không phải thiết kế. Không có gì được kiểm tra về cường độ hay độ võng; bộ quy tắc chỉ giới hạn hình dạng.
- Đầu dầm dọc tựa vào sàn được cắt vuông và không được chi tiết hóa; trụ chiếu nghỉ đứng xuống sàn bên dưới và không có bản chân cột.
- Đặt cầu thang như một phần tử trong BimCraft hiện chưa được kết nối.
