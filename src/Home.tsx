// src/Home.tsx
import { useEffect, useState } from 'react';
import { ShoppingBag, WhatsappLogo, X, SmileySad, Minus, Plus, Trash } from 'phosphor-react';
import { memory } from './memory/memory';
import { atualizarPedido, deletaPedido, listarPedidos } from './memory/model';
import ConfirmacaoExclusao from './components/modal/ConfirmacaoExclusao';
import Produto from './components/Card/Produto';
import Banner from '/banner.png';
import Logo from '/logo.png';
import Formulario from './components/modal/Formulario';

const { EsfihaAberta, EsfihaFechada, HamburguerArtesanal, HamburguerTradicional, sucos, bebidas, beirutes, drinks, petiscos } = memory();

export interface IPedido {
  id: number;
  nome: string;
  descricao: string;
  observacao: string | null; // Corrige para permitir null
  quantidade: number;
  valor_unit: number;
  valor_total: number;
  tipoProduto?: string;
}

export default function Home() {
  const { produtos } = memory();
  const [listaSacola, setListaSacola] = useState<IPedido[]>([]);
  const [ponteiroAtualizacao, setPonteiroAtualizacao] = useState(false);
  const [algumModalAberto, setAlgumModalAberto] = useState(false);
  const [openSacola, setOpenSacola] = useState(false);
  const [formularioModal, setFormularioModal] = useState(false);
  const [confirmacaoExclusaoConfig, setConfirmacaoExclusaoConfig] = useState({
    closeModal: false,
    confirmacao: false,
    index: 0,
    produto: '',
  });

  useEffect(() => {
    setListaSacola(listarPedidos());
  }, [ponteiroAtualizacao, algumModalAberto, formularioModal, openSacola]);

  function exclusaoProdutoSacola(index: number) {
    deletaPedido(index);
    setConfirmacaoExclusaoConfig({
      ...confirmacaoExclusaoConfig,
      closeModal: false,
      confirmacao: false,
      index: 0,
    });
    setPonteiroAtualizacao(!ponteiroAtualizacao);
  }

  function abrirFormulario() {
    if (listaSacola.length === 0) {
      return;
    }
    setFormularioModal(true);
  }

  function mais(index: number) {
    const pedido = listaSacola[index];
    const atualizacao = {
      ...pedido,
      quantidade: pedido.quantidade + 1,
      valor_total: pedido.valor_unit * (pedido.quantidade + 1),
    };
    atualizarPedido(index, atualizacao);
    setPonteiroAtualizacao(!ponteiroAtualizacao);
  }

  function menos(index: number) {
    const pedido = listaSacola[index];
    if (pedido.quantidade === 1) {
      setConfirmacaoExclusaoConfig({
        ...confirmacaoExclusaoConfig,
        closeModal: true,
        index,
      });
      return;
    }
    const atualizacao = {
      ...pedido,
      quantidade: pedido.quantidade - 1,
      valor_total: pedido.valor_unit * (pedido.quantidade - 1),
    };
    atualizarPedido(index, atualizacao);
    setPonteiroAtualizacao(!ponteiroAtualizacao);
  }

  const somaSacola = listaSacola.reduce((acc, item) => acc + item.valor_total, 0);

  return (
    <div
      className={`h-screen relative scroll-smooth focus:scroll-auto ${
        formularioModal ? 'overflow-hidden' : ''
      }`}
    >
      {formularioModal && (
        <Formulario
          closeModal={() => setFormularioModal(false)}
          closeSacola={() => setOpenSacola(false)}
        />
      )}

      {confirmacaoExclusaoConfig.closeModal && (
        <ConfirmacaoExclusao
          closeModal={() =>
            setConfirmacaoExclusaoConfig({
              ...confirmacaoExclusaoConfig,
              closeModal: false,
            })
          }
          confirmacao={(indexValue) => exclusaoProdutoSacola(indexValue)}
          index={confirmacaoExclusaoConfig.index}
          produto={confirmacaoExclusaoConfig.produto}
        />
      )}

      <header className="px-4 py-5 w-full relative md:px-10 lg:px-20">
        <div className="fixed bottom-10 right-10 bg-blue-500 rounded-full p-2 flex items-center shadow-lg z-30 md:hidden">
          <button onClick={() => setOpenSacola(true)} className="relative">
            <ShoppingBag className="text-white" size={35} />
            {listaSacola.length > 0 && (
              <div className="absolute -top-4 -right-2 z-40 shadow-lg border-white bg-red-500 w-6 h-6 flex items-center justify-center rounded-full text-white">
                {listaSacola.length}
              </div>
            )}
          </button>
        </div>

        <div className="w-full h-fit rounded-xl overflow-hidden shadow-lg">
          <img className="w-full h-fit object-cover" src={Banner} alt="Pizzaria Background" />
        </div>

        <div className="flex flex-col gap-4 -mt-10 px-2 md:flex-row md:px-10 lg:gap-4">
          <img
            className="w-24 h-24 border-2 border-zinc-300 rounded-lg shadow-lg md:w-32 md:h-32"
            src={Logo}
            alt="Logo"
          />
          <div className="mt-4 flex flex-col gap-1 md:mt-12">
            <h1 className="font-bold text-lg md:text-xl">Brasa Rústica</h1>
            <a className="flex items-center gap-1" href="https://wa.me/558892440216">
              <WhatsappLogo size={19} />
              (88) 9 9244-0216
            </a>
          </div>
        </div>
      </header>

      <main className="px-4 w-full md:px-10 lg:px-20">
        <nav className="flex flex-col gap-3 sticky top-0 pt-2 bg-zinc-200 w-full z-30">
          <ul className="w-full overflow-auto flex items-center gap-3">
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#Pizzas">Pizzas</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#EsfihasAbertas">Esfihas Abertas</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#EsfihasFechadas">Esfihas Fechadas</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#HamburguerArtesanal">Hambúrguer Artesanal</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#HamburguerTradicional">Hambúrguer Tradicional</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#Sucos">Sucos</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#Bebidas">Bebidas</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#Beirutes">Beirutes</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#Drinks">Drinks</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#Petiscos">Petiscos</a>
            </li>
          </ul>
        </nav>

        <section className="flex gap-2 py-4">
          <div className="flex flex-col flex-wrap gap-2 flex-1">
            <Produto
              header="Pizzas"
              produtos={produtos}
              tipoProduto="Pizza"
              modalAberto={setAlgumModalAberto}
              montar={true}
              sinalOpenFrom={setFormularioModal}
            />            
            
            <Produto
              header="Esfihas Abertas"
              produtos={EsfihaAberta}
              tipoProduto="Esfiha Aberta"
              modalAberto={setAlgumModalAberto}
              montar={false}
              sinalOpenFrom={setFormularioModal}
            />
            <Produto
              header="Esfihas Fechadas"
              produtos={EsfihaFechada}
              tipoProduto="Esfiha Fechada"
              modalAberto={setAlgumModalAberto}
              montar={false}
              sinalOpenFrom={setFormularioModal}
            />
            <Produto
              header="Hambúrguer Artesanal"
              produtos={HamburguerArtesanal}
              tipoProduto="Hambúrguer Artesanal"
              modalAberto={setAlgumModalAberto}
              montar={false}
              sinalOpenFrom={setFormularioModal}
            />
            <Produto
              header="Hambúrguer Tradicional"
              produtos={HamburguerTradicional}
              tipoProduto="Hambúrguer"
              modalAberto={setAlgumModalAberto}
              montar={false}
              sinalOpenFrom={setFormularioModal}
            />
            <Produto
              header="Sucos"
              produtos={sucos}
              tipoProduto="Suco"
              modalAberto={setAlgumModalAberto}
              montar={false}
              sinalOpenFrom={setFormularioModal}
            />
            <Produto
              header="Bebidas"
              produtos={bebidas}
              tipoProduto="Bebida"
              modalAberto={setAlgumModalAberto}
              montar={false}
              sinalOpenFrom={setFormularioModal}
            />
            <Produto
              header="Beirutes"
              produtos={beirutes}
              tipoProduto="Beirute"
              modalAberto={setAlgumModalAberto}
              montar={false}
              sinalOpenFrom={setFormularioModal}
            />
            <Produto
              header="Drinks"
              produtos={drinks}
              tipoProduto="Drink"
              modalAberto={setAlgumModalAberto}
              montar={false}
              sinalOpenFrom={setFormularioModal}
            />
            <Produto
              header="Pestiscos"
              produtos={petiscos}
              tipoProduto="Petisco"
              modalAberto={setAlgumModalAberto}
              montar={false}
              sinalOpenFrom={setFormularioModal}
            />
          </div>

          <div
            className={`w-80 h-fit bg-white rounded-lg p-2 lg:mt-9 lg:flex flex-col gap-2 ${
              openSacola ? 'fixed w-full h-full flex -top-0 left-0 z-40' : 'sticky hidden top-9'
            }`}
          >
            <div className="flex justify-between items-center border-b py-1">
              <h1 className="font-semibold text-lg">Sacola</h1>
              {openSacola && (
                <button onClick={() => setOpenSacola(false)} className="lg:hidden">
                  <X />
                </button>
              )}
            </div>
            <div className={`${openSacola ? 'h-full' : 'h-96'} flex w-full flex-col overflow-auto gap-1`}>
              {listaSacola.length > 0 ? (
                listaSacola.map((pedido, index) => (
                  <div
                    className="w-full flex items-end bg-white border rounded-lg justify-between relative p-2"
                    key={index}
                  >
                    <div className="flex-1">
                      <h2>
                        {pedido.tipoProduto ? `${pedido.tipoProduto} ` : ''}{pedido.nome}
                      </h2>
                      <p className="text-xs text-red-600">{pedido.observacao || ''}</p>
                      <p className="text-xs text-zinc-600">
                        R${pedido.valor_unit.toFixed(2).replace('.', ',')}/unit
                      </p>
                      <p>Total R${pedido.valor_total.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                      <div className="w-full text-right">
                        <button
                          onClick={() =>
                            setConfirmacaoExclusaoConfig({
                              ...confirmacaoExclusaoConfig,
                              closeModal: true,
                              index,
                            })
                          }
                        >
                          <Trash className="text-red-400 hover:text-red-500" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => menos(index)}
                          className="p-1 bg-zinc-300 rounded-lg"
                        >
                          <Minus />
                        </button>
                        <span>{pedido.quantidade}</span>
                        <button
                          onClick={() => mais(index)}
                          className="p-1 bg-zinc-300 rounded-lg"
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <SmileySad size={100} className="text-zinc-600" />
                  <span className="text-zinc-600 w-48 text-center">
                    Nenhum pedido adicionado na sacola
                  </span>
                </div>
              )}
            </div>
            <div className="p-1 w-full">
              <button
                onClick={abrirFormulario}
                className="bg-blue-500 text-white w-full text-center py-1 rounded-md"
              >
                Finalizar Pedido R${somaSacola.toFixed(2).replace('.', ',')}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="w-auto h-fit bg-blue-500 flex justify-center p-2 rounded-sm">
          <h1 className="text-yellow-50">© 2025 Copyright by IsaacDev</h1>
        </div>
      </footer>
    </div>
  );
}