let mois = prompt("veiller saisir un mois");
switch (mois) {
  case "janvier":
  case "fevrier":
  case "mars":
    alert("premiers trimestre");
    break;
  case "avril":
  case "mais":
  case "juin":
    alert("dexieme trimestre");
    break;
  case "julliet":
  case "aout":
  case "septembre":
    alert("troisieme trimestre");
    break;
  case "octobre":
  case "novembre":
  case "decembre":
    alert("quatrieme trimestre");
    break;
  default:
    alert("le mois n'existe pas");
}
