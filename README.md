# Relatório de Desempenho: MySQL vs MongoDB

Este relatório compara o desempenho de duas bases de dados populares, **MySQL** e **MongoDB**, com base em testes de operações típicas de leitura e escrita. O objetivo é analisar a eficiência de cada sistema em diferentes cenários de uso, levando em consideração o número de operações por segundo (ops/sec) e a ocorrência de erros relacionados à alocação de memória no MongoDB.

## Desempenho do MySQL

O MySQL apresentou os seguintes resultados para suas operações:

| Operação                         | Ops/sec         |
|-----------------------------------|-----------------|
| Livros                            | 402 ops/sec     |
| Buscar Livro por Título           | 1,260 ops/sec   |
| Listar Usuários                   | 96.6 ops/sec    |
| Listar Avaliações por Livro       | 1,472 ops/sec   |
| Criar Livro                       | 205 ops/sec     |

### Análise do MySQL
- **Melhor desempenho**: A operação que mais se destacou foi **Listar Avaliações por Livro**, com 1,472 operações por segundo, sendo a mais rápida entre as testadas no MySQL.
- **Desempenho geral**: O MySQL demonstrou uma boa capacidade de realizar operações de busca e criação, mas seu desempenho é mais modesto em comparação com o MongoDB, especialmente em operações simples como consultas a livros e avaliações.

## Desempenho do MongoDB

Para o MongoDB, os testes mostraram os seguintes resultados:

| Operação                         | Ops/sec         |
|-----------------------------------|-----------------|
| Consulta - Livros                 | 49,399 ops/sec  |
| Consulta - Avaliações             | 11,044 ops/sec  |

### Análise do MongoDB
- **Excelente desempenho nas consultas**: O MongoDB se destacou nas consultas, especialmente na operação de **Consulta - Livros**, com um número impressionante de 49,399 operações por segundo, muito superior ao desempenho do MySQL.
- **Desempenho em Avaliações**: A operação de **Consulta - Avaliações** também teve um bom desempenho, com 11,044 operações por segundo, embora ainda fique abaixo do desempenho nas consultas a livros.
- **Problemas de memória**: Durante os testes, o MongoDB apresentou um erro crítico de memória, indicando que o sistema atingiu o limite de memória disponível para a alocação de dados. O erro de memória foi descrito como **"FATAL ERROR: Reached heap limit - Allocation failed"**. Isso pode ser um fator limitante para o uso do MongoDB em cenários de grande volume de dados ou consultas pesadas.

## Comparação de Desempenho

### Desempenho em operações simples
| Sistema  | Operação                           | Ops/sec       |
|----------|-------------------------------------|---------------|
| **MySQL**| Livros                              | 402 ops/sec   |
| **MongoDB**| Consulta - Livros                 | 49,399 ops/sec|

- O **MongoDB** teve um desempenho muito superior no que diz respeito às consultas a livros, alcançando quase 50 mil operações por segundo, enquanto o MySQL obteve apenas 402 operações por segundo na mesma operação.
- **Listar Avaliações por Livro** foi a operação mais rápida no MySQL, mas, mesmo assim, o MongoDB se destacou ainda mais em termos de volume de operações para consultas gerais.

### Desempenho em operações complexas (criação e listagem)

| Sistema  | Operação                           | Ops/sec       |
|----------|-------------------------------------|---------------|
| **MySQL**| Criar Livro                         | 205 ops/sec   |
| **MongoDB**| Consulta - Avaliações             | 11,044 ops/sec|

- O **MySQL** teve um desempenho razoável em operações de criação de dados (como "Criar Livro"), mas a diferença em operações de leitura foi marcante, com o MongoDB se saindo melhor em consultas complexas, como a de avaliações.

### Problemas de memória no MongoDB

- Um ponto importante observado foi que o MongoDB falhou ao tentar alocar mais memória, resultando em um erro de "heap overflow". Esse problema pode ser crítico em ambientes de grande escala, onde a memória disponível para o sistema é insuficiente para o processamento de grandes volumes de dados ou consultas complexas. O MySQL não apresentou esse tipo de falha durante os testes.

## Conclusão

### MySQL
- O MySQL se mostrou eficiente para operações de criação e consulta simples, com bom desempenho geral. A operação de **Listar Avaliações por Livro** foi a mais rápida.
- No entanto, quando se trata de consultas de grande volume, como as de livros e avaliações, o MySQL fica atrás do MongoDB.

### MongoDB
- O MongoDB teve um desempenho impressionante, especialmente em consultas a grandes volumes de dados, com resultados muito superiores ao MySQL nas operações de consulta.
- O grande desafio do MongoDB é o erro de memória identificado durante os testes, que pode afetar seu desempenho em sistemas com grandes volumes de dados ou com necessidade de alocação intensiva de memória.

Em resumo, o MongoDB é mais eficiente em consultas de leitura, especialmente em volumes grandes de dados, enquanto o MySQL se sai melhor em operações mais simples, sem grandes necessidades de memória. O MongoDB, no entanto, requer cuidados com a gestão de memória para evitar falhas em ambientes de alto desempenho.
