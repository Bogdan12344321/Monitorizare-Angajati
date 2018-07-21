<?php
include "connect.php";
$data = json_decode(file_get_contents("php://input"));
if(count($data)>0){
    $nume = mysqli_real_escape_string($data->nume);
    $prenume = mysqli_real_escape_string($data->prenume);
    $CNP = mysqli_real_escape_string($data->CNP);
    $query = "INSERT INTO angajati(nume,prenume,CNP) VALUES('$nume','$prenume','$CNP')";
    if(mysqli_query($query)){
        echo "Data Inserted...";
    }
    else
    {
        echo "Error";
    }
}
 ?>