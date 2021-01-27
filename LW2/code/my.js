$("document").ready(function(){
    var rowText;
    var content = $("#bands");
    for(var row of bands){
        rowText = `<tr>
                    <td><h5>${row.name}</h5></td>
                    <td class="right-align">
                        <a class="btn-floating waves-effect waves-light blue" href="bands.html?name=${row.name}" style="margin-right: 10px;">
                            <i class="material-icons">edit</i>
                        </a>
                        <button type="button" class="rem-row btn-floating waves-effect waves-light red" rowid="${row.name}">
                            <i class="material-icons">delete</i>
                        </button>
                    </td>
                </tr>`;
        content.append(rowText);
    }

    $(".rem-row").click(function(){
        let name = $(this).attr('rowid');
        bands = bands.filter((b) => b.name !== name);
        localStorage.setItem("bands_data", JSON.stringify(bands));
        location.reload();
    });
});