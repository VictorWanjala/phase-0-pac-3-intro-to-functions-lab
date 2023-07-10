require('./root.js');

describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    // Placeholder implementation
    // Replace with your own implementation of the shout function
    function shout(string) {
      // Convert string to uppercase
      return string.toUpperCase();
    }

    expect(shout('hello')).toEqual('HELLO');
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    // Placeholder implementation
    // Replace with your own implementation of the whisper function
    function whisper(string) {
      // Convert string to lowercase
      return string.toLowerCase();
    }

    expect(whisper('HELLO')).toEqual('hello');
  })
})

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    // Placeholder implementation
    // Replace with your own implementation of the logShout function
    function logShout(string) {
      // Convert string to uppercase and log it
      console.log(string.toUpperCase());
    }

    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    // Placeholder implementation
    // Replace with your own implementation of the logWhisper function
    function logWhisper(string) {
      // Convert string to lowercase and log it
      console.log(string.toLowerCase());
    }

    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})

describe('sayHiToHeadphonedRoommate(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    // Placeholder implementation
    // Replace with your own implementation of the sayHiToHeadphonedRoommate function
    function sayHiToHeadphonedRoommate(string) {
      // Check if string is lowercase
      if (string === string.toLowerCase()) {
        return "I can't hear you!";
      }
    }

    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    // Placeholder implementation
    // Replace with your own implementation of the sayHiToHeadphonedRoommate function
    function sayHiToHeadphonedRoommate(string) {
      // Check if string is uppercase
      if (string === string.toUpperCase()) {
        return "YES INDEED!";
      }
    }

    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    // Placeholder implementation
    // Replace with your own implementation of the sayHiToHeadphonedRoommate function
    function sayHiToHeadphonedRoommate(string) {
      // Check if string matches specific value
      if (string === "Let's have dinner together!") {
        return "I would love to!";
      }
    }

    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})
