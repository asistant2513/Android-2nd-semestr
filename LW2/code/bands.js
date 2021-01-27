$("document").ready(function(){
    let searchParams = new URLSearchParams(window.location.search);
    let name = "";
    if(searchParams.has("name")){
        name = searchParams.get('name');
        let band = bands.find((b) => b.name == name);
        $("#name").val(band.name);
        $("#country").val(band.country);
        $("label").addClass("active");
    }

        $("#save").click(function(){
        if(name === ""){
            bands.push({
                name: $("#name").val(),
                country: $("#country").val()
            });
        }
        else{
            let band = bands.find((b) => b.name == name);
            band.name = $("#name").val();
            band.country = $("#country").val();
        }
        localStorage.setItem("bands_data", JSON.stringify(bands));
        $(location).attr("href", "index.html");
    });
});