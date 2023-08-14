import { Component, OnInit  } from '@angular/core';

import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-root', 
  template: `
    <div class="sample">
      <h2>Sample 11: Add Custom Button</h2>
      <div [froalaEditor]="options" [(froalaModel)]="content"></div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  public content: string = '<p>Your initial content here...</p>';

  ngOnInit() {

    (FroalaEditor as any).DefineIcon('alert', { NAME: 'info', template: 'font_awesome' });
    (FroalaEditor as any).RegisterCommand('alert', {
      title: 'Hello',
      icon: 'info',
      undo: false,
      focus: false,
      showOnMobile: true,
      refreshAfterCallback: false,
      callback: () => {
        alert('Hello!');
      },
    });
  }
  

  public options: Object = {
    toolbarButtons: ['bold', 'italic', 'underline', 'alert'],
    // ...
  };
}


// This is the code that doesnt Worker
// // Import Froala Editor.
// import FroalaEditor from 'froala-editor';

// // We will make usage of the Init hook and make the implementation there.
// import { Component, OnInit  } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   template: `<div class="sample">
//                <h2>Sample 11: Add Custom Button</h2>
//                <div [froalaEditor]="options" [(froalaModel)]="content" ></div>
//              </div>`,


// export class AppComponent implements OnInit{

//   ngOnInit () {
//     FroalaEditor.DefineIcon('alert', {NAME: 'info'});
//     FroalaEditor.RegisterCommand('alert', {
//       title: 'Hello',
//       focus: false,
//       undo: false,
//       refreshAfterCallback: false,

//       callback: () => {
//         alert('Hello!', this);
//       }
//     });
//   }

//   public options: Object = {
//     charCounterCount: true,
//     toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
//     toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
//     toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
//     toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
//   };
// }
