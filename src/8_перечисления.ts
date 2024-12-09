enum ModalStatus {
    Opened,
    Closed
}

function buildModal(text: string, status: ModalStatus) {
    return {
        text,
        status
    }
}

// Решение учителя
// enum ModalStatus {
//     Opened,
//     Closed,
// }
  
// function buildModal(text: string, status: ModalStatus): { text: string; status: ModalStatus } {
//     return {
//       text,
//       status,
//     };
// }

export { ModalStatus };
export default buildModal;