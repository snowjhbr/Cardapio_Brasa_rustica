import React, { useState } from 'react';
import { Minus, Plus, X } from 'phosphor-react';
import GIF from '/gifCaixa.gif';
import { adicionarPedidos } from '../../memory/model';
import Formulario from './Formulario';
import { memory } from '../../memory/memory';

interface Produto {
  id: number;
  nome: string;
  tipoProduto?: string;
  descricao: string;
  imagem: string;
  valor: number;
}

interface Sabor {
  nome: string;
  descricao: string;
  imagem: string;
  valor: number;
}

interface Borda {
  nome: string;
  valor: number;
}

interface Pao {
  nome: string;
  valor: number;
}

interface PropsModal {
  produto: Produto;
  closeModal: () => void;
  openFrom: () => void;
  montarPizza: boolean;
  saboresDisponiveis: Sabor[];
}

export default function ProdutoModal(props: PropsModal) {
  const { bordas, paes } = memory();
  const [quantidade, setQuantidade] = useState(1);
  const [finalizarPedido, setFinalizarPedido] = useState(false);
  const [formulario, setFormulario] = useState(false);
  const [observacao, setObservacao] = useState('');
  const [sabor1, setSabor1] = useState<Sabor | null>(null);
  const [sabor2, setSabor2] = useState<Sabor | null>(null);
  const [borda, setBorda] = useState<Borda>({ nome: 'Sem recheio', valor: 0.00 });
  const [pao, setPao] = useState<Pao | null>(null);

  // Calcula o preço
  const valorUnitario = props.montarPizza
    ? (sabor1 ? sabor1.valor : 0) + (sabor2 ? sabor2.valor : 0) + borda.valor
    : props.produto.valor +
      (props.produto.tipoProduto === 'Pizza' ? borda.valor : 0) +
      (props.produto.tipoProduto === 'Hambúrguer' ? (pao ? pao.valor : 0) : 0);
  const valorTotal = valorUnitario * quantidade;

  // Verifica se o pedido está completo
  const pedidoCompleto = props.montarPizza
    ? sabor1 && sabor2
    : props.produto.tipoProduto === 'Hambúrguer'
    ? pao !== null
    : true;

  function montarPedido() {
    const bordaTexto = borda.nome !== 'Sem recheio' ? `, Borda ${borda.nome}` : '';
    const paoTexto = pao && pao.nome !== 'Pão Bola' ? `, ${pao.nome}` : '';
    const pedidoMontado = {
      id: props.montarPizza ? Date.now() : props.produto.id,
      nome: props.montarPizza
        ? `Metade ${sabor1!.nome} / Metade ${sabor2!.nome}${bordaTexto}`
        : `${props.produto.nome}${bordaTexto}${paoTexto}`,
      tipoProduto: props.produto.tipoProduto || 'Pizza',
      descricao: props.montarPizza
        ? `Pizza com metade ${sabor1!.nome} e metade ${sabor2!.nome}${bordaTexto}`
        : `${props.produto.descricao}${bordaTexto}${paoTexto}`,
      observacao: observacao || null,
      quantidade,
      valor_unit: valorUnitario,
      valor_total: valorTotal,
      borda: borda.nome !== 'Sem recheio' ? borda.nome : null,
      pao: pao && pao.nome !== 'Pão Bola' ? pao.nome : null,
    };
    return { pedidoMontado };
  }

  function salvarPedidoLocal() {
    if (!pedidoCompleto) return;
    const { pedidoMontado } = montarPedido();
    adicionarPedidos(pedidoMontado);
    setFinalizarPedido(true);
  }

  function mais() {
    setQuantidade(quantidade + 1);
  }

  function menos() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  const capturandoTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setObservacao(e.target.value);
  };

  return (
    <div className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-15 flex items-center justify-center z-50">
      {formulario ? <Formulario closeSacola={() => null} closeModal={() => setFormulario(false)} /> : null}
      <div className="bg-[rgb(228 228 231)] md:w-[60%] md:h-[60%] h-full w-full bg-white rounded-md shadow-md overflow-hidden flex">
        {finalizarPedido ? (
          <div className="flex flex-col items-center justify-center w-full">
            <img className="-mt-20" src={GIF} alt="Confirmado" />
            <div className="w-full flex justify-center items-center gap-5 -mt-10">
              <button
                className="px-2 py-1 border border-blue-500 text-blue-500 shadow-lg rounded-lg"
                onClick={() => props.closeModal()}
              >
                Voltar ao site
              </button>
              <button
                onClick={() => {
                  props.openFrom();
                  props.closeModal();
                }}
                className="px-2 py-1 border border-blue-500 bg-blue-500 rounded-lg shadow-lg text-white"
              >
                Finalizar Pedido
              </button>
            </div>
          </div>
        ) : (
          <div className="lg:flex-row flex-col w-full flex overflow-auto">
            <figure className="lg:w-[40%] w-full bg-orange-300">
              <img
                className="w-full h-full object-cover"
                src={props.montarPizza ? '/placeholder.jpg' : props.produto.imagem || '/placeholder.jpg'}
                alt={props.produto.nome}
              />
            </figure>
            <section className="p-4 flex flex-col flex-1">
              <div className="flex justify-between items-start pb-2">
                <div>
                  <h1 className="font-semibold">
                    {props.montarPizza ? 'Monte Sua Pizza' : `${props.produto.tipoProduto ? `${props.produto.tipoProduto} ` : ''}${props.produto.nome}`}
                  </h1>
                  <p className="text-sm text-zinc-700">
                    {props.montarPizza ? 'Escolha dois sabores e uma borda para sua pizza' : props.produto.descricao}
                  </p>
                </div>
                <button
                  className="hover:bg-zinc-600 p-1 rounded-lg hover:bg-opacity-25 hover:shadow-md"
                  onClick={props.closeModal}
                >
                  <X size={25} />
                </button>
              </div>

              <div className="flex-1 h-full overflow-auto gap-2 flex flex-col py-2">
                {props.montarPizza ? (
                  <>
                    <div>
                      <h2 className="font-semibold pb-1">Primeiro Sabor:</h2>
                      <select
                        className="w-full p-2 border rounded-md"
                        onChange={(e) => {
                          const selected = props.saboresDisponiveis.find(p => p.nome === e.target.value);
                          setSabor1(selected || null);
                        }}
                        value={sabor1?.nome || ''}
                      >
                        <option value="">Selecione um sabor</option>
                        {props.saboresDisponiveis.map(sabor => (
                          <option key={sabor.nome} value={sabor.nome}>
                            {sabor.nome} (R$ {sabor.valor.toFixed(2).replace('.', ',')})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <h2 className="font-semibold pb-1">Segundo Sabor:</h2>
                      <select
                        className="w-full p-2 border rounded-md"
                        onChange={(e) => {
                          const selected = props.saboresDisponiveis.find(p => p.nome === e.target.value);
                          setSabor2(selected || null);
                        }}
                        value={sabor2?.nome || ''}
                        disabled={!sabor1}
                      >
                        <option value="">Selecione um sabor</option>
                        {props.saboresDisponiveis.map(sabor => (
                          <option key={sabor.nome} value={sabor.nome}>
                            {sabor.nome} (R$ {sabor.valor.toFixed(2).replace('.', ',')})
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                ) : null}

                {(props.montarPizza || props.produto.tipoProduto === 'Pizza') && (
                  <div>
                    <h2 className="font-semibold pb-1">Borda:</h2>
                    <div className="flex flex-wrap gap-2">
                      {bordas.map(b => (
                        <button
                          key={b.nome}
                          className={`px-3 py-1 rounded-lg shadow-sm transition-colors ${
                            borda.nome === b.nome ? 'bg-orange-500 text-white' : 'bg-zinc-200 text-zinc-800'
                          }`}
                          onClick={() => setBorda(b)}
                        >
                          {b.nome} {b.valor > 0 ? `(R$ ${b.valor.toFixed(2).replace('.', ',')})` : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {props.produto.tipoProduto === 'Hambúrguer' && (
                  <div>
                    <h2 className="font-semibold pb-1">Pão:</h2>
                    <div className="flex flex-wrap gap-2">
                      {paes.map(p => (
                        <button
                          key={p.nome}
                          className={`px-3 py-1 rounded-lg shadow-sm transition-colors ${
                            pao?.nome === p.nome ? 'bg-orange-500 text-white' : 'bg-zinc-200 text-zinc-800'
                          }`}
                          onClick={() => setPao(p)}
                        >
                          {p.nome} {p.valor > 0 ? `(R$ ${p.valor.toFixed(2).replace('.', ',')})` : ''}
                        </button>
                      ))}
                    </div>
                    {!pao && (
                      <p className="text-red-500 text-sm mt-1">Por favor, escolha um pão.</p>
                    )}
                  </div>
                )}

                <div className="h-fit">
                  <h2 className="font-semibold pb-1">Observações:</h2>
                  <textarea
                    className="w-full h-36 border border-zinc-800 rounded-md p-2"
                    placeholder="Escreva aqui caso tenha alguma observação."
                    onChange={capturandoTextArea}
                    value={observacao}
                  />
                </div>

                <div className="border-t pt-2 mt-2">
                  <h2 className="font-semibold">Resumo do Pedido</h2>
                  <p>{props.montarPizza ? 'Monte Sua Pizza' : props.produto.nome}: R$ {props.montarPizza ? (sabor1?.valor || 0) + (sabor2?.valor || 0) : props.produto.valor.toFixed(2).replace('.', ',')}</p>
                  {(props.montarPizza || props.produto.tipoProduto === 'Pizza') && borda.valor > 0 && (
                    <p>Borda {borda.nome}: R$ {borda.valor.toFixed(2).replace('.', ',')}</p>
                  )}
                  {props.produto.tipoProduto === 'Hambúrguer' && pao && pao.valor > 0 && (
                    <p>{pao.nome}: R$ {pao.valor.toFixed(2).replace('.', ',')}</p>
                  )}
                  <p className="font-bold">
                    Total: R$ {valorUnitario.toFixed(2).replace('.', ',')} x {quantidade} = R$ {valorTotal.toFixed(2).replace('.', ',')}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <div className="flex gap-2 items-center">
                  <button onClick={menos} className="p-2 bg-zinc-300 rounded-lg">
                    <Minus />
                  </button>
                  <p>{quantidade}</p>
                  <button onClick={mais} className="p-2 bg-zinc-300 rounded-lg">
                    <Plus />
                  </button>
                </div>
                <button
                  onClick={salvarPedidoLocal}
                  className={`w-full rounded-lg py-2 text-white ${pedidoCompleto ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
                  disabled={!pedidoCompleto}
                >
                  Adicionar ao carrinho R$ {valorTotal.toFixed(2).replace('.', ',')}
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}