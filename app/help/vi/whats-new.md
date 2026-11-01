---
title: Có gì mới trong 0.7
summary: Kiểm tra thiết kế thép hình chữ I với tổ hợp tải theo ASCE 7 hoặc EN 1990 và kiểm tra cấu kiện theo AISC 360 hoặc EN 1993-1-1, xuất USD mô hình thép, một công cụ trợ lý cho USD, dải lệnh Thép với nút lớn và nhỏ, các bảng tự gọn lại và hộp thoại di chuyển được.
keywords: có gì mới, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, kiểm tra thiết kế, thiết kế thép, hệ số sử dụng, tổ hợp tải, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Phụ lục Quốc gia, hoạt tải mái, giới hạn độ võng, usd, usda, usdc, usdz, openusd, trợ lý, mcp, dải lệnh thép, dải lệnh, nút tách đôi, đơn vị, gọn, bảng, hộp thoại, tiếng bồ đào nha
from: 17d1e0bb
---

Đây là những thay đổi trong DetailCraft 0.7 so với 0.6. Phần phân tích khung của 0.6 giờ có bước thứ hai: kiểm tra các cấu kiện thép theo một tiêu chuẩn thiết kế.

## Mới

### Mối ghép vát (0.7.1)

- **Hai thép hình chữ I gặp nhau ở một góc**, như điểm gập của khung cổng hoặc đỉnh mái: chọn cả hai, chọn {{ui:Mối ghép vát}} trong menu {{ui:Thêm}} của nhóm {{ui:Liên kết}}, và cả hai đầu được cắt trên mặt phẳng chia đôi góc. Bản đầu bắt bulông với nhau và sườn tăng cường bản bụng là các ô đánh dấu trong hộp thoại Mitre mới, nơi các ô đánh số khớp với một hình vẽ mối ghép của bạn được tạo ra khi bạn gõ. Mối ghép vát đi theo các cấu kiện khi chúng di chuyển, và đi tiếp vào bản vẽ, tệp NC (cắt xiên), IFC và bảng kê vật tư. Xem [Mối ghép vát](topic:mitres).

### Kiểm tra thiết kế

