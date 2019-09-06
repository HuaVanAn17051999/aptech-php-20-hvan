function taiDuLieu() {
    var nam = new XMLHttpRequest();
    nam.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            duLieuSauKhiParse = JSON.parse(data);
            console.log(duLieuSauKhiParse.users.length);

            $(document).ready(function() {
                var $table = $('<table>');
                // caption
                $table.append('<caption>MyTable</caption>')
                    // thead
                    .append('<thead>').children('thead')
                    .append('<tr />').children('tr').append('<th>Id</th><th>Name</th><th>Email</th><th>Password</th><th>Create_at</th><th>Update_at</th>');

                //tbody
                var $tbody = $table.append('<tbody />').children('tbody');
                for (var i = 0; i < duLieuSauKhiParse.users.length; i++) {
                    // add row
                    $tbody.append('<tr>').children('tr:last')
                        .append("<td>" + duLieuSauKhiParse.users[i].id + "</td>")
                        .append("<td>" + duLieuSauKhiParse.users[i].name + "</td>")
                        .append("<td>" + duLieuSauKhiParse.users[i].email + "</td>")
                        .append("<td>" + duLieuSauKhiParse.users[i].password + "</td>")
                        .append("<td>" + duLieuSauKhiParse.users[i].created_at + "</td>")
                        .append("<td>" + duLieuSauKhiParse.users[i].updated_at + "</td>");
                }
                // add table to dom
                $table.appendTo('#dynamicTable');

            });


        }
    };
    nam.open('GET', 'https://namcoi.com/projects/users-crud-laravel/public/api/users', true);
    nam.send();
};

// function Demo(result) {
//     var b = taiDuLieu.call(this, result);
//     var $table = $('<table>');
//     // caption
//     $table.append('<caption>MyTable</caption>')
//         // thead
//         .append('<thead>').children('thead')
//         .append('<tr />').children('tr').append('<th>Id</th><th>Name</th><th>Email</th><th>Password</th><th>Create_at</th><th>Update_at</th>');

//     //tbody
//     var $tbody = $table.append('<tbody />').children('tbody');

//     // add row
//     $tbody.append('<tr>').children('tr:last')
//         .append("<td>" + b.id + "</td>")
//         .append("<td>" + b.name + "</td>")
//         .append("<td>" + b.email + "</td>")
//         .append("<td>" + b.password + "</td>")
//         .append("<td>" + b.created_at + "</td>")
//         .append("<td>" + b.updated_at + "</td>");

//     // add table to dom
//     $table.appendTo('#dynamicTable');



// };   