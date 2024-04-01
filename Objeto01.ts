class TextoSaida {
    tamanho_letra: number;
    cor_fonte: string;
    cor_fundo: string;
    tipo_componente: string;

    constructor() {
        this.tamanho_letra = 12;
        this.cor_fonte = "preto";
        this.cor_fundo = "branco";
        this.tipo_componente = "label";
    }

    configurarTexto(tamanho: number, corFonte: string, corFundo: string, tipoComponente: string): void {
        this.tamanho_letra = tamanho;
        this.cor_fonte = corFonte;
        this.cor_fundo = corFundo;
        this.tipo_componente = tipoComponente;
    }

    exibirTexto(texto: string): void {
        console.log("Texto:", texto);
        console.log("Tamanho da letra: ", this.tamanho_letra);
        console.log("Cor da fonte: ", this.cor_fonte);
        console.log("Cor do fundo: ", this.cor_fundo);
        console.log("Tipo de componente: ", this.tipo_componente);
    }
}


let textoSaida = new TextoSaida();
textoSaida.configurarTexto(14, "azul", "branco", "edit");
textoSaida.exibirTexto("Exercitando modelagem");