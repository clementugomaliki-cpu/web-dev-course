const newProduct = {
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
};
const dataContainer = document.querySelector(".results");

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
    input.addEventListener("input", () => {
        newProduct[input.name]=input.value;
});
})
const addProduct = async function() {
    const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(newProduct)
    });
    const data = await response.json();
    dataContainer.innerHTML = data.message;
}
    
    const submitButton = document.querySelector(".submit-btn");
    submitButton.addEventListener("click", addProduct)
    