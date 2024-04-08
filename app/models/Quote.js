



export class Quote {
  constructor(data) {
    this.body = data.content        // object.string
    this.author = data.author         // object.string
    this.tags = data.tags         // object.array
  }

  get quoteDisplay() {
    return `
    <div class="w-auto mt-4">
    <h4 class="text-shadow secret-hover fw-light mb-0 text-center"><span><i role="button" class="me-4 opacity-75 text-white mdi mdi-refresh" onclick="app.QuotesController.getQuote()"></i></span>${this.body}</h4>
    <p class="text-shadow reveal mt-0 text-center fw-light">— ${this.author}</p>
    </div>
    `
  }


}




// {
//   "quote": {
//     "body": {
//       "maxLength": 500
//     },
//     "author": {
//       "maxLength": 500
//     },
//     "tags": [
//       {
//         "maxLength": 500
//       }
//     ]
//   },
//   "description": {
//     "type": "String",
//     "required": true
//   }
// }