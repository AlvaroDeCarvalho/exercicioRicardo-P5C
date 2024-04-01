class Boneco {
    nome: string;
    posicao_x: number;
    posicao_y: number;
    direcao_atual: string;

    constructor(nome: string, posicao_x: number, posicao_y: number, direcao_atual: string) {
        this.nome = nome;
        this.posicao_x = posicao_x;
        this.posicao_y = posicao_y;
        this.direcao_atual = direcao_atual;
    }

    moverCima(): void {
        this.posicao_y += 1;
    }

    moverBaixo(): void {
        this.posicao_y -= 1;
    }

    moverDireita(): void {
        this.posicao_x += 1;
    }

    moverEsquerda(): void {
        this.posicao_x -= 1;
    }
}

let boneco = new Boneco("Leonardo Sobrinho", 0, 0, "direita");
boneco.moverDireita();
boneco.moverCima();
console.log(`Posição atualizada do boneco ${boneco.nome}: (${boneco.posicao_x}, ${boneco.posicao_y})`);
