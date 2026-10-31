import * as Dialog from "@radix-ui/react-dialog";
import DiscoveryFlow from "./discovery/DiscoveryFlow";

function DiscoveryWizard({ open, onClose, initialService }) {
  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="wizard-overlay" />
        <Dialog.Content
          className="wizard-content"
        >
          <Dialog.Title className="sr-only">Project discovery</Dialog.Title>
          <Dialog.Description className="sr-only">
            Use the guided steps to prepare a project introduction for Cynbit.
          </Dialog.Description>
          <DiscoveryFlow
            open={open}
            initialService={initialService}
            onClose={onClose}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default DiscoveryWizard;
