//Submodule :Greeter Domain
import { NgModule } from '@angular/core';
import { HelloComponent, HaiComponent } from './';
import { HelloService } from './services/hello.service';

@NgModule({
    declarations: [HelloComponent, HaiComponent],
    imports: [],
    providers: [HelloService],
    //sharing objects across the modules
    exports: [HelloComponent, HaiComponent]
})
export class GreeterModule { }