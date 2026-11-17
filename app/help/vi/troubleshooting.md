---
title: Khắc phục sự cố
summary: Thông báo của DetailCraft nghĩa là gì và cần làm gì, từ chế độ xem 3D bị thiếu đến các liên kết không dựng được.
keywords: sự cố, lỗi, không hoạt động, trợ giúp, sửa, thông báo, bị từ chối, webgl, trống, cảnh báo, không thể, vấn đề
from: f8c3b2b1
---

Hầu hết các trường hợp bị từ chối đều được giải thích trong thanh trạng thái ở cuối màn hình, hoặc trong thẻ {{ui:Problems}}. Đọc những nơi đó trước. Các thông báo dưới đây được trích nguyên văn như DetailCraft hiển thị.

## Không thấy chế độ xem 3D

**"Trình duyệt này không thể khởi động đồ họa 3D (WebGL). Mô hình, báo cáo và xuất vẫn hoạt động."**

Trình duyệt không khởi động được WebGL, công nghệ đồ họa 3D mà DetailCraft dùng để vẽ.

1. Cập nhật trình duyệt lên phiên bản mới nhất.
2. Bật tăng tốc phần cứng và khởi động lại trình duyệt (xem bên dưới).
3. Cập nhật trình điều khiển đồ họa, hoặc thử một trình duyệt khác. Máy tính từ xa và máy ảo thường không có WebGL.
4. Trong lúc đó bạn vẫn làm việc được: đặt thanh bằng biểu mẫu {{ui:Add by grid}}, đọc báo cáo và xuất. Chỉ thao tác nhấp vào khung nhìn mới cần WebGL.

:::chromium
Để bật tăng tốc phần cứng, mở **Cài đặt**, **Hệ thống** rồi bật **Sử dụng tăng tốc đồ họa khi có sẵn**, sau đó khởi động lại.
:::

:::firefox
Để bật tăng tốc phần cứng, mở **Cài đặt**, **Chung**, **Hiệu suất**, bỏ chọn **Sử dụng cài đặt hiệu suất được đề xuất**, rồi chọn **Sử dụng tăng tốc phần cứng khi có sẵn**. Khởi động lại Firefox.
:::

:::safari
Safari bật WebGL mặc định. Cập nhật macOS nếu khung nhìn vẫn không khởi động, và kiểm tra xem có tiện ích nào chặn nó không.
:::

Xem thêm trong [Trình duyệt và máy tính](common:browsers).

## Nhấp vào khung nhìn không có tác dụng

- **Không có giao điểm gần chỗ nhấp.** Các công cụ đặt chỉ bắt vào giao điểm lưới. Nhấp cách xa mọi chấm sẽ không có tác dụng. Đưa con trỏ lại gần cho đến khi chấm sáng lên.
- **Công cụ là {{ui:Select}} và bạn nhấp vào khoảng trống.** Thao tác này bỏ chọn.
- **Bạn đã kéo.** Nhấn và nhả cách nhau hơn vài pixel là một thao tác kéo: nó xoay hoặc di chuyển khung nhìn.
- **Chi tiết đã bị cắt đi.** Trong {{ui:Plan}} và {{ui:Elevation}}, thép nằm ngoài mặt cắt bị ẩn và không thể nhấp. Chuyển sang {{ui:3D}}.
- **Giao điểm ở sai cao độ.** Trong {{ui:3D}}, giao điểm ở nhiều tầng có thể chồng lên nhau trên màn hình; nhấp sẽ chọn giao điểm gần nhất. Dùng {{ui:Plan}} hoặc {{ui:Elevation}}.

## Thông báo khi đặt

| Thông báo | Cần làm gì |
|---|---|
| Không có tầng nào phía trên Level 2 để cột vươn tới. Thêm một tầng trước. | Thêm tầng trong {{ui:Levels}}, hoặc nhấp vào một tầng thấp hơn |
| Chọn một giao điểm khác cho đầu kia. | Bạn đã nhấp hai lần vào cùng một điểm |
| Hai đầu trùng cùng một điểm. | Trong {{ui:Add by grid}}, lựa chọn "Từ" và "Đến" trùng nhau |
| Thêm đường lưới bên trái để đặt thanh. | Mô hình không có đường lưới theo một hướng |
| Tiết diện không rõ "…" | Tiết diện không có trong thư viện hoặc các tiết diện tùy chỉnh của mô hình. Chọn một tiết diện trong danh sách |
| Nhập một số. | Một ô số bị bỏ trống hoặc có chữ |

## Liên kết không dựng được

### "Dầm này không kết thúc trên đường cột."

Bản đầu cần đầu dầm nằm đúng trên đường của một cột thẳng đứng, giữa đáy và đỉnh cột (trong 1 mm). Kiểm tra {{ui:Ends (x, y, z mm)}} của dầm và vị trí của cột.

