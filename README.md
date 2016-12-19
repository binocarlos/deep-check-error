# deep-check-error

Run [deep-check](https://github.com/binocarlos/deep-check) and throw and Error for missing properties

## install

```bash
$ npm install deep-check-error
```

## usage

```javascript
var deepCheckError = require('deep-check-error')
var data = {
  fruit:{
    citrus:{
      lemons:10,
      oranges:12
    }
  },
  orders:{
    settings:{
      id:12
    }
  }
}

var schema = {
  fruit:{
    citrus:{
      lemons:true,
      weight:true
    }
  },
  orders:{
    settings:true,
    history:true
  }
}

deepCheckError(data, schema, 'required settings are missing: ')

// throws new Error('required settings are missing: fruit.citrus.weight, orders.history']
```

## license

MIT