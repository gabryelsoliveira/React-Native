<?php

class Database
{

    private string $host = 'localhost';
    private string $dbName = 'lembretesdb';
    private string $username = 'root';
    private string $password = 'usbw';
    private string $port = '3311';

    // private string $host = 'sql213.infinityfree.com';
    // private string $dbName = 'if0_43107225_lembretesdb';
    // private string $username = 'if0_43107225';
    // private string $password = 'I80PohPDSE';
    // private string $port = '3306';



    public function connect(): PDO
    {
        try {

            $pdo = new PDO(
                "mysql:host={$this->host};port={$this->port};dbname={$this->dbName};charset=utf8mb4",
                $this->username,
                $this->password
            );

            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

            return $pdo;
        } catch (PDOException $e) {

            throw new Exception(
                'Erro de conexão: ' . $e->getMessage()
            );
        }
    }
}
