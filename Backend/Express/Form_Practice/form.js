
const inputs = document.querySelectorAll("input");

const formsData = {
    name:'',
    email:'',
    phone:'',
    address:''
}
    const resultMessage = document.querySelector(".message")

inputs.forEach(input => {
    input.addEventListener("input", () => {
        formsData[input.name] =input.value
        // console.log(input.value)
    });
})

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const sendData = async function() {
        const response = await fetch("http://localhost:3000/form", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formsData)
        });
        const data = await response.json();
        resultMessage.textContent = data.message;
        console.log(data);
        }
    sendData();
    })

    