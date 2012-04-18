// Protocast - F1LT3R

// Merges properties onto an object
var merge = function merge( props ){
  for( var prop in props ){
    this[prop] = props[prop];
  }
};


// Creates a Class based on Type
var create = function create( kind, parent ){

  var protoclass;

  // Create the Class based on the Type's Constructor else use an Anon. Func.
  if( kind.ctor ){
    protoclass = kind.ctor;
  } else {
    protoclass = function(){};
  }

  // Inherit from a parent object
  if( parent ){
    protoclass.prototype = new parent();
  }

  // Merge prototype from Class's Type
  if( kind.proto ){
    merge.call( protoclass.prototype, kind.proto );
  }

  return protoclass;
};


// Creates a new Instance of a created Class
var New = function New( obj, props, args ){
  var instance = new obj( args );

  // Merge props object (for settings etc)
  if( props ){
    merge.call( instance, props );
  }

  return instance;
};


/*
  Classes = {

    Person: {
        proto: {
          c: 3
        }
      , ctor: function Child( str ){
          this.arbitraryString = str;
          return this;
        }

    }
  };

  person = create( Classes.Person );

  somebody = New(person, {name: 'John'}, ['Hello']);

  console.log( somebody );

*/
