import { MongoClient } from 'mongodb'; a
const Benchmark = require('benchmark'); 

async function runBenchmark() {
  const client = await MongoClient.connect('mongodb+srv://is8:jPEhsgwgY3Y3r2r5@cluster0.bgwxo.mongodb.net/animebook');

  const db = client.db('animebook'); 
  const animebookCollection = db.collection('animebook');
  const suite = new Benchmark.Suite();

  suite.add('Consulta - Livros', async function () {
    await animebookCollection.find({ titulo: 'Livro Teste' }).toArray();
  });

  suite.add('Consulta - Avaliações', async function () {
    await animebookCollection.find({ livroId: 'livro_id_teste' }).toArray();
  });

suite.add('Consulta - Usuários', async function () {
    await animebookCollection.find({ nome: 'Usuário Teste' }).toArray();
    });

  suite
    .on('cycle', (event: any) => {
      console.log(String(event.target)); 
    })
    .on('complete', function () {
      console.log('Benchmark concluído.'); 
      client.close(); 
    })
    .run({ async: true });
}


runBenchmark().catch((err) => {
  console.error('Erro durante o benchmark:', err);
});
