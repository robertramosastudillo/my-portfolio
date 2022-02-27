import styled from 'styled-components'

export const SectionContainer = styled.div`
  padding: 80px 20px 0px 20px;
`

export const SectionTitle = styled.h4`
  color: #6838f2;
  font-weight: 600;
  font-size: 24px;
  line-height: 50px;
  margin-bottom: 10px;

  span {
    display: block;
    color: #6838f2;
    font-size: 14px;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    font-size: 24px;

    span {
      font-size: 16px;
    }
  }

  @media (min-width: 1280px) {
    font-size: 40px;
    margin-bottom: 16px;

    span {
      font-size: 16px;
    }
  }
`;