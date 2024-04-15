import { Modal, ModalBody, ModalContent } from "@nextui-org/modal";
import Form from "../form/form";
import { useTranslations } from "next-intl";
import './modal.css';

type ModalTypes = {
  isOpen: boolean,
  onClose: ()=>void
}

const ModalSponsor = ({isOpen, onClose}:ModalTypes) => {

  const t = useTranslations("form");
  return(
    <>
    <Modal 
        backdrop="blur"
        size="4xl" 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            < div className="modal-form">
              
              <ModalBody>
                <Form to="sponsor"/>
              </ModalBody>
              <div className="modal-body">
                <p className="sponsor-title">{t("sponsorTitle")}</p>
                <p className="sponsor-body">{t("sponsorBody")}</p>
              </div>
            </div>
            
          )}
        </ModalContent>
      </Modal>
      </>
  )
}

export default ModalSponsor;