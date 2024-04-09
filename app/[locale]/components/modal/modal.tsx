"use client";
import { useState } from "react";
import {
  ModalContent,
  Modal,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";
import { speakers } from "../../data/speakers";
import "./modal.css";

export default function ModalSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [speakerData, setSpeakerData] = useState<number>(0);

  const handleModal = (index: number) => {
    setSpeakerData(index);
    onOpen();
  };

  return (
    <>
      <div className="cont-img-speakers">
        {speakers.map((speaker, i) => (
          <div
            key={i}
            className="card-speakers-page"
            onClick={() => handleModal(i)}
          >
            <Image
              src={speaker.img}
              alt={speaker.name}
              width={800}
              height={1182}
            />
            <p>Rol (Speaker)</p>
            <p>{speaker.name}</p>
            <p>Profession</p>
          </div>
        ))}
      </div>
      <Modal size="4xl" backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <div className="modal-content">
              < div className="modal-img">
                <Image
                  src={speakers[speakerData].img}
                  alt={speakers[speakerData].name}
                  width={800}
                  height={1182}
                />
              </div>
              <div className="modal-text">
                <ModalHeader className="flex flex-col gap-1">
                  {speakers[speakerData].name}
                </ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Seria bueno incluir iconos con links a sus redes sociales
                  </p>
                  
                </ModalBody>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
