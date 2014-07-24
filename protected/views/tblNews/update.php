<?php
/* @var $this TblNewsController */
/* @var $model TblNews */

$this->breadcrumbs=array(
	'Tbl News'=>array('index'),
	$model->title=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'List TblNews', 'url'=>array('index')),
	array('label'=>'Create TblNews', 'url'=>array('create')),
	array('label'=>'View TblNews', 'url'=>array('view', 'id'=>$model->id)),
	array('label'=>'Manage TblNews', 'url'=>array('admin')),
);
?>

<h1>Update TblNews <?php echo $model->id; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>