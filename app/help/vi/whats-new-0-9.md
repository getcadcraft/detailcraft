---
title: Có gì mới trong 0.9
summary: Kích thước thép Anh và thép góc không đều, bản vẽ thi công cho mọi chi tiết trong một bộ PDF, Hồ sơ của tôi cho tiết diện tùy chỉnh, P-Delta và tần số riêng, tải gió ASCE 7, địa điểm động đất và tổ hợp tải, cùng con trỏ trực tiếp và Theo dõi.
keywords: có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, 0.9, thép Anh, uk steel, blue book, ub, uc, pfc, shs, rhs, chs, thép góc không đều, unequal angle, bản vẽ thi công, shop drawing, bộ tờ, sheet set, ký hiệu chi tiết, part mark, pdf, hồ sơ của tôi, my profiles, hồ sơ tùy chỉnh, custom profile, p-delta, bậc hai, second order, tần số riêng, natural frequency, phần tử hữu hạn, finite elements, khối lượng modal, modal mass, tải gió, wind load, asce 7, động đất, seismic, loại địa điểm, site class, usgs, tổ hợp tải, load combinations, lrfd, asd, live, con trỏ, cursors, theo dõi, follow, người tham gia, chú giải công cụ, tooltips, 0.8, 0.8.1, phiên bản, version, tính năng mới, lắp dựng, cần cẩu, crane, bảng tải, load chart, phim, movie, tự động, autopilot, liên kết, connections, thép thanh, rebar, mật độ thép, congestion, móng, foundation, móng đơn, footing, móng bè, mat, lún, settlement, khung sườn, framing, gỗ, timber, khung thép mỏng, light-gauge, danh sách cắt, cut list, khả năng thi công, constructability, tiếp cận mối hàn, weld access, nhà cung cấp, supplier, tồn kho, stock, thời gian giao hàng, lead time, cái gì hỏng trước, what breaks first, bê tông, concrete, sàn, slab, ngôn ngữ, languages, trợ lý, assistant
from: 4c95a2de
---

Đây là những thay đổi trong DetailCraft 0.9 so với 0.8.1. 0.9 bổ sung kích thước thép Anh, một bản vẽ thi công cho mọi chi tiết trong một lần, thẻ {{ui:Phân tích}} lớn hơn cho khung, và xem được con trỏ của nhau khi làm việc cùng nhau.

## Mới

### Thép Anh và bản vẽ thi công

- **Kích thước thép Anh.** Danh sách hồ sơ nay có 976 kích thước từ Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS và RHS, trong đó các tiết diện rỗng tạo nguội được tách riêng (tên bắt đầu bằng CF). Tên được viết theo họ trước, như UB305x165x40 hoặc SHS100x100x5.0; gõ theo cách bản vẽ thường ghi cũng được: 305x165x40 UB, L100x100x10, SHS100x5. Xem [Danh mục hồ sơ](topic:profile-catalog).
- **Thép góc không đều.** Thép góc UEA giữ cả hai cạnh qua IFC khi nhập và xuất, và qua các tệp NC; lệnh đối xứng lật ngược chi tiết từ đầu này sang đầu kia.
- **Mọi bản vẽ thi công cùng lúc.** Chọn {{ui:Bản vẽ thi công}} trong nhóm {{ui:Đầu ra}} khi chưa chọn gì. Cửa sổ liệt kê mọi ký hiệu chi tiết, xem trước từng cái, và {{ui:Tải xuống tất cả}} lưu một tệp PDF với một trang cho mỗi ký hiệu, mỗi trang có tiêu đề "Tờ 3 trong 42". {{ui:Tải xuống PDF}} lưu tờ bạn đang xem. Thép máng, thép góc và tiết diện rỗng nay cũng có tờ riêng. Xem [Tạo bản vẽ thi công](topic:shop-drawings).
- **Hồ sơ của tôi.** Hồ sơ tùy chỉnh nay có thể được giữ cho mọi mô hình mới. Trong biểu mẫu Hồ sơ tùy chỉnh, để đánh dấu {{ui:Giữ trong Hồ sơ của tôi}}; danh sách {{ui:Hồ sơ của tôi}} bên dưới có {{ui:Giữ}}, {{ui:Dùng ở đây}} và {{ui:Gỡ bỏ}}. Danh sách được lưu trong trình duyệt này (tối đa 200), không lưu trong tài khoản của bạn. Xem [Bản thép và hồ sơ](topic:plates-and-profiles).

