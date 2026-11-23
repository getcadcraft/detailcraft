---
title: Có gì mới trong 0.9 (trước đó)
summary: Kích thước thép Anh theo Blue Book và thép góc không đều cạnh, bản vẽ thi công cho mọi chi tiết trong một bộ PDF, Hồ sơ của tôi cho tiết diện tùy chỉnh, P-Delta và tần số riêng, tải gió ASCE 7, địa điểm động đất và tổ hợp, và con trỏ trực tiếp cùng Theo dõi.
keywords: có gì mới 0.9, phiên bản trước, có gì mới, ghi chú phát hành, nhật ký thay đổi, 0.9, thép Anh, uk steel, blue book, ub, uc, pfc, shs, rhs, chs, thép góc không đều cạnh, bản vẽ thi công, bộ bản vẽ, ký hiệu chi tiết, pdf, hồ sơ của tôi, tiết diện tùy chỉnh, p-delta, bậc hai, tần số riêng, phần tử hữu hạn, khối lượng modal, tải gió, asce 7, động đất, địa điểm, usgs, tổ hợp tải, lrfd, asd, live, con trỏ, theo dõi, người tham gia, chú giải công cụ, có gì mới, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, lắp dựng, cần cẩu, biểu đồ tải, phim, tự động, liên kết, thép thanh, mật độ thép, móng, lún, khung sườn, gỗ, thép mỏng, danh sách cắt, khả năng thi công, nhà cung cấp, tồn kho, thời gian giao, cái gì hỏng trước, bê tông, động đất, sàn, ngôn ngữ, trợ lý
from: ab0c7f05
---

Đây là những thay đổi trong DetailCraft 0.9 so với 0.8.1. 0.9 bổ sung kích thước thép Anh, một bản vẽ thi công cho mọi chi tiết trong một lần, thẻ {{ui:Phân tích}} lớn hơn cho khung, và khung nhìn con trỏ của nhau khi bạn làm việc cùng nhau.

## Mới

### Thép Anh và bản vẽ thi công

- **Kích thước thép Anh.** Các danh sách tiết diện nay có 976 kích thước từ Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS và RHS, với tiết diện rỗng tạo nguội được tách riêng (tên của chúng bắt đầu bằng CF). Tên được viết theo họ trước, chẳng hạn UB305x165x40 hoặc SHS100x100x5.0, và gõ theo cách bản vẽ ghi cũng được: 305x165x40 UB, L100x100x10, SHS100x5. Xem [Danh mục tiết diện](topic:profile-catalog).
- **Thép góc không đều cạnh.** Thép góc UEA giữ cả hai cạnh khi nhập và xuất IFC, và qua các tệp NC; lệnh đối xứng sẽ đảo chi tiết từ đầu này sang đầu kia.
- **Mọi bản vẽ thi công cùng lúc.** Chọn {{ui:Bản vẽ thi công}} trong nhóm {{ui:Đầu ra}} khi chưa chọn gì. Cửa sổ liệt kê mọi ký hiệu chi tiết, xem trước bất kỳ ký hiệu nào, và {{ui:Tải xuống tất cả}} lưu một tệp PDF với một trang cho mỗi ký hiệu, mỗi trang có tiêu đề "Tờ 3 trong 42". {{ui:Tải xuống PDF}} lưu tờ bạn đang xem. Thép chữ C, thép góc và tiết diện rỗng nay cũng có tờ riêng. Xem [Lập bản vẽ thi công](topic:shop-drawings).
- **Hồ sơ của tôi.** Một tiết diện tùy chỉnh nay có thể được giữ cho mọi mô hình mới. Trong biểu mẫu Tiết diện tùy chỉnh, để {{ui:Giữ trong Hồ sơ của tôi}} được đánh dấu; danh sách {{ui:Hồ sơ của tôi}} bên dưới có {{ui:Giữ}}, {{ui:Dùng ở đây}} và {{ui:Gỡ bỏ}}. Danh sách được giữ trong trình duyệt này (tối đa 200), không phải trong tài khoản của bạn. Xem [Tấm và tiết diện](topic:plates-and-profiles).

### Phân tích

