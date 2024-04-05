



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
    <h4 class=" text-center fw-bold text-secondary">${this.body}</h4>
    <p class="text-end text-secondary fw-light">— ${this.author}</p>
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