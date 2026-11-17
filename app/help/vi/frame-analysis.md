---
title: Phân tích khung
summary: Nội lực, phản lực và độ võng của dầm, cột và giằng như đã vẽ, dưới các trường hợp tải và tổ hợp bạn đặt. Công cụ phân tích, không phải kiểm tra theo tiêu chuẩn; các kiểm tra thiết kế là một bước riêng.
keywords: phân tích, phân tích kết cấu, phân tích khung, phương pháp độ cứng, tải trọng, trường hợp tải, tổ hợp, tĩnh tải, hoạt tải, trọng lượng bản thân, phản lực, mô men uốn, lực cắt, lực dọc trục, độ võng, hình dạng biến dạng, gối tựa, khớp, ngàm, nhả liên kết, báo cáo, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Thẻ {{ui:Phân tích}} ở cuối tìm nội lực trong mọi dầm, cột và giằng của mô hình, phản lực tại chân cột và mức độ uốn của các cấu kiện, theo các tải bạn nhập.

:::warning
Đây là **công cụ phân tích, không phải kiểm tra theo tiêu chuẩn**. Phân tích không áp dụng tiêu chuẩn thiết kế nào: nó không chọn kích thước cấu kiện, không kiểm tra khả năng chịu lực hay liên kết, và không chọn hệ số tải. Kỹ sư kiểm tra mô hình, tải và gối tựa, rồi quyết định các con số có ý nghĩa gì. Để kiểm tra cấu kiện theo ASCE 7 / AISC 360 hoặc EN 1990 / EN 1993-1-1, xem [Kiểm tra cấu kiện thép theo tiêu chuẩn thiết kế](topic:design-checks), một bước riêng cũng chỉ là công cụ hỗ trợ.
:::

## Chạy phân tích

1. Mở thẻ {{ui:Phân tích}}.
2. Chọn một hoặc nhiều cấu kiện trong khung nhìn, chọn {{ui:Trường hợp}}, {{ui:Tải}} và {{ui:Hướng}}, nhập giá trị rồi nhấn {{ui:Thêm tải}}. Tải rải dọc theo cấu kiện tính bằng kN/m, tải tập trung tính bằng kN. {{ui:Xuống (trọng lực)}} là lựa chọn thông dụng.
3. Nhấn {{ui:Chạy phân tích}}.

Bảng liệt kê lực dọc trục N lớn nhất, lực cắt Vz và Vy, mô men My và Mz, xoắn T và độ võng của mỗi cấu kiện, với mô men lớn nhất đứng đầu; nhấp vào tên cấu kiện để chọn nó. Bên dưới là phản lực tại mỗi gối. {{ui:Trên mô hình}} vẽ hình dạng biến dạng, hoặc vẽ một nội lực dưới dạng biểu đồ bên cạnh mỗi cấu kiện, với giá trị lớn nhất được ghi tại vị trí của nó. Kết quả hết hiệu lực ngay khi mô hình thay đổi: hãy chạy lại.

Mỗi tải, trường hợp và cài đặt là một bước hoàn tác ({{key:Mod+Z}}) và được lưu trong tệp mô hình.

## Trường hợp tải và tổ hợp

Phân tích bắt đầu với ba trường hợp: **Tĩnh tải** (trọng lượng bản thân của các cấu kiện, từ tiết diện đã vẽ và 7850 kg/m³), **Hoạt tải** (rỗng) và **Tĩnh tải + hoạt tải**. Bạn có thể thêm trường hợp riêng (gió, tuyết …) và tổ hợp: một tổ hợp cộng các trường hợp với hệ số bạn nhập. Phân tích là tuyến tính, nên mỗi trường hợp được giải một lần và các tổ hợp là tổng của chúng. Tự nhập hệ số, hoặc chọn một tiêu chuẩn thiết kế và để {{ui:Tạo tổ hợp}} viết các tổ hợp của tiêu chuẩn đó ([Kiểm tra cấu kiện thép theo tiêu chuẩn thiết kế](topic:design-checks)).

## Khung được cấu tạo từ gì

- Dầm, cột và giằng, mỗi cái nằm trên đường làm việc (đường bạn đã vẽ), với các đặc trưng tiết diện thực được tính từ hình dạng của nó. Tấm, cầu thang, móng và bulông không thuộc khung.
- Một cấu kiện được chia tại điểm mà đầu của cấu kiện khác chạm vào nó, nên dầm nối vào cột ở giữa chiều cao sẽ nối với cột tại đó.
- **Chân cột**: ngàm (đầu) hoặc khớp (được giữ tại chỗ và chống xoắn, nhưng tự do xoay). Bản chân cột luôn tạo thành gối tựa.
- **Đầu dầm**: bản đầu là cứng, bản cắt là khớp. {{ui:Đầu dầm chưa có liên kết}} đặt các đầu còn lại. **Giằng** là khớp ở cả hai đầu.
- Chọn một cấu kiện để đặt quy tắc riêng cho đầu của nó, hoặc cho chân cột của nó.
- Thép ở mọi nơi: E = 200 GPa, G = 77 GPa.