### Phân tích

- **P-Delta bậc hai.** Đánh dấu {{ui:Bậc hai (P-Delta)}} cạnh Chạy trong thẻ {{ui:Phân tích}}, và lực dọc trục sẽ tác dụng lên khung đã biến dạng. Bản thép và sàn cứng vẫn ở bậc nhất, kèm cảnh báo. Xem [Nội lực, phản lực và độ võng](topic:frame-analysis).
- **Tần số riêng.** Khối {{ui:Phần tử hữu hạn: tần số riêng}} dưới kết quả tìm các dạng dao động thấp nhất của cùng mô hình, với chu kỳ và khối lượng modal hiệu dụng, và hiển thị một dạng trên mô hình. Xem [Nội lực, phản lực và độ võng](topic:frame-analysis).
- **Tải gió và địa điểm động đất.** Ba khối mới trong thẻ {{ui:Phân tích}}: {{ui:Tải gió (phương pháp hướng ASCE 7)}}, {{ui:Địa điểm và hệ thống động đất (ASCE 7)}} và {{ui:Tổ hợp tải ASCE 7}}. Xem [Tải gió, địa điểm động đất và tổ hợp ASCE 7](topic:wind-seismic-combinations).

### Làm việc cùng nhau

- **Con trỏ và tên.** Trong phiên Live, con trỏ của mỗi người được vẽ trong mô hình kèm tên và màu của họ, và đối tượng họ chọn có một hộp bao quanh.
- **Theo dõi một người.** Mở {{ui:Người tham gia}} trong phiên và chọn {{ui:Theo dõi}} bên cạnh một tên; khung nhìn của bạn di chuyển theo họ. Máy chủ có thể chọn {{ui:Yêu cầu mọi người theo dõi}}. Xem [Theo dõi một người trong phiên Live](topic:follow-in-live).

### Trong mọi ứng dụng

- Gợi ý công cụ là gợi ý Bootstrap, thẻ mẹo khi mở đầu có nút đóng, dải thẻ cuộn ngang khi không vừa, và tên thẻ trình duyệt ghi tài liệu đang mở, tiếp theo là DetailCraft và CadCraft.

## Đã sửa

- Hồ sơ tùy chỉnh bị mất khi bạn bắt đầu một mô hình mới.
- Thép máng, thép góc và tiết diện rỗng bị thiếu trong bộ bản vẽ thi công.

## Giới hạn thực tế

- Các khối gió, động đất và phần tử hữu hạn là công cụ kiểm tra hỗ trợ. Kỹ sư của bạn xem xét kết quả; đây không phải kiểm tra theo tiêu chuẩn. Tra cứu USGS được thử nghiệm trên một bản thay thế, không phải trên dịch vụ trực tuyến thật.
- Phần tử hữu hạn và P-Delta được kiểm tra với lời giải tay và lời giải giải tích, không phải trên một tòa nhà thực. Phân tích ổn định uốn dọc chưa được xây dựng.
- Chưa có nhà chế tạo thép Anh nào thử kích thước thép Anh, và các tệp NC cho thép góc không đều chưa chạy trên máy nào.
- Bộ bản vẽ thi công chỉ có PDF.
- Các ngôn ngữ ngoài tiếng Anh là bản nháp máy.
- Bộ cài Windows chưa được ký mã (Thông tin thêm, rồi Vẫn chạy); ảnh đĩa macOS chưa được công chứng (nhấn chuột phải, rồi Mở).

Các thay đổi trước đó nằm trong ghi chú 0.8 và 0.8.1 bên dưới trang này.

## Trước đó: 0.8 và 0.8.1

Đây là những thay đổi trong DetailCraft 0.8 (1 tháng 11 năm 2026) và 0.8.1 (2 tháng 11 năm 2026), so với 0.7. 0.7 kiểm tra cấu kiện thép; 0.8 lập kế hoạch cẩu, đề xuất liên kết, kiểm tra móng và thép thanh, đồng thời tạo khung cho tường, sàn và mái bằng gỗ và khung thép mỏng.

### Mới

**Lắp dựng**