- **Bậc hai (P-Delta).** Đánh dấu {{ui:Bậc hai (P-Delta)}} cạnh Chạy trong thẻ {{ui:Phân tích}}, khi đó lực dọc trục tác dụng lên khung đã biến dạng. Tấm và sàn cứng vẫn ở bậc nhất, kèm cảnh báo. Xem [Nội lực, phản lực và độ võng](topic:frame-analysis).
- **Tần số riêng.** Khối {{ui:Phần tử hữu hạn: tần số riêng}} dưới kết quả tìm các dạng dao động thấp nhất của cùng mô hình, với chu kỳ và khối lượng modal hữu hiệu, và hiển thị một dạng trên mô hình. Xem [Nội lực, phản lực và độ võng](topic:frame-analysis).
- **Tải gió và địa điểm động đất.** Ba khối mới trong thẻ {{ui:Phân tích}}: {{ui:Tải gió (phương pháp hướng ASCE 7)}}, {{ui:Địa điểm và hệ thống động đất (ASCE 7)}} và {{ui:Tổ hợp tải ASCE 7}}. Xem [Gió, địa điểm động đất và tổ hợp ASCE 7](topic:wind-seismic-combinations).

### Làm việc cùng nhau

- **Con trỏ và tên.** Trong phiên Live, con trỏ của mỗi người được vẽ trong mô hình kèm tên và màu của họ, và đối tượng họ chọn có một khung.
- **Theo dõi một người.** Mở {{ui:Người tham gia}} trong phiên và chọn {{ui:Theo dõi}} bên tên người đó; khung nhìn của bạn di chuyển theo khung nhìn của họ. Máy chủ có thể chọn {{ui:Yêu cầu mọi người theo dõi}}. Xem [Theo dõi một người trong phiên Live](topic:follow-in-live).

### Trong mọi ứng dụng

- Chú giải công cụ là chú giải Bootstrap, thẻ mẹo khi khởi động có nút đóng, các dải thẻ cuộn ngang khi không vừa, và tên thẻ trình duyệt hiển thị tài liệu đang mở, theo sau là DetailCraft và CadCraft.

## Đã sửa

- Hồ sơ tùy chỉnh bị mất khi bạn bắt đầu một mô hình mới.
- Thép chữ C, thép góc và tiết diện rỗng bị thiếu trong bộ bản vẽ thi công.

## Giới hạn thực tế

- Các khối gió, động đất và phần tử hữu hạn là công cụ hỗ trợ kiểm tra. Kỹ sư của bạn xem xét kết quả; chúng không phải là kiểm tra theo tiêu chuẩn. Tra cứu USGS được thử trên một bản thay thế, không phải trên dịch vụ trực tiếp.
- Phần tử hữu hạn và P-Delta được đối chiếu với đáp số tính tay và đáp số giải tích, không phải với một tòa nhà thực. Phân tích mất ổn định chưa được xây dựng.
- Chưa có nhà chế tạo thép nào ở Anh thử kích thước thép Anh, và tệp NC cho thép góc không đều cạnh chưa chạy trên máy nào.
- Bộ bản vẽ thi công chỉ có PDF.
- Các ngôn ngữ ngoài tiếng Anh là bản nháp máy cho đến khi người bản ngữ đọc.
- Trình cài đặt Windows chưa được ký mã (Thêm thông tin, rồi Vẫn chạy); ảnh đĩa macOS chưa được công chứng (nhấp chuột phải, rồi chọn Mở).

Các thay đổi trước đó nằm trong ghi chú 0.8 và 0.8.1 ở phía dưới trang này.

## Trước đó: 0.8 và 0.8.1

Đây là những thay đổi trong DetailCraft 0.8 (1 tháng 11 năm 2026) và 0.8.1 (2 tháng 11 năm 2026), so với 0.7. 0.7 kiểm tra cấu kiện thép; 0.8 lập kế hoạch nâng, đề xuất liên kết, kiểm tra móng và thép thanh, và lập khung cho tường, sàn và mái bằng gỗ hoặc khung thép mỏng.

### Mới

**Lắp dựng**

