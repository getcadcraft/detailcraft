---
title: Mở, lưu và xuất tệp
summary: Tệp mô hình DetailCraft, mọi bản xuất mà nó tạo ra, nơi các tệp được lưu, và những gì khác nhau theo trình duyệt và kết nối.
keywords: mở, lưu, xuất, tải xuống, tệp, json, ifc, nc1, dstv, csv, pdf, zip, định dạng, nhập
from: 6fbc8e8f
---

DetailCraft có một tệp riêng là mô hình, và năm bản xuất. Mỗi lần lưu và mỗi lần xuất đều là một lần tải xuống. Không có gì được tải lên, và không có gì được giữ trên máy chủ.

## Tệp mô hình

Mô hình DetailCraft được lưu thành `<name>.detailcraft.json`, trong đó `<name>` là tên mô hình trong bảng {{ui:Mô hình}}. Tệp gồm các lưới, tầng, thanh (kèm lỗ và cắt góc), liên kết và thiết lập của chúng, móng, và các tiết diện tùy chỉnh của bạn.

Chi tiết, ký hiệu, bulông, mối hàn và thép thanh không được lưu: DetailCraft tính lại chúng từ mô hình mỗi lần mở. Đó là lý do tệp mô hình nhỏ.

### Lưu

1. Nhập tên vào ô {{ui:Tên}} ở đầu bảng {{ui:Mô hình}}.
2. Chọn {{ui:Lưu}} trong nhóm {{ui:Tệp}}, hoặc nhấn {{key:Mod+S}}.
3. Trình duyệt tải xuống `<name>.detailcraft.json`. Thanh trạng thái hiện "Đã lưu … (đã tải xuống)", và dấu chấm ở đầu tiêu đề thẻ trình duyệt biến mất.

Mỗi lần lưu là một lần tải xuống mới. Trình duyệt không ghi đè tệp bạn đã mở; tùy cài đặt, nó thêm số vào tên, chẳng hạn `Frame (1).detailcraft.json`, hoặc hỏi bạn lưu ở đâu. Hãy giữ các phiên bản của riêng bạn bằng cách đổi tên các tệp tải xuống.

:::chromium
Chrome và Edge lưu vào thư mục Tải xuống của bạn, trừ khi **Hỏi nơi lưu từng tệp trước khi tải xuống** được bật trong cài đặt tải xuống của trình duyệt. Bật tùy chọn này nếu bạn muốn chọn thư mục và tên tệp mỗi lần.
:::

:::firefox
Firefox lưu vào thư mục Tải xuống của bạn, hoặc hỏi mỗi lần nếu **Luôn hỏi bạn vị trí lưu tệp** được bật trong cài đặt.
:::

:::safari
Safari lưu vào thư mục Tải xuống của bạn. Để đổi thư mục, mở **Safari, Cài đặt, Chung, Vị trí tải tệp xuống**.
:::

### Mở

1. Chọn {{ui:Mở}} trong nhóm {{ui:Tệp}}, hoặc nhấn {{key:Mod+O}}.
2. Chọn một tệp `.detailcraft.json`.

Hoặc kéo tệp từ {{pick:mac=Finder|windows=Trình khám phá tệp|linux=trình quản lý tệp của bạn}} và thả vào khung nhìn. Khung nhìn hiện "Thả mô hình DetailCraft để mở" khi bạn đang kéo.

Nếu mô hình đang mở có thay đổi chưa lưu, DetailCraft hỏi trước: {{ui:Hủy}}, {{ui:Bỏ thay đổi}} hoặc {{ui:Lưu trước}}.

DetailCraft kiểm tra từng trường của tệp trước khi dùng. Phần nào không dùng được sẽ bị bỏ qua, và thanh trạng thái cho biết, ví dụ "2 thanh không hợp lệ và đã bị bỏ qua." Mô hình được lưu bởi DetailCraft mới hơn sẽ bị từ chối kèm thông báo, thay vì mở ra sai lệch một nửa.

### Những gì được mở

