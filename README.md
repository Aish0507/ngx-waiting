[![Support](https://img.shields.io/badge/Angular-9+-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()
[![devDependency Status](https://img.shields.io/david/expressjs/express.svg?style=flat-square)]()

Angular version 9.

 | Angular 9
 ----------- 
| >=`v9.0.1`

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome |
| --------- | --------- |
| IE11, Edge| last 2 versions                                                                                                                                                                                                  |



## Demo

[Show Case](https://aish0507.github.io/ngx-waiting/)


## Installation

`ngx-waiting` is available via [npm](https://www.npmjs.com/package/ngx-waiting)

Using npm:

```bash
$ npm install ngx-waiting --save
```

## Usage

Import `NgxWaitingModule` in in the root module(`AppModule`):

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { NgxWaitingModule } from "ngx-waiting";

@NgModule({
  imports: [
    // ...
    NgxWaitingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

Add `NgxWaitingService` service wherever you want to use the `ngx-waiting`.

```typescript
import { NgxWaitingService } from "ngx-waiting";

class AppComponent implements OnInit {
  constructor(private waiting: NgxWaitingService) {}

  ngOnInit() {
    /** waiting starts on init */
    this.waiting.show();

    setTimeout(() => {
      /** waiting ends after 5 seconds */
      this.waiting.hide();
    }, 5000);
  }
}
```

Now use in your template

```html
<ngx-waiting></ngx-waiting>
```
## Methods

- `NgxWaitingService.show()` Shows the waiting
- `NgxWaitingService.hide()` Hides the waiting

## Available Options

- **[bgColor]**: String. [#fff, red, blue etc...]()
- **[color]**: Any css color format.
  To set color of waiting, default `#fff`
- **[type]**: Waiting type from [Load Awesome](http://github.danielcardoso.net/load-awesome/animations.html) ex. `timer`.
- **[fullScreen]**: Boolean [`true` or `false`]
- **[name]**: Multiple waiting with in same presentation layer component

#### Using waiting Type
```html
<ngx-waiting
  bgColor="rgba(51,51,51,0.8)"
  [fullScreen]=false
  color="#fff"
  type="timer"
  name= "demo"
>
  <p>Loading...</p>
</ngx-waiting>
```

---







## Author

#### [Aishvarya Shrivastava](mailto:aishvarya0507@gmail.com)

- [@GitHub](https://github.com/Aish0507)




## Thanks to

[Load Awesome by Daniel Cardoso.](https://github.com/danielcardoso/load-awesome)

### License
ngx-waiting is [MIT licensed](./LICENSE).