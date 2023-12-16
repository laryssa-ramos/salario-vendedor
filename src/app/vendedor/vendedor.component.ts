import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VendedorService } from '../services/vendedor.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss']
})
export class VendedorComponent {
  vendForm: FormGroup;
  comissao: number | any;
  salarioTotal: number | any;

  constructor(private _fb: FormBuilder, private _vendService: VendedorService, private _dialogRef: DialogRef<VendedorComponent>){
    this.vendForm = this._fb.group({
      nome: '',
      salarioFixo: '',
      totalVendas: '',

    })

  }

  salarioFinal(){

    const salarioFixo = this.vendForm.get('salarioFixo')?.value;
    const totalVendas = this.vendForm.get('totalVendas')?.value;

    this.comissao = totalVendas * (15/100);
    this.salarioTotal = salarioFixo + this.comissao;

    console.log(this.salarioTotal)
  }

  onFormSubmit(){
    if(this.vendForm.valid){
      this._vendService.addVendedor(this.vendForm.value).subscribe({
        next: (val: any) => {
          alert('Vendedor adicionado com sucesso!');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }

}
