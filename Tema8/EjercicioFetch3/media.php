<?php
header("Content-type: application/json; charset=utf-8");
$input = json_decode(file_get_contents("php://input"), true);
$output = array("media" => 0, "html" => "", "max" => 0, "min" => PHP_INT_MAX);

$output["html"] .= "<h1>".$input['titulo']."</h1>";
$output["html"] .= "<ul>";
foreach ($input["numeros"] as $value) {
  $output["media"] += $value;
  $output["html"] .= "<li>".$value."</li>";
  $output["max"] = max($output["max"], $value);
  $output["min"] = min($output["min"], $value);
}
$output["media"] /= count($input["numeros"]);
$output["html"] .= "</ul>";
echo json_encode($output);