- **Kế hoạch lắp dựng và phim.** Trong thẻ {{ui:Lắp dựng}}, mô tả cần cẩu (vị trí đặt, móc cao nhất, thiết bị móc treo không có trong bảng tải) và nhập các hàng của bảng tải cần cẩu. DetailCraft cẩu mô hình từng cụm một, theo thứ tự pha và từng lớp, và kiểm tra mỗi lần cẩu với bảng tải tại bán kính của nó và với biên an toàn bạn đặt. {{ui:Lưu phim}} ghi một tệp HTML duy nhất chạy được ngoại tuyến trong mọi trình duyệt, kể cả trên điện thoại. Các lần cẩu vượt bảng tải, vượt phạm vi của bảng hoặc quá cao được liệt kê trong {{ui:Vấn đề}}. Đây là kế hoạch dựa trên số liệu của bạn, không phải kế hoạch cẩu. Xem [Kế hoạch lắp dựng và phim](topic:erection-movie).

**Liên kết**

- **Tự động liên kết.** Thẻ {{ui:Tự động}} xem mọi mối nối chưa có liên kết và đề xuất một liên kết từ hình dạng: bản chân cột, bản cắt (shear tab), bản đầu cho các dầm bạn đánh dấu là dầm chịu mô men, mối nối chồng và bản nút. Cho tải phân bố đều hoặc một lực cắt đầu, số bulông được tính theo cường độ thiết kế của bulông. {{ui:Thêm tất cả}} thêm các đề xuất thành một bước hoàn tác. Đây là giá trị khởi đầu để xem xét, không phải thiết kế liên kết.
- **Kiểm tra khả năng thi công.** {{ui:Vấn đề}} cho bulông mà cờ lê không với tới, bulông quá gần đầu tuýp, mối hàn góc vượt giới hạn kích thước và tiết diện rỗng giữ nước. Khả năng tiếp cận mối hàn là mới: mối hàn góc bao quanh mà mỏ hàn không với tới được liệt kê cùng chi tiết cản đường và tỷ lệ mối hàn bị ảnh hưởng. Xem [Kiểm tra khả năng thi công](topic:constructability).

**Móng và thép thanh**

- **Kiểm tra móng.** Thẻ {{ui:Móng}} kiểm tra móng đơn, móng kết hợp và móng bè trên nền đất bạn mô tả: sức chịu tải, trượt và lật từ tải sử dụng; uốn, cắt, xuyên thủng, neo và thép tối thiểu từ tải đã nhân hệ số (ACI 318-19). Cột gần mép hoặc góc được kiểm tra với tiết diện bị cắt bởi mép móng. Độ lún lấy từ mô đun đất, móng bè mềm được giải trên lò xo từ mô đun nền, và nhóm cọc cùng tường chắn có các bảng riêng. Tải cột có thể nhập hoặc lấy từ {{ui:Phân tích}}. Xem [Kiểm tra móng](topic:foundation-checks).
- **Bản đồ mật độ thép.** Thẻ {{ui:Mật độ thép}} vẽ bản đồ nhiệt của từng móng nhìn từ trên: nơi các thanh thép để lại quá ít chỗ cho bê tông chảy xuống, so với quy tắc khoảng cách thông thủy và, nếu bạn nhập, cốt liệu lớn nhất và đầu đầm. Xem [Bản đồ mật độ thép](topic:rebar-congestion).

**Khung và cung ứng**

- **Khung gỗ và khung thép mỏng.** Thẻ {{ui:Khung sườn}} tạo khung cho các tấm tường, sàn và mái với mọi chi tiết, một danh sách cắt, vật tư cần mua và bản vẽ thi công theo tỷ lệ. {{ui:Đặt như các cấu kiện}} đưa các chi tiết vào mô hình, và {{ui:Tờ PDF}} lưu một tờ cho mỗi tấm. Kích thước, khoảng cách và dầm đỡ do bạn quyết định: DetailCraft không kiểm tra chúng có chịu được tải hay không. Xem [Tấm khung gỗ và khung thép mỏng](topic:framing-panels).
- **Tồn kho nhà cung cấp và thời gian giao hàng.** Thẻ {{ui:Nguồn cung}} đọc danh sách tồn kho của nhà cung cấp (CSV) và hiển thị, cho từng tiết diện mà danh sách cắt cần mua, có đủ hàng trong kho không và phải chờ bao lâu. Hàng thiếu và tiết diện giao trễ nằm trong {{ui:Vấn đề}}. Không có đơn hàng nào được đặt. Xem [Tồn kho nhà cung cấp và thời gian giao hàng](topic:supplier-stock).

