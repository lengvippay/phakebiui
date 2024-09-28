function replaceData() {
    const inputData = document.getElementById('dataInput').value.trim().split('\n');

    if (inputData.length < 9) {
        alert('Vui lòng nhập ít nhất 9 hàng dữ liệu.');
        return;
    }

    const bankMapping = {
        "MB": "QUÂN ĐỘI (MB)",
        "BIDV": "ĐẦU TƯ VÀ PHÁT TRIỂN (BIDV)",
        "VCB": "NGOẠI THƯƠNG VIỆT NAM (VCB)",
        "VTB": "CÔNG THƯƠNG VIỆT NAM (VIETINBANK)",
        "SACB": "SACOMBANK (STB)",
        "TPB": "TIÊN PHONG (TPB)",
        "VIB": "QUỐC TẾ (VIB)",
        "ACB": "Á CHÂU (ACB)",
        "TCB": "KỸ THƯƠNG (TCB)",
        "NAMABA": "NAM Á (NAMABANK)",
        "HDB": "NH PHÁT TRIỂN TP HCM (HDB)",
        "SHB": "SÀI GÒN HÀ NỘI (SHB)",
        "BVB": "BVBANK – NGÂN HÀNG TMCP BẢN VIỆT",
        "DAB": "ĐÔNG Á (DAB)",
        "KLB": "KIÊN LONG (KLB)",
        "VPB": "VIỆT NAM THỊNH VƯỢNG (VPB)",
        "SHBVN": "NGAN HANG TNHH MTV SHINHAN VIET NAM HOI SO CHINH",
        "MSB": "HÀNG HẢI (MSB)",
        "OCB": "PHƯƠNG ĐÔNG (OCB)",
        "NCB": "QUỐC DÂN (NCB)",
        "AGB": "NÔNG NGHIỆP VÀ PHÁT TRIỂN NÔNG THÔN (VBA)",
        "PVC": "ĐẠI CHÚNG VIỆT NAM (PVC)",
        "OJB": "ĐẠI DƯƠNG (OJB)",
        "LBP": "NGÂN HÀNG TMCP BƯU ĐIỆN LIÊN VIỆT",
        "ABB": "AN BÌNH (ABBANK)",
        "EIB": "XUẤT NHẬP KHẨU (EIB)",
        "SEA": "ĐÔNG NAM Á (SEAB)"
    };

    const accountNumber = inputData[5];
    const beneficiaryName = inputData[6];
    const bankCode = inputData[4].trim();
    const transferMethod = (bankCode === "MB") ? "Trong MB" : "Nhanh 247";
    const bankName = bankMapping[bankCode] || "Ngân hàng này chưa biết làm";

    if (bankName === "Ngân hàng này chưa biết làm") {
        alert(bankName);
        return;
    }

    document.getElementById('accountNumber').innerText = accountNumber;
    document.getElementById('beneficiaryName').innerText = beneficiaryName;
    document.getElementById('bankName').innerText = bankName;
    document.getElementById('paymentDetails').innerText = inputData[0];
    document.getElementById('transferMethod').innerText = transferMethod;
    document.getElementById('transactionAmount').innerText = inputData[11] + " VND";
}
