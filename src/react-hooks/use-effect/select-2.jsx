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

function SelectV2() {
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

  const layDanhSachQuanHuyen = (idThanhPho) => {
    const thanhPho = arrDiaDiem.find((dd) => dd.id === idThanhPho);

    if (!thanhPho) return null;

    return thanhPho.arrQuanHuyen;
  };

  return (
    <div className="container">
      <div>
        <label>Thành Phố</label>
        <select
          value={idThanhPho}
          onChange={(event) => {
            const id = Number(event.target.value);

            // setState là hàm: bất đồng bộ => bất đồng bộ ???
            setIdThanhPho(id); // 1
            // thử nghĩ setState là hàm đồng bộ thì điều gì sẽ xảy ra.

            // -------------- Thay thế useEffect

            setIdQuanHuyen(qhDefault.id);

            if (id === tpDefault.id) return;

            const newArrQuanHuyen = layDanhSachQuanHuyen(id);

            if (!newArrQuanHuyen) return;

            setArrQuanHuyen(newArrQuanHuyen);
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

export default SelectV2;
