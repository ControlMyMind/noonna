let currencyRatio={
    USD:{
        KRW:1295.73,
        USD:1,
        VND:23710,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00077,
        VND:18.30,
        unit:"원"
    },
    VND:{
        KRW:0.055,
        USD:.000042,
        VND:1,
        unit:"동"
    }
}
let fromCurrency = 'USD';
let toCurrency = 'USD';

document
.querySelectorAll("#from-currency-list a")
.forEach((menu) => menu.addEventListener("click", function(){
    //1. 버튼을 가져온다
    //2. 버튼에 값을 바꾼다(.textContent=this.textContent;)
    document.getElementById("from-btn").textContent=this.textContent;
    //3. 선택된 currency갑을 변수에 저장한다
    fromCurrency = this.textContent;
    convert();
}));

document
.querySelectorAll("#to-currency-list a")
.forEach((menu) => menu.addEventListener("click", function(){
    //1. 버튼을 가져온다
    //2. 버튼에 값을 바꾼다(.textContent=this.textContent;)
    document.getElementById("to-btn").textContent=this.textContent;
    //3. 선택된 currency갑을 변수에 저장한다
    fromCurrency = this.textContent;
}));

function convert() {
    //1. 환전
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    document.getElementById("to-input").value = convertedAmount;
}
