import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmailCheckDirective} from './email-check.directive';
import {PasswordCheckDirective} from './password-check.directive';
import {NameCheckDirective} from './name-check.directive';
import {UrlCheckDirective} from './url-check.directive';
import {PreventMultiClickDirective} from './prevent-multi-click.directive';
import {LazScrollDirective} from './laz-scroll.directive';
import {TrimDirective} from './trim.directive';

@NgModule({
  declarations: [EmailCheckDirective, PasswordCheckDirective, NameCheckDirective,
    UrlCheckDirective, PreventMultiClickDirective, LazScrollDirective, TrimDirective],
  imports: [ CommonModule ],
  exports: [EmailCheckDirective, PasswordCheckDirective, NameCheckDirective,
    UrlCheckDirective, PreventMultiClickDirective, LazScrollDirective, TrimDirective]
})
export class DirectivesModule {
}
