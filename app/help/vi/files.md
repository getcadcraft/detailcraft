---
title: Mở, lưu và xuất tệp
summary: Tệp mô hình DetailCraft, mọi bản xuất nó ghi ra, tệp đi đâu, và điều gì khác nhau theo trình duyệt và kết nối.
keywords: mở, lưu, xuất, tải xuống, tệp, json, ifc, nc1, dstv, csv, pdf, zip, định dạng, nhập
from: bd715ea3
---

DetailCraft có một tệp riêng, là mô hình, và năm bản xuất. Mỗi lần lưu và mỗi lần xuất là một lần tải xuống. Không có gì được tải lên, và không có gì được giữ trên máy chủ.

## Tệp mô hình

Một mô hình DetailCraft được lưu thành `<name>.detailcraft.json`, trong đó `<name>` là tên mô hình trong bảng {{ui:Mô hình}}. Nó chứa lưới trục, các tầng, thanh (cùng lỗ và chỗ cắt góc), liên kết và cài đặt của chúng, móng và các tiết diện tùy chỉnh của bạn.

Chi tiết, ký hiệu, bulông, mối hàn và thép thanh không được lưu: DetailCraft tính lại chúng từ mô hình mỗi khi mở. Đó là lý do tệp mô hình nhỏ.

### Lưu

1. Nhập một tên vào ô {{ui:Tên}} ở đầu bảng {{ui:Mô hình}}.
2. Chọn {{ui:Lưu}} trong nhóm {{ui:Tệp}}, hoặc nhấn {{key:Mod+S}}.
3. Trình duyệt tải xuống `<name>.detailcraft.json`. Thanh trạng thái ghi "Saved … (downloaded)", và dấu chấm ở đầu tiêu đề thẻ trình duyệt biến mất.

Mỗi lần lưu là một lần tải xuống mới. Trình duyệt không ghi đè lên tệp bạn đã mở; tùy cài đặt, nó thêm một số vào tên, như `Frame (1).detailcraft.json`, hoặc hỏi nơi lưu. Hãy giữ các phiên bản của riêng bạn bằng cách đổi tên các tệp tải xuống.

:::chromium
Chrome và Edge lưu vào thư mục Downloads trừ khi **Ask where to save each file before downloading** đang bật trong cài đặt tải xuống của trình duyệt. Hãy bật nó nếu bạn muốn chọn thư mục và tên tệp mỗi lần.
:::

:::firefox
Firefox lưu vào thư mục Downloads, hoặc hỏi mỗi lần nếu **Always ask you where to save files** đang bật trong cài đặt của nó.
:::

:::safari
Safari lưu vào thư mục Downloads. Để đổi thư mục, mở **Safari, Settings, General, File download location**.
:::

### Mở

1. Chọn {{ui:Mở}} trong nhóm {{ui:Tệp}}, hoặc nhấn {{key:Mod+O}}.
2. Chọn một tệp `.detailcraft.json`.

Hoặc kéo tệp từ {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}} và thả lên khung nhìn. Khung nhìn ghi "Drop a DetailCraft model to open it" trong lúc bạn kéo.

Nếu mô hình đang mở có thay đổi chưa lưu, DetailCraft hỏi trước: {{ui:Hủy}}, {{ui:Bỏ thay đổi}} hoặc {{ui:Lưu trước}}.

DetailCraft kiểm tra từng trường của tệp trước khi dùng. Bất cứ thứ gì nó không dùng được sẽ bị bỏ ra và thanh trạng thái cho biết là gì, ví dụ "2 members were not valid and left out." Mô hình được lưu bởi DetailCraft mới hơn bị từ chối kèm thông báo thay vì mở sai một nửa.

### Những gì nó mở

