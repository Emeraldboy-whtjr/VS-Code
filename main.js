studentarray = [];
function submit(){
    var student = [];
    for (var i = 1; i <= 4 ; i++) {
        var name = document.getElementById("name_of_the_student_" + i).value;
        studentarray.push(name);
        console.log(name);
        
    }
    console.log(studentarray);
    var length = studentarray.length;
    console.log(length);

    for (var i = 0; i < length; i++) {
        student.push("<h4>NAME- " + studentarray[i] + "</h4>");
        console.log(student);

        
    }
    console.log(student);
    document.getElementById("display_name_with_commas").innerHTML=student;

    var array_commas = student.join(" ");
    console.log(array_commas);
    document.getElementById("display_name_without_commas").innerHTML=array_commas;

    document.getElementById("submit_button").style.display="none";

    document.getElementById("sort_button").style.display="inline-block";
};
function sorting(){
    studentarray.sort();
    console.log(studentarray);
    var sortedarray = [];
    var length = studentarray.length;
    console.log(length);
    for (var i = 0; i < length; i++) {
        sortedarray.push("<h4>NAME- " + studentarray[i] + "</h4>");
        console.log(sortedarray);
    }
    var removecommas = sortedarray.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML=removecommas;


};