import { useEffect, useRef } from "react";
import { Button, Form, Modal, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FinancialPlanDto, useLegalForms } from "../shared/api";

export interface FinancialPlanForm {
  onConfirm: (data: IFormInput) => void;
  onClose: () => void;
  financialPlan?: FinancialPlanDto;
}

interface IFormInput {
  name: string;
  legalFormId: string;
}

export function FinancialPlanForm({ onConfirm, onClose, financialPlan }: FinancialPlanForm) {
  const formRef = useRef<HTMLFormElement>(null);
  const { data: legalForms } = useLegalForms();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitted },
    setFocus,
  } = useForm<IFormInput>({
    defaultValues: {
      name: financialPlan?.name ?? "",
      legalFormId: financialPlan ? String(financialPlan.legalFormId) : "",
    },
  });

  // Set focus on opening because the autofocus attribute doesn't work with the modal components
  useEffect(() => setFocus("name"), [setFocus]);

  return (
    <Modal show onHide={onClose} autoFocus={false}>
      <Modal.Header closeButton>
        <Modal.Title>{financialPlan ? "Edit" : "Add"} Financial Plan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form ref={formRef} onSubmit={handleSubmit(onConfirm)} autoComplete="off" autoFocus={false}>
          <Stack gap={3}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name", { required: "This field is required" })}
                isInvalid={(touchedFields.name || isSubmitted) && !!errors.name}
              />
              {errors.name && <Form.Control.Feedback type="invalid">{errors.name.message}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Legal Form</Form.Label>
              <Form.Select
                {...register("legalFormId", { required: "This field is required" })}
                isInvalid={(touchedFields.legalFormId || isSubmitted) && !!errors.legalFormId}
              >
                <option value="">Please select a legal form</option>
                {legalForms?.map((legalForm) => (
                  <option key={legalForm.id} value={legalForm.id}>
                    {legalForm.name}
                  </option>
                ))}
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