- **Kế hoạch lắp dựng và phim.** Trong thẻ {{ui:Lắp dựng}}, mô tả một cần cẩu (vị trí đứng, móc cao nhất, dây treo không có trong biểu đồ) và nhập các hàng của biểu đồ tải. DetailCraft nâng mô hình từng cụm một, theo thứ tự giai đoạn và từng tầng, và kiểm tra mỗi lần nâng với biểu đồ tại bán kính của nó và với biên bạn đặt. {{ui:Lưu phim}} ghi một tệp HTML phát được ngoại tuyến trong mọi trình duyệt, kể cả trên điện thoại. Các lần nâng vượt biểu đồ, ra ngoài biểu đồ hoặc quá cao nằm trong {{ui:Vấn đề}}. Đây là kế hoạch từ các số liệu của bạn, không phải kế hoạch nâng. Xem [Kế hoạch lắp dựng và phim](topic:erection-movie).

**Liên kết**

- **Tự động liên kết.** Thẻ {{ui:Tự động}} xem mọi nút chưa có liên kết và đề xuất một liên kết từ hình dạng tiết diện: bản đế, bản cắt, bản đầu cho các dầm bạn đánh dấu là dầm mômen, mối nối chồng và bản nút. Cho một tải phân bố đều hoặc một lực cắt đầu, số bulông theo cường độ thiết kế của bulông. {{ui:Thêm tất cả}} thêm các đề xuất thành một bước hoàn tác. Đây là giá trị khởi đầu để xem lại, không phải thiết kế liên kết.
- **Kiểm tra khả năng thi công.** {{ui:Vấn đề}} cho một bulông mà cờ lê không với tới, bulông quá gần đầu tuýp, mối hàn góc vượt giới hạn kích thước và tiết diện rỗng giữ nước. Khả năng tiếp cận mối hàn là mới: một mối hàn góc bao quanh mà mỏ hàn không với tới được sẽ được liệt kê cùng chi tiết đang chắn và tỷ lệ mối hàn bị ảnh hưởng. Xem [Kiểm tra khả năng thi công](topic:constructability).

**Móng và thép thanh**

- **Kiểm tra móng.** Thẻ {{ui:Móng}} kiểm tra móng đơn, móng kết hợp và móng bè trên nền đất bạn mô tả: sức chịu tải, trượt và lật từ tải sử dụng; uốn, cắt, xuyên thủng, neo cốt thép và thép tối thiểu từ tải đã nhân hệ số (ACI 318-19). Cột gần mép hoặc góc được kiểm tra với tiết diện bị cắt bởi mép móng. Độ lún lấy từ môđun của nền đất, móng bè mềm được giải trên lò xo từ môđun nền, và nhóm cọc cùng tường chắn có các bảng riêng. Tải cột có thể nhập hoặc lấy từ {{ui:Phân tích}}. Xem [Kiểm tra móng](topic:foundation-checks).
- **Bản đồ mật độ thép.** Thẻ {{ui:Mật độ thép}} vẽ bản đồ nhiệt của mỗi móng khi nhìn từ trên: nơi các thanh để lại quá ít chỗ cho bê tông chảy xuống, so với quy tắc khoảng hở thông thủy và, nếu bạn nhập, cốt liệu lớn nhất và đầu đầm rung. Xem [Bản đồ mật độ thép](topic:rebar-congestion).

**Khung và cung cấp**

- **Khung gỗ và khung thép mỏng.** Thẻ {{ui:Khung sườn}} lập khung các tấm tường, sàn và mái với từng chi tiết, danh sách cắt, vật liệu cần mua và bản vẽ thi công theo tỷ lệ. {{ui:Đặt như các cấu kiện}} đưa các chi tiết vào mô hình, và {{ui:Tờ PDF}} lưu một tờ cho mỗi tấm. Kích thước, khoảng cách và dầm đỡ lỗ do bạn quyết định: DetailCraft không kiểm tra chúng có chịu được tải hay không. Xem [Tấm khung gỗ và khung thép mỏng](topic:framing-panels).
- **Tồn kho nhà cung cấp và thời gian giao.** Thẻ {{ui:Nguồn cung}} đọc danh sách tồn kho của nhà cung cấp (CSV) và hiển thị, cho mỗi tiết diện mà danh sách cắt cần mua, có đủ trong kho không và phải chờ bao lâu. Các mục thiếu và tiết diện giao trễ nằm trong {{ui:Vấn đề}}. Không có gì được đặt hàng. Xem [Tồn kho nhà cung cấp và thời gian giao](topic:supplier-stock).

