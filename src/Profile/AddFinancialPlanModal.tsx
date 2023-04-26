import { Button, Form, Modal, Stack } from "react-bootstrap";

export interface AddFinancialPlanModalProps {
  show: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export function AddFinancialPlanModal({
  show,
  onConfirm,
  onClose,
}: AddFinancialPlanModalProps) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Financial Plan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={3}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" autoFocus />
            </Form.Group>
            <Form.Group>
              <Form.Label>Example textarea</Form.Label>
              <Form.Select>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
