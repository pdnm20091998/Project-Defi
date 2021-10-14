import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DefiButton from 'app/components/DefiButton/DefiButton';
export const MyVerticallyCenteredModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p>Your username or password is not correct, please try again</p>
      </Modal.Body>
      <Modal.Footer>
        <DefiButton onClick={props.onHide}>Ok</DefiButton>
      </Modal.Footer>
    </Modal>
  );
};

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
