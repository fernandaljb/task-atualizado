//definimos a interface do objeto
//Essa parte estabelece a regra de que qualquer objeto do tipo OrdemServico precisa ter essa propriedades
export interface OrdemServico{
nomeCliente: string,
modeloAparelho: string,
defeito: string,
status: string,
};
//definimos quais propriedades (props) o componente visual em React (ServiceCard) precisa receber.
//componentes recebem dados através de props
//o componente ServiceCard deve receber obrigatoriamente um objeto chamado Service, e que esse objeto precisa respeitar o formato definido na OrdemServico.
export interface ServiceCardProps {
 Service: OrdemServico;
}
//Recebe o objeto Service via parâmetro, acessa seus valores (como Service.nomeCliente) e os injeta dentro do HTML (JSX) para renderizar um "card" estilizado (usando classes do Tailwind CSS
export function ServiceCard({ Service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{Service.nomeCliente}</h2>
      <p className="text-gray-600 mb-1">Modelo do Aparelho: {Service.modeloAparelho}</p>
      <p className="text-gray-600 mb-1">Defeito: {Service.defeito}</p>
      <p className="text-gray-600">Status: {Service.status}</p>
    </div>
  );
}