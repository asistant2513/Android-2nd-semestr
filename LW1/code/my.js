$("document").ready(function(){
    var rowText;
    var content = $("#bands");
    for(var row of bands){
        rowText = `<tr>
                    <td>${row.name}</td>
                    <td class="text-right">
                        <a class="btn btn-outline-secondary" href="bands.html?name=${row.name}">
                            <i class="fa fa-fw fa-edit"></i>
                        </a>
                        <button type="button" class="btn btn-outline-danger rem-row" rowid="${row.name}">
                            <i class="fa fa-fw fa-trash"></i>
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