Các tệp mô hình của chính nó (`.json`, đến 50 MB) và tệp IFC (`.ifc`, IFC2X3 hoặc IFC4, đến 200 MB). Một tệp IFC, được mở hoặc đưa vào bằng {{ui:Nhập IFC}}, trở thành mô hình mới gồm dầm, cột, thanh, bản, lưới trục và các tầng của nó, với lỗ và chỗ cắt góc được cắt trong chúng và bulông của nó là bulông rời; một báo cáo liệt kê những gì bị bỏ ra. Xem [Xuất IFC](topic:ifc-export#import). Nó chưa mở DWG, DXF hay mô hình của chương trình triển khai chi tiết khác; thử sẽ hiện "DetailCraft opens its own models (.detailcraft.json) and IFC files (.ifc)."

## Công việc bị mất, tệp gần đây, ứng dụng máy tính để bàn

- Khi mô hình có thay đổi bạn chưa lưu, DetailCraft giữ một bản sao trong trình duyệt này. Nếu thẻ hoặc trình duyệt dừng trước khi bạn lưu, lần sau bạn mở DetailCraft nó hỏi **Recover your work?**: khôi phục bản sao, hoặc bỏ nó đi. Xem [Khôi phục công việc của bạn](common:recover).
- Các mô hình bạn mở gần đây được liệt kê trên màn hình bắt đầu khi trình duyệt cho DetailCraft mở lại chúng; nhấp một mô hình để mở lại.
- Trong ứng dụng máy tính để bàn, {{ui:Lưu}} ghi mô hình trở lại tệp bạn đã mở (trong trình duyệt nó tải một bản sao xuống), và nhấp đúp một mô hình DetailCraft hoặc một tệp IFC sẽ mở nó trong DetailCraft.

## Xuất

Mọi bản xuất dùng tên mô hình. Chọn chúng trong nhóm {{ui:Đầu ra}}.

| Nút | Tệp | Bên trong có gì |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: tầng, lưới trục, mọi chi tiết thép dưới dạng đùn tiết diện cùng lỗ và chỗ cắt góc, cụm lắp ráp, bulông và thanh neo, móng và mọi thanh thép. Xem [Xuất IFC](topic:ifc-export). |
| {{ui:Tệp NC}} | `<name> NC.zip` | Một tệp DSTV `.nc1` cho mỗi ký hiệu chi tiết. Xem [Gửi tệp NC cho xưởng](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Ba bảng trong một tệp: chi tiết, cụm lắp ráp, và bulông cùng thanh neo. Xem [Ký hiệu và bảng kê vật tư](topic:marks-and-bom). |
| {{ui:Uốn thép}} | `<name> bending schedule.csv` | Mọi ký hiệu thép trong các móng. Xem [Móng và thép thanh](topic:footings-and-rebar). |
| {{ui:Bản vẽ thi công}} | `<name> <mark>.pdf` | Một tờ (A3 trừ khi bạn chọn cỡ khác) cho chi tiết đang chọn (thép hình chữ I và bản). Xem [Tạo bản vẽ thi công](topic:shop-drawings). |
| {{ui:Bản vẽ}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` hoặc `.dxf`, nhiều tệp trong `<name> drawings DWG.zip` (hoặc `DXF.zip`) | Các mặt bằng, mặt đứng và bản vẽ lắp ráp theo khổ tờ bạn chọn; DWG và DXF ở kích thước thật, 1 đơn vị = 1 mm trên giấy. Xem [Bản vẽ bố trí chung và bản vẽ lắp ráp](topic:drawings). |

### Ghi chú về các tệp CSV

- Chúng bắt đầu bằng dấu thứ tự byte (byte-order mark) để các chương trình bảng tính đọc đúng ký tự có dấu.
- Một ô bắt đầu bằng `=`, `+`, `-` hoặc `@` (và không phải số trơn) được thêm dấu nháy đơn ở đầu, để bảng tính không bao giờ chạy nó như công thức.
- Chiều dài tính bằng milimét và trọng lượng bằng kilôgam.

### Ghi chú về PDF

Văn bản trong PDF dùng phông Helvetica chuẩn. Các ký tự nó không có (ngoài bộ Tây Âu) được in thành "?", và thanh trạng thái cho bạn biết có bao nhiêu.

## Đơn vị

DetailCraft làm việc bằng milimét xuyên suốt: lưới trục, các tầng, tọa độ, tiết diện, lỗ và mọi bản xuất. Tên tiết diện giữ dạng đã công bố (W12x50 là ký hiệu của Mỹ dù kích thước của nó hiển thị bằng mm). Chưa có cách nhập theo hệ Anh.

## Trực tuyến và ngoại tuyến

Mở, lưu và xuất đều diễn ra trong trình duyệt của bạn, nên chúng hoạt động như nhau dù có hay không có kết nối sau khi DetailCraft đã tải.

Để dùng DetailCraft khi không có kết nối sau này, hãy chọn {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng khi bạn đang trực tuyến. Nút đếm lên ("Saving 3 of 20") rồi ghi {{ui:Sẵn sàng ngoại tuyến}}. Bản đã lưu gồm thư viện đồ họa 3D (khoảng 2,6 MB) và phần trợ giúp này, nên sau khi lưu, khung nhìn 3D, mọi bản xuất và phần trợ giúp đều hoạt động khi ngoại tuyến. Chi tiết, và những gì vẫn cần kết nối: [Làm việc ngoại tuyến](common:offline).

:::offline
Bạn đang ngoại tuyến. Nếu thanh ứng dụng hiện {{ui:Sẵn sàng ngoại tuyến}}, mở, lưu và xuất hoạt động như thường. Nếu không, hãy giữ thẻ này mở, đừng tải lại cho đến khi trực tuyến trở lại, và lưu mô hình của bạn ngay bây giờ.
:::

Chưa có tính năng lưu lên đám mây, và chưa có bản máy tính để bàn. Hãy sao lưu các tệp `.detailcraft.json` của bạn như bạn sao lưu mọi tệp làm việc khác. Thêm trong [Tệp của bạn đi đâu](common:your-files).

## Công việc chưa lưu

DetailCraft chỉ giữ mô hình trong thẻ đang mở. Nếu bạn đóng hoặc tải lại thẻ khi còn thay đổi chưa lưu, trình duyệt hỏi có rời trang không; lời lẽ đó là của trình duyệt. Hãy lưu bằng {{key:Mod+S}} thường xuyên.
