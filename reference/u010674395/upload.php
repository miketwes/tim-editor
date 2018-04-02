<?php  
$res["error"] = "";//错误信息  
$res["msg"] = "";//提示信息  
$name = $_FILES['images']['name'];  
$path = dirname(__FILE__) . "\upload\\" . $name;  
if(move_uploaded_file($_FILES['images']['tmp_name'],$path)){  
    $res["status"] = "Y";  
    $res["msg"] = $name;  
}else{  
    $res["status"] = "N";  
    $res["error"] = "error";  
}  
echo json_encode($res);  
?> 
