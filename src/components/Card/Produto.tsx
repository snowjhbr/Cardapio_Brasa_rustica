// src/components/Card/Produto.tsx
import { useState } from 'react';
import ProdutoModal from '../modal/ProdutoModal';
import { memory } from '../../memory/memory';

interface Iprodutos {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  valor: number;
}

interface IProdutosProps {
  header: string;
  modalAberto: (status: boolean) => void;
  produtos: Iprodutos[];
  montar: boolean;
  sinalOpenFrom: (open: boolean) => void;
  tipoProduto?: string;
}

function Produto({ header, produtos, modalAberto, montar, sinalOpenFrom, tipoProduto }: IProdutosProps) {
  const { PizzaMontada } = memory();
  const [modal, setModal] = useState(false);
  const [montarPizzaModal, setMontarPizzaModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Iprodutos>({
    id: 0,
    nome: '',
    descricao: '',
    imagem: '',
    valor: 0,
  });

  function abrirModal(produto: Iprodutos) {
    setProdutoSelecionado(produto);
    modalAberto(true);
    setModal(true);
  }

  function abrirMontarPizza() {
    modalAberto(true);
    setMontarPizzaModal(true);
  }

  function openFromModal() {
    sinalOpenFrom(true);
  }

  return (
    <div>
      {modal ? (
        <ProdutoModal
          openFrom={openFromModal}
          produto={{ ...produtoSelecionado, tipoProduto }}
          closeModal={() => {
            setModal(false);
            modalAberto(false);
          }}
          montarPizza={false}
          saboresDisponiveis={produtos}
        />
      ) : null}

      {montarPizzaModal ? (
        <ProdutoModal
          openFrom={openFromModal}
          produto={{ id: 0, nome: '', descricao: '', imagem: '', valor: 0, tipoProduto: 'Pizza' }}
          closeModal={() => {
            setMontarPizzaModal(false);
            modalAberto(false);
          }}
          montarPizza={true}
          saboresDisponiveis={PizzaMontada.grupoAdicional[0].itens}
        />
      ) : null}

      <h3
        id={header}
        className="font-bold text-1xl sticky top-10 bg-zinc-200 w-full px-2 z-10 py-1 text-xl"
      >
        {header}
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {montar ? (
          <li className="flex items-center gap-1 flex-wrap w-full bg-white rounded-lg">
            <button
              onClick={abrirMontarPizza}
              className="w-full h-[100px] flex text-left items-center justify-between py-2 px-3"
            >
              <div>
                <h3>Monte sua pizza</h3>
                <p className="text-sm text-zinc-500 max-w-[200px] overflow-hidden h-[40px]">
                  Escolha dois sabores!
                </p>
              </div>
              <img className="w-20 h-20 rounded-lg" src="/placeholder.jpg" alt="Monte sua pizza" />
            </button>
          </li>
        ) : null}

        {produtos.map((produto, index) => (
          <li key={index} className="flex items-center gap-1 flex-wrap w-full bg-white rounded-lg">
            <button
              onClick={() => abrirModal(produto)}
              className="w-full h-[100px] flex text-left items-center justify-between py-2 px-3"
            >
              <div className="w-full">
                <h3>{produto.nome}</h3>
                <p className="text-sm text-zinc-500 overflow-hidden h-[40px]">{produto.descricao}</p>
                <strong>R$ {produto.valor.toFixed(2).replace('.', ',')}</strong>
              </div>
              <img
                className="w-20 h-20 rounded-lg"
                src={produto.imagem || '/placeholder.jpg'}
                alt={produto.nome}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produto;