<?php
/* @var $this TblNewsController */
/* @var $model TblNews */

$this->breadcrumbs=array(
	'Tbl News'=>array('index'),
	$model->title,
);

$this->menu=array(
	array('label'=>'List TblNews', 'url'=>array('index')),
	array('label'=>'Create TblNews', 'url'=>array('create')),
	array('label'=>'Update TblNews', 'url'=>array('update', 'id'=>$model->id)),
	array('label'=>'Delete TblNews', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage TblNews', 'url'=>array('admin')),
);
?>

<section class="col-md-9 col-lg-9 col-sm-9">
    <div class="row" id="<?php echo $model->id; ?>">
        <?php $this->widget('zii.widgets.CDetailView', array(
                'data'=>$model,
                'attributes'=>array(
                    array(
                        'name' => 'title',
                        'cssClass' => 'bg-titles titles-head col-md-12',
                        'template' => "<div class=\"{class}\"><h3>{value}</h3>\n",
                    ),
                    array(
                        'name' => 'create',
                        'cssClass' => 'text-muted',
                        'template' => "<h6 class=\"{class}\">Added {value} by",
                    ),
                    array(
                        'name' => 'author_id',
                        'cssClass' => 'myCustomRowClass',
                        'template' => "<a href='/index.php?r=tblUser/view&id={value}'> {value} </a></h6>",
                    ),
                    array(
                        'name' => 'category_id',
                        'cssClass' => 'text-muted',
                        'template' => "<h6 class=\"{class}\">Categories: <a href='/index.php?r=tblCategory/view&id={value}'>{value}</a></h6></div>",
                    ),
                    array(
                        'name' => 'text',
                        'cssClass' => 'col-md-12',
                        'template' => "<p class=\"{class}\">{value}</p>",
                    ),
                ),
        )); ?>
    </div>
</section>
