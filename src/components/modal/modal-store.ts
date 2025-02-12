import { useQueryState, parseAsBoolean } from "nuqs";
import { MODAL_COMPONENTS_NAMES } from "./modal-components";

export type ModalConfig = {
  component: MODAL_COMPONENTS_NAMES | null;
  props?: Record<string, unknown> | null;
};

export const useModalStore = () => {
  const [isOpen, setIsOpen] = useQueryState<boolean>(
    "modal-type",
    parseAsBoolean,
  );

  const [activeModal, setActiveModal] = useQueryState<ModalConfig>(
    "active-modal",
    {
      defaultValue: { component: null, props: null },
      parse: (value) => {
        try {
          return JSON.parse(decodeURIComponent(value));
        } catch {
          return { component: null, props: null };
        }
      },
      serialize: (value) => encodeURIComponent(JSON.stringify(value)),
    },
  );

  const open = (data: ModalConfig) => {
    setActiveModal({
      component: data.component,
      props: data.props,
    });
    setIsOpen(true);
  };

  const close = () => {
    setActiveModal({
      component: null,
      props: null,
    });
    setIsOpen(false);
  };

  return {
    open,
    close,
    isOpen,
    activeModal,
    setIsOpen,
  };
};
