<?php
require_once('tcpdf/tcpdf.php');
include("consultas.php");
$id = $_GET["id"];
$m = ucfirst($_GET["m"]);
$y = $_GET["y"];
$recibo = consultar("SELECT * FROM Cargos WHERE IdSocio='$id' AND Mes='$m' AND Year='$y'");
$balance = consultar("SELECT * FROM Balance WHERE IdSocio='$id' AND Mes='$m' AND Year='$y'");
$name = $balance[0]["Nombre"]." ".$balance[0]["Mes"]." ".$balance[0]["Year"];
$socio = $balance[0]["Nombre"];
$tc = 0;
$ta = 0;
$ts = 0;
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
<h2 style= "text-align:center">Cargos de $socio $m-$y</h2>
<table cellspacing="0" cellpadding="1" border="1">
    <tr>
        <th><b>Fecha/hora</b></th>
        <th><b>Concepto</b></th>
        <th><b>Cargo</b></th>
        <th><b>Deposito</b></th>
        <th><b>Saldo</b></th>
    </tr>
EOD;
foreach($recibo as $r){
    $s = $r["Servicio"];
    $f = $r["Dia"]."/".$r["Mes"]."/".$r["Year"]." ".$r["Hora"];
    $c = $r["Cargo"];
    $a = $r["Abono"];
    $sa = $r["Saldo"];
    $tc += $c;
    $ta += $a;
    $ts += $sa;
    $tbl .= <<<EOD
        <tr>
            <td>$f</td>
            <td>$s</td>
            <td>$$c</td>
            <td>$$a</td>
            <td>$$sa</td>
        </tr>   
EOD;
}
$tbl .= <<<EOD
    <tr>
        <td>Cargo Total</td>
        <td></td>
        <td>$$tc</td>
        <td>$$ta</td>
        <td>$$sa</td>
    </tr>
</table>
EOD;

$pdf->writeHTML($tbl, true, false, false, false, '');
//Close and output PDF document
$pdf->Output($name.'.pdf', 'I');
?>