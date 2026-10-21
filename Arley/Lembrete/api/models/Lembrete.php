<?php

class Lembrete
{
    private PDO $conn;
    private string $table = 'lembretes';

    public function __construct(PDO $db)
    {
        $this->conn = $db;
    }

    public function listar(): array
    {
        $sql = "SELECT * FROM {$this->table} ORDER BY LembreteId DESC";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    public function buscarPorId(int $id): ?array
    {
        $sql = "SELECT * FROM {$this->table}
        WHERE LembreteId = :id";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(':id', $id, PDO::PARAM_INT);

        $stmt->execute();

        $dados = $stmt->fetch();

        return $dados ?: null;
    }

    public function criar(array $dados): bool
    {
        $sql = "INSERT INTO {$this->table}
(
TituloLembrete,
CorpoLembrete,
StatusLembrete
)
VALUES
(
:titulo,
:corpo,
:status
)";

        $stmt = $this->conn->prepare($sql);

        return $stmt->execute([
            ':titulo' => $dados['TituloLembrete'],
            ':corpo' => $dados['CorpoLembrete'],
            ':status' => $dados['StatusLembrete']
        ]);
    }

    public function atualizar(int $id, array $dados): bool
    {
        $sql = "UPDATE {$this->table}
SET
TituloLembrete = :titulo,
CorpoLembrete = :corpo,
StatusLembrete = :status
WHERE LembreteId = :id";

        $stmt = $this->conn->prepare($sql);

        return $stmt->execute([
            ':titulo' => $dados['TituloLembrete'],
            ':corpo' => $dados['CorpoLembrete'],
            ':status' => $dados['StatusLembrete'],
            ':id' => $id
        ]);
    }

    public function excluir(int $id): bool
    {
        $sql = "DELETE FROM {$this->table}
WHERE LembreteId = :id";

        $stmt = $this->conn->prepare($sql);

        return $stmt->execute([
            ':id' => $id
        ]);
    }
}
