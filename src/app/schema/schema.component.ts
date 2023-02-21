import { FormGroup, FormControl } from '@angular/forms';

export class SchemaComponent {

  static empresaForm = new FormGroup({
    _id: new FormControl(),
    __v: new FormControl(),
    codigo: new FormControl(),
    razaoSocial: new FormControl(),
    cnpj: new FormControl(),
    cep: new FormControl(),
    endereco: new FormControl(),
    numero: new FormControl(),
    complemento: new FormControl(),
    bairro: new FormControl(),
    cidade: new FormControl(),
    aliquota: new FormControl(),
  });

  static clientesForm = new FormGroup({
    _id: new FormControl(),
    __v: new FormControl(),
    codigo: new FormControl(),
    nome: new FormControl(),
    usuCloud: new FormControl(),
    senCloud: new FormControl(),
    usuario: new FormControl(),
    senha: new FormControl(),
    textoLivre: new FormControl()
  });

  static parceirosForm = new FormGroup({
    _id: new FormControl(),
    __v: new FormControl(),
    codigo: new FormControl(),
    empresa: new FormControl(),
    cnpj: new FormControl(),
    valorConsultoria: new FormControl(),
    valorGerenciamento: new FormControl()
  });

  static recursosForm = new FormGroup({
    _id: new FormControl(),
    __v: new FormControl(),
    codigo: new FormControl(),
    nome: new FormControl(),
    cargo: new FormControl(),
    usuario: new FormControl(),
    valorHora: new FormControl(),
    meta: new FormControl(),
    certificacao: new FormControl(),
    valorAplicado: new FormControl(),
    valorFixo: new FormControl(),
    email: new FormControl(),
    banco: new FormControl(),
    agencia: new FormControl(),
    conta: new FormControl(),
    pix: new FormControl(),
    tipoPix: new FormControl()
  });

  static lancamentosForm = new FormGroup({
    _id: new FormControl(),
    __v: new FormControl(),
    codigo: new FormControl(),
    data: new FormControl(),
    descricao: new FormControl(),
    tipo: new FormControl(),
    valor: new FormControl(),
    observacao: new FormControl(),
    creditoDebito :new FormControl()
  });

  static creditosForm = new FormGroup({
    _id: new FormControl(),
    __v: new FormControl(),
    codigo: new FormControl(),
    data: new FormControl(),
    descricao: new FormControl(),
    tipo: new FormControl(),
    valor: new FormControl(),
    observacao: new FormControl(),
  });

  static debitosForm = new FormGroup({
    _id: new FormControl(),
    __v: new FormControl(),
    codigo: new FormControl(),
    data: new FormControl(),
    descricao: new FormControl(),
    tipo: new FormControl(),
    valor: new FormControl(),
    observacao: new FormControl(),
  });

  static ratsForm = new FormGroup({

  });
}
