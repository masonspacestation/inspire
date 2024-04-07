



export class Quote {
  constructor(data) {
    // this.quote = data.quote         // object
    // this.body = data.content        // object.string
    // this.author = data.author         // object.string
    // this.tags = data.tags         // object.array
    // this.description = data.description         // string

    // this.quote = data.quote         // object ---this could come back?
    this.body = data.content        // object.string
    this.author = data.author         // object.string
    this.tags = data.tags         // object.array
    // this.description = data.description         // string
  }

  get quoteDisplay() {
    return `
    <div class="w-auto mt-4">
    <h3 class="secret-hover mb-0 text-center"><span><i role="button" class="fs-5 me-4 opacity-75 text-white mdi mdi-refresh" onclick="app.QuotesController.getQuote()"></i></span>${this.body}</h3>
    <p class="reveal mt-0 text-center fw-light">— ${this.author}</p>
    </div>
    `
  }

  // <div class="w-auto">
  // <h3 class=" text-center"><span><i role="button" class="fs-5 me-4 opacity-75 text-white mdi mdi-refresh" onclick="app.QuotesController.getQuote()"></i></span>${this.body}</h3>
  // <p class="text-end fw-light">— ${this.author}</p>
  // </div>


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