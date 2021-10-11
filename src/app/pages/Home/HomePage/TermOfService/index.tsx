/**
 *
 * TermOfService
 *
 */
import DefiButton from 'app/components/DefiButton/DefiButton';
import * as React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components/macro';
import './style/TermOfService.css';
interface Props {
  onHide: any;
  show: boolean;
}

export function TermOfService(props: Props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header className="justify-content-center text-white border-bottom-0 pb-0">
        <Modal.Title as="h2" id="contained-modal-title-vcenter">
          Term of service
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-secondary">
        <Title>DeFi For You Crypto Ethics & Regulation UK</Title>
        <P>
          • The crypto digital ecosystem is a challenger to the existing
          financial system that has managed the economy since the financial
          services act which was introduced to protect consumers in the late
          1990’s.
        </P>
        <P>
          • We are committed to following UK financial services principles
          providing a safe and secure environment for users to enjoy DeFi
          technology within a maintained and secure ecosystem.
        </P>
        <P>
          • Our time and experience in this sector have allowed us to trial and
          sandbox varying technologies. Our R&D findings are available to the
          FCA to assist with creating a safe crypto financial instrument that
          has the flexibility and scope to provide services that comply with AML
          and principles for business.
        </P>
        <P>
          • Our cooperative approach provides the FCA with the assistance needed
          to bridge the knowledge gap between operators and regulators, thus
          providing safe and regulated pathways for users.
        </P>
        <P>
          • Our committed attitude towards regulation is for our users to feel
          confident with the technology, and confident that their personal
          information and tokenised assets are safe when transacting within our
          digital platforms.
        </P>
        <P>• Working towards Prudential standards as an instrument provider.</P>
        <P>
          Assurance knowing that certain elements within the peer-to-peer
          transaction process is authorised and regulated by The Financial
          Conduct Authority.
        </P>
        <P>
          • Clients and users are assured that we are a company that treats
          customers fairly.
        </P>
        <P>
          • The operational platform maintains improved security standards that
          are more secure than the historic frameworks being used by preceding
          providers.
        </P>
        <P>
          • The Financial Conduct Authority is preparing regulatory frameworks
          for crypto asset businesses and crypto intermediaries can operate at
          this time.
        </P>
      </Modal.Body>
      <Modal.Footer className="border-top-0 justify-content-center">
        <DefiButton width="105px" height="48px" onClick={props.onHide}>
          accept
        </DefiButton>
      </Modal.Footer>
    </Modal>
  );
}

const Title = styled.h4`
  color: #dba83d;
  font-weight: 700;
`;
const P = styled.p`
  font-weight: 500;
  color: #dcdcdc;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