### "Dầm này gặp bụng cột hoặc nghiêng góc"

Hoặc trong {{ui:Problems}}: "Dầm gắn vào bụng cột chưa được xây dựng: xoay cột 90° hoặc dùng liên kết khác."

Dầm gắn vào bụng cột. Chọn cột và đặt {{ui:Rotation (°)}} thành 90, rồi thử lại. Các mối nối xiên chưa được xây dựng.

### "End plates are built for level beams only (this beam slopes)."

Bản đầu chỉ được dựng cho dầm nằm ngang (dầm này dốc). Hai đầu dầm phải ở cùng một cao độ.

### "End plates need the beam upright (rotation 0)."

Bản đầu cần dầm đứng thẳng (xoay 0). Đặt {{ui:Rotation (°)}} của dầm về lại 0.

### "End plates need an I-shape beam." / "End plates need an I-shape column."

Bản đầu cần dầm tiết diện chữ I. Bản đầu cần cột tiết diện chữ I. Chỉ các tiết diện chữ I (W, IPE, HEA, HEB hoặc chữ I tùy chỉnh) mới nhận bản đầu.

### "The beam end is not on the column line any more."

Bạn đã di chuyển dầm hoặc cột sau khi thêm liên kết. Đưa lại vị trí cũ, hoặc xóa liên kết.

### "Connections cut this member to nothing."

Các liên kết ở cả hai đầu cắt thanh lùi xa hơn chiều dài của nó, ví dụ một dầm rất ngắn nằm giữa hai cột sâu. Kiểm tra đầu của thanh và chiều dày bản.

### "No other joints like this one … are without a connection."

{{ui:Similar}} chỉ sao chép sang các mối nối có cùng tiết diện dầm, cùng tiết diện cột và cùng loại liên kết (dầm vào cánh), mà chưa có liên kết.

### "Both ends already have connections." / "This column already has a base plate."

Chọn liên kết hiện có để đổi, hoặc xóa nó trước.

## Cảnh báo trong thẻ Vấn đề

Cảnh báo không ngăn liên kết hoặc móng được dựng; chúng yêu cầu bạn kiểm tra lại. Các cảnh báo về mép và khoảng cách dùng giá trị tối thiểu của bảng 3.3 trong EN 1993-1-8 (mép 1.2 × lỗ, bước 2.2 × lỗ, khoảng cách 2.4 × lỗ). Nếu dự án của bạn dùng quy tắc khác, cảnh báo có thể không áp dụng; DetailCraft không thiết kế liên kết.

"một lỗ nằm ngoài đầu của chi tiết" nghĩa là x của lỗ nhỏ hơn 0 hoặc lớn hơn chiều dài cắt. Lưu ý x được tính từ đầu cắt, sau khi các liên kết đã cắt chi tiết lùi lại.

## Thay đổi móng bị từ chối

| Thông báo | Cần làm gì |
|---|---|
| Lớp bê tông bảo vệ không còn chỗ cho thép trong móng này. | Làm móng lớn hơn hoặc lớp bảo vệ nhỏ hơn |
| Móng quá nông cho hai lớp thép bên trong lớp bảo vệ. | Làm móng sâu hơn hoặc giảm lớp bảo vệ |
| Thép chờ không vừa trong móng với lớp bảo vệ 75 mm. | Ít thép chờ hơn, khoảng cách gần hơn, hoặc móng lớn hơn |
| Khoảng cách thanh thép phải từ 50–1000 mm. | Nhập khoảng cách trong khoảng đó |
| Chiều dài phải từ 300–50000 mm. | Kích thước móng có giới hạn: chiều dài và chiều rộng từ 300 đến 50000, chiều sâu từ 150 đến 10000 |

## Thay đổi lưới và tầng bị từ chối

| Thông báo | Cần làm gì |
|---|---|
| Lưới đánh số: nhập một khoảng cách giữa mỗi cặp đường (4). | Đếm các khoảng: năm đường cần bốn khoảng |
| Lưới đánh chữ: khoảng cách phải là mm dương. | Không dùng số 0, số âm hoặc chữ |
| Lưới đánh số: nhãn lưới phải khác nhau. | Hai đường có cùng nhãn |
| Tối đa 60 đường lưới theo mỗi hướng. | Chia mô hình ra |
| Giữ ít nhất một tầng. | Bạn đã xóa mọi dòng tầng |
| Mỗi tầng cần có tên. / Hai tầng có tên "…". | Đặt tên khác nhau cho mỗi tầng |

## Mở tệp bị lỗi

