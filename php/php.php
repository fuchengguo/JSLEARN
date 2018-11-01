<?php
$x = 5;
$y = 10;

function myTest() {
	global $x, $y;
	$y = $x + $y;
}

myTest();
// 运行函数
echo $y;
// 输出变量 $y 的新值
?>
