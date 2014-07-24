<?php
/* @var $this TblCategoryController */
/* @var $model TblCategory */

$this->breadcrumbs=array(
	'Tbl Categories'=>array('index'),
	$model->title,
);

$this->menu=array(
	array('label'=>'List TblCategory', 'url'=>array('index')),
	array('label'=>'Create TblCategory', 'url'=>array('create')),
	array('label'=>'Update TblCategory', 'url'=>array('update', 'id'=>$model->id)),
	array('label'=>'Delete TblCategory', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage TblCategory', 'url'=>array('admin')),
);
?>

<h1>View TblCategory #<?php echo $model->id; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'id',
		'title',
		'description',
	),
)); ?>