- **Tổ hợp tải theo tiêu chuẩn.** Trong thẻ {{ui:Phân tích}}, khối {{ui:Kiểm tra thiết kế}} mới có {{ui:Tiêu chuẩn thiết kế}}: ASCE 7 + AISC 360 (Mỹ, LRFD) hoặc EN 1990 + EN 1993-1-1 (Eurocode). Cho mỗi trường hợp tải loại của nó (tĩnh tải, hoạt tải, hoạt tải mái mới, tuyết, gió, động đất), nhấn {{ui:Tạo tổ hợp}}, và DetailCraft viết các tổ hợp độ bền và sử dụng của tiêu chuẩn từ các trường hợp của bạn. Các tổ hợp bạn tự nhập vẫn được giữ. Xem [Tạo các tổ hợp](topic:design-checks#make-the-combinations).
- **Giá trị Phụ lục Quốc gia.** Với Eurocode, các hệ số bắt đầu ở giá trị khuyến nghị; {{ui:Giá trị Phụ lục Quốc gia}} cho phép bạn nhập giá trị của nước bạn, và chúng được lưu trong mô hình. Xem [Tạo các tổ hợp](topic:design-checks#make-the-combinations).
- **Kiểm tra cấu kiện.** {{ui:Kiểm tra cấu kiện}} kiểm tra mọi thép hình chữ I về kéo, nén có mất ổn định, uốn có mất ổn định xoắn-ngang, cắt, uốn kèm lực dọc trục và độ võng so với {{ui:Giới hạn độ võng}} bạn đặt. Bảng hiện hệ số sử dụng của từng cấu kiện, phép kiểm tra chi phối và tổ hợp của nó, và các cấu kiện được tô màu trên mô hình (xanh dương, xanh lá, vàng đất, đỏ, xám cho chưa kiểm tra). Xem [Kiểm tra các cấu kiện](topic:design-checks#check-the-members).
- **Trong báo cáo.** {{ui:Báo cáo (PDF)}} và {{ui:Báo cáo (CSV)}} thêm các ấn bản tiêu chuẩn, các cài đặt, hệ số sử dụng theo cấu kiện và mọi điều khoản đã dùng. Xem [Báo cáo](topic:design-checks#the-report).
- **Công cụ hỗ trợ cho đến khi kỹ sư xem xét.** Nó chỉ dùng nội lực bậc nhất. Ống, thép góc, thép máng, hình hàn và chi tiết mảnh hoặc cấp 4 ghi "not checked", kèm lý do; xoắn, liên kết và bê tông không được kiểm tra. Xem [Những gì không được kiểm tra](topic:design-checks#what-is-not-checked).

### USD

- **Xuất mô hình thép thành USD.** {{ui:USD}} trong nhóm {{ui:Đầu ra}} ghi mô hình thành {{ui:Văn bản (.usda)}}, {{ui:Nhị phân (.usdc)}} hoặc {{ui:Gói (.usdz)}} cho các chương trình kết xuất và ghép cảnh: mỗi cụm lắp ráp chứa các chi tiết của nó, mỗi chi tiết là tiết diện của nó chạy dọc chiều dài với chỗ cắt góc được cắt, và mỗi chi tiết mang ký hiệu chi tiết, tiết diện, mác thép, chiều dài và trọng lượng. Lỗ bulông, bulông, mối hàn và móng không có trong lưới USD. Xem [Xuất mô hình thép thành USD](topic:usd).

### Trợ lý AI

- **USD cho trợ lý.** Trợ lý của riêng bạn, kết nối qua CadCraft Studio, có thể xuất mô hình thành USD (`usd_export`), và trong Studio ghi nó vào một thư mục bạn đã cho phép. Xem [Trợ lý có thể yêu cầu gì](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Đã thay đổi

- **Dải lệnh Thép** có nút lớn và nhỏ: một {{ui:Dầm}} lớn bên cạnh {{ui:Cột}}, {{ui:Thanh giằng}} và {{ui:Bản}} nhỏ trong {{ui:Mô hình hóa}} › {{ui:Thanh}}; một {{ui:Bản đầu}} lớn trong {{ui:Chi tiết hóa}} › {{ui:Liên kết}}, với {{ui:Mối nối}} và {{ui:Bản tăng cường}} dùng chung một nút tách đôi; một {{ui:Dán}} lớn trong {{ui:Chỉnh sửa}} › {{ui:Bộ nhớ tạm}}, với {{ui:Dán tại chỗ}} và {{ui:Nhân bản}} nằm sau mũi tên của nhóm. {{ui:Chế tạo}} › {{ui:Trao đổi}} có {{ui:Xuất USD}} bên cạnh IFC. Các kiểu menu khác trông như trước. Xem [Menu, phím và chuột](topic:menus-keys-and-mouse#the-three-styles).
- [Phân tích khung](topic:frame-analysis) giờ trỏ đến phần kiểm tra thiết kế, và các tổ hợp của nó có thể được tạo theo tiêu chuẩn.

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} có một danh sách riêng cho chiều dài, diện tích, thể tích, góc và độ dốc, với các cỡ chính xác theo định nghĩa của đơn vị (feet khảo sát Mỹ là một đơn vị riêng). Tắt những đơn vị bạn không bao giờ dùng và chúng rời khỏi danh sách đơn vị; gắn sao một đơn vị và công việc mới bắt đầu bằng nó. Một tệp luôn giữ đơn vị riêng của nó. Các ô riêng của DetailCraft chưa theo các danh sách: chiều dài vẫn được nhập bằng milimét. Xem [Đơn vị, giá trị nhập và các danh sách đơn vị](common:unit-lists).
- **Bố cục dày hơn và các bảng tự gọn lại.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Mật độ bố cục}} › {{ui:Gọn}} chứa được nhiều hơn trên màn hình (màn hình cảm ứng và điện thoại giữ các nút lớn). Mỗi bảng bên có một thanh tiêu đề mảnh: kéo nó để neo hoặc cho bảng nổi, thả nó lên thanh của bảng khác để dùng chung một khung dưới dạng các thẻ, ghim nó để trượt ra mép, hoặc ẩn nó và gọi lại từ mép. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại di chuyển được.** Kéo một hộp thoại bằng thanh tiêu đề để tránh khỏi bản vẽ; nó trở lại nơi bạn để. Nhấp đúp thanh tiêu đề để căn giữa lại. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý của riêng bạn (dọn bản vẽ, in một bộ, kiểm tra bản vẽ, hỏi mô hình, cộng một bản bóc tách, thử một biến thể chi tiết…), mỗi yêu cầu kèm các công cụ nó gọi và quyền nó cần, và mỗi yêu cầu được các bài kiểm thử của chúng tôi chạy lại. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** là mới trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Ngôn ngữ}}. Nó, **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** giờ có đủ mọi chữ của các ứng dụng, dưới dạng bản nháp chưa được người bản ngữ xem xét. Các chủ đề trợ giúp bằng tiếng Anh.
- **CadCraft Studio** nói rõ vì sao kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký sai) thay vì chỉ "Done", và ngừng đưa lại thẻ Có gì mới mà bạn đã đóng cho đến khi có bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký, và gói Microsoft Store, đã chuyển sang 0.8 vì việc xác thực chứng chỉ chưa xong. Hãy kiểm tra SHA-256 bên cạnh mỗi tệp trên getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, chọn {{ui:Thông tin thêm}}, rồi {{ui:Vẫn chạy}}. Trên Mac, lần đầu, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. CadCraft Studio chưa có trên cửa hàng ứng dụng nào, và chưa có bản cho iPad hay iPhone.
- Các danh sách góc và độ dốc trong {{ui:Đơn vị}} được lưu, nhưng chưa có ô nào đọc chúng.
- **Các phép kiểm tra thiết kế chưa được kỹ sư xem xét.** Các bài kiểm thử của chúng tôi so sánh chúng với giá trị bảng in và công thức tính tay, chưa so với các ví dụ giải của một hướng dẫn thiết kế. Cho đến khi được xem xét, chúng là công cụ hỗ trợ: hãy kiểm tra tay những cấu kiện quan trọng.
- Các phép kiểm tra thiết kế dùng nội lực bậc nhất (không có hiệu ứng bậc hai) và chỉ kiểm tra thép hình chữ I. Chưa xây dựng: ống, thép góc, thép máng, hình hàn, chi tiết mảnh (AISC) hoặc cấp 4 (Eurocode) chịu uốn, xoắn, mất ổn định cắt cùng với uốn, liên kết, mỏi, cháy, cấu tạo kháng chấn và bê tông. Một chi tiết mảnh chịu nén bị bỏ khỏi các phép kiểm tra nén, và cấu kiện ghi "passes, partly checked".
- Phân tích khung vẫn là bậc nhất và tuyến tính, và chưa được kỹ sư thử trên một công việc thật.
- Lỗ bulông, bulông, mối hàn và móng không có trong bản xuất USD.

Mọi thứ còn lại nằm trong [Những gì chưa được xây dựng](topic:not-built-yet).
