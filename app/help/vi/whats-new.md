---
title: Có gì mới trong 0.8 và 0.8.1
summary: Phim lắp dựng từ bảng tải của cần trục, bộ tự động đề xuất liên kết, bản đồ mật độ thép, kiểm tra móng, các bảng khung gỗ và thép mỏng, kiểm tra khả năng thi công và tiếp cận mối hàn, tồn kho nhà cung cấp, cái gì hỏng trước, tính toán lại trực tiếp, thêm kiểm tra bê tông, và các bản sửa lỗi 0.8.1.
keywords: có gì mới, nhật ký thay đổi, phát hành, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, lắp dựng, cần trục, bảng tải, phim, tự động, liên kết, thép thanh, mật độ, móng, bản móng, lún, khung, gỗ, thép mỏng, danh sách cắt, khả năng thi công, tiếp cận mối hàn, nhà cung cấp, tồn kho, thời gian giao hàng, cái gì hỏng trước, trực tiếp, bê tông, động đất, sàn, ngôn ngữ, trợ lý
from: 6e33e052
---

Đây là những thay đổi trong DetailCraft 0.8 (1 tháng 11 năm 2026) và 0.8.1 (2 tháng 11 năm 2026), so với 0.7. 0.7 kiểm tra các thanh thép; 0.8 lập kế hoạch các lần nâng, đề xuất liên kết, kiểm tra móng và thép thanh, và dựng khung cho tường, sàn và mái bằng gỗ hoặc thép mỏng.

## Mới

### Lắp dựng

- **Kế hoạch lắp dựng và phim.** Trong thẻ {{ui:Lắp dựng}}, mô tả cần trục (nơi nó đứng, móc cao nhất, thiết bị móc treo không có trong bảng tải) và nhập các dòng của bảng tải trọng cần trục. DetailCraft nâng mô hình từng cụm lắp ráp một, theo thứ tự giai đoạn và từng tầng, và kiểm tra mỗi lần nâng với bảng tải tại bán kính của nó và với biên an toàn bạn đặt. {{ui:Lưu phim}} ghi một tệp HTML phát được khi ngoại tuyến trong mọi trình duyệt, kể cả trên điện thoại. Các lần nâng vượt bảng tải, nằm ngoài bảng tải hoặc quá cao được liệt kê trong {{ui:Vấn đề}}. Đây là kế hoạch lập từ số liệu của bạn, không phải kế hoạch nâng chính thức. Xem [Kế hoạch lắp dựng và phim](topic:erection-movie).

### Liên kết

- **Tự động đề xuất liên kết.** Thẻ {{ui:Tự động}} xem mọi mối nối chưa có liên kết và đề xuất một liên kết dựa trên hình dạng: bản chân cột, bản cắt, bản đầu cho các dầm bạn đánh dấu là dầm chịu mô men, mối nối và bản tăng cường. Nhập một tải phân bố đều hoặc một lực cắt ở một đầu, và số bulông sẽ theo cường độ thiết kế của bulông. {{ui:Thêm tất cả}} thêm các đề xuất thành một bước hoàn tác. Đây là giá trị khởi đầu để bạn xem lại, không phải thiết kế liên kết.
- **Kiểm tra khả năng thi công.** {{ui:Vấn đề}} kiểm tra bulông mà cờ lê không với tới, bulông quá sát nhau so với đầu tuýp, mối hàn góc vượt giới hạn kích thước, và tiết diện rỗng có thể giữ nước. Kiểm tra tiếp cận mối hàn là mới: một mối hàn góc bao quanh mà mỏ hàn không với tới sẽ được liệt kê cùng cấu kiện đang chắn và tỷ lệ mối hàn bị ảnh hưởng. Xem [Kiểm tra khả năng thi công](topic:constructability).

### Móng và thép thanh

- **Kiểm tra móng.** Thẻ {{ui:Móng}} kiểm tra móng đơn, móng kết hợp và móng bè trên nền đất bạn mô tả: sức chịu tải, trượt và lật do tải sử dụng; uốn, cắt, xuyên thủng, neo và thép tối thiểu do tải đã nhân hệ số (ACI 318-19). Cột gần mép hoặc góc được kiểm tra với tiết diện bị cắt bởi mép móng. Độ lún được tính từ mô đun của đất, móng bè mềm được giải trên lò xo theo mô đun nền, và nhóm cọc cùng tường chắn có các bảng riêng. Tải cột có thể nhập tay hoặc lấy từ {{ui:Phân tích}}. Xem [Kiểm tra móng](topic:foundation-checks).
- **Bản đồ mật độ thép.** Thẻ {{ui:Mật độ thép}} vẽ bản đồ nhiệt của từng móng khi nhìn từ trên: nơi các thanh để lại quá ít chỗ cho bê tông chảy xuống, đối chiếu với quy tắc khoảng hở thông thủy và, nếu bạn nhập, cỡ cốt liệu lớn nhất và đầu đầm. Xem [Bản đồ mật độ thép](topic:rebar-congestion).

### Khung và nguồn cung

