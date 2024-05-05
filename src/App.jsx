import { Header } from "./components/Header";
import { Carrossel } from "./components/Carrossel";
import { Card } from "./components/Card";
import styles from "./App.module.css";
import "./global.css";
import { Footer } from "./components/Footer";

export function App() {
  const doacoes = [
    {
      title: "SOS Rio Grande do Sul",
      text: ["Pix para a conta SOS Rio Grande do Sul", "CNPJ: 92.958.800/0001-38", "Associação dos Bancos No Estado do Rio Grande do Sul ou Banco do Estado do Rio Grande do Sul (as duas opções podem aparecer)", "-> Diante da situação de calamidade pública enfrentada no Estado, o governo gaúcho reativou o canal de doações para a conta SOS Rio Grande do Sul. Foi restabelecida a chave Pix (CNPJ: 92.958.800/0001-38), a mesma utilizada no ano passado, vinculada à conta bancária aberta pelo Banrisul. As contribuições em dinheiro podem ser feitas por pessoas físicas e jurídicas que tenham condições de ajudar as vítimas das enchentes.", "-> Com o canal oficial de doações, o governo centraliza a ajuda financeira, fornece segurança aos doadores e amplia a transparência da alocação do dinheiro, uma vez que a movimentação dos recursos passará por auditoria e fiscalização do poder público."],
      img: "https://www.estado.rs.gov.br/upload/recortes/202405/02161827_2129879_GD.png",
      link: "https://www.estado.rs.gov.br/governo-reativa-canal-de-doacoes-via-pix-para-auxilio-as-vitimas-das-enchentes",
      width: "48%"
    },
    {
      title: "Times de futebol",
      text: ["-> Os principais times gaúchos de futebol - Internacional, Grêmio e Juventude - também pedem ajuda às vítimas das chuvas no estado. Em função do mau tempo, o Grêmio suspendeu a coleta de doações nos postos abertos para evitar deslocamentos em áreas de risco. No lugar dos donativos físicos, o clube pede doações somente pelo Pix do Instituto Geração Tricolor, organização sem fins lucrativos da agremiação. A chave é o CNPJ 129859670001-59.", "-> O Internacional está recebendo as doações no Estádio Beira-Rio e no Ginásio de Esportes Gigantinho, das 8h às 18h.", "-> Em Caxias do Sul, o Esporte Clube Juventude escolheu o Estádio Alfredo Jaconi e o centro de treinamento do clube como pontos de arrecadação de agasalhos, água mineral, itens de higiene pessoal, limpeza e alimentos não perecíveis.", "-> Na manhã desta sexta-feira, atletas dos clubes ajudaram a distribuir alimentos e produtos de higiene pessoal aos atingidos pelos temporais. "],
      img: "https://imagens.ebc.com.br/YzfOVKuoyvCxDAZa8Y5DF2tZzPs=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2024/05/03/53696696979_c950ffc400_o.jpg?itok=zigoubkZ",
      link: "https://agenciabrasil.ebc.com.br/geral/noticia/2024-05/saiba-como-doar-para-vitimas-de-chuvas-do-rio-grande-do-sul",
      width: "48%"
    },
    {
      title: "Prefeituras",
      text: ["-> A prefeitura de São José também realiza uma campanha de doações para as vítimas das chuvas no estado. O ponto de coleta é na sede do Procon, na Avenida Acioni Souza Filho, 2114, na Beira-Mar de São José. Os itens mais solicitados são água potável, alimentos não perecíveis, produtos de higiene pessoal, produtos de limpeza e roupas de cama.", "-> Já a prefeitura de Santa Cruz do Sul tem cadastrado voluntários para atuar no atendimento às vítimas da enchente que também assola o município. As inscrições podem ser feitas no site da prefeitura.", "-> A prefeitura de Taquara pede que os itens doados sejam entregues na Secretaria de Desenvolvimento Social, Trabalho e Cidadania, na Rua Guilherme Lahm, 947, centro, onde uma equipe faz a triagem. Também é possível doar via Pix, pela chave com número de celular 51996654645, em nome de Rotary Club de Taquara, que fará a compra dos materiais necessários para os atingidos pelas chuvas."],
      img: "https://s5.static.brasilescola.uol.com.br/be/2021/04/bandeira-do-rio-grande-do-sul.jpg",
      link: "https://agenciabrasil.ebc.com.br/geral/noticia/2024-05/saiba-como-doar-para-vitimas-de-chuvas-do-rio-grande-do-sul",
      width: "48%"
    },
    {
      title: "Doação de sangue",
      text: ["-> O Hemocentro de Porto Alegre está preocupado com o risco de desabastecimento de bolsas de sangue nos próximos dias, em razão dos resgates e atendimentos às vítimas do desastre natural", "-> A falta de sangue também se deve aos pontos de bloqueio nas estradas, o que dificulta a logística de envio das amostras para testagem — que é realizada fora do Estado antes do uso em transfusões.", "-> Para doar sangue, o Hemocentro pede que agende antecipadamente a intenção, que pode ser feito por telefone, (51) 3339-7330, ou por mensagem de WhatsApp, no número (51) 98405-4260.", "-> O Hemocentro fica localizado na avenida Bento Gonçalves, 3722, em Porto Alegre, e funciona das 8h às 16h, de segunda a sexta-feira. Além disso, estará aberto no sábado, das 8h às 12h, para atender até 140 doadores."],
      img: "https://s2-valor.glbimg.com/3A2CYExcj-hNDTkvDe1aWgU77CA=/0x0:3936x2624/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2023/N/7/PzcyReSr2KAPfszZ2f0w/aman-chaturvedi-0zzo5o00o80-unsplash.jpg",
      link: "https://valor.globo.com/brasil/noticia/2024/05/03/como-ajudar-o-rio-grande-do-sul.ghtml",
      width: "48%"
    },
    {
      title: "Defesa Civil municipal",
      text: ["Em Porto Alegre, capital do Rio Grande do Sul, a Defesa Civil municipal estabeleceu locais para receber doações de pessoas interessadas em ajudar as vítimas da chuva. Entre os itens apontados pela instituição como mais necessários, neste momento, estão colchões e roupa de cama de tamanho solteiro, roupas e calçados infantis, produtos de higiene e limpeza como sabonete, escova e pasta de dente, papel higiênico, shampoo, toalhas de banho, e água e copos descartáveis. Para os animais de estimação, como cães e gatos, podem ser recebidos casinha para os animais, cama, coleira, guia, gradil e ração.", "" , "Onde doar:", " -> Associação Médica do Rio Grande do Sul (Amrigs) - avenida Ipiranga, 5.311, das 9h às 18h.", " -> Shopping Iguatemi - no Concierge, localizado no 2°piso, acesso A, de segunda-feira a sábado, das 10h às 22h, domingos e feriados das 11h às 20h.", "-> Shopping João Pessoa - avenida João pessoa, 1831, de segunda a sábado, das 9h às 21h, e domingo, das 10h às 21h. ", "-> Shopping Total - avenida Cristovão Colombo, 545, das 10h às 22h.", "-> Arena do Grêmio - avenida Padre Leopoldo Brentano, 110, portão 6, das 9h às 18h. No CT Cristal, na avenida Diário de Notícias, 915, em frente ao Barra Shopping, das 9h às 18h; no Estádio Olímpico, no Largo Patrono Fernando Kroeff, 1, das 9h às 18h, e no CFT Hélio Dourado, na Estrada Municipal Conde, 8.500, em Eldorado do Sul, das 9h às 17h, de segunda à sexta-feira.", "-> Sport Club Internacional (parceria com Banco de Alimentos da Fiergs) - no Gigantinho das 8h às 18h.", "-> Auditório Araújo Vianna - Parque Farroupilha, 685 - quando o espaço estiver aberto para shows."],
      img: "https://imagens.ebc.com.br/M39jpWNRhaf77y9Rr8eg96N7yMo=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2024/05/03/53696350261_e2fea9a0ce_o.jpg?itok=UKgDZkXf",
      link: "https://prefeitura.poa.br/defesa-civil/noticias/saiba-onde-fazer-doacoes-para-vitimas-das-chuvas",
      width: "100%"
    },
  ];

  return (
    <>
      <Header />

      <Carrossel />

      <div className={styles.campotitleDoacoes}>
        <h1 className={styles.titleDoacoes}>Doações</h1>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between", margin: "1rem" }}>
        {doacoes.map((doacao) => (
          <Card key={doacao.title} info={doacao} />
        ))}
      </div>

      <Footer />
    </>
  );
}
