<?php
/* @var $this TblCategoryController */
/* @var $model TblCategory */

$this->breadcrumbs=array(
	'Tbl Categories'=>array('index'),
	$model->title=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'List TblCategory', 'url'=>array('index')),
	array('label'=>'Create TblCategory', 'url'=>array('create')),
	array('label'=>'View TblCategory', 'url'=>array('view', 'id'=>$model->id)),
	array('label'=>'Manage TblCategory', 'url'=>array('admin')),
);
?>

<h1>Update TblCategory <?php echo $model->id; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>