<?php
//cinesto contamos las imagens para el catalogo
$total_imagenes = count(glob('..\img\Lentes\{*.png}',GLOB_BRACE));
echo $total_imagenes;

?>