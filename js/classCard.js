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
        
        ${this.temp <= 20? `<i class="fa-regular fa-snowflake" style="color: #719dea; font-size: 40px;"></i>` : ""}
        ${this.temp < 30 && this.temp >20? `<i class="fa-solid fa-cloud" style="color: #78e1e8; font-size: 40px;"></i>` : ""}
        ${this.temp >= 30 ? `<i class="fa-solid fa-sun" style="color: #f5e10a;  font-size: 40px;"></i>` : ""}
           
         <img src="http://openweathermap.org/img/wn/${this.icon}.png" alt="Weather Icon" style="display:none">
        <weather number="501" value="moderate rain" icon="10d"/>
        </div>

    </div>
    <div class="bottom d-flex justify-content-between">
        <div class="temp1 text-center">
            <p>טמפ' נמדדת</p>
            <h2 style="direction: ltr">${this.temp}C°</h2>
        </div>
        <div class="temp2 text-center">
            <p>טמפ' מורגשת</p>
            <h2 style="direction: ltr">${this.feels_like}C°</h2>
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