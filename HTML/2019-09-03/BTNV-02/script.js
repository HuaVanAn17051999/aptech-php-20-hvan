function taiDuLieu() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var result = data;
            console.log(result);
            var _count = 0;
            var img;
            /*Vòng for tạo ra container, do mỗi container có 3 item, nên cần chia làm tròn lên 
            ví dụ:
             10 chia 3 thì cần được 4 lần chứ không phải là 3, 
             vì 3 nhân 3 chỉ được 9 item, cần thêm 1 container để chưa 1 item cho tổng là 10
             10/3=3.3333 => làm tròn lên 3.3333 = 4
            */
            for (var i = 0; i < (result.length / 3); i++) {
                //Cần code jquery tạo ra từng container sau đó lặp container đó
                var divContainer = document.createElement('div');
                divContainer.setAttribute('class', 'container');
                var divRow = document.createElement('div');
                //begin created by habx tao 3 col 
                divRow.setAttribute('class', 'row');
                //Cần code jquery tạo ra từng dòng(col) sau đó lặp dòng() đó
                for (var j = 0; j < 3; j++) {
                    var divColumn = document.createElement('div');
                    divColumn.setAttribute('class', 'card col-4');
                    var divCard = document.createElement('div');
                    var cardBody = document.createElement('div');
                    cardBody.setAttribute('class', 'card-body');

                    // var img = document.createElement('img');
                    // img.setAttribute("src", (result[i * 3 + j]).image_url);
                    // img.setAttribute('class', 'card-img-top')
                    // divColumn.appendChild(img);

                    divColumn.appendChild(cardBody);
                    divColumn.appendChild(divCard);
                    divRow.appendChild(divColumn);
                    // _count++;
                    //Đến số lượng bản ghi đã được tạo ra xem đã lớn hơn số bản ghi json trả về chưa, nếu lớn hơn thì không tạo row col-4 nữa
                    // if (_count === (result.length - 1)) {
                    //     break;
                    // }
                }
                //Đến số lượng bản ghi đã được tạo ra xem đã lớn hơn số bản ghi json trả về chưa, nếu lớn hơn thì không tạo row col-4 nữa
                // if (_count === (result.length - 1)) {
                //     break;
                // }
                divContainer.appendChild(divRow);
                document.body.appendChild(divContainer);
                //End created by habx tao 3 col 
            }
        }
    }
    http.open('GET', 'https://namcoi.com/projects/news-website-laravel/public/api/posts');
    http.send();
};
document.getElementById('nutTai').addEventListener("click", taiDuLieu);