Tệp mô hình riêng (`.json`, tối đa 50 MB) và tệp IFC (`.ifc`, IFC2X3 hoặc IFC4, tối đa 200 MB). Một tệp IFC, khi được mở hoặc nhập bằng {{ui:Nhập IFC}}, sẽ trở thành một mô hình mới gồm các dầm, cột, thanh, bản, lưới và tầng, với các lỗ và cắt góc được khoét vào và bulông là bulông rời; một báo cáo liệt kê những gì bị bỏ qua. Xem [Xuất IFC](topic:ifc-export#import). Hiện DetailCraft chưa mở được DWG, DXF hay mô hình của phần mềm chi tiết khác; thử sẽ hiện "DetailCraft mở các mô hình riêng (.detailcraft.json) và tệp IFC (.ifc)."

## Công việc bị mất, tệp gần đây, ứng dụng máy tính

- Khi mô hình có thay đổi chưa lưu, DetailCraft giữ một bản sao trong trình duyệt này. Nếu thẻ hoặc trình duyệt dừng trước khi bạn lưu, lần mở DetailCraft tiếp theo sẽ hỏi **Khôi phục công việc của bạn?**: khôi phục bản sao, hoặc bỏ qua. Xem [Khôi phục công việc của bạn](common:recover).
- Các mô hình bạn mở gần đây được liệt kê ở màn hình bắt đầu, khi trình duyệt cho phép DetailCraft mở lại chúng; nhấn vào một mô hình để mở lại.
- Trong ứng dụng máy tính, {{ui:Lưu}} ghi mô hình trở lại tệp bạn đã mở (trong trình duyệt, nó tải xuống một bản sao), và nhấn đúp vào một mô hình DetailCraft hoặc tệp IFC sẽ mở nó trong DetailCraft.

## Xuất

Mọi bản xuất đều dùng tên mô hình. Chọn chúng trong nhóm {{ui:Đầu ra}}.

| Nút | Tệp | Nội dung |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: các tầng, lưới, mọi chi tiết thép dưới dạng khối đùn theo tiết diện có lỗ và cắt góc, cụm lắp ráp, bulông và bulông neo, móng và mọi thanh thép. Xem [Xuất IFC](topic:ifc-export). |
| {{ui:Tệp NC}} | `<name> NC.zip` | Một tệp DSTV `.nc1` cho mỗi ký hiệu chi tiết. Xem [Gửi tệp NC đến xưởng](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Ba bảng trong một tệp: chi tiết, cụm lắp ráp, và bulông với bulông neo. Xem [Ký hiệu và bảng kê vật tư](topic:marks-and-bom). |
| {{ui:Uốn thép}} | `<name> bending schedule.csv` | Mọi ký hiệu thanh trong các móng. Xem [Móng và thép thanh](topic:footings-and-rebar). |
| {{ui:Bản vẽ thi công}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` chứa một tờ cho mỗi ký hiệu chi tiết; {{ui:Tải xuống PDF}} tải tờ đang hiển thị (A3 trừ khi bạn chọn cỡ khác). Xem [Lập bản vẽ thi công](topic:shop-drawings). |
| {{ui:Bản vẽ}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` hoặc `.dxf`, nhiều tệp trong `<name> drawings DWG.zip` (hoặc `DXF.zip`) | Bản vẽ mặt bằng, mặt đứng và lắp ráp trên cỡ tờ bạn đã chọn; DWG và DXF ở kích thước thật, 1 đơn vị = 1 mm trên giấy. Xem [Bản vẽ bố trí chung và lắp ráp](topic:drawings). |

### Ghi chú về tệp CSV

- Chúng bắt đầu bằng dấu thứ tự byte để các chương trình bảng tính đọc đúng ký tự có dấu.
- Ô bắt đầu bằng `=`, `+`, `-` hoặc `@` (và không phải là số thuần) sẽ có dấu nháy đơn ở đầu, để bảng tính không bao giờ chạy nó như công thức.
- Chiều dài tính bằng mm và trọng lượng tính bằng kg.

### Ghi chú về PDF

Văn bản trong PDF dùng phông Helvetica chuẩn. Ký tự nào phông không có (ngoài bộ chữ Tây Âu) sẽ in thành "?", và thanh trạng thái cho biết có bao nhiêu ký tự như vậy.

## Đơn vị

DetailCraft làm việc bằng mm xuyên suốt: lưới, tầng, tọa độ, tiết diện, lỗ và mọi bản xuất. Tên tiết diện giữ nguyên dạng đã công bố (W12x50 là ký hiệu của Mỹ, dù kích thước được hiển thị bằng mm). Hiện chưa có nhập liệu theo hệ inch (in).

## Trực tuyến và ngoại tuyến

Mở, lưu và xuất đều diễn ra trong trình duyệt của bạn, nên chúng hoạt động giống nhau dù có hay không có kết nối, miễn là DetailCraft đã tải xong.

Để dùng DetailCraft sau này khi không có kết nối, chọn {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng khi bạn đang trực tuyến. Nút sẽ đếm lên ("Đang lưu 3 trên 20") rồi hiện {{ui:Sẵn sàng ngoại tuyến}}. Bản đã lưu gồm thư viện đồ họa 3D (khoảng 2.6 MB) và trợ giúp này, nên sau khi đã lưu, khung nhìn 3D, mọi bản xuất và trợ giúp đều hoạt động khi ngoại tuyến. Chi tiết, và những gì vẫn cần kết nối: [Làm việc ngoại tuyến](common:offline).

:::offline
Bạn đang ngoại tuyến. Nếu thanh ứng dụng hiện {{ui:Sẵn sàng ngoại tuyến}}, việc mở, lưu và xuất vẫn hoạt động như bình thường. Nếu không, hãy giữ thẻ này mở, đừng tải lại cho đến khi có kết nối trở lại, và lưu mô hình ngay bây giờ.
:::

Lưu trên đám mây chưa có sẵn, và chưa có bản dựng cho máy tính. Hãy sao lưu các tệp `.detailcraft.json` như bạn sao lưu mọi tệp công việc khác. Xem thêm tại [Nơi lưu tệp của bạn](common:your-files).

## Công việc chưa lưu

DetailCraft chỉ giữ mô hình trong thẻ đang mở. Nếu bạn đóng hoặc tải lại thẻ khi còn thay đổi chưa lưu, trình duyệt sẽ hỏi có rời trang không; lời hỏi là của chính trình duyệt. Hãy lưu thường xuyên bằng {{key:Mod+S}}.
