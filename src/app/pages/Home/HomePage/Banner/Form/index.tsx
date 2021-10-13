/**
 *
 * Form
 *
 */
import styled from 'styled-components/macro';
import DefiButton from '../../../../../components/DefiButton/DefiButton';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-responsive-combo-box/dist/index.css';
import { Div } from '../../components/style';
import { ComboBoxExample } from '../../components/combobox';

const P = styled.p`
  color: #fff;
`;
const InputField = styled.div`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  border-radius: 22px;
`;
interface Props {
  name?: string;
  placeholder?: string;
  button?: boolean;
  filter?: string;
  arr?: string;
  dataAsset?: any;
}
export function Form(props: Props) {
  return (
    <>
      <Container fluid="lg">
        <P>{props.name}</P>
        <Row>
          <Div className="mx-1">
            <Col sm="8" xs="8">
              <InputField>
                <div className="input ">
                  <input
                    type="number"
                    id="tentacles"
                    name="tentacles"
                    className="input input-slot"
                    placeholder={props.placeholder}
                  ></input>
                  {props.button && (
                    <DefiButton className="defi-btn" width="64px" height="34px">
                      Max
                    </DefiButton>
                  )}
                </div>
              </InputField>
            </Col>
            <Col sm="4" xs="4">
              <ComboBoxExample
                name={props.filter}
                array={props.arr}
                dataAsset={props.dataAsset}
              />
            </Col>
          </Div>
        </Row>
        <div className="pt-3 pb-2"></div>
      </Container>
    </>
  );
}
