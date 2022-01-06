let year=parseInt(prompt('Nhập số năm'));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + " Đây là năm nhuận");
        } else {
            alert(year + " Đây là năm không nhuận");
        }
    } else {
        alert(year + " Đây là năm nhuận");
    }
} else {
    aler(year + " Đây là năm không nhuận");
}


