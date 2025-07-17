import * as S from './styles'

const Rodape = () => {
  return (
    <S.RodapeContainer>
      <p>
        Criado por{' '}
        <S.Links
          href="https://www.linkedin.com/in/josejunior-dev"
          target="_blank"
          rel="norefer noreferrer noopener"
        >
          Dev José Junior
        </S.Links>{' '}
        em parceria com a{' '}
        <S.Links
          href="https://ebaconline.com.br/"
          target="_blank"
          rel="norefer noreferrer noopener"
        >
          EBAC
        </S.Links>
      </p>
    </S.RodapeContainer>
  )
}

export default Rodape
