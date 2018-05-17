<?php

function OpenCon()
{
  $dbhost = "localhost";
  $dbuser = "root";
  $dbpass = "";
  $db = "Helpios";

  $conn = new mysqli($dbhost, $dbuser, $dbpass, $db) or die("Connect failed: %\n". conn -> error);

  return $conn;
}

function CloseCon($conn)
{
  $conn -> close();
}

function getTooltip($URL, $id)
{
  $rqt = mysqli_query("SELECT * FROM Tooltip WHERE baliseTooltip = " . $id . " AND idPage = (SELECT idPage FROM Page WHERE urlPage = " . $URL . ")");
  encodeJson($rqt);
}



function encodeJson($query)
{
  $rows = array();
  while($r = mysqli_fetch_assoc($query))
  {
    $rows[] = $r;
  }
  print json_encode($rows);
}

?>
