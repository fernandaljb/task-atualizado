import {useState} from 'react';
import type { OrdemServico} from './components/ServiceCard';
import { ServiceCard } from './components/ServiceCard';

function App() {
  const [listaOS, setListaOS] = useState<OrdemServico[]>([]);
  const[form, setForm] = useState<OrdemServico>({
    nomeCliente: '',
    modeloAparelho: '',
    defeito: '',
    status: ''
  });

  const handleAdicionarOS = (e:React.FormEvent) => {
    e.preventDefault();
    if(form.nomeCliente.trim()) return; // Evita adicionar se o nome do cliente estiver vazio
    
    setListaOS([...listaOS, form]);
    setForm({
      nomeCliente: '',
      modeloAparelho: '',
      defeito: '',
      status: ''
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Lista de Ordens de Serviço</h1>
      <form onSubmit={handleAdicionarOS} className="mb-4">
        <input
          type="text"
          placeholder="Nome do Cliente"
          value={form.nomeCliente}
          onChange={(e) => setForm({...form, nomeCliente: e.target.value})}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Modelo do Aparelho"
          value={form.modeloAparelho}
          onChange={(e) => setForm({...form, modeloAparelho: e.target.value})}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Defeito"
          value={form.defeito}
          onChange={(e) => setForm({...form, defeito: e.target.value})}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Status"
          value={form.status}
          onChange={(e) => setForm({...form, status: e.target.value})}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Adicionar</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listaOS.map((service, index) => (
          <ServiceCard key={index} Service={service} />
        ))}
      </div>
    </div>
  );
}

export default App;