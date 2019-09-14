<?php

function is_username_valid($username)
{
	if(preg_match("/^[a-zA-Z][0-9]{5,9}$/i", $username)) {
  		return true;
	} else {
  		return false;
	}
}

function is_password_valid($password)
{
if(preg_match("/^(?=.*[a-z0-9A-Z])(?=.*\W+@)(?=.*\d)(?=.*[a-z])[A-Z0-9a-z\S]{8,}$/", $password)) {
  		return true;
	} else {
  		return false;
	}
}

echo is_username_valid("syAfii24"); //Data Valid | return true
echo is_username_valid("24syAfii*"); //Data Tidak Valid | return false

echo is_password_valid("Sy@fii24"); //Data Valid | return true
echo is_password_valid("syafii"); //Data Tidak Valid | return false


?>
