<?php
/* @var $this TblNewsController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Tbl News',
);

$this->menu=array(
	array('label'=>'Create TblNews', 'url'=>array('create')),
	array('label'=>'Manage TblNews', 'url'=>array('admin')),
        array('label' => 'Delete TblNews', 'url' => array('delete')),
);
?>

<h1>Tbl News</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