Nếu khung có thể dịch chuyển mà không uốn cấu kiện nào — một cơ cấu, chẳng hạn chân khớp không có giằng theo một phương — việc chạy sẽ dừng lại và cho biết ở đâu và theo hướng nào; hãy giữ nó bằng một gối tựa, một nút cứng hoặc một giằng.

## Dấu

N > 0 là kéo. My > 0 đặt phía −z cục bộ của cấu kiện chịu kéo: dầm võng dưới trọng lực có My > 0. Mz > 0 đặt phía −y cục bộ chịu kéo. Độ võng được đo từ đường thẳng nối hai đầu của cấu kiện. Trục z cục bộ của cấu kiện hướng lên (với cột: theo X); các trục cục bộ xoay cùng với góc xoay của cấu kiện.

## Báo cáo

{{ui:Báo cáo (PDF)}} và {{ui:Báo cáo (CSV)}} chứa mọi thứ: các giả thiết mà khung được dựng dựa trên, tiết diện, trường hợp và tổ hợp, rồi với mỗi trường hợp và tổ hợp là phản lực (kèm tổng tải và tổng phản lực, cân bằng nhau), nội lực và chuyển vị của cấu kiện, cùng một bao của mọi trường hợp. {{ui:Xuất dưới dạng CraftScript}} ghi cùng khung đó thành một kịch bản cho không gian Script của PartCraft, nơi hàm thư viện `frame3d` giải từng bước bằng mã dễ đọc.

## Phương pháp

Phương pháp độ cứng trực tiếp, tuyến tính và bậc nhất trừ khi bạn đánh dấu Bậc hai (P-Delta): các dầm-cột hai nút với độ cứng dọc trục, xoắn và hai độ cứng uốn (không có biến dạng cắt, không có vênh), nhả đầu cấu kiện bằng ngưng tụ tĩnh, và tải dọc theo cấu kiện qua các hàm hình dạng của chính cấu kiện. Kết quả được đối chiếu với các bài toán kinh điển trong sách giáo khoa (công xôn, dầm đơn giản, dầm ngàm và dầm liên tục, khung cổng, lưới chịu xoắn, giàn).

**Bậc hai (P-Delta).** Đánh dấu *Bậc hai (P-Delta)* bên cạnh Chạy: mỗi tổ hợp được giải lại với lực dọc trục của cấu kiện tác dụng lên khung đã biến dạng (mỗi cấu kiện được chia thành 4 đoạn, để độ uốn của cấu kiện giữa hai đầu cũng được tính), cho đến khi lực dọc trục ổn định. Dòng kết quả cho số lượt lặp và độ lệch ngang tăng bao nhiêu; các mô men, độ võng, kiểm tra thiết kế và báo cáo sau đó dùng các kết quả này. Trên tải tới hạn đàn hồi của khung, việc chạy dừng lại và thông báo như vậy. Phương pháp này là đàn hồi với góc xoay nhỏ, chỉ uốn, không có giảm độ cứng và không có tải danh định (không phải tự thân phương pháp phân tích trực tiếp AISC); sàn, tường và sàn cứng vẫn ở bậc nhất.

**Tần số riêng (phần tử hữu hạn).** Khối {{ui:Phần tử hữu hạn: tần số riêng}} dưới kết quả tìm các dạng dao động thấp nhất của cùng mô hình bằng bộ máy phần tử hữu hạn: dầm với nhả đầu, sàn và tường là vỏ bốn nút phẳng, sàn cứng, gối tựa. Chọn số dạng (3, 6, 10 hoặc 20) và phần tử sàn (vỏ bốn nút cho sàn dày hoặc mỏng, hoặc loại sàn mỏng), rồi nhấn {{ui:Tìm tần số}}. Bảng cho tần số của mỗi dạng tính bằng Hz, chu kỳ tính bằng giây và khối lượng modal hiệu dụng theo X, Y và Z như một phần của khối lượng có thể chuyển động; {{ui:Hiển thị trên mô hình}} vẽ bất kỳ dạng nào theo cách hình dạng biến dạng được vẽ. Khối lượng là khối lượng riêng vật liệu nhân với thể tích: tải không cộng thêm khối lượng, và vật liệu không có khối lượng riêng thì không có khối lượng. Báo cáo (PDF, CSV) chứa bảng này. Chỉ đàn hồi và chuyển động nhỏ, và không có tải động đất hay gió nào được tạo từ tiêu chuẩn tại đây. Đây không phải kiểm tra theo tiêu chuẩn; kỹ sư của bạn xem xét kết quả.

