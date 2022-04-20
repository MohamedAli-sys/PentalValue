import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ToastersService {
  constructor() {}

  confirmMessage() {
    return Swal.fire({
      text: `Are you sure want to delete this ads ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Sure',
    });
  }

  boxMessage(processMsg: string, icons) {
    return Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    }).fire({
      icon: icons,
      title: `${processMsg}`,
    });
  }

  boxRefuseReason(title) {
    return Swal.fire({
      title: title,
      input: 'text',
      inputValidator: (result) =>
        result.length !== 6 && 'You should enter code from 6 digits !',
      inputAttributes: {
        autocapitalize: 'off',
      },
      backdrop: false,
      showCancelButton: false,
      confirmButtonText: 'Send',
      showLoaderOnConfirm: true,
      icon: 'info',
      preConfirm: (login) => {},
      allowEnterKey: true,
    });
  }
}
