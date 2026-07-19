<?php

//echo "<pre>";print_r($_POST);  exit;

$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
$stateId = $_POST['state'];
$city = filter_var($_POST['city'], FILTER_SANITIZE_STRING);
$course = filter_var($_POST['course'], FILTER_SANITIZE_STRING);
$specialization = "Bangalore";
$campus = "MBA";
$inquiry = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
if($inquiry == "")
{
	$inquiry = "None";
}

$referrer = $_POST['referrer_name'];
$keyword = $_POST['keyword'];

$orderid = $_POST['orderid'];
$sitename = $_POST['sitename'];

$campaign_url = $_POST['campaign_url'];
$utm_medium = $_POST['utm_medium'];
$campaign_name = $_POST['campaign_name'];
$network = $_POST['network'];
$source = $_POST['source'];

if(!empty($name) && !empty($email) && !empty($phone) )
{
	$api_end_point_url = "https://api.in4.nopaperforms.com/dataporting/6830/unipro";
	//extract data from the post
	//set POST variables

	$url = $api_end_point_url;

	$fields = array(
			'name' => "$name",
			'secret_key' => "e2dc9f99fa7746af9a89da22394f9cb7",
			'email' => "$email",
			'mobile' => "$phone",
			'city' => "$city",
			'state' => "$stateId",
			'campus' => $campus,
	        'course' => "$course",
	        'college_id' => 6830,
	        'specialization' => $specialization,		
			//'college_id' => 6384,
			'field_utm_keyword' => "$keyword",
			//'field_ecole_campus'=>"Bengaluru",
			'network' => "$network",
			'source' => "unipro",
			'medium' => "$utm_medium",
			'campaign' => "$campaign_name",
			'cf_query' => $inquiry
		);

	$json = json_encode($fields);
	//echo "<pre>";print_r($fields);

	//url-ify the data for the POST
	foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
	rtrim($fields_string, '&');

	//open connection
	$ch = curl_init();

	//set the url, number of POST vars, POST data
	curl_setopt($ch,CURLOPT_URL, $url);
	curl_setopt($ch,CURLOPT_POST, count($fields));

	//curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string); 
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
	    'Content-Type: application/json',
	));

	//execute post
	$result = curl_exec($ch);
	//echo $result; die;



// SEND DATA TO GOOGLE SHEETS
$sheet_url = "https://script.google.com/macros/s/AKfycbzPjhwFK_1251StMnTYHRbt5hOx_7XB80ijERPj06bbYZWqZLyQ06M6ujQ8Hns-drLabA/exec";

$sheet_data = array(
    "name" => $name,
    "email" => $email,
    "phone" => $phone,
    "city" => $city,
    "state" => $stateId,
    "course" => $course,
    "inquiry" => $inquiry,
    "campaign" => $campaign_name,
    "source" => $source,
    "medium" => $utm_medium
);

$ch_sheet = curl_init();
curl_setopt($ch_sheet, CURLOPT_URL, $sheet_url);
curl_setopt($ch_sheet, CURLOPT_POST, 1);
curl_setopt($ch_sheet, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch_sheet, CURLOPT_POSTFIELDS, json_encode($sheet_data));
curl_setopt($ch_sheet, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json'
));

$response = curl_exec($ch_sheet);
curl_close($ch_sheet);
	

	$href = 'thankyou.html';

	header("location:$href");
}
else
{
	echo "All fields are manadatory";
}
?>