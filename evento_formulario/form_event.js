function save() {
    event.preventDefault();
    let name= document.querySelector("input[name='name']").value;
    let programmingLang= document.querySelector("select[name='programming-lang']").value;
    alert("nome : " + name + "\nLinguagem de programação: " + programmingLang);
}