**Phân tích và thiết kế**

- **Cái gì hỏng trước?** Trong thẻ {{ui:Phân tích}}, nút này tìm tổ hợp cường độ chi phối, cấu kiện yếu nhất, tải có thể tăng bao nhiêu trước khi cấu kiện đầu tiên đạt giới hạn, và bản đầu hoặc bản cắt yếu nhất khi cường độ cắt của bulông đã biết. Cần có các tổ hợp và tiêu chuẩn thiết kế trước. Ép mặt, cắt khối, mối hàn và bật bẩy chưa được kiểm tra. Trợ lý đã kết nối của bạn cũng có thể hỏi cùng nội dung.
- **Trực tiếp.** Đánh dấu {{ui:Live: giải lại sau mỗi lần chỉnh sửa}} và khung được giải lại sau mỗi lần chỉnh sửa.
- **Bê tông, và thêm.** Cột mảnh trong khung không chuyển vị được thiết kế cho mômen phóng đại (ACI 318-19 6.6.4.5). Chu kỳ động đất có thể lấy từ phân tích theo phương pháp Rayleigh. Sàn làm bằng tấm nhận thép mỗi lớp cần từ mômen của nó, và lực cắt một phương. Xem [Kiểm tra cấu kiện bê tông và tạo tải động đất](topic:concrete-and-seismic).
- **Cho kỹ sư kiểm tra.** Kết quả móng, bê tông và Cái gì hỏng trước? là công cụ hỗ trợ. Tải gió chưa được xây dựng.

**Trong mọi ứng dụng**

- **Ngôn ngữ.** Trợ giúp có 54 ngôn ngữ. Những ngôn ngữ ngoài tiếng Anh là bản nháp máy cho đến khi người bản ngữ đọc; mười ngôn ngữ mới (tiếng Litva, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek).
- **Thanh công cụ.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số hàng thanh công cụ}} chọn xuống dòng, 2 hàng hoặc 1 hàng. Thanh đã vừa thì giữ nguyên; phần còn lại cuộn ngang.
- **Lưới thuộc tính.** Các ô của móng dùng lưới chung: nhóm có thể thu gọn và mật độ gọn. Phép tính gõ vào như 2*450 vẫn hoạt động.
- **Thiết bị nhập.** Bàn di chuột, bút, chuột 3D, tay cầm và MIDI có thể điều khiển các ứng dụng. Xem [Điều hướng trong 3D](topic:navigate-3d).
- **Bảng Vấn đề.** Cảnh báo của các kiểm tra mới ở trên xuất hiện trong cùng bảng {{ui:Vấn đề}} như trước.
- **Kết nối AI của bạn.** Trợ lý riêng của bạn, kết nối qua CadCraft Studio, hoạt động với cả tám ứng dụng và chỉ thấy những gì bạn cho phép. Kết nối một bước, bộ kết nối được lưu trữ và khóa API riêng trong Studio vẫn chưa có. Xem [Dùng DetailCraft với trợ lý AI](topic:use-with-ai-assistants).

### Đã sửa trong 0.8.1

- **Ngôn ngữ trong Studio.** Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy; trước đó chỉ có tiếng Anh. Chưa được thử trên mọi nền tảng: hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- **Chọn bằng cửa sổ chọn cắt.** Trình cài đặt 0.8.1 mang hành vi chọn theo cửa sổ đã đúng trong bản web 0.8; một trình cài đặt cũ thì không.
- **Máy tính bảng dọc.** Chiều cao lưới còn thừa dành cho khung vẽ, và bố cục bản vẽ bắt đầu từ 760 px hoặc nhỏ hơn.

### Chưa có trong phiên bản này

- **Gửi NC đến máy** chưa được phát hành.
- **Tải gió** cho bê tông chưa được xây dựng, và các kiểm tra bê tông và móng dành cho kỹ sư xem xét.
- **Ký mã.** Các trình cài đặt Windows và tệp .dmg macOS chưa được ký, nên Windows có thể cảnh báo và macOS yêu cầu nhấp chuột phải, rồi chọn Mở.

Các thay đổi trước đó nằm trong [Có gì mới trong 0.7](topic:whats-new-0-7).
