let editType = '';
let name = '';
document.addEventListener("DOMContentLoaded", function(event){
    var rowText;
    var list = document.getElementById("list");

    for(var row of bands){
        var rowText = document.createElement("ion-item");

        rowText.innerHTML = 
        `<ion-label>${row.name}</ion-label>
        <ion-button color="primary" size="medium" rowid="${row.name}" class="edit">
            <ion-icon name="create"></ion-icon>
        </ion-button>
        <ion-button color="danger" size="medium" rowid="${row.name}" class="delete">
            <ion-icon name="trash"></ion-icon>
        </ion-button>`;
    list.appendChild(rowText);
    }

    document.querySelector('#main').style.display = "";
    document.querySelector('#edit').style.display = "none";

    document.querySelectorAll(".edit")
    .forEach(input => input.addEventListener('click', ({target}) => {
        editType = "edit";
        name = target.getAttribute("rowid");
        let band = bands.find((b) => b.name == name);
        document.getElementById("name").value = band.name;
        document.getElementById("country").value = band.country;
        document.querySelector('#main').style.display = "none";
        document.querySelector('#edit').style.display = "";
        console.log("edit");
    }));

    document.querySelectorAll(".delete")
    .forEach(input => input.addEventListener('click', ({target}) => {
        name = target.getAttribute("rowid");
        console.log(name);
        localStorage.setItem("bands_data", JSON.stringify(bands.filter((g) => g.name != name)));
        location.reload();
    }));

    document.querySelector("#save").addEventListener('click', () =>{
        if(editType == "add"){
            bands.push({
                name : document.getElementById('name').value,
                country : document.getElementById('country').value
            });
        }
        else{
            let band = bands.find((b) => b.name == name);
            band.name = document.getElementById('name').value;
            band.country = country = document.getElementById('country').value;
        }
        localStorage.setItem("bands_data", JSON.stringify(bands));
        location.reload();
    });

    document.querySelector("#add").addEventListener("click", () =>{
        document.querySelector('#main').style.display = "none";
        document.querySelector('#edit').style.display = "";
        document.getElementById('name').value = "";
        document.getElementById('country').value = "";
        editType = "add";
    });

});