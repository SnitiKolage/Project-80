s_array = [];
function submit() {
    var name1 = document.getElementById("s_1").value;
    var name2 = document.getElementById("s_2").value;
    var name3 = document.getElementById("s_3").value;
    var name4 = document.getElementById("s_4").value;
    var name5 = document.getElementById("s_5").value;
    var name6 = document.getElementById("s_6").value;
    var name7 = document.getElementById("s_7").value;
    var name8 = document.getElementById("s_8").value;
    var name9 = document.getElementById("s_9").value;
    var name10 = document.getElementById("s_10").value;


    s_array.push(name1);
    s_array.push(name2);
    s_array.push(name3);
    s_array.push(name4);
    s_array.push(name5);
    s_array.push(name6);
    s_array.push(name7);
    s_array.push(name8);
    s_array.push(name9);
    s_array.push(name10);

    console.log(s_array);

    document.getElementById("display_name").innerHTML = s_array;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}
function sorting() {
    s_array.sort();
    document.getElementById("display_name").innerHTML = s_array;
}