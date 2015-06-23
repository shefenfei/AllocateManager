/**
 * Created by PhpStorm.
 * User: she
 * Date: 15-6-23
 * Time: 下午5:09
 */
<?php
    require('conn.php');
    $useraccount = $_POST['account'];
    $password = $_POST['password'];
    if ($useraccount == "admin" && $password == "admin") {
        $arr = Array('message'=>'登录成功','success'=>true);
        echo json_encode($arr);
    }else {
        $errorArr = Array('message'=>'登录失败','success'=>false);
        echo json_encode($errorArr);
    }
?>