**Phổ phản ứng, lịch sử thời gian và đẩy dần.** Ba khối nữa nằm dưới các tần số, dùng cùng mô hình phần tử hữu hạn. Khối lượng cho tất cả là khối lượng riêng vật liệu cộng tải đứng hướng xuống của các trường hợp bạn đánh dấu, mỗi cái nhân với một hệ số bạn nhập (ví dụ Tĩnh tải với 1 và Hoạt tải với tỷ lệ bạn tính là khối lượng).

{{ui:Phổ phản ứng}} đọc từng dạng từ một phổ bạn cho (một bảng chu kỳ và gia tốc, hoặc dạng ASCE 7 từ SDS, SD1 và TL; nút {{ui:Dùng giá trị của khối Địa chấn}} sao chép các giá trị đó từ khối Địa chấn) và tổ hợp các dạng bằng CQC, SRSS, quy tắc mười phần trăm hoặc tổng tuyệt đối, rồi ghép các phương X, Y và Z (100 % + 30 % hoặc SRSS). Nó cho lực cắt đáy, độ trôi tầng, nội lực đầu cấu kiện và bảng dạng, với cảnh báo khi các dạng được dùng chỉ mang dưới 90 % khối lượng. Bạn có thể nhân kết quả với một hệ số hoặc theo lực cắt đáy bạn nhập; khối không tự tính lực cắt đáy đó. Kết quả không có dấu.

{{ui:Lịch sử thời gian}} chạy gia tốc nền bằng chồng chất dạng modal (chính xác đối với các đoạn thẳng nối các điểm của bản ghi) hoặc bằng tích phân trực tiếp (gia tốc trung bình Newmark với tắt dần Rayleigh). Đầu vào là một sóng sin hoặc xung giả lập (luôn ghi là tổng hợp), một bản ghi bạn dán vào, hoặc một tệp văn bản bạn mở (thời gian và gia tốc, mỗi dòng một gia tốc với bước cố định, hoặc tệp kiểu PEER với tiêu đề DT=; tính bằng g hoặc m/s²). Nó cho chuyển vị đỉnh và lực cắt đáy theo thời gian, độ trôi của mỗi tầng, và bao của nội lực đầu cấu kiện. Mô hình có bản ghi rất dài chỉ giữ bản ghi trong phiên làm việc.

{{ui:Đẩy dần}} đẩy đỉnh theo phương ngang trong các bước nhỏ (theo dạng như dạng dao động thứ nhất, hoặc đều), với khớp dẻo tại đầu các cấu kiện có tiết diện chữ I. Khớp chảy tại mô men dẻo, mô men này giảm khi lực dọc trục tăng (tính từ hình dạng đã vẽ, bỏ qua bo góc); tăng bền là tùy chọn, P-delta là tùy chọn, và có thể áp dụng trước một tổ hợp trọng lực. Nó cho đường cong khả năng (lực cắt đáy theo chuyển vị đỉnh), khớp đầu tiên, và trạng thái cùng góc xoay dẻo của mỗi khớp. {{ui:Chạy lịch sử thời gian phi tuyến}} chạy cùng các khớp dưới bản ghi của khối Lịch sử thời gian trên mô hình nhỏ. Khớp chỉ hình thành tại đầu cấu kiện (đặt một nút tại nơi cần khớp hình thành bên trong nhịp); một cấu kiện nhả ở cả hai đầu thì không có khớp; chảy và mất ổn định của giằng không được mô hình hóa; sàn và tường vẫn đàn hồi; không có tiêu chí chấp nhận nào được đưa ra. Đây không phải kiểm tra theo tiêu chuẩn; kỹ sư của bạn xem xét kết quả. Các cài đặt được lưu cùng mô hình, và báo cáo chứa các bảng.

Chưa xây dựng: phân tích mất ổn định, hiệu chỉnh khối lượng thiếu cho phổ phản ứng, co giãn bản ghi, tiêu chí chấp nhận cho khớp (phân tích động có ở trên), tải diện tích và tải gió được tạo tự động (lực động đất lên sàn có trong [Kiểm tra cấu kiện bê tông và tạo tải động đất](topic:concrete-and-seismic)), độ lệch cấu kiện, giằng chỉ chịu kéo. Xem [Chưa xây dựng](topic:not-built-yet).
