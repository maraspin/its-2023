<?php

require('vendor/autoload.php');

use \PhpMqtt\Client\MqttClient;

$server   = 'k3s.its';
$port     = 30005;
$clientId = 'cybe-client';

$mqtt = new MqttClient($server, $port, $clientId);
$mqtt->connect();
$mqtt->publish('cybe/test-mqtt', 'cybe-client joined the party!', 0);

$mqtt->subscribe('cybe/test-mqtt', function ($topic, $message, $retained, $matchedWildcards) {
    echo sprintf("Received message on topic [%s]: %s\n", $topic, $message);
}, 0);
$mqtt->loop(true);

$mqtt->disconnect();


