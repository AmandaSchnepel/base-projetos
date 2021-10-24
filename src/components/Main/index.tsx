import * as S from "./styles"

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="imagem da logo do react" />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, React.js, Next.js e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="um desenvolvedor de frante para uma tela com codigo"
    />
  </S.Wrapper>
)

export default Main