- **Khung gỗ và khung thép mỏng.** Thẻ {{ui:Khung sườn}} dựng khung cho các tấm tường, sàn và mái với từng thanh, danh sách cắt, vật liệu cần mua và bản vẽ thi công theo tỷ lệ. {{ui:Đặt như các cấu kiện}} đưa các thanh vào mô hình, và {{ui:Tờ PDF}} lưu một tờ cho mỗi tấm. Kích thước, khoảng cách và dầm đỡ đều do bạn quyết định: DetailCraft không kiểm tra chúng có chịu được tải hay không. Xem [Các bảng khung gỗ và khung thép mỏng](topic:framing-panels).
- **Tồn kho nhà cung cấp và thời gian giao hàng.** Thẻ {{ui:Nguồn cung}} đọc danh sách tồn kho của nhà cung cấp (CSV) và hiện, với mỗi tiết diện mà danh sách cắt cần mua, liệu có đủ hàng trong kho hay không và phải chờ bao lâu. Các mục thiếu và tiết diện giao muộn được liệt kê trong {{ui:Vấn đề}}. Không có đơn hàng nào được đặt. Xem [Tồn kho nhà cung cấp và thời gian giao hàng](topic:supplier-stock).

### Phân tích và thiết kế

- **Cái gì hỏng trước?** Trong thẻ {{ui:Phân tích}}, nút này tìm tổ hợp tải trọng chi phối, cấu kiện yếu nhất, tải có thể tăng đến đâu trước khi cấu kiện đầu tiên chạm giới hạn, và bản đầu hoặc bản cắt yếu nhất nếu biết cường độ cắt của bulông. Cần có các tổ hợp và tiêu chuẩn thiết kế trước. Chưa kiểm tra ép mặt, cắt khối, mối hàn và cạy. Trợ lý AI đã kết nối của bạn cũng có thể hỏi điều tương tự.
- **Trực tiếp.** Đánh dấu {{ui:Live: giải lại sau mỗi lần chỉnh sửa}} và khung sẽ được giải lại sau mỗi lần chỉnh sửa.
- **Bê tông, và hơn thế.** Cột mảnh trong khung không chuyển vị được thiết kế cho mô men đã khuếch đại (ACI 318-19 6.6.4.5). Chu kỳ dao động động đất có thể lấy từ phân tích bằng phương pháp Rayleigh. Sàn làm từ các bản sẽ nhận lượng thép mỗi lớp cần từ mô men của nó, và kiểm tra cắt một phương. Xem [Kiểm tra cấu kiện bê tông và tạo tải trọng động đất](topic:concrete-and-seismic).
- **Để kỹ sư kiểm tra.** Kết quả móng, bê tông và Cái gì hỏng trước chỉ là công cụ hỗ trợ. Tải gió chưa được xây dựng.

### Trong mọi ứng dụng

- **Ngôn ngữ.** Trợ giúp có 54 ngôn ngữ. Những ngôn ngữ ngoài tiếng Anh là bản nháp do máy dịch cho đến khi người bản ngữ đọc lại; mười ngôn ngữ là mới (Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek).
- **Số hàng thanh công cụ.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số hàng thanh công cụ}} chọn tự xuống dòng, 2 hàng hoặc 1 hàng. Thanh đã vừa thì giữ nguyên; các thanh còn lại cuộn ngang.
- **Lưới thuộc tính.** Các trường của móng dùng lưới chung: nhóm có thể thu gọn và mật độ gọn. Phép tính nhập như 2*450 vẫn dùng được.
- **Thiết bị nhập.** Bàn di chuột, bút, chuột 3D, bộ điều khiển và MIDI đều có thể điều khiển các ứng dụng. Xem [Di chuyển trong 3D](topic:navigate-3d).
- **Bảng Vấn đề.** Cảnh báo của các kiểm tra mới ở trên xuất hiện trong cùng bảng {{ui:Vấn đề}} như trước.
- **Kết nối AI của bạn.** Trợ lý riêng của bạn, kết nối qua CadCraft Studio, hoạt động với cả tám ứng dụng và chỉ thấy những gì bạn cho phép. Kết nối một chạm, bộ kết nối được lưu trữ và khóa API riêng trong Studio vẫn đang được hoàn thiện. Xem [Dùng DetailCraft với trợ lý AI](topic:use-with-ai-assistants).

## Đã sửa trong 0.8.1

- **Ngôn ngữ trong Studio.** Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy; trước đây chỉ có tiếng Anh. Chưa được thử trên mọi nền tảng: hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- **Chọn bằng cửa sổ cắt.** Bộ cài 0.8.1 mang theo hành vi chọn bằng cửa sổ đã đúng trong bản web 0.8; một bộ cài cũ hơn thì chưa.
- **Máy tính bảng ở chiều dọc.** Phần chiều cao lưới còn dư được dành cho khung vẽ, và bố cục bản vẽ bắt đầu ở 760 px trở xuống.

## Chưa có trong phiên bản này

- **Gửi NC đến máy** chưa được phát hành.
- **Tải gió** cho bê tông chưa được xây dựng, và các kiểm tra bê tông và móng dành cho kỹ sư xem xét.
- **Ký mã.** Bộ cài Windows và tệp .dmg của macOS chưa được ký, nên Windows có thể cảnh báo và macOS yêu cầu nhấn chuột phải, rồi chọn Mở.

Các thay đổi trước đó nằm trong [Có gì mới trong 0.7](topic:whats-new-0-7).
