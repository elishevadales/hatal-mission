

const countriesAr = ["אילת", "ניו יורק", "אלסקה", "לונדון"]

async function init() {
    countriesAr.forEach(function (country) {
        doApi(country);
    })

}




const doApi = async (_name) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${_name}&units=metric&appid=8eb41fd3a1fded1f4701d691e170067c&lang=he`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        
        let card = new Card("id_parent", data);
        card.render();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};




init();