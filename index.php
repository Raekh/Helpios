<?php

LaucnherApi();

function LaucnherApi()
{
	if(isset($_POST['request']) && $_POST['request']=='getTooltips'){
		header($_SERVER["SERVER_PROTOCOL"]." 200 Found", true, 200);
		getTooltips($_POST['url']);
	}else if(isset($_POST['request']) && $_POST['request']=='getTooltip'){
		header($_SERVER["SERVER_PROTOCOL"]." 200 Found", true, 200);
		getTooltip($_POST['url'], $_POST['idTooltip']);
	}else if(isset($_POST['request']) && $_POST['request']=='getScenarios'){
		header($_SERVER["SERVER_PROTOCOL"]." 200 Found", true, 200);
		getScenarios($_POST['url']));
	}else{
		header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
		echo "{}";
	}
}

function OpenCon()
{
  $connect = new mysqli('localhost','root','root','Helpios');
  // Check connection
  if (!$connect) {
      die("Connection failed: " . mysqli_connect_error());
  }
  //echo "Connected successfully";
  return $connect;
}

function CloseCon($conn)
{
  mysqli_close($conn);
}

function getTooltip($url, $id)
{
  $conn = OpenCon();
  $query = $conn->query("SELECT * FROM Tooltip WHERE baliseTooltip = '" . $id . "' AND idPage = (SELECT idPage FROM Page WHERE urlPage = '" . $url . "')");
  $result = $query->fetch_assoc();
  CloseCon($conn);
  return json_encode($result);
}

function getTooltips($url)
{
  $conn = OpenCon();
  $query = $conn->query("SELECT * FROM Tooltip WHERE idPage = (SELECT idPage FROM Page WHERE urlPage = '" . $url . "')");
  $result = $query->fetch_assoc();
  CloseCon($conn);
  return json_encode($result);
}

function getScenarios($url) {
    $conn = OpenCon();
    $result = array();

    $queryScenarios = $conn->query("SELECT distinct s.idScenario
     FROM Tooltip t
     INNER JOIN Map m on m.idTooltip = t.idTooltip
     INNER JOIN Scenario s on s.idScenario = s.idScenario
     INNER JOIN Page p on p.idPage = t.idPage WHERE p.urlPage = '" . $url ."' ORDER BY m.Ordonnancement");


     $scenarios = $queryScenarios->fetch_assoc();
     if (count($scenarios) > 0) {
      foreach ($scenarios as $monScenario) {
        $idScenario = $monScenario['idScenario'];
        var_dump($idScenario);
        $queryTooltips = $conn->query("SELECT s.*, t.* , m.Ordonnancement
          From Tooltip t
          INNER JOIN Map m on m.idTooltip = t.idTooltip
          INNER JOIN Scenario s on s.idScenario = s.idScenario
          WHERE m.idScenario = " . $idScenario);

          $tooltips = $queryTooltips->fetch_assoc();
          if (count($tooltips) > 0) {
          foreach ($tooltips as $tooltip) {
            (!isset($result[$idScenario]) ? $result[$idScenario] = array() : '');
            $result[$idScenario][] = $tooltip;
          }
        }
      }
    }
    CloseCon($conn);
    return json_encode($result);
  }



?>
