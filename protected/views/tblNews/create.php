<?php
/* @var $this TblNewsController */
/* @var $model TblNews */

$this->breadcrumbs=array(
	'Tbl News'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List TblNews', 'url'=>array('index')),
	array('label'=>'Manage TblNews', 'url'=>array('admin')),
);
?>

<h1>Create TblNews</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>