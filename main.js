var name_of_the_guests_array = [];

function submit(){
    var guest_name = document.getElementById("input").value;
    name_of_the_guests_array.push(guest_name);
    name_of_the_guests_array.join(",")
    console.log(name_of_the_guests_array);
    document.getElementById("h41").innerHTML = name_of_the_guests_array;
}

function dispay(){
    var guest_name_display = name_of_the_guests_array.join(" ");
    var guest_name_display = "<section class='names'>";
    for(d = 0;d < name_of_the_guests_array.length; d++){
        round_2 = guest_name_display;
        guest_name_display = round_2 + '<div class="next_name">' + name_of_the_guests_array[d] + '</div>';
        guest_name_display = guest_name_display + "</section>";
    }
    document.getElementById("h42").innerHTML = guest_name_display;
}

function arrange(){
    var new_array = name_of_the_guests_array.sort();
    var guest_name_display = new_array.join(" ");
    var guest_name_display = "<section class='names'>";
    for(d = 0;d < new_array.length; d++){
        round_2 = guest_name_display;
        guest_name_display = round_2 + '<div class="next_name">' + new_array[d] + '</div>';
        guest_name_display = guest_name_display + "</section>";
    }
    document.getElementById("h43").innerHTML = guest_name_display;    
    
}




function search(){

    var s = document.getElementById("input_search").value;
    var found = 0;
    var j;
    for(j = 0; j < name_of_the_guests_array.length; j++){
        if(s == name_of_the_guests_array[j]){
            found = found + 1;
        }
    }

    document.getElementById("h44").innerHTML = "name found " + found + " time/s";
    console.log ("name found " + found + " time/s");
}