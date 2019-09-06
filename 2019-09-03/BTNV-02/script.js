function taiDuLieu() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var resut = data;
            console.log(resut);



            for (var i = 0; i < resut.length; i++) {
                var divContainer = document.createElement('div');
                var divRow = document.createElement('div');
                divContainer.appendChild(divRow);


                var divColumn1 = document.createElement('div');
                var divColumn2 = document.createElement('div');
                var divColumn3 = document.createElement('div');
                var divCard1 = document.createElement('div');
                var divCard2 = document.createElement('div');
                var divCard3 = document.createElement('div');

                divRow.appendChild(divColumn1);
                divRow.appendChild(divColumn2);
                divRow.appendChild(divColumn3);
                divColumn1.appendChild(divCard1);
                divColumn2.appendChild(divCard2);
                divColumn3.appendChild(divCard3);


                var img = document.createElement('img');

                document.body.appendChild(divContainer);

                divContainer.setAttribute('class', 'container');
                divRow.setAttribute('class', 'row');
                // div3.setAttribute('class', 'card');
                // h5.setAttribute('class', 'card-title');
                divColumn1.setAttribute('class', 'col-4');
                divColumn2.setAttribute('class', 'col-4');
                divColumn3.setAttribute('class', 'col-4');
                divCard1.setAttribute('class', 'card');
                divCard2.setAttribute('class', 'card');
                divCard3.setAttribute('class', 'card');




                // divcCardBody.setAttribute('class', 'card-body');
            }
        }
    }
    http.open('GET', 'https://namcoi.com/projects/news-website-laravel/public/api/posts');
    http.send();
};
document.getElementById('nutTai').addEventListener("click", taiDuLieu);