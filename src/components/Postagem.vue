<script>
    import PostBlog from './PostBlog.vue';
    import imagem1 from '../assets/cloud.png'
    import imagem2 from '../assets/google.png'
    import imagem3 from '../assets/php.png'

    export default{
        data() {
            return {
                imagem1: imagem1,
                imagem2: imagem2,
                imagem3: imagem3,
            }
        },
        components: {
            PostBlog,
        }
    }
</script>

<template>
    <div class='post'>
        <PostBlog 
            title="Programação Funcional - Tudo o Que Você Precisa Saber! Artigo 1 de 10"
            text="Olá Pessoal nesta série vamos falar sobre um importante Paradigma de Programação, A Programação Funcional e como ela é aplicada no JavaScript. Preparamos uma Série de 10 artigos para abordar com exemplos o que é a Programação Funcional, Esse é o primeiro artigo. Quais são os conceitos que fazem parte desse Paradigma e como Programar em JavaScript utilizando a Programação Funcional? Veja a resposta nesta série completa. Obs. ao Leitor: Por vezes caro leitor, você verá em nossos posts a sigla TL;DR quando ela estiver presente prepare-se, vêm texto longo por aí, assim o resumo do post será colocado no Parágrafo TL;DR algo como Too Long Didnt Read ou Texto Longo, Não Li."
            :imagem="imagem1"
        />
        <PostBlog 
            title="MySQL no Google Cloud SQL"
            text="Este post é um é um guia passo a passo para você aprender a hospedar o seu banco de dados MySQL no Google Cloud SQL. Obviamente você precisa de uma conta no Google e um cartão de crédito para ativar o faturamento. Se for a primeira vez o Google irá te dar $300 para experimentar qualquer serviço, assim você pode aprender, conhecer e até avaliar os preços cobrados. Todos os serviços que você configura no GCloud ficam agrupados por projetos, então a primeira coisa a se fazer é criar ou selecionar um projeto."
            :imagem="imagem2"
        />
        <PostBlog 
            title="Instalando e Configurando o PHP 7 e o Apache no Windows com Xampp"
            text="PHP 7 é a linguagem por trás dos maiores sites do mundo, entre eles, Facebook, Google, Wikipedia e muitos outros *. Preparamos um vídeo que faz parte do Curso Completo de PHP 7 da ETEC na Udemy para ensinar como instalar e configurar o PHP 7 e o Apache utilizando um facilitador para isso o XAMPP. Existe uma diferença entre Linguagem de Programação e Servidor Web, neste vídeo abordamos a diferença entre essas tecnologias e o que é um instalador como o XAMPP."
            :imagem="imagem3"
        />
        
    </div>
</template>

<style>
.post{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>