import React, { useEffect, useState } from "react";

const arrDiaDiem = [
  {
    id: 1,
    name: "Sài Gòn",
    arrQuanHuyen: [
      {
        id: 1,
        name: "Quận 1",
      },
      {
        id: 2,
        name: "Quận 2",
      },
      {
        id: 3,
        name: "Quận 3",
      },
    ],
  },
  {
    id: 2,
    name: "Đà Nẵng",
    arrQuanHuyen: [
      {
        id: 1,
        name: "Quận Cẩm Lệ",
      },
      {
        id: 2,
        name: "Quận Thanh Khê",
      },
      {
        id: 3,
        name: "Quận Hải Châu",
      },
    ],
  },
];
const tpDefault = { id: -1, name: "Chọn Thành Phố" };
const qhDefault = { id: -1, name: "Chọn Quận / Huyện" };

function Select() {
  const [idThanhPho, setIdThanhPho] = useState(tpDefault.id);
  const [idQuanHuyen, setIdQuanHuyen] = useState(qhDefault.id);

  const [arrQuanHuyen, setArrQuanHuyen] = useState([]);

  const renderThanhPho = () => {
    const result = [tpDefault, ...arrDiaDiem].map((tp) => {
      return (
        <option key={tp.id} value={tp.id}>
          {tp.name}
        </option>
      );
    });

    return result;
  };

  const renderQuanHuyen = () => {
    // concat là method của array nối 2 mảng lại với nhau.
    return [qhDefault].concat(arrQuanHuyen).map((qh) => {
      return (
        <option key={qh.id} value={qh.id}>
          {qh.name}
        </option>
      );
    });
  };

  /**
   * Xử lý lấy danh sách quận huyện khi thành phố thay đổi.
   * Lắng nghe khi thành phố thay đổi thì sẽ xử lý.
   *
   * useEffect:
   * khi dependencies thay đổi thì sẽ gọi là callback.
   *
   * Sau khi set state thành phố xong thì mình sẽ lắng nghe sự thay đổi đó.
   * xử lý lấy danh sách quận huyện tương ứng với idThanhPho.
   */

  /**
   * callback useEffect sẽ tự động gọi lại khi mà idThanhPho thay đổi.
   *
   */

  const layDanhSachQuanHuyen = () => {
    const thanhPho = arrDiaDiem.find((dd) => dd.id === idThanhPho);

    if (!thanhPho) return null;

    return thanhPho.arrQuanHuyen;
  };

  useEffect(() => {
    // Khi thay đổi thành phố thì luôn xét lại giá trị default cho quận huyện
    setIdQuanHuyen(qhDefault.id);

    if (idThanhPho === tpDefault.id) return;

    // layDanhSachQuanHuyen                    |
    // arrDiaDiem[idThanhPho].arrQuanHuyen;    |  => ( X )

    const newArrQuanHuyen = layDanhSachQuanHuyen();

    if (!newArrQuanHuyen) return;

    setArrQuanHuyen(newArrQuanHuyen);
  }, [idThanhPho]);

  return (
    <div className="container">
      <div>
        <label>Thành Phố</label>
        <select
          value={idThanhPho}
          onChange={(event) => {
            const id = event.target.value;

            setIdThanhPho(Number(id));
          }}
          className="form-select"
        >
          {renderThanhPho()}
        </select>
      </div>

      <div>
        <label>Quận / Huyện</label>
        <select
          value={idQuanHuyen}
          onChange={(event) => {
            const id = event.target.value;

            setIdQuanHuyen(+id);
          }}
          className="form-select"
        >
          {renderQuanHuyen()}
        </select>
      </div>
    </div>
  );
}

export default Select;
