import { useRef } from "react";
import { Button, Form, Modal, Stack } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

export interface AddFinancialPlanModalProps {
  onConfirm: (data: IFormInput) => void;
  onClose: () => void;
}

interface IFormInput {
  email: string;
  legalFormId: string;
}

export function AddFinancialPlanModal({ onConfirm, onClose }: AddFinancialPlanModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitted },
  } = useForm<IFormInput>({ defaultValues: { email: "", legalFormId: "" } });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Financial Plan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form ref={formRef} onSubmit={handleSubmit(onConfirm)}>
          <Stack gap={3}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                autoFocus
                {...register("email", { required: "This field is required" })}
                isInvalid={(touchedFields.email || isSubmitted) && !!errors.email}
              />
              {errors.email && <Form.Control.Feedback type="invalid">{errors.email.message}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Legal Form</Form.Label>
              <Form.Select
                {...register("legalFormId", { required: "This field is required" })}
                isInvalid={(touchedFields.legalFormId || isSubmitted) && !!errors.legalFormId}
              >
                <option value="">Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </Form.Select>
              {errors.legalFormId && (
                <Form.Control.Feedback type="invalid">{errors.legalFormId.message}</Form.Control.Feedback>
              )}
            </Form.Group>
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => formRef.current?.requestSubmit()}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
