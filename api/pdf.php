<?php
require_once('tcpdf/tcpdf.php');
include("consultas.php");
$id = $_GET["id"];
$recibo = consultar("SELECT * FROM Cargos WHERE IdCargo='$id'");
$servicio = $recibo[0]["Servicio"];
$abono = $recibo[0]["Abono"];
$cargo = $recibo[0]["Cargo"];
$deuda = $recibo[0]["Saldo"];
$hora = $recibo[0]["Hora"];
$d = $recibo[0]["Dia"];
$m = $recibo[0]["Mes"];
$y = $recibo[0]["Year"];
$name = $d."/".$m."/".$y." ".$hora;
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Club Imperial');
$pdf->SetTitle('Recibo');
// set default header data
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));
// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);
// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);
// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
    require_once(dirname(__FILE__).'/lang/eng.php');
    $pdf->setLanguageArray($l);
}

// set font
$pdf->SetFont('helvetica', 'B', 20);
// add a page
$pdf->AddPage();
$pdf->SetFont('helvetica', '', 8);
$tbl = <<<EOD
<h2 style= "text-align:center">Recibo de compra</h2>
<table cellspacing="0" cellpadding="1" border="1">
    <tr>
        <th><b>Fecha/hora</b></th>
        <th><b>Concepto</b></th>
        <th><b>Cargo</b></th>
        <th><b>Deposito</b></th>
        <th><b>Saldo</b></th>
    </tr>
    <tr>
        <td>$name</td> 
        <td>$servicio</td>
        <td>$$cargo</td>
        <td>$$abono</td>
        <td>$$deuda</td>
    </tr>
</table>
EOD;

$pdf->writeHTML($tbl, true, false, false, false, '');
//Close and output PDF document
$pdf->Output('recibo '.$name.'.pdf', 'I');
?>