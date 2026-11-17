---
title: Có gì mới trong 0.7 (trước đó)
summary: Kiểm tra thiết kế các thép chữ I với tổ hợp tải theo ASCE 7 hoặc EN 1990 và kiểm tra cấu kiện theo AISC 360 hoặc EN 1993-1-1, xuất USD mô hình thép, công cụ trợ lý cho USD, dải lệnh Thép với nút lớn và nút nhỏ, bảng tự thu gọn và hộp thoại có thể di chuyển.
keywords: có gì mới 0.7, phiên bản trước, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, kiểm tra thiết kế, thiết kế thép, tỷ lệ sử dụng, utilisation, utilization, tổ hợp tải, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Phụ lục Quốc gia, hoạt tải mái, giới hạn độ võng, usd, usda, usdc, usdz, openusd, trợ lý, mcp, dải lệnh thép, dải lệnh, nút tách, đơn vị, gọn, bảng, hộp thoại, tiếng Bồ Đào Nha
from: 54a7a8f0
---

Đây là những thay đổi trong DetailCraft 0.7 so với 0.6. Phân tích khung của 0.6 nay có thêm bước thứ hai: kiểm tra các cấu kiện thép theo tiêu chuẩn thiết kế.

## Mới

### Mối ghép vát (0.7.1)

- **Hai thép chữ I gặp nhau theo một góc**, chẳng hạn gối khung cổng hoặc đỉnh mái: chọn cả hai, chọn {{ui:Mitre}} trong menu {{ui:More}} của nhóm {{ui:Connect}}, và cả hai đầu sẽ được cắt theo mặt phẳng chia đôi góc. Các bản đầu bắt bu lông với nhau và sườn bụng là các ô đánh dấu trong hộp thoại Mối ghép vát mới, nơi các ô đánh số khớp với bản vẽ mối nối của bạn được vẽ ngay khi bạn nhập. Mối ghép vát đi theo cấu kiện khi chúng di chuyển và được giữ nguyên trong bản vẽ, tệp NC (cắt xiên), IFC và bảng khối lượng. Xem [Mối ghép vát](topic:mitres).

### Kiểm tra thiết kế

