class Card {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name;
        this.weather = _item.weather[0].description;
        this.icon = _item.weather[0].icon;
        this.temp = _item.main.temp;
        this.feels_like = _item.main.feels_like;
        this.humidity = _item.main.humidity;

    }

    render() {
        let parent = document.getElementById(this.parent);
        let myCard = document.createElement("div");
        myCard.className = "border shadow col-5 mb-5 p-5";
        myCard.innerHTML = `
        <div class="top d-flex justify-content-between mb-4">
        <div class="text">
            <h2>${this.name}</h2>
            
            <p class="text-info">${this.weather}</p>
        </div>
        <div class="icon">
        <img src="http://openweathermap.org/img/wn/${this.icon}.png" alt="Weather Icon">
        <weather number="501" value="moderate rain" icon="10d"/>
        </div>

    </div>
    <div class="bottom d-flex justify-content-between">
        <div class="temp1 text-center">
            <p>טמפ' נמדדת</p>
            <h2 style="direction: ltr">${this.temp}</h2>
        </div>
        <div class="temp2 text-center">
            <p>טמפ' מורגשת</p>
            <h2 style="direction: ltr">${this.feels_like}</h2>
        </div>
        <div class="temp1 text-center">
            <p>לחות</p>
            <h2>${this.humidity}%</h2>
        </div>
    </div>
        `

        parent.append(myCard);
    }
}