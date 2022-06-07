import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from '@angular/core';

class HideAfterContext{
  // Propertie names should match the names of inputs i.e. hideAfter, hideAfterThen
  hideAfter = 0;
  counter = 0;
};

@Directive({
  selector: '[hideAfter]'
})
// To render the template we use one of the Angular life cycle hooks 
export class HideAfterDirective implements OnInit {
  

  // Values are provided to directive via Inputs
  // @Input('hideAfter') delay = 0; syntax without context
  @Input('hideAfter') 
   set delay(value : number | null) {
    this._delay = value ?? 0;
    this.context.hideAfter = this._delay / 1000; 
    this.context.counter = this.context.hideAfter;
  }
  private _delay: number = 0;

  // Rendering some other templete 
  // Naming notation is --> directiveSelector + keyword, i.e. hideAfterThen
  // @Input('hideAfterThen') placeholder : TemplateRef<any> | null = null;

  // When using strict directives we pass context class instead of any
  @Input('hideAfterThen') placeholder : TemplateRef<HideAfterContext> | null = null;

  // Context class serves as container for variables that can be used for 'as' keyword
  private context : HideAfterContext = new HideAfterContext();

  // ViewContainerRef determines where the content will be inject
  // TemplateRef determines template that will be renderd
  constructor(private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<HideAfterContext>) { }


  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template, this.context);

    const intervalCounter = setInterval(() => {
      this.context.counter--;
    }, 1000);

    setTimeout(()=> {
      this.viewContainerRef.clear();

      // Rendering other templete
      if (this.placeholder) {
        this.viewContainerRef.createEmbeddedView(this.placeholder);
      }

      clearInterval(intervalCounter);
    }, this._delay)
  }

  // Type predicate in typescript
  static ngTemplateContextGuard(dir: HideAfterDirective, context : unknown) : context is HideAfterContext{
    return true;
  }
}
