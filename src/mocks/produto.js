import Galaxys24 from '../../assets/s24ultra.jpg';
import GalaxyBook from '../../assets/GalaxyBook.jpg';
import GalaxyS24G from '../../assets/GalaxyS24.png';

const produto = {
    topo: {
        titulo: "Produtos!",
        tituloprod: "Imagem do produto",

    },
    detalhes: {
        prod: "Galaxy S24 Ultra",
        detalhes: "Bem-vindo à era da IA móvel. Com o Galaxy S24 Ultra em suas mãos, você pode liberar níveis totalmente novos de criatividade, produtividade e potencial, começando com o dispositivo mais importante da sua vida: seu celular.",
        preco: "R$ 8.399,00",
        botao: "Adicionar na Lista de Desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                nome: "1x Galaxy S24 Ultra",
                imagem: Galaxys24,
            },
            {
                nome: "4x Galaxy Book S",
                imagem: GalaxyBook,
            },
            {
                nome: "2x Galaxy S24",
                imagem: GalaxyS24G,
            },
        ]
    }
}

export default produto;