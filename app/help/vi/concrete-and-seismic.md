---
title: Kiểm tra cấu kiện bê tông và tạo tải động đất
summary: Thiết lập thép của dầm và cột bê tông, kiểm tra theo ACI 318-19, tạo lực ngang tương đương theo ASCE 7-22 trên sàn cứng, và xem chuyển vị tầng. Công cụ hỗ trợ kỹ sư kiểm tra.
keywords: bê tông, bê tông cốt thép, ACI 318, ACI 318-19, thép thanh, dầm, cột, lực cắt, đai, động đất, lực ngang tương đương, ELF, ASCE 7-22, chuyển vị, chuyển vị tầng, sàn, màng cứng, trọng lượng tầng, tỷ lệ sử dụng, utilisation, utilization, kết cấu, kỹ sư
from: 94d3001d
---

Các khối {{ui:Cấu kiện bê tông}} và {{ui:Tải động đất}} trong thẻ {{ui:Phân tích}} kiểm tra dầm và cột bê tông cốt thép, và tạo các lực ngang của động đất lên các sàn của khung. Cả hai đều theo lần chạy của thẻ {{ui:Phân tích}} và được lưu cùng mô hình.

:::warning
Kết quả **để kỹ sư kiểm tra**: một công cụ hỗ trợ cho đến khi có người xem xét. Các kiểm tra bê tông dùng lực bậc nhất, ngoại trừ một cột trong khung mà bạn gọi là không chuyển vị ngang được thiết kế theo mô men phóng đại của nó, không có phóng đại chuyển vị ngang, không thiết kế xoắn, không có chi tiết động đất (chương 18 ACI) và không có chi tiết hóa đai. Các tải động đất bỏ qua hệ số dư, tác động động đất thẳng đứng, khuếch đại xoắn và hiệu ứng P-delta. Tải gió chưa được xây dựng.
:::

## Vẽ cấu kiện

Vẽ cấu kiện bê tông dạng hình chữ nhật: một tiết diện {{ui:Bản}} như `PL400x400` cho cột và `PL300x600` cho dầm sẽ cho ra tiết diện. Cột và dầm được đặt như mọi cấu kiện khác.

## Thiết lập tiết diện

Khối {{ui:Cấu kiện bê tông}} liệt kê mọi tiết diện mà các cấu kiện dùng. Nhấn {{ui:Thiết lập là bê tông…}} trên những tiết diện là bê tông. DetailCraft đọc bề rộng **b** (theo trục y riêng của cấu kiện) và chiều cao **h** (theo z) từ tiết diện đã vẽ, rồi hỏi:

- **lớp bảo vệ** đến tâm thanh thép, và các thanh **trên**, **dưới** và **bên** (bao nhiêu và đường kính nào) cho dầm, hoặc một **khung thép cột** (thanh theo b và theo h, đường kính nào, đai xoắn) cho cột;
- **đai**: số nhánh, đường kính và khoảng cách;
- cấu kiện **đóng vai trò** gì: dầm, cột, hoặc quyết định từ nội lực của nó (cấu kiện thẳng đứng, hoặc cấu kiện chịu hơn 0.10 f′c Ag, là cột).

Đặt f′c, cường độ chảy của thép thanh fy và cường độ chảy của đai fyt (tối đa 420 MPa tính cho lực cắt), K và khung là không chuyển vị ngang hay có chuyển vị ngang phía trên chúng. Một tiết diện được thiết lập là bê tông sẽ được phân tích như bê tông: E = 4700 √f′c, 2400 kg/m³, và mặc định là **tiết diện nứt** (cột 0.70 Ig, dầm 0.35 Ig; ACI 318-19 Bảng 6.6.3.1.1(a)). Chọn {{ui:Tiết diện nguyên}} để tắt điều đó.

## Tạo tổ hợp và kiểm tra

Gán loại cho các trường hợp tải, rồi {{ui:Tạo tổ hợp}}: ACI 318-19 lấy các tổ hợp cường độ của ASCE 7 (§5.3.1). Nhấn {{ui:Kiểm tra bê tông}} và mỗi cấu kiện có một tỷ lệ sử dụng, được tô màu trên mô hình giống như các kiểm tra thép: uốn và thép tối thiểu (22.2, 9.6.1.2), biến dạng kiểm soát kéo (9.3.3.1), cắt với đai (22.5, 9.6.3), khoảng cách đai, và tải dọc trục cùng mô men cho cột (22.4, với phương pháp Bresler cho uốn hai chiều). Một cấu kiện mà tiết diện vẽ khác với b × h bạn đã gõ được hiển thị *kiểm tra một phần*, cũng như cột mảnh hoặc xoắn vượt ngưỡng: những thứ đó không được thiết kế.

Cấu kiện vượt khả năng được liệt kê trong {{ui:Vấn đề}}; chấp nhận một cấu kiện kèm lý do, hoặc sửa tiết diện.

