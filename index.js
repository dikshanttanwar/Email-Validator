let apiKey = "ema_live_ne5Vb6oNmkeXyJUWqnQ24eO00j219diPsYEoNalj";
let btn = document.querySelector("#btn");
let reset = document.querySelector("#reset");
// let table = document.querySelector("#tableData");

let container = document.querySelector(".dataContainer")


let email;

let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "dikshant.1149",
    "email": "dikshant.1149@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

btn.addEventListener("click",async (e)=>{
    console.log("working")
    email = document.querySelector("#useremail").value;
    console.log(email)
    if(email !== "" && email !== " "){
        container.innerHTML = `
            <h2 id="resulth2">Result Loading....
                <img id="svg" src="Spinner@1x-1.0s-200px-200px.svg" alt="">
            </h2>
        `
        // let url = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;
        // let res = await fetch(url)
        // let result = await res.json();
        container.innerHTML = ``;
        let table = document.createElement("table");
        container.appendChild(table);
        let tableData2 = document.createElement("tr");
        tableData2.innerHTML = `
            <th class="thead">Information</th>
            <th class="thead">Result</th>
        `;
        table.appendChild(tableData2);
        for(let [key,value] of Object.entries(result)){

            if(value !== "" && value !== " "){
                let tableData = document.createElement("tr");
                tableData.innerHTML = `
                <td>${key}</td>
                <td>${value}</td>
                `
                table.appendChild(tableData);
            }
        }
    }
    else{
        alert("Email field cannot be blank")
    }
})

reset.addEventListener("click",()=>{
    console.log("Hello");
    container.innerHTML = "";
    document.querySelector("#useremail").value = "";
})

