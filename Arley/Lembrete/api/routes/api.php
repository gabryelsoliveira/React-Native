<?php

header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');



require_once './config/Database.php';
require_once './models/Lembrete.php';
require_once './controllers/LembreteController.php';

$db = (new Database())->connect();

$model = new Lembrete($db);

$controller = new LembreteController($model);

$method = $_SERVER['REQUEST_METHOD'];

$uri = parse_url(
    $_SERVER['REQUEST_URI'],
    PHP_URL_PATH
);

$uri = explode('/', trim($uri, '/'));

$id = $uri[2] ?? null;


/*
/apilembrete/lembrete
/apilembrete/lembrete/1
*/

switch ($method) {

    case 'GET':

        if ($id) {
            $controller->buscar((int)$id);
        } else {
            $controller->listar();
        }

        break;

    case 'POST':

        $controller->criar();

        break;

    case 'PUT':

        $controller->atualizar((int)$id);

        break;

    case 'DELETE':

        $controller->excluir((int)$id);

        break;

    default:

        http_response_code(405);

        echo json_encode([
            'erro' => 'Método não permitido'
        ]);
}