| Thông báo | Nguyên nhân |
|---|---|
| DetailCraft mở các mô hình của chính nó (.detailcraft.json). Chưa xây dựng chức năng nhập IFC. | Tệp không phải là tệp `.json` |
| Đây không phải là mô hình DetailCraft (không phải JSON). | Tệp bị hỏng hoặc là một tệp JSON khác |
| Đây không phải là mô hình DetailCraft. | Tệp JSON từ một chương trình khác |
| Mô hình này được lưu bởi DetailCraft mới hơn (định dạng 2). | Mở nó bằng DetailCraft mới hơn đã lưu nó |
| Tệp này quá lớn để là mô hình DetailCraft. | Trên 50 MB |

Khi một tệp mở ra với cảnh báo như "2 thanh không hợp lệ và đã bị bỏ qua.", phần còn lại của mô hình vẫn ổn. Đừng lưu đè lên bản gốc cho đến khi bạn kiểm tra những gì đã bị bỏ qua.

## Xuất

| Thông báo | Nguyên nhân |
|---|---|
| Chưa có gì để xuất. | {{ui:IFC}} với mô hình trống |
| Không có chi tiết chữ I hoặc bản thép để ghi tệp NC. | Mô hình chỉ có thép chữ C, thép góc hoặc ống |
| Chưa ghi (hiện chỉ có tiết diện chữ I và bản thép): … | Các ký hiệu đó không phải là tiết diện chữ I hoặc bản thép; các phần còn lại đã được ghi |
| Không có móng nên không có thanh thép để lập bảng. | {{ui:Bending}} khi không có móng |
| … ký tự nằm ngoài phông chữ PDF được in thành "?". | Tên mô hình hoặc một cấp thép có ký tự mà phông chữ PDF không có |

{{ui:Shop drawing}} bị mờ: mô hình chưa có chi tiết nào.

## Tải xuống không xuất hiện

Mọi lần lưu và xuất đều là một lần tải xuống của trình duyệt. Kiểm tra danh sách tải xuống của trình duyệt. Nếu trình duyệt hỏi trước khi tải nhiều tệp, hoặc chặn tải xuống từ trang này, cho phép chúng. Trong Safari, kiểm tra nút tải xuống trên thanh công cụ.

## Phím không có tác dụng

- Con trỏ đang ở trong một ô văn bản hoặc ô số: các phím công cụ và {{key:Delete}} bị bỏ qua để bạn gõ được. Nhấn {{key:Tab}} hoặc nhấp vào khung nhìn.
- Một hộp thoại đang mở: đóng nó trước.
- Trình duyệt đang giữ bàn phím (ví dụ thanh địa chỉ): nhấp vào bên trong DetailCraft.
- {{key:Ctrl+Shift+F}} dùng Control ngay cả trên Mac.

## Sự cố khi ngoại tuyến

Nút {{ui:Save for offline}} trên thanh ứng dụng cho biết trạng thái của bản ngoại tuyến. Cách lưu hoạt động: [Làm việc ngoại tuyến](common:offline).

| Nút hiển thị | Nghĩa là | Cần làm gì |
|---|---|---|
| {{ui:Save for offline}} | Trình duyệt này chưa có bản ngoại tuyến | Chọn khi đang trực tuyến |
| Đang lưu 5 trên 20 | Việc lưu đang diễn ra | Chờ {{ui:Offline ready}}; giữ thẻ mở |
| {{ui:Offline ready}} | DetailCraft, khung nhìn 3D, mọi lần xuất và trợ giúp này đều hoạt động khi không có kết nối | Không cần làm gì. Nhấp vào đó để {{ui:Save again (get the newest version)}} hoặc {{ui:Remove the offline copy}} |
| {{ui:Could not save}} | Một số tệp chưa tải xuống | Kiểm tra kết nối và nhấp vào đó để thử lại |
| {{ui:Offline not available}} | Cửa sổ này không thể giữ bản ngoại tuyến: cửa sổ riêng tư và một số máy tính được quản lý sẽ chặn | Dùng cửa sổ thường, hoặc làm việc trực tuyến |

Nếu bạn ngoại tuyến và nút không hiển thị {{ui:Offline ready}}, đừng tải lại hay đóng thẻ: những gì đã tải vẫn tiếp tục hoạt động. Lưu mô hình bằng {{key:Mod+S}} và chờ đến khi bạn trực tuyến trở lại.

## Công việc chưa lưu

Nếu trình duyệt hỏi bạn có muốn rời trang không, nghĩa là DetailCraft có thay đổi chưa lưu. Chọn ở lại, rồi nhấn {{key:Mod+S}}. DetailCraft không thể khôi phục mô hình sau khi thẻ đã đóng.

## Vẫn chưa giải quyết được

Ghi lại việc bạn đã làm và thông báo chính xác, rồi báo cho chúng tôi qua [trang hỗ trợ](https://getcadcraft.com/support).
