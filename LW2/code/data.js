var bands = localStorage.getItem("bands_data");
if(bands === null){
    bands = [
        {
            name: "Metallica",
            country: "USA"
        },

        {
            name: "Rammstein",
            country: "Germany",
        },

        {
            name: "Beatles",
            country: "Great Britain"
        }
    ];

    localStorage.setItem("bands_data", JSON.stringify(bands));
}
else{
    bands = JSON.parse(bands);
}