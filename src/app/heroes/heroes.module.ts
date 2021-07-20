import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Componentes del modulo
    declarations: [
        HeroComponent,
        ListadoComponent
    ] ,
    //Componentes con que deseamos que sean publicos para toda la aplicacion
    exports: [
        ListadoComponent
    ] ,
    //Importacion de Modulos
    imports: [
        //Ofrece el acceso a directivas de Angular
        CommonModule
    ]
})
export class HeroesModule {

}