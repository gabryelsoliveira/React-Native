<?php

class LembreteController
{
    private Lembrete $model;

    public function __construct(Lembrete $model)
    {
        $this->model = $model;
    }

    public function listar(): void
    {
        echo json_encode(
            $this->model->listar()
        );
    }

    public function buscar(int $id): void
    {
        $lembrete = $this->model->buscarPorId($id);

        if (!$lembrete) {

            http_response_code(404);

            echo json_encode([
                'erro' => 'Lembrete não encontrado'
            ]);

            return;
        }

        echo json_encode($lembrete,JSON_UNESCAPED_UNICODE);
    }

    public function criar(): void
    {
        $dados = json_decode(
            file_get_contents('php://input'),
            true
        );

        if (
            empty($dados['TituloLembrete']) ||
            empty($dados['CorpoLembrete'])
        ) {
            http_response_code(400);

            echo json_encode([
                'erro' => 'Dados obrigatórios ausentes'
            ]);

            return;
        }

        $dados['StatusLembrete'] =
            $dados['StatusLembrete'] ?? false;

        $this->model->criar($dados);

        http_response_code(201);

        echo json_encode([
            'mensagem' => 'Lembrete criado com sucesso'
        ]);
    }

    public function atualizar(int $id): void
    {
        $dados = json_decode(
            file_get_contents('php://input'),
            true
        );

        if (!$this->model->buscarPorId($id)) {

            http_response_code(404);

            echo json_encode([
                'erro' => 'Lembrete não encontrado'
            ]);

            return;
        }

        $this->model->atualizar(
            $id,
            $dados
        );

        echo json_encode([
            'mensagem' => 'Lembrete atualizado com sucesso'
        ]);
    }

    public function excluir(int $id): void
    {
        if (!$this->model->buscarPorId($id)) {

            http_response_code(404);

            echo json_encode([
                'erro' => 'Lembrete não encontrado'
            ]);

            return;
        }

        $this->model->excluir($id);

        echo json_encode([
            'mensagem' => 'Lembrete removido com sucesso'
        ]);
    }
}
