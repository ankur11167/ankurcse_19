function findLargest() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let n3 = document.getElementById("num3").value;
    let n4 = document.getElementById("num4").value;
    let n5 = document.getElementById("num5").value;

    if (n1 === "" || n2 === "" || n3 === "" || n4 === "" || n5 === "") {
        document.getElementById("result").innerText = "Please fill all fields!";
        return;
    }

    let largest = Math.max(n1, n2, n3, n4, n5);

    document.getElementById("result").innerText = 
        "Largest Number = " + largest;
}