- **Tổ hợp tải theo tiêu chuẩn.** Trong thẻ {{ui:Analysis}}, khối {{ui:Design checks}} mới có {{ui:Design code}}: ASCE 7 + AISC 360 (Mỹ, LRFD) hoặc EN 1990 + EN 1993-1-1 (Eurocode). Gán cho mỗi trường hợp tải loại của nó (tĩnh tải, hoạt tải, hoạt tải mái mới, tuyết, gió, động đất), nhấn {{ui:Make combinations}}, và DetailCraft sẽ ghi các tổ hợp theo độ bền và sử dụng mà tiêu chuẩn yêu cầu cho các trường hợp của bạn. Các tổ hợp bạn tự nhập vẫn được giữ. Xem [Tạo tổ hợp](topic:design-checks#make-the-combinations).
- **Giá trị Phụ lục Quốc gia.** Với Eurocode, các hệ số bắt đầu từ giá trị khuyến nghị; {{ui:National Annex values}} cho phép bạn nhập giá trị của quốc gia mình, và chúng được lưu trong mô hình. Xem [Tạo tổ hợp](topic:design-checks#make-the-combinations).
- **Kiểm tra cấu kiện.** {{ui:Check members}} kiểm tra mọi thép chữ I về kéo, nén có mất ổn định, uốn có mất ổn định xoắn ngang, cắt, uốn kết hợp lực dọc và độ võng so với {{ui:Deflection limit}} bạn đặt. Bảng hiển thị tỷ lệ sử dụng của từng cấu kiện, kiểm tra chi phối và tổ hợp của nó; các cấu kiện được tô màu trên mô hình (xanh dương, xanh lá, vàng đất, đỏ, xám cho chưa kiểm tra). Xem [Kiểm tra cấu kiện](topic:design-checks#check-the-members).
- **Trong báo cáo.** {{ui:Report (PDF)}} và {{ui:Report (CSV)}} thêm các phiên bản tiêu chuẩn, cài đặt, tỷ lệ sử dụng theo cấu kiện và mọi điều khoản đã dùng. Xem [Báo cáo](topic:design-checks#the-report).
- **Một công cụ hỗ trợ cho đến khi kỹ sư xem xét.** Công cụ chỉ dùng nội lực bậc nhất. Ống, thép góc, thép máng, hình hàn và các phần mảnh hoặc thuộc lớp 4 được ghi "chưa kiểm tra", kèm lý do; xoắn, liên kết và bê tông chưa được kiểm tra. Xem [Những gì chưa được kiểm tra](topic:design-checks#what-is-not-checked).

### USD

- **Xuất mô hình thép sang USD.** {{ui:USD}} trong nhóm {{ui:Output}} ghi mô hình dưới dạng {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} hoặc {{ui:Package (.usdz)}} cho các chương trình kết xuất và lắp ghép cảnh: mỗi cụm chứa các chi tiết của nó, mỗi chi tiết là tiết diện của nó chạy dọc theo chiều dài, có cắt khoét, và mỗi chi tiết mang ký hiệu, tiết diện, mác, chiều dài và khối lượng. Lỗ bu lông, bu lông, mối hàn và móng không có trong lưới USD. Xem [Xuất mô hình thép sang USD](topic:usd).

### Trợ lý AI

- **USD cho trợ lý.** Trợ lý riêng của bạn, kết nối qua CadCraft Studio, có thể xuất mô hình sang USD (`usd_export`), và trong Studio ghi vào thư mục bạn đã cho phép. Xem [Trợ lý có thể yêu cầu gì](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Thay đổi

- **Dải lệnh Thép** có nút lớn và nút nhỏ: {{ui:Beam}} lớn cạnh {{ui:Column}}, {{ui:Brace}} và {{ui:Plate}} nhỏ trên {{ui:Modeling}} › {{ui:Members}}; {{ui:End plates}} lớn trên {{ui:Detailing}} › {{ui:Connections}}, với {{ui:Splice}} và {{ui:Gusset}} dùng chung một nút tách; {{ui:Paste}} lớn trên {{ui:Edit}} › {{ui:Clipboard}}, với {{ui:Paste in place}} và {{ui:Duplicate}} nằm sau mũi tên của nhóm. {{ui:Fabrication}} › {{ui:Exchange}} có {{ui:Export USD}} cạnh IFC. Các kiểu menu khác trông như cũ. Xem [Menu, phím và chuột](topic:menus-keys-and-mouse#the-three-styles).
- [Phân tích khung](topic:frame-analysis) nay trỏ đến phần kiểm tra thiết kế, và các tổ hợp của nó có thể được tạo theo tiêu chuẩn.

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} có một danh sách cho mỗi loại: chiều dài, diện tích, thể tích, góc và độ dốc, với kích thước chính xác theo định nghĩa của từng đơn vị (foot khảo sát Mỹ là một đơn vị riêng). Tắt các đơn vị bạn không dùng thì chúng sẽ rời khỏi danh sách; đánh dấu sao một đơn vị thì công việc mới bắt đầu bằng đơn vị đó. Một tệp luôn giữ đơn vị riêng của nó. Các ô nhập của DetailCraft chưa theo danh sách này: chiều dài vẫn nhập bằng milimét. Xem [Đơn vị, giá trị nhập và danh sách đơn vị](common:unit-lists).
- **Bố cục dày hơn và các bảng tự thu gọn.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} đưa được nhiều hơn lên màn hình (màn hình cảm ứng và điện thoại vẫn giữ nút lớn). Mỗi bảng bên có một thanh tiêu đề mỏng: kéo để neo hoặc làm nổi bảng, thả lên thanh của bảng khác để chung một khung dưới dạng thẻ, ghim để bảng trượt về mép, hoặc ẩn đi và đưa trở lại từ mép. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại di chuyển được.** Kéo hộp thoại bằng thanh tiêu đề ra khỏi vùng vẽ; hộp thoại sẽ quay lại đúng vị trí bạn để nó. Nhấp đúp vào thanh tiêu đề để đưa hộp thoại về giữa. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý riêng của bạn (dọn bản vẽ, in một bộ, kiểm tra bản vẽ, hỏi mô hình, tổng hợp bóc tách khối lượng, thử biến thể chi tiết…), mỗi yêu cầu kèm các công cụ nó gọi và quyền cần thiết, và mỗi yêu cầu đều được chạy lại bằng kiểm thử của chúng tôi. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** là mới trong {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ngôn ngữ này, **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** nay có đầy đủ mọi từ của ứng dụng, dưới dạng bản nháp chưa được người bản ngữ xem xét. Chủ đề trợ giúp vẫn bằng tiếng Anh.
- **CadCraft Studio** nói rõ vì sao kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký không hợp lệ) thay vì chỉ hiện "Xong", và không hiện lại thẻ Có gì mới bạn đã đóng cho đến khi có bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký mã và gói Microsoft Store đã chuyển sang 0.8 vì việc xác thực chứng chỉ chưa hoàn tất. Kiểm tra SHA-256 bên cạnh mỗi tệp tại getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, chọn {{ui:More info}}, rồi {{ui:Run anyway}}. Trên Mac, lần đầu, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Open}}. CadCraft Studio chưa có trên cửa hàng ứng dụng nào, và chưa có bản dành cho iPad hay iPhone.
- Các danh sách góc và độ dốc trong {{ui:Units}} đã được lưu, nhưng chưa có ô nhập nào đọc chúng.
- **Các kiểm tra thiết kế chưa được kỹ sư xem xét.** Kiểm thử của chúng tôi so sánh với các giá trị bảng in và công thức tính tay, chưa so với các ví dụ đã giải trong sổ tay thiết kế. Cho đến khi được xem xét, chúng chỉ là công cụ hỗ trợ: hãy kiểm tra tay các cấu kiện quan trọng.
- Các kiểm tra thiết kế dùng nội lực bậc nhất (không có hiệu ứng bậc hai) và chỉ kiểm tra thép chữ I. Chưa hỗ trợ: ống, thép góc, thép máng, hình hàn, cấu kiện mảnh (AISC) hoặc lớp 4 (Eurocode) chịu uốn, xoắn, mất ổn định do cắt kết hợp với uốn, liên kết, mỏi, cháy, chi tiết kháng chấn và bê tông. Cấu kiện mảnh chịu nén sẽ bỏ qua các kiểm tra nén, và cấu kiện được ghi "đạt, kiểm tra một phần".
- Phân tích khung vẫn là bậc nhất và tuyến tính, và chưa được kỹ sư thử trên một công trình thực tế.
- Lỗ bu lông, bu lông, mối hàn và móng không có trong xuất USD.

Mọi thứ khác có trong [Những gì chưa được xây dựng](topic:not-built-yet).
