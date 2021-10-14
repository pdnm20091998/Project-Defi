import Modal from 'react-bootstrap/Modal';
import DefiButton from 'app/components/DefiButton/DefiButton';
import styled from 'styled-components/macro';

export const NotActiveModal = props => {
  return (
    <CustomModal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="body">
        <p>
          This account has not been activated yet. Please confirm email to
          activate your account
        </p>
        <DefiButton
          className="btn"
          onClick={props.onHide}
          width={'64px'}
          height={'36px'}
        >
          Ok
        </DefiButton>
      </Modal.Body>
    </CustomModal>
  );
};
const CustomModal = styled(Modal)`
  box-shadow: #000000 0px 3px 1px -2px;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
  text-align: center;
  .modal-content {
    border: 1px solid #282c37;
    border-radius: 24px !important;
    background-color: #282c37;
  }
  .body {
    border-radius: 24px;
  }
  .btn {
    margin-top: 24px;
  }
`;
