import styled from 'styled-components/macro';
import { BannerLeft } from './banner/index';
import { PawnTabs } from './Tabs/index';
import { Container, Col, Row } from 'react-bootstrap';
import { getAsset } from '../../../../../api/homePageApi.js';
import { useEffect, useState } from 'react';

interface Props {}

const Main = styled.div`
  padding: 83px 0px 66px 0px;
`;

function Banner(props: Props) {
  const dataAsset: Array<object> = [];
  const [dataasset, setDataAsset] = useState<Array<object>>([]);

  useEffect(() => {
    const resultAsset = () => {
      const data = getAsset()
        .then(asset => asset.data)
        .catch(e => e);
      return data;
    };
    async function asyncCall() {
      const data = await resultAsset();
      data.data.forEach(data => {
        dataAsset.push(data);
      });
      return dataAsset;
    }
    asyncCall().then(e => {
      setDataAsset(e);
    });
  }, []);
  const imgAsset = [...dataasset];
  return (
    <Main>
      <Container fluid="xxl">
        <Row>
          <Col lg="5">
            <BannerLeft />
          </Col>
          <Col lg={{ span: 6, offset: 1 }}>
            <PawnTabs dataAsset={imgAsset} />
          </Col>
        </Row>
      </Container>
    </Main>
  );
}

export default Banner;
