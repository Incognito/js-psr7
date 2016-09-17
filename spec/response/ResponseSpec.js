describe("Response", function() {
  var Opather = require('../../lib/response');

  describe("Public Api", function() {

    describe("Opather chain", function() {
      it("should return an instance", function() {
        var opatherInstance = Opather()
        expect(opatherInstance).toBeDefined(Opather);
      });
    });
  });
});