**Phân tích và thiết kế**

- **Cái gì hỏng trước?** Trong thẻ {{ui:Phân tích}}, nút này tìm tổ hợp cường độ chi phối, cấu kiện yếu nhất, mức tải có thể tăng trước khi cấu kiện đầu tiên chạm giới hạn, và bản đầu hoặc bản cắt yếu nhất khi biết cường độ cắt của bulông. Cần có tổ hợp và tiêu chuẩn thiết kế trước. Ép cục bộ (bearing), cắt khối, mối hàn và bẩy (prying) không được kiểm tra. Trợ lý kết nối của bạn có thể hỏi cùng nội dung.
- **Trực tiếp.** Đánh dấu {{ui:Live: giải lại sau mỗi lần chỉnh sửa}} và khung được giải lại sau mỗi lần chỉnh sửa.
- **Bê tông, và nhiều hơn.** Cột mảnh trong khung không chuyển vị được thiết kế theo mô men đã khuếch đại (ACI 318-19 6.6.4.5). Chu kỳ động đất có thể lấy từ phân tích bằng phương pháp Rayleigh. Sàn làm từ bản nhận thép mà từng lớp cần từ mô men của nó, cùng lực cắt một phương. Xem [Kiểm tra cấu kiện bê tông và tạo tải động đất](topic:concrete-and-seismic).
- **Để kỹ sư kiểm tra.** Kết quả của móng, bê tông và Cái gì hỏng trước chỉ là công cụ hỗ trợ. Tải gió chưa được xây dựng.

**Trong mọi ứng dụng**

- **Ngôn ngữ.** Trợ giúp có 54 ngôn ngữ. Các ngôn ngữ ngoài tiếng Anh là bản nháp máy cho đến khi người bản ngữ đọc; mười ngôn ngữ mới là tiếng Litva, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili và Uzbek.
- **Thanh công cụ nhiều hàng.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số hàng thanh công cụ}} chọn xuống dòng, 2 hàng hoặc 1 hàng. Thanh đã vừa khung sẽ giữ nguyên; các thanh còn lại cuộn ngang.
- **Lưới thuộc tính.** Các trường của móng dùng lưới chung: nhóm có thể thu gọn và mật độ gọn. Phép tính gõ như 2*450 vẫn hoạt động.
- **Thiết bị nhập.** Bàn di chuột, bút, chuột 3D, bộ điều khiển và MIDI có thể điều khiển các ứng dụng. Xem [Di chuyển trong 3D](topic:navigate-3d).
- **Bảng vấn đề.** Cảnh báo của các kiểm tra mới ở trên xuất hiện trong bảng {{ui:Vấn đề}} như trước.
- **Kết nối AI của bạn.** Trợ lý AI của riêng bạn, kết nối qua CadCraft Studio, hoạt động với cả tám ứng dụng và chỉ thấy những gì bạn cho phép. Kết nối một chạm, bộ kết nối được lưu trữ và khóa API riêng trong Studio vẫn đang được phát triển. Xem [Dùng DetailCraft với trợ lý AI](topic:use-with-ai-assistants).

### Đã sửa trong 0.8.1

- **Ngôn ngữ trong Studio.** Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy; trước đây chỉ có tiếng Anh. Chưa thử nghiệm trên mọi nền tảng: hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- **Chọn bằng cửa sổ cắt.** Bộ cài 0.8.1 mang hành vi chọn bằng cửa sổ đã đúng trong bản web 0.8; bộ cài cũ hơn thì không.
- **Máy tính bảng dọc.** Phần chiều cao lưới thừa dành cho vùng vẽ, và bố cục tờ bắt đầu từ 760 px trở xuống.

### Chưa có trong phiên bản này

- **Gửi NC đến máy** chưa được phát hành.
- **Tải gió** cho bê tông chưa được xây dựng, và các kiểm tra bê tông và móng dành cho kỹ sư xem xét.
- **Ký mã.** Bộ cài Windows và tệp .dmg macOS chưa được ký, nên Windows có thể cảnh báo và macOS yêu cầu nhấn chuột phải, rồi Mở.

Các thay đổi trước đó nằm trong [Có gì mới trong 0.7](topic:whats-new-0-7).
