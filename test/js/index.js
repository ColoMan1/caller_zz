

$('.first_box img').on('touchend',function(){  // 控制caller页点击图片变色
	var $index = $('.first_box img').index(this);
	console.log($('.first_box img').eq($index).attr('src'));
	var $src = $('.first_box p').eq($index).html();
	$('.first_box img').eq($index).attr('src','../images/'+ $src +'1.png');
	$('.first_box p').eq($index).css('color','white')
})


var $i = 0;           // 控制caller页  右上角点击退出系统显示隐藏
$('.all_bigbox p').on('touchend',function(){
	if($i % 2 == 0){
		$('.tc_img').css('display','block')
	}else{
		$('.tc_img').css('display','none')
	}
	$i++;
})






