## Sàn và tải động đất

Sàn là một cao độ nơi khung được liên kết bằng một bản cứng (một **màng cứng**). Trong khối {{ui:Tải động đất}} nhấn {{ui:Tìm các sàn}}: nó lấy các cao độ mà hai dầm trở lên gặp nhau. Sau đó cho mỗi sàn **trọng lượng động đất** của nó, gõ vào hoặc đọc về. {{ui:Lấy trọng lượng từ các trường hợp tải}} cộng các tải thẳng đứng của các trường hợp bạn cho một hệ số (trường hợp tĩnh là 1; cộng 0.25 cho trường hợp hoạt tải kho bãi hoặc tuyết trên mái phẳng như ASCE 7-22 12.7.2 yêu cầu). Tải thẳng đứng của mỗi nút đi về sàn tại hoặc phía trên nó, nên một cột giữa hai sàn cho một nửa trọng lượng của nó cho mỗi sàn.

Điền các giá trị thiết kế: SDS, SD1, S1, R, Ie, Cd, TL, hệ kết cấu (cho chu kỳ) và nhóm rủi ro. {{ui:Tạo các trường hợp động đất}} sau đó tính chu kỳ từ chiều cao công trình (12.8.2.1), lực cắt đáy V = Cs W (12.8.1), phân bổ nó lên các sàn (12.8.3) và ghi bốn trường hợp tải, theo X và Y với lệch tâm ngẫu nhiên 5 % theo mỗi hướng (12.8.4.2). Các lực tầng và kiểm tra chuyển vị tầng (12.8.6, Bảng 12.12-1, chuyển vị Cd δxe / Ie so với 0.020 hsx) xuất hiện sau một lần chạy; chuyển vị vượt giới hạn cũng là một vấn đề. Nhấn {{ui:Tạo tổ hợp}} lần nữa để đưa các trường hợp động đất vào các tổ hợp.

**Chu kỳ từ phân tích.** Chu kỳ gần đúng Ta lấy từ chiều cao công trình. Khi bạn đã chạy phân tích với các trường hợp động đất, {{ui:Lấy chu kỳ từ phân tích}} đọc mỗi sàn đã dịch chuyển bao nhiêu dưới các lực và tính chu kỳ theo phương pháp Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), một lần cho X và một lần cho Y; các trường hợp động đất được tạo lại với nó. Chu kỳ được dùng không bao giờ lớn hơn Cu·Ta (ASCE 7-22 12.8.2), nên một mô hình mềm không thể làm lực cắt đáy thấp hơn mức đó. Lấy chu kỳ lại sau lần chạy thứ hai: nó ổn định sau một hoặc hai bước. Bỏ chọn {{ui:Chu kỳ từ phân tích}} để quay về Ta.

**Cột mảnh (ACI 318-19 6.6.4.5).** Với khung bạn gọi là không chuyển vị ngang, một cột có k·ℓu/r lớn hơn 34 + 12·M1/M2 (tối đa 40) được thiết kế theo mô men phóng đại Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² với (EI)eff = 0.4 Ec Ig / (1 + βdns), và mô men tối thiểu Pu (15 + 0.03 h). βdns (0.6 để bắt đầu) là phần lực dọc trục đã nhân hệ số được duy trì lâu dài: hãy gõ giá trị của bạn. Một cột có Pu đạt 0.75 Pc sẽ không đạt kiểm tra riêng của nó. Báo cáo liệt kê các số của mỗi cột mảnh. Trong khung có chuyển vị ngang, một cột mảnh vẫn là "kiểm tra một phần": phóng đại của nó cần phân tích bậc hai, chưa được xây dựng.

**Sàn bản.** Khi mô hình có bản, một khối {{ui:Cốt thép sàn}} lấy mô men của bản ở mọi tổ hợp cường độ và, theo quy tắc Wood–Armer (uốn và xoắn cùng nhau), tính lượng thép mỗi lớp cần trên mỗi mét: đáy và đỉnh, theo x và theo y. Bạn cho chiều dày, lớp bảo vệ và thanh thép; bảng hiển thị cần so với đã cho và lực cắt một phương so với φVc, và một lớp thiếu là một vấn đề kèm điều khoản của nó. Độ võng, đục thủng tại cột và thanh gia cường lỗ mở không được bao phủ, và mô men trên gối hội tụ chậm với bản bốn nút.

Mọi sàn bạn liệt kê đều trở thành một màng cứng trong phân tích: các dầm của nó không chịu lực dọc trục do chuyển động của sàn. Xuất CraftScript không được thực hiện cho mô hình có sàn.

## Báo cáo

{{ui:Báo cáo (PDF)}} và {{ui:Báo cáo (CSV)}} có thêm các bảng bê tông (giả định, tỷ lệ sử dụng theo cấu kiện, mọi điều khoản), các tham số động đất và lực cắt đáy, các lực trên sàn và bảng chuyển vị tầng.
