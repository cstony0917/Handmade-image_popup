$(document).ready(function(){

$POPUPBOX_HEIGHT = $(document).height();
$POPUPBOX = $('#popupbox');

$('img').click(function(e){//��Ӥ��Q�I�諸�ɭ�
	$POPUPBOX.fadeIn(100).css({'display':'block','height':$POPUPBOX_HEIGHT});  //���쥻�Q���ê�popupbox��ܥX�ӡA�åB���׵���{�bdocument������
	$POPUP_IMAGE = $(this).attr('src');
	//console.log($POPUP_IMAGE);   --->debug use
	//�N�I�諸�Ϥ����popupbox��add_be_show_images
	$('.add_be_show_images').html('<img class="bepopup" src="'+$POPUP_IMAGE+'">');
	e.stopPropagation(); //����_�w�ƥ�
});


$('body, .close_popup').click(function(){
	$POPUPBOX.hide();
}); 
//�����I��"X close me / �����Ϥ���j"�άO�������Y�Ӧa��A���i�H�����o��popup

});
